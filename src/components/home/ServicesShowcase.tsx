<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from 'framer-motion';
import { COMPREHENSIVE_SERVICES } from '@/data/comprehensiveServices';

export function ServicesShowcase() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  
  // Get featured services from the comprehensive services data
  const featuredServices = COMPREHENSIVE_SERVICES.filter(service => service.featured).slice(0, 8);

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      "AI & Machine Learning": "from-purple-500 to-indigo-600",
      "Cloud & DevOps": "from-blue-500 to-cyan-600",
      "Cybersecurity": "from-red-500 to-pink-600",
      "Data & Analytics": "from-green-500 to-emerald-600",
      "Micro SAAS": "from-emerald-500 to-teal-600",
      "Enterprise Solutions": "from-slate-600 to-gray-700"
    };
    return colors[category] || "from-gray-500 to-gray-600";
  };

  const getCategoryIcon = (category: string) => {
    const icons: { [key: string]: string } = {
      "AI & Machine Learning": "🤖",
      "Cloud & DevOps": "☁️",
      "Cybersecurity": "🔒",
      "Data & Analytics": "📊",
      "Micro SAAS": "💻",
      "Enterprise Solutions": "🏢"
    };
    return icons[category] || "💼";
  };

  const getPriceDisplay = (service: any) => {
    if (service.priceType === 'monthly') {
      return `$${service.price}/month`;
    } else if (service.priceType === 'yearly') {
      return `$${service.price}/year`;
    } else if (service.priceType === 'per-user') {
      return `$${service.price}/user`;
    } else {
      return `$${service.price.toLocaleString()}`;
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-zion-blue mb-4">Featured Services</h2>
          <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
            Discover our most popular and highly-rated services that are helping businesses transform and grow.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {featuredServices.map((service, index) => (
            <motion.div 
              key={service.id} 
              className="bg-white rounded-lg shadow-lg overflow-hidden border border-zion-slate/10 hover:shadow-xl transition-all duration-300 cursor-pointer group"
              variants={itemVariants}
              whileHover={{ 
                y: -8, 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              <div className={`h-2 bg-gradient-to-r ${getCategoryColor(service.category)}`}></div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <motion.span 
                      className="text-lg"
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                    >
                      {getCategoryIcon(service.category)}
                    </motion.span>
                    <span className="text-xs font-medium text-zion-slate bg-zion-slate/10 px-2 py-1 rounded-full">
                      {service.category}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <motion.span 
                      className="text-yellow-500 text-sm"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      ★
                    </motion.span>
                    <span className="text-sm text-zion-slate ml-1">{service.rating}</span>
                    <span className="text-xs text-zion-slate-light ml-1">({service.reviewCount})</span>
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-zion-blue mb-2 group-hover:text-zion-purple transition-colors">
                  {service.title}
                </h3>
                <p className="text-zion-slate-light text-sm mb-4 line-clamp-2">{service.description}</p>

                {/* Key Features Preview */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {service.features.slice(0, 2).map((feature, index) => (
                      <motion.span 
                        key={index} 
                        className="text-xs bg-zion-slate/10 text-zion-slate px-2 py-1 rounded-full"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        {feature}
                      </motion.span>
                    ))}
                    {service.features.length > 2 && (
                      <span className="text-xs text-zion-slate-light">
                        +{service.features.length - 2} more
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-zion-purple">{getPriceDisplay(service)}</span>
                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      to={`/comprehensive-services?service=${service.id}`}
                      className="text-zion-cyan hover:text-zion-cyan-dark font-medium text-sm transition-colors"
                    >
                      View Details →
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/comprehensive-services"
              className="inline-block bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Explore All Services
            </Link>
          </motion.div>
        </motion.div>

        {/* Service Categories Overview */}
        <motion.div 
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-zion-blue text-center mb-8">Service Categories</h3>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                title: "AI & Machine Learning",
                description: "Cutting-edge AI solutions for business automation and insights",
                icon: "🤖",
                color: "from-purple-500 to-indigo-600",
                link: "/ai-services",
                serviceCount: COMPREHENSIVE_SERVICES.filter(s => s.category === "AI & Machine Learning").length
              },
              {
                title: "Cloud & DevOps",
                description: "Scalable cloud infrastructure and automation solutions",
                icon: "☁️",
                color: "from-blue-500 to-cyan-600",
                link: "/comprehensive-services",
                serviceCount: COMPREHENSIVE_SERVICES.filter(s => s.category === "Cloud & DevOps").length
              },
              {
                title: "Cybersecurity",
                description: "Comprehensive security and compliance solutions",
                icon: "🔒",
                color: "from-red-500 to-pink-600",
                link: "/comprehensive-services",
                serviceCount: COMPREHENSIVE_SERVICES.filter(s => s.category === "Cybersecurity").length
              },
              {
                title: "Data & Analytics",
                description: "Data-driven insights and business intelligence",
                icon: "📊",
                color: "from-green-500 to-emerald-600",
                link: "/comprehensive-services",
                serviceCount: COMPREHENSIVE_SERVICES.filter(s => s.category === "Data & Analytics").length
              },
              {
                title: "Micro SAAS",
                description: "Scalable software solutions for growing businesses",
                icon: "💻",
                color: "from-emerald-500 to-teal-600",
                link: "/micro-saas",
                serviceCount: COMPREHENSIVE_SERVICES.filter(s => s.category === "Micro SAAS").length
              },
              {
                title: "Enterprise Solutions",
                description: "Large-scale transformation and enterprise systems",
                icon: "🏢",
                color: "from-slate-600 to-gray-700",
                link: "/enterprise-solutions",
                serviceCount: COMPREHENSIVE_SERVICES.filter(s => s.category === "Enterprise Solutions").length
              }
            ].map((category, index) => (
              <motion.div
                key={index}
                variants={categoryVariants}
                whileHover={{ 
                  y: -8, 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  to={category.link}
                  className="group block"
                >
                  <div className={`rounded-lg overflow-hidden h-full border border-zion-slate/10 bg-white p-6 transition-all duration-300 hover:border-zion-purple/50 hover:shadow-lg`}>
                    <motion.div 
                      className={`rounded-full w-16 h-16 bg-gradient-to-br ${category.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <div className="text-white text-2xl">
                        {category.icon}
                      </div>
                    </motion.div>
                    <h3 className="text-xl font-bold text-zion-blue mb-2 group-hover:text-zion-purple transition-colors">{category.title}</h3>
                    <p className="text-zion-slate-light mb-4">{category.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-zion-slate-light">{category.serviceCount} services</span>
                      <motion.span 
                        className="text-zion-cyan group-hover:text-zion-cyan-dark transition-colors"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        Learn More →
                      </motion.span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
=======
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
=======
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
>>>>>>> origin/cursor/expand-services-and-deploy-updates-6b7b
import { 
  Brain, 
  Cloud, 
  Shield, 
<<<<<<< HEAD
  Globe, 
  Smartphone, 
  Database, 
  Zap,
  ArrowRight,
  Star,
  DollarSign,
  Clock
} from "lucide-react";
import { COMPREHENSIVE_SERVICES } from "@/data/comprehensiveServices";

export function ServicesShowcase() {
  // Get featured services for showcase
  const featuredServices = COMPREHENSIVE_SERVICES.filter(service => service.featured).slice(0, 6);

  const getServiceIcon = (category: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
      'AI Development': <Brain className="h-8 w-8" />,
      'AI Services': <Zap className="h-8 w-8" />,
      'Cloud Services': <Cloud className="h-8 w-8" />,
      'Cybersecurity': <Shield className="h-8 w-8" />,
      'Web Development': <Globe className="h-8 w-8" />,
      'Mobile Development': <Smartphone className="h-8 w-8" />,
      'Data Services': <Database className="h-8 w-8" />,
      'Enterprise Solutions': <Globe className="h-8 w-8" />
    };
    return iconMap[category] || <Zap className="h-8 w-8" />;
  };

  return (
    <section className="py-20 bg-zion-blue">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Premium Services
          </h2>
          <p className="text-zion-slate-light text-lg max-w-3xl mx-auto">
            Discover our most popular and innovative solutions that are transforming businesses worldwide
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredServices.map((service) => (
            <Card key={service.id} className="bg-zion-blue-dark border-zion-blue-light hover:border-zion-purple/50 transition-all duration-300 hover:translate-y-[-5px]">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-zion-purple to-zion-purple-dark rounded-lg flex items-center justify-center">
                    <div className="text-white">
                      {getServiceIcon(service.category)}
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-yellow-400">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="text-sm font-medium">{service.rating}</span>
                  </div>
                </div>
                <CardTitle className="text-white text-lg">{service.title}</CardTitle>
                <CardDescription className="text-zion-slate-light text-sm">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 text-zion-cyan">
                    <DollarSign className="h-4 w-4" />
                    <span className="font-bold text-lg">{service.price?.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center gap-2 text-zion-slate-light">
                    <Clock className="h-4 w-4" />
                    <span className="text-xs">{service.availability}</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs border-zion-blue-light text-zion-slate-light">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-zion-purple/20 flex items-center justify-center">
                      <Brain className="h-3 w-3 text-zion-purple" />
                    </div>
                    <span className="text-xs text-zion-slate-light">AI Score: {service.aiScore}</span>
                  </div>
                  <Link to={`/services?service=${service.id}`}>
                    <Button size="sm" className="bg-zion-purple hover:bg-zion-purple-dark text-white">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/comprehensive-services">
            <Button size="lg" className="bg-zion-purple hover:bg-zion-purple-dark text-white px-8 py-3">
              View All Services
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </Link>
        </div>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-936f
      </div>
    </section>
  );
=======
  BarChart3, 
  Smartphone, 
  TrendingUp, 
  Code, 
  Server,
  Star,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  ExternalLink
} from 'lucide-react';
import { COMPREHENSIVE_SERVICES } from '@/data/comprehensiveServices';

const categoryIcons = {
  "AI & Machine Learning": <Brain className="h-8 w-8 text-zion-cyan" />,
  "Cloud & DevOps": <Cloud className="h-8 w-8 text-zion-cyan" />,
  "Cybersecurity": <Shield className="h-8 w-8 text-zion-cyan" />,
  "Data & Analytics": <BarChart3 className="h-8 w-8 text-zion-cyan" />,
  "Web & Mobile Development": <Smartphone className="h-8 w-8 text-zion-cyan" />,
  "Digital Transformation": <TrendingUp className="h-8 w-8 text-zion-cyan" />,
  "Blockchain & Web3": <Code className="h-8 w-8 text-zion-cyan" />,
  "IoT & Edge Computing": <Server className="h-8 w-8 text-zion-cyan" />
};

// Get featured services from each category
const getFeaturedServices = () => {
  const categories = [
    "AI & Machine Learning",
    "Cloud & DevOps", 
    "Cybersecurity",
    "Data & Analytics"
  ];
  
  return categories.map(category => {
    const services = COMPREHENSIVE_SERVICES.filter(s => s.category === category);
    return services[0]; // Get first service from each category
  }).filter(Boolean);
};

export function ServicesShowcase() {
  const featuredServices = getFeaturedServices();

  return (
    <section className="py-20 bg-zion-blue-dark">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            Comprehensive IT & AI Services
          </h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
            Discover our extensive portfolio of micro SAAS services, cutting-edge IT solutions, and innovative AI services designed to transform your business.
          </p>
          
          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="flex items-center gap-2 text-zion-cyan">
              <Phone className="h-5 w-5" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center gap-2 text-zion-cyan">
              <Mail className="h-5 w-5" />
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center gap-2 text-zion-cyan">
              <MapPin className="h-5 w-5" />
              <span>Middletown DE 19709</span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/comprehensive-services">
              <Button size="lg" className="bg-zion-cyan hover:bg-zion-cyan-dark text-white">
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
              <Phone className="mr-2 h-5 w-5" />
              Get Free Consultation
            </Button>
          </div>
        </div>

        {/* Featured Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* Service Categories Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {Object.entries(categoryIcons).map(([category, icon]) => (
            <div key={category} className="text-center">
              <div className="bg-zion-blue rounded-lg p-6 border border-zion-blue-light hover:border-zion-purple/50 transition-all duration-300">
                <div className="bg-zion-cyan/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  {icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{category}</h3>
                <p className="text-zion-slate-light text-sm mb-4">
                  {COMPREHENSIVE_SERVICES.filter(s => s.category === category).length} services available
                </p>
                <Link to="/comprehensive-services">
                  <Button variant="outline" size="sm" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
                    Explore
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Why Choose Zion Tech Group */}
        <div className="bg-zion-blue rounded-lg p-8 border border-zion-blue-light">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">Why Choose Zion Tech Group?</h3>
            <p className="text-zion-slate-light">Your trusted partner for innovative technology solutions</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-zion-cyan/20 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <Brain className="h-6 w-6 text-zion-cyan" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">AI-First Approach</h4>
              <p className="text-zion-slate-light text-sm">Cutting-edge AI, machine learning, and emerging technologies</p>
            </div>
            
            <div className="text-center">
              <div className="bg-zion-purple/20 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-6 w-6 text-zion-purple" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Enterprise Security</h4>
              <p className="text-zion-slate-light text-sm">Bank-level security and compliance for your business</p>
            </div>
            
            <div className="text-center">
              <div className="bg-zion-cyan/20 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-6 w-6 text-zion-cyan" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Proven Results</h4>
              <p className="text-zion-slate-light text-sm">Track record of successful digital transformations</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Business?</h3>
          <p className="text-zion-slate-light mb-6">
            Contact our team today to discuss your project requirements and get a personalized quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-zion-cyan hover:bg-zion-cyan-dark text-white">
              <Phone className="mr-2 h-5 w-5" />
              Call Now: +1 302 464 0950
            </Button>
            <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
              <Mail className="mr-2 h-5 w-5" />
              Email: kleber@ziontechgroup.com
            </Button>
          </div>
          <div className="mt-6 text-zion-slate-light">
            <p>Visit us: 364 E Main St STE 1008, Middletown DE 19709</p>
            <p className="mt-2">Website: <a href="https://ziontechgroup.com" className="text-zion-cyan hover:underline">https://ziontechgroup.com</a></p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service }: { service: any }) {
  return (
    <Card className="bg-zion-blue border-zion-blue-light hover:border-zion-purple/50 transition-all duration-300 hover:shadow-lg hover:shadow-zion-purple/20 h-full">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between mb-3">
          <Badge variant="secondary" className="text-xs">
            {service.category}
          </Badge>
          <div className="flex items-center gap-1">
            <Star className="h-3 w-3 text-yellow-400 fill-current" />
            <span className="text-xs text-zion-slate-light">{service.rating}</span>
          </div>
        </div>
        
        <CardTitle className="text-white text-base leading-tight">{service.title}</CardTitle>
        <CardDescription className="text-zion-slate-light text-sm leading-relaxed">
          {service.description.substring(0, 100)}...
        </CardDescription>
      </CardHeader>

      <CardContent className="pt-0">
        {/* Pricing */}
        <div className="flex items-center justify-between mb-4">
          <div className="text-left">
            <div className="text-xl font-bold text-zion-cyan">${service.price.toLocaleString()}</div>
            <div className="text-xs text-zion-slate-light">
              {service.pricingModel === 'monthly' ? '/month' : 'one-time'}
            </div>
          </div>
          <div className="text-right">
            <div className="text-xs text-zion-slate-light">
              Market: {service.marketPrice}
            </div>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 mb-4">
          {service.tags.slice(0, 2).map((tag: string) => (
            <Badge key={tag} variant="outline" className="text-xs border-zion-blue-light text-zion-slate-light">
              {tag}
            </Badge>
          ))}
        </div>

        {/* Action Button */}
        <Button 
          size="sm" 
          className="w-full bg-zion-cyan hover:bg-zion-cyan-dark text-white"
          onClick={() => window.open(service.contactLink, '_blank')}
        >
          <ExternalLink className="mr-2 h-4 w-4" />
          Get Quote
        </Button>

        {/* AI Score */}
        <div className="mt-3 flex items-center justify-center">
          <div className="flex items-center gap-2">
            <Brain className="h-4 w-4 text-zion-purple" />
            <span className="text-xs text-zion-slate-light">AI Score: {service.aiScore}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
>>>>>>> origin/cursor/expand-services-and-deploy-updates-6b7b
}