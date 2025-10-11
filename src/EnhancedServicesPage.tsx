import React;, { useState } from 'react';
import { Card;, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select;, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs;, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React;, { useState } from 'react';
import { ENHANCED_SERVICES;, ENHANCED_SERVICE_CATEGORIES, SERVICE_PRICING_TIERS } from '@/data/enhancedServices';
import React;, { useState } from 'react';
import { ENHANCED_SERVICES;, SERVICE_CATEGORIES, EnhancedService } from '@/data/enhancedServices';
import React;, { useState } from 'react';
import { ENHANCED_SERVICES;, ENHANCED_SERVICE_CATEGORIES, SERVICE_PRICING_TIERS } from '@/data/enhancedServices';
import { ProductListing } from '@/types/listings';
import { Button } from '@/components/ui/button';
import { Card;, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select;, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs;, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {;;
ENHANCED_SERVICES,;
getServicesByCategory,;
getPopularServices,;
getNewServices,;
getPremiumServices,;
type EnhancedService 
} from "@/data/enhancedServices";
import {;;
Search,;
Filter,;
Star,;
Clock,;
import React;, { useState, useEffect } from 'react';
import {;;
Search, Filter, Star, Clock, DollarSign, Users, Zap, Brain, Cloud,;
Database, Shield, Settings, Eye, Leaf, CreditCard, Heart, Truck,;
ShoppingCart, Phone, Mail, MapPin, Globe, Bot, Cpu, Network,;
Building, Factory, Store, Car, Plane, Ship, Home, Hospital,;
Building2, GraduationCap, Calendar, FileText, BarChart3,;
MessageSquare, Camera, Video, Music, BookOpen, Target, TrendingUp,;
PieChart, Activity, Package, Wifi, ArrowRight, CheckCircle,;
Award, Rocket, Lightbulb, Shield as ShieldIcon, Zap as ZapIcon,;
Brain as BrainIcon, Cloud as CloudIcon, Database as DatabaseIcon
} from 'lucide-react';
import { COMPREHENSIVE_SERVICES;, SERVICE_CATEGORIES } from '../data/comprehensiveServices';
const EnhancedServicesPage: React.FC = () => {
  ;
const [searchTerm, setSearchTerm] = useState('');
const [selectedCategory, setSelectedCategory] = useState<string>('all');
const [selectedPricing, setSelectedPricing] = useState<string>('all');
const [selectedSupport, setSelectedSupport] = useState<string>('all');
const [sortBy, setSortBy] = useState<string>('name')
  // Filter services based on search and filters;
const filteredServices = COMPREHENSIVE_SERVICES.filter(service => {;;
const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||;;
service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||;
service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
const matchesCategory = selectedCategory === 'all' ||;;
service.category.toLowerCase().includes(selectedCategory.toLowerCase());
const matchesPricing = selectedPricingTier === 'all' ||; 
                           (selectedPricingTier === 'startup' && (service.price || 0) <= 299) ||
                           (selectedPricingTier === 'smb' && (service.price || 0) > 299 && (service.price || 0) <= 799) ||
                           (selectedPricingTier === 'enterprise' && (service.price || 0) > 799 && (service.price || 0) <= 1999) ||
                           (selectedPricingTier === 'custom' && (service.price || 0) > 1999);
return matchesSearch && matchesCategory && matchesPricing;
}

  });
const handleContact = (service: ProductListing) => {;;
setContactService(service)
}

  }

  return (;
    <div>
      <SEO />
      <Header />
      <main className="flex-1 relative">
        {/* Hero Section */}

        <section className="bg-gradient-to-br from-zion-blue to-zion-blue-dark py-20 relative overflow-hidden">
          <div>
          <div>
            <div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-r from-white via-zion-cyan to-zion-purple-light bg-clip-text text-transparent">;
Comprehensive Tech Services
              </h1>
              <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto leading-relaxed">;
Transform your business with our complete ecosystem of AI, IT infrastructure, and micro SAAS solutions.;
Expert-led services designed for the modern enterprise.
              </p>
              
              {/* Contact CTA */}

              <div>
          <div>
                  <div>
                    <Phone />
                    <span className="font-medium">+1 (302) 464-0950</span>
                  </div>
                  <div>
                    <Mail />
                    <span className="font-medium">kleber@ziontechgroup.com</span>
                  </div>
                </div>
                <div>
                  <MapPin />
                  364 E Main St STE 1008, Middletown, DE 19709
                </div>
              </div>
            </div>;
const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;;
const matchesPricing = selectedPricingModel === 'all' || service.pricingModel === selectedPricingModel;;
const matchesSupport = selectedSupportLevel === 'all' || service.supportLevel === selectedSupportLevel;;
const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;;
const matchesPricing = selectedPricing === 'all' ||; 
                          (selectedPricing === 'budget' && service.price < 1000) ||
                          (selectedPricing === 'mid-range' && service.price >= 1000 && service.price < 3000) ||
                          (selectedPricing === 'enterprise' && service.price >= 3000);
const matchesSupport = selectedSupport === 'all' || service.supportLevel === selectedSupport;;
return matchesSearch && matchesCategory && matchesPricing && matchesSupport;
  });
const getCategoryIcon = (category: string) => {;;
switch (category.toLowerCase()) {;
case 'ai automation':;
case 'ai analytics':;
case 'ai marketing':;
return <TrendingUp className="w-5 h-5" />;;
case 'cybersecurity':;
return <Shield className="w-5 h-5" />;;
case 'cloud services':;
case 'devops':;
return <Cloud className="w-5 h-5" />;;
case 'data analytics':;
case 'data management':;
case 'iot & analytics':;
return <Database className="w-5 h-5" />;;
case 'blockchain':;
return <Network className="w-5 h-5" />;;
case 'edge computing':;
return <Monitor className="w-5 h-5" />;;
case 'quantum computing':;
return <Monitor className="w-5 h-5" />;;
case 'ar/vr':;
return <Eye className="w-5 h-5" />;;
case 'fintech':;
return <DollarSign className="w-5 h-5" />;;,
default:;
return <TrendingUp className="w-5 h-5" />;
}

    }

  }

  const getPriceColor = (price: number) => {;;
if (price <= 4999) return 'text-green-500';;
if (price <= 14999) return 'text-blue-500';;
return 'text-purple-500';
}

  }

  return (;
    <div>
      <SEO />
      {/* Hero Section */}

      <div>
          <div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">;
Enhanced Micro SAAS Services
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">;
Transform your business with our comprehensive suite of innovative micro SAAS solutions,;
AI-powered services, and cutting-edge IT solutions. From startups to enterprises,;
we have the tools you need to succeed.
          </p>
          <div>
            <Button;
size="lg";
className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white";
onClick={() => handleContact(ENHANCED_SERVICES[0])}

            >
              <span className="mr-2">{tab.icon}</span>
              {tab.label}

            </button>
          ))}

        </div>

        {/* Search and Filter Section */}

        <div>
          <div>
            {/* Search */}

            <div>
              <input;
type="text";
placeholder="Search services...";
value={searchTerm}

                onChange={(e) =>
  </input> setSearchTerm(e.target.value)}

                className="w-full px-4 py-2 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus: border-cyan-400 focus: outline-none focus: ring-2 focus: ring-cyan-400/20"
              />
            </div>

            {/* Category Filter */}

            <div>
              <select;
value={selectedCategory}

                onChange={(e) => setSelectedCategory(e.target.value)}

                className="w-full px-4 py-2 bg-gray-800/50 border border-gray-600 rounded-lg text-white focus: border-cyan-400 focus: outline-none focus: ring-2 focus: ring-cyan-400/20"
              >
                <option value="all">All Categories</option>
                {categories.map(category => ()
                  <option key={category} value={category}>{category}</option>
                ))}

              </select>
            </div>

            {/* Sort */}

            <div>
              <select;
value={`${sortBy}}-${sortOrder}`}

                onChange={(e) => {};
}

const [newSortBy}, newSortOrder] = e.target.value.split('-');
setSortBy(newSortBy as any);
setSortOrder(newSortOrder as any)
                }}

                className="w-full px-4 py-2 bg-gray-800/50 border border-gray-600 rounded-lg text-white focus: border-cyan-400 focus: outline-none focus: ring-2 focus: ring-cyan-400/20"
              >
                <option value="name-asc">Name A-Z</option>
                <option value="name-desc">Name Z-A</option>
                <option value="price-asc">Price Low-High</option>
                <option value="price-desc">Price High-Low</option>
                <option value="rating-desc">Rating High-Low</option>
                <option value="aiScore-desc">AI Score High-Low</option>
              </select>
            </div>
          </div>
        </div>

        {/* Services Grid */}

        <div>
          {currentServices.map((service) => (
            <div>
              {/* Service Header */}

              <div>
          <div>
                  {getServiceIcon(service.category)}

                </div>
                <div>
                  {service.featured && (
                    <span className="inline-block px-2 py-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-xs text-white rounded-full mb-2">;
Featured
                    </span>
                  )}

                  <div>
                    {formatPrice(service.price, service.currency, service.pricingModel)}

                  </div>
                </div>
              </div>

              {/* Service Title and Category */}

              <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
              <div>
                <span className="text-sm text-cyan-400">{service.category}</span>
                <span className="text-gray-500">•</span>
                <span className="text-sm text-gray-400">{service.subcategory}</span>
              </div>

              {/* Description */}

              <p className="text-gray-300 mb-4 leading-relaxed">{service.description}</p>

              {/* Metrics */}

              <div>
                {service.aiScore && (
                  <div>
                    <div className="text-lg font-bold text-cyan-400">{service.aiScore}</div>
                    <div className="text-xs text-gray-400">AI Score</div>
                  </div>
                )}

                {service.rating && (
                  <div>
                    <div className="text-lg font-bold text-yellow-400">{service.rating}</div>
                    <div className="text-xs text-gray-400">Rating</div>
                  </div>
                )}

                {service.marketSize && (
                  <div>
                    <div className="text-lg font-bold text-green-400">{service.marketSize}</div>
                    <div className="text-xs text-gray-400">Market Size</div>
                  </div>
                )}

                {service.roi && (
                  <div>
                    <div className="text-lg font-bold text-purple-400">{service.roi}</div>
                    <div className="text-xs text-gray-400">ROI</div>
                  </div>
                )}

              </div>

              {/* Tags */}

              <div>
                {service.tags.slice(0, 4).map((tag), index) => (
                  <$2 />;
key={index}

                    className="px-2 py-1 bg-gray-800/50 text-xs text-cyan-400 rounded-full border border-cyan-400/30"
                  >
                    {tag}

                  </span>
                ))}

              </div>

              {/* Key Benefits */}

              <div>
                <h4 className="text-sm font-semibold text-white mb-2">Key Benefits:</h4>
                <ul className="space-y-1">
                  {service.benefits.slice(0, 3).map((benefit), index) => (
                    <li key={index} className="text-xs text-gray-300 flex items-start">
                      <span className="text-cyan-400 mr-2">✓</span>
                      {benefit}

                    </li>
                  ))}

                </ul>
              </div>

              {/* Contact and Action */}

              <div>
          <div>
                  <div>
                    <div>📧 {service.contactInfo.email}</div>
                    <div>📱 {service.contactInfo.phone}</div>
                  </div>
                  <button className="btn-futuristic text-sm px-4 py-2">;
Get Quote
                  </button>
                </div>
              </div>
            </div>
          ))}

        </div>

        {/* No Results Message */}

        {currentServices.length === 0 && (
          <div>
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-white mb-2">No Services Found</h3>
            <p className="text-gray-400">;
Try adjusting your search terms or filters to find what you're looking for.
            </p>
          </div>
        )}

        {/* Contact Section */}

        <div>
          <h2 className="text-3xl font-bold text-white mb-4">;
Ready to Get Started?
          </h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">;
Contact our team of experts to discuss your specific needs and find the perfect solution for your business.
          </p>
          <div>
            <button className="btn-futuristic">;
Schedule Free Consultation
            </button>
            <button className="btn-futuristic">;
View Case Studies
            </button>
          </div>
        </div>

        {/* Stats Section */}

        <div>
          {[
            { number: '50+'}, label: 'AI Services', icon: '🤖' },
            { number: '100+', label: 'Micro SAAS Solutions', icon: '💻' },
            { number: '25+', label: 'IT Services', icon: '🔧' },
            { number: '24/7', label: 'Support Available', icon: '🔄' }

          ].map((stat), index) => (
            <div>
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-gradient-primary mb-1">{stat.number}</div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}

  const getCategoryIcon = (category: string) => {;;
}

const iconMap: { [key: string]: React.ReactNode } = {
      'AI Automation': <Brain className="w-5 h-5" />,
      'Content AI': <Zap className="w-5 h-5" />,
      'Predictive Analytics': <TrendingUp className="w-5 h-5" />,
      'Cybersecurity': <Shield className="w-5 h-5" />,
      'Threat Intelligence': <Lock className="w-5 h-5" />,
      'Compliance': <Shield className="w-5 h-5" />,
      'Cloud Management': <Cloud className="w-5 h-5" />,
      'DevOps': <Zap className="w-5 h-5" />,
      'Containerization': <Database className="w-5 h-5" />,
      'Data Engineering': <Database className="w-5 h-5" />,
      'Data Governance': <Database className="w-5 h-5" />,
      'Business Intelligence': <TrendingUp className="w-5 h-5" />,
      'IoT': <Smartphone className="w-5 h-5" />,
      'Edge Computing': <Zap className="w-5 h-5" />,
      'Blockchain': <Lock className="w-5 h-5" />,
      'Web3': <Globe className="w-5 h-5" />,
      'Digital Transformation': <Building className="w-5 h-5" />,
      'System Modernization': <Zap className="w-5 h-5" />,
      'Healthcare AI': <Users className="w-5 h-5" />,
      'FinTech': <TrendingUp className="w-5 h-5" />,
      'Retail AI': <Building />
    }

    return iconMap[category] || <Zap className="w-5 h-5" />;
  }

  return (;
    <div>
      <SEO />
      {/* Hero Section */}

      <div>
          <div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">;
Enterprise IT & AI Services
          </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto">;
Transform your business with cutting-edge technology solutions. From AI automation to cybersecurity,;
we deliver enterprise-grade services that drive innovation and growth.
          </p>
          <div>
            <Button size="lg" className="bg-white text-zion-blue hover:bg-zion-slate-light">;
Get Started Today
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-zion-blue">;
View Case Studies
      <div>
          <div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">;
Advanced IT & AI Services
          </h1>
          <p className="text-xl md:text-2xl text-zion-cyan mb-8 max-w-4xl mx-auto">;
Cutting-edge technology solutions designed to transform your business. From AI automation to quantum computing,;
we deliver innovative services that drive growth and competitive advantage.
          </p>
          <div>
            <Button />
              <Mail className="w-5 h-5 mr-2" />;
Get Free Consultation
            </Button>
            <Button />
              <Phone className="w-5 h-5 mr-2" />;
Call +1 302 464 0950
            </Button>
          </div>
        </div>
      </div>

      {/* Contact Information */}

      <div>
          <div>
          <div>
          <div>
              <Phone />
              <span>+1 302 464 0950</span>
            </div>
            <div>
              <Mail />
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div>
              <MapPin />
              <span>364 E Main St STE 1008, Middletown DE 19709</span>
  // Sort services;
const sortedServices = [...filteredServices].sort((a);, b) => {;
switch (sortBy) {;
case 'price-low':;
return a.price - b.price;;
case 'price-high':;
return b.price - a.price;;
case 'name':;
return a.title.localeCompare(b.title);;
case 'category':;
return a.category.localeCompare(b.category);;,
default:;
return 0;
}

    }

  });
const getCategoryIcon = (category: string) => {;;
switch (category) {;
case 'AI & Machine Learning':;
return <BrainIcon className="w-6 h-6 text-blue-500" />;;
case 'Cybersecurity':;
return <ShieldIcon className="w-6 h-6 text-red-500" />;;
case 'Blockchain & Web3':;
return <ZapIcon className="w-6 h-6 text-yellow-500" />;;
case 'Quantum Computing':;
return <Cpu className="w-6 h-6 text-purple-500" />;;
case 'Internet of Things':;
return <Wifi className="w-6 h-6 text-green-500" />;;
case 'Cloud & Infrastructure':;
return <CloudIcon className="w-6 h-6 text-gray-500" />;;
case 'Data & Analytics':;
return <DatabaseIcon className="w-6 h-6 text-indigo-500" />;;,
default:;
return <Settings className="w-6 h-6 text-gray-400" />;
}

    }

  }

  const getPricingBadge = (price: number) => {;;
}

if (price < 1000) return { text: 'Budget';}, color: 'bg-green-100 text-green-800' }

    if (price < 3000) return { text: 'Mid-Range';, color: 'bg-yellow-100 text-yellow-800' }

    return { text: 'Enterprise';, color: 'bg-purple-100 text-purple-800' }

  }

  const getSupportBadge = (support: string) => {;;
switch (support) {;
case 'basic':;
}

return { text: 'Basic';}, color: 'bg-gray-100 text-gray-800' }

      case 'premium':;
return { text: 'Premium';, color: 'bg-blue-100 text-blue-800' }

      case 'enterprise':;
return { text: 'Enterprise';, color: 'bg-purple-100 text-purple-800' }

      default:;
return { text: 'Standard';, color: 'bg-gray-100 text-gray-800' }

  Users,;
Zap,;
TrendingUp,;
Shield,;
Brain,;
Cloud,;
Code,;
Settings,;
BarChart3,;
ArrowRight,;
Play,;
ExternalLink,;
Phone,;
Mail,;
MapPin,;
CheckCircle,;
DollarSign,;
Calendar
} from "lucide-react";
import { SimpleFuturisticBackground } from "@/components/ui/FuturisticBackground";
export default function EnhancedServicesPage() {;
const [searchQuery, setSearchQuery] = useState('');
const [selectedCategory, setSelectedCategory] = useState<string>('all');
const [selectedPricing, setSelectedPricing] = useState<string>('all');
const [sortBy, setSortBy] = useState<string>('popularity');
const popularServices = getPopularServices();;
const newServices = getNewServices();;
const premiumServices = getPremiumServices();;
const categories = [;
}

    { id: 'all', label: 'All Services', icon: <Zap className="h-4 w-4" /> },
    { id: 'AI', label: 'AI Services', icon: <Brain className="h-4 w-4" /> },
    { id: 'IT', label: 'IT Services', icon: <Settings className="h-4 w-4" /> },
    { id: 'SAAS', label: 'SAAS Solutions', icon: <Cloud className="h-4 w-4" /> },
    { id: 'Development', label: 'Development', icon: <Code className="h-4 w-4" /> },
    { id: 'Consulting', label: 'Consulting', icon: <Users className="h-4 w-4" /> },
    { id: 'Automation', label: 'Automation', icon: <TrendingUp className="h-4 w-4" /> },
    { id: 'Integration', label: 'Integration', icon: <BarChart3 className="h-4 w-4" /> }

  ];
const pricingModels = [;
    { id: 'all', label: 'All Pricing' },
    { id: 'hourly', label: 'Hourly' },
    { id: 'monthly', label: 'Monthly' },
    { id: 'project', label: 'Project-based' },
    { id: 'subscription', label: 'Subscription' }

  ];
const sortOptions = [;
    { id: 'popularity', label: 'Most Popular' },
    { id: 'rating', label: 'Highest Rated' },
    { id: 'price-low', label: 'Price: Low to High' },
    { id: 'price-high', label: 'Price: High to Low' },
    { id: 'newest', label: 'Newest First' }

  ];
const getFilteredServices = () => {;;
let filtered = ENHANCED_SERVICES;
    // Category filter;
if (selectedCategory !== 'all') {;
filtered = filtered.filter(service => service.category === selectedCategory)
}

    }

    // Pricing filter;
if (selectedPricing !== 'all') {;
filtered = filtered.filter(service => service.price.pricingModel === selectedPricing)
    }

    // Search filter;
if (searchQuery) {;
const query = searchQuery.toLowerCase();;
filtered = filtered.filter(service =>;
service.title.toLowerCase().includes(query) ||;
service.description.toLowerCase().includes(query) ||;
service.tags.some(tag => tag.toLowerCase().includes(query))
      )
    }

    // Sorting;
switch (sortBy) {;
case 'rating':;
filtered.sort((a), b) => b.rating - a.rating);
break;
case 'price-low':;
filtered.sort((a), b) => a.price.min - b.price.min);
break;
case 'price-high':;
filtered.sort((a), b) => b.price.max - a.price.max);
break;
case 'newest':;
filtered.sort((a), b) => new Date(b.createdAt || Date.now()).getTime() - new Date(a.createdAt || Date.now()).getTime());
break;,
default: // popularity;
filtered.sort((a), b) => (b.reviewCount || 0) - (a.reviewCount || 0))
    }

;
return filtered;
  }

  const formatPrice = (service: EnhancedService) => {;;
}

const { min}, max, currency, pricingModel } = service.price;
if (pricingModel === 'hourly') {;
return `${currency;}${min}-${max}/hour`
    } else if (pricingModel === 'monthly') {;
return `${currency;}${min}-${max}/month`
    } else if (pricingModel === 'project') {;
return `${currency;}${min.toLocaleString()}-${max.toLocaleString()}`
    }

    return `${currency;}${min}-${max}`
  }

  const getCategoryIcon = (category: string) => {;;
switch (category) {;
case 'AI': return <Brain className="h-5 w-5 text-purple-400" />;;
case 'IT': return <Settings className="h-5 w-5 text-blue-400" />;;
case 'SAAS': return <Cloud className="h-5 w-5 text-cyan-400" />;;
case 'Development': return <Code className="h-5 w-5 text-green-400" />;;
case 'Consulting': return <Users className="h-5 w-5 text-orange-400" />;;
case 'Automation': return <TrendingUp className="h-5 w-5 text-pink-400" />;;
case 'Integration': return <BarChart3 className="h-5 w-5 text-yellow-400" />;;,
default: return <Zap className="h-5 w-5 text-gray-400" />;
}

    }

  }

  const filteredServices = getFilteredServices();;
return (;
    <SimpleFuturisticBackground />
      <div>
          <div>
          {/* Header Section */}

          <div>
          <div>
              <Zap />
              <span className="text-sm font-medium text-zion-cyan">Premium Services</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 bg-gradient-to-r from-white via-zion-cyan to-zion-purple bg-clip-text text-transparent">;
Our Premium Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">;
Discover our comprehensive suite of AI-powered solutions, enterprise IT services, and innovative SaaS platforms.;
Each service is designed to drive innovation and accelerate your business growth.
            </p>
          </div>

          {/* Contact Information Banner */}

          <div>
          <div>
              <div>
                <Phone />
                <div>
                  <div className="text-sm text-zion-slate-light">Phone</div>
                  <div className="text-white font-semibold">+1 302 464 0950</div>
                </div>
              </div>
              <div>
                <Mail />
                <div>
                  <div className="text-sm text-zion-slate-light">Email</div>
                  <div className="text-white font-semibold">kleber@ziontechgroup.com</div>
                </div>
              </div>
              <div>
                <MapPin />
                <div>
                  <div className="text-sm text-zion-slate-light">Address</div>
                  <div className="text-white font-semibold">364 E Main St STE 1008, Middletown DE 19709</div>
                </div>
              </div>
            </div>
          </div>

          {/* Featured Services Tabs */}

          <Tabs />
            <TabsList />
              <TabsTrigger />
                <Zap className="h-4 w-4 mr-2" />;
All
              </TabsTrigger>
              <TabsTrigger />
                <Star className="h-4 w-4 mr-2" />;
Popular
              </TabsTrigger>
              <TabsTrigger />
                <Zap className="h-4 w-4 mr-2" />;
New
              </TabsTrigger>
              <TabsTrigger />
                <Shield className="h-4 w-4 mr-2" />;
Premium
              </TabsTrigger>
              <TabsTrigger />
                <Filter className="h-4 w-4 mr-2" />;
Custom
              </TabsTrigger>
            </TabsList>

            <TabsContent />
              <div>
                {ENHANCED_SERVICES.map((service) => (
                  <ServiceCard />
                ))}

              </div>
            </TabsContent>

            <TabsContent />
              <div>
                {popularServices.map((service) => (
                  <ServiceCard />
                ))}

              </div>
            </TabsContent>

            <TabsContent />
              <div>
                {newServices.map((service) => (
                  <ServiceCard />
                ))}

              </div>
            </TabsContent>

            <TabsContent />
              <div>
                {premiumServices.map((service) => (
                  <ServiceCard />
                ))}

              </div>
            </TabsContent>

            <TabsContent />
              {/* Filters and Search */}

              <div>
          <div>
                  <div>
                    <label className="text-sm font-medium text-white mb-2 block">Search Services</label>
                    <Input;
placeholder="Search by name, description, or tags...";
value={searchQuery}

                      onChange={(e) => setSearchQuery(e.target.value)}

                      className="bg-zion-blue-dark/50 border-zion-purple/30 text-white placeholder: text-zion-slate-light"
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-white mb-2 block">Category</label>
                    <Select />
                      <SelectTrigger />
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent />
                        {categories.map((category) => (
                          <SelectItem />
                            {category.label}

                          </SelectItem>
                        ))}

                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-white mb-2 block">Pricing Model</label>
                    <Select />
                      <SelectTrigger />
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent />
                        {pricingModels.map((pricing) => (
                          <SelectItem />
                            {pricing.label}

                          </SelectItem>
                        ))}

                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-white mb-2 block">Sort By</label>
                    <Select />
                      <SelectTrigger />
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent />
                        {sortOptions.map((option) => (
                          <SelectItem />
                            {option.label}

                          </SelectItem>
                        ))}

                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Results Count */}

              <div>
                <p className="text-zion-slate-light">;
Showing {filteredServices.length} of {ENHANCED_SERVICES.length} services
                </p>
              </div>

              {/* Filtered Services Grid */}

              <div>
                {filteredServices.map((service) => (
                  <ServiceCard />
                ))}

              </div>

              {filteredServices.length === 0 && (
                <div>
                  <div className="text-zion-slate-light text-lg mb-4">No services found matching your criteria</div>
                  <Button;
onClick={() => {};
setSearchQuery('');
setSelectedCategory('all');
setSelectedPricing('all');
}

setSortBy('popularity')}}

                    variant="outline";
className="border-zion-purple/30 text-zion-cyan hover:bg-zion-purple/10 hover:border-zion-purple/50"
                  >;
Clear Filters
                  </Button>
                </div>
              )}

            </TabsContent>
          </Tabs>

          {/* CTA Section */}

          <div>
          <div>
              <h3 className="text-2xl font-bold text-white mb-4">;
Need a Custom Solution?
              </h3>
              <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">;
Can't find exactly what you're looking for? Our team of experts can create custom solutions;
tailored to your specific business needs and requirements.
              </p>
              <div>
                <Button;
size="lg";
className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white gap-3";
onClick={() => window.open('https://ziontechgroup.com/contact', '_blank')}

                >
                  <ExternalLink className="h-4 w-4" />;
Contact Our Team
                </Button>
                <Button;
size="lg";
variant="outline";
className="border-zion-purple/30 text-zion-cyan hover:bg-zion-purple/10 hover:border-zion-purple/50 gap-3";
onClick={() => window.open('https://ziontechgroup.com/demo', '_blank')}

                >
                  <Play className="h-4 w-4" />;
Schedule Demo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SimpleFuturisticBackground>
  )
}

;
interface ServiceCardProps {;,
service: EnhancedService
}

;
function ServiceCard({ service }: ServiceCardProps) {;
const formatPrice = (service: EnhancedService) => {;;
}

const { min}, max, currency, pricingModel } = service.price;
if (pricingModel === 'hourly') {;
return `${currency;}${min}-${max}/hour`
    } else if (pricingModel === 'monthly') {;
return `${currency;}${min}-${max}/month`
    } else if (pricingModel === 'project') {;
return `${currency;}${min.toLocaleString()}-${max.toLocaleString()}`
    }

    return `${currency;}${min}-${max}`
  }

  const getCategoryIcon = (category: string) => {;;
switch (category) {;
case 'AI': return <Brain className="h-5 w-5 text-purple-400" />;;
case 'IT': return <Settings className="h-5 w-5 text-blue-400" />;;
case 'SAAS': return <Cloud className="h-5 w-5 text-cyan-400" />;;
case 'Development': return <Code className="h-5 w-5 text-green-400" />;;
case 'Consulting': return <Users className="h-5 w-5 text-orange-400" />;;
case 'Automation': return <TrendingUp className="h-5 w-5 text-pink-400" />;;
case 'Integration': return <BarChart3 className="h-5 w-5 text-yellow-400" />;;,
default: return <Zap className="h-5 w-5 text-gray-400" />;
}

    }

  }

  return (;
      <div>
          <div>
          <div>
          <div>
              <Search />
              <Input;
placeholder="Search services...";
value={searchTerm}

                onChange={(e) => setSearchTerm(e.target.value)}

                className="pl-10 bg-zion-blue-dark border-zion-blue-light text-white placeholder-zion-slate-light"
              />
            </div>
            <Select />
              <SelectTrigger />
                <SelectValue />
              </SelectTrigger>
              <SelectContent />
                <SelectItem value="all">All Categories</SelectItem>
                {ENHANCED_SERVICE_CATEGORIES.map(category => ()
                  <SelectItem />
                    {category.label}

                  </SelectItem>
                ))}

              </SelectContent>
            </Select>
            <Select />
              <SelectTrigger />
                <SelectValue />
              </SelectTrigger>
              <SelectContent />
                <SelectItem value="all">All Prices</SelectItem>
      {/* Why Choose Zion Tech Group */}

      <div>
          <div>
          <div>
            <h2 className="text-3xl font-bold text-zion-blue mb-4">Why Choose Zion Tech Group?</h2>
            <p className="text-zion-slate text-lg max-w-3xl mx-auto">;
We combine cutting-edge technology with proven business expertise to deliver solutions that drive real results.
            </p>
          </div>
          
          <div>
          <div>
              <div>
                <Globe />
              </div>
              <h3 className="text-xl font-semibold text-zion-blue mb-2">Global Reach</h3>
              <p className="text-zion-slate">Serving clients worldwide with 24/7 support and local expertise</p>
            </div>
            
            <div>
          <div>
                <Shield />
              </div>
              <h3 className="text-xl font-semibold text-zion-blue mb-2">Enterprise Security</h3>
              <p className="text-zion-slate">Bank-grade security and compliance with industry standards</p>
            </div>
            
            <div>
          <div>
                <Zap />
              </div>
              <h3 className="text-xl font-semibold text-zion-blue mb-2">Innovation First</h3>
              <p className="text-zion-slate">Cutting-edge AI and emerging technology solutions</p>
            </div>
            
            <div>
          <div>
                <Users />
              </div>
              <h3 className="text-xl font-semibold text-zion-blue mb-2">Expert Team</h3>
              <p className="text-zion-slate">Certified professionals with deep industry expertise</p>
            </div>
          </div>

          {filteredServices.length === 0 && (
            <div>
              <div className="text-zion-slate-light text-xl mb-4">No services found matching your criteria</div>
              <Button onClick={() => {};
setSearchTerm('');
setSelectedCategory('all');
}

setPriceRange('all')}}>;
Clear Filters
              </Button>
            </div>
          )}

        </div>
      </div>

      {/* CTA Section */}

        {filteredServices.length === 0 && (
          <div>
            <div className="text-gray-500 text-lg mb-4">No services found matching your criteria</div>
            <Button onClick={() => {};
setSearchTerm('');
setSelectedCategory('all');
setSelectedPricingModel('all');
}

setSelectedSupportLevel('all')}}>;
Clear Filters
            </Button>
      <div>
          <div>
          <div>
            {/* Search */}

            <div>
              <Search />
              <input;
type="text";
placeholder="Search services...";
value={searchTerm}

                onChange={(e) => setSearchTerm(e.target.value)}

                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus: ring-2 focus: ring-blue-500 focus: border-transparent"
              />
            </div>

            {/* Category Filter */}

            <select;
value={selectedCategory}

              onChange={(e) => setSelectedCategory(e.target.value)}

              className="px-4 py-2 border border-gray-300 rounded-lg focus: ring-2 focus: ring-blue-500 focus: border-transparent"
            >
              <option value="all">All Categories</option>
              {SERVICE_CATEGORIES.map(category => ()
                <option key={category} value={category}>{category}</option>
              ))}

            </select>

            {/* Pricing Filter */}

            <select;
value={selectedPricing}

              onChange={(e) => setSelectedPricing(e.target.value)}

              className="px-4 py-2 border border-gray-300 rounded-lg focus: ring-2 focus: ring-blue-500 focus: border-transparent"
            >
              <option value="all">All Pricing</option>
              <option value="budget">Budget ($0-$999)</option>
              <option value="mid-range">Mid-Range ($1K-$2.9K)</option>
              <option value="enterprise">Enterprise ($3K+)</option>
            </select>

            {/* Support Level Filter */}

            <select;
value={selectedSupport}

              onChange={(e) => setSelectedSupport(e.target.value)}

              className="px-4 py-2 border border-gray-300 rounded-lg focus: ring-2 focus: ring-blue-500 focus: border-transparent"
            >
              <option value="all">All Support Levels</option>
              <option value="basic">Basic</option>
              <option value="premium">Premium</option>
              <option value="enterprise">Enterprise</option>
            </select>
          </div>

          {/* Sort Options */}

          <div>
            <span className="text-gray-600">Sort by:</span>
            <select;
value={sortBy}

              onChange={(e) => setSortBy(e.target.value)}

              className="px-3 py-1 border border-gray-300 rounded-md focus: ring-2 focus: ring-blue-500 focus: border-transparent"
            >
              <option value="name">Name</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="category">Category</option>
            </select>
            <span className="text-gray-500 text-sm">
              {sortedServices.length} services found
            </span>
          </div>
        </div>

        {/* Services Grid */}

        <div>
          {sortedServices.map((service) => {};
const pricingBadge = getPricingBadge(service.price);;
const supportBadge = getSupportBadge(service.supportLevel);;
return (;
}

              <div>
                {/* Service Header */}

                <div>
          <div>
                    <div>
                      {getCategoryIcon(service.category)}

                      <div>
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                          {service.title}

                        </h3>
                        <p className="text-sm text-gray-500">{service.category}</p>
                      </div>
                    </div>
                    <div>
                      <span className="text-2xl font-bold text-blue-600">;
${service.price.toLocaleString()}

                      </span>
                      <span className="text-sm text-gray-500">per {service.pricingModel}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {service.description}

                  </p>

                  {/* Badges */}

                  <div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${pricingBadge.color}}`}>
                      {pricingBadge.text}

                    </span>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${supportBadge.color}}`}>
                      {supportBadge.text}

                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      {service.estimatedDelivery}

                    </span>
                  </div>

                  {/* Market Price Comparison */}

                  <div>
          <div>
                      <span className="text-gray-600">Market Price:</span>
                      <span className="font-semibold text-gray-900">{service.marketPrice}</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Our Price:</span>
                      <span className="font-bold text-green-600">${service.price.toLocaleString()}/{service.pricingModel}</span>
                    </div>
                  </div>
                </div>

                {/* Service Features */}

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />;
Key Features
                  </h4>
                  <div>
                    {service.features.slice(0, 4).map((feature), index) => (
                      <div>
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                        {feature}

                      </div>
                    ))}

                    {service.features.length > 4 && (
                      <div>
                        +{service.features.length - 4} more features
                      </div>
                    )}

                  </div>

                  {/* Benefits */}

                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-blue-500" />;
Key Benefits
                  </h4>
                  <div>
                    {service.benefits.slice(0, 3).map((benefit), index) => (
                      <div>
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                        {benefit}

                      </div>
                    ))}

                  </div>

                  {/* Tags */}

                  <div>
                    {service.tags.slice(0, 4).map((tag), index) => (
                      <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">
                        {tag}

                      </span>
                    ))}

                  </div>

                  {/* Contact & CTA */}

                  <div>
          <div>
                      <div>
          <div>
                          <Phone />
                          <span>{service.contactInfo.phone}</span>
                        </div>
                        <div>
                          <Mail />
                          <span>{service.contactInfo.email}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <$2 />;
href={`mailto:${service.contactInfo.email}}?subject=Inquiry about ${service.title}`}

                        className="flex-1 bg-blue-600 text-white text-center py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                      >
                        <Mail className="w-4 h-4" />;
Get Quote
                      </a>
                      <$2 />;
href={service.contactInfo.website}

                        target="_blank";
rel="noopener noreferrer";
className="flex-1 bg-gray-100 text-gray-700 text-center py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
                      >
                        <Globe className="w-4 h-4" />;
Learn More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}

        </div>

        {/* No Results */}

        {sortedServices.length === 0 && (
          <div>
            <Search />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No services found</h3>
            <p className="text-gray-600">Try adjusting your search criteria or filters.</p>
          </div>
        )}

      </div>

      <div>
          <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">;
Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-zion-cyan mb-8 max-w-2xl mx-auto">;
Our expert team is ready to help you implement cutting-edge technology solutions that drive real business results.
          </p>
          <div>
            <Button />
              <Mail className="w-5 h-5 mr-2" />;
Schedule Free Consultation
            </Button>
            <Button />
              <Phone className="w-5 h-5 mr-2" />;
Call +1 302 464 0950
            </Button>
          </div>
      {/* Contact Section */}

      <div>
          <div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">;
Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">;
Connect with Zion Tech Group today and discover how our innovative micro SAAS services can revolutionize your operations, enhance security, and drive growth.
            </p>
            
            <div>
          <div>
                <Phone />
                <h3 className="text-xl font-semibold mb-2">Call Us</h3>
                <p className="text-gray-300">+1 302 464 0950</p>
                <p className="text-sm text-gray-400">Available Mon-Fri, 9AM-6PM EST</p>
              </div>
              
              <div>
                <Mail />
                <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                <p className="text-gray-300">kleber@ziontechgroup.com</p>
                <p className="text-sm text-gray-400">24/7 support available</p>
              </div>
              
              <div>
                <MapPin />
                <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
                <p className="text-gray-300">364 E Main St STE 1008</p>
                <p className="text-gray-300">Middletown, DE 19709</p>
              </div>
            </div>

            <div>
              <$2 />;
href="https://ziontechgroup.com";
target="_blank";
rel="noopener noreferrer";
className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
              >
                <Globe className="w-5 h-5" />;
Visit Our Website
              </a>
              <$2 />;
href="mailto: kleber@ziontechgroup.com?subject=Business Consultation Request";
className="bg-gray-700 text-white px-8 py-3 rounded-lg hover:bg-gray-600 transition-colors flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />;
Schedule Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

}

}

}

export default EnhancedServicesPage
    <Card />
      <div>
        <img;
src={service.image} ;
alt={service.title}

          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div>
          {service.isPopular && (
            <Badge />
              <Star className="h-3 w-3 mr-1" />;
Popular
            </Badge>
          )}

          {service.isNew && (
            <Badge />
              <Zap className="h-3 w-3 mr-1" />;
New
            </Badge>
          )}

          {service.isPremium && (
            <Badge />
              <Shield className="h-3 w-3 mr-1" />;
Premium
            </Badge>
          )}

        </div>
        <div>
          {getCategoryIcon(service.category)}

        </div>
      </div>

      <CardHeader />
        <div>
          <CardTitle />
            {service.title}

          </CardTitle>
        </div>
        <CardDescription />
          {service.description}

        </CardDescription>
      </CardHeader>

      <CardContent />
        {/* Price and Rating */}

        <div>
          <div>
            {formatPrice(service)}

          </div>
          <div>
            <Star />
            <span className="text-sm text-white">{service.rating}</span>
            <span className="text-xs text-zion-slate-light">({service.reviewCount})</span>
          </div>
        </div>

        {/* Market Price Comparison */}

        <div className="text-xs text-zion-slate-light bg-zion-blue-dark/50 rounded px-2 py-1">;
Market Average: {service.averageMarketPrice}

        </div>

        {/* Key Benefits */}

        <div>
          <h4 className="text-sm font-medium text-white">Key Benefits:</h4>
          <ul className="space-y-1">
            {service.benefits.slice(0, 3).map((benefit), index) => (
              <li key={index} className="text-xs text-zion-slate-light flex items-start gap-2">
                <CheckCircle />
                {benefit}

              </li>
            ))}

          </ul>
        </div>

        {/* Delivery Time */}

        <div>
          <Clock />
          {service.deliveryTime}

        </div>

        {/* Action Buttons */}

        <div>
          <Button;
size="sm";
className="flex-1 bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white gap-2";
onClick={() => window.open(service.contactLink, '_blank')}

          >
            <ExternalLink className="h-3 w-3" />;
Get Quote
          </Button>
          {service.demoLink && (
            <Button;
size="sm";
variant="outline";
className="border-zion-purple/30 text-zion-cyan hover:bg-zion-purple/10 hover:border-zion-purple/50 gap-2";
onClick={() => window.open(service.demoLink}, '_blank')}

            >
              <Play className="h-3 w-3" />;
Demo
            </Button>
          )}

        </div>
      </CardContent>
    </Card>
  )
}

</div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></main></section>