import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Home, Briefcase, Users, Phone, Mail, MapPin, Globe, Linkedin, Twitter, Facebook, Instagram, Shield, Handshake, Brain, Zap, Database, Cpu, Lock, Rocket, BookOpen, FileText, Calendar, HelpCircle, Settings, BarChart3, Target, Building2, Heart, Car, Factory, ShoppingCart, GraduationCap, Microscope, Truck, Plane, Satellite, Atom, Cloud, Signal, Github, Link as LinkIcon } from 'lucide-react';
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
        { name: 'About', path: '/about', icon: Users },
        { name: 'Services', path: '/services', icon: Briefcase },
        { name: 'Solutions', path: '/solutions/enterprise', icon: Target },
        { name: 'Pricing', path: '/pricing', icon: BarChart3 },
        { name: 'Contact', path: '/contact', icon: Phone }
      ]
    },
    {
      title: 'AI & Autonomous Systems',
      items: [
        { name: 'AI Autonomous Systems', path: '/services/ai-autonomous-systems', icon: Brain },
        { name: 'AI Business Intelligence', path: '/services/ai-business-intelligence', icon: BarChart3 },
        { name: 'AI Marketing Automation', path: '/services/ai-marketing-automation', icon: Target },
        { name: 'AI Workflow Automation', path: '/ai-workflow-automation', icon: Zap },
        { name: 'AI Autonomous Research', path: '/ai-autonomous-research-assistant', icon: Microscope },
        { name: 'AI Content Generation', path: '/ai-content-generator', icon: FileText },
        { name: 'AI Code Review', path: '/ai-code-review', icon: Cpu },
        { name: 'AI Autonomous Business Manager', path: '/ai-autonomous-business-manager', icon: Building2 },
        { name: 'AI Autonomous Business Platform', path: '/ai-autonomous-business-platform', icon: Rocket },
        { name: 'AI Autonomous Code Review', path: '/ai-autonomous-code-review', icon: Cpu },
        { name: 'AI Autonomous Creative Director', path: '/ai-autonomous-creative-director', icon: Brain },
        { name: 'AI Autonomous Data', path: '/ai-autonomous-data', icon: Database },
        { name: 'AI Autonomous Decision Engine', path: '/ai-autonomous-decision-engine', icon: Target },
        { name: 'AI Autonomous Decision Platform', path: '/ai-autonomous-decision-platform', icon: Target },
        { name: 'AI Autonomous DevOps', path: '/ai-autonomous-devops', icon: Settings },
        { name: 'AI Autonomous Education Professor', path: '/ai-autonomous-education-professor', icon: GraduationCap },
        { name: 'AI Autonomous Healthcare Physician', path: '/ai-autonomous-healthcare-physician', icon: Heart },
        { name: 'AI Autonomous Learning System', path: '/ai-autonomous-learning-system', icon: BookOpen },
        { name: 'AI Autonomous Legal Counsel', path: '/ai-autonomous-legal-counsel', icon: Shield },
        { name: 'AI Autonomous Logistics', path: '/ai-autonomous-logistics', icon: Truck },
        { name: 'AI Autonomous Manufacturing', path: '/ai-autonomous-manufacturing', icon: Factory },
        { name: 'AI Autonomous Research', path: '/ai-autonomous-research', icon: Microscope },
        { name: 'AI Autonomous Robotics', path: '/ai-autonomous-robotics', icon: Cpu },
        { name: 'AI Autonomous Scientific Researcher', path: '/ai-autonomous-scientific-researcher', icon: Microscope },
        { name: 'AI Autonomous Security', path: '/ai-autonomous-security', icon: Lock },
        { name: 'AI Autonomous Systems Platform', path: '/ai-autonomous-systems-platform', icon: Rocket },
        { name: 'AI Autonomous Testing', path: '/ai-autonomous-testing', icon: Cpu },
        { name: 'AI Autonomous Vehicle Platform', path: '/ai-autonomous-vehicle-platform', icon: Car },
        { name: 'AI Autonomous Vehicle', path: '/ai-autonomous-vehicle', icon: Car },
        { name: 'AI Autonomous Vehicles Platform', path: '/ai-autonomous-vehicles-platform', icon: Car },
        { name: 'AI Autonomous Vehicles', path: '/ai-autonomous-vehicles', icon: Car },
        { name: 'AI Autonomous Venture Capitalist', path: '/ai-autonomous-venture-capitalist', icon: Target },
      ]
    },
    {
      title: 'Quantum Technology',
      items: [
        { name: 'Quantum Technology', path: '/services/quantum-technology', icon: Brain },
        { name: 'Quantum Neural Networks', path: '/quantum-neural-network-platform', icon: Brain },
        { name: 'Quantum Cloud Infrastructure', path: '/quantum-cloud-infrastructure', icon: Cloud },
        { name: 'Quantum Financial Trading', path: '/quantum-financial-trading', icon: BarChart3 },
        { name: 'Quantum Services', path: '/quantum-services', icon: Globe },
      ]
    },
    {
      title: 'Cybersecurity & Compliance',
      items: [
        { name: 'Cybersecurity', path: '/services/cybersecurity', icon: Shield },
        { name: 'SOC2 Compliance', path: '/soc2-compliance-automation', icon: Lock },
        { name: 'AI-Powered Security', path: '/ai-powered-enterprise-security', icon: Shield },
        { name: 'Autonomous Security', path: '/ai-autonomous-security', icon: Lock },
      ]
    },
    {
      title: 'Infrastructure & Solutions',
      items: [
        { name: 'IT Infrastructure', path: '/services/it-infrastructure', icon: Cpu },
        { name: '5G Enterprise Solutions', path: '/5g-enterprise-solutions', icon: Signal },
        { name: 'Micro SAAS Solutions', path: '/services/micro-saas-solutions', icon: Globe },
        { name: 'Blockchain Solutions', path: '/blockchain-enterprise-solutions', icon: LinkIcon },
        { name: 'IoT Data Analytics', path: '/iot-data-analytics', icon: Database },
        { name: 'Space Technology', path: '/space-tech', icon: Satellite },
        { name: 'AI-Powered IT Asset Management', path: '/ai-powered-it-asset-management', icon: Database },
        { name: 'Autonomous Business Operations Platform', path: '/autonomous-business-operations-platform', icon: Rocket },
      ]
    },
    {
      title: 'Industry Solutions',
      items: [
        { name: 'Enterprise Solutions', path: '/solutions/enterprise', icon: Building2 },
        { name: 'Healthcare Solutions', path: '/solutions/healthcare', icon: Heart },
        { name: 'Financial Solutions', path: '/solutions/financial', icon: BarChart3 },
        { name: 'Government Solutions', path: '/solutions/government', icon: Shield },
        { name: 'Manufacturing Solutions', path: '/solutions/manufacturing', icon: Factory },
        { name: 'Retail Solutions', path: '/solutions/retail', icon: ShoppingCart },
      ]
    },
    {
      title: 'Company',
      items: [
        { name: 'About Us', path: '/about', icon: Users },
        { name: 'Our Team', path: '/team', icon: Users },
        { name: 'Our Mission', path: '/mission', icon: Target },
        { name: 'Partners', path: '/partners', icon: Handshake },
        { name: 'Careers', path: '/careers', icon: Users },
        { name: 'Case Studies', path: '/case-studies', icon: FileText },
        { name: 'News', path: '/news', icon: FileText },
        { name: 'Blog', path: '/blog', icon: BookOpen },
        { name: 'Testimonials', path: '/testimonials', icon: Users },
        { name: 'Events', path: '/events', icon: Calendar },
        { name: 'Webinars', path: '/webinars', icon: Calendar },
        { name: 'White Papers', path: '/white-papers', icon: FileText },
      ]
    },
    {
      title: 'Support & Resources',
      items: [
        { name: 'Help Center', path: '/help', icon: HelpCircle },
        { name: 'Documentation', path: '/docs', icon: BookOpen },
        { name: 'Contact Support', path: '/support', icon: Phone },
        { name: 'FAQ', path: '/faq', icon: HelpCircle },
        { name: 'Status Page', path: '/status', icon: Globe },
        { name: 'Privacy Policy', path: '/privacy', icon: Shield },
        { name: 'Terms of Service', path: '/terms', icon: FileText },
        { name: 'Cookie Policy', path: '/cookies', icon: Shield },
        { name: 'Sitemap', path: '/sitemap', icon: Globe },
      ]
    }
  ];

  const contactInfo = [
    { icon: Phone, text: '+1 302 464 0950', href: 'tel:+13024640950' },
    { icon: Mail, text: 'kleber@ziontechgroup.com', href: 'mailto:kleber@ziontechgroup.com' },
    { icon: MapPin, text: '364 E Main St STE 1008 Middletown DE 19709', href: '#' }
  ];

  const socialLinks = [
    { icon: Linkedin, href: 'https://linkedin.com/company/zion-tech-group', label: 'LinkedIn' },
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
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
            onClick={onClose}
          />

          {/* Sidebar */}
          <motion.aside
            variants={sidebarVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed left-0 top-0 h-full w-80 bg-background/95 backdrop-blur-md border-r border-border z-50 overflow-y-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-border">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-zion-blue to-zion-purple rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">Z</span>
                </div>
                <span className="text-lg font-bold text-gradient">Zion Tech Group</span>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Navigation */}
            <nav className="p-6 space-y-8">
              {navigationItems.map((section) => (
                <div key={section.title}>
                  <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                    {section.title}
                  </h3>
                  <div className="space-y-2">
                    {section.items.map((item) => {
                      const IconComponent = item.icon;
                      const isActive = location.pathname === item.path;
                      return (
                        <Link
                          key={item.name}
                          to={item.path}
                          className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                            isActive
                              ? 'text-zion-cyan bg-zion-cyan/10 border border-zion-cyan/20'
                              : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                          }`}
                        >
                          <IconComponent className="w-4 h-4 flex-shrink-0" />
                          <span className="truncate">{item.name}</span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              ))}
            </nav>

            {/* Contact Information */}
            <div className="p-6 border-t border-border">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                Contact Information
              </h3>
              <div className="space-y-3">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <contact.icon className="w-4 h-4 text-zion-cyan flex-shrink-0" />
                    <a 
                      href={contact.href} 
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors truncate"
                    >
                      {contact.text}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="p-6 border-t border-border">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                Follow Us
              </h3>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-muted hover:bg-zion-cyan/20 rounded-lg flex items-center justify-center text-muted-foreground hover:text-zion-cyan transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}