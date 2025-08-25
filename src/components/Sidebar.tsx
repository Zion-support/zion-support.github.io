import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Home, Briefcase, Users, Phone, Mail, MapPin, Globe, Linkedin, Twitter, Facebook, Instagram, Shield, Handshake, Brain, Cpu, Rocket, Target } from 'lucide-react';
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
        { name: 'Solutions', path: '/solutions/enterprise', icon: Briefcase },
        { name: 'Pricing', path: '/pricing', icon: Briefcase },
        { name: 'About', path: '/about', icon: Users },
        { name: 'Contact', path: '/contact', icon: Phone }
      ]
    },
    {
      title: 'AI & Technology',
      items: [
        { name: 'AI & Autonomous Systems', path: '/services/ai-autonomous-systems', icon: Brain },
        { name: 'AI Research Assistant', path: '/ai-autonomous-research-assistant', icon: Brain },
        { name: 'Quantum Neural Networks', path: '/quantum-neural-network-platform', icon: Brain },
        { name: 'Autonomous Business Platform', path: '/autonomous-business-operations-platform', icon: Brain },
        { name: 'AI Asset Management', path: '/ai-powered-it-asset-management', icon: Brain },
        { name: 'AI Business Intelligence', path: '/services/ai-business-intelligence', icon: Brain },
        { name: 'AI Marketing Automation', path: '/services/ai-marketing-automation', icon: Brain },
        { name: 'AI HR & Recruitment', path: '/services/ai-hr-recruitment', icon: Brain },
        { name: 'AI Legal Tech', path: '/services/ai-legal-tech', icon: Brain },
        { name: 'AI Healthcare Analytics', path: '/services/ai-healthcare-analytics', icon: Brain }
      ]
    },
    {
      title: 'Infrastructure & Security',
      items: [
        { name: 'Cybersecurity', path: '/services/cybersecurity', icon: Shield },
        { name: 'SOC2 Compliance', path: '/soc2-compliance-automation', icon: Shield },
        { name: 'Quantum Technology', path: '/services/quantum-technology', icon: Globe },
        { name: 'IT Infrastructure', path: '/services/it-infrastructure', icon: Cpu },
        { name: 'Cloud DevOps', path: '/cloud-devops', icon: Cpu },
        { name: '5G Enterprise Solutions', path: '/5g-enterprise-solutions', icon: Cpu },
        { name: 'Network Infrastructure', path: '/services/network-infrastructure', icon: Cpu },
        { name: 'Managed IT Services', path: '/services/managed-it-services', icon: Cpu },
        { name: 'DevOps Automation', path: '/services/devops-automation', icon: Cpu },
        { name: 'Cloud Migration', path: '/services/cloud-migration', icon: Cpu }
      ]
    },
    {
      title: 'Industry Solutions',
      items: [
        { name: 'Enterprise Solutions', path: '/solutions/enterprise', icon: Briefcase },
        { name: 'Healthcare Solutions', path: '/solutions/healthcare', icon: Shield },
        { name: 'Financial Solutions', path: '/solutions/financial', icon: Target },
        { name: 'Manufacturing Solutions', path: '/solutions/manufacturing', icon: Briefcase },
        { name: 'Retail Solutions', path: '/solutions/retail', icon: Briefcase },
        { name: 'Government Solutions', path: '/solutions/government', icon: Briefcase },
        { name: 'Micro SAAS Solutions', path: '/services/micro-saas-solutions', icon: Globe },
        { name: 'Digital Transformation', path: '/digital-transformation', icon: Rocket },
        { name: 'Industry Solutions', path: '/services/industry-solutions', icon: Briefcase },
        { name: 'Innovative Services', path: '/services/innovative-new-services', icon: Rocket }
      ]
    },
    {
      title: 'Emerging Technologies',
      items: [
        { name: 'Emerging Technology', path: '/emerging-tech', icon: Rocket },
        { name: 'Blockchain Solutions', path: '/services/blockchain-solutions', icon: Globe },
        { name: 'IoT Platforms', path: '/services/iot-platforms', icon: Globe },
        { name: 'AR/VR Solutions', path: '/services/ar-vr-solutions', icon: Globe },
        { name: 'Green Technology', path: '/services/green-it', icon: Globe },
        { name: 'Digital Twins', path: '/services/digital-twins', icon: Globe },
        { name: 'Space Technology', path: '/services/space-tech', icon: Rocket },
        { name: 'Biotechnology', path: '/services/biotech-solutions', icon: Brain },
        { name: 'Climate Technology', path: '/services/climate-tech', icon: Globe }
      ]
    },
    {
      title: 'Company',
      items: [
        { name: 'About Us', path: '/about', icon: Users },
        { name: 'Our Mission', path: '/mission', icon: Target },
        { name: 'Our Team', path: '/team', icon: Users },
        { name: 'Careers', path: '/careers', icon: Briefcase },
        { name: 'Partners', path: '/partners', icon: Handshake },
        { name: 'Blog', path: '/blog', icon: Globe },
        { name: 'News', path: '/news', icon: Globe },
        { name: 'Case Studies', path: '/case-studies', icon: Briefcase },
        { name: 'Events', path: '/events', icon: Globe },
        { name: 'Webinars', path: '/webinars', icon: Globe }
      ]
    },
    {
      title: 'Support & Resources',
      items: [
        { name: 'Help Center', path: '/help', icon: Users },
        { name: 'Documentation', path: '/docs', icon: Globe },
        { name: 'Contact Support', path: '/support', icon: Phone },
        { name: 'Status Page', path: '/status', icon: Globe },
        { name: 'FAQ', path: '/faq', icon: Users },
        { name: 'Privacy Policy', path: '/privacy', icon: Shield },
        { name: 'Terms of Service', path: '/terms', icon: Shield },
        { name: 'Cookie Policy', path: '/cookies', icon: Shield },
        { name: 'Accessibility', path: '/accessibility', icon: Users }
      ]
    }
  ];

  // Fixed contact information
  const contactInfo = [
    { icon: Phone, text: '+1 302 464 0950', href: 'tel:+13024640950' },
    { icon: Mail, text: 'kleber@ziontechgroup.com', href: 'mailto:kleber@ziontechgroup.com' },
    { icon: MapPin, text: '364 E Main St STE 1008 Middletown DE 19709', href: '#' }
  ];

  // Fixed social media links with proper URLs
  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/company/ziontechgroup', label: 'LinkedIn' },
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

  const handleSocialLinkClick = (social: typeof socialLinks[0]) => {
    try {
      window.open(social.href, '_blank', 'noopener,noreferrer');
    } catch (error) {
      console.error(`Failed to open ${social.label}:`, error);
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
            className="fixed inset-0 bg-black/50 z-40"
            onClick={onClose}
          />
          
          {/* Sidebar */}
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={sidebarVariants}
            className="fixed left-0 top-0 h-full w-80 bg-gradient-to-b from-gray-900 via-black to-blue-900 text-white z-50 overflow-y-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-700">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">Z</span>
                </div>
                <span className="text-white font-bold text-lg">Zion Tech Group</span>
              </div>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-white p-2 rounded-lg hover:bg-white/10 transition-colors duration-200"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Navigation */}
            <div className="p-6 space-y-8">
              {navigationItems.map((section) => (
                <div key={section.title}>
                  <h3 className="text-lg font-semibold text-cyan-400 mb-4 border-b border-cyan-500/30 pb-2">
                    {section.title}
                  </h3>
                  <div className="space-y-2">
                    {section.items.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        onClick={onClose}
                        className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-200 ${
                          location.pathname === item.path
                            ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                            : 'text-gray-300 hover:text-white hover:bg-white/10'
                        }`}
                      >
                        <item.icon className="w-5 h-5" />
                        <span className="font-medium">{item.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Information */}
            <div className="p-6 border-t border-gray-700">
              <h3 className="text-lg font-semibold text-cyan-400 mb-4">Contact Information</h3>
              <div className="space-y-3">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <contact.icon className="w-5 h-5 text-cyan-400" />
                    <a
                      href={contact.href}
                      className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm"
                    >
                      {contact.text}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="p-6 border-t border-gray-700">
              <h3 className="text-lg font-semibold text-cyan-400 mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <button
                    key={social.label}
                    onClick={() => handleSocialLinkClick(social)}
                    className="w-10 h-10 bg-gray-800 hover:bg-cyan-600 rounded-lg flex items-center justify-center transition-all duration-200 group"
                    title={social.label}
                  >
                    <social.icon className="w-5 h-5 text-gray-300 group-hover:text-white" />
                  </button>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="p-6 border-t border-gray-700">
              <h3 className="text-lg font-semibold text-cyan-400 mb-4">Stay Updated</h3>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-sm"
                />
                <button className="w-full px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 font-medium text-sm">
                  Subscribe
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}