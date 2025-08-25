<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
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
<<<<<<< HEAD
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
=======
  CpuChipIcon, 
  CloudIcon, 
  ShieldCheckIcon, 
  LightBulbIcon,
  RocketLaunchIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';
=======
import { useState } from 'react';
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7

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

<<<<<<< HEAD
export function ServicesShowcase() {
  const featuredServices = MICRO_SAAS_SERVICES.filter(service => service.featured).slice(0, 6);

  return (
    <div className="py-20 bg-gradient-to-br from-zion-blue via-zion-blue-dark to-zion-purple">
=======
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
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
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
              </div>
            ))}
          </div>
        </div>

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

<<<<<<< HEAD
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
=======
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
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
      </div>
    </div>
  );
}