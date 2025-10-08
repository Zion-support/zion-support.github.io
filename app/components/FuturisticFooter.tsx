import React from 'react';
import { Phone, Mail, MapPin, Brain, Zap, Shield, Star, ArrowRight, ExternalLink } from 'lucide-react';

const FuturisticFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const serviceCategories = [
    {
      title: 'AI Services',
      services: [
        { name: 'Machine Learning', href: '/ai-services#machine-learning' },
        { name: 'Natural Language Processing', href: '/ai-services#nlp' },
        { name: 'Computer Vision', href: '/ai-services#computer-vision' },
        { name: 'Predictive Analytics', href: '/ai-services#predictive-analytics' },
        { name: 'AI Chatbots', href: '/ai-services#chatbots' }
      ]
    },
    {
      title: 'IT Services',
      services: [
        { name: 'Cloud Infrastructure', href: '/it-services#cloud' },
        { name: 'Cybersecurity', href: '/it-services#cybersecurity' },
        { name: 'DevOps & CI/CD', href: '/it-services#devops' },
        { name: 'Database Management', href: '/it-services#database' },
        { name: 'Network Solutions', href: '/it-services#networking' }
      ]
    },
    {
      title: 'Micro SAAS',
      services: [
        { name: 'AI Code Review', href: '/micro-saas#code-review' },
        { name: 'Document Intelligence', href: '/micro-saas#document-intelligence' },
        { name: 'API Testing', href: '/micro-saas#api-testing' },
        { name: 'Analytics Dashboard', href: '/micro-saas#analytics' },
        { name: 'Email Marketing', href: '/micro-saas#email-marketing' }
      ]
    },
    {
      title: 'Advanced Solutions',
      services: [
        { name: 'Quantum Computing', href: '/quantum-computing' },
        { name: 'Autonomous Systems', href: '/autonomous-systems' },
        { name: 'Blockchain & Web3', href: '/blockchain-web3' },
        { name: 'IoT & Edge Computing', href: '/iot-edge-computing' },
        { name: 'Business Intelligence', href: '/business-intelligence' }
      ]
    }
  ];

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/team' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Blog', href: '/blog' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Contact', href: '/contact' },
    { name: 'Support', href: '/support' }
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: '💼' },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: '🐦' },
    { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: '💻' },
    { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: '📺' }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
        <div className="absolute inset-0 cyber-grid"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center neon-glow-blue">
                  <Brain className="w-7 h-7 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              </div>
              <div>
                <h3 className="text-2xl font-bold gradient-text">Zion Tech Group</h3>
                <p className="text-sm text-gray-400">Advanced AI Solutions</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading provider of AI-powered enterprise solutions, automation, and digital transformation services. 
              Transforming businesses with cutting-edge technology and innovative approaches.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-cyan-400" />
                <a href="tel:+13024640950" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-cyan-400" />
                <a href="mailto:kleber@ziontechgroup.com" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-cyan-400 mt-1" />
                <span className="text-gray-300 text-sm">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </span>
              </div>
            </div>
          </div>

          {/* Service Categories */}
          {serviceCategories.map((category, index) => (
            <div key={index} className="lg:col-span-1">
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                {category.title}
              </h4>
              <ul className="space-y-2">
                {category.services.map((service, serviceIndex) => (
                  <li key={serviceIndex}>
                    <a
                      href={service.href}
                      className="text-gray-300 hover:text-cyan-400 transition-colors text-sm flex items-center group"
                    >
                      <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Quick Links */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {quickLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-gray-300 hover:text-cyan-400 transition-colors text-sm py-2 hover:bg-white/5 rounded-lg px-3 text-center"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        {/* Social Links & Newsletter */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            {/* Social Links */}
            <div className="flex items-center space-x-6">
              <span className="text-gray-400 text-sm">Follow us:</span>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gradient-to-r from-gray-700 to-gray-600 rounded-lg flex items-center justify-center hover:from-cyan-500 hover:to-purple-600 transition-all duration-300 hover:scale-110 neon-glow-blue group"
                  title={social.name}
                >
                  <span className="text-lg group-hover:scale-110 transition-transform duration-300">
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>

            {/* Newsletter Signup */}
            <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-4">
              <span className="text-gray-400 text-sm">Stay updated:</span>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 w-64"
                />
                <button className="cyber-button text-sm px-6">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-6 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Zion Tech Group. All rights reserved. | 
              <a href="/privacy" className="hover:text-cyan-400 transition-colors ml-1">Privacy Policy</a> | 
              <a href="/terms" className="hover:text-cyan-400 transition-colors ml-1">Terms of Service</a>
            </div>
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>24/7 Support Available</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-green-400" />
                <span>Enterprise Security</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-10 right-10 w-20 h-20 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-xl floating"></div>
      <div className="absolute bottom-10 left-10 w-32 h-32 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl floating" style={{ animationDelay: '2s' }}></div>
    </footer>
  );
};

export default FuturisticFooter;
