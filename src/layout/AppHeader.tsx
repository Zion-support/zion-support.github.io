import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search, User, Bell, ChevronDown, Zap, Brain, Shield, Cloud, Rocket, Globe, Cpu, Lock, Heart, Users, ShoppingCart, BookOpen, MessageCircle, HelpCircle, DollarSign, Gauge, Workflow, Atom, Star, Target, TrendingUp, Award, Code, Truck, Building, BarChart3, PenTool, Eye, Server, Smartphone, Database, Network, Clock, ArrowRight, PanelLeft, Sparkles, Phone, Mail, MapPin, Satellite, Activity, FileText, Leaf } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeToggle } from '../components/ThemeToggle';
import { ZionLoadingSpinner } from '../components/ui/EnhancedLoadingSpinner';
import { Sidebar } from '../components/Sidebar';
import { EnhancedSearch } from '../components/EnhancedSearch';

export default function AppHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const { user, logout } = useAuth();

  // Main navigation items - using enhanced navigation structure
  const mainNavigation = enhancedNavigation;

  // Enhanced services by category with better organization and working links
  const services = [
    // Featured & New Services
    { name: '2025 New Innovative Services', href: '/new-innovative-services-2025', icon: Star, description: 'Revolutionary AI & Micro SAAS Solutions', category: 'Featured', featured: true, color: 'from-zion-cyan to-zion-purple' },
    { name: '2026 Services Overview', href: '/ultimate-services-showcase-2026', icon: Star, description: 'Revolutionary AI & Quantum Solutions', category: 'Featured', featured: true, color: 'from-yellow-500 to-orange-500' },
    { name: '2027 Services Overview', href: '/comprehensive-services-showcase-2027', icon: Star, description: 'Cutting-edge Innovation & Emerging Tech', category: 'Featured', featured: true, color: 'from-purple-500 to-pink-500' },
    { name: '2029 Cutting-Edge Services', href: '/zion-cutting-edge-services-2029', icon: Star, description: 'Future-ready Technology Solutions', category: 'Featured', featured: true, color: 'from-indigo-500 to-purple-500' },
    
    // AI & Machine Learning
    { name: 'AI Workflow Orchestrator', href: '/services/ai-workflow-orchestrator', icon: Workflow, description: 'AI-powered workflow automation', category: 'AI & ML', color: 'from-cyan-500 to-blue-500' },
    { name: 'AI Data Governance Platform', href: '/services/ai-data-governance-platform', icon: Shield, description: 'AI-powered data governance', category: 'AI & ML', color: 'from-green-500 to-blue-500' },
    { name: 'AI Customer Experience Analytics', href: '/services/ai-customer-experience-analytics', icon: Brain, description: 'AI-powered customer insights', category: 'AI & ML', color: 'from-pink-500 to-purple-500' },
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
    
    // Data & Analytics
    { name: 'Data Analytics', href: '/services/data-analytics', icon: BarChart3, description: 'Business intelligence & insights', category: 'Data & Analytics', color: 'from-blue-500 to-indigo-500' },
    { name: 'Business Intelligence', href: '/services/ai-business-intelligence', icon: TrendingUp, description: 'Performance metrics & reporting', category: 'Data & Analytics', color: 'from-green-500 to-teal-500' },
    
    // Micro SaaS Solutions
    { name: 'Micro SaaS Platform', href: '/micro-saas', icon: ShoppingCart, description: 'Niche software solutions', category: 'Micro SaaS', color: 'from-purple-500 to-pink-500' },
    { name: 'Micro CRM', href: '/services/micro-crm', icon: Users, description: 'Customer relationship management', category: 'Micro SaaS', color: 'from-blue-500 to-cyan-500' },
    { name: 'Helpdesk Platform', href: '/services/helpdesk', icon: MessageCircle, description: 'Customer support system', category: 'Micro SaaS', color: 'from-green-500 to-emerald-500' },
    { name: 'Website Analytics', href: '/services/website-analytics', icon: BarChart3, description: 'Performance tracking & insights', category: 'Micro SaaS', color: 'from-blue-500 to-indigo-500' },
  ];

  // Quick links for easy access
  const quickLinks = [
    { name: 'Marketplace', href: '/marketplace', icon: ShoppingCart },
    { name: 'Blog', href: '/blog', icon: BookOpen },
    { name: 'FAQ', href: '/faq', icon: HelpCircle },
    { name: 'Pricing', href: '/pricing', icon: DollarSign },
    { name: 'Partners', href: '/partners', icon: Users },
    { name: 'Case Studies', href: '/case-studies', icon: FileText },
    { name: 'FAQ', href: '/faq', icon: HelpCircle },
    { name: 'Help Center', href: '/help', icon: HelpCircle },
    { name: 'Sitemap', href: '/sitemap', icon: Globe },
    { name: 'Blog', href: '/blog', icon: BookOpen },
    { name: 'News', href: '/news', icon: Newspaper },
    { name: 'Careers', href: '/careers', icon: Briefcase },
  ];

  // Services organized by categories for dropdown navigation
  const servicesCategories = [
    {
      title: 'AI & Machine Learning',
      icon: Brain,
      services: [
        { name: 'AI Workflow Orchestrator', href: '/services/ai-workflow-orchestrator', description: 'AI-powered workflow automation' },
        { name: 'AI Data Governance Platform', href: '/services/ai-data-governance-platform', description: 'AI-powered data governance' },
        { name: 'AI Customer Experience Analytics', href: '/services/ai-customer-experience-analytics', description: 'AI-powered customer insights' },
        { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence', description: 'Advanced analytics & ML insights' },
        { name: 'AI Compliance Assistant', href: '/services/ai-compliance-assistant', description: 'Automated regulatory compliance' },
        { name: 'AI Sales Copilot', href: '/services/ai-sales-copilot', description: 'Intelligent sales optimization' },
        { name: 'AI-Powered SEO', href: '/services/ai-powered-seo', description: 'Machine learning SEO optimization' },
        { name: 'Interview Assessment AI', href: '/services/interview-assessment-ai', description: 'AI-powered candidate evaluation' },
        { name: 'AI Content Marketing Suite', href: '/services/ai-content-creation', description: 'Automated content creation' },
        { name: 'AI Customer Support', href: '/services/ai-customer-support-automation', description: 'Intelligent support automation' },
        { name: 'AI Project Management', href: '/services/ai-project-management', description: 'AI-driven project optimization' },
        { name: 'AI Financial Analytics', href: '/services/ai-financial-analytics', description: 'Intelligent financial insights' },
        { name: 'AI Marketing Automation', href: '/services/ai-marketing-automation', description: 'AI-driven marketing workflows' },
        { name: 'AI Content Creation', href: '/services/ai-content-creation', description: 'AI-powered content generation' },
        { name: 'AI Cybersecurity', href: '/services/ai-cybersecurity', description: 'AI-enhanced security solutions' },
        { name: 'AI HR Platform', href: '/services/ai-hr-platform', description: 'Human resources automation' },
        { name: 'AI Predictive Maintenance', href: '/services/ai-predictive-maintenance', description: 'Predictive analytics for maintenance' },
        { name: 'AI Financial Risk Management', href: '/services/ai-financial-risk-management', description: 'Risk assessment tools' },
        { name: 'AI Code Review Security Scanner', href: '/services/ai-code-review-security-scanner', description: 'AI-powered code security' },
        { name: 'AI DevOps Automation Platform', href: '/services/ai-devops-automation-platform', description: 'DevOps automation with AI' },
        { name: 'AI Business Intelligence Analytics', href: '/services/ai-business-intelligence-analytics', description: 'Advanced BI with AI' },
        { name: 'AI Customer Experience Support', href: '/services/ai-customer-experience-support', description: 'AI-powered customer support' },
        { name: 'AI Marketing Automation Personalization', href: '/services/ai-marketing-automation-personalization', description: 'Personalized marketing with AI' }
      ]
    },
    {
      title: 'Cloud & DevOps',
      icon: Cloud,
      services: [
        { name: 'Cloud DevOps', href: '/services/cloud-devops', description: 'Infrastructure automation & scaling' },
        { name: 'IT Infrastructure', href: '/services/it-infrastructure', description: 'Enterprise infrastructure solutions' },
        { name: 'FinOps Advisor', href: '/services/finops-advisor', description: 'Cloud cost optimization' },
        { name: 'Cloud FinOps Optimizer', href: '/services/cloud-finops-optimizer', description: 'Financial operations automation' }
      ]
    },
    {
      title: 'Cybersecurity',
      icon: Shield,
      services: [
        { name: 'Security Headers & CSP', href: '/services/security-headers-csp', description: 'Web security hardening' },
        { name: 'DSR Privacy Portal', href: '/services/dsr-portal', description: 'GDPR/CCPA compliance' },
        { name: 'Zero Trust Network Access', href: '/services/zero-trust-network-access', description: 'Modern security architecture' }
      ]
    },
    {
      title: 'Digital Transformation',
      icon: Zap,
      services: [
        { name: 'Digital Twin', href: '/services/digital-twin', description: 'Virtual system replicas' },
        { name: 'Digital Transformation', href: '/services/digital-transformation', description: 'Strategic technology consulting' },
        { name: 'IT Consulting', href: '/it-consulting', description: 'Technology strategy & planning' }
      ]
    },
    {
      title: 'Emerging Technologies',
      icon: Atom,
      services: [
        { name: 'Quantum Computing', href: '/services/quantum-computing', description: 'Next-gen computational power' },
        { name: 'IoT Edge Computing', href: '/services/iot-edge-computing', description: 'Smart device networks' },
        { name: 'AI Quantum Hybrid Platform', href: '/services/ai-quantum-hybrid-platform', description: 'Quantum-AI integration' },
        { name: 'Space Technology', href: '/space-tech', description: 'Space-based solutions' }
      ]
    },
    {
      title: 'Data & Analytics',
      icon: BarChart3,
      services: [
        { name: 'Data Analytics', href: '/services/data-analytics', description: 'Business intelligence & insights' },
        { name: 'Business Intelligence', href: '/services/ai-business-intelligence', description: 'Performance metrics & reporting' }
      ]
    },
    {
      title: 'Micro SaaS Solutions',
      icon: ShoppingCart,
      services: [
        { name: 'Micro SaaS Platform', href: '/micro-saas', description: 'Niche software solutions' },
        { name: 'Micro CRM', href: '/services/micro-crm', description: 'Customer relationship management' },
        { name: 'Helpdesk Platform', href: '/services/helpdesk-platform', description: 'Customer support system' },
        { name: 'Website Analytics', href: '/services/website-analytics', description: 'Performance tracking & insights' },
        { name: 'Affiliate Tracking', href: '/services/affiliate-tracking', description: 'Affiliate marketing platform' },
        { name: 'Mobile Survey', href: '/services/mobile-survey', description: 'Mobile survey solutions' },
        { name: 'Podcast Transcription', href: '/services/podcast-transcription', description: 'Audio to text conversion' },
        { name: 'Email Sequencer', href: '/services/email-sequencer', description: 'Email automation platform' },
        { name: 'Returns Management', href: '/services/returns-management', description: 'Returns processing system' },
        { name: 'LLM Content Studio', href: '/services/llm-content-studio', description: 'AI content creation platform' }
      ]
    },
    {
      title: 'Featured Services',
      icon: Star,
      services: [
        { name: '2025 New Innovative Services', href: '/new-innovative-services-2025', description: 'Revolutionary AI & Micro SAAS Solutions' },
        { name: '2026 Services Overview', href: '/ultimate-services-showcase-2026', description: 'Revolutionary AI & Quantum Solutions' },
        { name: '2027 Services Overview', href: '/comprehensive-services-showcase-2027', description: 'Cutting-edge Innovation & Emerging Tech' },
        { name: '2029 Cutting-Edge Services', href: '/zion-cutting-edge-services-2029', description: 'Future-ready Technology Solutions' },
        { name: 'Comprehensive Services Showcase 2029', href: '/comprehensive-services-showcase-2029', description: 'Complete service portfolio' }
      ]
    }
  ];

  // Enhanced navigation structure
  const enhancedNavigation = [
    { name: 'Home', href: '/', current: true },
    { name: 'About', href: '/about', current: false },
    { 
      name: 'Services', 
      href: '/services', 
      current: false,
      hasDropdown: true,
      dropdownItems: [
        { name: 'AI & Machine Learning', href: '/ai-services', icon: Brain, description: 'Intelligent automation & insights' },
        { name: 'Cloud & DevOps', href: '/it-services', icon: Cloud, description: 'Infrastructure & automation' },
        { name: 'Cybersecurity', href: '/services/ai-cybersecurity-platform', icon: Shield, description: 'Advanced security solutions' },
        { name: 'Digital Transformation', href: '/services/digital-transformation', icon: Zap, description: 'Strategic consulting' },
        { name: 'Micro SaaS', href: '/micro-saas', icon: ShoppingCart, description: 'Niche software solutions' },
        { name: 'View All Services', href: '/services', icon: ArrowRight, description: 'Complete service catalog' },
      ]
    },
    { name: 'Solutions', href: '/solutions/enterprise', current: false },
    { name: 'Contact', href: '/contact', current: false },
    { name: 'Blog', href: '/blog', current: false },
    { name: 'Careers', href: '/careers', current: false },
  ];

  // Enhanced futuristic background component
  const FuturisticBackground = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated grid with neon effect */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
      
      {/* Enhanced floating particles with neon glow */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-40 shadow-lg shadow-cyan-400/30"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [0.5, 1.2, 0.5],
            }}
            transition={{
              duration: 3 + i * 0.2,
              repeat: Infinity,
              delay: i * 0.1,
              ease: "easeInOut"
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
      
      {/* Enhanced gradient orbs with neon glow */}
      <motion.div 
        className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-2xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-2xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.1, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
    </div>
  );

  return (
    <>
      <header className={`sticky top-0 z-50 w-full transition-all duration-500 ${
        isScrolled 
          ? 'bg-zion-slate-dark/95 backdrop-blur-xl border-b border-zion-cyan/20 shadow-2xl' 
          : 'bg-transparent'
      }`}>
        {/* Enhanced animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-10 left-10 w-32 h-32 border border-zion-cyan/20 rounded-full animate-pulse float"></div>
            <div className="absolute bottom-20 right-20 w-24 h-24 border border-zion-purple/20 rounded-full animate-pulse delay-1000 float-delayed"></div>
            <div className="absolute top-1/2 left-1/2 w-16 h-16 border border-zion-blue/20 rounded-full animate-pulse delay-2000 float-slow"></div>
            <div className="absolute top-40 right-40 w-12 h-12 border border-zion-cyan/20 rounded-full animate-pulse delay-3000 float-fast"></div>
          </div>
        </div>

        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              {/* Logo */}
              <div className="flex items-center">
                <Link to="/" className="flex items-center space-x-2 group">
                  <div className="relative">
                    <div className="w-10 h-10 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold text-xl">Z</span>
                    </div>
                    <div className="absolute -inset-1 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl blur opacity-25 group-hover:opacity-75 transition-opacity duration-300"></div>
                  </div>
                  <div className="hidden sm:block">
                    <h1 className="text-xl font-bold bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                      Zion Tech Group
                    </h1>
                    <p className="text-xs text-zion-slate-light">Innovation & Excellence</p>
                  </div>
                </Link>
              </div>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center space-x-8">
                {navigation.slice(0, 6).map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="relative group px-3 py-2 text-sm font-medium text-white hover:text-zion-cyan transition-colors duration-300"
                  >
                    {item.name}
                    {item.featured && (
                      <span className="absolute -top-1 -right-1 w-2 h-2 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full animate-pulse"></span>
                    )}
                    <span className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-zion-cyan to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                  </Link>
                ))}

                {/* Services Dropdown */}
                <div className="relative group">
                  <button className="flex items-center space-x-1 px-3 py-2 text-sm font-medium text-white hover:text-zion-cyan transition-colors duration-300">
                    <span>Services</span>
                    <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
                  </button>
                  
                  <div className="absolute top-full left-0 mt-2 w-96 bg-zion-slate-dark/95 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <div className="p-6">
                      <div className="grid grid-cols-1 gap-4">
                        {services.slice(0, 4).map((service) => (
                          <Link
                            key={service.name}
                            to={service.href}
                            className="group flex items-start space-x-3 p-3 rounded-xl hover:bg-zion-slate-light/20 transition-all duration-300"
                          >
                            <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                              <service.icon className="w-5 h-5 text-white" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-white group-hover:text-zion-cyan transition-colors duration-300">
                                {service.name}
                              </p>
                              <p className="text-xs text-zion-slate-light mt-1">
                                {service.description}
                              </p>
                            </div>
                          </Link>
                        ))}
                        <div className="pt-2">
                          <Link
                            to="/services"
                            className="block w-full text-center px-4 py-2 bg-gradient-to-r from-zion-cyan to-zion-purple text-white text-sm font-medium rounded-lg hover:from-zion-cyan/80 hover:to-zion-purple/80 transition-all duration-300"
                          >
                            View All Services
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact */}
                <Link
                  to="/contact"
                  className="px-4 py-2 bg-gradient-to-r from-zion-cyan to-zion-purple text-white text-sm font-medium rounded-lg hover:from-zion-cyan/80 hover:to-zion-purple/80 transition-all duration-300"
                >
                  Get Started
                </Link>
              </nav>

              {/* Mobile menu button */}
              <div className="lg:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="p-2 text-white hover:text-zion-cyan transition-colors duration-300"
                >
                  {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-zion-slate-dark/95 backdrop-blur-xl border-t border-zion-cyan/20"
            >
              <div className="px-4 py-6 space-y-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-2 text-base font-medium text-white hover:text-zion-cyan transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                ))}
                
                {/* Mobile Services */}
                <div className="space-y-2">
                  <p className="px-3 py-2 text-sm font-medium text-zion-slate-light">Services</p>
                  {services.slice(0, 8).map((service) => (
                    <Link
                      key={service.name}
                      to={service.href}
                      onClick={() => setIsOpen(false)}
                      className="block px-6 py-2 text-sm text-white hover:text-zion-cyan transition-colors duration-300"
                    >
                      {service.name}
                    </Link>
                  ))}
                  <Link
                    to="/services"
                    onClick={() => setIsOpen(false)}
                    className="block px-6 py-2 text-sm text-zion-cyan hover:text-zion-cyan/80 transition-colors duration-300"
                  >
                    View All Services →
                  </Link>
                </div>

                <div className="pt-4">
                  <Link
                    to="/contact"
                    onClick={() => setIsOpen(false)}
                    className="block w-full text-center px-4 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white text-sm font-medium rounded-lg hover:from-zion-cyan/80 hover:to-zion-purple/80 transition-all duration-300"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
