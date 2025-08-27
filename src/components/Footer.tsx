import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Twitter, 
  Linkedin, 
  Facebook, 
  Instagram, 
  Github, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowUp, 
  Globe, 
  Heart,
  Zap,
  Shield,
  Cloud,
  Brain,
  Rocket,
  Code,
  Users,
  Building,
  Award,
  Clock,
  CheckCircle,
  Send,
  ArrowRight,
  Star,
  TrendingUp,
  Shield as SecurityIcon,
  BookOpen,
  MessageCircle,
  ChevronDown
} from 'lucide-react';

const footerNavigation = {
  services: {
    title: 'Core Services',
    items: [
      { name: 'AI & Analytics', href: '/services/ai-analytics', icon: Brain, description: 'Machine learning and data insights' },
      { name: 'Cybersecurity', href: '/services/cybersecurity', icon: Shield, description: 'Protect your digital assets' },
      { name: 'Cloud & DevOps', href: '/services/cloud-devops', icon: Cloud, description: 'Scalable infrastructure solutions' },
      { name: 'IoT & Edge', href: '/services/iot-edge', icon: Zap, description: 'Connected device management' },
      { name: 'Quantum Computing', href: '/services/quantum-computing', icon: Rocket, description: 'Next-generation computing' },
      { name: 'Blockchain', href: '/services/blockchain', icon: Code, description: 'Decentralized solutions' },
      { name: 'Digital Twin', href: '/services/digital-twin', icon: Building, description: 'Virtual replica technology' },
      { name: 'Sustainability', href: '/services/sustainability', icon: Heart, description: 'Green IT solutions' }
    ],
  },
  microSaas: {
    title: 'Micro SAAS Solutions',
    items: [
      { name: 'AI Business Intelligence', href: '/micro-saas/ai-business-intelligence', description: 'Smart analytics platform' },
      { name: 'Customer Experience', href: '/micro-saas/customer-experience', description: 'Enhanced customer engagement' },
      { name: 'Quantum Computing', href: '/micro-saas/quantum-computing', description: 'Quantum-powered solutions' },
      { name: 'Supply Chain', href: '/micro-saas/supply-chain', description: 'Optimized logistics management' },
      { name: 'Cybersecurity', href: '/micro-saas/cybersecurity', description: 'Advanced security tools' },
      { name: 'IoT Edge Computing', href: '/micro-saas/iot-edge', description: 'Edge device solutions' },
      { name: 'Content Creation', href: '/micro-saas/content-creation', description: 'AI-powered content tools' },
      { name: 'HR Platform', href: '/micro-saas/hr-platform', description: 'Human resources automation' }
    ],
  },
  solutions: {
    title: 'Solutions',
    items: [
      { name: 'Products', href: '/marketplace/products', description: 'Browse tech products' },
      { name: 'Services', href: '/services', description: 'Professional services' },
      { name: 'Talent', href: '/talent', description: 'Find skilled professionals' },
      { name: 'Equipment', href: '/equipment', description: 'High-tech hardware' },
      { name: 'Categories', href: '/marketplace', description: 'Browse all categories' },
      { name: 'Green IT', href: '/green-it', description: 'Eco-friendly solutions' },
      { name: 'IT Onsite Services', href: '/it-onsite-services', description: 'Local technical support' }
    ],
  },
  company: {
    title: 'Company',
    items: [
      { name: 'About Us', href: '/about', description: 'Learn about Zion Tech Group' },
      { name: 'Careers', href: '/careers', description: 'Join our team' },
      { name: 'Leadership', href: '/about#leadership', description: 'Meet our executives' },
      { name: 'News', href: '/news', description: 'Latest company updates' },
      { name: 'Case Studies', href: '/case-studies', description: 'Success stories' },
      { name: 'Partners', href: '/partners', description: 'Strategic partnerships' },
      { name: 'Contact', href: '/contact', description: 'Get in touch' }
    ],
  },
  resources: {
    title: 'Resources',
    items: [
      { name: 'Documentation', href: '/docs', description: 'Technical guides' },
      { name: 'API Reference', href: '/api', description: 'Developer resources' },
      { name: 'Training', href: '/training', description: 'Skill development' },
      { name: 'Webinars', href: '/webinars', description: 'Educational content' },
      { name: 'White Papers', href: '/white-papers', description: 'Industry insights' },
      { name: 'Research', href: '/research', description: 'Innovation studies' },
      { name: 'Blog', href: '/blog', description: 'Latest insights' }
    ],
  },
  support: {
    title: 'Support',
    items: [
      { name: 'Help Center', href: '/help-center', description: 'Find answers' },
      { name: 'Contact Support', href: '/contact', description: 'Get help' },
      { name: 'Status Page', href: '/status', description: 'System status' },
      { name: 'FAQ', href: '/faq', description: 'Common questions' },
      { name: 'Community', href: '/community', description: 'User forums' },
      { name: 'Training', href: '/training', description: 'Learn more' }
    ],
  }
};

const Footer: React.FC = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-zion-slate-dark text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mr-3">
                  <Rocket className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                  Zion Tech Group
                </h3>
              </div>
              <p className="text-zion-slate-light mb-6 leading-relaxed">
                Empowering businesses with cutting-edge technology solutions. 
                From AI and cybersecurity to cloud infrastructure and digital transformation.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center text-zion-slate-light">
                  <Mail className="h-4 w-4 mr-3 text-zion-cyan" />
                  <span>contact@ziontechgroup.com</span>
                </div>
                <div className="flex items-center text-zion-slate-light">
                  <Phone className="h-4 w-4 mr-3 text-zion-cyan" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center text-zion-slate-light">
                  <MapPin className="h-4 w-4 mr-3 text-zion-cyan" />
                  <span>Innovation District, Tech City</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Navigation Sections */}
          {Object.entries(footerNavigation).map(([key, section], index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <button
                onClick={() => toggleSection(key)}
                className="flex items-center justify-between w-full text-left font-semibold text-lg text-white hover:text-zion-cyan transition-colors duration-300 md:cursor-default"
              >
                {section.title}
                <ChevronDown className="h-4 w-4 md:hidden transition-transform duration-300" 
                  style={{ transform: expandedSection === key ? 'rotate(180deg)' : 'rotate(0deg)' }} />
              </button>
              
              <div className={`space-y-3 ${expandedSection === key ? 'block' : 'hidden md:block'}`}>
                {section.items.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block text-zion-slate-light hover:text-zion-cyan transition-colors duration-300 group"
                  >
                    <div className="flex items-start space-x-2">
                      <item.icon className="h-4 w-4 text-zion-cyan mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="group-hover:text-zion-cyan transition-colors duration-300">
                          {item.name}
                        </span>
                        <p className="text-xs text-zion-slate-light mt-1 hidden lg:block">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-zion-slate bg-zion-slate-darker">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center space-x-2 text-zion-slate-light text-sm"
            >
              <span>© 2024 Zion Tech Group. All rights reserved.</span>
              <Heart className="h-4 w-4 text-red-500 animate-pulse" />
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center space-x-4"
            >
              <Link
                to="https://twitter.com/ziontechgroup"
                className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300"
                aria-label="Follow us on Twitter"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                to="https://linkedin.com/company/ziontechgroup"
                className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300"
                aria-label="Connect with us on LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                to="https://github.com/ziontechgroup"
                className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300"
                aria-label="Check out our GitHub"
              >
                <Github className="h-5 w-5" />
              </Link>
            </motion.div>
          </div>

          {/* Additional Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center md:justify-start mt-6 pt-6 border-t border-zion-slate space-x-6 text-sm text-zion-slate-light"
          >
            <Link to="/privacy" className="hover:text-zion-cyan transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-zion-cyan transition-colors duration-300">
              Terms of Service
            </Link>
            <Link to="/cookies" className="hover:text-zion-cyan transition-colors duration-300">
              Cookie Policy
            </Link>
            <Link to="/accessibility" className="hover:text-zion-cyan transition-colors duration-300">
              Accessibility
            </Link>
            <Link to="/sitemap" className="hover:text-zion-cyan transition-colors duration-300">
              Sitemap
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-gradient-to-r from-zion-cyan to-zion-purple text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-50"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: 1 }}
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-5 w-5" />
      </motion.button>
    </footer>
  );
};

export default Footer;
