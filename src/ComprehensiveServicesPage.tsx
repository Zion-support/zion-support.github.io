import { COMPREHENSIVE_SERVICES, SERVICE_CATEGORIES } from '@/data/comprehensiveServices';';
import { COMPREHENSIVE_SERVICES, SERVICE_CATEGORIES, SERVICE_SUBCATEGORIES, ComprehensiveService } from '@/data/comprehensiveServices';';
import { Button } from '@/components/ui/button';';
import { Input } from '@/components/ui/input';';
import { Badge } from '@/components/ui/badge';';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';';
import React, { useState } from 'react';';
import { EXPANDED_SERVICES, EXPANDED_SERVICE_CATEGORIES, EXPANDED_SERVICE_SUBCATEGORIES } from '@/data/expandedServices';';
import { ProductListing } from '@/types/listings';';
import { Button } from '@/components/ui/button';';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';';
import { Badge } from '@/components/ui/badge';';
import { Input } from '@/components/ui/input';';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';';
import {
  // TODO: Add properties
}
  // TODO: Add properties
}
  Search,
  Filter,
  Star,
  Clock,
  Globe,
  Shield,
  Zap,
  TrendingUp,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  CheckCircle,
  ArrowRight,
  Globe,
  Database,
  Smartphone,
  Lock,
  BarChart3,
  Code,
  Cloud,
  Brain,
  Server
} from 'lucide-react'';
import { Button } from '@/components/ui/button';';
import { Input } from '@/components/ui/input';';
import { Badge } from '@/components/ui/badge';';
import { SEO } from '@/components/SEO';';';
const matchesPrice = priceRange === 'all' || '
        (priceRange === 'low' && parseInt(service.price.replace(/[^0-9]/g, ')) < 5000) ||''
        (priceRange === 'medium' && parseInt(service.price.replace(/[^0-9]/g, ')) >= 5000 && parseInt(service.price.replace(/[^0-9]/g, '')) < 15000) ||'
        (priceRange === 'high' && parseInt(service.price.replace(/[^0-9]/g, ')) >= 15000)''
      return matchesSearch && matchesCategory && matchesPrice
    })
  }, [searchTerm, selectedCategory, selectedSubcategory]);
const getSubcategoriesForCategory = (category: string) => {
  // TODO: Add properties
}
  // TODO: Add properties
}
    if (category === 'all') return []'
    return serviceSubcategories[category as keyof typeof serviceSubcategories] || []
  }
  return (;
import React, { useState } from 'react';';
import { SEO } from '../components/SEO';';
import {
  // TODO: Add properties
}
  // TODO: Add properties
}
  Brain,
  Shield,
  Cloud,
  Zap,
  Users,
  Globe,
  Lock,
  BarChart3,
  ArrowRight,
  CheckCircle,
  Star,
  DollarSign,
  Clock,
  TrendingUp,
  Award,
  Mail,
  Phone,
  Search,
  Filter,
  ExternalLink,
  Code,
  Database,
  Network,
  Server,
  Cpu,
  Monitor
} from 'lucide-react'';
import { INNOVATIVE_MICRO_SAAS_SERVICES, INNOVATIVE_SAAS_CATEGORIES } from '../data/innovativeMicroSaasServices';';
import { SPECIALIZED_IT_SERVICES, SPECIALIZED_IT_CATEGORIES } from '../data/specializedITServices';';';
export default function ComprehensiveServicesPage() {;
const [selectedCategory, setSelectedCategory] = useState('all');';
const [searchQuery, setSearchQuery] = useState('');';
const [priceRange, setPriceRange] = useState('all');';
const allServices = [...INNOVATIVE_MICRO_SAAS_SERVICES, ...SPECIALIZED_IT_SERVICES];
const allCategories = [...INNOVATIVE_SAAS_CATEGORIES, ...SPECIALIZED_IT_CATEGORIES];
const getCategoryIcon = (category: string) => {;
const iconMap: { [key: string]: any } = {
  // TODO: Add properties
}
  // TODO: Add properties
}
      'AI & Analytics': Brain,'
      'Cybersecurity': Shield,'
      'Cloud & Infrastructure': Cloud,'
      'AI & Customer Service': Users,'
      'Content Management': BarChart3,'
      'DevOps & Automation': Zap,'
      'API & Integration': Code,'
      'Data & Analytics': Database,'
      'Network Security': Network'
    }
    return iconMap[category] || Globe
  }
  const filteredServices = allServices.filter(service => {;
const matchesCategory = selectedCategory === 'all' || '
      service.category.toLowerCase().includes(selectedCategory.toLowerCase());
const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase());
const matchesPrice = priceRange === 'all' || '
      (priceRange === 'budget' && service.price.starter <= 200) ||'
      (priceRange === 'mid-range' && service.price.starter > 200 && service.price.starter <= 500) ||'
      (priceRange === 'premium' && service.price.starter > 500)'
    return matchesCategory && matchesSearch && matchesPrice
  });
const ServiceCard = ({ service }: { service: any }) => {;
const CategoryIcon = getCategoryIcon(service.category)
    return (
  // TODO: Add parameters
)
      <div className="bg-white rounded-xl shadow-lg p-6 border border-zion-blue-light hover:shadow-xl transition-all duration-300 group"flex items-start justify-between mb-4"
<div className="
<div className="flex items-center gap-2 mb-2"w-8 h-8 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center"
<CategoryIcon className="
<span className="text-xs font-medium text-zion-blue-dark bg-zion-blue-light px-2 py-1 rounded"text-xl font-semibold text-zion-blue-dark mb-2 group-hover:text-zion-cyan transition-colors"
              {service.title}
            </h3>
<p className="
              {service.description}
            </p></div>
          {service.status === 'Active' && ('
            <div className="flex items-center gap-1 bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs"w-2 h-2 bg-green-500 rounded-full"
              Active
            </div>
          )}
        </div>
<div className="
<div className="flex items-center gap-2 mb-2"w-4 h-4 text-yellow-400 fill-current"
<span className="
<span className="text-zion-slate text-sm"flex items-center justify-between mb-3"
<div className="
<DollarSign className="w-4 h-4 text-zion-cyan"text-sm font-semibold text-zion-blue-dark"
                Starting at ${service.price.starter}/month
              </span></div>
<div className="
<Clock className="w-4 h-4 text-zion-slate"text-zion-slate text-sm"
</div>
<div className="
            Market Price: {service.marketPrice}
          </div></div>
<div className="mb-4"text-sm font-medium text-zion-blue-dark mb-2"
<div className="
            {service.features.slice(0, 4).map((feature: string, idx: number) => (
  // TODO: Add parameters
)
              <div key={idx} className="flex items-center gap-2 text-xs text-zion-slate"w-3 h-3 text-zion-cyan flex-shrink-0"
<span className="
            ))}
          </div></div>
<div className="mb-4"text-sm font-medium text-zion-blue-dark mb-2"
<div className="
            {service.targetAudience.slice(0, 3).map((audience: string, idx: number) => (
  // TODO: Add parameters
)
              <span key={idx} className="text-xs bg-zion-blue-light text-zion-blue-dark px-2 py-1 rounded"flex items-center justify-between"
<$2 />
            href={service.website}
            target=""
            rel=""
            className="
          >
            Learn More <ExternalLink className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform"flex gap-2"
<$2 />
              href={`mailto:${service.contactInfo.email}`}
              className="
            >
              Get Quote
            </a>
<div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark"pt-24 pb-16"
<div className="
<h1 className="text-4 xl md:text-5 xl font-bold text-white mb-6"text-xl text-zion-slate-light mb-8 max-w-3 xl mx-auto"
            Discover our complete range of IT services designed to transform your business. From AI development to cybersecurity, we have the expertise you need.
          </p>

          {/* Search Bar */}
          <div className="
<div className="relative"absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-zion-slate-light"
<Input
                type=""
                placeholder=""
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="
              />
</div></div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4"px-4 py-2 bg-white/10 backdrop-blur-sm border border-zion-blue-light rounded-lg text-white"
            >
<option value=">All Categories</option>"
              {SERVICE_CATEGORIES.map(category => (
  // TODO: Add parameters
)
                <option key={category.id} value={category.name}>{category.name}</option>
              ))}
            </select>
<select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="
            >
<option value="all"
<option value="low"
<option value="medium"
<option value="high";
import React from 'react';';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import {
  // TODO: Add properties
}
  // TODO: Add properties
}
  Brain,
  Cloud,
  Shield,
  Globe,
  Smartphone,
  Database,
  Link as LinkIcon,
  Zap,
  Settings,
  BarChart3,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Star,
  Clock,
  DollarSign
} from "lucide-react";
import { COMPREHENSIVE_SERVICES, SERVICE_CATEGORIES, SERVICE_SUBCATEGORIES } from "@/data/comprehensiveServices";
import { SEO } from "@/components/SEO";";
export default function ComprehensiveServicesPage() {
  // TODO: Add properties
}
  // TODO: Add properties
}
  DollarSign,
  CheckCircle,
  TrendingUp,
  Shield,
  Zap,
  Globe,
  Phone,
  Mail,
  ExternalLink,
  Award,
  Users,
  ArrowUpRight
} from 'lucide-react'';
import { SEO } from '@/components/SEO';'
interface FilterState {
  // TODO: Add properties
}
  // TODO: Add properties
}
  search: string
  category: string
  pricingModel: string
  priceRange: string
}
;
export default function ComprehensiveServicesPage() {;
const [filters, setFilters] = useState<FilterState>({
  // TODO: Add properties
}
  // TODO: Add properties
}
    search: ',''
    category: ',''
    pricingModel: ',''
    priceRange: '''
  });
const filteredServices = useMemo(() => {
  // TODO: Implement
}
  // TODO: Add properties
}
  // TODO: Add properties
}
  // TODO: Implement
}
    return COMPREHENSIVE_SERVICES.filter(service => {;
const matchesSearch = service.title.toLowerCase().includes(filters.search.toLowerCase()) ||
                           service.description.toLowerCase().includes(filters.search.toLowerCase()) ||
                           service.tags.some(tag => tag.toLowerCase().includes(filters.search.toLowerCase()));
const matchesCategory = !filters.category || service.category === filters.category;
const matchesPricingModel = !filters.pricingModel || service.pricingModel === filters.pricingModel;
let matchesPriceRange = true
      if (filters.priceRange) {;
const [min, max] = filters.priceRange.split('-').map(Number)'
        if (max) {
  // TODO: Add properties
}
  // TODO: Add properties
}
          matchesPriceRange = service.price >= min && service.price <= max
        } else {
  // TODO: Add properties
}
  // TODO: Add properties
}
          matchesPriceRange = service.price >= min
        }
      return matchesSearch && matchesCategory && matchesPricingModel && matchesPriceRange
    })
  }, [filters]);
const featuredServices = COMPREHENSIVE_SERVICES.filter(service => service.featured);
const categories = SERVICE_CATEGORIES;
const getCategoryIcon = (category: string) => {
  // TODO: Add properties
}
  // TODO: Add properties
}
    switch (category) {
  // TODO: Add properties
}
  // TODO: Add properties
}
      case 'AI & Machine Learning':'
        return <Zap className="
      case 'Cloud & DevOps':'
        return <Globe className="h-5 w-5"h-5 w-5"
      case 'Data & Analytics':'
        return <TrendingUp className="
      case 'Web & Mobile Development':'
        return <ArrowUpRight className="h-5 w-5"h-5 w-5"
      case 'IoT & Hardware':'
        return <Users className="
      case 'Digital Transformation':'
        return <TrendingUp className="h-5 w-5"h-5 w-5"
    }
  const getPricingModelLabel = (model: string) => {
  // TODO: Add properties
}
  // TODO: Add properties
}
    switch (model) {
  // TODO: Add properties
}
  // TODO: Add properties
}
      case 'one-time':'
        return 'One-time''
      case 'subscription':'
        return 'Subscription''
      case 'usage-based':'
        return 'Usage-based''
      case 'project-based':'
        return 'Project-based''
      default:
        return model;
import React from 'react';';
import { Link } from 'react-router-dom';';
import { Button } from ";";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from ";";
import { Badge } from ";";
import {
  // TODO: Add properties
}
  // TODO: Add properties
}
  Brain,
  Shield,
  Cloud,
  Database,
  TrendingUp,
  Monitor,
  Link as LinkIcon,
  Phone,
  Mail,
  MapPin,
  Star,
  Clock,
  Globe,
  Zap,
  Users,
  Circle,
  BarChart3,
  Lock,
  Server,
  Code,
  Smartphone,
  Network,
  Wallet,
  ArrowRight,
  CheckCircle
} from "";
import { ALL_EXPANDED_SERVICES, EXPANDED_SERVICE_CATEGORIES } from ";";"h-6 w-6 text-blue-500"
      case 'cybersecurity':'
        return <Shield className="
      case 'cloud services':'
      case 'devops':'
        return <Cloud className="h-6 w-6 text-green-500"h-6 w-6 text-purple-500"
      case 'digital transformation':'
        return <TrendingUp className="
      case 'iot & edge computing':'
        return <Monitor className="h-6 w-6 text-cyan-500"h-6 w-6 text-yellow-500"
      default:
        return <Code className="
    }
  const getCategoryColor = (category: string) => {
  // TODO: Add properties
}
  // TODO: Add properties
}
    switch (category.toLowerCase()) {
  // TODO: Add properties
}
  // TODO: Add properties
}
      case 'ai automation':'
      case 'ai analytics':'
      case 'ai development':'
        return 'bg-blue-100 text-blue-800 border-blue-200''
      case 'cybersecurity':'
        return 'bg-red-100 text-red-800 border-red-200''
      case 'cloud services':'
      case 'devops':'
        return 'bg-green-100 text-green-800 border-green-200''
      case 'data analytics':'
        return 'bg-purple-100 text-purple-800 border-purple-200''
      case 'digital transformation':'
        return 'bg-orange-100 text-orange-800 border-orange-200''
      case 'iot & edge computing':'
        return 'bg-cyan-100 text-cyan-800 border-cyan-200''
      case 'blockchain & web3':'
        return 'bg-yellow-100 text-yellow-800 border-yellow-200''
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200''
    }
  return (
  // TODO: Add parameters
)
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50"bg-gradient-to-r from-zion-blue-dark via-zion-purple to-zion-blue-dark text-white"
<div className="
<div className="text-center max-w-4 xl mx-auto"text-4 xl md:text-6 xl font-bold mb-6"
              Comprehensive IT & AI Solutions
            </h1>
<p className="
              Transform your business with cutting-edge technology services from ZionTech Group
            </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center"/request-quote">"lg" className="
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5"/contact">"lg" variant=" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10"bg-zion-purple text-white py-6"
<div className="
<div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left"flex items-center gap-2"
<Phone className="
<span className="font-medium"flex items-center gap-2"
<Mail className="
<span className="font-medium"flex items-center gap-2"
<MapPin className="
<span className="font-medium"bg-gradient-to-r from-zion-blue-dark to-zion-purple-dark py-20 px-4"
<div className="
<h1 className="text-4 xl md:text-6 xl font-bold text-white mb-6"text-xl text-zion-slate-light mb-8 max-w-3 xl mx-auto"
            Discover our extensive range of micro SAAS services, enterprise IT solutions, and cutting-edge AI services.
            From AI-powered chatbots to zero-trust security, we deliver innovative solutions that drive business growth.
          </p>
<div className="
<Button size="lg"bg-zion-cyan text-zion-blue-dark hover:bg-zion-cyan-light"
<Phone className="
              Contact Us: +1 302 464 0950
            </Button>
<Button size="lg"outline" className="
<Mail className="h-5 w-5 mr-2"bg-white border-b border-gray-200"
<div className="
<div className="flex flex-col md:flex-row items-center justify-between gap-4"flex items-center gap-6 text-sm text-gray-600"
<div className="
<Phone className="h-4 w-4 text-zion-purple"flex items-center gap-2"
<Mail className="
<span>kleber@ziontechgroup.com</span></div>
<div className="flex items-center gap-2"h-4 w-4 text-zion-purple"
<span>364 E Main St STE 1008, Middletown DE 19709</span></div>
</div>
<div className="
<Globe className="h-4 w-4 text-zion-purple"https://ziontechgroup.com" "_blank" "noopener noreferrer""text-zion-purple hover:underline font-medium"
              >
                ziontechgroup.com
              </a></div>
</div></div>
</div>

      {/* Why Choose ZionTech Section */}
      <div className="
<div className="container mx-auto px-4"text-center mb-16"
<h2 className="
              Why Choose ZionTech Group?
            </h2>
<p className="text-xl text-gray-600 max-w-3 xl mx-auto"grid md:grid-cols-2 lg:grid-cols-4 gap-8"
<div className="
<div className="bg-zion-blue-light rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4"h-8 w-8 text-zion-blue-dark"
<h3 className="
<p className="text-gray-600"text-center"
<div className="
<Circle className="h-8 w-8 text-zion-purple"text-xl font-semibold mb-2"
<p className="
<div className="text-center"bg-zion-cyan-light rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4"
<Zap className="
<h3 className="text-xl font-semibold mb-2"text-gray-600"
<div className="
<div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4"h-8 w-8 text-green-600"
<h3 className="
<p className="text-gray-600"py-16 bg-gray-50"
<div className="
<div className="text-center mb-16"text-3 xl md:text-4 xl font-bold text-gray-900 mb-4"
              Our Service Categories
            </h2>
<p className="
              Comprehensive technology solutions across all major domains
            </p></div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"hover:shadow-lg transition-shadow duration-300"
<CardHeader className="
<div className="mx-auto mb-4"text-xl"
<CardContent className="
<p className="text-gray-600 mb-4"outline" className="
                        Explore Services
                        <ArrowRight className="ml-2 h-4 w-4"py-16 px-4"
<div className="
<h2 className="text-3 xl font-bold text-white text-center mb-12"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            {featuredServices.map((service) => (
  // TODO: Add parameters
)
              <Card key={service.id} className="
<CardHeader>
<div className="flex items-center justify-between mb-2"secondary" className="
                      {getCategoryIcon(service.category)}
                      <span className="ml-2"outline" className="
                      Featured
                    </Badge></div>
<CardTitle className="text-white text-xl"text-zion-slate-light"
                    {service.description}
                  </CardDescription></CardHeader>;
const [selectedPriceRange, setSelectedPriceRange] = useState<string>('all')'
  Globe,
  Shield,
  Cloud,
  Database,
  Code,
  BarChart3,
  Building,
  Heart,
  GraduationCap,
  DollarSign,
  Zap,
  Eye,
  MessageSquare,
  Phone,
  Mail,
  MapPin,
  ExternalLink
} from 'lucide-react'';
import { SEO } from '@/components/SEO';';';
export default function ComprehensiveServicesPage() {;
const [searchTerm, setSearchTerm] = useState(');'';
const [selectedCategory, setSelectedCategory] = useState('all');';
const [sortBy, setSortBy] = useState('featured');';
const filteredServices = COMPREHENSIVE_SERVICES.filter(service => {;
const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
const [selectedPricingTier, setSelectedPricingTier] = useState<string>('all');';
const [sortBy, setSortBy] = useState<string>('rating');';
const filteredServices = useMemo(() => {;
let filtered = COMPREHENSIVE_SERVICES
    // Filter by search term
    if (searchTerm) {
  // TODO: Add properties
}
  // TODO: Add properties
}
      filtered = filtered.filter(service =>
        service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    }

    // Filter by category
    if (selectedCategory !== 'all') {'
      filtered = filtered.filter(service => service.category === selectedCategory)
    }

    // Filter by pricing tier
    if (selectedPricingTier !== 'all') {;';
const tier = SERVICE_PRICING_TIERS[selectedPricingTier as keyof typeof SERVICE_PRICING_TIERS]
      if (tier) {
  // TODO: Add properties
}
  // TODO: Add properties
}
        filtered = filtered.filter(service => {;
const discountedPrice = service.price * (1 - tier.discount)
          if (selectedPricingTier === 'startup') return discountedPrice <= 5000'
          if (selectedPricingTier === 'smb') return discountedPrice <= 15000'
          return true; // enterprise
        })
      }
    // Sort services
    filtered.sort((a, b) => {
  // TODO: Add properties
}
  // TODO: Add properties
}
      switch (sortBy) {
  // TODO: Add properties
}
  // TODO: Add properties
}
        case 'price':'
          return (a.price || 0) - (b.price || 0)
        case 'rating':'
          return (b.rating || 0) - (a.rating || 0)
        case 'aiScore':'
          return (b.aiScore || 0) - (a.aiScore || 0)
        case 'newest':'
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        default:
          return 0
      }
    })
    return filtered
  }, [searchTerm, selectedCategory, selectedPricingTier, sortBy]);
const getDiscountedPrice = (price: number, tier: string) => {;
const pricingTier = SERVICE_PRICING_TIERS[tier as keyof typeof SERVICE_PRICING_TIERS]
    if (pricingTier) {
  // TODO: Add properties
}
  // TODO: Add properties
}
      return price * (1 - pricingTier.discount)
    }
    return price
  }
  const formatPrice = (price: number) => {
  // TODO: Add properties
}
  // TODO: Add properties
}
    if (price >= 1000) {
  // TODO: Add properties
}
  // TODO: Add properties
}
      return `$${(price / 1000).toFixed(1)}k`
    }
    return `$${price}`
  }
  return (
  // TODO: Add parameters
)
    <div className="
<SEO
        title="Comprehensive IT & AI Services - Zion Tech Group"
        description="Discover our comprehensive range of micro SAAS services, IT solutions, and AI services. Expert consulting, development, and support for businesses of all sizes."
        keywords="IT services, AI services, micro SAAS, technology consulting, cybersecurity, cloud migration, data analytics"
        canonical="https://ziontechgroup.com/services"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-zion-blue to-zion-purple text-white py-20"container mx-auto px-4 text-center"
<h1 className="
            Comprehensive IT & AI Services
          </h1>
<p className="text-xl text-zion-slate-light max-w-3 xl mx-auto mb-8"flex flex-wrap justify-center gap-4 mb-8"
<div className="
<Shield className="w-5 h-5"flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full"
<Zap className="
<span>AI-Powered Solutions</span></div>
<div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full"w-5 h-5"
<span>Expert Team</span></div>
<div className="
<Award className="w-5 h-5"flex flex-col sm:flex-row gap-4 justify-center"
<Button asChild size=" className="bg-zion-cyan hover:bg-zion-cyan-dark text-white"/contact">Get Free Consultation</Link></Button>"lg" variant=" className="border-white text-white hover:bg-white hover:text-zion-blue"AI & Machine Learning": <Brain className="
  "Cloud & DevOps"h-6 w-6"
  ": <Shield className="h-6 w-6"Data & Analytics": <BarChart3 className="
  "Web & Mobile Development"h-6 w-6"
  ": <TrendingUp className="h-6 w-6"Blockchain & Web3": <Code className="
  "IoT & Edge Computing"h-6 w-6"
}
const pricingModelColors = {
  // TODO: Add properties
}
  // TODO: Add properties
}
  ": "bg-blue-100 text-blue-800"
  "monthly"bg-green-100 text-green-800","hourly": ","
  ": "bg-purple-100 text-purple-800"
}
const supportLevelColors = {
  // TODO: Add properties
}
  // TODO: Add properties
}
  "basic"bg-gray-100 text-gray-800","premium": ","
  ": "bg-purple-100 text-purple-800"
}
export default function ComprehensiveServicesPage() {;
const [searchQuery, setSearchQuery] = useState('');';
const [selectedCategory, setSelectedCategory] = useState<string>('all');';
const [selectedSubcategory, setSelectedSubcategory] = useState<string>('all');';
const [priceRange, setPriceRange] = useState<string>('all')'
  // Filter services based on search and filters;
const filteredServices = EXPANDED_SERVICES.filter(service => {;
const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
const matchesCategory = selectedCategory === 'all' || service.category.toLowerCase().replace(/\s+/g, '-') === selectedCategory;';
const matchesSubcategory = selectedSubcategory === 'all' || service.subcategory === selectedSubcategory;';
let matchesPrice = true
    if (priceRange === 'under-5 k') matchesPrice = (service.price || 0) < 5000'
    else if (priceRange === '5 k-15 k') matchesPrice = (service.price || 0) >= 5000 && (service.price || 0) < 15000'
    else if (priceRange === '15 k-30 k') matchesPrice = (service.price || 0) >= 15000 && (service.price || 0) < 30000'
    else if (priceRange === 'over-30 k') matchesPrice = (service.price || 0) >= 30000'
    return matchesSearch && matchesCategory && matchesSubcategory && matchesPrice
  });
const getSubcategories = () => {
  // TODO: Implement
}
  // TODO: Add properties
}
  // TODO: Add properties
}
  // TODO: Implement
}
    if (selectedCategory === 'all') return [];';
const categoryKey = selectedCategory as keyof typeof EXPANDED_SERVICE_SUBCATEGORIES
    return EXPANDED_SERVICE_SUBCATEGORIES[categoryKey] || []
  }
  const getCategoryIcon = (category: string) => {;
const iconMap: { [key: string]: React.ReactNode } = {
  // TODO: Add properties
}
  // TODO: Add properties
}
      'AI Development': <Zap className="w-5 h-5"
      'Cloud Services': <Globe className="w-5 h-5"
      'DevOps': <Code className="w-5 h-5"
      'Cybersecurity': <Shield className="w-5 h-5"
      'Data Analytics': <Database className="w-5 h-5"
      'Web Development': <Code className="w-5 h-5"
      'Mobile Development': <Smartphone className="w-5 h-5"
      'Blockchain': <Blockchain className="w-5 h-5"
      'IoT': <Cpu className="w-5 h-5"
      'Hardware': <Cpu className="w-5 h-5"
      'Business Automation': <BarChart3 className="w-5 h-5"
      'Business Solutions': <BarChart3 className="w-5 h-5"
    }
    return iconMap[category] || <Code className="w-5 h-5"min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-blue-light"
<SEO
        title=" "
        description=""
        keywords=""
        canonical=""
      />

      {/* Hero Section */}
      <div className="
<div className="container mx-auto text-center"text-4 xl md:text-6 xl font-bold text-white mb-6"
            Professional IT & AI Services
          </h1>
<p className="
            Comprehensive technology solutions delivered by expert professionals. From AI development to cybersecurity,
            cloud infrastructure to blockchain solutions - we've got your business covered.'
          </p>
<div className="flex flex-wrap justify-center gap-4"lg" className="
<Mail className="w-5 h-5 mr-2"lg" variant=" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10"w-5 h-5 mr-2"
              Call +1 302 464 0950
            </Button></div>
</div></div>

      {/* Contact Information Banner */}
      <div className="
<div className="container mx-auto"flex flex-wrap items-center justify-center gap-8 text-zion-cyan"
<div className="
<Phone className="w-5 h-5"flex items-center gap-2"
<Mail className="
<span>kleber@ziontechgroup.com</span></div>
<div className="flex items-center gap-2"w-5 h-5"
<span>364 E Main St STE 1008, Middletown DE 19709</span></div>
</div></div>
</div>

      {/* Search and Filters */}
      <div className="
<div className="container mx-auto"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4"
<div className="
<div className="relative"absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5"
<Input
                  placeholder=""
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="
                />
</div></div>
<Select value={selectedCategory} onValueChange={setSelectedCategory}>
<SelectTrigger className="bg-zion-blue-dark border-zion-blue-light text-white"Category" /></SelectTrigger>"all">All Categories</SelectItem>"bg-zion-blue-dark border-zion-blue-light text-white"
<SelectValue placeholder=" /></SelectTrigger>"
<SelectContent>
<SelectItem value=">All Subcategories</SelectItem>"
                {getSubcategories().map(subcategory => (
  // TODO: Add parameters
)
                  <SelectItem key={subcategory} value={subcategory}>
                    {subcategory}
                  </SelectItem>
                ))}
              </SelectContent></Select>
<Select value={priceRange} onValueChange={setPriceRange}>
<SelectTrigger className="
<SelectValue placeholder="Price Range"
<SelectContent>
<SelectItem value="all"
<SelectItem value="under-5 k"
<SelectItem value="5 k-15 k"
<SelectItem value="15 k-30 k"
<SelectItem value="over-30 k"
</Select></div>
</div></div>

      {/* Services Grid */}
      <div className="py-16 px-4"container mx-auto"
<div className="
<h2 className="text-3 xl font-bold text-white mb-4"text-zion-slate-light text-lg"
              Expert solutions tailored to your business needs with competitive pricing and guaranteed quality
            </p></div>
<div className="
            {filteredServices.map((service) => (
  // TODO: Add parameters
)
              <Card key={service.id} className="bg-zion-blue-dark border-zion-blue-light hover:border-zion-purple/50 transition-all duration-300 hover:shadow-2 xl hover:shadow-zion-purple/20"pb-4"
<div className="
<div className="flex items-center gap-2"secondary" className="
                        {service.category}
                      </Badge></div>
<div className="absolute bottom-4 left-4"secondary" className="
                        {service.subcategory}
                      </Badge></div>
</div>
<div className={`flex-1 ${viewMode === 'list' ? 'lg:pl-6' : '}`}>''
<CardHeader className="pb-4"text-2 xl text-white group-hover:text-zion-cyan transition-colors"
                        {service.title}
                      </CardTitle>
<CardDescription className="
                        {service.description}
                      </CardDescription></CardHeader>
<CardContent className="pt-0"flex items-center justify-between mb-6"
<div className="
<DollarSign className="w-5 h-5 text-zion-cyan"text-white font-bold text-xl"
                            {service.currency}{service.price}
                          </span>
<span className="
                            /{service.pricingModel === 'monthly' ? 'mo' : service.pricingModel === 'hourly' ? 'hr' : 'project'}'
                          </span></div>
<div className="flex items-center space-x-2"w-5 h-5 text-yellow-400 fill-current"
<span className="
<span className="text-zion-slate-light"mb-6"
<h4 className="
<div className="flex flex-wrap gap-2"outline" className="
                              {feature}
                            </Badge>
                          ))}
                        </div></div>

                      {/* Delivery and Contact */}
                      <div className="flex items-center justify-between mb-6"flex items-center space-x-2 text-zion-slate-light"
<Clock className="
<span>Delivery: {service.estimatedDelivery}</span></div>
<div className="flex items-center space-x-2 text-zion-slate-light"w-4 h-4"
<span>{service.targetAudience.length} target audiences</span></div>
</div>

                      {/* CTA Button */}
                      <Button
                        className="
                        asChild
                      >
<a href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.title}`}>
                          Get Quote
                          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"py-20 bg-white"
<div className="
<div className="text-center mb-16"text-4 xl font-bold text-zion-blue-dark mb-4"
              {filteredServices.length} Services Available
            </h2>
<p className="
              Discover the perfect solution for your business needs from our comprehensive portfolio
              of innovative services and solutions.
            </p></div>

          {filteredServices.length > 0 ? (
  // TODO: Add parameters
)
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"text-center py-16"
<div className="
<Search className="w-12 h-12 text-zion-blue-dark"text-2 xl font-semibold text-zion-blue-dark mb-2"
<p className="
                Try adjusting your filters or search terms to find the services you need.
              </p>
<$2 />
                onClick={() => {
  // TODO: Implement
}
  // TODO: Add properties
}
  // TODO: Add properties
}
  // TODO: Implement
}
                  setSelectedCategory('all')'
                  setSearchQuery('')'
                  setPriceRange('all')'
                }
                className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-6 py-2 rounded-lg font-medium transition-colors"px-4 py-2 border border-zion-blue-light rounded-md focus:border-zion-blue focus:outline-none"
              >
<option value=">All Pricing Tiers</option>"
                {Object.entries(SERVICE_PRICING_TIERS).map(([key, tier]) => (
  // TODO: Add parameters
)
                  <option key={key} value={key}>
                    {tier.name}
                  </option>
                ))}
              </select>

              {/* Sort */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="
              >
<option value="rating"
<option value="price"
<option value="aiScore"
<option value="newest"
</div></div>
</div></section>

      {/* Services Grid */}
      <section className="py-16"container mx-auto px-4"
<div className="
            {filteredServices.map((service) => (
  // TODO: Add parameters
)
              <div key={service.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"relative h-48 overflow-hidden"
<img
                    src={service.images[0]}
                    alt={service.title}
                    className="
                  />
<div className="absolute top-4 right-4"bg-zion-cyan text-white"
                      {service.subcategory}
                    </Badge></div>
<div className="
<div className="flex items-center gap-1 bg-black/70 text-white px-2 py-1 rounded"w-4 h-4 fill-yellow-400 text-yellow-400"
<span className="
<span className="text-xs"p-6"
<div className="
<h3 className="text-xl font-bold text-zion-blue line-clamp-2"text-zion-slate mb-4 line-clamp-3"
                    {service.description}
                  </p>

                  {/* Tags */}
                  <div className="
                    {service.tags.slice(0, 3).map((tag, index) => (
  // TODO: Add parameters
)
                      <Badge key={index} variant="secondary"text-xs"
<CardContent className="
<div className="flex items-center justify-between mb-4"flex items-center gap-2 text-zion-cyan"
<DollarSign className="
<span className="font-bold text-lg"flex items-center gap-2 text-zion-slate-light"
<Clock className="
<span className="text-sm"py-16 bg-white"
<div className="
<div className="text-center mb-16"text-3 xl md:text-4 xl font-bold text-gray-900 mb-4"
              Featured Services
            </h2>
<p className="
              Our most popular and innovative solutions that deliver exceptional value
            </p></div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"hover:shadow-xl transition-all duration-300 border-2 hover:border-zion-purple/20"
<div className="
<img
                    src={service.images[0]}
                    alt={service.title}
                    className="w-full h-48 object-cover rounded-t-lg"absolute top-4 right-4 bg-zion-purple text-white"
                      Featured
                    </Badge>
                  )}
                </div>
<CardHeader>
<div className="
<Badge className={getCategoryColor(service.category)}>
                      {service.category}
                    </Badge>
<div className="flex items-center gap-1 text-sm text-gray-600"h-4 w-4 fill-yellow-400 text-yellow-400"
<span>{service.rating}</span>
<span className="
</div>
<CardTitle className="text-lg leading-tight"text-sm leading-relaxed"
                    {service.description}
                  </CardDescription></CardHeader>
<CardContent>
<div className="
<div className="text-2 xl font-bold text-zion-purple"flex items-center gap-2 text-sm text-gray-600"
<Clock className="
<span>{service.availability}</span></div>
</div>
<div className="flex flex-wrap gap-2 mb-4"secondary" className="
                        {tag}
                      </Badge>
                    ))}
                  </div>
      {/* Services Grid */}
      <section className="py-16 bg-zion-blue-dark"container mx-auto px-4"
<div className="
<h2 className="text-3 xl font-bold text-white mb-4"text-zion-slate-light"
              Find the perfect solution for your business needs
            </p></div>
<div className="
            {filteredServices.map((service) => (
  // TODO: Add parameters
)
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          {filteredServices.length === 0 && (
  // TODO: Add parameters
)
            <div className="text-center py-12"text-zion-slate-light text-lg"
<Button
                onClick={() => {
  // TODO: Implement
}
  // TODO: Add properties
}
  // TODO: Add properties
}
  // TODO: Implement
}
                  setSearchQuery('')'
                  setSelectedCategory('all')'
                  setSelectedSubcategory('all')'
                  setPriceRange('all')'
                }
                className="
              >
                Clear Filters
              </Button></div>
          )}
        </div></section>

      {/* Why Choose Zion Tech Group */}
      <section className="py-16 bg-zion-blue"container mx-auto px-4"
<div className="
<h2 className="text-3 xl font-bold text-white mb-4"text-zion-slate-light text-lg"
<div className="
<div className="text-center"bg-zion-cyan/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4"
<Zap className="
<h3 className="text-xl font-bold text-white mb-2"text-zion-slate-light"
<div className="
<div className="bg-zion-purple/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4"h-8 w-8 text-zion-purple"
<h3 className="
<p className="text-zion-slate-light"text-center"
<div className="
<Shield className="h-8 w-8 text-zion-cyan"text-xl font-bold text-white mb-2"
<p className="
</div></div>
</section>

          {filteredServices.length === 0 && (
  // TODO: Add parameters
)
            <div className="text-center py-16"text-6 xl mb-4"
<h3 className="
<p className="text-zion-slate-light mb-6"py-16 bg-gradient-to-r from-zion-purple to-zion-purple-dark"
<div className="
<h2 className="text-3 xl font-bold text-white mb-6"text-zion-slate-light text-lg mb-8 max-w-2 xl mx-auto"
            Contact our team today to discuss your project requirements and get a personalized quote.
          </p>
<div className="
<Button size="lg"bg-zion-cyan hover:bg-zion-cyan-dark text-white"
<Phone className="
              Call Now: +1 302 464 0950
            </Button>
<Button size="lg"outline" className="
<Mail className="mr-2 h-5 w-5"py-20 bg-zion-blue-light"
<div className="
<div className="text-center mb-16"text-4 xl font-bold text-zion-blue-dark mb-4"
              Transparent Pricing
            </h2>
<p className="
              Our services are priced competitively with flexible plans to fit businesses of all sizes.
            </p></div>
      {/* Service Guarantees */}
      <section className="bg-zion-blue text-white py-16"container mx-auto px-4"
<div className="
<h2 className="text-4 xl font-bold mb-4"text-xl text-zion-slate-light max-w-2 xl mx-auto"
              We stand behind every service with comprehensive guarantees and ongoing support
            </p></div>
<div className="
            {SERVICE_GUARANTEES.map((guarantee, index) => (
  // TODO: Add parameters
)
              <div key={index} className="text-center p-6 bg-zion-blue-dark rounded-lg"w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4"
<CheckCircle className="
<h3 className="font-semibold mb-2"bg-white py-16"
<div className="
<div className="text-center mb-12"text-4 xl font-bold text-zion-blue mb-4"
<p className="
              Choose the pricing tier that best fits your business size and requirements
            </p></div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8"text-center mb-6"
<h3 className="
<p className="text-zion-slate"mt-2 bg-zion-cyan text-white"
                  )}
                </div>
<ul className="
                  {tier.features.map((feature, index) => (
  // TODO: Add parameters
)
                    <li key={index} className="flex items-center gap-2"w-5 h-5 text-green-500"
<span className="
                  ))}
                </ul>
<div className="text-center"text-sm text-zion-slate mb-2"
                    {tier.discount > 0 ? `${tier.discount * 100}% discount applied` : 'Standard pricing'}'
                  </div>
<Button asChild className="
<a href={`mailto:${CONTACT_INFO.email}?subject=Inquiry about ${tier.name} pricing tier`}>
                      Get {tier.name} Pricing
                    </a></Button>
</div></div>
            ))}
          </div></div>
</section>

      {/* Contact CTA */}
      <section className="bg-gradient-to-r from-zion-purple to-zion-blue text-white py-20"container mx-auto px-4 text-center"
<h2 className="
<p className="text-xl text-zion-slate-light max-w-2 xl mx-auto mb-8"flex flex-col sm:flex-row gap-4 justify-center mb-8"
<Button asChild size=" className="bg-zion-cyan hover:bg-zion-cyan-dark text-white"/contact">Schedule Free Consultation</Link></Button>"lg" variant=" className="border-white text-white hover:bg-white hover:text-zion-blue"lg" variant=" className="border-white text-white hover:bg-white hover:text-zion-blue"grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
<div className="
<div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4"w-8 h-8 text-white"
<h3 className="
<p className="text-zion-slate-light"text-center"
<div className="
<TrendingUp className="w-8 h-8 text-white"text-xl font-semibold mb-2"
<p className="
<div className="text-center"w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4"
<Calendar className="
<h3 className="text-xl font-semibold mb-2"text-zion-slate-light"
<div className="
<div className="flex items-center gap-2"w-8 h-8 rounded-full bg-zion-purple/20 flex items-center justify-center"
<Brain className="
<span className="text-sm text-zion-slate-light"sm" className="
<div className="flex items-center justify-between"flex items-center gap-2 text-sm text-gray-600"
<BarChart3 className="
<span>AI Score: {service.aiScore}%</span></div>
<Link to={`/services/${service.id}`}>
<Button size="sm"bg-zion-purple hover:bg-zion-purple-dark"
                        Learn More
                      </Button></Link>
</div></CardContent>
<CardContent>
<div className="
<div className="flex items-center justify-between"text-zion-slate-light"
<span className="
                        {service.currency}{service.price.toLocaleString()}
                      </span></div>
<div className="flex items-center justify-between"text-zion-slate-light"
<span className="
<div className="flex items-center justify-between"text-zion-slate-light"
<span className="
<div className="flex items-center justify-between"text-zion-slate-light"
<div className="
<Star className="h-4 w-4 text-yellow-400 fill-current mr-1"text-white"
<span className="
</div></div>
</CardContent>
<CardFooter className="flex flex-col space-y-3"w-full bg-zion-purple hover:bg-zion-purple-dark"
<Phone className="
                    Get Quote
                  </Button>
<div className="text-center text-sm text-zion-slate-light"py-20 bg-gradient-to-r from-zion-blue to-zion-purple text-white"

      {/* Pricing Information */}
      <div className="
<div className="container mx-auto px-4"text-center mb-16"
<h2 className="
              Competitive Pricing
            </h2>
<p className="text-xl text-gray-600 max-w-3 xl mx-auto"grid md:grid-cols-3 gap-8 max-w-5 xl mx-auto"
<Card className="
<CardHeader>
<CardTitle className="text-2 xl text-gray-800"text-4 xl font-bold text-zion-purple"
<CardDescription>Perfect for small businesses</CardDescription></CardHeader>
<CardContent>
<ul className="
<li className="flex items-center gap-2"h-5 w-5 text-green-500"
<span>Basic AI Integration</span></li>
<li className="
<CheckCircle className="h-5 w-5 text-green-500"flex items-center gap-2"
<CheckCircle className="
<span>Cloud Migration Support</span></li>
<li className="flex items-center gap-2"h-5 w-5 text-green-500"
<span>Basic Analytics Dashboard</span></li>
</ul>
<Link to=">"
<Button className="
                    Get Started
                  </Button></Link>
</CardContent></Card>
<Card className="text-center border-2 border-zion-purple relative"absolute -top-4 left-1/2 transform -translate-x-1/2"
<Badge className="
<CardHeader>
<CardTitle className="text-2 xl text-gray-800"text-4 xl font-bold text-zion-purple"
<CardDescription>Ideal for growing companies</CardDescription></CardHeader>
<CardContent>
<ul className="
<li className="flex items-center gap-2"h-5 w-5 text-green-500"
<span>Advanced AI Solutions</span></li>
<li className="
<CheckCircle className="h-5 w-5 text-green-500"flex items-center gap-2"
<CheckCircle className="
<span>Full Cloud Migration</span></li>
<li className="flex items-center gap-2"h-5 w-5 text-green-500"
<span>Custom Analytics Platform</span></li>
<li className="
<CheckCircle className="h-5 w-5 text-green-500"/request-quote">"w-full bg-zion-purple hover:bg-zion-purple-dark"
                    Get Started
                  </Button></Link>
</CardContent></Card>
<Card className="
<CardHeader>
<CardTitle className="text-2 xl text-gray-800"text-4 xl font-bold text-zion-purple"
<CardDescription>For large organizations</CardDescription></CardHeader>
<CardContent>
<ul className="
<li className="flex items-center gap-2"h-5 w-5 text-green-500"
<span>Custom AI Development</span></li>
<li className="
<CheckCircle className="h-5 w-5 text-green-500"flex items-center gap-2"
<CheckCircle className="
<span>Multi-Cloud Strategy</span></li>
<li className="flex items-center gap-2"h-5 w-5 text-green-500"
<span>Advanced Analytics & ML</span></li>
<li className="
<CheckCircle className="h-5 w-5 text-green-500"/request-quote">"w-full bg-zion-purple hover:bg-zion-purple-dark"
                    Get Started
                  </Button></Link>
</CardContent></Card>
</div></div>
</div>

      {/* Call to Action */}
      <div className="
<div className="container mx-auto px-4 text-center"text-3 xl md:text-4 xl font-bold mb-6"
            Ready to Transform Your Business?
          </h2>
<p className="
            Let our expert team help you leverage cutting-edge technology to achieve your business goals.
            Get a free consultation and discover how we can drive innovation and growth.
          </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center"/request-quote">"lg" className="
                Request Free Quote
                <ArrowRight className="ml-2 h-5 w-5"/contact">"lg" variant=" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10"bg-gray-900 text-white py-12"
<div className="
<div className="grid md:grid-cols-2 gap-8"text-2 xl font-bold mb-6 text-zion-cyan"
<p className="
                Your trusted partner for innovative technology solutions. We specialize in AI, cybersecurity,
                cloud services, and digital transformation to help businesses thrive in the digital age.
              </p>
<div className="flex space-x-4"https://ziontechgroup.com" target=" rel="noopener noreferrer"text-zion-cyan hover:text-zion-cyan/80"
<Globe className="
</div></div>
<div>
<h3 className="text-xl font-semibold mb-6 text-zion-cyan"space-y-4"
<div className="
<Phone className="h-5 w-5 text-zion-cyan"flex items-center gap-3"
<Mail className="
<span>kleber@ziontechgroup.com</span></div>
<div className="flex items-center gap-3"h-5 w-5 text-zion-cyan"
<span>364 E Main St STE 1008<br />Middletown DE 19709</span></div>
</div></div>
</div>
<div className="
<p>&copy; 2024 ZionTech Group. All rights reserved. | <a href="https://ziontechgroup.com"_blank" rel=" className="text-zion-cyan hover:underline"
</div></div>
</div></div>
  )
}
export default ComprehensiveServicesPage</$1></div>;
</div></div>
</div></div>
</div></div>
</div></div>
</div></div>
</div></div>
</div></div>
</div></div>
</div></div>
</div></div>
</div></div>
</div></div>
</div></div>
</div></div>
</div></div>
</div></Link>
</section></section>
</section></section>
</section>
}}}}}}}}}))))))))))