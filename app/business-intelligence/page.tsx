import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, BarChart3, TrendingUp, Users, Target, Award, Clock, Shield, Zap, Brain, Globe, Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const BusinessIntelligencePage: React.FC = () => {
  const features = [
    {
      icon: <BarChart3 className="w-8 h-8 text-blue-500" />,
      title: 'Advanced Analytics',
      description: 'Transform raw data into actionable insights with our powerful analytics platform.'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-green-500" />,
      title: 'Real-time Dashboards',
      description: 'Monitor key performance indicators with interactive, real-time dashboards.'
    },
    {
      icon: <Target className="w-8 h-8 text-purple-500" />,
      title: 'Predictive Analytics',
      description: 'Forecast trends and make data-driven decisions with AI-powered predictions.'
    },
    {
      icon: <Users className="w-8 h-8 text-orange-500" />,
      title: 'Custom Reports',
      description: 'Generate tailored reports that provide insights specific to your business needs.'
    }
  ];

  const services = [
    {
      name: 'BI Implementation',
      price: '$3,500',
      period: '/project',
      description: 'Complete business intelligence solution implementation',
      features: [
        'Data warehouse design',
        'Dashboard development',
        'Report automation',
        'User training',
        '6 months support'
      ]
    },
    {
      name: 'Data Visualization',
      price: '$1,800',
      period: '/project',
      description: 'Custom data visualization and dashboard creation',
      features: [
        'Interactive dashboards',
        'Custom charts & graphs',
        'Mobile-responsive design',
        'Real-time updates',
        '3 months support'
      ]
    },
    {
      name: 'Analytics Consulting',
      price: '$150',
      period: '/hour',
      description: 'Expert guidance on data strategy and analytics',
      features: [
        'Data strategy planning',
        'Tool recommendations',
        'Best practices guidance',
        'Performance optimization',
        'Ongoing support'
      ]
    }
  ];

  const stats = [
    { number: '300+', label: 'Dashboards Created', icon: <BarChart3 className="w-6 h-6 text-blue-400" /> },
    { number: '95%', label: 'Data Accuracy', icon: <Target className="w-6 h-6 text-green-400" /> },
    { number: '50%', label: 'Decision Speed', icon: <TrendingUp className="w-6 h-6 text-purple-400" /> },
    { number: '24/7', label: 'Data Monitoring', icon: <Clock className="w-6 h-6 text-orange-400" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Business Intelligence - Zion Tech Group</title>
        <meta name="description" content="Transform your data into actionable insights with our business intelligence solutions. Advanced analytics, dashboards, and reporting for data-driven decisions." />
        <meta name="keywords" content="business intelligence, data analytics, dashboards, reporting, data visualization, BI solutions" />
      </Helmet>

      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
              Business Intelligence
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
              Transform your data into actionable insights with our comprehensive business intelligence solutions. 
              Make data-driven decisions that drive growth and success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                to="/pricing" 
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 flex justify-center">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Our BI Solutions</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              Comprehensive business intelligence tools to unlock the power of your data
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Pricing */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Service Packages</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              Choose the perfect business intelligence solution for your needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="text-center">
                  <h3 className="text-2xl font-semibold text-white mb-2">{service.name}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <div className="mb-8">
                    <span className="text-4xl font-bold text-white">{service.price}</span>
                    <span className="text-gray-400 text-xl">{service.period}</span>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="w-full block text-center py-4 bg-gradient-to-r from-purple-500 to-blue-600 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Unlock Your Data's Potential?
              </h2>
              <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                Let's discuss how our business intelligence solutions can transform your data into competitive advantage.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Contact Us
                </Link>
                <Link 
                  to="/about" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BusinessIntelligencePage;
