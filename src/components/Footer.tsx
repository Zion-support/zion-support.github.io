import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Heart, 
  ArrowUp, 
  Mail, 
  Phone, 
  MapPin, 
  Globe, 
  Github, 
  Linkedin, 
  Twitter, 
  Facebook, 
  Instagram, 
  Youtube,
  ChevronDown,
  ExternalLink,
  Copyright,
  Shield,
  Zap,
  Users,
  Award,
  TrendingUp
} from 'lucide-react';

interface FooterLink {
  title: string;
  href: string;
  external?: boolean;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const footerSections: FooterSection[] = [
  {
    title: 'Company',
    links: [
      { title: 'About Us', href: '/about' },
      { title: 'Our Mission', href: '/mission' },
      { title: 'Leadership', href: '/leadership' },
      { title: 'Careers', href: '/careers' },
      { title: 'Press', href: '/press' },
      { title: 'Contact', href: '/contact' }
    ]
  },
  {
    title: 'Services',
    links: [
      { title: 'AI Solutions', href: '/services/ai' },
      { title: 'Quantum Computing', href: '/services/quantum' },
      { title: 'Micro SAAS', href: '/services/saas' },
      { title: 'Consulting', href: '/services/consulting' },
      { title: 'Training', href: '/services/training' },
      { title: 'Support', href: '/support' }
    ]
  },
  {
    title: 'Resources',
    links: [
      { title: 'Documentation', href: '/docs' },
      { title: 'API Reference', href: '/api' },
      { title: 'Blog', href: '/blog' },
      { title: 'Case Studies', href: '/case-studies' },
      { title: 'Whitepapers', href: '/whitepapers' },
      { title: 'Webinars', href: '/webinars' }
    ]
  },
  {
    title: 'Legal',
    links: [
      { title: 'Privacy Policy', href: '/privacy' },
      { title: 'Terms of Service', href: '/terms' },
      { title: 'Cookie Policy', href: '/cookies' },
      { title: 'GDPR', href: '/gdpr' },
      { title: 'Security', href: '/security' },
      { title: 'Compliance', href: '/compliance' }
    ]
  }
];

const socialLinks = [
  { name: 'GitHub', icon: Github, href: 'https://github.com/ziontechgroup', color: 'hover:text-gray-900' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/ziontechgroup', color: 'hover:text-blue-600' },
  { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/ziontechgroup', color: 'hover:text-blue-400' },
  { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/ziontechgroup', color: 'hover:text-blue-600' },
  { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/ziontechgroup', color: 'hover:text-pink-500' },
  { name: 'YouTube', icon: Youtube, href: 'https://youtube.com/ziontechgroup', color: 'hover:text-red-600' }
];

export function Footer() {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Handle scroll to show/hide scroll to top button
  React.useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle section expansion (for mobile)
  const toggleSection = (title: string) => {
    setExpandedSections(prev => {
      const newSet = new Set(prev);
      if (newSet.has(title)) {
        newSet.delete(title);
      } else {
        newSet.add(title);
      }
      return newSet;
    });
  };

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Handle link click
  const handleLinkClick = (link: FooterLink) => {
    if (link.external) {
      window.open(link.href, '_blank', 'noopener,noreferrer');
    } else {
      // Handle internal navigation
      console.log('Navigate to:', link.href);
    }
  };

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Top Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Zion Tech Group
                  </h3>
                </div>
                
                <p className="text-slate-300 text-lg leading-relaxed mb-6">
                  Leading the future of technology with cutting-edge AI solutions, 
                  quantum computing innovations, and transformative micro SAAS services.
                </p>

                {/* Contact Info */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-slate-300">
                    <Mail className="w-4 h-4 text-blue-400" />
                    <a href="mailto:info@ziontechgroup.com" className="hover:text-white transition-colors">
                      info@ziontechgroup.com
                    </a>
                  </div>
                  
                  <div className="flex items-center gap-3 text-slate-300">
                    <Phone className="w-4 h-4 text-blue-400" />
                    <a href="tel:+1-555-0123" className="hover:text-white transition-colors">
                      +1 (555) 012-3456
                    </a>
                  </div>
                  
                  <div className="flex items-center gap-3 text-slate-300">
                    <MapPin className="w-4 h-4 text-blue-400" />
                    <span>123 Innovation Drive, Tech Valley, CA 94000</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Footer Sections */}
            {footerSections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="space-y-4"
              >
                {/* Mobile Section Header */}
                <button
                  onClick={() => toggleSection(section.title)}
                  className="flex items-center justify-between w-full lg:hidden text-left"
                >
                  <h4 className="text-lg font-semibold text-white">{section.title}</h4>
                  <ChevronDown 
                    className={`w-5 h-5 text-slate-400 transition-transform ${
                      expandedSections.has(section.title) ? 'rotate-180' : ''
                    }`} 
                  />
                </button>

                {/* Desktop Section Header */}
                <h4 className="text-lg font-semibold text-white hidden lg:block">{section.title}</h4>

                {/* Links */}
                <AnimatePresence>
                  <div className={`space-y-3 ${
                    expandedSections.has(section.title) ? 'block' : 'hidden lg:block'
                  }`}>
                    {section.links.map((link) => (
                      <motion.div
                        key={link.title}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <button
                          onClick={() => handleLinkClick(link)}
                          className="text-slate-300 hover:text-white transition-colors text-left flex items-center gap-2 group"
                        >
                          <span>{link.title}</span>
                          {link.external && (
                            <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                          )}
                        </button>
                      </motion.div>
                    ))}
                  </div>
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Divider */}
          <div className="border-t border-slate-700 my-12" />

          {/* Bottom Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Copyright and Legal */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-2 text-slate-400">
                <Copyright className="w-4 h-4" />
                <span>2024 Zion Tech Group. All rights reserved.</span>
              </div>
              
              <div className="flex items-center gap-6 text-sm">
                <a href="/privacy" className="text-slate-400 hover:text-white transition-colors flex items-center gap-1">
                  <Shield className="w-3 h-3" />
                  Privacy
                </a>
                <a href="/terms" className="text-slate-400 hover:text-white transition-colors">
                  Terms
                </a>
                <a href="/cookies" className="text-slate-400 hover:text-white transition-colors">
                  Cookies
                </a>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-end space-y-4"
            >
              <div className="flex items-center gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition-all duration-200 ${social.color}`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    title={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
              
              <div className="text-right text-sm text-slate-400">
                <p>Follow us for the latest updates</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-t border-slate-700"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Updated with Zion Tech Group
            </h3>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              Get the latest insights on AI, quantum computing, and technology trends delivered to your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl">
                Subscribe
              </button>
            </div>
            
            <p className="text-xs text-slate-400 mt-3">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 p-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110"
            title="Scroll to top"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Made with Love */}
      <div className="text-center py-6 border-t border-slate-700">
        <p className="text-slate-400 text-sm">
          Made with <Heart className="inline w-4 h-4 text-red-500" /> by the Zion Tech Group team
        </p>
      </div>
    </footer>
  );
}
