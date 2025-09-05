<<<<<<< HEAD
import React from 'react';
=======
import React, { useState } from 'react';
>>>>>>> 2e9c29263b568858da4098d8218397d3dc948131
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
<<<<<<< HEAD
  ArrowRight, 
=======
>>>>>>> 2e9c29263b568858da4098d8218397d3dc948131
  Server, 
  Shield, 
  Cloud, 
  Database,
  Wifi,
  Monitor,
  Smartphone,
<<<<<<< HEAD
  CheckCircle,
  Star,
  Users,
  Award,
  Zap,
  Lock,
  Globe,
  Settings
} from 'lucide-react';

const itServices = [
  {
    icon: Server,
    title: 'Infrastructure Management',
    description: 'Complete IT infrastructure setup, monitoring, and maintenance for optimal performance.',
    features: [
      'Server Setup & Configuration',
      'Network Design & Implementation',
      'Hardware Procurement',
      'Performance Monitoring',
      '24/7 Support'
    ],
    pricing: 'Starting at $2,000/month'
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'Migrate to the cloud with our comprehensive cloud strategy and implementation services.',
    features: [
      'Cloud Migration',
      'Multi-Cloud Strategy',
      'Cost Optimization',
      'Security Implementation',
      'Backup & Recovery'
    ],
    pricing: 'Starting at $1,500/month'
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Protect your business with comprehensive security solutions and threat monitoring.',
    features: [
      'Security Assessment',
      'Firewall Configuration',
      'Threat Detection',
      'Incident Response',
      'Security Training'
    ],
    pricing: 'Starting at $3,000/month'
  },
  {
    icon: Database,
    title: 'Data Management',
    description: 'Secure, efficient data storage and management solutions for your business needs.',
    features: [
      'Database Design',
      'Data Migration',
      'Backup Solutions',
      'Data Recovery',
      'Performance Tuning'
    ],
    pricing: 'Starting at $1,200/month'
  },
  {
    icon: Wifi,
    title: 'Network Solutions',
    description: 'Reliable, secure network infrastructure designed for your business requirements.',
    features: [
      'Network Design',
      'WiFi Implementation',
      'VPN Setup',
      'Bandwidth Management',
      'Network Monitoring'
    ],
    pricing: 'Starting at $800/month'
  },
  {
    icon: Monitor,
    title: 'IT Support',
    description: 'Comprehensive IT support and helpdesk services to keep your business running smoothly.',
    features: [
      'Helpdesk Support',
      'Remote Assistance',
      'Software Installation',
      'Hardware Troubleshooting',
      'User Training'
    ],
    pricing: 'Starting at $1,000/month'
  }
];

const solutions = [
  {
    title: 'Small Business IT',
    description: 'Complete IT solutions for small businesses with limited resources.',
    icon: Smartphone,
    features: ['Basic Infrastructure', 'Cloud Services', 'Security Essentials', 'Support']
  },
  {
    title: 'Enterprise IT',
    description: 'Scalable IT solutions for large organizations with complex requirements.',
    icon: Server,
    features: ['Advanced Infrastructure', 'Enterprise Security', 'High Availability', 'Dedicated Support']
  },
  {
    title: 'Hybrid Cloud',
    description: 'Seamless integration between on-premises and cloud environments.',
    icon: Cloud,
    features: ['Cloud Migration', 'Hybrid Architecture', 'Data Synchronization', 'Cost Optimization']
  },
  {
    title: 'Managed Services',
    description: 'Complete IT management and monitoring for hands-off operation.',
    icon: Settings,
    features: ['24/7 Monitoring', 'Proactive Maintenance', 'Regular Updates', 'Performance Optimization']
  }
];

const benefits = [
  {
    icon: Zap,
    title: 'Improved Performance',
    description: 'Optimized IT infrastructure for faster, more reliable operations.'
  },
  {
    icon: Lock,
    title: 'Enhanced Security',
    description: 'Comprehensive security measures to protect your business data.'
  },
  {
    icon: Globe,
    title: 'Scalability',
    description: 'IT solutions that grow with your business needs.'
  },
  {
    icon: Users,
    title: 'Expert Support',
    description: 'Dedicated IT professionals available when you need them.'
  }
=======
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
  Mail,
  Car
} from 'lucide-react';

const contactInfo = {
  phone: "+1 302 464 0950",
  email: "kleber@ziontechgroup.com",
  address: "364 E Main St STE 1008 Middletown DE 19709"
};

const itServices = [
  {
    id: 1,
    title: 'Cloud Infrastructure & Migration',
    description: 'Complete cloud transformation with AWS, Azure, and GCP expertise. We handle everything from migration to optimization.',
    icon: Cloud,
    category: 'Cloud Services',
    price: 'Starting at $2,500/month',
    features: [
      'Multi-cloud strategy development',
      'Cloud migration planning & execution',
      'Infrastructure as Code (IaC)',
      'Cost optimization & monitoring',
      'Auto-scaling & load balancing',
      'Disaster recovery setup',
      '24/7 cloud monitoring',
      'Security compliance (SOC2, ISO27001)'
    ],
    benefits: [
      'Reduce infrastructure costs by 30-50%',
      'Improve scalability and performance',
      'Enhance security and compliance',
      'Enable remote work capabilities'
    ],
    marketPrice: '$4,000-8,000/month',
    setupTime: '2-4 weeks',
    targetUsers: 'Enterprises, SMBs, Startups'
  },
  {
    id: 2,
    title: 'Cybersecurity Solutions',
    description: 'Comprehensive security solutions to protect your digital assets and infrastructure with enterprise-grade protection.',
    icon: Shield,
    category: 'Cybersecurity',
    price: 'Starting at $2,000/month',
    features: [
      'Security audits & assessments',
      'Penetration testing & vulnerability scanning',
      'Zero-trust architecture implementation',
      'Compliance management (GDPR, HIPAA, SOX)',
      'Threat detection & response',
      'Incident response planning',
      'Security awareness training',
      '24/7 security monitoring'
    ],
    benefits: [
      'Protect against 99.9% of cyber threats',
      'Reduce security incidents by 80%',
      'Ensure compliance with regulations',
      'Lower insurance premiums'
    ],
    marketPrice: '$3,500-7,000/month',
    setupTime: '3-6 weeks',
    targetUsers: 'All industries, Healthcare, Finance, Government'
  },
  {
    id: 3,
    title: 'DevOps & CI/CD Automation',
    description: 'Streamline your development workflow with automated deployment, testing, and monitoring solutions.',
    icon: Settings,
    category: 'DevOps',
    price: 'Starting at $1,800/month',
    features: [
      'CI/CD pipeline setup & optimization',
      'Container orchestration (Kubernetes, Docker)',
      'Infrastructure automation (Terraform, Ansible)',
      'Monitoring & logging solutions',
      'Performance optimization',
      'Disaster recovery automation',
      'Security scanning integration',
      'Team training & best practices'
    ],
    benefits: [
      'Deploy 10x faster with confidence',
      'Reduce deployment errors by 90%',
      'Improve team productivity by 40%',
      'Lower operational costs by 30%'
    ],
    marketPrice: '$3,000-6,000/month',
    setupTime: '2-4 weeks',
    targetUsers: 'Software companies, Tech startups, Enterprises'
  },
  {
    id: 4,
    title: 'Database Management & Optimization',
    description: 'Expert database administration, optimization, and migration services for all major database platforms.',
    icon: Database,
    category: 'Database Services',
    price: 'Starting at $1,500/month',
    features: [
      'Database design & architecture',
      'Performance tuning & optimization',
      'Data migration & consolidation',
      'Backup & recovery solutions',
      'High availability setup',
      'Security hardening',
      'Monitoring & alerting',
      '24/7 database support'
    ],
    benefits: [
      'Improve query performance by 60%',
      'Reduce downtime by 95%',
      'Optimize storage costs by 40%',
      'Ensure data integrity and security'
    ],
    marketPrice: '$2,500-5,000/month',
    setupTime: '1-3 weeks',
    targetUsers: 'E-commerce, SaaS companies, Enterprises'
  },
  {
    id: 5,
    title: 'Network Infrastructure & Security',
    description: 'Design, implement, and maintain secure, high-performance network infrastructure for your organization.',
    icon: Network,
    category: 'Network Services',
    price: 'Starting at $1,200/month',
    features: [
      'Network design & architecture',
      'Firewall configuration & management',
      'VPN setup & remote access',
      'Wireless network optimization',
      'Network monitoring & management',
      'Bandwidth optimization',
      'Security policy implementation',
      '24/7 network support'
    ],
    benefits: [
      'Improve network performance by 50%',
      'Enhance security posture',
      'Reduce network downtime by 90%',
      'Lower operational costs'
    ],
    marketPrice: '$2,000-4,000/month',
    setupTime: '1-2 weeks',
    targetUsers: 'All businesses, Remote teams, Branch offices'
  },
  {
    id: 6,
    title: 'IT Support & Helpdesk Services',
    description: 'Comprehensive IT support services with 24/7 helpdesk, remote assistance, and on-site support.',
    icon: Users,
    category: 'IT Support',
    price: 'Starting at $800/month',
    features: [
      '24/7 helpdesk support',
      'Remote desktop assistance',
      'On-site technical support',
      'Hardware & software troubleshooting',
      'User training & onboarding',
      'IT asset management',
      'Ticket tracking & resolution',
      'SLA compliance monitoring'
    ],
    benefits: [
      'Reduce IT downtime by 70%',
      'Improve user satisfaction by 85%',
      'Lower IT support costs by 40%',
      'Faster issue resolution'
    ],
    marketPrice: '$1,500-3,000/month',
    setupTime: '1 week',
    targetUsers: 'All businesses, Remote teams, SMBs'
  },

  // Advanced IT Services
  {
    id: 7,
    title: 'Quantum Computing Infrastructure',
    description: 'Quantum computing solutions and infrastructure setup for advanced computational needs and research applications.',
    icon: Cpu,
    category: 'Quantum Computing',
    price: 'Starting at $5,000/month',
    features: [
      'Quantum hardware integration',
      'Quantum algorithm development',
      'Quantum software optimization',
      'Quantum security implementation',
      'Hybrid classical-quantum systems',
      'Quantum cloud access',
      'Research collaboration',
      'Training and education'
    ],
    benefits: [
      'Exponential computational power',
      'Advanced problem solving',
      'Future-proof technology',
      'Competitive advantage'
    ],
    marketPrice: '$8,000-15,000/month',
    setupTime: '4-8 weeks',
    targetUsers: 'Research institutions, Financial services, Pharmaceutical companies'
  },
  {
    id: 8,
    title: 'Edge Computing Solutions',
    description: 'Edge computing infrastructure for real-time processing, IoT integration, and low-latency applications.',
    icon: Wifi,
    category: 'Edge Computing',
    price: 'Starting at $2,200/month',
    features: [
      'Edge server deployment',
      'IoT device integration',
      'Real-time data processing',
      'Edge AI implementation',
      '5G network optimization',
      'Latency reduction',
      'Distributed computing',
      'Edge security management'
    ],
    benefits: [
      'Reduce latency by 80%',
      'Improve real-time performance',
      'Lower bandwidth costs',
      'Enhanced data privacy'
    ],
    marketPrice: '$3,500-7,000/month',
    setupTime: '3-6 weeks',
    targetUsers: 'Manufacturing, Healthcare, Autonomous vehicles, IoT companies'
  },
  {
    id: 9,
    title: 'Blockchain Infrastructure & Development',
    description: 'Complete blockchain solutions including smart contracts, DeFi platforms, and enterprise blockchain integration.',
    icon: Lock,
    category: 'Blockchain',
    price: 'Starting at $3,500/month',
    features: [
      'Smart contract development',
      'DeFi platform creation',
      'NFT marketplace development',
      'Blockchain integration',
      'Cryptocurrency wallet development',
      'Token economics design',
      'Security auditing',
      'Compliance implementation'
    ],
    benefits: [
      'Decentralized solutions',
      'Enhanced security',
      'Transparent transactions',
      'Reduced intermediaries'
    ],
    marketPrice: '$5,000-12,000/month',
    setupTime: '6-12 weeks',
    targetUsers: 'Financial services, Supply chain, Healthcare, Gaming'
  },
  {
    id: 10,
    title: 'AI Infrastructure & MLOps',
    description: 'Complete AI infrastructure setup with machine learning pipelines, model deployment, and MLOps automation.',
    icon: Brain,
    category: 'AI Infrastructure',
    price: 'Starting at $2,800/month',
    features: [
      'ML pipeline development',
      'Model training infrastructure',
      'Model deployment & serving',
      'MLOps automation',
      'Data pipeline optimization',
      'Model monitoring & governance',
      'A/B testing frameworks',
      'AI security implementation'
    ],
    benefits: [
      'Faster AI model deployment',
      'Automated ML workflows',
      'Better model performance',
      'Reduced operational overhead'
    ],
    marketPrice: '$4,500-9,000/month',
    setupTime: '4-8 weeks',
    targetUsers: 'AI companies, Data science teams, Enterprises'
  },
  {
    id: 11,
    title: 'IoT Platform & Device Management',
    description: 'Comprehensive IoT solutions including device management, data collection, and analytics platforms.',
    icon: Smartphone,
    category: 'IoT Services',
    price: 'Starting at $1,800/month',
    features: [
      'IoT device integration',
      'Data collection & processing',
      'Device management platform',
      'Real-time monitoring',
      'Predictive maintenance',
      'IoT security implementation',
      'Custom dashboard development',
      'API development & integration'
    ],
    benefits: [
      'Centralized device management',
      'Real-time insights',
      'Predictive maintenance',
      'Improved operational efficiency'
    ],
    marketPrice: '$3,000-6,000/month',
    setupTime: '3-6 weeks',
    targetUsers: 'Manufacturing, Agriculture, Smart cities, Healthcare'
  },
  {
    id: 12,
    title: 'AR/VR Infrastructure & Development',
    description: 'Augmented and virtual reality solutions including infrastructure setup, content creation, and application development.',
    icon: Eye,
    category: 'AR/VR Services',
    price: 'Starting at $2,500/month',
    features: [
      'AR/VR application development',
      '3D content creation',
      'Hardware integration',
      'Performance optimization',
      'Multi-platform deployment',
      'User experience design',
      'Analytics & tracking',
      'Training & support'
    ],
    benefits: [
      'Immersive user experiences',
      'Enhanced training programs',
      'Better customer engagement',
      'Innovative solutions'
    ],
    marketPrice: '$4,000-8,000/month',
    setupTime: '6-12 weeks',
    targetUsers: 'Education, Healthcare, Real estate, Gaming, Training'
  },
  {
    id: 13,
    title: 'Space Technology Infrastructure',
    description: 'Space technology solutions including satellite data processing, space mission support, and astronomical research tools.',
    icon: Rocket,
    category: 'Space Technology',
    price: 'Starting at $4,500/month',
    features: [
      'Satellite data processing',
      'Space mission planning',
      'Orbital mechanics calculations',
      'Space weather monitoring',
      'Research tool development',
      'Data visualization',
      'Mission control systems',
      'Space communication protocols'
    ],
    benefits: [
      'Space data insights',
      'Mission optimization',
      'Research acceleration',
      'Innovation support'
    ],
    marketPrice: '$7,000-15,000/month',
    setupTime: '8-16 weeks',
    targetUsers: 'Space agencies, Research institutions, Satellite companies'
  },
  {
    id: 14,
    title: 'Green IT & Sustainability Solutions',
    description: 'Eco-friendly IT solutions focusing on energy efficiency, carbon footprint reduction, and sustainable technology practices.',
    icon: TreePine,
    category: 'Green IT',
    price: 'Starting at $1,500/month',
    features: [
      'Energy-efficient infrastructure',
      'Carbon footprint monitoring',
      'Renewable energy integration',
      'E-waste management',
      'Green cloud solutions',
      'Sustainability reporting',
      'Environmental compliance',
      'Green procurement'
    ],
    benefits: [
      'Reduce carbon footprint by 50%',
      'Lower energy costs by 30%',
      'Meet sustainability goals',
      'Improve brand reputation'
    ],
    marketPrice: '$2,500-5,000/month',
    setupTime: '2-4 weeks',
    targetUsers: 'All industries, ESG-focused companies, Government'
  },
  {
    id: 15,
    title: 'Autonomous Systems Infrastructure',
    description: 'Infrastructure for autonomous vehicles, drones, and robotic systems with AI integration and safety protocols.',
    icon: Car,
    category: 'Autonomous Systems',
    price: 'Starting at $3,200/month',
    features: [
      'Autonomous vehicle infrastructure',
      'Drone fleet management',
      'Robotic system integration',
      'AI safety protocols',
      'Real-time monitoring',
      'Simulation environments',
      'Regulatory compliance',
      'Performance optimization'
    ],
    benefits: [
      'Advanced automation',
      'Enhanced safety',
      'Operational efficiency',
      'Future-ready technology'
    ],
    marketPrice: '$5,000-10,000/month',
    setupTime: '6-12 weeks',
    targetUsers: 'Automotive, Logistics, Agriculture, Manufacturing'
  }
];

const categories = [
  { name: "All", count: itServices.length },
  { name: "Cloud Services", count: itServices.filter(s => s.category === "Cloud Services").length },
  { name: "Cybersecurity", count: itServices.filter(s => s.category === "Cybersecurity").length },
  { name: "DevOps", count: itServices.filter(s => s.category === "DevOps").length },
  { name: "Database Services", count: itServices.filter(s => s.category === "Database Services").length },
  { name: "Network Services", count: itServices.filter(s => s.category === "Network Services").length },
  { name: "IT Support", count: itServices.filter(s => s.category === "IT Support").length }
>>>>>>> 2e9c29263b568858da4098d8218397d3dc948131
];

export default function ITServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredServices = itServices.filter(service => {
    const matchesCategory = selectedCategory === "All" || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Head>
<<<<<<< HEAD
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including infrastructure management, cloud solutions, cybersecurity, and IT support for businesses of all sizes." />
        <meta name="keywords" content="IT services, infrastructure management, cloud solutions, cybersecurity, IT support, managed services" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Navigation */}
        <nav className="relative z-10 px-6 py-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <span className="text-white text-xl font-bold">Zion Tech Group</span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/about" className="text-gray-300 hover:text-white transition-colors">About</Link>
              <Link href="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link>
              <Link href="/it-services" className="text-white font-semibold">IT Services</Link>
              <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="px-6 py-20">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                IT
                <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Services
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Comprehensive IT solutions to keep your business running smoothly. 
                From infrastructure management to cybersecurity, we've got you covered.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="#services" className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors">
                  Explore Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-colors">
                  Get Started
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* IT Services Grid */}
        <section id="services" className="px-6 py-20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our IT Services</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Complete IT solutions designed to support your business operations and growth.
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                  className="bg-white/10 backdrop-blur-md rounded-xl p-8 hover:bg-white/20 transition-all duration-300"
                >
                  <service.icon className="h-12 w-12 text-blue-400 mb-6" />
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="text-blue-400 font-semibold mb-4">{service.pricing}</div>
                  <Link href="/contact" className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </motion.div>
              ))}
=======
        <title>IT Services - Zion Tech Group | 85+ Comprehensive IT Solutions</title>
        <meta name="description" content="Comprehensive IT services including cloud infrastructure, cybersecurity, DevOps, database management, and IT support. 85+ services with competitive pricing and 24/7 support." />
        <meta name="keywords" content="IT services, cloud migration, cybersecurity, DevOps, database management, IT support, infrastructure" />
        <meta property="og:title" content="IT Services - Zion Tech Group" />
        <meta property="og:description" content="85+ comprehensive IT services with competitive pricing and 24/7 support. Transform your infrastructure with our expert solutions." />
        <meta property="og:url" content="https://ziontechgroup.com/it-services" />
        <meta property="og:type" content="website" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-900 via-blue-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                IT Services & Solutions
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                85+ comprehensive IT services from cloud infrastructure to cybersecurity, 
                quantum computing, zero-trust architecture, and enterprise digital transformation. 
                Expert implementation with 24/7 support and competitive pricing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Get Free Assessment
                </Link>
                <Link href="#services" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                  View Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Info Bar */}
        <section className="bg-green-900 text-white py-4">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm">
              <div className="flex items-center space-x-6 mb-2 md:mb-0">
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  <a href="tel:+13024640950" className="hover:text-green-300">{contactInfo.phone}</a>
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  <a href="mailto:kleber@ziontechgroup.com" className="hover:text-green-300">{contactInfo.email}</a>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-green-200">24/7 IT Support Available</span>
                <div className="flex space-x-2">
                  <a href="#" className="hover:text-green-300"><Globe className="w-4 h-4" /></a>
                  <a href="#" className="hover:text-green-300"><Mail className="w-4 h-4" /></a>
                </div>
              </div>
>>>>>>> 2e9c29263b568858da4098d8218397d3dc948131
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Solutions */}
        <section className="px-6 py-20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">IT Solutions</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Tailored IT solutions for businesses of all sizes and industries.
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
                  className="bg-white/10 backdrop-blur-md rounded-xl p-6 hover:bg-white/20 transition-all duration-300"
                >
                  <solution.icon className="h-12 w-12 text-blue-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">{solution.title}</h3>
                  <p className="text-gray-300 mb-4">{solution.description}</p>
                  <ul className="space-y-2">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-3 w-3 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
=======
        {/* Search and Filter Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="mb-8">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search IT services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 justify-center">
                {categories.map((category) => (
                  <button
                    key={category.name}
                    onClick={() => setSelectedCategory(category.name)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      selectedCategory === category.name
                        ? 'bg-green-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>
>>>>>>> 2e9c29263b568858da4098d8218397d3dc948131
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Benefits */}
        <section className="px-6 py-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Why Choose Our IT Services?</h2>
                <p className="text-lg text-gray-300 mb-8">
                  Our IT services are designed to provide reliable, secure, and scalable solutions 
                  that support your business objectives and growth.
                </p>
                <div className="space-y-6">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <benefit.icon className="h-6 w-6 text-blue-400 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                        <p className="text-gray-300">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8"
              >
                <h3 className="text-2xl font-bold text-white mb-6">Ready to Get Started?</h3>
                <p className="text-blue-100 mb-6">
                  Let's discuss your IT needs and create a customized solution that works for your business. 
                  Our experts are ready to help you succeed.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Award className="h-5 w-5 text-blue-200" />
                    <span className="text-blue-100">10+ Years IT Experience</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="h-5 w-5 text-blue-200" />
                    <span className="text-blue-100">100+ Successful Projects</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Star className="h-5 w-5 text-blue-200" />
                    <span className="text-blue-100">99% Uptime Guarantee</span>
                  </div>
                </div>
                <Link href="/contact" className="mt-6 inline-flex items-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                  Start Your IT Journey
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </motion.div>
=======
        {/* Services Grid */}
        <section id="services" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <motion.div
                    key={service.id}
                    className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 group"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-green-600 group-hover:text-blue-600 transition-colors">
                        <IconComponent className="w-8 h-8" />
                      </div>
                      <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded-full">
                        {service.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="mb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-lg font-bold text-green-600">
                          {service.price}
                        </span>
                        <span className="text-sm text-gray-500 line-through">
                          {service.marketPrice}
                        </span>
                      </div>
                      <div className="text-xs text-green-600 font-medium">
                        Save up to 40% vs market rate
                      </div>
                    </div>
                    
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
                        {service.benefits.slice(0, 2).map((benefit, idx) => (
                          <span key={idx} className="text-xs bg-green-50 text-green-700 px-2 py-1 rounded">
                            {benefit}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                      <span>Setup: {service.setupTime}</span>
                      <span>Target: {service.targetUsers.split(',')[0]}</span>
                    </div>
                    
                    <div className="flex gap-2">
                      <Link
                        href="/contact"
                        className="flex-1 bg-green-600 hover:bg-green-700 text-white text-center py-2 px-4 rounded-lg text-sm font-semibold transition-colors"
                      >
                        Get Quote
                      </Link>
                      <Link
                        href="/contact"
                        className="px-4 py-2 border border-green-600 text-green-600 hover:bg-green-50 rounded-lg text-sm font-semibold transition-colors"
                      >
                        Learn More
                      </Link>
                    </div>
                  </motion.div>
                );
              })}
>>>>>>> 2e9c29263b568858da4098d8218397d3dc948131
            </div>
          </div>
        </section>

        {/* CTA Section */}
<<<<<<< HEAD
        <section className="px-6 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Optimize Your IT?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Let's discuss how our IT services can improve your business operations and security.
              </p>
              <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="px-6 py-12 border-t border-gray-800">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">Z</span>
                  </div>
                  <span className="text-white text-xl font-bold">Zion Tech Group</span>
                </div>
                <p className="text-gray-400">
                  Transforming businesses with cutting-edge technology solutions.
                </p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-4">Services</h3>
                <ul className="space-y-2">
                  <li><Link href="/ai-services" className="text-gray-400 hover:text-white">AI Services</Link></li>
                  <li><Link href="/it-services" className="text-white font-semibold">IT Services</Link></li>
                  <li><Link href="/micro-saas" className="text-gray-400 hover:text-white">Micro SaaS</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-4">Company</h3>
                <ul className="space-y-2">
                  <li><Link href="/about" className="text-gray-400 hover:text-white">About</Link></li>
                  <li><Link href="/blog" className="text-gray-400 hover:text-white">Blog</Link></li>
                  <li><Link href="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-4">Contact</h3>
                <p className="text-gray-400">info@ziontechgroup.com</p>
                <p className="text-gray-400">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center">
              <p className="text-gray-400">&copy; 2024 Zion Tech Group. All rights reserved.</p>
            </div>
          </div>
        </footer>
=======
        <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Modernize Your IT Infrastructure?</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Let our IT experts help you build a robust, secure, and scalable infrastructure that grows with your business.
                Get a free assessment and custom solution today.
              </p>
              <div className="mb-8">
                <p className="text-lg text-green-100 mb-2">
                  📞 <strong>Call us:</strong> {contactInfo.phone}
                </p>
                <p className="text-lg text-green-100 mb-2">
                  📧 <strong>Email us:</strong> {contactInfo.email}
                </p>
                <p className="text-lg text-green-100">
                  📍 <strong>Visit us:</strong> {contactInfo.address}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-white text-green-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Get Free IT Assessment
                </Link>
                <Link href="/micro-saas" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-green-600 transition-all duration-300 font-semibold">
                  Explore Micro SaaS
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
>>>>>>> 2e9c29263b568858da4098d8218397d3dc948131
      </div>
    </>
  );
}