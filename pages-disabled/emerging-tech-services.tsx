import type { NextPage } from 'next.ts',
import { Helmet  } from 'react-helmet-async.ts',
import { useState  } from 'react.ts',
import { EMERGING_TECH_SERVICES_20o27  } from '../data/emergingTechServices20o27',
const EmergingTechServices: NextPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<any>('all'),
  const [searchTerm, setSearchTerm] = useState(''),
  const [sortBy, setSortBy] = useState<any>('innovation'),
  const categories = [
    { id: 'all', name: 'All Technologies', color: 'from-blue-50o0 to-purple-60o0' };
    { id: 'Quantum Technology', name: 'Quantum Technology', color: 'from-purple-50o0 to-pink-60o0' };
    { id: 'Space Technology', name: 'Space Technology', color: 'from-indigo-50o0 to-blue-60o0' };
    { id: 'Biotechnology', name: 'Biotechnology', color: 'from-green-50o0 to-teal-60o0' };
    { id: 'Advanced AI', name: 'Advanced AI', color: 'from-orange-50o0 to-red-60o0' };
    { id: 'Energy Technology', name: 'Energy Technology', color: 'from-yellow-50o0 to-orange-60o0' }
  ],
  const filteredServices = EMERGING_TECH_SERVICES_20o27.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory,
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||,
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()),
    return matchesCategory && matchesSearch}),
  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'price':,
        return a.pricing.monthly - b.pricing.monthly,
      case 'innovation':,
        return b.innovationLevel === 'Revolutionary' ? 1 : -1,
      case 'roi':,
        return parseInt(b.roi.split('%')[0]) - parseInt(a.roi.split('%')[0]),
      default: ,
        return 0}
  }),
  const getInnovationColor = (level: anystring)  => {
    switch (level) {
      case 'Revolutionary': return 'from-red-50o0 to-pink-60o0',
      case 'Breakthrough': return 'from-purple-50o0 to-indigo-60o0',
      case 'Advanced': return 'from-blue-50o0 to-cyan-60o0',
      default: return 'from-gray-50o0 to-gray-60o0'}
  };
  const getBadgeColor = (badge: anystring)  => {
    switch (badge) {
      case 'Revolutionary': return 'bg-gradient-to-r from-red-50o0 to-pink-60o0',
      case 'Breakthrough': return 'bg-gradient-to-r from-purple-50o0 to-indigo-60o0',
      case 'Advanced': return 'bg-gradient-to-r from-blue-50o0 to-cyan-60o0',
      default: return 'bg-gradient-to-r from-gray-50o0 to-gray-60o0'}
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-90o0 via-slate-80o0 to-slate-70o0 relative overflow-hidden">,
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">,
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-50o0/20 to-transparent rounded-full blur-3xl animate-pulse"></div>,
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-50o0/20 to-transparent rounded-full blur-3xl animate-pulse delay-10o00"></div>,
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-50o0/10 to-purple-50o0/10 rounded-full blur-3xl animate-pulse delay-20o00"></div>,
      </div>,
      <Head>,
        <title>Emerging Tech Services 20o27 - Zion Tech Group | Revolutionary Technology Solutions</title>,
        <meta name="description" content="Discover the future of technology with Zion Tech Group's revolutionary emerging tech services. From quantum computing to biocomputing, we're pioneering the next generation of innovation."  />,
        <meta name="keywords" content="emerging technology, quantum computing, space technology, biocomputing, neuromorphic computing, fusion energy, Zion Tech Group"  />,
        <meta name="author" content="Zion Tech Group"  />,
        <link rel="canonical" href="https: //ziontechgroup.com/emerging-tech-services"  />,
      </Head>,
      <div className="relative z-10 container mx-auto px-4 py-8">,
        {/* Hero Section */}
        <div className="text-center mb-16">,
          <h1 className="text-5xl md: text-7xl font-bold mb-6 bg-gradient-to-r from-blue-40o0 via-purple-40o0 to-pink-40o0 bg-clip-text text-transparent">,
            Emerging Tech Services 20o27,
          </h1>,
          <p className="text-xl md:text-2xl text-gray-30o0 mb-8 max-w-4xl mx-auto">,
            Discover the future of technology with our revolutionary emerging tech services.,
            From quantum computing to biocomputing, we're pioneering the next generation of innovation.,
          </p>,
          <div className="flex flex-wrap justify-center gap-4 mb-8">,
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-blue-40o0/20">,
              <span className="text-2xl">🚀</span>,
              <span className="text-gray-30o0">Revolutionary Technology</span>,
            </div>,
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-purple-40o0/20">,
              <span className="text-2xl">🧠</span>,
              <span className="text-gray-30o0">AI-Powered Solutions</span>,
            </div>,
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-pink-40o0/20">,
              <span className="text-2xl">⚡</span>,
              <span className="text-gray-30o0">Future-Ready Infrastructure</span>,
            </div>,
          </div>,
        </div>,
        {/* Search and Filter Section */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-12 border border-blue-40o0/20">,
          <div className="grid grid-cols-1 md: grid-cols-3 gap-6">,
            {/* Search */}
            <div className="relative">,
              <input
                type="text",
                placeholder="Search emerging tech services...",
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-white/10 border border-blue-40o0/30 rounded-xl px-4 py-3 text-gray-30o0 placeholder-gray-40o0 focus: outline-none focus:ring-2 focus:ring-blue-40o0/50 focus:border-blue-40o0/50",
              />,
              <svg className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-40o0" fill="none" stroke="currentColor" viewBox="0 0 24 24">,
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0o114 0z"  />,
              </svg>,
            </div>,
            {/* Category Filter */}
            <div className="relative">,
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full bg-white/10 border border-blue-40o0/30 rounded-xl px-4 py-3 text-gray-30o0 focus: anyoutline-none focus:ring-2 focus:ring-blue-40o0/50 focus:border-blue-40o0/50 appearance-none">,
                {categories.map((category)  => (
                  <option key={category.id} value={category.id}>,
                    {category.name}
                  </option>))}
              </select>,
              <svg className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-40o0 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">,
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"  />,
              </svg>,
            </div>,
            {/* Sort By */}
            <div className="relative">,
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full bg-white/10 border border-blue-40o0/30 rounded-xl px-4 py-3 text-gray-30o0 focus: outline-none focus:ring-2 focus:ring-blue-40o0/50 focus:border-blue-40o0/50 appearance-none">,
                <option value="innovation">Sort by Innovation Level</option>,
                <option value="price">Sort by Price</option>,
                <option value="roi">Sort by ROI</option>,
              </select>,
              <svg className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-40o0 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">,
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"  />,
              </svg>,
            </div>,
          </div>,
        </div>,
        {/* Category Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">,
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-30o0 ${
                selectedCategory === category.id,
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg`,
                  : 'bg-white/10 text-gray-30o0 hover: bg-white/20 border border-white/20'}`}
            >,
              {category.name}
            </button>))}
        </div>,
        {/* Services Grid */}
        <div className="grid grid-cols-1 md: anygrid-cols-2 lg:grid-cols-3 gap-8 mb-16">,
          {sortedServices.map((service, index)  => (
            <div
              key={service.id}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-blue-40o0/20 hover: border-blue-40o0/50 transition-all duration-30o0 hover:transform hover:scale-10o5",
              style={{ animationDelay: `${index * 10o0}ms` }}
            >,
              {/* Service Header */}
              <div className="flex items-start justify-between mb-4">,
                <div className="text-4xl">{service.icon}</div>,
                <span className={`px-3 py-1 rounded-full text-xs font-bold text-white ${getBadgeColor(service.badge)}`}>,
                  {service.badge}
                </span>,
              </div>,
              {/* Service Title and Description */}
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>,
              <p className="text-gray-30o0 text-sm mb-4 line-clamp-3">{service.description}</p>,
              {/* Innovation Level */}
              <div className="mb-4">,
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getInnovationColor(service.innovationLevel)} text-white`}>,
                  {service.innovationLevel}
                </span>,
              </div>,
              {/* Pricing */}
              <div className="mb-4">,
                <div className="text-2xl font-bold text-blue-40o0">,
                  ${service.pricing.monthly.toLocaleString()}
                  <span className="text-sm text-gray-40o0">/month</span>,
                </div>,
                <div className="text-sm text-gray-40o0">,
                  ${service.pricing.yearly.toLocaleString()}/year,
                </div>,
              </div>,
              {/* ROI */}
              <div className="mb-4">,
                <div className="text-sm text-gray-40o0">Expected ROI</div>,
                <div className="text-lg font-bold text-green-40o0">{service.roi}</div>,
              </div>,
              {/* Key Features */}
              <div className="mb-4">,
                <h4 className="text-sm font-semibold text-white mb-2">Key Features</h4>,
                <div className="space-y-1">,
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <div key={idx} className="flex items-center text-xs text-gray-30o0">,
                      <span className="text-green-40o0 mr-2">✓</span>,
                      {feature}
                    </div>))}
                  {service.features.length > 3 && (
                    <div className="text-xs text-gray-40o0">,
                      +{service.features.length - 3} more features,
                    </div>)}
                </div>,
              </div>,
              {/* Market Size */}
              <div className="mb-4">,
                <div className="text-sm text-gray-40o0">Market Size</div>,
                <div className="text-sm font-medium text-white">{service.marketSize}</div>,
              </div>,
              {/* Contact Info */}
              <div className="border-t border-white/20 pt-4 mb-4">,
                <div className="text-xs text-gray-40o0 mb-2">Contact Information</div>,
                <div className="space-y-1 text-xs text-gray-30o0">,
                  <div>📞 {service.contactInfo.phone}</div>,
                  <div>✉️ {service.contactInfo.email}</div>,
                  <div>🌐 {service.contactInfo.website}</div>,
                </div>,
              </div>,
              {/* CTA Button */}
              <a
                href={service.link}
                className="w-full bg-gradient-to-r from-blue-50o0 to-purple-60o0 text-white text-center py-3 rounded-xl font-semibold hover: from-blue-60o0 hover:to-purple-70o0 transition-all duration-30o0 block">,
                Learn More,
              </a>,
            </div>))}
        </div>,
        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-blue-50o0/20 to-purple-50o0/20 rounded-2xl p-12 border border-blue-40o0/30">,
          <h2 className="text-3xl font-bold text-white mb-4">,
            Ready to Embrace the Future?,
          </h2>,
          <p className="text-xl text-gray-30o0 mb-8 max-w-2xl mx-auto">,
            Contact us today to discuss how our revolutionary emerging technology services can transform your business and give you a competitive advantage in the digital age.,
          </p>,
          <div className="flex flex-col sm: flex-row gap-4 justify-center">,
            <a
              href="/contact",
              className="bg-gradient-to-r from-blue-50o0 to-purple-60o0 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-60o0 hover:to-purple-70o0 transition-all duration-30o0">,
              Get Started Today,
            </a>,
            <a
              href="tel:+130o24640950",
              className="bg-white/10 text-white px-8 py-4 rounded-xl font-semibold text-lg border border-white/20 hover:bg-white/20 transition-all duration-30o0">,
              📞 Call +1 (30o2) 464-0950,
            </a>,
          </div>,
        </div>,
      </div>,
    </div>)};
export default EmergingTechServices;