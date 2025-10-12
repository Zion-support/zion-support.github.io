import React from 'react';
import { CheckCircle, ArrowRight, Brain, Database, Shield, Code, Smartphone, Globe, DollarSign, Star } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const MicroSAASServicesPage: React.FC = () => {
  const microSaasServices = [
    {
      title: 'AI Task Manager',
      description: 'Intelligent task management with AI-powered prioritization and automation.',
      features: ['Smart task prioritization', 'Automated scheduling', 'Team collaboration', 'Progress tracking'],
      price: '$29/month',
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      link: '/ai-task-manager'
    },
    {
      title: 'AI Expense Tracker',
      description: 'Automated expense tracking with AI-powered categorization and insights.',
      features: ['Receipt scanning', 'Auto-categorization', 'Budget alerts', 'Tax preparation'],
      price: '$19/month',
      icon: <Database className="w-8 h-8 text-green-500" />,
      link: '/ai-expense-tracker'
    },
    {
      title: 'AI Password Manager',
      description: 'Secure password management with AI-powered security recommendations.',
      features: ['Password generation', 'Security scoring', 'Breach monitoring', 'Multi-device sync'],
      price: '$15/month',
      icon: <Shield className="w-8 h-8 text-red-500" />,
      link: '/ai-password-manager'
    },
    {
      title: 'AI Invoice Generator',
      description: 'Automated invoice creation with AI-powered customization and tracking.',
      features: ['Template customization', 'Auto-calculation', 'Payment tracking', 'Client management'],
      price: '$25/month',
      icon: <Code className="w-8 h-8 text-purple-500" />,
      link: '/ai-invoice-generator'
    },
    {
      title: 'AI Health Tracker',
      description: 'Personal health monitoring with AI-powered insights and recommendations.',
      features: ['Health metrics tracking', 'AI insights', 'Goal setting', 'Progress reports'],
      price: '$35/month',
      icon: <Smartphone className="w-8 h-8 text-orange-500" />,
      link: '/ai-health-tracker'
    },
    {
      title: 'AI Smart Calendar',
      description: 'Intelligent calendar management with AI-powered scheduling optimization.',
      features: ['Smart scheduling', 'Meeting optimization', 'Time blocking', 'Integration sync'],
      price: '$22/month',
      icon: <Globe className="w-8 h-8 text-cyan-500" />,
      link: '/ai-smart-calendar'
    }
  ];

  const benefits = [
    'Affordable monthly pricing',
    'No setup fees or contracts',
    'Instant access and deployment',
    'Regular feature updates',
    '24/7 customer support',
    'Cancel anytime'
  ];

  const stats = [
    { number: '1000+', label: 'Active Users' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '50%', label: 'Time Saved' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Micro SAAS Services - Zion Tech Group</title>
        <meta name="description" content="Affordable micro SAAS applications powered by AI. Task management, expense tracking, password management, and more." />
        <meta name="keywords" content="micro SAAS, AI applications, task management, expense tracking, password manager" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                Micro <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">SAAS Solutions</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Powerful, affordable micro applications powered by AI. Get the tools you need without the complexity 
                of enterprise software.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link 
                  to="/about" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Micro SAAS Services Grid */}
        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Our Micro SAAS Applications</h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Choose from our collection of AI-powered micro applications designed for specific business needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasServices.map((service, index) => (
                <Link 
                  key={index} 
                  to={service.link}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group"
                >
                  <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3">Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-white">{service.price}</div>
                    <div className="flex items-center text-blue-400 group-hover:text-blue-300 transition-colors">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Why Choose Our Micro SAAS?</h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Our micro SAAS applications are designed to be simple, affordable, and powerful.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" />
                  <span className="text-white font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 lg:p-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                  Ready to Try Our Micro SAAS Applications?
                </h2>
                <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                  Start with a free trial and see how our micro SAAS solutions can help your business.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/contact"
                    className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
                  >
                    Start Free Trial
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                  <Link 
                    to="/ai-services" 
                    className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                  >
                    View AI Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default MicroSAASServicesPage;
