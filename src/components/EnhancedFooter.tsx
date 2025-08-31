import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Zap,
  Mail,
  Phone,
  MapPin,
  Globe,
  Twitter,
  Linkedin,
  Github,
  Facebook,
  Instagram,
  Youtube,
  ArrowUp,
  Heart,
  Shield,
  Lock,
  Users,
  BookOpen,
  MessageCircle,
  HelpCircle,
  Settings,
  FileText,
  BarChart,
  Briefcase,
  Building,
  Heart as HeartIcon,
  Factory,
  Newspaper,
  Video,
  Target,
  Brain,
  Atom,
  Cloud,
  Database,
  Workflow
} from 'lucide-react';

// Footer sections data
const footerSections = [
  {
    title: 'Services',
    items: [
      { name: 'AI Solutions', href: '/ai-services', icon: Brain },
      { name: 'Quantum Computing', href: '/services/quantum-computing', icon: Atom },
      { name: 'Cloud & DevOps', href: '/services/cloud-devops', icon: Cloud },
      { name: 'Cybersecurity', href: '/services/cybersecurity', icon: Shield },
      { name: 'Data Analytics', href: '/services/data-analytics', icon: Database },
      { name: 'Digital Transformation', href: '/services/digital-transformation', icon: Workflow }
    ]
  },
  {
    title: 'Solutions',
    items: [
      { name: 'Enterprise', href: '/solutions/enterprise', icon: Building },
      { name: 'Healthcare', href: '/solutions/healthcare', icon: HeartIcon },
      { name: 'Financial Services', href: '/solutions/financial', icon: DollarSign },
      { name: 'Manufacturing', href: '/solutions/manufacturing', icon: Factory },
      { name: 'Retail', href: '/solutions/retail', icon: ShoppingCart },
      { name: 'Education', href: '/solutions/education', icon: GraduationCap }
    ]
  },
  {
    title: 'Company',
    items: [
      { name: 'About Us', href: '/about', icon: Users },
      { name: 'Team', href: '/team', icon: Users2 },
      { name: 'Careers', href: '/careers', icon: Briefcase },
      { name: 'News', href: '/news', icon: Newspaper },
      { name: 'Partners', href: '/partners', icon: Handshake },
      { name: 'Contact', href: '/contact', icon: MessageCircle }
    ]
  },
  {
    title: 'Resources',
    items: [
      { name: 'Blog', href: '/blog', icon: FileText },
      { name: 'Case Studies', href: '/case-studies', icon: BarChart },
      { name: 'White Papers', href: '/white-papers', icon: FileText },
      { name: 'Webinars', href: '/webinars', icon: Video },
      { name: 'Documentation', href: '/docs', icon: BookOpen },
      { name: 'Help Center', href: '/help', icon: HelpCircle }
    ]
  }
];

// Social media links
const socialLinks = [
  { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter, color: 'hover:text-blue-400' },
  { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin, color: 'hover:text-blue-600' },
  { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github, color: 'hover:text-gray-400' },
  { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook, color: 'hover:text-blue-500' },
  { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram, color: 'hover:text-pink-500' },
  { name: 'YouTube', href: 'https://youtube.com/ziontechgroup', icon: Youtube, color: 'hover:text-red-500' }
];

// Contact information
const contactInfo = [
  {
    icon: Phone,
    text: '+1 (302) 464-0950',
    href: 'tel:+13024640950',
    color: 'text-blue-400'
  },
  {
    icon: Mail,
    text: 'kleber@ziontechgroup.com',
    href: 'mailto:kleber@ziontechgroup.com',
    color: 'text-green-400'
  },
  {
    icon: MapPin,
    text: '364 E Main St STE 1008, Middletown DE 19709',
    href: 'https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709',
    color: 'text-purple-400'
  }
];

const EnhancedFooter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      // Handle newsletter subscription
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-b from-zion-slate-dark to-black text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Company info */}
            <div className="lg:col-span-2">
              <Link to="/" className="inline-flex items-center space-x-2 mb-6 group">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Zap className="w-7 h-7 text-white" />
                  </div>
                  <div className="absolute -inset-1 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Zion Tech Group</h3>
                  <p className="text-cyan-400 font-medium">Future of Technology</p>
                </div>
              </Link>
              
              <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
                Transform your business with cutting-edge AI solutions, quantum computing, and innovative micro SAAS services. 
                Leading the future of technology with expertise and innovation.
              </p>

              {/* Contact info */}
              <div className="space-y-3">
                {contactInfo.map((contact, index) => (
                  <motion.a
                    key={index}
                    href={contact.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-200 group"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <contact.icon className={`w-5 h-5 ${contact.color} group-hover:scale-110 transition-transform duration-200`} />
                    <span className="text-sm">{contact.text}</span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Footer sections */}
            {footerSections.map((section, sectionIndex) => (
              <div key={section.title}>
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <section.icon className="w-5 h-5 text-cyan-400 mr-2" />
                  {section.title}
                </h4>
                <ul className="space-y-2">
                  {section.items.map((item, itemIndex) => (
                    <motion.li
                      key={item.name}
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Link
                        to={item.href}
                        className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm flex items-center group"
                      >
                        <item.icon className="w-4 h-4 mr-2 opacity-60 group-hover:opacity-100 transition-opacity duration-200" />
                        {item.name}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Newsletter subscription */}
          <div className="mt-16 pt-8 border-t border-white/10">
            <div className="max-w-2xl mx-auto text-center">
              <h4 className="text-xl font-semibold text-white mb-2">
                Stay Updated with Our Newsletter
              </h4>
              <p className="text-gray-300 mb-6">
                Get the latest insights on AI, quantum computing, and emerging technologies
              </p>
              
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-200"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-lg"
                >
                  Subscribe
                </button>
              </form>
              
              {isSubscribed && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="mt-4 text-green-400 text-sm"
                >
                  Thank you for subscribing!
                </motion.div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="py-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright and legal */}
            <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-gray-400">
              <p className="flex items-center">
                © 2025 Zion Tech Group. All rights reserved.
              </p>
              <div className="flex items-center space-x-4">
                <Link to="/privacy" className="hover:text-white transition-colors duration-200">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="hover:text-white transition-colors duration-200">
                  Terms of Service
                </Link>
                <Link to="/cookies" className="hover:text-white transition-colors duration-200">
                  Cookie Policy
                </Link>
              </div>
            </div>

            {/* Social links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-200 ${social.color}`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={`Follow us on ${social.name}`}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 z-50"
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6" />
      </motion.button>
    </footer>
  );
};

export default EnhancedFooter;