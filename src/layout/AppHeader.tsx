import { useCallback  } from "react";
import { ArrowRight, Atom, BookOpen, Brain, Building, Building2, ChevronDown, Cloud, Code, Cpu, DollarSign, Eye, FileText, Globe, Handshake, Heart, HelpCircle, Leaf, Lock, Mail, MapPin, Menu, MessageCircle, Phone, Rocket, Scale, Search, Settings, Shield, ShoppingCart, Star, Target, TrendingUp, Users, X, Zap, ShieldCheck, Sparkles, Crown, Flame, Gauge, GitFork, Server, Smartphone, Database, Network, Clock, Truck, Factory, City, CheckCircle, ArrowUpRight, Play, MailIcon, BarChart3, PenTool, Key, Globe2, Car, Home   } from "lucide-react";
import React, { useEffect, useState } from "react"
import { Link   } from "react-router-dom";
import { ThemeToggle   } from "../components/ThemeToggle";
export function AppHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false)
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false)
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isSearching, setIsSearching] = useState(false)

  useEffect(() () => {
    const handleScroll = () () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  const handleSearch = async (e: React.FormEvent) () => {
  e.preventDefault()
    if (searchQuery.trim()) {
  setIsSearching(true)
      try {
  await new Promise(resolve => setTimeout(resolve, 1000)), // Simulate search;
}
}
        window.location.href = `/search?q=${encodeURIComponent(searchQuery.trim())}`
} finally {
  setIsSearching(false)
}
}
      },
  },
  }

  const navigation = [
  { na,
  m: e: 'Home', hr,
  e: f: '/', curre,
  n: t: true },
  },
  { na,
  m: e: 'Services', hr,
  e: f: '/services', curre,
  n: t: false, hasDropdo,
  w: n: true },
  },
  { na,
  m: e: 'Solutions', hr,
  e: f: '/solutions', curre,
  n: t: false, hasDropdo,
  w: n: true },
  },
  { na,
  m: e: 'Pricing', hr,
  e: f: '/pricing-guide-2030', curre,
  n: t: false },
  },
  { na,
  m: e: 'Resources', hr,
  e: f: '/resources', curre,
  n: t: false, hasDropdo,
  w: n: true },
  },
  { na,
  m: e: 'About', hr,
  e: f: '/about', curre,
  n: t: false },
  },
  { na,
  m: e: 'Contact', hr,
  e: f: '/contact', curre,
  n: t: false },
  },
  ]
  const services = [
  // AI & Business Intelligence;
    {
  na,
  m: e: 'Innovative Micro SAAS 2025',hr,
  e: f: '/innovative-micro-saas-services-2025',ic,
  o: n: Rocket,descripti,
  o: n: 'Cutting-edge AI Services',featur,
  e: d: true,col,
  o: r: 'from-purple-500 to-pink-500'
},
  {
  na,
  m: e: 'AI Business Intelligence',hr,
  e: f: '/services/ai-business-intelligence',ic,
  o: n: Brain,descripti,
  o: n: 'Machine Learning & Data Science',featur,
  e: d: true,col,
  o: r: 'from-purple-500 to-cyan-500'
},
  {
  na,
  m: e: 'AI Autonomous Supply Chain',hr,
  e: f: '/services/ai-autonomous-supply-chain-orchestrator',ic,
  o: n: Truck,descripti,
  o: n: 'Autonomous Supply Chain Management',featur,
  e: d: true,col,
  o: r: 'from-blue-500 to-indigo-500'
},
  {
  na,
  m: e: 'AI Autonomous Sales Intelligence',hr,
  e: f: '/services/ai-autonomous-sales-intelligence',ic,
  o: n: Target,descripti,
  o: n: 'Autonomous Sales & Lead Generation',featur,
  e: d: true,col,
  o: r: 'from-green-500 to-emerald-500'
}
    // AI & Healthcare;
    {
  na,
  m: e: 'AI Healthcare Platform',hr,
  e: f: '/services/ai-healthcare-platform',ic,
  o: n: Heart,descripti,
  o: n: 'Medical AI & Diagnostics',featur,
  e: d: true,col,
  o: r: 'from-red-500 to-pink-500'
},
  {
  na,
  m: e: 'Quantum AI Drug Discovery',hr,
  e: f: '/services/quantum-ai-drug-discovery-platform',ic,
  o: n: Atom,descripti,
  o: n: 'Quantum Drug Discovery',featur,
  e: d: true,col,
  o: r: 'from-purple-500 to-pink-500'
}
    // AI & Legal Tech;
    {
  na,
  m: e: 'AI Legal Contract Analyzer',hr,
  e: f: '/services/ai-autonomous-legal-contract-analyzer',ic,
  o: n: Scale,descripti,
  o: n: 'Autonomous Legal Analysis',featur,
  e: d: true,col,
  o: r: 'from-blue-500 to-indigo-500'
}
    // AI & Content;
    {
  na,
  m: e: 'AI Creative Studio',hr,
  e: f: '/services/ai-autonomous-creative-studio',ic,
  o: n: PenTool,descripti,
  o: n: 'Autonomous Content Creation',featur,
  e: d: true,col,
  o: r: 'from-orange-500 to-red-500'
},
  {
  na,
  m: e: 'AI Content Creation',hr,
  e: f: '/services/ai-content-creation',ic,
  o: n: FileText,descripti,
  o: n: 'Content Generation & Optimization',featur,
  e: d: true,col,
  o: r: 'from-blue-500 to-indigo-500'
}
    // AI & Customer Support;
    {
  na,
  m: e: 'AI Customer Success Platform',hr,
  e: f: '/services/ai-autonomous-customer-success-platform',ic,
  o: n: MessageCircle,descripti,
  o: n: 'Autonomous Customer Success',featur,
  e: d: true,col,
  o: r: 'from-blue-500 to-purple-500'
},
  {
  na,
  m: e: 'AI Customer Support',hr,
  e: f: '/services/ai-customer-support',ic,
  o: n: HelpCircle,descripti,
  o: n: 'AI-Powered Support',featur,
  e: d: true,col,
  o: r: 'from-green-500 to-blue-500'
}
    // AI & Research;
    {
  na,
  m: e: 'AI Research Assistant',hr,
  e: f: '/services/ai-autonomous-research-assistant',ic,
  o: n: BookOpen,descripti,
  o: n: 'Autonomous Research Automation',featur,
  e: d: true,col,
  o: r: 'from-purple-500 to-violet-500'
}
    // AI & Education;
    {
  na,
  m: e: 'AI Education Platform',hr,
  e: f: '/services/ai-autonomous-education-platform',ic,
  o: n: Users,descripti,
  o: n: 'Autonomous Learning Management',featur,
  e: d: true,col,
  o: r: 'from-blue-500 to-indigo-500'
}
    // AI & HR;
    {
  na,
  m: e: 'AI HR Platform',hr,
  e: f: '/services/ai-autonomous-hr-platform',ic,
  o: n: Users,descripti,
  o: n: 'Autonomous HR Management',featur,
  e: d: true,col,
  o: r: 'from-indigo-500 to-blue-500'
}
    // AI & Entertainment;
    {
  na,
  m: e: 'AI Entertainment Platform',hr,
  e: f: '/services/ai-autonomous-entertainment-platform',ic,
  o: n: Play,descripti,
  o: n: 'Autonomous Entertainment Creation',featur,
  e: d: true,col,
  o: r: 'from-purple-500 to-pink-500'
}
    // AI & Metaverse;
    {
  na,
  m: e: 'AI Metaverse Platform',hr,
  e: f: '/services/ai-autonomous-metaverse-platform',ic,
  o: n: Globe,descripti,
  o: n: 'Autonomous Virtual Worlds',featur,
  e: d: true,col,
  o: r: 'from-purple-500 to-indigo-500'
}
    // AI & Space Tech;
    {
  na,
  m: e: 'AI Space Technology',hr,
  e: f: '/services/ai-autonomous-space-technology-platform',ic,
  o: n: Rocket,descripti,
  o: n: 'Autonomous Space Operations',featur,
  e: d: true,col,
  o: r: 'from-indigo-500 to-purple-500'
}
    // AI & Green Tech;
    {
  na,
  m: e: 'AI Green Technology',hr,
  e: f: '/services/ai-autonomous-green-technology-platform',ic,
  o: n: Leaf,descripti,
  o: n: 'Autonomous Environmental Management',featur,
  e: d: true,col,
  o: r: 'from-green-500 to-emerald-500'
}
    // Cybersecurity;
    {
  na,
  m: e: 'AI Autonomous Cybersecurity',hr,
  e: f: '/services/ai-autonomous-cybersecurity-operations',ic,
  o: n: ShieldCheck,descripti,
  o: n: 'Autonomous Security Operations',featur,
  e: d: true,col,
  o: r: 'from-red-500 to-orange-500'
},
  {
  na,
  m: e: 'AI Cybersecurity',hr,
  e: f: '/services/ai-cybersecurity',ic,
  o: n: Shield,descripti,
  o: n: 'AI-Powered Security',featur,
  e: d: true,col,
  o: r: 'from-green-500 to-blue-500'
}
    // Quantum Computing;
    {
  na,
  m: e: 'Quantum AI Trading Platform',hr,
  e: f: '/services/quantum-ai-trading-platform',ic,
  o: n: Atom,descripti,
  o: n: 'Quantum-Powered Trading',featur,
  e: d: true,col,
  o: r: 'from-purple-500 to-pink-500'
},
  {
  na,
  m: e: 'Quantum Computing',hr,
  e: f: '/services/quantum-computing',ic,
  o: n: Atom,descripti,
  o: n: 'Quantum AI & Optimization',featur,
  e: d: true,col,
  o: r: 'from-purple-500 to-pink-500'
}
    // Blockchain & Web3;
    {
  na,
  m: e: 'Blockchain Governance Platform',hr,
  e: f: '/services/blockchain-autonomous-governance-platform',ic,
  o: n: GitFork,descripti,
  o: n: 'Decentralized Autonomous Governance',featur,
  e: d: true,col,
  o: r: 'from-yellow-500 to-orange-500'
}
    // Cloud & DevOps;
    {
  na,
  m: e: 'Cloud Infrastructure',hr,
  e: f: '/services/cloud-devops',ic,
  o: n: Cloud,descripti,
  o: n: 'Cloud & DevOps Solutions',featur,
  e: d: true,col,
  o: r: 'from-blue-500 to-cyan-500'
}
    // IoT & Edge Computing;
    {
  na,
  m: e: 'IoT Edge Computing',hr,
  e: f: '/services/iot-edge-computing',ic,
  o: n: Cpu,descripti,
  o: n: 'IoT & Real-time Processing',featur,
  e: d: true,col,
  o: r: 'from-blue-500 to-cyan-500'
}
    // Digital Twin;
    {
  na,
  m: e: 'Digital Twin Platform',hr,
  e: f: '/services/digital-twin',ic,
  o: n: Globe,descripti,
  o: n: 'Virtual Replicas & Simulation',featur,
  e: d: true,col,
  o: r: 'from-blue-500 to-indigo-500'
}
    // Data Analytics;
    {
  na,
  m: e: 'Data Analytics',hr,
  e: f: '/services/data-analytics',ic,
  o: n: BarChart3,descripti,
  o: n: 'Advanced Analytics & BI',featur,
  e: d: true,col,
  o: r: 'from-green-500 to-emerald-500'
}
    // IT Infrastructure;
    {
  na,
  m: e: 'IT Infrastructure',hr,
  e: f: '/services/it-infrastructure',ic,
  o: n: Server,descripti,
  o: n: 'Infrastructure & Management',featur,
  e: d: true,col,
  o: r: 'from-gray-500 to-slate-500'
},
  ]
  const solutions = [
  {
  tit,
  l: e: 'Enterprise Solutions',ite,
  m: s: [
  { nam,
  e: 'Digital Transformation', hr,
  e: f: '/solutions/digital-transformation', descripti,
  o: n: 'Complete enterprise digital transformation' },
  },
  { na,
  m: e: 'Cloud Migration', hr,
  e: f: '/solutions/cloud-migration', descripti,
  o: n: 'Seamless cloud migration strategies' },
  },
  { na,
  m: e: 'Data Strategy', hr,
  e: f: '/solutions/data-strategy', descripti,
  o: n: 'Comprehensive data strategy implementation' },
  },
  { na,
  m: e: 'AI Implementation', hr,
  e: f: '/solutions/ai-implementation', descripti,
  o: n: 'End-to-end AI implementation' },
  },
  ],
  },
  {
  tit,
  l: e: 'Industry Solutions',ite,
  m: s: [
  { nam,
  e: 'Healthcare AI', hr,
  e: f: '/solutions/healthcare-ai', descripti,
  o: n: 'AI solutions for healthcare industry' },
  },
  { na,
  m: e: 'Financial Services', hr,
  e: f: '/solutions/financial-services', descripti,
  o: n: 'FinTech and banking solutions' },
  },
  { na,
  m: e: 'Manufacturing', hr,
  e: f: '/solutions/manufacturing', descripti,
  o: n: 'Smart manufacturing solutions' },
  },
  { na,
  m: e: 'Retail & E-commerce', hr,
  e: f: '/solutions/retail-ecommerce', descripti,
  o: n: 'Retail transformation solutions' },
  },
  ],
  },
  {
  tit,
  l: e: 'Technology Solutions',ite,
  m: s: [
  { nam,
  e: 'Cybersecurity', hr,
  e: f: '/solutions/cybersecurity', descripti,
  o: n: 'Comprehensive security solutions' },
  },
  { na,
  m: e: 'Blockchain', hr,
  e: f: '/solutions/blockchain', descripti,
  o: n: 'Blockchain and Web3 solutions' },
  },
  { na,
  m: e: 'IoT Solutions', hr,
  e: f: '/solutions/iot', descripti,
  o: n: 'Internet of Things solutions' },
  },
  { na,
  m: e: 'Quantum Computing', hr,
  e: f: '/solutions/quantum-computing', descripti,
  o: n: 'Quantum computing applications' },
  },
  ],
  },
  ]
  const resources = [
  {
  tit,
  l: e: 'Learning Resources',ite,
  m: s: [
  { nam,
  e: 'Documentation', hr,
  e: f: '/docs', descripti,
  o: n: 'Technical documentation and guides' },
  },
  { na,
  m: e: 'API Reference', hr,
  e: f: '/docs/api', descripti,
  o: n: 'Complete API documentation' },
  },
  { na,
  m: e: 'SDKs & Libraries', hr,
  e: f: '/docs/sdks', descripti,
  o: n: 'Software development kits' },
  },
  { na,
  m: e: 'Code Examples', hr,
  e: f: '/docs/examples', descripti,
  o: n: 'Code samples and tutorials' },
  },
  ],
  },
  {
  tit,
  l: e: 'Research & Insights',ite,
  m: s: [
  { nam,
  e: 'Case Studies', hr,
  e: f: '/case-studies', descripti,
  o: n: 'Success stories and implementations' },
  },
  { na,
  m: e: 'White Papers', hr,
  e: f: '/white-papers', descripti,
  o: n: 'In-depth technical research' },
  },
  { na,
  m: e: 'Blog', hr,
  e: f: '/blog', descripti,
  o: n: 'Latest news and insights' },
  },
  { na,
  m: e: 'Webinars', hr,
  e: f: '/webinars', descripti,
  o: n: 'Educational webinars and events' },
  },
  ],
  },
  {
  na,
  m: e: 'White Papers',hr,
  e: f: '/white-papers',ic,
  o: n: FileText,descripti,
  o: n: 'In-depth research and analysis',featur,
  e: d: true;
},
  {
  na,
  m: e: 'Webinars',hr,
  e: f: '/webinars',ic,
  o: n: Users,descripti,
  o: n: 'Expert-led learning sessions',featur,
  e: d: true;
},
  {
  na,
  m: e: 'Documentation',hr,
  e: f: '/docs',ic,
  o: n: Code,descripti,
  o: n: 'Technical guides and APIs',featur,
  e: d: true;
},
  {
  na,
  m: e: 'FAQ & Support',hr,
  e: f: '/faq',ic,
  o: n: HelpCircle,descripti,
  o: n: 'Get help and answers',featur,
  e: d: true;
},
  {
  na,
  m: e: 'Pricing Guide 2025',hr,
  e: f: '/pricing-guide-2025',ic,
  o: n: DollarSign,descripti,
  o: n: 'Complete pricing information',featur,
  e: d: true;
},
  ]
  const quickLinks = [
  { na,
  m: e: 'Marketplace', hr,
  e: f: '/marketplace', ic,
  o: n: ShoppingCart },
  },
  { na,
  m: e: 'Request Quote', hr,
  e: f: '/request-quote', ic,
  o: n: MessageCircle },
  },
  { na,
  m: e: 'Pricing', hr,
  e: f: '/pricing', ic,
  o: n: DollarSign },
  },
  { na,
  m: e: 'Careers', hr,
  e: f: '/careers', ic,
  o: n: Users },
  },
  { na,
  m: e: 'Partners', hr,
  e: f: '/partners', ic,
  o: n: HeartHandshake },
  },
  { na,
  m: e: 'Privacy', hr,
  e: f: '/privacy', ic,
  o: n: Shield },
  },
  { na,
  m: e: 'Terms', hr,
  e: f: '/terms', ic,
  o: n: BookOpen },
  },
  ]
  const const contactInfo = {
  = {
    pho,
  n: e: '+1 302 464 0950',ema,
  i: l: 'kleber@ziontechgroup.com',addre,
  s: s: '364 E Main St STE 1008 Middletown DE 19709'
}
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
  scrolled;
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/50,
  dar: k: bg-gray-900/95 dar,
  k:border-gray-800/50' 
        : 'bg-transparent'
}`}>
      <div className="max-w-7xl mx-auto px-4,
  s: m: px-6 l,
  g:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */},
  }
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Zion Tech Group;
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */},
  }
          <nav className="hidden,
  m: d:flex space-x-8">
            {navigation.map((item) => (
  <div key={item.name} className="relative">
                <Link;
                  to={item.href},
  }
                  className="className="text-gray-700,
  hove: r: text-blue-600,
  dar: k:text-gray-300,
  dar: k:hove,
  r:text-blue-400 px-3 py-2 text-sm font-medium transition-colors duration-200";"
                  onMouseEnter={() () => {
                    if (if (item.hasDropdown) {
  ) {
                      if (item.name === 'Services') setServicesDropdownOpen(true)
                      if (item.name === 'Solutions') setSolutionsDropdownOpen(true)
                      if (item.name === 'Resources') setResourcesDropdownOpen(true)
                    },
  },
  }
                >
                  {item.name},
  },
  {item.hasDropdown && <ChevronDown className="inline-block w-4 h-4 ml-1" />},
  }
                </Link>

                {/* Services Dropdown */},
  },
  {item.name === 'Services' && servicesDropdownOpen && (
  <div;
                    className="className="absolute top-full left-0 w-screen max-w-6xl bg-white,
  dar: k: bg-gray-900 shadow-xl rounded-lg border border-gray-200 dar,
  k:border-gray-800 mt-2";"
                    onMouseLeave={() => setServicesDropdownOpen(false)},
  }
                  >
                    <div className="p-6 grid grid-cols-1,
  m: d: grid-cols-2 l,
  g:grid-cols-3 gap-6">
                      {services.map((service) => (
  <Link;
                          key={service.name},
  }
                          to={service.href},
  }
                          className="className="group p-4 rounded-lg,
  hove: r: bg-gray-50,
  dar: k:hove,
  r:bg-gray-800 transition-all duration-200";"
                        >
                          <div className="flex items-center space-x-3">
                            <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center group-hov,
  e: r:scale-110 transition-transform duration-200`}>
                              <service.icon className="w-5 h-5 text-white" />
                            </div>
                            <div className="flex-1">
                              <h3 className="font-semibold text-gray-900,
  dar: k: text-white group-hov,
  e: r:text-blue-600,
  dar: k:group-hove,
  r:text-blue-400 transition-colors duration-200">
                                {service.name},
  }
                              </h3>
                              <p className="text-sm text-gray-600,
  dar: k:text-gray-400">
                                {service.description},
  }
                              </p>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                    <div className="border-t border-gray-200,
  dar: k: border-gray-800 p-4">
                      <Link;
                        to="/services"
                        className="className="inline-flex items-center text-blue-600,
  dar: k:text-blue-400,
  hove: r:text-blue-700,
  dar: k:hove,
  r:text-blue-300 font-medium";"
                      >
                        View All Services;
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                  </div>
                )},
  {/* Solutions Dropdown */},
  },
  {item.name === 'Solutions' && solutionsDropdownOpen && (
  <div;
                    className="className="absolute top-full left-0 w-80 bg-white,
  dar: k: bg-gray-900 shadow-xl rounded-lg border border-gray-200 dar,
  k:border-gray-800 mt-2";"
                    onMouseLeave={() => setSolutionsDropdownOpen(false)},
  }
                  >
                    <div className="p-4">
                      {solutions.map((section, sectionIndex) => (
  <div key={section.title} className={sectionIndex > 0 ? 'mt-6' : ''}>
                          <h3 className="text-sm font-semibold text-gray-900,
  dar: k:text-white mb-2">
                            {section.title},
  }
                          </h3>
                          {section.items.map((solution) => (
  <Link;
                              key={solution.name},
  }
                              to={solution.href},
  }
                              className="className="block p-2,
  rounded: hover: bg-gray-50,
  dar: k:hov,
  e: r:bg-gray-800 transition-colors duration-200";"
                            >
                              <div className="font-medium text-gray-900,
  dar: k:text-white,
  hove: r:text-blue-600,
  dar: k:hove,
  r:text-blue-400 transition-colors duration-200">
                                {solution.name},
  }
                              </div>
                              <div className="text-sm text-gray-600,
  dar: k:text-gray-400">
                                {solution.description},
  }
                              </div>
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                )},
  {/* Resources Dropdown */},
  },
  {item.name === 'Resources' && resourcesDropdownOpen && (
  <div;
                    className="className="absolute top-full left-0 w-80 bg-white,
  dar: k: bg-gray-900 shadow-xl rounded-lg border border-gray-200 dar,
  k:border-gray-800 mt-2";"
                    onMouseLeave={() => setResourcesDropdownOpen(false)},
  }
                  >
                    <div className="p-4">
                      {resources.map((section, sectionIndex) => (
  <div key={section.title} className={sectionIndex > 0 ? 'mt-6' : ''}>
                          <h3 className="text-sm font-semibold text-gray-900,
  dar: k:text-white mb-2">
                            {section.title},
  }
                          </h3>
                          {section.items.map((resource) => (
  <Link;
                              key={resource.name},
  }
                              to={resource.href},
  }
                              className="className="block p-2,
  rounded: hover: bg-gray-50,
  dar: k:hov,
  e: r:bg-gray-800 transition-colors duration-200";"
                            >
                              <div className="font-medium text-gray-900,
  dar: k:text-white,
  hove: r:text-blue-600,
  dar: k:hove,
  r:text-blue-400 transition-colors duration-200">
                                {resource.name},
  }
                              </div>
                              <div className="text-sm text-gray-600,
  dar: k:text-gray-400">
                                {resource.description},
  }
                              </div>
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right side - Search, Theme, Contact */},
  }
          <div className="flex items-center space-x-4">
            {/* Search */},
  }
            <form onSubmit={handleSearch} className="hidden,
  l: g:flex relative">
              <input;
                type="text"
                placeholder="Search services..."
                value={searchQuery},
  }
                onChange={(e) => setSearchQuery(e.target.value)},
  }
                className="className="w-64 px-4 py-2 pl-10 pr-4 text-sm bg-gray-100,
  dar: k: bg-gray-800 border border-gray-300,
  dar: k:border-gray-700 rounded-lg,
  focu: s:outline-none,
  focu: s:ring-2,
  focu: s:ring-blue-500,
  focu: s:border-transparent dar,
  k:text-white";"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              {isSearching && (
  <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-500"></div>
                </div>
              )}
            </form>

            {/* Theme Toggle */},
  }
            <ThemeToggle />

            {/* Contact Button */},
  }
            <Link;
              to="/contact"
              className="className="hidden,
  m: d: inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-gradient-to-r from-blue-600 to-purple-600,
  hove: r:from-blue-700,
  hove: r:to-purple-700,
  focu: s:outline-none,
  focu: s:ring-2,
  focu: s:ring-offset-2 focu,
  s:ring-blue-500 transition-all duration-200";"
            >
              <Phone className="w-4 h-4 mr-2" />
              Contact Us;
            </Link>

            {/* Mobile menu button */},
  }
            <button;
              onClick={onClick={() => setMobileMenuOpen(!mobileMenuOpen)},
  },
  }
              className="className="md: hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700,
  dar: k:text-gray-300,
  hove: r:text-blue-600,
  dar: k:hov,
  e: r:text-blue-400,
  focu: s:outline-none,
  focu: s:ring-2,
  focu: s:ring-inset focu,
  s:ring-blue-500";"
            >
              {mobileMenuOpen ? (
  <X className="block h-6 w-6" />
              ) : (
  <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */},
  },
  {mobileMenuOpen && (
  <div className="md: hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white,
  dar: k:bg-gray-900 border-t border-gray-200 dar,
  k:border-gray-800">
            {/* Mobile Search */},
  }
            <form onSubmit={handleSearch} className="relative mb-4">
              <input;
                type="text"
                placeholder="Search services..."
                value={searchQuery},
  }
                onChange={(e) => setSearchQuery(e.target.value)},
  }
                className="className="w-full px-4 py-2 pl-10 pr-4 text-sm bg-gray-100,
  dar: k: bg-gray-800 border border-gray-300,
  dar: k:border-gray-700 rounded-lg,
  focu: s:outline-none,
  focu: s:ring-2,
  focu: s:ring-blue-500,
  focu: s:border-transparent dar,
  k:text-white";"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            </form>

            {/* Mobile Navigation */},
  },
  {navigation.map((item) => (
  <Link;
                key={item.name},
  }
                to={item.href},
  }
                className="className="block px-3 py-2 text-base font-medium text-gray-700,
  dar: k: text-gray-300,
  hove: r:text-blue-600,
  dar: k:hov,
  e: r:text-blue-400,
  hove: r:bg-gray-50,
  dar: k:hove,
  r:bg-gray-800 rounded-md transition-colors duration-200";"
                onClick={onClick={() => setMobileMenuOpen(false)},
  },
  }
              >
                {item.name},
  }
              </Link>
            ))},
  {/* Mobile Contact Button */},
  }
            <Link;
              to="/contact"
              className="className="mt-4 block w-full text-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-gradient-to-r from-blue-600 to-purple-600,
  hove: r: from-blue-700,
  hove: r:to-purple-700,
  focu: s:outline-none,
  focu: s:ring-2,
  focu: s:ring-offset-2 focu,
  s:ring-blue-500 transition-all duration-200";"
              onClick={onClick={() => setMobileMenuOpen(false)},
  },
  }
            >
              <Phone className="w-4 h-4 inline mr-2" />
              Contact Us;
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
