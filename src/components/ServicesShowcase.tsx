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
              </div>
            ))}
          </div>
        </div>

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
              </Link>
            </div>
          </div>
        </div>
>>>>>>> origin/cursor/build-and-fix-errors-e276
      </div>
    </section>
  );
}