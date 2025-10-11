'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Phone, Mail, MapPin, Zap, Shield, Brain, Globe, BarChart3, TrendingUp, Database, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const BusinessIntelligencePage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Analytics',
      description: 'Advanced AI technology to transform your business intelligence and data analysis',
      benefits: ['Machine learning algorithms', 'Predictive analytics', 'Natural language processing', 'Automated insights']
    },
    {
      icon: Zap,
      title: 'Real-Time Insights',
      description: 'Lightning-fast data processing and real-time business intelligence',
      benefits: ['Live data streaming', 'Instant dashboards', 'Real-time alerts', 'Dynamic reporting']
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption and compliance standards for your data',
      benefits: ['End-to-end encryption', 'GDPR compliance', 'SOC 2 certified', 'Role-based access']
    },
    {
      icon: Globe,
      title: 'Global Analytics',
      description: 'Worldwide business intelligence deployment and support',
      benefits: ['Multi-region deployment', '24/7 global support', 'Local compliance', 'Scalable infrastructure']
    }
  ];

  const services = [
    {
      icon: <BarChart3 className="w-8 h-8 text-blue-500" />,
      title: 'Data Visualization',
      description: 'Transform complex data into clear, actionable insights with interactive dashboards and reports.',
      price: 'Starting at $2,500/month'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-green-500" />,
      title: 'Predictive Analytics',
      description: 'Forecast future trends and behaviors using advanced machine learning and statistical models.',
      price: 'Starting at $3,500/month'
    },
    {
      icon: <Database className="w-8 h-8 text-purple-500" />,
      title: 'Data Integration',
      description: 'Connect and consolidate data from multiple sources for comprehensive business intelligence.',
      price: 'Starting at $1,800/month'
    },
    {
      icon: <Users className="w-8 h-8 text-orange-500" />,
      title: 'Custom Dashboards',
      description: 'Build tailored dashboards that provide exactly the insights your team needs.',
      price: 'Starting at $2,200/month'
    }
  ];

  const benefits = [
    'Advanced AI technology integration',
    'Real-time processing and analytics',
    'Enterprise-grade security and compliance',
    'Scalable and flexible business intelligence solutions',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success'
  ];

  const stats = [
    { number: '500+', label: 'Dashboards Created' },
    { number: '99.9%', label: 'Data Accuracy' },
    { number: '50+', label: 'Enterprise Clients' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Business Intelligence | Zion Tech Group</title>
        <meta name="description" content="Professional Business Intelligence services by Zion Tech Group. Advanced AI and IT solutions for your business." />
        <meta name="keywords" content="business intelligence, AI solutions, IT services, Zion Tech Group, data analytics" />
      </Helmet>
      
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Business <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Intelligence</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8 px-4">
                Transform your data into actionable insights with our advanced business intelligence solutions powered by AI and machine learning.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                >
                  Get Started Today
                </Link>
                <Link 
                  to="/about" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 mb-20">
              {stats.map((stat, index) => (
                <div key={index} className="text-center px-2">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-xs sm:text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Business Intelligence Features</h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
                Comprehensive solutions designed to unlock the power of your data
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20">
              {features.map((feature, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-xl transition-all duration-300 group">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <feature.icon className="w-12 h-12 text-purple-600 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">{feature.title}</h3>
                      <p className="text-gray-600 mb-4">{feature.description}</p>
                      <ul className="space-y-2">
                        {feature.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
                Tailored business intelligence solutions for every business need
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group">
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">{service.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{service.description}</p>
                  <div className="text-purple-600 font-semibold text-sm">{service.price}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Our Business Intelligence Solutions?</h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
                Experience the benefits of data-driven decision making
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">{benefit}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-6 sm:p-8 lg:p-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Ready to Transform Your Data into Insights?</h2>
                <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto px-4">
                  Let's discuss how our business intelligence solutions can help you make better decisions and drive growth.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact" 
                    className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"
                  >
                    Get Free Consultation
                  </Link>
                  <Link 
                    to="/about" 
                    className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                  >
                    Learn About Our Process
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

export default BusinessIntelligencePage;