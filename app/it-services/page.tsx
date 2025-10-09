'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Cloud, Shield, Database, Settings, Phone, Mail, MapPin, TrendingUp, Zap, Globe, Cpu, Lock, BarChart, Users, Wrench, Server, Network, HardDrive, Monitor, Smartphone, Laptop, Headphones, Camera, Printer, Router, Firewall, Key, Eye, AlertTriangle, CheckSquare, ArrowRight, Brain, Code, Target } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ITServicesPage: React.FC = () => {
  const itServices = [
    {
      icon: Cloud,
      title: 'Cloud Infrastructure & Migration',
      price: '$1,999/month',
      description: 'Complete cloud migration and infrastructure management with 99.99% uptime guarantee',
      features: ['AWS/Azure/GCP Migration', 'Cloud Architecture Design', 'Auto-scaling Solutions', 'Cost Optimization', 'Disaster Recovery', '24/7 Monitoring'],
      benefits: ['Reduce infrastructure costs by 40%', 'Improve scalability by 300%', 'Achieve 99.99% uptime', 'Enable remote work capabilities'],
      marketPrice: '$3,500-7,000/month',
      category: 'Infrastructure',
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      icon: Shield,
      title: 'Advanced Cybersecurity Suite',
      price: '$2,499/month',
      description: 'Comprehensive security solutions with AI-powered threat detection and prevention',
      features: ['Threat Detection & Response', 'Vulnerability Assessment', 'Security Monitoring', 'Incident Response', 'Compliance Management', 'Security Training'],
      benefits: ['Prevent 99.9% of cyber attacks', 'Reduce security incidents by 95%', 'Ensure compliance with regulations', 'Protect sensitive data'],
      marketPrice: '$4,000-8,000/month',
      category: 'Security',
      technologies: ['SIEM', 'EDR', 'XDR', 'Zero Trust', 'AI Security', 'Threat Intelligence'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      icon: Database,
      title: 'Database Management & Optimization',
      price: '$1,299/month',
      description: 'Database design, optimization, and management with AI-powered performance tuning',
      features: ['Database Design & Architecture', 'Performance Tuning', 'Backup & Recovery', 'Security Hardening', 'Migration Services', 'Monitoring & Maintenance'],
      benefits: ['Improve query performance by 80%', 'Reduce downtime by 90%', 'Ensure data integrity', 'Optimize storage costs'],
      marketPrice: '$2,000-4,500/month',
      category: 'Database',
      technologies: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Elasticsearch', 'Oracle'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      icon: Settings,
      title: 'DevOps & CI/CD Automation',
      price: '$1,799/month',
      description: 'Complete DevOps implementation with automated CI/CD pipelines and infrastructure as code',
      features: ['CI/CD Pipeline Setup', 'Infrastructure as Code', 'Container Orchestration', 'Monitoring & Logging', 'Release Management', 'Team Training'],
      benefits: ['Deploy 10x faster', 'Reduce deployment failures by 95%', 'Improve team productivity', 'Enable continuous delivery'],
      marketPrice: '$3,000-6,000/month',
      category: 'DevOps',
      technologies: ['Jenkins', 'GitLab CI', 'Docker', 'Kubernetes', 'Terraform', 'Ansible'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      icon: Network,
      title: 'Network Infrastructure & Security',
      price: '$1,599/month',
      description: 'Enterprise network design, implementation, and security with advanced monitoring',
      features: ['Network Design & Implementation', 'Security Hardening', 'Performance Monitoring', 'VPN Solutions', 'Wireless Networks', 'Network Optimization'],
      benefits: ['Improve network performance by 60%', 'Enhance security posture', 'Reduce network downtime', 'Enable secure remote access'],
      marketPrice: '$2,500-5,000/month',
      category: 'Networking',
      technologies: ['Cisco', 'Juniper', 'Fortinet', 'Palo Alto', 'SD-WAN', 'Network Monitoring'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      icon: Server,
      title: 'Server Management & Virtualization',
      price: '$1,399/month',
      description: 'Complete server management with virtualization, monitoring, and optimization',
      features: ['Server Setup & Configuration', 'Virtualization Management', 'Performance Monitoring', 'Patch Management', 'Capacity Planning', 'Disaster Recovery'],
      benefits: ['Maximize server utilization', 'Reduce hardware costs by 50%', 'Improve system reliability', 'Enable rapid scaling'],
      marketPrice: '$2,200-4,500/month',
      category: 'Infrastructure',
      technologies: ['VMware', 'Hyper-V', 'Proxmox', 'Linux', 'Windows Server', 'Monitoring Tools'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      icon: Monitor,
      title: 'IT Monitoring & Management',
      price: '$899/month',
      description: 'Comprehensive IT monitoring with proactive issue detection and automated resolution',
      features: ['24/7 System Monitoring', 'Performance Analytics', 'Alert Management', 'Capacity Planning', 'Uptime Reporting', 'Predictive Maintenance'],
      benefits: ['Prevent 90% of IT issues', 'Improve system uptime', 'Reduce resolution time', 'Optimize resource usage'],
      marketPrice: '$1,500-3,000/month',
      category: 'Monitoring',
      technologies: ['Nagios', 'Zabbix', 'Prometheus', 'Grafana', 'Custom Dashboards', 'AI Monitoring'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      icon: Users,
      title: 'IT Support & Help Desk',
      price: '$1,199/month',
      description: '24/7 IT support with AI-powered ticket management and remote assistance',
      features: ['24/7 Technical Support', 'Remote Assistance', 'Ticket Management', 'Knowledge Base', 'User Training', 'Hardware Support'],
      benefits: ['Reduce support costs by 60%', 'Improve user satisfaction', 'Faster issue resolution', 'Proactive support'],
      marketPrice: '$2,000-4,000/month',
      category: 'Support',
      technologies: ['ServiceNow', 'Jira Service Desk', 'Remote Desktop', 'AI Chatbots', 'Knowledge Management', 'Ticketing Systems'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      icon: Lock,
      title: 'Identity & Access Management',
      price: '$1,699/month',
      description: 'Advanced identity management with single sign-on and multi-factor authentication',
      features: ['Single Sign-On (SSO)', 'Multi-Factor Authentication', 'Identity Governance', 'Privileged Access Management', 'Compliance Reporting', 'User Provisioning'],
      benefits: ['Enhance security posture', 'Improve user experience', 'Ensure compliance', 'Reduce administrative overhead'],
      marketPrice: '$2,800-5,500/month',
      category: 'Security',
      technologies: ['Okta', 'Azure AD', 'Ping Identity', 'SAML', 'OAuth', 'LDAP'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      icon: HardDrive,
      title: 'Data Backup & Recovery',
      price: '$799/month',
      description: 'Comprehensive data protection with automated backups and disaster recovery',
      features: ['Automated Backups', 'Disaster Recovery', 'Data Encryption', 'Compliance Backup', 'Recovery Testing', 'Cloud Storage'],
      benefits: ['Protect critical data', 'Minimize data loss', 'Ensure business continuity', 'Meet compliance requirements'],
      marketPrice: '$1,200-2,500/month',
      category: 'Data Protection',
      technologies: ['Veeam', 'Commvault', 'AWS Backup', 'Azure Backup', 'Encryption', 'Cloud Storage'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      icon: Smartphone,
      title: 'Mobile Device Management',
      price: '$1,099/month',
      description: 'Complete mobile device management with security and application control',
      features: ['Device Enrollment', 'Security Policies', 'App Management', 'Remote Wipe', 'Compliance Monitoring', 'User Training'],
      benefits: ['Secure mobile access', 'Centralized management', 'Reduce security risks', 'Improve productivity'],
      marketPrice: '$1,800-3,500/month',
      category: 'Mobile',
      technologies: ['Microsoft Intune', 'VMware Workspace ONE', 'MobileIron', 'AirWatch', 'MDM Solutions', 'Mobile Security'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      icon: Wrench,
      title: 'IT Consulting & Strategy',
      price: '$2,999/month',
      description: 'Strategic IT consulting with technology roadmap and digital transformation',
      features: ['Technology Assessment', 'Strategic Planning', 'Digital Transformation', 'Vendor Management', 'Project Management', 'Change Management'],
      benefits: ['Align IT with business goals', 'Optimize technology investments', 'Improve operational efficiency', 'Enable digital transformation'],
      marketPrice: '$5,000-10,000/month',
      category: 'Consulting',
      technologies: ['IT Strategy', 'Digital Transformation', 'Technology Assessment', 'Project Management', 'Change Management', 'Vendor Management'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      icon: BarChart,
      title: 'IT Performance Analytics',
      price: '$1,499/month',
      description: 'Advanced IT analytics with performance insights and optimization recommendations',
      features: ['Performance Analytics', 'Capacity Planning', 'Cost Optimization', 'Trend Analysis', 'Predictive Insights', 'Custom Dashboards'],
      benefits: ['Optimize IT performance', 'Reduce costs by 30%', 'Improve resource utilization', 'Enable data-driven decisions'],
      marketPrice: '$2,500-5,000/month',
      category: 'Analytics',
      technologies: ['Power BI', 'Tableau', 'Grafana', 'Custom Analytics', 'Machine Learning', 'Data Visualization'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      icon: Globe,
      title: 'Global IT Services',
      price: '$3,499/month',
      description: 'Worldwide IT support and services with local expertise and 24/7 coverage',
      features: ['Global Coverage', 'Local Expertise', '24/7 Support', 'Multi-language Support', 'Compliance Management', 'Cultural Adaptation'],
      benefits: ['Support global operations', 'Ensure consistent service', 'Meet local requirements', 'Reduce complexity'],
      marketPrice: '$6,000-15,000/month',
      category: 'Global',
      technologies: ['Global Networks', 'Multi-cloud', 'Compliance Tools', 'Translation Services', 'Cultural Adaptation', 'Local Partners'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      icon: Brain,
      title: 'AI-Powered IT Operations',
      price: '$2,299/month',
      description: 'Intelligent IT operations with AI-driven automation and predictive maintenance',
      features: ['AI Automation', 'Predictive Maintenance', 'Intelligent Monitoring', 'Automated Remediation', 'Machine Learning', 'Cognitive Services'],
      benefits: ['Automate 80% of IT tasks', 'Prevent 95% of issues', 'Reduce operational costs', 'Improve efficiency'],
      marketPrice: '$4,000-8,000/month',
      category: 'AI Operations',
      technologies: ['Machine Learning', 'AI Automation', 'Predictive Analytics', 'Cognitive Services', 'Natural Language Processing', 'Computer Vision'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    }
  ];

  const categories = [
    { name: 'All', count: itServices.length },
    { name: 'Infrastructure', count: itServices.filter(s => s.category === 'Infrastructure').length },
    { name: 'Security', count: itServices.filter(s => s.category === 'Security').length },
    { name: 'Database', count: itServices.filter(s => s.category === 'Database').length },
    { name: 'DevOps', count: itServices.filter(s => s.category === 'DevOps').length },
    { name: 'Networking', count: itServices.filter(s => s.category === 'Networking').length },
    { name: 'Monitoring', count: itServices.filter(s => s.category === 'Monitoring').length },
    { name: 'Support', count: itServices.filter(s => s.category === 'Support').length },
    { name: 'Consulting', count: itServices.filter(s => s.category === 'Consulting').length }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including cloud migration, cybersecurity, DevOps, and infrastructure management. Enterprise-grade solutions starting at $799/month." />
        <meta name="keywords" content="it services, cloud migration, cybersecurity, devops, infrastructure, database management, network security" />
      </Helmet>
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            IT Services
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Comprehensive IT solutions designed to optimize your infrastructure, enhance security, and drive digital transformation.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-cyan-400 mb-2">15+</div>
              <div className="text-gray-300">IT Services</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-green-400 mb-2">$799</div>
              <div className="text-gray-300">Starting Price</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">99.9%</div>
              <div className="text-gray-300">Uptime SLA</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
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
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Choose Your IT Solution
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
                
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-green-600">{service.price}</span>
                    <span className="text-sm text-gray-500">Market: {service.marketPrice}</span>
                  </div>
                  <div className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full inline-block">
                    {service.category}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 4).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                    {service.features.length > 4 && (
                      <li className="text-sm text-gray-500">
                        +{service.features.length - 4} more features
                      </li>
                    )}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="text-sm text-gray-600 flex items-center">
                        <TrendingUp className="w-3 h-3 text-blue-500 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="text-center">
                  <a
                    href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${service.title}`}
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all inline-block"
                  >
                    Get Started Now
                  </a>
                  <p className="text-xs text-gray-500 mt-2">
                    {service.contactInfo}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your IT Infrastructure?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Get started with our IT services today and optimize your technology operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ITServicesPage;
