'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Server, 
  Shield, 
  Cloud, 
  Database, 
  Network, 
  Code, 
  Smartphone, 
  Monitor, 
  Wifi, 
  Lock, 
  Settings, 
  CheckCircle, 
  ArrowRight,
  Play,
  Download,
  ExternalLink,
  CreditCard,
  Clock,
  Award,
  Target,
  TrendingUp,
  Cpu,
  Eye,
  Mic,
  Calendar,
  Mail,
  Phone,
  MapPin,
  Users,
  Zap,
  Globe,
  HardDrive,
  Router,
  Terminal,
  Key,
  AlertTriangle,
  RefreshCw,
  BarChart3,
  FileText,
  Headphones
} from 'lucide-react';

const ITSolutionsPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedService, setSelectedService] = useState<string | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const itServices = [
    {
      id: 'cloud-migration',
      title: 'Cloud Migration & Infrastructure',
      description: 'Complete cloud migration services with zero-downtime deployment and cost optimization.',
      price: 'Starting at $5,000',
      duration: '2-8 weeks',
      features: [
        'AWS, Azure, and Google Cloud expertise',
        'Zero-downtime migration strategy',
        'Cost optimization and monitoring',
        'Security compliance (SOC 2, HIPAA)',
        'Disaster recovery planning',
        'Performance optimization',
        '24/7 monitoring and support',
        'Staff training and documentation'
      ],
      icon: Cloud,
      color: 'from-blue-500 to-cyan-500',
      category: 'Cloud Services',
      complexity: 'Enterprise',
      deliverables: ['Migration Plan', 'Cost Analysis', 'Security Audit', 'Training Materials'],
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform']
    },
    {
      id: 'cybersecurity-audit',
      title: 'Cybersecurity Assessment & Implementation',
      description: 'Comprehensive security audit, penetration testing, and implementation of enterprise-grade security solutions.',
      price: 'Starting at $3,000',
      duration: '1-4 weeks',
      features: [
        'Vulnerability assessment and scanning',
        'Penetration testing and ethical hacking',
        'Security policy development',
        'Employee security training',
        'Multi-factor authentication setup',
        'Network security hardening',
        'Incident response planning',
        'Compliance reporting (GDPR, HIPAA)'
      ],
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      category: 'Security',
      complexity: 'Critical',
      deliverables: ['Security Report', 'Risk Assessment', 'Policy Documents', 'Training Program'],
      technologies: ['Nessus', 'Metasploit', 'Wireshark', 'SIEM', 'Firewall', 'VPN']
    },
    {
      id: 'network-infrastructure',
      title: 'Network Design & Implementation',
      description: 'Complete network infrastructure design, implementation, and optimization for businesses of all sizes.',
      price: 'Starting at $2,500',
      duration: '1-3 weeks',
      features: [
        'Network architecture design',
        'Hardware procurement and installation',
        'VLAN and subnet configuration',
        'Wireless network optimization',
        'Network monitoring setup',
        'Bandwidth management',
        'Quality of Service (QoS) implementation',
        'Network documentation and training'
      ],
      icon: Network,
      color: 'from-green-500 to-emerald-500',
      category: 'Infrastructure',
      complexity: 'Advanced',
      deliverables: ['Network Diagram', 'Configuration Files', 'Monitoring Setup', 'Documentation'],
      technologies: ['Cisco', 'Juniper', 'Ubiquiti', 'Fortinet', 'Palo Alto', 'Aruba']
    },
    {
      id: 'database-optimization',
      title: 'Database Management & Optimization',
      description: 'Database design, optimization, migration, and maintenance services for improved performance and reliability.',
      price: 'Starting at $1,500',
      duration: '1-2 weeks',
      features: [
        'Database performance tuning',
        'Query optimization and indexing',
        'Database migration and consolidation',
        'Backup and recovery strategies',
        'Data security and encryption',
        'Monitoring and alerting setup',
        'Capacity planning and scaling',
        'Database documentation and training'
      ],
      icon: Database,
      color: 'from-purple-500 to-pink-500',
      category: 'Data Management',
      complexity: 'Expert',
      deliverables: ['Performance Report', 'Optimization Plan', 'Backup Strategy', 'Monitoring Setup'],
      technologies: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch', 'Oracle']
    },
    {
      id: 'mobile-app-development',
      title: 'Mobile Application Development',
      description: 'Native and cross-platform mobile app development with modern frameworks and best practices.',
      price: 'Starting at $8,000',
      duration: '4-12 weeks',
      features: [
        'iOS and Android native development',
        'React Native and Flutter apps',
        'UI/UX design and prototyping',
        'API integration and backend services',
        'App store optimization and deployment',
        'Push notifications and analytics',
        'Security implementation',
        'Maintenance and updates'
      ],
      icon: Smartphone,
      color: 'from-indigo-500 to-purple-500',
      category: 'Development',
      complexity: 'Complex',
      deliverables: ['Mobile App', 'Source Code', 'Documentation', 'App Store Assets'],
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'AWS Mobile']
    },
    {
      id: 'web-development',
      title: 'Custom Web Development',
      description: 'Full-stack web application development with modern technologies and responsive design.',
      price: 'Starting at $3,000',
      duration: '2-8 weeks',
      features: [
        'Frontend and backend development',
        'Responsive and mobile-first design',
        'API development and integration',
        'Database design and implementation',
        'Security and authentication',
        'Performance optimization',
        'SEO and accessibility compliance',
        'Testing and quality assurance'
      ],
      icon: Code,
      color: 'from-cyan-500 to-blue-500',
      category: 'Development',
      complexity: 'Advanced',
      deliverables: ['Web Application', 'Source Code', 'Documentation', 'Deployment Guide'],
      technologies: ['React', 'Node.js', 'Python', 'Django', 'PostgreSQL', 'Docker']
    },
    {
      id: 'it-consulting',
      title: 'Strategic IT Consulting',
      description: 'Technology strategy consulting to align IT infrastructure with business objectives and growth.',
      price: '$200/hour',
      duration: 'Ongoing',
      features: [
        'Technology roadmap development',
        'IT budget planning and optimization',
        'Vendor evaluation and selection',
        'Digital transformation strategy',
        'IT governance and compliance',
        'Technology risk assessment',
        'Staff training and development',
        'Ongoing advisory services'
      ],
      icon: Target,
      color: 'from-orange-500 to-red-500',
      category: 'Consulting',
      complexity: 'Strategic',
      deliverables: ['Strategic Plan', 'Technology Roadmap', 'Budget Analysis', 'Implementation Guide'],
      technologies: ['Enterprise Architecture', 'ITIL', 'COBIT', 'Agile', 'DevOps', 'Cloud Strategy']
    },
    {
      id: 'managed-it-services',
      title: 'Managed IT Services',
      description: 'Comprehensive IT management including monitoring, maintenance, and support for your entire infrastructure.',
      price: 'Starting at $500/month',
      duration: 'Ongoing',
      features: [
        '24/7 network and server monitoring',
        'Proactive maintenance and updates',
        'Help desk and technical support',
        'Security monitoring and management',
        'Backup and disaster recovery',
        'Software license management',
        'IT asset management',
        'Regular reporting and analytics'
      ],
      icon: Settings,
      color: 'from-teal-500 to-green-500',
      category: 'Managed Services',
      complexity: 'Comprehensive',
      deliverables: ['Service Level Agreement', 'Monitoring Dashboard', 'Monthly Reports', 'Support Portal'],
      technologies: ['RMM Tools', 'PSA Software', 'SIEM', 'Backup Solutions', 'Monitoring', 'Ticketing']
    }
  ];

  const categories = ['All', 'Cloud Services', 'Security', 'Infrastructure', 'Data Management', 'Development', 'Consulting', 'Managed Services'];

  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredServices = selectedCategory === 'All' 
    ? itServices 
    : itServices.filter(service => service.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <Helmet>
        <title>IT Solutions & Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT solutions and services including cloud migration, cybersecurity, network infrastructure, and custom development. Expert IT consulting and managed services." />
        <meta name="keywords" content="it services, cloud migration, cybersecurity, network infrastructure, web development, mobile apps, it consulting, managed services" />
        <link rel="canonical" href="https://ziontechgroup.com/it-solutions" />
      </Helmet>

      {/* Advanced Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="cyber-matrix-bg"></div>
        <div className="quantum-field-bg"></div>
        <div className="holographic-grid"></div>
      </div>

      <div className="relative z-10">
        {/* Header Section */}
        <div className="container mx-auto px-4 py-16">
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="neon-text">IT Solutions</span>
              <br />
              <span className="holographic-text">& Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Comprehensive IT solutions designed to modernize your infrastructure, enhance security, 
              and drive business growth. From cloud migration to cybersecurity, we've got you covered.
            </p>
            
            {/* Contact Info */}
            <div className="flex flex-wrap justify-center gap-8 mb-12 text-lg">
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-cyan-400" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-cyan-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {[
              { number: '500+', label: 'Projects Completed', icon: CheckCircle },
              { number: '50+', label: 'Enterprise Clients', icon: Users },
              { number: '99.9%', label: 'Uptime Guarantee', icon: Award },
              { number: '24/7', label: 'Support Available', icon: Headphones }
            ].map((stat, index) => (
              <div key={index} className="glass-card p-6 text-center">
                <stat.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'cyber-button bg-cyan-500/20 text-cyan-400'
                    : 'glass-card hover:bg-white/10 text-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <div
                key={service.id}
                className={`glass-card p-6 hover:scale-105 transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Service Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${service.color}`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-cyan-400 font-semibold">{service.category}</div>
                    <div className="text-xs bg-gradient-to-r from-orange-400 to-red-500 text-black px-2 py-1 rounded-full mt-1">
                      {service.complexity}
                    </div>
                  </div>
                </div>

                {/* Service Title & Description */}
                <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{service.description}</p>

                {/* Pricing & Duration */}
                <div className="mb-4">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                    <span className="text-sm text-gray-400">{service.duration}</span>
                  </div>
                </div>

                {/* Key Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-white mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                    {service.features.length > 4 && (
                      <li className="text-sm text-cyan-400">
                        +{service.features.length - 4} more features
                      </li>
                    )}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="font-semibold text-white mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.slice(0, 3).map((tech, idx) => (
                      <span key={idx} className="px-2 py-1 bg-gray-700/50 text-xs rounded text-gray-300">
                        {tech}
                      </span>
                    ))}
                    {service.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-700/50 text-xs rounded text-cyan-400">
                        +{service.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button className="cyber-button flex-1 flex items-center justify-center gap-2">
                    <Play className="w-4 h-4" />
                    Get Quote
                  </button>
                  <button 
                    onClick={() => setSelectedService(service.id)}
                    className="glass-card px-4 py-2 hover:bg-white/10 transition-all duration-300"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Process Section */}
          <div className="mt-20">
            <h2 className="text-4xl font-bold text-center mb-12 holographic-text">
              Our Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'Discovery', description: 'We analyze your current infrastructure and business requirements' },
                { step: '02', title: 'Planning', description: 'Develop a comprehensive strategy and implementation roadmap' },
                { step: '03', title: 'Implementation', description: 'Execute the solution with minimal disruption to your operations' },
                { step: '04', title: 'Support', description: 'Provide ongoing maintenance, monitoring, and optimization' }
              ].map((step, index) => (
                <div key={index} className="glass-card p-6 text-center">
                  <div className="text-4xl font-bold text-cyan-400 mb-4">{step.step}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-20">
            <div className="glass-card p-8 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-4 holographic-text">
                Ready to Modernize Your IT Infrastructure?
              </h2>
              <p className="text-xl text-gray-300 mb-6">
                Let our expert team help you transform your technology landscape. 
                Get a free consultation and customized solution for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="cyber-button px-8 py-4 text-lg">
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule Free Consultation
                </button>
                <button className="glass-card px-8 py-4 text-lg hover:bg-white/10 transition-all duration-300">
                  <Download className="w-5 h-5 mr-2" />
                  Download Service Catalog
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ITSolutionsPage;