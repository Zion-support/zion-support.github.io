import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Layout from './components/Layout';
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
  Phone,
  MapPin,
  Mail
} from 'lucide-react';

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
    description: 'Comprehensive security services including penetration testing, compliance management, and incident response.',
    icon: Shield,
    category: 'Security',
    price: 'Starting at $1,800/month',
    features: [
      'Security audits & assessments',
      'Penetration testing',
      'Vulnerability management',
      'Compliance management (GDPR, HIPAA, SOX)',
      'Incident response planning',
      'Security awareness training',
      'Firewall & endpoint protection',
      '24/7 security monitoring'
    ],
    benefits: [
      'Protect against 99.9% of cyber threats',
      'Ensure regulatory compliance',
      'Reduce security incidents by 80%',
      'Lower insurance premiums'
    ],
    marketPrice: '$3,000-6,000/month',
    setupTime: '1-2 weeks',
    targetUsers: 'Healthcare, Finance, E-commerce, Government'
  },
  {
    id: 3,
    title: 'Quantum Computing Infrastructure',
    description: 'Next-generation quantum computing solutions for complex problem-solving and advanced cryptography.',
    icon: Cpu,
    category: 'Quantum Computing',
    price: 'Starting at $15,000/month',
    features: [
      'Quantum algorithm development',
      'Quantum hardware integration',
      'Quantum software development',
      'Quantum cryptography implementation',
      'Quantum simulation services',
      'Hybrid classical-quantum systems',
      'Quantum machine learning',
      'Quantum optimization solutions'
    ],
    benefits: [
      'Solve previously intractable problems',
      'Exponential computational advantages',
      'Future-proof security solutions',
      'Breakthrough optimization results'
    ],
    marketPrice: '$20,000-50,000/month',
    setupTime: '12-24 weeks',
    targetUsers: 'Research, Finance, Pharmaceuticals, Defense'
  },
  {
    id: 4,
    title: 'Edge Computing Solutions',
    description: 'Distributed computing infrastructure for real-time processing and reduced latency applications.',
    icon: Network,
    category: 'Edge Computing',
    price: 'Starting at $3,200/month',
    features: [
      'Edge server deployment',
      'Real-time data processing',
      'IoT device management',
      'Content delivery optimization',
      'Latency reduction strategies',
      'Edge security implementation',
      '5G network integration',
      'Distributed analytics'
    ],
    benefits: [
      'Reduce latency by 80%',
      'Improve real-time performance',
      'Enable IoT at scale',
      'Optimize bandwidth usage'
    ],
    marketPrice: '$4,500-9,000/month',
    setupTime: '3-6 weeks',
    targetUsers: 'Manufacturing, Healthcare, Automotive, Smart Cities'
  },
  {
    id: 5,
    title: 'Blockchain & Web3 Solutions',
    description: 'Comprehensive blockchain development including smart contracts, DeFi, NFTs, and decentralized applications.',
    icon: Lock,
    category: 'Blockchain',
    price: 'Starting at $4,500/month',
    features: [
      'Smart contract development',
      'DeFi protocol creation',
      'NFT marketplace development',
      'DApp development',
      'Token economics design',
      'Blockchain integration',
      'Cryptocurrency wallet development',
      'Consensus mechanism implementation'
    ],
    benefits: [
      'Enable decentralized operations',
      'Increase transparency and trust',
      'Reduce transaction costs',
      'Create new business models'
    ],
    marketPrice: '$6,000-15,000/month',
    setupTime: '4-12 weeks',
    targetUsers: 'Finance, Gaming, Supply Chain, Real Estate'
  },
  {
    id: 6,
    title: 'IoT & Smart Device Management',
    description: 'Complete IoT solutions including device connectivity, data processing, and smart system integration.',
    icon: Globe,
    category: 'IoT Solutions',
    price: 'Starting at $2,800/month',
    features: [
      'IoT device development',
      'Sensor network deployment',
      'Real-time data collection',
      'Device management platform',
      'Predictive maintenance',
      'Remote monitoring systems',
      'IoT security implementation',
      'Integration with existing systems'
    ],
    benefits: [
      'Enable smart operations',
      'Improve efficiency by 40%',
      'Reduce maintenance costs by 50%',
      'Enable predictive insights'
    ],
    marketPrice: '$4,000-8,000/month',
    setupTime: '4-8 weeks',
    targetUsers: 'Manufacturing, Agriculture, Healthcare, Smart Cities'
  },
  {
    id: 7,
    title: 'Zero-Trust Security Architecture',
    description: 'Advanced zero-trust security model implementation for comprehensive network and data protection.',
    icon: Shield,
    category: 'Zero-Trust Security',
    price: 'Starting at $5,500/month',
    features: [
      'Identity verification systems',
      'Micro-segmentation implementation',
      'Continuous monitoring',
      'Privileged access management',
      'Multi-factor authentication',
      'Device trust verification',
      'Data encryption at rest and in transit',
      'Security policy automation'
    ],
    benefits: [
      'Eliminate security perimeters',
      'Prevent lateral movement attacks',
      'Ensure continuous verification',
      'Comply with strict regulations'
    ],
    marketPrice: '$7,500-15,000/month',
    setupTime: '6-12 weeks',
    targetUsers: 'Government, Finance, Healthcare, Critical Infrastructure'
  },
  {
    id: 8,
    title: 'AI Infrastructure & MLOps',
    description: 'Complete AI infrastructure setup including model training, deployment, and monitoring at scale.',
    icon: Brain,
    category: 'AI Infrastructure',
    price: 'Starting at $6,500/month',
    features: [
      'AI model training infrastructure',
      'MLOps pipeline development',
      'Model versioning & management',
      'Automated model deployment',
      'A/B testing frameworks',
      'Model monitoring & alerting',
      'GPU cluster management',
      'Data pipeline automation'
    ],
    benefits: [
      'Scale AI operations efficiently',
      'Reduce model deployment time by 70%',
      'Improve model performance monitoring',
      'Enable rapid AI experimentation'
    ],
    marketPrice: '$8,500-18,000/month',
    setupTime: '6-12 weeks',
    targetUsers: 'Tech Companies, Research, Finance, Healthcare'
  },
  {
    id: 9,
    title: 'Disaster Recovery & Business Continuity',
    description: 'Comprehensive disaster recovery solutions ensuring business continuity and data protection.',
    icon: HardDrive,
    category: 'Disaster Recovery',
    price: 'Starting at $2,200/month',
    features: [
      'Backup strategy development',
      'Disaster recovery planning',
      'Data replication systems',
      'Failover automation',
      'Recovery time optimization',
      'Business continuity testing',
      'Cloud backup solutions',
      'Recovery point objectives (RPO)'
    ],
    benefits: [
      'Minimize downtime to minutes',
      'Protect critical business data',
      'Ensure regulatory compliance',
      'Reduce recovery costs by 60%'
    ],
    marketPrice: '$3,500-7,000/month',
    setupTime: '2-4 weeks',
    targetUsers: 'Enterprises, Healthcare, Finance, Government'
  },
  {
    id: 10,
    title: 'Network Infrastructure & SD-WAN',
    description: 'Advanced networking solutions including SD-WAN, network optimization, and connectivity management.',
    icon: Network,
    category: 'Networking',
    price: 'Starting at $1,900/month',
    features: [
      'SD-WAN implementation',
      'Network performance optimization',
      'Bandwidth management',
      'Quality of Service (QoS)',
      'Network monitoring & analytics',
      'VPN solutions',
      'Load balancing',
      'Network security integration'
    ],
    benefits: [
      'Improve network performance by 50%',
      'Reduce connectivity costs by 40%',
      'Enable flexible network management',
      'Enhance security and reliability'
    ],
    marketPrice: '$3,000-6,000/month',
    setupTime: '2-4 weeks',
    targetUsers: 'Enterprises, Remote Work, Branch Offices, Cloud Migration'
  },
  {
    id: 11,
    title: 'Database & Data Management',
    description: 'Comprehensive database solutions including design, optimization, migration, and management services.',
    icon: Database,
    category: 'Data Management',
    price: 'Starting at $2,100/month',
    features: [
      'Database design & architecture',
      'Performance tuning & optimization',
      'Database migration services',
      'Backup & recovery solutions',
      'Data warehousing',
      'ETL/ELT pipeline development',
      'Database security implementation',
      '24/7 database monitoring'
    ],
    benefits: [
      'Improve database performance by 60%',
      'Reduce data management costs by 35%',
      'Ensure data integrity and security',
      'Enable scalable data operations'
    ],
    marketPrice: '$3,500-7,500/month',
    setupTime: '2-6 weeks',
    targetUsers: 'Enterprises, E-commerce, Analytics, Healthcare'
  },
  {
    id: 12,
    title: 'IT Consulting & Digital Transformation',
    description: 'Strategic IT consulting services for digital transformation, technology assessment, and implementation planning.',
    icon: Settings,
    category: 'IT Consulting',
    price: 'Starting at $3,500/month',
    features: [
      'Technology strategy development',
      'Digital transformation planning',
      'IT infrastructure assessment',
      'Technology roadmap creation',
      'Vendor evaluation & selection',
      'Change management support',
      'IT governance implementation',
      'Performance optimization consulting'
    ],
    benefits: [
      'Align technology with business goals',
      'Reduce IT costs by 25%',
      'Improve operational efficiency',
      'Enable digital innovation'
    ],
    marketPrice: '$5,000-12,000/month',
    setupTime: '2-8 weeks',
    targetUsers: 'Enterprises, SMBs, Startups, Government'
  }
];

const categories = [
  { name: "All", count: itServices.length },
  { name: "Cloud Services", count: itServices.filter(s => s.category === "Cloud Services").length },
  { name: "Security", count: itServices.filter(s => s.category === "Security").length },
  { name: "Quantum Computing", count: itServices.filter(s => s.category === "Quantum Computing").length },
  { name: "Edge Computing", count: itServices.filter(s => s.category === "Edge Computing").length },
  { name: "Blockchain", count: itServices.filter(s => s.category === "Blockchain").length },
  { name: "IoT Solutions", count: itServices.filter(s => s.category === "IoT Solutions").length },
  { name: "Zero-Trust Security", count: itServices.filter(s => s.category === "Zero-Trust Security").length },
  { name: "AI Infrastructure", count: itServices.filter(s => s.category === "AI Infrastructure").length },
  { name: "Disaster Recovery", count: itServices.filter(s => s.category === "Disaster Recovery").length },
  { name: "Networking", count: itServices.filter(s => s.category === "Networking").length },
  { name: "Data Management", count: itServices.filter(s => s.category === "Data Management").length },
  { name: "IT Consulting", count: itServices.filter(s => s.category === "IT Consulting").length }
];

export default function ITServicesPage() {
  const [selectedCategory, setSelectedCategory] = React.useState("All");
  const [searchTerm, setSearchTerm] = React.useState("");

  const filteredServices = itServices.filter(service => {
    const matchesCategory = selectedCategory === "All" || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <Layout
      title="IT Services - Zion Tech Group"
      description="Comprehensive IT services including cloud solutions, cybersecurity, DevOps, and more. Expert technology services to keep your business secure, scalable, and efficient."
      keywords="IT services, cloud computing, cybersecurity, DevOps, database management, network infrastructure, IT support"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-900 via-blue-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <motion.h1 
                className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Comprehensive IT Services
              </motion.h1>
              <motion.p 
                className="text-xl md:text-2xl mb-8 text-gray-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                End-to-end IT solutions from cloud infrastructure to cybersecurity, designed to keep your business 
                secure, scalable, and efficient. Expert technology services with proven results.
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row justify-center gap-4 mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Link href="/contact" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                  Get Free IT Assessment
                </Link>
                <a href="tel:+13024640950" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-900 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                  Call +1 302 464 0950
                </a>
              </motion.div>

              {/* Stats */}
              <motion.div 
                className="grid md:grid-cols-4 gap-8 mt-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400">70+</div>
                  <div className="text-gray-300">IT Services</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400">99.9%</div>
                  <div className="text-gray-300">Uptime Guarantee</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400">24/7</div>
                  <div className="text-gray-300">Support Available</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400">500+</div>
                  <div className="text-gray-300">Projects Completed</div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Search Bar */}
              <div className="relative mb-8">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search IT services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-lg"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2 justify-center">
                {categories.map((category) => (
                  <button
                    key={category.name}
                    onClick={() => setSelectedCategory(category.name)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
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
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="p-8">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                          <service.icon className="w-6 h-6 text-green-600" />
                        </div>
                        <div>
                          <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded-full">
                            {service.category}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center text-yellow-500">
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                      </div>
                    </div>

                    {/* Title and Description */}
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {service.features.slice(0, 5).map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                        {service.features.length > 5 && (
                          <li className="text-sm text-green-600 font-medium">
                            +{service.features.length - 5} more features
                          </li>
                        )}
                      </ul>
                    </div>

                    {/* Benefits */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">Proven Benefits:</h4>
                      <ul className="space-y-1">
                        {service.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center text-sm text-green-600">
                            <TrendingUp className="w-4 h-4 mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Pricing and Info */}
                    <div className="border-t border-gray-200 pt-4">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <div className="text-2xl font-bold text-green-600">{service.price}</div>
                          <div className="text-sm text-gray-500">vs market: {service.marketPrice}</div>
                        </div>
                        <div className="text-right text-sm text-gray-500">
                          <div>Setup: {service.setupTime}</div>
                          <div>Target: {service.targetUsers}</div>
                        </div>
                      </div>

                      <div className="flex space-x-2">
                        <Link 
                          href="/contact" 
                          className="flex-1 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-semibold text-center transition-colors"
                        >
                          Get Started
                        </Link>
                        <Link 
                          href={`/contact?service=${encodeURIComponent(service.title)}`} 
                          className="flex-1 bg-transparent border border-green-600 text-green-600 hover:bg-green-50 px-4 py-2 rounded-lg text-sm font-semibold text-center transition-colors"
                        >
                          Learn More
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {filteredServices.length === 0 && (
              <div className="text-center py-12">
                <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No services found</h3>
                <p className="text-gray-600">Try adjusting your search or filter criteria</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-green-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-4">Ready to Transform Your IT Infrastructure?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Get started with our expert IT services and discover how we can optimize your technology stack.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                Get Free IT Assessment
              </Link>
              <a href="tel:+13024640950" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                Call +1 302 464 0950
              </a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}