import React, { useState, useEffect } from 'react',
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion',
import { 
  Menu, X, ChevronDown, Search, Phone, Mail, MapPin,
  Rocket, Brain, Atom, Globe, Zap, Sparkles, Shield,
  Microscope, DollarSign, Home, Users, Briefcase,
  BookOpen, MessageCircle, Star, TrendingUp, Target,
  Layers, Cpu, Database, Cloud, Lock, ShieldCheck,
  Earth, Factory, Car, Building, GraduationCap, Scale,
  Palette, Camera, Video, Music, Gamepad2, Heart,
  Leaf, Sun, Moon, Wind, Droplets, Mountain,
  Code, Wrench, Smartphone, BarChart3
} from 'lucide-react',

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
},

const _contactInfo = {_mobile: '+1 302 464 0950', _email: 'kleber@ziontechgroup.com', _address: '364 E Main St STE 1008 Middletown DE 19709', _website: 'https://ziontechgroup.com'};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

const _serviceCategories = [
  {_title: '🚀 2028 Futuristic Innovations', _icon: Rocket, _color: 'from-violet-600 to-purple-600', _description: 'Beyond the future of technology', _services: [
      { name: 'AI Climate Prediction Platform', _href: '/ai-climate-prediction-platform', _description: 'Predict climate changes with 99.9% accuracy', _price: '$2, _999/month'},
      {_name: 'Quantum Cybersecurity Firewall', _href: '/quantum-cybersecurity-firewall', _description: 'Unbreakable quantum encryption', _price: '$4, _999/month'},
      {_name: 'Autonomous Drone Delivery Network', _href: '/autonomous-drone-delivery-network', _description: 'AI-powered drone delivery', _price: '$1, _999/month'},
      {_name: 'AI Healthcare Diagnosis Platform', _href: '/ai-healthcare-diagnosis-platform', _description: 'Revolutionary medical diagnosis', _price: '$3, _999/month'}
    ]
  },
  {_title: '🏙️ Smart City & Infrastructure', _icon: Building, _color: 'from-blue-600 to-cyan-600', _description: 'Intelligent urban solutions', _services: [
      { name: 'Smart City Infrastructure Management', _href: '/smart-city-infrastructure-management', _description: 'IoT and AI urban optimization', _price: '$5, _999/month'},
      {_name: 'IoT Energy Management System', _href: '/iot-energy-management-system', _description: 'Smart energy optimization', _price: '$1, _999/month'},
      {_name: 'Digital Twin Manufacturing Platform', _href: '/digital-twin-manufacturing-platform', _description: 'Virtual manufacturing replicas', _price: '$4, _999/month'},
      {_name: 'Autonomous Manufacturing AI', _href: '/autonomous-manufacturing-ai', _description: 'Self-optimizing factories', _price: '$6, _999/month'}
    ]
  },
  {_title: '⚛️ Quantum & Advanced Tech', _icon: Atom, _color: 'from-indigo-600 to-blue-600', _description: 'Quantum computing and beyond', _services: [
      { name: 'Quantum Financial Trading Platform', _href: '/quantum-financial-trading-platform', _description: 'Quantum-powered trading', _price: '$8, _999/month'},
      {_name: 'Quantum Machine Learning Platform', _href: '/quantum-machine-learning-platform', _description: 'Quantum computing for ML', _price: '$7, _999/month'},
      {_name: 'Quantum Internet Security Gateway', _href: '/quantum-internet-security-gateway', _description: 'Unbreakable internet security', _price: '$3, _999/month'},
      {_name: 'Quantum Internet Protocol', _href: '/quantum-internet-protocol', _description: 'Next-generation internet', _price: '$5, _999/month'}
    ]
  },
  {_title: '🤖 AI & Machine Learning', _icon: Brain, _color: 'from-emerald-600 to-teal-600', _description: 'Next-generation AI solutions', _services: [
      { name: 'AI Customer Service Automation', _href: '/ai-customer-service-automation', _description: 'Intelligent customer support', _price: '$899/month'},
      {_name: 'AI Education Platform', _href: '/ai-education-platform', _description: 'Personalized learning with AI', _price: '$1, _499/month'},
      {_name: 'AI Content Creation Suite', _href: '/ai-content-creation-suite', _description: 'Unlimited AI content creation', _price: '$1, _299/month'},
      {_name: 'AI Legal Research Platform', _href: '/ai-legal-research-platform', _description: 'Intelligent legal research', _price: '$2, _999/month'}
    ]
  },
  {_title: '⛓️ Blockchain & Web3', _icon: Layers, _color: 'from-orange-600 to-red-600', _description: 'Decentralized solutions', _services: [
      { name: 'Blockchain Supply Chain Transparency', _href: '/blockchain-supply-chain-transparency', _description: 'End-to-end supply chain visibility', _price: '$2, _499/month'},
      {_name: 'Smart Contract Automation Platform', _href: '/smart-contract-automation', _description: 'Automated blockchain contracts', _price: '$1, _999/month'},
      {_name: 'DeFi Yield Optimization', _href: '/defi-yield-optimization', _description: 'Maximize DeFi returns', _price: '$3, _999/month'},
      {_name: 'NFT Marketplace Platform', _href: '/nft-marketplace-platform', _description: 'Complete NFT ecosystem', _price: '$2, _999/month'}
    ]
  },
  {_title: '🚗 Autonomous & Mobility', _icon: Car, _color: 'from-red-600 to-pink-600', _description: 'Self-driving and mobility solutions', _services: [
      { name: 'Autonomous Vehicle Fleet Management', _href: '/autonomous-vehicle-fleet-management', _description: 'Intelligent fleet management', _price: '$3, _999/month'},
      {_name: 'Smart Traffic Management System', _href: '/smart-traffic-management', _description: 'AI traffic optimization', _price: '$4, _999/month'},
      {_name: 'Electric Vehicle Charging Network', _href: '/ev-charging-network', _description: 'Smart EV infrastructure', _price: '$2, _999/month'},
      {_name: 'Mobility as a Service Platform', _href: '/mobility-as-a-service', _description: 'Integrated mobility solutions', _price: '$1, _999/month'}
    ]
  },
  {_title: '🏥 Healthcare & Biotech', _icon: Heart, _color: 'from-pink-600 to-rose-600', _description: 'Advanced healthcare solutions', _services: [
      { name: 'AI Drug Discovery Platform', _href: '/ai-drug-discovery-platform', _description: 'Accelerate drug development', _price: '$9, _999/month'},
      {_name: 'Personalized Medicine AI', _href: '/personalized-medicine-ai', _description: 'Tailored treatment plans', _price: '$4, _999/month'},
      {_name: 'Telemedicine AI Platform', _href: '/telemedicine-ai-platform', _description: 'Intelligent remote healthcare', _price: '$2, _999/month'},
      {_name: 'Medical Imaging AI', _href: '/medical-imaging-ai', _description: 'Advanced diagnostic imaging', _price: '$3, _999/month'}
    ]
  },
  {_title: '🎓 Education & Training', _icon: GraduationCap, _color: 'from-green-600 to-emerald-600', _description: 'Next-generation learning', _services: [
      { name: 'Virtual Reality Learning Platform', _href: '/vr-learning-platform', _description: 'Immersive educational experiences', _price: '$1, _999/month'},
      {_name: 'AI Tutoring System', _href: '/ai-tutoring-system', _description: 'Personalized AI tutoring', _price: '$899/month'},
      {_name: 'Corporate Training AI', _href: '/corporate-training-ai', _description: 'Intelligent employee training', _price: '$2, _499/month'},
      {_name: 'Language Learning AI', _href: '/language-learning-ai', _description: 'AI-powered language acquisition', _price: '$1, _299/month'}
    ]
  },
  {_title: '⚖️ Legal & Compliance', _icon: Scale, _color: 'from-slate-600 to-gray-600', _description: 'Legal technology solutions', _services: [
      { name: 'Contract Analysis AI', _href: '/contract-analysis-ai', _description: 'Intelligent contract review', _price: '$2, _999/month'},
      {_name: 'Compliance Monitoring Platform', _href: '/compliance-monitoring-platform', _description: 'Automated compliance tracking', _price: '$3, _999/month'},
      {_name: 'Legal Document Automation', _href: '/legal-document-automation', _description: 'Automated legal documents', _price: '$1, _999/month'},
      {_name: 'Regulatory Change Tracker', _href: '/regulatory-change-tracker', _description: 'Monitor regulatory updates', _price: '$1, _499/month'}
    ]
  },
  {_title: '🌍 Sustainability & Green Tech', _icon: Leaf, _color: 'from-emerald-600 to-green-600', _description: 'Environmental solutions', _services: [
      { name: 'Carbon Footprint Tracking', _href: '/carbon-footprint-tracking', _description: 'Monitor environmental impact', _price: '$1, _499/month'},
      {_name: 'Renewable Energy Management', _href: '/renewable-energy-management', _description: 'Optimize green energy', _price: '$2, _999/month'},
      {_name: 'Waste Management AI', _href: '/waste-management-ai', _description: 'Intelligent waste optimization', _price: '$1, _999/month'},
      {_name: 'Sustainable Supply Chain', _href: '/sustainable-supply-chain', _description: 'Green supply chain solutions', _price: '$3, _999/month'}
    ]
  }
],

const companyLinks = [
  { name: '🏠 Home', href: '/', icon: Home },
  { name: '🚀 2028 Services', href: '/2028-services-showcase', icon: Rocket },
  { name: '⭐ Ultimate 2028', href: '/ultimate-2028-services-showcase', icon: Star },
  { name: '💰 2028 Pricing', href: '/revolutionary-2028-pricing', icon: DollarSign },
  { name: '📊 Case Studies', href: '/case-studies', icon: Briefcase },
  { name: '📚 Blog & Resources', href: '/blog', icon: BookOpen },
  { name: '🎯 About Us', href: '/about', icon: Users },
  { name: '📞 Contact', href: '/contact', icon: MessageCircle },
  { name: '🔒 Support', href: '/support', icon: ShieldCheck }
],

const resourceLinks = [
  { name: '📖 Documentation', href: '/docs', icon: BookOpen },
  { name: '🎥 Video Tutorials', href: '/tutorials', icon: Video },
  { name: '💡 API Reference', href: '/api', icon: Code },
  { name: '🛠️ Developer Tools', href: '/dev-tools', icon: Wrench },
  { name: '📱 Mobile Apps', href: '/mobile', icon: Smartphone },
  { name: '☁️ Cloud Services', href: '/cloud', icon: Cloud },
  { name: '🔐 Security Center', href: '/security', icon: Shield },
  { name: '📊 Analytics', href: '/analytics', icon: BarChart3 }
],

export default function UltraFuturisticNavigation2028() {
  const [isOpen, setIsOpen] = useState(false),
  const [activeCategory, setActiveCategory] = useState<string | null>(null),
  const [searchQuery, setSearchQuery] = useState(''),

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  const handleCategoryHover = (categoryTitle: string) => {
    setActiveCategory(categoryTitle)
  },

  const handleCategoryLeave = () => {
    setActiveCategory(null)
  },

  const _filteredServices = serviceCategories.flatMap(category =>
    category.services.filter(service =>
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
  ),

  return (
    <nav className=&quot;relative z-50 bg-black/90 backdrop-blur-xl border-b border-purple-500/30&quot;>
      {/* Top Contact Bar */}
      <div className=&quot;bg-gradient-to-r from-purple-900/50 to-blue-900/50 border-b border-purple-500/20&quot;>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
          <div className=&quot;flex items-center justify-between h-10 text-xs text-purple-200&quot;>
            <div className=&quot;flex items-center space-x-6&quot;>
              <div className=&quot;flex items-center space-x-2&quot;>
                <Phone className=&quot;h-3 w-3 text-purple-400&quot; />
                <span>{contactInfo.mobile}</span>
              </div>
              <div className=&quot;flex items-center space-x-2&quot;>
                <Mail className=&quot;h-3 w-3 text-purple-400&quot; />
                <span>{contactInfo.email}</span>
              </div>
              <div className=&quot;flex items-center space-x-2&quot;>
                <MapPin className=&quot;h-3 w-3 text-purple-400&quot; />
                <span>{contactInfo.address}</span>
              </div>
            </div>
            <div className=&quot;flex items-center space-x-4&quot;>
              <a href={contactInfo.website} className=&quot;text-purple-300 hover:text-white transition-colors&quot;>
                {contactInfo.website}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
        <div className=&quot;flex items-center justify-between h-20&quot;>
          {/* Logo */}
          <div className=&quot;flex items-center&quot;>
            <Link href=&quot;/&quot; className=&quot;flex items-center space-x-3 group&quot;>
              <div className=&quot;relative&quot;>
                <div className=&quot;w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:shadow-lg hover:shadow-cyan-400/40 transition-transform duration-300&quot;>
                  <Rocket className=&quot;w-6 h-6 text-white&quot; />
                </div>
                <div className=&quot;absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl blur opacity-75 group-hover:opacity-100 transition-opacity duration-300 -z-10&quot;></div>
              </div>
              <div className=&quot;hidden md:block&quot;>
                <h1 className=&quot;text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent&quot;>
                  Zion Tech Group
                </h1>
                <p className=&quot;text-xs text-purple-300&quot;>2028 Future Technology</p>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className=&quot;hidden lg:flex items-center space-x-8&quot;>
            {/* Service Categories */}
            <div className=&quot;relative group&quot;>
              <button className=&quot;flex items-center space-x-2 text-purple-200 hover:text-white transition-colors py-2&quot;>
                <Sparkles className=&quot;w-5 h-5&quot; />
                <span>Services</span>
                <ChevronDown className=&quot;w-4 h-4&quot; />
              </button>
              
              {/* Mega Menu */}
              <div className=&quot;absolute top-full left-0 w-screen max-w-6xl bg-black/95 backdrop-blur-xl border border-purple-500/30 rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0&quot;>
                <div className=&quot;p-6&quot;>
                  <div className=&quot;grid grid-cols-3 gap-6&quot;>
                    {serviceCategories.slice(0, 6).map((category) => (
                      <div key={category.title} className=&quot;space-y-3&quot;>
                        <div className=&quot;flex items-center space-x-3&quot;>
                          <category.icon className={`w-6 h-6 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`} />
                          <h3 className=&quot;font-semibold text-white&quot;>{category.title}</h3>
                        </div>
                        <p className=&quot;text-sm text-purple-300&quot;>{category.description}</p>
                        <div className=&quot;space-y-2&quot;>
                          {category.services.slice(0, 2).map((service) => (
                            <Link
                              key={service.name}
                              href={service.href}
                              className=&quot;block p-3 rounded-lg bg-purple-900/20 hover:bg-purple-900/40 transition-colors group&quot;
                            >
                              <div className=&quot;flex items-center justify-between&quot;>
                                <div>
                                  <h4 className=&quot;text-sm font-medium text-white group-hover:text-purple-300 transition-colors&quot;>
                                    {service.name}
                                  </h4>
                                  <p className=&quot;text-xs text-purple-300&quot;>{service.description}</p>
                                </div>
                                <span className=&quot;text-xs text-purple-400 font-medium&quot;>{service.price}</span>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className=&quot;mt-6 pt-6 border-t border-purple-500/20&quot;>
                    <div className=&quot;flex items-center justify-between&quot;>
                      <p className=&quot;text-purple-300&quot;>Explore all our cutting-edge services</p>
                      <Link
                        href=&quot;/services&quot;
                        className=&quot;px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30&quot;
                      >
                        View All Services
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {_/* Company Links */}
            {_companyLinks.slice(1, _5).map(_(link) => (
              <Link
                key={link.name}
                href={link.href}
                className=&quot;text-purple-200 hover:text-white transition-colors py-2 flex items-center space-x-2&quot;
              >
                <link.icon className=&quot;w-4 h-4&quot; />
                <span>{link.name.replace(/^[🏠🚀⭐💰📊📚🎯📞🔒]/g, '').trim()}</span>
              </a>
            ))}
          </div>

          {/* Search and Actions */}
          <div className=&quot;hidden lg:flex items-center space-x-4&quot;>
            {/* Search */}
            <div className=&quot;relative&quot;>
              <Search className=&quot;absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-purple-400&quot; />
              <input
                type=&quot;text&quot;
                placeholder=&quot;Search services...&quot;
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className=&quot;w-64 pl-10 pr-4 py-2 bg-purple-900/30 border border-purple-500/30 rounded-lg text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent&quot;
              />
            </div>

            {_/* CTA Button */}
            <Link
              href=&quot;/contact&quot;
              className=&quot;px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30 shadow-lg hover:shadow-purple-500/25&quot;
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className=&quot;lg:hidden&quot;>
            <button
              onClick={toggleMenu}
              className=&quot;text-purple-200 hover:text-white transition-colors p-2&quot;
            >
              {isOpen ? <X className=&quot;w-6 h-6&quot; /> : <Menu className=&quot;w-6 h-6&quot; />}
            </button>
          </div>
        </div>
      </div>

      {_/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className=&quot;lg:hidden bg-black/95 backdrop-blur-xl border-t border-purple-500/30&quot;
          >
            <div className=&quot;px-4 py-6 space-y-6&quot;>
              {/* Mobile Search */}
              <div className=&quot;relative&quot;>
                <Search className=&quot;absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-purple-400&quot; />
                <input
                  type=&quot;text&quot;
                  placeholder=&quot;Search services...&quot;
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className=&quot;w-full pl-10 pr-4 py-3 bg-purple-900/30 border border-purple-500/30 rounded-lg text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent&quot;
                />
              </div>

              {/* Mobile Service Categories */}
              <div className=&quot;space-y-4&quot;>
                <h3 className=&quot;text-lg font-semibold text-white border-b border-purple-500/30 pb-2&quot;>
                  Services
                </h3>
                {serviceCategories.map((category) => (
                  <div key={category.title} className=&quot;space-y-2&quot;>
                    <div className=&quot;flex items-center space-x-3 text-purple-200&quot;>
                      <category.icon className=&quot;w-5 h-5&quot; />
                      <span className=&quot;font-medium&quot;>{category.title}</span>
                    </div>
                    <div className=&quot;ml-8 space-y-2&quot;>
                      {category.services.map((service) => (
                        <Link
                          key={service.name}
                          href={service.href}
                          onClick={closeMenu}
                          className=&quot;block p-3 rounded-lg bg-purple-900/20 hover:bg-purple-900/40 transition-colors&quot;
                        >
                          <h4 className=&quot;text-sm font-medium text-white&quot;>{service.name}</h4>
                          <p className=&quot;text-xs text-purple-300&quot;>{service.description}</p>
                          <span className=&quot;text-xs text-purple-400 font-medium&quot;>{service.price}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Mobile Company Links */}
              <div className=&quot;space-y-4&quot;>
                <h3 className=&quot;text-lg font-semibold text-white border-b border-purple-500/30 pb-2&quot;>
                  Company
                </h3>
                <div className=&quot;grid grid-cols-2 gap-4&quot;>
                  {companyLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={closeMenu}
                      className=&quot;flex items-center space-x-3 p-3 rounded-lg bg-purple-900/20 hover:bg-purple-900/40 transition-colors&quot;
                    >
                      <link.icon className=&quot;w-5 h-5 text-purple-400&quot; />
                      <span className=&quot;text-purple-200&quot;>{link.name.replace(/^[🏠🚀⭐💰📊📚🎯📞🔒]/g, '').trim()}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Mobile CTA */}
              <div className=&quot;pt-4 border-t border-purple-500/30&quot;>
                <Link
                  href=&quot;/contact&quot;
                  onClick={closeMenu}
                  className=&quot;block w-full text-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300&quot;
                >
                  Get Started
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Search Results Dropdown */}
      {searchQuery && filteredServices.length > 0 && (
        <div className=&quot;absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border border-purple-500/30 rounded-2xl shadow-2xl z-50&quot;>
          <div className=&quot;p-4&quot;>
            <div className=&quot;space-y-2&quot;>
              {filteredServices.slice(0, 8).map((service) => (
                <Link
                  key={service.name}
                  href={service.href}
                  className=&quot;block p-3 rounded-lg bg-purple-900/20 hover:bg-purple-900/40 transition-colors&quot;
                >
                  <div className=&quot;flex items-center justify-between&quot;>
                    <div>
                      <h4 className=&quot;text-sm font-medium text-white&quot;>{service.name}</h4>
                      <p className=&quot;text-xs text-purple-300&quot;>{service.description}</p>
                    </div>
                    <span className=&quot;text-xs text-purple-400 font-medium&quot;>{service.price}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}