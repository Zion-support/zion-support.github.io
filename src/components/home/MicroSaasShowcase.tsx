import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  Brain, 
  Cloud, 
  Code, 
  Database, 
  Shield, 
  Zap, 
  Network,
  ArrowRight,
  Star,
  TrendingUp,
  Users
} from 'lucide-react';
import { MICRO_SAAS_SERVICES } from '@/data/microSaasServices';

export function MicroSaasShowcase() {
  // Get featured services (first 6)
  const featuredServices = MICRO_SAAS_SERVICES.slice(0, 6);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI': return <Brain className="h-6 w-6" />;
      case 'IT': return <Cloud className="h-6 w-6" />;
      case 'Development': return <Code className="h-6 w-6" />;
      case 'Analytics': return <Database className="h-6 w-6" />;
      case 'Security': return <Shield className="h-6 w-6" />;
      case 'Automation': return <Zap className="h-6 w-6" />;
      case 'Integration': return <Network className="h-6 w-6" />;
      case 'Consulting': return <Users className="h-6 w-6" />;
      default: return <Sparkles className="h-6 w-6" />;
=======
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Bot, 
  Shield, 
  TrendingUp, 
  Code, 
  Database, 
  Cloud, 
  Zap, 
  ArrowRight,
  Star,
  Users,
  Globe
} from "lucide-react";
import { getFeaturedServices } from "@/data/microSaasServices";

export function MicroSaasShowcase() {
  const featuredServices = getFeaturedServices().slice(0, 6);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "AI Services":
        return <Bot className="w-8 h-8" />;
      case "IT Services":
        return <Shield className="w-8 h-8" />;
      case "Micro SAAS":
        return <TrendingUp className="w-8 h-8" />;
      case "Development":
        return <Code className="w-8 h-8" />;
      case "Analytics":
        return <Database className="w-8 h-8" />;
      case "Security":
        return <Shield className="w-8 h-8" />;
      case "Cloud":
        return <Cloud className="w-8 h-8" />;
      case "Automation":
        return <Zap className="w-8 h-8" />;
      default:
        return <TrendingUp className="w-8 h-8" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "AI Services":
        return "from-purple-500 to-indigo-600";
      case "IT Services":
        return "from-blue-500 to-cyan-600";
      case "Micro SAAS":
        return "from-green-500 to-emerald-600";
      case "Development":
        return "from-orange-500 to-red-600";
      case "Analytics":
        return "from-cyan-500 to-blue-600";
      case "Security":
        return "from-red-500 to-pink-600";
      case "Cloud":
        return "from-blue-500 to-purple-600";
      case "Automation":
        return "from-yellow-500 to-orange-600";
      default:
        return "from-gray-500 to-slate-600";
    }
  };

  return (
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Zap, 
  Shield, 
  Users, 
  Code, 
  ArrowRight, 
  Star,
  TrendingUp,
  CheckCircle
} from "lucide-react";
import { getFeaturedServices } from '@/data/microSaasServices';

export function MicroSaasShowcase() {
  const featuredServices = getFeaturedServices().slice(0, 6);

  const categoryIcons = {
    'AI Services': <Zap className="h-6 w-6 text-zion-cyan" />,
    'IT Services': <Shield className="h-6 w-6 text-zion-cyan" />,
    'Micro SAAS': <Users className="h-6 w-6 text-zion-cyan" />,
    'Development': <Code className="h-6 w-6 text-zion-cyan" />,
  };

  return (
    <section className="py-20 bg-gradient-to-b from-background to-zion-blue-dark/5 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-zion-purple/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-zion-cyan/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 px-4 py-2 rounded-full border border-zion-purple/30 mb-6">
            <Zap className="h-4 w-4 text-zion-cyan" />
            <span className="text-sm font-medium text-zion-cyan">Featured Services</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-zion-cyan via-white to-zion-purple-light bg-clip-text text-transparent">
              Transform Your Business
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Discover our cutting-edge micro SAAS solutions, AI services, and IT solutions 
            designed to accelerate your business growth and digital transformation.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center gap-2 bg-zion-purple/10 px-4 py-2 rounded-full border border-zion-purple/20">
              <Zap className="h-4 w-4 text-zion-purple" />
              <span className="text-sm font-medium">AI-Powered</span>
            </div>
            <div className="flex items-center gap-2 bg-zion-cyan/10 px-4 py-2 rounded-full border border-zion-cyan/20">
              <Shield className="h-4 w-4 text-zion-cyan" />
              <span className="text-sm font-medium">Enterprise-Grade</span>
            </div>
            <div className="flex items-center gap-2 bg-zion-blue/10 px-4 py-2 rounded-full border border-zion-blue/20">
              <Users className="h-4 w-4 text-zion-blue" />
              <span className="text-sm font-medium">Scalable</span>
            </div>
          </div>
        </div>

        {/* Services Grid */}
    <section className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-zion-purple/5 via-transparent to-zion-cyan/5"></div>
      
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-zion-purple/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-zion-cyan/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="h-12 w-12 text-zion-cyan mr-4 animate-pulse" />
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-zion-cyan to-zion-purple bg-clip-text text-transparent">
              Micro SAAS Services
            </h2>
          </div>
          <p className="text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto leading-relaxed">
            Transform your business with our cutting-edge micro SAAS solutions. 
            From AI-powered automation to enterprise-grade security, we provide the tools you need to succeed.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-zion-cyan mb-2">{MICRO_SAAS_SERVICES.length}</div>
            <div className="text-zion-slate-light">Services Available</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-zion-purple mb-2">8</div>
            <div className="text-zion-slate-light">Categories</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-zion-cyan mb-2">4.8</div>
            <div className="text-zion-slate-light">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-zion-purple mb-2">24/7</div>
            <div className="text-zion-slate-light">Support</div>
=======
  Zap, 
  Shield, 
  BarChart3, 
  Globe, 
  Database, 
  TrendingUp, 
  Circle, 
  ArrowRight,
  Star,
  CheckCircle
} from 'lucide-react';
import { MICRO_SAAS_SERVICES } from '@/data/microSaasServices';

const featuredServices = MICRO_SAAS_SERVICES.slice(0, 6);

const getCategoryIcon = (category: string) => {
  switch (category) {
    case 'AI Services':
      return <Zap className="w-6 h-6" />;
    case 'Analytics':
      return <BarChart3 className="w-6 h-6" />;
    case 'Security':
      return <Shield className="w-6 h-6" />;
    case 'Cloud Services':
      return <Globe className="w-6 h-6" />;
    case 'Data Services':
      return <Database className="w-6 h-6" />;
    case 'Marketing':
      return <TrendingUp className="w-6 h-6" />;
    case 'Productivity':
      return <Circle className="w-6 h-6" />;
    default:
      return <Zap className="w-6 h-6" />;
  }
};

const getCategoryColor = (category: string) => {
  switch (category) {
    case 'AI Services':
      return 'from-purple-500 to-pink-500';
    case 'Analytics':
      return 'from-blue-500 to-cyan-500';
    case 'Security':
      return 'from-red-500 to-orange-500';
    case 'Cloud Services':
      return 'from-indigo-500 to-purple-500';
    case 'Data Services':
      return 'from-green-500 to-emerald-500';
    case 'Marketing':
      return 'from-yellow-500 to-orange-500';
    case 'Productivity':
      return 'from-teal-500 to-blue-500';
    default:
      return 'from-gray-500 to-slate-500';
  }
};

export function MicroSaasShowcase() {
  return (
    <section className="py-20 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-slate-dark relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-zion-purple/5 via-zion-cyan/5 to-zion-purple/5 animate-pulse"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-zion-purple/10 rounded-full blur-3xl animate-bounce"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-zion-cyan/10 rounded-full blur-3xl animate-bounce" style={{ animationDelay: '1s' }}></div>
      
      <div className="relative container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent mb-6">
            Micro SAAS Solutions
          </h2>
          <p className="text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto mb-8">
            Transform your business with cutting-edge micro SAAS services. From AI-powered solutions to enterprise-grade security, 
            we provide the tools you need to succeed in the digital age.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/micro-saas-services">
              <Button size="lg" className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white">
                Explore All Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
              Schedule Demo
            </Button>
          </div>
        </div>

        {/* Featured Services Grid */}
                {/* Features */}
                <div>
                  <h4 className="text-sm font-semibold text-zion-cyan mb-2">Key Features</h4>
                  <div className="flex flex-wrap gap-1">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <Badge key={index} variant="secondary" className="text-xs bg-zion-purple/20 text-zion-slate-light border-zion-purple/30">
                        {feature}
                      </Badge>
                    ))}
                    {service.features.length > 3 && (
                      <Badge variant="secondary" className="text-xs bg-zion-slate/50 text-zion-slate-light">
                        +{service.features.length - 3} more
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Pricing */}
                <div>
                  <h4 className="text-sm font-semibold text-zion-cyan mb-2">Starting at</h4>
                  <div className="text-white">
                    <span className="text-2xl font-bold">{service.pricing.currency}{service.pricing.monthly}</span>
                    <span className="text-zion-slate-light text-sm">/month</span>
=======
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredServices.map((service) => (
            <Card key={service.id} className="bg-zion-blue-dark/80 backdrop-blur-md border-zion-purple/30 hover:border-zion-purple/60 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-purple/20 group hover:-translate-y-2">
              <CardHeader className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-zion-purple/10 to-transparent"></div>
                <div className="relative">
=======
    <section className="py-20 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-blue-light relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-zion-purple/10 via-transparent to-zion-cyan/10"></div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-zion-purple/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-zion-cyan/5 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured Micro SAAS & AI Services
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Discover innovative solutions that transform businesses. From AI-powered chatbots to comprehensive IT consulting, 
            we offer cutting-edge services at competitive prices.
          </p>
          
          {/* Contact Info */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 max-w-2xl mx-auto border border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 bg-zion-cyan/20 rounded-full flex items-center justify-center mb-2">
                  <Globe className="w-5 h-5 text-zion-cyan" />
                </div>
                <span className="text-zion-slate-light text-sm">Website</span>
                <span className="text-white font-semibold">ziontechgroup.com</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 bg-zion-purple/20 rounded-full flex items-center justify-center mb-2">
                  <Users className="w-5 h-5 text-zion-purple" />
                </div>
                <span className="text-zion-slate-light text-sm">Phone</span>
                <span className="text-white font-semibold">+1 302 464 0950</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 bg-zion-cyan/20 rounded-full flex items-center justify-center mb-2">
                  <Star className="w-5 h-5 text-zion-cyan" />
                </div>
                <span className="text-zion-slate-light text-sm">Email</span>
                <span className="text-white font-semibold">kleber@ziontechgroup.com</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 group cursor-pointer">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${getCategoryColor(service.category)}`}>
                      {getCategoryIcon(service.category)}
                    </div>
                        className={`w-4 h-4 ${
                          i < Math.floor(service.rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-zion-slate-light'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-zion-slate-light text-sm">
                    {service.rating} ({service.reviewCount} reviews)
                  </span>
                </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredServices.map((service, index) => (
            <Card 
              key={service.id} 
              className="group hover:shadow-2xl transition-all duration-500 border-zion-purple/20 hover:border-zion-purple/40 overflow-hidden bg-gradient-to-br from-card to-card/50 backdrop-blur-sm"
              style={{
                animationDelay: `${index * 100}ms`,
                animation: 'fadeInUp 0.6s ease-out forwards'
              }}
            >
              <div className="relative">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  {categoryIcons[service.category as keyof typeof categoryIcons]}
                </div>
                <div className="absolute top-3 right-3 flex items-center gap-1 bg-black/70 text-white px-2 py-1 rounded-md">
                  <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                  <span className="text-xs font-medium">{service.rating}</span>
                </div>
              </div>

              <CardHeader className="pb-3">
                <CardTitle className="text-lg group-hover:text-zion-cyan transition-colors line-clamp-2">
                  {service.title}
                </CardTitle>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {service.description}
                </p>
                
                <div className="flex flex-wrap gap-1 mt-3">
                  {service.tags.slice(0, 2).map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="text-xs bg-zion-purple/10 text-zion-purple hover:bg-zion-purple/20">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Key Benefits */}
                <div>
                  <h4 className="font-semibold text-sm mb-2 flex items-center gap-2 text-zion-cyan">
                    <TrendingUp className="h-4 w-4" />
                    Key Benefits
                  </h4>
                  <ul className="space-y-1">
                    {service.benefits.slice(0, 2).map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="text-xs text-muted-foreground flex items-start gap-2">
                        <CheckCircle className="h-3 w-3 text-zion-cyan mt-0.5 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Pricing */}
                <div className="bg-gradient-to-r from-zion-blue-dark/10 to-zion-purple/10 p-3 rounded-lg border border-zion-blue/20">
                  {service.pricing.custom ? (
                    <div className="text-center">
                      <p className="text-sm font-medium text-zion-cyan">{service.pricing.custom}</p>
                    </div>
                  ) : (
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1 mb-1">
                        <span className="text-xl font-bold text-primary">{service.pricing.currency}</span>
                        <span className="text-xl font-bold">{service.pricing.monthly}</span>
                        <span className="text-sm text-muted-foreground">/mo</span>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {service.pricing.currency}{service.pricing.yearly}/year
                      </p>
                    </div>
                  )}
                </div>
              </CardContent>

              <div className="px-6 pb-6">
                <Button asChild className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple group">
                  <Link to={`/micro-saas-services#${service.id}`}>
                    <span>Learn More</span>
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>

                {/* Key Benefits */}
                <div>
                  <h4 className="text-white font-semibold mb-2">Key Benefits</h4>
                  <div className="space-y-1">
                    {service.benefits.slice(0, 2).map((benefit, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-zion-slate-light">
                        <CheckCircle className="w-4 h-4 text-zion-cyan" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
=======
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-zion-purple-dark/50 via-zion-purple/50 to-zion-cyan/50 rounded-2xl p-8 md:p-12 border border-zion-purple/30">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h3>
            <p className="text-zion-slate-light text-lg mb-8 max-w-3xl mx-auto">
              Join thousands of businesses already using our micro SAAS services to drive growth, 
              improve efficiency, and stay ahead of the competition.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-zion-cyan hover:bg-zion-cyan-light text-black font-semibold px-8 py-3">
                <Link to="/micro-saas-services">
                  <TrendingUp className="h-5 w-5 mr-2" />
                  Explore All Services
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-zion-purple font-semibold px-8 py-3">
                <Link to="/contact">
                  <Users className="h-5 w-5 mr-2" />
                  Get Consultation
                </Link>
              </Button>
            </div>
=======
        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 rounded-3xl p-8 border border-zion-purple/30">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
              Join thousands of businesses already using our micro SAAS solutions to drive growth, 
              improve efficiency, and stay ahead of the competition.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/micro-saas-services">
                <Button size="lg" className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white">
                  View All Services
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </div>
=======
        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-zion-blue-dark/20 to-zion-purple/20 p-8 rounded-2xl border border-zion-blue/30 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Accelerate Your Business?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of businesses that have transformed their operations with our 
              innovative solutions. Get started today with a free consultation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-zion-cyan to-zion-blue hover:from-zion-cyan-light hover:to-zion-blue-light">
                <Link to="/micro-saas-services">
                  <span>Explore All Services</span>
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
              
              <Button variant="outline" size="lg" className="border-zion-purple text-zion-purple hover:bg-zion-purple hover:text-white">
                <Link to="/request-quote">
                  <span>Get Free Quote</span>
                </Link>
              </Button>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-zion-cyan" />
                <span>Free Consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-zion-cyan" />
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-zion-cyan" />
                <span>Enterprise Security</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
=======
                    <Badge className="bg-zion-cyan text-zion-blue-dark">
                      {service.pricingModel === 'monthly' ? 'Monthly' : 
                       service.pricingModel === 'yearly' ? 'Yearly' :
                       service.pricingModel === 'one-time' ? 'One-time' :
                       service.pricingModel === 'hourly' ? 'Hourly' : 'Custom'}
                    </Badge>
                  </div>
                  
                  <CardTitle className="text-xl text-white group-hover:text-zion-cyan transition-colors">
                    {service.title}
                  </CardTitle>
                  
                  <CardDescription className="text-zion-slate-light">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  {/* Price and Rating */}
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-white">
                      {service.currency}{service.price}
                      <span className="text-sm text-zion-slate-light ml-1">
                        {service.pricingModel === 'monthly' ? '/mo' : 
                         service.pricingModel === 'yearly' ? '/yr' :
                         service.pricingModel === 'hourly' ? '/hr' : ''}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-white">{service.rating}</span>
                    </div>
                  </div>
                  
                  {/* AI Score */}
                  <div className="flex items-center justify-between">
                    <span className="text-zion-slate-light">AI Score:</span>
                    <Badge className="bg-zion-purple text-white">
                      {service.aiScore}/100
                    </Badge>
                  </div>
                  
                  {/* Key Benefits */}
                  <div>
                    <h4 className="text-white font-semibold mb-2">Key Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.slice(0, 2).map((benefit, idx) => (
                        <li key={idx} className="text-sm text-zion-slate-light flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full"></div>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Market Price */}
                  <div className="bg-zion-blue-dark/50 rounded-lg p-3">
                    <p className="text-sm text-zion-slate-light mb-1">Market Price:</p>
                    <p className="text-white text-sm">{service.marketPrice}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
              Our team of experts is ready to help you implement the perfect solution. 
              Get in touch today for a free consultation and competitive quote.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-zion-purple hover:bg-zion-purple-light text-white"
                asChild
              >
                <Link to="/micro-saas-services">
                  View All Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark"
                onClick={() => window.open(`mailto:kleber@ziontechgroup.com?subject=Business Consultation Request`)}
              >
                Get Free Consultation
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}