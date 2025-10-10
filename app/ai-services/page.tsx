'use client';

import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Star, 
  CheckCircle, 
  Phone, 
  Mail, 
  MapPin, 
  Brain, 
  Zap, 
  Target, 
  BarChart, 
  Shield, 
  Users, 
  Globe, 
  Clock, 
  Award, 
  Rocket, 
  TrendingUp, 
  Building, 
  Activity, 
  Settings, 
  Database, 
  Heart, 
  Home,
  Code,
  Palette,
  Camera,
  Music,
  Video,
  Gamepad2,
  ShoppingCart,
  CreditCard,
  Factory,
  Car,
  Plane,
  Ship,
  Train,
  Stethoscope,
  GraduationCap,
  Briefcase,
  Wrench,
  Hammer,
  Paintbrush,
  Scissors,
  BookOpen,
  Calculator,
  Calendar,
  Compass,
  PieChart,
  TrendingDown,
  Truck,
  Smartphone,
  ChefHat,
  Sprout,
  Scale,
  MessageSquare,
  Eye,
  Cpu,
  Lock,
  BarChart3,
  FileText,
  Search,
  Bot,
  ShoppingBag,
  DollarSign,
  Percent,
  TrendingUp as TrendingUpIcon,
  Zap as Lightning,
  Target as Crosshair,
  Shield as Security,
  Users as People,
  Star as StarIcon,
  CheckCircle as Check,
  ArrowRight as Arrow,
  Phone as PhoneIcon,
  Mail as MailIcon,
  MapPin as Location,
  Home as HomeIcon,
  Building as BuildingIcon,
  Activity as ActivityIcon,
  Settings as SettingsIcon,
  Database as DatabaseIcon,
  Heart as HeartIcon,
  Globe as GlobeIcon,
  Clock as ClockIcon,
  Award as AwardIcon,
  Rocket as RocketIcon,
  TrendingUp as TrendingUpIcon2,
  BarChart as BarChartIcon,
  Shield as ShieldIcon,
  Users as UsersIcon,
  Zap as ZapIcon,
  Target as TargetIcon,
  Brain as BrainIcon,
  Mail as MailIcon2,
  MapPin as MapPinIcon,
  Phone as PhoneIcon2,
  Star as StarIcon2,
  CheckCircle as CheckCircleIcon,
  ArrowRight as ArrowRightIcon
} from 'lucide-react';

// Enterprise AI Services Data
const aiServices = [
  {
    id: 'ai-drug-discovery-pro',
    name: "AI Drug Discovery Pro",
    description: "Accelerate pharmaceutical research with AI-powered molecular analysis, drug interaction prediction, and clinical trial optimization.",
    price: "$4,500/mo",
    originalPrice: "$6,000/mo",
    features: [
      "Advanced Molecular Modeling",
      "Drug Interaction Analysis",
      "Clinical Trial Optimization",
      "Patent Research & Analysis",
      "Toxicity Prediction",
      "Biomarker Discovery",
      "Regulatory Compliance",
      "Real-time Collaboration"
    ],
    category: "Healthcare AI",
    enterprise: true,
    icon: Stethoscope,
    color: "from-red-500 to-pink-500",
    bgColor: "bg-red-500/10",
    borderColor: "border-red-500/30",
    stats: { clients: "50+", success: "85%", uptime: "99.99%" },
    demo: "https://ziontechgroup.com/demo/ai-drug-discovery",
    docs: "https://docs.ziontechgroup.com/ai-drug-discovery"
  },
  {
    id: 'ai-climate-solutions-pro',
    name: "AI Climate Solutions Pro",
    description: "Combat climate change with intelligent environmental monitoring, carbon footprint optimization, and sustainability planning.",
    price: "$3,200/mo",
    originalPrice: "$4,500/mo",
    features: [
      "Carbon Footprint Analysis",
      "Weather Pattern Prediction",
      "Sustainability Planning",
      "Emission Tracking & Reporting",
      "Renewable Energy Optimization",
      "Environmental Impact Assessment",
      "Compliance Monitoring",
      "Green Technology Integration"
    ],
    category: "Environmental AI",
    enterprise: false,
    icon: Sprout,
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/30",
    stats: { clients: "200+", success: "92%", uptime: "99.95%" },
    demo: "https://ziontechgroup.com/demo/ai-climate-solutions",
    docs: "https://docs.ziontechgroup.com/ai-climate-solutions"
  },
  {
    id: 'ai-space-technology-pro',
    name: "AI Space Technology Pro",
    description: "Advanced space exploration and satellite management with AI-powered mission planning and orbital mechanics optimization.",
    price: "$5,500/mo",
    originalPrice: "$7,500/mo",
    features: [
      "Satellite Operations Management",
      "Mission Planning & Optimization",
      "Orbital Mechanics Analysis",
      "Space Debris Tracking",
      "Communication Optimization",
      "Launch Window Prediction",
      "Payload Management",
      "Ground Station Coordination"
    ],
    category: "Space Technology",
    enterprise: true,
    icon: Rocket,
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/30",
    stats: { clients: "25+", success: "98%", uptime: "99.99%" },
    demo: "https://ziontechgroup.com/demo/ai-space-technology",
    docs: "https://docs.ziontechgroup.com/ai-space-technology"
  },
  {
    id: 'ai-financial-crime-detection-pro',
    name: "AI Financial Crime Detection Pro",
    description: "Real-time fraud detection and financial security monitoring with machine learning algorithms and behavioral analysis.",
    price: "$2,800/mo",
    originalPrice: "$3,800/mo",
    features: [
      "Real-time Fraud Detection",
      "Behavioral Pattern Analysis",
      "Risk Assessment & Scoring",
      "Compliance Monitoring",
      "Transaction Analysis",
      "Anomaly Detection",
      "Regulatory Reporting",
      "Multi-channel Integration"
    ],
    category: "Financial AI",
    enterprise: false,
    icon: Shield,
    color: "from-purple-500 to-indigo-500",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/30",
    stats: { clients: "150+", success: "96%", uptime: "99.99%" },
    demo: "https://ziontechgroup.com/demo/ai-financial-crime-detection",
    docs: "https://docs.ziontechgroup.com/ai-financial-crime-detection"
  },
  {
    id: 'ai-quantum-computing',
    name: "AI Quantum Computing",
    description: "Next-generation quantum computing solutions with AI-powered optimization and quantum algorithm development.",
    price: "$6,500/mo",
    originalPrice: "$8,500/mo",
    features: [
      "Quantum Algorithm Development",
      "Quantum Error Correction",
      "Quantum Machine Learning",
      "Optimization Problems",
      "Cryptography Solutions",
      "Quantum Simulation",
      "Hardware Integration",
      "Research Collaboration"
    ],
    category: "Quantum AI",
    enterprise: true,
    icon: Cpu,
    color: "from-violet-500 to-purple-500",
    bgColor: "bg-violet-500/10",
    borderColor: "border-violet-500/30",
    stats: { clients: "30+", success: "90%", uptime: "99.8%" },
    demo: "https://ziontechgroup.com/demo/ai-quantum-computing",
    docs: "https://docs.ziontechgroup.com/ai-quantum-computing"
  },
  {
    id: 'ai-autonomous-systems',
    name: "AI Autonomous Systems",
    description: "Self-managing systems with AI-powered decision making, predictive maintenance, and autonomous operations.",
    price: "$3,800/mo",
    originalPrice: "$5,200/mo",
    features: [
      "Autonomous Decision Making",
      "Predictive Maintenance",
      "Self-healing Systems",
      "Adaptive Learning",
      "Resource Optimization",
      "Safety Monitoring",
      "Performance Analytics",
      "Integration Management"
    ],
    category: "Autonomous AI",
    enterprise: true,
    icon: Bot,
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-500/10",
    borderColor: "border-orange-500/30",
    stats: { clients: "80+", success: "94%", uptime: "99.9%" },
    demo: "https://ziontechgroup.com/demo/ai-autonomous-systems",
    docs: "https://docs.ziontechgroup.com/ai-autonomous-systems"
  },
  {
    id: 'ai-blockchain-solutions',
    name: "AI Blockchain Solutions",
    description: "AI-powered blockchain technology with smart contract optimization, DeFi protocols, and Web3 integration.",
    price: "$2,500/mo",
    originalPrice: "$3,500/mo",
    features: [
      "Smart Contract Optimization",
      "DeFi Protocol Development",
      "Web3 Integration",
      "Token Economics Design",
      "Security Auditing",
      "Cross-chain Solutions",
      "NFT Marketplace Development",
      "DAO Governance"
    ],
    category: "Blockchain AI",
    enterprise: false,
    icon: Lock,
    color: "from-yellow-500 to-orange-500",
    bgColor: "bg-yellow-500/10",
    borderColor: "border-yellow-500/30",
    stats: { clients: "120+", success: "88%", uptime: "99.95%" },
    demo: "https://ziontechgroup.com/demo/ai-blockchain-solutions",
    docs: "https://docs.ziontechgroup.com/ai-blockchain-solutions"
  },
  {
    id: 'ai-holographic-workspace',
    name: "AI Holographic Workspace",
    description: "Immersive 3D collaboration environment with AI-powered spatial computing and virtual presence technology.",
    price: "$4,200/mo",
    originalPrice: "$5,800/mo",
    features: [
      "3D Holographic Displays",
      "Spatial Computing",
      "Virtual Presence",
      "Collaborative Workspaces",
      "Gesture Recognition",
      "Voice Commands",
      "Real-time Rendering",
      "Multi-user Support"
    ],
    category: "Immersive AI",
    enterprise: true,
    icon: Eye,
    color: "from-cyan-500 to-blue-500",
    bgColor: "bg-cyan-500/10",
    borderColor: "border-cyan-500/30",
    stats: { clients: "40+", success: "85%", uptime: "99.8%" },
    demo: "https://ziontechgroup.com/demo/ai-holographic-workspace",
    docs: "https://docs.ziontechgroup.com/ai-holographic-workspace"
  },
  {
    id: 'ai-energy-management',
    name: "AI Energy Management",
    description: "Smart energy optimization with AI-powered grid management, renewable energy integration, and consumption analytics.",
    price: "$2,200/mo",
    originalPrice: "$3,000/mo",
    features: [
      "Smart Grid Management",
      "Renewable Energy Integration",
      "Consumption Analytics",
      "Demand Response",
      "Energy Storage Optimization",
      "Carbon Footprint Tracking",
      "Predictive Maintenance",
      "Cost Optimization"
    ],
    category: "Energy AI",
    enterprise: false,
    icon: Zap,
    color: "from-yellow-400 to-orange-500",
    bgColor: "bg-yellow-400/10",
    borderColor: "border-yellow-400/30",
    stats: { clients: "180+", success: "91%", uptime: "99.9%" },
    demo: "https://ziontechgroup.com/demo/ai-energy-management",
    docs: "https://docs.ziontechgroup.com/ai-energy-management"
  },
  {
    id: 'ai-music-composition',
    name: "AI Music Composition",
    description: "AI-powered music creation with advanced composition algorithms, style transfer, and real-time collaboration.",
    price: "$1,800/mo",
    originalPrice: "$2,500/mo",
    features: [
      "AI Music Generation",
      "Style Transfer & Adaptation",
      "Real-time Collaboration",
      "Multi-instrument Support",
      "Lyrics Generation",
      "Audio Mixing & Mastering",
      "Copyright Protection",
      "Distribution Integration"
    ],
    category: "Creative AI",
    enterprise: false,
    icon: Music,
    color: "from-pink-500 to-rose-500",
    bgColor: "bg-pink-500/10",
    borderColor: "border-pink-500/30",
    stats: { clients: "300+", success: "87%", uptime: "99.8%" },
    demo: "https://ziontechgroup.com/demo/ai-music-composition",
    docs: "https://docs.ziontechgroup.com/ai-music-composition"
  },
  {
    id: 'ai-fashion-design',
    name: "AI Fashion Design Studio",
    description: "AI-powered fashion design with trend analysis, virtual try-on, and sustainable design optimization.",
    price: "$2,100/mo",
    originalPrice: "$2,900/mo",
    features: [
      "Trend Analysis & Prediction",
      "Virtual Try-on Technology",
      "Sustainable Design Optimization",
      "Pattern Generation",
      "Color Palette Creation",
      "Size & Fit Optimization",
      "Supply Chain Integration",
      "Market Analysis"
    ],
    category: "Creative AI",
    enterprise: false,
    icon: Palette,
    color: "from-rose-500 to-pink-500",
    bgColor: "bg-rose-500/10",
    borderColor: "border-rose-500/30",
    stats: { clients: "90+", success: "89%", uptime: "99.9%" },
    demo: "https://ziontechgroup.com/demo/ai-fashion-design",
    docs: "https://docs.ziontechgroup.com/ai-fashion-design"
  },
  {
    id: 'ai-supply-chain-optimization-pro',
    name: "AI Supply Chain Optimization Pro",
    description: "Intelligent supply chain management with predictive analytics, demand forecasting, and logistics optimization.",
    price: "$3,500/mo",
    originalPrice: "$4,800/mo",
    features: [
      "Demand Forecasting",
      "Inventory Optimization",
      "Logistics Route Planning",
      "Supplier Risk Assessment",
      "Cost Optimization",
      "Quality Control",
      "Sustainability Tracking",
      "Real-time Monitoring"
    ],
    category: "Logistics AI",
    enterprise: true,
    icon: Truck,
    color: "from-indigo-500 to-purple-500",
    bgColor: "bg-indigo-500/10",
    borderColor: "border-indigo-500/30",
    stats: { clients: "70+", success: "93%", uptime: "99.95%" },
    demo: "https://ziontechgroup.com/demo/ai-supply-chain-optimization",
    docs: "https://docs.ziontechgroup.com/ai-supply-chain-optimization"
  }
];

const categories = [
  { name: "All", count: aiServices.length },
  { name: "Healthcare AI", count: aiServices.filter(s => s.category === "Healthcare AI").length },
  { name: "Environmental AI", count: aiServices.filter(s => s.category === "Environmental AI").length },
  { name: "Space Technology", count: aiServices.filter(s => s.category === "Space Technology").length },
  { name: "Financial AI", count: aiServices.filter(s => s.category === "Financial AI").length },
  { name: "Quantum AI", count: aiServices.filter(s => s.category === "Quantum AI").length },
  { name: "Autonomous AI", count: aiServices.filter(s => s.category === "Autonomous AI").length },
  { name: "Blockchain AI", count: aiServices.filter(s => s.category === "Blockchain AI").length },
  { name: "Immersive AI", count: aiServices.filter(s => s.category === "Immersive AI").length },
  { name: "Energy AI", count: aiServices.filter(s => s.category === "Energy AI").length },
  { name: "Creative AI", count: aiServices.filter(s => s.category === "Creative AI").length },
  { name: "Logistics AI", count: aiServices.filter(s => s.category === "Logistics AI").length }
];

const AIServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("popular");

  const filteredServices = aiServices.filter(service => {
    const matchesCategory = selectedCategory === "All" || service.category === selectedCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case "popular":
        return b.enterprise ? 1 : -1;
      case "price-low":
        return parseInt(a.price.replace(/[^0-9]/g, '')) - parseInt(b.price.replace(/[^0-9]/g, ''));
      case "price-high":
        return parseInt(b.price.replace(/[^0-9]/g, '')) - parseInt(a.price.replace(/[^0-9]/g, ''));
      case "name":
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Enterprise AI Solutions
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Transform your industry with cutting-edge artificial intelligence. 
            Our enterprise AI solutions deliver unprecedented performance and innovation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-4 px-8 rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center">
              Schedule Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 font-semibold py-4 px-8 rounded-xl hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
              View Case Studies
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">500+</div>
              <div className="text-gray-400">Enterprise Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">99.9%</div>
              <div className="text-gray-400">Uptime Guarantee</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-400 mb-2">24/7</div>
              <div className="text-gray-400">Expert Support</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">50+</div>
              <div className="text-gray-400">Countries Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search AI solutions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category.name
                      ? 'bg-cyan-500 text-white'
                      : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400"
            >
              <option value="popular">Most Popular</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">Name: A to Z</option>
            </select>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedServices.map((service, index) => (
              <div
                key={service.id}
                className={`cyber-card p-8 hover:scale-105 transition-all duration-300 relative group ${service.bgColor} ${service.borderColor} border ${
                  service.enterprise ? 'ring-2 ring-purple-400/30' : ''
                }`}
              >
                {service.enterprise && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-400 to-pink-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                      Enterprise
                    </span>
                  </div>
                )}
                
                <div className="text-center">
                  <div className={`w-20 h-20 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.name}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {service.features.slice(0, 6).map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-purple-400 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                    {service.features.length > 6 && (
                      <div className="col-span-2 text-xs text-gray-400 text-center">
                        +{service.features.length - 6} more features
                      </div>
                    )}
                  </div>
                  
                  <div className="text-center mb-6">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <div className="text-4xl font-bold text-white">{service.price}</div>
                      {service.originalPrice && (
                        <div className="text-xl text-gray-400 line-through">{service.originalPrice}</div>
                      )}
                    </div>
                    <div className="text-sm text-gray-400 mb-4">
                      {service.stats.clients} clients • {service.stats.success} success rate • {service.stats.uptime} uptime
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    <button className="w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105">
                      Request Demo
                    </button>
                    <div className="flex gap-2">
                      <button className="flex-1 border border-purple-400 text-purple-400 font-medium py-2 px-4 rounded-lg hover:bg-purple-400 hover:text-slate-900 transition-all duration-300 text-sm">
                        Learn More
                      </button>
                      <button className="flex-1 border border-gray-600 text-gray-300 font-medium py-2 px-4 rounded-lg hover:bg-gray-700 transition-all duration-300 text-sm">
                        Contact Sales
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Industry?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join industry leaders who are already using our AI solutions to drive innovation, 
            increase efficiency, and achieve unprecedented results.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-4 px-8 rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
              Schedule Consultation
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 font-semibold py-4 px-8 rounded-xl hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
              View Case Studies
            </button>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-2xl mb-2">📞</div>
              <h3 className="text-lg font-bold text-white mb-2">Phone</h3>
              <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 font-medium">
                +1 (302) 464-0950
              </a>
            </div>
            
            <div className="text-center">
              <div className="text-2xl mb-2">✉️</div>
              <h3 className="text-lg font-bold text-white mb-2">Email</h3>
              <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 font-medium">
                kleber@ziontechgroup.com
              </a>
            </div>
            
            <div className="text-center">
              <div className="text-2xl mb-2">📍</div>
              <h3 className="text-lg font-bold text-white mb-2">Location</h3>
              <p className="text-cyan-400 font-medium">
                364 E Main St STE 1008<br />
                Middletown, DE 19709
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIServicesPage;