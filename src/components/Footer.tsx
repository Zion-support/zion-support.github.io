import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "LinkedIn", url: "https://www.linkedin.com/company/ziontechgroup", icon: "💼", color: "hover:bg-blue-600/20" },
    { name: "Twitter", url: "https://twitter.com/ziontechgroup", icon: "🐦", color: "hover:bg-sky-500/20" },
    { name: "GitHub", url: "https://github.com/ziontechgroup", icon: "💻", color: "hover:bg-gray-600/20" },
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
        { label: "Quantum Computing", path: "/services/quantum" },
        { label: "Blockchain & Web3", path: "/services/blockchain" },
        { label: "Micro SAAS", path: "/services/micro-saas" }
      ]
    },
    {
      title: "Company",
      links: [
        { label: "About Us", path: "/about" },
        { label: "Our Team", path: "/about#team" },
        { label: "Careers", path: "/careers" },
        { label: "News & Updates", path: "/blog" },
        { label: "Case Studies", path: "/case-studies" },
        { label: "Partners", path: "/partners" }
      ]
    },
    {
      title: "Resources",
      links: [
        { label: "Blog", path: "/blog" },
        { label: "Documentation", path: "/docs" },
        { label: "White Papers", path: "/resources/white-papers" },
        { label: "Webinars", path: "/resources/webinars" },
        { label: "Research", path: "/research" },
        { label: "Events", path: "/events" }
      ]
    },
    {
      title: "Support",
      links: [
        { label: "Contact Us", path: "/contact" },
        { label: "Help Center", path: "/help" },
        { label: "Support Portal", path: "/support" },
        { label: "Training", path: "/training" },
        { label: "Consulting", path: "/consulting" },
        { label: "Request Quote", path: "/request-quote" }
      ]
    }
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
      transition: { duration: 0.5 }
    }
  };

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-zion-purple/5 via-transparent to-zion-cyan/5" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-zion-cyan/50 to-transparent" />
      
      {/* Main Footer Content */}
      <motion.div 
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
          {/* Company Info */}
          <motion.div className="lg:col-span-2" variants={itemVariants}>
            <div className="flex items-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mr-4 shadow-2xl">
                <span className="text-white font-bold text-2xl">Z</span>
              </div>
              <div>
                <span className="text-3xl font-bold bg-gradient-to-r from-white to-zion-cyan bg-clip-text text-transparent">
                  Zion Tech Group
                </span>
                <p className="text-zion-cyan text-sm font-medium">Innovation First</p>
              </div>
            </div>
            <p className="text-gray-300 mb-8 max-w-md leading-relaxed text-lg">
              Leading provider of innovative technology solutions, AI-powered services, 
              and digital transformation expertise. We help businesses navigate the future of technology.
            </p>
            
            {/* Enhanced Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center text-xl ${social.color} hover:scale-110 transition-all duration-300 border border-white/20 hover:border-zion-cyan/50`}
                  aria-label={`Follow us on ${social.name}`}
                  variants={itemVariants}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Footer Sections */}
          {footerSections.map((section, sectionIndex) => (
            <motion.div key={section.title} variants={itemVariants}>
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
                <span className="w-2 h-2 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full mr-3" />
                {section.title}
              </h3>
              <ul className="space-y-4">
                {section.links.map((link, linkIndex) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-gray-300 hover:text-zion-cyan transition-colors duration-300 group flex items-center"
                    >
                      <span className="w-1 h-1 bg-zion-cyan rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {link.label}
                      <span className="ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
                        →
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Section */}
        <motion.div 
          className="mt-16 pt-16 border-t border-white/10"
          variants={itemVariants}
        >
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Updated with Zion Tech
            </h3>
            <p className="text-gray-300 mb-8">
              Get the latest insights on AI, technology trends, and digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20 transition-all duration-300"
              />
              <button className="px-8 py-3 bg-gradient-to-r from-zion-purple to-zion-cyan text-white font-semibold rounded-xl hover:from-zion-purple-dark hover:to-zion-cyan-dark transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-zion-purple/25">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Footer */}
        <motion.div 
          className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center"
          variants={itemVariants}
        >
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Zion Tech Group. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm">
            <Link to="/privacy" className="text-gray-400 hover:text-zion-cyan transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-zion-cyan transition-colors duration-300">
              Terms of Service
            </Link>
            <Link to="/cookies" className="text-gray-400 hover:text-zion-cyan transition-colors duration-300">
              Cookie Policy
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;