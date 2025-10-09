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
  // AI-Powered Business Tools
  {
    id: 'ai-chatbot-builder',
    name: 'AI Chatbot Builder',
    description: 'Create intelligent chatbots for your website with no coding required. Advanced NLP and conversation management.',
    features: [
      'Drag-and-drop chatbot builder',
      'Multi-language support',
      'Integration with 50+ platforms',
      'Advanced analytics dashboard',
      'Custom training with your data',
      '24/7 customer support'
    ],
    pricing: {
      monthly: 99,
      yearly: 990,
      setup: 199
    },
    category: 'AI Tools',
    icon: '🤖',
    popular: true
  },
  {
    id: 'ai-content-generator',
    name: 'AI Content Generator Pro',
    description: 'Generate high-quality content for blogs, social media, emails, and marketing materials using advanced AI.',
    features: [
      '50+ content templates',
      'SEO optimization',
      'Brand voice training',
      'Multi-platform publishing',
      'Content calendar management',
      'Plagiarism detection'
    ],
    pricing: {
      monthly: 79,
      yearly: 790
    },
    category: 'Content Creation',
    icon: '✍️'
  },
  {
    id: 'ai-email-marketing',
    name: 'AI Email Marketing Suite',
    description: 'Automated email marketing with AI-powered personalization, subject line optimization, and send time optimization.',
    features: [
      'AI-powered personalization',
      'Subject line optimization',
      'Send time optimization',
      'A/B testing automation',
      'Advanced segmentation',
      'Deliverability monitoring'
    ],
    pricing: {
      monthly: 149,
      yearly: 1490
    },
    category: 'Marketing',
    icon: '📧'
  },
  {
    id: 'ai-social-media-manager',
    name: 'AI Social Media Manager',
    description: 'Automate your social media presence with AI-generated posts, optimal posting times, and engagement tracking.',
    features: [
      'AI-generated posts',
      'Optimal posting times',
      'Hashtag optimization',
      'Engagement tracking',
      'Multi-platform management',
      'Influencer identification'
    ],
    pricing: {
      monthly: 129,
      yearly: 1290
    },
    category: 'Social Media',
    icon: '📱'
  },
  {
    id: 'ai-customer-support',
    name: 'AI Customer Support Hub',
    description: 'Intelligent customer support system with ticket routing, sentiment analysis, and automated responses.',
    features: [
      'Intelligent ticket routing',
      'Sentiment analysis',
      'Automated responses',
      'Knowledge base integration',
      'Multi-channel support',
      'Performance analytics'
    ],
    pricing: {
      monthly: 199,
      yearly: 1990
    },
    category: 'Customer Support',
    icon: '🎧'
  },
  {
    id: 'ai-data-analytics',
    name: 'AI Data Analytics Platform',
    description: 'Transform your data into actionable insights with AI-powered analytics, predictive modeling, and automated reporting.',
    features: [
      'AI-powered insights',
      'Predictive modeling',
      'Automated reporting',
      'Data visualization',
      'Real-time dashboards',
      'Custom metrics tracking'
    ],
    pricing: {
      monthly: 299,
      yearly: 2990
    },
    category: 'Analytics',
    icon: '📊'
  },
  {
    id: 'ai-sales-automation',
    name: 'AI Sales Automation',
    description: 'Automate your sales process with AI-powered lead scoring, follow-up sequences, and deal prediction.',
    features: [
      'AI lead scoring',
      'Automated follow-ups',
      'Deal prediction',
      'CRM integration',
      'Sales forecasting',
      'Performance tracking'
    ],
    pricing: {
      monthly: 179,
      yearly: 1790
    },
    category: 'Sales',
    icon: '💰'
  },
  {
    id: 'ai-project-management',
    name: 'AI Project Manager',
    description: 'Intelligent project management with AI-powered task prioritization, resource allocation, and deadline prediction.',
    features: [
      'AI task prioritization',
      'Resource allocation',
      'Deadline prediction',
      'Risk assessment',
      'Team collaboration',
      'Progress tracking'
    ],
    pricing: {
      monthly: 159,
      yearly: 1590
    },
    category: 'Productivity',
    icon: '📋'
  },
  {
    id: 'ai-hr-management',
    name: 'AI HR Management Suite',
    description: 'Streamline HR processes with AI-powered resume screening, employee engagement tracking, and performance analytics.',
    features: [
      'AI resume screening',
      'Employee engagement tracking',
      'Performance analytics',
      'Recruitment automation',
      'Training recommendations',
      'Compliance monitoring'
    ],
    pricing: {
      monthly: 229,
      yearly: 2290
    },
    category: 'HR',
    icon: '👥'
  },
  {
    id: 'ai-inventory-management',
    name: 'AI Inventory Manager',
    description: 'Optimize your inventory with AI-powered demand forecasting, automated reordering, and supply chain optimization.',
    features: [
      'Demand forecasting',
      'Automated reordering',
      'Supply chain optimization',
      'Waste reduction',
      'Cost optimization',
      'Real-time tracking'
    ],
    pricing: {
      monthly: 189,
      yearly: 1890
    },
    category: 'Operations',
    icon: '📦'
  },
  {
    id: 'ai-financial-forecasting',
    name: 'AI Financial Forecaster',
    description: 'Predict financial trends and optimize cash flow with AI-powered forecasting and financial planning tools.',
    features: [
      'Financial forecasting',
      'Cash flow optimization',
      'Risk assessment',
      'Investment analysis',
      'Budget planning',
      'Compliance reporting'
    ],
    pricing: {
      monthly: 249,
      yearly: 2490
    },
    category: 'Finance',
    icon: '💹'
  },
  {
    id: 'ai-crm-optimizer',
    name: 'AI CRM Optimizer',
    description: 'Enhance your CRM with AI-powered customer insights, automated data entry, and intelligent lead nurturing.',
    features: [
      'Customer insights',
      'Automated data entry',
      'Lead nurturing',
      'Sales pipeline optimization',
      'Customer segmentation',
      'Churn prediction'
    ],
    pricing: {
      monthly: 169,
      yearly: 1690
    },
    category: 'CRM',
    icon: '📈'
  },
  {
    id: 'ai-seo-optimizer',
    name: 'AI SEO Optimizer',
    description: 'Boost your search rankings with AI-powered keyword research, content optimization, and technical SEO analysis.',
    features: [
      'Keyword research',
      'Content optimization',
      'Technical SEO analysis',
      'Competitor tracking',
      'Ranking monitoring',
      'Link building suggestions'
    ],
    pricing: {
      monthly: 119,
      yearly: 1190
    },
    category: 'SEO',
    icon: '🔍'
  },
  {
    id: 'ai-email-automation',
    name: 'AI Email Automation',
    description: 'Create sophisticated email automation workflows with AI-powered triggers, personalization, and optimization.',
    features: [
      'Smart triggers',
      'Advanced personalization',
      'Behavioral targeting',
      'A/B testing',
      'Performance optimization',
      'Deliverability monitoring'
    ],
    pricing: {
      monthly: 89,
      yearly: 890
    },
    category: 'Automation',
    icon: '⚡'
  },
  {
    id: 'ai-video-generator',
    name: 'AI Video Generator',
    description: 'Create professional videos with AI-powered editing, voice synthesis, and automated video production.',
    features: [
      'AI video editing',
      'Voice synthesis',
      'Automated production',
      'Template library',
      'Brand customization',
      'Multi-format export'
    ],
    pricing: {
      monthly: 199,
      yearly: 1990
    },
    category: 'Video',
    icon: '🎬'
  },
  {
    id: 'ai-web-scraper',
    name: 'AI Web Scraper Pro',
    description: 'Extract and analyze data from websites with AI-powered scraping, data cleaning, and intelligent parsing.',
    features: [
      'Intelligent scraping',
      'Data cleaning',
      'Smart parsing',
      'Anti-detection',
      'Scheduled scraping',
      'Data export options'
    ],
    pricing: {
      monthly: 139,
      yearly: 1390
    },
    category: 'Data Extraction',
    icon: '🕷️'
  },
  {
    id: 'ai-translation-service',
    name: 'AI Translation Service',
    description: 'Professional translation services powered by AI with support for 100+ languages and industry-specific terminology.',
    features: [
      '100+ languages',
      'Industry terminology',
      'Real-time translation',
      'Document processing',
      'Quality assurance',
      'API integration'
    ],
    pricing: {
      monthly: 79,
      yearly: 790
    },
    category: 'Translation',
    icon: '🌐'
  },
  {
    id: 'ai-code-generator',
    name: 'AI Code Generator',
    description: 'Generate code in multiple programming languages with AI-powered suggestions, debugging, and optimization.',
    features: [
      'Multi-language support',
      'Code suggestions',
      'Debugging assistance',
      'Code optimization',
      'Documentation generation',
      'Version control integration'
    ],
    pricing: {
      monthly: 149,
      yearly: 1490
    },
    category: 'Development',
    icon: '💻'
  },
  {
    id: 'ai-design-assistant',
    name: 'AI Design Assistant',
    description: 'Create stunning designs with AI-powered tools for logos, graphics, and marketing materials.',
    features: [
      'Logo generation',
      'Graphic design',
      'Marketing materials',
      'Brand consistency',
      'Template library',
      'High-resolution export'
    ],
    pricing: {
      monthly: 99,
      yearly: 990
    },
    category: 'Design',
    icon: '🎨'
  },
  {
    id: 'ai-voice-assistant',
    name: 'AI Voice Assistant',
    description: 'Build custom voice assistants for your business with natural language processing and voice recognition.',
    features: [
      'Voice recognition',
      'Natural language processing',
      'Custom commands',
      'Multi-language support',
      'Integration APIs',
      'Analytics dashboard'
    ],
    pricing: {
      monthly: 179,
      yearly: 1790
    },
    category: 'Voice AI',
    icon: '🎤'
  }
];

const categories = [
  'All',
  'AI Tools',
  'Content Creation',
  'Marketing',
  'Social Media',
  'Customer Support',
  'Analytics',
  'Sales',
  'Productivity',
  'HR',
  'Operations',
  'Finance',
  'CRM',
  'SEO',
  'Automation',
  'Video',
  'Data Extraction',
  'Translation',
  'Development',
  'Design',
  'Voice AI'
];

export default function MicroSAASPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const filteredServices = microSAASServices.filter(service => {
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    }).format(price);
  };

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      <Navigation />
      
      <main className="relative z-10 py-20 px-4">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text cyber-text">
            Micro SAAS Solutions
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium cyber-glow">
            Powerful AI-Driven Tools for Modern Businesses
          </p>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            Choose from 20+ ready-to-use AI-powered micro SAAS applications. 
            Transform your business operations with cutting-edge technology at affordable prices.
          </p>
          
          {/* Contact Info */}
          <div className="bg-black/30 backdrop-blur-lg rounded-lg p-6 max-w-2xl mx-auto mb-12 border border-cyan-400/30">
            <h3 className="text-xl font-bold text-white mb-4">Ready to Get Started?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="flex items-center justify-center">
                <span className="text-cyan-400 mr-2">📞</span>
                <a href="tel:+13024640950" className="text-white hover:text-cyan-400 transition-colors">
                  +1 (302) 464-0950
                </a>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-cyan-400 mr-2">✉️</span>
                <a href="mailto:kleber@ziontechgroup.com" className="text-white hover:text-cyan-400 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="mb-12">
          <div className="max-w-4xl mx-auto">
            {/* Search Bar */}
            <div className="mb-8">
              <input
                type="text"
                placeholder="Search micro SAAS services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 bg-black/30 border border-cyan-400/30 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 backdrop-blur-lg"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-cyan-400 text-black font-bold'
                      : 'bg-black/30 text-white border border-cyan-400/30 hover:border-cyan-400 hover:bg-cyan-400/10'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className={`futuristic-card p-6 rounded-lg relative ${
                  service.popular ? 'ring-2 ring-cyan-400' : ''
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-cyan-400 text-black px-4 py-1 rounded-full text-sm font-bold">
                      POPULAR
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-4">
                  <div className="text-4xl mb-3">{service.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                  <span className="text-sm text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-full">
                    {service.category}
                  </span>
                </div>

                <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                  {service.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                  <ul className="text-sm text-gray-400 space-y-1">
                    {service.features.slice(0, 4).map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <span className="text-cyan-400 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                    {service.features.length > 4 && (
                      <li className="text-cyan-400 text-xs">
                        +{service.features.length - 4} more features
                      </li>
                    )}
                  </ul>
                </div>

                <div className="border-t border-gray-700 pt-4">
                  <div className="text-center mb-4">
                    <div className="text-2xl font-bold text-cyan-400 mb-1">
                      {formatPrice(service.pricing.monthly)}/month
                    </div>
                    <div className="text-sm text-gray-400">
                      or {formatPrice(service.pricing.yearly)}/year (Save 17%)
                    </div>
                    {service.pricing.setup && (
                      <div className="text-xs text-gray-500 mt-1">
                        + {formatPrice(service.pricing.setup)} setup fee
                      </div>
                    )}
                  </div>

                  <div className="space-y-2">
                    <a
                      href={`tel:+13024640950`}
                      className="w-full bg-cyan-400 text-black py-3 px-4 rounded-lg font-bold text-center block hover:bg-cyan-300 transition-colors"
                    >
                      Get Started Now
                    </a>
                    <a
                      href={`mailto:kleber@ziontechgroup.com?subject=Inquiry about ${service.name}`}
                      className="w-full border border-cyan-400 text-cyan-400 py-3 px-4 rounded-lg font-bold text-center block hover:bg-cyan-400 hover:text-black transition-colors"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center mt-20">
          <div className="bg-black/30 backdrop-blur-lg rounded-lg p-8 max-w-4xl mx-auto border border-cyan-400/30">
            <h2 className="text-3xl font-bold text-white mb-4">Need a Custom Solution?</h2>
            <p className="text-gray-300 mb-8 text-lg">
              We can create a custom micro SAAS solution tailored to your specific business needs. 
              Get a personalized quote and see how we can transform your operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="cyber-button px-8 py-4 text-lg"
              >
                Call Now: (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-bold hover:bg-cyan-400 hover:text-black transition-all duration-300"
              >
                Email Us
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