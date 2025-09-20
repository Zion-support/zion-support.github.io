import React from 'react',
import { motion  } from 'framer-motion',
export default function Page() {
,
        { label: 'Cloud Infrastructure', href: '#cloud' },
        { label: 'Quantum Computing', href: '#quantum' },
        { label: 'DevOps & Automation', href: '#devops' },
        { label: 'Digital Transformation', href: '#digital' }
      ]
    },
    {
      title: 'Solutions',
      links: [{ label: 'Enterprise', href: '#enterprise' },
        { label: 'Startup', href: '#startup' },
        { label: 'Healthcare', href: '#healthcare' },
        { label: 'Financial Services', href: '#finance' },
        { label: 'Retail & E-commerce', href: '#retail' },
        { label: 'Manufacturing', href: '#manufacturing' }
      ]
    },
    {
      title: 'Company',
      links: [{ label: 'About Us', href: '#about' },
        { label: 'Our Team', href: '#team' },
        { label: 'Careers', href: '#careers' },
        { label: 'News & Updates', href: '#news' },
        { label: 'Partners', href: '#partners' },
        { label: 'Contact', href: '#contact' }
      ]
    },
    {
      title: 'Resources',
      links: [{ label: 'Blog', href: '#blog' },
        { label: 'White Papers', href: '#whitepapers' },
        { label: 'Webinars', href: '#webinars' },
        { label: 'Case Studies', href: '#case-studies' },
        { label: 'Documentation', href: '#docs' },
        { label: 'Support', href: '#support' }
      ]
    }
  ],

  const socialLinks = [{ icon: Twitter, href: '#twitter', label: 'Twitter' },
    { icon: Linkedin, href: '#linkedin', label: 'LinkedIn' },
    { icon: Facebook, href: '#facebook', label: 'Facebook' },
    { icon: Instagram, href: '#instagram', label: 'Instagram' },
    { icon: Youtube, href: '#youtube', label: 'YouTube' },
    { icon: Github, href: '#github', label: 'GitHub' }
  ],

  const contact = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  },

  return (<footer className="bg-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">Z</span>
                </div>
                <span className="text-white font-bold text-2xl">Zion Tech Group</span>
              </div>
              
              <p className="text-gray-400 mb-6 leading-relaxed">
                Pioneering the future with cutting-edge AI, cybersecurity, and quantum computing solutions.Transform your business with our innovative services and expert guidance.</p>

              {/* Contact Information */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-blue-400" />
                  <span>{contact.mobile}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <span>{contact.email}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-blue-400" />
                  <span className="text-sm">{contact.address}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="w-5 h-5 text-blue-400" />
                  <span>{contact.website}</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-white font-semibold text-lg mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Section */}
        <motion.div
          className="mt-16 pt-8 border-t border-gray-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <h3 className="text-white text-2xl font-semibold mb-4">
              Stay Updated with Our Latest Insights
            </h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Get the latest news, insights, and updates about AI, cybersecurity, and emerging technologies 
              delivered directly to your inbox.</p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors duration-200"
              />
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Copyright */}
            <motion.div
              className="flex items-center space-x-2 mb-4 md:mb-0"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="text-gray-400">
                © {currentYear} Zion Tech Group.All rights reserved.</span>
              <span className="text-gray-500">Made with</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span className="text-gray-500">for innovation</span>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex items-center space-x-4"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Legal Links */}
          <motion.div
            className="flex flex-wrap justify-center md:justify-start gap-6 mt-6 pt-6 border-t border-gray-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <a href="#privacy" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
              Privacy Policy
            </a>
            <a href="#terms" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
              Terms of Service
            </a>
            <a href="#cookies" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
              Cookie Policy
            </a>
            <a href="#accessibility" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
              Accessibility
            </a>
            <a href="#sitemap" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
              Sitemap
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 z-40"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        whileHover={{ y: -5 }}
      >
        <ArrowUp className="w-6 h-6" />
      </motion.button>
    </footer>
  ),
},

export default ModernFooter,