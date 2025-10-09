<<<<<<< HEAD
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
=======
'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Cloud, Shield, Settings, Database, Smartphone, Lock, BarChart, Users, 
  CheckCircle, ArrowRight, Phone, Mail, MapPin, Clock, Star, Zap, Cpu, 
  HardDrive, Wifi, Server, Code, Globe, Target, TrendingUp, Award, 
  Monitor, Network, RefreshCw, AlertTriangle, Headphones, FileText
} from 'lucide-react';

export default function ITServicesPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const itServices = [
    {
      id: 'cloud-infrastructure',
      title: 'Cloud Infrastructure Solutions',
      description: 'Complete cloud migration and management services with 99.99% uptime guarantee and enterprise-grade security',
      features: [
        'AWS, Azure, and Google Cloud expertise',
        'Cloud architecture design & optimization',
        'Cost optimization & monitoring',
        'Disaster recovery & backup solutions',
        'Multi-cloud and hybrid cloud strategies',
        '24/7 cloud monitoring & support'
      ],
      pricing: {
        starter: { price: '$3,500', period: '/month', features: ['Basic cloud setup', 'Standard monitoring', 'Email support'] },
        professional: { price: '$8,500', period: '/month', features: ['Advanced cloud services', 'Real-time monitoring', 'Priority support', 'Cost optimization'] },
        enterprise: { price: '$18,000', period: '/month', features: ['Complete cloud suite', 'Dedicated team', 'Custom solutions', 'SLA guarantee'] }
      },
      icon: Cloud,
      color: 'from-blue-500 to-cyan-600',
>>>>>>> cursor/website-audit-and-update-with-deployment-73fd
      popular: true
    },
    {
      id: 'cybersecurity',
<<<<<<< HEAD
      name: 'Cybersecurity',
      description: 'Protect your business with comprehensive cybersecurity solutions.',
      icon: Shield,
      features: ['Security Assessment', 'Penetration Testing', 'Security Monitoring', 'Incident Response'],
      benefits: ['Advanced threat protection', 'Compliance assurance', 'Real-time monitoring', 'Expert response'],
      pricing: { starting: 2499, period: 'month' },
=======
      title: 'Cybersecurity & Compliance',
      description: 'Comprehensive security solutions protecting your business from cyber threats with 99.8% threat detection accuracy',
      features: [
        'Advanced threat detection & prevention',
        'Security audits & vulnerability assessments',
        'Compliance management (SOC2, ISO27001, GDPR)',
        'Security awareness training',
        'Incident response & forensics',
        '24/7 security monitoring'
      ],
      pricing: {
        starter: { price: '$4,500', period: '/month', features: ['Basic security tools', 'Standard monitoring', 'Email support'] },
        professional: { price: '$12,000', period: '/month', features: ['Advanced security suite', 'Compliance tools', 'Priority support', 'Security training'] },
        enterprise: { price: '$25,000', period: '/month', features: ['Complete security platform', 'Dedicated team', 'Custom solutions', 'SLA guarantee'] }
      },
      icon: Shield,
      color: 'from-red-500 to-pink-600',
      popular: true
    },
    {
      id: 'devops-cicd',
      title: 'DevOps & CI/CD Automation',
      description: 'Streamline your development workflow with automated CI/CD pipelines, reducing deployment time by 80%',
      features: [
        'Automated CI/CD pipeline setup',
        'Container orchestration (Docker, Kubernetes)',
        'Infrastructure as Code (IaC)',
        'Automated testing & quality gates',
        'Deployment automation & rollback',
        'Performance monitoring & optimization'
      ],
      pricing: {
        starter: { price: '$2,500', period: '/month', features: ['Basic CI/CD setup', 'Standard automation', 'Email support'] },
        professional: { price: '$7,000', period: '/month', features: ['Advanced automation', 'Container orchestration', 'Priority support', 'Custom workflows'] },
        enterprise: { price: '$15,000', period: '/month', features: ['Complete DevOps suite', 'Dedicated team', 'Custom development', 'SLA guarantee'] }
      },
      icon: RefreshCw,
      color: 'from-green-500 to-emerald-600',
>>>>>>> cursor/website-audit-and-update-with-deployment-73fd
      popular: false
    },
    {
      id: 'database-management',
<<<<<<< HEAD
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
=======
      title: 'Database Management & Optimization',
      description: 'Expert database administration, optimization, and migration services ensuring peak performance and security',
      features: [
        'Database design & architecture',
        'Performance tuning & optimization',
        'Data migration & synchronization',
        'Backup & recovery solutions',
        'Database security & compliance',
        '24/7 database monitoring'
      ],
      pricing: {
        starter: { price: '$2,000', period: '/month', features: ['Basic database management', 'Standard monitoring', 'Email support'] },
        professional: { price: '$6,000', period: '/month', features: ['Advanced optimization', 'Migration services', 'Priority support', 'Custom solutions'] },
        enterprise: { price: '$12,000', period: '/month', features: ['Complete database suite', 'Dedicated DBA', 'Custom development', 'SLA guarantee'] }
      },
      icon: Database,
      color: 'from-purple-500 to-indigo-600',
      popular: false
    },
    {
      id: 'network-solutions',
      title: 'Network Infrastructure & Security',
      description: 'Design, implement, and maintain robust network infrastructure with enterprise-grade security and performance',
      features: [
        'Network design & architecture',
        'Firewall configuration & management',
        'VPN setup & remote access',
        'Network monitoring & optimization',
        'Wireless network solutions',
        'Network security assessments'
      ],
      pricing: {
        starter: { price: '$3,000', period: '/month', features: ['Basic network setup', 'Standard monitoring', 'Email support'] },
        professional: { price: '$8,000', period: '/month', features: ['Advanced network services', 'Security solutions', 'Priority support', 'Custom configurations'] },
        enterprise: { price: '$16,000', period: '/month', features: ['Complete network suite', 'Dedicated team', 'Custom solutions', 'SLA guarantee'] }
      },
      icon: Network,
      color: 'from-orange-500 to-red-600',
      popular: true
    },
    {
      id: 'managed-it',
      title: 'Managed IT Services',
      description: 'Complete IT management solution providing 24/7 support, monitoring, and maintenance for your entire infrastructure',
      features: [
        '24/7 IT support & helpdesk',
        'Proactive monitoring & maintenance',
        'Software updates & patch management',
        'Hardware procurement & management',
        'User account management',
        'IT strategy & consulting'
      ],
      pricing: {
        starter: { price: '$1,500', period: '/user/month', features: ['Basic support', 'Standard monitoring', 'Email support'] },
        professional: { price: '$3,500', period: '/user/month', features: ['Advanced support', 'Proactive monitoring', 'Priority support', 'Custom solutions'] },
        enterprise: { price: '$6,000', period: '/user/month', features: ['Complete IT management', 'Dedicated team', 'Custom development', 'SLA guarantee'] }
      },
      icon: Settings,
      color: 'from-indigo-500 to-purple-600',
>>>>>>> cursor/website-audit-and-update-with-deployment-73fd
      popular: false
    }
  ];

<<<<<<< HEAD
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
=======
  const stats = [
    { icon: Users, value: '200+', label: 'IT Projects Completed', color: 'text-cyan-400' },
    { icon: Shield, value: '99.9%', label: 'Security Uptime', color: 'text-green-400' },
    { icon: Clock, value: '24/7', label: 'IT Support', color: 'text-blue-400' },
    { icon: Award, value: '50+', label: 'Certified Engineers', color: 'text-purple-400' }
  ];

  const certifications = [
    { name: 'AWS Certified Solutions Architect', icon: Cloud },
    { name: 'Microsoft Azure Expert', icon: Server },
    { name: 'Cisco Certified Network Professional', icon: Network },
    { name: 'CompTIA Security+', icon: Shield },
    { name: 'ITIL 4 Foundation', icon: Settings },
    { name: 'PMP Certified', icon: Target }
  ];

  return (
    <>
      <Helmet>
        <title>IT Services - Zion Tech Group | Enterprise IT Solutions & Support</title>
        <meta name="description" content="Comprehensive IT services including cloud infrastructure, cybersecurity, DevOps, database management, and managed IT services. 24/7 support with 99.9% uptime." />
        <meta name="keywords" content="IT services, cloud infrastructure, cybersecurity, DevOps, database management, managed IT, network solutions, IT support" />
        <meta property="og:title" content="IT Services - Zion Tech Group" />
        <meta property="og:description" content="Transform your IT infrastructure with our comprehensive IT services. Get 24/7 support, 99.9% uptime, and enterprise-grade security solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/it-services" />
      </Helmet>

      <div className="min-h-screen bg-slate-900 cyber-grid">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h1 className="text-5xl lg:text-7xl font-bold mb-6">
                <span className="holographic-text cyber-text">IT Services</span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Comprehensive IT solutions for modern businesses. Get 24/7 support, 99.9% uptime, 
                and enterprise-grade security with our expert IT services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="cyber-button inline-flex items-center px-8 py-4 text-lg"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  (302) 464-0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="cyber-button inline-flex items-center px-8 py-4 text-lg"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Get Quote
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gradient-to-r from-slate-800/50 to-slate-900/50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 ${stat.color} bg-gradient-to-br from-cyan-500/20 to-purple-600/20 rounded-lg flex items-center justify-center`}>
                    <stat.icon className="w-8 h-8" />
                  </div>
                  <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                <span className="neon-text">Our IT Services</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive IT solutions designed to keep your business running smoothly and securely.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {itServices.map((service, index) => (
                <div key={service.id} className={`quantum-card p-8 ${service.popular ? 'energy-pulse' : ''}`}>
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center mb-4`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    {service.popular && (
                      <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-3 py-1 rounded-full text-sm font-bold">
                        Most Popular
                      </div>
                    )}
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-cyan-400 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t border-gray-700 pt-6">
                    <h4 className="text-lg font-semibold text-cyan-400 mb-4">Pricing:</h4>
                    <div className="space-y-3">
                      {Object.entries(service.pricing).map(([tier, details]) => (
                        <div key={tier} className="flex justify-between items-center p-3 bg-slate-800/50 rounded-lg">
                          <div>
                            <div className="text-white font-semibold capitalize">{tier}</div>
                            <div className="text-sm text-gray-400">{details.features[0]}</div>
                          </div>
                          <div className="text-right">
                            <div className="text-cyan-400 font-bold">{details.price}{details.period}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 flex gap-3">
                    <a
                      href="tel:+13024640950"
                      className="flex-1 cyber-button text-center py-3"
                    >
                      Get Started
                    </a>
                    <a
                      href="mailto:kleber@ziontechgroup.com"
                      className="flex-1 bg-slate-800 text-white py-3 px-4 rounded-lg hover:bg-slate-700 transition-colors text-center"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="py-20 bg-gradient-to-r from-slate-800/30 to-slate-900/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                <span className="neon-text">Our Certifications</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our team holds industry-leading certifications ensuring you get the highest quality IT services.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {certifications.map((cert, index) => (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-cyan-500/20 to-purple-600/20 rounded-lg flex items-center justify-center">
                    <cert.icon className="w-10 h-10 text-cyan-400" />
                  </div>
                  <div className="text-sm text-gray-300 font-medium">{cert.name}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-600/20 to-purple-600/20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join 200+ companies already using our IT services to achieve maximum uptime, security, and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="cyber-button inline-flex items-center px-8 py-4 text-lg"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="cyber-button inline-flex items-center px-8 py-4 text-lg"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Us
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
>>>>>>> cursor/website-audit-and-update-with-deployment-73fd
  );
};

<<<<<<< HEAD
export default ITServicesPage;
=======
export default ITServicesPage;
>>>>>>> cursor/website-audit-and-update-with-deployment-6747
