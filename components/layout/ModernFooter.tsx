import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Zap, Shield, Cpu, Database, Globe, Lock, Brain, Cloud, BarChart3, Users, Rocket, ShieldCheck, Globe2, Zap2, Brain2, Cloud2, Lock2 } from 'lucide-react';
<<<<<<< HEAD

const ModernFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const serviceCategories = [
    { 
      name: 'AI & Machine Learning', 
      icon: Brain, 
      href: '/services#ai',
      services: ['AI Automation', 'Machine Learning', 'Natural Language Processing', 'Computer Vision']
    },
    { 
      name: 'Cloud & DevOps', 
      icon: Cloud, 
      href: '/services#cloud',
      services: ['Cloud Migration', 'Kubernetes', 'DevOps Automation', 'Infrastructure as Code']
    },
    { 
      name: 'Cybersecurity', 
      icon: Shield, 
      href: '/services#cybersecurity',
      services: ['Zero Trust', 'SOC 2 Compliance', 'Threat Detection', 'Security Hardening']
    },
    { 
      name: 'Data & Analytics', 
      icon: BarChart3, 
      href: '/services#data',
      services: ['Data Warehousing', 'Business Intelligence', 'Data Quality', 'Real-time Analytics']
    },
    { 
      name: 'Enterprise Solutions', 
      icon: Database, 
      href: '/services#enterprise',
      services: ['ERP Systems', 'CRM Platforms', 'Workflow Automation', 'Integration Services']
    },
    { 
      name: 'Emerging Technologies', 
      icon: Rocket, 
      href: '/services#emerging',
      services: ['Quantum AI', 'Blockchain', 'IoT Platforms', 'Edge Computing']
    }
  ];

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/about#team' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Blog', href: '/blog' },
    { name: 'Careers', href: '/careers' },
    { name: 'Partners', href: '/partners' },
    { name: 'News', href: '/news' },
    { name: 'Events', href: '/events' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'Data Processing Agreement', href: '/dpa' },
    { name: 'Security', href: '/security' },
    { name: 'Compliance', href: '/compliance' }
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter },
    { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-blue-500/5 to-gray-900" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,212,255,0.1),transparent_50%)]" />
      
=======
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-purple-900/10 to-gray-900" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,212,255,0.05),transparent_50%)]" />
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
      <div className="relative z-10">
        <div className="container mx-auto px-4 py-16">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <Zap className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    Zion Tech Group
                  </h3>
                  <p className="text-sm text-gray-400">Innovation at the Speed of Light</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Empowering businesses with cutting-edge technology solutions. From AI and cloud computing to cybersecurity and quantum technologies.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
<<<<<<< HEAD
                    className="w-10 h-10 bg-gray-800 hover:bg-cyan-500/20 rounded-lg flex items-center justify-center text-gray-400 hover:text-cyan-400 transition-all duration-300"
                  >
=======
                    className="w-10 h-10 bg-gray-800 hover:bg-blue-600 border border-gray-700 hover:border-blue-500 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
                    whileHover = {
  { scale: 1.1,
  y: -2 
}}
                    whileTap={{ scale: 0.95 }}
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Our Services</h4>
              <div className="space-y-3">
                {serviceCategories.slice(0, 4).map((category) => (
<<<<<<< HEAD
=======
                  <li key={category.name}>
                    <Link
                      href={category.href}
                      className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors group"
                    >
                      <category.icon className="w-4 w-4 text-neon-blue group-hover:text-neon-purple transition-colors" />
                      <span>{category.name}</span>
                    </Link>
                  </li>
                ))}
                <li>
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
                  <Link
                    key={category.name}
                    to={category.href}
                    className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors group"
                  >
                    <category.icon className="w-4 h-4 text-cyan-500 group-hover:text-cyan-400" />
                    <span>{category.name}</span>
                  </Link>
                ))}
                <Link
                  to="/services"
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
                >
                  View All Services
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
              <div className="space-y-3">
                {quickLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="block text-gray-300 hover:text-cyan-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
<<<<<<< HEAD

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Contact Us</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-cyan-400" />
                  <a href={`tel:${contactInfo.phone}`} className="text-gray-300 hover:text-cyan-400 transition-colors">
                    {contactInfo.phone}
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-cyan-400" />
                  <a href={`mailto:${contactInfo.email}`} className="text-gray-300 hover:text-cyan-400 transition-colors">
                    {contactInfo.email}
                  </a>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-cyan-400 mt-1" />
                  <span className="text-gray-300 leading-relaxed">
                    {contactInfo.address}
                  </span>
=======
            {/* Legal & Compliance */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">Legal & Compliance</h4>
              <ul className="space-y-3">
                {legalLinks.slice(0, 4).map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-neon-blue transition-colors"
                      {link.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/compliance"
                    className="text-neon-blue hover:text-neon-purple transition-colors font-medium"
                  >
                    View All Policies →
                  </Link>
                </li>
              </ul>
            </div>
            {/* Contact Information */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">Contact Us</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-400">Phone</p>
                    <a 
                      href={`tel:${contactInfo.phone}`}
                      className="text-neon-blue hover:text-neon-purple transition-colors font-medium"
                    >
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-400">Email</p>
                    <a 
                      href={`mailto:${contactInfo.email}`}
                      className="text-neon-blue hover:text-neon-purple transition-colors font-medium"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-400">Address</p>
                    <p className="text-gray-300">
                      {contactInfo.address}
                    </p>
                  </div>
                </div>
                <div className="pt-2">
                  <Link
                    href="/contact"
                    className="inline-flex items-center px-4 py-2 bg-neon-blue/10 border border-neon-blue/20 text-neon-blue hover:bg-neon-blue/20 rounded-lg transition-colors text-sm"
                  >
                    Get in Touch
                  </Link>
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
                </div>
              </div>
            </div>
          </div>
<<<<<<< HEAD

          {/* Bottom Section */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
              <div className="text-gray-400 text-sm">
=======
          {/* Newsletter Signup */}
          <div className="border-t border-gray-700 pt-8 mb-8">
            <div className="max-w-2xl mx-auto text-center">
              <h4 className="text-xl font-semibold mb-4 text-white">Stay Updated</h4>
              <p className="text-gray-300 mb-6">
                Get the latest insights on technology trends, AI developments, and business solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                />
                <motion.button
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300 shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </div>
          {/* Bottom Bar */}
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
                © {currentYear} Zion Tech Group. All rights reserved.
              </div>
<<<<<<< HEAD
              <div className="flex space-x-6">
                {legalLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ModernFooter;
=======
            </div>;
          </div>;
        </div>;
      </div>;
    </footer>;
  );
};
export default ModernFooter;}
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
