import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, Home, Briefcase, Users, Phone, Mail, MapPin, Globe, Linkedin, Twitter, Facebook, Instagram, 
  Shield, Handshake, ChevronDown, ChevronRight, Brain, Cpu, Database, Network, Code, Palette, 
  Target, Rocket, Eye, DollarSign, ShoppingCart, Clock, Cloud, Search, Building, Zap, Heart, 
  Lightbulb, TrendingUp, BarChart3, Lock, AlertTriangle, Server, CheckCircle, Truck, Car, 
  TestTube, PenTool, Building2, Atom, FileText, Quote, Newspaper, Calendar, Video, HelpCircle, 
  LifeBuoy, Store, PieChart, Share2, Monitor, Smartphone
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const location = useLocation();
  const [expandedSections, setExpandedSections] = useState<string[]>([]);

  // Close sidebar when route changes
  useEffect(() => {
    onClose();
  }, [location.pathname, onClose]);

  const toggleSection = (sectionTitle: string) => {
    setExpandedSections(prev => 
      prev.includes(sectionTitle) 
        ? prev.filter(title => title !== sectionTitle)
        : [...prev, sectionTitle]
    );
  };

  const navigationItems = [
    {
      title: 'AI Services',
      icon: Brain,
      items: [
        { name: 'AI Content Generation', href: '/ai-services-showcase', icon: Bot, badge: 'Popular' },
        { name: 'AI Business Intelligence', href: '/ai-services-showcase', icon: BarChart3, badge: 'New' },
        { name: 'AI Customer Support', href: '/ai-services-showcase', icon: MessageSquare, badge: 'Featured' },
        { name: 'AI Recruitment Platform', href: '/ai-services-showcase', icon: Users, badge: 'Popular' },
        { name: 'Quantum AI Platform', href: '/ai-services-showcase', icon: CpuIcon, badge: 'Premium' },
        { name: 'AI Ethics & Governance', href: '/ai-services-showcase', icon: ShieldCheck, badge: 'Enterprise' }
      ]
    },
    {
      title: 'IT Solutions',
      icon: Server,
      items: [
        { name: 'Edge Computing Platform', href: '/services', icon: Globe2, badge: 'New' },
        { name: 'DevOps Automation', href: '/services', icon: ZapIcon, badge: 'Popular' },
        { name: 'API Gateway Management', href: '/services', icon: Network, badge: 'Enterprise' },
        { name: 'Cloud-Native Development', href: '/services', icon: Cloud, badge: 'Premium' },
        { name: 'Low-Code Platform', href: '/services', icon: Layers, badge: 'Featured' },
        { name: 'PWA Builder', href: '/services', icon: Smartphone, badge: 'New' }
      ]
    },
    {
      title: 'Development',
      icon: Code,
      items: [
        { name: 'Web Development', href: '/services', icon: Globe, badge: 'Popular' },
        { name: 'Mobile Development', href: '/services', icon: Smartphone, badge: 'Featured' },
        { name: 'Metaverse Development', href: '/services', icon: Eye, badge: 'New' },
        { name: 'Blockchain Development', href: '/services', icon: Lock, badge: 'Premium' },
        { name: 'IoT Development', href: '/services', icon: Wifi, badge: 'Enterprise' }
      ]
    },
    {
      title: 'Security',
      icon: Shield,
      items: [
        { name: 'Home', path: '/', icon: Home },
        { name: 'Services', path: '/services', icon: Briefcase },
        { name: 'Solutions', path: '/solutions/enterprise', icon: Briefcase },
        { name: 'Pricing', path: '/pricing', icon: DollarSign },
        { name: 'About', path: '/about', icon: Users },
        { name: 'Contact', path: '/contact', icon: Phone }
      ]
    },
    {
      title: 'AI & Autonomous Systems',
      items: [
        { name: 'AI Autonomous Business Manager', path: '/ai-autonomous-business-manager', icon: Brain },
        { name: 'AI Autonomous Business Platform', path: '/ai-autonomous-business-platform', icon: Brain },
        { name: 'AI Autonomous Systems Platform', path: '/ai-autonomous-systems-platform', icon: Brain },
        { name: 'AI Autonomous Research Assistant', path: '/ai-autonomous-research-assistant', icon: Brain },
        { name: 'AI Autonomous Research', path: '/ai-autonomous-research', icon: Brain },
        { name: 'AI Autonomous Decision Engine', path: '/ai-autonomous-decision-engine', icon: Brain },
        { name: 'AI Autonomous Code Review', path: '/ai-autonomous-code-review', icon: Code },
        { name: 'AI Autonomous Creative Director', path: '/ai-autonomous-creative-director', icon: Palette },
        { name: 'AI Autonomous Data', path: '/ai-autonomous-data', icon: Database },
        { name: 'AI Autonomous DevOps', path: '/ai-autonomous-devops', icon: Cpu },
        { name: 'AI Autonomous Education Professor', path: '/ai-autonomous-education-professor', icon: Users },
        { name: 'AI Autonomous Healthcare Physician', path: '/ai-autonomous-healthcare-physician', icon: Heart },
        { name: 'AI Autonomous Learning System', path: '/ai-autonomous-learning-system', icon: Lightbulb },
        { name: 'AI Autonomous Legal Counsel', path: '/ai-autonomous-legal-counsel', icon: Shield },
        { name: 'AI Autonomous Logistics', path: '/ai-autonomous-logistics', icon: Truck },
        { name: 'AI Autonomous Manufacturing', path: '/ai-autonomous-manufacturing', icon: Building },
        { name: 'AI Autonomous Robotics', path: '/ai-autonomous-robotics', icon: Cpu },
        { name: 'AI Autonomous Scientific Researcher', path: '/ai-autonomous-scientific-researcher', icon: Search },
        { name: 'AI Autonomous Security', path: '/ai-autonomous-security', icon: Shield },
        { name: 'AI Autonomous Testing', path: '/ai-autonomous-testing', icon: CheckCircle },
        { name: 'AI Autonomous Vehicle Platform', path: '/ai-autonomous-vehicle-platform', icon: Car },
        { name: 'AI Autonomous Vehicles', path: '/ai-autonomous-vehicles', icon: Car },
        { name: 'AI Autonomous Venture Capitalist', path: '/ai-autonomous-venture-capitalist', icon: DollarSign }
      ]
    },
    {
      title: 'AI Specialized Solutions',
      items: [
        { name: 'AI Biomedical Research', path: '/ai-biomedical-research', icon: Heart },
        { name: 'AI Biotech Drug Discovery', path: '/ai-biotech-drug-discovery', icon: TestTube },
        { name: 'AI Blockchain Analytics', path: '/ai-blockchain-analytics', icon: Database },
        { name: 'AI Blockchain Governance', path: '/ai-blockchain-governance', icon: Shield },
        { name: 'AI Brain Computer Interface', path: '/ai-brain-computer-interface', icon: Brain },
        { name: 'AI Brain Interface', path: '/ai-brain-interface', icon: Brain },
        { name: 'AI Brand Personality Generator', path: '/ai-brand-personality-generator', icon: Palette },
        { name: 'AI Business Intelligence Elite', path: '/ai-business-intelligence-elite', icon: BarChart3 },
        { name: 'AI Business Intelligence Pro', path: '/ai-business-intelligence-pro', icon: BarChart3 },
        { name: 'AI Business Intelligence Suite', path: '/ai-business-intelligence-suite', icon: BarChart3 },
        { name: 'AI Business Intelligence', path: '/ai-business-intelligence', icon: BarChart3 },
        { name: 'AI Climate Prediction Engine', path: '/ai-climate-prediction-engine', icon: Globe },
        { name: 'AI Climate Prediction Platform', path: '/ai-climate-prediction-platform', icon: Globe },
        { name: 'AI Climate Prediction', path: '/ai-climate-prediction', icon: Globe },
        { name: 'AI Code Generation Enterprise', path: '/ai-code-generation-enterprise', icon: Code },
        { name: 'AI Code Review Copilot', path: '/ai-code-review-copilot', icon: Code },
        { name: 'AI Code Review', path: '/ai-code-review', icon: Code },
        { name: 'AI Compliance Automation', path: '/ai-compliance-automation', icon: Shield },
        { name: 'AI Computer Vision Platform', path: '/ai-computer-vision-platform', icon: Eye },
        { name: 'AI Consciousness Evolution', path: '/ai-consciousness-evolution', icon: Brain },
        { name: 'AI Consciousness Evolution Platform', path: '/ai-consciousness-evolution-platform', icon: Brain },
        { name: 'AI Consciousness Simulation Platform', path: '/ai-consciousness-simulation-platform', icon: Brain },
        { name: 'AI Consciousness Simulation', path: '/ai-consciousness-simulation', icon: Brain },
        { name: 'AI Consciousness Simulator', path: '/ai-consciousness-simulator', icon: Brain },
        { name: 'AI Content Creation Revolution', path: '/ai-content-creation-revolution', icon: PenTool },
        { name: 'AI Content Creation', path: '/ai-content-creation', icon: PenTool },
        { name: 'AI Content Factory', path: '/ai-content-factory', icon: Building2 },
        { name: 'AI Content Generation Automation', path: '/ai-content-generation-automation', icon: PenTool },
        { name: 'AI Content Generation Pro', path: '/ai-content-generation-pro', icon: PenTool },
        { name: 'AI Content Generator', path: '/ai-content-generator', icon: PenTool },
        { name: 'AI Content Marketing Automation', path: '/ai-content-marketing-automation', icon: TrendingUp },
        { name: 'AI Content Personalization Engine', path: '/ai-content-personalization-engine', icon: Target },
        { name: 'AI Creativity Studio', path: '/ai-creativity-studio', icon: Palette },
        { name: 'AI Market Research', path: '/ai-market-research', icon: Search },
        { name: 'AI Powered Enterprise Security', path: '/ai-powered-enterprise-security', icon: Shield },
        { name: 'AI Workflow Automation', path: '/ai-workflow-automation', icon: Zap }
      ]
    },
    {
      title: 'Core Services',
      items: [
        { name: 'AI & Autonomous Systems', path: '/services/ai-autonomous-systems', icon: Brain },
        { name: 'Cybersecurity', path: '/services/cybersecurity', icon: Shield },
        { name: 'Advanced Cybersecurity Suite', path: '/advanced-cybersecurity-suite', icon: Shield },
        { name: 'IT Infrastructure', path: '/services/it-infrastructure', icon: Server },
        { name: 'Quantum Technology', path: '/services/quantum-technology', icon: Atom },
        { name: 'Quantum Neural Network Platform', path: '/quantum-neural-network-platform', icon: Brain },
        { name: 'Micro SAAS Solutions', path: '/services/micro-saas-solutions', icon: Globe },
        { name: 'Industry Solutions', path: '/services/industry-solutions', icon: Building },
        { name: 'Accessibility Auditor', path: '/accessibility-auditor', icon: Eye },
        { name: 'Affiliate Attribution Hub', path: '/affiliate-attribution-hub', icon: BarChart3 },
        { name: 'SOC2 Compliance Automation', path: '/soc2-compliance-automation', icon: Shield },
        { name: '5G Enterprise Solutions', path: '/5g-enterprise-solutions', icon: Network },
        { name: 'Autonomous Business Operations Platform', path: '/autonomous-business-operations-platform', icon: Briefcase },
        { name: 'AI Powered IT Asset Management', path: '/ai-powered-it-asset-management', icon: Database }
      ]
    },
    {
      title: 'Solutions & Industries',
      items: [
        { name: 'Enterprise Solutions', path: '/solutions/enterprise', icon: Building },
        { name: 'Healthcare Solutions', path: '/solutions/healthcare', icon: Heart },
        { name: 'Financial Solutions', path: '/solutions/financial', icon: DollarSign },
        { name: 'Manufacturing Solutions', path: '/solutions/manufacturing', icon: Building2 },
        { name: 'Retail Solutions', path: '/solutions/retail', icon: ShoppingCart },
        { name: 'Government Solutions', path: '/solutions/government', icon: Building },
        { name: 'Space Technology', path: '/space-tech', icon: Rocket },
        { name: 'Research & Development', path: '/research-development', icon: Search },
        { name: 'Quantum Cloud Infrastructure', path: '/quantum-cloud-infrastructure', icon: Cloud },
        { name: 'Quantum Financial Trading', path: '/quantum-financial-trading', icon: DollarSign },
        { name: 'Quantum Services', path: '/quantum-services', icon: Atom }
      ]
    },
    {
      title: 'Company & Resources',
      items: [
        { name: 'About Us', path: '/about', icon: Users },
        { name: 'Our Mission', path: '/mission', icon: Target },
        { name: 'Team', path: '/team', icon: Users },
        { name: 'Leadership', path: '/leadership', icon: Users },
        { name: 'Partners', path: '/partners', icon: Handshake },
        { name: 'Careers', path: '/careers', icon: Briefcase },
        { name: 'Case Studies', path: '/case-studies', icon: FileText },
        { name: 'Testimonials', path: '/testimonials', icon: Quote },
        { name: 'News', path: '/news', icon: Newspaper },
        { name: 'Blog', path: '/blog', icon: PenTool },
        { name: 'Events', path: '/events', icon: Calendar },
        { name: 'Webinars', path: '/webinars', icon: Video },
        { name: 'White Papers', path: '/white-papers', icon: FileText },
        { name: 'Documentation', path: '/docs', icon: FileText },
        { name: 'Help Center', path: '/help', icon: HelpCircle },
        { name: 'Support', path: '/support', icon: LifeBuoy },
        { name: 'FAQ', path: '/faq', icon: HelpCircle },
        { name: 'Marketplace', path: '/marketplace', icon: Store },
        { name: 'Community', path: '/community', icon: Users }
      ]
    }
  ];

  const contactInfo = [
    { icon: Phone, text: '+1 302 464 0950', href: 'tel:+13024640950' },
    { icon: Mail, text: 'kleber@ziontechgroup.com', href: 'mailto:kleber@ziontechgroup.com' },
    { icon: MapPin, text: '364 E Main St STE 1008 Middletown DE 19709', href: '#' }
  ];

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/company/zion-tech-group', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/ziontechgroup', label: 'Twitter' },
    { icon: Facebook, href: 'https://facebook.com/ziontechgroup', label: 'Facebook' },
    { icon: Instagram, href: 'https://instagram.com/ziontechgroup', label: 'Instagram' }
  ];

  const sidebarVariants = {
    closed: {
      x: '-100%',
      transition: {
        type: 'spring' as const,
        stiffness: 300,
        damping: 30
      }
    },
    open: {
      x: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 300,
        damping: 30
      }
    }
  };

  const overlayVariants = {
    closed: { opacity: 0 },
    open: { opacity: 1 }
  };

  return (
    <>
      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={overlayVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={onClose}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={sidebarVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed left-0 top-0 h-full w-80 max-w-[90vw] z-50 overflow-hidden"
          >
            {/* Futuristic Background */}
            <div className="absolute inset-0 futuristic-bg opacity-80"></div>
            <div className="absolute inset-0 cyber-grid-bg opacity-30"></div>
            
            {/* Neural Network Lines */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="neural-line" style={{ top: '20%', width: '60%', left: '20%', animationDelay: '0s' }}></div>
              <div className="neural-line" style={{ top: '40%', width: '40%', left: '10%', animationDelay: '1s' }}></div>
              <div className="neural-line" style={{ top: '60%', width: '70%', left: '15%', animationDelay: '2s' }}></div>
              <div className="neural-line" style={{ top: '80%', width: '50%', left: '25%', animationDelay: '3s' }}></div>
            </div>

            {/* Floating Quantum Elements */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="quantum-particle" style={{ top: '15%', left: '80%', animationDelay: '0s' }}></div>
              <div className="quantum-particle" style={{ top: '35%', left: '85%', animationDelay: '1s' }}></div>
              <div className="quantum-particle" style={{ top: '55%', left: '90%', animationDelay: '2s' }}></div>
              <div className="quantum-particle" style={{ top: '75%', left: '88%', animationDelay: '3s' }}></div>
            </div>

            <div className="relative h-full flex flex-col">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-zion-cyan/30">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-10 h-10 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center animate-quantum-float">
                      <span className="text-white font-bold text-xl">Z</span>
                    </div>
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-zion-cyan rounded-full animate-ping"></div>
                  </div>
                  <div>
                    <h2 className="text-xl font-bold neon-text">Zion Tech</h2>
                    <p className="text-sm text-zion-slate-light">Navigation</p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 futuristic-card hover:bg-white/20 rounded-lg transition-colors group"
                >
                  <X className="w-5 h-5 text-zion-slate-light group-hover:neon-text transition-colors" />
                </button>
              </div>

              {/* Navigation Content */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {/* Main Navigation */}
                {navigationItems.map((section) => (
                  <div key={section.title} className="space-y-3">
                    <button
                      onClick={() => toggleSection(section.title)}
                      className="flex items-center justify-between w-full text-sm font-semibold text-zion-cyan uppercase tracking-wider neon-text hover:bg-white/10 rounded-lg p-2 transition-colors"
                    >
                      <span>{section.title}</span>
                      {expandedSections.includes(section.title) ? (
                        <ChevronDown className="w-4 h-4" />
                      ) : (
                        <ChevronRight className="w-4 h-4" />
                      )}
                    </button>
                    
                    {expandedSections.includes(section.title) && (
                      <div className="space-y-1 ml-4">
                        {section.items.map((item) => {
                          const Icon = item.icon;
                          const isActive = location.pathname === item.path;
                          
                          return (
                            <Link
                              key={item.name}
                              to={item.path}
                              className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 group ${
                                isActive
                                  ? 'quantum-button shadow-lg shadow-zion-cyan/30'
                                  : 'futuristic-card text-zion-slate-light hover:bg-white/20 hover:neon-text'
                              }`}
                            >
                              <Icon className={`w-4 h-4 ${
                                isActive ? 'text-white' : 'text-zion-cyan group-hover:neon-text'
                              }`} />
                              <span className="flex-1 text-sm">{item.name}</span>
                              {isActive && (
                                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                              )}
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                ))}

                {/* Quick Actions */}
                <div className="space-y-3">
                  <h3 className="text-sm font-semibold text-zion-cyan uppercase tracking-wider neon-text">
                    Quick Actions
                  </h3>
                  <div className="space-y-2">
                    <Link
                      to="/contact"
                      className="w-full quantum-button py-3 px-4 rounded-lg font-medium transform hover:scale-105 transition-transform text-center"
                    >
                      Get Free Quote
                    </Link>
                    <button className="w-full futuristic-card border border-zion-cyan/30 text-zion-cyan py-3 px-4 rounded-lg font-medium hover:bg-zion-cyan/10 transition-colors">
                      Schedule Demo
                    </button>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="border-t border-zion-cyan/30 p-6 space-y-4">
                {/* Contact Info */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-zion-cyan neon-text">Contact Info</h4>
                  <div className="space-y-2">
                    {contactInfo.map((contact, index) => {
                      const Icon = contact.icon;
                      return (
                        <a
                          key={index}
                          href={contact.href}
                          className="flex items-center gap-3 text-sm text-zion-slate-light hover:neon-text transition-colors group"
                        >
                          <Icon className="w-4 h-4 text-zion-cyan group-hover:neon-text" />
                          <span className="flex-1">{contact.text}</span>
                        </a>
                      );
                    })}
                  </div>
                </div>

                {/* Social Links */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-zion-cyan neon-text">Follow Us</h4>
                  <div className="flex gap-3">
                    {socialLinks.map((social, index) => {
                      const Icon = social.icon;
                      return (
                        <a
                          key={index}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 futuristic-card hover:bg-white/20 rounded-lg transition-colors group"
                          aria-label={social.label}
                        >
                          <Icon className="w-4 h-4 text-zion-slate-light group-hover:neon-text transition-colors" />
                        </a>
                      );
                    })}
                  </div>
                </div>

                {/* Company Info */}
                <div className="text-center pt-4 border-t border-zion-cyan/20">
                  <p className="text-xs text-zion-slate-light">
                    © 2024 Zion Tech Group
                  </p>
                  <p className="text-xs text-zion-slate-light mt-1">
                    Transforming Business with AI & Tech
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// Add missing icons
const Database = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.48 2 2 4.02 2 6.5v11C2 19.98 6.48 22 12 22s10-2.02 10-4.5v-11C22 4.02 17.52 2 12 2zM12 20c-4.42 0-8-1.79-8-4v-1.5c2.21 1.86 5.74 2.5 8 2.5s5.79-.64 8-2.5V16c0 2.21-3.58 4-8 4z"/>
    <path d="M12 16c-4.42 0-8-1.79-8-4v-1.5c2.21 1.86 5.74 2.5 8 2.5s5.79-.64 8-2.5V12c0 2.21-3.58 4-8 4z"/>
    <path d="M12 12c-4.42 0-8-1.79-8-4V6.5c2.21 1.86 5.74 2.5 8 2.5s5.79-.64 8-2.5V8c0 2.21-3.58 4-8 4z"/>
  </svg>
);

const CheckCircle = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
  </svg>
);