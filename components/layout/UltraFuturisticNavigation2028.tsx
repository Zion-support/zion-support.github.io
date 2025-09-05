import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
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
} from 'lucide-react';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const serviceCategories = [
  {
    title: '🚀 2028 Futuristic Innovations',
    icon: Rocket,
    color: 'from-violet-600 to-purple-600',
    description: 'Beyond the future of technology',
    services: [
      { name: 'AI Climate Prediction Platform', href: '/ai-climate-prediction-platform', description: 'Predict climate changes with 99.9% accuracy', price: '$2,999/month' },
      { name: 'Quantum Cybersecurity Firewall', href: '/quantum-cybersecurity-firewall', description: 'Unbreakable quantum encryption', price: '$4,999/month' },
      { name: 'Autonomous Drone Delivery Network', href: '/autonomous-drone-delivery-network', description: 'AI-powered drone delivery', price: '$1,999/month' },
      { name: 'AI Healthcare Diagnosis Platform', href: '/ai-healthcare-diagnosis-platform', description: 'Revolutionary medical diagnosis', price: '$3,999/month' }
    ]
  },
  {
    title: '🏙️ Smart City & Infrastructure',
    icon: Building,
    color: 'from-blue-600 to-cyan-600',
    description: 'Intelligent urban solutions',
    services: [
      { name: 'Smart City Infrastructure Management', href: '/smart-city-infrastructure-management', description: 'IoT and AI urban optimization', price: '$5,999/month' },
      { name: 'IoT Energy Management System', href: '/iot-energy-management-system', description: 'Smart energy optimization', price: '$1,999/month' },
      { name: 'Digital Twin Manufacturing Platform', href: '/digital-twin-manufacturing-platform', description: 'Virtual manufacturing replicas', price: '$4,999/month' },
      { name: 'Autonomous Manufacturing AI', href: '/autonomous-manufacturing-ai', description: 'Self-optimizing factories', price: '$6,999/month' }
    ]
  },
  {
    title: '⚛️ Quantum & Advanced Tech',
    icon: Atom,
    color: 'from-indigo-600 to-blue-600',
    description: 'Quantum computing and beyond',
    services: [
      { name: 'Quantum Financial Trading Platform', href: '/quantum-financial-trading-platform', description: 'Quantum-powered trading', price: '$8,999/month' },
      { name: 'Quantum Machine Learning Platform', href: '/quantum-machine-learning-platform', description: 'Quantum computing for ML', price: '$7,999/month' },
      { name: 'Quantum Internet Security Gateway', href: '/quantum-internet-security-gateway', description: 'Unbreakable internet security', price: '$3,999/month' },
      { name: 'Quantum Internet Protocol', href: '/quantum-internet-protocol', description: 'Next-generation internet', price: '$5,999/month' }
    ]
  },
  {
    title: '🤖 AI & Machine Learning',
    icon: Brain,
    color: 'from-emerald-600 to-teal-600',
    description: 'Next-generation AI solutions',
    services: [
      { name: 'AI Customer Service Automation', href: '/ai-customer-service-automation', description: 'Intelligent customer support', price: '$899/month' },
      { name: 'AI Education Platform', href: '/ai-education-platform', description: 'Personalized learning with AI', price: '$1,499/month' },
      { name: 'AI Content Creation Suite', href: '/ai-content-creation-suite', description: 'Unlimited AI content creation', price: '$1,299/month' },
      { name: 'AI Legal Research Platform', href: '/ai-legal-research-platform', description: 'Intelligent legal research', price: '$2,999/month' }
    ]
  },
  {
    title: '⛓️ Blockchain & Web3',
    icon: Layers,
    color: 'from-orange-600 to-red-600',
    description: 'Decentralized solutions',
    services: [
      { name: 'Blockchain Supply Chain Transparency', href: '/blockchain-supply-chain-transparency', description: 'End-to-end supply chain visibility', price: '$2,499/month' },
      { name: 'Smart Contract Automation Platform', href: '/smart-contract-automation', description: 'Automated blockchain contracts', price: '$1,999/month' },
      { name: 'DeFi Yield Optimization', href: '/defi-yield-optimization', description: 'Maximize DeFi returns', price: '$3,999/month' },
      { name: 'NFT Marketplace Platform', href: '/nft-marketplace-platform', description: 'Complete NFT ecosystem', price: '$2,999/month' }
    ]
  },
  {
    title: '🚗 Autonomous & Mobility',
    icon: Car,
    color: 'from-red-600 to-pink-600',
    description: 'Self-driving and mobility solutions',
    services: [
      { name: 'Autonomous Vehicle Fleet Management', href: '/autonomous-vehicle-fleet-management', description: 'Intelligent fleet management', price: '$3,999/month' },
      { name: 'Smart Traffic Management System', href: '/smart-traffic-management', description: 'AI traffic optimization', price: '$4,999/month' },
      { name: 'Electric Vehicle Charging Network', href: '/ev-charging-network', description: 'Smart EV infrastructure', price: '$2,999/month' },
      { name: 'Mobility as a Service Platform', href: '/mobility-as-a-service', description: 'Integrated mobility solutions', price: '$1,999/month' }
    ]
  },
  {
    title: '🏥 Healthcare & Biotech',
    icon: Heart,
    color: 'from-pink-600 to-rose-600',
    description: 'Advanced healthcare solutions',
    services: [
      { name: 'AI Drug Discovery Platform', href: '/ai-drug-discovery-platform', description: 'Accelerate drug development', price: '$9,999/month' },
      { name: 'Personalized Medicine AI', href: '/personalized-medicine-ai', description: 'Tailored treatment plans', price: '$4,999/month' },
      { name: 'Telemedicine AI Platform', href: '/telemedicine-ai-platform', description: 'Intelligent remote healthcare', price: '$2,999/month' },
      { name: 'Medical Imaging AI', href: '/medical-imaging-ai', description: 'Advanced diagnostic imaging', price: '$3,999/month' }
    ]
  },
  {
    title: '🎓 Education & Training',
    icon: GraduationCap,
    color: 'from-green-600 to-emerald-600',
    description: 'Next-generation learning',
    services: [
      { name: 'Virtual Reality Learning Platform', href: '/vr-learning-platform', description: 'Immersive educational experiences', price: '$1,999/month' },
      { name: 'AI Tutoring System', href: '/ai-tutoring-system', description: 'Personalized AI tutoring', price: '$899/month' },
      { name: 'Corporate Training AI', href: '/corporate-training-ai', description: 'Intelligent employee training', price: '$2,499/month' },
      { name: 'Language Learning AI', href: '/language-learning-ai', description: 'AI-powered language acquisition', price: '$1,299/month' }
    ]
  },
  {
    title: '⚖️ Legal & Compliance',
    icon: Scale,
    color: 'from-slate-600 to-gray-600',
    description: 'Legal technology solutions',
    services: [
      { name: 'Contract Analysis AI', href: '/contract-analysis-ai', description: 'Intelligent contract review', price: '$2,999/month' },
      { name: 'Compliance Monitoring Platform', href: '/compliance-monitoring-platform', description: 'Automated compliance tracking', price: '$3,999/month' },
      { name: 'Legal Document Automation', href: '/legal-document-automation', description: 'Automated legal documents', price: '$1,999/month' },
      { name: 'Regulatory Change Tracker', href: '/regulatory-change-tracker', description: 'Monitor regulatory updates', price: '$1,499/month' }
    ]
  },
  {
    title: '🌍 Sustainability & Green Tech',
    icon: Leaf,
    color: 'from-emerald-600 to-green-600',
    description: 'Environmental solutions',
    services: [
      { name: 'Carbon Footprint Tracking', href: '/carbon-footprint-tracking', description: 'Monitor environmental impact', price: '$1,499/month' },
      { name: 'Renewable Energy Management', href: '/renewable-energy-management', description: 'Optimize green energy', price: '$2,999/month' },
      { name: 'Waste Management AI', href: '/waste-management-ai', description: 'Intelligent waste optimization', price: '$1,999/month' },
      { name: 'Sustainable Supply Chain', href: '/sustainable-supply-chain', description: 'Green supply chain solutions', price: '$3,999/month' }
    ]
  }
];

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
];

const resourceLinks = [
  { name: '📖 Documentation', href: '/docs', icon: BookOpen },
  { name: '🎥 Video Tutorials', href: '/tutorials', icon: Video },
  { name: '💡 API Reference', href: '/api', icon: Code },
  { name: '🛠️ Developer Tools', href: '/dev-tools', icon: Wrench },
  { name: '📱 Mobile Apps', href: '/mobile', icon: Smartphone },
  { name: '☁️ Cloud Services', href: '/cloud', icon: Cloud },
  { name: '🔐 Security Center', href: '/security', icon: Shield },
  { name: '📊 Analytics', href: '/analytics', icon: BarChart3 }
];

export default function UltraFuturisticNavigation2028() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const handleCategoryHover = (categoryTitle: string) => {
    setActiveCategory(categoryTitle);
  };

  const handleCategoryLeave = () => {
    setActiveCategory(null);
  };

  const filteredServices = serviceCategories.flatMap(category =>
    category.services.filter(service =>
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

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

            {/* Company Links */}
            {companyLinks.slice(1, 5).map((link) => (
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

            {/* CTA Button */}
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

      {/* Mobile Menu */}
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
  );
}