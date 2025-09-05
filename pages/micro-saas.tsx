import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
<<<<<<< HEAD
import { Cloud, Zap, Shield, Users, BarChart3, CheckCircle, ArrowRight, Clock, Star, DollarSign, Award, Globe, Lock, Cpu, Bot, FileText, Image, Video, Mic, Code, Settings, Monitor, Smartphone, Server, Network, Database } from 'lucide-react';

const microSaaSProducts = [
  {
    id: 'ai-content-generator',
    title: 'AI Content Generator',
    description: 'Automated content creation using advanced AI for blogs, social media, and marketing materials',
    icon: FileText,
    features: ['Natural Language Processing', 'Multi-language Support', 'SEO Optimization', 'Content Templates'],
    pricing: 'Starting at $29/month',
    category: 'Content & Marketing'
  },
  {
    id: 'smart-analytics',
    title: 'Smart Analytics Dashboard',
    description: 'Real-time business intelligence with AI-powered insights and predictive analytics',
    icon: BarChart3,
    features: ['Real-time Data', 'Predictive Analytics', 'Custom Reports', 'API Integration'],
    pricing: 'Starting at $49/month',
    category: 'Analytics & BI'
  },
  {
    id: 'workflow-automation',
    title: 'Workflow Automation',
    description: 'Streamline business processes with intelligent automation and workflow management',
    icon: Zap,
    features: ['Process Automation', 'Integration Hub', 'Custom Triggers', 'Performance Monitoring'],
    pricing: 'Starting at $39/month',
    category: 'Automation'
  },
  {
    id: 'security-monitor',
    title: 'Security Monitor',
    description: 'Advanced cybersecurity monitoring with real-time threat detection and response',
=======
import Layout from './components/Layout';
import { 
  Cloud, 
  Zap, 
  Shield, 
  Users, 
  BarChart3, 
  CheckCircle, 
  ArrowRight, 
  Clock, 
  Star, 
  DollarSign, 
  Award, 
  Globe, 
  Lock, 
  Cpu, 
  Bot, 
  FileText, 
  Video, 
  Mic, 
  Code, 
  Settings, 
  Monitor, 
  Smartphone, 
  Server, 
  Network, 
  Car, 
  Rocket, 
  Heart, 
  Building, 
  Sprout, 
  Mail, 
  MessageSquare, 
  Search, 
  Eye, 
  Target, 
  Brain, 
  TrendingUp, 
  Package, 
  Calendar, 
  BookOpen, 
  ShoppingCart, 
  Home, 
  Trash2, 
  Camera, 
  HardDrive,
  Database,
  Phone,
  MapPin
} from 'lucide-react';

const microSaaSServices = [
  {
    id: 1,
    title: "AI-Powered Analytics Dashboard",
    description: "Real-time business intelligence with predictive analytics and automated reporting for data-driven decisions.",
    icon: BarChart3,
    category: "Analytics & BI",
    price: "$299/month",
    features: [
      "Real-time data visualization",
      "Predictive analytics engine",
      "Custom report generation",
      "API integrations",
      "Mobile-responsive design",
      "White-label options"
    ],
    benefits: [
      "Increase decision speed by 40%",
      "Reduce manual reporting by 80%",
      "Improve data accuracy by 95%"
    ],
    marketPrice: "$400-600/month",
    targetUsers: "SMBs, Enterprises, Agencies",
    setupTime: "1-2 weeks"
  },
  {
    id: 2,
    title: "Smart Document Processing",
    description: "Automated document extraction, classification, and data entry using advanced AI and OCR technology.",
    icon: FileText,
    category: "Productivity",
    price: "$199/month",
    features: [
      "OCR technology with 99% accuracy",
      "Smart document classification",
      "Automated data extraction",
      "Workflow automation",
      "Multi-format support (PDF, images, scans)",
      "Integration with 50+ apps"
    ],
    benefits: [
      "Reduce data entry time by 90%",
      "Eliminate manual errors",
      "Process 1000+ documents/hour"
    ],
    marketPrice: "$300-500/month",
    targetUsers: "Legal, Finance, Healthcare, Real Estate",
    setupTime: "1-2 weeks"
  },
  {
    id: 3,
    title: "Quantum-Secure Communication Platform",
    description: "Next-generation encrypted communication using quantum key distribution for ultra-secure messaging and file sharing.",
>>>>>>> e7e8983740868b7305b21501d9fc4e7727e1186f
    icon: Shield,
    features: ['Threat Detection', 'Real-time Alerts', 'Compliance Monitoring', 'Incident Response'],
    pricing: 'Starting at $79/month',
    category: 'Security'
  },
  {
<<<<<<< HEAD
    id: 'team-collaboration',
    title: 'Team Collaboration Hub',
    description: 'Enhanced team productivity with AI-powered collaboration tools and project management',
    icon: Users,
    features: ['Project Management', 'Team Chat', 'File Sharing', 'Task Automation'],
    pricing: 'Starting at $19/month',
    category: 'Productivity'
  },
  {
    id: 'cloud-optimizer',
    title: 'Cloud Cost Optimizer',
    description: 'Intelligent cloud resource management to reduce costs and improve performance',
    icon: Cloud,
    features: ['Cost Analysis', 'Resource Optimization', 'Usage Monitoring', 'Auto-scaling'],
    pricing: 'Starting at $59/month',
    category: 'Cloud Management'
  }
];

export default function MicroSAASPage() {
  return (
    <>
      <Head>
        <title>Micro SaaS Solutions - Zion Tech Group</title>
        <meta name="description" content="Discover our innovative micro SaaS solutions designed to solve specific business challenges with AI-powered tools and automation." />
        <meta name="keywords" content="micro SaaS, software solutions, business automation, AI tools, productivity software" />
      </Head>

=======
    id: 4,
    title: "AI-Powered Supply Chain Optimizer",
    description: "Intelligent supply chain management with predictive analytics, demand forecasting, and automated optimization.",
    icon: Package,
    category: "Supply Chain",
    price: "$449/month",
    features: [
      "Demand forecasting AI",
      "Inventory optimization",
      "Supplier risk assessment",
      "Route optimization",
      "Real-time tracking",
      "Sustainability metrics"
    ],
    benefits: [
      "Reduce inventory costs by 25%",
      "Improve delivery times by 30%",
      "Minimize supply chain disruptions",
      "Enhance sustainability"
    ],
    marketPrice: "$600-900/month",
    targetUsers: "Manufacturing, Retail, Logistics, E-commerce",
    setupTime: "2-4 weeks"
  },
  {
    id: 5,
    title: "Neural Interface Development Kit",
    description: "Cutting-edge brain-computer interface platform for accessibility, gaming, and medical applications.",
    icon: Brain,
    category: "Emerging Tech",
    price: "$1,299/month",
    features: [
      "EEG signal processing",
      "Machine learning algorithms",
      "Real-time neural feedback",
      "Accessibility tools",
      "Gaming integration",
      "Medical monitoring"
    ],
    benefits: [
      "Enable accessibility solutions",
      "Revolutionize gaming experiences",
      "Advance medical research",
      "Create new interaction paradigms"
    ],
    marketPrice: "$1,500-2,500/month",
    targetUsers: "Healthcare, Gaming, Research, Accessibility",
    setupTime: "4-6 weeks"
  },
  {
    id: 6,
    title: "Carbon Footprint Intelligence Platform",
    description: "Comprehensive carbon tracking and reduction platform with AI-powered recommendations and ESG reporting.",
    icon: Sprout,
    category: "Sustainability",
    price: "$349/month",
    features: [
      "Real-time carbon tracking",
      "AI-powered reduction strategies",
      "ESG reporting automation",
      "Supply chain analysis",
      "Carbon offset marketplace",
      "Regulatory compliance"
    ],
    benefits: [
      "Reduce carbon footprint by 40%",
      "Automate ESG reporting",
      "Improve sustainability scores",
      "Meet regulatory requirements"
    ],
    marketPrice: "$450-700/month",
    targetUsers: "Enterprises, Manufacturing, Retail, Government",
    setupTime: "2-3 weeks"
  },
  {
    id: 7,
    title: "Holographic Meeting Platform",
    description: "Next-generation 3D holographic video conferencing with spatial audio and immersive collaboration tools.",
    icon: Video,
    category: "Communication",
    price: "$799/month",
    features: [
      "3D holographic projection",
      "Spatial audio technology",
      "Virtual whiteboards",
      "Gesture recognition",
      "Multi-user collaboration",
      "AR/VR integration"
    ],
    benefits: [
      "Revolutionize remote meetings",
      "Enhance collaboration",
      "Reduce travel costs",
      "Improve engagement"
    ],
    marketPrice: "$1,000-1,500/month",
    targetUsers: "Enterprises, Education, Healthcare, Design",
    setupTime: "3-4 weeks"
  },
  {
    id: 8,
    title: "AI-Powered Legal Research Assistant",
    description: "Intelligent legal research platform with case law analysis, contract review, and compliance monitoring.",
    icon: BookOpen,
    category: "Legal Tech",
    price: "$399/month",
    features: [
      "Case law analysis",
      "Contract review AI",
      "Compliance monitoring",
      "Legal document generation",
      "Precedent research",
      "Risk assessment"
    ],
    benefits: [
      "Reduce research time by 70%",
      "Improve accuracy by 85%",
      "Automate routine tasks",
      "Enhance legal outcomes"
    ],
    marketPrice: "$500-800/month",
    targetUsers: "Law Firms, Corporate Legal, Government",
    setupTime: "2-3 weeks"
  },
  {
    id: 9,
    title: "Autonomous Drone Fleet Management",
    description: "Complete drone operations platform with autonomous flight, payload management, and data analytics.",
    icon: Rocket,
    category: "Aerial Solutions",
    price: "$699/month",
    features: [
      "Autonomous flight planning",
      "Payload management",
      "Real-time monitoring",
      "Weather integration",
      "Data analytics",
      "Regulatory compliance"
    ],
    benefits: [
      "Reduce operational costs by 50%",
      "Improve safety by 90%",
      "Scale operations efficiently",
      "Generate actionable insights"
    ],
    marketPrice: "$900-1,400/month",
    targetUsers: "Agriculture, Construction, Security, Delivery",
    setupTime: "3-5 weeks"
  },
  {
    id: 10,
    title: "Personalized Learning AI Platform",
    description: "Adaptive learning system that personalizes education content and tracks progress using advanced AI algorithms.",
    icon: BookOpen,
    category: "EdTech",
    price: "$249/month",
    features: [
      "Adaptive learning paths",
      "Progress tracking",
      "Skill assessment",
      "Content personalization",
      "Gamification",
      "Multi-language support"
    ],
    benefits: [
      "Improve learning outcomes by 60%",
      "Reduce learning time by 40%",
      "Personalize education",
      "Track skill development"
    ],
    marketPrice: "$350-550/month",
    targetUsers: "Schools, Universities, Corporate Training, Online Learning",
    setupTime: "2-3 weeks"
  },
  {
    id: 11,
    title: "Smart City Infrastructure Monitor",
    description: "IoT-powered city infrastructure monitoring with predictive maintenance and real-time optimization.",
    icon: Building,
    category: "Smart Cities",
    price: "$899/month",
    features: [
      "IoT sensor integration",
      "Predictive maintenance",
      "Real-time monitoring",
      "Traffic optimization",
      "Energy management",
      "Citizen engagement"
    ],
    benefits: [
      "Reduce maintenance costs by 35%",
      "Improve city efficiency",
      "Enhance citizen services",
      "Optimize resource usage"
    ],
    marketPrice: "$1,200-1,800/month",
    targetUsers: "Municipalities, Government, Urban Planning",
    setupTime: "4-6 weeks"
  },
  {
    id: 12,
    title: "AI-Powered Mental Health Assistant",
    description: "Comprehensive mental health platform with AI therapy, mood tracking, and crisis intervention capabilities.",
    icon: Heart,
    category: "HealthTech",
    price: "$199/month",
    features: [
      "AI therapy sessions",
      "Mood tracking",
      "Crisis intervention",
      "Medication reminders",
      "Progress monitoring",
      "Professional referrals"
    ],
    benefits: [
      "Improve mental health outcomes",
      "Provide 24/7 support",
      "Reduce healthcare costs",
      "Increase accessibility"
    ],
    marketPrice: "$250-400/month",
    targetUsers: "Healthcare, Corporate Wellness, Individuals",
    setupTime: "1-2 weeks"
  }
];

const categories = [
  { name: "All", count: microSaaSServices.length },
  { name: "Analytics & BI", count: microSaaSServices.filter(s => s.category === "Analytics & BI").length },
  { name: "Productivity", count: microSaaSServices.filter(s => s.category === "Productivity").length },
  { name: "Security & Privacy", count: microSaaSServices.filter(s => s.category === "Security & Privacy").length },
  { name: "Supply Chain", count: microSaaSServices.filter(s => s.category === "Supply Chain").length },
  { name: "Emerging Tech", count: microSaaSServices.filter(s => s.category === "Emerging Tech").length },
  { name: "Sustainability", count: microSaaSServices.filter(s => s.category === "Sustainability").length },
  { name: "Communication", count: microSaaSServices.filter(s => s.category === "Communication").length },
  { name: "Legal Tech", count: microSaaSServices.filter(s => s.category === "Legal Tech").length },
  { name: "Aerial Solutions", count: microSaaSServices.filter(s => s.category === "Aerial Solutions").length },
  { name: "EdTech", count: microSaaSServices.filter(s => s.category === "EdTech").length },
  { name: "Smart Cities", count: microSaaSServices.filter(s => s.category === "Smart Cities").length },
  { name: "HealthTech", count: microSaaSServices.filter(s => s.category === "HealthTech").length }
];

export default function MicroSAASPage() {
  const [selectedCategory, setSelectedCategory] = React.useState("All");
  const [searchTerm, setSearchTerm] = React.useState("");

  const filteredServices = microSaaSServices.filter(service => {
    const matchesCategory = selectedCategory === "All" || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <Layout
      title="Micro SaaS Solutions - Zion Tech Group"
      description="Discover our comprehensive collection of innovative micro SaaS solutions designed to solve specific business challenges. From AI-powered analytics to automated workflows, we have the tools to accelerate your business growth."
      keywords="micro SaaS, SaaS solutions, business automation, AI tools, productivity software, business intelligence"
    >
>>>>>>> e7e8983740868b7305b21501d9fc4e7727e1186f
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <motion.h1 
<<<<<<< HEAD
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
              >
                Micro SaaS Solutions for{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Modern Businesses
                </span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl md:text-2xl mb-8 text-gray-300"
              >
                Specialized software solutions designed to solve specific business challenges with AI-powered automation
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Link 
                  href="/contact" 
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Explore Solutions
                  <ArrowRight className="inline-block ml-2" size={20} />
                </Link>
                <Link 
                  href="#products" 
                  className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
                >
                  View Products
                </Link>
=======
                className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Innovative Micro SaaS Solutions
              </motion.h1>
              <motion.p 
                className="text-xl md:text-2xl mb-8 text-gray-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Powerful, ready-to-use micro SaaS platforms designed to solve specific business challenges. 
                Each solution comes with real-time pricing, market analysis, and proven ROI.
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row justify-center gap-4 mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                  Get Free Consultation
                </Link>
                <a href="tel:+13024640950" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
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
                  <div className="text-3xl font-bold text-blue-400">85+</div>
                  <div className="text-gray-300">Micro SaaS Solutions</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">99.9%</div>
                  <div className="text-gray-300">Uptime Guarantee</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">24/7</div>
                  <div className="text-gray-300">Support Available</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">1,200+</div>
                  <div className="text-gray-300">Happy Customers</div>
                </div>
>>>>>>> e7e8983740868b7305b21501d9fc4e7727e1186f
              </motion.div>
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Products Section */}
        <section id="products" className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Micro SaaS Products
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose from our range of specialized solutions designed for different business needs
              </p>
            </div>

            {/* Products Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaaSProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-6">
                    <product.icon className="text-white" size={32} />
                  </div>
                  
                  <div className="mb-4">
                    <span className="inline-block bg-cyan-100 text-cyan-800 text-sm font-semibold px-3 py-1 rounded-full">
                      {product.category}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {product.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6">
                    {product.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <CheckCircle className="text-green-500 mr-2" size={16} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-gray-900">
                      {product.pricing}
                    </span>
                    <Link 
                      href={`/contact?product=${product.id}`}
                      className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                    >
                      Learn More
                      <ArrowRight className="inline-block ml-2" size={16} />
                    </Link>
                  </div>
                </motion.div>
              ))}
=======
        {/* Search and Filter Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Search Bar */}
              <div className="relative mb-8">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search micro SaaS solutions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
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
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>
>>>>>>> e7e8983740868b7305b21501d9fc4e7727e1186f
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-500 to-purple-600">
          <div className="container mx-auto px-4 text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl font-bold text-white mb-6"
            >
              Ready to Transform Your Business?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto"
            >
              Contact us today to discuss your specific needs and discover how our micro SaaS solutions can help your business grow
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link 
                href="/contact" 
                className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Get Started Today
                <ArrowRight className="inline-block ml-2" size={20} />
              </Link>
              <Link 
                href="/contact" 
                className="border-2 border-white text-white hover:bg-white hover:text-cyan-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </>
=======
        {/* Services Grid */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                          <service.icon className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded-full">
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
                        {service.features.slice(0, 4).map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                        {service.features.length > 4 && (
                          <li className="text-sm text-blue-600 font-medium">
                            +{service.features.length - 4} more features
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
                          <div className="text-2xl font-bold text-blue-600">{service.price}</div>
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
                          className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold text-center transition-colors"
                        >
                          Get Started
                        </Link>
                        <Link 
                          href={`/contact?service=${encodeURIComponent(service.title)}`} 
                          className="flex-1 bg-transparent border border-blue-600 text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-lg text-sm font-semibold text-center transition-colors"
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
        <section className="py-20 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Get started with our micro SaaS solutions and discover how they can accelerate your business growth.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                Get Free Consultation
              </Link>
              <a href="tel:+13024640950" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                Call +1 302 464 0950
              </a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
>>>>>>> e7e8983740868b7305b21501d9fc4e7727e1186f
  );
}