<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
<<<<<<< HEAD
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
=======
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
>>>>>>> origin/cursor/install-project-dependencies-and-husky-2974
import { 
  CpuChipIcon, 
  CloudIcon, 
  ShieldCheckIcon, 
  LightBulbIcon,
  RocketLaunchIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';
=======
import { useState } from 'react';

// Mock data for services since the comprehensiveServices file was removed
const SERVICE_CATEGORIES = [
  { id: 1, name: "AI Services", count: 10, icon: "🤖" },
  { id: 2, name: "Micro SAAS", count: 8, icon: "💻" },
  { id: 3, name: "IT Services", count: 12, icon: "🖥️" },
  { id: 4, name: "Blockchain & Web3", count: 5, icon: "⛓️" },
  { id: 5, name: "IoT & Edge Computing", count: 6, icon: "🌐" },
  { id: 6, name: "Emerging Technologies", count: 4, icon: "🔮" },
  { id: 7, name: "Cybersecurity Services", count: 3, icon: "🔒" },
  { id: 8, name: "Data Science & Analytics", count: 4, icon: "📊" }
];

const COMPREHENSIVE_SERVICES = [
  {
    id: "ai-1",
    name: "AI-Powered Chatbot Development",
    description: "Custom AI chatbots for customer service, sales, and support with natural language processing capabilities",
    category: "AI Services",
    price: 2999,
    rating: 4.8,
    features: ["Natural language processing", "Multi-language support", "Integration APIs", "Analytics dashboard", "24/7 availability"]
  },
  {
    id: "ai-2",
    name: "Machine Learning Model Development",
    description: "Custom ML models for predictive analytics, pattern recognition, and data-driven decision making",
    category: "AI Services",
    price: 5999,
    rating: 4.9,
    features: ["Custom algorithm development", "Data preprocessing", "Model training", "Performance optimization", "Deployment support"]
  },
  {
    id: "micro-1",
    name: "Project Management Platform",
    description: "Comprehensive project management solution with task tracking, team collaboration, and reporting",
    category: "Micro SAAS",
    price: 199,
    rating: 4.7,
    features: ["Task management", "Team collaboration", "Time tracking", "Reporting", "Mobile app"]
  },
  {
    id: "it-1",
    name: "Cloud Infrastructure Setup",
    description: "Complete cloud infrastructure design and implementation for scalable applications",
    category: "IT Services",
    price: 3999,
    rating: 4.8,
    features: ["Architecture design", "Security implementation", "Monitoring setup", "Backup solutions", "24/7 support"]
  }
];

const SERVICE_ADDONS = [
  {
    id: "custom-model",
    name: "Custom AI Model Training",
    description: "Specialized training for your specific use case and data",
    price: 2499,
    category: "AI Services"
  },
  {
    id: "api-access",
    name: "API Access & Documentation",
    description: "Full API access with comprehensive documentation and support",
    price: 999,
    category: "All Services"
  },
  {
    id: "24-7-support",
    name: "24/7 Priority Support",
    description: "Round-the-clock technical support with guaranteed response times",
    price: 1999,
    category: "All Services"
  }
];
>>>>>>> origin/cursor/build-and-fix-errors-c9ef

export function ServicesShowcase() {
  const services = [
    {
      icon: CpuChipIcon,
      title: "AI & Machine Learning",
      description: "Advanced AI solutions for automation, decision-making, and predictive analytics",
      color: "from-zion-cyan to-zion-blue",
      href: "/ai-solutions"
    },
    {
      icon: CloudIcon,
      title: "Cloud & DevOps",
      description: "Scalable cloud infrastructure and automated deployment pipelines",
      color: "from-zion-purple to-zion-cyan",
      href: "/cloud-devops"
    },
    {
      icon: ShieldCheckIcon,
      title: "Cybersecurity",
      description: "Comprehensive security solutions for threat detection and prevention",
      color: "from-zion-purple to-zion-blue",
      href: "/cybersecurity"
    },
    {
      icon: LightBulbIcon,
      title: "Digital Transformation",
      description: "End-to-end digital strategy and implementation services",
      color: "from-zion-cyan to-zion-purple",
      href: "/digital-transformation"
    },
    {
      icon: RocketLaunchIcon,
      title: "Micro SaaS Solutions",
      description: "Custom SaaS platforms for specific business needs",
      color: "from-zion-blue to-zion-cyan",
      href: "/micro-saas"
    },
    {
      icon: ChartBarIcon,
      title: "Business Intelligence",
      description: "Data analytics and insights for informed decision-making",
      color: "from-zion-purple to-zion-blue",
      href: "/business-intelligence"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
=======
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { INNOVATIVE_SERVICES, InnovativeService } from '../data/innovativeServices';

export function ServicesShowcase() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Get unique categories from services
  const categories = Array.from(new Set(INNOVATIVE_SERVICES.map(service => service.category)));
  
  // Filter services based on search and category
  const filteredServices = INNOVATIVE_SERVICES.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const getCategoryIcon = (categoryName: string) => {
    const categoryIcons: { [key: string]: string } = {
      'AI Services': '🤖',
      'Micro SAAS': '💻',
      'IT Services': '🖥️',
      'Blockchain & Web3': '⛓️',
      'IoT & Edge Computing': '🌐',
      'Emerging Technologies': '🔮',
      'Cybersecurity Services': '🔒',
      'Data Science & Analytics': '📊'
    };
    return categoryIcons[categoryName] || '💼';
  };

  const formatPrice = (price: number, pricingModel: string) => {
    if (pricingModel === 'monthly') {
      return `$${price}/month`;
    } else if (pricingModel === 'yearly') {
      return `$${price}/year`;
    } else if (pricingModel === 'one-time') {
      return `$${price}`;
    } else if (pricingModel === 'per-user') {
      return `$${price}/user`;
    } else if (pricingModel === 'per-project') {
      return `$${price}/project`;
    } else if (pricingModel === 'usage-based') {
      return `$${price}/usage`;
    } else if (pricingModel === 'freemium') {
      return `Free + Premium`;
>>>>>>> origin/cursor/build-and-fix-errors-e276
    }
  };

  const getSupportLevelColor = (level: string) => {
    const colors: { [key: string]: string } = {
      'basic': 'bg-gray-100 text-gray-800',
      'standard': 'bg-blue-100 text-blue-800',
      'premium': 'bg-purple-100 text-purple-800',
      'enterprise': 'bg-green-100 text-green-800'
    };
    return colors[level] || 'bg-gray-100 text-gray-800';
  };

  return (
<<<<<<< HEAD
    <section className="py-20 bg-zion-slate-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-blue-dark opacity-50"></div>
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-zion-cyan/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-zion-purple/5 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Core Services
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Comprehensive technology solutions designed to accelerate your business growth 
            and digital transformation journey.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <Link to={service.href} className="block">
                <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-zion-cyan/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-zion-cyan/20">
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-zion-cyan transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-zion-slate-light leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Arrow */}
                  <div className="mt-6 flex items-center text-zion-cyan group-hover:text-zion-cyan-light transition-colors duration-300">
                    <span className="text-sm font-medium">Learn More</span>
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
=======
    <div className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Enhanced Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Comprehensive Tech Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Discover our complete range of AI, Micro SAAS, IT, Blockchain, IoT, and Emerging Tech services designed to transform your business.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto">
            {[
              { number: INNOVATIVE_SERVICES.length.toString(), label: "Total Services" },
              { number: categories.length.toString(), label: "Categories" },
              { number: INNOVATIVE_SERVICES.filter(s => s.featured).length.toString(), label: "Featured" },
              { number: "4.9", label: "Rating" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
=======
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  MICRO_SAAS_SERVICES, 
  MICRO_SAAS_CATEGORIES,
  CONTACT_INFO 
} from "@/data/microSaasServices";
import { 
  Brain, 
  Cloud, 
  Shield, 
  BarChart3, 
  Code, 
  DollarSign, 
  Heart, 
  ShoppingCart, 
  GraduationCap,
  Star,
  TrendingUp,
  Zap,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Globe
} from "lucide-react";
import { Link } from "react-router-dom";

const categoryIcons = {
  'AI Business Solutions': Brain,
  'IT Infrastructure': Cloud,
  'Data Analytics': BarChart3,
  'AI Development': Code,
  'FinTech': DollarSign,
  'HealthTech': Heart,
  'E-commerce': ShoppingCart,
  'EdTech': GraduationCap
};

const categoryColors = {
  'AI Business Solutions': 'from-purple-500 to-indigo-600',
  'IT Infrastructure': 'from-blue-500 to-cyan-600',
  'Data Analytics': 'from-green-500 to-emerald-600',
  'AI Development': 'from-orange-500 to-red-600',
  'FinTech': 'from-yellow-500 to-orange-600',
  'HealthTech': 'from-pink-500 to-rose-600',
  'E-commerce': 'from-indigo-500 to-purple-600',
  'EdTech': 'from-teal-500 to-green-600'
};

const features = [
  "AI-Powered Automation",
  "Real-time Analytics",
  "Multi-cloud Support",
  "API-First Architecture",
  "Scalable Infrastructure",
  "Custom Integrations",
  "White-label Solutions",
  "Comprehensive Documentation",
  "24/7 Technical Support",
  "99.9% Uptime Guarantee",
  "SOC 2 Type II Compliant",
  "30-Day Money Back Guarantee"
];

const benefits = [
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Immediate Deployment",
    description: "All services are ready for immediate deployment with no setup delays"
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Enterprise Security",
    description: "Bank-level security with SOC 2 compliance and 24/7 monitoring"
  },
  {
    icon: <TrendingUp className="h-6 w-6" />,
    title: "Proven ROI",
    description: "Average 300% ROI within 6 months of implementation"
  },
  {
    icon: <CheckCircle className="h-6 w-6" />,
    title: "Quality Guaranteed",
    description: "30-day money-back guarantee with free migration support"
  }
];

export function ServicesShowcase() {
  const featuredServices = MICRO_SAAS_SERVICES.filter(service => service.featured).slice(0, 6);

  return (
    <div className="py-20 bg-gradient-to-br from-zion-blue via-zion-blue-dark to-zion-purple">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Comprehensive Micro SAAS Solutions
          </h2>
          <p className="text-xl text-zion-slate-light max-w-4xl mx-auto mb-8">
            Transform your business with our enterprise-grade micro SAAS services. 
            From AI automation to infrastructure management, we provide solutions that scale with your growth.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/micro-saas-services">
              <Button size="lg" className="bg-white text-zion-blue hover:bg-gray-100">
                <Brain className="h-5 w-5 mr-2" />
                Explore All Services
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-zion-blue">
                <Phone className="h-5 w-5 mr-2" />
                Get Consultation
              </Button>
            </Link>
          </div>
        </div>

        {/* Categories Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {MICRO_SAAS_CATEGORIES.map((category) => {
            const IconComponent = categoryIcons[category.label as keyof typeof categoryIcons];
            const colorClass = categoryColors[category.label as keyof typeof categoryColors];
            return (
              <Card key={category.value} className="bg-zion-blue-dark border-zion-blue-light text-white hover:border-zion-purple/50 transition-all duration-300 hover:scale-105">
                <CardHeader className="text-center">
                  <div className={`mx-auto w-16 h-16 bg-gradient-to-br ${colorClass} rounded-full flex items-center justify-center mb-4`}>
                    {IconComponent && <IconComponent className="h-8 w-8 text-white" />}
                  </div>
                  <CardTitle className="text-lg">{category.label}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-zion-slate-light text-sm">
                    {MICRO_SAAS_SERVICES.filter(s => s.category === category.label).length} services available
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Featured Services */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Featured Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service) => (
              <Card key={service.id} className="bg-zion-blue-dark border-zion-blue-light text-white hover:border-zion-purple/50 transition-all duration-300 hover:scale-105">
                <div className="relative">
                  <img 
                    src={service.images[0]} 
                    alt={service.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <Badge className="absolute top-4 right-4 bg-zion-purple">
                    {service.category}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-zion-slate-light">
                    {service.description.substring(0, 100)}...
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 mr-1" />
                      <span className="text-sm">{service.rating}</span>
                      <span className="text-zion-slate-light text-sm ml-1">({service.reviewCount})</span>
                    </div>
                    <Badge variant="secondary" className="bg-zion-purple/20 text-zion-cyan">
                      AI Score: {service.aiScore}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-zion-cyan">
                      ${service.price}
                      <span className="text-sm text-zion-slate-light">/month</span>
                    </div>
                    <Button size="sm" className="bg-zion-purple hover:bg-zion-purple-dark">
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Enterprise Features, Startup Pricing
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-zion-purple/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-10 w-10 text-zion-purple" />
                </div>
                <p className="font-medium text-white text-sm">{feature}</p>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-ad2d
              </div>
            ))}
          </div>
        </div>

<<<<<<< HEAD
        {/* Enhanced Search and Filter */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
            <div className="relative w-full max-w-md">
              <input
                type="text"
                placeholder="Search services, features, or tags..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
              />
              <svg className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
            >
              <option value="all">All Categories</option>
              {categories.map(category => (
                <option key={category} value={category}>
                  {category} ({INNOVATIVE_SERVICES.filter(s => s.category === category).length})
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Enhanced Category Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
              selectedCategory === 'all'
                ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                : 'bg-white text-gray-700 border border-gray-300 hover:border-blue-300 hover:shadow-md'
            }`}
          >
            All Services ({INNOVATIVE_SERVICES.length})
          </button>
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-700 border border-gray-300 hover:border-blue-300 hover:shadow-md'
              }`}
            >
              <span>{getCategoryIcon(category)}</span>
              {category} ({INNOVATIVE_SERVICES.filter(s => s.category === category).length})
            </button>
          ))}
        </div>

        {/* Enhanced Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredServices.map((service, index) => (
            <div 
              key={service.id} 
              className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden border border-gray-100 transform hover:scale-105 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              {/* Service Header */}
              <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center relative">
                <span className="text-6xl">{getCategoryIcon(service.category)}</span>
                {service.featured && (
                  <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-bold">
                    ⭐ Featured
                  </div>
                )}
                {service.aiScore && (
                  <div className="absolute top-4 left-4 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                    AI: {service.aiScore}
                  </div>
                )}
              </div>

              {/* Service Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                    {service.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-400">★</span>
                    <span className="text-sm font-medium text-gray-700">{service.rating || 4.5}</span>
                    {service.reviewCount && (
                      <span className="text-xs text-gray-500">({service.reviewCount})</span>
                    )}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{service.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{service.description}</p>

                {/* Key Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                        {feature}
                      </li>
                    ))}
                    {service.features.length > 3 && (
                      <li className="text-sm text-blue-600 font-medium">
                        +{service.features.length - 3} more features
                      </li>
                    )}
                  </ul>
                </div>

                {/* Support Level */}
                <div className="mb-4">
                  <span className={`text-xs px-2 py-1 rounded-full ${getSupportLevelColor(service.supportLevel)}`}>
                    {service.supportLevel} Support
                  </span>
                </div>

                {/* Price and CTA */}
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-gray-900">
                    {formatPrice(service.price, service.pricingModel)}
                  </div>
                  <Link
                    to={`/services/${service.id}`}
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                  >
                    Learn More
                  </Link>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mt-3">
                  {service.tags.slice(0, 3).map((tag, idx) => (
                    <span key={idx} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
>>>>>>> origin/cursor/build-and-fix-errors-e276
          ))}
        </motion.div>

<<<<<<< HEAD
        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <Link
            to="/services"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-purple to-zion-cyan hover:from-zion-purple-light hover:to-zion-cyan-light text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-zion-cyan/30"
          >
            View All Services
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
=======
        {/* Enhanced CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-10 text-white">
            <h3 className="text-4xl font-bold mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Get in touch with our experts to discuss your specific needs and find the perfect solution from our comprehensive service catalog.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Schedule Consultation
              </Link>
              <Link
                to="/services"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                View All Services
=======
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Zap, 
  Shield, 
  Cloud, 
  BarChart3, 
  Code, 
  Globe, 
  Heart, 
  DollarSign, 
  GraduationCap, 
  Building,
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  Users,
  Clock,
  MessageSquare
} from "lucide-react";

const serviceHighlights = [
  {
    icon: <Zap className="h-8 w-8" />,
    title: "AI Process Automation",
    description: "Reduce manual work by 80% with intelligent workflow automation",
    benefits: ["Workflow Design", "RPA Integration", "Decision Making", "Process Optimization"],
    price: "From $2,999",
    category: "AI Automation",
    color: "from-purple-500 to-indigo-600"
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: "AI Threat Detection",
    description: "99.5% accuracy in detecting and preventing cyber threats",
    benefits: ["Real-time Monitoring", "Behavioral Analysis", "Automated Response", "90% False Positive Reduction"],
    price: "From $3,999",
    category: "Cybersecurity",
    color: "from-red-500 to-pink-600"
  },
  {
    icon: <Cloud className="h-8 w-8" />,
    title: "Multi-Cloud Orchestration",
    description: "Reduce cloud costs by 25-40% with intelligent management",
    benefits: ["Cost Optimization", "Automated Scaling", "Centralized Monitoring", "Multi-Platform Support"],
    price: "From $1,999",
    category: "Cloud Management",
    color: "from-blue-500 to-indigo-600"
  },
  {
    icon: <BarChart3 className="h-8 w-8" />,
    title: "Real-Time Analytics Engine",
    description: "Process millions of events per second with streaming analytics",
    benefits: ["Apache Kafka Integration", "Real-time Dashboards", "Predictive Analytics", "High Performance"],
    price: "From $3,499",
    category: "Real-Time Analytics",
    color: "from-green-500 to-blue-600"
  },
  {
    icon: <Code className="h-8 w-8" />,
    title: "AI Code Review Assistant",
    description: "Improve code quality by 60% with intelligent analysis",
    benefits: ["Security Scanning", "Best Practices", "GitHub Integration", "Automated Reviews"],
    price: "From $599",
    category: "Development Tools",
    color: "from-yellow-500 to-orange-600"
  },
  {
    icon: <Globe className="h-8 w-8" />,
    title: "Enterprise IoT Platform",
    description: "Support for 100,000+ devices with edge computing",
    benefits: ["Device Management", "Edge AI Processing", "Real-time Monitoring", "Predictive Maintenance"],
    price: "From $4,999",
    category: "IoT",
    color: "from-green-500 to-teal-600"
  },
  {
    icon: <Heart className="h-8 w-8" />,
    title: "Healthcare AI Platform",
    description: "HIPAA-compliant AI solutions for healthcare",
    benefits: ["Diagnostic Assistance", "Patient Monitoring", "Medical Imaging", "Predictive Analytics"],
    price: "From $12,999",
    category: "Healthcare Tech",
    color: "from-red-500 to-pink-600"
  },
  {
    icon: <DollarSign className="h-8 w-8" />,
    title: "AI Trading Platform",
    description: "Algorithmic trading with machine learning models",
    benefits: ["Risk Management", "Backtesting", "Real-time Data", "Market Analysis"],
    price: "From $8,999",
    category: "FinTech",
    color: "from-green-500 to-emerald-600"
  },
  {
    icon: <GraduationCap className="h-8 w-8" />,
    title: "Adaptive Learning Platform",
    description: "Personalized education based on learning styles",
    benefits: ["Adaptive Content", "Progress Tracking", "Performance Analytics", "Student Engagement"],
    price: "From $3,999",
    category: "EdTech",
    color: "from-purple-500 to-blue-600"
  },
  {
    icon: <Building className="h-8 w-8" />,
    title: "Smart Building Management",
    description: "AI-powered building automation and optimization",
    benefits: ["Energy Optimization", "Security Monitoring", "Occupant Comfort", "Predictive Maintenance"],
    price: "From $7,999",
    category: "Smart Buildings",
    color: "from-indigo-500 to-purple-600"
  }
];

const stats = [
  { label: "Services Available", value: "25+", icon: <Zap className="h-6 w-6" /> },
  { label: "AI Score Average", value: "94.5", icon: <Star className="h-6 w-6" /> },
  { label: "Customer Satisfaction", value: "98%", icon: <CheckCircle className="h-6 w-6" /> },
  { label: "Cost Reduction", value: "25-80%", icon: <TrendingUp className="h-6 w-6" /> },
  { label: "Global Coverage", value: "150+", icon: <Globe className="h-6 w-6" /> },
  { label: "Response Time", value: "<2hrs", icon: <Clock className="h-6 w-6" /> }
];

export function ServicesShowcase() {
  return (
    <section className="py-20 bg-zion-slate">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-zion-blue mb-4">
            Comprehensive Tech & AI Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our innovative micro SAAS solutions designed to transform your business operations, 
            enhance security, and drive growth through cutting-edge technology
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-2">
                <div className="p-3 rounded-full bg-zion-blue-light text-zion-cyan">
                  {stat.icon}
                </div>
              </div>
              <div className="text-2xl font-bold text-zion-blue">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {serviceHighlights.map((service, index) => (
            <Card key={index} className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className={`rounded-full w-16 h-16 bg-gradient-to-br ${service.color} flex items-center justify-center`}>
                    <div className="text-white">
                      {service.icon}
                    </div>
                  </div>
                  <Badge variant="outline" className="border-zion-blue text-zion-blue">
                    {service.category}
                  </Badge>
                </div>
                <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                <CardDescription className="text-sm text-gray-600">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="mb-4">
                  <h4 className="font-semibold text-zion-blue mb-2">Key Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="text-2xl font-bold text-zion-blue mb-4">
                  {service.price}
                </div>
              </CardContent>
              
              <CardContent className="pt-0">
                <Link to="/comprehensive-services">
                  <Button className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple">
                    Learn More
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-zion-blue to-zion-purple rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Join thousands of businesses that have already transformed their operations with our innovative solutions
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/comprehensive-services">
                <Button size="lg" className="bg-white text-zion-blue hover:bg-zion-slate-light">
                  <Users className="h-5 w-5 mr-2" />
                  Explore All Services
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-zion-blue">
                  <MessageSquare className="h-5 w-5 mr-2" />
                  Get Free Consultation
                </Button>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-f15c
              </Link>
            </div>
          </div>
        </div>
<<<<<<< HEAD
>>>>>>> origin/cursor/build-and-fix-errors-e276
      </div>
    </section>
=======
        {/* Benefits Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Why Choose Zion Tech Group?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-zion-blue-dark border-zion-blue-light text-white">
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-zion-purple rounded-full flex items-center justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-zion-slate-light">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-white rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-zion-blue mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Get in touch with our team to discuss your needs and discover how our micro SAAS solutions can drive your success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h4 className="text-2xl font-bold text-zion-blue mb-6">Contact Information</h4>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-zion-purple mr-3" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-gray-600">{CONTACT_INFO.mobile}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-zion-purple mr-3" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-600">{CONTACT_INFO.email}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-zion-purple mr-3" />
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-gray-600">{CONTACT_INFO.address}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Globe className="h-5 w-5 text-zion-purple mr-3" />
                  <div>
                    <p className="font-medium">Website</p>
                    <a href={CONTACT_INFO.website} className="text-zion-cyan hover:underline">
                      {CONTACT_INFO.website}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-2xl font-bold text-zion-blue mb-6">Quick Actions</h4>
              <div className="space-y-4">
                <Link to="/request-quote">
                  <Button className="w-full bg-zion-purple hover:bg-zion-purple-dark">
                    Request Custom Quote
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" className="w-full border-zion-purple text-zion-purple hover:bg-zion-purple hover:text-white">
                    Schedule Consultation
                  </Button>
                </Link>
                <Link to="/micro-saas-services">
                  <Button variant="outline" className="w-full border-zion-blue text-zion-blue hover:bg-zion-blue hover:text-white">
                    View All Services
                  </Button>
                </Link>
              </div>
              
              <div className="mt-8 p-6 bg-zion-blue/5 rounded-lg border border-zion-blue/20">
                <h5 className="font-medium text-zion-blue mb-2">What's Included:</h5>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 24/7 Technical Support</li>
                  <li>• 99.9% Uptime Guarantee</li>
                  <li>• SOC 2 Type II Compliant</li>
                  <li>• 30-Day Money Back Guarantee</li>
                  <li>• Free Migration Support</li>
                  <li>• Custom Integration Services</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/micro-saas-services">
              <Button size="lg" className="bg-zion-purple hover:bg-zion-purple-dark">
                Explore All Micro SAAS Services
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-ad2d
=======
      </div>
    </section>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-f15c
  );
}