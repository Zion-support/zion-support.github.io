import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Globe, 
  Linkedin, 
  Twitter, 
  Facebook, 
  Instagram,
  ArrowUp,
  Heart,
  Shield,
  Zap,
  Brain,
  Cloud,
  Server,
  Rocket,
  Users,
  Briefcase,
  FileText,
  HelpCircle,
  MessageCircle,
  Zap as ZapIcon
} from 'lucide-react';
export const FuturisticFooter: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const currentYear = new Date().getFullYear();
  const footerSections = [
    {
      title: "Services",
      links: [
        { name: "AI & Machine Learning", href: "/ai-services" },
        { name: "Micro SAAS Solutions", href: "/micro-saas" },
        { name: "IT Infrastructure", href: "/it-services" },
        { name: "Emerging Technologies", href: "/emerging-tech" },
        { name: "Cybersecurity", href: "/it-services/cybersecurity" },
        { name: "Cloud Solutions", href: "/it-services/cloud" },
        { name: "DevOps & Automation", href: "/it-services/devops" },
        { name: "Data Management", href: "/it-services/data" }
      ]
    },
    {
      title: "Solutions",
      links: [
        { name: "Quantum Computing", href: "/emerging-tech/quantum" },
        { name: "Blockchain & Web3", href: "/emerging-tech/blockchain" },
        { name: "Edge Computing", href: "/emerging-tech/edge" },
        { name: "IoT Solutions", href: "/emerging-tech/iot" },
        { name: "Healthcare AI", href: "/ai-services/healthcare" },
        { name: "Financial AI", href: "/ai-services/financial" },
        { name: "Green Technology", href: "/green-it" },
        { name: "Space Technology", href: "/emerging-tech/space" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Our Team", href: "/about#team" },
        { name: "Careers", href: "/careers" },
        { name: "Partners", href: "/partners" },
        { name: "News & Blog", href: "/blog" },
        { name: "Press Kit", href: "/press" },
        { name: "Investor Relations", href: "/investors" },
        { name: "Sustainability", href: "/sustainability" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Documentation", href: "/docs" },
        { name: "API Reference", href: "/api" },
        { name: "Developer Portal", href: "/developer" },
        { name: "Support Center", href: "/support" },
        { name: "FAQ", href: "/faq" },
        { name: "Contact Us", href: "/contact" },
        { name: "Case Studies", href: "/case-studies" },
        { name: "Marketplace", href: "/marketplace" }
      ]
    }
  ];
  const socialLinks = [
    { name: "LinkedIn", href: "https://linkedin.com/company/ziontechgroup", icon: Linkedin },
    { name: "Twitter", href: "https://twitter.com/ziontechgroup", icon: Twitter },
    { name: "Facebook", href: "https://facebook.com/ziontechgroup", icon: Facebook },
    { name: "Instagram", href: "https://instagram.com/ziontechgroup", icon: Instagram }
  ];
  return (
    <footer className="relative bg-gradient-to-b from-zion-slate-dark to-zion-slate-darker border-t border-zion-cyan/20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zion-cyan/5 to-transparent" />
      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-lg flex items-center justify-center">
                    <ZapIcon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-2xl font-bold text-white">ZION TECH GROUP</span>
                </div>
                <p className="text-zion-slate-light mb-6 leading-relaxed">
                  Leading the future of technology with cutting-edge AI solutions, innovative micro SAAS platforms, 
                  and next-generation IT infrastructure that transforms businesses and drives innovation.
                </p>
                {/* Contact Information */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-zion-slate-light hover:text-zion-cyan transition-colors duration-300">
                    <Phone className="w-4 h-4" />
                    <a href="tel:+13024640950" className="text-sm">+1 302 464 0950</a>
                  </div>
                  <div className="flex items-center space-x-3 text-zion-slate-light hover:text-zion-cyan transition-colors duration-300">
                    <Mail className="w-4 h-4" />
                    <a href="mailto:kleber@ziontechgroup.com" className="text-sm">kleber@ziontechgroup.com</a>
                  </div>
                  <div className="flex items-start space-x-3 text-zion-slate-light">
                    <MapPin className="w-4 h-4 mt-0.5" />
                    <address className="text-sm not-italic">
                      364 E Main St STE 1008<br />
                      Middletown DE 19709
                    </address>
                  </div>
                  <div className="flex items-center space-x-3 text-zion-slate-light hover:text-zion-cyan transition-colors duration-300">
                    <Globe className="w-4 h-4" />
                    <a href="https://ziontechgroup.com" className="text-sm">ziontechgroup.com</a>
                  </div>
                </div>
              </motion.div>
            </div>
            {/* Footer Links */}
            {footerSections.map((section, index) => (
              <div key={section.title}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                    {section.title === "Services" && <Brain className="w-5 h-5 mr-2 text-zion-cyan" />}
                    {section.title === "Solutions" && <Rocket className="w-5 h-5 mr-2 text-zion-purple" />}
                    {section.title === "Company" && <Users className="w-5 h-5 mr-2 text-zion-blue" />}
                    {section.title === "Resources" && <FileText className="w-5 h-5 mr-2 text-zion-cyan" />}
                    {section.title}
                  </h3>
                  <ul className="space-y-2">
                    {section.links.map((link) => (
                      <li key={link.name}>
                        <Link
                          to={link.href}
                          className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300 text-sm hover:translate-x-1 inline-block"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            ))}
          </div>
          {/* Additional Quick Access Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="border-t border-zion-slate/30 mt-12 pt-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <Zap className="w-5 h-5 mr-2 text-zion-cyan" />
                  Quick Actions
                </h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      to="/request-quote"
                      className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300 text-sm hover:translate-x-1 inline-block"
                    >
                      Request Quote
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/demo"
                      className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300 text-sm hover:translate-x-1 inline-block"
                    >
                      Book Demo
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/support"
                      className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300 text-sm hover:translate-x-1 inline-block"
                    >
                      Get Support
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/status"
                      className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300 text-sm hover:translate-x-1 inline-block"
                    >
                      System Status
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="border-t border-zion-slate/30 mt-12 pt-8"
          >
            <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
              {/* Copyright */}
              <div className="text-zion-slate-light text-sm">
                © {currentYear} ZION TECH GROUP. All rights reserved. 
                <span className="ml-2 flex items-center">
                  Made with <Heart className="w-4 h-4 mx-1 text-red-400" /> for innovation
                </span>
              </div>
              {/* Social Links */}
              <div className="flex items-center space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-zion-slate-dark/50 border border-zion-slate/30 rounded-lg flex items-center justify-center text-zion-slate-light hover:text-zion-cyan hover:border-zion-cyan/50 hover:bg-zion-cyan/10 transition-all duration-300"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
              {/* Legal Links */}
              <div className="flex items-center space-x-6 text-sm">
                <Link to="/privacy" className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300">
                  Terms of Service
                </Link>
                <Link to="/sitemap" className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300">
                  Sitemap
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
        {/* Scroll to Top Button */}
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-blue text-white rounded-full shadow-lg shadow-zion-cyan/25 hover:shadow-xl hover:shadow-zion-cyan/40 transition-all duration-300 z-50 flex items-center justify-center group"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ArrowUp className="w-6 h-6 group-hover:-translate-y-0.5 transition-transform duration-300" />
        </motion.button>
      </div>
      {/* Bottom Border Glow */}
      <div className="h-px bg-gradient-to-r from-transparent via-zion-cyan to-transparent opacity-50" />
    </footer>
  );
};