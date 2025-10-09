import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Cloud, Shield, Settings, Database, Users, CheckCircle, ArrowRight, Phone, Mail, Server, Network, Lock, Monitor, Code, BarChart, Globe, Zap, Target, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

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
      popular: true,
      color: 'from-blue-400 to-cyan-500'
    },
    {
      id: 'it-support',
      name: 'IT Support',
      description: 'Comprehensive IT support and maintenance services.',
      icon: Users,
      features: ['24/7 Support', 'Help Desk', 'System Maintenance', 'Troubleshooting'],
      benefits: ['Instant response', 'Expert technicians', 'Remote assistance', 'Preventive maintenance'],
      pricing: { starting: 1999, period: 'month' },
      popular: false,
      color: 'from-green-400 to-emerald-500'
    },
    {
      id: 'cybersecurity',
      name: 'Cybersecurity',
      description: 'Protect your business with comprehensive security solutions.',
      icon: Shield,
      features: ['Security Audits', 'Threat Detection', 'Incident Response', 'Compliance Management'],
      benefits: ['Advanced threat protection', 'Real-time monitoring', 'Compliance assurance', 'Security training'],
      pricing: { starting: 3999, period: 'month' },
      popular: false,
      color: 'from-red-400 to-pink-500'
    },
    {
      id: 'cloud-services',
      name: 'Cloud Services',
      description: 'Migrate and optimize your cloud infrastructure.',
      icon: Cloud,
      features: ['Cloud Migration', 'Multi-cloud Strategy', 'Cost Optimization', 'Security Configuration'],
      benefits: ['Scalable infrastructure', 'Cost savings', 'Enhanced security', 'Global availability'],
      pricing: { starting: 2499, period: 'month' },
      popular: false,
      color: 'from-purple-400 to-violet-500'
    },
    {
      id: 'database-management',
      name: 'Database Management',
      description: 'Optimize and maintain your database systems.',
      icon: Database,
      features: ['Database Design', 'Performance Tuning', 'Backup & Recovery', 'Data Migration'],
      benefits: ['Improved performance', 'Data security', 'Automated backups', 'Expert optimization'],
      pricing: { starting: 1799, period: 'month' },
      popular: false,
      color: 'from-orange-400 to-amber-500'
    },
    {
      id: 'it-consulting',
      name: 'IT Consulting',
      description: 'Strategic IT consulting to align technology with business goals.',
      icon: Settings,
      features: ['Technology Strategy', 'Digital Transformation', 'IT Assessment', 'Project Management'],
      benefits: ['Strategic guidance', 'Technology roadmap', 'Cost optimization', 'Risk mitigation'],
      pricing: { starting: 1500, period: 'hour' },
      popular: false,
      color: 'from-indigo-400 to-purple-500'
    }
  ];

  const benefits = [
    {
      title: '24/7 Support',
      description: 'Round-the-clock technical support and monitoring',
      icon: Monitor,
      stat: '24/7'
    },
    {
      title: '99.9% Uptime',
      description: 'Guaranteed system availability and reliability',
      icon: Server,
      stat: '99.9%'
    },
    {
      title: 'Cost Savings',
      description: 'Reduce IT costs through optimization and automation',
      icon: BarChart,
      stat: '40%'
    },
    {
      title: 'Expert Team',
      description: 'Certified professionals with years of experience',
      icon: Users,
      stat: '50+'
    }
  ];

  const industries = [
    { name: 'Healthcare', description: 'HIPAA compliance, medical records, telemedicine' },
    { name: 'Finance', description: 'PCI compliance, trading systems, risk management' },
    { name: 'E-commerce', description: 'Online platforms, payment processing, inventory' },
    { name: 'Manufacturing', description: 'Production systems, quality control, supply chain' },
    { name: 'Education', description: 'Learning management, student data, remote learning' },
    { name: 'Government', description: 'Public services, data security, compliance' }
  ];

  const handlePhoneClick = () => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as Window & { gtag?: (...args: unknown[]) => void }).gtag?.('event', 'phone_click', {
        event_category: 'engagement',
        event_label: 'it_services_phone_number',
      });
    }
  };

  return (
    <>
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including infrastructure, support, cybersecurity, and cloud solutions for modern businesses." />
        <meta name="keywords" content="IT services, IT support, IT infrastructure, cybersecurity, cloud services, IT consulting" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                IT <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Services</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Comprehensive IT solutions to keep your business running smoothly, securely, and efficiently.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  onClick={handlePhoneClick}
                  className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Call (302) 464-0950
                </a>
                <Link
                  to="/contact"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Mail className="w-5 h-5" />
                  Get Quote
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">IT Services</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Professional IT services designed to support and enhance your business operations.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itServices.map((service, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-lg rounded-xl p-6 border transition-all duration-300 hover:scale-105 ${
                  service.popular ? 'border-cyan-400/50 ring-2 ring-cyan-400/20' : 'border-white/20 hover:border-cyan-400/50'
                }`}>
                  {service.popular && (
                    <div className="absolute -top-3 left-6">
                      <div className="bg-gradient-to-r from-cyan-400 to-purple-400 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-6`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{service.name}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-300">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-3" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Benefits:</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-gray-300">
                          <ArrowRight className="w-4 h-4 text-cyan-400 mr-3" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="text-cyan-400 font-semibold mb-4">
                    Starting at ${service.pricing.starting.toLocaleString()}/{service.pricing.period}
                  </div>
                  
                  <button className="w-full border-2 border-cyan-400 text-cyan-400 py-2 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                    Learn More
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Why Choose Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">IT Services</span>?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the difference with our professional IT services.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-6">
                    <benefit.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-cyan-400 mb-2">{benefit.stat}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Industries We <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Serve</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our IT services are tailored to meet the unique requirements of various industries.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
                  <h3 className="text-xl font-bold text-white mb-3">{industry.name}</h3>
                  <p className="text-gray-300">{industry.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Process</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A systematic approach to delivering exceptional IT services.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Assessment</h3>
                <p className="text-gray-300">Evaluate your current IT infrastructure and identify areas for improvement.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Planning</h3>
                <p className="text-gray-300">Develop a comprehensive IT strategy aligned with your business goals.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Implementation</h3>
                <p className="text-gray-300">Deploy IT solutions with minimal disruption to your operations.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">4</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Support</h3>
                <p className="text-gray-300">Provide ongoing support and optimization for your IT systems.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Optimize Your IT Infrastructure?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how our IT services can help you achieve your business objectives.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  onClick={handlePhoneClick}
                  className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Call (302) 464-0950
                </a>
                <Link
                  to="/contact"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Mail className="w-5 h-5" />
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ITServicesPage;