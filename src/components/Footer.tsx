import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUp as ArrowUpIcon, Phone as PhoneIcon, Mail as EnvelopeIcon, MapPin as MapPinIcon, Linkedin, Facebook, Instagram, Github, Twitter, Youtube, ExternalLink } from 'lucide-react';
import { FooterNewsletter } from './FooterNewsletter';

function Footer() {
  const currentYear = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerSections = [
    {
      title: "Services",
      links: [
        { name: "AI Solutions", href: "/ai-solutions" },
        { name: "Cybersecurity", href: "/cybersecurity" },
        { name: "Cloud & DevOps", href: "/cloud-devops" },
        { name: "Data Analytics", href: "/data-analytics" },
        { name: "Quantum Technology", href: "/quantum-technology" },
        { name: "Enterprise Solutions", href: "/enterprise-solutions" },
        { name: "AI Autonomous Systems", href: "/ai-autonomous-systems" },
        { name: "AI Research Assistant", href: "/ai-autonomous-research-assistant" },
        { name: "AI Business Manager", href: "/ai-autonomous-business-manager" },
        { name: "AI Content Generation", href: "/ai-content-generation-automation" }
      ]
    },
    {
      title: "Solutions",
      links: [
        { name: "Healthcare", href: "/solutions/healthcare" },
        { name: "Finance", href: "/solutions/finance" },
        { name: "Manufacturing", href: "/solutions/manufacturing" },
        { name: "Retail", href: "/solutions/retail" },
        { name: "Education", href: "/solutions/education" },
        { name: "Government", href: "/solutions/government" },
        { name: "Energy", href: "/solutions/energy" },
        { name: "Transportation", href: "/solutions/transportation" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Our Team", href: "/team" },
        { name: "Careers", href: "/careers" },
        { name: "News & Blog", href: "/news" },
        { name: "Case Studies", href: "/case-studies" },
        { name: "Partners", href: "/partners" },
        { name: "Mission", href: "/mission" },
        { name: "Press", href: "/press" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Documentation", href: "/docs" },
        { name: "API Reference", href: "/api" },
        { name: "Help Center", href: "/help" },
        { name: "Webinars", href: "/webinars" },
        { name: "White Papers", href: "/white-papers" },
        { name: "Support", href: "/support" },
        { name: "Training", href: "/training" },
        { name: "Tutorials", href: "/tutorials" }
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
        { name: "Cookie Policy", href: "/cookies" },
        { name: "Data Protection", href: "/data-protection" },
        { name: "Security", href: "/security" },
        { name: "Compliance", href: "/compliance" }
      ]
    }
  ];

  const socialLinks = [
    { 
      name: 'LinkedIn', 
      url: 'https://www.linkedin.com/company/zion-tech-group', 
      icon: Linkedin,
      fallback: 'https://linkedin.com'
    },
    { 
      name: 'Twitter', 
      url: 'https://twitter.com/ziontechgroup', 
      icon: Twitter,
      fallback: 'https://twitter.com'
    },
    { 
      name: 'GitHub', 
      url: 'https://github.com/Zion-Holdings', 
      icon: Github,
      fallback: 'https://github.com'
    },
    { 
      name: 'YouTube', 
      url: 'https://youtube.com/@ziontechgroup', 
      icon: Youtube,
      fallback: 'https://youtube.com'
    },
    { 
      name: 'Facebook', 
      url: 'https://facebook.com/ziontechgroup', 
      icon: Facebook,
      fallback: 'https://facebook.com'
    },
    { 
      name: 'Instagram', 
      url: 'https://instagram.com/ziontechgroup', 
      icon: Instagram,
      fallback: 'https://instagram.com'
    }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const quickActions = [
    { name: 'Get a Quote', href: '/request-quote', icon: '💬' },
    { name: 'Schedule Demo', href: '/contact', icon: '🎯' },
    { name: 'Support Chat', href: '/support', icon: '🆘' },
    { name: 'Partner Program', href: '/partners', icon: '🤝' }
  ];

  return (
    <footer className="bg-zion-slate-dark border-t border-zion-blue-light/30">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center">
                <span className="text-2xl">🤖</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                ZION
              </span>
            </div>
            <p className="text-zion-slate-light mb-6 leading-relaxed">
              Leading the future of technology with AI-powered solutions, quantum computing, 
              and autonomous systems that transform businesses and drive innovation.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-zion-slate-light">
                <PhoneIcon className="w-4 h-4 text-zion-cyan" />
                <a href={`tel:${contactInfo.phone}`} className="hover:text-zion-cyan transition-colors">
                  {contactInfo.phone}
                </a>
              </div>
              <div className="flex items-center space-x-3 text-zion-slate-light">
                <EnvelopeIcon className="w-4 h-4 text-zion-cyan" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-zion-cyan transition-colors">
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex items-center space-x-3 text-zion-slate-light">
                <MapPinIcon className="w-4 h-4 text-zion-cyan" />
                <span>{contactInfo.address}</span>
              </div>
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-white font-semibold text-lg mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      to={link.href}
                      className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="mt-12 pt-8 border-t border-zion-blue-light/20">
          <h3 className="text-white font-semibold text-lg mb-6 text-center">Quick Actions</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {quickActions.map((action, index) => (
              <Link
                key={index}
                to={action.href}
                className="flex flex-col items-center p-4 bg-zion-slate-light/10 rounded-lg hover:bg-zion-slate-light/20 transition-all duration-300 group"
              >
                <span className="text-2xl mb-2">{action.icon}</span>
                <span className="text-white text-sm font-medium group-hover:text-zion-cyan transition-colors">
                  {action.name}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-12 pt-8 border-t border-zion-blue-light/20">
          <FooterNewsletter />
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-zion-blue-light/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-zion-slate-light text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-zion-slate-light/20 rounded-lg flex items-center justify-center text-zion-slate-light hover:text-zion-cyan hover:bg-zion-slate-light/30 transition-all duration-300"
                  title={social.name}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>

            {/* Back to Top */}
            <motion.button
              onClick={scrollToTop}
              className="flex items-center space-x-2 text-zion-slate-light hover:text-zion-cyan transition-colors text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowUpIcon className="w-4 h-4" />
              <span>Back to Top</span>
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
