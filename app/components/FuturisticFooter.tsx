import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Award, Shield, Zap, Brain, Cpu, Database, Cloud, Globe, Github, Twitter, Linkedin } from 'lucide-react';

const FuturisticFooter: React.FC = () => {
  const services = [
    { name: 'AI Services', href: '/ai-services', icon: <Brain className="w-4 h-4" /> },
    { name: 'IT Services', href: '/it-services', icon: <Cpu className="w-4 h-4" /> },
    { name: 'Micro SAAS', href: '/micro-saas', icon: <Zap className="w-4 h-4" /> },
    { name: 'Cybersecurity', href: '/cybersecurity', icon: <Shield className="w-4 h-4" /> },
    { name: 'Cloud Services', href: '/cloud-services', icon: <Cloud className="w-4 h-4" /> },
    { name: 'Data Analytics', href: '/data-analytics', icon: <Database className="w-4 h-4" /> }
  ];

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'All Services', href: '/services' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Enterprise Solutions', href: '/enterprise' },
    { name: 'Our Team', href: '/team' },
    { name: 'Contact Us', href: '/contact' }
  ];

  const resources = [
    { name: 'Blog & Insights', href: '/blog' },
    { name: 'Technical Guides', href: '/guides' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'GitHub', href: 'https://github.com/ziontechgroup', external: true },
    { name: 'Documentation', href: 'https://docs.ziontechgroup.com', external: true }
  ];

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-cyan-600/10 to-pink-600/10"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 md:grid-cols-3 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center mb-6">
                <span className="text-4xl mr-3 float">⚡</span>
                <h3 className="text-3xl font-bold holographic">Zion Tech Group</h3>
              </div>
              <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
                Leading provider of enterprise AI solutions, quantum computing, autonomous systems, 
                and comprehensive IT services. Transforming businesses through cutting-edge technology 
                and innovative solutions.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex items-center group">
                  <Phone className="w-5 h-5 mr-3 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                  <a 
                    href="tel:+13024640950" 
                    className="text-gray-300 hover:text-cyan-300 transition-colors font-medium"
                  >
                    +1 302 464 0950
                  </a>
                </div>
                <div className="flex items-center group">
                  <Mail className="w-5 h-5 mr-3 text-purple-400 group-hover:text-purple-300 transition-colors" />
                  <a 
                    href="mailto:kleber@ziontechgroup.com" 
                    className="text-gray-300 hover:text-purple-300 transition-colors font-medium"
                  >
                    kleber@ziontechgroup.com
                  </a>
                </div>
                <div className="flex items-center group">
                  <MapPin className="w-5 h-5 mr-3 text-green-400 group-hover:text-green-300 transition-colors" />
                  <span className="text-gray-300 font-medium">364 E Main St STE 1008, Middletown DE 19709</span>
                </div>
                <div className="flex items-center group">
                  <Clock className="w-5 h-5 mr-3 text-orange-400 group-hover:text-orange-300 transition-colors" />
                  <span className="text-gray-300 font-medium">24/7 Support Available</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4 text-cyan-400">Follow Us</h4>
                <div className="flex space-x-4">
                  <a 
                    href="https://linkedin.com/company/ziontechgroup" 
                    className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300 group"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5 text-white group-hover:text-cyan-300 transition-colors" />
                  </a>
                  <a 
                    href="https://twitter.com/ziontechgroup" 
                    className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300 group"
                    aria-label="Twitter"
                  >
                    <Twitter className="w-5 h-5 text-white group-hover:text-cyan-300 transition-colors" />
                  </a>
                  <a 
                    href="https://github.com/ziontechgroup" 
                    className="w-10 h-10 bg-gradient-to-r from-gray-700 to-gray-800 rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300 group"
                    aria-label="GitHub"
                  >
                    <Github className="w-5 h-5 text-white group-hover:text-cyan-300 transition-colors" />
                  </a>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-cyan-400 flex items-center">
                <Zap className="w-5 h-5 mr-2" />
                Our Services
              </h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <Link 
                      to={service.href} 
                      className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center group"
                    >
                      <span className="mr-2 group-hover:scale-110 transition-transform duration-300">
                        {service.icon}
                      </span>
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-purple-400 flex items-center">
                <Globe className="w-5 h-5 mr-2" />
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link 
                      to={link.href} 
                      className="text-gray-300 hover:text-purple-400 transition-colors group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-300 inline-block">
                        {link.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-green-400 flex items-center">
                <Award className="w-5 h-5 mr-2" />
                Resources
              </h4>
              <ul className="space-y-3">
                {resources.map((resource, index) => (
                  <li key={index}>
                    {resource.external ? (
                      <a 
                        href={resource.href} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-green-400 transition-colors group flex items-center"
                      >
                        <span className="group-hover:translate-x-1 transition-transform duration-300 inline-block">
                          {resource.name}
                        </span>
                        <span className="ml-1 text-xs">↗</span>
                      </a>
                    ) : (
                      <Link 
                        to={resource.href} 
                        className="text-gray-300 hover:text-green-400 transition-colors group"
                      >
                        <span className="group-hover:translate-x-1 transition-transform duration-300 inline-block">
                          {resource.name}
                        </span>
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="relative border-t border-purple-500/30 py-8">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent"></div>
        <div className="container mx-auto px-4 relative">
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
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <div className="flex items-center">
                <Shield className="w-4 h-4 mr-1 text-green-400" />
                <span>SSL Secured</span>
              </div>
              <div className="flex items-center">
                <Award className="w-4 h-4 mr-1 text-yellow-400" />
                <span>Certified</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1 text-blue-400" />
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FuturisticFooter;