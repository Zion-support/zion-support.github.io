import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Github, 
  Zap, 
  Shield, 
  Cpu, 
  Database, 
  Globe, 
  Lock, 
  Brain, 
  Cloud, 
  BarChart3, 
  Users, 
  Rocket, 
  ShieldCheck, 
  Globe2, 
  Zap2, 
  Brain2, 
  Cloud2, 
  Lock2,
  Facebook,
  Instagram,
  Youtube,
  ArrowUp,
  ChevronUp
} from 'lucide-react';

const AppFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const serviceCategories = [
    { 
      name: 'AI & Machine Learning', 
      icon: Brain, 
      href: '/services#ai',
      services: ['AI Automation', 'Machine Learning', 'Natural Language Processing', 'Computer Vision', 'AI Enterprise Platform', 'AI Data Analytics']
    },
    { 
      name: 'Cloud & DevOps', 
      icon: Cloud, 
      href: '/services#cloud',
      services: ['Cloud Migration', 'Kubernetes', 'DevOps Automation', 'Infrastructure as Code', 'IT Infrastructure Management']
    },
    { 
      name: 'Cybersecurity', 
      icon: Shield, 
      href: '/services#cybersecurity',
      services: ['Zero Trust', 'SOC 2 Compliance', 'Threat Detection', 'Security Hardening', 'AI Cybersecurity Platform']
    },
    { 
      name: 'Data & Analytics', 
      icon: BarChart3, 
      href: '/services#data',
      services: ['Data Warehousing', 'Business Intelligence', 'Data Quality', 'Real-time Analytics', 'AI-Powered Insights']
    },
    { 
      name: 'Enterprise Solutions', 
      icon: Database, 
      href: '/services#enterprise',
      services: ['ERP Systems', 'CRM Platforms', 'Workflow Automation', 'Integration Services', 'AI Enterprise Automation']
    },
    { 
      name: 'Micro SaaS Solutions', 
      icon: Zap, 
      href: '/services#micro-saas',
      services: ['Sales & Marketing', 'Cloud & DevOps', 'Compliance & Security', 'Analytics & BI', 'Customer Support', 'Project Management']
    },
    { 
      name: 'Emerging Technologies', 
      icon: Rocket, 
      href: '/services#emerging',
      services: ['Quantum AI', 'Blockchain', 'IoT Platforms', 'Edge Computing', 'AI Quantum Hybrid Platform', 'Space Tech']
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
    { name: 'Events', href: '/events' },
    { name: 'Leadership', href: '/leadership' },
    { name: 'Training', href: '/training' },
    { name: 'Research & Development', href: '/research-development' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'Data Processing Agreement', href: '/dpa' },
    { name: 'Security', href: '/security' },
    { name: 'Compliance', href: '/compliance' },
    { name: 'Accessibility', href: '/accessibility' }
  ];

  const socialLinks = [
    { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter },
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin },
    { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram },
    { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: Youtube },
    { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008, Middletown DE 19709',
    website: 'https://ziontechgroup.com',
    support: '24/7 Support Available'
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-blue-500/5 to-gray-900" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,212,255,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.1),transparent_50%)]" />
      
      <div className="relative z-10">
        <div className="container mx-auto px-4 py-16">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <motion.div 
                className="flex items-center space-x-3 mb-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <Zap className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    Zion Tech Group
                  </h3>
                  <p className="text-sm text-cyan-400 font-medium">Innovation Group</p>
                </div>
              </motion.div>
              
              <motion.p 
                className="text-gray-300 mb-6 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Leading provider of innovative AI, IT, and Micro SaaS solutions. 
                Transforming businesses through cutting-edge technology and expert consulting.
              </motion.p>

              {/* Contact Information */}
              <motion.div 
                className="space-y-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors">
                  <Phone className="w-4 h-4" />
                  <a href={`tel:${contactInfo.phone}`} className="text-sm">{contactInfo.phone}</a>
                </div>
                <div className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors">
                  <Mail className="w-4 h-4" />
                  <a href={`mailto:${contactInfo.email}`} className="text-sm">{contactInfo.email}</a>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{contactInfo.address}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Globe className="w-4 h-4" />
                  <a href={contactInfo.website} className="text-sm hover:text-cyan-400 transition-colors">{contactInfo.website}</a>
                </div>
              </motion.div>
            </div>

            {/* Service Categories */}
            <div className="lg:col-span-2">
              <motion.h4 
                className="text-lg font-semibold mb-6 text-cyan-400"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Our Services
              </motion.h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {serviceCategories.map((category, index) => (
                  <motion.div 
                    key={category.name}
                    className="group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                  >
                    <Link 
                      to={category.href}
                      className="flex items-center space-x-2 mb-3 group-hover:text-cyan-400 transition-colors"
                    >
                      <category.icon className="w-5 h-5" />
                      <span className="font-medium">{category.name}</span>
                    </Link>
                    <ul className="space-y-1">
                      {category.services.slice(0, 4).map((service, serviceIndex) => (
                        <li key={serviceIndex}>
                          <Link 
                            to={category.href}
                            className="text-sm text-gray-400 hover:text-cyan-400 transition-colors block py-1"
                          >
                            {service}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Quick Links & Social */}
            <div className="lg:col-span-1">
              <motion.div 
                className="mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h4 className="text-lg font-semibold mb-4 text-cyan-400">Quick Links</h4>
                <ul className="space-y-2">
                  {quickLinks.slice(0, 6).map((link, index) => (
                    <li key={link.name}>
                      <Link 
                        to={link.href}
                        className="text-sm text-gray-400 hover:text-cyan-400 transition-colors block py-1"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div 
                className="mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h4 className="text-lg font-semibold mb-4 text-cyan-400">Legal</h4>
                <ul className="space-y-2">
                  {legalLinks.slice(0, 4).map((link, index) => (
                    <li key={link.name}>
                      <Link 
                        to={link.href}
                        className="text-sm text-gray-400 hover:text-cyan-400 transition-colors block py-1"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Social Media */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <h4 className="text-lg font-semibold mb-4 text-cyan-400">Follow Us</h4>
                <div className="flex space-x-3">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-800 hover:bg-cyan-600 rounded-lg flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300 hover:scale-110"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Bottom Section */}
          <motion.div 
            className="border-t border-gray-800 pt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-400 text-sm mb-4 md:mb-0">
                <p>&copy; {currentYear} Zion Tech Group. All rights reserved.</p>
                <p className="mt-1">Empowering innovation through technology.</p>
              </div>
              
              <div className="flex items-center space-x-4">
                <span className="text-gray-400 text-sm">{contactInfo.support}</span>
                <button
                  onClick={scrollToTop}
                  className="w-10 h-10 bg-cyan-600 hover:bg-cyan-700 rounded-lg flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
                  aria-label="Scroll to top"
                >
                  <ChevronUp className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;