import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Twitter, 
  Linkedin, 
  Facebook, 
  Instagram, 
  Github, 
  Heart, 
  ArrowUp,
  Brain,
  Rocket,
  Network,
  Code,
  ShoppingCart,
  Users,
  Zap,
  Shield,
  Cloud,
  Globe,
  Cpu,
  Lock,
  BarChart3,
  FileText,
  MessageCircle,
  TrendingUp,
  FileImage,
  Heart as HeartIcon
} from 'lucide-react';
import { FooterNewsletter } from './FooterNewsletter';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const serviceCategories = [
    {
      title: 'AI Services',
      icon: Brain,
      links: [
        { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence' },
        { name: 'AI Content Creation', href: '/services/ai-content-creation' },
        { name: 'AI Customer Experience', href: '/services/ai-customer-experience' },
        { name: 'AI Cybersecurity', href: '/services/ai-cybersecurity' },
        { name: 'AI Analytics Dashboard', href: '/services/ai-analytics-dashboard' }
      ]
    },
    {
      title: 'Emerging Tech',
      icon: Rocket,
      links: [
        { name: 'Quantum Computing', href: '/services/quantum-computing' },
        { name: 'Blockchain Platform', href: '/services/blockchain-platform' },
        { name: 'IoT Edge Computing', href: '/services/iot-edge-computing' },
        { name: 'Digital Twin', href: '/services/digital-twin' },
        { name: '5G Enterprise', href: '/services/5g-enterprise' }
      ]
    },
    {
      title: 'IT Services',
      icon: Network,
      links: [
        { name: 'Cloud & DevOps', href: '/services/cloud-devops' },
        { name: 'Cybersecurity', href: '/services/cybersecurity' },
        { name: 'Digital Transformation', href: '/services/digital-transformation' },
        { name: 'Infrastructure', href: '/services/infrastructure' },
        { name: 'Onsite Support', href: '/services/onsite-support' }
      ]
    },
    {
      title: 'Micro SAAS',
      icon: Code,
      links: [
        { name: 'AI Business Intelligence', href: '/micro-saas/ai-business-intelligence' },
        { name: 'Customer Experience', href: '/micro-saas/customer-experience' },
        { name: 'Supply Chain', href: '/micro-saas/supply-chain' },
        { name: 'HR Platform', href: '/micro-saas/hr-platform' },
        { name: 'Content Creation', href: '/micro-saas/content-creation' }
      ]
    }
  ];

  const companyLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/team' },
    { name: 'Careers', href: '/careers' },
    { name: 'Partners', href: '/partners' },
    { name: 'Blog', href: '/blog' },
    { name: 'Press', href: '/press' },
    { name: 'Events', href: '/events' }
  ];

  const supportLinks = [
    { name: 'Help Center', href: '/help' },
    { name: 'Documentation', href: '/docs' },
    { name: 'API Reference', href: '/api' },
    { name: 'Status Page', href: '/status' },
    { name: 'Contact Support', href: '/contact' },
    { name: 'Training', href: '/training' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'GDPR Compliance', href: '/gdpr' },
    { name: 'Security', href: '/security' },
    { name: 'Compliance', href: '/compliance' }
  ];

  return (
    <footer className="bg-zion-blue text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-zion-cyan rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-zion-purple rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 w-16 h-16 border border-zion-cyan-light rounded-full"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.div 
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Zion Tech Group
              </h3>
              <p className="text-zion-slate-light mb-6 leading-relaxed">
                The world's first free marketplace dedicated to high-tech and artificial intelligence. 
                Connecting talented professionals with innovative companies through cutting-edge technology solutions.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-zion-slate-light">
                  <Phone className="w-4 h-4 text-zion-cyan"/>
                  <span className="text-sm">+1 302 464 0950</span>
                </div>
                <div className="flex items-center gap-3 text-zion-slate-light">
                  <Mail className="w-4 h-4 text-zion-cyan"/>
                  <span className="text-sm">kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center gap-3 text-zion-slate-light">
                  <MapPin className="w-4 h-4 text-zion-cyan"/>
                  <span className="text-sm">364 E Main St STE 1008, Middletown DE 19709</span>
                </div>
              </div>

              {/* Social media */}
              <div className="flex space-x-4">
                <motion.a 
                  href="https://twitter.com/ziontechgroup" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-zion-slate-light hover:text-zion-cyan transition-colors p-2 hover:bg-zion-cyan/10 rounded-full" 
                  aria-label="Twitter" 
                  title="Twitter" 
                  whileHover={{ scale: 1.1 }} 
                  whileTap={{ scale: 0.95 }}
                >
                  <Twitter className="h-5 w-5" aria-label="Twitter"/>
                </motion.a>
                <motion.a 
                  href="https://www.linkedin.com/company/zion-tech-group" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-zion-slate-light hover:text-zion-cyan transition-colors p-2 hover:bg-zion-cyan/10 rounded-full" 
                  aria-label="LinkedIn" 
                  title="LinkedIn" 
                  whileHover={{ scale: 1.1 }} 
                  whileTap={{ scale: 0.95 }}
                >
                  <Linkedin className="h-5 w-5" aria-label="LinkedIn"/>
                </motion.a>
                <motion.a 
                  href="https://www.facebook.com/ziontechgroup" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-zion-slate-light hover:text-zion-cyan transition-colors p-2 hover:bg-zion-cyan/10 rounded-full" 
                  aria-label="Facebook" 
                  title="Facebook" 
                  whileHover={{ scale: 1.1 }} 
                  whileTap={{ scale: 0.95 }}
                >
                  <Facebook className="h-5 w-5" aria-label="Facebook"/>
                </motion.a>
                <motion.a 
                  href="https://www.instagram.com/ziontechgroup" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-zion-slate-light hover:text-zion-cyan transition-colors p-2 hover:bg-zion-cyan/10 rounded-full" 
                  aria-label="Instagram" 
                  title="Instagram" 
                  whileHover={{ scale: 1.1 }} 
                  whileTap={{ scale: 0.95 }}
                >
                  <Instagram className="h-5 w-5" aria-label="Instagram"/>
                </motion.a>
                <motion.a 
                  href="https://github.com/ziontechgroup" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-zion-slate-light hover:text-zion-cyan transition-colors p-2 hover:bg-zion-cyan/10 rounded-full" 
                  aria-label="GitHub" 
                  title="GitHub" 
                  whileHover={{ scale: 1.1 }} 
                  whileTap={{ scale: 0.95 }}
                >
                  <Github className="h-5 w-5" aria-label="GitHub"/>
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Service Categories */}
          {serviceCategories.map((category, index) => (
            <motion.div 
              key={category.title}
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="flex items-center space-x-2">
                <category.icon className="w-5 h-5 text-zion-cyan" />
                <h4 className="font-semibold text-white">{category.title}</h4>
              </div>
              <ul className="space-y-2">
                {category.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.href}
                      className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Additional Footer Sections */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Links */}
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-semibold text-white">Company</h4>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Support Links */}
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="font-semibold text-white">Support</h4>
            <ul className="space-y-2">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal Links */}
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className="font-semibold text-white">Legal</h4>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h4 className="font-semibold text-white">Stay Updated</h4>
            <FooterNewsletter />
          </motion.div>
        </div>

        {/* Bottom Footer */}
        <motion.div 
          className="pt-8 border-t border-zion-slate-light/20 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="flex items-center space-x-4 text-zion-slate-light text-sm">
            <span>&copy; 2027 Zion Tech Group. All rights reserved.</span>
            <span>•</span>
            <span>Made with <Heart className="w-4 h-4 text-red-400 inline" /> for innovation</span>
          </div>
          
          <div className="flex items-center space-x-6">
            <Link 
              to="/sitemap"
              className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300 text-sm"
            >
              Sitemap
            </Link>
            <Link 
              to="/accessibility"
              className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300 text-sm"
            >
              Accessibility
            </Link>
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 text-zion-slate-light hover:text-zion-cyan transition-colors duration-300 text-sm"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
