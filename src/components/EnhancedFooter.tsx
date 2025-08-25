<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
=======
>>>>>>> origin/cursor/build-project-and-deploy-with-netlify-1c1d
import { motion } from 'framer-motion';
=======

>>>>>>> origin/cursor/build-and-fix-errors-c9ef
import { Link } from 'react-router-dom';
import { Mail, Phone } from 'lucide-react';

export function EnhancedFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerSections = [
    {
      title: 'Platform',
      links: [
        { name: 'Services', href: '/services' },
        { name: 'Marketplace', href: '/marketplace' },
        { name: 'Talent Network', href: '/talent' },
        { name: 'AI Matching', href: '/match' },
        { name: 'Community', href: '/community' },
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Careers', href: '/careers' },
        { name: 'Press', href: '/press' },
        { name: 'Partners', href: '/partners' },
        { name: 'Contact', href: '/contact' },
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Help Center', href: '/help' },
        { name: 'Documentation', href: '/docs' },
        { name: 'API Reference', href: '/api' },
        { name: 'Blog', href: '/blog' },
        { name: 'Status', href: '/status' },
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms of Service', href: '/terms' },
        { name: 'Cookie Policy', href: '/cookies' },
        { name: 'GDPR', href: '/gdpr' },
        { name: 'Security', href: '/security' },
=======
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  Zap, 
  Globe, 
  Mail, 
  Phone, 
  MapPin, 
  Twitter, 
  Linkedin, 
  Github, 
  Facebook,
  ArrowUp,
  Shield,
  Users,
  Award,
  Clock
} from 'lucide-react';

export function EnhancedFooter() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Services",
      links: [
        { name: "AI Solutions", href: "/ai-services" },
        { name: "IT Support", href: "/it-onsite-services" },
        { name: "Development", href: "/development-services" },
        { name: "Consulting", href: "/consulting" },
        { name: "Cloud Solutions", href: "/cloud-services" }
      ]
    },
    {
      title: "Talent",
      links: [
        { name: "Find Experts", href: "/talent" },
        { name: "Hire AI Specialists", href: "/ai-talent" },
        { name: "Developer Network", href: "/developers" },
        { name: "Freelance Platform", href: "/freelance" },
        { name: "Enterprise Teams", href: "/enterprise-talent" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Blog", href: "/blog" },
        { name: "Documentation", href: "/docs" },
        { name: "API Reference", href: "/api" },
        { name: "Community", href: "/community" },
        { name: "Support Center", href: "/support" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Careers", href: "/careers" },
        { name: "Partners", href: "/partners" },
        { name: "Press", href: "/press" },
        { name: "Contact", href: "/contact" }
>>>>>>> origin/cursor/expand-services-and-deploy-updates-2857
      ]
    }
  ];

  const socialLinks = [
<<<<<<< HEAD
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/ziontechgroup', color: 'hover:text-blue-400' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/ziontechgroup', color: 'hover:text-blue-600' },
    { name: 'GitHub', icon: Github, href: 'https://github.com/ziontechgroup', color: 'hover:text-gray-400' },
    { name: 'Email', icon: Mail, href: 'mailto:contact@ziontechgroup.com', color: 'hover:text-red-400' },
  ];

  const features = [
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level encryption and compliance'
    },
    {
      icon: Users,
      title: 'Global Network',
      description: '150+ countries, 24/7 support'
    },
    {
      icon: Zap,
      title: 'AI-Powered',
      description: 'Smart matching and automation'
    }
  ];

  return (
    <footer className="bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple border-t border-zion-purple/20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
          backgroundSize: '30px 30px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          {/* Top Section with Logo and Description */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Link to="/" className="inline-flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-zion-purple to-zion-cyan rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">Z</span>
                </div>
                <span className="text-3xl font-bold bg-gradient-to-r from-zion-purple to-zion-cyan bg-clip-text text-transparent">
                  Zion
                </span>
              </Link>
              
              <p className="text-zion-slate-light text-lg mb-8 max-w-md leading-relaxed">
                The future of technology is here. Connect with top AI talent, access cutting-edge services, 
                and build the next generation of digital solutions.
              </p>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className={`w-10 h-10 bg-zion-purple/20 border border-zion-purple/30 rounded-lg flex items-center justify-center text-zion-slate-light ${social.color} transition-all duration-300`}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Features Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-12 h-12 bg-zion-purple/20 rounded-xl flex items-center justify-center mx-auto mb-4 text-zion-purple">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-zion-slate-light text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12"
          >
            {footerSections.map((section) => (
              <div key={section.title}>
                <h3 className="text-lg font-semibold text-white mb-4">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
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
              </div>
            ))}
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 border-t border-zion-purple/20"
          >
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-zion-purple" />
              <div>
                <p className="text-white font-medium">Email</p>
                <p className="text-zion-slate-light text-sm">contact@ziontechgroup.com</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-zion-purple" />
              <div>
                <p className="text-white font-medium">Phone</p>
                <p className="text-zion-slate-light text-sm">+1 (555) 123-4567</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-zion-purple" />
              <div>
                <p className="text-white font-medium">Location</p>
                <p className="text-zion-slate-light text-sm">Global Network</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="py-8 border-t border-zion-purple/20"
        >
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6 text-sm text-zion-slate-light">
              <span>&copy; 2025 Zion Tech Group. All rights reserved.</span>
              <div className="flex items-center space-x-2">
                <Globe className="w-4 h-4" />
                <span>English</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-6">
              <Link to="/privacy" className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300 text-sm">
                Privacy
              </Link>
              <Link to="/terms" className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300 text-sm">
                Terms
              </Link>
              <Link to="/cookies" className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300 text-sm">
                Cookies
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-zion-purple to-zion-purple-dark rounded-full shadow-2xl shadow-zion-purple/25 flex items-center justify-center text-white hover:from-zion-purple-light hover:to-zion-purple transition-all duration-300 z-40"
      >
        <ArrowUp className="w-6 h-6" />
      </motion.button>
=======
    { name: "Twitter", icon: <Twitter className="w-5 h-5" />, href: "#", color: "hover:text-blue-400" },
    { name: "LinkedIn", icon: <Linkedin className="w-5 h-5" />, href: "#", color: "hover:text-blue-600" },
    { name: "GitHub", icon: <Github className="w-5 h-5" />, href: "#", color: "hover:text-gray-400" },
    { name: "Facebook", icon: <Facebook className="w-5 h-5" />, href: "#", color: "hover:text-blue-600" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
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
    <footer className="relative bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-slate-dark overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-zion-purple via-zion-cyan to-zion-purple"></div>
        <div className="absolute top-20 right-20 w-64 h-64 border border-zion-cyan/10 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 border border-zion-purple/10 rotate-45 opacity-20 animate-pulse" style={{ animationDelay: "2s" }}></div>
      </div>

      <motion.div 
        className="container mx-auto px-4 py-20 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-16">
          {/* Company info */}
          <motion.div className="lg:col-span-2" variants={itemVariants}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-zion-purple to-zion-cyan rounded-xl flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">Zion Tech</span>
            </div>
            <p className="text-zion-slate-light mb-6 leading-relaxed max-w-md">
              Empowering businesses with cutting-edge AI solutions, global talent networks, and innovative technology services. Building the future, one connection at a time.
            </p>
            
            {/* Contact info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-zion-slate-light">
                <Mail className="w-4 h-4 text-zion-cyan" />
                <span>hello@ziontechgroup.com</span>
              </div>
              <div className="flex items-center gap-3 text-zion-slate-light">
                <Phone className="w-4 h-4 text-zion-cyan" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-zion-slate-light">
                <MapPin className="w-4 h-4 text-zion-cyan" />
                <span>Global Network</span>
              </div>
            </div>
          </motion.div>

          {/* Footer sections */}
          {footerSections.map((section, index) => (
            <motion.div key={section.title} variants={itemVariants}>
              <h3 className="text-lg font-semibold text-white mb-6">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
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

        {/* Trust indicators */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          variants={itemVariants}
        >
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-zion-purple/30">
              <Shield className="w-8 h-8 text-zion-cyan" />
            </div>
            <h4 className="text-lg font-semibold text-white mb-2">Enterprise Security</h4>
            <p className="text-sm text-zion-slate-light">Bank-level encryption</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-zion-purple/30">
              <Users className="w-8 h-8 text-zion-purple" />
            </div>
            <h4 className="text-lg font-semibold text-white mb-2">10K+ Users</h4>
            <p className="text-sm text-zion-slate-light">Trusted worldwide</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-zion-purple/30">
              <Award className="w-8 h-8 text-zion-cyan" />
            </div>
            <h4 className="text-lg font-semibold text-white mb-2">ISO Certified</h4>
            <p className="text-sm text-zion-slate-light">Quality standards</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-zion-purple/30">
              <Clock className="w-8 h-8 text-zion-purple" />
            </div>
            <h4 className="text-lg font-semibold text-white mb-2">24/7 Support</h4>
            <p className="text-sm text-zion-slate-light">Always available</p>
          </div>
        </motion.div>

        {/* Bottom section */}
        <motion.div 
          className="border-t border-zion-purple/20 pt-8"
          variants={itemVariants}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-zion-slate-light text-sm">
                © {currentYear} Zion Tech Group. All rights reserved.
              </p>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  className={`w-10 h-10 bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 rounded-full flex items-center justify-center text-zion-slate-light border border-zion-purple/30 hover:border-zion-purple/50 transition-all duration-300 ${social.color}`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>

            {/* Scroll to top button */}
            <motion.button
              onClick={scrollToTop}
              className="w-12 h-12 bg-gradient-to-r from-zion-purple to-zion-cyan rounded-full flex items-center justify-center text-white shadow-lg shadow-zion-purple/30 hover:shadow-xl hover:shadow-zion-purple/40 transition-all duration-300"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-2857
    </footer>
  );
}