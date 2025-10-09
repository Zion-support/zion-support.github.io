'use client';

import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

interface MicroSAASService {
  id: string;
  name: string;
  description: string;
  features: string[];
  pricing: {
    monthly: number;
    yearly: number;
    setup?: number;
  };
  category: string;
  icon: string;
  popular?: boolean;
  comingSoon?: boolean;
}

const microSAASServices: MicroSAASService[] = [
  // AI-Powered Tools
  {
    id: 'ai-content-writer',
    name: 'AI Content Writer Pro',
    description: 'Advanced AI-powered content creation tool that generates high-quality blog posts, articles, and marketing copy.',
    features: [
      'GPT-4 powered content generation',
      'SEO optimization suggestions',
      'Multiple content formats (blog, social, email)',
      'Brand voice customization',
      'Plagiarism detection',
      'Content calendar integration',
      'Multi-language support',
      'Team collaboration tools'
    ],
    pricing: { monthly: 49, yearly: 490, setup: 0 },
    category: 'AI Tools',
    icon: '✍️',
    popular: true
  },
  {
    id: 'ai-chatbot-builder',
    name: 'AI Chatbot Builder',
    description: 'Create intelligent chatbots for customer support, sales, and lead generation without coding.',
    features: [
      'Drag-and-drop chatbot builder',
      'Natural language processing',
      'Multi-channel deployment',
      'Analytics and insights',
      'Custom integrations',
      'Voice and text support',
      'A/B testing capabilities',
      '24/7 customer support'
    ],
    pricing: { monthly: 79, yearly: 790, setup: 99 },
    category: 'AI Tools',
    icon: '🤖'
  },
  {
    id: 'ai-image-generator',
    name: 'AI Image Generator',
    description: 'Generate stunning images, logos, and graphics using advanced AI technology.',
    features: [
      'DALL-E 3 integration',
      'Custom style training',
      'High-resolution output',
      'Batch processing',
      'Commercial license included',
      'API access',
      'Brand consistency tools',
      'Stock photo replacement'
    ],
    pricing: { monthly: 39, yearly: 390, setup: 0 },
    category: 'AI Tools',
    icon: '🎨'
  },

  // Business Automation
  {
    id: 'workflow-automation',
    name: 'Workflow Automation Hub',
    description: 'Automate repetitive business processes with visual workflow builder and 1000+ integrations.',
    features: [
      'Visual workflow designer',
      '1000+ app integrations',
      'Conditional logic',
      'Scheduled triggers',
      'Error handling',
      'Performance monitoring',
      'Team collaboration',
      'Custom webhooks'
    ],
    pricing: { monthly: 99, yearly: 990, setup: 199 },
    category: 'Automation',
    icon: '⚙️',
    popular: true
  },
  {
    id: 'email-marketing-ai',
    name: 'AI Email Marketing Suite',
    description: 'Intelligent email marketing platform with AI-powered personalization and automation.',
    features: [
      'AI-powered subject line optimization',
      'Dynamic content personalization',
      'Send time optimization',
      'A/B testing automation',
      'Advanced segmentation',
      'Deliverability monitoring',
      'Revenue attribution',
      'Unlimited sends'
    ],
    pricing: { monthly: 59, yearly: 590, setup: 0 },
    category: 'Marketing',
    icon: '📧'
  },
  {
    id: 'social-media-scheduler',
    name: 'Social Media AI Scheduler',
    description: 'AI-powered social media management with optimal posting times and content suggestions.',
    features: [
      'AI-optimized posting schedule',
      'Content suggestion engine',
      'Multi-platform management',
      'Hashtag optimization',
      'Engagement analytics',
      'Competitor analysis',
      'Influencer collaboration tools',
      'White-label options'
    ],
    pricing: { monthly: 29, yearly: 290, setup: 0 },
    category: 'Marketing',
    icon: '📱'
  },

  // Data & Analytics
  {
    id: 'business-intelligence-ai',
    name: 'AI Business Intelligence',
    description: 'Transform your data into actionable insights with AI-powered analytics and reporting.',
    features: [
      'Natural language queries',
      'Automated report generation',
      'Predictive analytics',
      'Real-time dashboards',
      'Data visualization',
      'Anomaly detection',
      'Custom KPI tracking',
      'API integrations'
    ],
    pricing: { monthly: 149, yearly: 1490, setup: 299 },
    category: 'Analytics',
    icon: '📊',
    popular: true
  },
  {
    id: 'customer-insights-ai',
    name: 'AI Customer Insights',
    description: 'Understand your customers better with AI-powered sentiment analysis and behavior prediction.',
    features: [
      'Sentiment analysis',
      'Customer journey mapping',
      'Churn prediction',
      'Lifetime value calculation',
      'Segmentation automation',
      'Feedback analysis',
      'Competitive intelligence',
      'ROI tracking'
    ],
    pricing: { monthly: 89, yearly: 890, setup: 149 },
    category: 'Analytics',
    icon: '👥'
  },

  // Productivity Tools
  {
    id: 'ai-meeting-assistant',
    name: 'AI Meeting Assistant',
    description: 'Record, transcribe, and analyze meetings with AI-powered insights and action items.',
    features: [
      'Real-time transcription',
      'Meeting summaries',
      'Action item extraction',
      'Speaker identification',
      'Sentiment analysis',
      'Integration with calendars',
      'Searchable recordings',
      'Team collaboration'
    ],
    pricing: { monthly: 39, yearly: 390, setup: 0 },
    category: 'Productivity',
    icon: '🎤'
  },
  {
    id: 'ai-project-manager',
    name: 'AI Project Manager',
    description: 'Intelligent project management with AI-powered task prioritization and resource allocation.',
    features: [
      'AI task prioritization',
      'Resource optimization',
      'Risk prediction',
      'Timeline forecasting',
      'Team workload balancing',
      'Progress tracking',
      'Stakeholder communication',
      'Integration ecosystem'
    ],
    pricing: { monthly: 69, yearly: 690, setup: 99 },
    category: 'Productivity',
    icon: '📋'
  },

  // E-commerce & Sales
  {
    id: 'ai-ecommerce-optimizer',
    name: 'AI E-commerce Optimizer',
    description: 'Boost your online store performance with AI-powered product recommendations and pricing optimization.',
    features: [
      'Dynamic pricing optimization',
      'Product recommendation engine',
      'Inventory forecasting',
      'Customer behavior analysis',
      'A/B testing automation',
      'Conversion rate optimization',
      'Fraud detection',
      'Multi-channel sync'
    ],
    pricing: { monthly: 199, yearly: 1990, setup: 399 },
    category: 'E-commerce',
    icon: '🛒',
    popular: true
  },
  {
    id: 'ai-sales-predictor',
    name: 'AI Sales Predictor',
    description: 'Predict sales outcomes and optimize your sales process with AI-powered forecasting.',
    features: [
      'Sales forecasting',
      'Lead scoring',
      'Deal probability calculation',
      'Pipeline optimization',
      'Performance analytics',
      'Territory planning',
      'Commission tracking',
      'CRM integration'
    ],
    pricing: { monthly: 79, yearly: 790, setup: 149 },
    category: 'Sales',
    icon: '📈'
  },

  // Security & Compliance
  {
    id: 'ai-security-monitor',
    name: 'AI Security Monitor',
    description: 'Protect your business with AI-powered threat detection and security monitoring.',
    features: [
      'Real-time threat detection',
      'Anomaly identification',
      'Automated incident response',
      'Compliance monitoring',
      'Vulnerability scanning',
      'Security reporting',
      'Team notifications',
      'Integration with security tools'
    ],
    pricing: { monthly: 129, yearly: 1290, setup: 299 },
    category: 'Security',
    icon: '🔒'
  },

  // HR & Recruitment
  {
    id: 'ai-recruitment-assistant',
    name: 'AI Recruitment Assistant',
    description: 'Streamline your hiring process with AI-powered candidate screening and interview scheduling.',
    features: [
      'Resume screening',
      'Candidate matching',
      'Interview scheduling',
      'Skill assessment',
      'Background check integration',
      'Diversity analytics',
      'Onboarding automation',
      'Performance tracking'
    ],
    pricing: { monthly: 99, yearly: 990, setup: 199 },
    category: 'HR',
    icon: '👔'
  },

  // Financial Tools
  {
    id: 'ai-expense-tracker',
    name: 'AI Expense Tracker',
    description: 'Automate expense tracking and financial reporting with AI-powered categorization and insights.',
    features: [
      'Receipt scanning',
      'Automatic categorization',
      'Expense approval workflows',
      'Budget monitoring',
      'Tax preparation',
      'Multi-currency support',
      'Team management',
      'Financial reporting'
    ],
    pricing: { monthly: 49, yearly: 490, setup: 0 },
    category: 'Finance',
    icon: '💰'
  },

  // Development Tools
  {
    id: 'ai-code-assistant',
    name: 'AI Code Assistant',
    description: 'Accelerate development with AI-powered code generation, review, and optimization.',
    features: [
      'Code generation',
      'Bug detection',
      'Performance optimization',
      'Code review automation',
      'Documentation generation',
      'Test case creation',
      'Security scanning',
      'Multi-language support'
    ],
    pricing: { monthly: 89, yearly: 890, setup: 99 },
    category: 'Development',
    icon: '💻'
  },

  // Coming Soon Services
  {
    id: 'ai-voice-assistant',
    name: 'AI Voice Assistant Builder',
    description: 'Create custom voice assistants for your business with natural language processing.',
    features: [
      'Custom voice training',
      'Multi-language support',
      'Integration APIs',
      'Analytics dashboard',
      'Custom wake words',
      'Offline capabilities',
      'Team management',
      'White-label options'
    ],
    pricing: { monthly: 149, yearly: 1490, setup: 299 },
    category: 'AI Tools',
    icon: '🎙️',
    comingSoon: true
  },
  {
    id: 'ai-video-generator',
    name: 'AI Video Generator',
    description: 'Create professional videos from text prompts with AI-powered video generation.',
    features: [
      'Text-to-video generation',
      'Multiple video styles',
      'Voice synthesis',
      'Background music',
      'Subtitle generation',
      'Brand customization',
      'Batch processing',
      'HD export options'
    ],
    pricing: { monthly: 199, yearly: 1990, setup: 399 },
    category: 'AI Tools',
    icon: '🎬',
    comingSoon: true
  }
];

const categories = [
  'All',
  'AI Tools',
  'Automation',
  'Marketing',
  'Analytics',
  'Productivity',
  'E-commerce',
  'Sales',
  'Security',
  'HR',
  'Finance',
  'Development'
];

export default function MicroSAASPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredServices, setFilteredServices] = useState(microSAASServices);

  useEffect(() => {
    let filtered = microSAASServices;
    
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(service => service.category === selectedCategory);
    }
    
    if (searchTerm) {
      filtered = filtered.filter(service => 
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.features.some(feature => feature.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    
    setFilteredServices(filtered);
  }, [selectedCategory, searchTerm]);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      <Navigation />
      
      <main className="relative z-10 pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 text-center">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text cyber-text">
              Micro SAAS Solutions
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium cyber-glow">
              Powerful AI-driven tools for modern businesses
            </p>
            <p className="text-base sm:text-lg text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              Choose from 50+ ready-to-use micro SAAS applications designed to streamline your business operations. 
              Each tool is powered by cutting-edge AI technology and comes with comprehensive support.
            </p>
            
            {/* Search and Filter */}
            <div className="max-w-4xl mx-auto mb-12">
              <div className="relative mb-8">
                <input
                  type="text"
                  placeholder="Search micro SAAS tools..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-6 py-4 bg-slate-800/50 border border-cyan-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 backdrop-blur-sm"
                />
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-cyan-400">
                  🔍
                </div>
              </div>
              
              <div className="flex flex-wrap justify-center gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-cyan-400 text-slate-900 font-semibold'
                        : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 hover:text-white'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <div
                  key={service.id}
                  className={`cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300 ${
                    service.popular ? 'ring-2 ring-cyan-400' : ''
                  } ${service.comingSoon ? 'opacity-75' : ''}`}
                >
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-cyan-400 text-slate-900 px-3 py-1 rounded-full text-sm font-semibold">
                        Popular
                      </span>
                    </div>
                  )}
                  
                  {service.comingSoon && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-purple-400 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Coming Soon
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <div className="text-5xl mb-4">{service.icon}</div>
                    <h3 className="text-2xl font-bold text-white mb-2 neon-text">{service.name}</h3>
                    <p className="text-gray-300 text-sm">{service.category}</p>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 4).map((feature, index) => (
                        <li key={index} className="text-sm text-gray-400 flex items-center">
                          <span className="text-cyan-400 mr-2">✓</span>
                          {feature}
                        </li>
                      ))}
                      {service.features.length > 4 && (
                        <li className="text-sm text-cyan-400">
                          +{service.features.length - 4} more features
                        </li>
                      )}
                    </ul>
                  </div>
                  
                  <div className="border-t border-gray-700 pt-6">
                    <div className="text-center mb-4">
                      <div className="text-3xl font-bold text-cyan-400 mb-1">
                        {formatPrice(service.pricing.monthly)}
                        <span className="text-lg text-gray-400">/month</span>
                      </div>
                      <div className="text-sm text-gray-400">
                        or {formatPrice(service.pricing.yearly)}/year (save 17%)
                      </div>
                      {service.pricing.setup && service.pricing.setup > 0 && (
                        <div className="text-sm text-gray-400 mt-1">
                          + {formatPrice(service.pricing.setup)} setup fee
                        </div>
                      )}
                    </div>
                    
                    <div className="space-y-2">
                      <a
                        href={`/contact?service=${service.id}`}
                        className="w-full bg-cyan-400 text-slate-900 py-3 px-4 rounded-lg font-semibold hover:bg-cyan-300 transition-all duration-300 text-center block"
                      >
                        Get Started
                      </a>
                      <a
                        href={`/micro-saas/${service.id}`}
                        className="w-full border border-cyan-400 text-cyan-400 py-3 px-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 text-center block"
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {filteredServices.length === 0 && (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-4">No services found</h3>
                <p className="text-gray-300 mb-8">Try adjusting your search or filter criteria</p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('All');
                  }}
                  className="bg-cyan-400 text-slate-900 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-300 transition-all duration-300"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-slate-800/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
              Need a Custom Solution?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Don't see what you're looking for? We can create a custom micro SAAS solution tailored to your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-cyan-400 text-slate-900 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-300 transition-all duration-300"
              >
                Call: (302) 464-0950
              </a>
              <a
                href="/contact"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Request Custom Solution
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}