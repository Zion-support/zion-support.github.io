'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ITServicesPage: React.FC = () => {
  const itServices = [
    {
      id: 'cloud-infrastructure',
      title: 'Cloud Infrastructure Management',
      description: 'Complete cloud infrastructure setup, migration, and management services.',
      features: ['Cloud migration', 'Infrastructure as Code', 'Auto-scaling', 'Cost optimization'],
      benefits: ['Reduced costs', 'Improved scalability', 'Enhanced security', 'Better performance'],
      marketPrice: '$2,500-8,000/month',
      category: 'Cloud Services',
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Terraform', 'Kubernetes']
    },
    {
      id: 'network-security',
      title: 'Network Security Solutions',
      description: 'Comprehensive network security implementation and monitoring.',
      features: ['Firewall configuration', 'VPN setup', 'Intrusion detection', 'Security monitoring'],
      benefits: ['Enhanced security', 'Compliance', 'Threat protection', 'Peace of mind'],
      marketPrice: '$1,800-5,500/month',
      category: 'Security',
      technologies: ['Cisco', 'Fortinet', 'Palo Alto', 'SonicWall', 'OpenVPN']
    },
    {
      id: 'database-management',
      title: 'Database Management & Optimization',
      description: 'Database design, implementation, and performance optimization services.',
      features: ['Database design', 'Performance tuning', 'Backup strategies', 'Migration services'],
      benefits: ['Better performance', 'Data security', 'Reduced downtime', 'Cost savings'],
      marketPrice: '$1,200-4,000/month',
      category: 'Database',
      technologies: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Oracle']
    },
    {
      id: 'helpdesk-support',
      title: '24/7 IT Helpdesk Support',
      description: 'Round-the-clock technical support and helpdesk services.',
      features: ['24/7 support', 'Remote assistance', 'Ticket management', 'Knowledge base'],
      benefits: ['Quick resolution', 'Reduced downtime', 'Expert support', 'Cost efficiency'],
      marketPrice: '$800-2,500/month',
      category: 'Support',
      technologies: ['ServiceNow', 'Jira', 'Zendesk', 'TeamViewer', 'Slack']
    },
    {
      id: 'backup-disaster',
      title: 'Backup & Disaster Recovery',
      description: 'Comprehensive backup solutions and disaster recovery planning.',
      features: ['Automated backups', 'Disaster recovery', 'Data replication', 'Testing & validation'],
      benefits: ['Data protection', 'Business continuity', 'Compliance', 'Risk mitigation'],
      marketPrice: '$1,500-4,500/month',
      category: 'Data Protection',
      technologies: ['Veeam', 'Commvault', 'Acronis', 'AWS Backup', 'Azure Site Recovery']
    },
    {
      id: 'monitoring-analytics',
      title: 'IT Monitoring & Analytics',
      description: 'Advanced monitoring solutions for infrastructure and application performance.',
      features: ['Real-time monitoring', 'Performance analytics', 'Alerting', 'Reporting'],
      benefits: ['Proactive management', 'Better visibility', 'Faster issue resolution', 'Optimized performance'],
      marketPrice: '$1,000-3,500/month',
      category: 'Monitoring',
      technologies: ['Nagios', 'Zabbix', 'Prometheus', 'Grafana', 'New Relic']
    }
  ];

  const categories = [...new Set(itServices.map(service => service.category))];

  return (
    <>
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including cloud infrastructure, network security, database management, and 24/7 support. Expert solutions for your business needs." />
        <meta name="keywords" content="IT services, cloud infrastructure, network security, database management, IT support, disaster recovery, monitoring" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              IT Services
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive IT solutions to keep your business running smoothly. From cloud infrastructure to 24/7 support, we've got you covered.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all flex items-center justify-center"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="tel:+13024640950"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (302) 464-0950
              </a>
            </div>
          </section>

          {/* Services Grid */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Our IT Services</h2>
            
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <button className="px-4 py-2 bg-cyan-600 text-white rounded-lg font-medium">
                All Services
              </button>
              {categories.map((category, index) => (
                <button
                  key={index}
                  className="px-4 py-2 bg-gray-700 text-gray-300 rounded-lg font-medium hover:bg-gray-600 transition-colors"
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itServices.map((service, index) => (
                <div key={index} className="bg-gray-800/50 rounded-lg p-6 border border-gray-700 hover:border-cyan-500 transition-colors">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-cyan-600 rounded-lg flex items-center justify-center mr-4">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                      <span className="text-sm text-cyan-400">{service.category}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-200 mb-2">Key Features:</h4>
                    <ul className="text-sm text-gray-400 space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-200 mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-cyan-400">{service.marketPrice}</span>
                    <button className="bg-cyan-600 text-white px-4 py-2 rounded-lg hover:bg-cyan-700 transition-colors flex items-center">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Why Choose Our IT Services?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Enterprise Security</h3>
                <p className="text-gray-300">Bank-level security and compliance standards</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">24/7 Support</h3>
                <p className="text-gray-300">Round-the-clock technical support and monitoring</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Proven Results</h3>
                <p className="text-gray-300">99.9% uptime and 50% cost reduction average</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Expert Team</h3>
                <p className="text-gray-300">Certified professionals with 10+ years experience</p>
              </div>
            </div>
          </section>

          {/* Process */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Our Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Assessment</h3>
                <p className="text-gray-300">We analyze your current IT infrastructure and identify areas for improvement</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Planning</h3>
                <p className="text-gray-300">We create a customized solution plan tailored to your business needs</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Implementation</h3>
                <p className="text-gray-300">We implement the solution with minimal disruption to your operations</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">4</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Support</h3>
                <p className="text-gray-300">We provide ongoing support and monitoring to ensure optimal performance</p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center bg-gray-800/50 rounded-lg p-12 border border-gray-700">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your IT Infrastructure?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Let our expert team help you build a robust, secure, and scalable IT infrastructure that grows with your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all"
              >
                Get Free Consultation
              </a>
              <a
                href="tel:+13024640950"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (302) 464-0950
              </a>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default ITServicesPage;