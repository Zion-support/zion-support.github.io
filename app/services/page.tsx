'use client';
import React from 'react';
import { Brain, Cpu, BarChart, Settings, ArrowRight, CheckCircle, Phone, Mail, MapPin } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOEnhancer from '../components/SEOEnhancer';

const ServicesPage: React.FC = () => {
  const serviceCategories = [
    {
      title: 'AI Services',
      description: 'Advanced artificial intelligence solutions for enterprise applications',
      icon: Brain,
      color: 'text-purple-400',
      href: '/ai-services',
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'AI Automation']
    },
    {
      title: 'IT Services',
      description: 'Comprehensive IT solutions for modern enterprise infrastructure',
      icon: Cpu,
      color: 'text-blue-400',
      href: '/it-services',
      features: ['Cloud Migration', 'Cybersecurity', 'DevOps', 'Database Management']
    },
    {
      title: 'Micro SAAS',
      description: 'Powerful, affordable AI-powered tools for modern businesses',
      icon: BarChart,
      color: 'text-cyan-400',
      href: '/micro-saas',
      features: ['AI Project Manager', 'AI Analytics', 'AI Content Writer', 'AI Email Marketing']
    },
    {
      title: 'Consulting',
      description: 'Strategic technology consulting and digital transformation',
      icon: Settings,
      color: 'text-green-400',
      href: '/consulting',
      features: ['IT Strategy', 'Digital Transformation', 'Process Optimization', 'Change Management']
    }
  ];

  const stats = [
    { label: 'Projects Completed', value: '500+', icon: CheckCircle },
    { label: 'Client Satisfaction', value: '99%', icon: CheckCircle },
    { label: 'Average ROI', value: '340%', icon: CheckCircle },
    { label: 'Countries Served', value: '50+', icon: CheckCircle }
  ];

  return (
    <>
      <SEOEnhancer
        title="Our Services - AI & IT Solutions | Zion Tech Group"
        description="Comprehensive AI and IT services including machine learning, cloud migration, cybersecurity, and micro SAAS solutions. Transform your business with our expert services."
        keywords={['ai services', 'it services', 'micro saas', 'consulting', 'cloud migration', 'cybersecurity', 'machine learning']}
        canonicalUrl="https://ziontechgroup.com/services"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
              Our Services
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Comprehensive AI and IT solutions designed to transform your business. 
              From cutting-edge AI technology to robust IT infrastructure, we provide 
              end-to-end services that drive real business value.
            </p>
          </section>

          {/* Stats Section */}
          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Service Categories */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Service Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {serviceCategories.map((category, index) => (
                <div key={index} className="cyber-card p-8 hover:scale-105 transition-all duration-300">
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <category.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-3">{category.title}</h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">{category.description}</p>
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Services:</h4>
                        <div className="flex flex-wrap gap-2">
                          {category.features.map((feature, featureIndex) => (
                            <span key={featureIndex} className="px-3 py-1 bg-slate-700 text-gray-300 rounded-full text-sm">
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                      <a
                        href={category.href}
                        className={`inline-flex items-center gap-2 ${category.color} hover:text-cyan-300 transition-colors font-semibold`}
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Why Choose Our Services?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">AI-Powered Solutions</h3>
                <p className="text-gray-300">Leverage cutting-edge AI technology to automate processes and gain insights</p>
              </div>
              
              <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Proven Results</h3>
                <p className="text-gray-300">Delivering measurable business value with 99% client satisfaction</p>
              </div>
              
              <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Expert Team</h3>
                <p className="text-gray-300">World-class engineers and consultants with deep industry expertise</p>
              </div>
            </div>
          </section>

          {/* Process */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Our Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Discovery</h3>
                <p className="text-gray-300 text-sm">We analyze your business needs and current technology landscape</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Strategy</h3>
                <p className="text-gray-300 text-sm">We develop a comprehensive solution strategy tailored to your goals</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Implementation</h3>
                <p className="text-gray-300 text-sm">We implement solutions with minimal disruption to your operations</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">4</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Optimization</h3>
                <p className="text-gray-300 text-sm">We continuously monitor and optimize for peak performance</p>
              </div>
            </div>
          </section>

          {/* Contact CTA */}
          <section className="text-center">
            <div className="cyber-card p-8 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text">Ready to Transform Your Business?</h2>
              <p className="text-gray-300 mb-8 text-lg">
                Let our expert team help you choose the right services for your business needs. 
                Get a free consultation and discover how we can drive your success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
                >
                  Get Free Consultation
                </a>
                <a
                  href="tel:+13024640950"
                  className="flex items-center justify-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                  +1 302 464 0950
                </a>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default ServicesPage;