import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Mic, Headphones, MessageCircle, Zap, Shield, Globe, Users, Clock, DollarSign, Target, Award, Phone, Bot } from 'lucide-react';
import { Link } from 'react-router-dom';

const AiVoiceAssistantEnterprisePage: React.FC = () => {
  const features = [
    {
      icon: <Mic className="w-8 h-8 text-cyan-400" />,
      title: 'Natural Language Processing',
      description: 'Advanced NLP with 99.5% accuracy in understanding complex voice commands and conversations.'
    },
    {
      icon: <Headphones className="w-8 h-8 text-green-400" />,
      title: 'Multi-Language Support',
      description: 'Support for 50+ languages with real-time translation and accent adaptation.'
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-purple-400" />,
      title: 'Conversational AI',
      description: 'Context-aware conversations with memory and personality customization for brand alignment.'
    },
    {
      icon: <Zap className="w-8 h-8 text-red-400" />,
      title: 'Real-time Processing',
      description: 'Ultra-low latency voice processing with sub-200ms response times for natural interactions.'
    },
    {
      icon: <Shield className="w-8 h-8 text-yellow-400" />,
      title: 'Enterprise Security',
      description: 'Bank-level encryption, compliance with GDPR, HIPAA, and SOC 2 Type II standards.'
    },
    {
      icon: <Globe className="w-8 h-8 text-blue-400" />,
      title: 'Cloud & On-Premise',
      description: 'Flexible deployment options with hybrid cloud and on-premise solutions available.'
    }
  ];

  const capabilities = [
    {
      title: 'Customer Service Automation',
      description: 'Handle 80% of customer inquiries with intelligent voice responses and seamless human handoff.',
      price: '$2,500/month',
      features: ['24/7 availability', 'Multi-channel support', 'Sentiment analysis', 'Call routing']
    },
    {
      title: 'Voice Analytics & Insights',
      description: 'Advanced analytics on customer interactions with sentiment tracking and performance metrics.',
      price: '$1,200/month',
      features: ['Real-time dashboards', 'Custom reports', 'Trend analysis', 'ROI tracking']
    },
    {
      title: 'Voice Commerce',
      description: 'Enable voice-based transactions with secure payment processing and order management.',
      price: '$3,500/month',
      features: ['Payment integration', 'Order tracking', 'Inventory sync', 'Fraud detection']
    },
    {
      title: 'Voice Training & Onboarding',
      description: 'Interactive voice training modules for employee onboarding and skill development.',
      price: '$1,800/month',
      features: ['Custom training paths', 'Progress tracking', 'Certification', 'Multi-language support']
    },
    {
      title: 'Voice Data Management',
      description: 'Secure voice data storage, processing, and compliance management.',
      price: '$900/month',
      features: ['Data encryption', 'Retention policies', 'Compliance reporting', 'Backup & recovery']
    },
    {
      title: 'Voice Integration APIs',
      description: 'Comprehensive APIs for integrating voice capabilities into existing systems.',
      price: '$1,500/month',
      features: ['RESTful APIs', 'WebSocket support', 'SDK libraries', 'Documentation']
    }
  ];

  const benefits = [
    {
      icon: <DollarSign className="w-6 h-6 text-green-400" />,
      title: 'Cost Reduction',
      description: 'Reduce customer service costs by 60% with automated voice interactions'
    },
    {
      icon: <Target className="w-6 h-6 text-blue-400" />,
      title: 'Improved Efficiency',
      description: 'Handle 5x more customer interactions with the same resources'
    },
    {
      icon: <Award className="w-6 h-6 text-purple-400" />,
      title: 'Enhanced Experience',
      description: 'Provide 24/7 personalized voice assistance for better customer satisfaction'
    },
    {
      icon: <Clock className="w-6 h-6 text-cyan-400" />,
      title: 'Instant Deployment',
      description: 'Deploy voice solutions in days, not months, with our pre-built templates'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$2,999',
      period: '/month',
      description: 'Perfect for small to medium businesses',
      features: [
        'Up to 1,000 voice interactions/month',
        'Basic NLP capabilities',
        '5 languages supported',
        'Email support',
        'Standard security',
        '1 integration',
        'Basic analytics'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$7,999',
      period: '/month',
      description: 'Ideal for growing enterprises',
      features: [
        'Up to 10,000 voice interactions/month',
        'Advanced NLP with custom models',
        '25 languages supported',
        'Priority support',
        'Enhanced security',
        'Up to 10 integrations',
        'Advanced analytics',
        'Custom voice training'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$19,999',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited voice interactions',
        'Custom AI model development',
        '50+ languages supported',
        '24/7 dedicated support',
        'Enterprise security',
        'Unlimited integrations',
        'Custom analytics',
        'White-label solution',
        'On-premise deployment',
        'Dedicated account manager'
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: 'Healthcare',
      description: 'Voice-enabled patient scheduling, medication reminders, and symptom checking.',
      icon: <Bot className="w-6 h-6 text-red-400" />
    },
    {
      title: 'Financial Services',
      description: 'Voice banking, account inquiries, and fraud detection with voice biometrics.',
      icon: <Bot className="w-6 h-6 text-green-400" />
    },
    {
      title: 'E-commerce',
      description: 'Voice shopping, order tracking, and customer support with natural conversations.',
      icon: <Bot className="w-6 h-6 text-blue-400" />
    },
    {
      title: 'Education',
      description: 'Interactive learning, language practice, and accessibility support.',
      icon: <Bot className="w-6 h-6 text-purple-400" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Voice Assistant Enterprise - Advanced Conversational AI Platform | Zion Tech Group</title>
        <meta name="description" content="Transform customer interactions with our enterprise AI voice assistant. Natural language processing, multi-language support, and 99.5% accuracy. Starting at $2,999/month." />
        <meta name="keywords" content="AI voice assistant, conversational AI, voice AI, enterprise voice, natural language processing, voice automation" />
        <meta property="og:title" content="AI Voice Assistant Enterprise - Zion Tech Group" />
        <meta property="og:description" content="Advanced enterprise voice AI platform with natural language processing and multi-language support." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-voice-assistant-enterprise" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Voice Assistant
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  {" "}Enterprise
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Revolutionize customer interactions with our advanced AI voice assistant platform. 
                Natural conversations, multi-language support, and enterprise-grade security for modern businesses.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link 
                  to="/contact" 
                  className="inline-flex items-center bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <a 
                  href="tel:+13024640950" 
                  className="inline-flex items-center border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"
                >
                  <Phone className="mr-2 w-5 h-5" />
                  Call +1 302 464 0950
                </a>
              </div>
              
              {/* Key Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">99.5%</div>
                  <div className="text-gray-300">Accuracy Rate</div>
                </div>
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
                  <div className="text-3xl font-bold text-green-400 mb-2">&lt; 200ms</div>
                  <div className="text-gray-300">Response Time</div>
                </div>
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
                  <div className="text-3xl font-bold text-purple-400 mb-2">50+</div>
                  <div className="text-gray-300">Languages Supported</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Advanced Voice AI Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Cutting-edge technology for natural voice interactions
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700 hover:border-cyan-500 transition-colors">
                  <div className="mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Comprehensive Voice Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Modular capabilities for every business need
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {capabilities.map((capability, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700 hover:border-cyan-500 transition-colors">
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {capability.title}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {capability.description}
                  </p>
                  <div className="text-cyan-400 font-semibold text-lg mb-4">
                    {capability.price}
                  </div>
                  <ul className="space-y-2">
                    {capability.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Industry Applications
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Proven solutions across various industries
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700 hover:border-cyan-500 transition-colors text-center">
                  <div className="flex justify-center mb-4">
                    {useCase.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {useCase.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our Voice AI Platform?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Proven results and industry-leading technology
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Enterprise-Grade Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Scalable solutions for businesses of all sizes
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border transition-all duration-300 ${
                  plan.popular 
                    ? 'border-cyan-500 shadow-lg shadow-cyan-500/25 scale-105' 
                    : 'border-slate-700 hover:border-cyan-500'
                }`}>
                  {plan.popular && (
                    <div className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white text-sm font-bold py-1 px-3 rounded-full text-center mb-4">
                      Most Popular
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="text-4xl font-bold text-cyan-400 mb-2">
                      {plan.price}
                      <span className="text-lg text-gray-400">{plan.period}</span>
                    </div>
                    <p className="text-gray-300">{plan.description}</p>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link 
                    to="/contact" 
                    className={`w-full inline-flex items-center justify-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-600 to-purple-600 text-white hover:from-cyan-700 hover:to-purple-700'
                        : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-900/50 to-purple-900/50 p-12 rounded-lg border border-slate-700">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Transform Customer Interactions?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Start your free trial today and experience the power of AI voice technology
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="inline-flex items-center bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <a 
                  href="mailto:kleber@ziontechgroup.com" 
                  className="inline-flex items-center border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"
                >
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AiVoiceAssistantEnterprisePage;