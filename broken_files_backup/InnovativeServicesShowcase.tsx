import React, { useState, useMemo } from 'react';
import { SEO } from '@/components/SEO';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Search,
  Filter,
  Star,
  Clock,
  DollarSign,
  Users,
  ArrowRight,
  CheckCircle,
  Phone,
  Mail,
  Globe,
  Zap,
  Shield,
  Brain,
  Cpu,
  Database,
  Lock,
  Cloud,
  BarChart3,
  TrendingUp,
  Rocket,
  Leaf,
  Eye,
  Code,
  Network,
  Cube,
  Sparkles
} from 'lucide-react';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
import { INNOVATIVE_SERVICES_2025, INNOVATIVE_SERVICE_CATEGORIES_2025, INNOVATIVE_SERVICE_SUBCATEGORIES_2025 } from '@/data/innovativeNewServices2025';
export default function InnovativeServicesShowcase() {
=======
import SEOHead from '../components/SEOHead';

// Import all service data
import { ADVANCED_AI_SERVICES } from '../data/advancedAIServices';
import { INNOVATIVE_IT_INFRASTRUCTURE_SERVICES } from '../data/innovativeITInfrastructure';
import { IOT_EDGE_COMPUTING_SERVICES } from '../data/iotEdgeComputingServices';
import { INNOVATIVE_MICRO_SAAS_SERVICES } from '../data/innovativeMicroSaasServices';

const InnovativeServicesShowcase: React.FC = () => {
>>>>>>> origin/cursor/website-audit-and-enhancement-98df
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>('all');
  const [priceRange, setPriceRange] = useState<string>('all');
<<<<<<<< HEAD:src/pages/InnovativeServicesShowcase.tsx.cleanup-backup.1756208768

<<<<<<< HEAD
========
>>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-8896:broken_files_backup/InnovativeServicesShowcase.tsx
  const filteredServices = useMemo(() => {
    return INNOVATIVE_SERVICES_2025.filter(service => {
      const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
      const matchesSubcategory = selectedSubcategory === 'all' || service.subcategory === selectedSubcategory;
      const matchesPrice = priceRange === 'all' ||
        (priceRange === 'low' && service.price < 10000) ||
        (priceRange === 'medium' && service.price >= 10000 && service.price < 25000) ||
        (priceRange === 'high' && service.price >= 25000);
      return matchesSearch && matchesCategory && matchesSubcategory && matchesPrice;
    });
  }, [searchTerm, selectedCategory, selectedSubcategory, priceRange]);
<<<<<<<< HEAD:src/pages/InnovativeServicesShowcase.tsx.cleanup-backup.1756208768
=======
  // SEO configuration
  const seoConfig = {
    title: "Innovative Services 2025 - Zion Tech Group",
    description: "Discover cutting-edge AI, IT infrastructure, and micro SaaS services designed to transform your business. Explore our innovative technology solutions.",
    keywords: "AI services, IT infrastructure, micro SaaS, innovative technology, business solutions",
    url: "https://ziontechgroup.com/innovative-services"
  };

  // Combine all services
  const allServices = [
    ...ADVANCED_AI_SERVICES,
    ...INNOVATIVE_IT_INFRASTRUCTURE_SERVICES,
    ...IOT_EDGE_COMPUTING_SERVICES,
    ...INNOVATIVE_MICRO_SAAS_SERVICES
  ];
>>>>>>> origin/cursor/website-audit-and-enhancement-98df

========
>>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-8896:broken_files_backup/InnovativeServicesShowcase.tsx
  const getSubcategoriesForCategory = (category: string) => {
    if (category === 'all') return [];
    return INNOVATIVE_SERVICE_SUBCATEGORIES_2025[category as keyof typeof INNOVATIVE_SERVICE_SUBCATEGORIES_2025] || [];
  };
  const getCategoryIcon = (category: string) => {
    const categoryIcons: { [key: string]: React.ReactNode } = {
      'AI & Analytics': <Brain className="h-5 w-5" />,
      'Emerging Technology': <Rocket className="h-5 w-5" />,
      'Blockchain & Web3': <Cube className="h-5 w-5" />,
      'IoT & Edge Computing': <Network className="h-5 w-5" />,
      'Cybersecurity': <Shield className="h-5 w-5" />,
      'Metaverse & VR/AR': <Eye className="h-5 w-5" />,
      'Green Technology': <Leaf className="h-5 w-5" />,
      'Digital Twin': <Cpu className="h-5 w-5" />
    };
    return categoryIcons[category] || <Zap className="h-5 w-5" />;
  };
  const getPriceRange = (price: number) => {
    if (price < 10000) return 'starter';
    if (price < 25000) return 'professional';
    return 'enterprise';
  };
  const getPriceRangeColor = (range: string) => {
    switch (range) {
      case 'starter': return 'bg-green-100 text-green-800 border-green-200';
      case 'professional': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'enterprise': return 'bg-purple-100 text-purple-800 border-purple-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };
  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-background">
      <SEO
        title="Innovative Services 2025 - Zion Tech Group"
        description="Discover cutting-edge AI, quantum computing, blockchain, and emerging technology solutions. Transform your business with our innovative micro SAAS services and IT solutions."
        keywords="AI services, quantum computing, blockchain, Web3, IoT, cybersecurity, metaverse, green tech, digital twin, innovative technology solutions"
        canonical="https://ziontechgroup.com/innovative-services-2025"
      />
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32 bg-gradient-to-b from-zion-blue-dark via-zion-blue to-zion-purple-dark">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-zion-purple-light opacity-40 animate-pulse"></div>
          <div className="absolute top-1/3 right-1/3 w-3 h-3 rounded-full bg-zion-cyan opacity-30 animate-pulse"></div>
          <div className="absolute bottom-1/4 left-1/2 w-2 h-2 rounded-full bg-zion-purple opacity-40 animate-pulse"></div>
        </div>
        <div className="container relative z-10 px-4 mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Innovative Services 2025
          </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light mb-10 max-w-4xl mx-auto">
            Experience the future of technology with our cutting-edge AI, quantum computing, blockchain, and emerging tech solutions.
            Transform your business with intelligent, innovative, and diversified micro SAAS services.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-zion-cyan">8+</div>
              <div className="text-sm text-zion-cyan-light">Technology Categories</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-zion-purple">Global</div>
              <div className="text-sm text-zion-cyan-light">Deployment</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-zion-cyan">24/7</div>
              <div className="text-sm text-zion-cyan-light">Expert Support</div>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-zion-purple hover:bg-zion-purple-dark text-white">
              <Link to="/contact">Get Started Today</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-zion-blue">
              <Link to="/request-quote">Request Custom Quote</Link>
            </Button>
          </div>
        </div>
      </section>
      {/* Contact Information Banner */}
      <section className="bg-zion-slate-dark py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left">
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-zion-cyan" />
              <span className="text-white">+1 302 464 0950</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-zion-cyan" />
              <span className="text-white">kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center gap-3">
              <Globe className="h-5 w-5 text-zion-cyan" />
              <span className="text-white">https://ziontechgroup.com</span>
=======
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <SEOHead config={seoConfig} />
      
      {/* Header Section */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Innovative Services Showcase
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our cutting-edge micro SAAS services, IT solutions, and AI-powered platforms designed to transform your business operations and drive innovation.
            </p>
            <div className="mt-6 flex justify-center space-x-4">
              <div className="flex items-center text-gray-600">
                <Users className="w-5 h-5 mr-2" />
                <span>{allServices.length}+ Services</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Award className="w-5 h-5 mr-2" />
                <span>Enterprise Grade</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Globe className="w-5 h-5 mr-2" />
                <span>Global Support</span>
              </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-98df
            </div>
          </div>
        </div>
      </section>
      {/* Search and Filter Section */}
      <section className="py-12 bg-zion-slate-light">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <select
                value={selectedCategory}
                onChange={(e) => {
                  setSelectedCategory(e.target.value);
                  setSelectedSubcategory('all');
                }}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-zion-blue"
              >
                <option value="all">All Categories</option>
                {INNOVATIVE_SERVICE_CATEGORIES_2025.map((category) => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
              <select
                value={selectedSubcategory}
                onChange={(e) => setSelectedSubcategory(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-zion-blue"
              >
                <option value="all">All Subcategories</option>
                {getSubcategoriesForCategory(selectedCategory).map((subcategory) => (
                  <option key={subcategory} value={subcategory}>{subcategory}</option>
                ))}
              </select>
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-zion-blue"
              >
                <option value="all">All Prices</option>
                <option value="low">Under $10K</option>
                <option value="medium">$10K - $25K</option>
                <option value="high">$25K+</option>
              </select>
            </div>
          </div>
        </div>
      </section>
      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-zion-blue-dark mb-6">
              Cutting-Edge Technology Solutions
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Discover our comprehensive portfolio of innovative services designed to future-proof your business
              and drive digital transformation across all industries.
            </p>
          </div>
          {filteredServices.length === 0 ? (
            <div className="text-center py-20">
              <h3 className="text-2xl font-semibold text-zion-slate mb-4">No services found</h3>
              <p className="text-zion-slate-light mb-6">Try adjusting your search criteria or browse all categories.</p>
              <Button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                  setSelectedSubcategory('all');
                  setPriceRange('all');
                }}
                variant="outline"
              >
                Clear Filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <Card key={service.id} className="group hover:shadow-2xl transition-all duration-300 hover:scale-105 border-zion-slate-light">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <div className="w-10 h-10 bg-zion-blue/20 rounded-lg flex items-center justify-center">
                          {getCategoryIcon(service.category)}
                        </div>
                        <Badge
                          variant="outline"
                          className={`border-2 ${getPriceRangeColor(getPriceRange(service.price))}`}
                        >
                          {getPriceRange(service.price)}
                        </Badge>
                      </div>
                      {service.featured && (
                        <Badge className="bg-zion-purple text-white">
                          <Star className="h-3 w-3 mr-1" />
                          Featured
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="text-xl text-zion-blue-dark group-hover:text-zion-purple transition-colors">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-zion-slate line-clamp-3">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* Key Features */}
                    <div>
                      <h4 className="font-semibold text-zion-blue-dark mb-2 flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-zion-cyan" />
                        Key Features
                      </h4>
                      <ul className="space-y-1">
                        {service.features.slice(0, 3).map((feature, index) => (
                          <li key={index} className="text-sm text-zion-slate-light flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full mt-2 flex-shrink-0"></div>
                            {feature}
                          </li>
                        ))}
                        {service.features.length > 3 && (
                          <li className="text-sm text-zion-cyan font-medium">
                            +{service.features.length - 3} more features
                          </li>
                        )}
                      </ul>
                    </div>
                    {/* Benefits */}
                    <div>
                      <h4 className="font-semibold text-zion-blue-dark mb-2 flex items-center gap-2">
                        <TrendingUp className="h-4 w-4 text-zion-cyan" />
                        Key Benefits
                      </h4>
                      <ul className="space-y-1">
                        {service.benefits.slice(0, 2).map((benefit, index) => (
                          <li key={index} className="text-sm text-zion-slate-light flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-zion-purple rounded-full mt-2 flex-shrink-0"></div>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                    {/* Pricing & Details */}
                    <div className="pt-4 border-t border-zion-slate-light">
                      <div className="flex items-center justify-between mb-3">
                        <div className="text-2xl font-bold text-zion-blue-dark">
                          {service.currency}{service.price.toLocaleString()}
                        </div>
                        <Badge variant="outline" className="text-zion-cyan border-zion-cyan">
                          {service.pricingModel}
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between text-sm text-zion-slate-light mb-4">
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {service.estimatedDelivery}
                        </span>
                        <span className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          {service.supportLevel}
                        </span>
                      </div>
                      {/* Rating */}
                      {service.rating && (
                        <div className="flex items-center gap-2 mb-4">
                          <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${i < Math.floor(service.rating!) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                              />
                            ))}
                          </div>
                          <span className="text-sm text-zion-slate-light">
                            {service.rating} ({service.reviewCount} reviews)
                          </span>
                        </div>
                      )}
                      {/* Market Price */}
                      <div className="mb-4 p-3 bg-zion-slate-light rounded-lg">
                        <div className="text-sm text-zion-slate-light mb-1">Market Price Range</div>
                        <div className="font-semibold text-zion-blue-dark">{service.marketPrice}</div>
                      </div>
                      {/* ROI */}
                      <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-lg">
                        <div className="text-sm text-green-700 mb-1">Expected ROI</div>
                        <div className="font-semibold text-green-800">{service.roi}</div>
                      </div>
                      {/* Action Buttons */}
                      <div className="flex gap-2">
                        <Button asChild className="flex-1 bg-zion-blue hover:bg-zion-blue-dark">
                          <Link to="/contact">
                            Get Started
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                        <Button asChild variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white">
                          <Link to="/request-quote">Quote</Link>
                        </Button>
                      </div>
                      {/* Contact Info */}
                      <div className="mt-4 pt-4 border-t border-zion-slate-light">
                        <div className="text-sm text-zion-slate-light mb-2">Ready to transform your business?</div>
                        <div className="flex items-center gap-2 text-sm">
                          <Phone className="h-4 w-4 text-zion-cyan" />
                          <span className="text-zion-blue-dark font-medium">+1 302 464 0950</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Mail className="h-4 w-4 text-zion-cyan" />
                          <span className="text-zion-blue-dark font-medium">kleber@ziontechgroup.com</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>
      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-zion-blue to-zion-purple">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Future-Proof Your Business?
          </h2>
          <p className="text-xl text-zion-cyan-light mb-10 max-w-3xl mx-auto">
            Join the technology revolution with Zion Tech Group. Our innovative solutions are designed to
            drive growth, efficiency, and competitive advantage in the digital age.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-zion-blue hover:bg-zion-slate-light">
              <Link to="/contact">Schedule a Consultation</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-zion-blue">
              <Link to="/request-quote">Get Custom Quote</Link>
            </Button>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Rocket className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Innovation First</h3>
              <p className="text-zion-cyan-light">Cutting-edge technology solutions that keep you ahead of the competition</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Enterprise Security</h3>
              <p className="text-zion-cyan-light">Bank-grade security and compliance for your most critical business operations</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Expert Support</h3>
              <p className="text-zion-cyan-light">24/7 expert support and dedicated success managers for your business</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}