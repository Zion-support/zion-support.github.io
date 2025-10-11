'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { MessageSquare, Brain, Zap, CheckCircle, ArrowRight, Users, Clock, Shield, Globe, Settings } from 'lucide-react';

const AiChatbotBuilderPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
<<<<<<< HEAD
      title: 'No-Code Builder',
      description: 'Create sophisticated chatbots without any coding knowledge.',
      benefits: ['Drag-and-drop interface', 'Visual workflow builder', 'Pre-built templates', 'Easy customization'],
    },
    {
      icon: MessageCircle,
      title: 'Multi-Channel Support',
      description: 'Deploy your chatbot across multiple platforms and channels.',
      benefits: ['Website integration', 'Social media bots', 'Mobile apps', 'API integration'],
    },
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Track performance and optimize your chatbot with detailed analytics.',
      benefits: ['Conversation analytics', 'User engagement metrics', 'Performance insights', 'A/B testing'],
=======
      title: 'Natural Language Processing',
      description: 'Advanced NLP capabilities for human-like conversations',
      benefits: ['Context understanding', 'Intent recognition', 'Sentiment analysis']
    },
    {
      icon: Zap,
      title: 'Quick Deployment',
      description: 'Deploy your chatbot in minutes, not months',
      benefits: ['No-code builder', 'Pre-built templates', 'Instant setup']
>>>>>>> main
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
<<<<<<< HEAD
      description: 'Built with enterprise-grade security and compliance features.',
      benefits: ['Data encryption', 'GDPR compliance', 'SOC 2 certified', 'Secure hosting'],
=======
      description: 'Bank-level security for your chatbot interactions',
      benefits: ['Data encryption', 'Compliance ready', 'Secure hosting']
    },
    {
      icon: Globe,
      title: 'Multi-Language Support',
      description: 'Support for 50+ languages and dialects',
      benefits: ['Auto-translation', 'Cultural adaptation', 'Localized responses']
>>>>>>> main
    }
  ];

  const chatbotTypes = [
    {
      title: 'Customer Support',
<<<<<<< HEAD
      description: 'Provide 24/7 customer support with intelligent responses.',
      benefits: ['Instant responses', 'Reduced support costs', 'Improved satisfaction', 'Scalable support'],
    },
    {
      title: 'Lead Generation',
      description: 'Capture and qualify leads automatically.',
      benefits: ['Qualified leads', 'Higher conversion rates', 'Automated follow-up', 'Lead scoring'],
    },
    {
      title: 'E-commerce Assistant',
      description: 'Help customers find products and complete purchases.',
      benefits: ['Product recommendations', 'Order assistance', 'Inventory queries', 'Checkout support'],
    },
    {
      title: 'Internal Support',
      description: 'Streamline internal processes and employee support.',
      benefits: ['HR assistance', 'IT support', 'Process automation', 'Knowledge base'],
=======
      description: '24/7 customer service automation',
      icon: '🎧',
      features: ['Ticket routing', 'FAQ automation', 'Escalation management']
    },
    {
      title: 'Sales Assistant',
      description: 'Lead generation and qualification',
      icon: '💼',
      features: ['Lead scoring', 'Product recommendations', 'Appointment booking']
    },
    {
      title: 'HR Assistant',
      description: 'Employee support and onboarding',
      icon: '👥',
      features: ['Policy queries', 'Leave requests', 'Training guidance']
    },
    {
      title: 'E-commerce',
      description: 'Shopping assistance and support',
      icon: '🛒',
      features: ['Product search', 'Order tracking', 'Returns processing']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      features: [
        'Up to 1,000 conversations/month',
        'Basic NLP capabilities',
        'Email support',
        'Standard templates'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      features: [
        'Up to 10,000 conversations/month',
        'Advanced NLP & AI',
        'Priority support',
        'Custom integrations',
        'Analytics dashboard'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      features: [
        'Unlimited conversations',
        'Custom AI training',
        'Dedicated support',
        'White-label solution',
        'Advanced analytics'
      ],
      popular: false
>>>>>>> main
    }
  ];

  return (
    <>
      <Helmet>
<<<<<<< HEAD
        </Helmet><title>AI Chatbot Builder - Zion Tech Group</title>
        <meta name="description" content="Build intelligent chatbots without coding. Create, deploy, and manage AI-powered chatbots for customer support, lead generation, and more." />
        <meta name="keywords" content="AI chatbot builder, no-code chatbot, conversational AI, chatbot platform" />
=======
        <title>AI Chatbot Builder - Zion Tech Group | Intelligent Conversational AI</title>
        <meta name="description" content="Build intelligent chatbots with our AI-powered platform. Create conversational AI solutions for customer service, sales, and support with advanced NLP capabilities." />
        <meta name="keywords" content="AI chatbot, chatbot builder, conversational AI, customer service automation, NLP, virtual assistant" />
>>>>>>> main
      </Helmet>
      
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
<<<<<<< HEAD
        </main></main><section className="relative py-20 px-4 sm:px-6 lg:px-8">
          </section><div className="
            </div><div className="text-center">
              </div><h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Chatbot Builder
=======
        <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold text-white mb-6">
                AI <span className="text-cyan-400">Chatbot Builder</span>
>>>>>>> main
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Create intelligent, conversational AI chatbots that understand context, learn from interactions, 
                and provide exceptional customer experiences. No coding required.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
<<<<<<< HEAD
                </div><button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
=======
                <a 
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                >
>>>>>>> main
                  Start Building
                </a>
                <a 
                  href="tel:+13024640950"
                  className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  Call: (302) 464-0950
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
<<<<<<< HEAD
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          </section><div className="
            </div><div className="text-center mb-16">
              </div><h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Powerful Features
              </h2>
              <p className="text-xl text-gray-300">
                Everything you need to build and deploy intelligent chatbots
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                </div><div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  </div><feature.icon className="w-12 h-12 text-blue-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      </ul><li key={benefitIndex} className="flex items-center text-sm text-gray-400">
                        </li><CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}

              </h2>
              <p className="text-xl text-gray-300">
                Discover how chatbots can transform your business
=======
        <section className="py-16 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Powerful Features</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Our AI chatbot platform provides everything you need to create intelligent, 
                engaging conversational experiences.
>>>>>>> main
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<<<<<<< HEAD
              {useCases.map((useCase, index) => (
                </div><div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  </div><h3 className="text-xl font-semibold text-white mb-3">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {useCase.description}
                  </p>
                  <ul className="space-y-2">
                    {useCase.benefits.map((benefit, idx) => (
                      </ul><li key={idx} className="flex items-center text-sm text-gray-400">
                        </li><CheckCircle className="w-4 h-4 text-green-400 mr-2" />
=======
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-lg rounded-lg p-6 border border-cyan-500/20">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
>>>>>>> main
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Chatbot Types Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Chatbot Solutions</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Pre-built chatbot templates for every business need. Customize and deploy in minutes.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {chatbotTypes.map((type, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-lg rounded-lg p-6 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 text-center">
                  <div className="text-4xl mb-4">{type.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{type.title}</h3>
                  <p className="text-gray-300 mb-4">{type.description}</p>
                  <ul className="space-y-2">
                    {type.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Why Choose Our Chatbot Platform?</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Join thousands of businesses using our AI chatbot solutions to improve customer experience.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">24/7 Availability</h3>
                <p className="text-gray-300">Your customers get instant responses anytime, anywhere</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Instant Setup</h3>
                <p className="text-gray-300">Deploy your chatbot in minutes with our no-code platform</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Easy Management</h3>
                <p className="text-gray-300">Update and optimize your chatbot with simple tools</p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Simple Pricing</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Choose the perfect plan for your chatbot needs. All plans include 24/7 support.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-slate-800/50 backdrop-blur-lg rounded-lg p-6 border ${plan.popular ? 'border-cyan-500' : 'border-gray-600'} relative`}>
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
                    </div>
                  )}
                  <h3 className="text-xl font-semibold text-white mb-4">{plan.name}</h3>
                  <div className="text-3xl font-bold text-cyan-400 mb-4">
                    {plan.price}<span className="text-lg text-gray-400">{plan.period}</span>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a 
                    href="/contact" 
                    className={`w-full py-2 px-4 rounded-lg transition-colors text-center block ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white' 
                        : 'bg-gray-600 hover:bg-gray-700 text-white'
                    }`}
                  >
                    {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
<<<<<<< HEAD
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          </section><div className="
            </div><h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Build Your Chatbot?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start building your intelligent chatbot today and transform your customer experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              </div><button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Start Building
              </button>
              <button className="border border-gray-300 text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors">
                Contact Sales
              </button>
=======
        <section className="py-16 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-lg p-8 text-center border border-cyan-500/20">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Build Your Chatbot?</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Start creating intelligent conversations today. Get a free consultation and see how 
                our AI chatbot can transform your customer experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  Start Building
                </a>
                <a 
                  href="tel:+13024640950"
                  className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  Call: (302) 464-0950
                </a>
              </div>
>>>>>>> main
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

<<<<<<< HEAD

=======
export default AiChatbotBuilderPage;
>>>>>>> main
