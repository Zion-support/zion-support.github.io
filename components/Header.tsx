<<<<<<< HEAD
const React, { useState, useEffect } from "react";"const Link from "next/link";"const { useRouter } from "next/router";"const { motion } from "framer-motion";const { Menu, X, Search, Sun, Moon, Phone, Mail, MapPin, Clock, ChevronDown, DollarSign"} from "lucide-react";const navigation = [ {" name: "Services"," href: "/services", children: [" { name: "AI Services", href: "/ai-services", description: "Cutting-edge AI solutions" }," { name: "IT Services", href: "/it-services", description: "Comprehensive IT solutions" }," { name: "Micro SaaS", href: "/micro-saas", description: "Scalable SaaS solutions" } ] }," { name: "About", href: "/about" }," { name: "Blog", href: "/blog" }," { name: "Contact", href: "/contact" }];const contactInfo = {" phone: "+1 302 464 0950"," email: "kleber@ziontechgroup.com"," address: "364 E Main St STE 1008, Middletown, DE 19709"};interface HeaderProps { className?: string; onMenuClick?: () => void;}"module.exports = default function Header({ className = "", onMenuClick }: HeaderProps) { const [isScrolled, setIsScrolled] = useState(false); const [isSearchOpen, setIsSearchOpen] = useState(false); const [isDropdownOpen, setIsDropdownOpen] = useState<string | null>(null);" const [theme, setTheme] = useState<"light" | "dark">("dark");" const [searchQuery, setSearchQuery] = useState(""); const router = useRouter(); useEffect(() => { const handleScroll = () => { setIsScrolled(window.scrollY > 10); };" window.addEventListener("scroll", handleScroll);" return () => window.removeEventListener("scroll", handleScroll); }, []); const handleSearch = (e: React.FormEvent) => { e.preventDefault(); if (searchQuery.trim()) { router.push(`/search?q=${encodeURIComponent(searchQuery)}`); setIsSearchOpen(false);" setSearchQuery(""); } }; const toggleTheme = () => {" setTheme(theme === "light" ? "dark" : "light"); }; return (` <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${className}`}> {} <div className="bg-gray-900 text-gray-300 text-sm py-2">" <div className="container mx-auto px-4">" <div className="flex flex-col sm:flex-row justify-between items-center text-sm">" <div className="flex flex-col sm:flex-row gap-4 mb-2 sm:mb-0">" <div className="flex items-center gap-2">" <Phone className="w-4 h-4 text-blue-400" /> <span>{contactInfo.phone}</span> </div>" <div className="flex items-center gap-2">" <Mail className="w-4 h-4 text-blue-400" /> <span>{contactInfo.email}</span> </div> </div>" <div className="flex items-center gap-4">" <div className="flex items-center gap-2">" <Clock className="w-4 h-4 text-blue-400" /> <span>24/7 Support</span> </div> <button onClick={toggleTheme}" className="p-1 rounded hover:bg-gray-800 transition-colors" >"" {theme === "light" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />} </button> </div> </div> </div> </div> {}" <div className="bg-white/95 backdrop-blur-md border-b border-gray-200">" <div className="container mx-auto px-4">" <div className="flex items-center justify-between h-16"> {} <button onClick={onMenuClick}" className="lg:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100" >" <Menu className="w-6 h-6" /> </button> {}" <Link href="/" className="flex items-center space-x-2">" <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">" <span className="text-white font-bold text-sm">Z</span> </div>" <span className="text-xl font-bold text-gray-900">Zion Tech Group</span> </Link> {}" <nav className="hidden lg:flex items-center space-x-8"> {navigation.map((item) => (" <div key={item.name} className="relative group"> <Link href={item.href}" className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors" onMouseEnter={() => setIsDropdownOpen(item.name)} onMouseLeave={() => setIsDropdownOpen(null)} > <span>{item.name}</span>" {item.children && <ChevronDown className="w-4 h-4" />} </Link> {} {item.children && isDropdownOpen === item.name && ( <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }}" className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2" onMouseEnter={() => setIsDropdownOpen(item.name)} onMouseLeave={() => setIsDropdownOpen(null)} > {item.children.map((child) => ( <Link key={child.name} href={child.href}" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors" >" <div className="font-medium">{child.name}</div>" <div className="text-sm text-gray-500">{child.description}</div> </Link> ))} </motion.div> )} </div> ))} </nav> {}" <div className="flex items-center space-x-4"> {} <button onClick={() => setIsSearchOpen(!isSearchOpen)}" className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors" >" <Search className="w-5 h-5" /> </button> {} <Link" href="/contact"" className="hidden sm:flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300" >" <DollarSign className="w-4 h-4" /> <span>Get Quote</span> </Link> </div> </div> </div> </div> {} {isSearchOpen && ( <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}" className="fixed inset-0 bg-black/50 z-50 flex items-start justify-center pt-20" onClick={() => setIsSearchOpen(false)} > <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}" className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md mx-4" onClick={(e) => e.stopPropagation()} >" <form onSubmit={handleSearch} className="space-y-4">" <div className="flex items-center space-x-2">" <Search className="w-5 h-5 text-gray-400" /> <input" type="text"" placeholder="Search services, solutions." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}" className="flex-1 border-none outline-none text-lg" autoFocus /> <button" type="button" onClick={() => setIsSearchOpen(false)}" className="p-1 hover:bg-gray-100 rounded" >" <X className="w-5 h-5" /> </button> </div> <button" type="submit"" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors" > Search </button> </form> </motion.div> </motion.div> )} </header> );}""`"`
=======
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Settings, 
  Brain, 
  Network, 
  Cloud, 
  Globe, 
  Shield, 
  Building, 
  Heart, 
  DollarSign, 
  ShoppingCart, 
  BookOpen, 
  Zap, 
  Video, 
  Users, 
  Rocket, 
  MessageSquare, 
  Phone, 
  FileText 
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { 
  Menu, 
  X, 
  Search, 
  Sun, 
  Moon, 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  ChevronDown,
  DollarSign
<<<<<<< HEAD
=======
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  ChevronDown,
  Building2,
  Brain,
  Network,
  Cloud,
  Users,
  FileText,
  HelpCircle,
  Settings,
  Target,
  ArrowRight,
  ExternalLink
>>>>>>> main
} from 'lucide-react';

const navigation = [
  {
<<<<<<< HEAD
    name: 'Services',
    href: '/services',
    children: [
      { name: 'AI Services', href: '/ai-services', description: '80+ Cutting-edge AI solutions' },
      { name: 'IT Services', href: '/it-services', description: '70+ Comprehensive IT solutions' },
      { name: 'Micro SaaS', href: '/micro-saas', description: '85+ Scalable SaaS solutions' },
      { name: 'Cloud Solutions', href: '/solutions#cloud', description: 'Cloud infrastructure & migration' },
      { name: 'Cybersecurity', href: '/solutions#security', description: 'Security & compliance' },
      { name: 'Digital Transformation', href: '/solutions#digital', description: 'Business modernization' },
      { name: 'IoT Solutions', href: '/solutions#iot', description: 'Internet of Things integration' },
      { name: 'Blockchain Solutions', href: '/solutions#blockchain', description: 'Blockchain & Web3' },
      { name: 'Quantum Computing', href: '/solutions#quantum', description: 'Quantum computing services' },
      { name: 'Pricing', href: '/pricing', description: 'Transparent pricing plans' }
=======
    name: 'Home',
    href: '/',
    type: 'link'
  },
  {
    name: 'Services',
    href: '/services',
    icon: Settings,
    children: [
      { name: 'AI Solutions', href: '/ai-services', icon: Brain, count: '40+' },
      { name: 'IT Services', href: '/it-services', icon: Network, count: '40+' },
      { name: 'Micro SaaS', href: '/micro-saas', icon: Cloud, count: '45+' },
      { name: 'All Services', href: '/services', icon: Globe, count: '125+' }
    children: [
      { name: 'AI Services', href: '/ai-services', description: 'Cutting-edge AI solutions' },
      { name: 'IT Services', href: '/it-services', description: 'Comprehensive IT solutions' },
      { name: 'Micro SaaS', href: '/micro-saas', description: 'Scalable SaaS solutions' },
      { name: 'Cloud & DevOps', href: '/services/cloud-devops', description: 'Cloud infrastructure solutions' },
      { name: 'Cybersecurity', href: '/services/cybersecurity', description: 'Security solutions' },
      { name: 'Data Analytics', href: '/services/data-analytics', description: 'Data insights and analytics' }
    type: 'dropdown',
    children: [
      {
        name: 'All Services',
        href: '/services',
        description: 'Comprehensive technology solutions'
      },
      {
        name: 'AI Services',
        href: '/ai-services',
        description: 'Artificial Intelligence solutions',
        icon: Brain
      },
      {
        name: 'IT Services',
        href: '/it-services',
        description: 'Information Technology services',
        icon: Network
      },
      {
        name: 'Micro SaaS',
        href: '/micro-saas',
        description: 'Software as a Service solutions',
        icon: Cloud
      },
      {
        name: 'Cloud & DevOps',
        href: '/services/cloud-devops',
        description: 'Cloud infrastructure and DevOps solutions'
      },
      {
        name: 'Cybersecurity',
        href: '/services/cybersecurity',
        description: 'Advanced security solutions'
      },
      {
        name: 'Data Analytics',
        href: '/services/data-analytics',
        description: 'Data analysis and business intelligence'
      }
    ]
  },
  {
    name: 'Solutions',
    href: '/solutions',
    icon: Shield,
    children: [
      { name: 'Digital Transformation', href: '/solutions/digital-transformation', icon: Zap },
      { name: 'Cloud Migration', href: '/solutions/cloud-migration', icon: Cloud }
    children: [
      { name: 'Enterprise', href: '/solutions/enterprise', description: 'Enterprise solutions' },
      { name: 'Healthcare', href: '/solutions/healthcare', description: 'Healthcare technology' },
      { name: 'Finance', href: '/solutions/finance', description: 'Financial services' },
      { name: 'Education', href: '/solutions/education', description: 'Educational technology' },
      { name: 'Government', href: '/solutions/government', description: 'Government solutions' }
    type: 'dropdown',
    children: [
      {
        name: 'All Solutions',
        href: '/solutions',
        description: 'Complete solution portfolio'
      },
      {
        name: 'Enterprise',
        href: '/solutions/enterprise',
        description: 'Large-scale business solutions'
      },
      {
        name: 'Healthcare',
        href: '/solutions/healthcare',
        description: 'Healthcare technology solutions'
      },
      {
        name: 'Finance',
        href: '/solutions/finance',
        description: 'Financial technology solutions'
      },
      {
        name: 'Retail',
        href: '/solutions/retail',
        description: 'Retail technology solutions'
      },
      {
        name: 'Education',
        href: '/solutions/education',
        description: 'Educational technology solutions'
      },
      {
        name: 'Government',
        href: '/solutions/government',
        description: 'Government and public sector solutions'
      }
>>>>>>> main
    ]
  },
  {
    name: 'Industries',
    href: '/industries',
<<<<<<< HEAD
    children: [
      { name: 'Healthcare', href: '/industries/healthcare', description: 'AI-powered healthcare solutions' },
      { name: 'Finance', href: '/industries/finance', description: 'FinTech & banking solutions' },
      { name: 'Manufacturing', href: '/industries/manufacturing', description: 'Smart manufacturing & Industry 4.0' },
      { name: 'Retail', href: '/industries/retail', description: 'E-commerce & retail technology' },
      { name: 'Education', href: '/industries/education', description: 'EdTech & learning platforms' },
      { name: 'Government', href: '/industries/government', description: 'Public sector solutions' },
      { name: 'Energy', href: '/industries/energy', description: 'Smart energy & utilities' },
      { name: 'Transportation', href: '/industries/transportation', description: 'Logistics & mobility solutions' }
=======
    icon: Building,
    children: [
      { name: 'Healthcare', href: '/industries/healthcare', icon: Heart },
      { name: 'Finance', href: '/industries/finance', icon: DollarSign },
      { name: 'Manufacturing', href: '/industries/manufacturing', icon: Settings },
      { name: 'Retail', href: '/industries/retail', icon: ShoppingCart },
      { name: 'Education', href: '/industries/education', icon: BookOpen },
      { name: 'Government', href: '/industries/government', icon: Building }
    children: [
      { name: 'Healthcare', href: '/industries/healthcare', description: 'Healthcare industry' },
      { name: 'Finance', href: '/industries/finance', description: 'Financial services' },
      { name: 'Education', href: '/industries/education', description: 'Education sector' },
      { name: 'Government', href: '/industries/government', description: 'Government sector' },
      { name: 'Manufacturing', href: '/industries/manufacturing', description: 'Manufacturing industry' },
      { name: 'Retail', href: '/industries/retail', description: 'Retail industry' }
>>>>>>> main
    ]
  },
  {
    name: 'Resources',
    href: '/resources',
<<<<<<< HEAD
    children: [
      { name: 'Blog', href: '/blog', description: 'Latest insights & trends' },
      { name: 'Case Studies', href: '/case-studies', description: 'Success stories & testimonials' },
      { name: 'White Papers', href: '/white-papers', description: 'In-depth research & analysis' },
      { name: 'Webinars', href: '/webinars', description: 'Educational sessions & demos' },
      { name: 'Tutorials', href: '/tutorials', description: 'Step-by-step guides & tutorials' },
      { name: 'API Documentation', href: '/api-docs', description: 'Technical documentation & guides' },
      { name: 'News', href: '/news', description: 'Industry news & updates' },
      { name: 'FAQ', href: '/faq', description: 'Frequently asked questions' }
=======
    icon: FileText,
    children: [
      { name: 'White Papers', href: '/white-papers', icon: FileText },
      { name: 'Webinars', href: '/webinars', icon: Video }
    type: 'dropdown',
    children: [
      {
        name: 'All Industries',
        href: '/industries',
        description: 'Industry-specific solutions'
      },
      {
        name: 'Healthcare',
        href: '/industries/healthcare',
        description: 'Healthcare industry solutions'
      },
      {
        name: 'Finance',
        href: '/industries/finance',
        description: 'Financial services solutions'
      },
      {
        name: 'Education',
        href: '/industries/education',
        description: 'Education sector solutions'
      },
      {
        name: 'Government',
        href: '/industries/government',
        description: 'Government solutions'
      },
      {
        name: 'Manufacturing',
        href: '/industries/manufacturing',
        description: 'Manufacturing industry solutions'
      },
      {
        name: 'Retail',
        href: '/industries/retail',
        description: 'Retail industry solutions'
      }
>>>>>>> main
    ]
  },
  {
    name: 'Company',
    href: '/about',
<<<<<<< HEAD
    children: [
      { name: 'About Us', href: '/about', description: 'Our story, mission & values' },
      { name: 'Team', href: '/team', description: 'Meet our expert team' },
      { name: 'Careers', href: '/careers', description: 'Join our growing team' },
      { name: 'Partners', href: '/partners', description: 'Our strategic partners' },
      { name: 'Contact', href: '/contact', description: 'Get in touch with us' },
      { name: 'Newsletter', href: '/newsletter', description: 'Subscribe to our updates' }
    ]
  },
  { name: 'Support', href: '/support' }
=======
    type: 'dropdown',
    children: [
      {
        name: 'About Us',
        href: '/about',
        description: 'Learn about our company'
      },
      {
        name: 'Our Team',
        href: '/team',
        description: 'Meet our experts'
      },
      {
        name: 'Careers',
        href: '/careers',
        description: 'Join our team'
      },
      {
        name: 'Blog',
        href: '/blog',
        description: 'Latest insights and news'
      },
      {
        name: 'Press',
        href: '/press',
        description: 'Press releases and media'
      },
      {
        name: 'Partners',
        href: '/partners',
        description: 'Our partner network'
      }
    ]
  },
  {
    name: 'Resources',
    href: '/resources',
    type: 'dropdown',
    children: [
      {
        name: 'Documentation',
        href: '/docs',
        description: 'Technical documentation'
      },
      {
        name: 'Help Center',
        href: '/help',
        description: 'Support and help resources'
      },
      {
        name: 'Community',
        href: '/community',
        description: 'Join our community'
      },
      {
        name: 'Tutorials',
        href: '/tutorials',
        description: 'Learning resources and guides'
      },
      {
        name: 'Case Studies',
        href: '/case-studies',
        description: 'Success stories and examples'
      },
      {
        name: 'White Papers',
        href: '/white-papers',
        description: 'In-depth research and insights'
      }
    ]
  },
  {
    name: 'Contact',
    href: '/contact',
    type: 'link'
  }
];

const contactInfo = {
  phone: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008, Middletown, DE 19709'
};

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDropdownToggle = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
    setActiveDropdown(null);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
    children: [
      { name: 'Blog', href: '/blog', description: 'Latest insights' },
      { name: 'Case Studies', href: '/case-studies', description: 'Success stories' },
      { name: 'White Papers', href: '/whitepapers', description: 'Technical papers' },
      { name: 'Webinars', href: '/webinars', description: 'Educational content' },
      { name: 'Tutorials', href: '/tutorials', description: 'Learning guides' },
      { name: 'Help Center', href: '/help', description: 'Support resources' },
      { name: 'FAQ', href: '/faq', description: 'Frequently asked questions' }
    ]
  },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' }
>>>>>>> main
];

const contactInfo = {
  phone: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008, Middletown, DE 19709'
};

interface HeaderProps {
  className?: string;
  onMenuClick?: () => void;
}

export default function Header({ className = '', onMenuClick }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState<string | null>(null);
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${className}`}>
      {/* Top Bar */}
      <div className="bg-gray-900 text-gray-300 text-sm py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm">
            <div className="flex flex-col sm:flex-row gap-4 mb-2 sm:mb-0">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-400" />
                <span>{contactInfo.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400" />
                <span>{contactInfo.email}</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-blue-400" />
                <span>24/7 Support</span>
              </div>
              <button
                onClick={toggleTheme}
                className="p-1 rounded hover:bg-gray-800 transition-colors"
              >
                {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-white/95 backdrop-blur-md border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Mobile Menu Button */}
            <button
              onClick={onMenuClick}
              className="lg:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            >
              <Menu className="w-6 h-6" />
            </button>

            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">Z</span>
<<<<<<< HEAD
=======
              </div>
              <span className="text-xl font-bold text-gray-900">Zion Tech Group</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <button
                  className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  onMouseEnter={() => setOpenDropdown(item.name)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.name}</span>
                  {item.children && <ChevronDown className="w-4 h-4" />}
                </button>

                {item.children && (
                  <AnimatePresence>
                    {openDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
                        onMouseEnter={() => setOpenDropdown(item.name)}
                        onMouseLeave={() => setOpenDropdown(null)}
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="flex items-center justify-between px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
                          >
                            <div className="flex items-center space-x-3">
                              <child.icon className="w-4 h-4" />
                              <span>{child.name}</span>
                            </div>
                            {child.count && (
                              <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                                {child.count}
                              </span>
                            )}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      {/* Top Contact Bar */}
      <div className="bg-blue-600 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm">
            <div className="flex items-center space-x-6 mb-2 sm:mb-0">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>{contactInfo.phone}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>{contactInfo.email}</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4" />
              <span className="hidden sm:inline">{contactInfo.address}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-200"
          >
            <div className="px-4 py-2 space-y-1">
              {navigation.map((item) => (
                <div key={item.name}>
                  <button
                    className="flex items-center justify-between w-full px-3 py-2 text-left text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md text-sm font-medium"
                    onClick={() => setOpenDropdown(openDropdown === item.name ? null : item.name)}
                  >
                    <div className="flex items-center space-x-2">
                      <item.icon className="w-4 h-4" />
                      <span>{item.name}</span>
                    </div>
                    {item.children && <ChevronDown className="w-4 h-4" />}
                  </button>
                  
                  {item.children && openDropdown === item.name && (
                    <div className="ml-4 space-y-1">
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <div key={item.name} className="relative group">
                  <Link
                    href={item.href}
                    className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors"
                    onMouseEnter={() => setIsDropdownOpen(item.name)}
                    onMouseLeave={() => setIsDropdownOpen(null)}
                  >
                    <span>{item.name}</span>
                    {item.children && <ChevronDown className="w-4 h-4" />}
                  </Link>
                  
                  {/* Dropdown Menu */}
                  {item.children && isDropdownOpen === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2"
                      onMouseEnter={() => setIsDropdownOpen(item.name)}
                      onMouseLeave={() => setIsDropdownOpen(null)}
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="flex items-center justify-between px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <div className="flex items-center space-x-2">
                            <child.icon className="w-4 h-4" />
                            <span>{child.name}</span>
                          </div>
                          {child.count && (
                            <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                              {child.count}
                            </span>
                          )}
                        </Link>
                      ))}
      {/* Main Navigation */}
      <nav className="bg-white/95 backdrop-blur-md border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Building2 className="w-6 h-6 text-white" />
>>>>>>> main
              </div>
              <span className="text-xl font-bold text-gray-900">Zion Tech Group</span>
            </Link>

            {/* Desktop Navigation */}
<<<<<<< HEAD
            <nav className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <div key={item.name} className="relative group">
                  <Link
                    href={item.href}
                    className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors"
                    onMouseEnter={() => setIsDropdownOpen(item.name)}
                    onMouseLeave={() => setIsDropdownOpen(null)}
                  >
                    <span>{item.name}</span>
                    {item.children && <ChevronDown className="w-4 h-4" />}
                  </Link>
                  
                  {/* Dropdown Menu */}
                  {item.children && isDropdownOpen === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2"
                      onMouseEnter={() => setIsDropdownOpen(item.name)}
                      onMouseLeave={() => setIsDropdownOpen(null)}
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
=======
            <div className="hidden lg:flex items-center space-x-8">
              {navigation.map((item, index) => (
                <div key={item.name} className="relative">
                  {item.type === 'link' ? (
                    <Link
                      href={item.href}
                      className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <div className="relative">
                      <button
                        onClick={() => handleDropdownToggle(index)}
                        className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors font-medium"
                      >
                        <span>{item.name}</span>
                        <ChevronDown className="w-4 h-4" />
                      </button>
                      
                      <AnimatePresence>
                        {activeDropdown === index && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
                          >
                            {item.children?.map((child) => {
                              const IconComponent = child.icon;
                              return (
                                <Link
                                  key={child.name}
                                  href={child.href}
                                  onClick={handleLinkClick}
                                  className="flex items-start space-x-3 px-4 py-3 hover:bg-gray-50 transition-colors"
                                >
                                  {IconComponent && (
                                    <IconComponent className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                                  )}
                                  <div>
                                    <div className="font-medium text-gray-900">{child.name}</div>
                                    <div className="text-sm text-gray-500">{child.description}</div>
                                  </div>
                                </Link>
                              );
                            })}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
>>>>>>> main
                          className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
                        >
                          <div className="font-medium">{child.name}</div>
                          <div className="text-sm text-gray-500">{child.description}</div>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </div>
              ))}
            </nav>

            {/* Search and CTA */}
            <div className="flex items-center space-x-4">
              {/* Search Button */}
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* CTA Button */}
              <Link
                href="/contact"
                className="hidden sm:flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300"
<<<<<<< HEAD
=======
              >
                <DollarSign className="w-4 h-4" />
                <span>Get Quote</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Search Overlay */}
      {isSearchOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 z-50 flex items-start justify-center pt-20"
          onClick={() => setIsSearchOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <form onSubmit={handleSearch} className="space-y-4">
              <div className="flex items-center space-x-2">
                <Search className="w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search services, solutions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 border-none outline-none text-lg"
                  autoFocus
                />
                <button
                  type="button"
                  onClick={() => setIsSearchOpen(false)}
                  className="p-1 hover:bg-gray-100 rounded"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Search
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}

            {/* CTA Button */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link
                href="/contact"
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
>>>>>>> main
              >
                <DollarSign className="w-4 h-4" />
                <span>Get Quote</span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
<<<<<<< HEAD
      </div>

      {/* Search Overlay */}
      {isSearchOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 z-50 flex items-start justify-center pt-20"
          onClick={() => setIsSearchOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <form onSubmit={handleSearch} className="space-y-4">
              <div className="flex items-center space-x-2">
                <Search className="w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search services, solutions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 border-none outline-none text-lg"
                  autoFocus
                />
                <button
                  type="button"
                  onClick={() => setIsSearchOpen(false)}
                  className="p-1 hover:bg-gray-100 rounded"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Search
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
=======

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-gray-200"
            >
              <div className="container mx-auto px-4 py-4">
                {navigation.map((item, index) => (
                  <div key={item.name} className="mb-4">
                    {item.type === 'link' ? (
                      <Link
                        href={item.href}
                        onClick={handleLinkClick}
                        className="block py-2 text-gray-700 hover:text-blue-600 transition-colors font-medium"
                      >
                        {item.name}
                      </Link>
                    ) : (
                      <div>
                        <button
                          onClick={() => handleDropdownToggle(index)}
                          className="flex items-center justify-between w-full py-2 text-gray-700 hover:text-blue-600 transition-colors font-medium"
                        >
                          <span>{item.name}</span>
                          <ChevronDown className={`w-4 h-4 transition-transform ${
                            activeDropdown === index ? 'rotate-180' : ''
                          }`} />
                        </button>
                        <AnimatePresence>
                          {activeDropdown === index && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="ml-4 mt-2 space-y-2"
                            >
                              {item.children?.map((child) => {
                                const IconComponent = child.icon;
                                return (
                                  <Link
                                    key={child.name}
                                    href={child.href}
                                    onClick={handleLinkClick}
                                    className="flex items-start space-x-3 py-2 text-gray-600 hover:text-blue-600 transition-colors"
                                  >
                                    {IconComponent && (
                                      <IconComponent className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                                    )}
                                    <div>
                                      <div className="font-medium">{child.name}</div>
                                      <div className="text-sm text-gray-500">{child.description}</div>
                                    </div>
                                  </Link>
                                );
                              })}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    )}
                  </div>
                ))}
                <div className="pt-4 border-t border-gray-200">
                  <Link
                    href="/contact"
                    onClick={handleLinkClick}
                    className="block w-full text-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                  >
                    Get Started
                  </Link>
                  <Link
                    href="/contact"
                    className="block w-full px-4 py-3 text-center bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                    onClick={closeMenu}
                  >
                    Free Consultation
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
>>>>>>> main
    </header>
  );
}
>>>>>>> main
