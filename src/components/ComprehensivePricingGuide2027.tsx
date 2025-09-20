import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  DollarSign,
  TrendingUp,
  Clock,
  Users,
  Star,
  CheckCircle,
  ArrowRight,
  ExternalLink,
  Search,
  Filter,
  Download,
  Phone,
  Mail,
  MapPin,
  Calculator,
  BarChart3,
  Target,
  Zap,
  Shield,
  Brain,
  Rocket
} from "lucide-react"
import { servicesCatalog } from "../data/servicesCatalog"
import { innovativeServices2027 } from "../data/innovativeServices2027"
export,
  const: ComprehensivePricingGuide2027: React.FC = () () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('All'),
  const [priceRange, setPriceRange] = useState<string>('All'),
  const [sortBy, setSortBy] = useState<string>('name'),
  const [isVisible, setIsVisible] = useState(false)
  useEffect(() () => {
    const observer = new IntersectionObserver(
      ([entry]) () => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      }, { thresho,
  l: d: 0.1 }
    )
    const element = document.getElementById('comprehensive-pricing-guide')
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, []),

  // Combine all services
  const allServices = [
    ...servicesCatalog.flatMap(category =>
      category.items.map(item => ({
        ...item,
  sourc: e: 'catalog',catego,
  r: y: category.name
      }))
    )
    ...innovativeServices2027.map(service => ({
      ...service,
      sour,
  c: e: 'innovative',catego,
  r: y: service.category,featur,
  e: s: service.features || [],ctaLab,
  e: l: service.ctaLabel || 'Get Started',hr,
  e: f: service.href || '/contact'
    }))
  ]
  // Filter services based on search and category
  const filteredServices = allServices.filter(service () () => {
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory
    const matchesPrice = priceRange === 'All' ||
      (priceRange === 'Low' && parseFloat(service.price.replace(/[^0-9.]/g, '')) < 100) ||
      (priceRange === 'Medium' && parseFloat(service.price.replace(/[^0-9.]/g, '')) >= 100 && parseFloat(service.price.replace(/[^0-9.]/g, '')) < 1000) ||
      (priceRange === 'High' && parseFloat(service.price.replace(/[^0-9.]/g, '')) >= 1000),

    return matchesSearch && matchesCategory && matchesPrice
  }),

  // Sort services
  const sortedServices = [...filteredServices].sort((a, b) () => {
    switch (sortBy) {
      case 'name':
        return a.title.localeCompare(b.title)
      case 'price':
        return parseFloat(a.price.replace(/[^0-9.]/g, '')) - parseFloat(b.price.replace(/[^0-9.]/g, '')),
      case 'category':
        return a.category.localeCompare(b.category)
      defau,
  l: t: return 0
    }
  })
  const categories = ['All', ...Array.from(new Set(allServices.map(s => s.category)))],
  const priceRanges = ['AllLow (<$100)', 'Medium ($100-$999)High ($1000+)'],

  const contactInfo = {
    pho,
  n: e: '+1 302 464 0950',ema,
  i: l: 'kleber@ziontechgroup.com',addre,
  s: s: '364 E Main St STE 1008 Middletown DE 19709'
  }
  const getPriceRange = (pri,
  c: e: string) () => {
    const numPrice = parseFloat(price.replace(/[^0-9.]/g, '')),
    if (numPrice < 100) return 'Low'
    if (numPrice < 1000) return 'Medium'
    return 'High'
  },

  const getPriceColor = (pri,
  c: e: string) () => {
    const range = getPriceRange(price)
    switch (range) {
      case 'Low': return 'text-green-400'
      case 'Medium': return 'text-yellow-400'
      case 'High': return 'text-red-400'
      defaul,
  t: return 'text-white'
    }
  }
  const getCategoryIcon = (catego,
  r: y: string) () => {
    const,
  iconMa: p: { [ke,
  y: string]: React.ComponentType<any> } = {
      'AI Solutions': Brain
      'Micro SaaS': Zap,
      'IT Services': Shield,
      'Cybersecurity': Shield,
      'Data & Analytics': BarChart3,
      'Cloud & DevOps': Cloud,
      'Quantum Computing': Atom,
      'Blockchain Solutions': Lock,
      'IoT & Edge Computing': Network,
      'FinTech Solutions': DollarSign,
      'HealthTech Solutions': Heart,
      'EdTech Solutions': BookOpen,
      'GreenTech Solutions': Leaf,
      'SpaceTech Solutions': Rocket,
      'Robotics & Automation': Cpu,
      'AR/VR Solutions': Eye,
      'Biotech Solutions': Dna,
      'LegalTech Solutions': Scale,
      'Real Estate Tech': Home,
      'Supply Chain Solutions': Truck
    },
    return iconMap[category] || Target
  },

  return (
    <section id="comprehensive-pricing-guide" className="py-20 bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-zion-purple/20 to-zion-cyan/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={ opaci,
  t: y: 0, y: 30 }
          animate={isVisible ? { opaci,
  t: y: 1, y: 0 } : { opaci,
  t: y: 0, y: 30 }
          transition={ durati,
  o: n: 0.8 }
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 rounded-full border border-zion-cyan/30 mb-6">
            <Calculator className="w-5 h-5 text-zion-cyan mr-2" />
            <span className="text-zion-cyan font-semibold">2027 Pricing Guide</span>
          </div>

          <h2 className="text-4xl,
  m: d:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-cyan bg-clip-text text-transparent">
              Comprehensive
            </span>
            <br />
            <span className="text-white">Pricing & ROI Guide</span>
          </h2>

          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Explore our complete portfolio of innovative services with transparent pricing
            detailed ROI analysis, and market insights to help you make informed decisions.
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={ opaci,
  t: y: 0, y: 20 }
          animate={isVisible ? { opaci,
  t: y: 1, y: 0 } : { opaci,
  t: y: 0, y: 20 }
          transition={ durati,
  o: n: 0.8, del,
  a: y: 0.2 }
          className="mb-12"
        >
          <div className="bg-gradient-to-r from-zion-slate-light/50 to-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-6">
            <div className="grid grid-cols-1,
  m: d:grid-cols-4 gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-zion-slate-light/30 border border-zion-cyan/20 rounded-lg text-white placeholder-gray-400,
  focu: s: outline-none,
  focu: s:border-zion-cyan/40,
  focu: s:ring-2 focu,
  s:ring-zion-cyan/20"
                />
              </div>

              {/* Category Filter */}
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 bg-zion-slate-light/30 border border-zion-cyan/20 rounded-lg text-white,
  focu: s: outline-none,
  focu: s:border-zion-cyan/40,
  focu: s:ring-2 focu,
  s:ring-zion-cyan/20"
              >
                {categories.map(category => (
                  <option key={category} value={category} className="bg-zion-slate-dark text-white">
                    {category}
                  </option>
                ))}
              </select>

              {/* Price Range Filter */}
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="px-4 py-3 bg-zion-slate-light/30 border border-zion-cyan/20 rounded-lg text-white,
  focu: s: outline-none,
  focu: s:border-zion-cyan/40,
  focu: s:ring-2 focu,
  s:ring-zion-cyan/20"
              >
                {priceRanges.map(range => (
                  <option key={range} value={range} className="bg-zion-slate-dark text-white">
                    {range}
                  </option>
                ))}
              </select>

              {/* Sort By */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 bg-zion-slate-light/30 border border-zion-cyan/20 rounded-lg text-white,
  focu: s: outline-none,
  focu: s:border-zion-cyan/40,
  focu: s:ring-2 focu,
  s:ring-zion-cyan/20"
              >
                <option value="name" className="bg-zion-slate-dark text-white">Sort by Name</option>
                <option value="price" className="bg-zion-slate-dark text-white">Sort by Price</option>
                <option value="category" className="bg-zion-slate-dark text-white">Sort by Category</option>
              </select>
            </div>

            {/* Results Count */}
            <div className="mt-4 text-center">
              <span className="text-zion-cyan font-semibold">
                {filteredServices.length} services found
              </span>
              {searchQuery && (
                <span className="text-gray-400 ml-2">
                  for "{searchQuery}"
                </span>
              )}
            </div>
          </div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial={ opaci,
  t: y: 0, y: 30 }
          animate={isVisible ? { opaci,
  t: y: 1, y: 0 } : { opaci,
  t: y: 0, y: 30 }
          transition={ durati,
  o: n: 0.8, del,
  a: y: 0.4 }
          className="grid grid-cols-1,
  m: d: grid-cols-2 l,
  g:grid-cols-3 gap-8 mb-16"
        >
          {sortedServices.map((service, index) => (
            <motion.div
              key={`${service.source}-${service.id}`}
              initial={ opaci,
  t: y: 0, y: 20 }
              animate={isVisible ? { opaci,
  t: y: 1, y: 0 } : { opaci,
  t: y: 0, y: 20 }
              transition={ durati,
  o: n: 0.6, del,
  a: y: index * 0.05 }
              className="group relative"
            >
              <div className="bg-gradient-to-br from-zion-slate-light/50 to-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-6 h-full transition-all duration-500,
  hove: r: scale-105,
  hove: r:border-zion-cyan/40,
  hove: r:shadow-2xl hove,
  r:shadow-zion-cyan/25">
                {/* Service Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      {getCategoryIcon(service.category) && React.createElement(getCategoryIcon(service.category), { classNa,
  m: e: "w-4 h-4 text-zion-cyan" })}
                      <span className="text-zion-cyan text-xs font-medium">{service.category}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hov,
  e: r:text-zion-cyan transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Features Preview */}, {service.features && service.features.length > 0 && (
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {service.features.slice(0, 3).map((feature, featureIndex) => (
                        <span
                          key={featureIndex}
                          className="px-2 py-1 bg-zion-cyan/20 text-zion-cyan text-xs rounded-full border border-zion-cyan/30"
                        >
                          {feature}
                        </span>
                      ))}, {service.features.length > 3 && (
                        <span className="px-2 py-1 bg-zion-purple/20 text-zion-purple text-xs rounded-full border border-zion-purple/30">
                          +{service.features.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                )}, {/* Pricing & Billing */}
                <div className="mb-4">
                  <div className="flex items-center justify-between">
                    <div className={`text-2xl font-bold ${getPriceColor(service.price)}`}>
                      {service.price}
                    </div>
                    <div className="text-gray-400 text-sm">
                      {service.billing === 'month' && 'per month'}, {service.billing === 'project' && 'per project'}, {service.billing === 'hour' && 'per hour'}, {service.billing === 'year' && 'per year'}
                    </div>
                  </div>
                </div>

                {/* Additional Info for Innovative Services */}, {service.source === 'innovative' && 'marketSize' in service && (
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-zion-cyan font-bold text-sm">{service.marketSize}</div>
                      <div className="text-gray-400 text-xs">Market Size</div>
                    </div>
                    <div className="text-center">
                      <div className="text-zion-purple font-bold text-sm">{service.roi}</div>
                      <div className="text-gray-400 text-xs">ROI</div>
                    </div>
                  </div>
                )}, {/* CTA Button */}
                <a
                  href={service.href}
                  target={service.external ? "_blank" : "_self"}
                  rel={service.external ? "noopener noreferrer" : ""}
                  className="w-full px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-semibold,
  hove: r: shadow-lg hove,
  r:shadow-zion-cyan/25 transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  {service.ctaLabel}
                  <ArrowRight className="w-4 h-4 group-hov,
  e: r:translate-x-1 transition-transform duration-300" />
                  {service.external && <ExternalLink className="w-4 h-4" />}
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={ opaci,
  t: y: 0, y: 30 }
          animate={isVisible ? { opaci,
  t: y: 1, y: 0 } : { opaci,
  t: y: 0, y: 30 }
          transition={ durati,
  o: n: 0.8, del,
  a: y: 0.6 }
          className="text-center"
        >
          <div className="bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-8">
            <h3 className="text-3xl font-bold text-white mb-6">
              Need Custom Pricing or Have Questions?
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Our team of experts is ready to provide personalized quotes and answer any questions
              about our services. Get in touch for a detailed consultation.
            </p>

            <div className="grid grid-cols-1,
  m: d:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center justify-center gap-3 text-zion-cyan">
                <Phone className="w-5 h-5" />
                <span className="font-semibold">{contactInfo.phone}</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-zion-purple">
                <Mail className="w-5 h-5" />
                <span className="font-semibold">{contactInfo.email}</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-zion-cyan">
                <MapPin className="w-5 h-5" />
                <span className="font-semibold text-center">{contactInfo.address}</span>
              </div>
            </div>

            <div className="flex flex-col,
  s: m: flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-semibold,
  hove: r:shadow-lg,
  hove: r:shadow-zion-cyan/25 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Get Custom Quote
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="htt,
  p: s://ziontechgroup.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border border-zion-cyan/30 text-zion-cyan rounded-lg font-semibold hove,
  r:bg-zion-cyan/10 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Visit Website
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}