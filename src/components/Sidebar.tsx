import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Home, Briefcase, Users, Phone, Mail, MapPin, Globe, Linkedin, Twitter, Facebook, Instagram, Shield, Handshake, Zap, FileText, HelpCircle, Settings, Rocket, Brain, Database, Lock, Cloud, Code, BarChart3, Palette, Target, Lightbulb, BookOpen, Calendar, MessageSquare, Star, Award, TrendingUp, Cpu, Network, Server, ShieldCheck, Globe2, Smartphone, Wifi, Satellite, Atom, TestTube, Microscope, Car, Plane, Ship, Truck, Building2, Heart, Pill, Stethoscope, Gavel, Scale, Factory, Cog, Bot, Eye, Key, QrCode, Wallet, Coins, Leaf, Sun, Wind, Store, Cookie, Github } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const location = useLocation();

  // Close sidebar when route changes
  useEffect(() => {
    onClose();
  }, [location.pathname, onClose]);

  const navigationItems = [
    {
      title: 'Main',
      items: [
        { name: 'Home', path: '/', icon: Home },
        { name: 'Services', path: '/services', icon: Briefcase },
        { name: 'Solutions', path: '/solutions/enterprise', icon: Zap },
        { name: 'About', path: '/about', icon: Users },
        { name: 'Contact', path: '/contact', icon: Phone },
        { name: 'Pricing', path: '/pricing', icon: Star }
      ]
    },
    {
      title: 'AI & Autonomous Systems',
      items: [
        { name: 'AI Autonomous Systems', path: '/services/ai-autonomous-systems', icon: Brain },
        { name: 'AI Business Manager', path: '/ai-autonomous-business-manager', icon: Settings },
        { name: 'AI Business Platform', path: '/ai-autonomous-business-platform', icon: Rocket },
        { name: 'AI Code Review', path: '/ai-autonomous-code-review', icon: Code },
        { name: 'AI Creative Director', path: '/ai-autonomous-creative-director', icon: Palette },
        { name: 'AI Data Management', path: '/ai-autonomous-data', icon: Database },
        { name: 'AI Decision Engine', path: '/ai-autonomous-decision-engine', icon: Target },
        { name: 'AI Decision Platform', path: '/ai-autonomous-decision-platform', icon: BarChart3 },
        { name: 'AI DevOps', path: '/ai-autonomous-devops', icon: Cpu },
        { name: 'AI Education Professor', path: '/ai-autonomous-education-professor', icon: BookOpen },
        { name: 'AI Healthcare Physician', path: '/ai-autonomous-healthcare-physician', icon: Stethoscope },
        { name: 'AI Learning System', path: '/ai-autonomous-learning-system', icon: Lightbulb },
        { name: 'AI Legal Counsel', path: '/ai-autonomous-legal-counsel', icon: Gavel },
        { name: 'AI Logistics', path: '/ai-autonomous-logistics', icon: Truck },
        { name: 'AI Manufacturing', path: '/ai-autonomous-manufacturing', icon: Factory },
        { name: 'AI Research Assistant', path: '/ai-autonomous-research-assistant', icon: Microscope },
        { name: 'AI Research Platform', path: '/ai-autonomous-research', icon: TestTube },
        { name: 'AI Robotics', path: '/ai-autonomous-robotics', icon: Bot },
        { name: 'AI Scientific Researcher', path: '/ai-autonomous-scientific-researcher', icon: Atom },
        { name: 'AI Security', path: '/ai-autonomous-security', icon: ShieldCheck },
        { name: 'AI Systems Platform', path: '/ai-autonomous-systems-platform', icon: Network },
        { name: 'AI Testing', path: '/ai-autonomous-testing', icon: Eye },
        { name: 'AI Vehicle Platform', path: '/ai-autonomous-vehicle-platform', icon: Car },
        { name: 'AI Vehicles', path: '/ai-autonomous-vehicles', icon: Plane },
        { name: 'AI Venture Capitalist', path: '/ai-autonomous-venture-capitalist', icon: TrendingUp }
      ]
    },
    {
      title: 'Core Services',
      items: [
        { name: 'AI Business Intelligence', path: '/services/ai-business-intelligence', icon: BarChart3 },
        { name: 'AI Marketing Automation', path: '/services/ai-marketing-automation', icon: Target },
        { name: 'AI Workflow Automation', path: '/ai-workflow-automation', icon: Settings },
        { name: 'AI Content Generation', path: '/ai-content-generator', icon: FileText },
        { name: 'AI Content Marketing', path: '/ai-content-marketing-automation', icon: MessageSquare },
        { name: 'AI Content Personalization', path: '/ai-content-personalization-engine', icon: Palette },
        { name: 'AI Creativity Studio', path: '/ai-creativity-studio', icon: Lightbulb },
        { name: 'AI Market Research', path: '/ai-market-research', icon: TrendingUp },
        { name: 'AI Enterprise Security', path: '/ai-powered-enterprise-security', icon: Shield },
        { name: 'AI Asset Management', path: '/ai-powered-it-asset-management', icon: Database },
        { name: 'AI Code Generation', path: '/ai-code-generation-enterprise', icon: Code },
        { name: 'AI Code Review Copilot', path: '/ai-code-review-copilot', icon: Eye },
        { name: 'AI Compliance Automation', path: '/ai-compliance-automation', icon: ShieldCheck },
        { name: 'AI Computer Vision', path: '/ai-computer-vision-platform', icon: Eye },
        { name: 'AI Consciousness Evolution', path: '/ai-consciousness-evolution', icon: Brain },
        { name: 'AI Consciousness Simulation', path: '/ai-consciousness-simulation', icon: Atom },
        { name: 'AI Content Creation', path: '/ai-content-creation', icon: FileText },
        { name: 'AI Content Factory', path: '/ai-content-factory', icon: Factory },
        { name: 'AI Content Generation Pro', path: '/ai-content-generation-pro', icon: Star },
        { name: 'AI Content Generation 2033', path: '/ai-content-generation-automation-2033', icon: Rocket },
        { name: 'AI Content Generation 2029', path: '/ai-content-generation-pro-2029', icon: Award }
      ]
    },
    {
      title: 'Quantum & Emerging Tech',
      items: [
        { name: 'Quantum Technology', path: '/services/quantum-technology', icon: Atom },
        { name: 'Quantum Neural Networks', path: '/quantum-neural-network-platform', icon: Brain },
        { name: 'Quantum Cloud Infrastructure', path: '/quantum-cloud-infrastructure', icon: Cloud },
        { name: 'Quantum Financial Trading', path: '/quantum-financial-trading', icon: TrendingUp },
        { name: 'Quantum Services', path: '/quantum-services', icon: Globe },
        { name: 'Space Technology', path: '/space-tech', icon: Satellite },
        { name: '5G Enterprise Solutions', path: '/5g-enterprise-solutions', icon: Wifi },
        { name: 'IoT Data Analytics', path: '/iot-data-analytics', icon: Smartphone },
        { name: 'Blockchain Enterprise', path: '/blockchain-enterprise-solutions', icon: Key },
        { name: 'AI Blockchain Analytics', path: '/ai-blockchain-analytics', icon: BarChart3 },
        { name: 'AI Blockchain Governance', path: '/ai-blockchain-governance', icon: Shield },
        { name: 'AI Brain Computer Interface', path: '/ai-brain-computer-interface', icon: Brain },
        { name: 'AI Brain Interface', path: '/ai-brain-interface', icon: Cpu },
        { name: 'AI Brand Personality', path: '/ai-brand-personality-generator', icon: Star },
        { name: 'AI Business Intelligence Elite', path: '/ai-business-intelligence-elite-2026', icon: Award },
        { name: 'AI Business Intelligence Pro', path: '/ai-business-intelligence-pro', icon: Star },
        { name: 'AI Business Intelligence Suite', path: '/ai-business-intelligence-suite', icon: BarChart3 },
        { name: 'AI Business Intelligence Suite 2029', path: '/ai-business-intelligence-suite-2029', icon: Rocket },
        { name: 'AI Climate Prediction', path: '/ai-climate-prediction', icon: Leaf },
        { name: 'AI Climate Prediction Engine', path: '/ai-climate-prediction-engine', icon: Sun },
        { name: 'AI Climate Prediction Platform', path: '/ai-climate-prediction-platform', icon: Globe2 }
      ]
    },
    {
      title: 'Infrastructure & Security',
      items: [
        { name: 'Cybersecurity', path: '/services/cybersecurity', icon: Shield },
        { name: 'IT Infrastructure', path: '/services/it-infrastructure', icon: Server },
        { name: 'Cloud DevOps', path: '/services/cloud-devops', icon: Cloud },
        { name: 'Autonomous DevOps Platform', path: '/autonomous-devops-platform', icon: Cpu },
        { name: 'SOC2 Compliance', path: '/soc2-compliance-automation', icon: ShieldCheck },
        { name: 'Enterprise IT', path: '/enterprise-it', icon: Building2 },
        { name: 'Micro SAAS Solutions', path: '/services/micro-saas-solutions', icon: Globe },
        { name: 'Industry Solutions', path: '/services/industry-solutions', icon: Factory },
        { name: 'Specialized IT Infrastructure', path: '/services/specialized-it-infrastructure', icon: Server },
        { name: 'Innovative Micro SAAS', path: '/innovative-micro-saas-services', icon: Rocket },
        { name: 'Comprehensive Services', path: '/comprehensive-innovative-services', icon: Globe2 },
        { name: 'Comprehensive Services Overview', path: '/comprehensive-services-overview', icon: BarChart3 }
      ]
    },
    {
      title: 'Industry Solutions',
      items: [
        { name: 'Enterprise Solutions', path: '/solutions/enterprise', icon: Building2 },
        { name: 'Healthcare Solutions', path: '/solutions/healthcare', icon: Heart },
        { name: 'Digital Transformation', path: '/digital-transformation', icon: Rocket },
        { name: 'Case Studies', path: '/case-studies', icon: BookOpen },
        { name: 'Testimonials', path: '/testimonials', icon: Star },
        { name: 'Partners', path: '/partners', icon: Handshake },
        { name: 'Team', path: '/team', icon: Users },
        { name: 'Leadership', path: '/leadership', icon: Award },
        { name: 'Careers', path: '/careers', icon: Briefcase }
      ]
    },
    {
      title: 'Resources & Support',
      items: [
        { name: 'Help Center', path: '/help', icon: HelpCircle },
        { name: 'Documentation', path: '/docs', icon: FileText },
        { name: 'FAQ', path: '/faq', icon: MessageSquare },
        { name: 'Webinars', path: '/webinars', icon: Calendar },
        { name: 'White Papers', path: '/white-papers', icon: FileText },
        { name: 'Events', path: '/events', icon: Calendar },
        { name: 'News', path: '/news', icon: Globe },
        { name: 'Blog', path: '/blog', icon: BookOpen },
        { name: 'Marketplace', path: '/marketplace', icon: Store },
        { name: 'Community', path: '/community', icon: Users },
        { name: 'Request Quote', path: '/request-quote', icon: MessageSquare },
        { name: 'Support', path: '/support', icon: HelpCircle }
      ]
    },
    {
      title: 'Legal & Compliance',
      items: [
        { name: 'Privacy Policy', path: '/privacy', icon: Shield },
        { name: 'Terms of Service', path: '/terms', icon: FileText },
        { name: 'Cookie Policy', path: '/cookies', icon: Cookie },
        { name: 'Dispute Management', path: '/dispute-management', icon: Gavel }
      ]
    },
    {
      title: 'Accessibility',
      items: [
        { name: 'Accessibility Auditor', path: '/accessibility-auditor', icon: Shield },
        { name: 'WCAG Compliance', path: '/accessibility-auditor', icon: Shield },
        { name: 'Mobile Accessibility', path: '/accessibility-auditor', icon: Shield }
      ]
    }
  ];

  const contactInfo = [
    { icon: Phone, text: '+1 (302) 464-0950', href: 'tel:+13024640950' },
    { icon: Mail, text: 'kleber@ziontechgroup.com', href: 'mailto:kleber@ziontechgroup.com' },
    { icon: MapPin, text: '364 E Main St STE 1008, Middletown DE 19709', href: '#' }
  ];

  const socialLinks = [
    { icon: Linkedin, href: 'https://linkedin.com/company/ziontechgroup', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/ziontechgroup', label: 'Twitter' },
    { icon: Facebook, href: 'https://facebook.com/ziontechgroup', label: 'Facebook' },
    { icon: Instagram, href: 'https://instagram.com/ziontechgroup', label: 'Instagram' },
    { icon: Github, href: 'https://github.com/ziontechgroup', label: 'GitHub' }
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

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={onClose}
          />
          
          {/* Sidebar */}
          <motion.div
            variants={sidebarVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed left-0 top-0 h-full w-80 max-w-[90vw] bg-background border-r border-border z-50 overflow-y-auto"
          >
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <Link to="/" className="flex items-center space-x-2" onClick={onClose}>
                  <div className="w-8 h-8 bg-gradient-to-br from-zion-blue to-zion-purple rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">Z</span>
                  </div>
                  <span className="text-xl font-bold text-gradient">Zion Tech Group</span>
                </Link>
                <button
                  onClick={onClose}
                  className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Navigation */}
              <nav className="space-y-8">
                {navigationItems.map((section) => (
                  <div key={section.title}>
                    <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                      {section.title}
                    </h3>
                    <ul className="space-y-2">
                      {section.items.map((item) => (
                        <li key={item.name}>
                          <Link
                            to={item.path}
                            className={`flex items-center space-x-3 px-3 py-2 rounded-md text-sm transition-colors ${
                              location.pathname === item.path
                                ? 'text-zion-cyan bg-zion-cyan/10'
                                : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                            }`}
                            onClick={onClose}
                          >
                            <item.icon className="h-4 w-4 flex-shrink-0" />
                            <span className="truncate">{item.name}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </nav>

              {/* Contact Information */}
              <div className="mt-12 pt-8 border-t border-border">
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                  Contact Information
                </h3>
                <div className="space-y-3">
                  {contactInfo.map((contact, index) => (
                    <div key={index} className="flex items-center space-x-3 text-sm text-muted-foreground">
                      <contact.icon className="h-4 w-4 text-zion-cyan" />
                      <a href={contact.href} className="hover:text-zion-cyan transition-colors">
                        {contact.text}
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-6">
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                  Follow Us
                </h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-zion-cyan transition-colors"
                      aria-label={social.label}
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}