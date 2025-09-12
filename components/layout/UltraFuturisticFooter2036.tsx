import React from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Globe, 
  Twitter, 
  Linkedin, 
  Github, 
  Instagram,
  Youtube,
  Facebook,
  ArrowRight,
  Heart,
  Shield,
  Zap,
  Brain,
  Rocket,
  Star,
  Users,
  Award,
  Clock,
  Target,
  Building,
  BookOpen
} from 'lucide-react';
import Link from 'next/link';


  const footerSections = [
    {
      title: 'Services',
      links: [
        { name: 'AI & Machine Learning', href: '/ai-services' },
        { name: 'Quantum Computing', href: '/quantum-services' },
        { name: 'Space Technology', href: '/space-technology' },
        { name: 'Enterprise IT', href: '/it-services' },
        { name: 'Process Automation', href: '/automation-services' },
        { name: 'Cybersecurity', href: '/security' }
      ]
    },
    {
      title: 'Solutions',
      links: [
        { name: 'Industry Solutions', href: '/solutions' },
        { name: 'Cloud Infrastructure', href: '/cloud-platform' },
        { name: 'Data Analytics', href: '/data-analytics' },
        { name: 'Digital Transformation', href: '/digital-transformation' },
        { name: 'Consulting', href: '/consulting' },
        { name: 'Training', href: '/training' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Careers', href: '/careers' },
        { name: 'Partners', href: '/partners' },
        { name: 'Investors', href: '/investors' },
        { name: 'News', href: '/news' },
        { name: 'Contact', href: '/contact' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Documentation', href: '/docs' },
        { name: 'Blog', href: '/blog' },
        { name: 'Case Studies', href: '/case-studies' },
        { name: 'White Papers', href: '/white-papers' },
        { name: 'Webinars', href: '/webinars' },
        { name: 'Support', href: '/support' }
      ]
    }
  ];

  const socialLinks = [
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: <Twitter className="w-5 h-5" /> },
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: <Linkedin className="w-5 h-5" /> },
    { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: <Github className="w-5 h-5" /> },
    { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: <Instagram className="w-5 h-5" /> },
    { name: 'YouTube', href: 'https://youtube.com/ziontechgroup', icon: <Youtube className="w-5 h-5" /> },
    { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: <Facebook className="w-5 h-5" /> }
  ];

  const contactInfo = {
    email: 'kleber@ziontechgroup.com',
    phone: '+1 302 464 0950',
    address: '364 E Main St STE 1008, Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const achievements = [
    { icon: <Users className="w-6 h-6" />, number: '500+', label: 'Global Clients' },
    { icon: <Award className="w-6 h-6" />, number: '50+', label: 'Industry Awards' },
    { icon: <Clock className="w-6 h-6" />, number: '99.9%', label: 'Uptime SLA' },
    { icon: <Shield className="w-6 h-6" />, number: '24/7', label: 'Security' }
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <Rocket className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                      Zion Tech Group
                    </div>
                    <div className="text-sm text-gray-400">Revolutionary Technology</div>
                  </div>
                </div>
                
                <p className="text-gray-300 leading-relaxed max-w-md">
                  Pioneering the future of technology with innovative AI, quantum computing, and autonomous solutions that transform businesses worldwide.
                </p>

                {/* Contact Information */}
                <div className="space-y-3">
                  {contactInfo.map((contact, index) => (
                    <Link
                      key={index}
                      href={contact.href}
                      className="flex items-center space-x-3 text-gray-400 hover:text-cyan-300 transition-colors group"
                      target={contact.href.startsWith('http') ? '_blank' : undefined}
                      rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      <span className="text-cyan-400 group-hover:text-cyan-300 transition-colors">
                        {contact.icon}
                      </span>
                      <span className="text-sm">{contact.text}</span>
                      {contact.href.startsWith('http') && (
                        <Link href={contact.href} target="_blank" rel="noopener noreferrer" className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity">
                          <Globe className="w-3 h-3" />
                        </Link>
                      )}
                    </Link>
                  ))}
                </div>
                <div className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors">
                  <Mail className="w-5 h-5" />
                  <a 
                    href={`mailto:${contactInfo.email}`}
                    className="hover:underline"
                    aria-label={`Email us at ${contactInfo.email}`}
                  >
                    {contactInfo.email}
                  </a>
                </div>
                <div className="flex items-start space-x-3 text-gray-300">
                  <MapPin className="w-5 h-5 mt-0.5" />
                  <address className="not-italic">
                    {contactInfo.address}
                  </address>
                </div>
                <div className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors">
                  <Zap className="w-5 h-5" />
                  <a 
                    href={contactInfo.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                    aria-label={`Visit our website at ${contactInfo.website}`}
                  >
                    {contactInfo.website}
                  </a>
                </div>
              </div>
            </motion.div>

                {/* Social Media Links */}
                <div className="pt-4">
                  <h4 className="text-sm font-semibold text-gray-300 mb-3">Follow Us</h4>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                      <Link
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-all duration-300 hover:scale-110 ${social.color}`}
                        aria-label={`Follow us on ${social.name}`}
                      >
                        {social.icon}
                      </Link>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

            {/* Service Sections */}
            {footerSections.map((section, sectionIndex) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <h4 className="text-lg font-semibold text-white mb-6 flex items-center">
                  {section.title === 'Services' && <Brain className="w-5 h-5 text-cyan-400 mr-2" />}
                  {section.title === 'Solutions' && <Target className="w-5 h-5 text-blue-400 mr-2" />}
                  {section.title === 'Company' && <Building className="w-5 h-5 text-purple-400 mr-2" />}
                  {section.title === 'Resources' && <BookOpen className="w-5 h-5 text-green-400 mr-2" />}
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 flex items-center group"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
                {section.links.length > 5 && (
                  <Link
                    href={`/services#${section.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors duration-200 inline-flex items-center space-x-1"
                  >
                    <span>View All</span>
                    <ArrowUp className="w-3 h-3 rotate-45" aria-hidden="true" />
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Newsletter Section */}
          <motion.div 
            className="bg-gradient-to-r from-cyan-900/20 to-blue-900/20 border border-cyan-500/20 rounded-2xl p-8 mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="text-center max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">
                Stay Updated with Latest Tech Trends
              </h3>
              <p className="text-gray-300 mb-6">
                Get insights on AI, quantum computing, space technology, and more delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-200"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center gap-2"
                >
                  <Zap className="w-4 h-4" />
                  Subscribe
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Social Links and Bottom Section */}
          <div className="border-t border-gray-800/50 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              {/* Social Links */}
              <motion.div 
                className="flex space-x-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800/50 border border-gray-700/50 rounded-xl flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-500/50 hover:bg-gray-800 transition-all duration-200 hover:transform hover:scale-110"
                    aria-label={`Follow us on ${social.name}`}
                  >
                    {social.icon}
                  </a>
                ))}
              </motion.div>

              {/* Copyright */}
              <motion.div 
                className="text-center md:text-right text-gray-400"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <p className="flex items-center justify-center md:justify-end space-x-1">
                  <span>© {currentYear} Zion Tech Group. All rights reserved.</span>
                  <Heart className="w-4 h-4 text-red-400 mx-1" />
                  <span>Made with innovation</span>
                </p>
                <div className="flex items-center justify-center md:justify-end space-x-4 mt-2 text-sm">
                  <Link href="/privacy" className="hover:text-cyan-400 transition-colors">
                    Privacy Policy
                  </Link>
                  <Link href="/terms" className="hover:text-cyan-400 transition-colors">
                    Terms of Service
                  </Link>
                  <Link href="/cookies" className="hover:text-cyan-400 transition-colors">
                    Cookie Policy
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};