import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, ArrowRight, ExternalLink, Play, Pause, RotateCcw } from 'lucide-react';
import '../styles/futuristic.css';

const MicroSAASPage: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Real Micro SAAS Services with actual functionality
  const microSAASServices = [
    // AI-Powered Developer Tools
    {
      id: 'ai-code-review',
      title: 'AI Code Review Assistant',
      description: 'Automated code analysis, bug detection, and security vulnerability scanning for developers.',
      icon: '🔍',
      price: '$89/month',
      originalPrice: '$150/month',
      features: [
        'Automated code review with 99.2% accuracy',
        'Security vulnerability detection (OWASP Top 10)',
        'Performance optimization suggestions',
        'Code quality metrics and scoring',
        'Git integration with PR comments',
        'Multi-language support (Python, JS, Java, C#, Go)',
        'Custom rule configuration',
        'Team collaboration tools'
      ],
      benefits: ['Reduce bugs by 70%', 'Improve code quality by 85%', 'Save 15+ hours/week on reviews'],
      marketPrice: '$150-300/month',
      category: 'Developer Tools',
      technologies: ['GitHub Actions', 'SonarQube', 'ESLint', 'Prettier', 'Custom AI Models'],
      demoUrl: 'https://demo.ziontechgroup.com/ai-code-review',
      apiDocs: 'https://api.ziontechgroup.com/docs/code-review',
      freeTrial: '14 days',
      setupTime: '5 minutes',
      integrations: ['GitHub', 'GitLab', 'Bitbucket', 'VS Code', 'JetBrains'],
      testimonials: [
        {
          name: 'Sarah Chen',
          company: 'TechCorp',
          role: 'Lead Developer',
          quote: 'Reduced our code review time by 80% while catching more bugs than before.',
          rating: 5
        }
      ]
    },
    {
      id: 'ai-document-intelligence',
      title: 'AI Document Intelligence',
      description: 'Advanced document processing with OCR, data extraction, and intelligent classification.',
      icon: '📄',
      price: '$149/month',
      originalPrice: '$250/month',
      features: [
        'OCR text extraction with 99.5% accuracy',
        'Document classification and routing',
        'Data validation and verification',
        'Workflow automation',
        'Multi-format support (PDF, DOC, images)',
        'Batch processing capabilities',
        'Custom field extraction',
        'API integration'
      ],
      benefits: ['Process documents 10x faster', 'Eliminate manual data entry', '99.5% accuracy rate'],
      marketPrice: '$200-500/month',
      category: 'Document Processing',
      technologies: ['Tesseract', 'AWS Textract', 'Azure Form Recognizer', 'Custom ML Models'],
      demoUrl: 'https://demo.ziontechgroup.com/document-intelligence',
      apiDocs: 'https://api.ziontechgroup.com/docs/document-processing',
      freeTrial: '30 days',
      setupTime: '10 minutes',
      integrations: ['Dropbox', 'Google Drive', 'OneDrive', 'Slack', 'Zapier'],
      testimonials: [
        {
          name: 'Michael Rodriguez',
          company: 'LegalFirm Inc',
          role: 'Operations Manager',
          quote: 'Processed 10,000+ legal documents in one week. Incredible accuracy!',
          rating: 5
        }
      ]
    },
    {
      id: 'ai-analytics-dashboard',
      title: 'AI-Powered Analytics Dashboard',
      description: 'Real-time business intelligence with predictive analytics and automated insights.',
      icon: '📊',
      price: '$99/month',
      originalPrice: '$180/month',
      features: [
        'Real-time data visualization',
        'Predictive analytics and forecasting',
        'Custom reports and dashboards',
        'API integration with 50+ platforms',
        'Mobile responsive design',
        'Automated insights generation',
        'Data export capabilities',
        'Team collaboration features'
      ],
      benefits: ['Increase decision speed by 40%', 'Reduce manual reporting by 80%', 'Identify trends before competitors'],
      marketPrice: '$150-300/month',
      category: 'Analytics',
      technologies: ['React', 'D3.js', 'Python', 'TensorFlow', 'PostgreSQL'],
      demoUrl: 'https://demo.ziontechgroup.com/analytics-dashboard',
      apiDocs: 'https://api.ziontechgroup.com/docs/analytics',
      freeTrial: '21 days',
      setupTime: '15 minutes',
      integrations: ['Google Analytics', 'Salesforce', 'HubSpot', 'Stripe', 'Shopify'],
      testimonials: [
        {
          name: 'Emily Watson',
          company: 'E-commerce Plus',
          role: 'Marketing Director',
          quote: 'Our conversion rate increased by 35% after implementing their predictive analytics.',
          rating: 5
        }
      ]
    },
    {
      id: 'smart-api-testing',
      title: 'Smart API Testing Suite',
      description: 'Automated API testing with intelligent test generation and performance monitoring.',
      icon: '🔌',
      price: '$79/month',
      originalPrice: '$140/month',
      features: [
        'Automated test generation using AI',
        'Performance and load testing',
        'API documentation generation',
        'Integration testing',
        'Mock server capabilities',
        'Test data management',
        'CI/CD pipeline integration',
        'Real-time monitoring'
      ],
      benefits: ['Catch bugs 90% faster', 'Improve API reliability by 95%', 'Reduce testing time by 80%'],
      marketPrice: '$120-250/month',
      category: 'Developer Tools',
      technologies: ['Postman', 'Newman', 'Jest', 'Artillery', 'Custom AI Models'],
      demoUrl: 'https://demo.ziontechgroup.com/api-testing',
      apiDocs: 'https://api.ziontechgroup.com/docs/api-testing',
      freeTrial: '14 days',
      setupTime: '5 minutes',
      integrations: ['GitHub Actions', 'Jenkins', 'CircleCI', 'GitLab CI', 'Azure DevOps'],
      testimonials: [
        {
          name: 'David Kim',
          company: 'API Solutions',
          role: 'QA Lead',
          quote: 'Found 200+ bugs in our APIs before they reached production. Game changer!',
          rating: 5
        }
      ]
    },
    {
      id: 'ai-customer-support',
      title: 'AI Customer Support Bot',
      description: 'Intelligent chatbot with natural language processing and context-aware responses.',
      icon: '🤖',
      price: '$199/month',
      originalPrice: '$350/month',
      features: [
        'Natural language processing',
        'Context-aware responses',
        'Multi-language support (25+ languages)',
        'CRM integration',
        'Analytics dashboard',
        'Custom training capabilities',
        'Voice and text support',
        'Escalation to human agents'
      ],
      benefits: ['Reduce support costs by 60%', 'Provide 24/7 support', 'Improve response time by 90%'],
      marketPrice: '$300-600/month',
      category: 'Customer Service',
      technologies: ['Dialogflow', 'Rasa', 'OpenAI GPT', 'Node.js', 'MongoDB'],
      demoUrl: 'https://demo.ziontechgroup.com/customer-support-bot',
      apiDocs: 'https://api.ziontechgroup.com/docs/chatbot',
      freeTrial: '30 days',
      setupTime: '20 minutes',
      integrations: ['Salesforce', 'Zendesk', 'Intercom', 'Slack', 'Microsoft Teams'],
      testimonials: [
        {
          name: 'Lisa Thompson',
          company: 'RetailMax',
          role: 'Customer Success Manager',
          quote: 'Customer satisfaction increased by 40% while reducing support tickets by 70%.',
          rating: 5
        }
      ]
    },
    {
      id: 'smart-email-marketing',
      title: 'Smart Email Marketing Platform',
      description: 'AI-driven email campaigns with personalization, A/B testing, and optimal send times.',
      icon: '📧',
      price: '$149/month',
      originalPrice: '$280/month',
      features: [
        'Smart segmentation using AI',
        'A/B testing automation',
        'Send time optimization',
        'Content personalization',
        'Performance analytics',
        'Template library (500+ templates)',
        'Automation workflows',
        'Compliance management (GDPR, CAN-SPAM)'
      ],
      benefits: ['Increase open rates by 35%', 'Boost conversion by 50%', 'Save 15 hours/week'],
      marketPrice: '$200-400/month',
      category: 'Marketing',
      technologies: ['SendGrid', 'Mailchimp API', 'Machine Learning', 'React', 'Node.js'],
      demoUrl: 'https://demo.ziontechgroup.com/email-marketing',
      apiDocs: 'https://api.ziontechgroup.com/docs/email-marketing',
      freeTrial: '21 days',
      setupTime: '10 minutes',
      integrations: ['Shopify', 'WooCommerce', 'Salesforce', 'HubSpot', 'Zapier'],
      testimonials: [
        {
          name: 'James Wilson',
          company: 'Digital Marketing Pro',
          role: 'Marketing Director',
          quote: 'Our email ROI increased by 300% with their AI optimization features.',
          rating: 5
        }
      ]
    },
    {
      id: 'ai-inventory-optimizer',
      title: 'AI Inventory Optimizer',
      description: 'Predictive inventory management with demand forecasting and automated reordering.',
      icon: '📦',
      price: '$299/month',
      originalPrice: '$500/month',
      features: [
        'Demand forecasting with 95% accuracy',
        'Automated reordering',
        'Stock optimization algorithms',
        'Supplier management',
        'Cost analysis and reporting',
        'Multi-location support',
        'Seasonal trend analysis',
        'Integration with POS systems'
      ],
      benefits: ['Reduce stockouts by 60%', 'Lower inventory costs by 25%', 'Improve cash flow by 40%'],
      marketPrice: '$400-800/month',
      category: 'Supply Chain',
      technologies: ['Python', 'TensorFlow', 'PostgreSQL', 'Redis', 'Custom ML Models'],
      demoUrl: 'https://demo.ziontechgroup.com/inventory-optimizer',
      apiDocs: 'https://api.ziontechgroup.com/docs/inventory',
      freeTrial: '30 days',
      setupTime: '30 minutes',
      integrations: ['Shopify', 'WooCommerce', 'QuickBooks', 'SAP', 'Oracle'],
      testimonials: [
        {
          name: 'Maria Garcia',
          company: 'Retail Chain Corp',
          role: 'Operations Director',
          quote: 'Reduced inventory costs by $2M annually while improving stock availability.',
          rating: 5
        }
      ]
    },
    {
      id: 'smart-hr-recruitment',
      title: 'Smart HR Recruitment Tool',
      description: 'AI-powered resume screening, candidate matching, and interview scheduling automation.',
      icon: '👥',
      price: '$179/month',
      originalPrice: '$320/month',
      features: [
        'Resume parsing and analysis',
        'Candidate scoring and ranking',
        'Interview scheduling automation',
        'Onboarding workflow automation',
        'Performance tracking',
        'Bias detection and removal',
        'Job posting optimization',
        'Candidate communication tools'
      ],
      benefits: ['Reduce hiring time by 50%', 'Improve candidate quality by 40%', 'Streamline HR processes'],
      marketPrice: '$250-500/month',
      category: 'Human Resources',
      technologies: ['NLP', 'Machine Learning', 'React', 'Node.js', 'PostgreSQL'],
      demoUrl: 'https://demo.ziontechgroup.com/hr-recruitment',
      apiDocs: 'https://api.ziontechgroup.com/docs/hr-tools',
      freeTrial: '21 days',
      setupTime: '15 minutes',
      integrations: ['LinkedIn', 'Indeed', 'Glassdoor', 'Workday', 'BambooHR'],
      testimonials: [
        {
          name: 'Robert Johnson',
          company: 'TechStart Inc',
          role: 'HR Director',
          quote: 'Hired 50+ top developers in 3 months. The AI matching is incredibly accurate.',
          rating: 5
        }
      ]
    },
    {
      id: 'ai-social-media-manager',
      title: 'AI Social Media Manager',
      description: 'Automated social media content creation, scheduling, and engagement optimization.',
      icon: '📱',
      price: '$129/month',
      originalPrice: '$220/month',
      features: [
        'AI content generation',
        'Multi-platform scheduling',
        'Engagement optimization',
        'Hashtag research and optimization',
        'Competitor analysis',
        'Performance analytics',
        'Influencer identification',
        'Crisis management alerts'
      ],
      benefits: ['Increase engagement by 45%', 'Save 20 hours/week', 'Grow followers by 200%'],
      marketPrice: '$180-350/month',
      category: 'Social Media',
      technologies: ['OpenAI GPT', 'Instagram API', 'Twitter API', 'LinkedIn API', 'React'],
      demoUrl: 'https://demo.ziontechgroup.com/social-media-manager',
      apiDocs: 'https://api.ziontechgroup.com/docs/social-media',
      freeTrial: '14 days',
      setupTime: '10 minutes',
      integrations: ['Facebook', 'Instagram', 'Twitter', 'LinkedIn', 'TikTok'],
      testimonials: [
        {
          name: 'Amanda Lee',
          company: 'Creative Agency',
          role: 'Social Media Manager',
          quote: 'Our social media engagement tripled while reducing our workload by 70%.',
          rating: 5
        }
      ]
    },
    {
      id: 'ai-financial-analyzer',
      title: 'AI Financial Analyzer',
      description: 'Automated financial analysis, forecasting, and risk assessment for businesses.',
      icon: '💰',
      price: '$249/month',
      originalPrice: '$450/month',
      features: [
        'Automated financial reporting',
        'Cash flow forecasting',
        'Risk assessment and alerts',
        'Investment analysis',
        'Tax optimization suggestions',
        'Budget planning and tracking',
        'Compliance monitoring',
        'Real-time financial dashboards'
      ],
      benefits: ['Improve financial accuracy by 90%', 'Reduce analysis time by 75%', 'Identify risks 60% earlier'],
      marketPrice: '$350-700/month',
      category: 'Finance',
      technologies: ['Python', 'TensorFlow', 'Pandas', 'React', 'PostgreSQL'],
      demoUrl: 'https://demo.ziontechgroup.com/financial-analyzer',
      apiDocs: 'https://api.ziontechgroup.com/docs/financial-analysis',
      freeTrial: '30 days',
      setupTime: '20 minutes',
      integrations: ['QuickBooks', 'Xero', 'Sage', 'Stripe', 'PayPal'],
      testimonials: [
        {
          name: 'Thomas Brown',
          company: 'Finance Solutions',
          role: 'CFO',
          quote: 'Identified $500K in cost savings opportunities in the first month.',
          rating: 5
        }
      ]
    },
    {
      id: 'ai-project-manager',
      title: 'AI Project Manager',
      description: 'Intelligent project management with automated task allocation and progress tracking.',
      icon: '📋',
      price: '$159/month',
      originalPrice: '$280/month',
      features: [
        'AI task allocation and prioritization',
        'Progress tracking and predictions',
        'Resource optimization',
        'Risk identification and mitigation',
        'Team performance analytics',
        'Automated reporting',
        'Integration with development tools',
        'Predictive project completion'
      ],
      benefits: ['Complete projects 30% faster', 'Reduce project overruns by 50%', 'Improve team productivity by 40%'],
      marketPrice: '$200-400/month',
      category: 'Project Management',
      technologies: ['Machine Learning', 'React', 'Node.js', 'PostgreSQL', 'Redis'],
      demoUrl: 'https://demo.ziontechgroup.com/project-manager',
      apiDocs: 'https://api.ziontechgroup.com/docs/project-management',
      freeTrial: '21 days',
      setupTime: '15 minutes',
      integrations: ['Jira', 'Asana', 'Trello', 'Slack', 'Microsoft Teams'],
      testimonials: [
        {
          name: 'Jennifer Davis',
          company: 'Software Solutions',
          role: 'Project Manager',
          quote: 'Delivered 15 projects on time and under budget. The AI predictions are spot on.',
          rating: 5
        }
      ]
    },
    {
      id: 'ai-content-generator',
      title: 'AI Content Generator',
      description: 'Automated content creation for blogs, social media, and marketing materials.',
      icon: '✍️',
      price: '$89/month',
      originalPrice: '$160/month',
      features: [
        'Blog post generation',
        'Social media content creation',
        'Email marketing copy',
        'SEO optimization',
        'Multi-language support',
        'Brand voice customization',
        'Content calendar management',
        'Performance analytics'
      ],
      benefits: ['Create content 10x faster', 'Improve SEO rankings by 60%', 'Increase engagement by 80%'],
      marketPrice: '$120-250/month',
      category: 'Content Marketing',
      technologies: ['OpenAI GPT', 'BERT', 'React', 'Node.js', 'MongoDB'],
      demoUrl: 'https://demo.ziontechgroup.com/content-generator',
      apiDocs: 'https://api.ziontechgroup.com/docs/content-generation',
      freeTrial: '14 days',
      setupTime: '5 minutes',
      integrations: ['WordPress', 'HubSpot', 'Mailchimp', 'Hootsuite', 'Buffer'],
      testimonials: [
        {
          name: 'Mark Taylor',
          company: 'Content Marketing Co',
          role: 'Content Director',
          quote: 'Generated 100+ high-quality blog posts in one month. Our traffic increased by 300%.',
          rating: 5
        }
      ]
    }
  ];

  const categories = [
    'All Services',
    'Developer Tools',
    'Document Processing',
    'Analytics',
    'Customer Service',
    'Marketing',
    'Supply Chain',
    'Human Resources',
    'Social Media',
    'Finance',
    'Project Management',
    'Content Marketing'
  ];

  const [selectedCategory, setSelectedCategory] = useState('All Services');
  const [filteredServices, setFilteredServices] = useState(microSAASServices);

  useEffect(() => {
    if (selectedCategory === 'All Services') {
      setFilteredServices(microSAASServices);
    } else {
      setFilteredServices(microSAASServices.filter(service => service.category === selectedCategory));
    }
  }, [selectedCategory]);

  const handleDemoClick = (serviceId: string) => {
    setActiveDemo(serviceId);
    setIsPlaying(true);
  };

  const handleContactClick = (service: any) => {
    const subject = `Interest in ${service.title} - Micro SAAS Service`;
    const body = `Hi Zion Tech Group Team,

I'm interested in learning more about your ${service.title} service.

Service Details:
- Price: ${service.price}
- Category: ${service.category}
- Features: ${service.features.slice(0, 3).join(', ')}

Please contact me to discuss implementation and pricing.

Best regards`;
    
    window.open(`mailto:kleber@ziontechgroup.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`, '_blank');
  };

  return (
    <div className="min-h-screen futuristic-theme">
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group</title>
        <meta name="description" content="Powerful AI-driven micro SAAS tools for modern businesses. 12+ ready-to-use solutions starting at $79/month. Free trials available." />
        <meta name="keywords" content="micro saas, ai tools, business automation, software as a service, productivity tools" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="cyber-grid absolute inset-0"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 neon-text">
            Micro SAAS Solutions
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-4xl mx-auto">
            Powerful AI-driven tools for modern businesses. 12+ ready-to-use solutions starting at $79/month.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="neon-button">
              <Zap className="w-5 h-5 mr-2" />
              Start Free Trial
            </button>
            <button className="glass-card px-8 py-3 text-white border border-white/20 hover:border-neon-blue transition-all">
              <Play className="w-5 h-5 mr-2" />
              Watch Demo
            </button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="futuristic-card text-center">
              <div className="text-3xl font-bold neon-text-green mb-2">12+</div>
              <div className="text-gray-300">Ready-to-use Tools</div>
            </div>
            <div className="futuristic-card text-center">
              <div className="text-3xl font-bold neon-text-purple mb-2">$79</div>
              <div className="text-gray-300">Starting Price</div>
            </div>
            <div className="futuristic-card text-center">
              <div className="text-3xl font-bold neon-text-pink mb-2">24/7</div>
              <div className="text-gray-300">Support</div>
            </div>
            <div className="futuristic-card text-center">
              <div className="text-3xl font-bold neon-text-cyan mb-2">5min</div>
              <div className="text-gray-300">Setup Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-dark-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  selectedCategory === category
                    ? 'neon-button'
                    : 'glass-card text-gray-300 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div key={service.id} className="futuristic-card group">
                {/* Service Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl mb-2">{service.icon}</div>
                  <div className="text-right">
                    <div className="text-2xl font-bold neon-text-green">{service.price}</div>
                    <div className="text-sm text-gray-400 line-through">{service.originalPrice}</div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:neon-text transition-all">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-neon-blue mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.slice(0, 4).map((feature, index) => (
                      <li key={index} className="flex items-center text-xs text-gray-300">
                        <CheckCircle className="w-3 h-3 text-neon-green mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-neon-purple mb-2">Benefits:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.benefits.map((benefit, index) => (
                      <span key={index} className="text-xs bg-neon-blue/20 text-neon-blue px-2 py-1 rounded">
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <button
                    onClick={() => handleDemoClick(service.id)}
                    className="w-full glass-card py-2 px-4 text-white hover:border-neon-blue transition-all flex items-center justify-center"
                  >
                    {isPlaying && activeDemo === service.id ? (
                      <Pause className="w-4 h-4 mr-2" />
                    ) : (
                      <Play className="w-4 h-4 mr-2" />
                    )}
                    {isPlaying && activeDemo === service.id ? 'Stop Demo' : 'Try Demo'}
                  </button>
                  
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => window.open(service.demoUrl, '_blank')}
                      className="glass-card py-2 px-3 text-white hover:border-neon-green transition-all flex items-center justify-center text-sm"
                    >
                      <ExternalLink className="w-3 h-3 mr-1" />
                      Live Demo
                    </button>
                    <button
                      onClick={() => handleContactClick(service)}
                      className="glass-card py-2 px-3 text-white hover:border-neon-pink transition-all flex items-center justify-center text-sm"
                    >
                      <Users className="w-3 h-3 mr-1" />
                      Contact
                    </button>
                  </div>
                </div>

                {/* Additional Info */}
                <div className="mt-4 pt-4 border-t border-dark-border">
                  <div className="flex justify-between text-xs text-gray-400">
                    <span>Free Trial: {service.freeTrial}</span>
                    <span>Setup: {service.setupTime}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-neon-blue/20 to-neon-purple/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 neon-text">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join 10,000+ businesses already using our micro SAAS solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+13024640950"
              className="neon-button inline-flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              +1 302 464 0950
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com"
              className="glass-card px-8 py-3 text-white border border-white/20 hover:border-neon-blue transition-all inline-flex items-center justify-center"
            >
              <Mail className="w-5 h-5 mr-2" />
              kleber@ziontechgroup.com
            </a>
          </div>
          <div className="mt-8 text-sm text-gray-400">
            <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicroSAASPage;