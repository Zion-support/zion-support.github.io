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
    <div>
          <div>
          <div>
          <div>
              <div>
                <CategoryIcon />
              </div>
              <span className="text-xs font-medium text-zion-blue-dark bg-zion-blue-light px-2 py-1 rounded">
                {service.category}

              </span>
            </div>
            <h3 className="text-xl font-semibold text-zion-blue-dark mb-2 group-hover:text-zion-cyan transition-colors">
              {service.title}

            </h3>
            <p className="text-zion-slate text-sm mb-3">
              {service.description}

            </p>
          </div>
          {service.status === 'Active' && (
            <div>
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              Active
            </div>
          )}

        </div>

        <div>
          <div>
            <Star />
            <span className="text-sm font-medium">{service.rating}</span>
            <span className="text-zion-slate text-sm">({service.reviewCount} reviews)</span>
          </div>
          
          <div>
          <div>
              <DollarSign />
              <span className="text-sm font-semibold text-zion-blue-dark">
                Starting at ${service.price.starter}/month
              </span>
            </div>
            <div>
              <Clock />
              <span className="text-zion-slate text-sm">{service.deliveryTime}</span>
            </div>
          </div>

          <div>
            Market Price: {service.marketPrice}

          </div>
        </div>

        <div>
          <h4 className="text-sm font-medium text-zion-blue-dark mb-2">Key Features:</h4>
          <div>
            {service.features.slice(0, 4).map((feature: string, idx: number) => (
              <div>
                <CheckCircle />
                <span className="truncate">{feature}</span>
              </div>
            ))}

          </div>
        </div>

        <div>
          <h4 className="text-sm font-medium text-zion-blue-dark mb-2">Target Audience:</h4>
          <div>
            {service.targetAudience.slice(0, 3).map((audience: string, idx: number) => (
              <span key={idx} className="text-xs bg-zion-blue-light text-zion-blue-dark px-2 py-1 rounded">
                {audience}

              </span>
            ))}

          </div>
        </div>

        <div>
          <$2 />
            href={service.website}

            target="_blank"
            rel="noopener noreferrer"
            className="text-zion-cyan hover:text-zion-cyan-light text-sm flex items-center group"
          >
            Learn More <ExternalLink />
          </a>
          
          <div>
            <$2 />
              href={`mailto:${service.contactInfo.email}`}

              className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-3 py-1 rounded text-xs font-medium transition-colors"
            >
              Get Quote
            </a>
    <div>
      {/* Hero Section */}

      <div>
          <div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Comprehensive IT Services
          </h1>
          <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
            Discover our complete range of IT services designed to transform your business. From AI development to cybersecurity, we have the expertise you need.
          </p>
          
          {/* Search Bar */}

          <div>
          <div>
              <Search />
              <Input />
                type="text"
                placeholder="Search for services..."
                value={searchTerm}

                onChange={(e) => setSearchTerm(e.target.value)}

                className="pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border-zion-blue-light text-white placeholder-zion-slate-light"
              />
            </div>
          </div>

          {/* Filters */}

          <div>
            <select
              value={selectedCategory}

              onChange={(e) => setSelectedCategory(e.target.value)}

              className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-zion-blue-light rounded-lg text-white"
            >
              <option value="all">All Categories</option>
              {SERVICE_CATEGORIES.map(category => (
                <option key={category.id} value={category.name}>{category.name}</option>
              ))}

            </select>
            
            <select
              value={priceRange}

              onChange={(e) => setPriceRange(e.target.value)}

              className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-zion-blue-light rounded-lg text-white"
            >
              <option value="all">All Prices</option>
              <option value="low">Under $5,000</option>
              <option value="medium">$5,000 - $15,000</option>
              <option value="high">$15,000+</option>
            </select>
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
  DollarSign
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
  ArrowUpRight
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
        return <Zap />
      case 'Cloud & DevOps':
        return <Globe />
      case 'Cybersecurity':
        return <Shield />
      case 'Data & Analytics':
        return <TrendingUp />
      case 'Web & Mobile Development':
        return <ArrowUpRight />
      case 'Blockchain & Web3':
        return <Award />
      case 'IoT & Hardware':
        return <Users />
      case 'Digital Transformation':
        return <TrendingUp />
      default:
        return <ArrowUpRight />
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
  CheckCircle
} from "lucide-react"
import { ALL_EXPANDED_SERVICES, EXPANDED_SERVICE_CATEGORIES } from "@/data/expandedServices"
const ComprehensiveServicesPage = () => {
  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'ai automation':
      case 'ai analytics':
      case 'ai development':
        return <Brain />
      case 'cybersecurity':
        return <Shield />
      case 'cloud services':
      case 'devops':
        return <Cloud />
      case 'data analytics':
        return <Database />
      case 'digital transformation':
        return <TrendingUp />
      case 'iot & edge computing':
        return <Monitor />
      case 'blockchain & web3':
        return <Wallet />
      default:
        return <Code />
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
    <div>
      {/* Hero Section */}

      <div>
          <div>
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Comprehensive IT & AI Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-zion-cyan">
              Transform your business with cutting-edge technology services from ZionTech Group
            </p>
            <div>
              <Link />
                <Button />
                  Get Free Consultation
                  <ArrowRight />
                </Button>
              </Link>
              <Link />
                <Button />
                  Contact Our Team
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Information Banner */}

      <div>
          <div>
          <div>
          <div>
              <Phone />
              <span className="font-medium">+1 302 464 0950</span>
            </div>
            <div>
              <Mail />
              <span className="font-medium">kleber@ziontechgroup.com</span>
            </div>
            <div>
              <MapPin />
              <span className="font-medium">364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
      <div>
          <div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Comprehensive IT & AI Services
          </h1>
          <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
            Discover our extensive range of micro SAAS services, enterprise IT solutions, and cutting-edge AI services. 
            From AI-powered chatbots to zero-trust security, we deliver innovative solutions that drive business growth.
          </p>
          <div>
            <Button />
              <Phone />
              Contact Us: +1 302 464 0950
            </Button>
            <Button />
              <Mail />
              kleber@ziontechgroup.com
            </Button>
      {/* Contact Information Banner */}

      <div>
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
              </div>
            </div>
            <div>
              <Globe />
              <$2 />
                href="https://ziontechgroup.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-zion-purple hover:underline font-medium"
              >
                ziontechgroup.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose ZionTech Section */}

      <div>
          <div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose ZionTech Group?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver innovative, scalable, and cost-effective technology solutions that drive real business transformation
            </p>
          </div>
          
          <div>
          <div>
              <div>
                <Users />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
              <p className="text-gray-600">Certified professionals with 10+ years of experience in cutting-edge technologies</p>
            </div>
            
            <div>
          <div>
                <Circle />
              </div>
              <h3 className="text-xl font-semibold mb-2">Custom Solutions</h3>
              <p className="text-gray-600">Tailored approaches designed specifically for your business needs and objectives</p>
            </div>
            
            <div>
          <div>
                <Zap />
              </div>
              <h3 className="text-xl font-semibold mb-2">Rapid Delivery</h3>
              <p className="text-gray-600">Agile methodology ensuring quick turnaround times without compromising quality</p>
            </div>
            
            <div>
          <div>
                <CheckCircle />
              </div>
              <h3 className="text-xl font-semibold mb-2">Proven Results</h3>
              <p className="text-gray-600">Track record of successful implementations and measurable business outcomes</p>
            </div>
          </div>
        </div>
      </div>

      {/* Service Categories */}

      <div>
          <div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Service Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive technology solutions across all major domains
            </p>
          </div>

          <div>
            {EXPANDED_SERVICE_CATEGORIES.map((category) => {
              let linkPath = `/services/${category.value}`
              if (category.value === 'ai-ml') linkPath = '/ai-services'
              if (category.value === 'cybersecurity') linkPath = '/cybersecurity-services'
              return (
                <Card />
                  <CardHeader />
                    <div>
                      {getCategoryIcon(category.label)}

                    </div>
                    <CardTitle className="text-xl">{category.label}</CardTitle>
                  </CardHeader>
                  <CardContent />
                    <p className="text-gray-600 mb-4">
                      Cutting-edge solutions in {category.label.toLowerCase()} to drive innovation and growth
                    </p>
                    <Link />
                      <Button />
                        Explore Services
                        <ArrowRight />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              )
            })}

          </div>
        </div>
      </div>

      {/* Featured Services */}

      <section className="py-16 px-4">
        <div>
          <h2 className="text-3xl font-bold text-white text-center mb-12">Featured Services</h2>
          <div>
            {featuredServices.map((service) => (
              <Card />
                <CardHeader />
                  <div>
                    <Badge />
                      {getCategoryIcon(service.category)}

                      <span className="ml-2">{service.category}</span>
                    </Badge>
                    <Badge />
                      Featured
                    </Badge>
                  </div>
                  <CardTitle className="text-white text-xl">{service.title}</CardTitle>
                  <CardDescription />
                    {service.description}

                  </CardDescription>
                </CardHeader>
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
  ExternalLink
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
    <div>
      <SEO />
        title="Comprehensive IT & AI Services - Zion Tech Group" 
        description="Discover our comprehensive range of micro SAAS services, IT solutions, and AI services. Expert consulting, development, and support for businesses of all sizes."
        keywords="IT services, AI services, micro SAAS, technology consulting, cybersecurity, cloud migration, data analytics"
        canonical="https://ziontechgroup.com/services"
      />

      {/* Hero Section */}

      <section className="bg-gradient-to-r from-zion-blue to-zion-purple text-white py-20">
        <div>
          <h1 className="text-5xl font-bold mb-6">
            Comprehensive IT & AI Services
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Transform your business with our cutting-edge micro SAAS solutions, expert IT consulting, 
            and innovative AI services. From startups to enterprises, we deliver results that drive growth.
          </p>
          <div>
          <div>
              <Shield />
              <span>Enterprise Security</span>
            </div>
            <div>
              <Zap />
              <span>AI-Powered Solutions</span>
            </div>
            <div>
              <Users />
              <span>Expert Team</span>
            </div>
            <div>
              <Award />
              <span>Certified Professionals</span>
            </div>
          </div>
          <div>
            <Button />
              <Link to="/contact">Get Free Consultation</Link>
            </Button>
            <Button />
              <a href={`tel:${CONTACT_INFO.mobile}`}>Call Now: {CONTACT_INFO.mobile}</a>
            </Button>
const categoryIcons = {
  "AI & Machine Learning": <Brain className="h-6 w-6" />,
  "Cloud & DevOps": <Cloud className="h-6 w-6" />,
  "Cybersecurity": <Shield className="h-6 w-6" />,
  "Data & Analytics": <BarChart3 className="h-6 w-6" />,
  "Web & Mobile Development": <Smartphone className="h-6 w-6" />,
  "Digital Transformation": <TrendingUp className="h-6 w-6" />,
  "Blockchain & Web3": <Code className="h-6 w-6" />,
  "IoT & Edge Computing": <Server />
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
      'Business Solutions': <BarChart3 />
    }

    return iconMap[category] || <Code />
  }

  const formatPrice = (price: number | null) => {
    if (!price) return 'Contact for pricing'
    return `$${price.toLocaleString()}`
  }

  const getDeliveryTime = (availability: string) => {
    return availability || 'Contact for timeline'
  }

  return (
    <div>
      <SEO />
        title="Comprehensive IT & AI Services - Zion Tech Group" 
        description="Discover our complete range of professional IT services, AI solutions, and technology consulting. From AI development to cybersecurity, cloud migration to blockchain solutions."
        keywords="IT services, AI development, cybersecurity, cloud migration, blockchain, IoT, mobile development, web development, Zion Tech Group"
        canonical="https://ziontechgroup.com/comprehensive-services"
      />

      {/* Hero Section */}

      <div>
          <div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Professional IT & AI Services
          </h1>
          <p className="text-xl text-zion-cyan max-w-3xl mx-auto mb-8">
            Comprehensive technology solutions delivered by expert professionals. From AI development to cybersecurity, 
            cloud infrastructure to blockchain solutions - we've got your business covered.
          </p>
          <div>
            <Button />
              <Mail />
              Get Free Consultation
            </Button>
            <Button />
              <Phone />
              Call +1 302 464 0950
            </Button>
          </div>
        </div>
      </div>

      {/* Contact Information Banner */}

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
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filters */}

      <div>
          <div>
          <div>
          <div>
              <div>
                <Search />
                <Input />
                  placeholder="Search services..."
                  value={searchTerm}

                  onChange={(e) => setSearchTerm(e.target.value)}

                  className="pl-10 bg-zion-blue-dark border-zion-blue-light text-white placeholder: text-zion-slate-light"
                />
              </div>
            </div>
            
            <Select />
              <SelectTrigger />
                <SelectValue />
              </SelectTrigger>
              <SelectContent />
                <SelectItem value="all">All Categories</SelectItem>
                {EXPANDED_SERVICE_CATEGORIES.map(category => (
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
                <SelectItem value="all">All Subcategories</SelectItem>
                {getSubcategories().map(subcategory => (
                  <SelectItem />
                    {subcategory}

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
                <SelectItem value="under-5k">Under $5,000</SelectItem>
                <SelectItem value="5k-15k">$5,000 - $15,000</SelectItem>
                <SelectItem value="15k-30k">$15,000 - $30,000</SelectItem>
                <SelectItem value="over-30k">Over $30,000</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Services Grid */}

      <div>
          <div>
          <div>
            <h2 className="text-3xl font-bold text-white mb-4">
              {filteredServices.length} Professional Services Available
            </h2>
            <p className="text-zion-slate-light text-lg">
              Expert solutions tailored to your business needs with competitive pricing and guaranteed quality
            </p>
          </div>

          <div>
            {filteredServices.map((service) => (
              <Card />
                <CardHeader />
                  <div>
          <div>
                      {getCategoryIcon(service.category)}

                      <Badge />
                        {service.category}

                      </Badge>
                    </div>
                    <div>
                      <Badge />
                        {service.subcategory}

                      </Badge>
                    </div>
                  </div>
                  
                  <div>
                    <CardHeader />
                      <CardTitle />
                        {service.title}

                      </CardTitle>
                      <CardDescription />
                        {service.description}

                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent />
                      {/* Pricing and Rating */}

                      <div>
          <div>
                          <DollarSign />
                          <span className="text-white font-bold text-xl">
                            {service.currency}{service.price}

                          </span>
                          <span className="text-zion-slate-light">
                            /{service.pricingModel === 'monthly' ? 'mo' : service.pricingModel === 'hourly' ? 'hr' : 'project'}

                          </span>
                        </div>
                        <div>
                          <Star />
                          <span className="text-white font-semibold">{service.rating}</span>
                          <span className="text-zion-slate-light">({service.reviewCount} reviews)</span>
                        </div>
                      </div>

                      {/* Features Preview */}

                      <div>
                        <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                        <div>
                          {service.features.slice(0, 4).map((feature, index) => (
                            <Badge />
                              {feature}

                            </Badge>
                          ))}

                        </div>
                      </div>

                      {/* Delivery and Contact */}

                      <div>
          <div>
                          <Clock />
                          <span>Delivery: {service.estimatedDelivery}</span>
                        </div>
                        <div>
                          <Users />
                          <span>{service.targetAudience.length} target audiences</span>
                        </div>
                      </div>

                      {/* CTA Button */}

                      <Button />
                        asChild
                      >
                        <a href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.title}`}>
                          Get Quote
                          <ArrowRight />
                        </a>
                      </Button>
                    </CardContent>
                  </div>
                </Card>
              ))}

      {/* Services Grid */}

      <section className="py-20 bg-white">
        <div>
          <div>
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              {filteredServices.length} Services Available
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Discover the perfect solution for your business needs from our comprehensive portfolio 
              of innovative services and solutions.
            </p>
          </div>
          
          {filteredServices.length > 0 ? (
            <div>
              {filteredServices.map((service) => (
                <ServiceCard />
              ))}

            </div>
          ) : (
            <div>
          <div>
                <Search />
              </div>
              <h3 className="text-2xl font-semibold text-zion-blue-dark mb-2">No services found</h3>
              <p className="text-zion-slate mb-6">
                Try adjusting your filters or search terms to find the services you need.
              </p>
              <$2 />
                onClick={() => {
                  setSelectedCategory('all')
                  setSearchQuery('')
                  setPriceRange('all')
                }}

                className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-6 py-2 rounded-lg font-medium transition-colors"
              >
                Clear Filters
              </button>
            </div>
              {/* Pricing Tier Filter */}

              <select
                value={selectedPricingTier}

                onChange={(e) => setSelectedPricingTier(e.target.value)}

                className="px-4 py-2 border border-zion-blue-light rounded-md focus: border-zion-blue focus: outline-none"
              >
                <option value="all">All Pricing Tiers</option>
                {Object.entries(SERVICE_PRICING_TIERS).map(([key, tier]) => (
                  <option key={key} value={key}>
                    {tier.name}

                  </option>
                ))}

              </select>

              {/* Sort */}

              <select
                value={sortBy}

                onChange={(e) => setSortBy(e.target.value)}

                className="px-4 py-2 border border-zion-blue-light rounded-md focus: border-zion-blue focus: outline-none"
              >
                <option value="rating">Sort by Rating</option>
                <option value="price">Sort by Price</option>
                <option value="aiScore">Sort by AI Score</option>
                <option value="newest">Sort by Newest</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}

      <section className="py-16">
        <div>
          <div>
            {filteredServices.map((service) => (
              <div>
                {/* Service Image */}

                <div>
                  <img
                    src={service.images[0]}

                    alt={service.title}

                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div>
                    <Badge />
                      {service.subcategory}

                    </Badge>
                  </div>
                  <div>
          <div>
                      <Star />
                      <span className="text-sm">{service.rating}</span>
                      <span className="text-xs">({service.reviewCount})</span>
                    </div>
                  </div>
                </div>

                {/* Service Content */}

                <div>
          <div>
                    <h3 className="text-xl font-bold text-zion-blue line-clamp-2">
                      {service.title}

                    </h3>
                  </div>

                  <p className="text-zion-slate mb-4 line-clamp-3">
                    {service.description}

                  </p>

                  {/* Tags */}

                  <div>
                    {service.tags.slice(0, 3).map((tag, index) => (
                      <Badge />
                <CardContent />
                  <div>
          <div>
                      <DollarSign />
                      <span className="font-bold text-lg">{service.price?.toLocaleString()}</span>
                    </div>
                    <div>
                      <Clock />
                      <span className="text-sm">{service.availability}</span>
      <div>
          <div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our most popular and innovative solutions that deliver exceptional value
            </p>
          </div>

          <div>
            {ALL_EXPANDED_SERVICES.filter(service => service.featured).slice(0, 6).map((service) => (
              <Card />
                <div>
                  <img 
                    src={service.images[0]}

                    alt={service.title}

                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  {service.featured && (
                    <Badge />
                      Featured
                    </Badge>
                  )}

                </div>
                <CardHeader />
                  <div>
                    <Badge />
                      {service.category}

                    </Badge>
                    <div>
                      <Star />
                      <span>{service.rating}</span>
                      <span className="text-gray-400">({service.reviewCount})</span>
                    </div>
                  </div>
                  <CardTitle className="text-lg leading-tight">{service.title}</CardTitle>
                  <CardDescription />
                    {service.description}

                  </CardDescription>
                </CardHeader>
                <CardContent />
                  <div>
          <div>
                      {service.currency}{service.price?.toLocaleString()}

                    </div>
                    <div>
                      <Clock />
                      <span>{service.availability}</span>
                    </div>
                  </div>
                  
                  <div>
                    {service.tags.slice(0, 3).map((tag) => (
                      <Badge />
                        {tag}

                      </Badge>
                    ))}

                  </div>
      {/* Services Grid */}

      <section className="py-16 bg-zion-blue-dark">
        <div>
          <div>
            <h2 className="text-3xl font-bold text-white mb-4">
              {filteredServices.length} Services Available
            </h2>
            <p className="text-zion-slate-light">
              Find the perfect solution for your business needs
            </p>
          </div>

          <div>
            {filteredServices.map((service) => (
              <ServiceCard />
            ))}

          </div>

          {filteredServices.length === 0 && (
            <div>
              <p className="text-zion-slate-light text-lg">No services match your current filters.</p>
              <Button />
                onClick={() => {
                  setSearchQuery('')
                  setSelectedCategory('all')
                  setSelectedSubcategory('all')
                  setPriceRange('all')
                }}

                className="mt-4"
              >
                Clear Filters
              </Button>
            </div>
          )}

        </div>
      </section>

      {/* Why Choose Zion Tech Group */}

      <section className="py-16 bg-zion-blue">
        <div>
          <div>
            <h2 className="text-3xl font-bold text-white mb-4">Why Choose Zion Tech Group?</h2>
            <p className="text-zion-slate-light text-lg">Your trusted partner for innovative technology solutions</p>
          </div>

          <div>
          <div>
              <div>
                <Zap />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Innovation First</h3>
              <p className="text-zion-slate-light">Cutting-edge AI, blockchain, and emerging technologies</p>
            </div>
            
            <div>
          <div>
                <Users />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Expert Team</h3>
              <p className="text-zion-slate-light">Certified professionals with years of industry experience</p>
            </div>
            
            <div>
          <div>
                <Shield />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Quality Guaranteed</h3>
              <p className="text-zion-slate-light">Enterprise-grade solutions with comprehensive support</p>
            </div>
          </div>
        </div>
      </section>

          {filteredServices.length === 0 && (
            <div>
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-zion-slate mb-2">No services found</h3>
              <p className="text-zion-slate-light mb-6">
                Try adjusting your search criteria or browse all our services
              </p>
              <Button onClick={() => {
                setSearchTerm('')
                setSelectedCategory('all')
                setSelectedPricingTier('all')
              }}>
                Clear Filters
              </Button>
            </div>
          )}

        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-zion-purple to-zion-purple-dark">
        <div>
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-zion-slate-light text-lg mb-8 max-w-2xl mx-auto">
            Contact our team today to discuss your project requirements and get a personalized quote.
          </p>
          <div>
            <Button />
              <Phone />
              Call Now: +1 302 464 0950
            </Button>
            <Button />
              <Mail />
              Email: kleber@ziontechgroup.com
            </Button>
      {/* Pricing Overview */}

      <section className="py-20 bg-zion-blue-light">
        <div>
          <div>
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Transparent Pricing
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Our services are priced competitively with flexible plans to fit businesses of all sizes.
            </p>
          </div>
      {/* Service Guarantees */}

      <section className="bg-zion-blue text-white py-16">
        <div>
          <div>
            <h2 className="text-4xl font-bold mb-4">Our Service Guarantees</h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              We stand behind every service with comprehensive guarantees and ongoing support
            </p>
          </div>
          
          <div>
            {SERVICE_GUARANTEES.map((guarantee, index) => (
              <div>
          <div>
                  <CheckCircle />
                </div>
                <h3 className="font-semibold mb-2">{guarantee}</h3>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Pricing Tiers Explanation */}

      <section className="bg-white py-16">
        <div>
          <div>
            <h2 className="text-4xl font-bold text-zion-blue mb-4">Flexible Pricing Tiers</h2>
            <p className="text-xl text-zion-slate max-w-2xl mx-auto">
              Choose the pricing tier that best fits your business size and requirements
            </p>
          </div>

          <div>
            {Object.entries(SERVICE_PRICING_TIERS).map(([key, tier]) => (
              < key={key} className={`p-8 rounded-lg border-2 ${$2 />
                key === 'smb' 
                  ? 'border-zion-blue bg-zion-blue/5 scale-105' 
                  : 'border-zion-slate-light'
              }`}>
                <div>
                  <h3 className="text-2xl font-bold text-zion-blue mb-2">{tier.name}</h3>
                  <p className="text-zion-slate">{tier.description}</p>
                  {key === 'smb' && (
                    <Badge className="mt-2 bg-zion-cyan text-white">Most Popular</Badge>
                  )}

                </div>
                
                <ul className="space-y-3 mb-6">
                  {tier.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <CheckCircle />
                      <span className="text-zion-slate">{feature}</span>
                    </li>
                  ))}

                </ul>

                <div>
          <div>
                    {tier.discount > 0 ? `${tier.discount * 100}% discount applied` : 'Standard pricing'}

                  </div>
                  <Button />
                    <a href={`mailto:${CONTACT_INFO.email}?subject=Inquiry about ${tier.name} pricing tier`}>
                      Get {tier.name} Pricing
                    </a>
                  </Button>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Contact CTA */}

      <section className="bg-gradient-to-r from-zion-purple to-zion-blue text-white py-20">
        <div>
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-zion-slate-light max-w-2xl mx-auto mb-8">
            Let's discuss how our comprehensive IT and AI services can drive your business forward. 
            Get a free consultation and customized solution proposal.
          </p>
          
          <div>
            <Button />
              <Link to="/contact">Schedule Free Consultation</Link>
            </Button>
            <Button />
              <a href={`tel:${CONTACT_INFO.mobile}`}>Call {CONTACT_INFO.mobile}</a>
            </Button>
            <Button />
              <a href={`mailto:${CONTACT_INFO.email}`}>Email Us</a>
            </Button>
          </div>

          <div>
          <div>
              <div>
                <Phone />
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-zion-slate-light">Round-the-clock technical support and emergency response</p>
            </div>
            <div>
          <div>
                <TrendingUp />
              </div>
              <h3 className="text-xl font-semibold mb-2">Proven Results</h3>
              <p className="text-zion-slate-light">Track record of successful implementations and ROI</p>
            </div>
            <div>
          <div>
                <Calendar />
              </div>
              <h3 className="text-xl font-semibold mb-2">Flexible Scheduling</h3>
              <p className="text-zion-slate-light">Work around your schedule with minimal disruption</p>
                  
                  <div>
          <div>
                      <div>
                        <Brain />
                      </div>
                      <span className="text-sm text-zion-slate-light">AI Score: {service.aiScore}</span>
                    </div>
                    <Link />
                      <Button />
                  <div>
          <div>
                      <BarChart3 />
                      <span>AI Score: {service.aiScore}%</span>
                    </div>
                    <Link />
                      <Button />
                        Learn More
                      </Button>
                    </Link>
                  </div>
                </CardContent>
                <CardContent />
                  <div>
          <div>
                      <span className="text-zion-slate-light">Price:</span>
                      <span className="text-white font-semibold">
                        {service.currency}{service.price.toLocaleString()}

                      </span>
                    </div>
                    <div>
                      <span className="text-zion-slate-light">Market Price:</span>
                      <span className="text-zion-cyan">{service.marketPrice}</span>
                    </div>
                    <div>
                      <span className="text-zion-slate-light">Delivery:</span>
                      <span className="text-white">{service.deliveryTime}</span>
                    </div>
                    <div>
                      <span className="text-zion-slate-light">Rating:</span>
                      <div>
                        <Star />
                        <span className="text-white">{service.rating}</span>
                        <span className="text-zion-slate-light ml-1">({service.reviewCount})</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter />
                  <Button />
                    <Phone />
                    Get Quote
                  </Button>
                  <div>
                    <div>Contact: {service.contactInfo.phone}</div>
                    <div>{service.contactInfo.email}</div>
                  </div>
                </CardFooter>
              </Card>
            ))}

          </div>
        </div>
      {/* CTA Section */}

      <div>
      </div>

      {/* Pricing Information */}

      <div>
          <div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Competitive Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transparent pricing with flexible engagement models to fit your budget
            </p>
          </div>

          <div>
            <Card />
              <CardHeader />
                <CardTitle className="text-2xl text-gray-800">Starter</CardTitle>
                <div className="text-4xl font-bold text-zion-purple">$2,499</div>
                <CardDescription>Perfect for small businesses</CardDescription>
              </CardHeader>
              <CardContent />
                <ul className="space-y-3 text-left mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle />
                    <span>Basic AI Integration</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle />
                    <span>Security Assessment</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle />
                    <span>Cloud Migration Support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle />
                    <span>Basic Analytics Dashboard</span>
                  </li>
                </ul>
                <Link />
                  <Button />
                    Get Started
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card />
              <div>
                <Badge className="bg-zion-purple text-white px-4 py-2">Most Popular</Badge>
              </div>
              <CardHeader />
                <CardTitle className="text-2xl text-gray-800">Professional</CardTitle>
                <div className="text-4xl font-bold text-zion-purple">$7,999</div>
                <CardDescription>Ideal for growing companies</CardDescription>
              </CardHeader>
              <CardContent />
                <ul className="space-y-3 text-left mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle />
                    <span>Advanced AI Solutions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle />
                    <span>Comprehensive Security</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle />
                    <span>Full Cloud Migration</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle />
                    <span>Custom Analytics Platform</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle />
                    <span>24/7 Support</span>
                  </li>
                </ul>
                <Link />
                  <Button />
                    Get Started
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card />
              <CardHeader />
                <CardTitle className="text-2xl text-gray-800">Enterprise</CardTitle>
                <div className="text-4xl font-bold text-zion-purple">$19,999</div>
                <CardDescription>For large organizations</CardDescription>
              </CardHeader>
              <CardContent />
                <ul className="space-y-3 text-left mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle />
                    <span>Custom AI Development</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle />
                    <span>Enterprise Security Suite</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle />
                    <span>Multi-Cloud Strategy</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle />
                    <span>Advanced Analytics & ML</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle />
                    <span>Dedicated Team</span>
                  </li>
                </ul>
                <Link />
                  <Button />
                    Get Started
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Call to Action */}

      <div>
          <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 text-zion-cyan max-w-3xl mx-auto">
            Let our expert team help you leverage cutting-edge technology to achieve your business goals. 
            Get a free consultation and discover how we can drive innovation and growth.
          </p>
          <div>
            <Link />
              <Button />
                Request Free Quote
                <ArrowRight />
              </Button>
            </Link>
            <Link />
              <Button />
                Schedule Consultation
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Contact */}

      <div>
          <div>
          <div>
          <div>
              <h3 className="text-2xl font-bold mb-6 text-zion-cyan">ZionTech Group</h3>
              <p className="text-gray-300 mb-6">
                Your trusted partner for innovative technology solutions. We specialize in AI, cybersecurity, 
                cloud services, and digital transformation to help businesses thrive in the digital age.
              </p>
              <div>
                <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="text-zion-cyan hover:text-zion-cyan/80">
                  <Globe />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-6 text-zion-cyan">Contact Information</h3>
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
                  <span>364 E Main St STE 1008<br />Middletown DE 19709</span>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <p>&copy; 2024 ZionTech Group. All rights reserved. | <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="text-zion-cyan hover:underline">ziontechgroup.com</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ComprehensiveServicesPage</$1></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></Link></section></section></section></section></section>