'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Cloud, Shield, Settings, Database, Users, CheckCircle, ArrowRight, Phone, Mail, Server, Network, Lock, Monitor } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ITServicesPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const itServices = [
    {
      id: 'it-infrastructure',
      name: 'IT Infrastructure',
      description: 'Build and maintain robust IT infrastructure for your business.',
      icon: Server,
      features: ['Server Management', 'Network Setup', 'Cloud Migration', 'Infrastructure Monitoring'],
      benefits: ['99.9% uptime guarantee', 'Scalable solutions', '24/7 monitoring', 'Proactive maintenance'],
      pricing: { starting: 2999, period: 'month' },
      popular: true
    },
    {
      id: 'cybersecurity',
      name: 'Cybersecurity',
      description: 'Protect your business with comprehensive security solutions.',
      icon: Shield,
      features: ['Security Audits', 'Threat Detection', 'Incident Response', 'Compliance Management'],
      benefits: ['Advanced threat protection', '24/7 security monitoring', 'Compliance assistance', 'Security training'],
      pricing: { starting: 1999, period: 'month' },
      popular: false
    },
    {
      id: 'cloud-services',
      name: 'Cloud Services',
      description: 'Migrate and optimize your cloud infrastructure.',
      icon: Cloud,
      features: ['Cloud Migration', 'Cost Optimization', 'Multi-cloud Strategy', 'Disaster Recovery'],
      benefits: ['Reduced costs', 'Improved scalability', 'Enhanced security', 'Better performance'],
      pricing: { starting: 1499, period: 'month' },
      popular: false
    },
    {
      id: 'database-management',
      name: 'Database Management',
      description: 'Optimize and maintain your database systems.',
      icon: Database,
      features: ['Performance Tuning', 'Backup & Recovery', 'Security Hardening', 'Migration Services'],
      benefits: ['Improved performance', 'Data protection', 'Reduced downtime', 'Expert support'],
      pricing: { starting: 1299, period: 'month' },
      popular: false
    },
    {
      id: 'network-management',
      name: 'Network Management',
      description: 'Design and maintain secure, high-performance networks.',
      icon: Network,
      features: ['Network Design', 'Security Implementation', 'Performance Monitoring', 'Troubleshooting'],
      benefits: ['Enhanced security', 'Better performance', 'Reduced downtime', 'Cost savings'],
      pricing: { starting: 1799, period: 'month' },
      popular: false
    },
    {
      id: 'system-administration',
      name: 'System Administration',
      description: 'Comprehensive system administration and maintenance.',
      icon: Settings,
      features: ['User Management', 'Software Updates', 'Performance Monitoring', 'Troubleshooting'],
      benefits: ['Improved efficiency', 'Reduced downtime', 'Better security', 'Cost optimization'],
      pricing: { starting: 999, period: 'month' },
      popular: false
    }
  ];

  const tabs = [
    { id: 'overview', name: 'Overview', icon: Monitor },
    { id: 'services', name: 'Services', icon: Settings },
    { id: 'pricing', name: 'Pricing', icon: Database },
    { id: 'contact', name: 'Contact', icon: Phone }
  ];

  return (
    <>
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including infrastructure management, cybersecurity, cloud solutions, and system administration. Expert support for your business technology needs." />
        <meta name="keywords" content="IT services, infrastructure management, cybersecurity, cloud services, system administration, network management" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <Navigation />
        
        <main className="pt-20">
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-16 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                IT <span className="text-blue-600">Services</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Comprehensive technology solutions for modern businesses
              </p>
              <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto">
                From infrastructure management to cybersecurity, we provide end-to-end IT services 
                that keep your business running smoothly and securely.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#services"
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
                >
                  Explore Services
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a
                  href="/contact"
                  className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 inline-flex items-center"
                >
                  Get Started
                </a>
              </div>
            </div>
          </section>

          {/* Tabs Section */}
          <section className="container mx-auto px-4 py-8">
            <div className="max-w-6xl mx-auto">
              <div className="bg-white rounded-xl p-2 shadow-lg">
                <div className="flex flex-wrap gap-2">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center px-6 py-3 rounded-lg font-medium transition-colors ${
                        activeTab === tab.id
                          ? 'bg-blue-600 text-white'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <tab.icon className="w-5 h-5 mr-2" />
                      {tab.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Tab Content */}
          <section className="container mx-auto px-4 py-16">
            <div className="max-w-6xl mx-auto">
              {activeTab === 'overview' && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                      Why Choose Our IT Services?
                    </h2>
                    <div className="space-y-6">
                      <div className="flex items-start">
                        <CheckCircle className="w-6 h-6 text-green-500 mr-4 mt-1" />
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Team</h3>
                          <p className="text-gray-600">Certified professionals with years of experience in enterprise IT solutions.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-6 h-6 text-green-500 mr-4 mt-1" />
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-2">24/7 Support</h3>
                          <p className="text-gray-600">Round-the-clock monitoring and support to keep your systems running.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-6 h-6 text-green-500 mr-4 mt-1" />
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-2">Proactive Approach</h3>
                          <p className="text-gray-600">We prevent issues before they impact your business operations.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-xl p-8 text-white">
                    <h3 className="text-2xl font-bold mb-6">Ready to Get Started?</h3>
                    <p className="text-blue-100 mb-6">
                      Contact our IT experts today for a free consultation and discover how we can help your business.
                    </p>
                    <a
                      href="/contact"
                      className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
                    >
                      <Phone className="w-5 h-5 mr-2" />
                      Contact Us
                    </a>
                  </div>
                </div>
              )}

              {activeTab === 'services' && (
                <div>
                  <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                      Our IT Services
                    </h2>
                    <p className="text-xl text-gray-600">
                      Comprehensive solutions tailored to your business needs
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {itServices.map((service) => (
                      <div key={service.id} className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow ${service.popular ? 'ring-2 ring-blue-600' : ''}`}>
                        {service.popular && (
                          <div className="bg-blue-600 text-white text-center py-1 px-3 rounded-lg mb-4 -mt-6">
                            Most Popular
                          </div>
                        )}
                        <div className="flex items-center mb-4">
                          <service.icon className="w-12 h-12 text-blue-600 mr-4" />
                          <h3 className="text-xl font-bold text-gray-900">{service.name}</h3>
                        </div>
                        <p className="text-gray-600 mb-4">{service.description}</p>
                        <div className="mb-4">
                          <h4 className="font-semibold text-gray-900 mb-2">Features:</h4>
                          <ul className="space-y-1">
                            {service.features.map((feature, idx) => (
                              <li key={idx} className="flex items-center text-sm text-gray-600">
                                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="mb-4">
                          <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
                          <ul className="space-y-1">
                            {service.benefits.map((benefit, idx) => (
                              <li key={idx} className="flex items-center text-sm text-gray-600">
                                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-blue-600 mb-4">
                            ${service.pricing.starting.toLocaleString()}/{service.pricing.period}
                          </div>
                          <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                            Learn More
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'pricing' && (
                <div>
                  <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                      Transparent Pricing
                    </h2>
                    <p className="text-xl text-gray-600">
                      Choose the plan that best fits your business needs
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white rounded-xl p-8 shadow-lg">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Basic</h3>
                      <div className="text-4xl font-bold text-blue-600 mb-6">$999<span className="text-lg text-gray-600">/month</span></div>
                      <ul className="space-y-3 mb-8">
                        <li className="flex items-center text-gray-600">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                          Basic system monitoring
                        </li>
                        <li className="flex items-center text-gray-600">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                          Email support
                        </li>
                        <li className="flex items-center text-gray-600">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                          Monthly reports
                        </li>
                      </ul>
                      <button className="w-full bg-gray-200 text-gray-900 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors">
                        Get Started
                      </button>
                    </div>

                    <div className="bg-white rounded-xl p-8 shadow-lg ring-2 ring-blue-600">
                      <div className="bg-blue-600 text-white text-center py-2 px-4 rounded-lg mb-6 -mt-8">
                        Most Popular
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional</h3>
                      <div className="text-4xl font-bold text-blue-600 mb-6">$2,999<span className="text-lg text-gray-600">/month</span></div>
                      <ul className="space-y-3 mb-8">
                        <li className="flex items-center text-gray-600">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                          24/7 monitoring
                        </li>
                        <li className="flex items-center text-gray-600">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                          Priority support
                        </li>
                        <li className="flex items-center text-gray-600">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                          Weekly reports
                        </li>
                        <li className="flex items-center text-gray-600">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                          Proactive maintenance
                        </li>
                      </ul>
                      <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                        Get Started
                      </button>
                    </div>

                    <div className="bg-white rounded-xl p-8 shadow-lg">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise</h3>
                      <div className="text-4xl font-bold text-blue-600 mb-6">$5,999<span className="text-lg text-gray-600">/month</span></div>
                      <ul className="space-y-3 mb-8">
                        <li className="flex items-center text-gray-600">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                          Dedicated team
                        </li>
                        <li className="flex items-center text-gray-600">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                          Custom solutions
                        </li>
                        <li className="flex items-center text-gray-600">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                          SLA guarantee
                        </li>
                        <li className="flex items-center text-gray-600">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                          Real-time monitoring
                        </li>
                      </ul>
                      <button className="w-full bg-gray-200 text-gray-900 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors">
                        Contact Sales
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'contact' && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                      Get in Touch
                    </h2>
                    <p className="text-xl text-gray-600 mb-8">
                      Ready to discuss your IT needs? Contact our experts today.
                    </p>
                    
                    <div className="space-y-6">
                      <div className="flex items-center">
                        <Phone className="w-6 h-6 text-blue-600 mr-4" />
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">Phone</h3>
                          <p className="text-gray-600">(302) 464-0950</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Mail className="w-6 h-6 text-blue-600 mr-4" />
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                          <p className="text-gray-600">info@ziontechgroup.com</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-xl p-8 shadow-lg">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h3>
                    <form className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                        <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                        <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                        <textarea rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"></textarea>
                      </div>
                      <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                        Send Message
                      </button>
                    </form>
                  </div>
                </div>
              )}
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default ITServicesPage;