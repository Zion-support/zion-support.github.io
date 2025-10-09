'use client';

import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Cloud, 
  Shield, 
  Settings, 
  Database, 
  Smartphone, 
  Lock, 
  BarChart, 
  Users, 
  CheckCircle, 
  ArrowRight, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Star, 
  Zap, 
  Cpu, 
  HardDrive, 
  Wifi, 
  Server, 
  Code, 
  Globe, 
  Target, 
  TrendingUp,
  Search,
  Award,
  DollarSign,
  Calendar,
  Download,
  Play,
  Monitor,
  Network,
  Key,
  AlertTriangle,
  CheckSquare,
  RefreshCw,
  Layers,
  Activity
} from 'lucide-react';

const ITServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const itServices = [
    // Infrastructure Services
    {
      id: 'cloud-infrastructure',
      name: 'Cloud Infrastructure Solutions',
      category: 'infrastructure',
      description: 'Complete cloud infrastructure setup, migration, and management for AWS, Azure, and Google Cloud',
      features: [
        'Multi-cloud architecture design',
        'Automated scaling and load balancing',
        'Disaster recovery planning',
        'Cost optimization strategies',
        '24/7 monitoring and support',
        'Security compliance (SOC 2, ISO 27001)'
      ],
      benefits: [
        'Reduce infrastructure costs by 40%',
        'Improve scalability and performance',
        'Ensure 99.9% uptime',
        'Enhance security posture'
      ],
      pricing: {
        starter: '$299/month',
        professional: '$799/month',
        enterprise: '$1,999/month'
      },
      icon: Cloud,
      popular: true,
      rating: 4.9,
      reviews: 156,
      implementation: '2-4 weeks',
      support: '24/7'
    },
    {
      id: 'cybersecurity-suite',
      name: 'Enterprise Cybersecurity Suite',
      category: 'security',
      description: 'Comprehensive cybersecurity solution with threat detection, incident response, and compliance management',
      features: [
        'Advanced threat detection (EDR/XDR)',
        'Security information and event management (SIEM)',
        'Vulnerability assessment and penetration testing',
        'Security awareness training',
        'Compliance monitoring (GDPR, HIPAA, SOX)',
        'Incident response planning'
      ],
      benefits: [
        'Prevent 99.9% of cyber attacks',
        'Reduce security incidents by 85%',
        'Ensure regulatory compliance',
        'Protect sensitive data'
      ],
      pricing: {
        starter: '$499/month',
        professional: '$1,299/month',
        enterprise: '$2,999/month'
      },
      icon: Shield,
      popular: true,
      rating: 4.8,
      reviews: 134,
      implementation: '4-6 weeks',
      support: '24/7'
    },
    {
      id: 'network-solutions',
      name: 'Network Infrastructure & Security',
      category: 'networking',
      description: 'Complete network design, implementation, and management with advanced security features',
      features: [
        'SD-WAN implementation',
        'Network segmentation',
        'Firewall configuration and management',
        'VPN setup and management',
        'Network monitoring and optimization',
        'Wireless network design'
      ],
      benefits: [
        'Improve network performance by 60%',
        'Enhance security posture',
        'Reduce network downtime',
        'Optimize bandwidth usage'
      ],
      pricing: {
        starter: '$199/month',
        professional: '$599/month',
        enterprise: '$1,299/month'
      },
      icon: Network,
      popular: false,
      rating: 4.7,
      reviews: 89,
      implementation: '2-3 weeks',
      support: '24/7'
    },
    {
      id: 'database-management',
      name: 'Database Management & Optimization',
      category: 'database',
      description: 'Complete database administration, optimization, and migration services for all major database platforms',
      features: [
        'Database design and architecture',
        'Performance tuning and optimization',
        'Backup and recovery strategies',
        'Database migration services',
        'High availability setup',
        'Security hardening'
      ],
      benefits: [
        'Improve database performance by 70%',
        'Ensure data integrity and availability',
        'Reduce maintenance overhead',
        'Optimize storage costs'
      ],
      pricing: {
        starter: '$149/month',
        professional: '$399/month',
        enterprise: '$899/month'
      },
      icon: Database,
      popular: false,
      rating: 4.6,
      reviews: 67,
      implementation: '1-3 weeks',
      support: '24/7'
    },
    {
      id: 'devops-cicd',
      name: 'DevOps & CI/CD Implementation',
      category: 'devops',
      description: 'Complete DevOps transformation with automated CI/CD pipelines, infrastructure as code, and monitoring',
      features: [
        'CI/CD pipeline setup (Jenkins, GitLab, Azure DevOps)',
        'Infrastructure as Code (Terraform, Ansible)',
        'Container orchestration (Kubernetes, Docker)',
        'Monitoring and logging (Prometheus, ELK Stack)',
        'Automated testing and deployment',
        'DevSecOps integration'
      ],
      benefits: [
        'Deploy 10x faster',
        'Reduce deployment failures by 90%',
        'Improve code quality',
        'Enable rapid scaling'
      ],
      pricing: {
        starter: '$299/month',
        professional: '$799/month',
        enterprise: '$1,599/month'
      },
      icon: Code,
      popular: true,
      rating: 4.8,
      reviews: 112,
      implementation: '3-5 weeks',
      support: '24/7'
    },
    {
      id: 'it-support',
      name: '24/7 IT Support & Helpdesk',
      category: 'support',
      description: 'Comprehensive IT support services with helpdesk, remote assistance, and proactive monitoring',
      features: [
        '24/7 helpdesk support',
        'Remote desktop assistance',
        'Proactive system monitoring',
        'Hardware and software support',
        'User training and onboarding',
        'IT asset management'
      ],
      benefits: [
        'Reduce IT downtime by 80%',
        'Improve user productivity',
        'Lower IT support costs',
        'Ensure system reliability'
      ],
      pricing: {
        starter: '$99/month',
        professional: '$299/month',
        enterprise: '$599/month'
      },
      icon: Users,
      popular: true,
      rating: 4.7,
      reviews: 203,
      implementation: '1 week',
      support: '24/7'
    },
    {
      id: 'cloud-migration',
      name: 'Cloud Migration Services',
      category: 'migration',
      description: 'Seamless migration to cloud platforms with minimal downtime and maximum security',
      features: [
        'Cloud readiness assessment',
        'Migration planning and strategy',
        'Data migration and synchronization',
        'Application modernization',
        'Post-migration optimization',
        'Training and documentation'
      ],
      benefits: [
        'Reduce migration risks by 90%',
        'Minimize downtime during migration',
        'Optimize cloud costs',
        'Improve scalability and performance'
      ],
      pricing: {
        starter: '$1,999/project',
        professional: '$4,999/project',
        enterprise: '$9,999/project'
      },
      icon: Cloud,
      popular: false,
      rating: 4.6,
      reviews: 78,
      implementation: '4-8 weeks',
      support: '24/7'
    },
    {
      id: 'system-administration',
      name: 'System Administration & Management',
      category: 'administration',
      description: 'Complete system administration services for Windows, Linux, and hybrid environments',
      features: [
        'Server setup and configuration',
        'User account management',
        'System monitoring and maintenance',
        'Patch management and updates',
        'Backup and disaster recovery',
        'Performance optimization'
      ],
      benefits: [
        'Ensure system stability',
        'Reduce administrative overhead',
        'Improve security posture',
        'Optimize system performance'
      ],
      pricing: {
        starter: '$199/month',
        professional: '$499/month',
        enterprise: '$999/month'
      },
      icon: Settings,
      popular: false,
      rating: 4.5,
      reviews: 56,
      implementation: '1-2 weeks',
      support: 'Business hours'
    },
    {
      id: 'it-consulting',
      name: 'Strategic IT Consulting',
      category: 'consulting',
      description: 'Expert IT consulting services for digital transformation, technology strategy, and process optimization',
      features: [
        'IT strategy development',
        'Technology assessment and planning',
        'Digital transformation roadmap',
        'Vendor evaluation and selection',
        'Process optimization',
        'Change management'
      ],
      benefits: [
        'Align IT with business goals',
        'Optimize technology investments',
        'Improve operational efficiency',
        'Enable digital transformation'
      ],
      pricing: {
        starter: '$299/hour',
        professional: '$399/hour',
        enterprise: '$499/hour'
      },
      icon: Target,
      popular: false,
      rating: 4.8,
      reviews: 45,
      implementation: 'Ongoing',
      support: 'Business hours'
    },
    {
      id: 'backup-disaster-recovery',
      name: 'Backup & Disaster Recovery',
      category: 'backup',
      description: 'Comprehensive backup and disaster recovery solutions to protect your critical data and systems',
      features: [
        'Automated backup scheduling',
        'Multi-tier backup strategy',
        'Disaster recovery planning',
        'Business continuity testing',
        'Offsite backup storage',
        'Recovery time optimization'
      ],
      benefits: [
        'Protect critical data',
        'Minimize downtime during disasters',
        'Ensure business continuity',
        'Meet compliance requirements'
      ],
      pricing: {
        starter: '$149/month',
        professional: '$399/month',
        enterprise: '$799/month'
      },
      icon: HardDrive,
      popular: false,
      rating: 4.7,
      reviews: 67,
      implementation: '1-2 weeks',
      support: '24/7'
    },
    {
      id: 'mobile-device-management',
      name: 'Mobile Device Management (MDM)',
      category: 'mobile',
      description: 'Complete mobile device management solution for BYOD and corporate device security',
      features: [
        'Device enrollment and provisioning',
        'Application management and distribution',
        'Security policy enforcement',
        'Remote device management',
        'Data encryption and protection',
        'Compliance monitoring'
      ],
      benefits: [
        'Secure mobile devices',
        'Enforce security policies',
        'Protect corporate data',
        'Simplify device management'
      ],
      pricing: {
        starter: '$5/device/month',
        professional: '$8/device/month',
        enterprise: '$12/device/month'
      },
      icon: Smartphone,
      popular: false,
      rating: 4.4,
      reviews: 34,
      implementation: '1-2 weeks',
      support: '24/7'
    },
    {
      id: 'it-training',
      name: 'IT Training & Certification',
      category: 'training',
      description: 'Comprehensive IT training programs and certification preparation for your team',
      features: [
        'Customized training programs',
        'Certification exam preparation',
        'Hands-on lab exercises',
        'Online and in-person training',
        'Progress tracking and reporting',
        'Ongoing support and mentoring'
      ],
      benefits: [
        'Improve team skills',
        'Increase productivity',
        'Reduce support tickets',
        'Enhance job satisfaction'
      ],
      pricing: {
        starter: '$199/person',
        professional: '$399/person',
        enterprise: '$599/person'
      },
      icon: Users,
      popular: false,
      rating: 4.6,
      reviews: 89,
      implementation: 'Ongoing',
      support: 'Business hours'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', icon: Settings },
    { id: 'infrastructure', name: 'Infrastructure', icon: Cloud },
    { id: 'security', name: 'Cybersecurity', icon: Shield },
    { id: 'networking', name: 'Networking', icon: Network },
    { id: 'database', name: 'Database', icon: Database },
    { id: 'devops', name: 'DevOps', icon: Code },
    { id: 'support', name: 'Support', icon: Users },
    { id: 'migration', name: 'Migration', icon: Cloud },
    { id: 'administration', name: 'Administration', icon: Settings },
    { id: 'consulting', name: 'Consulting', icon: Target },
    { id: 'backup', name: 'Backup & Recovery', icon: HardDrive },
    { id: 'mobile', name: 'Mobile', icon: Smartphone },
    { id: 'training', name: 'Training', icon: Users }
  ];

  const filteredServices = useMemo(() => {
    return itServices.filter(service => {
      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchTerm]);

  const popularServices = itServices.filter(service => service.popular);

  return (
    <>
      <Helmet>
        <title>IT Services - Zion Tech Group | Enterprise IT Solutions</title>
        <meta name="description" content="Comprehensive IT services including cloud infrastructure, cybersecurity, networking, DevOps, and 24/7 support. Enterprise-grade IT solutions for your business." />
        <meta name="keywords" content="IT services, cloud infrastructure, cybersecurity, networking, DevOps, IT support, system administration, digital transformation" />
        <link rel="canonical" href="https://ziontechgroup.com/it-services" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid">
        {/* Hero Section */}
        <div className="relative pt-20 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text neon-pulse">
                IT Services
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Comprehensive IT solutions designed to optimize your infrastructure, enhance security, 
                and drive digital transformation. From cloud migration to cybersecurity, we provide 
                enterprise-grade IT services that keep your business running smoothly.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <div className="flex items-center space-x-2 bg-slate-800/50 px-4 py-2 rounded-lg">
                  <TrendingUp className="w-5 h-5 text-green-400" />
                  <span className="text-white">99.9% Uptime Guarantee</span>
                </div>
                <div className="flex items-center space-x-2 bg-slate-800/50 px-4 py-2 rounded-lg">
                  <Users className="w-5 h-5 text-blue-400" />
                  <span className="text-white">500+ IT Projects</span>
                </div>
                <div className="flex items-center space-x-2 bg-slate-800/50 px-4 py-2 rounded-lg">
                  <Award className="w-5 h-5 text-yellow-400" />
                  <span className="text-white">24/7 Expert Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Search and Filter Section */}
        <div className="container mx-auto px-4 mb-12">
          <div className="max-w-4xl mx-auto">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 cyber-card">
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="flex-1">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search IT services..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                    />
                    <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                        selectedCategory === category.id
                          ? 'bg-cyan-500 text-white'
                          : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                      }`}
                    >
                      <category.icon className="w-4 h-4" />
                      <span>{category.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Popular Services */}
        <div className="container mx-auto px-4 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4 neon-text">Most Popular IT Services</h2>
            <p className="text-gray-300">Our most requested and highest-rated IT solutions</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularServices.map((service) => (
              <div key={service.id} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 cyber-card hover:bg-slate-800/70 transition-all duration-300 group">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                        {service.name}
                      </h3>
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-sm text-gray-300">{service.rating}</span>
                        </div>
                        <span className="text-sm text-gray-500">({service.reviews} reviews)</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-green-500/20 text-green-400 px-2 py-1 rounded text-xs font-medium">
                    Popular
                  </div>
                </div>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <div className="space-y-2 mb-4">
                  {service.features.slice(0, 3).map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-sm text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-2xl font-bold text-cyan-400">{service.pricing.professional}</span>
                    <span className="text-gray-400 text-sm">/month</span>
                  </div>
                  <div className="text-sm text-gray-400">
                    Implementation: {service.implementation}
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2 px-4 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center space-x-2">
                    <span>Get Started</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button className="px-4 py-2 border border-gray-600 text-gray-300 rounded-lg hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Services Grid */}
        <div className="container mx-auto px-4 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4 neon-text">All IT Services</h2>
            <p className="text-gray-300">Comprehensive IT solutions for every business need</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div key={service.id} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 cyber-card hover:bg-slate-800/70 transition-all duration-300 group">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                        {service.name}
                      </h3>
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-sm text-gray-300">{service.rating}</span>
                        </div>
                        <span className="text-sm text-gray-500">({service.reviews} reviews)</span>
                      </div>
                    </div>
                  </div>
                  {service.popular && (
                    <div className="bg-green-500/20 text-green-400 px-2 py-1 rounded text-xs font-medium">
                      Popular
                    </div>
                  )}
                </div>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <div className="space-y-2 mb-4">
                  {service.features.slice(0, 3).map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-sm text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-2xl font-bold text-cyan-400">{service.pricing.professional}</span>
                    <span className="text-gray-400 text-sm">/month</span>
                  </div>
                  <div className="text-sm text-gray-400">
                    Implementation: {service.implementation}
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2 px-4 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center space-x-2">
                    <span>Get Started</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button className="px-4 py-2 border border-gray-600 text-gray-300 rounded-lg hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="container mx-auto px-4 mb-16">
          <div className="bg-gradient-to-r from-cyan-600/20 to-purple-600/20 rounded-lg p-8 cyber-card text-center">
            <h2 className="text-3xl font-bold text-white mb-4 neon-text">Ready to Optimize Your IT Infrastructure?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Get a free IT assessment and discover how our services can improve your technology infrastructure
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center space-x-2">
                <Phone className="w-5 h-5" />
                <span>Schedule Assessment</span>
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2">
                <Download className="w-5 h-5" />
                <span>Download IT Guide</span>
              </button>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="container mx-auto px-4 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>
              <p className="text-cyan-400 font-medium">+1 (302) 464-0950</p>
              <p className="text-gray-400 text-sm">24/7 IT Support Available</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
              <p className="text-cyan-400 font-medium">kleber@ziontechgroup.com</p>
              <p className="text-gray-400 text-sm">Quick Response Guaranteed</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Visit Us</h3>
              <p className="text-cyan-400 font-medium">Middletown, DE</p>
              <p className="text-gray-400 text-sm">364 E Main St STE 1008</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ITServicesPage;