<<<<<<< HEAD
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
<<<<<<< HEAD
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Clock, DollarSign, Users, ArrowRight, Sparkles } from 'lucide-react';
import { comprehensiveServices, serviceCategories } from '@/data/comprehensiveServices';

export function EnhancedServicesShowcase() {
  const featuredServices = comprehensiveServices.slice(0, 6);

  return (
    <section className="py-20 bg-gradient-to-b from-zion-blue-dark to-zion-blue">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="w-8 h-8 text-zion-purple mr-3" />
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Our Premium Services
            </h2>
            <Sparkles className="w-8 h-8 text-zion-purple ml-3" />
          </div>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Discover cutting-edge AI solutions, enterprise IT services, and innovative Micro SAAS platforms designed to transform your business.
          </p>
        </div>

        {/* Service Categories */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {serviceCategories.map((category) => (
            <Card key={category.id} className="bg-zion-blue-light border-zion-purple/20 hover:border-zion-purple/40 transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center pb-3">
                <div className="text-4xl mb-2">{category.icon}</div>
                <CardTitle className="text-lg text-white">{category.name}</CardTitle>
              </CardHeader>
              <CardContent className="text-center pt-0">
                <CardDescription className="text-zion-slate-light text-sm">
                  {category.description}
                </CardDescription>
                <Badge variant="secondary" className="mt-2 bg-zion-purple/20 text-zion-purple border-zion-purple/30">
                  {category.count} services
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredServices.map((service) => (
            <Card key={service.id} className="bg-zion-blue-light border-zion-purple/20 hover:border-zion-purple/40 transition-all duration-300 hover:scale-105 group">
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={service.images[0]}
                  alt={service.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-zion-purple text-white">
                    {service.category}
                  </Badge>
                </div>
                <div className="absolute bottom-4 left-4">
                  <Badge variant="secondary" className="bg-zion-blue-dark/80 text-zion-cyan">
                    AI Score: {service.aiScore}
                  </Badge>
                </div>
              </div>
              
              <CardHeader className="pb-3">
                <CardTitle className="text-xl text-white line-clamp-2 group-hover:text-zion-cyan transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-zion-slate-light line-clamp-3">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-0">
                {/* Pricing and Rating */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <DollarSign className="w-4 h-4 text-zion-cyan" />
                    <span className="text-white font-semibold">
                      {service.currency}{service.price}
                    </span>
                    <span className="text-zion-slate-light text-sm">
                      /{service.pricingModel === 'monthly' ? 'mo' : service.pricingModel === 'hourly' ? 'hr' : 'project'}
                    </span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-white text-sm">{service.rating}</span>
                    <span className="text-zion-slate-light text-sm">({service.reviewCount})</span>
                  </div>
                </div>

                {/* Features Preview */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <Badge key={index} variant="outline" className="text-xs border-zion-purple/30 text-zion-slate-light">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Delivery Time */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2 text-zion-slate-light text-sm">
                    <Clock className="w-4 h-4" />
                    <span>Delivery: {service.estimatedDelivery}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-zion-slate-light text-sm">
                    <Users className="w-4 h-4" />
                    <span>{service.targetAudience.length} audiences</span>
                  </div>
                </div>

                {/* CTA Button */}
                <Button 
                  className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white group-hover:shadow-lg transition-all duration-300"
                  asChild
                >
                  <Link to={`/services/${service.id}`}>
                    View Details
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Services CTA */}
        <div className="text-center">
          <Button 
            size="lg"
            className="bg-gradient-to-r from-zion-cyan to-zion-cyan-dark hover:from-zion-cyan-light hover:to-zion-cyan text-zion-blue-dark text-lg px-8 py-6"
            asChild
          >
            <Link to="/services">
              Explore All Services
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
          <p className="text-zion-slate-light mt-4">
            Transform your business with our comprehensive suite of AI-powered solutions
          </p>
=======
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Zap, 
  Shield, 
  Globe, 
  TrendingUp, 
  ArrowUpRight, 
  Award, 
  Users, 
  Brain,
  ArrowRight,
  Star,
  CheckCircle
} from 'lucide-react';

const featuredServices = [
  {
    id: "ai-ml-001",
    title: "AI-Powered Customer Service Bot",
    description: "Custom AI chatbot with NLP, sentiment analysis, and multi-language support",
    category: "AI & Machine Learning",
    price: "$3,500",
    rating: 4.9,
    reviewCount: 127,
    icon: <Brain className="h-6 w-6" />,
    color: "from-purple-500 to-indigo-600",
    link: "/comprehensive-services",
    features: ["NLP Processing", "Multi-language", "CRM Integration", "24/7 Support"]
  },
  {
    id: "cybersecurity-001",
    title: "Comprehensive Security Audit",
    description: "Full security assessment with penetration testing and compliance review",
    category: "Cybersecurity",
    price: "$6,500",
    rating: 4.9,
    reviewCount: 178,
    icon: <Shield className="h-6 w-6" />,
    color: "from-red-500 to-pink-600",
    link: "/comprehensive-services",
    features: ["Vulnerability Scan", "Penetration Testing", "Compliance Review", "Security Roadmap"]
  },
  {
    id: "cloud-devops-001",
    title: "Multi-Cloud Migration",
    description: "End-to-end cloud migration with optimization across AWS, Azure, and GCP",
    category: "Cloud & DevOps",
    price: "$8,500",
    rating: 4.9,
    reviewCount: 203,
    icon: <Globe className="h-6 w-6" />,
    color: "from-blue-500 to-cyan-600",
    link: "/comprehensive-services",
    features: ["Cloud Assessment", "Multi-cloud Design", "Security Setup", "24/7 Monitoring"]
  },
  {
    id: "data-analytics-001",
    title: "Big Data Pipeline & Analytics",
    description: "Enterprise-scale data processing with ML-powered insights and visualization",
    category: "Data & Analytics",
    price: "$15,000",
    rating: 4.9,
    reviewCount: 67,
    icon: <TrendingUp className="h-6 w-6" />,
    color: "from-green-500 to-emerald-600",
    link: "/comprehensive-services",
    features: ["Data Ingestion", "Real-time Processing", "ML Analytics", "Scalable Infrastructure"]
  }
];

const serviceCategories = [
  {
    name: "AI & Machine Learning",
    description: "Intelligent automation and predictive analytics",
    icon: <Zap className="h-8 w-8" />,
    color: "from-purple-500 to-indigo-600",
    link: "/comprehensive-services",
    count: "12+ Services"
  },
  {
    name: "Cybersecurity",
    description: "Advanced protection and compliance solutions",
    icon: <Shield className="h-8 w-8" />,
    color: "from-red-500 to-pink-600",
    link: "/comprehensive-services",
    count: "8+ Services"
  },
  {
    name: "Cloud & DevOps",
    description: "Scalable infrastructure and automation",
    icon: <Globe className="h-8 w-8" />,
    color: "from-blue-500 to-cyan-600",
    link: "/comprehensive-services",
    count: "15+ Services"
  },
  {
    name: "Data & Analytics",
    description: "Business intelligence and insights",
    icon: <TrendingUp className="h-8 w-8" />,
    color: "from-green-500 to-emerald-600",
    link: "/comprehensive-services",
    count: "10+ Services"
  }
];

export function EnhancedServicesShowcase() {
  return (
    <section className="py-20 bg-zion-blue">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Comprehensive IT & AI Solutions
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Discover our extensive range of micro SAAS services, enterprise IT solutions, and cutting-edge AI services. 
            From AI-powered chatbots to zero-trust security, we deliver innovative solutions that drive business growth.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/comprehensive-services">
              <Button size="lg" className="bg-zion-cyan text-zion-blue-dark hover:bg-zion-cyan-light">
                Explore All Services
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
              <Star className="h-5 w-5 mr-2" />
              View Pricing
            </Button>
          </div>
        </div>

        {/* Featured Services */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-white text-center mb-12">Featured Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredServices.map((service) => (
              <Card key={service.id} className="bg-zion-blue-dark border-zion-blue-light hover:border-zion-purple/50 transition-all duration-300 hover:translate-y-[-5px] hover:shadow-xl">
                <CardHeader className="text-center pb-4">
                  <div className={`mx-auto mb-4 p-3 bg-gradient-to-br ${service.color} rounded-full w-16 h-16 flex items-center justify-center`}>
                    <div className="text-white">
                      {service.icon}
                    </div>
                  </div>
                  <Badge variant="secondary" className="bg-zion-purple/20 text-zion-cyan mb-2">
                    {service.category}
                  </Badge>
                  <CardTitle className="text-white text-lg leading-tight">{service.title}</CardTitle>
                  <CardDescription className="text-zion-slate-light text-sm">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-zion-slate-light text-sm">Price:</span>
                      <span className="text-white font-semibold">{service.price}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-zion-slate-light text-sm">Rating:</span>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                        <span className="text-white text-sm">{service.rating}</span>
                        <span className="text-zion-slate-light text-xs ml-1">({service.reviewCount})</span>
                      </div>
                    </div>
                    <div className="pt-2">
                      <h4 className="text-white font-semibold text-sm mb-2">Key Features:</h4>
                      <div className="space-y-1">
                        {service.features.map((feature, index) => (
                          <div key={index} className="flex items-center text-xs text-zion-slate-light">
                            <CheckCircle className="h-3 w-3 text-zion-cyan mr-2 flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="pt-4">
                  <Link to={service.link} className="w-full">
                    <Button className="w-full bg-zion-purple hover:bg-zion-purple-dark">
                      Learn More
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
=======
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ENHANCED_SERVICES, 
  getServicesByCategory, 
  getPopularServices, 
  getNewServices, 
  getPremiumServices,
  type EnhancedService 
} from "@/data/enhancedServices";
import { 
  Star, 
  Clock, 
  Users, 
  Zap, 
  TrendingUp, 
  Shield, 
  Cloud, 
  Brain,
  Code,
  Settings,
  BarChart3,
  ArrowRight,
  Play,
  ExternalLink
} from "lucide-react";

export function EnhancedServicesShowcase() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const popularServices = getPopularServices();
  const newServices = getNewServices();
  const premiumServices = getPremiumServices();

  const categories = [
    { id: 'all', label: 'All Services', icon: <Zap className="h-4 w-4" /> },
    { id: 'AI', label: 'AI Services', icon: <Brain className="h-4 w-4" /> },
    { id: 'IT', label: 'IT Services', icon: <Settings className="h-4 w-4" /> },
    { id: 'SAAS', label: 'SAAS Solutions', icon: <Cloud className="h-4 w-4" /> },
    { id: 'Development', label: 'Development', icon: <Code className="h-4 w-4" /> },
    { id: 'Consulting', label: 'Consulting', icon: <Users className="h-4 w-4" /> },
    { id: 'Automation', label: 'Automation', icon: <TrendingUp className="h-4 w-4" /> },
    { id: 'Integration', label: 'Integration', icon: <BarChart3 className="h-4 w-4" /> }
  ];

  const getFilteredServices = () => {
    if (selectedCategory === 'all') return ENHANCED_SERVICES;
    return getServicesByCategory(selectedCategory);
  };

  const formatPrice = (service: EnhancedService) => {
    const { min, max, currency, pricingModel } = service.price;
    if (pricingModel === 'hourly') {
      return `${currency}${min}-${max}/hour`;
    } else if (pricingModel === 'monthly') {
      return `${currency}${min}-${max}/month`;
    } else if (pricingModel === 'project') {
      return `${currency}${min.toLocaleString()}-${max.toLocaleString()}`;
    }
    return `${currency}${min}-${max}`;
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI': return <Brain className="h-5 w-5 text-purple-400" />;
      case 'IT': return <Settings className="h-5 w-5 text-blue-400" />;
      case 'SAAS': return <Cloud className="h-5 w-5 text-cyan-400" />;
      case 'Development': return <Code className="h-5 w-5 text-green-400" />;
      case 'Consulting': return <Users className="h-5 w-5 text-orange-400" />;
      case 'Automation': return <TrendingUp className="h-5 w-5 text-pink-400" />;
      case 'Integration': return <BarChart3 className="h-5 w-5 text-yellow-400" />;
      default: return <Zap className="h-5 w-5 text-gray-400" />;
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-background via-background/95 to-background/90 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-zion-purple/20 to-zion-cyan/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-zion-blue/20 to-zion-purple/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 border border-zion-purple/30 rounded-full px-4 py-2 mb-6">
            <Zap className="h-4 w-4 text-zion-cyan" />
            <span className="text-sm font-medium text-zion-cyan">Premium Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 bg-gradient-to-r from-white via-zion-cyan to-zion-purple bg-clip-text text-transparent">
            Discover Our Premium Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From AI-powered solutions to enterprise IT services, we offer comprehensive technology solutions 
            that drive innovation and business growth. Explore our curated selection of premium services.
          </p>
        </div>

        {/* Featured Services Tabs */}
        <Tabs defaultValue="popular" className="mb-16">
          <TabsList className="grid w-full grid-cols-4 bg-zion-blue-dark/50 border border-zion-purple/30 p-1 rounded-lg">
            <TabsTrigger value="popular" className="data-[state=active]:bg-zion-purple data-[state=active]:text-white">
              <Star className="h-4 w-4 mr-2" />
              Popular
            </TabsTrigger>
            <TabsTrigger value="new" className="data-[state=active]:bg-zion-purple data-[state=active]:text-white">
              <Zap className="h-4 w-4 mr-2" />
              New
            </TabsTrigger>
            <TabsTrigger value="premium" className="data-[state=active]:bg-zion-purple data-[state=active]:text-white">
              <Shield className="h-4 w-4 mr-2" />
              Premium
            </TabsTrigger>
            <TabsTrigger value="all" className="data-[state=active]:bg-zion-purple data-[state=active]:text-white">
              <BarChart3 className="h-4 w-4 mr-2" />
              All
            </TabsTrigger>
          </TabsList>

          <TabsContent value="popular" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {popularServices.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="new" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {newServices.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="premium" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {premiumServices.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="all" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ENHANCED_SERVICES.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Category Filter */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-center mb-8 text-white">
            Browse by Category
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className={`gap-2 transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-zion-purple hover:bg-zion-purple-dark text-white'
                    : 'border-zion-purple/30 text-zion-cyan hover:bg-zion-purple/10 hover:border-zion-purple/50'
                }`}
              >
                {category.icon}
                {category.label}
              </Button>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-099c
            ))}
          </div>
        </div>

<<<<<<< HEAD
        {/* Service Categories */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white text-center mb-12">Service Categories</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceCategories.map((category) => (
              <Link key={category.name} to={category.link} className="group block">
                <Card className="bg-zion-blue-dark border-zion-blue-light hover:border-zion-purple/50 transition-all duration-300 hover:translate-y-[-5px] hover:shadow-xl cursor-pointer">
                  <CardHeader className="text-center">
                    <div className={`mx-auto mb-4 p-3 bg-gradient-to-br ${category.color} rounded-full w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <div className="text-white">
                        {category.icon}
                      </div>
                    </div>
                    <CardTitle className="text-white text-lg">{category.name}</CardTitle>
                    <CardDescription className="text-zion-slate-light text-sm">
                      {category.description}
                    </CardDescription>
                    <Badge variant="outline" className="border-zion-cyan text-zion-cyan mt-2">
                      {category.count}
                    </Badge>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="bg-gradient-to-r from-zion-purple to-zion-purple-dark border-0 max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-white text-3xl mb-4">
                Ready to Transform Your Business?
              </CardTitle>
              <CardDescription className="text-zion-slate-light text-lg">
                Our team of experts is ready to help you implement the perfect solution for your business needs.
                Get in touch today for a free consultation and quote.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="text-center">
                  <div className="text-zion-cyan font-semibold">Phone</div>
                  <div className="text-zion-slate-light">+1 302 464 0950</div>
                </div>
                <div className="text-center">
                  <div className="text-zion-cyan font-semibold">Email</div>
                  <div className="text-zion-slate-light">kleber@ziontechgroup.com</div>
                </div>
                <div className="text-center">
                  <div className="text-zion-cyan font-semibold">Website</div>
                  <div className="text-zion-slate-light">ziontechgroup.com</div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Link to="/comprehensive-services">
                <Button size="lg" className="bg-zion-cyan text-zion-blue-dark hover:bg-zion-cyan-light">
                  <ArrowUpRight className="h-5 w-5 mr-2" />
                  Explore All Services
                </Button>
              </Link>
            </CardFooter>
          </Card>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-defc
=======
        {/* Filtered Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {getFilteredServices().map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 border border-zion-purple/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Get in touch with our experts to discuss your specific needs and discover how our services 
              can drive innovation and growth for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white gap-2">
                <ExternalLink className="h-4 w-4" />
                Contact Our Team
              </Button>
              <Button size="lg" variant="outline" className="border-zion-purple/30 text-zion-cyan hover:bg-zion-purple/10 hover:border-zion-purple/50 gap-2">
                <Play className="h-4 w-4" />
                Schedule Demo
              </Button>
            </div>
          </div>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-099c
        </div>
      </div>
    </section>
  );
<<<<<<< HEAD
=======
}

interface ServiceCardProps {
  service: EnhancedService;
}

function ServiceCard({ service }: ServiceCardProps) {
  const formatPrice = (service: EnhancedService) => {
    const { min, max, currency, pricingModel } = service.price;
    if (pricingModel === 'hourly') {
      return `${currency}${min}-${max}/hour`;
    } else if (pricingModel === 'monthly') {
      return `${currency}${min}-${max}/month`;
    } else if (pricingModel === 'project') {
      return `${currency}${min.toLocaleString()}-${max.toLocaleString()}`;
    }
    return `${currency}${min}-${max}`;
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI': return <Brain className="h-5 w-5 text-purple-400" />;
      case 'IT': return <Settings className="h-5 w-5 text-blue-400" />;
      case 'SAAS': return <Cloud className="h-5 w-5 text-cyan-400" />;
      case 'Development': return <Code className="h-5 w-5 text-green-400" />;
      case 'Consulting': return <Users className="h-5 w-5 text-orange-400" />;
      case 'Automation': return <TrendingUp className="h-5 w-5 text-pink-400" />;
      case 'Integration': return <BarChart3 className="h-5 w-5 text-yellow-400" />;
      default: return <Zap className="h-5 w-5 text-gray-400" />;
    }
  };

  return (
    <Card className="group overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-zion-purple/20 hover:border-zion-purple/50 bg-zion-blue-dark/30 border border-zion-blue-light/20 backdrop-blur-sm">
      <div className="relative">
        <img 
          src={service.image} 
          alt={service.title}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4 flex gap-2">
          {service.isPopular && (
            <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white border-0">
              <Star className="h-3 w-3 mr-1" />
              Popular
            </Badge>
          )}
          {service.isNew && (
            <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0">
              <Zap className="h-3 w-3 mr-1" />
              New
            </Badge>
          )}
          {service.isPremium && (
            <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0">
              <Shield className="h-3 w-3 mr-1" />
              Premium
            </Badge>
          )}
        </div>
        <div className="absolute top-4 right-4">
          {getCategoryIcon(service.category)}
        </div>
      </div>

      <CardHeader className="pb-3">
        <div className="flex items-start justify-between mb-2">
          <CardTitle className="text-lg font-semibold text-white group-hover:text-zion-cyan transition-colors">
            {service.title}
          </CardTitle>
        </div>
        <CardDescription className="text-zion-slate-light line-clamp-2">
          {service.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Price and Rating */}
        <div className="flex items-center justify-between">
          <div className="text-lg font-bold text-zion-cyan">
            {formatPrice(service)}
          </div>
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm text-white">{service.rating}</span>
            <span className="text-xs text-zion-slate-light">({service.reviewCount})</span>
          </div>
        </div>

        {/* Market Price Comparison */}
        <div className="text-xs text-zion-slate-light bg-zion-blue-dark/50 rounded px-2 py-1">
          Market Average: {service.averageMarketPrice}
        </div>

        {/* Key Benefits */}
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-white">Key Benefits:</h4>
          <ul className="space-y-1">
            {service.benefits.slice(0, 3).map((benefit, index) => (
              <li key={index} className="text-xs text-zion-slate-light flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full mt-1.5 flex-shrink-0"></div>
                {benefit}
              </li>
            ))}
          </ul>
        </div>

        {/* Delivery Time */}
        <div className="flex items-center gap-2 text-xs text-zion-slate-light">
          <Clock className="h-3 w-3" />
          {service.deliveryTime}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 pt-2">
          <Button 
            size="sm" 
            className="flex-1 bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white gap-2"
            onClick={() => window.open(service.contactLink, '_blank')}
          >
            <ExternalLink className="h-3 w-3" />
            Get Quote
          </Button>
          {service.demoLink && (
            <Button 
              size="sm" 
              variant="outline" 
              className="border-zion-purple/30 text-zion-cyan hover:bg-zion-purple/10 hover:border-zion-purple/50 gap-2"
              onClick={() => window.open(service.demoLink, '_blank')}
            >
              <Play className="h-3 w-3" />
              Demo
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-099c
}