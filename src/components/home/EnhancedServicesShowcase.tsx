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
            ))}
          </div>
        </div>

=======
        {/* Filtered Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {getFilteredServices().map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
=======
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Database, 
  TrendingUp, 
  Code, 
  Zap, 
  Heart, 
  DollarSign, 
  Link as LinkIcon,
  ArrowRight,
  Star,
  CheckCircle
} from 'lucide-react';
import { ENHANCED_SERVICES } from '@/data/enhancedServices';

const featuredServices = ENHANCED_SERVICES.filter(service => service.featured).slice(0, 6);

const serviceIcons = {
  'AI Automation': Brain,
  'Cloud Management': Cloud,
  'Cybersecurity': Shield,
  'Data Engineering': Database,
  'Business Intelligence': TrendingUp,
  'Developer Tools': Code,
  'Digital Transformation': Zap,
  'Healthcare Technology': Heart,
  'Financial Technology': DollarSign,
  'Blockchain': LinkIcon,
};

export function EnhancedServicesShowcase() {
  return (
    <section className="py-20 bg-zion-blue-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            Comprehensive AI & IT Solutions
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Discover our extensive portfolio of micro SAAS services, AI solutions, and enterprise-grade IT services designed to transform your business operations
          </p>
        </div>

        {/* Featured Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredServices.map((service) => {
            const IconComponent = serviceIcons[service.category as keyof typeof serviceIcons] || Code;
            return (
              <Card key={service.id} className="bg-zion-blue border-zion-blue-light hover:border-zion-purple/50 transition-all duration-300 hover:translate-y-[-5px]">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-zion-purple to-zion-cyan rounded-lg flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <Badge variant="default" className="bg-zion-purple">
                      Featured
                    </Badge>
                  </div>
                  <CardTitle className="text-white text-xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-zion-slate-light">
                    {service.description.substring(0, 120)}...
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-white font-medium">{service.rating}</span>
                      <span className="text-zion-slate-light text-sm">({service.reviewCount})</span>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-zion-cyan">
                        {service.currency}{service.price?.toLocaleString()}
                      </div>
                      <div className="text-sm text-zion-slate-light">
                        {service.availability}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.tags.slice(0, 3).map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs border-zion-purple/30 text-zion-purple">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-zion-slate-light">
                      <TrendingUp className="w-4 h-4" />
                      AI Score: {service.aiScore}
                    </div>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10"
                      asChild
                    >
                      <Link to="/enhanced-services">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Service Categories Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="text-center p-6 bg-zion-blue rounded-lg border border-zion-blue-light">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">AI & Machine Learning</h3>
            <p className="text-zion-slate-light text-sm">
              Process automation, customer insights, and intelligent content optimization
            </p>
          </div>
          
          <div className="text-center p-6 bg-zion-blue rounded-lg border border-zion-blue-light">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Cloud className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Cloud & Infrastructure</h3>
            <p className="text-zion-slate-light text-sm">
              Multi-cloud orchestration, edge computing, and cost optimization
            </p>
          </div>
          
          <div className="text-center p-6 bg-zion-blue rounded-lg border border-zion-blue-light">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Cybersecurity</h3>
            <p className="text-zion-slate-light text-sm">
              AI threat detection, zero trust security, and compliance frameworks
            </p>
          </div>
          
          <div className="text-center p-6 bg-zion-blue rounded-lg border border-zion-blue-light">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Database className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Data & Analytics</h3>
            <p className="text-zion-slate-light text-sm">
              Real-time pipelines, predictive maintenance, and business intelligence
            </p>
          </div>
        </div>

        {/* Key Benefits */}
        <div className="bg-zion-blue rounded-lg p-8 border border-zion-blue-light">
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Why Choose Our Services?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-6 h-6 text-zion-blue-dark" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Proven Results</h4>
              <p className="text-zion-slate-light text-sm">
                Industry-leading solutions with measurable ROI and customer success stories
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Innovation First</h4>
              <p className="text-zion-slate-light text-sm">
                Cutting-edge AI and emerging technologies to keep you ahead of competition
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-6 h-6 text-zion-blue-dark" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Scalable Solutions</h4>
              <p className="text-zion-slate-light text-sm">
                From startup to enterprise, solutions that grow with your business
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h3>
          <p className="text-zion-slate-light mb-8 max-w-2xl mx-auto">
            Explore our complete service portfolio and discover how our AI-powered solutions can drive innovation and growth for your organization
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-zion-cyan text-zion-blue-dark hover:bg-zion-cyan-light"
              asChild
            >
              <Link to="/enhanced-services">
                View All Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10"
              asChild
            >
              <Link to="/contact">
                Get Free Consultation
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}