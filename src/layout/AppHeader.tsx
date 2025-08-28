import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  Search, 
  User, 
  Bell, 
  ChevronDown,
  Brain,
  Shield,
  Cloud,
  Zap,
  Globe,
  Cpu,
  Database,
  Network,
  Lock,
  Code,
  Rocket,
  Users,
  BarChart3,
  FileImage,
  TrendingUp,
  MessageCircle,
  Video,
  FileText,
  Heart,
  PanelLeft,
  Sparkles,
  Target,
  Award,
  Lightbulb,
  Layers,
  Building,
  Truck,
  Scale,
  BookOpen,
  DollarSign,
  Cpu as CpuIcon,
  Shield as ShieldIcon,
  Brain as BrainIcon,
  Rocket as RocketIcon,
  Phone,
  Mail,
  MapPin,
  Clock,
  Linkedin,
  Twitter,
  Facebook,
  Youtube,
  Instagram,
  Github,
  HelpCircle,
  ShoppingCart,
  Star,
  Briefcase,
  Tag,
  Phone as PhoneIcon,
  Mail as MailIcon,
  MapPin as MapPinIcon,
  Clock as ClockIcon,
  Atom,
  Workflow,
  Gauge,
  PenTool,
  Home
} from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';

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

  const navigation = [
<<<<<<< HEAD
    { name: 'Home', href: '/', current: true },
    { name: 'Services', href: '/services', current: false },
    { name: 'Innovative 2025', href: '/innovative-services-landing-2025', current: false, featured: true },
    { name: '2026 Services', href: '/services2026', current: false, featured: true },
    { name: 'Pricing Guide', href: '/comprehensive-pricing-guide-2027', current: false },
    { name: 'Revolutionary 2030', href: '/revolutionary-services-2030', current: false, featured: true },
    { name: 'AI Services', href: '/ai-services', current: false },
    { name: 'IT Services', href: '/it-services', current: false },
    { name: 'Micro SaaS', href: '/micro-saas', current: false },
    { name: 'Solutions', href: '/solutions', current: false },
    { name: 'AI Solutions', href: '/ai-solutions', current: false },
    { name: 'Case Studies', href: '/case-studies', current: false },
    { name: 'Research', href: '/research-development', current: false },
    { name: 'Events', href: '/events', current: false },
    { name: 'News', href: '/news', current: false },
    { name: 'Pricing', href: '/pricing', current: false },
    { name: 'Partners', href: '/partners', current: false },
    { name: 'Blog', href: '/blog', current: false },
    { name: 'Help', href: '/help', current: false },
    { name: 'About', href: '/about', current: false },
    { name: 'Contact', href: '/contact', current: false },
    { name: 'Careers', href: '/careers', current: false },
=======
    {
      name: 'Home',
      href: '/',
      icon: Home,
      description: 'Welcome to Zion Tech Group'
    },
    {
      name: 'Services',
      href: '/services',
      icon: Rocket,
      description: 'Explore our services'
    },
    {
      name: 'About',
      href: '/about',
      icon: Users,
      description: 'Learn about our company'
    },
    {
      name: 'Contact',
      href: '/contact',
      icon: Phone,
      description: 'Get in touch with us'
    }
>>>>>>> origin/cursor/enhance-application-with-new-services-and-site-improvements
  ];

  const services = [
    { name: 'AI Business Intelligence Elite', href: '/services/ai-business-intelligence-elite', icon: Brain, description: 'Advanced AI Analytics Platform' },
    { name: 'AI Cybersecurity Elite', href: '/services/ai-cybersecurity-elite', icon: Shield, description: 'Military-Grade AI Security' },
    { name: 'Quantum Computing Elite', href: '/services/quantum-computing-elite', icon: Atom, description: 'Next-Gen Quantum Solutions' },
    { name: 'Micro-SaaS Platform Elite', href: '/services/micro-saas-platform-elite', icon: Rocket, description: 'Complete SaaS Platform' },
    { name: 'AI & Analytics', href: '/services/ai-business-intelligence', icon: Brain, description: 'Machine Learning & Data Science' },
    { name: 'AI Workflow Automation', href: '/services/ai-workflow-automation', icon: Workflow, description: 'Intelligent Process Automation' },
    { name: 'AI Cybersecurity', href: '/services/ai-cybersecurity', icon: Shield, description: 'AI-Powered Security' },
    { name: 'Quantum Computing', href: '/services/quantum-computing-solutions', icon: Atom, description: 'Quantum Solutions' },
    { name: 'IoT Edge Computing', href: '/services/iot-edge-computing', icon: Cpu, description: 'Smart Devices & Networks' },
    { name: 'Digital Twin', href: '/services/digital-twin', icon: Rocket, description: 'Simulation & Monitoring' },
    { name: 'Cybersecurity', href: '/services/ai-compliance-assistant', icon: Shield, description: 'AI-Powered Security' },
    { name: 'Cloud & DevOps', href: '/services/cloud-devops', icon: Cloud, description: 'Infrastructure & Automation' },
    { name: 'IoT & Edge', href: '/services/it-infrastructure', icon: Cpu, description: 'Smart Devices & Networks' },
    { name: 'Data Analytics', href: '/services/data-analytics', icon: BarChart3, description: 'Business Intelligence & Insights' },
    { name: 'Healthcare Tech', href: '/services/ai-compliance-assistant', icon: Heart, description: 'AI Medicine & Diagnostics' },
    { name: 'Sustainability', href: '/services/green-it', icon: Globe, description: 'Green IT Solutions' },
    { name: 'Micro SaaS', href: '/services/micro-saas-solutions', icon: ShoppingCart, description: 'Productized SaaS for niches' },
    { name: 'AI Auto Email', href: '/services/ai-auto-email-responder', icon: MessageCircle, description: 'Faster replies, CRM logging' },
    { name: 'Mobile Surveys', href: '/services/mobile-feedback-surveys', icon: Users, description: 'NPS/CSAT with AI insights' },
    { name: 'Compliance Copilot', href: '/services/ai-compliance-copilot', icon: Shield, description: 'SOC2/ISO evidence automation' },
    { name: 'LLM Content Studio', href: '/services/llm-content-studio', icon: BookOpen, description: 'On-brand AI content' },
    { name: 'FinOps Advisor', href: '/services/finops-advisor', icon: DollarSign, description: 'Cloud cost optimization' },
    { name: 'Returns Management', href: '/services/returns-management', icon: ShoppingCart, description: 'E‑commerce RMA automation' },
    { name: 'Email Sequencer', href: '/services/email-sequencer', icon: MessageCircle, description: 'Automated follow‑ups' },
    { name: 'Podcast Transcription', href: '/services/podcast-transcription', icon: BookOpen, description: 'Transcripts & show notes' },
    { name: 'Micro CRM', href: '/services/micro-crm', icon: Users, description: 'Local business CRM' },
    { name: 'Website Analytics', href: '/services/website-analytics', icon: Gauge, description: 'Privacy-first SMB analytics' },
    { name: 'IT Helpdesk', href: '/services/it-helpdesk', icon: HelpCircle, description: 'Tickets, SLAs, portals' },
    { name: 'Affiliate Tracking', href: '/services/affiliate-tracking', icon: ShoppingCart, description: 'Partner revenue platform' },
    { name: 'AI SEO Optimizer', href: '/services/ai-seo', icon: Search, description: 'Semantic SEO & content briefs' },
    { name: 'Interview Assessment AI', href: '/services/interview-assessment', icon: Users, description: 'Structured interviews & scoring' },
    { name: 'Helpdesk Platform', href: '/services/helpdesk', icon: MessageCircle, description: 'Tickets, KB, chat & AI' },
    { name: 'DSR Privacy Portal', href: '/services/dsr-portal', icon: Shield, description: 'GDPR/CCPA request workflow' },
    { name: 'Security Headers & CSP', href: '/services/security-headers-csp', icon: Shield, description: 'HSTS/CSP automation' },
    { name: 'AI Project Manager', href: '/services/ai-project-manager', icon: Target, description: 'Intelligent project management' },
    { name: 'AI Content Generator', href: '/services/ai-content-generator', icon: PenTool, description: 'AI-powered content creation' },
    { name: 'AI Customer Support', href: '/services/ai-customer-support', icon: MessageCircle, description: '24/7 intelligent support' },
    { name: 'AI Data Analytics', href: '/services/ai-data-analytics', icon: BarChart3, description: 'Predictive business intelligence' },
    { name: 'AI Marketing Automation', href: '/services/ai-marketing-automation', icon: Target, description: 'Smart marketing optimization' }
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter },
    { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook },
    { name: 'YouTube', href: 'https://youtube.com/ziontechgroup', icon: Youtube }
  ];

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
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="relative group px-3 py-2 text-sm font-medium text-white hover:text-zion-cyan transition-colors duration-300"
                  >
                    {item.name}
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
