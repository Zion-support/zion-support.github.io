import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ArrowRightIcon,
  CheckCircleIcon,
  StarIcon,
  CurrencyDollarIcon,
  ClockIcon,
  UsersIcon,
  ShieldCheckIcon,
  RocketLaunchIcon,
  CpuChipIcon,
  ChartBarIcon,
  GlobeAltIcon,
  PhoneIcon,
  EnvelopeIcon,
  EyeIcon,
  ChatBubbleLeftRightIcon,
  DocumentTextIcon,
  CogIcon
} from '@heroicons/react/24/outline';

export default function AISolutionsPage() {
  const aiServices = [
    {
      id: 'ai-chatbot-enterprise',
      title: 'Enterprise AI Chatbot',
      description: 'Advanced conversational AI platform with natural language processing, multi-channel support, and seamless human handoff capabilities.',
      features: [
        'Natural Language Processing (NLP) with 99.5% accuracy',
        'Multi-language support (100+ languages)',
        'Voice and text conversation capabilities',
        'Integration with CRM, ERP, and helpdesk systems',
        'Custom knowledge base creation and management',
        'Sentiment analysis and emotion detection',
        'Automated escalation to human agents',
        'Real-time analytics and conversation insights',
        'Custom branding and white-label options',
        'API access for custom integrations'
      ],
      pricing: {
        starter: { price: 299, period: 'month', features: ['1,000 conversations/month', 'Basic NLP', 'Email support'] },
        professional: { price: 799, period: 'month', features: ['10,000 conversations/month', 'Advanced NLP', 'Phone support', 'Custom integrations'] },
        enterprise: { price: 1999, period: 'month', features: ['Unlimited conversations', 'Custom AI training', 'Dedicated support', 'White-label solution'] }
      },
      icon: ChatBubbleLeftRightIcon,
      color: 'from-purple-500 to-pink-500',
      popular: true,
      link: 'https://ziontechgroup.com/ai-chatbot-enterprise'
    },
    {
      id: 'ai-content-generation-pro',
      title: 'AI Content Generation Pro',
      description: 'Comprehensive AI-powered content creation platform with advanced language models, SEO optimization, and brand voice customization.',
      features: [
        'GPT-4 and Claude-3 powered content generation',
        'Multi-format content (blogs, articles, social media, emails)',
        'SEO optimization with keyword research integration',
        'Brand voice training and consistency checking',
        'Plagiarism detection and originality scoring',
        'Content calendar and automated publishing',
        'Team collaboration and approval workflows',
        'Multi-language content generation (50+ languages)',
        'Image generation and visual content creation',
        'Analytics and performance tracking'
      ],
      pricing: {
        basic: { price: 99, period: 'month', features: ['25,000 words/month', '5 team members', 'Basic templates'] },
        professional: { price: 299, period: 'month', features: ['100,000 words/month', '25 team members', 'Advanced AI models', 'API access'] },
        enterprise: { price: 799, period: 'month', features: ['Unlimited words', 'Unlimited team members', 'Custom AI training', 'Priority support'] }
      },
      icon: DocumentTextIcon,
      color: 'from-cyan-500 to-blue-500',
      popular: false,
      link: 'https://ziontechgroup.com/ai-content-generation-pro'
    },
    {
      id: 'ai-computer-vision',
      title: 'AI Computer Vision Suite',
      description: 'Advanced computer vision platform with object detection, facial recognition, and image analysis capabilities for various industries.',
      features: [
        'Real-time object detection and classification',
        'Facial recognition and identity verification',
        'OCR (Optical Character Recognition) with 99.8% accuracy',
        'Image quality enhancement and restoration',
        'Video analysis and motion detection',
        'Custom model training and deployment',
        'API integration for mobile and web applications',
        'Compliance with GDPR and privacy regulations',
        'Edge computing support for real-time processing',
        'Comprehensive analytics and reporting'
      ],
      pricing: {
        starter: { price: 199, period: 'month', features: ['1,000 images/month', 'Basic models', 'Email support'] },
        professional: { price: 599, period: 'month', features: ['10,000 images/month', 'Advanced models', 'Phone support', 'Custom training'] },
        enterprise: { price: 1499, period: 'month', features: ['Unlimited images', 'Custom models', 'Dedicated support', 'On-premise deployment'] }
      },
      icon: EyeIcon,
      color: 'from-green-500 to-emerald-500',
      popular: false,
      link: 'https://ziontechgroup.com/ai-computer-vision'
    },
    {
      id: 'ai-data-analytics-pro',
      title: 'AI Data Analytics Pro',
      description: 'Intelligent data analytics platform with machine learning, predictive modeling, and automated insights generation.',
      features: [
        'Automated data preprocessing and cleaning',
        'Machine learning model training and deployment',
        'Predictive analytics and forecasting',
        'Anomaly detection and alerting',
        'Natural language query interface',
        'Automated report generation',
        'Real-time data visualization',
        'Integration with 100+ data sources',
        'Custom algorithm development',
        'A/B testing and experimentation platform'
      ],
      pricing: {
        basic: { price: 399, period: 'month', features: ['5 datasets', 'Basic analytics', 'Email support'] },
        professional: { price: 999, period: 'month', features: ['25 datasets', 'Advanced ML models', 'Phone support', 'Custom integrations'] },
        enterprise: { price: 2499, period: 'month', features: ['Unlimited datasets', 'Custom algorithms', 'Dedicated support', 'White-label solution'] }
      },
      icon: ChartBarIcon,
      color: 'from-yellow-500 to-orange-500',
      popular: true,
      link: 'https://ziontechgroup.com/ai-data-analytics-pro'
    },
    {
      id: 'ai-automation-suite',
      title: 'AI Automation Suite',
      description: 'Comprehensive business process automation platform with AI-powered decision making and workflow optimization.',
      features: [
        'Intelligent process discovery and mapping',
        'RPA (Robotic Process Automation) with AI enhancement',
        'Document processing and data extraction',
        'Email and communication automation',
        'Workflow optimization and bottleneck detection',
        'Exception handling and error recovery',
        'Integration with 200+ business applications',
        'Custom automation script development',
        'Performance monitoring and analytics',
        'Compliance and audit trail management'
      ],
      pricing: {
        starter: { price: 199, period: 'month', features: ['5 automated processes', 'Basic AI', 'Email support'] },
        professional: { price: 599, period: 'month', features: ['25 automated processes', 'Advanced AI', 'Phone support', 'Custom integrations'] },
        enterprise: { price: 1499, period: 'month', features: ['Unlimited processes', 'Custom AI training', 'Dedicated support', 'On-premise deployment'] }
      },
      icon: CogIcon,
      color: 'from-pink-500 to-rose-500',
      popular: false,
      link: 'https://ziontechgroup.com/ai-automation-suite'
    },
    {
      id: 'ai-cybersecurity-suite-pro',
      title: 'AI Cybersecurity Suite Pro',
      description: 'Advanced AI-powered cybersecurity platform with threat detection, incident response, and automated security operations.',
      features: [
        'AI-powered threat detection and analysis',
        'Behavioral analytics and anomaly detection',
        'Automated incident response and remediation',
        'Zero-day vulnerability detection',
        'Security orchestration and automation (SOAR)',
        'Compliance monitoring and reporting',
        'Dark web monitoring and threat intelligence',
        'Security awareness training with AI',
        'Penetration testing automation',
        '24/7 security operations center (SOC) support'
      ],
      pricing: {
        basic: { price: 499, period: 'month', features: ['Up to 100 endpoints', 'Basic threat detection', 'Email support'] },
        professional: { price: 1299, period: 'month', features: ['Up to 500 endpoints', 'Advanced AI detection', 'Phone support', 'Custom rules'] },
        enterprise: { price: 2999, period: 'month', features: ['Unlimited endpoints', 'Custom AI models', 'Dedicated SOC', 'White-label solution'] }
      },
      icon: ShieldCheckIcon,
      color: 'from-indigo-500 to-purple-500',
      popular: true,
      link: 'https://ziontechgroup.com/ai-cybersecurity-suite-pro'
    }
  ];

  const aiCapabilities = [
    {
      title: 'Natural Language Processing',
      description: 'Advanced NLP capabilities for text analysis, sentiment detection, and language understanding.',
      icon: ChatBubbleLeftRightIcon,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Computer Vision',
      description: 'Image and video analysis with object detection, facial recognition, and visual content understanding.',
      icon: EyeIcon,
      color: 'from-cyan-500 to-blue-500'
    },
    {
      title: 'Machine Learning',
      description: 'Custom ML model development, training, and deployment for predictive analytics and automation.',
      icon: CpuChipIcon,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Predictive Analytics',
      description: 'Data-driven insights and forecasting to help businesses make informed decisions.',
      icon: ChartBarIcon,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Process Automation',
      description: 'Intelligent automation of business processes with AI-powered decision making.',
      icon: CogIcon,
      color: 'from-pink-500 to-rose-500'
    },
    {
      title: 'Cybersecurity AI',
      description: 'AI-powered threat detection, incident response, and security operations automation.',
      icon: ShieldCheckIcon,
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI solutions including chatbots, content generation, computer vision, data analytics, and automation services for modern businesses." />
        <meta name="keywords" content="AI solutions, artificial intelligence, machine learning, chatbots, computer vision, data analytics, automation, NLP" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-900/20 to-cyan-900/20"></div>
          <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 bg-cyan-500 rounded-full opacity-20 animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-pink-500 rounded-full opacity-20 animate-pulse delay-500"> </div>
        
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Harness the power of artificial intelligence to transform your business operations
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Our comprehensive AI solutions leverage cutting-edge machine learning, natural language processing, 
              computer vision, and automation technologies to drive innovation and efficiency across your organization.
            </p>
          </div>
        </div>
      </section>

      {/* AI Capabilities */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our AI Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We specialize in advanced AI technologies that deliver real business value
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {aiCapabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <div 
                  key={capability.title}
                  className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${capability.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{capability.title}</h3>
                  <p className="text-gray-300 leading-relaxed">
                    {capability.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* AI Services Grid */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our AI Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI solutions designed to solve real business challenges
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {aiServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div 
                  key={service.id}
                  className={`group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105 relative ${service.popular ? 'ring-2 ring-purple-500' : ''}`}
                >
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                        <StarIcon className="w-4 h-4" />
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-white">
                        ${service.pricing.professional.price}
                        <span className="text-lg text-gray-400">/{service.pricing.professional.period}</span>
                      </div>
                      <div className="text-sm text-gray-400">Professional Plan</div>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 5).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Pricing Plans:</h4>
                    <div className="grid grid-cols-3 gap-2 text-sm">
                      {Object.entries(service.pricing).map(([plan, details]) => (
                        <div key={plan} className="text-center">
                          <div className="font-semibold text-white capitalize">{plan}</div>
                          <div className="text-gray-400">${details.price}/{details.period}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a 
                      href={service.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 bg-gradient-to-r ${service.color} text-white px-6 py-3 rounded-lg font-semibold text-center hover:opacity-90 transition-opacity flex items-center justify-center gap-2`}
                    >
                      Try Free Demo
                      <ArrowRightIcon className="w-4 h-4" />
                    </a>
                    <Link 
                      to="/contact"
                      className="flex-1 border-2 border-purple-400 text-purple-300 px-6 py-3 rounded-lg font-semibold text-center hover:bg-purple-400 hover:text-white transition-all duration-300"
                    >
                      Get Quote
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Our AI Solutions */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Our AI Solutions?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We combine cutting-edge AI technology with deep business expertise to deliver measurable results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <CpuChipIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Cutting-Edge Technology</h3>
              <p className="text-gray-300">
                We use the latest AI models and frameworks including GPT-4, Claude-3, and custom neural networks.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShieldCheckIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise Security</h3>
              <p className="text-gray-300">
                Bank-level security with encryption, compliance, and privacy protection for all AI solutions.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <ChartBarIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Measurable ROI</h3>
              <p className="text-gray-300">
                Our AI solutions deliver measurable business value with detailed analytics and performance tracking.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <UsersIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Expert Support</h3>
              <p className="text-gray-300">
                Dedicated AI specialists and data scientists to ensure successful implementation and optimization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Let's discuss how our AI solutions can drive innovation and efficiency in your organization.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Get Free AI Consultation
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
              <Link 
                to="/demo" 
                className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                Schedule AI Demo
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
            </div>

            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-gray-300">
              <div className="flex items-center gap-3">
                <PhoneIcon className="w-6 h-6 text-purple-400" />
                <span>+1-302-464-0950</span>
              </div>
              <div className="flex items-center gap-3">
                <EnvelopeIcon className="w-6 h-6 text-purple-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}