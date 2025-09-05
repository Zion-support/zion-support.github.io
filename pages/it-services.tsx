import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import {
  Server, 
  Shield, 
  Cloud, 
  Database, 
  Network, 
  Monitor, 
  Settings, 
  CheckCircle, 
  ArrowRight, 
  Clock, 
  Award, 
  Star, 
  Zap, 
  TrendingUp, 
  Users, 
  Lock, 
  Globe,
  Cpu,
  HardDrive,
  Wifi,
  Smartphone,
  Laptop,
  Building,
  BarChart3,
  Code,
  Search,
  ShoppingCart,
  BookOpen,
  Brain,
  DollarSign,
  Rocket,
  Sprout,
  Eye,
  Bot,
  Target,
  TreePine,
  Heart,
  GraduationCap,
  PieChart,
  Truck,
  Home,
  Video,
  ClipboardList,
  Phone,
  MapPin,
  Mail
} from 'lucide-react';

const contactInfo = {
  phone: "+1 302 464 0950",
  email: "kleber@ziontechgroup.com",
  address: "364 E Main St STE 1008 Middletown DE 19709"
};

const itServices = [
  // Cloud & Infrastructure Services
  {
    title: 'Cloud Infrastructure Management',
    description: 'Comprehensive cloud solutions including AWS, Azure, and Google Cloud Platform management with 99.9% uptime guarantee.',
    icon: Cloud,
    features: ['Multi-cloud Strategy', 'Cost Optimization', 'Auto-scaling', 'Disaster Recovery', '24/7 Monitoring'],
    pricing: '$6,000 - $30,000/project',
    category: 'Cloud Infrastructure',
    popular: true,
    benefits: ['Scalability', 'Cost Efficiency', 'High Availability', 'Global Reach'],
    marketPrice: '$8,000 - $40,000/project',
    link: 'https://ziontechgroup.com/cloud-infrastructure'
  },
  {
    title: 'DevOps & CI/CD Pipeline',
    description: 'Automated deployment pipelines with continuous integration and delivery for faster, more reliable software releases.',
    icon: Settings,
    features: ['CI/CD Setup', 'Automated Testing', 'Container Orchestration', 'Infrastructure as Code', 'Monitoring & Alerting'],
    pricing: '$4,000 - $20,000/project',
    category: 'DevOps',
    popular: true,
    benefits: ['Faster Deployments', 'Reduced Errors', 'Better Collaboration', 'Automated Processes'],
    marketPrice: '$6,000 - $25,000/project',
    link: 'https://ziontechgroup.com/devops-cicd'
  },
  {
    title: 'Microservices Architecture',
    description: 'Design and implementation of scalable microservices architecture for modern applications.',
    icon: Server,
    features: ['Service Design', 'API Gateway', 'Service Mesh', 'Load Balancing', 'Monitoring'],
    pricing: '$8,000 - $40,000/project',
    category: 'Architecture',
    benefits: ['Scalability', 'Maintainability', 'Technology Flexibility', 'Team Independence'],
    marketPrice: '$12,000 - $50,000/project',
    link: 'https://ziontechgroup.com/microservices-architecture'
  },

  // Cybersecurity Services
  {
    title: 'Cybersecurity Solutions',
    description: 'Enterprise-grade security services to protect your digital assets and data with advanced threat detection.',
    icon: Shield,
    features: ['Threat Detection', 'Vulnerability Assessment', 'Security Audits', 'Incident Response', 'Compliance'],
    pricing: '$5,000 - $40,000/project',
    category: 'Cybersecurity',
    popular: true,
    benefits: ['Data Protection', 'Risk Mitigation', 'Compliance', 'Peace of Mind'],
    marketPrice: '$7,000 - $50,000/project',
    link: 'https://ziontechgroup.com/cybersecurity-solutions'
  },
  {
    title: 'Zero Trust Security Architecture',
    description: 'Implementation of zero trust security model with identity verification and least privilege access.',
    icon: Lock,
    features: ['Identity Verification', 'Access Control', 'Network Segmentation', 'Continuous Monitoring', 'Policy Enforcement'],
    pricing: '$10,000 - $60,000/project',
    category: 'Security Architecture',
    benefits: ['Enhanced Security', 'Reduced Attack Surface', 'Better Compliance', 'Improved Visibility'],
    marketPrice: '$15,000 - $80,000/project',
    link: 'https://ziontechgroup.com/zero-trust-security'
  },
  {
    title: 'Penetration Testing & Security Audits',
    description: 'Comprehensive security testing and auditing services to identify and fix vulnerabilities.',
    icon: Search,
    features: ['Vulnerability Scanning', 'Penetration Testing', 'Security Audits', 'Compliance Testing', 'Remediation Planning'],
    pricing: '$3,000 - $15,000/audit',
    category: 'Security Testing',
    benefits: ['Vulnerability Discovery', 'Risk Assessment', 'Compliance', 'Security Improvement'],
    marketPrice: '$5,000 - $20,000/audit',
    link: 'https://ziontechgroup.com/penetration-testing'
  },

  // Network & Infrastructure
  {
    title: 'Network Infrastructure Design',
    description: 'Design, implementation, and management of robust network infrastructure for optimal performance.',
    icon: Network,
    features: ['Network Design', 'Performance Optimization', 'Monitoring', 'Troubleshooting', 'Security'],
    pricing: '$120 - $220/hour',
    category: 'Networking',
    benefits: ['Reliable Connectivity', 'Optimal Performance', 'Scalability', 'Security'],
    marketPrice: '$150 - $280/hour',
    link: 'https://ziontechgroup.com/network-infrastructure'
  },
  {
    title: 'SD-WAN Implementation',
    description: 'Software-defined wide area network solutions for improved connectivity and cost optimization.',
    icon: Wifi,
    features: ['SD-WAN Design', 'Implementation', 'Performance Optimization', 'Security Integration', 'Monitoring'],
    pricing: '$8,000 - $35,000/project',
    category: 'Networking',
    benefits: ['Cost Reduction', 'Better Performance', 'Centralized Management', 'Improved Security'],
    marketPrice: '$12,000 - $45,000/project',
    link: 'https://ziontechgroup.com/sd-wan-implementation'
  },
  {
    title: 'Data Center Solutions',
    description: 'Comprehensive data center design, migration, and management services for enterprise needs.',
    icon: Building,
    features: ['Data Center Design', 'Migration Services', 'Power & Cooling', 'Security', 'Monitoring'],
    pricing: '$15,000 - $100,000/project',
    category: 'Data Center',
    benefits: ['Reliability', 'Scalability', 'Security', 'Cost Optimization'],
    marketPrice: '$25,000 - $150,000/project',
    link: 'https://ziontechgroup.com/data-center-solutions'
  },

  // Database & Data Management
  {
    title: 'Database Design & Optimization',
    description: 'Expert database design, optimization, and management services for optimal performance.',
    icon: Database,
    features: ['Database Design', 'Performance Tuning', 'Backup & Recovery', 'Security', 'Monitoring'],
    pricing: '$2,000 - $15,000/project',
    category: 'Database',
    benefits: ['Better Performance', 'Data Integrity', 'Reliability', 'Security'],
    marketPrice: '$3,000 - $20,000/project',
    link: 'https://ziontechgroup.com/database-optimization'
  },
  {
    title: 'Data Migration Services',
    description: 'Seamless data migration between systems with minimal downtime and data integrity.',
    icon: HardDrive,
    features: ['Data Assessment', 'Migration Planning', 'Data Transfer', 'Validation', 'Testing'],
    pricing: '$3,000 - $25,000/project',
    category: 'Data Management',
    benefits: ['Minimal Downtime', 'Data Integrity', 'Risk Mitigation', 'Smooth Transition'],
    marketPrice: '$5,000 - $35,000/project',
    link: 'https://ziontechgroup.com/data-migration'
  },
  {
    title: 'Big Data Analytics Platform',
    description: 'Implementation of big data analytics platforms for processing and analyzing large datasets.',
    icon: BarChart3,
    features: ['Platform Setup', 'Data Processing', 'Analytics Tools', 'Visualization', 'Machine Learning'],
    pricing: '$10,000 - $50,000/project',
    category: 'Big Data',
    benefits: ['Data Insights', 'Scalability', 'Real-time Processing', 'Business Intelligence'],
    marketPrice: '$15,000 - $70,000/project',
    link: 'https://ziontechgroup.com/big-data-analytics'
  },

  // AI & Machine Learning
  {
    title: 'AI Infrastructure Setup',
    description: 'Complete AI infrastructure setup with GPU clusters, ML pipelines, and model deployment.',
    icon: Brain,
    features: ['GPU Clusters', 'ML Pipelines', 'Model Deployment', 'Monitoring', 'Scaling'],
    pricing: '$15,000 - $80,000/project',
    category: 'AI Infrastructure',
    popular: true,
    benefits: ['AI Readiness', 'Scalability', 'Performance', 'Cost Efficiency'],
    marketPrice: '$25,000 - $120,000/project',
    link: 'https://ziontechgroup.com/ai-infrastructure'
  },
  {
    title: 'Machine Learning Operations (MLOps)',
    description: 'End-to-end MLOps implementation for automated model training, deployment, and monitoring.',
    icon: Bot,
    features: ['Model Training', 'Automated Deployment', 'Model Monitoring', 'A/B Testing', 'Retraining'],
    pricing: '$8,000 - $40,000/project',
    category: 'MLOps',
    benefits: ['Automated ML', 'Model Reliability', 'Faster Deployment', 'Better Performance'],
    marketPrice: '$12,000 - $60,000/project',
    link: 'https://ziontechgroup.com/mlops'
  },
  {
    title: 'AI Model Integration',
    description: 'Integration of AI models into existing systems and applications with API development.',
    icon: Code,
    features: ['API Development', 'Model Integration', 'Performance Optimization', 'Testing', 'Documentation'],
    pricing: '$5,000 - $25,000/project',
    category: 'AI Integration',
    benefits: ['Seamless Integration', 'Better Performance', 'Scalability', 'Maintainability'],
    marketPrice: '$8,000 - $35,000/project',
    link: 'https://ziontechgroup.com/ai-model-integration'
  },

  // IoT & Edge Computing
  {
    title: 'IoT Platform Development',
    description: 'Complete IoT platform development with device management, data processing, and analytics.',
    icon: Wifi,
    features: ['Device Management', 'Data Processing', 'Real-time Analytics', 'Security', 'Scalability'],
    pricing: '$12,000 - $60,000/project',
    category: 'IoT',
    benefits: ['Device Connectivity', 'Data Insights', 'Automation', 'Cost Reduction'],
    marketPrice: '$18,000 - $90,000/project',
    link: 'https://ziontechgroup.com/iot-platform'
  },
  {
    title: 'Edge Computing Solutions',
    description: 'Edge computing implementation for real-time processing and reduced latency.',
    icon: Cpu,
    features: ['Edge Infrastructure', 'Data Processing', 'Real-time Analytics', 'Security', 'Monitoring'],
    pricing: '$8,000 - $40,000/project',
    category: 'Edge Computing',
    benefits: ['Reduced Latency', 'Real-time Processing', 'Bandwidth Savings', 'Improved Performance'],
    marketPrice: '$12,000 - $60,000/project',
    link: 'https://ziontechgroup.com/edge-computing'
  },
  {
    title: 'Industrial IoT Solutions',
    description: 'Specialized IoT solutions for industrial applications with predictive maintenance.',
    icon: Settings,
    features: ['Sensor Integration', 'Predictive Maintenance', 'Real-time Monitoring', 'Data Analytics', 'Alerts'],
    pricing: '$15,000 - $80,000/project',
    category: 'Industrial IoT',
    benefits: ['Predictive Maintenance', 'Cost Reduction', 'Improved Efficiency', 'Better Safety'],
    marketPrice: '$25,000 - $120,000/project',
    link: 'https://ziontechgroup.com/industrial-iot'
  },

  // Blockchain & Web3
  {
    title: 'Blockchain Development',
    description: 'Custom blockchain solutions and smart contract development for various use cases.',
    icon: Shield,
    features: ['Smart Contracts', 'DApp Development', 'Token Development', 'Security Audits', 'Deployment'],
    pricing: '$10,000 - $50,000/project',
    category: 'Blockchain',
    popular: true,
    benefits: ['Decentralization', 'Security', 'Transparency', 'Innovation'],
    marketPrice: '$15,000 - $80,000/project',
    link: 'https://ziontechgroup.com/blockchain-development'
  },
  {
    title: 'DeFi Platform Development',
    description: 'Decentralized finance platform development with smart contracts and user interfaces.',
    icon: DollarSign,
    features: ['Smart Contracts', 'UI/UX Design', 'Security Audits', 'Testing', 'Deployment'],
    pricing: '$20,000 - $100,000/project',
    category: 'DeFi',
    benefits: ['Financial Innovation', 'Decentralization', 'Transparency', 'Accessibility'],
    marketPrice: '$30,000 - $150,000/project',
    link: 'https://ziontechgroup.com/defi-platform'
  },
  {
    title: 'NFT Marketplace Development',
    description: 'Complete NFT marketplace development with minting, trading, and auction features.',
    icon: Image,
    features: ['NFT Minting', 'Marketplace', 'Auction System', 'Wallet Integration', 'Admin Panel'],
    pricing: '$15,000 - $75,000/project',
    category: 'NFT',
    benefits: ['Digital Ownership', 'Marketplace', 'Revenue Generation', 'Innovation'],
    marketPrice: '$25,000 - $120,000/project',
    link: 'https://ziontechgroup.com/nft-marketplace'
  },

  // Mobile & Web Development
  {
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile app development for iOS and Android platforms.',
    icon: Smartphone,
    features: ['Native Development', 'Cross-platform', 'UI/UX Design', 'Testing', 'App Store Deployment'],
    pricing: '$8,000 - $40,000/project',
    category: 'Mobile Development',
    benefits: ['Mobile Presence', 'User Engagement', 'Revenue Generation', 'Brand Visibility'],
    marketPrice: '$12,000 - $60,000/project',
    link: 'https://ziontechgroup.com/mobile-app-development'
  },
  {
    title: 'Web Application Development',
    description: 'Custom web application development with modern frameworks and technologies.',
    icon: Monitor,
    features: ['Frontend Development', 'Backend Development', 'Database Design', 'API Development', 'Testing'],
    pricing: '$5,000 - $30,000/project',
    category: 'Web Development',
    benefits: ['Online Presence', 'User Experience', 'Business Growth', 'Competitive Advantage'],
    marketPrice: '$8,000 - $45,000/project',
    link: 'https://ziontechgroup.com/web-application-development'
  },
  {
    title: 'Progressive Web App (PWA)',
    description: 'Progressive web app development for enhanced mobile experience and offline functionality.',
    icon: Globe,
    features: ['Offline Functionality', 'Push Notifications', 'App-like Experience', 'Responsive Design', 'Performance'],
    pricing: '$6,000 - $25,000/project',
    category: 'PWA Development',
    benefits: ['Better Performance', 'Offline Access', 'App-like Experience', 'Cost Efficiency'],
    marketPrice: '$10,000 - $40,000/project',
    link: 'https://ziontechgroup.com/pwa-development'
  },

  // Enterprise Solutions
  {
    title: 'ERP System Implementation',
    description: 'Enterprise resource planning system implementation and customization for business processes.',
    icon: Building,
    features: ['System Analysis', 'Customization', 'Data Migration', 'Training', 'Support'],
    pricing: '$20,000 - $100,000/project',
    category: 'ERP',
    benefits: ['Process Automation', 'Data Integration', 'Better Control', 'Cost Reduction'],
    marketPrice: '$35,000 - $150,000/project',
    link: 'https://ziontechgroup.com/erp-implementation'
  },
  {
    title: 'CRM System Development',
    description: 'Custom customer relationship management system development and integration.',
    icon: Users,
    features: ['Customer Management', 'Sales Tracking', 'Marketing Automation', 'Analytics', 'Integration'],
    pricing: '$8,000 - $40,000/project',
    category: 'CRM',
    benefits: ['Better Customer Relations', 'Sales Growth', 'Marketing Efficiency', 'Data Insights'],
    marketPrice: '$12,000 - $60,000/project',
    link: 'https://ziontechgroup.com/crm-development'
  },
  {
    title: 'API Development & Integration',
    description: 'Custom API development and third-party system integration for seamless data flow.',
    icon: Code,
    features: ['API Design', 'Development', 'Documentation', 'Testing', 'Integration'],
    pricing: '$3,000 - $20,000/project',
    category: 'API Development',
    benefits: ['System Integration', 'Data Flow', 'Automation', 'Scalability'],
    marketPrice: '$5,000 - $30,000/project',
    link: 'https://ziontechgroup.com/api-development'
  },

  // Monitoring & Maintenance
  {
    title: 'IT Infrastructure Monitoring',
    description: '24/7 monitoring and management of IT infrastructure with proactive issue resolution.',
    icon: Monitor,
    features: ['24/7 Monitoring', 'Alert Management', 'Performance Tracking', 'Incident Response', 'Reporting'],
    pricing: '$2,000 - $10,000/month',
    category: 'Monitoring',
    benefits: ['Proactive Management', 'Reduced Downtime', 'Better Performance', 'Cost Savings'],
    marketPrice: '$3,000 - $15,000/month',
    link: 'https://ziontechgroup.com/infrastructure-monitoring'
  },
  {
    title: 'IT Support & Maintenance',
    description: 'Comprehensive IT support and maintenance services for ongoing system health.',
    icon: Settings,
    features: ['Technical Support', 'System Maintenance', 'Updates & Patches', 'Troubleshooting', 'Documentation'],
    pricing: '$1,500 - $8,000/month',
    category: 'IT Support',
    benefits: ['System Reliability', 'Quick Resolution', 'Preventive Maintenance', 'Peace of Mind'],
    marketPrice: '$2,500 - $12,000/month',
    link: 'https://ziontechgroup.com/it-support-maintenance'
  },
  {
    title: 'Disaster Recovery Planning',
    description: 'Comprehensive disaster recovery planning and implementation for business continuity.',
    icon: Shield,
    features: ['Risk Assessment', 'Recovery Planning', 'Backup Solutions', 'Testing', 'Documentation'],
    pricing: '$5,000 - $25,000/project',
    category: 'Disaster Recovery',
    benefits: ['Business Continuity', 'Risk Mitigation', 'Data Protection', 'Quick Recovery'],
    marketPrice: '$8,000 - $40,000/project',
    link: 'https://ziontechgroup.com/disaster-recovery'
  }
];

export default function ITServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Head>
        <title>IT Services - Zion Tech Group | 70+ Comprehensive Technology Solutions</title>
        <meta name="description" content="Discover 70+ comprehensive IT services from Zion Tech Group. Cloud infrastructure, cybersecurity, AI solutions, blockchain development, and enterprise technology services." />
        <meta name="keywords" content="IT services, cloud computing, cybersecurity, AI infrastructure, blockchain development, enterprise solutions" />
        <meta property="og:title" content="IT Services - Zion Tech Group" />
        <meta property="og:description" content="Transform your business with our comprehensive IT services. 70+ technology solutions designed to accelerate your digital transformation." />
        <meta property="og:url" content="https://ziontechgroup.com/it-services" />
        <meta property="og:type" content="website" />
      </Head>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Comprehensive IT Services
              <span className="text-blue-400 block">for Modern Enterprises</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Discover 70+ comprehensive IT services designed to accelerate your digital transformation. 
              From cloud infrastructure to AI solutions, we provide end-to-end technology services.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                Get Started Today
              </Link>
              <Link href="#services" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                Explore Services
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <motion.div 
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Cloud className="w-12 h-12 text-blue-400 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-4">Cloud & Infrastructure</h3>
                <p className="text-gray-200">Scalable cloud solutions and robust infrastructure management</p>
              </motion.div>
              
              <motion.div 
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Shield className="w-12 h-12 text-blue-400 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-4">Cybersecurity</h3>
                <p className="text-gray-200">Enterprise-grade security solutions and threat protection</p>
              </motion.div>
              
              <motion.div 
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Brain className="w-12 h-12 text-blue-400 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-4">AI & Machine Learning</h3>
                <p className="text-gray-200">Advanced AI infrastructure and machine learning solutions</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our IT Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from 70+ comprehensive IT services designed to solve complex technology challenges and drive business growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <div className="bg-blue-100 p-3 rounded-lg mr-4">
                        <IconComponent className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{service.title}</h3>
                        <span className="text-sm text-blue-600 font-medium">{service.category}</span>
                      </div>
                    </div>
                    {service.popular && (
                      <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2 py-1 rounded-full">
                        Popular
                      </span>
                    )}
                  </div>

                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{service.description}</p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="text-xs text-gray-600 space-y-1">
                      {service.features.slice(0, 4).map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Benefits:</h4>
                    <div className="flex flex-wrap gap-1">
                      {service.benefits.slice(0, 3).map((benefit, idx) => (
                        <span key={idx} className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="text-lg font-bold text-blue-600">{service.pricing}</div>
                      <div className="text-xs text-gray-500">Market: {service.marketPrice}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-semibold text-gray-900">Save up to 30%</div>
                      <div className="text-xs text-green-600">vs market price</div>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Link
                      href={service.link}
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-2 px-4 rounded-lg font-semibold transition-colors text-sm"
                    >
                      Learn More
                    </Link>
                    <Link
                      href="/contact"
                      className="flex-1 border border-blue-600 text-blue-600 hover:bg-blue-50 text-center py-2 px-4 rounded-lg font-semibold transition-colors text-sm"
                    >
                      Contact Us
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your IT Infrastructure?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join 500+ successful businesses that trust Zion Tech Group for their IT service needs. 
              Let's build the perfect technology solution for your business.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="flex items-center justify-center">
                <Phone className="w-6 h-6 mr-3" />
                <span className="text-lg">{contactInfo.phone}</span>
              </div>
              <div className="flex items-center justify-center">
                <Mail className="w-6 h-6 mr-3" />
                <span className="text-lg">{contactInfo.email}</span>
              </div>
              <div className="flex items-center justify-center">
                <MapPin className="w-6 h-6 mr-3" />
                <span className="text-lg">{contactInfo.address}</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="px-8 py-4 bg-white text-purple-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                Get Started
              </Link>
              <Link href="/services" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold">
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}