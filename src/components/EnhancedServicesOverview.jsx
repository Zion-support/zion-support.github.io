import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
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
  Eye,
  ExternalLink
} from "lucide-react";
import { Link } from "react-router-dom";

// Import all service data
import { INNOVATIVE_MICRO_SAAS_SERVICES_2025 } from "@/data/innovativeMicroSaasServices2025";
import { ENHANCED_IT_SERVICES } from "@/data/enhancedITServices";
import { ENHANCED_AI_SERVICES } from "@/data/enhancedAIServices";

const categoryIcons = {
  'AI & Analytics': Brain,
  'Cybersecurity': Shield,
  'E-commerce': ShoppingCart,
  'Supply Chain': BarChart3,
  'Identity Management': Shield,
  'IoT': Cloud,
  'Customer Success': Heart,
  'Sustainability': Globe,
  'Human Resources': GraduationCap,
  'AI & Quantum': Brain,
  'IT Infrastructure': Cloud,
  'Cloud Services': Cloud,
  'IT Services': Code,
  'DevOps': Code,
  'Data Management': BarChart3,
  'AI Services': Brain
};

const categoryColors = {
  'AI & Analytics': 'from-purple-500 to-indigo-600',
  'Cybersecurity': 'from-red-500 to-pink-600',
  'E-commerce': 'from-green-500 to-emerald-600',
  'Supply Chain': 'from-blue-500 to-cyan-600',
  'Identity Management': 'from-orange-500 to-red-600',
  'IoT': 'from-teal-500 to-green-600',
  'Customer Success': 'from-pink-500 to-rose-600',
  'Sustainability': 'from-emerald-500 to-teal-600',
  'Human Resources': 'from-indigo-500 to-purple-600',
  'AI & Quantum': 'from-violet-500 to-purple-600',
  'IT Infrastructure': 'from-slate-500 to-gray-600',
  'Cloud Services': 'from-sky-500 to-blue-600',
  'IT Services': 'from-amber-500 to-orange-600',
  'DevOps': 'from-cyan-500 to-blue-600',
  'Data Management': 'from-emerald-500 to-green-600',
  'AI Services': 'from-purple-500 to-indigo-600'
};

export function EnhancedServicesOverview() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');

  // Combine all services
  const allServices = [
    ...INNOVATIVE_MICRO_SAAS_SERVICES_2025,
    ...ENHANCED_IT_SERVICES,
    ...ENHANCED_AI_SERVICES
  ];

  // Get unique categories
  const categories = [...new Set(allServices.map(service => service.category))];

  // Filter services based on search and filters
  const filteredServices = allServices.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    
    let matchesPrice = true;
    if (selectedPriceRange === 'low') {
      matchesPrice = service.price < 2000;
    } else if (selectedPriceRange === 'medium') {
      matchesPrice = service.price >= 2000 && service.price < 5000;
    } else if (selectedPriceRange === 'high') {
      matchesPrice = service.price >= 5000;
    }

    return matchesSearch && matchesCategory && matchesPrice;
  });

  const priceRanges = [
    { value: 'all', label: 'All Prices' },
    { value: 'low', label: 'Under $2,000' },
    { value: 'medium', label: '$2,000 - $5,000' },
    { value: 'high', label: 'Over $5,000' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Comprehensive Technology Solutions
          </h1>
          <p className="text-xl text-zion-slate-light max-w-4xl mx-auto mb-8">
            Discover our extensive portfolio of innovative micro SAAS services, IT solutions, and AI-powered platforms. 
            From cutting-edge cybersecurity to quantum computing, we provide enterprise-grade solutions that drive business transformation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" className="bg-zion-cyan text-white hover:bg-zion-cyan-dark">
                <Phone className="h-5 w-5 mr-2"/>
                Get Free Consultation
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white">
                <Mail className="h-5 w-5 mr-2"/>
                Request Quote
              </Button>
            </Link>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-zion-blue-dark rounded-2xl p-8 mb-16 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
          <div className="grid md:grid-cols-3 gap-6 text-zion-slate-light">
            <div className="flex items-center justify-center gap-3">
              <Phone className="h-6 w-6 text-zion-cyan" />
              <div>
                <p className="font-semibold">Phone</p>
                <p>+1 302 464 0950</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Mail className="h-6 w-6 text-zion-cyan" />
              <div>
                <p className="font-semibold">Email</p>
                <p>kleber@ziontechgroup.com</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <MapPin className="h-6 w-6 text-zion-cyan" />
              <div>
                <p className="font-semibold">Address</p>
                <p>364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-12">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light" />
              <Input
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-white/20 border-zion-cyan/30 text-white placeholder-zion-slate-light"
              />
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="bg-white/20 border-zion-cyan/30 text-white">
                <SelectValue placeholder="Select Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {categories.map(category => (
                  <SelectItem key={category} value={category}>{category}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedPriceRange} onValueChange={setSelectedPriceRange}>
              <SelectTrigger className="bg-white/20 border-zion-cyan/30 text-white">
                <SelectValue placeholder="Price Range" />
              </SelectTrigger>
              <SelectContent>
                {priceRanges.map(range => (
                  <SelectItem key={range.value} value={range.value}>{range.label}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredServices.map((service) => {
            const IconComponent = categoryIcons[service.category] || Code;
            const colorClass = categoryColors[service.category] || 'from-gray-500 to-gray-600';
            
            return (
              <Card key={service.id} className="bg-white/10 backdrop-blur-sm border-zion-cyan/30 hover:border-zion-cyan/60 transition-all duration-300 hover:scale-105 group">
                <CardHeader className="text-center">
                  <div className={`mx-auto w-16 h-16 bg-gradient-to-br ${colorClass} rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-white mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-zion-slate-light text-sm">
                    {service.description.substring(0, 120)}...
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Category and Price */}
                  <div className="flex justify-between items-center">
                    <Badge variant="secondary" className="bg-zion-cyan/20 text-zion-cyan border-zion-cyan/30">
                      {service.category}
                    </Badge>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-white">
                        {service.currency}{service.price.toLocaleString()}
                      </p>
                      <p className="text-sm text-zion-slate-light">per month</p>
                    </div>
                  </div>

                  {/* Market Price */}
                  <div className="text-center p-3 bg-zion-blue-dark/50 rounded-lg">
                    <p className="text-sm text-zion-slate-light">Market Price</p>
                    <p className="text-zion-cyan font-semibold">{service.marketPrice}</p>
                  </div>

                  {/* Key Benefits */}
                  <div className="space-y-2">
                    <h4 className="font-semibold text-white text-sm">Key Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.slice(0, 3).map((benefit, index) => (
                        <li key={index} className="text-xs text-zion-slate-light flex items-center gap-2">
                          <CheckCircle className="h-3 w-3 text-zion-cyan" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {service.tags.slice(0, 3).map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs border-zion-cyan/30 text-zion-cyan">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <Button 
                      className="flex-1 bg-zion-cyan hover:bg-zion-cyan-dark text-white"
                      size="sm"
                    >
                      <Eye className="h-4 w-4 mr-2" />
                      View Details
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="border-zion-cyan/30 text-zion-cyan hover:bg-zion-cyan hover:text-white"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>

                  {/* Contact Info */}
                  <div className="text-center p-3 bg-zion-blue-dark/30 rounded-lg">
                    <p className="text-xs text-zion-slate-light mb-2">Ready to get started?</p>
                    <div className="flex justify-center gap-2">
                      <Link to="/contact">
                        <Button size="sm" className="bg-zion-cyan hover:bg-zion-cyan-dark text-white text-xs">
                          <Phone className="h-3 w-3 mr-1" />
                          Contact
                        </Button>
                      </Link>
                      <Link to={`mailto:${service.contactInfo?.email || 'kleber@ziontechgroup.com'}`}>
                        <Button size="sm" variant="outline" className="border-zion-cyan/30 text-zion-cyan hover:bg-zion-cyan hover:text-white text-xs">
                          <Mail className="h-3 w-3 mr-1" />
                          Email
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Results Summary */}
        <div className="text-center text-zion-slate-light">
          <p className="text-lg">
            Showing {filteredServices.length} of {allServices.length} services
          </p>
          {filteredServices.length === 0 && (
            <div className="mt-8 p-8 bg-white/10 backdrop-blur-sm rounded-2xl">
              <p className="text-xl">No services found matching your criteria.</p>
              <p className="text-zion-slate-light mt-2">Try adjusting your search or filters.</p>
            </div>
          )}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <h2 className="text-3xl font-bold text-white mb-6">
            Need a Custom Solution?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
            Our team of experts can create tailored solutions to meet your specific business requirements. 
            Let's discuss how we can help transform your business.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" className="bg-zion-cyan hover:bg-zion-cyan-dark text-white">
                <Phone className="h-5 w-5 mr-2"/>
                Schedule Consultation
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white">
                <Mail className="h-5 w-5 mr-2"/>
                Request Custom Quote
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
