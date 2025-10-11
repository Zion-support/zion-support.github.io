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
    {
      id: 'cloud-infrastructure',
      name: 'Cloud Infrastructure & Migration',
      description: 'Complete cloud solutions including AWS, Azure, and GCP with seamless migration services',
      price: '$2,500/month',
      marketPrice: '$4000-15000/month',
      features: [
        'Cloud architecture design',
        'Multi-cloud strategies',
        'Cost optimization',
        'Disaster recovery',
        'Auto-scaling solutions',
        'Security compliance'
      ],
      benefits: [
        '99.9% uptime guarantee',
        'Cost reduction up to 40%',
        'Scalable infrastructure',
        'Expert migration support'
      ],
      category: 'Cloud',
      popular: true,
      icon: Cloud
    },
    {
      id: 'cybersecurity',
      name: 'Cybersecurity Solutions',
      description: 'Comprehensive security services including threat detection, compliance, and incident response',
      price: '$1,800/month',
      marketPrice: '$3000-12000/month',
      features: [
        'Threat detection & response',
        'Vulnerability assessments',
        'Penetration testing',
        'Security monitoring',
        'Compliance management',
        'Employee training'
      ],
      benefits: [
        '24/7 security monitoring',
        'Reduced security incidents',
        'Compliance assurance',
        'Expert security team'
      ],
      category: 'Security',
      popular: true,
      icon: Shield
    },
    {
      id: 'devops',
      name: 'DevOps & CI/CD',
      description: 'Modern development operations with automated deployment, monitoring, and infrastructure as code',
      price: '$2,200/month',
      marketPrice: '$3500-10000/month',
      features: [
        'CI/CD pipeline setup',
        'Infrastructure as Code',
        'Container orchestration',
        'Monitoring & logging',
        'Automated testing',
        'Deployment automation'
      ],
      benefits: [
        'Faster deployments',
        'Reduced downtime',
        'Improved code quality',
        'Automated workflows'
      ],
      category: 'DevOps',
      popular: false,
      icon: Settings
    },
    {
      id: 'database-management',
      name: 'Database Management',
      description: 'Expert database design, optimization, and management for all major database systems',
      price: '$1,200/month',
      marketPrice: '$2000-8000/month',
      features: [
        'Database design & optimization',
        'Performance tuning',
        'Backup & recovery',
        'Data migration',
        'Security hardening',
        'Monitoring & maintenance'
      ],
      benefits: [
        'Improved performance',
        'Data security',
        'Automated backups',
        'Expert DBA support'
      ],
      category: 'Database',
      popular: false,
      icon: Database
    },
    {
      id: 'mobile-development',
      name: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android',
      price: '$8,000/project',
      marketPrice: '$15000-50000/project',
      features: [
        'iOS & Android apps',
        'Cross-platform development',
        'App store optimization',
        'Push notifications',
        'Offline functionality',
        'Performance optimization'
      ],
      benefits: [
        'Native performance',
        'Cross-platform compatibility',
        'App store success',
        'User engagement'
      ],
      category: 'Development',
      popular: false,
      icon: Smartphone
    },
    {
      id: 'web-development',
      name: 'Web Development',
      description: 'Modern, responsive web applications built with cutting-edge technologies',
      price: '$5,000/project',
      marketPrice: '$10000-30000/project',
      features: [
        'React/Next.js development',
        'Responsive design',
        'SEO optimization',
        'Performance tuning',
        'Security implementation',
        'Content management'
      ],
      benefits: [
        'Modern technology stack',
        'SEO optimized',
        'Mobile responsive',
        'Fast loading times'
      ],
      category: 'Development',
      popular: false,
      icon: Globe
    },
    {
      id: 'network-infrastructure',
      name: 'Network Infrastructure',
      description: 'Complete network design, implementation, and management for enterprise environments',
      price: '$1,500/month',
      marketPrice: '$2500-8000/month',
      features: [
        'Network architecture design',
        'Wireless network deployment',
        'Network security implementation',
        'Performance monitoring',
        'Disaster recovery planning',
        '24/7 network support'
      ],
      benefits: [
        'Improved network performance',
        'Enhanced security',
        'Reduced downtime',
        'Scalable infrastructure'
      ],
      category: 'Networking',
      popular: false,
      icon: Wifi
    },
    {
      id: 'data-center-services',
      name: 'Data Center Services',
      description: 'Comprehensive data center management including colocation, cloud, and hybrid solutions',
      price: '$3,000/month',
      marketPrice: '$5000-20000/month',
      features: [
        'Data center design and setup',
        'Server and storage management',
        'Power and cooling optimization',
        'Disaster recovery solutions',
        'Compliance and security',
        '24/7 monitoring and support'
      ],
      benefits: [
        '99.99% uptime guarantee',
        'Cost optimization',
        'Scalable infrastructure',
        'Expert management'
      ],
      category: 'Data Center',
      popular: false,
      icon: Server
    },
    {
      id: 'it-consulting',
      name: 'IT Consulting',
      description: 'Strategic IT consulting and digital transformation services for enterprise organizations',
      price: '$200/hour',
      marketPrice: '$300-800/hour',
      features: [
        'IT strategy development',
        'Technology assessment',
        'Digital transformation planning',
        'Vendor evaluation',
        'Process optimization',
        'Change management'
      ],
      benefits: [
        'Strategic guidance',
        'Cost optimization',
        'Technology alignment',
        'Competitive advantage'
      ],
      category: 'Consulting',
      popular: true,
      icon: Users
    },
    {
      id: 'managed-services',
      name: 'Managed IT Services',
      description: 'Comprehensive managed IT services including monitoring, maintenance, and support',
      price: '$1,000/month',
      marketPrice: '$2000-6000/month',
      features: [
        '24/7 system monitoring',
        'Proactive maintenance',
        'Help desk support',
        'Security management',
        'Backup and recovery',
        'Software updates'
      ],
      benefits: [
        'Reduced IT costs',
        'Improved reliability',
        'Expert support',
        'Focus on core business'
      ],
      category: 'Managed Services',
      popular: true,
      icon: Settings
    },
    {
      id: 'api-development',
      name: 'API Development & Integration',
      description: 'Custom API development and integration services for seamless system connectivity',
      price: '$2,000/project',
      marketPrice: '$5000-15000/project',
      features: [
        'RESTful API development',
        'GraphQL implementation',
        'API documentation',
        'Third-party integrations',
        'API security and authentication',
        'Performance optimization'
      ],
      benefits: [
        'Improved system integration',
        'Enhanced functionality',
        'Better performance',
        'Scalable architecture'
      ],
      category: 'API Development',
      popular: false,
      icon: Code
    },
    {
      id: 'ecommerce-solutions',
      name: 'E-commerce Solutions',
      description: 'Complete e-commerce platform development and optimization services',
      price: '$10,000/project',
      marketPrice: '$20000-100000/project',
      features: [
        'Custom e-commerce development',
        'Payment gateway integration',
        'Inventory management',
        'Order processing automation',
        'Mobile commerce optimization',
        'SEO and marketing tools'
      ],
      benefits: [
        'Increased online sales',
        'Better user experience',
        'Mobile optimization',
        'Scalable platform'
      ],
      category: 'E-commerce',
      popular: true,
      icon: ShoppingCart
    },
    {
<<<<<<< HEAD
      id: '5g-implementation',
      name: '5G Network Implementation',
      description: 'Complete 5G network design, deployment, and optimization for enterprise environments',
      price: '$15,000/project',
      marketPrice: '$30000-150000/project',
      features: [
        '5G network architecture design',
        'Small cell deployment',
        'Network slicing implementation',
        'Edge computing integration',
        'IoT connectivity optimization',
        'Performance monitoring',
        'Security implementation',
        'Compliance management'
      ],
      benefits: [
        'Ultra-fast connectivity',
        'Low latency applications',
        'Massive IoT support',
        'Future-proof infrastructure',
        'Competitive advantage'
      ],
      category: '5G Technology',
      popular: true,
      icon: Wifi
    },
    {
      id: 'edge-computing',
      name: 'Edge Computing Solutions',
      description: 'Distributed computing infrastructure for real-time processing and reduced latency',
      price: '$8,000/month',
      marketPrice: '$15000-50000/month',
      features: [
        'Edge server deployment',
        'Real-time data processing',
        'IoT device management',
        'Content delivery optimization',
        'Latency reduction',
        'Bandwidth optimization',
        'Security at the edge',
        'Monitoring and analytics'
      ],
      benefits: [
        'Reduced latency',
        'Improved performance',
        'Cost optimization',
        'Real-time processing',
        'Scalable infrastructure'
      ],
      category: 'Edge Computing',
      popular: true,
      icon: Cpu
    },
    {
      id: 'blockchain-solutions',
      name: 'Blockchain & Web3 Solutions',
      description: 'Comprehensive blockchain development and Web3 integration services',
      price: '$12,000/project',
      marketPrice: '$25000-100000/project',
      features: [
        'Smart contract development',
        'DeFi platform creation',
        'NFT marketplace development',
        'Cryptocurrency integration',
        'Web3 application development',
        'Blockchain security auditing',
        'Token economics design',
        'Decentralized app deployment'
=======
      id: 'blockchain-development',
      name: 'Blockchain Development',
      description: 'Custom blockchain solutions including smart contracts, DeFi protocols, and cryptocurrency platforms',
      price: '$15,000/project',
      marketPrice: '$30000-150000/project',
      features: [
        'Smart contract development',
        'DeFi protocol creation',
        'Cryptocurrency wallet development',
        'NFT marketplace creation',
        'Blockchain integration',
        'Security auditing'
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-5698
      ],
      benefits: [
        'Decentralized solutions',
        'Enhanced security',
<<<<<<< HEAD
        'Transparent operations',
        'Future-ready technology',
        'Innovation leadership'
      ],
      category: 'Blockchain',
      popular: true,
      icon: Shield
    },
    {
      id: 'quantum-ready-infrastructure',
      name: 'Quantum-Ready Infrastructure',
      description: 'Future-proof IT infrastructure designed for quantum computing integration',
      price: '$25,000/project',
      marketPrice: '$50000-200000/project',
      features: [
        'Quantum-safe cryptography',
        'Post-quantum security',
        'Quantum network preparation',
        'Hybrid classical-quantum systems',
        'Quantum algorithm optimization',
        'Future-proof architecture',
        'Advanced encryption',
        'Quantum key distribution'
      ],
      benefits: [
        'Future-proof security',
        'Quantum advantage',
        'Advanced cryptography',
        'Competitive edge',
        'Technology leadership'
      ],
      category: 'Quantum Technology',
      popular: false,
      icon: Cpu
    },
    {
      id: 'ai-infrastructure',
      name: 'AI Infrastructure & ML Ops',
      description: 'Specialized infrastructure for AI and machine learning workloads',
      price: '$5,000/month',
      marketPrice: '$10000-40000/month',
      features: [
        'GPU cluster management',
        'ML pipeline automation',
        'Model deployment infrastructure',
        'Data processing optimization',
        'AI model monitoring',
        'Auto-scaling capabilities',
        'Distributed training',
        'Model versioning'
      ],
      benefits: [
        'Optimized AI performance',
        'Scalable ML operations',
        'Cost-effective training',
        'Automated deployment',
        'Production-ready AI'
      ],
      category: 'AI Infrastructure',
      popular: true,
      icon: Brain
    },
    {
      id: 'iot-platform',
      name: 'IoT Platform & Management',
      description: 'Comprehensive IoT platform development and device management solutions',
      price: '$3,500/month',
      marketPrice: '$7000-25000/month',
      features: [
        'IoT device connectivity',
        'Real-time data processing',
        'Device management platform',
        'Predictive maintenance',
        'Edge analytics',
        'Security management',
        'Scalable architecture',
        'Integration capabilities'
      ],
      benefits: [
        'Connected operations',
        'Real-time insights',
        'Predictive maintenance',
        'Operational efficiency',
        'Data-driven decisions'
      ],
      category: 'IoT',
      popular: true,
      icon: Wifi
    },
    {
      id: 'cyber-defense-matrix',
      name: 'Advanced Cyber Defense Matrix',
      description: 'Next-generation cybersecurity platform with AI-powered threat detection and response',
      price: '$4,500/month',
      marketPrice: '$8000-30000/month',
      features: [
        'AI threat detection',
        'Behavioral analytics',
        'Automated response',
        'Zero-trust architecture',
        'Threat hunting',
        'Incident response automation',
        'Security orchestration',
        'Compliance monitoring'
      ],
      benefits: [
        'Advanced threat protection',
        'Automated response',
        'Reduced security incidents',
        'Compliance assurance',
        'Peace of mind'
      ],
      category: 'Security',
      popular: true,
      icon: Shield
    },
    {
      id: 'digital-twin-platform',
      name: 'Digital Twin Platform',
      description: 'Comprehensive digital twin development for physical asset monitoring and optimization',
      price: '$6,500/month',
      marketPrice: '$12000-50000/month',
      features: [
        '3D asset modeling',
        'Real-time monitoring',
        'Predictive analytics',
        'Simulation capabilities',
        'Performance optimization',
        'Maintenance scheduling',
        'Data integration',
        'Visualization dashboard'
      ],
      benefits: [
        'Asset optimization',
        'Predictive maintenance',
        'Cost reduction',
        'Performance insights',
        'Operational efficiency'
      ],
      category: 'Digital Twin',
      popular: false,
      icon: Monitor
    },
    {
      id: 'metaverse-development',
      name: 'Metaverse Development Platform',
      description: 'Complete metaverse and virtual world development services',
      price: '$20,000/project',
      marketPrice: '$40000-200000/project',
      features: [
        'Virtual world creation',
        'Avatar systems',
        'Virtual economy',
        'Social features',
        'AR/VR integration',
        '3D asset creation',
        'Multi-platform support',
        'Blockchain integration'
      ],
      benefits: [
        'Immersive experiences',
        'New revenue streams',
        'Customer engagement',
        'Innovation leadership',
        'Future-ready platform'
      ],
      category: 'Metaverse',
      popular: true,
      icon: Globe
=======
        'Transparent transactions',
        'Future-proof technology'
      ],
      category: 'Blockchain',
      popular: false,
      icon: Shield
    },
    {
      id: 'iot-solutions',
      name: 'IoT Solutions',
      description: 'Internet of Things development and implementation for smart devices and connected systems',
      price: '$8,000/project',
      marketPrice: '$15000-80000/project',
      features: [
        'IoT device development',
        'Sensor integration',
        'Data collection and analysis',
        'Real-time monitoring',
        'Mobile app integration',
        'Cloud connectivity'
      ],
      benefits: [
        'Automated processes',
        'Real-time insights',
        'Improved efficiency',
        'Cost reduction'
      ],
      category: 'IoT',
      popular: false,
      icon: Wifi
    },
    {
      id: 'ai-integration',
      name: 'AI Integration Services',
      description: 'AI and machine learning integration into existing systems and applications',
      price: '$5,000/project',
      marketPrice: '$10000-50000/project',
      features: [
        'AI model integration',
        'Machine learning pipelines',
        'Data preprocessing',
        'Model training and deployment',
        'API development',
        'Performance optimization'
      ],
      benefits: [
        'Enhanced functionality',
        'Automated decision making',
        'Improved accuracy',
        'Competitive advantage'
      ],
      category: 'AI Integration',
      popular: true,
      icon: Cpu
    },
    {
      id: 'data-analytics',
      name: 'Data Analytics & BI',
      description: 'Business intelligence and data analytics solutions for data-driven decision making',
      price: '$3,000/month',
      marketPrice: '$6000-25000/month',
      features: [
        'Data warehouse design',
        'ETL pipeline development',
        'Dashboard creation',
        'Report automation',
        'Predictive analytics',
        'Data visualization'
      ],
      benefits: [
        'Data-driven insights',
        'Better decision making',
        'Automated reporting',
        'Competitive advantage'
      ],
      category: 'Analytics',
      popular: true,
      icon: BarChart
    },
    {
      id: 'cloud-native-development',
      name: 'Cloud-Native Development',
      description: 'Modern cloud-native application development using microservices and containerization',
      price: '$12,000/project',
      marketPrice: '$25000-100000/project',
      features: [
        'Microservices architecture',
        'Container orchestration',
        'Serverless development',
        'API gateway implementation',
        'Service mesh setup',
        'Cloud-native monitoring'
      ],
      benefits: [
        'Scalable architecture',
        'Faster deployment',
        'Better reliability',
        'Cost optimization'
      ],
      category: 'Cloud Native',
      popular: false,
      icon: Cloud
    },
    {
      id: 'legacy-modernization',
      name: 'Legacy System Modernization',
      description: 'Modernizing legacy systems and applications for better performance and maintainability',
      price: '$20,000/project',
      marketPrice: '$40000-200000/project',
      features: [
        'Legacy code analysis',
        'System architecture redesign',
        'Database migration',
        'API modernization',
        'User interface updates',
        'Performance optimization'
      ],
      benefits: [
        'Improved performance',
        'Better maintainability',
        'Enhanced security',
        'Future-proof technology'
      ],
      category: 'Modernization',
      popular: true,
      icon: Settings
    },
    {
      id: 'quality-assurance',
      name: 'Quality Assurance & Testing',
      description: 'Comprehensive software testing and quality assurance services for all types of applications',
      price: '$2,500/month',
      marketPrice: '$5000-20000/month',
      features: [
        'Automated testing setup',
        'Performance testing',
        'Security testing',
        'User acceptance testing',
        'Load testing',
        'Test automation'
      ],
      benefits: [
        'Higher quality software',
        'Reduced bugs',
        'Better user experience',
        'Faster delivery'
      ],
      category: 'QA & Testing',
      popular: false,
      icon: CheckCircle
    },
    {
      id: 'digital-transformation',
      name: 'Digital Transformation',
      description: 'End-to-end digital transformation services to modernize business processes and operations',
      price: '$50,000/project',
      marketPrice: '$100000-500000/project',
      features: [
        'Process analysis and optimization',
        'Technology roadmap development',
        'Change management',
        'Staff training',
        'System integration',
        'Performance monitoring'
      ],
      benefits: [
        'Improved efficiency',
        'Better customer experience',
        'Cost reduction',
        'Competitive advantage'
      ],
      category: 'Digital Transformation',
      popular: true,
      icon: TrendingUp
    },
    {
      id: 'compliance-solutions',
      name: 'Compliance Solutions',
      description: 'Regulatory compliance and governance solutions for various industries and standards',
      price: '$4,000/month',
      marketPrice: '$8000-30000/month',
      features: [
        'Compliance assessment',
        'Policy development',
        'Audit preparation',
        'Risk management',
        'Documentation management',
        'Training programs'
      ],
      benefits: [
        'Regulatory compliance',
        'Reduced risk',
        'Better governance',
        'Audit readiness'
      ],
      category: 'Compliance',
      popular: false,
      icon: Shield
    },
    {
      id: 'disaster-recovery',
      name: 'Disaster Recovery Solutions',
      description: 'Comprehensive disaster recovery and business continuity planning and implementation',
      price: '$3,500/month',
      marketPrice: '$7000-25000/month',
      features: [
        'Disaster recovery planning',
        'Backup strategy implementation',
        'Recovery testing',
        'Business continuity planning',
        'Data replication',
        'Failover systems'
      ],
      benefits: [
        'Business continuity',
        'Data protection',
        'Minimal downtime',
        'Peace of mind'
      ],
      category: 'Disaster Recovery',
      popular: false,
      icon: Server
    },
    {
      id: 'performance-optimization',
      name: 'Performance Optimization',
      description: 'Application and system performance optimization for better speed and efficiency',
      price: '$2,000/month',
      marketPrice: '$4000-15000/month',
      features: [
        'Performance analysis',
        'Code optimization',
        'Database tuning',
        'Caching implementation',
        'Load balancing',
        'Monitoring setup'
      ],
      benefits: [
        'Faster applications',
        'Better user experience',
        'Reduced costs',
        'Improved scalability'
      ],
      category: 'Performance',
      popular: false,
      icon: Zap
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-5698
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', count: services.length },
    { id: 'Cloud', name: 'Cloud', count: services.filter(s => s.category === 'Cloud').length },
    { id: 'Security', name: 'Security', count: services.filter(s => s.category === 'Security').length },
    { id: 'DevOps', name: 'DevOps', count: services.filter(s => s.category === 'DevOps').length },
    { id: 'Database', name: 'Database', count: services.filter(s => s.category === 'Database').length },
    { id: 'Development', name: 'Development', count: services.filter(s => s.category === 'Development').length },
    { id: 'Networking', name: 'Networking', count: services.filter(s => s.category === 'Networking').length },
    { id: 'Data Center', name: 'Data Center', count: services.filter(s => s.category === 'Data Center').length },
    { id: 'Consulting', name: 'Consulting', count: services.filter(s => s.category === 'Consulting').length },
    { id: 'Managed Services', name: 'Managed Services', count: services.filter(s => s.category === 'Managed Services').length },
    { id: 'API Development', name: 'API Development', count: services.filter(s => s.category === 'API Development').length },
    { id: 'E-commerce', name: 'E-commerce', count: services.filter(s => s.category === 'E-commerce').length },
<<<<<<< HEAD
    { id: '5G Technology', name: '5G Technology', count: services.filter(s => s.category === '5G Technology').length },
    { id: 'Edge Computing', name: 'Edge Computing', count: services.filter(s => s.category === 'Edge Computing').length },
    { id: 'Blockchain', name: 'Blockchain', count: services.filter(s => s.category === 'Blockchain').length },
    { id: 'Quantum Technology', name: 'Quantum Technology', count: services.filter(s => s.category === 'Quantum Technology').length },
    { id: 'AI Infrastructure', name: 'AI Infrastructure', count: services.filter(s => s.category === 'AI Infrastructure').length },
    { id: 'IoT', name: 'IoT', count: services.filter(s => s.category === 'IoT').length },
    { id: 'Digital Twin', name: 'Digital Twin', count: services.filter(s => s.category === 'Digital Twin').length },
    { id: 'Metaverse', name: 'Metaverse', count: services.filter(s => s.category === 'Metaverse').length }
=======
    { id: 'Blockchain', name: 'Blockchain', count: services.filter(s => s.category === 'Blockchain').length },
    { id: 'IoT', name: 'IoT', count: services.filter(s => s.category === 'IoT').length },
    { id: 'AI Integration', name: 'AI Integration', count: services.filter(s => s.category === 'AI Integration').length },
    { id: 'Analytics', name: 'Analytics', count: services.filter(s => s.category === 'Analytics').length },
    { id: 'Cloud Native', name: 'Cloud Native', count: services.filter(s => s.category === 'Cloud Native').length },
    { id: 'Modernization', name: 'Modernization', count: services.filter(s => s.category === 'Modernization').length },
    { id: 'QA & Testing', name: 'QA & Testing', count: services.filter(s => s.category === 'QA & Testing').length },
    { id: 'Digital Transformation', name: 'Digital Transformation', count: services.filter(s => s.category === 'Digital Transformation').length },
    { id: 'Compliance', name: 'Compliance', count: services.filter(s => s.category === 'Compliance').length },
    { id: 'Disaster Recovery', name: 'Disaster Recovery', count: services.filter(s => s.category === 'Disaster Recovery').length },
    { id: 'Performance', name: 'Performance', count: services.filter(s => s.category === 'Performance').length }
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-5698
  ];

  const filteredServices = services.filter(service => {
    return selectedCategory === 'all' || service.category === selectedCategory;
  });

const Page: React.FC = () => {
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