<<<<<<< HEAD
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Check, Star, Zap, Shield, TrendingUp, Users, Cloud, Brain, Code, Database, Globe, Smartphone, Server, Lock, BarChart3, Settings, Phone, Mail, MapPin, ExternalLink, DollarSign, Target, Award } from 'lucide-react';
import enhancedMicroSaasServices2025 from '../data/enhancedMicroSaasServices2025';
import enhancedAIServices2025 from '../data/enhancedAIServices2025';
import enhancedITServices2025 from '../data/enhancedITServices2025';
const ComprehensivePricing = () => {
    const [activeTab, setActiveTab] = useState('microsaas');
    const [billingCycle, setBillingCycle] = useState('monthly');
    const getCategoryIcon = (category) => {
        switch (category.toLowerCase()) {
            case 'productivity': return <Users className="h-5 w-5"/>;
            case 'finance': return <DollarSign className="h-5 w-5"/>;
            case 'marketing': return <TrendingUp className="h-5 w-5"/>;
            case 'development': return <Code className="h-5 w-5"/>;
            case 'data & analytics': return <BarChart3 className="h-5 w-5"/>;
            case 'cybersecurity': return <Shield className="h-5 w-5"/>;
            case 'cloud & devops': return <Cloud className="h-5 w-5"/>;
            case 'human resources': return <Users className="h-5 w-5"/>;
            case 'education': return <Globe className="h-5 w-5"/>;
            case 'healthcare': return <Award className="h-5 w-5"/>;
            case 'computer vision': return <Target className="h-5 w-5"/>;
            case 'natural language processing': return <Brain className="h-5 w-5"/>;
            case 'predictive analytics': return <TrendingUp className="h-5 w-5"/>;
            case 'conversational ai': return <Users className="h-5 w-5"/>;
            case 'content generation': return <Code className="h-5 w-5"/>;
            case 'data science': return <Database className="h-5 w-5"/>;
            case 'voice ai': return <Smartphone className="h-5 w-5"/>;
            case 'recommendation systems': return <TrendingUp className="h-5 w-5"/>;
            case 'security ai': return <Shield className="h-5 w-5"/>;
            case 'process automation': return <Settings className="h-5 w-5"/>;
            case 'cloud services': return <Cloud className="h-5 w-5"/>;
            case 'infrastructure': return <Server className="h-5 w-5"/>;
            case 'network security': return <Lock className="h-5 w-5"/>;
            case 'mobile development': return <Smartphone className="h-5 w-5"/>;
            case 'consulting': return <Users className="h-5 w-5"/>;
            case 'managed services': return <Settings className="h-5 w-5"/>;
            case 'web development': return <Globe className="h-5 w-5"/>;
            default: return <Star className="h-5 w-5"/>;
        }
    };
    const getCategoryColor = (category) => {
        switch (category.toLowerCase()) {
            case 'productivity': return 'from-green-500 to-emerald-500';
            case 'finance': return 'from-blue-500 to-cyan-500';
            case 'marketing': return 'from-purple-500 to-pink-500';
            case 'development': return 'from-orange-500 to-red-500';
            case 'data & analytics': return 'from-indigo-500 to-purple-500';
            case 'cybersecurity': return 'from-red-500 to-orange-500';
            case 'cloud & devops': return 'from-blue-500 to-indigo-500';
            case 'human resources': return 'from-teal-500 to-green-500';
            case 'education': return 'from-yellow-500 to-orange-500';
            case 'healthcare': return 'from-pink-500 to-red-500';
            case 'computer vision': return 'from-purple-500 to-pink-500';
            case 'natural language processing': return 'from-blue-500 to-cyan-500';
            case 'predictive analytics': return 'from-indigo-500 to-purple-500';
            case 'conversational ai': return 'from-green-500 to-teal-500';
            case 'content generation': return 'from-yellow-500 to-orange-500';
            case 'data science': return 'from-indigo-500 to-blue-500';
            case 'voice ai': return 'from-pink-500 to-purple-500';
            case 'recommendation systems': return 'from-teal-500 to-green-500';
            case 'security ai': return 'from-red-500 to-pink-500';
            case 'process automation': return 'from-orange-500 to-yellow-500';
            case 'cloud services': return 'from-blue-500 to-indigo-500';
            case 'infrastructure': return 'from-gray-500 to-slate-500';
            case 'network security': return 'from-red-500 to-orange-500';
            case 'mobile development': return 'from-green-500 to-blue-500';
            case 'consulting': return 'from-purple-500 to-indigo-500';
            case 'managed services': return 'from-teal-500 to-cyan-500';
            case 'web development': return 'from-blue-500 to-green-500';
            default: return 'from-gray-500 to-slate-500';
        }
    };
    const formatPrice = (price, pricingModel) => {
        if (pricingModel === 'per API call') {
            return `$${price.toFixed(3)} per call`;
        }
        else if (pricingModel === 'per word') {
            return `$${price.toFixed(2)} per word`;
        }
        else if (pricingModel === 'per recommendation') {
            return `$${price.toFixed(3)} per recommendation`;
        }
        else if (pricingModel === 'per employee/month') {
            return `$${price}/employee/month`;
        }
        else if (pricingModel === 'monthly') {
            return `$${price}/month`;
        }
        else if (pricingModel === 'usage-based') {
            return `$${price} per unit`;
        }
        else if (pricingModel === 'tiered') {
            return `$${price}/month starting`;
        }
        else if (pricingModel === 'enterprise') {
            return `$${price}/month`;
        }
        else {
            return `$${price}`;
        }
    };
    const renderMicroSaasPricing = () => (<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {enhancedMicroSaasServices2025.map((service) => (<Card key={service.id} className="group relative overflow-hidden bg-gradient-to-br from-slate-800/50 to-slate-700/50 border-slate-600/30 hover:border-blue-500/50 transition-all duration-500 hover:scale-105 backdrop-blur-sm">
          <CardHeader className="pb-4">
            <div className="flex items-center gap-3 mb-3">
              <div className={`p-2 rounded-lg bg-gradient-to-r ${getCategoryColor(service.category)}`}>
                {getCategoryIcon(service.category)}
              </div>
              <Badge variant="outline" className="border-slate-500 text-slate-300">
                {service.category}
              </Badge>
            </div>
            <CardTitle className="text-xl text-white group-hover:text-blue-400 transition-colors">
              {service.name}
            </CardTitle>
            <CardDescription className="text-slate-400">
              {service.description}
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">
                {formatPrice(service.price, service.pricingModel)}
              </div>
              <div className="text-sm text-slate-400 mb-4">
                Market Price: {service.marketPrice}
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-slate-300">Key Features:</h4>
              <div className="space-y-1">
                {service.features.slice(0, 5).map((feature, index) => (<div key={index} className="flex items-center text-sm text-slate-300">
                    <Check className="h-4 w-4 text-green-400 mr-2 flex-shrink-0"/>
                    {feature}
                  </div>))}
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-slate-300">Benefits:</h4>
              <div className="space-y-1">
                {service.benefits.slice(0, 3).map((benefit, index) => (<div key={index} className="flex items-center text-sm text-slate-300">
                    <Star className="h-4 w-4 text-yellow-400 mr-2 flex-shrink-0"/>
                    {benefit}
                  </div>))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-600/30">
              <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                <div>
                  <span className="text-slate-400">AI Score:</span>
                  <div className="text-white font-semibold">{service.aiScore}/100</div>
                </div>
                <div>
                  <span className="text-slate-400">ROI:</span>
                  <div className="text-green-400 font-semibold">{service.roi}</div>
                </div>
                <div>
                  <span className="text-slate-400">Setup Time:</span>
                  <div className="text-white font-semibold">{service.setupTime}</div>
                </div>
                <div>
                  <span className="text-slate-400">Uptime:</span>
                  <div className="text-green-400 font-semibold">{service.uptime}</div>
                </div>
              </div>
              
              <div className="flex gap-2">
                <Button size="sm" className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold transition-all duration-300" onClick={() => window.open(service.contactInfo.website, '_blank')}>
                  Get Started
                </Button>
                <Button size="sm" variant="outline" className="border-slate-500 text-slate-300 hover:border-blue-500 hover:text-blue-400" onClick={() => window.open(`mailto:${service.contactInfo.email}`)}>
                  Contact
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>))}
    </div>);
    const renderAIPricing = () => (<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {enhancedAIServices2025.map((service) => (<Card key={service.id} className="group relative overflow-hidden bg-gradient-to-br from-purple-800/50 to-pink-700/50 border-purple-600/30 hover:border-purple-500/50 transition-all duration-500 hover:scale-105 backdrop-blur-sm">
          <CardHeader className="pb-4">
            <div className="flex items-center gap-3 mb-3">
              <div className={`p-2 rounded-lg bg-gradient-to-r ${getCategoryColor(service.category)}`}>
                {getCategoryIcon(service.category)}
              </div>
              <Badge variant="outline" className="border-purple-500 text-purple-300">
                {service.category}
              </Badge>
            </div>
            <CardTitle className="text-xl text-white group-hover:text-purple-400 transition-colors">
              {service.name}
            </CardTitle>
            <CardDescription className="text-purple-200">
              {service.description}
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">
                {formatPrice(service.price, service.pricingModel)}
              </div>
              <div className="text-sm text-purple-300 mb-4">
                Market Price: {service.marketPrice}
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-purple-200">Key Features:</h4>
              <div className="space-y-1">
                {service.features.slice(0, 5).map((feature, index) => (<div key={index} className="flex items-center text-sm text-purple-200">
                    <Check className="h-4 w-4 text-green-400 mr-2 flex-shrink-0"/>
                    {feature}
                  </div>))}
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-purple-200">AI Models:</h4>
              <div className="space-y-1">
                {service.aiModels.slice(0, 3).map((model, index) => (<div key={index} className="flex items-center text-sm text-purple-200">
                    <Brain className="h-4 w-4 text-purple-400 mr-2 flex-shrink-0"/>
                    {model}
                  </div>))}
              </div>
            </div>

            <div className="pt-4 border-t border-purple-600/30">
              <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                <div>
                  <span className="text-purple-300">AI Score:</span>
                  <div className="text-white font-semibold">{service.aiScore}/100</div>
                </div>
                <div>
                  <span className="text-purple-300">Accuracy:</span>
                  <div className="text-green-400 font-semibold">{service.accuracy}</div>
                </div>
                <div>
                  <span className="text-purple-300">Real-time:</span>
                  <div className="text-green-400 font-semibold">
                    {service.realTimeProcessing ? 'Yes' : 'No'}
                  </div>
                </div>
                <div>
                  <span className="text-purple-300">Multi-language:</span>
                  <div className="text-green-400 font-semibold">
                    {service.multilingualSupport ? 'Yes' : 'No'}
                  </div>
                </div>
              </div>
              
              <div className="flex gap-2">
                <Button size="sm" className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold transition-all duration-300" onClick={() => window.open(service.contactInfo.website, '_blank')}>
                  Get Started
                </Button>
                <Button size="sm" variant="outline" className="border-purple-500 text-purple-300 hover:border-pink-500 hover:text-pink-400" onClick={() => window.open(`mailto:${service.contactInfo.email}`)}>
                  Contact
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>))}
    </div>);
    const renderITPricing = () => (<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {enhancedITServices2025.map((service) => (<Card key={service.id} className="group relative overflow-hidden bg-gradient-to-br from-blue-800/50 to-indigo-700/50 border-blue-600/30 hover:border-blue-500/50 transition-all duration-500 hover:scale-105 backdrop-blur-sm">
          <CardHeader className="pb-4">
            <div className="flex items-center gap-3 mb-3">
              <div className={`p-2 rounded-lg bg-gradient-to-r ${getCategoryColor(service.category)}`}>
                {getCategoryIcon(service.category)}
              </div>
              <Badge variant="outline" className="border-blue-500 text-blue-300">
                {service.category}
              </Badge>
            </div>
            <CardTitle className="text-xl text-white group-hover:text-blue-400 transition-colors">
              {service.name}
            </CardTitle>
            <CardDescription className="text-blue-200">
              {service.description}
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">
                ${service.hourlyRate}/hour
              </div>
              <div className="text-sm text-blue-300 mb-4">
                Project Rate: ${service.projectRate.toLocaleString()}
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-blue-200">Key Features:</h4>
              <div className="space-y-1">
                {service.features.slice(0, 5).map((feature, index) => (<div key={index} className="flex items-center text-sm text-blue-200">
                    <Check className="h-4 w-4 text-green-400 mr-2 flex-shrink-0"/>
                    {feature}
                  </div>))}
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-blue-200">Technologies:</h4>
              <div className="space-y-1">
                {service.technologies.slice(0, 3).map((tech, index) => (<div key={index} className="flex items-center text-sm text-blue-200">
                    <Code className="h-4 w-4 text-blue-400 mr-2 flex-shrink-0"/>
                    {tech}
                  </div>))}
              </div>
            </div>

            <div className="pt-4 border-t border-blue-600/30">
              <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                <div>
                  <span className="text-blue-300">Response Time:</span>
                  <div className="text-white font-semibold">{service.responseTime}</div>
                </div>
                <div>
                  <span className="text-blue-300">SLA:</span>
                  <div className="text-green-400 font-semibold">{service.sla}</div>
                </div>
                <div>
                  <span className="text-blue-300">Delivery:</span>
                  <div className="text-white font-semibold">{service.deliveryTime}</div>
                </div>
                <div>
                  <span className="text-blue-300">Support:</span>
                  <div className="text-green-400 font-semibold">{service.support}</div>
                </div>
              </div>
              
              <div className="flex gap-2">
                <Button size="sm" className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold transition-all duration-300" onClick={() => window.open(service.contactInfo.website, '_blank')}>
                  Get Started
                </Button>
                <Button size="sm" variant="outline" className="border-blue-500 text-blue-300 hover:border-indigo-500 hover:text-indigo-400" onClick={() => window.open(`mailto:${service.contactInfo.email}`)}>
                  Contact
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>))}
    </div>);
    return (<div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Comprehensive
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              {" "}Pricing
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transparent pricing for all our micro SAAS, AI, and IT services. Choose the perfect solution for your business needs.
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="text-gray-300">Billing Cycle:</span>
            <div className="bg-slate-800 rounded-lg p-1">
              <button onClick={() => setBillingCycle('monthly')} className={`px-4 py-2 rounded-md transition-all duration-300 ${billingCycle === 'monthly'
            ? 'bg-blue-600 text-white'
            : 'text-gray-300 hover:text-white'}`}>
                Monthly
              </button>
              <button onClick={() => setBillingCycle('annual')} className={`px-4 py-2 rounded-md transition-all duration-300 ${billingCycle === 'annual'
            ? 'bg-blue-600 text-white'
            : 'text-gray-300 hover:text-white'}`}>
                Annual (Save 20%)
=======
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Check, 
  X, 
  Star, 
  TrendingUp, 
  Shield, 
  Zap, 
  Brain,
  Cpu,
  MessageSquare,
  DollarSign,
  BookOpen,
  Truck,
  Home,
  Search,
  Filter,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Award,
  Clock,
  Users,
  BarChart3
} from 'lucide-react';
import { ENHANCED_MICRO_SAAS_SERVICES_2025, SERVICE_CATEGORIES, ZION_TECH_GROUP_CONTACT } from '../data/enhancedMicroSaasServices2025.js';
export default function ComprehensivePricing() {
  const [services, setServices] = useState(ENHANCED_MICRO_SAAS_SERVICES_2025);
  const [filteredServices, setFilteredServices] = useState(ENHANCED_MICRO_SAAS_SERVICES_2025);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'table'
  useEffect(() => {
    let filtered = services;
    if (searchTerm) {
      filtered = filtered.filter(service =>
        service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => service.category === selectedCategory);
    }
    setFilteredServices(filtered);
  }, [services, searchTerm, selectedCategory]);
  const getCategoryIcon = (category) => {
    const iconMap = {
      'AI & Development': <Cpu className="w-5 h-5" />,
      'AI & Marketing': <TrendingUp className="w-5 h-5" />,
      'AI & Customer Service': <MessageSquare className="w-5 h-5" />,
      'AI & Finance': <DollarSign className="w-5 h-5" />,
      'AI & Healthcare': <Brain className="w-5 h-5" />,
      'AI & Legal': <BookOpen className="w-5 h-5" />,
      'AI & Education': <BookOpen className="w-5 h-5" />,
      'AI & Supply Chain': <Truck className="w-5 h-5" />,
      'AI & Cybersecurity': <Shield className="w-5 h-5" />,
      'AI & Real Estate': <Home className="w-5 h-5" />
    };
    return iconMap[category] || <Zap className="w-5 h-5" />;
  };
  const getCategoryColor = (category) => {
    const colorMap = {
      'AI & Development': 'from-blue-500 to-cyan-500',
      'AI & Marketing': 'from-purple-500 to-pink-500',
      'AI & Customer Service': 'from-green-500 to-emerald-500',
      'AI & Finance': 'from-yellow-500 to-orange-500',
      'AI & Healthcare': 'from-red-500 to-pink-500',
      'AI & Legal': 'from-indigo-500 to-blue-500',
      'AI & Education': 'from-teal-500 to-green-500',
      'AI & Supply Chain': 'from-orange-500 to-red-500',
      'AI & Cybersecurity': 'from-gray-500 to-slate-500',
      'AI & Real Estate': 'from-emerald-500 to-teal-500'
    };
    return colorMap[category] || 'from-gray-500 to-slate-500';
  };
  const pricingTiers = [
    {
      name: "Basic",
      price: "$19",
      period: "/month",
      description: "Perfect for small businesses and startups",
      features: [
        "Core functionality",
        "Basic support",
        "Standard integrations",
        "Community forum",
        "Email support",
        "Basic analytics"
      ],
      buttonText: "Get Started",
      buttonVariant: "outline"
    },
    {
      name: "Professional",
      price: "$99",
      period: "/month",
      description: "Ideal for growing businesses and teams",
      features: [
        "Advanced features",
        "Priority support",
        "Custom integrations",
        "API access",
        "Analytics dashboard",
        "Phone support",
        "Custom branding",
        "Advanced reporting"
      ],
      buttonText: "Start Free Trial",
      buttonVariant: "primary",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$399",
      period: "/month",
      description: "For large organizations with complex needs",
      features: [
        "Full feature set",
        "24/7 dedicated support",
        "Custom development",
        "White-label options",
        "SLA guarantees",
        "On-premise deployment",
        "Advanced security",
        "Custom integrations"
      ],
      buttonText: "Contact Sales",
      buttonVariant: "outline"
    }
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Transparent Pricing
            </h1>
            <p className="text-xl text-zion-slate-light mb-8 max-w-4xl mx-auto">
              Choose the perfect plan for your business. Our AI-powered solutions are designed 
              to scale with you, from startup to enterprise, with clear pricing and no hidden fees.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => setViewMode('grid')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  viewMode === 'grid' 
                    ? 'bg-zion-cyan text-white' 
                    : 'border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white'
                }`}
              >
                Grid View
              </button>
              <button 
                onClick={() => setViewMode('table')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  viewMode === 'table' 
                    ? 'bg-zion-cyan text-white' 
                    : 'border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white'
                }`}
              >
                Table View
              </button>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Contact Information Banner */}
      <section className="py-6 bg-zion-blue-dark border-b border-zion-blue-light">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <div className="flex items-center gap-4">
              <Phone className="w-5 h-5 text-zion-cyan" />
              <span className="text-white font-medium">{ZION_TECH_GROUP_CONTACT.phone}</span>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="w-5 h-5 text-zion-cyan" />
              <span className="text-white font-medium">{ZION_TECH_GROUP_CONTACT.email}</span>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="w-5 h-5 text-zion-cyan" />
              <span className="text-white font-medium">{ZION_TECH_GROUP_CONTACT.address}</span>
            </div>
          </div>
        </div>
      </section>
      {/* Pricing Tiers Overview */}
      <section className="py-20 bg-zinc-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Choose Your Plan</h2>
            <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
              Start with what you need and scale as you grow. All plans include our core features 
              with additional capabilities unlocked at higher tiers.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative bg-white rounded-xl p-8 ${
                  plan.popular ? 'ring-2 ring-zion-cyan scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-zion-cyan text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-zinc-800 mb-4">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-zion-purple">{plan.price}</span>
                    <span className="text-zinc-500 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-zinc-600">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-500" />
                      <span className="text-zinc-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact">
                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                    plan.buttonVariant === 'primary'
                      ? 'bg-gradient-to-r from-zion-cyan to-zion-purple text-white hover:from-zion-cyan-light hover:to-zion-purple-light'
                      : 'border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white'
                  }`}>
                    {plan.buttonText}
                  </button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Search and Filter Section */}
      <section className="py-8 bg-zinc-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-zinc-700 border border-zinc-600 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              />
            </div>
            <div className="flex items-center gap-4">
              <Filter className="w-5 h-5 text-zion-cyan" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 bg-zinc-700 border border-zinc-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              >
                <option value="all">All Categories</option>
                {SERVICE_CATEGORIES.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>
      {/* Services Grid View */}
      {viewMode === 'grid' && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-2xl overflow-hidden hover:shadow-zion-cyan/25 transition-all duration-300 hover:scale-105"
                >
                  {/* Service Header */}
                  <div className={`bg-gradient-to-r ${getCategoryColor(service.category)} p-6 text-white`}>
                    <div className="flex items-center gap-3 mb-3">
                      {getCategoryIcon(service.category)}
                      <span className="text-sm font-medium opacity-90">{service.category}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-sm opacity-90 line-clamp-2">{service.description}</p>
                  </div>
                  {/* Service Content */}
                  <div className="p-6">
                    {/* Price and Rating */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-3xl font-bold text-zion-purple">
                        ${service.price?.toLocaleString()}
                        <span className="text-sm text-zinc-500 font-normal">/month</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-5 h-5 text-yellow-500 fill-current" />
                        <span className="font-medium">4.9</span>
                        <span className="text-zinc-500 text-sm">(150+)</span>
                      </div>
                    </div>
                    {/* Key Features */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-zinc-800 mb-2">Key Features:</h4>
                      <div className="space-y-1">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-zinc-600">
                            <Check className="w-4 h-4 text-green-500" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                    {/* Benefits */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-zinc-800 mb-2">Benefits:</h4>
                      <div className="space-y-1">
                        {service.benefits.slice(0, 2).map((benefit, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-zinc-600">
                            <TrendingUp className="w-4 h-4 text-blue-500" />
                            {benefit}
                          </div>
                        ))}
                      </div>
                    </div>
                    {/* Service Details */}
                    <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                      <div className="flex items-center gap-2 text-zinc-600">
                        <Clock className="w-4 h-4" />
                        <span>{service.estimatedDelivery}</span>
                      </div>
                      <div className="flex items-center gap-2 text-zinc-600">
                        <Users className="w-4 h-4" />
                        <span>{service.supportLevel}</span>
                      </div>
                      <div className="flex items-center gap-2 text-zinc-600">
                        <BarChart3 className="w-4 h-4" />
                        <span>ROI: {service.roi}</span>
                      </div>
                      <div className="flex items-center gap-2 text-zinc-600">
                        <Award className="w-4 h-4" />
                        <span>{service.innovationLevel}</span>
                      </div>
                    </div>
                    {/* Market Information */}
                    <div className="mb-6 p-3 bg-zinc-50 rounded-lg">
                      <div className="text-sm">
                        <div className="flex justify-between mb-1">
                          <span className="text-zinc-600">Market Price:</span>
                          <span className="font-medium">{service.marketPrice}</span>
                        </div>
                        {service.marketSize && (
                          <div className="flex justify-between">
                            <span className="text-zinc-600">Market Size:</span>
                            <span className="font-medium">{service.marketSize}</span>
                          </div>
                        )}
                      </div>
                    </div>
                    {/* CTA Buttons */}
                    <div className="space-y-3">
                      <Link to="/contact">
                        <button className="w-full px-6 py-3 bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white rounded-lg font-semibold hover:from-zion-purple-light hover:to-zion-purple transition-all duration-300 flex items-center justify-center gap-2">
                          Get Quote
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </Link>
                      <button className="w-full px-6 py-3 border border-zion-purple text-zion-purple rounded-lg font-semibold hover:bg-zion-purple hover:text-white transition-colors duration-300">
                        Learn More
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
      {/* Services Table View */}
      {viewMode === 'table' && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-zinc-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-zinc-800">Service</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-zinc-800">Category</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-zinc-800">Price</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-zinc-800">Features</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-zinc-800">ROI</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-zinc-800">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-200">
                    {filteredServices.map((service, index) => (
                      <motion.tr
                        key={service.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.05 }}
                        className="hover:bg-zinc-50 transition-colors"
                      >
                        <td className="px-6 py-4">
                          <div>
                            <h4 className="font-semibold text-zinc-800">{service.title}</h4>
                            <p className="text-sm text-zinc-600 line-clamp-2">{service.description}</p>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            {getCategoryIcon(service.category)}
                            <span className="text-sm text-zinc-600">{service.category}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-lg font-bold text-zion-purple">
                            ${service.price?.toLocaleString()}
                            <span className="text-sm text-zinc-500 font-normal">/month</span>
                          </div>
                          <div className="text-xs text-zinc-500">{service.marketPrice}</div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="space-y-1">
                            {service.features.slice(0, 2).map((feature, idx) => (
                              <div key={idx} className="flex items-center gap-2 text-sm text-zinc-600">
                                <Check className="w-4 h-4 text-green-500" />
                                {feature}
                              </div>
                            ))}
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-sm font-medium text-green-600">{service.roi}</div>
                          <div className="text-xs text-zinc-500">{service.estimatedDelivery}</div>
                        </td>
                        <td className="px-6 py-4">
                          <Link to="/contact">
                            <button className="px-4 py-2 bg-zion-cyan text-white rounded-lg text-sm font-medium hover:bg-zion-cyan-light transition-colors">
                              Get Quote
                            </button>
                          </Link>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      )}
      {/* No Results */}
      {filteredServices.length === 0 && (
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
            <p className="text-zinc-400 mb-6">Try adjusting your search criteria or browse all categories</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
              className="px-6 py-3 bg-zion-cyan text-white rounded-lg font-semibold hover:bg-zion-cyan-light transition-colors"
            >
              Clear Filters
            </button>
          </div>
        </section>
      )}
      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-zion-cyan to-zion-purple">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-white/90 mb-8 text-xl max-w-3xl mx-auto">
              Contact our team to discuss your specific needs and get a customized quote 
              for the services that will drive your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <button className="px-8 py-4 bg-white text-zion-blue rounded-lg font-semibold hover:scale-105 transition-transform">
                  Contact Us Today
                </button>
              </Link>
              <button className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-zion-blue transition-colors">
                Schedule a Demo
>>>>>>> b146bf389fafde756de41032cd8eb59c97440d83
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Tabs */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-slate-800/50 border border-slate-600/30 mb-12">
              <TabsTrigger value="microsaas" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                <Zap className="h-4 w-4 mr-2"/>
                Micro SAAS Services
              </TabsTrigger>
              <TabsTrigger value="ai" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white">
                <Brain className="h-4 w-4 mr-2"/>
                AI Services
              </TabsTrigger>
              <TabsTrigger value="it" className="data-[state=active]:bg-indigo-600 data-[state=active]:text-white">
                <Server className="h-4 w-4 mr-2"/>
                IT Services
              </TabsTrigger>
            </TabsList>

            <TabsContent value="microsaas">
              {renderMicroSaasPricing()}
            </TabsContent>

            <TabsContent value="ai">
              {renderAIPricing()}
            </TabsContent>

            <TabsContent value="it">
              {renderITPricing()}
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gradient-to-r from-blue-900/50 to-cyan-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact our team to discuss pricing, customization, and implementation for your business
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-center justify-center gap-3 text-slate-300">
              <Phone className="h-5 w-5 text-blue-400"/>
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-slate-300">
              <Mail className="h-5 w-5 text-blue-400"/>
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-slate-300">
              <MapPin className="h-5 w-5 text-blue-400"/>
              <span>364 E Main St STE 1008 Middletown DE 19709</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold px-8 py-3" onClick={() => window.open('https://ziontechgroup.com', '_blank')}>
              Visit Our Website
              <ExternalLink className="ml-2 h-4 w-4"/>
            </Button>
            <Button size="lg" variant="outline" className="border-slate-500 text-slate-300 hover:border-blue-500 hover:text-blue-400 px-8 py-3" onClick={() => window.open(`mailto:kleber@ziontechgroup.com`)}>
              Contact Us
              <Mail className="ml-2 h-4 w-4"/>
            </Button>
          </div>
        </div>
      </section>
    </div>);
};
export default ComprehensivePricing;
