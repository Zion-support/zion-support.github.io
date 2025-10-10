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

// IT Services Data
const itServices = [
  {
    id: 'cloud-migration-setup',
    name: "Cloud Migration & Setup",
    description: "Seamless cloud migration with zero downtime, comprehensive security, and performance optimization for your business infrastructure.",
    price: "$2,500/mo",
    originalPrice: "$3,500/mo",
    features: [
      "Zero Downtime Migration",
      "Multi-cloud Strategy",
      "Security Audit & Compliance",
      "Performance Optimization",
      "24/7 Monitoring & Support",
      "Disaster Recovery Planning",
      "Cost Optimization",
      "Scalability Planning"
    ],
    category: "Cloud Services",
    icon: Globe,
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/30",
    stats: { clients: "300+", success: "98%", uptime: "99.99%" },
    demo: "https://ziontechgroup.com/demo/cloud-migration",
    docs: "https://docs.ziontechgroup.com/cloud-migration"
  },
  {
    id: 'enterprise-cybersecurity-suite',
    name: "Enterprise Cybersecurity Suite",
    description: "Comprehensive security solutions to protect your digital assets with advanced threat detection and incident response.",
    price: "$1,800/mo",
    originalPrice: "$2,500/mo",
    features: [
      "Advanced Threat Detection",
      "Vulnerability Assessment",
      "Incident Response Planning",
      "Compliance Management",
      "Security Awareness Training",
      "Penetration Testing",
      "Security Monitoring",
      "Risk Assessment"
    ],
    category: "Security",
    icon: Shield,
    color: "from-red-500 to-pink-500",
    bgColor: "bg-red-500/10",
    borderColor: "border-red-500/30",
    stats: { clients: "250+", success: "99%", uptime: "99.99%" },
    demo: "https://ziontechgroup.com/demo/cybersecurity",
    docs: "https://docs.ziontechgroup.com/cybersecurity"
  },
  {
    id: 'it-infrastructure-design',
    name: "IT Infrastructure Design",
    description: "Scalable infrastructure architecture designed for your business needs with future-proof technology solutions.",
    price: "$3,000/mo",
    originalPrice: "$4,200/mo",
    features: [
      "Custom Architecture Design",
      "Scalability Planning",
      "Performance Tuning",
      "Network Optimization",
      "Hardware Recommendations",
      "Software Integration",
      "Documentation & Training",
      "Ongoing Support"
    ],
    category: "Infrastructure",
    icon: Settings,
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/30",
    stats: { clients: "180+", success: "96%", uptime: "99.9%" },
    demo: "https://ziontechgroup.com/demo/it-infrastructure",
    docs: "https://docs.ziontechgroup.com/it-infrastructure"
  },
  {
    id: '24-7-it-support',
    name: "24/7 IT Support & Monitoring",
    description: "Round-the-clock technical support and proactive monitoring for your systems with guaranteed response times.",
    price: "$1,200/mo",
    originalPrice: "$1,800/mo",
    features: [
      "24/7 Technical Support",
      "Remote Monitoring",
      "Quick Response Times",
      "Proactive Maintenance",
      "Issue Resolution",
      "System Updates",
      "Performance Monitoring",
      "Emergency Support"
    ],
    category: "Support",
    icon: Clock,
    color: "from-purple-500 to-indigo-500",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/30",
    stats: { clients: "500+", success: "97%", uptime: "99.95%" },
    demo: "https://ziontechgroup.com/demo/it-support",
    docs: "https://docs.ziontechgroup.com/it-support"
  },
  {
    id: 'custom-software-development',
    name: "Custom Software Development",
    description: "Tailored software solutions built to your specifications with modern technologies and best practices.",
    price: "$4,500/mo",
    originalPrice: "$6,000/mo",
    features: [
      "Custom Application Development",
      "Web & Mobile Solutions",
      "API Development",
      "Database Design",
      "UI/UX Design",
      "Quality Assurance",
      "Deployment & Maintenance",
      "Documentation & Training"
    ],
    category: "Development",
    icon: Code,
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-500/10",
    borderColor: "border-orange-500/30",
    stats: { clients: "120+", success: "95%", uptime: "99.8%" },
    demo: "https://ziontechgroup.com/demo/custom-development",
    docs: "https://docs.ziontechgroup.com/custom-development"
  },
  {
    id: 'devops-cicd-implementation',
    name: "DevOps & CI/CD Implementation",
    description: "Streamlined development processes with automated deployment, testing, and continuous integration pipelines.",
    price: "$2,200/mo",
    originalPrice: "$3,000/mo",
    features: [
      "CI/CD Pipeline Setup",
      "Automated Testing",
      "Deployment Automation",
      "Infrastructure as Code",
      "Monitoring & Logging",
      "Security Integration",
      "Performance Optimization",
      "Team Training"
    ],
    category: "DevOps",
    icon: Zap,
    color: "from-yellow-500 to-orange-500",
    bgColor: "bg-yellow-500/10",
    borderColor: "border-yellow-500/30",
    stats: { clients: "150+", success: "94%", uptime: "99.9%" },
    demo: "https://ziontechgroup.com/demo/devops-cicd",
    docs: "https://docs.ziontechgroup.com/devops-cicd"
  },
  {
    id: 'database-management-optimization',
    name: "Database Management & Optimization",
    description: "Performance tuning, security, and optimization for your database systems with expert administration.",
    price: "$1,500/mo",
    originalPrice: "$2,200/mo",
    features: [
      "Performance Tuning",
      "Security Hardening",
      "Backup & Recovery",
      "Monitoring & Alerting",
      "Query Optimization",
      "Capacity Planning",
      "Migration Services",
      "24/7 Support"
    ],
    category: "Database",
    icon: Database,
    color: "from-teal-500 to-cyan-500",
    bgColor: "bg-teal-500/10",
    borderColor: "border-teal-500/30",
    stats: { clients: "200+", success: "98%", uptime: "99.99%" },
    demo: "https://ziontechgroup.com/demo/database-management",
    docs: "https://docs.ziontechgroup.com/database-management"
  },
  {
    id: 'network-design-implementation',
    name: "Network Design & Implementation",
    description: "Secure network infrastructure with advanced routing, switching, and wireless solutions for optimal performance.",
    price: "$2,800/mo",
    originalPrice: "$3,800/mo",
    features: [
      "Network Architecture Design",
      "Security Implementation",
      "Performance Optimization",
      "Wireless Solutions",
      "VPN Configuration",
      "Load Balancing",
      "Network Monitoring",
      "Documentation & Training"
    ],
    category: "Networking",
    icon: Globe,
    color: "from-indigo-500 to-purple-500",
    bgColor: "bg-indigo-500/10",
    borderColor: "border-indigo-500/30",
    stats: { clients: "160+", success: "97%", uptime: "99.9%" },
    demo: "https://ziontechgroup.com/demo/network-design",
    docs: "https://docs.ziontechgroup.com/network-design"
  },
  {
    id: 'ai-infrastructure-monitoring',
    name: "AI Infrastructure Monitoring",
    description: "Intelligent infrastructure monitoring with AI-powered analytics, predictive maintenance, and automated responses.",
    price: "$1,800/mo",
    originalPrice: "$2,500/mo",
    features: [
      "AI-powered Analytics",
      "Predictive Maintenance",
      "Automated Responses",
      "Real-time Monitoring",
      "Performance Optimization",
      "Anomaly Detection",
      "Capacity Planning",
      "Cost Optimization"
    ],
    category: "AI Operations",
    icon: Brain,
    color: "from-violet-500 to-purple-500",
    bgColor: "bg-violet-500/10",
    borderColor: "border-violet-500/30",
    stats: { clients: "100+", success: "96%", uptime: "99.95%" },
    demo: "https://ziontechgroup.com/demo/ai-infrastructure-monitoring",
    docs: "https://docs.ziontechgroup.com/ai-infrastructure-monitoring"
  },
  {
    id: 'blockchain-integration-services',
    name: "Blockchain Integration Services",
    description: "Web3 and blockchain solutions with smart contract development, DeFi integration, and cryptocurrency implementation.",
    price: "$3,200/mo",
    originalPrice: "$4,500/mo",
    features: [
      "Smart Contract Development",
      "DeFi Integration",
      "Cryptocurrency Implementation",
      "NFT Marketplace Development",
      "Security Auditing",
      "Token Economics",
      "Cross-chain Solutions",
      "Compliance Management"
    ],
    category: "Blockchain",
    icon: Lock,
    color: "from-yellow-400 to-orange-500",
    bgColor: "bg-yellow-400/10",
    borderColor: "border-yellow-400/30",
    stats: { clients: "80+", success: "92%", uptime: "99.8%" },
    demo: "https://ziontechgroup.com/demo/blockchain-integration",
    docs: "https://docs.ziontechgroup.com/blockchain-integration"
  },
  {
    id: 'ai-api-management',
    name: "AI API Management",
    description: "Intelligent API management with AI-powered optimization, security, and performance monitoring for your digital ecosystem.",
    price: "$1,600/mo",
    originalPrice: "$2,200/mo",
    features: [
      "API Gateway Management",
      "AI-powered Optimization",
      "Security & Authentication",
      "Performance Monitoring",
      "Rate Limiting",
      "Analytics & Reporting",
      "Developer Portal",
      "Integration Support"
    ],
    category: "API Management",
    icon: Target,
    color: "from-pink-500 to-rose-500",
    bgColor: "bg-pink-500/10",
    borderColor: "border-pink-500/30",
    stats: { clients: "140+", success: "95%", uptime: "99.9%" },
    demo: "https://ziontechgroup.com/demo/ai-api-management",
    docs: "https://docs.ziontechgroup.com/ai-api-management"
  },
  {
    id: 'smart-contract-security-audit',
    name: "Smart Contract Security Audit",
    description: "Comprehensive blockchain security auditing with vulnerability assessment and compliance verification for smart contracts.",
    price: "$2,500/mo",
    originalPrice: "$3,500/mo",
    features: [
      "Security Vulnerability Assessment",
      "Code Review & Analysis",
      "Compliance Verification",
      "Penetration Testing",
      "Risk Assessment",
      "Remediation Guidance",
      "Ongoing Monitoring",
      "Certification Support"
    ],
    category: "Security",
    icon: Shield,
    color: "from-red-600 to-pink-600",
    bgColor: "bg-red-600/10",
    borderColor: "border-red-600/30",
    stats: { clients: "60+", success: "99%", uptime: "99.9%" },
    demo: "https://ziontechgroup.com/demo/smart-contract-audit",
    docs: "https://docs.ziontechgroup.com/smart-contract-audit"
  }
];

const categories = [
  { name: "All", count: itServices.length },
  { name: "Cloud Services", count: itServices.filter(s => s.category === "Cloud Services").length },
  { name: "Security", count: itServices.filter(s => s.category === "Security").length },
  { name: "Infrastructure", count: itServices.filter(s => s.category === "Infrastructure").length },
  { name: "Support", count: itServices.filter(s => s.category === "Support").length },
  { name: "Development", count: itServices.filter(s => s.category === "Development").length },
  { name: "DevOps", count: itServices.filter(s => s.category === "DevOps").length },
  { name: "Database", count: itServices.filter(s => s.category === "Database").length },
  { name: "Networking", count: itServices.filter(s => s.category === "Networking").length },
  { name: "AI Operations", count: itServices.filter(s => s.category === "AI Operations").length },
  { name: "Blockchain", count: itServices.filter(s => s.category === "Blockchain").length },
  { name: "API Management", count: itServices.filter(s => s.category === "API Management").length }
];

const ITServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("popular");

  const filteredServices = itServices.filter(service => {
    const matchesCategory = selectedCategory === "All" || service.category === selectedCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case "popular":
        return parseInt(b.stats.clients) - parseInt(a.stats.clients);
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
            IT Infrastructure Services
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Comprehensive IT solutions to build, secure, and scale your technology infrastructure. 
            Expert support for all your technology needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-4 px-8 rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center">
              Get IT Assessment
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 font-semibold py-4 px-8 rounded-xl hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
              View Solutions
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">500+</div>
              <div className="text-gray-400">IT Projects</div>
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
              <div className="text-4xl font-bold text-green-400 mb-2">15+</div>
              <div className="text-gray-400">Years Experience</div>
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
                placeholder="Search IT services..."
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
                className={`cyber-card p-8 hover:scale-105 transition-all duration-300 relative group ${service.bgColor} ${service.borderColor} border`}
              >
                <div className="text-center">
                  <div className={`w-20 h-20 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.name}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {service.features.slice(0, 6).map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
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
                    <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                      Get Quote
                    </button>
                    <div className="flex gap-2">
                      <button className="flex-1 border border-cyan-400 text-cyan-400 font-medium py-2 px-4 rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 text-sm">
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
            Ready to Transform Your IT Infrastructure?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Let our expert team help you build, secure, and optimize your technology infrastructure. 
            Get a free IT assessment and discover how we can accelerate your digital transformation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-4 px-8 rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
              Get Free IT Assessment
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

export default ITServicesPage;