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
    { name: 'Blog', path: '/blog' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Support', path: '/support' }
  ];

  const resources = [
    { name: "Case Studies", path: "/case-studies" },
    { name: "White Papers", path: "/white-papers" },
    { name: "Webinars", path: "/webinars" },
    { name: "Tutorials", path: "/tutorials" },
    { name: "Documentation", path: "/docs" },
    { name: "Sitemap", path: "/sitemap" }
  ];

  const legal = [
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms of Service', path: '/terms' },
    { name: 'Cookie Policy', path: '/cookies' },
    { name: 'GDPR Compliance', path: '/gdpr' },
    { name: 'Security', path: '/security' },
    { name: 'Compliance', path: '/compliance' }
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
            <motion.div 
              className="space-y-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {contactInfo.map((contact, index) => (
                <a
                  key={contact.label}
                  href={contact.href}
                  className="flex items-center gap-3 text-gray-300 hover:text-zion-cyan transition-colors duration-300 group"
                >
                  <contact.icon className="h-5 w-5 text-zion-cyan group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-sm">{contact.label}</span>
                </a>
              ))}
            </motion.div>
            
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

        {/* Newsletter Section */}
        <motion.div 
          className="mt-20 pt-12 border-t border-white/10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Updated with Tech Trends
            </h3>
            <p className="text-gray-300 mb-8">
              Get the latest insights on AI, cybersecurity, and digital transformation delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20 transition-all duration-300 backdrop-blur-sm"
              />
              <button className="px-8 py-3 bg-gradient-to-r from-zion-purple to-zion-cyan text-white font-medium rounded-xl hover:from-zion-purple-dark hover:to-zion-cyan-dark transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-zion-purple/25">
                Subscribe
              </button>
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
