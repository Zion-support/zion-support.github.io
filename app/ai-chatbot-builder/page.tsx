'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { MessageCircle, Brain, CheckCircle, ArrowRight, Star, Users, Award, Zap, Shield, BarChart, Target, Settings, Smartphone, Globe, Database, Server, Mail, Phone, MapPin, Clock, TrendingUp, Code, Eye, Mic, FileText, Heart, DollarSign, Box, Monitor, Link as LinkIcon, Wifi, Package, ShoppingCart, Sparkles, Cpu, Workflow } from 'lucide-react';

const AiChatbotBuilderPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
<<<<<<< HEAD
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      title: 'Natural Language Processing',
      description: 'Advanced NLP that understands context and intent',
      benefits: ['95% accuracy', 'Multi-language support', 'Context awareness']
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-purple-400" />,
      title: 'Conversational AI',
      description: 'Human-like conversations that engage customers',
      benefits: ['Natural responses', 'Personality customization', 'Emotion detection']
    },
    {
      icon: <Zap className="w-8 h-8 text-green-400" />,
      title: 'Smart Routing',
      description: 'Intelligent ticket routing and escalation',
      benefits: ['Auto-escalation', 'Priority handling', 'Seamless handoff']
    },
    {
      icon: <BarChart className="w-8 h-8 text-red-400" />,
      title: 'Analytics Dashboard',
      description: 'Comprehensive insights and performance metrics',
      benefits: ['Real-time analytics', 'Performance tracking', 'ROI measurement']
=======
      title: 'No-Code Builder',
      description: 'Create sophisticated chatbots without any programming knowledge using our visual interface',
      icon: <Zap className="w-8-h-8text-cyan-400" />,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'AI-Powered Responses',
      description: 'Natural language processing and machine learning for intelligent, contextual conversations',
      icon: <Brain className="w-8-h-8text-purple-400" />,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Multi-Channel Deployment',
      description: 'Deploy your chatbot across websites, mobile apps, social media, and messaging platforms',
      icon: <Globe className="w-8-h-8text-green-400" />,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Advanced Analytics',
      description: 'Track performance, user engagement, and conversation insights with detailed analytics',
      icon: <BarChart className="w-8-h-8text-indigo-400" />,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'Custom Integrations',
      description: 'Connect with CRM, helpdesk, payment systems, and other business tools seamlessly',
      icon: <Shield className="w-8-h-8text-red-400" />,
      color: 'from-red-500 to-pink-500'
    },
    {
      title: 'Real-time Monitoring',
      description: 'Monitor conversations in real-time and intervene when human assistance is needed',
      icon: <MessageCircle className="w-8-h-8text-teal-400" />,
      color: 'from-teal-500 to-cyan-500'
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
    }
  ];

  const chatbotTypes = [
    {
<<<<<<< HEAD
      title: 'Customer Support Bot',
      description: '24/7 customer service and support automation',
      price: '$299/month',
      features: ['FAQ automation', 'Ticket creation', 'Live chat handoff', 'Knowledge base']
    },
    {
      title: 'Sales Assistant Bot',
      description: 'Lead qualification and sales process automation',
      price: '$399/month',
      features: ['Lead scoring', 'Qualification questions', 'Appointment booking', 'CRM integration']
    },
    {
      title: 'E-commerce Bot',
      description: 'Shopping assistance and order management',
      price: '$499/month',
      features: ['Product recommendations', 'Order tracking', 'Payment processing', 'Inventory check']
    },
    {
      title: 'HR Assistant Bot',
      description: 'Employee support and HR process automation',
      price: '$349/month',
      features: ['Policy questions', 'Leave requests', 'Training scheduling', 'Onboarding help']
=======
      title: 'Customer Support',
      description: '24/7 automated customer support with instant responses and issue resolution',
      icon: <Users className="w-6-h-6text-blue-500" />,
      benefits: ['Reduce support tickets by 60%', 'Instant response time', 'Multilingual support']
    },
    {
      title: 'Lead Generation',
      description: 'Qualify and nurture leads automatically with intelligent conversation flows',
      icon: <Target className="w-6-h-6text-green-500" />,
      benefits: ['Increase lead conversion by 40%', 'Automated follow-ups', 'Lead scoring']
    },
    {
      title: 'E-commerce Assistant',
      description: 'Help customers find products, process orders, and handle returns seamlessly',
      icon: <ShoppingCart className="w-6-h-6text-purple-500" />,
      benefits: ['Boost sales by 25%', 'Reduce cart abandonment', 'Personalized recommendations']
    },
    {
      title: 'Internal Operations',
      description: 'Streamline internal processes with HR, IT support, and knowledge management bots',
      icon: <Clock className="w-6-h-6text-orange-500" />,
      benefits: ['Improve efficiency by 50%', 'Reduce response time', 'Standardized processes']
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
    }
  ];

  const stats = [
    { number: '500+', label: 'Chatbots Deployed', icon: <MessageCircle className="w-6 h-6 text-cyan-400" /> },
    { number: '95%', label: 'Customer Satisfaction', icon: <Star className="w-6 h-6 text-green-400" /> },
    { number: '80%', label: 'Query Resolution', icon: <CheckCircle className="w-6 h-6 text-purple-400" /> },
    { number: '24/7', label: 'Always Available', icon: <Clock className="w-6 h-6 text-red-400" /> }
  ];

  return (
<<<<<<< HEAD
    <>
      <Helmet>
        <title>AI Chatbot Builder - Zion Tech Group | Intelligent Conversational AI Solutions</title>
        <meta name="description" content="Build intelligent chatbots with our AI chatbot builder. Create conversational AI solutions for customer support, sales, and engagement with advanced NLP capabilities." />
        <meta name="keywords" content="AI chatbot builder, conversational AI, chatbot development, customer support bot, sales bot, NLP chatbot" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-chatbot-builder" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(34,197,94,0.4)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.4)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          
          <div className="relative max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-400 px-6 py-3 rounded-full text-sm font-medium mb-8 border border-blue-400/30">
              <MessageCircle className="w-4 h-4" />
              <span>AI Chatbot Builder</span>
            </div>
            
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Build Intelligent{' '}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 bg-clip-text text-transparent">
                Chatbots
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Create powerful conversational AI solutions that engage customers, automate support, 
              and drive business growth with our advanced chatbot builder.
=======
    <div className="min-h-screen bg-gradient-to-br from-slate-900-via-purple-900to-slate-900">
      <Helmet />
        <title>AI Chatbot Builder - Zion Tech Group</title>
        <meta name="description" content="Build intelligent chatbots without coding. Deploy across multiple channels with advanced AI capabilities." />
        <meta name="keywords" content="AI chatbot builder, no-code chatbot, conversational AI, customer support automation" />
      </Helmet>

      {/* Hero Section */}
      <section className="relativepy-20-px-4" />
        <div className="max-w-7-xlmx-auto text-center">
          <h1 className="text-5-xl md:text-7xl font-boldtext-white mb-6" />
            AI Chatbot
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400-bg-clip-texttext-transparent" />
              {' '}Builder
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8-max-w-3xlmx-auto" />
            Create intelligent, conversational chatbots without any coding. Deploy across multiple channels 
            and scale your customer engagement with advanced AI capabilities.
          </p>
          <div className="flex flex-col sm:flex-rowgap-4-justify-center">
            <Link to="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600  hover:to-purple-700 transition-all duration-300 flexitems-centerjustify-center" />
              Start Building Now
              <ArrowRight className="ml-2-w-5 h-5" />
            </Link>
            <Link to="/demo" className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900-transition-all duration-300" />
              View Demo
                    </Link>
      </div>
    </div>
      </section>

      {/* Features Section */}
      <section className="py-20-px-4" />
        <div className="max-w-7-xlmx-auto">
          <div className="text-centermb-16">
            <h2 className="text-4-xl font-boldtext-white mb-4" />
              Powerful Features for Every Need
            </h2>
            <p className="text-xl text-gray-300-max-w-3xlmx-auto" />
              Everything you need to build, deploy, and manage intelligent chatbots that deliver exceptional user experiences.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2-lg:grid-cols-3gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-400/50-transition-all duration-300" />
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4`} />
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semiboldtext-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20-px-4bg-slate-800/30" />
        <div className="max-w-7-xlmx-auto">
          <div className="text-centermb-16">
            <h2 className="text-4-xl font-boldtext-white mb-4" />
              Perfect for Every Business
            </h2>
            <p className="text-xl text-gray-300-max-w-3xlmx-auto" />
              From customer support to lead generation, our chatbot builder adapts to your specific business needs.
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                to="/contact" 
                className="group bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transform hover:scale-105"
              >
                <span>Build Your Bot</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/demo" 
                className="group border-2 border-blue-400 text-blue-400 px-10 py-4 rounded-xl font-semibold hover:bg-blue-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm"
              >
                <span>Try Live Demo</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
<<<<<<< HEAD
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-500/5" />
          <div className="relative max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="flex justify-center mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
=======
          
          <div className="grid md:grid-cols-2-lg:grid-cols-4gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6-borderborder-slate-700" />
                <div className="flexitems-centermb-4">
                  {useCase.icon}
                  <h3 className="text-xl font-semiboldtext-whiteml-3">{useCase.title}</h3>
                </div>
                <p className="text-gray-300-mb-4">{useCase.description}</p>
                <ul className="space-y-2" />
                  {useCase.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-centertext-smtext-gray-400" />
                      <CheckCircle className="w-4 h-4 text-green-400-mr-2flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20-px-4" />
        <div className="max-w-7-xlmx-auto">
          <div className="text-centermb-16">
            <h2 className="text-4-xl font-boldtext-white mb-4" />
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300-max-w-3xlmx-auto" />
              Choose the plan that fits your business needs. No hidden fees, no surprises.
            </p>
          </div>
          
          <div className="gridmd:grid-cols-3-gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border ${
                plan.popular ? 'border-cyan-400/50 ring-2 ring-cyan-400/20' : 'border-slate-700'
              } relative`} />
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2-transform-translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-fulltext-smfont-semibold" />
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2-xl font-boldtext-white mb-2">{plan.name}</h3>
                  <div className="flexitems-baselinejustify-center">
                    <span className="text-4-xlfont-bold text-white">{plan.price}</span>
                    <span className="text-gray-400-ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300-mt-2">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-8" />
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flexitems-centertext-gray-300" />
                      <CheckCircle className="w-5 h-5 text-green-400-mr-3flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                      : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                  }`} />
                  Get Started
                </Link>
              </div>
            ))}
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
          </div>
        </section>

<<<<<<< HEAD
        {/* Features Section */}
        <section className="py-20 px-4 relative">
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Powerful <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Chatbot Features</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced AI capabilities that make your chatbots intelligent and engaging
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center space-x-2 text-gray-400 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Chatbot Types Section */}
        <section className="py-20 px-4 relative">
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Chatbot <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Solutions</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Pre-built chatbot templates for different business needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {chatbotTypes.map((type, index) => (
                <div key={index} className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10">
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                    {type.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {type.description}
                  </p>
                  <div className="text-3xl font-bold text-blue-400 mb-6">
                    {type.price}
                  </div>
                  <div className="space-y-3 mb-6">
                    {type.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2 text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link 
                    to="/contact"
                    className="w-full block text-center py-3 px-6 bg-gradient-to-r from-blue-500 to-cyan-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-700 transition-all duration-300"
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gradient-to-r from-blue-900/50 to-cyan-900/50 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-500/5"></div>
              <div className="relative z-10">
                <h2 className="text-4xl font-bold text-white mb-6">
                  Ready to Build Your Chatbot?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Join thousands of businesses using our AI chatbot builder to enhance customer engagement and automate support.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact"
                    className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
                  >
                    Start Building
                  </Link>
                  <a
                    href="tel:+13024640950"
                    className="border border-blue-500 text-blue-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-500/10 transition-all duration-300 transform hover:scale-105"
                  >
                    Call +1 302 464 0950
                  </a>
                </div>
                <div className="mt-8 text-gray-400">
                  <p>Email: kleber@ziontechgroup.com</p>
                  <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
=======
      {/* CTA Section */}
      <section className="py-20-px-4" />
        <div className="max-w-4-xlmx-auto text-center">
          <h2 className="text-4-xl font-boldtext-white mb-6" />
            Ready to Build Your First Chatbot?
          </h2>
          <p className="text-xltext-gray-300 mb-8" />
            Join thousands of businesses already using our platform to create amazing customer experiences.
          </p>
          <div className="flex flex-col sm:flex-rowgap-4-justify-center">
            <Link to="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600  hover:to-purple-700 transition-all duration-300 flexitems-centerjustify-center" />
              Start Your Free Trial
              <ArrowRight className="ml-2-w-5 h-5" />
            </Link>
            <Link to="/demo" className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900-transition-all duration-300" />
              Schedule Demo
                    </Link>
      </div>
    </div>
      </section>
    </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
  );
};

export default AiChatbotBuilderPage;