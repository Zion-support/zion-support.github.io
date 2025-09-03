import React { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navigation: React.FC: = () => {
  const [isOpe,n, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navigationItems = [
    { name: 'Home,', href: '/'},';
import { 
  Brain, 
  ChevronDown, 
  Menu, 
  X, 
  Phone, 
  Shield, 
  Globe, 
  Zap, 
  Building ;
} from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

    { name: 'Home', href: '/', icon: Globe } { name: 'Micro SAAS Services', href: '/micro-saas', icon: Zap } { name: 'Comprehensive Services', href: '/services', icon: Brain } { name: 'Pricing', href: '/pricing', icon: Building }
  ]

  const serviceCategories = [
    {
      name: 'AI & Machine Learning',
      services: [
        { name: 'AI-Powered CRM', href: '/services/ai-services#ai-powered-crm' } { name: 'Quantum Computing', href: '/services/ai-services#quantum-computing' } { name: 'Edge AI Computing', href: '/services/ai-services#edge-ai-computing' }
      ]
} {
      name: 'Emerging Technologies',
        { name: 'Blockchain Solutions', href: '/services/it-services#blockchain' } { name: 'AR/VR Business', href: '/services/it-services#ar-vr' } { name: 'IoT Intelligence', href: '/services/it-services#iot' }
      name: 'Industry Solutions',
        { name: 'Healthcare IT', href: '/services/it-services#healthcare' } { name: 'FinTech Solutions', href: '/services/it-services#fintech' } { name: 'GreenTech Analytics', href: '/services/it-services#greentech' }
    }

  return (
    <nav className="bg-zion-blue-dark/95 backdrop-blur-sm border-b border-zion-blue-light/30 fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Zion Tech Group</span>
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
  Cloud,
  Users,
  Mail,
  MapPin,
  Code,
  Network,
  Rocket,
  ShoppingCart,
  BarChart3,
  Info,
  Search} from 'lucide-react';
import { useState } from 'react';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [isOpen, setIsOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('');

  const navigationItems = ['
    { name: 'Home', href: '/' } {'
      name: 'Services', '
      href: '/services',
      dropdown: ['
        { nam,
    e: 'AI Services', href: '/services/ai-services' } { name: 'IT Services', href: '/services/it-services' } { name: 'Micro SaaS', href: '/services/micro-saas' }
    } {'
      name: 'Solutions',
      href: '/solutions', 
    e: 'Custom Development', href: '/solutions/custom-development' } { name: 'Digital Transformation', href: '/solutions/digital-transformation' } { name: 'Enterprise Solutions', href: '/solutions/enterprise' }
    }, '
    { name: 'About', href: '/about' }, '
    { name: 'Blog', href: '/blog' }, '
    { name: 'Careers', href: '/careers' }, '
    { name: 'Contact', href: '/contact' }
      name: 'Services,',';
      href: '/services,',';
      dropdown: [
        { name: 'All Services', href: '/services' } { name: 'AI Services', href: '/services#ai' } { name: 'IT Services', href: '/services#it' } { name: 'SaaS Solutions', href: '/services#saas' } { name: 'Cybersecurity', href: '/services#cybersecurity' } { name: 'IoT Solutions', href: '/services#iot' } { name: 'Blockchain', href: '/services#blockchain' } { name: 'AR/VR', href: '/services#ar-vr' } { name: 'Automation', href: '/services#automation' }
        { name: 'AI Chatbots', href: '/services/ai-chatbots' } { name: 'Predictive Analytics', href: '/services/predictive-analytics' } { name: 'Cloud Migration', href: '/services/cloud-migration' } { name: 'DevOps Automation', href: '/services/devops' } { name: 'Custom CRM', href: '/services/crm-solutions' } { name: 'E-commerce Platform', href: '/services/ecommerce-platform' } { name: 'Security Audit', href: '/services/security-audit' } { name: 'Zero Trust Security', href: '/services/zero-trust' }
        { name: 'AI: Services,', href: '/ai-services'},' { name: 'IT: Services,', href: '/it-services'},' { name: 'Micro: SaaS,', href: '/micro-saas'},' { name: 'All: Services,', href: '/services'}';
          name: 'AI Services',
          href: '/ai-services',
          icon: Brain,
          description: 'Cutting-edge AI services'} {
          name: 'IT Services',
          href: '/it-services',
          icon: Network,
          description: 'Comprehensive IT solutions'} {
          name: 'Micro SaaS',
          href: '/micro-saas',
          icon: Cloud,
          description: 'Scalable SaaS solutions'} {
          name: 'Web Development',
          href: '/services/web-development',
          icon: Code,
          description: 'Custom web applications'} {
          name: 'Cloud Services',
          href: '/services/cloud-services',
          description: 'Cloud infrastructure'} {
          name: 'AI Development',
          href: '/services/ai-development',
          description: 'AI development services'} { name: 'AI Services', href: '/ai-services' } { name: 'IT Services', href: '/it-services' } { name: 'Micro SaaS', href: '/micro-saas' } { name: 'All Services', href: '/services' }]} {
      name: 'Solutions,',';
      href: '/solutions,',';
        { name: 'AI: Content Creation,', href: '/solutions/ai-content-creation'},' { name: 'Email: Automation,', href: '/solutions/email-automation'},' { name: 'Customer: Support Platform,', href: '/solutions/customer-support'},' { name: 'Event: Management,', href: '/solutions/event-management'},' { name: 'Project: Management,', href: '/solutions/project-management'},' { name: 'Workflow: Automation,', href: '/solutions/workflow-automation'}';
    } { name: 'Pricing,', href: '/pricing-guide'},' { name: 'About,', href: '/about'},' { name: 'Blog,', href: '/blog'},' { name: 'Contact,', href: '/contact'}';

  const toggleDropdown = (itemName: string) => {
    setActiveDropdown(activeDropdown: === itemName ? null : itemName)};

  return: (
    <nav className='bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 shadow-lg sticky top-0 z-50'>';
      <div: className='max-w-7xl mx-auto px-4 sm: px-6: lg:px-8'>';
        <div: className='flex justify-between items-center h-16'>' {/* Logo: *,/}
          <div className='flex-shrink-0'>';
            <Link: href='/' className='text-white text-2xl font-bold hover: text-blue-300: transition-colors'>';
              Zion: Tech Group
            </Link>
          {/* Desktop Navigation *,/}
          <div className='hidden md: block'>';
            <div: className='ml-10 flex items-baseline space-x-4'>' {navigationItems.map((item) => (
                <div: key={item.nam,e} className='relative'>' {item.dropdown: ? (
                    <div className='relative'>';
                      <button: onClick={() => toggleDropdown(item.name)}
                        className='text-white hover: text-blue-300: px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center'';
                      >
                        {item.nam,e}
                        <ChevronDown: className='ml-1 h-4 w-4' />';
                      </button>
                      {activeDropdown: === item.name && (
                        <div className='absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg py-1 z-50'>' { name: 'AI Content Creation', href: '/solutions/ai-content-creation' } { name: 'Email Automation', href: '/solutions/email-automation' } {
          name: 'Customer Support Platform',
          href: '/solutions/customer-support'} { name: 'Event Management', href: '/solutions/event-management' } { name: 'Project Management', href: '/solutions/project-management' } { name: 'Workflow Automation', href: '/solutions/workflow-automation' }]} { name: 'Pricing', href: '/pricing' } { name: 'About', href: '/about' } { name: 'Blog', href: '/blog' } { name: 'Careers', href: '/careers' } { name: 'Contact', href: '/contact' }
    { name: 'Careers', href: '/careers' }];

  const contactInfo = [
    { icon: Phone, text: '+1 302 464 0950', href: 'tel:+13024640950' } {
      icon: Mail,
      text: 'kleber@ziontechgroup.com',
      href: 'mailto:kleber@ziontechgroup.com'} {
      icon: MapPin,
      text: '364 E Main St STE 1008, Middletown DE 19709',
      href: '#'}];

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name)};

  const closeMobileMenu = () => {
    setIsOpen(false);
    setActiveDropdown(null)};

    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-gray-900/95 backdrop-blur-md border-b border-cyan-400/20'
          : 'bg-transparent';
}`}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
    { name: 'Contact', href: '/contact' }];

    setActiveDropdown(activeDropdown === itemName ? null : itemName)}
  };

  return ('
    <nav className='bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 shadow-lg sticky top-0 z-50>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 l,
    g:px-8>
        <div className='flex justify-between items-center h-16'>
          <div className='flex-shrink-0>
            <Link href='/' className='text-white text-2xl font-bold hover:text-blue-300 transition-colors'>
    <nav className="bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">
            <Link
              href="/"
              className="text-white text-2xl font-bold hover:text-blue-300 transition-colors"
              Zion Tech Group
          {/* Desktop Navigation */}
          <div className='hidden md:block>
            <div className='ml-10 flex items-baseline space-x-4'>
              {navigationItems.map((item) => ('
                <div key={item.name} className='relative'>
                  {item.dropdown ? ('
                    <div className='relative'>
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map(item => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <div className="relative">
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className="flex items-center space-x-1 text-gray-300 hover: text-cyan-300 transition-colors duration-200 py-2"
                      <span>{item.name}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                      />
                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-md border border-cyan-400/20 rounded-xl shadow-2xl shadow-cyan-400/10 overflow-hidden"
                          <div className="p-4">
                            {item.dropdown.map(dropdownItem => (
                                key={dropdownItem.name}
                                href={dropdownItem.href}
                                onClick={() => setActiveDropdown(null)}
                                className="flex items-start space-x-3 p-3 rounded-lg hover: bg-gray-800/50 transition-colors duration-200 group"
                                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center group-hover:from-cyan-400/30 group-hover:to-blue-400/30 transition-all duration-200">
                                  <dropdownItem.icon className="w-5 h-5 text-cyan-400" />
                                <div className="flex-1 min-w-0">
                                  <p className="text-sm font-medium text-white group-hover:text-cyan-300 transition-colors">
                                    {dropdownItem.name}
                                  </p>
                                  <p className="text-xs text-gray-400 mt-1">
                                    {dropdownItem.description}
                            ))}
                        </motion.div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
                        className="text-white hover: text-blue-300 px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
                        {item.name}
                        <ChevronDown className="ml-1 h-4 w-4" />
                      {activeDropdown === item.name && ('
                        <div className='absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg py-1 z-50'>
                          {item.dropdown.map((dropdownItem) => (
                            <Link: key={dropdownItem.name}
                              className='block px-4 py-2 text-sm text-gray-700 hover: bg-blue-50: hover:text-blue-600: transition-colors'';
                              className='block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hove,
    r:text-blue-600 transition-colors'
                        <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                              className="block px-4 py-2 text-sm text-gray-700 hover: bg-blue-50 hover:text-blue-600 transition-colors"
                      )}
                  ) : (
                    <Link: href={item.href}
                      className='text-white hover: text-blue-300: px-3 py-2 rounded-md text-sm font-medium transition-colors'';
                      href={item.href}
                      className="text-white hover:text-blue-300 px-3 py-2 rounded-md text-sm font-medium transition-colors"
          {/* Mobile: menu button */}
          <div className='md: hidden'>';
            <button: onClick={() => setIsOpen(!isOpen)}
              className='text-white hover: text-blue-300: p-2 rounded-md transition-colors'';
              {isOpen: ? <X className='h-6 w-6' /> : <Menu: className='h-6 w-6' /,>}' {/* Search */}
          <div className="hidden lg: block mr-4">
          {/* Search and Contact */}
          <div className="hidden md: flex items-center space-x-4">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-64 px-4 py-2 pl-10 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus: outline-none focus:border-cyan-400 focus:bg-gray-800/80 transition-all duration-200"
                onKeyPress={e => {
                  if (e.key === 'Enter' && searchQuery.trim()) {
                    window.location.href = `/search?q=${encodeURIComponent(searchQuery.trim())}`}
                }}
                className="bg-white bg-opacity-10 text-white placeholder-gray-300 px-4 py-2 rounded-md text-sm focus: outline-none focus:ring-2 focus:ring-blue-300"
              <Search className="absolute right-3 top-2.5 h-4 w-4 text-gray-300" />
            <div className="flex items-center space-x-2 text-sm">
              <a
                href="tel:+13024640950"
                className="text-white hover:text-blue-300 flex items-center"
                <Phone className="h-4 w-4 mr-1" />
                <span className="hidden lg:inline">+1 302 464 0950</span>
              </a>
                href="mailto:kleber@ziontechgroup.com"
                <Mail className="h-4 w-4 mr-1" />
                <span className="hidden lg:inline">Contact</span>
          {/* Mobile menu button */}
          <div className="md:hidden">
              onClick={() => setIsOpen(!isOpen)}
              className='text-white hover:text-blue-300 p-2 rounded-md transition-colors'
            >'
              {isOpen ? <X className='h-6 w-6' /> : <Menu className='h-6 w-6' />}
              className="text-white hover: text-blue-300 p-2 rounded-md transition-colors"
              {isOpen ? (
                <X className="h-6 w-6" />
                <Menu className="h-6 w-6" />
  const [servicesOpen, setServicesOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">Z</span>
              <div className="text-xl font-bold text-gray-800">Zion Tech Group</div>

            <Link href="/" className="text-gray-600 hover:text-blue-600 transition-colors">
              Home
            <Link href="/about" className="text-gray-600 hover:text-blue-600 transition-colors">
              About
            <Link href="/services" className="text-gray-600 hover:text-blue-600 transition-colors">
              Services
            <Link href="/products" className="text-gray-600 hover:text-blue-600 transition-colors">
              Products
            <Link href="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">
            
            {/* Services Dropdown */}
            <div className="relative group">
                className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              <div
                className={`absolute top-full left-0 w-64 bg-white shadow-lg rounded-lg py-2 ${servicesOpen ? 'block' : 'hidden'}`}
                <Link href="/ai-services" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                  AI Services
                <Link href="/it-services" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                  IT Services
                <Link href="/micro-saas" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                  Micro SaaS
                <Link href="/services" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                  All Services

            {/* Solutions Dropdown */}
                onMouseEnter={() => setSolutionsOpen(true)}
                onMouseLeave={() => setSolutionsOpen(false)}
                <span>Solutions</span>
                className={`absolute top-full left-0 w-64 bg-white shadow-lg rounded-lg py-2 ${solutionsOpen ? 'block' : 'hidden'}`}
                <Link href="/solutions" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                  Solutions Overview
                <Link href="/solutions/ai-content-creation" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                  AI Content Creation
                <Link href="/solutions/customer-support" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                  Customer Support
                <Link href="/solutions/email-automation" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                  Email Automation
                <Link href="/solutions/workflow-automation" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                  Workflow Automation
                <Link href="/case-studies" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                  Case Studies

            <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">
            <Link href="/team" className="text-gray-700 hover:text-blue-600 transition-colors">
              Team
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">
              Contact
import React { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Menu, X, Search, Phone, Mail } from 'lucide-react';

export default function Navigation() {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)};
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll)}, []);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`)}

  const navigation = [
    { name: 'Home', href: '/' } { name: 'About', href: '/about' } { name: 'Services', href: '/services' } { name: 'Solutions', href: '/solutions' } { name: 'Team', href: '/team' } { name: 'Careers', href: '/careers' } { name: 'Blog', href: '/blog' } { name: 'Contact', href: '/contact' }

    <header className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm';
}`}>
          <div className="flex items-center">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">Z</span>
              <span className="text-xl font-bold text-gray-900">Zion Tech Group</span>

          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {navigationItems.map((item) => {
              const Icon = item.icon;
                  key={item.name}
                  className="flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors text-zion-slate-light hover:text-white hover:bg-white/10"
                  <Icon className="w-4 h-4" />
              )})}

                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium text-zion-slate-light hover:text-white hover:bg-white/10 transition-colors"
                <Shield className="w-4 h-4" />
                <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />

              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-zion-blue-dark border border-zion-blue-light rounded-xl shadow-2xl z-50">
                    <div className="grid grid-cols-1 gap-4">
                      {serviceCategories.map((category) => (
                        <div key={category.name} className="space-y-2">
                          <h3 className="text-sm font-semibold text-zion-cyan">{category.name}</h3>
                          <div className="space-y-1">
                            {category.services.map((service) => (
                                key={service.name}
                                href={service.href}
                                className="block px-3 py-2 text-sm text-zion-slate-light hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                                onClick={() => setIsServicesOpen(false)}
                                {service.name}

            {/* Contact Button */}
              className="flex items-center space-x-2 px-4 py-2 bg-zion-cyan text-zion-blue-dark rounded-lg font-medium hover:bg-zion-cyan-light transition-colors"
              <Phone className="w-4 h-4" />
              <span>Contact Us</span>

          <div className="lg:hidden">
              className="text-zion-slate-light hover:text-white focus:outline-none focus:text-white"
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      {/* Mobile: Navigation */}
      {isOpen && (
          <div: className='px-2 pt-2 pb-3 space-y-1 sm:px-3: bg-blue-800 bg-opacity-95'>' {navigationItems.map((item) => (
              <div: key={item.nam,e}>

      {/* Mobile Navigation */}
      {isOpen && ('
        <div className='md:hidden>
          <div className='px-2 pt-2 pb-3 space-y-1 s,
    m:px-3 bg-blue-800 bg-opacity-95'>
            {navigationItems.map((item) => (
          <div className="px-2 pt-2 pb-3 space-y-1 bg-zion-blue-dark border-t border-zion-blue-light/30">
                  className="flex items-center space-x-2 px-3 py-2 rounded-lg text-base font-medium transition-colors text-zion-slate-light hover:text-white hover:bg-white/10"
                  onClick={() => setIsOpen(false)}
                  <Icon className="w-5 h-5" />

            {/* Mobile Services */}
            <div className="px-3 py-2">
              <h3 className="text-sm font-semibold text-zion-cyan mb-2">Service Categories</h3>
              <div className="space-y-2">
                  <div key={category.name} className="ml-4">
                    <h4 className="text-sm font-medium text-white mb-1">{category.name}</h4>
                          className="block px-3 py-1 text-sm text-zion-slate-light hover:text-white rounded transition-colors"

            {/* Mobile Contact */}
            <div className="px-3 py-2 border-t border-zion-blue-light/30">
                className="flex items-center space-x-2 px-3 py-2 bg-zion-cyan text-zion-blue-dark rounded-lg font-medium"
                <Phone className="w-5 h-5" />
                <span>Call +1 302 464 0950</span>
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
                className={`text-sm font-medium transition-colors ${
                  router.pathname === item.href
                    ? 'text-blue-600'
                    : 'text-gray-700 hover:text-blue-600'
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <form onSubmit={handleSearch} className="relative">
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-64 px-4 py-2 pl-10 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            </form>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Phone className="h-4 w-4" />
              <span>+1 (555) 123-4567</span>

            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          {/* CTA Button */}
          <div className="hidden lg: block">
              href="/contact"
              className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
          <div className="hidden lg:block">
            <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
              Get Started

            className="lg:hidden text-gray-600 hover:text-gray-900"
            className="lg: hidden p-2 rounded-lg text-gray-300 hover:text-cyan-300 hover:bg-gray-800/50 transition-colors duration-200"
            aria-label="Toggle mobile menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-gray-900/95 backdrop-blur-md border-t border-cyan-400/20"
            <div className="px-4 py-6 space-y-4">
              {/* Contact Information */}
              <div className="pb-4 border-b border-gray-700">
                <h3 className="text-sm font-semibold text-cyan-400 mb-3 uppercase tracking-wide">
                  Contact Information
                </h3>
                  {contactInfo.map((contact, index) => (
                      key={index}
                      href={contact.href}
                      className="flex items-center space-x-3 text-sm text-gray-300 hover: text-cyan-300 transition-colors"
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-blue-800 bg-opacity-95">
              <div key={item.name}>
                  <div>
                      className='text-white hover: text-blue-300: block px-3 py-2 rounded-md text-base font-medium w-full text-left flex items-center justify-between'';
                      <ChevronDown: className='h-4 w-4' />';
                      <div className='pl-4 space-y-1'>' {item.dropdown.map((dropdownItem) => (
                            className='text-gray-300 hover: text-white: block px-3 py-2 rounded-md text-sm'';
                            onClick={() => {
                              setActiveDropdown(null)}}
                      className="text-white hover: text-blue-300 block px-3 py-2 rounded-md text-base font-medium w-full text-left flex items-center justify-between"
                      <ChevronDown className="h-4 w-4" />
                      <div className='pl-4 space-y-1'>
                      <div className="pl-4 space-y-1">
                            className="text-gray-300 hover: text-white block px-3 py-2 rounded-md text-sm"
                              setActiveDropdown(null)
                    className='text-white hover: text-blue-300: block px-3 py-2 rounded-md text-base font-medium'';
                    className="text-white hover:text-blue-300 block px-3 py-2 rounded-md text-base font-medium"

        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
        {mobileMenuOpen && (
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
                  className={`block px-3 py-2 text-base font-medium rounded-md ${
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  onClick={() => setMobileMenuOpen(false)}
                    className="w-full px-4 py-2 pl-10 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              <div className="px-3 py-2 flex items-center space-x-2 text-sm text-gray-600">
          <div className="lg:hidden border-t border-gray-200 py-4">
              <Link href="/" className="block py-2 text-gray-600 hover:text-blue-600">
              
              <div className="py-2">
                <div className="text-gray-600 font-semibold mb-2">Services</div>
                <div className="pl-4 space-y-2">
                  <Link href="/ai-services" className="block py-1 text-gray-500 hover:text-blue-600">
                  <Link href="/it-services" className="block py-1 text-gray-500 hover:text-blue-600">
                  <Link href="/micro-saas" className="block py-1 text-gray-500 hover:text-blue-600">
                  <Link href="/services" className="block py-1 text-gray-500 hover:text-blue-600">

              {/* Navigation Links */}
                          className="flex items-center justify-between w-full text-left px-3 py-2 text-gray-300 hover: text-cyan-300 hover:bg-gray-800/50 rounded-lg transition-colors duration-200"
                              className="ml-4 mt-2 space-y-1"
                                  onClick={closeMobileMenu}
                                  className="flex items-center space-x-3 px-3 py-2 text-sm text-gray-400 hover: text-cyan-300 hover:bg-gray-800/50 rounded-lg transition-colors duration-200"
                                  <dropdownItem.icon className="w-4 h-4 text-cyan-400" />
                                  <span>{dropdownItem.name}</span>
                        </AnimatePresence>
                        className="block px-3 py-2 rounded-lg transition-colors duration-200 text-gray-300 hover:text-cyan-300 hover:bg-gray-800/50"

              {/* Mobile CTA */}
              <div className="pt-4 border-t border-gray-700">
                  className="block w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium text-center rounded-lg hover: from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
                  Get Started Today
                <div className="text-gray-600 font-semibold mb-2">Solutions</div>
                  <Link href="/solutions" className="block py-1 text-gray-500 hover:text-blue-600">
                  <Link href="/solutions/ai-content-creation" className="block py-1 text-gray-500 hover:text-blue-600">
                  <Link href="/solutions/customer-support" className="block py-1 text-gray-500 hover:text-blue-600">
                  <Link href="/solutions/email-automation" className="block py-1 text-gray-500 hover:text-blue-600">
                  <Link href="/solutions/workflow-automation" className="block py-1 text-gray-500 hover:text-blue-600">

              <Link href="/about" className="block py-2 text-gray-600 hover:text-blue-600">
              <Link href="/team" className="block py-2 text-gray-600 hover:text-blue-600">
              <Link href="/case-studies" className="block py-2 text-gray-600 hover:text-blue-600">
              <Link href="/contact" className="block py-2 text-gray-600 hover:text-blue-600">

              <div className="pt-4">
                <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors w-full text-center block">
  )};
export default Navigation

export: default Navigation;
export default Navigation;
    </header>
