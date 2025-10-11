'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { MessageSquare, Zap, CheckCircle, ArrowRight, Brain, Users, Shield, Clock, Globe, Target, Star, Bot } from 'lucide-react';

const AiChatbotEnterprisePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Enterprise Chatbot - Advanced Business Automation | Zion Tech Group</title>
        <meta name="description" content="Deploy enterprise-grade AI chatbots for large organizations. Advanced NLP, multi-channel support, and seamless integration with existing systems." />
        <meta name="keywords" content="enterprise chatbot, AI automation, business chatbot, customer service AI, enterprise AI solutions" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-6">
                <MessageSquare className="w-4 h-4 mr-2" />
                Enterprise AI Solution
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                AI Enterprise Chatbot
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Deploy enterprise-grade AI chatbots that scale with your business. 
                Advanced natural language processing, multi-channel support, and seamless integration with your existing systems.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center group"
                >
                  Get Enterprise Demo
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="#features" 
                  className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Enterprise-Grade <span className="text-cyan-400">Capabilities</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Built for large organizations with advanced security, scalability, and integration requirements.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Brain,
                  title: 'Advanced NLP',
                  description: 'State-of-the-art natural language processing with context awareness and intent recognition.',
                  features: ['Context Understanding', 'Intent Recognition', 'Sentiment Analysis', 'Multi-language Support']
                },
                {
                  icon: Shield,
                  title: 'Enterprise Security',
                  description: 'Bank-level security with encryption, compliance, and audit trails for enterprise requirements.',
                  features: ['Data Encryption', 'GDPR Compliance', 'SOC 2 Type II', 'Audit Logging']
                },
                {
                  icon: Zap,
                  title: 'High Performance',
                  description: 'Handle millions of conversations with sub-second response times and 99.9% uptime.',
                  features: ['Auto-scaling', 'Load Balancing', 'Global CDN', 'SLA Guarantees']
                },
                {
                  icon: Globe,
                  title: 'Multi-Channel',
                  description: 'Deploy across websites, mobile apps, social media, and messaging platforms.',
                  features: ['Web Integration', 'Mobile SDK', 'Social Media', 'Messaging APIs']
                },
                {
                  icon: Users,
                  title: 'Team Management',
                  description: 'Advanced user management with role-based access control and team collaboration.',
                  features: ['Role-based Access', 'Team Collaboration', 'User Analytics', 'Permission Management']
                },
                {
                  icon: Target,
                  title: 'Custom Integration',
                  description: 'Seamless integration with your existing CRM, ERP, and business systems.',
                  features: ['API Integration', 'Webhook Support', 'Custom Connectors', 'Data Synchronization']
                }
              ].map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-500 hover:transform hover:scale-105">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-6">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.features.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-16 px-4 bg-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Enterprise <span className="text-cyan-400">Applications</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transform your enterprise operations with AI-powered automation and customer engagement.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Customer Service',
                  description: 'Handle complex customer inquiries with intelligent routing and escalation.',
                  icon: '🎧',
                  benefits: ['24/7 Support', 'Intelligent Routing', 'Escalation Management', 'Customer Satisfaction']
                },
                {
                  title: 'Sales Automation',
                  description: 'Qualify leads, answer product questions, and guide customers through the sales process.',
                  icon: '💼',
                  benefits: ['Lead Qualification', 'Product Information', 'Sales Guidance', 'Conversion Tracking']
                },
                {
                  title: 'HR Support',
                  description: 'Automate HR processes, answer employee questions, and manage internal communications.',
                  icon: '👥',
                  benefits: ['Employee Support', 'Policy Information', 'Process Automation', 'Internal Communication']
                },
                {
                  title: 'IT Helpdesk',
                  description: 'Provide technical support, troubleshoot issues, and manage IT service requests.',
                  icon: '🛠️',
                  benefits: ['Technical Support', 'Issue Resolution', 'Service Management', 'Knowledge Base']
                },
                {
                  title: 'Compliance & Legal',
                  description: 'Handle compliance questions, legal inquiries, and regulatory requirements.',
                  icon: '⚖️',
                  benefits: ['Compliance Support', 'Legal Information', 'Regulatory Updates', 'Documentation']
                },
                {
                  title: 'Training & Onboarding',
                  description: 'Automate employee training, onboarding processes, and knowledge transfer.',
                  icon: '🎓',
                  benefits: ['Training Automation', 'Onboarding Support', 'Knowledge Transfer', 'Progress Tracking']
                }
              ].map((useCase, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-purple-400/30 transition-all duration-300">
                  <div className="text-4xl mb-4">{useCase.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-4">{useCase.title}</h3>
                  <p className="text-gray-300 mb-6">{useCase.description}</p>
                  <ul className="space-y-2">
                    {useCase.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-purple-400 mr-3 flex-shrink-0" />
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
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Enterprise <span className="text-cyan-400">Pricing</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Flexible pricing options designed for enterprise needs. Contact us for custom solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: 'Professional',
                  price: '$2,999',
                  period: '/month',
                  description: 'Perfect for mid-size enterprises',
                  features: [
                    'Up to 100,000 conversations/month',
                    'Advanced AI models',
                    'Multi-channel deployment',
                    'Priority support',
                    'Custom integrations',
                    'Analytics dashboard'
                  ],
                  popular: false
                },
                {
                  name: 'Enterprise',
                  price: '$9,999',
                  period: '/month',
                  description: 'Ideal for large organizations',
                  features: [
                    'Unlimited conversations',
                    'Custom AI training',
                    'White-label options',
                    'Dedicated support',
                    'Advanced analytics',
                    'SLA guarantees'
                  ],
                  popular: true
                },
                {
                  name: 'Custom',
                  price: 'Contact',
                  period: 'Us',
                  description: 'Tailored solutions for your needs',
                  features: [
                    'Custom pricing',
                    'On-premise deployment',
                    'Custom development',
                    'Dedicated team',
                    'SLA guarantees',
                    '24/7 support'
                  ],
                  popular: false
                }
              ].map((plan, index) => (
                <div key={index} className={`bg-white/5 backdrop-blur-lg rounded-2xl p-8 border transition-all duration-300 hover:transform hover:scale-105 ${
                  plan.popular ? 'border-cyan-400/50 ring-2 ring-cyan-400/20' : 'border-white/10 hover:border-cyan-400/30'
                }`}>
                  {plan.popular && (
                    <div className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-sm font-semibold px-4 py-2 rounded-full text-center mb-6">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-6">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a 
                    href="/contact" 
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-600 hover:to-purple-600' 
                        : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                    }`}
                  >
                    Get Started
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-slate-800/50 to-purple-900/50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready for Enterprise AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Transform your enterprise operations with AI-powered chatbots. 
              Get a custom demo tailored to your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center group"
              >
                Get Enterprise Demo
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="tel:+13024640950" 
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Call (302) 464-0950
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AiChatbotEnterprisePage;