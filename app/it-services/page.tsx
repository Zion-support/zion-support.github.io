import React, { useState } from 'react';
import { CheckCircle, ArrowRight, Server, Cloud, Shield, Code, Smartphone, Globe, Database, Cpu, Wifi, Settings, Users, BarChart3, Lock, Eye, Home, HardDrive, Monitor, Printer, Scanner, Keyboard, Mouse, Headphones, Speaker, Microphone, Webcam, Router, Modem, Smartphone2, Tablet, Laptop, Desktop, Watch, Tv, Radio, Camera2, Video2, Image2, File, Folder, Archive, Compress, Extract, Lock2, Unlock, Key, AlertTriangle, AlertCircle, CheckCircle2, XCircle, Info, HelpCircle, QuestionMarkCircle, ExclamationTriangle, ExclamationCircle, PlusCircle, MinusCircle, XCircle2, CheckSquare, Square, Circle, Triangle, Hexagon, Pentagon, Octagon, Diamond, Heart2, Star2, ThumbsUp, ThumbsDown, Smile, Frown, Meh, Laugh, Angry, Sad, Surprised, Confused, Wink, Kiss, Tongue } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ITServicesPage: React.FC = () => {
  const itServices = [
    // Cloud Services
    {
      icon: <Cloud className="w-12 h-12 text-blue-500" />,
      title: 'Cloud Migration & Management',
      description: 'Complete cloud migration services with AWS, Azure, and Google Cloud Platform expertise.',
      features: [
        'Multi-cloud migration',
        'Cost optimization',
        'Security implementation',
        'Performance monitoring',
        'Disaster recovery',
        '24/7 support',
        'Compliance management',
        'Scalability planning'
      ],
      pricing: 'Starting at $2,500',
      popular: true,
      link: '/cloud-migration',
      category: 'Cloud Services'
    },
    {
      icon: <Server className="w-12 h-12 text-green-500" />,
      title: 'Infrastructure Setup',
      description: 'Complete IT infrastructure design, implementation, and management for businesses of all sizes.',
      features: [
        'Network design',
        'Server configuration',
        'Storage solutions',
        'Backup systems',
        'Monitoring setup',
        'Security implementation',
        'Documentation',
        'Training provided'
      ],
      pricing: 'Starting at $5,000',
      popular: false,
      link: '/infrastructure-setup',
      category: 'Infrastructure'
    },
    {
      icon: <Database className="w-12 h-12 text-purple-500" />,
      title: 'Database Management',
      description: 'Comprehensive database services including design, optimization, migration, and maintenance.',
      features: [
        'Database design',
        'Performance optimization',
        'Data migration',
        'Backup & recovery',
        'Security hardening',
        'Monitoring & alerts',
        'Query optimization',
        'Maintenance support'
      ],
      pricing: '$1,500/month',
      popular: false,
      link: '/database-management',
      category: 'Database'
    },

    // Cybersecurity
    {
      icon: <Shield className="w-12 h-12 text-red-500" />,
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security services including threat assessment, implementation, and monitoring.',
      features: [
        'Security assessment',
        'Firewall configuration',
        'Intrusion detection',
        'Vulnerability scanning',
        'Penetration testing',
        'Security training',
        'Incident response',
        'Compliance management'
      ],
      pricing: '$1,500/month',
      popular: true,
      link: '/cybersecurity-solutions',
      category: 'Security'
    },
    {
      icon: <Lock className="w-12 h-12 text-orange-500" />,
      title: 'Identity & Access Management',
      description: 'Advanced identity management solutions with single sign-on and multi-factor authentication.',
      features: [
        'Single sign-on (SSO)',
        'Multi-factor authentication',
        'User provisioning',
        'Access governance',
        'Privileged access management',
        'Audit logging',
        'Compliance reporting',
        'Integration services'
      ],
      pricing: '$800/month',
      popular: false,
      link: '/identity-access-management',
      category: 'Security'
    },
    {
      icon: <Eye className="w-12 h-12 text-cyan-500" />,
      title: 'Security Monitoring',
      description: '24/7 security monitoring with threat detection, incident response, and compliance reporting.',
      features: [
        '24/7 monitoring',
        'Threat detection',
        'Incident response',
        'Log analysis',
        'Compliance reporting',
        'Security alerts',
        'Forensic analysis',
        'Remediation support'
      ],
      pricing: '$2,000/month',
      popular: false,
      link: '/security-monitoring',
      category: 'Security'
    },

    // Development Services
    {
      icon: <Code className="w-12 h-12 text-indigo-500" />,
      title: 'Custom Software Development',
      description: 'Tailored software solutions built with modern technologies and best practices.',
      features: [
        'Web applications',
        'Mobile apps',
        'Desktop software',
        'API development',
        'Database design',
        'UI/UX design',
        'Testing & QA',
        'Maintenance support'
      ],
      pricing: 'Starting at $5,000',
      popular: true,
      link: '/custom-software-development',
      category: 'Development'
    },
    {
      icon: <Smartphone className="w-12 h-12 text-pink-500" />,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android devices.',
      features: [
        'iOS development',
        'Android development',
        'Cross-platform apps',
        'UI/UX design',
        'App store deployment',
        'Push notifications',
        'Analytics integration',
        'Maintenance support'
      ],
      pricing: 'Starting at $8,000',
      popular: false,
      link: '/mobile-app-development',
      category: 'Development'
    },
    {
      icon: <Globe className="w-12 h-12 text-green-500" />,
      title: 'Web Development',
      description: 'Modern web applications with responsive design and optimal performance.',
      features: [
        'Frontend development',
        'Backend development',
        'Database integration',
        'API development',
        'Responsive design',
        'SEO optimization',
        'Performance optimization',
        'Security implementation'
      ],
      pricing: 'Starting at $3,000',
      popular: false,
      link: '/web-development',
      category: 'Development'
    },

    // DevOps & CI/CD
    {
      icon: <Settings className="w-12 h-12 text-gray-500" />,
      title: 'DevOps & CI/CD',
      description: 'Complete DevOps implementation with continuous integration, deployment, and monitoring.',
      features: [
        'CI/CD pipeline setup',
        'Container orchestration',
        'Infrastructure as code',
        'Monitoring & logging',
        'Automated testing',
        'Deployment automation',
        'Performance optimization',
        'Team training'
      ],
      pricing: '$2,000/month',
      popular: true,
      link: '/devops-cicd',
      category: 'DevOps'
    },
    {
      icon: <Cpu className="w-12 h-12 text-blue-500" />,
      title: 'Microservices Architecture',
      description: 'Modern microservices architecture design and implementation for scalable applications.',
      features: [
        'Architecture design',
        'Service decomposition',
        'API gateway setup',
        'Service mesh implementation',
        'Container orchestration',
        'Monitoring setup',
        'Security implementation',
        'Documentation'
      ],
      pricing: '$3,500/month',
      popular: false,
      link: '/microservices-architecture',
      category: 'DevOps'
    },

    // Data & Analytics
    {
      icon: <BarChart3 className="w-12 h-12 text-purple-500" />,
      title: 'Data Analytics & BI',
      description: 'Comprehensive data analytics solutions with business intelligence dashboards and reporting.',
      features: [
        'Data warehouse design',
        'ETL pipeline development',
        'Business intelligence dashboards',
        'Data visualization',
        'Predictive analytics',
        'Machine learning integration',
        'Real-time reporting',
        'Data governance'
      ],
      pricing: '$2,000/month',
      popular: true,
      link: '/data-analytics-bi',
      category: 'Analytics'
    },
    {
      icon: <Database className="w-12 h-12 text-orange-500" />,
      title: 'Big Data Solutions',
      description: 'Scalable big data processing and analytics solutions for large datasets.',
      features: [
        'Hadoop implementation',
        'Spark processing',
        'Data lake architecture',
        'Stream processing',
        'Machine learning pipelines',
        'Real-time analytics',
        'Data governance',
        'Performance optimization'
      ],
      pricing: '$4,000/month',
      popular: false,
      link: '/big-data-solutions',
      category: 'Analytics'
    },

    // Network & Infrastructure
    {
      icon: <Wifi className="w-12 h-12 text-cyan-500" />,
      title: 'Network Design & Management',
      description: 'Complete network infrastructure design, implementation, and ongoing management.',
      features: [
        'Network architecture design',
        'Wireless network setup',
        'Network security',
        'Performance optimization',
        'Monitoring & management',
        'Disaster recovery',
        'Vendor management',
        '24/7 support'
      ],
      pricing: '$1,200/month',
      popular: false,
      link: '/network-design-management',
      category: 'Network'
    },
    {
      icon: <Router className="w-12 h-12 text-green-500" />,
      title: 'SD-WAN Implementation',
      description: 'Software-defined wide area network solutions for improved connectivity and performance.',
      features: [
        'SD-WAN design',
        'Implementation & configuration',
        'Performance optimization',
        'Security integration',
        'Monitoring setup',
        'Vendor management',
        'Training & support',
        'Ongoing maintenance'
      ],
      pricing: '$1,800/month',
      popular: true,
      link: '/sd-wan-implementation',
      category: 'Network'
    },

    // IT Support & Management
    {
      icon: <Users className="w-12 h-12 text-blue-500" />,
      title: 'Managed IT Services',
      description: 'Comprehensive IT management including help desk, monitoring, and proactive maintenance.',
      features: [
        '24/7 help desk',
        'Proactive monitoring',
        'Patch management',
        'Security updates',
        'Performance optimization',
        'Asset management',
        'Vendor management',
        'Monthly reporting'
      ],
      pricing: '$1,500/month',
      popular: true,
      link: '/managed-it-services',
      category: 'Support'
    },
    {
      icon: <Monitor className="w-12 h-12 text-purple-500" />,
      title: 'IT Asset Management',
      description: 'Complete IT asset lifecycle management from procurement to disposal.',
      features: [
        'Asset inventory',
        'Lifecycle tracking',
        'License management',
        'Procurement support',
        'Disposal services',
        'Cost optimization',
        'Compliance tracking',
        'Reporting & analytics'
      ],
      pricing: '$800/month',
      popular: false,
      link: '/it-asset-management',
      category: 'Support'
    },

    // Compliance & Governance
    {
      icon: <Shield className="w-12 h-12 text-red-500" />,
      title: 'Compliance Management',
      description: 'Comprehensive compliance solutions for GDPR, HIPAA, SOX, and other regulatory requirements.',
      features: [
        'Compliance assessment',
        'Policy development',
        'Risk assessment',
        'Audit support',
        'Training programs',
        'Documentation',
        'Monitoring & reporting',
        'Remediation support'
      ],
      pricing: '$2,500/month',
      popular: false,
      link: '/compliance-management',
      category: 'Compliance'
    },
    {
      icon: <File className="w-12 h-12 text-orange-500" />,
      title: 'IT Governance',
      description: 'Strategic IT governance framework with policies, procedures, and best practices.',
      features: [
        'Governance framework',
        'Policy development',
        'Process optimization',
        'Risk management',
        'Performance metrics',
        'Stakeholder management',
        'Training programs',
        'Continuous improvement'
      ],
      pricing: '$1,800/month',
      popular: true,
      link: '/it-governance',
      category: 'Compliance'
    },

    // Specialized Services
    {
      icon: <HardDrive className="w-12 h-12 text-indigo-500" />,
      title: 'Data Backup & Recovery',
      description: 'Comprehensive backup and disaster recovery solutions for business continuity.',
      features: [
        'Automated backups',
        'Disaster recovery planning',
        'Data replication',
        'Recovery testing',
        'Cloud backup',
        'Offsite storage',
        'Recovery time optimization',
        '24/7 monitoring'
      ],
      pricing: '$1,200/month',
      popular: false,
      link: '/data-backup-recovery',
      category: 'Specialized'
    },
    {
      icon: <Globe className="w-12 h-12 text-cyan-500" />,
      title: 'Digital Transformation',
      description: 'Complete digital transformation services to modernize your business operations.',
      features: [
        'Digital strategy',
        'Process automation',
        'Cloud migration',
        'Data modernization',
        'User training',
        'Change management',
        'Performance monitoring',
        'Continuous optimization'
      ],
      pricing: '$5,000/month',
      popular: true,
      link: '/digital-transformation',
      category: 'Specialized'
    }
  ];

  const benefits = [
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Expert Team',
      description: 'Certified professionals with years of experience in enterprise IT solutions.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-blue-500" />,
      title: '24/7 Support',
      description: 'Round-the-clock technical support and monitoring for your IT infrastructure.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-purple-500" />,
      title: 'Scalable Solutions',
      description: 'IT services that grow with your business from startup to enterprise scale.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-orange-500" />,
      title: 'Proven Results',
      description: 'Track record of successful implementations and satisfied clients across industries.'
    }
  ];

  const categories = ['All', 'Cloud Services', 'Security', 'Development', 'DevOps', 'Analytics', 'Network', 'Support', 'Compliance', 'Specialized'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredServices = selectedCategory === 'All' 
    ? itServices 
    : itServices.filter(service => service.category === selectedCategory);

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '50+', label: 'IT Services' },
    { number: '99.9%', label: 'Uptime' },
    { number: '24/7', label: 'Support' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services and solutions including cloud migration, cybersecurity, development, and managed services." />
        <meta name="keywords" content="IT services, cloud migration, cybersecurity, software development, managed services, infrastructure" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              IT Services & Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Complete IT infrastructure services including cloud migration, cybersecurity, DevOps, and mobile development. 
              Transform your business with enterprise-grade technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                to="/ai-services" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Explore AI Services
              </Link>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center px-2">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-xs sm:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* IT Services Grid */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Our IT Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group relative ${service.popular ? 'ring-2 ring-purple-500' : ''}`}>
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="flex items-center justify-between mb-4">
                    <div className="group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                    <span className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-xs font-semibold">
                      {service.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-bold text-white">{service.pricing}</span>
                    <Link 
                      to={service.link}
                      className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Why Choose Our IT Services?</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
                Professional IT solutions designed to keep your business running smoothly
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="mb-4 flex justify-center">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Transform Your IT Infrastructure?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let our expert team help you build a robust, secure, and scalable IT environment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get Free Consultation
                </Link>
                <Link 
                  to="/micro-saas-services" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Explore Micro SAAS
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ITServicesPage;
