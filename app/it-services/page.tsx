'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Cloud, 
  Shield, 
  Settings, 
  Database, 
  Smartphone, 
  Globe, 
  Zap, 
  ArrowRight,
  CheckCircle,
  Star,
  Clock,
  Users,
  TrendingUp,
  Wifi,
  Server,
  Code,
  ShoppingCart,
  Monitor,
  Headphones,
  BarChart,
  Cpu,
  Package,
  Link as LinkIcon
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ItServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const services = [
    // Cloud & Infrastructure
    {
      id: 'cloud-infrastructure',
      name: 'Cloud Infrastructure & Migration',
      description: 'Complete cloud solutions including AWS, Azure, and GCP with seamless migration services and multi-cloud strategies.',
      price: '$2,500/month',
      marketPrice: '$4000-15000/month',
      features: [
        'Multi-cloud Architecture Design',
        'AWS/Azure/GCP Migration',
        'Cost Optimization & Monitoring',
        'Disaster Recovery Solutions',
        'Auto-scaling & Load Balancing',
        'Security Compliance (SOC2, ISO27001)',
        'Cloud Cost Management',
        'Performance Optimization'
      ],
      benefits: [
        '99.9% uptime guarantee',
        'Cost reduction up to 40%',
        'Scalable infrastructure',
        'Expert migration support',
        'Enhanced security posture'
      ],
      category: 'Cloud',
      popular: true,
      icon: Cloud
    },
    {
      id: 'hybrid-cloud-solutions',
      name: 'Hybrid Cloud Solutions',
      description: 'Seamless integration between on-premises and cloud environments with unified management and security.',
      price: '$3,500/month',
      marketPrice: '$6000-20000/month',
      features: [
        'On-premises & Cloud Integration',
        'Unified Management Platform',
        'Data Synchronization',
        'Hybrid Security Framework',
        'Workload Optimization',
        'Compliance Management',
        'Disaster Recovery Planning',
        'Cost Optimization'
      ],
      benefits: [
        'Flexible deployment options',
        'Reduced operational complexity',
        'Better cost control',
        'Enhanced security',
        'Improved performance'
      ],
      category: 'Cloud',
      popular: false,
      icon: Server
    },

    // Security & Compliance
    {
      id: 'cybersecurity',
      name: 'Cybersecurity Solutions',
      description: 'Comprehensive security services including threat detection, compliance, incident response, and security training.',
      price: '$1,800/month',
      marketPrice: '$3000-12000/month',
      features: [
        '24/7 Threat Detection & Response',
        'Vulnerability Assessments',
        'Penetration Testing',
        'Security Monitoring & Analytics',
        'Compliance Management (GDPR, HIPAA)',
        'Employee Security Training',
        'Incident Response Planning',
        'Security Audits & Reporting'
      ],
      benefits: [
        '24/7 security monitoring',
        'Reduced security incidents by 90%',
        'Compliance assurance',
        'Expert security team',
        'Proactive threat prevention'
      ],
      category: 'Security',
      popular: true,
      icon: Shield
    },
    {
      id: 'zero-trust-security',
      name: 'Zero Trust Security Architecture',
      description: 'Implement zero trust security model with continuous verification, micro-segmentation, and identity-based access control.',
      price: '$2,800/month',
      marketPrice: '$5000-15000/month',
      features: [
        'Identity & Access Management',
        'Micro-segmentation',
        'Continuous Verification',
        'Privileged Access Management',
        'Device Trust Assessment',
        'Network Segmentation',
        'Data Loss Prevention',
        'Security Analytics'
      ],
      benefits: [
        'Enhanced security posture',
        'Reduced attack surface',
        'Better compliance',
        'Improved visibility',
        'Automated threat response'
      ],
      category: 'Security',
      popular: true,
      icon: Lock
    },

    // DevOps & Automation
    {
      id: 'devops',
      name: 'DevOps & CI/CD',
      description: 'Modern development operations with automated deployment, monitoring, infrastructure as code, and continuous integration.',
      price: '$2,200/month',
      marketPrice: '$3500-10000/month',
      features: [
        'CI/CD Pipeline Setup & Optimization',
        'Infrastructure as Code (Terraform)',
        'Container Orchestration (Kubernetes)',
        'Monitoring & Logging (ELK Stack)',
        'Automated Testing & QA',
        'Deployment Automation',
        'GitOps Workflows',
        'Performance Monitoring'
      ],
      benefits: [
        'Faster deployments (10x speed)',
        'Reduced downtime by 80%',
        'Improved code quality',
        'Automated workflows',
        'Better collaboration'
      ],
      category: 'DevOps',
      popular: true,
      icon: Settings
    },
    {
      id: 'site-reliability-engineering',
      name: 'Site Reliability Engineering (SRE)',
      description: 'SRE services to improve system reliability, performance, and scalability through automation and monitoring.',
      price: '$3,000/month',
      marketPrice: '$5000-15000/month',
      features: [
        'Service Level Objectives (SLOs)',
        'Error Budget Management',
        'Incident Response Automation',
        'Capacity Planning',
        'Performance Optimization',
        'Chaos Engineering',
        'Monitoring & Alerting',
        'Post-mortem Analysis'
      ],
      benefits: [
        '99.99% uptime guarantee',
        'Faster incident resolution',
        'Proactive issue detection',
        'Improved system performance',
        'Reduced operational costs'
      ],
      category: 'DevOps',
      popular: false,
      icon: Zap
    },

    // Database & Data Management
    {
      id: 'database-management',
      name: 'Database Management & Optimization',
      description: 'Expert database design, optimization, and management for all major database systems with performance tuning.',
      price: '$1,200/month',
      marketPrice: '$2000-8000/month',
      features: [
        'Database Design & Architecture',
        'Performance Tuning & Optimization',
        'Backup & Recovery Solutions',
        'Data Migration & ETL',
        'Security Hardening',
        'Monitoring & Maintenance',
        'Query Optimization',
        'High Availability Setup'
      ],
      benefits: [
        'Improved performance by 300%',
        'Enhanced data security',
        'Automated backups',
        'Expert DBA support',
        'Reduced downtime'
      ],
      category: 'Database',
      popular: true,
      icon: Database
    },
    {
      id: 'data-warehousing',
      name: 'Data Warehousing & Analytics',
      description: 'Enterprise data warehousing solutions with ETL processes, data modeling, and business intelligence integration.',
      price: '$2,500/month',
      marketPrice: '$4000-12000/month',
      features: [
        'Data Warehouse Design',
        'ETL/ELT Pipeline Development',
        'Data Modeling & Architecture',
        'Business Intelligence Integration',
        'Data Quality Management',
        'Real-time Data Processing',
        'Data Governance',
        'Analytics Platform Setup'
      ],
      benefits: [
        'Centralized data management',
        'Improved data quality',
        'Faster analytics',
        'Better business insights',
        'Scalable data architecture'
      ],
      category: 'Database',
      popular: false,
      icon: BarChart
    },

    // Development Services
    {
      id: 'custom-software-development',
      name: 'Custom Software Development',
      description: 'Tailored software solutions built with modern technologies and best practices for optimal performance and scalability.',
      price: '$150/hour',
      marketPrice: '$200-500/hour',
      features: [
        'Custom Application Development',
        'API Development & Integration',
        'Microservices Architecture',
        'Performance Optimization',
        'Security Implementation',
        'Quality Assurance & Testing',
        'Code Review & Documentation',
        'Maintenance & Support'
      ],
      benefits: [
        'Tailored solutions',
        'Modern technology stack',
        'Scalable architecture',
        'Ongoing support',
        'Competitive advantage'
      ],
      category: 'Development',
      popular: true,
      icon: Code
    },
    {
      id: 'mobile-development',
      name: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android with optimal user experience and performance.',
      price: '$8,000/project',
      marketPrice: '$15000-50000/project',
      features: [
        'iOS & Android Native Development',
        'Cross-platform Solutions (React Native)',
        'App Store Optimization',
        'Push Notifications & Analytics',
        'Offline Functionality',
        'Performance Optimization',
        'UI/UX Design',
        'App Store Publishing'
      ],
      benefits: [
        'Native performance',
        'Cross-platform compatibility',
        'App store success',
        'User engagement',
        'Scalable solutions'
      ],
      category: 'Development',
      popular: true,
      icon: Smartphone
    },
    {
      id: 'web-development',
      name: 'Web Development',
      description: 'Modern, responsive web applications built with cutting-edge technologies for optimal performance and user experience.',
      price: '$5,000/project',
      marketPrice: '$10000-30000/project',
      features: [
        'React/Next.js Development',
        'Responsive Design',
        'SEO Optimization',
        'Performance Tuning',
        'Security Implementation',
        'Content Management Systems',
        'E-commerce Integration',
        'Progressive Web Apps (PWA)'
      ],
      benefits: [
        'Modern technology stack',
        'SEO optimized',
        'Mobile responsive',
        'Fast loading times',
        'Better user experience'
      ],
      category: 'Development',
      popular: true,
      icon: Globe
    },

    // Networking & Infrastructure
    {
      id: 'network-infrastructure',
      name: 'Network Infrastructure',
      description: 'Complete network design, implementation, and management for enterprise environments with security and performance optimization.',
      price: '$1,500/month',
      marketPrice: '$2500-8000/month',
      features: [
        'Network Architecture Design',
        'Wireless Network Deployment',
        'Network Security Implementation',
        'Performance Monitoring',
        'Disaster Recovery Planning',
        '24/7 Network Support',
        'SD-WAN Solutions',
        'Network Automation'
      ],
      benefits: [
        'Improved network performance',
        'Enhanced security',
        'Reduced downtime',
        'Scalable infrastructure',
        'Cost optimization'
      ],
      category: 'Networking',
      popular: true,
      icon: Wifi
    },
    {
      id: '5g-implementation',
      name: '5G Network Implementation',
      description: '5G network planning, implementation, and optimization for enterprise applications and IoT connectivity.',
      price: '$4,500/month',
      marketPrice: '$8000-25000/month',
      features: [
        '5G Network Planning',
        'Infrastructure Deployment',
        'IoT Connectivity Solutions',
        'Edge Computing Integration',
        'Network Performance Optimization',
        'Security Implementation',
        'Compliance Management',
        '24/7 Monitoring'
      ],
      benefits: [
        'Ultra-fast connectivity',
        'Low latency applications',
        'IoT enablement',
        'Future-proof infrastructure',
        'Competitive advantage'
      ],
      category: 'Networking',
      popular: false,
      icon: Wifi
    },

    // Data Center & Storage
    {
      id: 'data-center-services',
      name: 'Data Center Services',
      description: 'Comprehensive data center management including colocation, cloud, and hybrid solutions with 24/7 monitoring.',
      price: '$3,000/month',
      marketPrice: '$5000-20000/month',
      features: [
        'Data Center Design & Setup',
        'Server & Storage Management',
        'Power & Cooling Optimization',
        'Disaster Recovery Solutions',
        'Compliance & Security',
        '24/7 Monitoring & Support',
        'Hardware Maintenance',
        'Capacity Planning'
      ],
      benefits: [
        '99.99% uptime guarantee',
        'Cost optimization',
        'Scalable infrastructure',
        'Expert management',
        'Enhanced security'
      ],
      category: 'Data Center',
      popular: true,
      icon: Server
    },
    {
      id: 'storage-solutions',
      name: 'Enterprise Storage Solutions',
      description: 'Advanced storage solutions including SAN, NAS, cloud storage, and data backup with disaster recovery capabilities.',
      price: '$2,200/month',
      marketPrice: '$4000-12000/month',
      features: [
        'SAN & NAS Implementation',
        'Cloud Storage Integration',
        'Data Backup & Recovery',
        'Storage Virtualization',
        'Performance Optimization',
        'Data Deduplication',
        'Disaster Recovery',
        'Storage Monitoring'
      ],
      benefits: [
        'Improved data availability',
        'Cost-effective storage',
        'Better performance',
        'Enhanced security',
        'Simplified management'
      ],
      category: 'Data Center',
      popular: false,
      icon: Package
    },

    // Consulting & Strategy
    {
      id: 'it-consulting',
      name: 'IT Strategy & Consulting',
      description: 'Strategic IT consulting and digital transformation services for enterprise organizations with technology roadmaps.',
      price: '$200/hour',
      marketPrice: '$300-800/hour',
      features: [
        'IT Strategy Development',
        'Technology Assessment',
        'Digital Transformation Planning',
        'Vendor Evaluation & Selection',
        'Process Optimization',
        'Change Management',
        'Technology Roadmaps',
        'ROI Analysis'
      ],
      benefits: [
        'Strategic guidance',
        'Cost optimization',
        'Technology alignment',
        'Competitive advantage',
        'Risk mitigation'
      ],
      category: 'Consulting',
      popular: true,
      icon: Users
    },
    {
      id: 'digital-transformation',
      name: 'Digital Transformation',
      description: 'End-to-end digital transformation services to modernize business processes, systems, and customer experiences.',
      price: '$5,000/month',
      marketPrice: '$10000-50000/month',
      features: [
        'Digital Strategy Development',
        'Process Automation',
        'Legacy System Modernization',
        'Cloud Migration',
        'Data Analytics Implementation',
        'Customer Experience Enhancement',
        'Change Management',
        'Performance Monitoring'
      ],
      benefits: [
        'Improved efficiency',
        'Better customer experience',
        'Reduced operational costs',
        'Increased agility',
        'Competitive advantage'
      ],
      category: 'Consulting',
      popular: true,
      icon: TrendingUp
    },

    // Managed Services
    {
      id: 'managed-services',
      name: 'Managed IT Services',
      description: 'Comprehensive managed IT services including monitoring, maintenance, and support with proactive management.',
      price: '$1,000/month',
      marketPrice: '$2000-6000/month',
      features: [
        '24/7 System Monitoring',
        'Proactive Maintenance',
        'Help Desk Support',
        'Security Management',
        'Backup & Recovery',
        'Software Updates & Patches',
        'Performance Optimization',
        'Incident Response'
      ],
      benefits: [
        'Reduced IT costs by 40%',
        'Improved reliability',
        'Expert support',
        'Focus on core business',
        'Predictable costs'
      ],
      category: 'Managed Services',
      popular: true,
      icon: Settings
    },
    {
      id: 'cloud-managed-services',
      name: 'Cloud Managed Services',
      description: 'Comprehensive cloud management services including monitoring, optimization, security, and cost management.',
      price: '$1,800/month',
      marketPrice: '$3000-10000/month',
      features: [
        'Cloud Infrastructure Management',
        'Cost Optimization',
        'Security Monitoring',
        'Performance Tuning',
        'Backup & Disaster Recovery',
        'Compliance Management',
        '24/7 Support',
        'Cloud Migration Support'
      ],
      benefits: [
        'Optimized cloud costs',
        'Enhanced security',
        'Better performance',
        'Reduced complexity',
        'Expert cloud management'
      ],
      category: 'Managed Services',
      popular: true,
      icon: Cloud
    },

    // Integration & APIs
    {
      id: 'api-development',
      name: 'API Development & Integration',
      description: 'Custom API development and integration services for seamless system connectivity and data exchange.',
      price: '$2,000/project',
      marketPrice: '$5000-15000/project',
      features: [
        'RESTful API Development',
        'GraphQL Implementation',
        'API Documentation & Testing',
        'Third-party Integrations',
        'API Security & Authentication',
        'Performance Optimization',
        'API Gateway Setup',
        'Monitoring & Analytics'
      ],
      benefits: [
        'Improved system integration',
        'Enhanced functionality',
        'Better performance',
        'Scalable architecture',
        'Reduced development time'
      ],
      category: 'Integration',
      popular: true,
      icon: Code
    },
    {
      id: 'enterprise-integration',
      name: 'Enterprise Integration',
      description: 'Comprehensive enterprise integration solutions connecting disparate systems and enabling data flow across the organization.',
      price: '$3,500/month',
      marketPrice: '$6000-20000/month',
      features: [
        'Enterprise Service Bus (ESB)',
        'Data Integration & ETL',
        'Real-time Data Synchronization',
        'Legacy System Integration',
        'Cloud Integration',
        'API Management',
        'Data Quality Management',
        'Integration Monitoring'
      ],
      benefits: [
        'Unified data access',
        'Improved efficiency',
        'Better decision making',
        'Reduced data silos',
        'Enhanced collaboration'
      ],
      category: 'Integration',
      popular: false,
      icon: LinkIcon
    },

    // E-commerce & Digital Solutions
    {
      id: 'ecommerce-solutions',
      name: 'E-commerce Solutions',
      description: 'Complete e-commerce platform development and optimization services with payment integration and analytics.',
      price: '$10,000/project',
      marketPrice: '$20000-100000/project',
      features: [
        'Custom E-commerce Development',
        'Payment Gateway Integration',
        'Inventory Management',
        'Order Processing Automation',
        'Mobile Commerce Optimization',
        'SEO & Marketing Tools',
        'Analytics & Reporting',
        'Multi-channel Integration'
      ],
      benefits: [
        'Increased online sales',
        'Better user experience',
        'Mobile optimization',
        'Scalable platform',
        'Improved conversion rates'
      ],
      category: 'E-commerce',
      popular: true,
      icon: ShoppingCart
    },
    {
      id: 'digital-experience-platform',
      name: 'Digital Experience Platform',
      description: 'Comprehensive digital experience platform with content management, personalization, and omnichannel capabilities.',
      price: '$4,500/month',
      marketPrice: '$8000-25000/month',
      features: [
        'Content Management System',
        'Personalization Engine',
        'Omnichannel Experience',
        'Customer Journey Mapping',
        'A/B Testing Platform',
        'Analytics & Insights',
        'Marketing Automation',
        'Mobile App Integration'
      ],
      benefits: [
        'Enhanced customer experience',
        'Increased engagement',
        'Better conversion rates',
        'Unified digital presence',
        'Data-driven personalization'
      ],
      category: 'E-commerce',
      popular: false,
      icon: Monitor
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', count: services.length },
    { id: 'Cloud', name: 'Cloud & Infrastructure', count: services.filter(s => s.category === 'Cloud').length },
    { id: 'Security', name: 'Security & Compliance', count: services.filter(s => s.category === 'Security').length },
    { id: 'DevOps', name: 'DevOps & Automation', count: services.filter(s => s.category === 'DevOps').length },
    { id: 'Database', name: 'Database & Data', count: services.filter(s => s.category === 'Database').length },
    { id: 'Development', name: 'Development', count: services.filter(s => s.category === 'Development').length },
    { id: 'Networking', name: 'Networking', count: services.filter(s => s.category === 'Networking').length },
    { id: 'Data Center', name: 'Data Center & Storage', count: services.filter(s => s.category === 'Data Center').length },
    { id: 'Consulting', name: 'Consulting & Strategy', count: services.filter(s => s.category === 'Consulting').length },
    { id: 'Managed Services', name: 'Managed Services', count: services.filter(s => s.category === 'Managed Services').length },
    { id: 'Integration', name: 'Integration & APIs', count: services.filter(s => s.category === 'Integration').length },
    { id: 'E-commerce', name: 'E-commerce & Digital', count: services.filter(s => s.category === 'E-commerce').length }
  ];

  const filteredServices = services.filter(service => {
    return selectedCategory === 'all' || service.category === selectedCategory;
  });

  return (
    <>
      <Helmet>
        <title>IT Services - Zion Tech Group | Information Technology Solutions</title>
        <meta name="description" content="Comprehensive IT services including cloud migration, cybersecurity, DevOps, database management, and custom software development." />
        <meta name="keywords" content="IT services, cloud migration, cybersecurity, DevOps, database management, software development" />
        <meta property="og:title" content="IT Services - Zion Tech Group" />
        <meta property="og:description" content="Modernize your IT infrastructure with our comprehensive solutions" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              IT Services
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium">
              Modernize Your Technology Infrastructure
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
              From cloud migration to cybersecurity, our comprehensive IT services help you build, 
              secure, and optimize your technology infrastructure for maximum performance and growth.
            </p>
          </section>

          {/* Category Filter */}
          <section className="mb-12">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-cyan-500 text-white'
                      : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </section>

          {/* Services Grid */}
          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <div
                  key={service.id}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{service.name}</h3>
                      {service.popular && (
                        <span className="inline-block px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs font-medium rounded-full">
                          Popular
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                      <span className="text-gray-400 text-sm ml-2 line-through">{service.marketPrice}</span>
                    </div>
                    <span className="text-gray-400 text-sm">{service.category}</span>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between">
                    <Link
                      to="/contact"
                      className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                    <Link
                      to="/contact"
                      className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
                    >
                      Get Quote
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-4">
                Ready to Modernize Your IT Infrastructure?
              </h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Let our IT experts help you choose the right solutions for your business needs. 
                Get a free consultation and see how we can transform your technology infrastructure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  Get Free Consultation
                </Link>
                <a
                  href="tel:+13024640950"
                  className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  Call: (302) 464-0950
                </a>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default ItServicesPage;