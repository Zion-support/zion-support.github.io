import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Award, Shield, Zap, ArrowRight, ExternalLink, Brain, Facebook, Twitter, Linkedin, Instagram, Github, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'AI Solutions', href: '/ai-services' },
    { name: 'IT Services', href: '/it-services' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  const microSAASServices = [
    { name: 'AI Project Manager', href: '/ai-project-manager' },
    { name: 'AI Social Media Manager', href: '/ai-social-media-manager' },
    { name: 'AI Analytics Dashboard', href: '/ai-analytics' },
    { name: 'AI Email Marketing', href: '/ai-email-marketing' },
    { name: 'AI Customer Support Bot', href: '/ai-customer-support-bot' },
    { name: 'AI Code Review Assistant', href: '/ai-code-generation' },
    { name: 'AI Video Generator', href: '/ai-video-generation' },
    { name: 'AI Sales Automation', href: '/ai-sales-automation' },
    { name: 'AI Content Writer', href: '/ai-content-writer' },
    { name: 'AI Financial Advisor', href: '/ai-financial-analyzer' },
    { name: 'AI Fraud Detection', href: '/ai-fraud-detection' },
    { name: 'AI Fashion Design', href: '/ai-fashion-design' },
    { name: 'AI Music Composition', href: '/ai-music-composition' },
    { name: 'AI Fitness Coach', href: '/ai-fitness-coach' },
  ];

  const aiServices = [
    { name: 'Machine Learning', href: '/machine-learning' },
    { name: 'Natural Language Processing', href: '/nlp' },
    { name: 'Computer Vision', href: '/computer-vision' },
    { name: 'AI Automation', href: '/ai-automation' },
    { name: 'AI Data Visualization', href: '/ai-data-visualization' },
    { name: 'AI 3D Generation', href: '/ai-3d-generation' },
    { name: 'AI Voice Cloning', href: '/ai-voice-cloning' },
    { name: 'AI Fraud Detection', href: '/ai-cybersecurity' },
  ];

  const itServices = [
    { name: 'Cloud Migration', href: '/cloud-migration' },
    { name: 'IT Consulting', href: '/it-consulting' },
    { name: 'Cybersecurity', href: '/cybersecurity' },
    { name: 'DevOps & CI/CD', href: '/devops' },
    { name: 'Database Services', href: '/database' },
    { name: 'Mobile App Development', href: '/ai-mobile-app-development' },
    { name: 'Web Development', href: '/web-development' },
    { name: 'Network Infrastructure', href: '/network-infrastructure' },
    { name: 'IT Support', href: '/it-support' },
    { name: 'Business Intelligence', href: '/business-intelligence' },
    { name: 'Enterprise Solutions', href: '/enterprise' },
    { name: 'Blockchain Solutions', href: '/blockchain' },
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/zion-tech-group', icon: Linkedin },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter },
    { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook },
    { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram },
    { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github },
    { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: Youtube },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center mb-6">
                <span className="text-3xl mr-3">⚡</span>
                <h3 className="text-2xl font-bold text-cyan-400">Zion Tech Group</h3>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Leading provider of enterprise AI solutions, quantum computing, autonomous systems, 
                and comprehensive IT services. Transforming businesses with cutting-edge technology 
                and innovative solutions.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-3 text-cyan-400" />
                  <a href="tel:+13024640950" className="text-gray-300 hover:text-cyan-400 transition-colors">
                    +1 302 464 0950
                  </a>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-3 text-cyan-400" />
                  <a href="mailto:info@ziontechgroup.com" className="text-gray-300 hover:text-cyan-400 transition-colors">
                    info@ziontechgroup.com
                  </a>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-3 text-cyan-400" />
                  <span className="text-gray-300">Wilmington, DE, USA</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4 text-cyan-400">Follow Us</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-cyan-400 transition-colors"
                      aria-label={social.name}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-cyan-400">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center group"
                    >
                      <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* AI Services */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-cyan-400">AI Services</h4>
              <ul className="space-y-3">
                {aiServices.map((service) => (
                  <li key={service.name}>
                    <Link
                      to={service.href}
                      className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center group"
                    >
                      <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* IT Services */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-cyan-400">IT Services</h4>
              <ul className="space-y-3">
                {itServices.map((service) => (
                  <li key={service.name}>
                    <Link
                      to={service.href}
                      className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center group"
                    >
                      <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Micro SaaS Services Section */}
          <div className="mt-16 pt-8 border-t border-gray-700">
            <h4 className="text-xl font-semibold mb-6 text-cyan-400 text-center">AI-Powered Micro SaaS Solutions</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {microSAASServices.map((service) => (
                <Link
                  key={service.name}
                  to={service.href}
                  className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center group p-2 rounded hover:bg-gray-800"
                >
                  <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  {service.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="bg-gray-800 py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4 text-cyan-400">Stay Updated</h3>
            <p className="text-gray-300 mb-6">
              Get the latest insights on AI, technology trends, and industry updates delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
              <button className="bg-cyan-600 text-white px-6 py-3 rounded-lg hover:bg-cyan-700 transition-colors font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-gray-950 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-gray-400 hover:text-cyan-400 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-cyan-400 transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-gray-400 hover:text-cyan-400 transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;