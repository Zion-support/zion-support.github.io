import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Rocket, 
  Phone, 
  Mail, 
  MapPin, 
  Globe, 
  Linkedin, 
  Twitter, 
  Facebook, 
  Instagram, 
  Youtube,
  ArrowRight,
  CheckCircle,
  Shield,
  Zap,
  Brain,
  Cloud,
  Lock,
  Users,
  Star,
  Award,
  Clock,
  MessageCircle,
  HelpCircle,
  BookOpen,
  ShoppingCart,
  Building,
  Heart
} from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    hours: 'Monday - Friday: 9:00 AM - 6:00 PM EST',
    emergency: '24/7 Emergency Support Available'
  };

  const quickLinks = {
    services: [
      { name: 'AI & Machine Learning', href: '/services/ai-machine-learning' },
      { name: 'Cybersecurity', href: '/services/cybersecurity' },
      { name: 'Cloud & DevOps', href: '/services/cloud-devops' },
      { name: 'Quantum Computing', href: '/services/quantum-computing' },
      { name: 'IoT Solutions', href: '/services/iot-solutions' },
      { name: 'Blockchain', href: '/services/blockchain' }
    ],
    solutions: [
      { name: 'Digital Transformation', href: '/solutions/digital-transformation' },
      { name: 'Enterprise Solutions', href: '/solutions/enterprise' },
      { name: 'Small Business', href: '/solutions/small-business' },
      { name: 'Startup Support', href: '/solutions/startup' },
      { name: 'Government', href: '/solutions/government' },
      { name: 'Healthcare', href: '/solutions/healthcare' }
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Team', href: '/team' },
      { name: 'Careers', href: '/careers' },
      { name: 'Partners', href: '/partners' },
      { name: 'News & Updates', href: '/news' },
      { name: 'Case Studies', href: '/case-studies' }
    ],
    resources: [
      { name: 'Blog', href: '/blog' },
      { name: 'Documentation', href: '/docs' },
      { name: 'Help Center', href: '/help' },
      { name: 'API Reference', href: '/api' },
      { name: 'Tutorials', href: '/tutorials' },
      { name: 'Webinars', href: '/webinars' }
    ]
  };

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin, color: 'from-blue-500 to-blue-600' },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter, color: 'from-sky-500 to-sky-600' },
    { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook, color: 'from-blue-600 to-blue-700' },
    { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram, color: 'from-pink-500 to-pink-600' },
    { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: Youtube, color: 'from-red-500 to-red-600' }
  ];

  const certifications = [
    'ISO 27001 Certified',
    'SOC 2 Type II Compliant',
    'GDPR Compliant',
    'HIPAA Compliant',
    'NIST Framework',
    'CMMI Level 3'
  ];

  const awards = [
    'Best AI Solutions Provider 2024',
    'Top Cybersecurity Company 2024',
    'Innovation Excellence Award 2024',
    'Customer Choice Award 2024',
    'Fastest Growing Tech Company 2024'
  ];

  return (
    <footer className="futuristic-footer relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/20 to-gray-900/40"></div>
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,255,255,0.02)_25%,rgba(0,255,255,0.02)_75%,transparent_75%)] bg-[length:20px_20px]"></div>
      
      <div className="relative">
        {/* Main Footer Content */}
        <div className="futuristic-footer-content">
          {/* Company Info Section */}
          <div className="futuristic-footer-section">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center">
                <Rocket className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Zion Tech Group
                </h3>
                <p className="text-sm text-gray-400">Innovation • Technology • Future</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading the future of technology with cutting-edge AI solutions, quantum computing, 
              and innovative micro SAAS services. Transforming businesses through digital innovation.
            </p>

            {/* Contact Info */}
            <div className="space-y-4 mb-6">
              <motion.a
                href={`tel:${contactInfo.phone}`}
                whileHover={{ scale: 1.02 }}
                className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors"
              >
                <Phone className="w-5 h-5 text-cyan-400" />
                <span>{contactInfo.phone}</span>
              </motion.a>
              
              <motion.a
                href={`mailto:${contactInfo.email}`}
                whileHover={{ scale: 1.02 }}
                className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors"
              >
                <Mail className="w-5 h-5 text-cyan-400" />
                <span>{contactInfo.email}</span>
              </motion.a>
              
              <div className="flex items-start space-x-3 text-gray-300">
                <MapPin className="w-5 h-5 text-cyan-400 mt-0.5" />
                <div>
                  <p>{contactInfo.address}</p>
                  <p className="text-sm text-gray-400 mt-1">{contactInfo.hours}</p>
                  <p className="text-sm text-cyan-400 font-semibold mt-1">{contactInfo.emergency}</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-10 h-10 bg-gradient-to-r ${social.color} rounded-lg flex items-center justify-center text-white hover:shadow-lg transition-all duration-300`}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Services Section */}
          <div className="futuristic-footer-section">
            <h3>Our Services</h3>
            <div className="space-y-3">
              {quickLinks.services.map((link) => (
                <motion.div
                  key={link.name}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    to={link.href}
                    className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors group"
                  >
                    <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                    <span>{link.name}</span>
                  </Link>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-6 pt-6 border-t border-gray-700">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer"
              >
                <span className="font-semibold">View All Services</span>
                <ArrowRight className="w-4 h-4" />
              </motion.div>
            </div>
          </div>

          {/* Solutions Section */}
          <div className="futuristic-footer-section">
            <h3>Solutions</h3>
            <div className="space-y-3">
              {quickLinks.solutions.map((link) => (
                <motion.div
                  key={link.name}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    to={link.href}
                    className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors group"
                  >
                    <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                    <span>{link.name}</span>
                  </Link>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-6 pt-6 border-t border-gray-700">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer"
              >
                <span className="font-semibold">Explore Solutions</span>
                <ArrowRight className="w-4 h-4" />
              </motion.div>
            </div>
          </div>

          {/* Company Section */}
          <div className="futuristic-footer-section">
            <h3>Company</h3>
            <div className="space-y-3">
              {quickLinks.company.map((link) => (
                <motion.div
                  key={link.name}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    to={link.href}
                    className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors group"
                  >
                    <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                    <span>{link.name}</span>
                  </Link>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-6 pt-6 border-t border-gray-700">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer"
              >
                <span className="font-semibold">Learn More</span>
                <ArrowRight className="w-4 h-4" />
              </motion.div>
            </div>
          </div>

          {/* Resources Section */}
          <div className="futuristic-footer-section">
            <h3>Resources</h3>
            <div className="space-y-3">
              {quickLinks.resources.map((link) => (
                <motion.div
                  key={link.name}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    to={link.href}
                    className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors group"
                  >
                    <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                    <span>{link.name}</span>
                  </Link>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-6 pt-6 border-t border-gray-700">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer"
              >
                <span className="font-semibold">Browse Resources</span>
                <ArrowRight className="w-4 h-4" />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Certifications & Awards Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Certifications */}
            <div className="futuristic-card p-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Certifications & Compliance</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {certifications.map((cert) => (
                  <div key={cert} className="flex items-center space-x-2 text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-sm">{cert}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Awards */}
            <div className="futuristic-card p-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Awards & Recognition</h3>
              </div>
              <div className="space-y-3">
                {awards.map((award) => (
                  <div key={award} className="flex items-center space-x-2 text-gray-300">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm">{award}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="futuristic-card p-8 text-center">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">Stay Updated with Zion Tech</h3>
              <p className="text-gray-300 mb-6">
                Get the latest insights on AI, cybersecurity, and emerging technologies delivered to your inbox.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                />
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 font-semibold"
                >
                  Subscribe
                </motion.button>
              </div>
              
              <p className="text-xs text-gray-400 mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <span>&copy; {currentYear} Zion Tech Group. All rights reserved.</span>
                <Link to="/privacy" className="hover:text-cyan-400 transition-colors">Privacy Policy</Link>
                <Link to="/terms" className="hover:text-cyan-400 transition-colors">Terms of Service</Link>
                <Link to="/cookies" className="hover:text-cyan-400 transition-colors">Cookie Policy</Link>
              </div>
              
              <div className="flex items-center space-x-2 text-gray-400">
                <span className="text-sm">Made with</span>
                <Heart className="w-4 h-4 text-red-400 fill-current" />
                <span className="text-sm">by Zion Tech Group</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
