'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Brain, 
  Zap, 
  Eye, 
  MessageSquare, 
  BarChart, 
  Shield, 
  Cog, 
  Users, 
  FileText, 
  Image, 
  Video, 
  Music, 
  Smartphone, 
  Globe, 
  Lock, 
  CheckCircle, 
  Star, 
  ArrowRight, 
  Phone, 
  Mail, 
  MapPin,
  Clock,
  TrendingUp,
  Target,
  Award,
  Rocket
} from 'lucide-react';

const AIServicesPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const aiServices = [
    // Core AI Services
    {
      id: 'machine-learning-platform',
      name: 'Machine Learning Platform',
      category: 'core-ai',
      icon: Brain,
      description: 'Comprehensive ML platform for building, training, and deploying machine learning models at scale.',
      features: [
        'AutoML capabilities',
        'Model versioning & management',
        'Real-time inference',
        'A/B testing framework',
        'Model monitoring',
        'Multi-cloud deployment'
      ],
      pricing: '$2,999/month',
      popular: true,
      link: 'https://ziontechgroup.com/machine-learning-platform',
      color: 'from-purple-500 to-pink-500',
      capabilities: [
        'Supports 50+ ML algorithms',
        'Handles datasets up to 100TB',
        '99.9% uptime SLA',
        'Real-time model serving',
        'Automated hyperparameter tuning'
      ]
    },
    {
      id: 'natural-language-processing',
      name: 'Natural Language Processing Suite',
      category: 'core-ai',
      icon: MessageSquare,
      description: 'Advanced NLP services for text analysis, sentiment analysis, and language understanding.',
      features: [
        'Sentiment analysis',
        'Entity recognition',
        'Text classification',
        'Language translation',
        'Text summarization',
        'Chatbot development'
      ],
      pricing: '$1,499/month',
      popular: true,
      link: 'https://ziontechgroup.com/nlp-suite',
      color: 'from-blue-500 to-cyan-500',
      capabilities: [
        'Supports 100+ languages',
        'Real-time processing',
        'Custom model training',
        'API rate: 10,000 requests/min',
        '99.95% accuracy guarantee'
      ]
    },
    {
      id: 'computer-vision-platform',
      name: 'Computer Vision Platform',
      category: 'core-ai',
      icon: Eye,
      description: 'Advanced computer vision services for image and video analysis, object detection, and recognition.',
      features: [
        'Object detection & recognition',
        'Facial recognition',
        'Image classification',
        'Video analysis',
        'OCR capabilities',
        'Custom model training'
      ],
      pricing: '$1,799/month',
      popular: false,
      link: 'https://ziontechgroup.com/computer-vision',
      color: 'from-green-500 to-teal-500',
      capabilities: [
        'Processes 1M+ images/day',
        'Real-time video analysis',
        'Custom model deployment',
        '99.8% accuracy rate',
        'Multi-format support'
      ]
    },
    {
      id: 'predictive-analytics',
      name: 'Predictive Analytics Engine',
      category: 'core-ai',
      icon: TrendingUp,
      description: 'AI-powered predictive analytics for forecasting, risk assessment, and business intelligence.',
      features: [
        'Time series forecasting',
        'Risk modeling',
        'Demand prediction',
        'Customer behavior analysis',
        'Anomaly detection',
        'Real-time dashboards'
      ],
      pricing: '$2,299/month',
      popular: true,
      link: 'https://ziontechgroup.com/predictive-analytics',
      color: 'from-orange-500 to-red-500',
      capabilities: [
        '95%+ prediction accuracy',
        'Real-time data processing',
        'Custom algorithm development',
        'Integration with 200+ data sources',
        'Automated model retraining'
      ]
    },

    // Industry-Specific AI
    {
      id: 'ai-healthcare-solutions',
      name: 'AI Healthcare Solutions',
      category: 'industry-ai',
      icon: Shield,
      description: 'Specialized AI solutions for healthcare including medical imaging, drug discovery, and patient care.',
      features: [
        'Medical image analysis',
        'Drug discovery algorithms',
        'Patient risk assessment',
        'Clinical decision support',
        'Electronic health records AI',
        'Telemedicine integration'
      ],
      pricing: '$4,999/month',
      popular: true,
      link: 'https://ziontechgroup.com/ai-healthcare',
      color: 'from-red-500 to-pink-500',
      capabilities: [
        'HIPAA compliant',
        'FDA approval support',
        'Medical-grade accuracy',
        'Integration with major EHR systems',
        '24/7 medical support'
      ]
    },
    {
      id: 'ai-fintech-platform',
      name: 'AI Fintech Platform',
      category: 'industry-ai',
      icon: BarChart,
      description: 'AI-powered financial services including fraud detection, algorithmic trading, and risk management.',
      features: [
        'Fraud detection & prevention',
        'Algorithmic trading',
        'Credit risk assessment',
        'Anti-money laundering',
        'Regulatory compliance',
        'Real-time monitoring'
      ],
      pricing: '$3,499/month',
      popular: true,
      link: 'https://ziontechgroup.com/ai-fintech',
      color: 'from-yellow-500 to-orange-500',
      capabilities: [
        '99.99% fraud detection accuracy',
        'Millisecond response times',
        'PCI DSS compliant',
        'Real-time risk scoring',
        'Integration with major banks'
      ]
    },
    {
      id: 'ai-ecommerce-solutions',
      name: 'AI E-commerce Solutions',
      category: 'industry-ai',
      icon: Globe,
      description: 'AI-powered e-commerce solutions for personalization, inventory management, and customer experience.',
      features: [
        'Product recommendation engine',
        'Dynamic pricing optimization',
        'Inventory forecasting',
        'Customer segmentation',
        'Chatbot integration',
        'Visual search capabilities'
      ],
      pricing: '$1,999/month',
      popular: false,
      link: 'https://ziontechgroup.com/ai-ecommerce',
      color: 'from-indigo-500 to-purple-500',
      capabilities: [
        '30% increase in conversion rates',
        'Real-time personalization',
        'Multi-platform integration',
        'A/B testing framework',
        'Advanced analytics dashboard'
      ]
    },

    // AI Automation
    {
      id: 'intelligent-automation',
      name: 'Intelligent Process Automation',
      category: 'automation-ai',
      icon: Cog,
      description: 'AI-powered automation for business processes, workflow optimization, and decision-making.',
      features: [
        'Process mining & discovery',
        'Workflow automation',
        'Decision automation',
        'Exception handling',
        'Performance monitoring',
        'ROI tracking'
      ],
      pricing: '$2,499/month',
      popular: true,
      link: 'https://ziontechgroup.com/intelligent-automation',
      color: 'from-teal-500 to-blue-500',
      capabilities: [
        '80% process efficiency improvement',
        'Real-time process monitoring',
        'Custom automation workflows',
        'Integration with 500+ systems',
        'Automated exception handling'
      ]
    },
    {
      id: 'ai-customer-service',
      name: 'AI Customer Service Platform',
      category: 'automation-ai',
      icon: Users,
      description: 'Comprehensive AI customer service solution with chatbots, sentiment analysis, and ticket routing.',
      features: [
        'Intelligent chatbots',
        'Sentiment analysis',
        'Ticket classification',
        'Knowledge base management',
        'Multi-channel support',
        'Performance analytics'
      ],
      pricing: '$1,299/month',
      popular: true,
      link: 'https://ziontechgroup.com/ai-customer-service',
      color: 'from-pink-500 to-rose-500',
      capabilities: [
        '90% query resolution rate',
        '24/7 multilingual support',
        'Integration with major CRM systems',
        'Real-time sentiment monitoring',
        'Custom training capabilities'
      ]
    },
    {
      id: 'ai-content-generation',
      name: 'AI Content Generation Suite',
      category: 'automation-ai',
      icon: FileText,
      description: 'AI-powered content creation for blogs, social media, marketing materials, and documentation.',
      features: [
        'Blog post generation',
        'Social media content',
        'Email marketing copy',
        'Product descriptions',
        'Technical documentation',
        'Multi-language support'
      ],
      pricing: '$899/month',
      popular: false,
      link: 'https://ziontechgroup.com/ai-content-generation',
      color: 'from-violet-500 to-purple-500',
      capabilities: [
        '50+ content templates',
        'Brand voice customization',
        'SEO optimization',
        'Plagiarism detection',
        'Multi-format output'
      ]
    },

    // AI Development Tools
    {
      id: 'ai-development-platform',
      name: 'AI Development Platform',
      category: 'dev-tools',
      icon: Code,
      description: 'Comprehensive platform for AI model development, testing, and deployment.',
      features: [
        'Model development tools',
        'Testing & validation',
        'Version control',
        'CI/CD integration',
        'Performance monitoring',
        'Collaboration features'
      ],
      pricing: '$1,799/month',
      popular: true,
      link: 'https://ziontechgroup.com/ai-development-platform',
      color: 'from-gray-500 to-slate-500',
      capabilities: [
        'Supports all major ML frameworks',
        'Automated testing suite',
        'Model versioning',
        'Team collaboration tools',
        'Cloud & on-premise deployment'
      ]
    },
    {
      id: 'ai-data-platform',
      name: 'AI Data Platform',
      category: 'dev-tools',
      icon: BarChart,
      description: 'End-to-end data platform for AI model training, feature engineering, and data management.',
      features: [
        'Data ingestion & processing',
        'Feature engineering',
        'Data quality monitoring',
        'Model training pipelines',
        'Data lineage tracking',
        'Compliance management'
      ],
      pricing: '$2,199/month',
      popular: false,
      link: 'https://ziontechgroup.com/ai-data-platform',
      color: 'from-emerald-500 to-green-500',
      capabilities: [
        'Handles petabyte-scale data',
        'Real-time data processing',
        'Automated feature engineering',
        'Data quality scoring',
        'GDPR compliance tools'
      ]
    }
  ];

  const categories = [
    { id: 'all', name: 'All AI Services', count: aiServices.length },
    { id: 'core-ai', name: 'Core AI', count: aiServices.filter(s => s.category === 'core-ai').length },
    { id: 'industry-ai', name: 'Industry-Specific', count: aiServices.filter(s => s.category === 'industry-ai').length },
    { id: 'automation-ai', name: 'AI Automation', count: aiServices.filter(s => s.category === 'automation-ai').length },
    { id: 'dev-tools', name: 'Development Tools', count: aiServices.filter(s => s.category === 'dev-tools').length }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? aiServices 
    : aiServices.filter(service => service.category === selectedCategory);

  const contactInfo = {
    phone: '+1 (302) 464-0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008, Middletown, DE 19709'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      {/* Header */}
      <div className="container mx-auto px-4 py-16 pt-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 holographic-text cyber-text glitch" data-text="AI Services">
            AI Services
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium cyber-glow">
            Enterprise-Grade Artificial Intelligence Solutions
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            Transform your business with our comprehensive AI services. From machine learning platforms to industry-specific solutions, 
            we deliver cutting-edge AI technology that drives real business value and competitive advantage.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
            <div className="cyber-card hologram-card p-6 text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">500+</div>
              <div className="text-gray-300">AI Models Deployed</div>
            </div>
            <div className="cyber-card hologram-card p-6 text-center">
              <div className="text-3xl font-bold text-pink-400 mb-2">$50M+</div>
              <div className="text-gray-300">Client Savings</div>
            </div>
            <div className="cyber-card hologram-card p-6 text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">95%</div>
              <div className="text-gray-300">Accuracy Rate</div>
            </div>
            <div className="cyber-card hologram-card p-6 text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">24/7</div>
              <div className="text-gray-300">AI Support</div>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-cyan-500 text-white cyber-glow'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-cyan-400'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredServices.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className={`cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300 ${
                  service.popular ? 'ring-2 ring-cyan-400' : ''
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-3 -right-3 bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    Popular
                  </div>
                )}
                
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4`}>
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{service.name}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{service.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="text-sm text-gray-300 flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                    {service.features.length > 3 && (
                      <li className="text-sm text-gray-400">
                        +{service.features.length - 3} more features
                      </li>
                    )}
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-pink-400 mb-2">Capabilities:</h4>
                  <ul className="space-y-1">
                    {service.capabilities.slice(0, 2).map((capability, index) => (
                      <li key={index} className="text-sm text-gray-300 flex items-center">
                        <Target className="w-4 h-4 text-pink-400 mr-2 flex-shrink-0" />
                        {capability}
                      </li>
                    ))}
                    {service.capabilities.length > 2 && (
                      <li className="text-sm text-gray-400">
                        +{service.capabilities.length - 2} more capabilities
                      </li>
                    )}
                  </ul>
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="text-2xl font-bold text-cyan-400">{service.pricing}</div>
                  <div className="flex items-center text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                    <span className="ml-1 text-sm text-gray-300">(4.9)</span>
                  </div>
                </div>
                
                <a
                  href={service.link}
                  className="w-full cyber-button text-center inline-flex items-center justify-center"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            );
          })}
        </div>

        {/* Why Choose Our AI Services */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Why Choose Our AI Services?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="cyber-card hologram-card p-6 text-center">
              <Award className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Proven Expertise</h3>
              <p className="text-gray-300">
                Over 500 successful AI implementations across various industries with measurable ROI.
              </p>
            </div>
            <div className="cyber-card hologram-card p-6 text-center">
              <Rocket className="w-12 h-12 text-pink-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Rapid Deployment</h3>
              <p className="text-gray-300">
                Get your AI solutions up and running in weeks, not months, with our proven methodology.
              </p>
            </div>
            <div className="cyber-card hologram-card p-6 text-center">
              <Shield className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Enterprise Security</h3>
              <p className="text-gray-300">
                Bank-level security and compliance with SOC 2, GDPR, and industry-specific regulations.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="cyber-card hologram-card p-12 text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Schedule a free consultation with our AI experts to discuss your specific needs and discover 
            how our AI services can drive your business forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="cyber-button inline-flex items-center"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call: (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300"
            >
              <Mail className="w-4 h-4 mr-2 inline" />
              Email Us
            </a>
          </div>
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="cyber-card hologram-card p-6 text-center">
            <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
            <a href={`tel:${contactInfo.phone}`} className="text-cyan-400 hover:text-cyan-300">
              {contactInfo.phone}
            </a>
          </div>
          <div className="cyber-card hologram-card p-6 text-center">
            <Mail className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
            <a href={`mailto:${contactInfo.email}`} className="text-cyan-400 hover:text-cyan-300">
              {contactInfo.email}
            </a>
          </div>
          <div className="cyber-card hologram-card p-6 text-center">
            <MapPin className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
            <p className="text-gray-300 text-sm">{contactInfo.address}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIServicesPage;