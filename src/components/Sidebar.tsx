import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Home, Briefcase, Users, Phone, Mail, MapPin, Globe, Linkedin, Twitter, Facebook, Instagram, Shield, Handshake, Brain, Zap, Rocket, BookOpen, HelpCircle, Settings, Star, Cloud, Code } from 'lucide-react';
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
        { name: 'Solutions', path: '/solutions', icon: Globe },
        { name: 'Pricing', path: '/pricing', icon: Star },
        { name: 'About', path: '/about', icon: Users },
        { name: 'Contact', path: '/contact', icon: Phone }
      ]
    },
    {
      title: 'Core Services',
      items: [
        { name: 'AI Solutions', path: '/ai-solutions', icon: Brain },
        { name: 'Cybersecurity', path: '/cybersecurity', icon: Shield },
        { name: 'Cloud & DevOps', path: '/cloud-devops', icon: Cloud },
        { name: 'Quantum Technology', path: '/quantum-technology', icon: Zap },
        { name: 'Enterprise Solutions', path: '/enterprise-solutions', icon: Briefcase },
        { name: 'IT Infrastructure', path: '/it-infrastructure', icon: Settings }
      ]
    },
    {
      title: 'AI Autonomous Systems',
      items: [
        { name: 'AI Business Manager', path: '/ai-autonomous-business-manager', icon: Brain },
        { name: 'AI Research Assistant', path: '/ai-autonomous-research-assistant', icon: BookOpen },
        { name: 'AI Code Review', path: '/ai-autonomous-code-review', icon: Code },
        { name: 'AI Creative Director', path: '/ai-autonomous-creative-director', icon: Star },
        { name: 'AI Decision Engine', path: '/ai-autonomous-decision-engine', icon: Zap },
        { name: 'AI Autonomous Systems Platform', path: '/ai-autonomous-systems-platform', icon: Rocket }
      ]
    },
    {
      title: 'Innovative Services',
      items: [
        { name: 'Innovative Services Showcase', path: '/innovative-services-showcase', icon: Rocket },
        { name: 'Comprehensive Services', path: '/comprehensive-services-overview', icon: Briefcase },
        { name: 'Micro SaaS Solutions', path: '/micro-saas-solutions', icon: Globe },
        { name: 'Emerging Technology', path: '/emerging-tech', icon: Zap },
        { name: 'Quantum Neural Networks', path: '/quantum-neural-network-platform', icon: Brain },
        { name: 'Autonomous Business Platform', path: '/autonomous-business-operations-platform', icon: Settings }
      ]
    },
    {
      title: 'Industry Solutions',
      items: [
        { name: 'Healthcare', path: '/solutions/healthcare', icon: Shield },
        { name: 'Finance', path: '/solutions/finance', icon: Briefcase },
        { name: 'Manufacturing', path: '/solutions/manufacturing', icon: Settings },
        { name: 'Retail', path: '/solutions/retail', icon: Globe },
        { name: 'Education', path: '/solutions/education', icon: BookOpen },
        { name: 'Government', path: '/solutions/government', icon: Shield }
      ]
    },
    {
      title: 'Company',
      items: [
        { name: 'About Us', path: '/about', icon: Users },
        { name: 'Our Team', path: '/team', icon: Users },
        { name: 'Mission & Vision', path: '/mission', icon: Star },
        { name: 'Partners', path: '/partners', icon: Handshake },
        { name: 'Case Studies', path: '/case-studies', icon: BookOpen },
        { name: 'Careers', path: '/careers', icon: Users }
      ]
    },
    {
      title: 'Resources & Support',
      items: [
        { name: 'Help Center', path: '/help', icon: HelpCircle },
        { name: 'Documentation', path: '/docs', icon: BookOpen },
        { name: 'Webinars', path: '/webinars', icon: Globe },
        { name: 'White Papers', path: '/white-papers', icon: BookOpen },
        { name: 'Blog & News', path: '/news', icon: BookOpen },
        { name: 'FAQ', path: '/faq', icon: HelpCircle },
        { name: 'Support', path: '/support', icon: HelpCircle }
      ]
    }
  ];

  const contactInfo = [
    { icon: Phone, text: '+1 302 464 0950', href: 'tel:+13024640950' },
    { icon: Mail, text: 'kleber@ziontechgroup.com', href: 'mailto:kleber@ziontechgroup.com' },
    { icon: MapPin, text: '364 E Main St STE 1008 Middletown DE 19709', href: '#' }
  ];

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/company/ziontechgroup', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/ziontechgroup', label: 'Twitter' },
    { icon: Facebook, href: 'https://www.facebook.com/ziontechgroup', label: 'Facebook' },
    { icon: Instagram, href: 'https://www.instagram.com/ziontechgroup', label: 'Instagram' }
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
                    <h3 className="text-sm font-semibold text-zion-cyan uppercase tracking-wider neon-text">
                      {section.title}
                    </h3>
                    <div className="space-y-1">
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
                            <span className="flex-1">{item.name}</span>
                            {isActive && (
                              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                            )}
                          </Link>
                        );
                      })}
                    </div>
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
                      className="w-full quantum-button py-3 px-4 rounded-lg font-medium transform hover:scale-105 transition-transform text-center block"
                    >
                      Get Free Quote
                    </Link>
                    <Link 
                      to="/pricing"
                      className="w-full futuristic-card border border-zion-cyan/30 text-zion-cyan py-3 px-4 rounded-lg font-medium hover:bg-zion-cyan/10 transition-colors text-center block"
                    >
                      View Pricing
                    </Link>
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
                    © 2025 Zion Tech Group
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