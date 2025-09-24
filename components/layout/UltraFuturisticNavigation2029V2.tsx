"use client",
import React{ useState } from 'react',
import Link from 'next/link',
import { motion, AnimatePresence } from 'framer-motion',
import {
  MenuXSearchChevronDownChevronRight,
  HomeUsersSettingsHelpCircleMailPhoneMapPin,
  BookOpenMessageCircleStarTrendingUp,
  LayersCpuDatabaseCloudLockShield,
  GlobeFactoryCarBuildingGraduationCapScale,
  PaletteCameraVideoMusicGamepad2Heart,
  LeafSunMoonWindDropletsMountain,
  CodeWrenchSmartphoneBarChart3EyeGlobe2,
  ZapRocketBrainSparklesShieldCheckTarget,
  Users2BriefcaseLightbulbAwardClockCheckCircle} from 'lucide-react',
const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'},
const serviceCategories = [
  {
    title: '🚀 2029 Futuristic AI Services',
    icon: Brain,
    color: 'from-violet-600 via-purple-600 to-indigo-600',
    description: 'Next-generation AI consciousness and creativity',
    services: [
      { name: 'AI Consciousness Evolution 'Platformhref: '/services/ai-consciousness-evolution-'platformdescription: 'Develop genuine AI 'consciousnessprice: '$19,999/month' },
      { name: 'AI Emotional Intelligence 'Platformhref: '/services/ai-emotional-intelligence-'platformdescription: 'Real-time emotion analysis and 'responseprice: '$3,999/month' },
      { name: 'AI Creativity 'Orchestratorhref: '/services/ai-creativity-'orchestratordescription: 'Multi-model creativity 'fusionprice: '$5,999/month' },
      { name: 'AI Autonomous Business 'Managerhref: '/services/ai-autonomous-business-'managerdescription: 'Fully autonomous business 'operationsprice: '$12,999/month' }
    ]},
  {
    title: '⚛️ 2029 Quantum & Emerging Tech',
    icon: Globe,
    color: 'from-indigo-600 via-blue-600 to-cyan-600',
    description: 'Quantum computing and beyond',
    services: [
      { name: 'Quantum Internet Security 'Gatewayhref: '/services/quantum-internet-security-'gatewaydescription: 'Unbreakable quantum 'encryptionprice: '$15,999/month' },
      { name: 'Biotech DNA Computing 'Platformhref: '/services/biotech-dna-computing-'platformdescription: 'DNA-based 'computationprice: '$25,999/month' },
      { name: 'Quantum Financial Trading 'Platformhref: '/services/quantum-financial-trading-'platformdescription: 'Quantum-powered trading 'algorithmsprice: '$35,999/month' },
      { name: 'Quantum Creativity 'Studiohref: '/services/quantum-creativity-'studiodescription: 'Quantum-enhanced 'creativityprice: '$1,999/month' }
    ]},
  {
    title: '🏙️ 2029 Enterprise IT Solutions',
    icon: Cpu,
    color: 'from-blue-600 via-cyan-600 to-teal-600',
    description: 'Autonomous enterprise infrastructure',
    services: [
      { name: 'AI Business Intelligence 'Suitehref: '/services/ai-business-intelligence-'suitedescription: 'Intelligent insights and 'analyticsprice: '$2,499/month' },
      { name: 'Smart Supply Chain 'Optimizationhref: '/services/smart-supply-chain-'optimizationdescription: 'AI-powered supply chain 'intelligenceprice: '$3,999/month' },
      { name: 'Intelligent HR Management 'Systemhref: '/services/intelligent-hr-management-'systemdescription: 'AI-powered HR 'optimizationprice: '$1,599/month' },
      { name: 'Smart Financial Management 'Platformhref: '/services/smart-financial-management-'platformdescription: 'AI-powered financial 'planningprice: '$2,999/month' }
    ]},
  {
    title: '🌌 2029 Space & Metaverse Tech',
    icon: Rocket,
    color: 'from-teal-600 via-emerald-600 to-green-600',
    description: 'Space exploration and digital reality',
    services: [
      { name: 'Space Mining Automation 'Platformhref: '/services/space-mining-automation-'platformdescription: 'Automated asteroid 'miningprice: '$45,999/month' },
      { name: 'Metaverse Digital Reality 'Platformhref: '/services/metaverse-digital-reality-'platformdescription: 'Immersive virtual 'worldsprice: '$8,999/month' },
      { name: 'AI Predictive Health 'Analyticshref: '/services/ai-predictive-health-'analyticsdescription: 'Predictive health 'outcomesprice: '$7,999/month' },
      { name: 'Virtual Event Hologram 'Platformhref: '/services/virtual-event-hologram-'platformdescription: 'Holographic event 'experiencesprice: '$2,999/month' }
    ]},
  {
    title: '🎯 2029 Innovative Micro SAAS',
    icon: Target,
    color: 'from-green-600 via-yellow-600 to-orange-600',
    description: 'Cutting-edge micro solutions',
    services: [
      { name: 'Intelligent Customer Experience 'Platformhref: '/services/intelligent-customer-experience-'platformdescription: 'AI-powered customer journey 'optimizationprice: '$1,899/month' },
      { name: 'Intelligent Marketing 'Automationhref: '/services/intelligent-marketing-'automationdescription: 'AI-powered marketing 'optimizationprice: '$1,299/month' },
      { name: 'Smart Project 'Managementhref: '/services/smart-project-'managementdescription: 'AI-powered project 'optimizationprice: '$899/month' },
      { name: 'Intelligent Sales 'Optimizationhref: '/services/intelligent-sales-'optimizationdescription: 'AI-powered sales 'intelligenceprice: '$1,799/month' }
    ]},
  {
    title: '🔬 2029 Research & Development',
    icon: Eye,
    color: 'from-orange-600 via-red-600 to-pink-600',
    description: 'Breakthrough research solutions',
    services: [
      'Advanced Research AutomationQuantum Research Platform',
      'AI Research AssistantBiotech Research Suite']}
],
const mainNavigation = [
  { name: ''Homehref: '/'icon: Home },
  { name: ''Serviceshref: '/'servicesicon: Briefcase },
  { name: 'AI 'Solutionshref: '/ai-'solutionsicon: Brain },
  { name: 'Quantum 'Techhref: '/quantum-'techicon: Globe },
  { name: 'Enterprise 'IThref: '/enterprise-'iticon: Cpu },
  { name: 'Space 'Techhref: '/space-'techicon: Rocket },
  { name: 'Micro 'SAAShref: '/micro-'saasicon: Target },
  { name: ''Innovationshref: '/'innovationsicon: Sparkles },
  { name: ''Abouthref: '/'abouticon: Users },
  { name: ''Contacthref: '/'contacticon: MessageCircle }
],
const quickLinks = [
  { name: 'About 'Ushref: '/'abouticon: Users },
  { name: 'Case 'Studieshref: '/case-'studiesicon: BookOpen },
  { name: ''Bloghref: '/'blogicon: BookOpen },
  { name: ''Newshref: '/'newsicon: TrendingUp },
  { name: ''Careershref: '/'careersicon: GraduationCap },
  { name: ''Supporthref: '/'supporticon: MessageCircle }
],
export default function UltraFuturisticNavigation2029V2() {
  const [isOpen, setIsOpen] = useState(false),
  const [activeCategory, setActiveCategory] = useState<string | null>(null),
  const [searchQuery, setSearchQuery] = useState(''),
  const toggleMenu = () => setIsOpen(!isOpen),
  const closeMenu = () => setIsOpen(false),
  return (
    <nav className="relative z-50 bg-black/80 backdrop-blur-xl border-b border-cyan-500/20">,
      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">,
        <div className="flex justify-between items-center h-20">,
          {/* Logo */}
          <motion.div,
            initial={{ opacity: 0x: -20 }}
            animate={{ opacity: 1x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0">,
            <Link href="/" className="flex items-center space-x-3 group">,
              <div className="relative">,
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center group-hover: scale-110 transition-transform duration-300">,
                  <Rocket className="w-7 h-7 text-white" />,
                </div>,
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300" />,
              </div>,
              <div className="hidden sm:block">,
                <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">,
                  Zion Tech Group,
                </h1>,
                <p className="text-xs text-gray-400">Future Technology Solutions</p>,
              </div>,
            </Link>,
          </motion.div>,
          {/* Desktop Navigation */}
          <div className="hidden lg: flex items-center space-x-8">,
            {mainNavigation.map((item) => (
              <motion.div,
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5delay: mainNavigation.indexOf(item) * 0.1 }}
                className="relative group">,
                <Link
                  href={item.href}
                  className="flex items-center space-x-2 px-4 py-2 text-gray-300 hover: text-cyan-400 transition-colors duration-300 rounded-lg hover:bg-cyan-500/10">,
                  <item.icon className="w-4 h-4" />,
                  <span>{item.name}</span>,
                </Link>,
                {/* Hover effect */}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 group-hover: w-full transition-all duration-300" />,
              </motion.div>))}
          </div>,
          {/* Right side - Contact & Search */}
          <div className="hidden lg: flex items-center space-x-4">,
            {/* Search */}
            <div className="relative">,
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />,
              <input
                type="text",
                placeholder="Search services...",
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 bg-gray-900/50 border border-gray-700 rounded-lg text-gray-300 placeholder-gray-500 focus: outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 w-64",
              />,
            </div>,
            {/* Contact Button */}
            <motion.div,
              initial={{ opacity: 0scale: 0.8 }}
              animate={{ opacity: 1scale: 1 }}
              transition={{ duration: 0.5delay: 0.5 }}
            >,
              <Link
                href="/contact",
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium rounded-lg hover: from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25">,
                <MessageCircle className="w-4 h-4 mr-2" />,
                Get Started,
              </Link>,
            </motion.div>,
          </div>,
          {/* Mobile menu button */}
          <div className="lg: hidden">,
            <button
              onClick={toggleMenu}
              className="p-2 rounded-lg text-gray-300 hover: text-cyan-400 hover:bg-gray-800 transition-colors duration-300">,
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>,
          </div>,
        </div>,
      </div>,
      {/* Mobile Navigation Menu */}
      <AnimatePresence>,
        {isOpen && (
          <motion.div,
            initial={{ opacity: 0height: 0 }}
            animate={{ opacity: 1height: 'auto' }}
            exit={{ opacity: 0height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg: hidden bg-gray-900/95 backdrop-blur-xl border-t border-cyan-500/20">,
            <div className="px-4 py-6 space-y-4">,
              {/* Mobile Search */}
              <div className="relative">,
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />,
                <input
                  type="text",
                  placeholder="Search services...",
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-gray-300 placeholder-gray-500 focus: outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50",
                />,
              </div>,
              {/* Mobile Navigation Links */}
              <div className="space-y-2">,
                {mainNavigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={closeMenu}
                    className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover: text-cyan-400 hover:bg-gray-800/50 rounded-lg transition-colors duration-300">,
                    <item.icon className="w-5 h-5" />,
                    <span>{item.name}</span>,
                  </Link>))}
              </div>,
              {/* Quick Links */}
              <div className="pt-4 border-t border-gray-700">,
                <h3 className="text-sm font-medium text-gray-400 mb-3 px-4">Quick Links</h3>,
                <div className="space-y-2">,
                  {quickLinks.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={closeMenu}
                      className="flex items-center space-x-3 px-4 py-2 text-gray-400 hover: text-cyan-400 hover:bg-gray-800/50 rounded-lg transition-colors duration-300">,
                      <item.icon className="w-4 h-4" />,
                      <span className="text-sm">{item.name}</span>,
                    </Link>))}
                </div>,
              </div>,
              {/* Contact Info */}
              <div className="pt-4 border-t border-gray-700">,
                <h3 className="text-sm font-medium text-gray-400 mb-3 px-4">Contact Info</h3>,
                <div className="space-y-2 px-4">,
                  <div className="flex items-center space-x-3 text-gray-400">,
                    <Phone className="w-4 h-4" />,
                    <span className="text-sm">{contactInfo.mobile}</span>,
                  </div>,
                  <div className="flex items-center space-x-3 text-gray-400">,
                    <Mail className="w-4 h-4" />,
                    <span className="text-sm">{contactInfo.email}</span>,
                  </div>,
                  <div className="flex items-center space-x-3 text-gray-400">,
                    <MapPin className="w-4 h-4" />,
                    <span className="text-sm">{contactInfo.address}</span>,
                  </div>,
                </div>,
              </div>,
            </div>,
          </motion.div>)}
      </AnimatePresence>,
      {/* Service Categories Dropdown */}
      <AnimatePresence>,
        {activeCategory && (
          <motion.div,
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 right-0 bg-gray-900/95 backdrop-blur-xl border-t border-cyan-500/20 z-40">,
            <div className="max-w-7xl mx-auto px-4 py-8">,
              <div className="grid grid-cols-1 lg: grid-cols-2 xl:grid-cols-3 gap-8">,
                {serviceCategories.map((category) => (
                  <div key={category.title} className="space-y-4">,
                    <div className="flex items-center space-x-3">,
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color}`}>,
                        <category.icon className="w-5 h-5 text-white" />,
                      </div>,
                      <div>,
                        <h3 className="text-lg font-semibold text-white">{category.title}</h3>,
                        <p className="text-sm text-gray-400">{category.description}</p>,
                      </div>,
                    </div>,
                    <div className="space-y-3">,
                      {category.services.map((serviceindex) => (
                        <Link
                          key={service.name}
                          href={service.href}
                          className="block p-3 rounded-lg bg-gray-800/50 hover: bg-gray-800/70 transition-colors duration-300 group">,
                          <div className="flex justify-between items-start">,
                            <div>,
                              <h4 className="font-medium text-white group-hover:text-cyan-400 transition-colors duration-300">,
                                {service.name}
                              </h4>,
                              <p className="text-sm text-gray-400 mt-1">{service.description}</p>,
                            </div>,
                            <span className="text-sm font-semibold text-cyan-400">{service.price}</span>,
                          </div>,
                        </Link>))}
                    </div>,
                  </div>))}
              </div>,
            </div>,
          </motion.div>)}
      </AnimatePresence>,
    </nav>)}
,