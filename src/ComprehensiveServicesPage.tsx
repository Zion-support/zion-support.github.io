import { COMPREHENSIVE_SERVICES, SERVICE_CATEGORIES } from '@/data/comprehensiveServices'
import { COMPREHENSIVE_SERVICES, SERVICE_CATEGORIES, SERVICE_SUBCATEGORIES, ComprehensiveService } from '@/data/comprehensiveServices'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import React, { useState } from 'react'
import { EXPANDED_SERVICES, EXPANDED_SERVICE_CATEGORIES, EXPANDED_SERVICE_SUBCATEGORIES } from '@/data/expandedServices'
import { ProductListing } from '@/types/listings'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { 
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
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { SEO } from '@/components/SEO'
      const matchesPrice = priceRange === 'all' || 
        (priceRange === 'low' && parseInt(service.price.replace(/[^0-9]/g, '')) < 5000) ||
        (priceRange === 'medium' && parseInt(service.price.replace(/[^0-9]/g, '')) >= 5000 && parseInt(service.price.replace(/[^0-9]/g, '')) < 15000) ||
        (priceRange === 'high' && parseInt(service.price.replace(/[^0-9]/g, '')) >= 15000)
      return matchesSearch && matchesCategory && matchesPrice
    })
  }, [searchTerm, selectedCategory, selectedSubcategory])
  const getSubcategoriesForCategory = (category: string) => {
    if (category === 'all') return []
    return serviceSubcategories[category as keyof typeof serviceSubcategories] || []
  }
  return (
import React, { useState } from 'react'
import { SEO } from '../components/SEO'
import { 
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
} from 'lucide-react'
import { INNOVATIVE_MICRO_SAAS_SERVICES, INNOVATIVE_SAAS_CATEGORIES } from '../data/innovativeMicroSaasServices'
import { SPECIALIZED_IT_SERVICES, SPECIALIZED_IT_CATEGORIES } from '../data/specializedITServices'
export default function ComprehensiveServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [priceRange, setPriceRange] = useState('all')
  const allServices = [...INNOVATIVE_MICRO_SAAS_SERVICES, ...SPECIALIZED_IT_SERVICES]
  const allCategories = [...INNOVATIVE_SAAS_CATEGORIES, ...SPECIALIZED_IT_CATEGORIES]
  const getCategoryIcon = (category: string) => {
    const iconMap: { [key: string]: any } = {
      'AI & Analytics': Brain,
      'Cybersecurity': Shield,
      'Cloud & Infrastructure': Cloud,
      'AI & Customer Service': Users,
      'Content Management': BarChart3,
      'DevOps & Automation': Zap,
      'API & Integration': Code,
      'Data & Analytics': Database,
      'Network Security': Network
    }
    return iconMap[category] || Globe
  }
  const filteredServices = allServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || 
      service.category.toLowerCase().includes(selectedCategory.toLowerCase())
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesPrice = priceRange === 'all' || 
      (priceRange === 'budget' && service.price.starter <= 200) ||
      (priceRange === 'mid-range' && service.price.starter > 200 && service.price.starter <= 500) ||
      (priceRange === 'premium' && service.price.starter > 500)
    return matchesCategory && matchesSearch && matchesPrice
  })
  const ServiceCard = ({ service }: { service: any }) => {
    const CategoryIcon = getCategoryIcon(service.category)
    return (
                {service.category}
              {service.title}
              {service.description}
          {service.status === 'Active' && (
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          )}

            <span className="text-sm font-medium">{service.rating}</span>
            <span className="text-zion-slate text-sm">({service.reviewCount} reviews)</span>
          
                Starting at ${service.price.starter}/month
              <span className="text-zion-slate text-sm">{service.deliveryTime}</span>

            Market Price: {service.marketPrice}

          <h4 className="text-sm font-medium text-zion-blue-dark mb-2">Key Features:</h4>
            {service.features.slice(0, 4).map((feature: string, idx: number) => (
                <span className="truncate">{feature}</span>
            ))}

          <h4 className="text-sm font-medium text-zion-blue-dark mb-2">Target Audience:</h4>
            {service.targetAudience.slice(0, 3).map((audience: string, idx: number) => (
                {audience}
            ))}

          <$2 />
            href={service.website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zion-cyan hover:text-zion-cyan-light text-sm flex items-center group"
          >
            Learn More <ExternalLink className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
          
            <$2 />
              href={`mailto:${service.contactInfo.email}`}
              className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-3 py-1 rounded text-xs font-medium transition-colors"
            >
              Get Quote
      {/* Hero Section */}
            Comprehensive IT Services
            Discover our complete range of IT services designed to transform your business. From AI development to cybersecurity, we have the expertise you need.
          
          {/* Search Bar */}
                type="text"
                placeholder="Search for services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border-zion-blue-light text-white placeholder-zion-slate-light"
              />

          {/* Filters */}
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-zion-blue-light rounded-lg text-white"
            >
              <option value="all">All Categories</option>
              {SERVICE_CATEGORIES.map(category => (
                <option key={category.id} value={category.name}>{category.name}</option>
              ))}
            
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-zion-blue-light rounded-lg text-white"
            >
              <option value="all">All Prices</option>
              <option value="low">Under $5,000</option>
              <option value="medium">$5,000 - $15,000</option>
              <option value="high">$15,000+</option>
import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Link } from "react-router-dom"
import { 
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
} from "lucide-react"
import { COMPREHENSIVE_SERVICES, SERVICE_CATEGORIES, SERVICE_SUBCATEGORIES } from "@/data/comprehensiveServices"
import { SEO } from "@/components/SEO"
export default function ComprehensiveServicesPage() {
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
} from 'lucide-react'
import { SEO } from '@/components/SEO'
interface FilterState {
  search: string
  category: string
  pricingModel: string
  priceRange: string
}

export default function ComprehensiveServicesPage() {
  const [filters, setFilters] = useState<FilterState>({
    search: '',
    category: '',
    pricingModel: '',
    priceRange: ''
  })
  const filteredServices = useMemo(() => {
    return COMPREHENSIVE_SERVICES.filter(service => {
      const matchesSearch = service.title.toLowerCase().includes(filters.search.toLowerCase()) ||
                           service.description.toLowerCase().includes(filters.search.toLowerCase()) ||
                           service.tags.some(tag => tag.toLowerCase().includes(filters.search.toLowerCase()))
      const matchesCategory = !filters.category || service.category === filters.category
      const matchesPricingModel = !filters.pricingModel || service.pricingModel === filters.pricingModel
      let matchesPriceRange = true
      if (filters.priceRange) {
        const [min, max] = filters.priceRange.split('-').map(Number)
        if (max) {
          matchesPriceRange = service.price >= min && service.price <= max
        } else {
          matchesPriceRange = service.price >= min
        }
      }
      
      return matchesSearch && matchesCategory && matchesPricingModel && matchesPriceRange
    })
  }, [filters])
  const featuredServices = COMPREHENSIVE_SERVICES.filter(service => service.featured)
  const categories = SERVICE_CATEGORIES
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI & Machine Learning':
        return <Zap className="h-5 w-5" />
      case 'Cloud & DevOps':
        return <Globe className="h-5 w-5" />
      case 'Cybersecurity':
        return <Shield className="h-5 w-5" />
      case 'Data & Analytics':
        return <TrendingUp className="h-5 w-5" />
      case 'Web & Mobile Development':
        return <ArrowUpRight className="h-5 w-5" />
      case 'Blockchain & Web3':
        return <Award className="h-5 w-5" />
      case 'IoT & Hardware':
        return <Users className="h-5 w-5" />
      case 'Digital Transformation':
        return <TrendingUp className="h-5 w-5" />
      default:
        return <ArrowUpRight className="h-5 w-5" />
    }
  }
  const getPricingModelLabel = (model: string) => {
    switch (model) {
      case 'one-time':
        return 'One-time'
      case 'subscription':
        return 'Subscription'
      case 'usage-based':
        return 'Usage-based'
      case 'project-based':
        return 'Project-based'
      default:
        return model
import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
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
} from "lucide-react"
import { ALL_EXPANDED_SERVICES, EXPANDED_SERVICE_CATEGORIES } from "@/data/expandedServices"
const ComprehensiveServicesPage = () => {
  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'ai automation':
      case 'ai analytics':
      case 'ai development':
        return <Brain className="h-6 w-6 text-blue-500" />
      case 'cybersecurity':
        return <Shield className="h-6 w-6 text-red-500" />
      case 'cloud services':
      case 'devops':
        return <Cloud className="h-6 w-6 text-green-500" />
      case 'data analytics':
        return <Database className="h-6 w-6 text-purple-500" />
      case 'digital transformation':
        return <TrendingUp className="h-6 w-6 text-orange-500" />
      case 'iot & edge computing':
        return <Monitor className="h-6 w-6 text-cyan-500" />
      case 'blockchain & web3':
        return <Wallet className="h-6 w-6 text-yellow-500" />
      default:
        return <Code className="h-6 w-6 text-gray-500" />
    }
  }
  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'ai automation':
      case 'ai analytics':
      case 'ai development':
        return 'bg-blue-100 text-blue-800 border-blue-200'
      case 'cybersecurity':
        return 'bg-red-100 text-red-800 border-red-200'
      case 'cloud services':
      case 'devops':
        return 'bg-green-100 text-green-800 border-green-200'
      case 'data analytics':
        return 'bg-purple-100 text-purple-800 border-purple-200'
      case 'digital transformation':
        return 'bg-orange-100 text-orange-800 border-orange-200'
      case 'iot & edge computing':
        return 'bg-cyan-100 text-cyan-800 border-cyan-200'
      case 'blockchain & web3':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200'
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }
  return (
      {/* Hero Section */}
              Comprehensive IT & AI Solutions
              Transform your business with cutting-edge technology services from ZionTech Group
                  Get Free Consultation
                  Contact Our Team

      {/* Contact Information Banner */}
              <span className="font-medium">+1 302 464 0950</span>
              <span className="font-medium">kleber@ziontechgroup.com</span>
              <span className="font-medium">364 E Main St STE 1008, Middletown DE 19709</span>
            Comprehensive IT & AI Services
            Discover our extensive range of micro SAAS services, enterprise IT solutions, and cutting-edge AI services. 
            From AI-powered chatbots to zero-trust security, we deliver innovative solutions that drive business growth.
              Contact Us: +1 302 464 0950
              kleber@ziontechgroup.com
      {/* Contact Information Banner */}
                <span>+1 302 464 0950</span>
                <span>kleber@ziontechgroup.com</span>
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
              <$2 />
                href="https://ziontechgroup.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-zion-purple hover:underline font-medium"
              >
                ziontechgroup.com

      {/* Why Choose ZionTech Section */}
              Why Choose ZionTech Group?
              We deliver innovative, scalable, and cost-effective technology solutions that drive real business transformation
          
              <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
              <p className="text-gray-600">Certified professionals with 10+ years of experience in cutting-edge technologies</p>
            
              <h3 className="text-xl font-semibold mb-2">Custom Solutions</h3>
              <p className="text-gray-600">Tailored approaches designed specifically for your business needs and objectives</p>
            
              <h3 className="text-xl font-semibold mb-2">Rapid Delivery</h3>
              <p className="text-gray-600">Agile methodology ensuring quick turnaround times without compromising quality</p>
            
              <h3 className="text-xl font-semibold mb-2">Proven Results</h3>
              <p className="text-gray-600">Track record of successful implementations and measurable business outcomes</p>

      {/* Service Categories */}
              Our Service Categories
              Comprehensive technology solutions across all major domains

            {EXPANDED_SERVICE_CATEGORIES.map((category) => {
              let linkPath = `/services/${category.value}`
              if (category.value === 'ai-ml') linkPath = '/ai-services'
              if (category.value === 'cybersecurity') linkPath = '/cybersecurity-services'
              return (
                      {getCategoryIcon(category.label)}
                    <CardTitle className="text-xl">{category.label}</CardTitle>
                      Cutting-edge solutions in {category.label.toLowerCase()} to drive innovation and growth
                        Explore Services
              )
            })}

      {/* Featured Services */}
          <h2 className="text-3xl font-bold text-white text-center mb-12">Featured Services</h2>
            {featuredServices.map((service) => (
                      {getCategoryIcon(service.category)}
                      <span className="ml-2">{service.category}</span>
                  <CardTitle className="text-white text-xl">{service.title}</CardTitle>
                    {service.description}
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('all')
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
} from 'lucide-react'
import { SEO } from '@/components/SEO'
export default function ComprehensiveServicesPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [sortBy, setSortBy] = useState('featured')
  const filteredServices = COMPREHENSIVE_SERVICES.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  const [selectedPricingTier, setSelectedPricingTier] = useState<string>('all')
  const [sortBy, setSortBy] = useState<string>('rating')
  const filteredServices = useMemo(() => {
    let filtered = COMPREHENSIVE_SERVICES
    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(service =>
        service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => service.category === selectedCategory)
    }

    // Filter by pricing tier
    if (selectedPricingTier !== 'all') {
      const tier = SERVICE_PRICING_TIERS[selectedPricingTier as keyof typeof SERVICE_PRICING_TIERS]
      if (tier) {
        filtered = filtered.filter(service => {
          const discountedPrice = service.price * (1 - tier.discount)
          if (selectedPricingTier === 'startup') return discountedPrice <= 5000
          if (selectedPricingTier === 'smb') return discountedPrice <= 15000
          return true; // enterprise
        })
      }
    }

    // Sort services
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price':
          return (a.price || 0) - (b.price || 0)
        case 'rating':
          return (b.rating || 0) - (a.rating || 0)
        case 'aiScore':
          return (b.aiScore || 0) - (a.aiScore || 0)
        case 'newest':
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        default:
          return 0
      }
    })
    return filtered
  }, [searchTerm, selectedCategory, selectedPricingTier, sortBy])
  const getDiscountedPrice = (price: number, tier: string) => {
    const pricingTier = SERVICE_PRICING_TIERS[tier as keyof typeof SERVICE_PRICING_TIERS]
    if (pricingTier) {
      return price * (1 - pricingTier.discount)
    }
    return price
  }
  const formatPrice = (price: number) => {
    if (price >= 1000) {
      return `$${(price / 1000).toFixed(1)}k`
    }
    return `$${price}`
  }
  return (
        title="Comprehensive IT & AI Services - Zion Tech Group" 
        description="Discover our comprehensive range of micro SAAS services, IT solutions, and AI services. Expert consulting, development, and support for businesses of all sizes."
        keywords="IT services, AI services, micro SAAS, technology consulting, cybersecurity, cloud migration, data analytics"
        canonical="https://ziontechgroup.com/services"
      />

      {/* Hero Section */}
            Comprehensive IT & AI Services
            Transform your business with our cutting-edge micro SAAS solutions, expert IT consulting, 
            and innovative AI services. From startups to enterprises, we deliver results that drive growth.
              <span>Enterprise Security</span>
              <span>AI-Powered Solutions</span>
              <span>Expert Team</span>
              <span>Certified Professionals</span>
              <Link to="/contact">Get Free Consultation</Link>
              <a href={`tel:${CONTACT_INFO.mobile}`}>Call Now: {CONTACT_INFO.mobile}</a>
const categoryIcons = {
  "AI & Machine Learning": <Brain className="h-6 w-6" />,
  "Cloud & DevOps": <Cloud className="h-6 w-6" />,
  "Cybersecurity": <Shield className="h-6 w-6" />,
  "Data & Analytics": <BarChart3 className="h-6 w-6" />,
  "Web & Mobile Development": <Smartphone className="h-6 w-6" />,
  "Digital Transformation": <TrendingUp className="h-6 w-6" />,
  "Blockchain & Web3": <Code className="h-6 w-6" />,
  "IoT & Edge Computing": <Server className="h-6 w-6" />
}
const pricingModelColors = {
  "one-time": "bg-blue-100 text-blue-800",
  "monthly": "bg-green-100 text-green-800",
  "hourly": "bg-yellow-100 text-yellow-800",
  "project-based": "bg-purple-100 text-purple-800"
}
const supportLevelColors = {
  "basic": "bg-gray-100 text-gray-800",
  "premium": "bg-blue-100 text-blue-800",
  "enterprise": "bg-purple-100 text-purple-800"
}
export default function ComprehensiveServicesPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>('all')
  const [priceRange, setPriceRange] = useState<string>('all')
  // Filter services based on search and filters
  const filteredServices = EXPANDED_SERVICES.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesCategory = selectedCategory === 'all' || service.category.toLowerCase().replace(/\s+/g, '-') === selectedCategory
    const matchesSubcategory = selectedSubcategory === 'all' || service.subcategory === selectedSubcategory
    let matchesPrice = true
    if (priceRange === 'under-5k') matchesPrice = (service.price || 0) < 5000
    else if (priceRange === '5k-15k') matchesPrice = (service.price || 0) >= 5000 && (service.price || 0) < 15000
    else if (priceRange === '15k-30k') matchesPrice = (service.price || 0) >= 15000 && (service.price || 0) < 30000
    else if (priceRange === 'over-30k') matchesPrice = (service.price || 0) >= 30000
    return matchesSearch && matchesCategory && matchesSubcategory && matchesPrice
  })
  const getSubcategories = () => {
    if (selectedCategory === 'all') return []
    const categoryKey = selectedCategory as keyof typeof EXPANDED_SERVICE_SUBCATEGORIES
    return EXPANDED_SERVICE_SUBCATEGORIES[categoryKey] || []
  }
  const getCategoryIcon = (category: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
      'AI Development': <Zap className="w-5 h-5" />,
      'Cloud Services': <Globe className="w-5 h-5" />,
      'DevOps': <Code className="w-5 h-5" />,
      'Cybersecurity': <Shield className="w-5 h-5" />,
      'Data Analytics': <Database className="w-5 h-5" />,
      'Web Development': <Code className="w-5 h-5" />,
      'Mobile Development': <Smartphone className="w-5 h-5" />,
      'Blockchain': <Blockchain className="w-5 h-5" />,
      'IoT': <Cpu className="w-5 h-5" />,
      'Hardware': <Cpu className="w-5 h-5" />,
      'Business Automation': <BarChart3 className="w-5 h-5" />,
      'Business Solutions': <BarChart3 className="w-5 h-5" />
    }
    return iconMap[category] || <Code className="w-5 h-5" />
  }
  const formatPrice = (price: number | null) => {
    if (!price) return 'Contact for pricing'
    return `$${price.toLocaleString()}`
  }
  const getDeliveryTime = (availability: string) => {
    return availability || 'Contact for timeline'
  }
  return (
        title="Comprehensive IT & AI Services - Zion Tech Group" 
        description="Discover our complete range of professional IT services, AI solutions, and technology consulting. From AI development to cybersecurity, cloud migration to blockchain solutions."
        keywords="IT services, AI development, cybersecurity, cloud migration, blockchain, IoT, mobile development, web development, Zion Tech Group"
        canonical="https://ziontechgroup.com/comprehensive-services"
      />

      {/* Hero Section */}
            Professional IT & AI Services
            Comprehensive technology solutions delivered by expert professionals. From AI development to cybersecurity, 
            cloud infrastructure to blockchain solutions - we've got your business covered.
              Get Free Consultation
              Call +1 302 464 0950

      {/* Contact Information Banner */}
              <span>+1 302 464 0950</span>
              <span>kleber@ziontechgroup.com</span>
              <span>364 E Main St STE 1008, Middletown DE 19709</span>

      {/* Search and Filters */}
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-zion-blue-dark border-zion-blue-light text-white placeholder:text-zion-slate-light"
                />
            
                <SelectItem value="all">All Categories</SelectItem>
                {EXPANDED_SERVICE_CATEGORIES.map(category => (
                    {category.label}
                ))}

                <SelectItem value="all">All Subcategories</SelectItem>
                {getSubcategories().map(subcategory => (
                    {subcategory}
                ))}

                <SelectItem value="all">All Prices</SelectItem>
                <SelectItem value="under-5k">Under $5,000</SelectItem>
                <SelectItem value="5k-15k">$5,000 - $15,000</SelectItem>
                <SelectItem value="15k-30k">$15,000 - $30,000</SelectItem>
                <SelectItem value="over-30k">Over $30,000</SelectItem>

      {/* Services Grid */}
              {filteredServices.length} Professional Services Available
              Expert solutions tailored to your business needs with competitive pricing and guaranteed quality

            {filteredServices.map((service) => (
                      {getCategoryIcon(service.category)}
                        {service.category}
                        {service.subcategory}
                  
                        {service.title}
                        {service.description}
                    
                      {/* Pricing and Rating */}
                            {service.currency}{service.price}
                            /{service.pricingModel === 'monthly' ? 'mo' : service.pricingModel === 'hourly' ? 'hr' : 'project'}
                          <span className="text-white font-semibold">{service.rating}</span>
                          <span className="text-zion-slate-light">({service.reviewCount} reviews)</span>

                      {/* Features Preview */}
                        <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                          {service.features.slice(0, 4).map((feature, index) => (
                              {feature}
                          ))}

                      {/* Delivery and Contact */}
                          <span>Delivery: {service.estimatedDelivery}</span>
                          <span>{service.targetAudience.length} target audiences</span>

                      {/* CTA Button */}
                        className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white text-lg py-6 group-hover:shadow-lg transition-all duration-300"
                        asChild
                      >
                          Get Quote
              ))}
      {/* Services Grid */}
              {filteredServices.length} Services Available
              Discover the perfect solution for your business needs from our comprehensive portfolio 
              of innovative services and solutions.
          
          {filteredServices.length > 0 ? (
              {filteredServices.map((service) => (
              ))}
          ) : (
              <h3 className="text-2xl font-semibold text-zion-blue-dark mb-2">No services found</h3>
                Try adjusting your filters or search terms to find the services you need.
              <$2 />
                onClick={() => {
                  setSelectedCategory('all')
                  setSearchQuery('')
                  setPriceRange('all')
                }}
                className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-6 py-2 rounded-lg font-medium transition-colors"
              >
                Clear Filters
              {/* Pricing Tier Filter */}
                value={selectedPricingTier}
                onChange={(e) => setSelectedPricingTier(e.target.value)}
                className="px-4 py-2 border border-zion-blue-light rounded-md focus:border-zion-blue focus:outline-none"
              >
                <option value="all">All Pricing Tiers</option>
                {Object.entries(SERVICE_PRICING_TIERS).map(([key, tier]) => (
                    {tier.name}
                ))}

              {/* Sort */}
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-zion-blue-light rounded-md focus:border-zion-blue focus:outline-none"
              >
                <option value="rating">Sort by Rating</option>
                <option value="price">Sort by Price</option>
                <option value="aiScore">Sort by AI Score</option>
                <option value="newest">Sort by Newest</option>

      {/* Services Grid */}
            {filteredServices.map((service) => (
                {/* Service Image */}
                    src={service.images[0]}
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                      {service.subcategory}
                      <span className="text-sm">{service.rating}</span>
                      <span className="text-xs">({service.reviewCount})</span>

                {/* Service Content */}
                      {service.title}

                    {service.description}

                  {/* Tags */}
                    {service.tags.slice(0, 3).map((tag, index) => (
                      <span className="font-bold text-lg">{service.price?.toLocaleString()}</span>
                      <span className="text-sm">{service.availability}</span>
              Featured Services
              Our most popular and innovative solutions that deliver exceptional value

            {ALL_EXPANDED_SERVICES.filter(service => service.featured).slice(0, 6).map((service) => (
                    src={service.images[0]} 
                    alt={service.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  {service.featured && (
                  )}
                      {service.category}
                      <span>{service.rating}</span>
                      <span className="text-gray-400">({service.reviewCount})</span>
                  <CardTitle className="text-lg leading-tight">{service.title}</CardTitle>
                    {service.description}
                      {service.currency}{service.price?.toLocaleString()}
                      <span>{service.availability}</span>
                  
                    {service.tags.slice(0, 3).map((tag) => (
                        {tag}
                    ))}
      {/* Services Grid */}
              {filteredServices.length} Services Available
              Find the perfect solution for your business needs

            {filteredServices.map((service) => (
            ))}

          {filteredServices.length === 0 && (
              <p className="text-zion-slate-light text-lg">No services match your current filters.</p>
                onClick={() => {
                  setSearchQuery('')
                  setSelectedCategory('all')
                  setSelectedSubcategory('all')
                  setPriceRange('all')
                }}
                className="mt-4"
              >
                Clear Filters
          )}

      {/* Why Choose Zion Tech Group */}
            <h2 className="text-3xl font-bold text-white mb-4">Why Choose Zion Tech Group?</h2>
            <p className="text-zion-slate-light text-lg">Your trusted partner for innovative technology solutions</p>

              <h3 className="text-xl font-bold text-white mb-2">Innovation First</h3>
              <p className="text-zion-slate-light">Cutting-edge AI, blockchain, and emerging technologies</p>
            
              <h3 className="text-xl font-bold text-white mb-2">Expert Team</h3>
              <p className="text-zion-slate-light">Certified professionals with years of industry experience</p>
            
              <h3 className="text-xl font-bold text-white mb-2">Quality Guaranteed</h3>
              <p className="text-zion-slate-light">Enterprise-grade solutions with comprehensive support</p>

          {filteredServices.length === 0 && (
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-zion-slate mb-2">No services found</h3>
                Try adjusting your search criteria or browse all our services
              <Button onClick={() => {
                setSearchTerm('')
                setSelectedCategory('all')
                setSelectedPricingTier('all')
              }}>
                Clear Filters
          )}

          <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
            Contact our team today to discuss your project requirements and get a personalized quote.
              Call Now: +1 302 464 0950
              Email: kleber@ziontechgroup.com
      {/* Pricing Overview */}
              Transparent Pricing
              Our services are priced competitively with flexible plans to fit businesses of all sizes.
      {/* Service Guarantees */}
            <h2 className="text-4xl font-bold mb-4">Our Service Guarantees</h2>
              We stand behind every service with comprehensive guarantees and ongoing support
          
            {SERVICE_GUARANTEES.map((guarantee, index) => (
                <h3 className="font-semibold mb-2">{guarantee}</h3>
            ))}

      {/* Pricing Tiers Explanation */}
            <h2 className="text-4xl font-bold text-zion-blue mb-4">Flexible Pricing Tiers</h2>
              Choose the pricing tier that best fits your business size and requirements

            {Object.entries(SERVICE_PRICING_TIERS).map(([key, tier]) => (
              < key={key} className={`p-8 rounded-lg border-2 ${$2 />
                key === 'smb' 
                  ? 'border-zion-blue bg-zion-blue/5 scale-105' 
                  : 'border-zion-slate-light'
              }`}>
                  <h3 className="text-2xl font-bold text-zion-blue mb-2">{tier.name}</h3>
                  <p className="text-zion-slate">{tier.description}</p>
                  {key === 'smb' && (
                    <Badge className="mt-2 bg-zion-cyan text-white">Most Popular</Badge>
                  )}
                
                  {tier.features.map((feature, index) => (
                      <span className="text-zion-slate">{feature}</span>
                  ))}

                    {tier.discount > 0 ? `${tier.discount * 100}% discount applied` : 'Standard pricing'}
                      Get {tier.name} Pricing
            ))}

      {/* Contact CTA */}
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            Let's discuss how our comprehensive IT and AI services can drive your business forward. 
            Get a free consultation and customized solution proposal.
          
              <Link to="/contact">Schedule Free Consultation</Link>
              <a href={`tel:${CONTACT_INFO.mobile}`}>Call {CONTACT_INFO.mobile}</a>
              <a href={`mailto:${CONTACT_INFO.email}`}>Email Us</a>

              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-zion-slate-light">Round-the-clock technical support and emergency response</p>
              <h3 className="text-xl font-semibold mb-2">Proven Results</h3>
              <p className="text-zion-slate-light">Track record of successful implementations and ROI</p>
              <h3 className="text-xl font-semibold mb-2">Flexible Scheduling</h3>
              <p className="text-zion-slate-light">Work around your schedule with minimal disruption</p>
                  
                      <span className="text-sm text-zion-slate-light">AI Score: {service.aiScore}</span>

                      <span>AI Score: {service.aiScore}%</span>
                        Learn More
                      <span className="text-zion-slate-light">Price:</span>
                        {service.currency}{service.price.toLocaleString()}
                      <span className="text-zion-slate-light">Market Price:</span>
                      <span className="text-zion-cyan">{service.marketPrice}</span>
                      <span className="text-zion-slate-light">Delivery:</span>
                      <span className="text-white">{service.deliveryTime}</span>
                      <span className="text-zion-slate-light">Rating:</span>
                        <span className="text-white">{service.rating}</span>
                        <span className="text-zion-slate-light ml-1">({service.reviewCount})</span>
                    Get Quote
                    <div>Contact: {service.contactInfo.phone}</div>
                    <div>{service.contactInfo.email}</div>
            ))}
      {/* CTA Section */}

      {/* Pricing Information */}
              Competitive Pricing
              Transparent pricing with flexible engagement models to fit your budget

                <CardTitle className="text-2xl text-gray-800">Starter</CardTitle>
                <div className="text-4xl font-bold text-zion-purple">$2,499</div>
                <CardDescription>Perfect for small businesses</CardDescription>
                    <span>Basic AI Integration</span>
                    <span>Security Assessment</span>
                    <span>Cloud Migration Support</span>
                    <span>Basic Analytics Dashboard</span>
                    Get Started

                <Badge className="bg-zion-purple text-white px-4 py-2">Most Popular</Badge>
                <CardTitle className="text-2xl text-gray-800">Professional</CardTitle>
                <div className="text-4xl font-bold text-zion-purple">$7,999</div>
                <CardDescription>Ideal for growing companies</CardDescription>
                    <span>Advanced AI Solutions</span>
                    <span>Comprehensive Security</span>
                    <span>Full Cloud Migration</span>
                    <span>Custom Analytics Platform</span>
                    <span>24/7 Support</span>
                    Get Started

                <CardTitle className="text-2xl text-gray-800">Enterprise</CardTitle>
                <div className="text-4xl font-bold text-zion-purple">$19,999</div>
                <CardDescription>For large organizations</CardDescription>
                    <span>Custom AI Development</span>
                    <span>Enterprise Security Suite</span>
                    <span>Multi-Cloud Strategy</span>
                    <span>Advanced Analytics & ML</span>
                    <span>Dedicated Team</span>
                    Get Started

      {/* Call to Action */}
            Ready to Transform Your Business?
            Let our expert team help you leverage cutting-edge technology to achieve your business goals. 
            Get a free consultation and discover how we can drive innovation and growth.
                Request Free Quote
                Schedule Consultation

      {/* Footer Contact */}
              <h3 className="text-2xl font-bold mb-6 text-zion-cyan">ZionTech Group</h3>
                Your trusted partner for innovative technology solutions. We specialize in AI, cybersecurity, 
                cloud services, and digital transformation to help businesses thrive in the digital age.
            
              <h3 className="text-xl font-semibold mb-6 text-zion-cyan">Contact Information</h3>
                  <span>+1 302 464 0950</span>
                  <span>kleber@ziontechgroup.com</span>
                  <span>364 E Main St STE 1008<br />Middletown DE 19709</span>
          
            <p>&copy; 2024 ZionTech Group. All rights reserved. | <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="text-zion-cyan hover:underline">ziontechgroup.com</a></p>
  )
}
export default ComprehensiveServicesPage</$1></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></Link></section></section></section></section></section>