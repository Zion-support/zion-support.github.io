import { ArrowRight, Atom, BookOpen, Brain, Building, Building2, ChevronDown, Cloud, Code, Cpu, DollarSign, FileText, Globe, HeartHandshake, Heart, HelpCircle, Leaf, Lock, Mail, MapPin, Menu, MessageCircle, PenTool, Phone, Rocket, Scale, Search, Settings, Shield, ShoppingCart, Star, Target, TrendingUp, Users, X, Zap, User, Bell, Award, GraduationCap, LifeBuoy } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search, User, Bell, ChevronDown, Zap, Brain, Shield, Cloud, Rocket, Globe, Cpu, Lock, Heart, Users, ShoppingCart, BookOpen, MessageCircle, HelpCircle, DollarSign, Star, TrendingUp, Award, Settings, Phone, Mail, MapPin, Building, Sidebar as SidebarIcon } from 'lucide-react';
import { ThemeToggle } from '../components/ThemeToggle';
import { ZionLoadingSpinner } from '../components/ui/EnhancedLoadingSpinner';
import { motion, AnimatePresence } from 'framer-motion';
import { Sidebar } from '../components/Sidebar';

export function AppHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setIsSearching(true);
      try {
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate search
        window.location.href = `/search?q=${encodeURIComponent(searchQuery.trim())}`;
      } finally {
        setIsSearching(false);
      }
    }
  };
  const navigation = [
    { name: 'Home', href: '/', current: true },
    { name: 'About', href: '/about', current: false },
    { name: 'Services', href: '/services', current: false },
    { name: 'Solutions', href: '/solutions', current: false },
    { name: 'Case Studies', href: '/case-studies', current: false },
    { name: 'Blog', href: '/blog', current: false },
    { name: 'Careers', href: '/careers', current: false },
    { name: 'Contact', href: '/contact', current: false },
  ];

  // Enhanced services by category with better organization and working links
  const services = [
    // Featured & New Services
    { name: '2026 Services Overview', href: '/ultimate-services-showcase-2026', icon: Star, description: 'Revolutionary AI & Quantum Solutions', category: 'Featured', featured: true, color: 'from-yellow-500 to-orange-500' },
    { name: '2027 Services Overview', href: '/comprehensive-services-showcase-2027', icon: Star, description: 'Cutting-edge Innovation & Emerging Tech', category: 'Featured', featured: true, color: 'from-purple-500 to-pink-500' },
    { name: '2029 Cutting-Edge Services', href: '/zion-cutting-edge-services-2029', icon: Star, description: 'Future-ready Technology Solutions', category: 'Featured', featured: true, color: 'from-indigo-500 to-purple-500' },
    
    // AI & Machine Learning
    { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence', icon: Brain, description: 'Advanced analytics & ML insights', category: 'AI & ML', color: 'from-blue-500 to-indigo-500' },
    { name: 'AI Compliance Assistant', href: '/services/ai-compliance-assistant', icon: Shield, description: 'Automated regulatory compliance', category: 'AI & ML', color: 'from-green-500 to-emerald-500' },
    { name: 'AI Sales Copilot', href: '/services/ai-sales-copilot', icon: Users, description: 'Intelligent sales optimization', category: 'AI & ML', color: 'from-purple-500 to-pink-500' },
    { name: 'AI-Powered SEO', href: '/services/ai-seo', icon: Search, description: 'Machine learning SEO optimization', category: 'AI & ML', color: 'from-orange-500 to-red-500' },
    { name: 'Interview Assessment AI', href: '/services/interview-assessment', icon: Users, description: 'AI-powered candidate evaluation', category: 'AI & ML', color: 'from-blue-500 to-cyan-500' },
    { name: 'AI Content Marketing Suite', href: '/services/ai-content-marketing-suite', icon: PenTool, description: 'Automated content creation', category: 'AI & ML', color: 'from-green-500 to-teal-500' },
    { name: 'AI Customer Support', href: '/services/ai-customer-support-automation', icon: MessageCircle, description: 'Intelligent support automation', category: 'AI & ML', color: 'from-indigo-500 to-purple-500' },
    { name: 'AI Project Management', href: '/services/ai-project-management', icon: Target, description: 'AI-driven project optimization', category: 'AI & ML', color: 'from-blue-500 to-indigo-500' },
    { name: 'AI Financial Analytics', href: '/services/ai-financial-analytics', icon: BarChart3, description: 'Intelligent financial insights', category: 'AI & ML', color: 'from-green-500 to-emerald-500' },
    
    // Cloud & DevOps
    { name: 'Cloud DevOps', href: '/services/cloud-devops', icon: Cloud, description: 'Infrastructure automation & scaling', category: 'Cloud & DevOps', color: 'from-blue-500 to-cyan-500' },
    { name: 'IT Infrastructure', href: '/services/it-infrastructure', icon: Server, description: 'Enterprise infrastructure solutions', category: 'Cloud & DevOps', color: 'from-gray-500 to-slate-500' },
    { name: 'FinOps Advisor', href: '/services/finops-advisor', icon: DollarSign, description: 'Cloud cost optimization', category: 'Cloud & DevOps', color: 'from-green-500 to-emerald-500' },
    { name: 'Cloud FinOps Optimizer', href: '/services/cloud-finops-optimizer', icon: BarChart3, description: 'Financial operations automation', category: 'Cloud & DevOps', color: 'from-blue-500 to-indigo-500' },
    
    // Cybersecurity
    { name: 'AI Cybersecurity Platform', href: '/services/ai-cybersecurity-platform', icon: Shield, description: 'Advanced AI-powered security', category: 'Cybersecurity', color: 'from-red-500 to-orange-500' },
    { name: 'Security Headers & CSP', href: '/services/security-headers-csp', icon: Lock, description: 'Web security hardening', category: 'Cybersecurity', color: 'from-red-500 to-pink-500' },
    { name: 'DSR Privacy Portal', href: '/services/dsr-portal', icon: Shield, description: 'GDPR/CCPA compliance', category: 'Cybersecurity', color: 'from-purple-500 to-indigo-500' },
    { name: 'Zero Trust Network Access', href: '/services/zero-trust-network-access', icon: Lock, description: 'Modern security architecture', category: 'Cybersecurity', color: 'from-red-500 to-orange-500' },
    
    // Digital Transformation
    { name: 'Digital Twin', href: '/services/digital-twin', icon: Eye, description: 'Virtual system replicas', category: 'Digital Transformation', color: 'from-cyan-500 to-blue-500' },
    { name: 'Digital Transformation', href: '/services/digital-transformation', icon: Zap, description: 'Strategic technology consulting', category: 'Digital Transformation', color: 'from-yellow-500 to-orange-500' },
    { name: 'IT Consulting', href: '/it-consulting', icon: Cpu, description: 'Technology strategy & planning', category: 'Digital Transformation', color: 'from-gray-500 to-slate-500' },
    
    // Emerging Technologies
    { name: 'Quantum Computing', href: '/services/quantum-computing', icon: Atom, description: 'Next-gen computational power', category: 'Emerging Tech', color: 'from-indigo-500 to-purple-500' },
    { name: 'IoT Edge Computing', href: '/services/iot-edge-computing', icon: Network, description: 'Smart device networks', category: 'Emerging Tech', color: 'from-blue-500 to-cyan-500' },
    { name: 'AI Quantum Hybrid Platform', href: '/services/ai-quantum-hybrid-platform', icon: Atom, description: 'Quantum-AI integration', category: 'Emerging Tech', color: 'from-indigo-500 to-purple-500' },
    { name: 'Space Technology', href: '/space-tech', icon: Satellite, description: 'Space-based solutions', category: 'Emerging Tech', color: 'from-blue-500 to-indigo-500' },
    
    // Micro SaaS Solutions
    { name: 'Micro CRM', href: '/services/micro-crm', icon: Users, description: 'Customer relationship management', category: 'Micro SaaS', color: 'from-purple-500 to-pink-500' },
    { name: 'Helpdesk Platform', href: '/services/helpdesk', icon: MessageCircle, description: 'Customer support system', category: 'Micro SaaS', color: 'from-blue-500 to-cyan-500' },
    { name: 'Website Analytics', href: '/services/website-analytics', icon: BarChart3, description: 'Performance tracking & insights', category: 'Micro SaaS', color: 'from-green-500 to-emerald-500' },
    { name: 'IT Helpdesk', href: '/services/it-helpdesk', icon: HelpCircle, description: 'IT support management', category: 'Micro SaaS', color: 'from-orange-500 to-red-500' },
    { name: 'Affiliate Tracking', href: '/services/affiliate-tracking', icon: TrendingUp, description: 'Affiliate program management', category: 'Micro SaaS', color: 'from-indigo-500 to-purple-500' },
    { name: 'Mobile Survey', href: '/services/mobile-survey', icon: Smartphone, description: 'Mobile survey solutions', category: 'Micro SaaS', color: 'from-cyan-500 to-blue-500' },
    { name: 'Email Sequencer', href: '/services/email-sequencer', icon: Mail, description: 'Automated email campaigns', category: 'Micro SaaS', color: 'from-blue-500 to-indigo-500' },
    { name: 'Podcast Transcription', href: '/services/podcast-transcription', icon: Video, description: 'Audio transcription services', category: 'Micro SaaS', color: 'from-purple-500 to-pink-500' },
    { name: 'Returns Management', href: '/services/returns-management', icon: Truck, description: 'Product returns processing', category: 'Micro SaaS', color: 'from-green-500 to-teal-500' },
    { name: 'AI Auto Email Responder', href: '/services/ai-auto-email-responder', icon: Mail, description: 'Intelligent email automation', category: 'Micro SaaS', color: 'from-orange-500 to-red-500' },
    { name: 'Customer Feedback Surveys', href: '/services/mobile-feedback-surveys', icon: MessageCircle, description: 'Customer feedback collection', category: 'Micro SaaS', color: 'from-indigo-500 to-purple-500' },
    { name: 'AI Compliance Copilot', href: '/services/ai-compliance-copilot', icon: Shield, description: 'Compliance assistance', category: 'Micro SaaS', color: 'from-green-500 to-emerald-500' },
    { name: 'LLM Content Studio', href: '/services/llm-content-studio', icon: PenTool, description: 'AI content creation', category: 'Micro SaaS', color: 'from-blue-500 to-cyan-500' },
    { name: 'AI Autonomous Code Reviewer', href: '/services/ai-autonomous-code-reviewer', icon: Code, description: 'Automated code review', category: 'Micro SaaS', color: 'from-purple-500 to-pink-500' }
  ];

  // Solutions categories
  const solutions = [
    { name: 'Enterprise Solutions', href: '/solutions/enterprise', icon: Building, description: 'Large-scale enterprise solutions', category: 'Enterprise', color: 'from-blue-500 to-indigo-500' },
    { name: 'Healthcare Solutions', href: '/solutions/healthcare', icon: Heart, description: 'Healthcare IT infrastructure', category: 'Healthcare', color: 'from-red-500 to-pink-500' },
    { name: 'Financial Services', href: '/solutions/financial', icon: DollarSign, description: 'Financial technology solutions', category: 'Financial', color: 'from-green-500 to-emerald-500' },
    { name: 'Manufacturing', href: '/solutions/manufacturing', icon: Truck, description: 'Manufacturing IT systems', category: 'Manufacturing', color: 'from-orange-500 to-red-500' },
    { name: 'Retail & E-commerce', href: '/solutions/retail', icon: ShoppingCart, description: 'Retail technology solutions', category: 'Retail', color: 'from-purple-500 to-pink-500' },
    { name: 'Government', href: '/solutions/government', icon: Building, description: 'Public sector IT solutions', category: 'Government', color: 'from-gray-500 to-slate-500' }
  ];

  // Resources categories
  const resources = [
    { name: 'Blog', href: '/blog', icon: BookOpen, description: 'Latest insights and updates', category: 'Content', color: 'from-blue-500 to-cyan-500' },
    { name: 'Case Studies', href: '/case-studies', icon: FileText, description: 'Client success stories', category: 'Content', color: 'from-green-500 to-emerald-500' },
    { name: 'News', href: '/news', icon: Newspaper, description: 'Company news and announcements', category: 'Content', color: 'from-purple-500 to-pink-500' },
    { name: 'FAQ', href: '/faq', icon: HelpCircle, description: 'Frequently asked questions', category: 'Support', color: 'from-orange-500 to-red-500' },
    { name: 'Help Center', href: '/help', icon: LifeBuoy, description: 'Support and documentation', category: 'Support', color: 'from-indigo-500 to-purple-500' },
    { name: 'Pricing', href: '/pricing', icon: DollarSign, description: 'Service pricing and plans', category: 'Business', color: 'from-yellow-500 to-orange-500' },
    { name: 'Partners', href: '/partners', icon: Users, description: 'Partnership opportunities', category: 'Business', color: 'from-green-500 to-teal-500' },
    { name: 'Careers', href: '/careers', icon: Briefcase, description: 'Job opportunities', category: 'Business', color: 'from-blue-500 to-indigo-500' }
  ];

  const quickLinks = [
    { name: 'Marketplace', href: '/marketplace', icon: ShoppingCart },
    { name: 'Request Quote', href: '/request-quote', icon: MessageCircle },
    { name: 'Pricing', href: '/pricing', icon: DollarSign },
    { name: 'Careers', href: '/careers', icon: Users },
    { name: 'Partners', href: '/partners', icon: HeartHandshake },
    { name: 'Schedule Demo', href: '/schedule-demo', icon: Calendar },
    { name: 'Community', href: '/community', icon: Users },
    { name: 'Developers', href: '/developers', icon: Code },
    { name: 'Privacy', href: '/privacy', icon: Shield },
    { name: 'Terms', href: '/terms', icon: BookOpen },
  ];

  const companyCategories = [
    {
      name: 'About Us',
      icon: Building,
      color: 'from-blue-600 to-cyan-600',
      items: [
        { name: 'About Us', href: '/about', description: 'Our story and mission' },
        { name: 'Team', href: '/team', description: 'Meet our experts' },
        { name: 'Careers', href: '/careers', description: 'Join our team' },
        { name: 'Partners', href: '/partners', description: 'Strategic partnerships' },
        { name: 'News', href: '/news', description: 'Company updates' }
      ]
    },
    {
      name: 'Resources',
      icon: BookOpen,
      color: 'from-green-600 to-emerald-600',
      items: [
        { name: 'Blog', href: '/blog', description: 'Latest insights and news' },
        { name: 'Press', href: '/press', description: 'Media resources' },
        { name: 'Case Studies', href: '/case-studies', description: 'Success stories' },
        { name: 'White Papers', href: '/white-papers', description: 'In-depth research' },
        { name: 'Webinars', href: '/webinars', description: 'Educational sessions' }
      ]
    }
  ];

  const supportCategories = [
    {
      name: 'Help & Support',
      icon: HelpCircle,
      color: 'from-blue-600 to-cyan-600',
      items: [
        { name: 'Help Center', href: '/help', description: 'Find answers to questions' },
        { name: 'Support Portal', href: '/support', description: 'Technical assistance' },
        { name: 'FAQ', href: '/faq', description: 'Frequently asked questions' },
        { name: 'Contact Support', href: '/contact', description: 'Get in touch' },
        { name: 'Status Page', href: '/status', description: 'System status' }
      ]
    },
    {
      name: 'Resources',
      icon: BookOpen,
      color: 'from-green-600 to-emerald-600',
      items: [
        { name: 'Documentation', href: '/docs', description: 'Technical guides' },
        { name: 'Training', href: '/training', description: 'Learning resources' },
        { name: 'Webinars', href: '/webinars', description: 'Educational sessions' },
        { name: 'Community', href: '/community', description: 'User community' },
        { name: 'Sitemap', href: '/sitemap', description: 'Site navigation' }
      ]
    }
  ];

  const supportLinks = [
    { name: 'FAQ', href: '/faq', icon: HelpCircle },
    { name: 'Blog', href: '/blog', icon: BookOpen },
    { name: 'Support', href: '/support', icon: MessageCircle },
    { name: 'Documentation', href: '/docs', icon: BookOpen },
    { name: 'Training', href: '/training', icon: GraduationCap },
    { name: 'Support', href: '/support', icon: LifeBuoy },
  ];
  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709'
  };
  return (
    <>
      <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled 
          ? 'bg-slate-900/95 backdrop-blur-xl border-b border-cyan-400/20 shadow-2xl shadow-cyan-400/10' 
          : 'bg-slate-900/80 backdrop-blur-md border-b border-slate-700/20'
      }`}>
        <div className="container-responsive">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="flex-shrink-0 group">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-lg blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                  </div>
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                    Zion Tech Group
                  </h1>
                </div>
              </Link>
            </div>
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <div key={item.name} className="relative">
                  {item.hasDropdown ? (
                    <div className="relative">
                      <button
                        onClick={() => {
                          if (item.name === 'Services') {
                            setServicesDropdownOpen(!servicesDropdownOpen);
                            setSolutionsDropdownOpen(false);
                            setResourcesDropdownOpen(false);
                          } else if (item.name === 'Solutions') {
                            setSolutionsDropdownOpen(!solutionsDropdownOpen);
                            setServicesDropdownOpen(false);
                            setResourcesDropdownOpen(false);
                          } else if (item.name === 'Resources') {
                            setResourcesDropdownOpen(!resourcesDropdownOpen);
                            setServicesDropdownOpen(false);
                            setSolutionsDropdownOpen(false);
                          }
                        }}
                        className="flex items-center text-slate-300 hover:text-cyan-400 px-3 py-2 text-sm font-medium transition-all duration-200 relative group"
                      >
                        {item.name}
                        <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-200 ${
                          (item.name === 'Services' && servicesDropdownOpen) ||
                          (item.name === 'Solutions' && solutionsDropdownOpen) ||
                          (item.name === 'Resources' && resourcesDropdownOpen)
                            ? 'rotate-180' : ''
                        }`} />
                      </button>

                      {/* Services Dropdown */}
                      {item.name === 'Services' && servicesDropdownOpen && (
                        <div className="absolute top-full left-0 mt-2 w-[800px] bg-slate-800/95 backdrop-blur-xl rounded-2xl border border-slate-700/50 shadow-2xl shadow-black/50 overflow-hidden">
                          <div className="p-6">
                            <div className="grid grid-cols-2 gap-6">
                              {services.map((service) => (
                                <Link
                                  key={service.name}
                                  to={service.href}
                                  className={`group p-4 rounded-xl transition-all duration-300 hover:bg-slate-700/50 ${
                                    service.featured ? 'ring-2 ring-cyan-400/50' : ''
                                  }`}
                                  onClick={() => setServicesDropdownOpen(false)}
                                >
                                  <div className="flex items-start gap-3">
                                    <div className={`p-2 rounded-lg bg-gradient-to-br ${service.color}`}>
                                      {React.createElement(service.icon, { className: "w-5 h-5 text-white" })}
                                    </div>
                                    <div className="flex-1">
                                      <h3 className="font-semibold text-white group-hover:text-cyan-400 transition-colors">
                                        {service.name}
                                      </h3>
                                      <p className="text-sm text-gray-400 mt-1">
                                        {service.description}
                                      </p>
                                      {service.featured && (
                                        <span className="inline-flex items-center gap-1 mt-2 text-xs text-cyan-400">
                                          <Star className="w-3 h-3" />
                                          Featured
                                        </span>
                                      )}
                                    </div>
                                  </div>
                                </Link>
                              ))}
                            </div>
                            <div className="mt-6 pt-6 border-t border-slate-700/50">
                              <div className="flex items-center justify-between">
                                <Link
                                  to="/services"
                                  className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
                                  onClick={() => setServicesDropdownOpen(false)}
                                >
                                  View All Services
                                  <ArrowRight className="w-4 h-4" />
                                </Link>
                                <div className="flex items-center gap-4 text-sm text-gray-400">
                                  <span>Quick Access:</span>
                                  <div className="flex gap-2">
                                    <Link
                                      to="/request-quote"
                                      className="px-3 py-1 bg-slate-700/50 rounded-md hover:bg-slate-600/50 hover:text-white transition-colors"
                                      onClick={() => setServicesDropdownOpen(false)}
                                    >
                                      Get Quote
                                    </Link>
                                    <Link
                                      to="/schedule-demo"
                                      className="px-3 py-1 bg-slate-700/50 rounded-md hover:bg-slate-600/50 hover:text-white transition-colors"
                                      onClick={() => setServicesDropdownOpen(false)}
                                    >
                                      Schedule Demo
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Solutions Dropdown */}
                      {item.name === 'Solutions' && solutionsDropdownOpen && (
                        <div className="absolute top-full left-0 mt-2 w-[600px] bg-slate-800/95 backdrop-blur-xl rounded-2xl border border-slate-700/50 shadow-2xl shadow-black/50 overflow-hidden">
                          <div className="p-6">
                            <div className="grid grid-cols-2 gap-4">
                              {solutions.map((solution) => (
                                <Link
                                  key={solution.name}
                                  to={solution.href}
                                  className={`group p-4 rounded-xl transition-all duration-300 hover:bg-slate-700/50 ${
                                    solution.featured ? 'ring-2 ring-cyan-400/50' : ''
                                  }`}
                                  onClick={() => setSolutionsDropdownOpen(false)}
                                >
                                  <div className="flex items-start gap-3">
                                    <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500">
                                      {React.createElement(solution.icon, { className: "w-5 h-5 text-white" })}
                                    </div>
                                    <div className="flex-1">
                                      <h3 className="font-semibold text-white group-hover:text-cyan-400 transition-colors">
                                        {solution.name}
                                      </h3>
                                      <p className="text-sm text-gray-400 mt-1">
                                        {solution.description}
                                      </p>
                                      {solution.featured && (
                                        <span className="inline-flex items-center gap-1 mt-2 text-xs text-cyan-400">
                                          <Star className="w-3 h-3" />
                                          Featured
                                        </span>
                                      )}
                                    </div>
                                  </div>
                                </Link>
                              ))}
                            </div>
                            <div className="mt-6 pt-6 border-t border-slate-700/50">
                              <div className="flex items-center justify-between">
                                <Link
                                  to="/solutions"
                                  className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
                                  onClick={() => setSolutionsDropdownOpen(false)}
                                >
                                  View All Solutions
                                  <ArrowRight className="w-4 h-4" />
                                </Link>
                                <div className="flex items-center gap-4 text-sm text-gray-400">
                                  <span>Quick Access:</span>
                                  <div className="flex gap-2">
                                    <Link
                                      to="/contact"
                                      className="px-3 py-1 bg-slate-700/50 rounded-md hover:bg-slate-600/50 hover:text-white transition-colors"
                                      onClick={() => setSolutionsDropdownOpen(false)}
                                    >
                                      Contact Us
                                    </Link>
                                    <Link
                                      to="/schedule-demo"
                                      className="px-3 py-1 bg-slate-700/50 rounded-md hover:bg-slate-600/50 hover:text-white transition-colors"
                                      onClick={() => setSolutionsDropdownOpen(false)}
                                    >
                                      Schedule Demo
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Resources Dropdown */}
                      {item.name === 'Resources' && resourcesDropdownOpen && (
                        <div className="absolute top-full left-0 mt-2 w-[600px] bg-slate-800/95 backdrop-blur-xl rounded-2xl border border-slate-700/50 shadow-2xl shadow-black/50 overflow-hidden">
                          <div className="p-6">
                            <div className="grid grid-cols-2 gap-4">
                              {resources.map((resource) => (
                                <Link
                                  key={resource.name}
                                  to={resource.href}
                                  className={`group p-4 rounded-xl transition-all duration-300 hover:bg-slate-700/50 ${
                                    resource.featured ? 'ring-2 ring-cyan-400/50' : ''
                                  }`}
                                  onClick={() => setResourcesDropdownOpen(false)}
                                >
                                  <div className="flex items-start gap-3">
                                    <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500">
                                      {React.createElement(resource.icon, { className: "w-5 h-5 text-white" })}
                                    </div>
                                    <div className="flex-1">
                                      <h3 className="font-semibold text-white group-hover:text-cyan-400 transition-colors">
                                        {resource.name}
                                      </h3>
                                      <p className="text-sm text-gray-400 mt-1">
                                        {resource.description}
                                      </p>
                                      {resource.featured && (
                                        <span className="inline-flex items-center gap-1 mt-2 text-xs text-cyan-400">
                                          <Star className="w-3 h-3" />
                                          Featured
                                        </span>
                                      )}
                                    </div>
                                  </div>
                                </Link>
                              ))}
                            </div>
                            <div className="mt-6 pt-6 border-t border-slate-700/50">
                              <div className="flex items-center justify-between">
                                <Link
                                  to="/resources"
                                  className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
                                  onClick={() => setResourcesDropdownOpen(false)}
                                >
                                  View All Resources
                                  <ArrowRight className="w-4 h-4" />
                                </Link>
                                <div className="flex items-center gap-4 text-sm text-gray-400">
                                  <span>Quick Access:</span>
                                  <div className="flex gap-2">
                                    <Link
                                      to="/faq"
                                      className="px-3 py-1 bg-slate-700/50 rounded-md hover:bg-slate-600/50 hover:text-white transition-colors"
                                      onClick={() => setResourcesDropdownOpen(false)}
                                    >
                                      FAQ
                                    </Link>
                                    <Link
                                      to="/contact"
                                      className="px-3 py-1 bg-slate-700/50 rounded-md hover:bg-slate-600/50 hover:text-white transition-colors"
                                      onClick={() => setResourcesDropdownOpen(false)}
                                    >
                                      Contact
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className="text-slate-300 hover:text-cyan-400 px-3 py-2 text-sm font-medium transition-all duration-200 relative group"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>
            {/* Right side - Search, Actions, Mobile menu */}
            <div className="flex items-center space-x-4">
              {/* Search */}
              <form onSubmit={handleSearch} className="hidden md:block">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-64 pl-10 pr-4 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-sm"
                  />
                </div>
              </form>
              {/* Contact Info */}
              <div className="hidden lg:flex items-center space-x-4">
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition-colors text-sm"
                >
                  <Phone className="w-4 h-4" />
                  <span className="hidden xl:inline">{contactInfo.phone}</span>
                </a>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition-colors text-sm"
                >
                  <Mail className="w-4 h-4" />
                  <span className="hidden xl:inline">{contactInfo.email}</span>
                </a>
              </div>
              {/* CTA Button */}
              <Link
                to="/request-quote"
                className="hidden md:inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white text-sm font-medium rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                Get Quote
              </Link>
              {/* Theme Toggle */}
              <ThemeToggle />

              {/* Contact Info */}
              <div className="hidden lg:flex items-center space-x-4 text-sm text-slate-300">
                <a href="tel:+13024640950" className="flex items-center space-x-1 hover:text-cyan-400 transition-colors">
                  <Phone className="w-4 h-4" />
                  <span>+1 302 464 0950</span>
                </a>
              </div>

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-700/50 transition-colors"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-slate-800/95 backdrop-blur-xl border-t border-slate-700/50">
            <div className="container-responsive py-6">
              {/* Mobile Search */}
              <form onSubmit={handleSearch} className="mb-6">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search services, solutions..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>
              </form>
              {/* Mobile Navigation */}
              <nav className="space-y-4">
                {navigation.map((item) => (
                  <div key={item.name}>
                    {item.hasDropdown ? (
                      <div>
                        <button
                          onClick={() => {
                            if (item.name === 'Services') setServicesDropdownOpen(!servicesDropdownOpen);
                            else if (item.name === 'Solutions') setSolutionsDropdownOpen(!solutionsDropdownOpen);
                            else if (item.name === 'Resources') setResourcesDropdownOpen(!resourcesDropdownOpen);
                          }}
                          className="flex items-center justify-between w-full text-left text-slate-300 hover:text-cyan-400 py-2 text-lg font-medium transition-colors"
                        >
                          {item.name}
                          <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${
                            (item.name === 'Services' && servicesDropdownOpen) ||
                            (item.name === 'Solutions' && solutionsDropdownOpen) ||
                            (item.name === 'Resources' && resourcesDropdownOpen)
                              ? 'rotate-180' : ''
                          }`} />
                        </button>
                        {/* Mobile Services Dropdown */}
                        {item.name === 'Services' && servicesDropdownOpen && (
                          <div className="ml-4 mt-2 space-y-2">
                            {services.slice(0, 6).map((service) => (
                              <Link
                                key={service.name}
                                to={service.href}
                                className="block text-slate-400 hover:text-cyan-400 py-1 transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {service.name}
                              </Link>
                            ))}
                            <Link
                              to="/services"
                              className="block text-cyan-400 hover:text-cyan-300 py-1 font-medium"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              View All Services →
                            </Link>
                          </div>
                        )}
                        {/* Mobile Solutions Dropdown */}
                        {item.name === 'Solutions' && solutionsDropdownOpen && (
                          <div className="ml-4 mt-2 space-y-2">
                            {solutions.map((solution) => (
                              <Link
                                key={solution.name}
                                to={solution.href}
                                className="block text-slate-400 hover:text-cyan-400 py-1 transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {solution.name}
                              </Link>
                            ))}
                          </div>
                        )}
                        {/* Mobile Resources Dropdown */}
                        {item.name === 'Resources' && resourcesDropdownOpen && (
                          <div className="ml-4 mt-2 space-y-2">
                            {resources.map((resource) => (
                              <Link
                                key={resource.name}
                                to={resource.href}
                                className="block text-slate-400 hover:text-cyan-400 py-1 transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {resource.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                      <div className="space-y-2">
                        {category.links.map((link) => (
                          <Link
                            key={link.name}
                            to={link.href}
                            className="block p-3 rounded-lg hover:bg-slate-800/50 transition-colors group"
                          >
                            <div className="font-medium text-white group-hover:text-cyan-400 transition-colors">
                              {link.name}
                            </div>
                            <div className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">
                              {link.description}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Mobile CTA */}
              <div className="mt-6">
                <Link
                  to="/request-quote"
                  className="block w-full text-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get Your Quote
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
      {/* Click outside to close dropdowns */}
      {(servicesDropdownOpen || solutionsDropdownOpen || resourcesDropdownOpen) && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => {
            setServicesDropdownOpen(false);
            setSolutionsDropdownOpen(false);
            setResourcesDropdownOpen(false);
          }}
        />
      )}
    </>
  );
}
