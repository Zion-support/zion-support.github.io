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

export default function MicroSaasPage() {
  const [activeTab, setActiveTab] = useState('overview');

  const microSaasServices = [
    {
      id: 1,
      name: 'AI Project Manager Pro',
      description: 'Intelligent project management with AI-powered insights and automation',
      price: '$99/month',
      features: [
        'AI Task Prioritization',
        'Automated Scheduling',
        'Resource Optimization',
        'Progress Tracking',
        'Team Collaboration',
        'Risk Assessment',
        'Performance Analytics',
        'Integration Hub'
      ],
      icon: BarChart3,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      category: 'Productivity',
      popular: true
    },
    {
      id: 2,
      name: 'AI Smart Calendar Pro',
      description: 'AI-powered calendar management with intelligent scheduling and optimization',
      price: '$59/month',
      features: [
        'Smart Scheduling',
        'Meeting Optimization',
        'Conflict Resolution',
        'Time Blocking',
        'Team Coordination',
        'Calendar Analytics',
        'Integration Support',
        'Mobile Sync'
      ],
      icon: Calendar,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      category: 'Productivity'
    },
    {
      id: 3,
      name: 'AI Voice Cloning Studio Pro',
      description: 'Professional voice cloning and synthesis for content creation',
      price: '$149/month',
      features: [
        'Voice Cloning',
        'Text-to-Speech',
        'Voice Customization',
        'Multi-Language Support',
        'Audio Processing',
        'Voice Analytics',
        'API Integration',
        'Commercial License'
      ],
      icon: Headphones,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      category: 'Creative'
    },
    {
      id: 4,
      name: 'AI Code Security Auditor Pro',
      description: 'Automated code security analysis and vulnerability detection',
      price: '$199/month',
      features: [
        'Security Scanning',
        'Vulnerability Detection',
        'Code Quality Analysis',
        'Compliance Checking',
        'Automated Fixes',
        'Security Reports',
        'CI/CD Integration',
        'Team Collaboration'
      ],
      icon: Shield,
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      category: 'Security'
    },
    {
      id: 5,
      name: 'AI Mental Health Companion Pro',
      description: 'AI-powered mental health support and wellness tracking',
      price: '$79/month',
      features: [
        'Mood Tracking',
        'Wellness Insights',
        'Meditation Guidance',
        'Stress Management',
        'Progress Monitoring',
        'Professional Resources',
        'Privacy Protection',
        '24/7 Support'
      ],
      icon: Heart,
      color: 'text-pink-600',
      bgColor: 'bg-pink-50',
      category: 'Health'
    },
    {
      id: 6,
      name: 'AI Smart Home Controller Pro',
      description: 'Intelligent home automation and IoT device management',
      price: '$99/month',
      features: [
        'Device Control',
        'Automation Rules',
        'Energy Optimization',
        'Security Monitoring',
        'Voice Commands',
        'Mobile App',
        'Integration Hub',
        'Analytics Dashboard'
      ],
      icon: Home,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      category: 'IoT'
    },
    {
      id: 7,
      name: 'AI Investment Portfolio Optimizer Pro',
      description: 'AI-powered investment analysis and portfolio optimization',
      price: '$199/month',
      features: [
        'Portfolio Analysis',
        'Risk Assessment',
        'Investment Recommendations',
        'Market Insights',
        'Performance Tracking',
        'Tax Optimization',
        'Real-time Alerts',
        'Professional Reports'
      ],
      icon: TrendingUp,
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50',
      category: 'Finance'
    },
    {
      id: 8,
      name: 'AI Language Learning Tutor Pro',
      description: 'Personalized language learning with AI-powered tutoring',
      price: '$69/month',
      features: [
        'Personalized Lessons',
        'Speech Recognition',
        'Progress Tracking',
        'Cultural Context',
        'Interactive Exercises',
        'Multi-Language Support',
        'Mobile Learning',
        'Certification Prep'
      ],
      icon: Globe,
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50',
      category: 'Education'
    },
    {
      id: 9,
      name: 'AI Fitness Coach Pro',
      description: 'Personalized fitness training and health monitoring',
      price: '$59/month',
      features: [
        'Workout Planning',
        'Form Analysis',
        'Progress Tracking',
        'Nutrition Guidance',
        'Goal Setting',
        'Wearable Integration',
        'Community Features',
        'Expert Support'
      ],
      icon: Activity,
      color: 'text-teal-600',
      bgColor: 'bg-teal-50',
      category: 'Health'
    }
  ];

  const categories = ['All', 'Productivity', 'Creative', 'Security', 'Health', 'IoT', 'Finance', 'Education'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <ScrollToTop />
      
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Micro SAAS Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Powerful, affordable AI-driven tools for modern businesses. 
              Choose from our comprehensive suite of specialized applications designed to boost productivity and efficiency.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === category.toLowerCase()
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
              onClick={() => setActiveTab(category.toLowerCase())}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {microSaasServices
            .filter(service => activeTab === 'all' || service.category.toLowerCase() === activeTab)
            .map((service) => (
            <div key={service.id} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 group">
              <div className="flex items-center justify-between mb-4">
                <div className="text-4xl">{service.icon}</div>
                {service.popular && (
                  <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Popular
                  </span>
                )}
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
              <p className="text-gray-300 mb-4">{service.description}</p>
              
              <div className="mb-6">
                <div className="text-3xl font-bold text-white mb-1">${service.pricing.monthly}</div>
                <div className="text-sm text-gray-400">per month</div>
              </div>
              
              <ul className="space-y-2 mb-6">
                {service.features.slice(0, 4).map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 group-hover:shadow-lg">
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default MicroSaasPage;
