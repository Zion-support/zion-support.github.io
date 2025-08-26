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
  ExternalLink,
  Download,
  Share2
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

export function EnhancedServicesComparisonTable() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const [sortOrder, setSortOrder] = useState('asc');

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

  // Sort services
  const sortedServices = [...filteredServices].sort((a, b) => {
    let comparison = 0;
    
    switch (sortBy) {
      case 'name':
        comparison = a.title.localeCompare(b.title);
        break;
      case 'price':
        comparison = a.price - b.price;
        break;
      case 'category':
        comparison = a.category.localeCompare(b.category);
        break;
      case 'rating':
        comparison = (a.rating || 0) - (b.rating || 0);
        break;
      default:
        comparison = 0;
    }
    
    return sortOrder === 'asc' ? comparison : -comparison;
  });

  const priceRanges = [
    { value: 'all', label: 'All Prices' },
    { value: 'low', label: 'Under $2,000' },
    { value: 'medium', label: '$2,000 - $5,000' },
    { value: 'high', label: 'Over $5,000' }
  ];

  const sortOptions = [
    { value: 'name', label: 'Service Name' },
    { value: 'price', label: 'Price' },
    { value: 'category', label: 'Category' },
    { value: 'rating', label: 'Rating' }
  ];

  const exportToCSV = () => {
    const headers = ['Service Name', 'Category', 'Price', 'Market Price', 'Features', 'Benefits', 'Tags', 'Contact'];
    const csvContent = [
      headers.join(','),
      ...sortedServices.map(service => [
        service.title,
        service.category,
        `$${service.price}`,
        service.marketPrice,
        service.features?.slice(0, 3).join('; ') || '',
        service.benefits?.slice(0, 3).join('; ') || '',
        service.tags?.slice(0, 3).join('; ') || '',
        service.contactInfo?.email || 'kleber@ziontechgroup.com'
      ].join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'zion-tech-group-services-comparison.csv';
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Services Comparison Table
          </h1>
          <p className="text-xl text-zion-slate-light max-w-4xl mx-auto mb-8">
            Compare our comprehensive portfolio of technology solutions side-by-side. 
            Find the perfect service for your business needs with detailed feature comparisons and pricing.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" className="bg-zion-cyan hover:bg-zion-cyan-dark text-white">
                <Phone className="h-5 w-5 mr-2"/>
                Get Expert Advice
              </Button>
            </Link>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white"
              onClick={exportToCSV}
            >
              <Download className="h-5 w-5 mr-2"/>
              Export to CSV
            </Button>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-12">
          <div className="grid md:grid-cols-4 gap-4">
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
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="bg-white/20 border-zion-cyan/30 text-white">
                <SelectValue placeholder="Sort By" />
              </SelectTrigger>
              <SelectContent>
                {sortOptions.map(option => (
                  <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="flex justify-center mt-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
              className="border-zion-cyan/30 text-zion-cyan hover:bg-zion-cyan hover:text-white"
            >
              {sortOrder === 'asc' ? '↑ Ascending' : '↓ Descending'}
            </Button>
          </div>
        </div>

        {/* Results Summary */}
        <div className="text-center text-zion-slate-light mb-8">
          <p className="text-lg">
            Showing {filteredServices.length} of {allServices.length} services
          </p>
        </div>

        {/* Comparison Table */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-16 overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-zion-cyan/30">
                <th className="p-4 text-white font-semibold">Service</th>
                <th className="p-4 text-white font-semibold">Category</th>
                <th className="p-4 text-white font-semibold">Price</th>
                <th className="p-4 text-white font-semibold">Market Price</th>
                <th className="p-4 text-white font-semibold">Key Features</th>
                <th className="p-4 text-white font-semibold">Benefits</th>
                <th className="p-4 text-white font-semibold">Tags</th>
                <th className="p-4 text-white font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {sortedServices.map((service, index) => {
                const IconComponent = categoryIcons[service.category] || Code;
                const colorClass = categoryColors[service.category] || 'from-gray-500 to-gray-600';
                
                return (
                  <tr key={service.id} className={`border-b border-zion-cyan/20 ${index % 2 === 0 ? 'bg-white/5' : ''} hover:bg-white/10 transition-colors duration-200`}>
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 bg-gradient-to-br ${colorClass} rounded-full flex items-center justify-center`}>
                          <IconComponent className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-white text-sm">{service.title}</h3>
                          <p className="text-zion-slate-light text-xs max-w-xs">
                            {service.description.substring(0, 80)}...
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <Badge variant="secondary" className="bg-zion-cyan/20 text-zion-cyan border-zion-cyan/30">
                        {service.category}
                      </Badge>
                    </td>
                    <td className="p-4">
                      <div className="text-right">
                        <p className="text-xl font-bold text-white">
                          {service.currency}{service.price.toLocaleString()}
                        </p>
                        <p className="text-xs text-zion-slate-light">per month</p>
                      </div>
                    </td>
                    <td className="p-4">
                      <p className="text-zion-cyan font-semibold text-sm">{service.marketPrice}</p>
                    </td>
                    <td className="p-4">
                      <ul className="space-y-1">
                        {service.features?.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="text-xs text-zion-slate-light flex items-center gap-2">
                            <CheckCircle className="h-3 w-3 text-zion-cyan" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </td>
                    <td className="p-4">
                      <ul className="space-y-1">
                        {service.benefits?.slice(0, 3).map((benefit, idx) => (
                          <li key={idx} className="text-xs text-zion-slate-light flex items-center gap-2">
                            <TrendingUp className="h-3 w-3 text-zion-cyan" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </td>
                    <td className="p-4">
                      <div className="flex flex-wrap gap-1">
                        {service.tags?.slice(0, 3).map((tag, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs border-zion-cyan/30 text-zion-cyan">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex flex-col gap-2">
                        <Link to="/contact">
                          <Button size="sm" className="w-full bg-zion-cyan hover:bg-zion-cyan-dark text-white text-xs">
                            <Phone className="h-3 w-3 mr-1" />
                            Contact
                          </Button>
                        </Link>
                        <Link to={`mailto:${service.contactInfo?.email || 'kleber@ziontechgroup.com'}`}>
                          <Button size="sm" variant="outline" className="w-full border-zion-cyan/30 text-zion-cyan hover:bg-zion-cyan hover:text-white text-xs">
                            <Mail className="h-3 w-3 mr-1" />
                            Email
                          </Button>
                        </Link>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* No Results Message */}
        {filteredServices.length === 0 && (
          <div className="text-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl">
            <p className="text-xl text-white">No services found matching your criteria.</p>
            <p className="text-zion-slate-light mt-2">Try adjusting your search or filters.</p>
          </div>
        )}

        {/* Contact Information */}
        <div className="bg-zion-blue-dark rounded-2xl p-8 mb-16 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Need Help Choosing?</h2>
          <p className="text-zion-slate-light mb-8 max-w-2xl mx-auto">
            Our technology experts are here to help you find the perfect solution for your business needs. 
            Get personalized recommendations and expert guidance.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-zion-slate-light mb-8">
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
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" className="bg-zion-cyan hover:bg-zion-cyan-dark text-white">
                <Phone className="h-5 w-5 mr-2"/>
                Schedule Free Consultation
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

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
            Choose from our comprehensive portfolio of technology solutions or let us create a custom solution 
            tailored to your specific business requirements.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" className="bg-zion-cyan hover:bg-zion-cyan-dark text-white">
                <Phone className="h-5 w-5 mr-2"/>
                Contact Sales Team
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white">
                <Mail className="h-5 w-5 mr-2"/>
                Request Demo
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}