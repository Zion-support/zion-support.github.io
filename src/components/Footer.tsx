import React, { useState } from 'react';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
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
      { name: 'Help Center', href: '/help', description: 'Get help and support' },
      { name: 'Contact Support', href: '/contact', description: 'Reach our team' },
      { name: 'Terms of Service', href: '/terms', description: 'Legal terms' },
      { name: 'Privacy Policy', href: '/privacy', description: 'Data protection' },
      { name: 'Security', href: '/security', description: 'Security practices' },
      { name: 'System Status', href: '/status', description: 'Service status' },
    ],
  },
};

const socialLinks = [
  { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter, color: 'hover:text-blue-400' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/company/zion-marketplace', icon: Linkedin, color: 'hover:text-blue-600' },
  { name: 'Facebook', href: 'https://www.facebook.com/zionmarketplace', icon: Facebook, color: 'hover:text-blue-500' },
  { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram, color: 'hover:text-pink-500' },
  { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github, color: 'hover:text-gray-400' },
];
=======
import { Heart, Mail, Phone, MapPin, Globe, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "LinkedIn", url: "https://www.linkedin.com/company/ziontechgroup", icon: "💼", color: "hover:bg-blue-600/20" },
    { name: "Twitter", url: "https://twitter.com/ziontechgroup", icon: "🐦", color: "hover:bg-sky-500/20" },
    { name: "GitHub", url: "https://github.com/Zion-Holdings", icon: "💻", color: "hover:bg-gray-600/20" },
    { name: "YouTube", url: "https://www.youtube.com/@ziontechgroup", icon: "📺", color: "hover:bg-red-600/20" },
    { name: "Discord", url: "https://discord.gg/ziontechgroup", icon: "🎮", color: "hover:bg-indigo-600/20" }
  ];
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-cbbe

  const footerSections = [
    {
      title: "Services",
      links: [
        { label: "AI Solutions", path: "/services/ai" },
        { label: "Cloud & DevOps", path: "/services/cloud" },
        { label: "Cybersecurity", path: "/services/cybersecurity" },
        { label: "IT Infrastructure", path: "/services/infrastructure" },
        { label: "Digital Transformation", path: "/services/transformation" }
      ]
    },
    {
      title: "Company",
      links: [
        { label: "About Us", path: "/about" },
        { label: "Our Team", path: "/about" },
        { label: "Careers", path: "/careers" },
        { label: "News & Updates", path: "/news" },
        { label: "Case Studies", path: "/case-studies" },
        { label: "Partners", path: "/partners" }
      ]
    },
    {
      title: "Resources",
      links: [
        { label: "Blog", path: "/blog" },
        { label: "Documentation", path: "/docs" },
        { label: "White Papers", path: "/white-papers" },
        { label: "Webinars", path: "/webinars" },
        { label: "Research", path: "/research-development" },
        { label: "Events", path: "/events" },
        { label: "Training", path: "/training" }
      ]
    },
    {
      title: "Support",
      links: [
        { label: "Contact Us", path: "/contact" },
        { label: "Help Center", path: "/help" },
        { label: "Support Portal", path: "/support" },
        { label: "FAQ", path: "/faq" },
        { label: "Consulting", path: "/services/consulting" },
        { label: "Request Quote", path: "/contact" }
      ]
    }
  ];

  const contactInfo = [
    { icon: Mail, label: "Email", value: "kleber@ziontechgroup.com", href: "mailto:kleber@ziontechgroup.com" },
    { icon: Phone, label: "Phone", value: "+1 302 464 0950", href: "tel:+13024640950" },
    { icon: MapPin, label: "Address", value: "364 E Main St STE 1008, Middletown DE 19709", href: "#" },
    { icon: Globe, label: "Website", value: "ziontechgroup.com", href: "https://ziontechgroup.com" }
  ];

<<<<<<< HEAD
const achievements = [
  { icon: Star, value: '500+', label: 'Happy Clients', color: 'text-yellow-400' },
  { icon: TrendingUp, value: '95%', label: 'Success Rate', color: 'text-green-400' },
  { icon: Award, value: '10+', label: 'Years Experience', color: 'text-blue-400' },
  { icon: Globe, value: '25+', label: 'Countries Served', color: 'text-purple-400' }
];

export function Footer() {
  const [email, setEmail] = useState('');
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

=======
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-cbbe
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setNewsletterSubmitted(true);
      setEmail('');
      // In a real app, you would send this to your backend
      setTimeout(() => setNewsletterSubmitted(false), 3000);
    }
  };

  return (
<<<<<<< HEAD
    <footer className="bg-futuristic border-t border-zion-cyan/20 pt-20 pb-8 relative overflow-hidden">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-40 h-40 border border-zion-cyan rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 right-32 w-32 h-32 border border-zion-purple rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 border border-zion-blue rounded-full animate-pulse delay-2000"></div>
        <div className="absolute top-40 right-40 w-16 h-16 border border-zion-cyan rounded-full animate-pulse delay-3000"></div>
        <div className="absolute bottom-40 left-1/4 w-20 h-20 border border-zion-purple rounded-full animate-pulse delay-1500"></div>
      </div>

      <div className="container-responsive relative z-10">
        {/* Newsletter Section */}
        <motion.div 
          className="text-center mb-16 p-8 bg-white/5 backdrop-blur-xl border border-zion-cyan/20 rounded-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">Stay Updated with Zion Tech Group</h3>
            <p className="text-zion-slate-light mb-6">Get the latest insights on AI, technology trends, and industry updates delivered to your inbox.</p>
            
            {!newsletterSubmitted ? (
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-3 bg-white/10 border border-zion-cyan/20 rounded-xl text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-all duration-300"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-xl hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 font-medium flex items-center justify-center gap-2"
                >
                  Subscribe
                  <Send className="h-4 w-4" />
                </button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-zion-cyan font-medium"
              >
                <CheckCircle className="h-8 w-8 mx-auto mb-2" />
                Thank you for subscribing! Check your email for confirmation.
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Company info */}
          <div className="lg:col-span-2">
            <motion.div 
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan via-zion-purple to-zion-blue rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-2xl font-bold text-white">Z</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gradient">ZION TECH GROUP</h3>
                  <p className="text-sm text-zion-slate-light">Innovation • Intelligence • Impact</p>
                </div>
              </div>
            </motion.div>
            
            <motion.p 
              className="text-zion-slate-light mb-8 max-w-sm leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              The world's first free marketplace dedicated to high-tech and artificial intelligence.
              Connecting innovators, talent, and cutting-edge technology worldwide.
            </motion.p>

            {/* Enhanced Contact info */}
            <motion.div 
              className="space-y-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 text-zion-slate-light hover:text-zion-cyan transition-colors group">
                <Phone className="w-4 h-4 text-zion-cyan group-hover:scale-110 transition-transform duration-300" />
                <a href={`tel:${contactInfo.phone}`} className="hover:text-zion-cyan">
                  {contactInfo.phone}
                </a>
              </div>
              <div className="flex items-center gap-3 text-zion-slate-light hover:text-zion-cyan transition-colors group">
                <Mail className="w-4 h-4 text-zion-cyan group-hover:scale-110 transition-transform duration-300" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-zion-cyan">
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex items-center gap-3 text-zion-slate-light group">
                <MapPin className="w-4 h-4 text-zion-cyan group-hover:scale-110 transition-transform duration-300" />
                <span>{contactInfo.address}</span>
              </div>
              <div className="flex items-center gap-3 text-zion-slate-light hover:text-zion-cyan transition-colors group">
                <Globe className="w-4 h-4 text-zion-cyan group-hover:scale-110 transition-transform duration-300" />
                <a href={contactInfo.website} target="_blank" rel="noopener noreferrer" className="hover:text-zion-cyan">
                  {contactInfo.website}
                </a>
              </div>
            </motion.div>

            {/* Enhanced Social links */}
            <motion.div 
              className="flex space-x-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/10 rounded-xl transition-all duration-300 hover:scale-110 ${social.color}`}
                  whileHover={{ y: -2 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <social.icon size={24} />
                </motion.a>
=======
    <footer className="bg-slate-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Zion Tech Group
              </h3>
              <p className="text-slate-300 mt-4 max-w-md">
                Pioneering the future with AI-powered solutions, quantum technology, and innovative IT services. 
                Transform your business with cutting-edge technology.
              </p>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-3">
              {contactInfo.map((contact, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <contact.icon className="h-5 w-5 text-cyan-400" />
                  <div>
                    <span className="text-slate-400 text-sm">{contact.label}: </span>
                    <a 
                      href={contact.href} 
                      className="text-slate-300 hover:text-cyan-400 transition-colors duration-200"
                    >
                      {contact.value}
                    </a>
                  </div>
                </div>
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-cbbe
              ))}
            </div>
          </div>

<<<<<<< HEAD
          {/* Navigation sections */}
          {Object.entries(footerNavigation).map(([key, section], index) => (
            <motion.div 
              key={key}
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-white flex items-center gap-2">
                {section.title === 'Services' && <Zap className="w-5 h-5 text-zion-cyan" />}
                {section.title === 'Micro SAAS' && <Code className="w-5 h-5 text-zion-purple" />}
                {section.title === 'Marketplace' && <Building className="w-5 h-5 text-zion-blue" />}
                {section.title === 'Company' && <Users className="w-5 h-5 text-zion-cyan" />}
                {section.title === 'Support & Resources' && <Award className="w-5 h-5 text-zion-purple" />}
                {section.title}
              </h4>
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
=======
          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="text-lg font-semibold text-white mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link 
                      to={link.path}
                      className="text-slate-300 hover:text-cyan-400 transition-colors duration-200 text-sm"
                    >
                      {link.label}
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-cbbe
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </div>

<<<<<<< HEAD
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
=======
        {/* Social Links */}
        <div className="mt-12 pt-8 border-t border-slate-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-4 mb-4 md:mb-0">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-lg bg-slate-800 hover:bg-slate-700 transition-all duration-200 ${social.color}`}
                  aria-label={social.name}
                >
                  <span className="text-xl">{social.icon}</span>
                </a>
              ))}
            </div>
            
            <button
              onClick={scrollToTop}
              className="p-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-cyan-400 transition-all duration-200"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-slate-400 text-sm text-center md:text-left">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <Link to="/privacy" className="text-slate-400 hover:text-cyan-400 text-sm transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-slate-400 hover:text-cyan-400 text-sm transition-colors duration-200">
                Terms of Service
              </Link>
              <Link to="/sitemap" className="text-slate-400 hover:text-cyan-400 text-sm transition-colors duration-200">
                Sitemap
              </Link>
            </div>
          </div>
          <div className="text-center mt-4">
            <p className="text-slate-500 text-xs">
              Made with <Heart className="inline h-3 w-3 text-red-500" /> by Zion Tech Group
            </p>
          </div>
        </div>
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-cbbe
      </div>
    </footer>
  );
};
