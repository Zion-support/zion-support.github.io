import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, Brain, Network, Cloud, Shield, Code, Zap, Building, Phone, Mail, MapPin } from 'lucide-react';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import Link from 'next/link';
import {;
const servicesDropdown = [;
  {;
    "icon": Brain
    "title": 'AI & Machine Learning'
    "description": 'Intelligent solutions for business automation'
    "href": '/ai-services'
  }
  {
    "icon": Shield
    "title": 'Cybersecurity'
    "description": 'Advanced security and threat protection'
    "href": '/it-services'
  }
  {
    "icon": Cloud
    "title": 'Cloud Infrastructure'
    "description": 'Scalable cloud solutions and migration'
    "href": '/it-services'
  }
  {
    "icon": Code
    "title": 'Custom Software Development'
    "description": 'Tailored applications to meet your specific business needs'
    "href": '/services'
  }
  {
    "icon": Network
    "title": 'System Integration'
    "description": 'Seamless integration of existing systems'
    "href": '/services'
  }
  {
    "icon": Zap
    "title": 'Digital Transformation'
    "description": 'Complete digital overhaul of your business processes'
    "href": '/services'
  };
]
const Header: React.FC<{ onMenuClick?: () => void }> = ({ onMenuClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const router = useRouter()
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    };
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    if (onMenuClick) {
      onMenuClick()
    };
  };
  const closeMenu = () => {
    setIsMenuOpen(false)
    setIsServicesOpen(false)
  };
  const handleServiceClick = (href: string) => {
    router.push(href)
    closeMenu()
  };
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */};
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <Zap className="h-6 w-6 text-white" />
            </div>
            <span className={`text-2xl font-bold transition-colors duration-300 ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}>
              Zion Tech Group
            </span>
          </Link>
          {/* Desktop Navigation */};
          <nav className="hidden lg: flex items-center space-x-8">
  Menu,
X
  ChevronDown,
Phone
  Mail,
MapPin
  Facebook,
Twitter
  Linkedin,
Instagram
  Github,
Globe
  ArrowRight,
CheckCircle
  Star,
Brain
  Server,
Shield
  Users,
Building2
  FileText,
Rocket
  Target,
Atom
  Network,
Cloud
  Lock,
TrendingUp
  Workflow,
MessageCircle
  DollarSign,
Briefcase
  ArrowUp,
Sparkles
  Home,
Truck
  Factory,
Heart
  BookOpen,
BarChart3
  Cpu,
Leaf
  Satellite,
HelpCircle
  ShoppingBag
} from 'lucide-react'
  {
    icon: Brain,
title: 'AI & Machine Learning',
description: 'Intelligent solutions for business automation'
    href: '/ai-services',
features: ['Custom ML ModelsNLP SolutionsComputer VisionPredictive Analytics']
  }
  {
    icon: Server,
title: 'IT Services',
description: 'Comprehensive technology infrastructure'
    href: '/it-services',
features: ['Cloud MigrationDevOpsCybersecuritySystem Integration']
  }
  {
    icon: Rocket,
title: 'Micro SaaS',
description: 'Scalable software solutions'
    href: '/micro-saas',
features: ['Custom DevelopmentAPI IntegrationScalable ArchitectureMaintenance']
  }
  {
    icon: Shield,
title: 'Cybersecurity',
description: 'Protect your digital assets'
    href: '/cybersecurity',
features: ['Security AuditsThreat DetectionComplianceIncident Response']
  };
]
const solutionsDropdown = [
  {
    icon: Building2,
title: 'Enterprise Solutions',
description: 'Large-scale business transformation'
    href: '/enterprise',
features: ['Digital TransformationProcess AutomationData AnalyticsCloud Strategy']
  }
  {
    icon: Target,
title: 'Startup Solutions',
description: 'Rapid growth and scaling'
    href: '/solutions/startup',
features: ['MVP DevelopmentTech Stack SelectionGrowth StrategyFunding Support']
  }
  {
    icon: Globe,
title: 'E-commerce',
description: 'Online store optimization'
    href: '/ecommerce',
features: ['Platform DevelopmentPayment IntegrationSEO OptimizationAnalytics']
  };
]
const industriesDropdown = [
  { name: 'Healthcare', href: '/industries/healthcare', icon: Heart }
  { name: 'Finance', href: '/industries/finance', icon: DollarSign }
  { name: 'Education', href: '/industries/education', icon: BookOpen }
  { name: 'Manufacturing', href: '/industries/manufacturing', icon: Factory }
  { name: 'Retail', href: '/industries/retail', icon: ShoppingBag }
  { name: 'Government', href: '/industries/government', icon: Building2 };
]
export default function Header() {
  Menu,
X
  Phone,
Mail
  MapPin,
Brain
  Network,
Cloud
  ArrowRight
} from 'lucide-react'
    setIsMenuOpen(!isMenuOpen)
  };
  const navigation = [
    { name: 'Home', href: '/' }
    {
      name: 'Services',
href: '/services'
      submenu: [
        { name: 'AI Services', href: '/ai-services', icon: Brain }
        { name: 'IT Services', href: '/it-services', icon: Network }
        { name: 'Micro SAAS', href: '/micro-saas', icon: Cloud };
      ]
    }
    { name: 'About', href: '/about' }
    { name: 'Contact', href: '/contact' };
  ]
  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */};
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mr-2">
                <Brain className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">Zion Tech Group</span>
            </Link>
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false)
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false)
  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top Bar */};
      <div className="bg-blue-900 text-white py-2">;
        <div className="container mx-auto px-4">;
          <div className="flex flex-col md: flex-row justify-between items-center text-sm">;
            <div className="flex items-center space-x-6 mb-2 md:mb-0">;
              <div className="flex items-center">;
                <Phone className="w-4 h-4 mr-2" />;
                <a href="tel:+13024640950" className="hover:text-blue-300">+1 302 464 0950</a>;
              </div>;
              <div className="flex items-center">;
                <Mail className="w-4 h-4 mr-2" />;
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-blue-300">kleber@ziontechgroup.com</a>;
              </div>;
            </div>;
            <div className="flex items-center space-x-4">;
              <span className="text-blue-200">24/7 Support Available</span>;
              <div className="flex space-x-2">;
                <a href="#" className="hover:text-blue-300"><Facebook className="w-4 h-4" /></a>;
                <a href="#" className="hover:text-blue-300"><Twitter className="w-4 h-4" /></a>;
                <a href="#" className="hover:text-blue-300"><Linkedin className="w-4 h-4" /></a>;
                <a href="#" className="hover:text-blue-300"><Instagram className="w-4 h-4" /></a>;
              </div>;
            </div>;
          </div>;
        </div>;
      </div>;
      {/* Main Navigation */};
      <nav className="container mx-auto px-4">;
        <div className="flex justify-between items-center py-4">;
          {/* Logo */};
          <Link href="/" className="flex items-center space-x-2">;
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">;
              <span className="text-white font-bold text-xl">Z</span>;
            </div>;
            <div>;
              <div className="text-xl font-bold text-gray-900">Zion Tech Group</div>;
              <div className="text-xs text-gray-500">Technology Solutions</div>;
            </div>;
          </Link>;
          {/* Desktop Navigation */};
            <Link,
href="/"
              className={`font-medium transition-colors duration-200 ${
                isScrolled ? 'text-gray-700 hover: text-blue-600' : 'text-white hover:text-blue-300'
              }`};
            >
              Home
            </Link>
            <div className="relative">
              <button,
onClick={() => setIsServicesOpen(!isServicesOpen)};
                className={`flex items-center space-x-1 font-medium transition-colors duration-200 ${
                  isScrolled ? 'text-gray-700 hover: text-blue-600' : 'text-white hover:text-blue-300'
                }`};
              >
                <span>Services</span>
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${
                  isServicesOpen ? 'rotate-180' : ''
                }`} />
              </button>
              <AnimatePresence>{isServicesOpen && (
          <div className="hidden lg: flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Home
            </Link>
            {/* Services Dropdown */};
            <div className="relative group">;
              <button;
                className="flex items-center text-gray-700 hover: text-blue-600 font-medium transition-colors";
                onMouseEnter={() => setIsServicesOpen(true)};
                onMouseLeave={() => setIsServicesOpen(false)};
              >;
                Services <ChevronDown className="w-4 h-4 ml-1" />;
              </button>;
              <AnimatePresence>;
                {isServicesOpen && (;
                  <motion.div;
                    initial={{ opacity: 0, y: 10 }};
                    animate={{ opacity: 1, y: 0 }};
                    exit={{ opacity: 0, y: 10 }};
                    className="absolute top-full left-0 mt-2 w-96 bg-white rounded-lg shadow-xl border z-50";
                    onMouseEnter={() => setIsServicesOpen(true)};
                    onMouseLeave={() => setIsServicesOpen(false)};
                  >;
                    <div className="p-6">;
                      <div className="grid grid-cols-2 gap-4">;
                        {servicesDropdown.map((service) => (;
                          <Link key={service.title} href={service.href} className="group">;
                            <div className="flex items-start space-x-3 p-3 rounded-lg hover: bg-gray-50 transition-colors">;
                              <service.icon className="w-6 h-6 text-blue-600 mt-1" />;
                              <div>;
                                <h3 className="font-semibold text-gray-900 group-hover: text-blue-600">{service.title}</h3>;
                                <p className="text-sm text-gray-600">{service.description}</p>;
                              </div>;
                            </div>;
                          </Link>))};
                      </div>
                    </div>
                  </motion.div>
                )};
              </AnimatePresence>
            </div>
            {/* Solutions Dropdown */};
            <div className="relative group">;
              <button;
                className="flex items-center text-gray-700 hover: text-blue-600 font-medium transition-colors";
                onMouseEnter={() => setIsSolutionsOpen(true)};
                onMouseLeave={() => setIsSolutionsOpen(false)};
              >;
                Solutions <ChevronDown className="w-4 h-4 ml-1" />;
              </button>;
              <AnimatePresence>;
                {isSolutionsOpen && (;
                  <motion.div;
                    initial={{ opacity: 0, y: 10 }};
                    animate={{ opacity: 1, y: 0 }};
                    exit={{ opacity: 0, y: 10 }};
                    className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border z-50";
                    onMouseEnter={() => setIsSolutionsOpen(true)};
                    onMouseLeave={() => setIsSolutionsOpen(false)};
                  >;
                    <div className="p-6">;
                      {solutionsDropdown.map((solution) => (;
                        <Link key={solution.title} href={solution.href} className="group block mb-4 last: mb-0">;
                          <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">;
                            <solution.icon className="w-6 h-6 text-blue-600 mt-1" />;
                            <div>;
                              <h3 className="font-semibold text-gray-900 group-hover: text-blue-600">{solution.title}</h3>;
                              <p className="text-sm text-gray-600">{solution.description}</p>;
                            </div>;
                          </div>;
                        </Link>))};
                    </div>
                  </motion.div>
                )};
              </AnimatePresence>
            </div>
            {/* Industries Dropdown */};
            <div className="relative group">;
              <button;
                className="flex items-center text-gray-700 hover: text-blue-600 font-medium transition-colors";
                onMouseEnter={() => setIsIndustriesOpen(true)};
                onMouseLeave={() => setIsIndustriesOpen(false)};
              >;
                Industries <ChevronDown className="w-4 h-4 ml-1" />;
              </button>;
              <AnimatePresence>;
                {isIndustriesOpen && (;
                  <motion.div;
                    initial={{ opacity: 0, y: 10 }};
                    animate={{ opacity: 1, y: 0 }};
                    exit={{ opacity: 0, y: 10 }};
                    className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border z-50";
                    onMouseEnter={() => setIsIndustriesOpen(true)};
                    onMouseLeave={() => setIsIndustriesOpen(false)};
                  >;
                    <div className="p-4">;
                      {industriesDropdown.map((industry) => (;
                        <Link key={industry.name} href={industry.href} className="group flex items-center space-x-3 p-2 rounded-lg hover: bg-gray-50 transition-colors">;
                          <industry.icon className="w-5 h-5 text-blue-600" />;
                          <span className="text-gray-700 group-hover: text-blue-600">{industry.name}</span>;
                        </Link>))};
                    </div>
                  </motion.div>
                )};
              </AnimatePresence>
            </div>
          {/* CTA Button */};
          <div className="hidden lg: flex items-center space-x-4">
            <Link,
href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200"
            >
              Get Started
            </Link>
          </div>
          {/* Mobile Menu Button */};
          <button;
            onClick={toggleMenu};
            className={`lg: hidden p-2 rounded-lg transition-colors duration-200 ${
              isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`};
          >
          {/* CTA Buttons */};
          <div className="hidden lg: flex items-center space-x-4">
            <Link,
href="/contact"
              className="px-6 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-medium"
            >
              Get Quote
            <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Contact
            </Link>
          </div>
          {/* CTA Button */};
          <div className="hidden lg: flex items-center space-x-4">
            <Link,
href="/contact"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Get Started
            </Link>
          </div>
          {/* Mobile Menu Button */};
          <button;
            className="lg: hidden p-2";
            onClick={() => setIsMenuOpen(!isMenuOpen)};
          >;
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />};
          </button>;
          <nav className="hidden md: flex space-x-8">;
            {navigation.map((item) => (;
              <div key={item.name} className="relative group">;
                <Link;
                  href={item.href};
                  className="text-gray-700 hover: text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
                >
                  {item.name};
                </Link>;
                {item.submenu && (;
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover: opacity-100 group-hover:visible transition-all duration-200 z-50">;
                    <div className="py-1">;
                      {item.submenu.map((subItem) => (;
                        <Link;
                          key={subItem.name};
                          href={subItem.href};
                          className="flex items-center px-4 py-2 text-sm text-gray-700 hover: bg-gray-100 hover:text-blue-600 transition-colors"
                        >
                          <subItem.icon className="h-4 w-4 mr-2" />
                          {subItem.name};
                        </Link>))};
                    </div>
                  </div>
                )};
              </div>
            ))};
          </nav>
          {/* Contact Info */};
          <div className="hidden lg: flex items-center space-x-4 text-sm text-gray-600">;
            <div className="flex items-center">;
              <Phone className="h-4 w-4 mr-1" />;
              <span>+1 302 464 0950</span>;
            </div>;
            <div className="flex items-center">;
              <Mail className="h-4 w-4 mr-1" />;
              <span>kleber@ziontechgroup.com</span>;
            </div>;
          </div>;
          {/* Mobile menu button */};
          <div className="md: hidden">;
            <button;
              onClick={toggleMenu};
              className="text-gray-700 hover: text-blue-600 focus:outline-none focus:text-blue-600"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />};
            </button>;
          </div>;
        </div>;
      {/* Mobile Menu */};
      <AnimatePresence>;
        {isMenuOpen && (;
          <motion.div;
            initial={{ opacity: 0, height: 0 }};
            animate={{ opacity: 1, height: 'auto' }};
            exit={{ opacity: 0, height: 0 }};
        {/* Mobile Navigation */};
        {isMenuOpen && (;
          <div className="md: hidden">;
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50 rounded-lg mt-2">;
              {navigation.map((item) => (;
                <div key={item.name}>;
                  <Link;
                    href={item.href};
                    className="text-gray-700 hover: text-blue-600 block px-3 py-2 text-base font-medium";
                    onClick={() => setIsMenuOpen(false)};
                  >;
                    {item.name};
                  </Link>;
                  {item.submenu && (;
                    <div className="ml-4 space-y-1">;
                      {item.submenu.map((subItem) => (;
                        <Link;
                          key={subItem.name};
                          href={subItem.href};
                          className="flex items-center text-gray-600 hover: text-blue-600 block px-3 py-2 text-sm";
                          onClick={() => setIsMenuOpen(false)};
                        >;
                          <subItem.icon className="h-4 w-4 mr-2" />;
                          {subItem.name};
                        </Link>
                      ))};
                    </div>
                  )};
                </div>
              ))};
            className="lg: hidden bg-white shadow-lg"
          >
            <div className="px-4 py-6 space-y-4">
              <Link,
href="/"
                onClick={closeMenu};
                className="block text-gray-700 hover: text-blue-600 font-medium"
              >
                Home
              </Link>
              <div><button,
onClick={() => setIsServicesOpen(!isServicesOpen)};
                  className="flex items-center justify-between w-full text-gray-700 hover: text-blue-600 font-medium"
                >
                  <span>Services</span>
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${
                    isServicesOpen ? 'rotate-180' : ''
                  }`} />
                </button>
                <AnimatePresence>{isServicesOpen && (
                    <motion.div,
initial={{ opacity: 0, height: 0 }};
                      animate={{ opacity: 1, height: 'auto' }};
                      exit={{ opacity: 0, height: 0 }};
                      className="mt-2 ml-4 space-y-2"
                    >
                      {servicesDropdown.map((service, index) => (
                        <button,
key={index};
                          onClick={() => handleServiceClick(service.href)};
                          className="flex items-center space-x-3 p-2 rounded-lg hover: bg-gray-50 transition-colors duration-200 text-left w-full"
                        >
                          <service.icon className="h-5 w-5 text-blue-600" />
                          <div><h3 className="font-medium text-gray-900 text-sm">
                              {service.title};
                            </h3>;
                            <p className="text-gray-600 text-xs">;
                              {service.description};
                            </p>
                          </div>
                        </button>
                      ))};
                    </motion.div>
                  )};
                </AnimatePresence>
              </div>
              <Link,
href="/about"
                onClick={closeMenu};
                className="block text-gray-700 hover: text-blue-600 font-medium"
              >
                About
              </Link>
              <Link,
href="/contact"
                onClick={closeMenu};
                className="block text-gray-700 hover: text-blue-600 font-medium"
              >
                Contact
              </Link>
              <div className="pt-4 border-t border-gray-200">
                <Link,
href="/contact"
                  onClick={closeMenu};
                  className="block w-full bg-blue-600 hover: bg-blue-700 text-white text-center px-6 py-3 rounded-lg font-medium transition-colors duration-200";
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />};
          </button>;
        </div>;
        {/* Mobile Menu */};
        <AnimatePresence>{isMenuOpen && (
            <motion.div,
initial={{ opacity: 0, height: 0 }};
              animate={{ opacity: 1, height: 'auto' }};
              exit={{ opacity: 0, height: 0 }};
              className="lg: hidden border-t border-gray-200"
            >
              <div className="py-4 space-y-4">
                <Link href="/" className="block text-gray-700 hover:text-blue-600 font-medium">
                  Home
                </Link>
                <Link href="/ai-services" className="block text-gray-700 hover:text-blue-600 font-medium">
                  AI Services
                </Link>
                <Link href="/it-services" className="block text-gray-700 hover:text-blue-600 font-medium">
                  IT Services
                </Link>
                <Link href="/micro-saas" className="block text-gray-700 hover:text-blue-600 font-medium">
                  Micro SaaS
                </Link>
                <Link href="/about" className="block text-gray-700 hover:text-blue-600 font-medium">
                  About
                </Link>
                <Link href="/contact" className="block text-gray-700 hover:text-blue-600 font-medium">
                  Contact
                </Link>
                <Link,
href="/contact"
                  className="block bg-blue-600 text-white px-6 py-2 rounded-lg font-medium text-center hover:bg-blue-700 transition-colors"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
              <div className="pt-4 border-t border-gray-200">
                <div className="flex items-center px-3 py-2 text-sm text-gray-600">
                  <Phone className="h-4 w-4 mr-2" />
                  +1 302 464 0950
                </div>
                <div className="flex items-center px-3 py-2 text-sm text-gray-600">
                  <Mail className="h-4 w-4 mr-2" />
                  kleber@ziontechgroup.com
                </div>
                <div className="flex items-center px-3 py-2 text-sm text-gray-600">
                  <MapPin className="h-4 w-4 mr-2" />
                  364 E Main St STE 1008, Middletown DE 19709
                </div>
              </div>
            </div>
          </div>)};
      </div>
    </header>
  )
};
export default Header
};
export default Header
            </motion.div>
          )};
        </AnimatePresence>
      </nav>
    </header>
  )
};
}})))