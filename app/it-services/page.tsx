import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Cloud, Shield, Settings, Database, Users, CheckCircle, ArrowRight, Phone, Mail, Server, Network, Lock, Monitor } from 'lucide-react';
import Header from '../components/Header';
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
      id: 'it-support',
      name: 'IT Support',
      description: 'Comprehensive IT support and maintenance services.',
      icon: Users,
      features: ['24/7 Support', 'Help Desk', 'System Maintenance', 'Troubleshooting'],
      benefits: ['Instant response', 'Expert technicians', 'Remote assistance', 'Preventive maintenance'],
      pricing: { starting: 1999, period: 'month' },
      popular: false
    },
    {
      id: 'cloud-infrastructure',
      name: 'Cloud Infrastructure',
      description: 'Migrate and optimize your cloud infrastructure.',
      icon: Cloud,
      features: ['Cloud Migration', 'Infrastructure as Code', 'Cost Optimization', 'Security Hardening'],
      benefits: ['Reduced costs', 'Enhanced security', 'Better scalability', 'Improved performance'],
      pricing: { starting: 3999, period: 'month' },
      popular: true
    },
    {
      id: 'cybersecurity',
      name: 'Cybersecurity',
      description: 'Protect your business with comprehensive cybersecurity solutions.',
      icon: Shield,
      features: ['Security Assessment', 'Penetration Testing', 'Security Monitoring', 'Incident Response'],
      benefits: ['Advanced threat protection', 'Compliance assurance', 'Real-time monitoring', 'Expert response'],
      pricing: { starting: 2499, period: 'month' },
      popular: false
    },
    {
      id: 'database-management',
      name: 'Database Management',
      description: 'Optimize and maintain your database systems.',
      icon: Database,
      features: ['Database Design', 'Performance Tuning', 'Backup & Recovery', 'Data Migration'],
      benefits: ['Optimized performance', 'Data security', 'Automated backups', 'Scalable solutions'],
      pricing: { starting: 1999, period: 'month' },
      popular: false
    },
    {
      id: 'managed-it',
      name: 'Managed IT',
      description: 'Complete IT management and support services.',
      icon: Settings,
      features: ['Proactive Monitoring', 'Patch Management', 'Security Updates', 'Performance Optimization'],
      benefits: ['Reduced downtime', 'Lower costs', 'Expert management', 'Peace of mind'],
      pricing: { starting: 1499, period: 'month' },
      popular: false
    }
  ];

  const tabs = [
    { id: 'overview', name: 'Overview', icon: Monitor },
    { id: 'services', name: 'Services', icon: Settings },
    { id: 'pricing', name: 'Pricing', icon: Database },
    { id: 'support', name: 'Support', icon: Users }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including infrastructure management, cloud solutions, cybersecurity, and technical support." />
        <meta name="keywords" content="IT services, infrastructure management, cloud computing, cybersecurity, technical support, managed IT" />
      </Helmet>
      
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            IT <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Services</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Comprehensive IT solutions to keep your business running smoothly. From infrastructure management to cybersecurity, we've got you covered.
          </p>
        </div>
      </section>

      {/* Tabs Navigation */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-cyan-600 to-purple-600 text-white'
                    : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                <span>{tab.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {activeTab === 'overview' && (
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">IT Services</span>?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
                Our experienced IT professionals provide comprehensive technology solutions that keep your business secure, efficient, and competitive.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Security First</h3>
                  <p className="text-gray-300">Bank-level security and compliance standards</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Monitor className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">24/7 Monitoring</h3>
                  <p className="text-gray-300">Round-the-clock system monitoring and support</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Settings className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Proactive Management</h3>
                  <p className="text-gray-300">Prevent issues before they impact your business</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Expert Team</h3>
                  <p className="text-gray-300">Certified professionals with years of experience</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'services' && (
            <div>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Our IT <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Services</span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Comprehensive IT solutions designed to keep your business running smoothly and securely.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {itServices.map((service, index) => (
                  <div key={service.id} className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{service.name}</h3>
                        {service.popular && (
                          <span className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs px-2 py-1 rounded-full font-bold mt-1">
                            Popular
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-6">{service.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-cyan-400 mb-3 flex items-center">
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Key Features
                      </h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="text-sm text-gray-300 flex items-center">
                            <div className="w-1 h-1 bg-cyan-400 rounded-full mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-green-400 mb-3">Benefits</h4>
                      <ul className="space-y-1">
                        {service.benefits.map((benefit, idx) => (
                          <li key={idx} className="text-sm text-gray-300">{benefit}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <div className="text-2xl font-bold text-cyan-400">
                          ${service.pricing.starting.toLocaleString()}
                        </div>
                        <div className="text-sm text-gray-400">per {service.pricing.period}</div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <a
                        href="/contact"
                        className="w-full bg-gradient-to-r from-cyan-600 to-purple-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
                      >
                        Get Started
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </a>
                      <div className="grid grid-cols-2 gap-2">
                        <a
                          href={`tel:+13024640950`}
                          className="bg-slate-800 text-cyan-400 py-2 px-3 rounded-lg font-medium hover:bg-slate-700 transition-all duration-300 flex items-center justify-center text-sm group"
                        >
                          <Phone className="w-4 h-4 mr-1 group-hover:scale-110 transition-transform" />
                          Call
                        </a>
                        <a
                          href={`mailto:info@ziontechgroup.com?subject=Inquiry about ${service.name}`}
                          className="bg-slate-800 text-purple-400 py-2 px-3 rounded-lg font-medium hover:bg-slate-700 transition-all duration-300 flex items-center justify-center text-sm group"
                        >
                          <Mail className="w-4 h-4 mr-1 group-hover:scale-110 transition-transform" />
                          Email
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'pricing' && (
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Transparent <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Pricing</span>
              </h2>
              <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
                Choose the IT service plan that fits your business needs. All plans include our core services with no hidden fees.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
                  <h3 className="text-2xl font-bold text-white mb-4">Basic</h3>
                  <div className="text-4xl font-bold text-cyan-400 mb-4">$1,499<span className="text-lg text-gray-400">/month</span></div>
                  <p className="text-gray-300 mb-6">Perfect for small businesses</p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      Basic IT Support
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      Email Support
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      Monthly Reports
                    </li>
                  </ul>
                  <a href="/contact" className="w-full bg-gradient-to-r from-cyan-600 to-purple-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 inline-flex items-center justify-center">
                    Get Started
                  </a>
                </div>
                
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-cyan-400 ring-2 ring-cyan-400 relative">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-400 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
                  <div className="text-4xl font-bold text-cyan-400 mb-4">$2,999<span className="text-lg text-gray-400">/month</span></div>
                  <p className="text-gray-300 mb-6">Ideal for growing businesses</p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      Advanced IT Support
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      Priority Support
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      Real-time Monitoring
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      Security Management
                    </li>
                  </ul>
                  <a href="/contact" className="w-full bg-gradient-to-r from-cyan-600 to-purple-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 inline-flex items-center justify-center">
                    Get Started
                  </a>
                </div>
                
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
                  <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
                  <div className="text-4xl font-bold text-cyan-400 mb-4">Custom</div>
                  <p className="text-gray-300 mb-6">Tailored for large organizations</p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      Custom Solutions
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      Dedicated Team
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      24/7 Support
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      SLA Guarantee
                    </li>
                  </ul>
                  <a href="/contact" className="w-full bg-gradient-to-r from-cyan-600 to-purple-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 inline-flex items-center justify-center">
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'support' && (
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Expert <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Support</span>
              </h2>
              <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
                Our certified IT professionals are here to help you with all your technology needs.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
                  <Phone className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-4">Phone Support</h3>
                  <p className="text-gray-300 mb-4">Call us anytime for immediate assistance</p>
                  <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 font-semibold">
                    (302) 464-0950
                  </a>
                </div>
                
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
                  <Mail className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-4">Email Support</h3>
                  <p className="text-gray-300 mb-4">Send us detailed information about your issue</p>
                  <a href="mailto:support@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 font-semibold">
                    support@ziontechgroup.com
                  </a>
                </div>
                
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
                  <Settings className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-4">Remote Support</h3>
                  <p className="text-gray-300 mb-4">We can access your systems securely to fix issues</p>
                  <a href="/contact" className="text-cyan-400 hover:text-cyan-300 font-semibold">
                    Schedule Remote Session
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Optimize Your IT Infrastructure?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact our IT experts to discuss how we can help streamline your technology operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call (302) 464-0950
            </a>
            <a
              href="/contact"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <ArrowRight className="w-5 h-5" />
              Get Quote
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

<<<<<<< HEAD
export default ITServicesPage;
=======
export default ITServicesPage;
>>>>>>> cursor/website-audit-and-update-with-deployment-6747
