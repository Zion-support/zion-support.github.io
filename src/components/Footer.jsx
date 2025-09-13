<<<<<<< HEAD
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Twitter, Linkedin, Github, Mail, Phone, MapPin, Globe, Shield, Zap, Users, Heart } from 'lucide-react';
const footerLinks = {
    company: [
        { name: 'About Us', href: '/about' },
        { name: 'Our Mission', href: '/mission' },
        { name: 'Careers', href: '/careers' },
        { name: 'Press Kit', href: '/press' },
        { name: 'Contact', href: '/contact' }
    ],
    services: [
        { name: 'IT Onsite Services', href: '/it-onsite-services' },
        { name: 'AI Talent Matching', href: '/talent' },
        { name: 'Equipment Marketplace', href: '/equipment' },
        { name: 'Consulting Services', href: '/consulting' },
        { name: 'Emergency Support', href: '/emergency' }
    ],
    resources: [
        { name: 'Help Center', href: '/help' },
        { name: 'Documentation', href: '/docs' },
        { name: 'API Reference', href: '/api' },
        { name: 'Blog', href: '/blog' },
        { name: 'Community', href: '/community' }
    ],
    legal: [
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms of Service', href: '/terms' },
        { name: 'Cookie Policy', href: '/cookies' },
        { name: 'GDPR Compliance', href: '/gdpr' },
        { name: 'Security', href: '/security' }
    ]
};
const socialLinks = [
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter },
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin },
    { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github },
    { name: 'Email', href: 'mailto:contact@ziontechgroup.com', icon: Mail }
];
export function Footer() {
    return (_jsxs("footer", { className: "bg-zion-blue-dark border-t border-zion-blue-light pt-12 pb-8 relative overflow-hidden", children: [_jsxs("div", { className: "absolute inset-0 overflow-hidden pointer-events-none", children: [_jsx("div", { className: "absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-zion-cyan to-transparent opacity-50" }), _jsx("div", { className: "absolute bottom-0 left-1/4 w-1 h-full bg-gradient-to-t from-transparent via-zion-purple to-transparent opacity-30" }), _jsx("div", { className: "absolute bottom-0 right-1/4 w-1 h-full bg-gradient-to-t from-transparent via-zion-cyan to-transparent opacity-30" }), _jsx("div", { className: "absolute top-1/2 left-0 w-32 h-32 bg-zion-cyan/5 rounded-full blur-3xl" }), _jsx("div", { className: "absolute top-1/2 right-0 w-32 h-32 bg-zion-purple/5 rounded-full blur-3xl" })] }), _jsxs("div", { className: "relative container mx-auto px-4 sm:px-6 lg:px-8", children: [_jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8", children: [_jsxs("div", { children: [_jsx("div", { className: "mb-4", children: _jsx("span", { className: "text-2xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent neon-pulse", children: "ZION" }) }), _jsx("p", { className: "text-zion-slate-light mb-4 max-w-xs", children: "The world's first free marketplace dedicated to high-tech and artificial intelligence." }), _jsxs("div", { className: "flex space-x-4", children: [_jsx("a", { href: "https://twitter.com/lovable_dev", target: "_blank", rel: "noopener noreferrer", className: "text-zion-slate-light hover:text-zion-cyan transition-colors", "aria-label": "Twitter", title: "Twitter", children: _jsx(Twitter, { className: "h-5 w-5", "aria-label": "Twitter" }) }), _jsx("a", { href: "https://www.linkedin.com/company/zion-marketplace", target: "_blank", rel: "noopener noreferrer", className: "text-zion-slate-light hover:text-zion-cyan transition-colors", "aria-label": "LinkedIn", title: "LinkedIn", children: _jsx(Linkedin, { className: "h-5 w-5", "aria-label": "LinkedIn" }) }), _jsx("a", { href: "https://www.facebook.com/zionmarketplace", target: "_blank", rel: "noopener noreferrer", className: "text-zion-slate-light hover:text-zion-cyan transition-colors", "aria-label": "Facebook", title: "Facebook", children: _jsx(Facebook, { className: "h-5 w-5", "aria-label": "Facebook" }) }), _jsx("a", { href: "https://instagram.com", target: "_blank", rel: "noopener noreferrer", className: "text-zion-slate-light hover:text-zion-cyan transition-colors", "aria-label": "Instagram", title: "Instagram", children: _jsx(Instagram, { className: "h-5 w-5", "aria-label": "Instagram" }) }), _jsx("a", { href: "https://github.com", target: "_blank", rel: "noopener noreferrer", className: "text-zion-slate-light hover:text-zion-cyan transition-colors", "aria-label": "GitHub", title: "GitHub", children: _jsx(Github, { className: "h-5 w-5", "aria-label": "GitHub" }) })] })] }), _jsxs("div", { children: [_jsx("h3", { className: "text-white font-semibold mb-4 text-lg", children: "Marketplace" }), _jsxs("ul", { className: "space-y-2", children: [_jsx("li", { children: _jsx(Link, { to: "/marketplace", className: "text-zion-slate-light hover:text-zion-cyan transition-colors", children: "Products" }) }), _jsx("li", { children: _jsx(Link, { to: "/services", className: "text-zion-slate-light hover:text-zion-cyan transition-colors", children: "Services" }) }), _jsx("li", { children: _jsx(Link, { to: "/micro-saas-services", className: "text-zion-slate-light hover:text-zion-cyan transition-colors", children: "Micro SAAS" }) }), _jsx("li", { children: _jsx(Link, { to: "/talent", className: "text-zion-slate-light hover:text-zion-cyan transition-colors", children: "Talent" }) }), _jsx("li", { children: _jsx(Link, { to: "/equipment", className: "text-zion-slate-light hover:text-zion-cyan transition-colors", children: "Equipment" }) }), _jsx("li", { children: _jsx(Link, { to: "/categories", className: "text-zion-slate-light hover:text-zion-cyan transition-colors", children: "Categories" }) }), _jsx("li", { children: _jsx(Link, { to: "/green-it", className: "text-zion-slate-light hover:text-zion-cyan transition-colors", children: "Green IT" }) })] })] }), _jsxs("div", { children: [_jsx("h3", { className: "text-white font-semibold mb-4 text-lg", children: "Company" }), _jsxs("ul", { className: "space-y-2", children: [_jsx("li", { children: _jsx(Link, { to: "/about", className: "text-zion-slate-light hover:text-zion-cyan transition-colors", children: "About Us" }) }), _jsx("li", { children: _jsx(Link, { to: "/blog", className: "text-zion-slate-light hover:text-zion-cyan transition-colors", children: "Blog" }) }), _jsx("li", { children: _jsx(Link, { to: "/partners", className: "text-zion-slate-light hover:text-zion-cyan transition-colors", children: "Partners" }) }), _jsx("li", { children: _jsx(Link, { to: "/careers", className: "text-zion-slate-light hover:text-zion-cyan transition-colors", children: "Careers" }) }), _jsx("li", { children: _jsx(Link, { to: "/contact", className: "text-zion-slate-light hover:text-zion-cyan transition-colors", children: "Contact" }) }), _jsx("li", { children: _jsx(Link, { to: "/sitemap", className: "text-zion-slate-light hover:text-zion-cyan transition-colors", children: "Sitemap" }) })] })] }), _jsxs("div", { children: [_jsx("h3", { className: "text-white font-semibold mb-4 text-lg", children: "Subscribe to our newsletter" }), _jsx("p", { className: "text-zion-slate-light mb-4", children: "Stay updated with the latest news on tech, AI, and marketplace opportunities." }), _jsx(FooterNewsletter, {})] })] }), _jsx("div", { className: "mt-12 pt-8 border-t border-zion-blue-light", children: _jsxs("div", { className: "flex flex-col md:flex-row justify-between items-center", children: [_jsxs("p", { className: "text-zion-slate-light text-sm", children: ["\u00A9 ", new Date().getFullYear(), " Zion Tech Group. All rights reserved."] }), _jsxs("div", { className: "flex space-x-6 mt-4 md:mt-0", children: [_jsx(Link, { to: "/privacy", className: "text-zion-slate-light hover:text-zion-cyan text-sm transition-colors", children: "Privacy Policy" }), _jsx(Link, { to: "/terms", className: "text-zion-slate-light hover:text-zion-cyan text-sm transition-colors", children: "Terms of Service" })] })] }) })] })] }));
}
=======
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
  MessageCircle
} from 'lucide-react';

const footerNavigation = {
  services: {
    title: 'Services',
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
    title: 'Micro SAAS',
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
  marketplace: {
    title: 'Marketplace',
    items: [
      { name: 'Products', href: '/marketplace/products', description: 'Browse tech products' },
      { name: 'Services', href: '/services', description: 'Professional services' },
      { name: 'Talent', href: '/talent', description: 'Find skilled professionals' },
      { name: 'Equipment', href: '/equipment', description: 'High-tech hardware' },
      { name: 'Categories', href: '/marketplace', description: 'Browse all categories' },
      { name: 'Green IT', href: '/green-it', description: 'Eco-friendly solutions' },
      { name: 'IT Onsite Services', href: '/it-onsite-services', description: 'Local technical support' },
    ],
  },
  company: {
    title: 'Company',
    items: [
      { name: 'About Us', href: '/about', description: 'Learn our story' },
      { name: 'Blog', href: '/blog', description: 'Latest insights' },
      { name: 'Partners', href: '/partners', description: 'Strategic alliances' },
      { name: 'Careers', href: '/careers', description: 'Join our team' },
      { name: 'Contact', href: '/contact', description: 'Get in touch' },
      { name: 'FAQ', href: '/faq', description: 'Common questions' },
      { name: 'Sitemap', href: '/sitemap', description: 'Site navigation' },
    ],
  },
  support: {
    title: 'Support & Resources',
    items: [
      { name: 'Help Center', href: '/help-center', description: 'Get help and support' },
      { name: 'FAQ', href: '/faq', description: 'Frequently asked questions' },
      { name: 'Contact Support', href: '/contact', description: 'Reach our team' },
      { name: 'Request Quote', href: '/request-quote', description: 'Get project estimates' },
      { name: 'Terms of Service', href: '/terms', description: 'Legal terms' },
      { name: 'Privacy Policy', href: '/privacy', description: 'Data protection' },
      { name: 'Cookie Policy', href: '/cookies', description: 'Cookie usage' },
    ],
  },
};

const achievements = [
  { value: '500+', label: 'Projects Completed', icon: Award, color: 'text-yellow-400' },
  { value: '50+', label: 'Team Members', icon: Users, color: 'text-blue-400' },
  { value: '99.9%', label: 'Uptime', icon: Clock, color: 'text-green-400' },
  { value: '24/7', label: 'Support', icon: MessageCircle, color: 'text-purple-400' },
];

export default function Footer() {
  const [activeSection, setActiveSection] = useState(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #00d4ff 2px, transparent 2px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {Object.entries(footerNavigation).map(([key, section]) => (
            <motion.div
              key={key}
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: Object.keys(footerNavigation).indexOf(key) * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                {section.title === 'Services' && <Shield className="w-5 h-5 text-zion-cyan" />}
                {section.title === 'Micro SAAS' && <Rocket className="w-5 h-5 text-zion-cyan" />}
                {section.title === 'Marketplace' && <Globe className="w-5 h-5 text-zion-cyan" />}
                {section.title === 'Company' && <Building className="w-5 h-5 text-zion-cyan" />}
                {section.title === 'Support & Resources' && <MessageCircle className="w-5 h-5 text-zion-cyan" />}
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.items.map((item, itemIndex) => (
                  <motion.li 
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 + itemIndex * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <Link
                      to={item.href}
                      className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-200 flex items-start gap-2 group"
                    >
                      {item.icon && <item.icon className="w-3 h-3 mt-1.5 group-hover:text-zion-cyan flex-shrink-0" />}
                      <div>
                        <div className="group-hover:text-zion-cyan">{item.name}</div>
                        {item.description && (
                          <div className="text-xs text-zion-slate-light/70 group-hover:text-zion-cyan/70 mt-1">
                            {item.description}
                          </div>
                        )}
                      </div>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Achievements Section */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 p-6 bg-white/5 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.label}
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mx-auto mb-3">
                <achievement.icon className={`h-6 w-6 ${achievement.color}`} />
              </div>
              <div className="text-2xl font-bold text-white mb-1">{achievement.value}</div>
              <div className="text-zion-cyan font-medium text-sm">{achievement.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom section */}
        <motion.div 
          className="pt-8 border-t border-zion-cyan/20 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center space-x-4 text-zion-slate-light text-sm">
            <span>&copy; 2025 Zion Tech Group. All rights reserved.</span>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:inline">Made with <Heart className="w-4 h-4 inline text-zion-cyan" /> for innovation</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link to="/privacy" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm">
              Privacy Policy
            </Link>
            <span className="text-zion-cyan">•</span>
            <Link to="/terms" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm">
              Terms of Service
            </Link>
            <span className="text-zion-cyan">•</span>
            <Link to="/cookies" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm">
              Cookies
            </Link>
          </div>
        </motion.div>

        {/* Enhanced Scroll to top button */}
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-2xl shadow-2xl hover:shadow-zion-cyan/25 transition-all duration-300 hover:scale-110 z-50 group"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          whileHover={{ y: -5 }}
        >
          <ArrowUp className="w-6 h-6 group-hover:animate-bounce" />
        </motion.button>
      </div>
    </footer>
  );
}
>>>>>>> 0019087cc94659218a6a56b7d706ee956e6c4958
