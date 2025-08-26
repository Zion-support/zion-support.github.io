import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Mail, Phone, MapPin, Globe, ArrowUp } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

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
      title: "Services",
      links: [
        { label: "AI Solutions", path: "/services/ai" },
        { label: "Cloud & DevOps", path: "/services/cloud" },
        { label: "Cybersecurity", path: "/services/cybersecurity" },
        { label: "IT Infrastructure", path: "/services/infrastructure" },
        { label: "Digital Transformation", path: "/services/transformation" },
        { label: "Quantum Neural Network", path: "/quantum-neural-network-platform" },
        { label: "Autonomous Operations", path: "/autonomous-business-operations-platform" },
        { label: "IT Asset Management", path: "/ai-powered-it-asset-management" }
      ]
    },
    {
      title: "Company",
      links: [
        { label: "About Us", path: "/about" },
        { label: "Our Team", path: "/team" },
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
        { label: "Request Quote", path: "/request-quote" }
      ]
    }
  ];

  const contactInfo = [
    { icon: Mail, label: "Email", value: "kleber@ziontechgroup.com", href: "mailto:kleber@ziontechgroup.com" },
    { icon: Phone, label: "Phone", value: "+1 302 464 0950", href: "tel:+13024640950" },
    { icon: MapPin, label: "Address", value: "364 E Main St STE 1008, Middletown DE 19709", href: "#" },
    { icon: Globe, label: "Website", value: "ziontechgroup.com", href: "https://ziontechgroup.com" }
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-zion-blue-dark text-white">
      <motion.div
        className="container mx-auto px-4 py-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.div variants={itemVariants}>
              <Link to="/" className="inline-block mb-6">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                  Zion Tech Group
                </h3>
              </Link>
              <p className="text-zion-slate-light mb-6 max-w-md">
                Leading provider of AI-powered technology solutions, cybersecurity services, and digital transformation consulting. 
                Empowering businesses with cutting-edge technology since 2020.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 rounded-full bg-zion-blue-light/20 flex items-center justify-center text-lg transition-all duration-300 ${social.color} hover:scale-110`}
                    whileHover={{ y: -2 }}
                    variants={itemVariants}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <motion.div key={section.title} variants={itemVariants}>
              <h4 className="text-lg font-semibold mb-4 text-zion-cyan">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-200 text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Contact Information */}
        <motion.div 
          className="border-t border-zion-purple/20 pt-8 mb-8"
          variants={itemVariants}
        >
          <h4 className="text-lg font-semibold mb-6 text-zion-cyan text-center">Get in Touch</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((contact, index) => (
              <motion.div
                key={contact.label}
                className="text-center"
                variants={itemVariants}
              >
                <div className="w-12 h-12 bg-zion-purple/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <contact.icon className="h-6 w-6 text-zion-cyan" />
                </div>
                <h5 className="font-medium mb-1">{contact.label}</h5>
                <a
                  href={contact.href}
                  className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm"
                >
                  {contact.value}
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Footer */}
        <motion.div 
          className="border-t border-zion-purple/20 pt-8 flex flex-col md:flex-row justify-between items-center"
          variants={itemVariants}
        >
          <div className="flex items-center space-x-2 text-zion-slate-light text-sm mb-4 md:mb-0">
            <span>© {currentYear} Zion Tech Group. All rights reserved.</span>
            <Heart className="h-4 w-4 text-zion-purple animate-pulse" />
          </div>
          
          <div className="flex items-center space-x-6 text-sm">
            <Link to="/privacy" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
              Terms of Service
            </Link>
            <Link to="/cookies" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
              Cookie Policy
            </Link>
            <Link to="/accessibility" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
              Accessibility
            </Link>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-zion-purple hover:bg-zion-purple/80 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 z-50"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <ArrowUp className="h-5 w-5" />
      </motion.button>
    </footer>
  );
};
