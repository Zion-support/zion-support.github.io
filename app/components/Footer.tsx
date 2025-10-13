import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { Linkedin, Twitter, Github, Mail, Phone, MapPin, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

const Footer = React.memo(() => {
  const currentYear = new Date().getFullYear();

  const socialLinks = useMemo(() => [
    {
      name: "Twitter",
      url: "https://twitter.com/ziontechgroup",
      icon: <Twitter className="w-5 h-5" />,
      color: "hover:text-blue-400",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/company/ziontechgroup",
      icon: <Linkedin className="w-5 h-5" />,
      color: "hover:text-blue-600",
    },
    {
      name: "GitHub",
      url: "https://github.com/ziontechgroup",
      icon: <Github className="w-5 h-5" />,
      color: "hover:text-gray-300",
    },
  ], []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-500/5 via-transparent to-transparent"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,transparent_25%,rgba(139,92,246,0.05)_50%,transparent_75%)] bg-[length:60px_60px]"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center space-x-3"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Zion Tech Group
              </span>
            </motion.div>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-gray-300 text-base max-w-md leading-relaxed"
            >
              Leading provider of AI-powered solutions, 5G implementation, and enterprise IT services. 
              We help businesses transform with cutting-edge technology and innovative solutions.
            </motion.p>
            
            {/* Contact Info */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-3"
            >
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-5 h-5 text-cyan-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-5 h-5 text-cyan-400" />
                <span>+1 (302) 464-0950</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <span>364 E Main St STE 1008, Middletown, DE 19709</span>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex space-x-4"
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-400 ${link.color} transition-all duration-300 p-3 rounded-lg hover:bg-cyan-500/10 group`}
                  aria-label={link.name}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold mb-6 text-cyan-400">Services</h4>
            <ul className="space-y-3">
              {[
                { name: "AI Services", path: "/ai-services" },
                { name: "Cloud Infrastructure", path: "/cloud-infrastructure" },
                { name: "Cybersecurity", path: "/cybersecurity-solutions" },
                { name: "5G Implementation", path: "/5g-implementation" },
                { name: "Data Engineering", path: "/data-engineering" },
                { name: "Custom Software", path: "/custom-software" }
              ].map((item, index) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link
                    to={item.path}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 group flex items-center"
                  >
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold mb-6 text-cyan-400">Company</h4>
            <ul className="space-y-3">
              {[
                { name: "About Us", path: "/about" },
                { name: "Careers", path: "/careers" },
                { name: "Case Studies", path: "/case-studies" },
                { name: "Blog", path: "/blog" },
                { name: "News", path: "/news" },
                { name: "Press Kit", path: "/press" }
              ].map((item, index) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link
                    to={item.path}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 group flex items-center"
                  >
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Support */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold mb-6 text-cyan-400">Support</h4>
            <ul className="space-y-3">
              {[
                { name: "Contact", path: "/contact" },
                { name: "Help Center", path: "/support" },
                { name: "Pricing", path: "/pricing" },
                { name: "Consultation", path: "/consultation" },
                { name: "Documentation", path: "/docs" },
                { name: "Status", path: "/status" }
              ].map((item, index) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link
                    to={item.path}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 group flex items-center"
                  >
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Footer */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-cyan-500/20 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Zion Tech Group. All rights reserved.
            </p>
            <div className="flex space-x-6">
              {[
                { name: "Privacy Policy", path: "/privacy" },
                { name: "Terms of Service", path: "/terms" },
                { name: "Cookie Policy", path: "/cookies" }
              ].map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Scroll to Top Button */}
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 z-50 group"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <ArrowUp className="w-6 h-6 text-white group-hover:translate-y-[-2px] transition-transform duration-300" />
        </motion.button>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;