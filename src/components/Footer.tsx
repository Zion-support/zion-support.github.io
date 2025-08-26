import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Github, Youtube, MessageCircle, Mail, Phone, MapPin, ArrowRight, Sparkles } from 'lucide-react';

function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "LinkedIn", url: "https://linkedin.com/company/ziontechgroup", icon: Linkedin, color: "hover:bg-blue-600/20 hover:text-blue-400" },
    { name: "Twitter", url: "https://twitter.com/ziontechgroup", icon: Twitter, color: "hover:bg-sky-500/20 hover:text-sky-400" },
    { name: "GitHub", url: "https://github.com/ziontechgroup", icon: Github, color: "hover:bg-gray-600/20 hover:text-gray-400" },
    { name: "YouTube", url: "https://youtube.com/@ziontechgroup", icon: Youtube, color: "hover:bg-red-600/20 hover:text-red-400" },
    { name: "Discord", url: "https://discord.gg/ziontechgroup", icon: MessageCircle, color: "hover:bg-indigo-600/20 hover:text-indigo-400" }
  ];

  const company = [
    { name: 'About Us', path: '/about' },
    { name: 'Our Team', path: '/about' },
    { name: 'Careers', path: '/careers' },
    { name: 'News', path: '/news' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' }
  ];

  const resources = [
    { name: "Case Studies", path: "/services" },
    { name: "White Papers", path: "/services" },
    { name: "Webinars", path: "/services" },
    { name: "Documentation", path: "/services" }
  ];

  const legal = [
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms of Service', path: '/terms' },
    { name: 'Cookie Policy', path: '/cookies' },
    { name: 'Contact', path: '/contact' }
  ];

  const socialLinks = [
    {
      title: 'Services',
      links: [
        { label: "AI Solutions", path: "/services/ai" },
        { label: "Cloud & DevOps", path: "/services/cloud" },
        { label: "Cybersecurity", path: "/services/cybersecurity" },
        { label: "Quantum Computing", path: "/quantum-technology" },
        { label: "Blockchain & Web3", path: "/services/blockchain" },
        { label: "IoT Services", path: "/iot-services" },
        { label: "Micro SAAS", path: "/micro-saas" },
        { label: "Space Technology", path: "/space-tech" },
        { label: "Green IT", path: "/green-it" },
        { label: "Manufacturing", path: "/manufacturing-solutions" },
        { label: "Financial Solutions", path: "/financial-solutions" }
      ]
    },
    {
      title: 'Company',
      links: [
        { label: "About Us", path: "/about" },
        { label: "Our Team", path: "/team" },
        { label: "Leadership", path: "/leadership" },
        { label: "Careers", path: "/careers" },
        { label: "News & Updates", path: "/news" },
        { label: "Case Studies", path: "/case-studies" },
        { label: "Partners", path: "/partners" }
      ]
    },
    {
      title: 'Resources',
      links: [
        { label: "Blog", path: "/blog" },
        { label: "Documentation", path: "/docs" },
        { label: "White Papers", path: "/white-papers" },
        { label: "Webinars", path: "/webinars" },
        { label: "Research", path: "/research-development" },
        { label: "Events", path: "/events" },
        { label: "Tutorials", path: "/tutorials" }
      ]
    },
    {
      title: 'Legal',
      links: [
        { label: "Contact Us", path: "/contact" },
        { label: "Help Center", path: "/help-center" },
        { label: "Support Portal", path: "/support" },
        { label: "Training", path: "/training" },
        { label: "Consulting", path: "/services/consulting" },
        { label: "Request Quote", path: "/request-quote" },
        { label: "FAQ", path: "/faq" }
      ]
    }
  ];

  const contactInfo = [
    { icon: Mail, label: "hello@ziontechgroup.com", href: "mailto:hello@ziontechgroup.com" },
    { icon: Phone, label: "+1 (555) 123-4567", href: "tel:+15551234567" },
    { icon: MapPin, label: "San Francisco, CA", href: "#" }
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(34,221,210,0.1)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(140,21,233,0.1)_0%,transparent_50%)]" />
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.div 
              className="flex items-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue rounded-2xl flex items-center justify-center mr-4 shadow-2xl">
                <span className="text-white font-bold text-2xl">Z</span>
              </div>
              <div>
                <h3 className="text-3xl font-bold bg-gradient-to-r from-zion-cyan via-white to-zion-purple bg-clip-text text-transparent">
                  Zion Tech Group
                </h3>
                <div className="flex items-center gap-2 mt-1">
                  <Sparkles className="h-4 w-4 text-zion-cyan" />
                  <span className="text-zion-cyan text-sm font-medium">Innovation First</span>
                </div>
              </div>
            </motion.div>
            
            <motion.p 
              className="text-gray-300 mb-8 max-w-md leading-relaxed text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Leading provider of innovative technology solutions, AI-powered services, 
              and digital transformation expertise. We help businesses navigate the future of technology.
            </motion.p>
            
            {/* Contact Info */}
            <div className="space-y-2 mb-6 text-sm text-gray-400">
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+13024640950" className="hover:text-white transition-colors duration-300">
                  +1 (302) 464-0950
                </a>
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@ziontechgroup.com" className="hover:text-white transition-colors duration-300">
                  info@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314-11.314z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Wilmington, DE & Remote
              </div>
            </div>
            
            {/* Social Links */}
            <motion.div 
              className="flex space-x-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-xl ${social.color} hover:scale-110 transition-all duration-300 backdrop-blur-sm border border-white/20`}
                  aria-label={`Follow us on ${social.name}`}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section, sectionIndex) => (
            <motion.div 
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 + sectionIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                <span className="w-2 h-2 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full" />
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-gray-300 hover:text-zion-cyan transition-all duration-300 group flex items-center gap-2"
                    >
                      <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-all duration-300 text-zion-cyan" />
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {link.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                ISO 27001 Certified
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                SOC 2 Type II
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-purple-400 rounded-full mr-2"></div>
                Microsoft Gold Partner
              </div>
            </div>
            <p className="text-zion-slate-light text-xs mt-3">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <motion.div 
        className="border-t border-white/10 py-6 relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <Link to="/privacy" className="hover:text-zion-cyan transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-zion-cyan transition-colors duration-300">
                Terms of Service
              </Link>
              <Link to="/cookies" className="hover:text-zion-cyan transition-colors duration-300">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}

export default Footer;
