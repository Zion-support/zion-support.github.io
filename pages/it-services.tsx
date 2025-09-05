import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
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
  // NEW ADVANCED IT SERVICES - 2025 INNOVATIONS
  {
    id: 13,
    title: 'Quantum Security Infrastructure',
    description: 'Next-generation quantum-resistant security infrastructure with post-quantum cryptography and quantum key distribution.',
    icon: Shield,
    category: 'Quantum Security',
    price: 'Starting at $4,200/month',
    features: [
      'Post-quantum cryptography implementation',
      'Quantum key distribution (QKD)',
      'Quantum random number generation',
      'Quantum-resistant encryption',
      'Hybrid security architectures',
      'Quantum threat assessment',
      'Migration planning & execution',
      'Compliance & certification support'
    ],
    benefits: [
      'Future-proof security against quantum threats',
      'Unbreakable encryption with QKD',
      'Enhanced data protection',
      'Regulatory compliance assurance'
    ],
    marketPrice: '$6,500-15,000/month',
    setupTime: '8-16 weeks',
    targetUsers: 'Government agencies, Financial institutions, Healthcare, Defense contractors'
  },
  {
    id: 14,
    title: 'Edge AI Computing Platform',
    description: 'Advanced edge computing platform with AI processing capabilities for real-time decision making and ultra-low latency applications.',
    icon: Cpu,
    category: 'Edge AI',
    price: 'Starting at $3,200/month',
    features: [
      'Edge AI model deployment',
      'Real-time inference processing',
      'Distributed AI architecture',
      'Edge device management',
      'Bandwidth optimization',
      'Offline AI capabilities',
      'Edge-to-cloud synchronization',
      'Performance monitoring'
    ],
    benefits: [
      'Ultra-low latency AI processing',
      'Reduced bandwidth requirements',
      'Offline AI capabilities',
      'Improved user experience'
    ],
    marketPrice: '$5,000-10,000/month',
    setupTime: '6-12 weeks',
    targetUsers: 'IoT companies, Manufacturing, Smart cities, Autonomous vehicles'
  },
  {
    id: 15,
    title: '5G Network Infrastructure',
    description: 'Complete 5G network infrastructure setup with ultra-high-speed connectivity, low latency, and massive IoT support.',
    icon: Wifi,
    category: '5G Networks',
    price: 'Starting at $5,500/month',
    features: [
      '5G network design & deployment',
      'Ultra-high-speed connectivity',
      'Low latency optimization',
      'Massive IoT support',
      'Network slicing implementation',
      'Edge computing integration',
      'Security & compliance',
      'Performance monitoring'
    ],
    benefits: [
      '10x faster data speeds',
      'Ultra-low latency (1ms)',
      'Support for massive IoT',
      'Enhanced mobile experiences'
    ],
    marketPrice: '$8,500-20,000/month',
    setupTime: '8-16 weeks',
    targetUsers: 'Telecommunications, Smart cities, Manufacturing, Healthcare'
  },
  {
    id: 16,
    title: 'Digital Twin Infrastructure',
    description: 'Digital twin platform infrastructure for real-time monitoring, simulation, and optimization of physical assets and systems.',
    icon: Monitor,
    category: 'Digital Twin',
    price: 'Starting at $3,800/month',
    features: [
      'Digital twin creation & management',
      'Real-time asset monitoring',
      'Simulation & modeling capabilities',
      'IoT data integration',
      'Predictive analytics',
      'Performance optimization',
      'Lifecycle management',
      'API development'
    ],
    benefits: [
      'Real-time asset insights',
      'Predictive maintenance',
      'Performance optimization',
      'Reduced operational costs'
    ],
    marketPrice: '$6,000-15,000/month',
    setupTime: '8-16 weeks',
    targetUsers: 'Manufacturing, Energy companies, Smart buildings, Transportation'
  },
  {
    id: 17,
    title: 'Zero-Trust Security Architecture',
    description: 'Comprehensive zero-trust security architecture implementation with identity verification, micro-segmentation, and continuous monitoring.',
    icon: Lock,
    category: 'Zero-Trust Security',
    price: 'Starting at $2,800/month',
    features: [
      'Identity & access management',
      'Micro-segmentation implementation',
      'Continuous security monitoring',
      'Multi-factor authentication',
      'Privileged access management',
      'Network segmentation',
      'Security policy automation',
      'Threat detection & response'
    ],
    benefits: [
      'Enhanced security posture',
      'Reduced attack surface',
      'Continuous verification',
      'Compliance assurance'
    ],
    marketPrice: '$4,500-9,000/month',
    setupTime: '6-12 weeks',
    targetUsers: 'Enterprises, Government agencies, Healthcare, Financial services'
  },
  {
    id: 18,
    title: 'Hybrid Cloud Management Platform',
    description: 'Advanced hybrid cloud management platform with multi-cloud orchestration, cost optimization, and security management.',
    icon: Cloud,
    category: 'Hybrid Cloud',
    price: 'Starting at $2,500/month',
    features: [
      'Multi-cloud orchestration',
      'Cost optimization & monitoring',
      'Security & compliance management',
      'Workload migration & balancing',
      'Disaster recovery automation',
      'Performance monitoring',
      'Resource optimization',
      'Governance & policy management'
    ],
    benefits: [
      'Optimized cloud costs',
      'Enhanced security',
      'Improved performance',
      'Simplified management'
    ],
    marketPrice: '$4,000-8,000/month',
    setupTime: '4-8 weeks',
    targetUsers: 'Enterprises, Multi-cloud organizations, Government agencies'
  },
  {
    id: 19,
    title: 'AI-Powered IT Operations',
    description: 'Intelligent IT operations platform with AI-driven automation, predictive maintenance, and self-healing infrastructure.',
    icon: Settings,
    category: 'AIOps',
    price: 'Starting at $2,200/month',
    features: [
      'AI-driven incident management',
      'Predictive maintenance',
      'Automated root cause analysis',
      'Self-healing infrastructure',
      'Intelligent alerting',
      'Performance optimization',
      'Capacity planning',
      'Anomaly detection'
    ],
    benefits: [
      'Reduced downtime by 70%',
      'Faster incident resolution',
      'Proactive maintenance',
      'Improved system reliability'
    ],
    marketPrice: '$3,500-7,000/month',
    setupTime: '4-8 weeks',
    targetUsers: 'Enterprises, IT service providers, Cloud companies'
  },
  {
    id: 20,
    title: 'Quantum Computing Cloud Platform',
    description: 'Quantum computing cloud platform with access to quantum processors, quantum algorithms, and hybrid classical-quantum computing.',
    icon: Cpu,
    category: 'Quantum Cloud',
    price: 'Starting at $4,500/month',
    features: [
      'Quantum processor access',
      'Quantum algorithm development',
      'Hybrid classical-quantum computing',
      'Quantum simulation capabilities',
      'Quantum software development',
      'Research collaboration tools',
      'Performance monitoring',
      'Training & education'
    ],
    benefits: [
      'Access to cutting-edge quantum technology',
      'Quantum advantage for specific problems',
      'Research collaboration opportunities',
      'Future-proof computing solutions'
    ],
    marketPrice: '$7,000-18,000/month',
    setupTime: '8-16 weeks',
    targetUsers: 'Research institutions, Tech companies, Financial services, Government'
  },
  {
    id: 21,
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
            </div>
          </div>
        </section>

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
            </div>
          </div>
        </section>

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
            </div>
          </div>
        </section>

        {/* CTA Section */}
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
      </div>
    </>
  );
}