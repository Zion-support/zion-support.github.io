import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Mail, Phone, MapPin, Twitter, Linkedin, Github, Facebook, Instagram, Youtube, Zap, Brain, Cloud } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const serviceCategories = [
    {
      title: 'AI Services',
      icon: <Brain className="w-5 h-5" />,
      color: 'from-blue-500 to-cyan-500',
      links: [
        { label: 'AI Analytics Dashboard Pro', href: '/ai-analytics-dashboard-pro' },
        { label: 'AI Cybersecurity Suite Pro', href: '/ai-cybersecurity-suite-pro' },
        { label: 'AI Content Generation Pro', href: '/ai-content-generation-pro' },
        { label: 'AI Customer Support Chatbot', href: '/ai-customer-support-chatbot' },
        { label: 'AI Data Analytics Pro', href: '/ai-data-analytics-pro' },
        { label: 'AI Financial Analysis Pro', href: '/ai-financial-analysis-pro' },
        { label: 'AI HR Recruitment Pro', href: '/ai-hr-recruitment-pro' },
        { label: 'AI Image Recognition Pro', href: '/ai-image-recognition-pro' }
      ]
    },
    {
      title: 'IT Services',''
      icon: <Cloud className="w-5 h-5" />,
      color: 'from-green-500 to-emerald-500',''
      links: [
        { label: 'Cloud Infrastructure', href: '/cloud-infrastructure' },
        { label: 'Database Management', href: '/database-management' },
        { label: 'Cybersecurity Solutions', href: '/cybersecurity-solutions' },
        { label: 'IT Consulting', href: '/it-consulting' },
        { label: 'System Integration', href: '/system-integration' },
        { label: 'Network Security', href: '/network-security' }
      ]
    },
    {
      title: 'Solutions',''
      icon: <Zap className="w-5 h-5" />,
      color: 'from-purple-500 to-pink-500',''
      links: [
        { label: 'Digital Transformation', href: '/digital-transformation' },
        { label: 'Business Intelligence', href: '/business-intelligence' },
        { label: 'Process Automation', href: '/process-automation' },
        { label: 'Data Analytics', href: '/data-analytics' },
        { label: 'Mobile Solutions', href: '/mobile-solutions' }
      ]
    }
  ];

  const companyLinks = [
    { label: 'About Us', href: '/about' },
    { label: 'Our Team', href: '/team' },
    { label: 'Careers', href: '/careers' },
    { label: 'News & Blog', href: '/blog' },
    { label: 'Case Studies', href: '/case-studies' }
  ];

  const supportLinks = [
    { label: 'Help Center', href: '/help' },
    { label: 'Documentation', href: '/docs' },
    { label: 'API Reference', href: '/api' },
    { label: 'Status Page', href: '/status' },
    { label: 'Contact Support', href: '/contact' }
  ];

  const socialLinks = [
    { icon: <Twitter className="w-5 h-5" />, href: 'https://twitter.com/ziontechgroup', label: 'Twitter' },
    { icon: <Linkedin className="w-5 h-5" />, href: 'https://linkedin.com/company/ziontechgroup', label: 'LinkedIn' },
    { icon: <Github className="w-5 h-5" />, href: 'https://github.com/ziontechgroup', label: 'GitHub' },
    { icon: <Facebook className="w-5 h-5" />, href: 'https://facebook.com/ziontechgroup', label: 'Facebook' },
    { icon: <Instagram className="w-5 h-5" />, href: 'https://instagram.com/ziontechgroup', label: 'Instagram' },
    { icon: <Youtube className="w-5 h-5" />, href: 'https://youtube.com/ziontechgroup', label: 'YouTube' }
  ];

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-xl font-bold text-white">Zion Tech Group</h2>
            </div>
            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
              Leading provider of AI and IT solutions, helping businesses transform through cutting-edge technology and innovative approaches.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Service Categories */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {serviceCategories.map((category, index) => (
                <div key={index} className="lg:col-span-1">
                  <div className="flex items-center mb-6">
                    <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mr-3`}>
                      {category.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-white">
                      {category.title}
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {category.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <Link
                          to={link.href}
                          className="text-gray-400 hover:text-white transition-colors text-sm"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center">
              <Phone className="w-5 h-5 mr-2 text-cyan-400" />
              <span className="text-gray-300">+1-302-464-0950</span>
            </div>
            <div className="flex items-center">
              <Mail className="w-5 h-5 mr-2 text-cyan-400" />
              <span className="text-gray-300">kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-5 h-5 mr-2 text-cyan-400" />
              <span className="text-gray-300">Middletown, DE 19709</span>
            </div>
          </div>
        </div>

        {/* Additional Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 pt-8 border-t border-slate-700">
          <div></div>
            <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm>"
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div></div>
            <h4 className="text-lg font-semibold text-white mb-4">Support</h4>
            <ul className="space-y-3">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm>"
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Why Choose Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-400 text-sm">
                <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                Expert AI Solutions
              </li>
              <li className="flex items-center text-gray-400 text-sm">
                <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                24/7 Support
              </li>
              <li className="flex items-center text-gray-400 text-sm">
                <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                Proven Results
              </li>
              <li className="flex items-center text-gray-400 text-sm">
                <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                Custom Solutions
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-gray-400 hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;