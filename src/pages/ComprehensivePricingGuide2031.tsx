import {
  CheckCircle,
  X,
  Star,
  TrendingUp,
  DollarSign,
  Clock,
  Target,
  Award,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  Globe,
  ArrowRight,
  Search,
  Filter,
  ChevronDown,
  ChevronUp,
  Shield,
  Brain,
  Cloud,
  Zap,
  Users,
  Lock,
  Heart,
  BarChart3,
  Cpu,
  Network,
  ShoppingCart,
  MessageCircle,
  Eye,
  Leaf,
  Gamepad2,
  Coins,
  Satellite,
  Server,
  Smartphone,
  Database,
  Code,
  BookOpen,
  Truck} from 'lucide-react';
const ComprehensivePricingGuide2031: React.FC = () => {

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [expandedService, setExpandedService] = useState<string | null>(null);
  const [selectedTier, setSelectedTier] = useState<string>('Professional');

  
    return cats}, []) ;

  
    if (searchQuery) {

      filtered = filtered.filter()
        service =>
          service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          service.description
            .toLowerCase()
            .includes(searchQuery.toLowerCase()) ||
          service.category.toLowerCase().includes(searchQuery.toLowerCase())
      )}

    if (selectedCategory !== 'All') {

      filtered = filtered.filter()
        service => service.category === selectedCategory
      )}

    return filtered}, [searchQuery, selectedCategory]) ;

  
    return iconMap[category] || Globe};

  
    return colorMap[level] || 'from-gray-500 to-slate-500'}};

  
    return colorMap[tierName] || 'from-gray-500 to-slate-500'};
  return()
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}"
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">"
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >"
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Comprehensive Pricing Guide"
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                2031
              </span>
            </h1>"
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Complete pricing information for Zion Tech Group's revolutionary
              AI-powered micro SAAS solutions, quantum computing platforms, and
              autonomous business systems.
            </p>"
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">"
              <div className="flex items-center gap-2">"
                <Star className="w-5 h-5 text-yellow-400"  />
                <span>12+ Revolutionary Services</span>
              </div>"
              <div className="flex items-center gap-2">"
                <TrendingUp className="w-5 h-5 text-green-400"  />
                <span>40%+ Annual Growth</span>
              </div>"
              <div className="flex items-center gap-2">"
                <DollarSign className="w-5 h-5 text-blue-400"  />                <span>Competitive Pricing</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Banner */}"
      <section className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border-y border-cyan-400/20 py-6">"
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">"
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">"
            <div className="flex items-center gap-6 text-white">"
              <div className="flex items-center gap-2">"
                <Phone className="w-5 h-5 text-cyan-400"  />
                <span>+1 302 464 0950</span>
              </div>"
              <div className="flex items-center gap-2">"
                <Mail className="w-5 h-5 text-cyan-400"  />
                <span>kleber@ziontechgroup.com</span>
              </div>"
              <div className="flex items-center gap-2">"
                <MapPin className="w-5 h-5 text-cyan-400"  />                <span>364 E Main St STE 1008 Middletown DE 19709</span>
              </div>
            </div>
            <a"
              href="https://ziontechgroup.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <span>Visit Website</span>"
              <Globe className="w-4 h-4"  />            </a>
          </div>
        </div>
      </section>

      {/* Filters and Search */}"
      <section className="py-8 px-4 sm:px-6 lg:px-8">"
        <div className="max-w-7xl mx-auto">"
          <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
            {/* Search */}"
            <div className="relative flex-1 max-w-md">"
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"  />
              <input"
                type="text""                placeholder="Search services..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}"
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-cyan-400/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}"
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${

                    selectedCategory === category'
                      ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25''
                      : 'bg-white/10 text-gray-300 hover:bg-white/20 border border-cyan-400/20'`
                  }`}
                >
                  {category}
                </button>) ) }
            </div>

            {/* Tier Selector */}"
            <div className="flex items-center gap-2">"
              <span className="text-gray-400 text-sm">Pricing Tier:</span>
              <select
                value={selectedTier}
                onChange={e => setSelectedTier(e.target.value)}"
                className="bg-white/10 border border-cyan-400/20 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
              >"
                <option value="Starter">Starter</option>"
                <option value="Basic">Basic</option>"
                <option value="Creator">Creator</option>"
                <option value="Student">Student</option>"
                <option value="Professional">Professional</option>"
                <option value="Enterprise">Enterprise</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}"
      <section className="py-12 px-4 sm:px-6 lg:px-8">"
        <div className="max-w-7xl mx-auto">"
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredServices.map(service => {

              
              
              return()                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}"
                  className="bg-white/5 backdrop-blur-sm border border-cyan-400/20 rounded-2xl overflow-hidden hover:border-cyan-400/40 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  {/* Service Header */}"
                  <div className="p-6">"
                    <div className="flex items-start justify-between mb-4">"
                      <div className="flex items-center gap-3">
                        <div`
                          className={`p-2 rounded-lg bg-gradient-to-r ${getInnovationColor(service.innovationLevel)}`}
                        >"
                          <CategoryIcon className="w-6 h-6 text-white"  />                        </div>
                        <div>"
                          <span className="inline-block px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full mb-2">
                            {service.innovationLevel}
                          </span>"
                          <h3 className="text-xl font-bold text-white">
                            {service.name}
                          </h3>
                        </div>
                      </div>
                      <button
                        onClick={() => toggleServiceExpansion(service.id)}"
                        className="text-cyan-400 hover:text-cyan-300 transition-colors"
                      >
                        {expandedService === service.id ? ("
                          <ChevronUp className="w-5 h-5"  />
                        ) : ("
                          <ChevronDown className="w-5 h-5"  />                        )}
                      </button>
                    </div>
"
                    <p className="text-gray-300 mb-4 line-clamp-3">
                      {service.description}
                    </p>

                    {/* Pricing Tiers */}"
                    <div className="mb-4">"
                      <div className="flex flex-wrap gap-2 mb-3">
                        {service.pricingTiers.map(tier => (
                          <button
                            key={tier.name}
                            onClick={() => setSelectedTier(tier.name)}`
                            className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${

                              selectedTier === tier.name`
                                ? `bg-gradient-to-r ${getTierColor(tier.name)} text-white shadow-lg`'
                                : 'bg-white/10 text-gray-300 hover:bg-white/20'`
                            }`}
                          >
                            {tier.name}
                          </button>) ) }
                      </div>

                      {/* Selected Tier Pricing */}"
                      <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/20 rounded-lg p-4">"
                        <div className="flex items-center justify-between mb-2">"
                          <div className="text-2xl font-bold text-white">
                            ${selectedPricingTier.price.toLocaleString()}
                          </div>"
                          <div className="text-right">"
                            <div className="text-sm text-gray-400">
                              {selectedPricingTier.billing}
                            </div>
                            {selectedPricingTier.popular && ("
                              <span className="inline-block px-2 py-1 bg-yellow-500/20 text-yellow-400 text-xs rounded-full">
                                Popular
                              </span>) }
                          </div>
                        </div>"
                        <div className="text-sm text-gray-300 mb-3">
                          {selectedPricingTier.bestFor}
                        </div>
                      </div>
                    </div>

                    {/* Market Info */}"
                    <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                      <div>"
                        <div className="text-gray-400">Market Price</div>"
                        <div className="text-white font-medium">
                          {service.marketPrice}
                        </div>
                      </div>
                      <div>"
                        <div className="text-gray-400">ROI</div>"
                        <div className="text-green-400 font-medium">
                          {service.roi}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Expanded Content */}
                  {expandedService === service.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}"
                      className="border-t border-cyan-400/20 bg-white/5"
                    >"
                      <div className="p-6 space-y-6">
                        {/* Features */}
                        <div>"
                          <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">"
                            <CheckCircle className="w-5 h-5 text-green-400"  />                            Features - {selectedPricingTier.name} Tier
                          </h4>"
                          <div className="grid grid-cols-1 gap-2">
                            {selectedPricingTier.features.map()
                              (feature, index) => (
                                <div
                                  key={index}"
                                  className="flex items-start gap-2 text-sm text-gray-300"
                                >"
                                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                                  <span>{feature}</span>
                                </div>
                              )
                            )}
                          </div>
                        </div>

                        {/* Limitations */}
                        <div>"
                          <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">"
                            <X className="w-5 h-5 text-red-400"  />                            Limitations - {selectedPricingTier.name} Tier
                          </h4>"
                          <div className="grid grid-cols-1 gap-2">
                            {selectedPricingTier.limitations.map()
                              (limitation, index) => (
                                <div
                                  key={index}"
                                  className="flex items-start gap-2 text-sm text-gray-300"
                                >"
                                  <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                                  <span>{limitation}</span>
                                </div>
                              )
                            )}
                          </div>
                        </div>

                        {/* Additional Info */}"
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>"
                            <div className="text-gray-400">Setup Time</div>"
                            <div className="text-white font-medium">
                              {service.setupTime}
                            </div>
                          </div>
                          <div>"
                            <div className="text-gray-400">Market Size</div>"
                            <div className="text-white font-medium">
                              {service.marketSize}
                            </div>
                          </div>
                          <div>"
                            <div className="text-gray-400">Growth Rate</div>"
                            <div className="text-green-400 font-medium">
                              {service.growthRate}
                            </div>
                          </div>
                          <div>"
                            <div className="text-gray-400">Free Tier</div>
                            <div'`
                              className={`font-medium ${service.freeTier ? 'text-green-400' : 'text-red-400'}`}
                            >
                              {service.freeTier ? 'Yes' : 'No'}
                            </div>
                          </div>
                        </div>

                        {/* Competitors */}
                        <div>"
                          <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">"
                            <Target className="w-5 h-5 text-purple-400"  />                            Market Competitors
                          </h4>"
                          <div className="flex flex-wrap gap-2">
                            {service.competitors.map((competitor, index) => (
                              <span
                                key={index}"
                                className="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full"
                              >
                                {competitor}
                              </span>) ) }
                          </div>
                        </div>

                        {/* CTA Button */}"
                        <div className="pt-4">
                          <a`
                            href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.name} - ${selectedPricingTier.name} Tier`}"
                            className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold py-3 px-6 rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 flex items-center justify-center gap-2 group"
                          >
                            <span>
                              Get Started - {selectedPricingTier.name} Tier
                            </span>"
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform"  />
                          </a>
                        </div>
                      </div>
                    </motion.div>) }
                </motion.div>) }) }          </div>

          {filteredServices.length === 0 && ("
            <div className="text-center py-20">"
              <div className="text-gray-400 text-xl mb-4">
                No services found
              </div>"
              <p className="text-gray-500">
                Try adjusting your search criteria or category filter.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Contact CTA Section */}"
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500/10 to-blue-500/10">"
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >"
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>"
            <p className="text-xl text-gray-300 mb-8">
              Our comprehensive pricing guide shows the incredible value of Zion'
              Tech Group's cutting-edge AI solutions. Contact us today to
              discuss your specific needs and get a customized proposal.
            </p>"
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a"
                href="mailto:kleber@ziontechgroup.com?subject=Inquiry about Zion Tech Group Services - Pricing Guide 2031"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold py-4 px-8 rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 flex items-center justify-center gap-2 group"
              >"
                <Mail className="w-5 h-5"  />
                <span>Get Custom Quote</span>"
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform"  />              </a>
              <a"
                href="tel:+13024640950"
                className="bg-white/10 border border-cyan-400/20 text-white font-semibold py-4 px-8 rounded-lg hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2"
              >"
                <Phone className="w-5 h-5"  />                <span>Call Now</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>) };
export default ComprehensivePricingGuide2031;
'"`