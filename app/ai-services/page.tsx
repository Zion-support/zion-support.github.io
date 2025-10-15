import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  CheckCircle, 
  Star, 
  ArrowRight, 
  Brain, 
  Shield, 
  Clock, 
  Users, 
  TrendingUp,
  Zap,
  Database,
  Cloud,
  Smartphone,
  Globe,
  BarChart3,
  Mail,
  FileText,
  Calendar,
  Target,
  Rocket,
  Award,
  DollarSign,
  Cpu,
  Eye,
  MessageSquare,
  Search,
  Image,
  Video,
  Mic,
  Bot,
  Layers,
  Workflow
} from 'lucide-react';

const AiServicesPage: React.FC = () => {
  const aiServices = [
    {
      id: 'ai-automation-platform',
      title: 'AI Automation Platform',
      description: 'Comprehensive AI automation solution that streamlines business processes, reduces manual work, and increases efficiency across all departments.',
      features: [
        'Process automation with 95% accuracy',
        'Natural language processing for document handling',
        'Intelligent workflow orchestration',
        'Real-time decision making',
        'Integration with 500+ business tools',
        'Custom AI model training',
        'Scalable cloud infrastructure',
        'Advanced analytics and reporting'
      ],
      pricing: {
        starter: { price: '$2,999', period: '/month', features: ['Up to 10 processes', 'Basic AI models', 'Email support', 'Standard SLA'] },
        professional: { price: '$7,999', period: '/month', features: ['Up to 50 processes', 'Advanced AI models', 'Priority support', '99.9% SLA'] },
        enterprise: { price: '$19,999', period: '/month', features: ['Unlimited processes', 'Custom AI training', 'Dedicated support', '99.99% SLA'] }
      },
      icon: Workflow,
      color: 'from-blue-500 to-cyan-500',
      popular: true,
      category: 'Automation'
    },
    {
      id: 'ai-machine-learning-suite',
      title: 'AI Machine Learning Suite',
      description: 'Advanced machine learning platform for predictive analytics, pattern recognition, and intelligent data processing with custom model development.',
      features: [
        'Custom ML model development',
        'Predictive analytics and forecasting',
        'Real-time data processing',
        'AutoML capabilities',
        'Model deployment and monitoring',
        'A/B testing framework',
        'Data visualization tools',
        'Enterprise security compliance'
      ],
      pricing: {
        starter: { price: '$4,999', period: '/month', features: ['Up to 5 models', 'Basic ML algorithms', 'Email support', 'Standard infrastructure'] },
        professional: { price: '$12,999', period: '/month', features: ['Up to 25 models', 'Advanced algorithms', 'Priority support', 'Enhanced infrastructure'] },
        enterprise: { price: '$29,999', period: '/month', features: ['Unlimited models', 'Custom algorithms', 'Dedicated support', 'Private cloud'] }
      },
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      popular: false,
      category: 'Machine Learning'
    },
    {
      id: 'ai-computer-vision',
      title: 'AI Computer Vision Solutions',
      description: 'State-of-the-art computer vision services for image recognition, object detection, facial recognition, and visual content analysis.',
      features: [
        'Real-time image recognition',
        'Object detection and tracking',
        'Facial recognition and analysis',
        'OCR and document scanning',
        'Quality control automation',
        'Security surveillance AI',
        'Medical image analysis',
        'Custom vision model training'
      ],
      pricing: {
        starter: { price: '$1,999', period: '/month', features: ['1,000 images/day', 'Basic recognition', 'Email support', 'Standard accuracy'] },
        professional: { price: '$4,999', period: '/month', features: ['10,000 images/day', 'Advanced recognition', 'Priority support', 'High accuracy'] },
        enterprise: { price: '$12,999', period: '/month', features: ['Unlimited images', 'Custom models', 'Dedicated support', 'Maximum accuracy'] }
      },
      icon: Eye,
      color: 'from-green-500 to-emerald-500',
      popular: true,
      category: 'Computer Vision'
    },
    {
      id: 'ai-natural-language-processing',
      title: 'AI Natural Language Processing',
      description: 'Advanced NLP services for text analysis, sentiment analysis, language translation, and conversational AI development.',
      features: [
        'Multi-language text analysis',
        'Sentiment and emotion detection',
        'Language translation (100+ languages)',
        'Text summarization and extraction',
        'Named entity recognition',
        'Conversational AI development',
        'Document classification',
        'Real-time language processing'
      ],
      pricing: {
        starter: { price: '$2,499', period: '/month', features: ['100K words/month', 'Basic NLP', 'Email support', 'Standard languages'] },
        professional: { price: '$6,999', period: '/month', features: ['1M words/month', 'Advanced NLP', 'Priority support', 'All languages'] },
        enterprise: { price: '$16,999', period: '/month', features: ['Unlimited words', 'Custom models', 'Dedicated support', 'Custom languages'] }
      },
      icon: MessageSquare,
      color: 'from-orange-500 to-red-500',
      popular: false,
      category: 'NLP'
    },
    {
      id: 'ai-predictive-analytics',
      title: 'AI Predictive Analytics Platform',
      description: 'Comprehensive predictive analytics solution for forecasting, trend analysis, and data-driven decision making across all business functions.',
      features: [
        'Advanced forecasting algorithms',
        'Real-time trend analysis',
        'Risk assessment and mitigation',
        'Customer behavior prediction',
        'Sales and revenue forecasting',
        'Supply chain optimization',
        'Financial modeling',
        'Custom analytics dashboards'
      ],
      pricing: {
        starter: { price: '$3,999', period: '/month', features: ['5 data sources', 'Basic forecasting', 'Email support', 'Standard models'] },
        professional: { price: '$9,999', period: '/month', features: ['25 data sources', 'Advanced forecasting', 'Priority support', 'Custom models'] },
        enterprise: { price: '$24,999', period: '/month', features: ['Unlimited sources', 'AI-powered insights', 'Dedicated support', 'Custom algorithms'] }
      },
      icon: TrendingUp,
      color: 'from-indigo-500 to-purple-500',
      popular: true,
      category: 'Analytics'
    },
    {
      id: 'ai-conversational-ai',
      title: 'AI Conversational AI Platform',
      description: 'Advanced conversational AI platform for chatbots, virtual assistants, and voice-enabled applications with natural language understanding.',
      features: [
        'Multi-channel chatbot development',
        'Voice recognition and synthesis',
        'Natural language understanding',
        'Context-aware conversations',
        'Multi-language support',
        'Integration with business systems',
        'Analytics and optimization',
        'Custom AI training'
      ],
      pricing: {
        starter: { price: '$1,499', period: '/month', features: ['1,000 conversations/month', 'Basic AI', 'Email support', 'Standard channels'] },
        professional: { price: '$4,999', period: '/month', features: ['10,000 conversations/month', 'Advanced AI', 'Priority support', 'All channels'] },
        enterprise: { price: '$12,999', period: '/month', features: ['Unlimited conversations', 'Custom AI training', 'Dedicated support', 'White-label options'] }
      },
      icon: Bot,
      color: 'from-teal-500 to-blue-500',
      popular: false,
      category: 'Conversational AI'
    }
  ];

  const aiCapabilities = [
    {
      icon: Brain,
      title: 'Machine Learning',
      description: 'Custom ML model development, training, and deployment for your specific business needs.'
    },
    {
      icon: Eye,
      title: 'Computer Vision',
      description: 'Advanced image and video analysis, object detection, and visual content understanding.'
    },
    {
      icon: MessageSquare,
      title: 'Natural Language Processing',
      description: 'Text analysis, sentiment detection, language translation, and conversational AI.'
    },
    {
      icon: BarChart3,
      title: 'Predictive Analytics',
      description: 'Data-driven insights, forecasting, and trend analysis for informed decision making.'
    },
    {
      icon: Workflow,
      title: 'Process Automation',
      description: 'Intelligent automation of business processes with AI-powered decision making.'
    },
    {
      icon: Shield,
      title: 'AI Security',
      description: 'Advanced threat detection, fraud prevention, and security monitoring with AI.'
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'Rapid Implementation',
      description: 'Deploy AI solutions in weeks, not months, with our proven implementation methodology.'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with end-to-end encryption, compliance, and regular security audits.'
    },
    {
      icon: Clock,
      title: '24/7 AI Support',
      description: 'Round-the-clock technical support and AI model monitoring from our expert team.'
    },
    {
      icon: TrendingUp,
      title: 'Scalable AI Infrastructure',
      description: 'Cloud-native AI solutions that scale with your business growth and requirements.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI services including automation, machine learning, computer vision, NLP, and predictive analytics. Transform your business with cutting-edge AI solutions." />
        <meta name="keywords" content="ai services, machine learning, computer vision, nlp, predictive analytics, automation, artificial intelligence, ai consulting" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-services" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Services & Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with cutting-edge artificial intelligence solutions. From automation and machine learning 
              to computer vision and predictive analytics, we deliver AI-powered results that drive real business value.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Call +1 302 464 0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com" 
                className="border border-white/30 hover:bg-white/10 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                Email Us
              </a>
            </div>
          </div>

          {/* AI Capabilities */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Our AI Capabilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {aiCapabilities.map((capability, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-md rounded-lg p-6 text-center hover:bg-white/15 transition-all duration-300">
                  <capability.icon className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">{capability.title}</h3>
                  <p className="text-gray-300">{capability.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md rounded-lg p-6 text-center">
                <benefit.icon className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {aiServices.map((service, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-md rounded-xl border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-300">
                <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center`}>
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-sm text-blue-400 font-semibold">{service.category}</div>
                        <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                      </div>
                    </div>
                    {service.popular && (
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Popular
                      </span>
                    )}
                  </div>
                  
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 4).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Pricing:</h4>
                    <div className="grid grid-cols-3 gap-3">
                      {Object.entries(service.pricing).map(([plan, details]) => (
                        <div key={plan} className="text-center">
                          <div className="text-2xl font-bold text-white">{details.price}</div>
                          <div className="text-sm text-gray-400">{details.period}</div>
                          <div className="text-xs text-gray-500 capitalize">{plan}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <a 
                      href={`/ai-services/${service.id}`}
                      className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold text-center transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                    <a 
                      href="tel:+13024640950"
                      className="flex-1 border border-white/30 hover:bg-white/10 text-white px-6 py-3 rounded-lg font-semibold text-center transition-all duration-300 flex items-center justify-center"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Call Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-md rounded-xl border border-white/10 p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Harness the Power of AI?
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join industry leaders who trust Zion Tech Group for their AI transformation. 
              Get a free AI consultation and discover how artificial intelligence can revolutionize your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Schedule AI Consultation
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com" 
                className="border border-white/30 hover:bg-white/10 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                Get Custom AI Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AiServicesPage;