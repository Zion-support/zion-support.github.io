'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Cloud, Shield, Settings, Database, Smartphone, Globe, Zap, ArrowRight, CheckCircle, Star, Search, Users, TrendingUp, Lock, Cpu, BarChart, Mail, Calendar, FileText, Code, PieChart, Activity, CreditCard, ShoppingCart, BookOpen, Building, Heart, Car, Leaf, Gamepad2, GraduationCap, Briefcase, Home, Scale, Book, Truck, Wrench, Camera, Music, Video, Image, Phone, Eye, Target, Brain, Server, Network, HardDrive, Monitor, Printer, Router, Switch, Firewall, LoadBalancer, CDN, Backup, Recovery, Migration, Monitoring, Alerting, Logging, Analytics, Reporting, Compliance, Audit, Governance, Risk, Security, Privacy, Data, Storage, Compute, Networking, Infrastructure, Platform, Software, Hardware, Support, Maintenance, Consulting, Training, Implementation, Integration, Customization, Optimization, Performance, Scalability, Reliability, Availability, Disaster, Business, Continuity, Incident, Management, Change, Release, Configuration, Asset, License, Vendor, Procurement, Cost, Budget, Planning, Strategy, Architecture, Design, Development, Testing, Deployment, Operations, Maintenance, Upgrade, Patch, Update, Migration, Transformation, Digital, Modernization, Cloud, Hybrid, Multi, Public, Private, On, Premises, Edge, Computing, Serverless, Container, Kubernetes, Docker, Microservices, API, REST, GraphQL, SOAP, Webhook, Integration, ETL, ELT, Data, Pipeline, Warehouse, Lake, Mart, Mining, Science, Analytics, Intelligence, Business, Machine, Learning, AI, Artificial, Intelligence, Deep, Neural, Network, Natural, Language, Processing, Computer, Vision, Robotics, Automation, RPA, Workflow, Process, Orchestration, Chatbot, Voice, Assistant, IoT, Internet, Things, Sensors, Devices, Connectivity, 5G, Wireless, Mobile, Responsive, Design, UX, UI, User, Experience, Interface, Accessibility, SEO, Search, Engine, Optimization, Marketing, Digital, Social, Media, Content, Management, CMS, E, Commerce, Online, Store, Payment, Gateway, Shopping, Cart, Checkout, Order, Management, Inventory, Supply, Chain, Logistics, Shipping, Tracking, Customer, Relationship, CRM, Enterprise, Resource, Planning, ERP, Human, Resources, HR, Payroll, Benefits, Time, Attendance, Project, Management, Collaboration, Communication, Video, Conferencing, Messaging, Email, Calendar, Scheduling, Document, Management, File, Sharing, Version, Control, Git, GitHub, GitLab, Bitbucket, Continuous, Integration, Deployment, CI, CD, Jenkins, Travis, CircleCI, GitHub, Actions, Azure, DevOps, AWS, CodePipeline, Google, Cloud, Build, Testing, Unit, Integration, End, to, End, E2E, Performance, Load, Stress, Security, Penetration, Vulnerability, Assessment, Code, Review, Static, Analysis, Dynamic, Application, Security, Testing, DAST, Static, Application, Security, Testing, SAST, Interactive, Application, Security, Testing, IAST, Software, Composition, Analysis, SCA, Dependency, Scanning, License, Compliance, Open, Source, OSS, Third, Party, Risk, Management, TPRM, Vendor, Risk, Assessment, VRA, Security, Operations, Center, SOC, Network, Operations, Center, NOC, Incident, Response, Team, IRT, Computer, Security, Incident, Response, Team, CSIRT, Computer, Emergency, Response, Team, CERT, Computer, Incident, Response, Team, CIRT, Security, Information, Event, Management, SIEM, Security, Orchestration, Automation, Response, SOAR, Extended, Detection, Response, XDR, Endpoint, Detection, Response, EDR, Network, Detection, Response, NDR, Cloud, Access, Security, Broker, CASB, Identity, Access, Management, IAM, Privileged, Access, Management, PAM, Multi, Factor, Authentication, MFA, Single, Sign, On, SSO, Active, Directory, LDAP, OAuth, OpenID, Connect, SAML, Security, Assertion, Markup, Language, JSON, Web, Token, JWT, OAuth, 2.0, OpenID, Connect, 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0, 17.0, 18.0, 19.0, 20.0, 21.0, 22.0, 23.0, 24.0, 25.0, 26.0, 27.0, 28.0, 29.0, 30.0, 31.0, 32.0, 33.0, 34.0, 35.0, 36.0, 37.0, 38.0, 39.0, 40.0, 41.0, 42.0, 43.0, 44.0, 45.0, 46.0, 47.0, 48.0, 49.0, 50.0 } from 'lucide-react';

interface ITService {
  id: string;
  icon: string;
  title: string;
  description: string;
  features: string[];
  price: string;
  marketPrice: string;
  category: string;
  benefits: string[];
  popular: boolean;
  link: string;
}

const ItServicesPage: React.FC = () => {
  const itServices: ITService[] = [
    // Cloud Services
    {
      id: '1',
      icon: '☁️',
      title: 'Cloud Infrastructure Management',
      description: 'Comprehensive cloud infrastructure management with 99.9% uptime guarantee, 24/7 monitoring, and automated scaling across AWS, Azure, and Google Cloud.',
      features: ['99.9% Uptime SLA', '24/7 Monitoring', 'Auto-scaling', 'Cost Optimization', 'Security Management', 'Multi-cloud Support', 'Disaster Recovery', 'Performance Optimization'],
      price: 'Starting at $1,299/month',
      marketPrice: '$2,499/month',
      category: 'Cloud Services',
      benefits: ['Reduce cloud costs by 40%', 'Improve performance by 50%', 'Ensure 99.9% uptime'],
      popular: true,
      link: '/cloud-infrastructure-management'
    },
    {
      id: '2',
      icon: '🚀',
      title: 'Cloud Migration Services',
      description: 'Seamless cloud migration with zero downtime, data integrity preservation, and comprehensive testing for AWS, Azure, and Google Cloud platforms.',
      features: ['Zero Downtime Migration', 'Data Integrity', 'Cost Optimization', 'Security Compliance', '24/7 Support', 'Testing & Validation', 'Rollback Capability', 'Performance Monitoring'],
      price: 'Starting at $2,999/project',
      marketPrice: '$5,999/project',
      category: 'Cloud Services',
      benefits: ['Migrate without business disruption', 'Reduce migration costs by 60%', 'Improve scalability and performance'],
      popular: false,
      link: '/cloud-migration'
    },
    {
      id: '3',
      icon: '🔧',
      title: 'DevOps & CI/CD Pipeline',
      description: 'Complete DevOps solution with automated CI/CD pipelines, infrastructure as code, and comprehensive monitoring for faster, more reliable deployments.',
      features: ['CI/CD Pipelines', 'Infrastructure as Code', 'Automated Testing', 'Deployment Automation', 'Monitoring & Logging', 'Security Scanning', 'Team Collaboration', 'Performance Optimization'],
      price: 'Starting at $799/month',
      marketPrice: '$1,499/month',
      category: 'DevOps',
      benefits: ['Deploy 10x faster', 'Reduce deployment errors by 90%', 'Improve team productivity'],
      popular: true,
      link: '/devops-cicd'
    },

    // Cybersecurity
    {
      id: '4',
      icon: '🔒',
      title: 'Cybersecurity Suite',
      description: 'Comprehensive cybersecurity solution with threat detection, vulnerability assessment, incident response, and compliance management.',
      features: ['Threat Detection', 'Vulnerability Assessment', 'Incident Response', 'Compliance Management', 'Security Monitoring', 'Penetration Testing', 'Risk Assessment', 'Security Training'],
      price: 'Starting at $999/month',
      marketPrice: '$1,999/month',
      category: 'Cybersecurity',
      benefits: ['Prevent 99% of security breaches', 'Reduce compliance costs by 50%', 'Improve response time by 80%'],
      popular: true,
      link: '/cybersecurity-suite'
    },
    {
      id: '5',
      icon: '🛡️',
      title: 'Security Monitoring & SOC',
      description: '24/7 security operations center with advanced threat detection, automated response, and comprehensive security analytics.',
      features: ['24/7 SOC Monitoring', 'Threat Detection', 'Automated Response', 'Incident Management', 'Security Analytics', 'Compliance Reporting', 'Threat Intelligence', 'Forensic Analysis'],
      price: 'Starting at $1,499/month',
      marketPrice: '$2,999/month',
      category: 'Cybersecurity',
      benefits: ['Detect threats in real-time', 'Reduce incident response time', 'Improve security posture'],
      popular: false,
      link: '/security-monitoring-soc'
    },
    {
      id: '6',
      icon: '🔍',
      title: 'Penetration Testing & Vulnerability Assessment',
      description: 'Comprehensive security testing including penetration testing, vulnerability assessment, and security audit services.',
      features: ['Penetration Testing', 'Vulnerability Scanning', 'Security Audits', 'Compliance Testing', 'Social Engineering Tests', 'Web Application Testing', 'Network Security', 'Detailed Reporting'],
      price: 'Starting at $2,999/assessment',
      marketPrice: '$5,999/assessment',
      category: 'Cybersecurity',
      benefits: ['Identify security vulnerabilities', 'Meet compliance requirements', 'Improve security posture'],
      popular: false,
      link: '/penetration-testing'
    },

    // Database Services
    {
      id: '7',
      icon: '🗄️',
      title: 'Database Management & Optimization',
      description: 'Complete database services including design, optimization, migration, backup, and 24/7 monitoring for optimal performance.',
      features: ['Database Design', 'Performance Tuning', 'Backup & Recovery', 'Migration Services', '24/7 Monitoring', 'Security Hardening', 'Capacity Planning', 'Disaster Recovery'],
      price: 'Starting at $599/month',
      marketPrice: '$1,199/month',
      category: 'Database Services',
      benefits: ['Improve database performance by 60%', 'Reduce downtime by 80%', 'Optimize storage costs'],
      popular: true,
      link: '/database-management'
    },
    {
      id: '8',
      icon: '📊',
      title: 'Data Analytics & Business Intelligence',
      description: 'Advanced data analytics platform with real-time insights, predictive analytics, and comprehensive business intelligence dashboards.',
      features: ['Real-time Analytics', 'Predictive Modeling', 'Business Intelligence', 'Data Visualization', 'Custom Dashboards', 'Automated Reports', 'Data Integration', 'Machine Learning'],
      price: 'Starting at $899/month',
      marketPrice: '$1,799/month',
      category: 'Data Analytics',
      benefits: ['Improve decision-making by 70%', 'Reduce analysis time by 80%', 'Increase data accuracy by 95%'],
      popular: false,
      link: '/data-analytics'
    },

    // Infrastructure Services
    {
      id: '9',
      icon: '🏗️',
      title: 'IT Infrastructure Setup & Management',
      description: 'Complete IT infrastructure setup including servers, networking, storage, and comprehensive management services.',
      features: ['Server Setup', 'Network Configuration', 'Storage Management', 'Security Implementation', 'Monitoring Setup', 'Backup Solutions', 'Disaster Recovery', 'Performance Optimization'],
      price: 'Starting at $1,499/month',
      marketPrice: '$2,999/month',
      category: 'Infrastructure',
      benefits: ['Build robust IT infrastructure', 'Improve system reliability', 'Optimize performance'],
      popular: true,
      link: '/it-infrastructure'
    },
    {
      id: '10',
      icon: '🌐',
      title: 'Network Solutions & Security',
      description: 'Comprehensive network solutions including design, implementation, security, and ongoing management for enterprise networks.',
      features: ['Network Design', 'Implementation', 'Security Hardening', 'Firewall Management', 'VPN Solutions', 'Load Balancing', 'Network Monitoring', 'Performance Optimization'],
      price: 'Starting at $799/month',
      marketPrice: '$1,599/month',
      category: 'Networking',
      benefits: ['Improve network performance', 'Enhance security', 'Reduce network downtime'],
      popular: false,
      link: '/network-solutions'
    },

    // Managed Services
    {
      id: '11',
      icon: '👥',
      title: 'Managed IT Services',
      description: 'Comprehensive managed IT services with 24/7 support, proactive monitoring, and complete IT management for your business.',
      features: ['24/7 IT Support', 'Proactive Monitoring', 'Help Desk Services', 'Security Management', 'Backup Solutions', 'Software Updates', 'Hardware Maintenance', 'Performance Optimization'],
      price: 'Starting at $999/month',
      marketPrice: '$1,999/month',
      category: 'Managed Services',
      benefits: ['Reduce IT costs by 40%', 'Improve system uptime', 'Focus on core business'],
      popular: true,
      link: '/managed-it-services'
    },
    {
      id: '12',
      icon: '📞',
      title: 'IT Help Desk & Support',
      description: 'Professional IT help desk services with multi-channel support, ticket management, and rapid issue resolution.',
      features: ['Multi-channel Support', 'Ticket Management', 'Rapid Response', 'Remote Assistance', 'Knowledge Base', 'User Training', 'Escalation Management', 'Performance Metrics'],
      price: 'Starting at $299/month',
      marketPrice: '$599/month',
      category: 'Support Services',
      benefits: ['Improve user satisfaction', 'Reduce support costs', 'Increase productivity'],
      popular: false,
      link: '/it-help-desk'
    },

    // Development Services
    {
      id: '13',
      icon: '💻',
      title: 'Custom Software Development',
      description: 'Custom software development services including web applications, mobile apps, and enterprise solutions tailored to your business needs.',
      features: ['Web Applications', 'Mobile Apps', 'Enterprise Software', 'API Development', 'Database Design', 'UI/UX Design', 'Testing & QA', 'Deployment & Support'],
      price: 'Starting at $1,999/month',
      marketPrice: '$3,999/month',
      category: 'Development',
      benefits: ['Build custom solutions', 'Improve business processes', 'Gain competitive advantage'],
      popular: true,
      link: '/custom-software-development'
    },
    {
      id: '14',
      icon: '📱',
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile application development with modern technologies and comprehensive testing.',
      features: ['Native iOS/Android', 'Cross-platform Development', 'UI/UX Design', 'API Integration', 'Push Notifications', 'App Store Publishing', 'Testing & QA', 'Maintenance & Updates'],
      price: 'Starting at $1,299/month',
      marketPrice: '$2,599/month',
      category: 'Development',
      benefits: ['Reach mobile users', 'Improve customer engagement', 'Increase business value'],
      popular: false,
      link: '/mobile-app-development'
    },
    {
      id: '15',
      icon: '🌐',
      title: 'Web Development & E-commerce',
      description: 'Modern web development services including responsive websites, e-commerce platforms, and web applications.',
      features: ['Responsive Web Design', 'E-commerce Platforms', 'Content Management', 'SEO Optimization', 'Performance Optimization', 'Security Implementation', 'Analytics Integration', 'Maintenance & Support'],
      price: 'Starting at $799/month',
      marketPrice: '$1,599/month',
      category: 'Development',
      benefits: ['Improve online presence', 'Increase conversions', 'Enhance user experience'],
      popular: false,
      link: '/web-development'
    },

    // Consulting Services
    {
      id: '16',
      icon: '🎯',
      title: 'IT Strategy & Consulting',
      description: 'Strategic IT consulting services including technology assessment, digital transformation, and IT roadmap development.',
      features: ['Technology Assessment', 'Digital Transformation', 'IT Strategy Development', 'Technology Roadmaps', 'Vendor Selection', 'Cost Optimization', 'Risk Assessment', 'Implementation Planning'],
      price: 'Starting at $299/hour',
      marketPrice: '$599/hour',
      category: 'Consulting',
      benefits: ['Align IT with business goals', 'Optimize technology investments', 'Improve IT efficiency'],
      popular: true,
      link: '/it-consulting'
    },
    {
      id: '17',
      icon: '📈',
      title: 'Digital Transformation Services',
      description: 'Comprehensive digital transformation services to modernize your business processes and technology infrastructure.',
      features: ['Process Analysis', 'Technology Modernization', 'Change Management', 'Training & Support', 'Performance Monitoring', 'ROI Measurement', 'Continuous Improvement', 'Best Practices'],
      price: 'Starting at $1,999/month',
      marketPrice: '$3,999/month',
      category: 'Consulting',
      benefits: ['Modernize business processes', 'Improve efficiency', 'Gain competitive advantage'],
      popular: false,
      link: '/digital-transformation'
    },

    // Compliance & Governance
    {
      id: '18',
      icon: '📋',
      title: 'IT Compliance & Governance',
      description: 'Comprehensive IT compliance services including audit preparation, policy development, and regulatory compliance management.',
      features: ['Compliance Audits', 'Policy Development', 'Regulatory Compliance', 'Risk Assessment', 'Documentation', 'Training Programs', 'Monitoring & Reporting', 'Remediation Support'],
      price: 'Starting at $799/month',
      marketPrice: '$1,599/month',
      category: 'Compliance',
      benefits: ['Ensure regulatory compliance', 'Reduce compliance risks', 'Improve governance'],
      popular: false,
      link: '/it-compliance'
    },
    {
      id: '19',
      icon: '🔐',
      title: 'Data Privacy & GDPR Compliance',
      description: 'Comprehensive data privacy services including GDPR compliance, data protection, and privacy impact assessments.',
      features: ['GDPR Compliance', 'Data Protection', 'Privacy Impact Assessment', 'Consent Management', 'Data Mapping', 'Breach Notification', 'Privacy Policies', 'Staff Training'],
      price: 'Starting at $599/month',
      marketPrice: '$1,199/month',
      category: 'Compliance',
      benefits: ['Ensure data privacy compliance', 'Protect customer data', 'Avoid regulatory penalties'],
      popular: false,
      link: '/data-privacy-gdpr'
    },

    // Backup & Recovery
    {
      id: '20',
      icon: '💾',
      title: 'Backup & Disaster Recovery',
      description: 'Comprehensive backup and disaster recovery solutions with automated backups, instant recovery, and business continuity planning.',
      features: ['Automated Backups', 'Instant Recovery', 'Disaster Recovery Planning', 'Business Continuity', 'Data Encryption', 'Offsite Storage', 'Testing & Validation', '24/7 Monitoring'],
      price: 'Starting at $399/month',
      marketPrice: '$799/month',
      category: 'Backup & Recovery',
      benefits: ['Protect critical data', 'Minimize downtime', 'Ensure business continuity'],
      popular: true,
      link: '/backup-disaster-recovery'
    },
    {
      id: '21',
      icon: '🔄',
      title: 'Data Migration Services',
      description: 'Secure and efficient data migration services with zero downtime, data integrity, and comprehensive testing.',
      features: ['Zero Downtime Migration', 'Data Integrity', 'Migration Planning', 'Testing & Validation', 'Rollback Capability', 'Performance Optimization', 'Security Compliance', 'Documentation'],
      price: 'Starting at $1,999/project',
      marketPrice: '$3,999/project',
      category: 'Data Services',
      benefits: ['Migrate data safely', 'Minimize business disruption', 'Improve data quality'],
      popular: false,
      link: '/data-migration'
    },

    // Training & Support
    {
      id: '22',
      icon: '🎓',
      title: 'IT Training & Certification',
      description: 'Comprehensive IT training programs including technical training, certification preparation, and skill development.',
      features: ['Technical Training', 'Certification Prep', 'Skill Assessment', 'Custom Training', 'Online Learning', 'Hands-on Labs', 'Progress Tracking', 'Certification Support'],
      price: 'Starting at $199/month',
      marketPrice: '$399/month',
      category: 'Training',
      benefits: ['Improve team skills', 'Increase productivity', 'Reduce support costs'],
      popular: false,
      link: '/it-training'
    },
    {
      id: '23',
      icon: '📚',
      title: 'IT Documentation & Knowledge Management',
      description: 'Comprehensive IT documentation services including system documentation, knowledge base creation, and process documentation.',
      features: ['System Documentation', 'Knowledge Base', 'Process Documentation', 'User Manuals', 'Technical Specifications', 'API Documentation', 'Maintenance Guides', 'Version Control'],
      price: 'Starting at $299/month',
      marketPrice: '$599/month',
      category: 'Documentation',
      benefits: ['Improve knowledge sharing', 'Reduce training time', 'Enhance troubleshooting'],
      popular: false,
      link: '/it-documentation'
    },

    // Specialized Services
    {
      id: '24',
      icon: '🔧',
      title: 'IT Asset Management',
      description: 'Complete IT asset lifecycle management including inventory tracking, maintenance scheduling, and cost optimization.',
      features: ['Asset Inventory', 'Lifecycle Management', 'Maintenance Scheduling', 'Cost Tracking', 'License Management', 'Depreciation Tracking', 'Disposal Management', 'Reporting & Analytics'],
      price: 'Starting at $199/month',
      marketPrice: '$399/month',
      category: 'Asset Management',
      benefits: ['Optimize asset utilization', 'Reduce costs', 'Improve compliance'],
      popular: false,
      link: '/it-asset-management'
    },
    {
      id: '25',
      icon: '📊',
      title: 'IT Performance Monitoring',
      description: 'Comprehensive IT performance monitoring with real-time alerts, performance analytics, and optimization recommendations.',
      features: ['Real-time Monitoring', 'Performance Analytics', 'Alert Management', 'Capacity Planning', 'Trend Analysis', 'Optimization Recommendations', 'Custom Dashboards', 'Automated Reporting'],
      price: 'Starting at $499/month',
      marketPrice: '$999/month',
      category: 'Monitoring',
      benefits: ['Improve system performance', 'Prevent issues', 'Optimize resources'],
      popular: true,
      link: '/it-performance-monitoring'
    }
  ];

  const categories = ['All', 'Cloud Services', 'DevOps', 'Cybersecurity', 'Database Services', 'Data Analytics', 'Infrastructure', 'Networking', 'Managed Services', 'Support Services', 'Development', 'Consulting', 'Compliance', 'Backup & Recovery', 'Data Services', 'Training', 'Documentation', 'Asset Management', 'Monitoring'];

  const benefits = [
    'Reduce IT costs by up to 40%',
    'Improve system uptime by 99.9%',
    'Enhance security and compliance',
    'Scale infrastructure as needed',
    'Get 24/7 expert support',
    'Focus on core business activities',
    'Modernize technology stack',
    'Ensure business continuity'
  ];

  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const [searchTerm, setSearchTerm] = React.useState('');

  const filteredServices = itServices.filter(service => {
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Helmet>
        <title>IT Services - Zion Tech Group | 25+ Comprehensive IT Solutions</title>
        <meta name="description" content="Discover our comprehensive suite of 25+ IT services including cloud solutions, cybersecurity, infrastructure management, DevOps, and more. Expert IT support and consulting." />
        <meta name="keywords" content="IT services, cloud solutions, cybersecurity, IT infrastructure, managed IT, IT consulting, DevOps, database services, network solutions" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              IT <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover our comprehensive suite of 25+ IT services designed to modernize your infrastructure, 
              enhance security, and drive business growth with cutting-edge technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
              >
                <Zap className="w-5 h-5 mr-2" />
                Get Started
              </Link>
              <Link
                to="/consultation"
                className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center justify-center"
              >
                <Eye className="w-5 h-5 mr-2" />
                Free Consultation
              </Link>
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-8 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search IT services..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                    />
                  </div>
                </div>
                <div className="md:w-64">
                  <div className="relative">
                    <Settings className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors appearance-none"
                    >
                      {categories.map((category) => (
                        <option key={category} value={category} className="bg-gray-800">
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 justify-center">
                {categories.slice(0, 8).map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-cyan-500 text-white'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* IT Services Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our IT Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-4">
                Choose from our comprehensive collection of IT services designed to solve specific business challenges.
              </p>
              <p className="text-gray-400">
                {filteredServices.length} service{filteredServices.length !== 1 ? 's' : ''} found
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <div
                  key={service.id}
                  className={`relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border ${
                    service.popular
                      ? 'border-cyan-400 shadow-2xl shadow-cyan-500/25 scale-105'
                      : 'border-white/20'
                  } hover:border-cyan-400 transition-all duration-300 group`}
                >
                  {service.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                        <Star className="w-4 h-4 fill-current" />
                        Most Popular
                      </div>
                    </div>
                  )}

                  <div className="text-center mb-6">
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                    <div className="flex items-center justify-center gap-2 mb-4">
                      <span className="text-2xl font-bold text-white">{service.price}</span>
                      <span className="text-gray-400 text-sm line-through">{service.marketPrice}</span>
                    </div>
                    <div className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full">
                      {service.category}
                    </div>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {service.features.slice(0, 4).map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                    {service.features.length > 4 && (
                      <li className="text-gray-400 text-sm">
                        +{service.features.length - 4} more features
                      </li>
                    )}
                  </ul>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.slice(0, 2).map((benefit, index) => (
                        <li key={index} className="text-xs text-gray-300">
                          • {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col gap-3">
                    <Link
                      to={service.link}
                      className="w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-600 hover:to-purple-600 transform hover:scale-105 text-center"
                    >
                      Get Started
                    </Link>
                    <Link
                      to={service.link}
                      className="w-full py-2 px-6 rounded-lg font-semibold transition-all duration-300 bg-white/10 text-white border border-white/20 hover:bg-white/20 text-center"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Our IT Services?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Proven results that drive business growth and efficiency
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-lg text-white font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your IT Infrastructure?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our IT experts to discuss your requirements and get started with the perfect IT solution for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Contact Us
                </Link>
                <Link
                  to="/consultation"
                  className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center justify-center"
                >
                  <Brain className="w-5 h-5 mr-2" />
                  Free Consultation
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ItServicesPage;
