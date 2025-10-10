'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, Star, ArrowRight, Zap, Brain, Code, BarChart, Users, Shield, Globe, Smartphone, Settings, Calendar, FileText, Target, Mail, Search, Cpu, Sparkles } from 'lucide-react';

const MicroSaasPage: React.FC = () => {
  const microSaasTools = [
    {
      id: '1',
      name: 'AI Analytics Dashboard',
      description: 'Comprehensive business intelligence with AI-powered insights',
      category: 'Analytics',
      icon: BarChart,
      features: ['Real-time analytics', 'AI predictions', 'Custom dashboards', 'Data visualization'],
      price: '$99/month',
      popular: true
    },
    {
      id: '2',
      name: 'AI-Powered CRM',
      description: 'Intelligent customer relationship management system',
      category: 'CRM',
      icon: Users,
      features: ['Lead scoring', 'Automated follow-ups', 'Sales forecasting', 'Customer insights'],
      price: '$149/month',
      popular: false
    },
    {
      id: '3',
      name: 'AI Content Studio',
      description: 'Create engaging content with AI assistance',
      category: 'Content',
      icon: Code,
      features: ['Content generation', 'SEO optimization', 'Brand voice consistency', 'Multi-format support'],
      price: '$79/month',
      popular: false
    },
    {
      id: '4',
      name: 'AI Chatbot Builder',
      description: 'Build and deploy intelligent chatbots',
      category: 'Automation',
      icon: Brain,
      features: ['No-code builder', 'Multi-language support', 'Integration APIs', 'Analytics dashboard'],
      price: '$129/month',
      popular: true
    },
    {
      id: '5',
      name: 'AI Email Marketing',
      description: 'Automated email campaigns with AI optimization',
      category: 'Marketing',
      icon: Mail,
      features: ['Smart segmentation', 'A/B testing', 'Send time optimization', 'Performance analytics'],
      price: '$89/month',
      popular: false
    },
    {
      id: '6',
      name: 'AI Mobile App Builder',
      description: 'Create mobile apps with AI-powered features',
      category: 'Development',
      icon: Smartphone,
      features: ['Drag-and-drop builder', 'AI recommendations', 'Cross-platform', 'App store deployment'],
      price: '$199/month',
      popular: false
    },
    {
      id: '7',
      name: 'AI SEO Optimizer',
      description: 'Optimize your website for search engines',
      category: 'SEO',
      icon: Search,
      features: ['Keyword research', 'Content optimization', 'Technical SEO', 'Rank tracking'],
      price: '$69/month',
      popular: false
    },
    {
      id: '8',
      name: 'AI Invoice Generator',
      description: 'Automated invoice creation and management',
      category: 'Finance',
      icon: FileText,
      features: ['Auto-generation', 'Payment tracking', 'Tax calculations', 'Client portal'],
      price: '$49/month',
      popular: false
    }
  ];

  const categories = ['All', 'Analytics', 'CRM', 'Content', 'Automation', 'Marketing', 'Development', 'SEO', 'Finance'];

  const benefits = [
    {
      icon: Zap,
      title: 'Quick Setup',
      description: 'Get started in minutes with our pre-built templates'
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security and 99.9% uptime guarantee'
    },
    {
      icon: Globe,
      title: 'Scalable',
      description: 'Grows with your business from startup to enterprise'
    },
    {
      icon: Settings,
      title: 'Easy Integration',
      description: 'Connect with your existing tools and workflows'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group | 50+ AI Tools</title>
        <meta name="description" content="Discover our collection of 50+ AI-powered micro SAAS tools. Boost productivity with intelligent solutions for every business need." />
        <meta name="keywords" content="micro SAAS, AI tools, business software, productivity tools, automation, AI solutions" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Micro <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">SAAS</span> Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Discover our collection of 50+ AI-powered micro SAAS tools designed to boost productivity and streamline your business operations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="#tools"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                <Cpu className="w-5 h-5" />
                Explore Tools
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <Sparkles className="w-5 h-5" />
                Get Custom Solution
              </Link>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Choose Our Micro SAAS Tools?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Built with cutting-edge AI technology to solve specific business challenges efficiently.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tools Grid */}
        <section id="tools" className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our AI-Powered Tools
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our comprehensive collection of micro SAAS tools designed for modern businesses.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {microSaasTools.map((tool) => (
                <div
                  key={tool.id}
                  className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 border transition-all duration-300 hover:bg-white/20 ${
                    tool.popular ? 'border-purple-400/50' : 'border-white/10'
                  }`}
                >
                  {tool.popular && (
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm font-semibold py-1 px-3 rounded-full mb-4">
                      <Star className="w-4 h-4" />
                      Popular
                    </div>
                  )}

                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg mb-4">
                      <tool.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{tool.name}</h3>
                    <p className="text-purple-400 text-sm mb-4">{tool.category}</p>
                  </div>

                  <p className="text-gray-300 text-sm mb-4 text-center">{tool.description}</p>

                  <div className="mb-4">
                    <h4 className="text-white font-semibold mb-2 text-sm">Key Features:</h4>
                    <ul className="space-y-1">
                      {tool.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="text-gray-300 text-xs flex items-center">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="text-center mb-4">
                    <span className="text-2xl font-bold text-white">{tool.price}</span>
                  </div>

                  <Link
                    to={`/micro-saas/${tool.id}`}
                    className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-2 px-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">
                Need a Custom Solution?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Can't find the perfect tool? We can create a custom micro SAAS solution tailored to your specific business needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
                >
                  <Target className="w-5 h-5" />
                  Request Custom Tool
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <Calendar className="w-5 h-5" />
                  Schedule Demo
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MicroSaasPage;
