'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Star, Zap, Brain, Cloud, Shield, Code, BarChart, Users, Mail, Calendar, FileText, Image, Video, Music, Globe, Smartphone, Laptop, Database, Lock, Settings, TrendingUp, Target, Rocket, Award, Clock, DollarSign, Server, Network, HardDrive, Cpu, Monitor, Wifi, Headphones, Printer, Camera, Wrench, Cog, Activity, MessageCircle, Mic, Phone } from 'lucide-react';

const ITServicesPage: React.FC = () => {
  const itServices = [
    {
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions for modern businesses with enterprise-grade security and performance.',
      icon: <Cloud className="w-8 h-8" />,
      features: ['AWS/Azure/GCP Migration', 'Auto-scaling', 'Load balancing', 'Disaster recovery', 'Cost optimization', 'Security compliance'],
      price: 'Starting at $500/month',
      marketPrice: '$1,000-2,500/month',
      category: 'Infrastructure',
      benefits: [
        'Reduce infrastructure costs by 40%',
        'Improve scalability and performance',
        'Ensure 99.9% uptime',
        'Enhanced security and compliance'
      ],
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Kubernetes', 'Docker', 'Terraform'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security solutions to protect your business from evolving threats.',
      icon: <Shield className="w-8 h-8" />,
      features: ['Threat detection', 'Vulnerability assessment', 'Security monitoring', 'Incident response', 'Penetration testing', 'Security training'],
      price: 'Starting at $800/month',
      marketPrice: '$1,500-3,000/month',
      category: 'Security',
      benefits: [
        'Protect against 99.9% of threats',
        'Reduce security incidents by 80%',
        'Ensure compliance with regulations',
        '24/7 security monitoring'
      ],
      technologies: ['SIEM', 'Firewall', 'Antivirus', 'Intrusion Detection', 'Security Analytics', 'Compliance Tools'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Database Management',
      description: 'Optimized database solutions for performance, reliability, and scalability.',
      icon: <Database className="w-8 h-8" />,
      features: ['Performance tuning', 'Backup & recovery', 'Data migration', 'Monitoring', 'Query optimization', 'Capacity planning'],
      price: 'Starting at $300/month',
      marketPrice: '$600-1,200/month',
      category: 'Data',
      benefits: [
        'Improve query performance by 60%',
        'Reduce downtime by 90%',
        'Automated backup and recovery',
        'Real-time monitoring and alerts'
      ],
      technologies: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch', 'Database Monitoring'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Network Solutions',
      description: 'Robust networking infrastructure for seamless connectivity and optimal performance.',
      icon: <Network className="w-8 h-8" />,
      features: ['Network design', 'VPN setup', 'Firewall configuration', 'Monitoring', 'Load balancing', 'Traffic optimization'],
      price: 'Starting at $400/month',
      marketPrice: '$800-1,500/month',
      category: 'Infrastructure',
      benefits: [
        'Improve network performance by 50%',
        'Reduce network downtime by 95%',
        'Enhanced security and monitoring',
        'Scalable network architecture'
      ],
      technologies: ['Cisco', 'Juniper', 'Fortinet', 'Network Monitoring', 'SD-WAN', 'Load Balancers'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'DevOps & CI/CD',
      description: 'Streamlined development and deployment processes with automated testing and monitoring.',
      icon: <Code className="w-8 h-8" />,
      features: ['Automated testing', 'Continuous deployment', 'Infrastructure as code', 'Monitoring', 'Container orchestration', 'Release management'],
      price: 'Starting at $600/month',
      marketPrice: '$1,200-2,500/month',
      category: 'Development',
      benefits: [
        'Accelerate deployment by 70%',
        'Reduce deployment errors by 90%',
        'Improve development efficiency',
        'Automated quality assurance'
      ],
      technologies: ['Jenkins', 'GitLab CI', 'Docker', 'Kubernetes', 'Terraform', 'Monitoring Tools'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'IT Support & Help Desk',
      description: '24/7 technical support for your business needs with rapid response times.',
      icon: <Users className="w-8 h-8" />,
      features: ['Help desk', 'Remote support', 'System maintenance', 'User training', 'Hardware management', 'Software licensing'],
      price: 'Starting at $200/month',
      marketPrice: '$400-800/month',
      category: 'Support',
      benefits: [
        'Reduce IT support costs by 50%',
        'Improve user satisfaction by 80%',
        'Faster issue resolution',
        'Proactive system maintenance'
      ],
      technologies: ['Help Desk Software', 'Remote Desktop', 'System Monitoring', 'Ticketing System', 'Knowledge Base', 'Training Platform'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'API Management',
      description: 'Comprehensive API management platform with monitoring, security, and optimization.',
      icon: <Network className="w-8 h-8" />,
      features: ['API Gateway', 'Rate limiting', 'Authentication', 'Monitoring', 'Documentation', 'Versioning'],
      price: 'Starting at $350/month',
      marketPrice: '$700-1,400/month',
      category: 'API Management',
      benefits: [
        'Improve API performance by 60%',
        'Enhance API security',
        'Reduce development time by 40%',
        'Better API documentation'
      ],
      technologies: ['Kong', 'AWS API Gateway', 'Azure API Management', 'Rate Limiting', 'OAuth', 'API Analytics'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'System Integration',
      description: 'Seamless integration of disparate systems for improved efficiency and data flow.',
      icon: <Settings className="w-8 h-8" />,
      features: ['System integration', 'Data synchronization', 'API development', 'Legacy system modernization', 'Workflow automation', 'Data migration'],
      price: 'Starting at $800/month',
      marketPrice: '$1,500-3,000/month',
      category: 'Integration',
      benefits: [
        'Improve system efficiency by 50%',
        'Reduce manual work by 70%',
        'Better data consistency',
        'Streamlined workflows'
      ],
      technologies: ['REST APIs', 'SOAP', 'Message Queues', 'ETL Tools', 'Workflow Engines', 'Data Integration'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'IT Consulting',
      description: 'Strategic IT planning and consulting to align technology with business objectives.',
      icon: <Target className="w-8 h-8" />,
      features: ['IT strategy', 'Technology assessment', 'Digital transformation', 'Cost optimization', 'Vendor management', 'Project planning'],
      price: 'Starting at $150/hour',
      marketPrice: '$200-400/hour',
      category: 'Consulting',
      benefits: [
        'Align IT with business goals',
        'Reduce technology costs by 30%',
        'Improve technology ROI',
        'Strategic technology planning'
      ],
      technologies: ['IT Strategy', 'Technology Assessment', 'Digital Transformation', 'Cost Analysis', 'Vendor Evaluation', 'Project Management'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Managed Services',
      description: 'Comprehensive IT management services for proactive monitoring and maintenance.',
      icon: <Monitor className="w-8 h-8" />,
      features: ['24/7 monitoring', 'Proactive maintenance', 'Performance optimization', 'Security management', 'Backup management', 'Compliance monitoring'],
      price: 'Starting at $1,000/month',
      marketPrice: '$2,000-4,000/month',
      category: 'Managed Services',
      benefits: [
        'Reduce IT management overhead by 80%',
        'Improve system reliability by 95%',
        'Proactive issue prevention',
        'Comprehensive IT support'
      ],
      technologies: ['Monitoring Tools', 'Automation', 'Security Management', 'Backup Solutions', 'Compliance Tools', 'Performance Analytics'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Disaster Recovery',
      description: 'Comprehensive disaster recovery solutions to ensure business continuity.',
      icon: <Shield className="w-8 h-8" />,
      features: ['Backup strategies', 'Recovery planning', 'Testing procedures', 'RTO/RPO optimization', 'Cloud backup', 'Business continuity'],
      price: 'Starting at $500/month',
      marketPrice: '$1,000-2,000/month',
      category: 'Disaster Recovery',
      benefits: [
        'Minimize downtime during disasters',
        'Protect critical business data',
        'Ensure business continuity',
        'Compliance with regulations'
      ],
      technologies: ['Backup Solutions', 'Cloud Storage', 'Recovery Tools', 'Testing Platforms', 'Monitoring Systems', 'Compliance Tools'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Mobile Device Management',
      description: 'Comprehensive mobile device management for security and productivity.',
      icon: <Smartphone className="w-8 h-8" />,
      features: ['Device enrollment', 'Security policies', 'App management', 'Remote wipe', 'Compliance monitoring', 'User training'],
      price: 'Starting at $25/device/month',
      marketPrice: '$50-100/device/month',
      category: 'Mobile Management',
      benefits: [
        'Enhance mobile security by 90%',
        'Improve productivity by 40%',
        'Centralized device management',
        'Compliance with regulations'
      ],
      technologies: ['MDM Solutions', 'Mobile Security', 'App Management', 'Device Monitoring', 'Compliance Tools', 'User Training'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    }
  ];

  const categories = [...new Set(itServices.map(service => service.category))];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 neon-text cyber-text">
            IT Services
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Comprehensive IT solutions to keep your business running smoothly and securely. 
            Enterprise-grade infrastructure, security, and support services.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="cyber-card hologram-card p-6">
              <div className="text-3xl font-bold text-cyan-400 mb-2">12+</div>
              <div className="text-gray-300">IT Services</div>
            </div>
            <div className="cyber-card hologram-card p-6">
              <div className="text-3xl font-bold text-green-400 mb-2">$200</div>
              <div className="text-gray-300">Starting Price</div>
            </div>
            <div className="cyber-card hologram-card p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">99.9%</div>
              <div className="text-gray-300">Uptime</div>
            </div>
            <div className="cyber-card hologram-card p-6">
              <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-gray-300">Support</div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-6 mb-12">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span className="text-white font-medium">+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <span className="text-white font-medium">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5" />
                <span className="text-white font-medium">Middletown, DE</span>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
            Our IT Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.map((service, index) => (
              <div key={index} className="cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300">
                <div className="text-cyan-400 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4 text-sm">{service.description}</p>
                
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl font-bold text-green-400">{service.price}</span>
                    <span className="text-sm text-gray-400">Market: {service.marketPrice}</span>
                  </div>
                  <div className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full inline-block">
                    {service.category}
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-white mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.slice(0, 4).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                    {service.features.length > 4 && (
                      <li className="text-sm text-gray-400">
                        +{service.features.length - 4} more features
                      </li>
                    )}
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-white mb-2">Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="text-sm text-gray-300 flex items-center">
                        <TrendingUp className="w-3 h-3 text-blue-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-white mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-1">
                    {service.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="text-center">
                  <a
                    href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${service.title}`}
                    className="cyber-button w-full text-center block"
                  >
                    Get Started Now
                  </a>
                  <p className="text-xs text-gray-400 mt-2">
                    {service.contactInfo}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-white mb-8 neon-text">
            Ready to Transform Your IT?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Let our expert team help you build a robust, secure, and scalable IT infrastructure
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="cyber-button"
            >
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="cyber-button"
            >
              Email Us
            </a>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ITServicesPage;