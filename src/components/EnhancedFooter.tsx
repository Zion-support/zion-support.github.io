import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Zap, Mail, Phone, MapPin, Globe, Twitter, Linkedin, 
  Facebook, Instagram, Youtube, Github, ArrowRight,
  Shield, Users, Code, Building, BookOpen, HelpCircle
} from 'lucide-react';

export function EnhancedFooter() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about', description: 'Our mission and values' },
        { name: 'Our Team', href: '/team', description: 'Meet our experts' },
        { name: 'Leadership', href: '/leadership', description: 'Executive team' },
        { name: 'Careers', href: '/careers', description: 'Join our team' },
        { name: 'Partners', href: '/partners', description: 'Strategic partnerships' },
        { name: 'News', href: '/news', description: 'Latest updates' },
      ]
    },
    {
      title: 'Services',
      links: [
        { name: 'AI Solutions', href: '/ai-solutions', description: 'Machine learning & automation' },
        { name: 'Cloud Services', href: '/services/cloud-devops', description: 'Infrastructure & DevOps' },
        { name: 'Cybersecurity', href: '/services/ai-cybersecurity-platform', description: 'Security & compliance' },
        { name: 'Digital Transformation', href: '/services/digital-transformation', description: 'Business modernization' },
        { name: 'Micro SaaS', href: '/micro-saas', description: 'Lightweight applications' },
        { name: 'Consulting', href: '/it-consulting', description: 'Technology advisory' },
      ]
    },
    {
      title: 'Solutions',
      links: [
        { name: 'Enterprise', href: '/solutions/enterprise', description: 'Large-scale solutions' },
        { name: 'Healthcare', href: '/solutions/healthcare', description: 'Medical technology' },
        { name: 'Financial', href: '/financial-solutions', description: 'Fintech solutions' },
        { name: 'Manufacturing', href: '/manufacturing-solutions', description: 'Industry 4.0' },
        { name: 'Research & Development', href: '/research-development', description: 'Innovation labs' },
        { name: 'Green IT', href: '/green-it', description: 'Sustainable technology' },
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Blog', href: '/blog', description: 'Insights & updates' },
        { name: 'Case Studies', href: '/case-studies', description: 'Success stories' },
        { name: 'White Papers', href: '/white-papers', description: 'In-depth research' },
        { name: 'Webinars', href: '/webinars', description: 'Educational content' },
        { name: 'Documentation', href: '/documentation', description: 'Technical guides' },
        { name: 'API Reference', href: '/api', description: 'Developer resources' },
      ]
    },
    {
      title: 'Support',
      links: [
        { name: 'Help Center', href: '/help', description: 'Find answers' },
        { name: 'FAQ', href: '/faq', description: 'Common questions' },
        { name: 'Contact Support', href: '/support', description: 'Get help' },
        { name: 'Training', href: '/training', description: 'Skill development' },
        { name: 'Status Page', href: '/status', description: 'Service status' },
        { name: 'Community', href: '/community', description: 'User forums' },
      ]
    }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'Data Protection', href: '/data-protection' },
    { name: 'Accessibility', href: '/accessibility' },
    { name: 'Sitemap', href: '/sitemap' },
  ];

  const socialLinks = [
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter, color: 'text-blue-400 hover:text-blue-300' },
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin, color: 'text-blue-600 hover:text-blue-500' },
    { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook, color: 'text-blue-700 hover:text-blue-600' },
    { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram, color: 'text-pink-500 hover:text-pink-400' },
    { name: 'YouTube', href: 'https://youtube.com/ziontechgroup', icon: Youtube, color: 'text-red-500 hover:text-red-400' },
    { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github, color: 'text-gray-600 hover:text-gray-500' },
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'contact@ziontechgroup.com',
      href: 'mailto:contact@ziontechgroup.com',
      description: 'Send us a message'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567',
      description: 'Call us directly'
    },
    {
      icon: MapPin,
      label: 'Address',
      value: '123 Tech Street, Innovation City, IC 12345',
      href: 'https://maps.google.com/?q=123+Tech+Street+Innovation+City',
      description: 'Visit our headquarters'
    }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">Zion Tech Group</span>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading the future of technology with cutting-edge AI solutions, 
              quantum computing, and innovative micro SAAS services. 
              Transforming businesses through digital innovation.
            </p>

            {/* Contact Information */}
            <div className="space-y-4">
              {contactInfo.map((contact) => (
                <div key={contact.label} className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <contact.icon className="w-4 h-4 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-300">{contact.label}</div>
                    <a
                      href={contact.href}
                      className="text-white hover:text-blue-400 transition-colors font-medium"
                    >
                      {contact.value}
                    </a>
                    <div className="text-xs text-gray-400">{contact.description}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold text-gray-300 mb-3">Follow Us</h4>
              <div className="flex space-x-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center transition-colors hover:bg-gray-700 ${social.color}`}
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                {section.title === 'Company' && <Building className="w-5 h-5 mr-2 text-blue-400" />}
                {section.title === 'Services' && <Code className="w-5 h-5 mr-2 text-green-400" />}
                {section.title === 'Solutions' && <Users className="w-5 h-5 mr-2 text-purple-400" />}
                {section.title === 'Resources' && <BookOpen className="w-5 h-5 mr-2 text-orange-400" />}
                {section.title === 'Support' && <HelpCircle className="w-5 h-5 mr-2 text-red-400" />}
                {section.title}
              </h3>
              
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="group flex items-start space-x-2 text-gray-300 hover:text-white transition-colors"
                    >
                      <ArrowRight className="w-3 h-3 mt-1 text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div>
                        <div className="font-medium group-hover:text-blue-400 transition-colors">
                          {link.name}
                        </div>
                        <div className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors">
                          {link.description}
                        </div>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Updated with Zion Tech Group
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Get the latest insights on AI, quantum computing, and emerging technologies. 
              Join our newsletter for exclusive content and updates.
            </p>
            
            <form className="max-w-md mx-auto flex space-x-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            
            {/* Copyright */}
            <div className="flex items-center space-x-2 text-gray-400">
              <Shield className="w-4 h-4" />
              <span>© {currentYear} Zion Tech Group. All rights reserved.</span>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center md:justify-end space-x-6">
              {legalLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-6 pt-6 border-t border-gray-800 text-center text-gray-500 text-sm">
            <p>
              Zion Tech Group is a leading technology company specializing in AI solutions, 
              quantum computing, and digital transformation services. 
              <span className="mx-2">•</span>
              ISO 27001 Certified
              <span className="mx-2">•</span>
              SOC 2 Type II Compliant
              <span className="mx-2">•</span>
              GDPR Ready
            </p>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Back to top"
      >
        <ArrowRight className="w-6 h-6 transform rotate-[-90deg] mx-auto" />
      </motion.button>
    </footer>
  );
}