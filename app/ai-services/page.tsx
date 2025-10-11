import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Brain, ArrowRight, CheckCircle, Star, Zap, Shield, Globe, Database } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIServicesPage: React.FC = () => {
  const aiServices = [
    {
      title: 'AI Content Generator',
      description: 'Create high-quality content for blogs, social media, and marketing materials with advanced AI.',
      features: ['Blog posts', 'Social media content', 'Product descriptions', 'Email campaigns'],
      pricing: 'From $19.99/month',
      href: '/ai-content-generator',
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      popular: true
    },
    {
      title: 'AI Chatbot Builder',
      description: 'Build intelligent chatbots for customer service, sales, and support with no coding required.',
      features: ['Multi-language support', 'Custom training', 'Integration APIs', 'Analytics dashboard'],
      pricing: 'From $29.99/month',
      href: '/ai-chatbot-builder',
      icon: <Zap className="w-8 h-8 text-green-500" />,
      popular: false
    },
    {
      title: 'AI Analytics Dashboard',
      description: 'Transform your data into actionable insights with AI-powered analytics and visualization.',
      features: ['Real-time analytics', 'Predictive modeling', 'Custom reports', 'Data visualization'],
      pricing: 'From $39.99/month',
      href: '/ai-analytics-dashboard',
      icon: <Database className="w-8 h-8 text-purple-500" />,
      popular: false
    },
    {
      title: 'AI Email Assistant',
      description: 'Automate email management with smart categorization, responses, and scheduling.',
      features: ['Smart categorization', 'Auto-responses', 'Email scheduling', 'Priority detection'],
      pricing: 'From $14.99/month',
      href: '/ai-email-assistant',
      icon: <Globe className="w-8 h-8 text-orange-500" />,
      popular: false
    },
    {
      title: 'AI Voice Assistant',
      description: 'Create custom voice assistants for your business with natural language processing.',
      features: ['Voice recognition', 'Custom commands', 'Multi-language', 'Integration APIs'],
      pricing: 'From $49.99/month',
      href: '/ai-voice-assistant',
      icon: <Shield className="w-8 h-8 text-red-500" />,
      popular: false
    },
    {
      title: 'AI Smart Scheduler',
      description: 'Intelligent calendar management with AI-powered scheduling and team coordination.',
      features: ['Auto-scheduling', 'Team coordination', 'Smart automation', 'Conflict resolution'],
      pricing: 'From $9.99/month',
      href: '/ai-smart-scheduler',
      icon: <Brain className="w-8 h-8 text-cyan-500" />,
      popular: true
    },
    {
      title: 'AI Expense Tracker Pro',
      description: 'Advanced expense management with AI-powered receipt scanning and analytics.',
      features: ['Receipt scanning', 'Auto-categorization', 'Analytics', 'Multi-currency'],
      pricing: 'From $4.99/month',
      href: '/ai-expense-tracker-pro',
      icon: <Database className="w-8 h-8 text-green-500" />,
      popular: false
    },
    {
      title: 'AI Social Media Manager',
      description: 'AI-powered social media management with content creation and automation.',
      features: ['Content creation', 'Auto-posting', 'Analytics', 'Community management'],
      pricing: 'From $29.99/month',
      href: '/ai-social-media-manager',
      icon: <Globe className="w-8 h-8 text-pink-500" />,
      popular: true
    },
    {
      title: 'AI Document Processor',
      description: 'Automate document processing with AI-powered extraction and analysis.',
      features: ['Document extraction', 'Data validation', 'Format conversion', 'Batch processing'],
      pricing: 'From $24.99/month',
      href: '/ai-document-processor',
      icon: <Shield className="w-8 h-8 text-indigo-500" />,
      popular: false
    },
    {
      title: 'AI Code Assistant',
      description: 'AI-powered coding assistant for faster development and code optimization.',
      features: ['Code generation', 'Bug detection', 'Code review', 'Documentation'],
      pricing: 'From $19.99/month',
      href: '/ai-code-assistant',
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      popular: false
    },
    {
      title: 'AI Customer Support Bot',
      description: 'Advanced customer support automation with natural language understanding.',
      features: ['24/7 support', 'Multi-channel', 'Escalation handling', 'Knowledge base'],
      pricing: 'From $39.99/month',
      href: '/ai-customer-support-bot',
      icon: <Brain className="w-8 h-8 text-teal-500" />,
      popular: false
    },
    {
      title: 'AI Business Intelligence',
      description: 'Transform business data into strategic insights with AI-powered analytics.',
      features: ['Data integration', 'Predictive analytics', 'Custom dashboards', 'ROI tracking'],
      pricing: 'From $59.99/month',
      href: '/ai-business-intelligence',
      icon: <Database className="w-8 h-8 text-violet-500" />,
      popular: false
    }
  ];

  const benefits = [
    {
      icon: <Zap className="w-6 h-6 text-yellow-500" />,
      title: 'Automation',
      description: 'Automate repetitive tasks and focus on what matters most for your business growth.'
    },
    {
      icon: <Brain className="w-6 h-6 text-blue-500" />,
      title: 'Intelligence',
      description: 'Leverage advanced AI algorithms to make smarter decisions and improve efficiency.'
    },
    {
      icon: <Shield className="w-6 h-6 text-green-500" />,
      title: 'Security',
      description: 'Enterprise-grade security with encryption and compliance standards built-in.'
    },
    {
      icon: <Globe className="w-6 h-6 text-purple-500" />,
      title: 'Scalability',
      description: 'Scale your AI solutions as your business grows with flexible pricing plans.'
    }
  ];

  const stats = [
    { number: '500+', label: 'AI Services' },
    { number: '10K+', label: 'Active Users' },
    { number: '99.9%', label: 'Uptime' },
    { number: '4.8/5', label: 'Rating' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI services including content generation, chatbots, analytics, and automation. Transform your business with cutting-edge AI technology." />
        <meta name="keywords" content="AI services, artificial intelligence, automation, machine learning, business AI solutions" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your business with our comprehensive suite of AI-powered services. 
              From content generation to advanced analytics, we have the tools to accelerate your success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                Explore All Services
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                Contact Sales
              </button>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Benefits Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Our AI Services?</h2>
              <p className="text-xl text-gray-300">We combine cutting-edge technology with industry expertise</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 text-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4 mx-auto">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Services Grid */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our AI Services</h2>
              <p className="text-xl text-gray-300">Choose from our comprehensive suite of AI-powered solutions</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-6 border ${service.popular ? 'border-purple-500 ring-2 ring-purple-500' : 'border-white/20'} hover:bg-white/15 transition-all duration-300 group`}>
                  {service.popular && (
                    <div className="absolute -top-3 -right-3">
                      <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        Popular
                      </span>
                    </div>
                  )}
                  <div className="flex items-center mb-4">
                    {service.icon}
                    <h3 className="text-xl font-semibold text-white ml-3 group-hover:text-purple-300 transition-colors">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-lg font-bold text-white">{service.pricing}</span>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  <a
                    href={service.href}
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center group-hover:translate-y-1"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Transform Your Business with AI?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Join thousands of businesses that have revolutionized their operations with our AI services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Start Free Trial
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                  Schedule Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AIServicesPage;