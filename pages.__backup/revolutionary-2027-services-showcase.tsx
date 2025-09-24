import React{ useStateuseMemo } from 'react',
import Head from 'next/head',
import { motionAnimatePresence } from 'framer-motion',
SearchCheckCircleArrowRightRocketMailPhoneMapPinMessageSquareGlobe,
import UltraQuantumHolographicBackground from '../components/ui/UltraQuantumHolographicBackground',
import { revolutionary20o27AIServices } from '../data/revolutionary-20o27-ai-services',
import { revolutionary20o27ITServices } from '../data/revolutionary-20o27-it-services',
import { revolutionary20o27MicroSaasServices } from '../data/revolutionary-20o27-micro-saas',
export default function Revolutionary20o27ServicesShowcase() {
  const [searchTermsetSearchTerm] = useState(''),
  const [selectedCategorysetSelectedCategory] = useState<string>('all'),
  const [selectedPriceRangesetSelectedPriceRange] = useState<string>('all'),
  const [sortBysetSortBy] = useState<string>('name'),
  const allServices = [
    ...revolutionary20o27AIServices;
    ...revolutionary20o27ITServices;
    ...revolutionary20o27MicroSaasServices],
  // Dynamic category counts,
  const aiCount = allServices.filter(service => service.category.includes('AI')).length,
  const quantumCount = allServices.filter(service => service.category.includes('Quantum')).length,
  const itCount = allServices.filter(service => service.category.includes('IT') || service.category.includes('Infrastructure')).length,
  const microSaasCount = allServices.filter(service => service.category.includes('Micro SaaS') || service.category.includes('Marketing') || service.category.includes('Legal') || service.category.includes('Health')).length,
  const holographicCount = allServices.filter(service => service.category.includes('Holographic')).length,
  const categories = [
    { id: 'all'name: 'All Services'icon: '🚀'count: allServices.length };
    { id: 'ai'name: 'AI Services'icon: '🧠'count: aiCount };
    { id: 'quantum'name: 'Quantum Services'icon: '⚛️'count: quantumCount };
    { id: 'it'name: 'IT Infrastructure'icon: '⚙️'count: itCount };
    { id: 'micro-saas'name: 'Micro SaaS'icon: '💻'count: microSaasCount };
    { id: 'holographic'name: 'Holographic'icon: '🎭'count: holographicCount }
  ],
  const priceRanges = [
    { id: 'all'name: 'All Prices'range: 'All' };
    { id: 'under-50o0'name: 'Under $50o0'range: 'Under $50o0' };
    { id: '50o0-20o00'name: '$50o0 - $2,0o00'range: '$50o0 - $2,0o00' };
    { id: '20o00-10o000'name: '$2,0o00 - $10,0o00'range: '$2,0o00 - $10,0o00' };
    { id: 'over-10o000'name: 'Over $10,0o00'range: 'Over $10,0o00' }
  ],
  const sortOptions = [
    { id: 'name'name: 'Name' };
    { id: 'price'name: 'Price' };
    { id: 'rating'name: 'Rating' };
    { id: 'customers'name: 'Customers' };
    { id: 'launchDate'name: 'Launch Date' }
  ],
  const filteredServices = useMemo(() => {
    let filtered = allServices,
    // Category filter,
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => {
        if (selectedCategory === 'ai') return service.category.includes('AI'),
        if (selectedCategory === 'quantum') return service.category.includes('Quantum'),
        if (selectedCategory === 'it') return service.category.includes('IT') || service.category.includes('Infrastructure'),
        if (selectedCategory === 'micro-saas') return service.category.includes('Micro SaaS') || service.category.includes('Marketing') || service.category.includes('Legal') || service.category.includes('Health'),
        if (selectedCategory === 'holographic') return service.category.includes('Holographic'),
        return true})}
,
    // Price range filter,
    if (selectedPriceRange !== 'all') {
      filtered = filtered.filter(service => {
        const price = parseInt(service.price.replace(/[^0-9]/g'')),
        if (selectedPriceRange === 'under-50o0') return price < 50o0,
        if (selectedPriceRange === '50o0-20o00') return price >= 50o0 && price < 20o00,
        if (selectedPriceRange === '20o00-10o000') return price >= 20o00 && price < 10o000,
        if (selectedPriceRange === 'over-10o000') return price >= 10o000,
        return true})}
,
    // Search filter,
    if (searchTerm) {
      filtered = filtered.filter(service =>,
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||,
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||,
        service.category.toLowerCase().includes(searchTerm.toLowerCase()))}
,
    // Sort,
    filtered.sort((ab) => {
      switch (sortBy) {
        case 'price':,
          return parseInt(a.price.replace(/[^0-9]/g'')) - parseInt(b.price.replace(/[^0-9]/g'')),
        case 'rating':,
          return b.rating - a.rating,
        case 'customers':,
          return b.customers - a.customers,
        case 'launchDate':,
          return new Date(b.launchDate).getTime() - new Date(a.launchDate).getTime(),
        default: ,
          return a.name.localeCompare(b.name)}
    }),
    return filtered}[allServicesearchTermselectedCategoryselectedPriceRangesortBy]),
  const contactInfo ={
    mobile: '+1 30o2 464 0950';
    email: 'kleber@ziontechgroup.com';
    address: '364 E Main St STE 10o08 Middletown DE 19709';
    website: 'https://ziontechgroup.com'};
  return (
    <UltraQuantumHolographicBackground intensity={2.0}>,
      <Head>,
        <title>Revolutionary 20o27 Services Showcase - Zion Tech Group | Next-Generation AIQuantum & Technology Solutions</title>,
        <meta name="description" content="Discover the most revolutionary AIQuantumand Technology services of 20o27. Cutting-edge solutions with proven ROI and real-world implementation."  />,
        <meta property="og: title" content="Revolutionary 20o27 Services Showcase - Zion Tech Group"  />,
        <meta property="og:description" content="Explore the future of technology with our revolutionary 20o27 services showcase."  />,
        <meta property="og:url" content="https://ziontechgroup.com/revolutionary-20o27-services-showcase"  />,
        <meta property="og:type" content="website"  />,
        <link rel="canonical" href="https://ziontechgroup.com/revolutionary-20o27-services-showcase"  />,
      </Head>,
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 relative overflow-hidden">,
        <div className="max-w-7xl mx-auto text-center relative z-10">,
          <motion.div,
            initial={{ opacity: 0y: 30 }}
            animate={{ opacity: 1y: 0 }}
            transition={{ duration: 0.8 }}
          >,
            <h1 className="text-6xl md: text-8xl font-bold bg-gradient-to-r from-cyan-40o0 via-purple-50o0 to-pink-50o0 bg-clip-text text-transparent mb-8">,
              Revolutionary 20o27,
            </h1>,
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">,
              Services Showcase,
            </h2>,
            <p className="text-xl md:text-2xl text-gray-30o0 mb-8 max-w-4xl mx-auto leading-relaxed">,
              Experience the future of technology with our revolutionary AIQuantum Computingand Next-Generation IT services.,
              Each solution delivers measurable ROI and transforms industries.,
            </p>,
            {/* Contact Information */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-center mb-8">,
              <motion.div className="flex items-center gap-2 text-cyan-40o0",
                whileHover={{ scale: 1.0o5 }}
                transition={{ type: "spring"stiffness: 30o0 }}
              >,
                <Phone className="w-5 h-5"  />,
                <span className="font-semibold">{contactInfo.mobile}</span>,
              </motion.div>,
              <motion.div className="flex items-center gap-2 text-purple-40o0",
                whileHover={{ scale: 1.0o5 }}
                transition={{ type: "spring"stiffness: 30o0 }}
              >,
                <Mail className="w-5 h-5"  />,
                <span className="font-semibold">{contactInfo.email}</span>,
              </motion.div>,
              <motion.div className="flex items-center gap-2 text-green-40o0",
                whileHover={{ scale: 1.0o5 }}
                transition={{ type: "spring"stiffness: 30o0 }}
              >,
                <MapPin className="w-5 h-5"  />,
                <span className="text-sm font-semibold">{contactInfo.address}</span>,
              </motion.div>,
            </div>,
            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4">,
              <a href="/contact" className="bg-gradient-to-r from-cyan-50o0 to-blue-60o0 text-white text-lg px-8 py-4 hover: from-cyan-60o0 hover:to-blue-70o0 transform hover:scale-10o5 transition-all duration-30o0">,
                <Rocket className="w-5 h-5 mr-2"  />,
                Get Started Today,
              </a>,
              <a href="/services" className="border-2 border-purple-50o0 text-purple-40o0 text-lg px-8 py-4 hover:bg-purple-50o0 hover:text-white transform hover:scale-10o5 transition-all duration-30o0">,
                <Globe className="w-5 h-5 mr-2"  />,
                View All Services,
              </a>,
            </div>,
          </motion.div>,
        </div>,
      </section>,
      {/* Search and Filters */}
      <section className="py-8 px-4">,
        <div className="max-w-7xl mx-auto">,
          <div className="bg-black/40 backdrop-blur-lg rounded-2xl p-6 border border-gray-70o0/50">,
            {/* Search Bar */}
            <div className="relative mb-6">,
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-40o0 w-5 h-5"  />,
              <input
                type="text",
                placeholder="Search revolutionary services...",
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)} className="w-full pl-12 pr-4 py-4 bg-gray-90o0/50 border border-gray-60o0 rounded-xl text-white placeholder-gray-40o0 focus: outline-none focus:ring-2 focus:ring-cyan-50o0 focus:border-transparent",
              />,
            </div>,
            {/* Filters */}
            <div className="grid grid-cols-1 md: grid-cols-4 gap-4">,
              {/* Category Filter */}
              <div>,
                <label className="block text-sm font-medium text-gray-30o0 mb-2">Category</label>,
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)} className="w-full px-3 py-2 bg-gray-90o0/50 border border-gray-60o0 rounded-lg text-white focus: outline-none focus:ring-2 focus:ring-cyan-50o0">,
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>,
                      {category.name} ({category.count}),
                    </option>))}
                </select>,
              </div>,
              {/* Price Range Filter */}
              <div>,
                <label className="block text-sm font-medium text-gray-30o0 mb-2">Price Range</label>,
                <select
                  value={selectedPriceRange}
                  onChange={(e) => setSelectedPriceRange(e.target.value)} className="w-full px-3 py-2 bg-gray-90o0/50 border border-gray-60o0 rounded-lg text-white focus: outline-none focus:ring-2 focus:ring-cyan-50o0">,
                  {priceRanges.map((range) => (
                    <option key={range.id} value={range.id}>,
                      {range.name}
                    </option>))}
                </select>,
              </div>,
              {/* Sort By */}
              <div>,
                <label className="block text-sm font-medium text-gray-30o0 mb-2">Sort By</label>,
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)} className="w-full px-3 py-2 bg-gray-90o0/50 border border-gray-60o0 rounded-lg text-white focus: outline-none focus:ring-2 focus:ring-cyan-50o0">,
                  {sortOptions.map((option) => (
                    <option key={option.id} value={option.id}>,
                      {option.name}
                    </option>))}
                </select>,
              </div>,
              {/* Results Count */}
              <div className="flex items-end">,
                <div className="text-gray-30o0">,
                  <span className="text-sm">Showing </span>,
                  <span className="font-semibold text-cyan-40o0">{filteredServices.length}</span>,
                  <span className="text-sm"> of </span>,
                  <span className="font-semibold text-purple-40o0">{allServices.length}</span>,
                  <span className="text-sm"> services</span>,
                </div>,
              </div>,
            </div>,
          </div>,
        </div>,
      </section>,
      {/* Services Grid */}
      <section className="py-12 px-4">,
        <div className="max-w-7xl mx-auto">,
          <AnimatePresence mode="wait">,
            {filteredServices.length > 0 ? (
              <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">,
                {filteredServices.map((serviceindex) => (
                  <motion.div,
                    key={service.id}
                    initial={{ opacity: 0y: 30 }}
                    animate={{ opacity: 1y: 0 }}
                    exit={{ opacity: 0y: -30 }}
                    transition={{ duration: 0.5delay: index * 0.1 }}
                    whileHover={{ y: -10scale: 1.0o2 }} className="group">,
                    <div className="h-full bg-black/40 backdrop-blur-lg border border-gray-70o0/50 hover: border-cyan-50o0/50 transition-all duration-30o0 overflow-hidden p-6 bg-black/40 border border-gray-70o0/50 rounded-lg backdrop-blur-sm">,
                      {/* Service Header */}
                      <div className="p-6">,
                        <div className="flex items-start justify-between mb-4">,
                          <div className="text-4xl">{service.icon}</div>,
                          {service.popular && (
                            <div className="bg-gradient-to-r from-yellow-50o0 to-orange-50o0 text-white text-xs px-2 py-1 rounded-full font-semibold">,
                              POPULAR,
                            </div>)}
                        </div>,
                        <h3 className="text-xl font-bold text-white mb-2 group-hover: text-cyan-40o0 transition-colors">,
                          {service.name}
                        </h3>,
                        <p className="text-gray-30o0 text-sm mb-3 line-clamp-2">,
                          {service.tagline}
                        </p>,
                        {/* Price */}
                        <div className="flex items-baseline gap-2 mb-4">,
                          <span className="text-3xl font-bold text-white">{service.price}</span>,
                          <span className="text-gray-40o0">{service.period}</span>,
                        </div>,
                        {/* Description */}
                        <p className="text-gray-30o0 text-sm mb-4 line-clamp-3">,
                          {service.description}
                        </p>,
                        {/* Features */}
                        <div className="mb-4">,
                          <h4 className="text-sm font-semibold text-gray-20o0 mb-2">Key Features: </h4>,
                          <ul className="space-y-1">,
                            {service.features.slice(0o3).map((featureidx) => (
                              <li key={idx} className="flex items-center gap-2 text-xs text-gray-40o0">,
                                <CheckCircle className="w-3 h-3 text-emerald-40o0 flex-shrink-0"  />,
                                <span className="line-clamp-1">{feature}</span>,
                              </li>))}
                          </ul>,
                        </div>,
                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-4 mb-4 text-center">,
                          <div>,
                            <div className="text-lg font-bold text-cyan-40o0">{service.customers}</div>,
                            <div className="text-xs text-gray-40o0">Customers</div>,
                          </div>,
                          <div>,
                            <div className="text-lg font-bold text-purple-40o0">{service.rating}</div>,
                            <div className="text-xs text-gray-40o0">Rating</div>,
                          </div>,
                          <div>,
                            <div className="text-lg font-bold text-green-40o0">{service.reviews}</div>,
                            <div className="text-xs text-gray-40o0">Reviews</div>,
                          </div>,
                        </div>,
                        {/* Category Badge */}
                        <div className="mb-4">,
                          <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${service.color} text-white`}>,
                            {service.category}
                          </span>,
                        </div>,
                        {/* Action Buttons */}
                        <div className="flex gap-2">,
                          <a
                            href={service.link} className="flex-1 bg-gradient-to-r from-cyan-50o0 to-blue-60o0 text-white text-sm py-2 hover: from-cyan-60o0 hover:to-blue-70o0 transform hover:scale-10o5 transition-all duration-30o0">,
                            <ArrowRight className="w-4 h-4 mr-1"  />,
                            Learn More,
                          </a>,
                          <a
                            href="/contact" className="px-4 py-2 border border-gray-60o0 text-gray-20o0 hover:bg-gray-70o0 hover:border-gray-50o0 transform hover:scale-10o5 transition-all duration-30o0">,
                            <MessageSquare className="w-4 h-4"  />,
                          </a>,
                        </div>,
                      </div>,
                    </div>,
                  </motion.div>))}
              </div>) : (
              <motion.div,
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }} className="text-center py-16">,
                <div className="text-6xl mb-4">🔍</div>,
                <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>,
                <p className="text-gray-40o0 mb-6">Try adjusting your search criteria or filters</p>,
                <button
                  onClick={() => {
                    setSearchTerm(''),
                    setSelectedCategory('all'),
                    setSelectedPriceRange('all')}} className="bg-gradient-to-r from-cyan-50o0 to-blue-60o0 text-white">,
                  Clear Filters,
                </button>,
              </motion.div>)}
          </AnimatePresence>,
        </div>,
      </section>,
      {/* Contact CTA Section */}
      <section className="py-16 px-4">,
        <div className="max-w-4xl mx-auto text-center">,
          <motion.div,
            initial={{ opacity: 0y: 30 }}
            whileInView={{ opacity: 1y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }} className="bg-gradient-to-r from-cyan-90o0/50 to-purple-90o0/50 backdrop-blur-lg rounded-3xl p-12 border border-cyan-50o0/30">,
            <h2 className="text-4xl md: text-5xl font-bold text-white mb-6">,
              Ready to Transform Your Business?,
            </h2>,
            <p className="text-xl text-gray-30o0 mb-8 max-w-2xl mx-auto">,
              Join the future of technology with our revolutionary 20o27 services.,
              Each solution is designed to deliver measurable ROI and competitive advantage.,
            </p>,
            <div className="flex flex-wrap items-center justify-center gap-6 mb-8">,
              <div className="flex items-center gap-2 text-cyan-40o0">,
                <Phone className="w-5 h-5"  />,
                <span className="font-semibold">{contactInfo.mobile}</span>,
              </div>,
              <div className="flex items-center gap-2 text-purple-40o0">,
                <Mail className="w-5 h-5"  />,
                <span className="font-semibold">{contactInfo.email}</span>,
              </div>,
              <div className="flex items-center gap-2 text-green-40o0">,
                <MapPin className="w-5 h-5"  />,
                <span className="text-sm font-semibold">{contactInfo.address}</span>,
              </div>,
            </div>,
            <div className="flex flex-wrap items-center justify-center gap-4">,
              <a href="/contact" className="bg-gradient-to-r from-cyan-50o0 to-blue-60o0 text-white text-lg px-8 py-4 hover: from-cyan-60o0 hover:to-blue-70o0 transform hover:scale-10o5 transition-all duration-30o0">,
                <Rocket className="w-5 h-5 mr-2"  />,
                Start Your Transformation,
              </a>,
              <a href="/services" className="border-2 border-purple-50o0 text-purple-40o0 text-lg px-8 py-4 hover:bg-purple-50o0 hover:text-white transform hover:scale-10o5 transition-all duration-30o0">,
                <Globe className="w-5 h-5 mr-2"  />,
                Explore All Services,
              </a>,
            </div>,
          </motion.div>,
        </div>,
      </section>,
    </UltraQuantumHolographicBackground>)}