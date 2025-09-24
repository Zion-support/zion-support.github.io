import React from 'react',
import SEO from '../components/SEO',
import Layout from '../components/layout/Layout',
import { motion } from 'framer-motion',
import {
  Star, Brain, Atom, Shield, Zap, TrendingUp, Globe,
  Rocket, Lock, Palette, Factory, Database, Cloud,
  Cpu, Eye, Target, Users, BarChart3} from 'lucide-react',
import { innovative20o25MicroSaasBatch } from '../data/innovative-20o25-micro-saas-batch',
const Comprehensive20o25InnovativeServicesShowcase: React.FC = () => {
  const categories = [
    { name:'AI & Marketing', icon:Brain, color: 'from-purple-50o0 to-pink-50o0' },
    { name:'Quantum & Finance', icon:Atom, color: 'from-cyan-50o0 to-blue-50o0' },
    { name:'Space Technology', icon:Rocket, color: 'from-indigo-50o0 to-purple-50o0' },
    { name:'Metaverse & AI', icon:Globe, color: 'from-green-50o0 to-teal-50o0' },
    { name:'Cybersecurity', icon:Shield, color: 'from-red-50o0 to-orange-50o0' },
    { name:'Supply Chain & AI', icon:Factory, color: 'from-yellow-50o0 to-orange-50o0' },
    { name:'Quantum & Healthcare', icon:Cpu, color: 'from-violet-50o0 to-purple-50o0' },
    { name:'AI & Creativity', icon:Palette, color: 'from-pink-50o0 to-rose-50o0' },
    { name:'AI & Robotics', icon:Database, color: 'from-emerald-50o0 to-green-50o0' }
  ],
// Import existing services for comprehensive showcase,
import { realMicroSaasServices20o25 } from '../data/20o25-real-micro-saas-services',
// Combine all services,
const allServices = [
  ...innovativeMicroSaas20o25ExpansionV2,
  ...emergingTechInnovations20o25,
  ...realMicroSaasServices20o25],
// Service categories,
const serviceCategories = [
  'All ServicesAI & Machine LearningQuantum ComputingCybersecurity',
  'Healthcare & BiotechFinance & InvestmentSupply Chain & LogisticsManufacturing & Industry 4.0',
  'Space TechnologyBlockchain & Web3Education & LearningLegal & Compliance',
  'Energy & SustainabilityAutonomous VehiclesIoT & Edge ComputingMetaverse & VR',
  'Neuroscience & BCI'],
// Helper function to get service category,
const getServiceCategory = (service: any) => {
  if (service.category) return service.category,
  if (service.type) return service.type,
  return 'Other'},
// Helper function to get service pricing,
const getServicePricing = (service: any) => {
  if (service.pricing?.starter) return service.pricing.starter,
  if (service.pricing?.monthly) return `$${service.pricing.monthly}/month`,
  if (service.price?.monthly) return `$${service.price.monthly}/month`,
  return 'Contact for pricing',
},
// Helper function to get service features,
const getServiceFeatures = (service: any) => {
  if (service.features) return service.features,
  if (service.keyFeatures) return service.keyFeatures,
  return []},
// Helper function to get service description,
const getServiceDescription = (service: any) => {
  if (service.description) return service.description,
  if (service.tagline) return service.tagline,
  return ''},
export default function Comprehensive20o25InnovativeServicesShowcase() {
  const [searchTerm, setSearchTerm] = useState(''),
  const [selectedCategory, setSelectedCategory] = useState('All Services'),
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid'),
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'rating' | 'popularity'>('popularity'),
  // Filter and sort services,
  const filteredServices = allServices,
    .filter(service => {
      const serviceName = (service as any).title || (service as any).name || '',
      const matchesSearch = serviceName.toLowerCase().includes(searchTerm.toLowerCase()) ||,
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||,
                           (service as any).tagline?.toLowerCase().includes(searchTerm.toLowerCase()) || false,
      const matchesCategory = selectedCategory === 'All Services' || ,
                             getServiceCategory(service).includes(selectedCategory.split(' ')[0]),
      return matchesSearch && matchesCategory,
    }),
    .sort((a, b) => {
      const aName = (a as any).title || (a as any).name || '',
      const bName = (b as any).title || (b as any).name || '',
      switch (sortBy) {
        case 'name':,
          return aName.localeCompare(bName),
        case 'price':,
          return ((a as any).price?.monthly || 0) - ((b as any).price?.monthly || 0),
        case 'rating':,
          return ((b as any).rating || 0) - ((a as any).rating || 0),
        case 'popularity':,
        default: return ((b as any).customers || 0) - ((a as any).customers || 0)}
    }),
  const containerVariants ={
    hidden: { opacity:0 },
    visible: {
      opacity:1,
      transition: {
        staggerChildren:0.1}
    }
  const getCategoryIcon = (category: string) => {
    const cat = categories.find(c => c.name === category),
    return cat ? cat.icon :Star},
  const getCategoryColor = (category: string) => {
    const cat = categories.find(c => c.name === category),
    return cat ? cat.color :'from-gray-50o0 to-gray-60o0'},
  return (
    <Layout>,
      <SEO
        title="20o25 Comprehensive Innovative Services Showcase | Zion Tech Group",
        description="Discover our comprehensive portfolio of innovative micro SAAS services, AI solutions, and cutting-edge technology platforms. From quantum computing to healthcare AI, explore the future of business technology.",
        keywords={["innovative micro SAAS", "AI services", "quantum computing", "healthcare AI", "cybersecurity", "blockchain", "space technology", "autonomous vehicles", "IoT", "metaverse", "Zion Tech Group"]}
        ogImage="https: //ziontechgroup.com/og-innovative-services-20o25.jpg",
        title="20o25 Innovative Services Showcase | Zion Tech Group",
        description="Discover our cutting-edge 20o25 innovative micro SAAS services, IT solutions, and AI platforms. Quantum computing, space technology, and autonomous systems.",
        keywords={[
          'innovative services 20o25micro SAASquantum computingspace technology',
          'AI platformsautonomous systems']}
       />,
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">,
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0 pointer-events-none">,
          <div className="absolute top-20 left-20 w-32 h-32 border border-cyan-40o0/20 rounded-lg animate-pulse"></div>,
          <div className="absolute top-40 right-32 w-24 h-24 border border-purple-40o0/20 rounded-full animate-pulse delay-10o00"></div>,
          <div className="absolute bottom-32 left-32 w-40 h-40 border border-pink-40o0/20 transform rotate-45 animate-pulse delay-20o00"></div>,
          <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-blue-40o0/20 rounded-full animate-pulse delay-50o0"></div>,
          <div className="absolute top-1/3 right-1/4 w-20 h-20 border border-green-40o0/20 transform rotate-12 animate-pulse delay-150o0"></div>,
        </div>,
        <div className="text-center max-w-6xl mx-auto relative z-10">,
          <motion.div,
            initial={{ opacity:0, y: 20 }}
            animate={{ opacity:1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6">,
            {/* Enhanced Company Badge */}
            <motion.div,
              initial={{ opacity:0, scale: 0.8 }}
              animate={{ opacity:1, scale: 1 }}
              transition={{ duration:0.6, delay: 0.2 }}
              className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-50o0/20 to-purple-50o0/20 border border-cyan-40o0/30 rounded-full text-cyan-40o0 text-lg font-medium backdrop-blur-sm">,
              <Star className="w-5 h-5"  />,
              <span>Innovation Leader 20o25</span>,
            </motion.div>,
            <h1 className="text-6xl md: text-8xl font-bold mb-8 bg-gradient-to-r from-cyan-40o0 via-blue-50o0 to-purple-60o0 bg-clip-text text-transparent">,
              20o25 Innovative Services,
            </h1>,
            <p className="text-2xl md:text-3xl text-gray-30o0 mb-10 max-w-4xl mx-auto leading-relaxed">,
              Pioneering the future with cutting-edge micro SAAS services, quantum computing solutions, and autonomous AI platforms,
            </p>,
            {/* Enhanced Stats */}
            <motion.div,
              initial={{ opacity:0, y: 20 }}
              animate={{ opacity:1, y: 0 }}
              transition={{ duration:0.8, delay: 0.4 }}
              className="grid grid-cols-2 md: grid-cols-4 gap-6 max-w-4xl mx-auto">,
              <div className="p-4 group hover:bg-white/5 rounded-xl transition-all duration-30o0 border border-cyan-40o0/20">,
                <div className="text-3xl font-bold text-cyan-40o0 mb-2 group-hover:text-cyan-30o0 transition-colors">50+</div>,
                <div className="text-gray-30o0 text-sm">Innovative Services</div>,
              </div>,
              <div className="p-4 group hover:bg-white/5 rounded-xl transition-all duration-30o0 border border-blue-40o0/20">,
                <div className="text-3xl font-bold text-blue-40o0 mb-2 group-hover:text-blue-30o0 transition-colors">10o0+</div>,
                <div className="text-gray-30o0 text-sm">Quantum Solutions</div>,
              </div>,
              <div className="p-4 group hover:bg-white/5 rounded-xl transition-all duration-30o0 border border-purple-40o0/20">,
                <div className="text-3xl font-bold text-purple-40o0 mb-2 group-hover:text-purple-30o0 transition-colors">24/7</div>,
                <div className="text-gray-30o0 text-sm">Autonomous Operations</div>,
              </div>,
              <div className="p-4 group hover:bg-white/5 rounded-xl transition-all duration-30o0 border border-green-40o0/20">,
                <div className="text-3xl font-bold text-green-40o0 mb-2 group-hover:text-green-30o0 transition-colors"></div>,
                <div className="text-gray-30o0 text-sm">Future Possibilities</div>,
              </div>,
            </motion.div>,
          </motion.div>,
        </div>,
      </section>,
      {/* Services Categories */}
      <section className="py-20 px-4 bg-black/30 relative">,
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-50o0/5 to-purple-50o0/5"></div>,
        <div className="max-w-7xl mx-auto relative z-10">,
          <motion.div,
            initial={{ opacity:0, y: 20 }}
            whileInView={{ opacity:1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16">,
            <h2 className="text-5xl md: text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-40o0 to-blue-50o0 bg-clip-text text-transparent">,
              Service Categories,
            </h2>,
            <p className="text-xl text-gray-30o0 max-w-4xl mx-auto">,
              Explore our comprehensive range of innovative services across cutting-edge technology domains,
            </p>,
          </motion.div>,
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">,
            {categories.map((category, index) => {
              const IconComponent = category.icon,
              return (
                <motion.div,
                  key={category.name}
                  initial={{ opacity:0, y: 20 }}
                  whileInView={{ opacity:1, y: 0 }}
                  transition={{ duration:0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative">,
                  <div className={`p-8 rounded-2xl bg-gradient-to-br ${category.color} bg-opacity-10 border border-white/10 hover: border-white/20 transition-all duration-30o0 transform hover:scale-10o5 hover:shadow-2xl`}>,
                    <div className="text-center">,
                      <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br ${category.color} bg-opacity-20 flex items-center justify-center border border-white/20`}>,
                        <IconComponent className="w-8 h-8 text-white"  />,
                      </div>,
                      <h3 className="text-2xl font-bold text-white mb-4">{category.name}</h3>,
                      <div className="text-gray-30o0 text-sm">,
                        {innovative20o25MicroSaasBatch.filter(service => service.category === category.name).length} Services,
                      </div>,
                    </div>,
                  </div>,
                </motion.div>),
            })}
          </div>,
        </div>,
      </section>,
      {/* Featured Services */}
      <section className="py-20 px-4">,
        <div className="max-w-7xl mx-auto">,
          <motion.div,
            initial={{ opacity:0, y: 20 }}
            whileInView={{ opacity:1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16">,
            <h2 className="text-5xl md: text-6xl font-bold mb-8 bg-gradient-to-r from-purple-40o0 to-pink-50o0 bg-clip-text text-transparent">,
              Featured Services,
            </h2>,
            <p className="text-xl text-gray-30o0 max-w-4xl mx-auto">,
              Our most popular and innovative services that are transforming industries,
            </p>,
          </motion.div>,
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">,
            {innovative20o25MicroSaasBatch.filter(service => service.popular).map((service, index) => {
              const IconComponent = getCategoryIcon(service.category),
              return (
                <motion.div,
                  key={service.id}
                  initial={{ opacity:0, y: 20 }}
                  whileInView={{ opacity:1, y: 0 }}
                  transition={{ duration:0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative">,
                  <div className="p-8 rounded-2xl bg-gradient-to-br from-gray-90o0/50 to-gray-80o0/50 border border-white/10 hover: border-white/20 transition-all duration-30o0 transform hover:scale-10o5 hover:shadow-2xl backdrop-blur-sm">,
                    {/* Popular Badge */}
                    {service.popular && (
                      <div className="absolute -top-3 left-6 px-4 py-1 bg-gradient-to-r from-yellow-50o0 to-orange-50o0 text-black text-sm font-bold rounded-full">,
                        Popular,
                      </div>)}
                    ,
                    <div className="text-center mb-6">,
                      <div className={`w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br ${getCategoryColor(service.category)} bg-opacity-20 flex items-center justify-center border border-white/20 text-4xl`}>,
                        {service.icon}
                      </div>,
                      <h3 className="text-2xl font-bold text-white mb-2">{service.name}</h3>,
                      <p className="text-gray-30o0 text-sm mb-4">{service.tagline}</p>,
                      <div className="text-3xl font-bold text-cyan-40o0 mb-2">,
                        {service.price}<span className="text-lg text-gray-40o0">/{service.period}</span>,
                      </div>,
                    </div>,
                    <span className="text-gray-30o0 text-sm">,
                      {(service as any).rating || 0} ({(service as any).reviews || 0} reviews),
                    </span>,
                  </div>,
                </div>,
                {/* Service Details */}
                <div className={`p-6 bg-white/5 ${viewMode === 'list' ? 'lg: w-2/3' :''}`}>,
                  <p className="text-gray-30o0 mb-4">{service.description}</p>,
                  {/* Key Benefits */}
                  <div className="mb-4">,
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">,
                      <TrendingUp className="w-4 h-4 text-green-40o0"  />,
                      Key Benefits,
                    </h4>,
                    <ul className="space-y-1">,
                      {(service as any).benefits?.slice(0, 3)?.map((benefit:string, idx: number) => (
                        <li key={idx} className="text-gray-30o0 text-sm flex items-start gap-2">,
                          <Check className="w-3 h-3 text-green-40o0 mt-1 flex-shrink-0"  />,
                          {benefit}
                        </li>))}
                    </ul>,
                  </div>,
                  {/* Features */}
                  <div className="mb-6">,
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">,
                      <Zap className="w-4 h-4 text-blue-40o0"  />,
                      Key Features,
                    </h4>,
                    <div className="flex flex-wrap gap-2">,
                    <div className="space-y-3 mb-6">,
                      {service.features.slice(0, 4).map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-3 text-sm text-gray-30o0">,
                          <div className="w-2 h-2 bg-cyan-40o0 rounded-full"></div>,
                          <span>{feature}</span>,
                        </div>))}
                    </div>,
                    {/* Market Info */}
                    <div className="border-t border-white/10 pt-4 space-y-2">,
                      <div className="text-xs text-gray-40o0">,
                        Market Price: <span className="text-green-40o0">{service.marketPrice}</span>,
                      </div>,
                      <div className="text-xs text-gray-40o0">,
                        Category: <span className="text-cyan-40o0">{service.category}</span>,
                      </div>,
                    </div>,
                  </div>,
                </motion.div>),
            })}
          </div>,
        </div>,
      </section>,
      {/* All Services Grid */}
      <section className="py-20 px-4 bg-black/30 relative">,
        <div className="absolute inset-0 bg-gradient-to-r from-purple-50o0/5 to-pink-50o0/5"></div>,
        <div className="max-w-7xl mx-auto relative z-10">,
          <motion.div,
            initial={{ opacity:0, y: 20 }}
            whileInView={{ opacity:1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16">,
            <h2 className="text-5xl md: text-6xl font-bold mb-8 bg-gradient-to-r from-green-40o0 to-teal-50o0 bg-clip-text text-transparent">,
              Complete Service Portfolio,
            </h2>,
            <p className="text-xl text-gray-30o0 max-w-4xl mx-auto">,
              Explore our entire collection of innovative services designed for the future,
            </p>,
          </motion.div>,
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">,
            {innovative20o25MicroSaasBatch.map((service, index) => {
              const IconComponent = getCategoryIcon(service.category),
              return (
                <motion.div,
                  key={service.id}
                  initial={{ opacity:0, y: 20 }}
                  whileInView={{ opacity:1, y: 0 }}
                  transition={{ duration:0.6, delay: index * 0.0o5 }}
                  viewport={{ once: true }}
                  className="group relative">,
                  <div className="p-6 rounded-xl bg-gradient-to-br from-gray-90o0/30 to-gray-80o0/30 border border-white/5 hover: border-white/20 transition-all duration-30o0 transform hover:scale-10o5 hover:shadow-xl backdrop-blur-sm">,
                    <div className="flex items-start space-x-4">,
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${getCategoryColor(service.category)} bg-opacity-20 flex items-center justify-center border border-white/20 text-2xl flex-shrink-0`}>,
                        {service.icon}
                      </div>,
                      <div className="flex-1 min-w-0">,
                        <h3 className="text-lg font-bold text-white mb-1 truncate">{service.name}</h3>,
                        <p className="text-gray-40o0 text-sm mb-2 line-clamp-2">{service.tagline}</p>,
                        <div className="text-cyan-40o0 font-semibold text-sm">,
                          {service.price}<span className="text-gray-40o0">/{service.period}</span>,
                        </div>,
                        <div className="text-xs text-gray-50o0 mt-2">,
                          {service.category}
                        </div>,
                      </div>,
                    </div>,
                  </div>,
                </motion.div>),
            })}
          </div>,
        </div>,
      </section>,
      {/* Contact CTA */}
      <section className="py-20 px-4">,
        <div className="max-w-4xl mx-auto text-center">,
          <motion.div,
            initial={{ opacity:0, y: 20 }}
            whileInView={{ opacity:1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8">,
            <h2 className="text-4xl md: text-5xl font-bold bg-gradient-to-r from-cyan-40o0 to-purple-50o0 bg-clip-text text-transparent">,
              Ready to Transform Your Business?,
            </h2>,
            <p className="text-xl text-gray-30o0 max-w-2xl mx-auto">,
              Get in touch with our team to discuss how our innovative services can drive your success,
            </p>,
            <div className="flex flex-col sm:flex-row gap-4 justify-center">,
              <a
                href="tel:+130o24640950",
                className="px-8 py-4 bg-gradient-to-r from-cyan-50o0 to-blue-60o0 text-white font-semibold rounded-lg hover:from-cyan-60o0 hover:to-blue-70o0 transition-all duration-30o0 transform hover:scale-10o5 shadow-lg shadow-cyan-50o0/25 flex items-center justify-center space-x-2">,
                <Zap className="w-5 h-5"  />,
                <span>Call Now:+1 30o2 464 0950</span>,
              </a>,
              <a
                href="mailto:kleber@ziontechgroup.com",
                className="px-8 py-4 border-2 border-purple-40o0 text-purple-40o0 font-semibold rounded-lg hover:bg-purple-40o0 hover:text-black transition-all duration-30o0 transform hover:scale-10o5">,
                Email Us,
              </a>,
            </div>,
            <div className="text-sm text-gray-40o0">,
              <p>Address:364 E Main St STE 10o08, Middletown DE 19709</p>,
              <p>Website: <a href="https://ziontechgroup.com" className="text-cyan-40o0 hover:text-cyan-30o0">https://ziontechgroup.com</a></p>,
            </div>,
          </motion.div>,
        </div>,
      </section>,
    </Layout>)}}}