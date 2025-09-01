import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Globe, ArrowRight } from 'lucide-react';

const Sitemap = () => {
  const sitemapSections = [
    {
      title: 'Main Pages',
      links: [
        { name: 'Home', path: '/', description: 'Welcome to Zion Tech Group' },
        { name: 'About', path: '/about', description: 'Learn about our company' },
        { name: 'Contact', path: '/contact', description: 'Get in touch with us' },
        { name: 'Partners', path: '/partners', description: 'Our business partners' },
        { name: 'Careers', path: '/careers', description: 'Job opportunities' },
        { name: 'Blog', path: '/blog', description: 'Latest news and insights' },
        { name: 'FAQ', path: '/faq', description: 'Frequently asked questions' },
        { name: 'Login', path: '/login', description: 'User authentication' },
        { name: 'Pricing', path: '/pricing', description: 'Service pricing plans' }
      ]
    },
    {
      title: 'Services',
      links: [
        { name: 'All Services', path: '/services', description: 'Complete service catalog' },
        { name: 'AI Solutions', path: '/services/ai', description: 'Artificial intelligence services' },
        { name: 'Cybersecurity', path: '/services/cybersecurity', description: 'Security solutions' },
        { name: 'Cloud Services', path: '/services/cloud', description: 'Cloud infrastructure' },
        { name: 'Data Analytics', path: '/services/analytics', description: 'Data analysis solutions' },
        { name: 'AI Quantum Financial Trading', path: '/services/ai-quantum-financial-trading', description: 'Advanced trading algorithms' }
      ]
    },
    {
      title: 'Legal & Support',
      links: [
        { name: 'Privacy Policy', path: '/privacy', description: 'Privacy and data protection' },
        { name: 'Terms of Service', path: '/terms', description: 'Terms and conditions' },
        { name: 'Cookie Policy', path: '/cookies', description: 'Cookie usage information' },
        { name: 'Support Center', path: '/support', description: 'Help and documentation' },
        { name: 'Status Page', path: '/status', description: 'System status and uptime' }
      ]
    }
  ];

  const lastUpdated = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white pt-24">
      <div className="container mx-auto max-w-6xl px-4 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <MapPin className="w-8 h-8 text-cyan-400" />
            <h1 className="text-4xl md:text-5xl font-bold">
              Site
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                {' '}Map
              </span>
            </h1>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-4">
            Navigate through all pages and services available on Zion Tech Group
          </p>
          <p className="text-sm text-gray-400">
            Last updated: {lastUpdated}
          </p>
        </motion.div>

        {/* Sitemap Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {sitemapSections.map((section, sectionIndex) => (
            <motion.div
              key={sectionIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: sectionIndex * 0.1 }}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20"
            >
              <h2 className="text-2xl font-bold mb-6 text-cyan-400 flex items-center gap-2">
                <Globe className="w-6 h-6" />
                {section.title}
              </h2>
              
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <motion.li
                    key={linkIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: (sectionIndex * 0.1) + (linkIndex * 0.05) }}
                  >
                    <Link
                      to={link.path}
                      className="group block p-3 rounded-lg border border-white/10 hover:border-cyan-400/50 hover:bg-white/5 transition-all duration-300"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold text-white group-hover:text-cyan-400 transition-colors">
                            {link.name}
                          </h3>
                          <p className="text-sm text-gray-400 mt-1">
                            {link.description}
                          </p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all duration-300" />
                      </div>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold mb-6">Site Statistics</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <div className="text-3xl font-bold text-cyan-400 mb-2">
                  {sitemapSections.reduce((total, section) => total + section.links.length, 0)}
                </div>
                <div className="text-gray-300">Total Pages</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-cyan-400 mb-2">
                  {sitemapSections.length}
                </div>
                <div className="text-gray-300">Main Sections</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-cyan-400 mb-2">24/7</div>
                <div className="text-gray-300">Availability</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 text-sm">
            Can't find what you're looking for? 
            <Link to="/contact" className="text-cyan-400 hover:text-cyan-300 ml-1">
              Contact our support team
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Sitemap;