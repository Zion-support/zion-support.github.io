import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { 
  Search, 
  Filter, 
  Star, 
  ArrowRight, 
  CheckCircle, 
  Zap, 
  Shield, 
  Globe, 
  Target,
  TrendingUp,
  Users,
  Award,
  Clock,
  DollarSign,
  ExternalLink
} from "lucide-react";
// Comprehensive services data
const servicesData = {
  ai: {
    title: "AI & Machine Learning",
    description: "Cutting-edge artificial intelligence solutions",
    services: [
      {
        id: 1,
        name: "AI-Powered Business Automation",
        description: "Transform your business operations with intelligent automation",
        price: "From $5,000/month",
        features: ["Process Automation", "Predictive Analytics", "Natural Language Processing"],
        icon: Zap,
        category: "AI Solutions"
      },
      {
        id: 2,
        name: "Machine Learning Platform",
        description: "Build, deploy, and scale ML models with ease",
        price: "From $3,000/month",
        features: ["Model Training", "Real-time Inference", "AutoML"],
        icon: Target,
        category: "AI Solutions"
      }
    ]
  },
  saas: {
    title: "SAAS Platforms",
    description: "Scalable software-as-a-service solutions",
    services: [
      {
        id: 3,
        name: "Enterprise SAAS Platform",
        description: "Complete business management platform",
        price: "From $2,500/month",
        features: ["Multi-tenant Architecture", "API Integration", "Analytics Dashboard"],
        icon: Globe,
        category: "SAAS Solutions"
      }
    ]
  },
  it: {
    title: "IT Services",
    description: "Comprehensive IT infrastructure and support",
    services: [
      {
        id: 4,
        name: "Cloud Infrastructure",
        description: "Secure and scalable cloud solutions",
        price: "From $1,500/month",
        features: ["AWS/Azure/GCP", "24/7 Monitoring", "Auto-scaling"],
        icon: Shield,
        category: "IT Services"
      }
    ]
  }
};

export function EnhancedComprehensiveServicesShowcase() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedService, setSelectedService] = useState(null);

  // Flatten all services for filtering
  const allServices = Object.values(servicesData).flatMap(category => 
    category.services.map(service => ({
      ...service,
      categoryName: category.title
    }))
  );

  const filteredServices = allServices.filter(service => {
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const categories = [
    { id: 'all', name: 'All Services', count: allServices.length },
    { id: 'AI Solutions', name: 'AI Solutions', count: servicesData.ai.services.length },
    { id: 'SAAS Solutions', name: 'SAAS Solutions', count: servicesData.saas.services.length },
    { id: 'IT Services', name: 'IT Services', count: servicesData.it.services.length }
  ];

  const handleServiceClick = (service) => {
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Header Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Zion Tech Group
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              {" "}Innovative Services 2025
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Discover our cutting-edge portfolio of micro SAAS solutions, IT services, and AI-powered innovations designed to transform your business and drive competitive advantage in the digital age
          </p>
          
          {/* Key Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20">
              <div className="text-3xl font-bold text-blue-400 mb-2">{allServices.length}+</div>
              <div className="text-sm text-gray-300">Innovative Services</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20">
              <div className="text-3xl font-bold text-cyan-400 mb-2">15+</div>
              <div className="text-sm text-gray-300">Technology Categories</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20">
              <div className="text-3xl font-bold text-green-400 mb-2">99%</div>
              <div className="text-sm text-gray-300">Client Satisfaction</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20">
              <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
              <div className="text-sm text-gray-300">Support Available</div>
            </div>
          </div>

          {/* Search and Filter */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <input type="text" placeholder="Search services, features, or technologies..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full px-4 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400"/>
              <svg className="absolute right-3 top-3 h-6 w-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
              </svg>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (<button key={category.id} onClick={() => setActiveCategory(category.id)} className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${activeCategory === category.id
                ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white'
                : 'bg-white/10 backdrop-blur-lg border border-white/20 text-gray-300 hover:bg-white/20'}`}>
                {category.name} ({category.count})
              </button>))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (<div key={service.id} onClick={() => handleServiceClick(service)} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.name}</h3>
                <p className="text-gray-300 mb-4 line-clamp-3">{service.description}</p>
                
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-blue-600/20 text-blue-400 text-sm rounded-full border border-blue-600/30">
                    {service.category}
                  </span>
                </div>

                <div className="mb-6">
                  <div className="text-2xl font-bold text-green-400 mb-2">{service.price}</div>
                  <div className="text-sm text-gray-400">{service.period}</div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-blue-400 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.slice(0, 3).map((feature, idx) => (<li key={idx} className="text-sm text-gray-300 flex items-center">
                        <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                        {feature}
                      </li>))}
                    {service.features.length > 3 && (<li className="text-sm text-gray-400 flex items-center">
                        <span className="w-2 h-2 bg-gray-400 rounded-full mr-2"></span>
                        +{service.features.length - 3} more features
                      </li>)}
                  </ul>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (<svg key={i} className={`w-4 h-4 ${i < Math.floor(service.rating) ? 'fill-current' : 'fill-gray-600'}`} viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                        </svg>))}
                    </div>
                    <span className="text-sm text-gray-400">({service.reviews})</span>
                  </div>
                  <button className="text-blue-400 hover:text-blue-300 transition-colors duration-300">
                    Learn More →
                  </button>
                </div>
              </div>))}
          </div>
        </div>
      </section>

      {/* Why Choose Zion Tech Group */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We combine cutting-edge technology with proven business expertise to deliver solutions that drive real results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold text-white mb-3">Innovation First</h3>
              <p className="text-gray-300">
                We stay ahead of technology trends, offering the latest AI, quantum computing, and emerging tech solutions
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="text-4xl mb-4">💼</div>
              <h3 className="text-xl font-semibold text-white mb-3">Business Focused</h3>
              <p className="text-gray-300">
                Every solution is designed with ROI in mind, ensuring measurable business impact and value creation
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold text-white mb-3">Enterprise Grade</h3>
              <p className="text-gray-300">
                Built with security, scalability, and compliance in mind for enterprise-level reliability
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/50 to-cyan-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our innovative services can help drive your digital transformation and competitive advantage
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:kleber@ziontechgroup.com" className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300">
              Get Custom Quote
            </a>
            <a href="tel:+13024640950" className="inline-flex items-center px-8 py-3 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300">
              Call Us: +1 302 464 0950
            </a>
          </div>
        </div>
      </section>

      {/* Service Detail Modal */}
      {selectedService && (<div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <div className="text-4xl mb-4">{selectedService.icon}</div>
                  <h2 className="text-3xl font-bold text-white mb-2">{selectedService.name}</h2>
                  <p className="text-xl text-gray-300 mb-4">{selectedService.tagline}</p>
                </div>
                <button onClick={closeModal} className="text-gray-400 hover:text-white transition-colors duration-300">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
                  </svg>
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Service Overview</h3>
                  <p className="text-gray-300 mb-6">{selectedService.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {selectedService.features.map((feature, idx) => (<li key={idx} className="text-gray-300 flex items-center">
                          <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                          {feature}
                        </li>))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Technology Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedService.technology.map((tech, idx) => (<span key={idx} className="px-3 py-1 bg-blue-600/20 text-blue-400 text-sm rounded-full border border-blue-600/30">
                          {tech}
                        </span>))}
                    </div>
                  </div>
                </div>

                <div>
                  <div className="bg-white/10 rounded-lg p-6 mb-6">
                    <h4 className="text-lg font-semibold text-white mb-4">Pricing & Plans</h4>
                    <div className="text-3xl font-bold text-green-400 mb-2">{selectedService.price}</div>
                    <div className="text-gray-400 mb-4">{selectedService.period}</div>
                    
                    {selectedService.setupFee && (<div className="mb-2">
                        <span className="text-gray-400">Setup Fee: </span>
                        <span className="text-white">{selectedService.setupFee}</span>
                      </div>)}
                    
                    {selectedService.annualDiscount && (<div className="mb-2">
                        <span className="text-gray-400">Annual Discount: </span>
                        <span className="text-white">{selectedService.annualDiscount}</span>
                      </div>)}
                  </div>

                  <div className="bg-white/10 rounded-lg p-6 mb-6">
                    <h4 className="text-lg font-semibold text-white mb-4">Business Impact</h4>
                    <div className="mb-4">
                      <h5 className="text-blue-400 font-semibold mb-2">ROI</h5>
                      <p className="text-gray-300 text-sm">{selectedService.roi}</p>
                    </div>
                    <div className="mb-4">
                      <h5 className="text-blue-400 font-semibold mb-2">Market Position</h5>
                      <p className="text-gray-300 text-sm">{selectedService.marketPosition}</p>
                    </div>
                    <div>
                      <h5 className="text-blue-400 font-semibold mb-2">Target Audience</h5>
                      <p className="text-gray-300 text-sm">{selectedService.targetAudience}</p>
                    </div>
                  </div>

                  <div className="bg-white/10 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-white mb-4">Get Started</h4>
                    <div className="space-y-3">
                      <a href={`mailto:${selectedService.contactInfo.email}?subject=Inquiry about ${selectedService.name}`} className="block w-full text-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300">
                        Request Demo
                      </a>
                      <a href={`tel:${selectedService.contactInfo.mobile}`} className="block w-full text-center px-6 py-3 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300">
                        Call Us: {selectedService.contactInfo.mobile}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>)}
    </div>
  );
}
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { 
  COMPREHENSIVE_SERVICES,
  ComprehensiveService 
} from "../data/comprehensiveServices";
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
  Globe,
  Search,
  Filter,
  Sparkles,
  Rocket,
  Target,
  Users,
  Clock,
  Award
} from "lucide-react";
import Link from "next/link";

const categoryIcons = {
  'AI & Machine Learning': Brain,
  'IT Infrastructure': Cloud,
  'Data Analytics': BarChart3,
  'Software Development': Code,
  'FinTech': DollarSign,
  'HealthTech': Heart,
  'E-commerce': ShoppingCart,
  'EdTech': GraduationCap,
  'Cybersecurity': Shield,
  'Cloud Services': Cloud
};

const categoryColors = {
  'AI & Machine Learning': 'from-purple-500 to-indigo-600',
  'IT Infrastructure': 'from-blue-500 to-cyan-600',
  'Data Analytics': 'from-green-500 to-emerald-600',
  'Software Development': 'from-orange-500 to-red-600',
  'FinTech': 'from-yellow-500 to-orange-600',
  'HealthTech': 'from-pink-500 to-rose-600',
  'E-commerce': 'from-indigo-500 to-purple-600',
  'EdTech': 'from-teal-500 to-green-600',
  'Cybersecurity': 'from-red-500 to-pink-600',
  'Cloud Services': 'from-blue-500 to-purple-600'
};

const supportLevelColors = {
  'basic': 'bg-gray-500',
  'standard': 'bg-blue-500',
  'premium': 'bg-purple-500',
  'enterprise': 'bg-gradient-to-r from-purple-500 to-cyan-500'
};

export function EnhancedComprehensiveServicesShowcase() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedSupportLevel, setSelectedSupportLevel] = useState<string>('all');

  // Get unique categories
  const categories = ['all', ...Array.from(new Set(COMPREHENSIVE_SERVICES.map(s => s.category)))];
  const supportLevels = ['all', 'basic', 'standard', 'premium', 'enterprise'];

  // Filter services
  const filteredServices = COMPREHENSIVE_SERVICES.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSupport = selectedSupportLevel === 'all' || service.supportLevel === selectedSupportLevel;
    
    return matchesSearch && matchesCategory && matchesSupport;
  });

  const formatPrice = (service: ComprehensiveService) => {
    if (service.pricingModel === 'per-project') {
      return `${service.currency}${service.price.toLocaleString()}`;
    } else if (service.pricingModel === 'monthly') {
      return `${service.currency}${service.price.toLocaleString()}/month`;
    } else if (service.pricingModel === 'yearly') {
      return `${service.currency}${(service.price * 12).toLocaleString()}/year`;
    } else if (service.pricingModel === 'per-user') {
      return `${service.currency}${service.price.toLocaleString()}/user`;
    }
    return service.marketPrice;
  };

  return (
    <div className="py-20 bg-gradient-to-br from-zion-blue via-zion-blue-dark to-zion-purple">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20 mb-6">
            <Sparkles className="w-5 h-5 text-zion-cyan" />
            <span className="text-white font-medium">Enterprise-Grade Solutions</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Comprehensive Tech Services
          </h2>
          <p className="text-xl text-zion-slate-light max-w-4xl mx-auto mb-8">
            Transform your business with our cutting-edge technology solutions. 
            From AI strategy to infrastructure optimization, we deliver results that drive growth.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-gradient-to-r from-zion-purple to-zion-cyan hover:from-zion-purple-dark hover:to-zion-cyan-dark text-white">
                <Rocket className="h-5 w-5 mr-2" />
                Get Free Consultation
              </Button>
            </Link>
            <Link href="/pricing">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-zion-blue">
                <DollarSign className="h-5 w-5 mr-2" />
                View Pricing
              </Button>
            </Link>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="mb-12">
          <div className="max-w-4xl mx-auto">
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search services, features, or use cases..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 py-4 text-lg bg-white/10 border-white/20 text-white placeholder-gray-300 focus:bg-white/20 focus:border-zion-cyan"
              />
            </div>
            
            <div className="flex flex-wrap gap-4 justify-center">
              {/* Category Filter */}
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-zion-cyan" />
                <span className="text-white font-medium">Category:</span>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="bg-white/10 border border-white/20 text-white rounded-lg px-3 py-2 focus:border-zion-cyan"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category === 'all' ? 'All Categories' : category}
                    </option>
                  ))}
                </select>
              </div>

              {/* Support Level Filter */}
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-zion-cyan" />
                <span className="text-white font-medium">Support:</span>
                <select
                  value={selectedSupportLevel}
                  onChange={(e) => setSelectedSupportLevel(e.target.value)}
                  className="bg-white/10 border border-white/20 text-white rounded-lg px-3 py-2 focus:border-zion-cyan"
                >
                  {supportLevels.map(level => (
                    <option key={level} value={level}>
                      {level === 'all' ? 'All Levels' : level.charAt(0).toUpperCase() + level.slice(1)}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredServices.map((service) => {
            const IconComponent = categoryIcons[service.category as keyof typeof categoryIcons];
            const colorClass = categoryColors[service.category as keyof typeof categoryColors];
            
            return (
              <Card key={service.id} className="bg-zion-blue-dark/80 backdrop-blur-sm border-zion-blue-light text-white hover:border-zion-purple/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-zion-purple/25">
                <CardHeader className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-16 h-16 bg-gradient-to-br ${colorClass} rounded-2xl flex items-center justify-center`}>
                      {IconComponent && <IconComponent className="h-8 w-8 text-white" />}
                    </div>
                    <Badge className={`${supportLevelColors[service.supportLevel]} text-white`}>
                      {service.supportLevel}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-zion-slate-light">
                    {service.description.substring(0, 120)}...
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  {/* Price */}
                  <div className="mb-4">
                    <div className="text-2xl font-bold text-zion-cyan">
                      {formatPrice(service)}
                    </div>
                    <div className="text-sm text-zion-slate-light">
                      {service.pricingModel === 'per-project' ? 'One-time project' : 
                       service.pricingModel === 'monthly' ? 'Monthly subscription' :
                       service.pricingModel === 'yearly' ? 'Annual subscription' :
                       service.pricingModel === 'per-user' ? 'Per user pricing' : 'Custom pricing'}
                    </div>
                  </div>

                  {/* Features Preview */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
                      <Target className="w-4 h-4 text-zion-cyan" />
                      Key Features
                    </h4>
                    <div className="space-y-1">
                      {service.features.slice(0, 3).map((feature, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm text-zion-slate-light">
                          <CheckCircle className="w-3 h-3 text-green-400" />
                          {feature}
                        </div>
                      ))}
                      {service.features.length > 3 && (
                        <div className="text-xs text-zion-slate-light text-center">
                          +{service.features.length - 3} more features
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Benefits Preview */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-zion-cyan" />
                      Benefits
                    </h4>
                    <div className="space-y-1">
                      {service.benefits.slice(0, 2).map((benefit, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm text-zion-slate-light">
                          <Zap className="w-3 h-3 text-yellow-400" />
                          {benefit}
                        </div>
                      ))}
                      {service.benefits.length > 2 && (
                        <div className="text-xs text-zion-slate-light text-center">
                          +{service.benefits.length - 2} more benefits
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Delivery & Support */}
                  <div className="flex items-center justify-between text-sm text-zion-slate-light mb-4">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {service.estimatedDelivery}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {service.supportLevel}
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.tags.slice(0, 3).map((tag, index) => (
                      <Badge key={index} variant="secondary" className="bg-zion-purple/20 text-zion-cyan text-xs">
                        {tag}
                      </Badge>
                    ))}
                    {service.tags.length > 3 && (
                      <Badge variant="secondary" className="bg-zion-purple/20 text-zion-cyan text-xs">
                        +{service.tags.length - 3}
                      </Badge>
                    )}
                  </div>

                  {/* CTA */}
                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1 bg-gradient-to-r from-zion-purple to-zion-cyan hover:from-zion-purple-dark hover:to-zion-cyan-dark">
                      Learn More
                    </Button>
                    <Button size="sm" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark">
                      <Phone className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* No Results */}
        {filteredServices.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
            <p className="text-zion-slate-light">Try adjusting your search or filter criteria.</p>
          </div>
        )}

        {/* Contact CTA */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-white/20">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-zion-slate-light text-lg max-w-3xl mx-auto">
              Get in touch with our experts for a personalized consultation and discover 
              how our services can drive your success and accelerate your growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-zion-cyan/20 rounded-full flex items-center justify-center mb-4">
                <Phone className="w-8 h-8 text-zion-cyan" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Call Us</h4>
              <p className="text-zion-cyan font-mono">+1 302 464 0950</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-zion-purple/20 rounded-full flex items-center justify-center mb-4">
                <Mail className="w-8 h-8 text-zion-purple" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Email Us</h4>
              <p className="text-zion-purple font-mono">kleber@ziontechgroup.com</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-zion-blue/20 rounded-full flex items-center justify-center mb-4">
                <MapPin className="w-8 h-8 text-zion-blue" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Visit Us</h4>
              <p className="text-zion-blue font-mono text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Link href="/contact">
              <Button size="lg" className="bg-gradient-to-r from-zion-purple to-zion-cyan hover:from-zion-purple-dark hover:to-zion-cyan-dark text-white">
                Schedule Free Consultation
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
>>>>>>> origin/enhanced-app-improvements
