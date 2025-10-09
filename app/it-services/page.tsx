'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Cloud, Shield, Database, Settings, Server, Network, Lock, Zap, Users, Globe, Phone, Mail, MapPin, ArrowRight, Award, TrendingUp, Clock, Headphones, Cpu, HardDrive, Wifi, Monitor, Smartphone, Laptop, Router, Key, Eye, AlertTriangle, RefreshCw, BarChart, Target, Rocket } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ITServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const itServices = [
    // Infrastructure Services
    {
      icon: Server,
      title: 'IT Infrastructure Management',
      price: '$2,500/month',
      marketPrice: '$4,000-6,000/month',
      savings: 'Save $1,500-3,500/month',
      description: 'Complete IT infrastructure management with 99.9% uptime guarantee and 24/7 monitoring',
      features: [
        'Server Management & Maintenance',
        'Network Infrastructure Setup',
        'Cloud Migration & Management',
        'Disaster Recovery Planning',
        'Performance Monitoring',
        'Security Hardening',
        'Backup & Recovery Solutions',
        'Load Balancing & Scaling'
      ],
      benefits: [
        'Reduce downtime by 95%',
        'Improve system performance by 40%',
        'Lower operational costs by 30%',
        'Enhanced security posture'
      ],
      category: 'Infrastructure',
      technologies: ['AWS', 'Azure', 'Google Cloud', 'VMware', 'Docker', 'Kubernetes'],
      popular: true
    },
    {
      icon: Cloud,
      title: 'Cloud Services & Migration',
      price: '$1,799/month',
      marketPrice: '$3,000-5,000/month',
      savings: 'Save $1,200-3,200/month',
      description: 'Comprehensive cloud migration and management services with multi-cloud expertise',
      features: [
        'Cloud Strategy & Planning',
        'Migration & Deployment',
        'Multi-Cloud Management',
        'Cost Optimization',
        'Security & Compliance',
        'Auto-scaling Solutions',
        'Cloud Monitoring',
        'DevOps Integration'
      ],
      benefits: [
        'Reduce cloud costs by 35%',
        'Improve scalability',
        'Enhanced security',
        'Faster deployment'
      ],
      category: 'Cloud',
      technologies: ['AWS', 'Azure', 'GCP', 'Terraform', 'Ansible', 'Jenkins'],
      popular: true
    },
    {
      icon: Shield,
      title: 'Cybersecurity Solutions',
      price: '$1,299/month',
      marketPrice: '$2,000-4,000/month',
      savings: 'Save $700-2,700/month',
      description: 'Advanced cybersecurity solutions with AI-powered threat detection and prevention',
      features: [
        'Threat Detection & Prevention',
        'Vulnerability Assessment',
        'Security Monitoring 24/7',
        'Incident Response',
        'Penetration Testing',
        'Security Training',
        'Compliance Management',
        'Firewall Management'
      ],
      benefits: [
        'Prevent 99.9% of threats',
        'Reduce security incidents by 80%',
        'Ensure compliance',
        'Protect sensitive data'
      ],
      category: 'Security',
      technologies: ['SIEM', 'SOAR', 'EDR', 'XDR', 'Firewall', 'VPN'],
      popular: true
    },
    {
      icon: Database,
      title: 'Database Management',
      price: '$899/month',
      marketPrice: '$1,500-2,500/month',
      savings: 'Save $600-1,600/month',
      description: 'Database design, optimization, and management with AI-powered performance tuning',
      features: [
        'Database Design & Architecture',
        'Performance Tuning',
        'Backup & Recovery',
        'Security Hardening',
        'Monitoring & Alerting',
        'Query Optimization',
        'Data Migration',
        'High Availability Setup'
      ],
      benefits: [
        'Improve query performance by 60%',
        'Reduce downtime by 90%',
        'Optimize storage costs',
        'Ensure data integrity'
      ],
      category: 'Database',
      technologies: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Oracle', 'SQL Server'],
      popular: false
    },
    {
      icon: Network,
      title: 'Network Solutions',
      price: '$1,199/month',
      marketPrice: '$2,000-3,500/month',
      savings: 'Save $800-2,300/month',
      description: 'Enterprise network design, implementation, and management with advanced security',
      features: [
        'Network Design & Planning',
        'Router & Switch Configuration',
        'Wireless Network Setup',
        'VPN Implementation',
        'Network Security',
        'Traffic Monitoring',
        'Bandwidth Management',
        'Network Optimization'
      ],
      benefits: [
        'Improve network speed by 50%',
        'Reduce latency by 40%',
        'Enhanced security',
        'Better reliability'
      ],
      category: 'Networking',
      technologies: ['Cisco', 'Juniper', 'Fortinet', 'Palo Alto', 'Aruba', 'Meraki'],
      popular: false
    },
    {
      icon: Settings,
      title: 'DevOps & CI/CD',
      price: '$1,499/month',
      marketPrice: '$2,500-4,000/month',
      savings: 'Save $1,000-2,500/month',
      description: 'Complete DevOps implementation with automated CI/CD pipelines and infrastructure as code',
      features: [
        'CI/CD Pipeline Setup',
        'Infrastructure as Code',
        'Container Orchestration',
        'Automated Testing',
        'Deployment Automation',
        'Monitoring & Logging',
        'Security Integration',
        'Performance Optimization'
      ],
      benefits: [
        'Deploy 10x faster',
        'Reduce deployment errors by 90%',
        'Improve team productivity',
        'Faster time to market'
      ],
      category: 'DevOps',
      technologies: ['Docker', 'Kubernetes', 'Jenkins', 'GitLab', 'Terraform', 'Ansible'],
      popular: true
    },
    {
      icon: Monitor,
      title: 'IT Support & Helpdesk',
      price: '$799/month',
      marketPrice: '$1,200-2,000/month',
      savings: 'Save $400-1,200/month',
      description: '24/7 IT support and helpdesk services with AI-powered ticket routing and resolution',
      features: [
        '24/7 Technical Support',
        'Remote Desktop Support',
        'Hardware & Software Support',
        'User Training',
        'Issue Tracking & Resolution',
        'Knowledge Base Management',
        'SLA Monitoring',
        'Proactive Maintenance'
      ],
      benefits: [
        'Resolve issues 3x faster',
        'Reduce downtime by 70%',
        'Improve user satisfaction',
        'Lower support costs'
      ],
      category: 'Support',
      technologies: ['ServiceNow', 'Jira', 'Zendesk', 'Remote Desktop', 'TeamViewer'],
      popular: false
    },
    {
      icon: Laptop,
      title: 'Managed IT Services',
      price: '$1,999/month',
      marketPrice: '$3,500-6,000/month',
      savings: 'Save $1,500-4,000/month',
      description: 'Complete managed IT services including infrastructure, security, and support',
      features: [
        'Complete IT Management',
        'Proactive Monitoring',
        'Security Management',
        'Backup & Recovery',
        'Software Management',
        'Hardware Procurement',
        'Compliance Management',
        'Strategic IT Planning'
      ],
      benefits: [
        'Reduce IT costs by 40%',
        'Improve system reliability',
        'Focus on core business',
        'Access to latest technology'
      ],
      category: 'Managed Services',
      technologies: ['RMM Tools', 'PSA Software', 'Monitoring Tools', 'Security Suites'],
      popular: true
    },
    {
      icon: Users,
      title: 'IT Consulting',
      price: '$299/hour',
      marketPrice: '$400-600/hour',
      savings: 'Save $100-300/hour',
      description: 'Strategic IT consulting to align technology with business objectives',
      features: [
        'IT Strategy Development',
        'Technology Assessment',
        'Digital Transformation',
        'Process Optimization',
        'Vendor Management',
        'Project Management',
        'Change Management',
        'Training & Development'
      ],
      benefits: [
        'Align IT with business goals',
        'Optimize technology investments',
        'Improve efficiency',
        'Reduce risks'
      ],
      category: 'Consulting',
      technologies: ['ITIL', 'COBIT', 'Agile', 'Scrum', 'PMI', 'TOGAF'],
      popular: false
    },
    {
      icon: BarChart,
      title: 'IT Performance Monitoring',
      price: '$599/month',
      marketPrice: '$1,000-1,800/month',
      savings: 'Save $400-1,200/month',
      description: 'Advanced IT performance monitoring with AI-powered analytics and alerting',
      features: [
        'Real-time Monitoring',
        'Performance Analytics',
        'Predictive Alerting',
        'Capacity Planning',
        'Trend Analysis',
        'Custom Dashboards',
        'Automated Reporting',
        'Integration APIs'
      ],
      benefits: [
        'Prevent issues before they occur',
        'Optimize resource utilization',
        'Improve system performance',
        'Reduce operational costs'
      ],
      category: 'Monitoring',
      technologies: ['Prometheus', 'Grafana', 'ELK Stack', 'New Relic', 'DataDog'],
      popular: false
    }
  ];

  const categories = ['All', 'Infrastructure', 'Cloud', 'Security', 'Database', 'Networking', 'DevOps', 'Support', 'Managed Services', 'Consulting', 'Monitoring'];

  const filteredServices = itServices.filter(service => 
    selectedCategory === 'All' || service.category === selectedCategory
  );

  const stats = [
    { icon: Users, label: 'IT Professionals', value: '50+' },
    { icon: Award, label: 'Successful Projects', value: '500+' },
    { icon: TrendingUp, label: 'Client Satisfaction', value: '99%' },
    { icon: Clock, label: 'Response Time', value: '< 15 min' },
    { icon: Shield, label: 'Security Uptime', value: '99.9%' },
    { icon: Globe, label: 'Global Support', value: '24/7' }
  ];

  return (
    <>
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including infrastructure management, cloud migration, cybersecurity, and managed IT solutions. Expert IT support with competitive pricing." />
        <meta name="keywords" content="IT services, cloud migration, cybersecurity, managed IT, infrastructure management, DevOps, database management" />
        <link rel="canonical" href="https://ziontechgroup.com/it-services" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 holographic-text cyber-text glitch" data-text="IT Services">
              IT Services
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium cyber-glow neon-text">
              Comprehensive IT Solutions for Modern Businesses
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Expert IT services including infrastructure management, cloud migration, cybersecurity, and managed IT solutions. 
              Transform your technology infrastructure with our proven expertise and competitive pricing.
            </p>
          </section>

          {/* Statistics */}
          <section className="mb-16">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="cyber-card hologram-card p-6 text-center hover:scale-105 transition-all duration-300">
                  <stat.icon className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Category Filter */}
          <section className="mb-12">
            <div className="cyber-card hologram-card p-6">
              <h3 className="text-lg font-semibold text-white mb-4 text-center">Filter by Category</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-cyan-500 text-white'
                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* Services Grid */}
          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <div key={index} className="cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300 group relative">
                  {/* Popular Badge */}
                  {service.popular && (
                    <div className="absolute -top-2 -right-2 bg-gradient-to-r from-cyan-400 to-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                      <Star className="w-3 h-3 fill-current" />
                      Popular
                    </div>
                  )}

                  {/* Service Icon */}
                  <div className="text-4xl mb-4 text-center cyber-scan-line">
                    <service.icon className="w-12 h-12 mx-auto text-cyan-400" />
                  </div>

                  {/* Service Title */}
                  <h3 className="text-xl font-bold text-white mb-3 text-center neon-text group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>

                  {/* Category Badge */}
                  <div className="text-center mb-4">
                    <span className="inline-block bg-gray-800 text-cyan-400 text-xs font-medium px-3 py-1 rounded-full">
                      {service.category}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed text-center">
                    {service.description}
                  </p>

                  {/* Pricing */}
                  <div className="text-center mb-6">
                    <div className="text-2xl font-bold text-cyan-400 mb-1 neon-text">
                      {service.price}
                    </div>
                    <div className="text-sm text-gray-400 line-through">
                      Market: {service.marketPrice}
                    </div>
                    <div className="text-sm text-green-400 font-medium mt-1">
                      {service.savings}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 4).map((feature, index) => (
                        <li key={index} className="text-xs text-gray-300 flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                      {service.features.length > 4 && (
                        <li className="text-xs text-gray-400 italic">
                          +{service.features.length - 4} more features
                        </li>
                      )}
                    </ul>
                  </div>

                  {/* Benefits */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-green-400" />
                      Benefits
                    </h4>
                    <ul className="space-y-2">
                      {service.benefits.slice(0, 3).map((benefit, index) => (
                        <li key={index} className="text-xs text-gray-300 flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                      <Cpu className="w-4 h-4 text-yellow-400" />
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.slice(0, 4).map((tech, index) => (
                        <span key={index} className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded">
                          {tech}
                        </span>
                      ))}
                      {service.technologies.length > 4 && (
                        <span className="text-xs text-gray-400">
                          +{service.technologies.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div className="mb-6 p-3 bg-gray-800 rounded-lg">
                    <div className="text-xs text-gray-300 text-center">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <Phone className="w-3 h-3 text-cyan-400" />
                        <span>+1 302 464 0950</span>
                      </div>
                      <div className="flex items-center justify-center gap-2">
                        <Mail className="w-3 h-3 text-cyan-400" />
                        <span>kleber@ziontechgroup.com</span>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col gap-2">
                    <a
                      href="tel:+13024640950"
                      className="cyber-button text-center text-sm py-2 flex items-center justify-center gap-2"
                    >
                      <Phone className="w-4 h-4" />
                      Call Now
                    </a>
                    <a
                      href="mailto:kleber@ziontechgroup.com"
                      className="border border-cyan-400 text-cyan-400 px-4 py-2 rounded-lg text-sm text-center hover:bg-cyan-400 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <Mail className="w-4 h-4" />
                      Email Us
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center py-16">
            <div className="cyber-card hologram-card p-12 max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your IT Infrastructure?
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Get started with our IT services today and experience the power of expert technology management.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="cyber-button text-center"
                  aria-label="Call us at (302) 464-0950"
                >
                  📞 Call: (302) 464-0950
                </a>
                <a 
                  href="mailto:kleber@ziontechgroup.com"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
                >
                  📧 Email Us
                </a>
              </div>
              <div className="mt-8 text-sm text-gray-400">
                <p>📍 364 E Main St STE 1008, Middletown, DE 19709</p>
                <p>🌐 https://ziontechgroup.com</p>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default ITServicesPage;