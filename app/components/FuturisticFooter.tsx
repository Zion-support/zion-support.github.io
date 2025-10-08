import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Award, Shield, Zap, ExternalLink, Github, Twitter, Linkedin } from 'lucide-react';

const FuturisticFooter: React.FC = () => {
  const services = [
    { name: 'Micro SAAS Solutions', link: '/micro-saas', icon: '💻' },
    { name: 'AI Services', link: '/ai-services', icon: '🤖' },
    { name: 'IT Services', link: '/it-services', icon: '⚙️' },
    { name: 'AI Marketing', link: '/ai-marketing', icon: '📢' },
    { name: 'AI Automation', link: '/ai-automation', icon: '🔄' },
    { name: 'AI Healthcare', link: '/ai-healthcare', icon: '🏥' },
    { name: 'AI Fintech', link: '/ai-fintech', icon: '💰' },
    { name: 'Quantum Computing', link: '/quantum-computing', icon: '⚛️' },
    { name: 'Autonomous Systems', link: '/autonomous-systems', icon: '🤖' },
    { name: 'Business Intelligence', link: '/business-intelligence', icon: '📊' },
    { name: 'Blockchain & Web3', link: '/blockchain-web3', icon: '🔗' },
    { name: 'IoT & Edge Computing', link: '/iot-edge-computing', icon: '📱' },
    { name: 'Cybersecurity', link: '/cybersecurity', icon: '🛡️' },
    { name: 'Robotics', link: '/robotics', icon: '🤖' }
  ];

  const quickLinks = [
    { name: 'Home', link: '/' },
    { name: 'About Us', link: '/about' },
    { name: 'All Services', link: '/services' },
    { name: 'Case Studies', link: '/case-studies' },
    { name: 'Enterprise Solutions', link: '/enterprise' },
    { name: 'Our Team', link: '/team' },
    { name: 'Contact Us', link: '/contact' },
    { name: 'Blog & Insights', link: '/blog' },
    { name: 'Technical Guides', link: '/guides' },
    { name: 'Privacy Policy', link: '/privacy' },
    { name: 'Terms of Service', link: '/terms' }
  ];

  const resources = [
    { name: 'Documentation', link: 'https://docs.ziontechgroup.com', external: true },
    { name: 'API Reference', link: 'https://api.ziontechgroup.com', external: true },
    { name: 'GitHub Repository', link: 'https://github.com/ziontechgroup', external: true },
    { name: 'Status Page', link: 'https://status.ziontechgroup.com', external: true },
    { name: 'Support Center', link: 'https://support.ziontechgroup.com', external: true },
    { name: 'Community Forum', link: 'https://community.ziontechgroup.com', external: true }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 cyber-grid opacity-20"></div>
      <div className="absolute inset-0 matrix-bg"></div>
      
      {/* Main Footer Content */}
      <div className="relative z-10">
        {/* Top Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center neon-glow">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg blur opacity-30"></div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold neon-text">Zion Tech Group</h3>
                  <p className="text-cyan-400 text-sm">Advanced AI & IT Solutions</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                Leading provider of enterprise AI solutions, quantum computing, autonomous systems, 
                and comprehensive IT services. Transforming businesses through cutting-edge technology.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors">
                  <Phone className="w-5 h-5 mr-3 text-cyan-400" />
                  <a href="tel:+13024640950">+1 302 464 0950</a>
                </div>
                <div className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors">
                  <Mail className="w-5 h-5 mr-3 text-cyan-400" />
                  <a href="mailto:kleber@ziontechgroup.com">kleber@ziontechgroup.com</a>
                </div>
                <div className="flex items-center text-gray-300">
                  <MapPin className="w-5 h-5 mr-3 text-cyan-400" />
                  <span>364 E Main St STE 1008, Middletown DE 19709</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Clock className="w-5 h-5 mr-3 text-cyan-400" />
                  <span>24/7 Support Available</span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold text-cyan-400 mb-6 flex items-center">
                <Award className="w-5 h-5 mr-2" />
                Our Services
              </h4>
              <div className="grid grid-cols-1 gap-3">
                {services.slice(0, 7).map((service) => (
                  <Link
                    key={service.name}
                    to={service.link}
                    className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors group"
                  >
                    <span className="text-lg mr-3 group-hover:scale-110 transition-transform">
                      {service.icon}
                    </span>
                    <span className="text-sm">{service.name}</span>
                  </Link>
                ))}
                <Link
                  to="/services"
                  className="text-cyan-400 hover:text-white transition-colors text-sm font-medium flex items-center mt-2"
                >
                  View All Services
                  <ExternalLink className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-cyan-400 mb-6 flex items-center">
                <Zap className="w-5 h-5 mr-2" />
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.slice(0, 7).map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.link}
                      className="text-gray-300 hover:text-cyan-400 transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    to="/services"
                    className="text-cyan-400 hover:text-white transition-colors text-sm font-medium"
                  >
                    View All Services →
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources & Social */}
            <div>
              <h4 className="text-lg font-semibold text-cyan-400 mb-6 flex items-center">
                <Shield className="w-5 h-5 mr-2" />
                Resources
              </h4>
              <ul className="space-y-3 mb-6">
                {resources.slice(0, 6).map((resource) => (
                  <li key={resource.name}>
                    <a
                      href={resource.link}
                      target={resource.external ? "_blank" : "_self"}
                      rel={resource.external ? "noopener noreferrer" : ""}
                      className="text-gray-300 hover:text-cyan-400 transition-colors text-sm flex items-center"
                    >
                      {resource.name}
                      {resource.external && <ExternalLink className="w-3 h-3 ml-1" />}
                    </a>
                  </li>
                ))}
              </ul>
              
              {/* Social Links */}
              <div>
                <h5 className="text-cyan-400 font-semibold mb-4">Follow Us</h5>
                <div className="flex space-x-4">
                  <a
                    href="https://linkedin.com/company/ziontechgroup"
                    className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </a>
                  <a
                    href="https://twitter.com/ziontechgroup"
                    className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group"
                    aria-label="Twitter"
                  >
                    <Twitter className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </a>
                  <a
                    href="https://github.com/ziontechgroup"
                    className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group"
                    aria-label="GitHub"
                  >
                    <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-cyan-400/20 py-8">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Stay Updated with Our Latest Innovations
              </h3>
              <p className="text-gray-300 mb-6">
                Get exclusive insights, updates, and early access to our newest AI and IT solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-slate-800 border border-cyan-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                />
                <button className="neon-button px-6 py-3">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-cyan-400/20 py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row justify-between items-center">
              <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-8 mb-4 lg:mb-0">
                <p className="text-gray-300 text-sm">
                  &copy; 2024 Zion Tech Group. All rights reserved.
                </p>
                <div className="flex space-x-6">
                  <Link to="/privacy" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">
                    Privacy Policy
                  </Link>
                  <Link to="/terms" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">
                    Terms of Service
                  </Link>
                  <Link to="/sitemap" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">
                    Sitemap
                  </Link>
                </div>
              </div>
              
              {/* Trust Badges */}
              <div className="flex items-center space-x-6">
                <div className="flex items-center text-green-400">
                  <Shield className="w-4 h-4 mr-2" />
                  <span className="text-sm">SOC 2 Compliant</span>
                </div>
                <div className="flex items-center text-blue-400">
                  <Award className="w-4 h-4 mr-2" />
                  <span className="text-sm">ISO 27001</span>
                </div>
                <div className="flex items-center text-yellow-400">
                  <Zap className="w-4 h-4 mr-2" />
                  <span className="text-sm">99.9% Uptime</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FuturisticFooter;