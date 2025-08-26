import React from 'react';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import { Heart, Mail, Phone, MapPin, Globe, ArrowUp, Zap, Brain, Shield, Cloud, Cpu, Network } from 'lucide-react';
import { motion } from 'framer-motion';
=======
import { Heart, Mail, Phone, MapPin, Globe, ArrowUp, ArrowRight } from 'lucide-react';
>>>>>>> ae97ec95e9a8b948888cb6c3d8a6b65c04b4d239

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "LinkedIn", url: "https://www.linkedin.com/company/ziontechgroup", icon: "💼", color: "hover:bg-blue-600/20" },
    { name: "Twitter", url: "https://twitter.com/ziontechgroup", icon: "🐦", color: "hover:bg-sky-500/20" },
    { name: "GitHub", url: "https://github.com/Zion-Holdings", icon: "💻", color: "hover:bg-gray-600/20" },
    { name: "YouTube", url: "https://www.youtube.com/@ziontechgroup", icon: "📺", color: "hover:bg-red-600/20" },
    { name: "Discord", url: "https://discord.gg/ziontechgroup", icon: "🎮", color: "hover:bg-indigo-600/20" }
  ];

  const footerSections = [
    {
<<<<<<< HEAD
      title: "AI & Innovation",
      icon: Brain,
      links: [
        { label: "AI Solutions", path: "/ai-services" },
        { label: "Autonomous Systems", path: "/services/ai-autonomous-business" },
        { label: "Machine Learning", path: "/services/ai-business-intelligence" },
        { label: "Computer Vision", path: "/services/ai-computer-vision" },
        { label: "AI Research", path: "/services/ai-autonomous-research" }
      ]
    },
    {
      title: "Technology Services",
      icon: Cpu,
      links: [
        { label: "Cybersecurity", path: "/cybersecurity" },
        { label: "Cloud & DevOps", path: "/cloud-devops" },
        { label: "Quantum Computing", path: "/quantum-computing" },
        { label: "IoT Services", path: "/iot-services" },
        { label: "Blockchain", path: "/blockchain-services" }
      ]
    },
    {
      title: "Business Solutions",
      icon: Shield,
      links: [
        { label: "Digital Transformation", path: "/digital-transformation" },
        { label: "Enterprise IT", path: "/enterprise-it" },
        { label: "Business Solutions", path: "/business-solutions" },
        { label: "Consulting", path: "/services/consulting" },
        { label: "Infrastructure", path: "/services/infrastructure" }
=======
      title: "Core Services",
      links: [
        { label: "AI Solutions", path: "/services/ai" },
        { label: "Tech Talent", path: "/talent" },
        { label: "Equipment", path: "/equipment" },
        { label: "Consulting", path: "/consulting" },
        { label: "Cybersecurity", path: "/services/cybersecurity" },
        { label: "Cloud Services", path: "/services/cloud" }
>>>>>>> ae97ec95e9a8b948888cb6c3d8a6b65c04b4d239
      ]
    },
    {
      title: "Company",
      icon: Globe,
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
      icon: Cloud,
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
      icon: Network,
      links: [
        { label: "Contact Us", path: "/contact" },
        { label: "Help Center", path: "/help" },
        { label: "Support Portal", path: "/support" },
        { label: "FAQ", path: "/faq" },
<<<<<<< HEAD
        { label: "Request Quote", path: "/contact" }
=======
        { label: "Request Quote", path: "/contact" },
        { label: "Emergency Support", path: "/support/emergency" }
>>>>>>> ae97ec95e9a8b948888cb6c3d8a6b65c04b4d239
      ]
    }
  ];

  const contactInfo = [
    { icon: Mail, label: "Email", value: "kleber@ziontechgroup.com", href: "mailto:kleber@ziontechgroup.com" },
    { icon: Phone, label: "Phone", value: "+1 302 464 0950", href: "tel:+13024640950" },
    { icon: MapPin, label: "Address", value: "364 E Main St STE 1008, Middletown DE 19709", href: "#" },
    { icon: Globe, label: "Website", value: "ziontechgroup.com", href: "https://ziontechgroup.com" }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-white relative overflow-hidden">
      {/* Futuristic background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,212,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,212,255,0.05)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
        
        {/* Gradient orbs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-cyan-500/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-purple-500/5 to-transparent rounded-full blur-3xl"></div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Zion Tech Group
                </h3>
              </div>
              <p className="text-slate-300 mt-4 max-w-md leading-relaxed">
                Pioneering the future with AI-powered solutions, quantum technology, and innovative IT services. 
                Transform your business with cutting-edge technology that drives innovation and growth.
              </p>
            </motion.div>
            
            {/* Contact Info */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              {contactInfo.map((contact, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3 group"
                >
                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center group-hover:from-cyan-500/30 group-hover:to-blue-500/30 transition-all duration-200">
                    <contact.icon className="h-4 w-4 text-cyan-400" />
                  </div>
                  <div>
                    <span className="text-slate-400 text-sm">{contact.label}: </span>
                    <a 
                      href={contact.href} 
                      className="text-slate-300 hover:text-cyan-400 transition-colors duration-200 font-medium"
                    >
                      {contact.value}
                    </a>
                  </div>
                </motion.div>
              ))}
<<<<<<< HEAD
            </motion.div>
=======
            </div>

            {/* Social Links */}
            <div className="mt-6">
              <h4 className="text-white font-semibold mb-3">Follow Us</h4>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-lg transition-all duration-200 ${social.color} hover:scale-110`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
>>>>>>> ae97ec95e9a8b948888cb6c3d8a6b65c04b4d239
          </div>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
<<<<<<< HEAD
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-6 h-6 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center">
                  <section.icon className="h-3 w-3 text-cyan-400" />
                </div>
                <h4 className="text-lg font-semibold text-white">{section.title}</h4>
              </div>
=======
            <div key={index}>
              <h4 className="text-white font-semibold mb-4">{section.title}</h4>
>>>>>>> ae97ec95e9a8b948888cb6c3d8a6b65c04b4d239
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      to={link.path}
<<<<<<< HEAD
                      className="text-slate-300 hover:text-cyan-400 transition-colors duration-200 text-sm hover:translate-x-1 inline-block transform transition-transform duration-200"
=======
                      className="text-slate-400 hover:text-cyan-400 transition-colors duration-200 text-sm hover:translate-x-1 inline-block"
>>>>>>> ae97ec95e9a8b948888cb6c3d8a6b65c04b4d239
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

<<<<<<< HEAD
        {/* Social Links */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-slate-700/50"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-4 mb-6 md:mb-0">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-3 rounded-xl bg-slate-800/50 hover:bg-slate-700/50 transition-all duration-300 ${social.color} border border-slate-700/30 hover:border-cyan-500/30`}
                  aria-label={social.name}
                >
                  <span className="text-xl">{social.icon}</span>
                </motion.a>
              ))}
            </div>
            
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-xl bg-slate-800/50 hover:bg-slate-700/50 text-slate-300 hover:text-cyan-400 transition-all duration-300 border border-slate-700/30 hover:border-cyan-500/30"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-5 w-5" />
            </motion.button>
=======
        {/* Newsletter Section */}
        <div className="mt-12 pt-8 border-t border-slate-700/50">
          <div className="max-w-2xl mx-auto text-center">
            <h4 className="text-white font-semibold mb-2">Stay Updated</h4>
            <p className="text-slate-400 mb-4">Get the latest insights on AI, technology trends, and industry updates</p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
              <button className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105">
                Subscribe
              </button>
            </div>
>>>>>>> ae97ec95e9a8b948888cb6c3d8a6b65c04b4d239
          </div>
        </motion.div>
      </div>

<<<<<<< HEAD
      {/* Bottom Bar */}
      <div className="border-t border-slate-700/50 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-slate-400 text-sm text-center md:text-left"
            >
              © {currentYear} Zion Tech Group. All rights reserved.
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center space-x-6 mt-4 md:mt-0"
            >
              <Link to="/privacy" className="text-slate-400 hover:text-cyan-400 text-sm transition-colors duration-200 hover:underline">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-slate-400 hover:text-cyan-400 text-sm transition-colors duration-200 hover:underline">
                Terms of Service
              </Link>
              <Link to="/sitemap" className="text-slate-400 hover:text-cyan-400 text-sm transition-colors duration-200 hover:underline">
                Sitemap
=======
      {/* Bottom Footer */}
      <div className="border-t border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-slate-400 text-sm">
              <span>© {currentYear} Zion Tech Group. All rights reserved.</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <Link to="/privacy" className="text-slate-400 hover:text-cyan-400 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-slate-400 hover:text-cyan-400 transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-slate-400 hover:text-cyan-400 transition-colors">
                Cookie Policy
>>>>>>> ae97ec95e9a8b948888cb6c3d8a6b65c04b4d239
              </Link>
            </motion.div>
          </div>
<<<<<<< HEAD
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mt-6"
          >
            <p className="text-slate-500 text-xs flex items-center justify-center space-x-2">
              <span>Made with</span>
              <Heart className="inline h-3 w-3 text-red-500 animate-pulse" />
              <span>by Zion Tech Group</span>
            </p>
          </motion.div>
=======
>>>>>>> ae97ec95e9a8b948888cb6c3d8a6b65c04b4d239
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-110 z-50"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
};
