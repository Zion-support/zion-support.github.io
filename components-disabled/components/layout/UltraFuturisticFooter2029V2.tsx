import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
} from 'lucide-react';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const serviceCategories = [
  {
    title: 'AI & Consciousness',
    icon: Brain,
    color: 'from-violet-600 via-purple-600 to-indigo-600',
    services: [
    ]
  },
  {
    title: 'Quantum Technology',
    icon: Globe,
    color: 'from-indigo-600 via-blue-600 to-cyan-600',
    services: [
    ]
  },
  {
    title: 'Space & Metaverse',
    icon: Rocket,
    color: 'from-teal-600 via-emerald-600 to-green-600',
    services: [
    ]
  },
  {
    title: 'Enterprise IT',
    icon: Cpu,
    color: 'from-blue-600 via-cyan-600 to-teal-600',
    services: [
    ]
  }
];

const mainNavigation = [
];

const footerSections = [
  {
    title: 'Services',
    links: [
    ]
  },
  {
    title: 'Solutions',
    links: [
    ]
  },
  {
    title: 'Industries',
    links: [
    ]
  },
  {
    title: 'Resources',
    links: [
    ]
  }
];

export default function UltraFuturisticFooter2029V2() {
  return (
    <footer className="relative bg-black/90 backdrop-blur-xl border-t border-cyan-500/20">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 xl:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Link href="/" className="flex items-center space-x-3 mb-6 group">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Rocket className="w-7 h-7 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
                </div>
                <div>
                  <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Zion Tech Group
                  </h3>
                  <p className="text-sm text-gray-400">Future Technology Solutions</p>
                </div>
              </Link>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                Transforming businesses through next-generation technology.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm">{contactInfo.mobile}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm">{contactInfo.email}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm">{contactInfo.address}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Globe className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm">{contactInfo.website}</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Service Categories */}
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-white mb-6 flex items-center">
                <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mr-3" />
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm flex items-center group"
                    >
                      <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Service Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 pt-12 border-t border-gray-800"
        >
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Featured 2029 Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                viewport={{ once: true }}
                className="group"
              >
                <div className={`p-4 rounded-xl bg-gradient-to-br ${category.color} bg-opacity-10 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300`}>
                  <div className="flex items-center space-x-3 mb-3">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color}`}>
                      <category.icon className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="font-semibold text-white text-sm">{category.title}</h4>
                  </div>
                  <ul className="space-y-2">
                      <li key={service.name}>
                        <Link
                          href={service.href}
                          className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-xs block"
                        >
                          {service.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <motion.div
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-gray-400 text-sm"
            >
              © 2025 Zion Tech Group. All rights reserved. | 
              <Link href="/privacy" className="hover:text-cyan-400 transition-colors duration-300 ml-2">Privacy Policy</Link> | 
              <Link href="/terms" className="hover:text-cyan-400 transition-colors duration-300 ml-2">Terms of Service</Link>
            </motion.div>

            {/* Social Links */}
            <motion.div
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center space-x-4"
            >
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-lg bg-gray-800/50 hover:bg-cyan-500/20 text-gray-400 ${social.color} transition-all duration-300 hover:scale-110`}
                >
                  <social.icon className="w-4 h-4" />
                </Link>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Newsletter Signup */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border-t border-cyan-500/20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Ahead with Future Tech
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}