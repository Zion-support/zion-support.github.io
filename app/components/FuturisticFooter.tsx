import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Award, Shield, Zap, Brain, Cloud, Lock, ArrowRight, Github, Twitter, Linkedin } from 'lucide-react';

const FuturisticFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: 'AI Services', link: '/ai-services', icon: <Brain className="w-4 h-4" /> },
    { name: 'IT Services', link: '/it-services', icon: <Cloud className="w-4 h-4" /> },
    { name: 'Micro SAAS', link: '/micro-saas', icon: <Zap className="w-4 h-4" /> },
    { name: 'Quantum Computing', link: '/quantum-computing', icon: <Award className="w-4 h-4" /> },
    { name: 'Autonomous Systems', link: '/autonomous-systems', icon: <Shield className="w-4 h-4" /> },
    { name: 'Cybersecurity', link: '/cybersecurity', icon: <Lock className="w-4 h-4" /> }
  ];

  const quickLinks = [
    { name: 'Home', link: '/' },
    { name: 'About Us', link: '/about' },
    { name: 'All Services', link: '/services' },
    { name: 'Case Studies', link: '/case-studies' },
    { name: 'Enterprise Solutions', link: '/enterprise' },
    { name: 'Our Team', link: '/team' },
    { name: 'Contact Us', link: '/contact' }
  ];

  const resources = [
    { name: 'Blog & Insights', link: '/blog' },
    { name: 'Technical Guides', link: '/guides' },
    { name: 'Case Studies', link: '/case-studies' },
    { name: 'Documentation', link: '/docs' },
    { name: 'API Reference', link: '/api' },
    { name: 'Sitemap', link: '/sitemap' }
  ];

  const legal = [
    { name: 'Privacy Policy', link: '/privacy' },
    { name: 'Terms of Service', link: '/terms' },
    { name: 'Cookie Policy', link: '/cookies' },
    { name: 'GDPR Compliance', link: '/gdpr' }
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-6 md:grid-cols-3 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center mb-6">
                <div className="text-4xl mr-3 animate-pulse">⚡</div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Zion Tech Group
                  </h3>
                  <p className="text-sm text-cyan-400 font-medium">Advanced AI Solutions</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
                Leading provider of enterprise AI solutions, quantum computing, autonomous systems, 
                and comprehensive IT services. Transforming businesses through cutting-edge technology 
                and innovative micro SAAS solutions.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex items-center group">
                  <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center mr-3 group-hover:bg-cyan-500/30 transition-colors">
                    <Phone className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <a href="tel:+13024640950" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium">
                      +1 302 464 0950
                    </a>
                    <p className="text-xs text-gray-500">24/7 Support Available</p>
                  </div>
                </div>
                
                <div className="flex items-center group">
                  <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center mr-3 group-hover:bg-purple-500/30 transition-colors">
                    <Mail className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <a href="mailto:kleber@ziontechgroup.com" className="text-gray-300 hover:text-purple-400 transition-colors font-medium">
                      kleber@ziontechgroup.com
                    </a>
                    <p className="text-xs text-gray-500">Business Inquiries</p>
                  </div>
                </div>
                
                <div className="flex items-center group">
                  <div className="w-10 h-10 bg-pink-500/20 rounded-lg flex items-center justify-center mr-3 group-hover:bg-pink-500/30 transition-colors">
                    <MapPin className="w-5 h-5 text-pink-400" />
                  </div>
                  <div>
                    <span className="text-gray-300 font-medium">364 E Main St STE 1008</span>
                    <p className="text-xs text-gray-500">Middletown, DE 19709</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-bold mb-6 text-cyan-400 flex items-center">
                <Zap className="w-5 h-5 mr-2" />
                Our Services
              </h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <Link 
                      to={service.link}
                      className="flex items-center text-gray-300 hover:text-cyan-400 transition-all duration-300 group"
                    >
                      <span className="mr-3 group-hover:scale-110 transition-transform">
                        {service.icon}
                      </span>
                      <span className="group-hover:translate-x-1 transition-transform">
                        {service.name}
                      </span>
                      <ArrowRight className="w-3 h-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold mb-6 text-purple-400 flex items-center">
                <Shield className="w-5 h-5 mr-2" />
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link 
                      to={link.link}
                      className="text-gray-300 hover:text-purple-400 transition-all duration-300 group flex items-center"
                    >
                      <span className="group-hover:translate-x-1 transition-transform">
                        {link.name}
                      </span>
                      <ArrowRight className="w-3 h-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-lg font-bold mb-6 text-pink-400 flex items-center">
                <Brain className="w-5 h-5 mr-2" />
                Resources
              </h4>
              <ul className="space-y-3">
                {resources.map((resource, index) => (
                  <li key={index}>
                    <Link 
                      to={resource.link}
                      className="text-gray-300 hover:text-pink-400 transition-all duration-300 group flex items-center"
                    >
                      <span className="group-hover:translate-x-1 transition-transform">
                        {resource.name}
                      </span>
                      <ArrowRight className="w-3 h-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-lg font-bold mb-6 text-green-400 flex items-center">
                <Lock className="w-5 h-5 mr-2" />
                Legal
              </h4>
              <ul className="space-y-3">
                {legal.map((item, index) => (
                  <li key={index}>
                    <Link 
                      to={item.link}
                      className="text-gray-300 hover:text-green-400 transition-all duration-300 group flex items-center"
                    >
                      <span className="group-hover:translate-x-1 transition-transform">
                        {item.name}
                      </span>
                      <ArrowRight className="w-3 h-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="relative z-10 border-t border-gray-700 py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Stay Updated with Latest AI Innovations
            </h3>
            <p className="text-gray-300 mb-6">
              Get exclusive insights, case studies, and technology updates delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 font-medium shadow-lg hover:shadow-cyan-500/25 hover:scale-105 transform">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="relative z-10 border-t border-gray-700 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-8 mb-4 lg:mb-0">
              <p className="text-gray-300 text-sm">
                &copy; {currentYear} Zion Tech Group. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <Link to="/privacy" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="text-gray-300 hover:text-purple-400 transition-colors text-sm">
                  Terms of Service
                </Link>
                <Link to="/sitemap" className="text-gray-300 hover:text-pink-400 transition-colors text-sm">
                  Sitemap
                </Link>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a 
                href="https://linkedin.com/company/ziontechgroup" 
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/20 transition-all duration-300 group"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="https://twitter.com/ziontechgroup" 
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-300 hover:text-purple-400 hover:bg-purple-500/20 transition-all duration-300 group"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="https://github.com/ziontechgroup" 
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-300 hover:text-pink-400 hover:bg-pink-500/20 transition-all duration-300 group"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>
    </footer>
  );
};

export default FuturisticFooter;