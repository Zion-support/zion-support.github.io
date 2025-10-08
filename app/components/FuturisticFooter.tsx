import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Mail, 
  Phone, 
  MapPin, 
  Twitter, 
  Linkedin, 
  Github, 
  ArrowRight,
  Zap,
  Shield,
  Cpu,
  Cloud,
  BarChart3,
  Code
} from 'lucide-react';

const FuturisticFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: 'AI Services', href: '/ai-services', icon: Brain },
    { name: 'Micro SAAS', href: '/micro-saas', icon: Zap },
    { name: 'IT Solutions', href: '/it-services', icon: Cpu },
    { name: 'Cybersecurity', href: '/cybersecurity', icon: Shield },
    { name: 'Cloud Services', href: '/cloud-services', icon: Cloud },
    { name: 'Data Analytics', href: '/business-intelligence', icon: BarChart3 }
  ];

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Contact', href: '/contact' },
    { name: 'Blog', href: '/blog' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' }
  ];

  const socialLinks = [
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter },
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin },
    { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github }
  ];

  return (
    <footer className="relative bg-black/90 backdrop-blur-md border-t border-cyan-500/20 overflow-hidden">
      {/* Matrix background effect */}
      <div className="absolute inset-0 cyber-grid opacity-10"></div>
      
      {/* Quantum particles */}
      <div className="quantum-particle" style={{ top: '10%', left: '5%', animationDelay: '0s' }}></div>
      <div className="quantum-particle" style={{ top: '30%', right: '10%', animationDelay: '1s' }}></div>
      <div className="quantum-particle" style={{ top: '60%', left: '20%', animationDelay: '3s' }}></div>
      <div className="quantum-particle" style={{ top: '80%', right: '30%', animationDelay: '2s' }}></div>

      {/* Data streams */}
      <div className="data-stream" style={{ left: '10%', animationDelay: '0s' }}></div>
      <div className="data-stream" style={{ right: '15%', animationDelay: '1.5s' }}></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg blur opacity-30"></div>
              </div>
              <span className="text-xl font-bold text-gradient">Zion Tech Group</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading provider of AI-powered enterprise solutions, quantum computing, and autonomous systems. 
              Transform your business with cutting-edge technology.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-4 h-4 text-cyan-400" />
                <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-4 h-4 text-cyan-400" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>364 E Main St STE 1008<br />Middletown DE 19709</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-cyan-400 mb-6 flex items-center">
              <Zap className="w-5 h-5 mr-2" />
              Services
            </h3>
            <div className="grid grid-cols-1 gap-3">
              {services.map((service, index) => (
                <Link
                  key={index}
                  to={service.href}
                  className="group flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                >
                  <service.icon className="w-4 h-4" />
                  <span>{service.name}</span>
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-cyan-400 mb-6 flex items-center">
              <Code className="w-5 h-5 mr-2" />
              Quick Links
            </h3>
            <div className="space-y-3">
              {quickLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.href}
                  className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 group"
                >
                  <span className="group-hover:neon-text transition-all duration-300">{link.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h3 className="text-lg font-semibold text-cyan-400 mb-6">
              Stay Connected
            </h3>
            <p className="text-gray-300 mb-6">
              Get the latest updates on AI technology and industry insights.
            </p>
            
            {/* Newsletter Signup */}
            <div className="mb-6">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-black/50 border border-cyan-500/30 rounded-l-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                />
                <button className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-r-lg hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 font-semibold">
                  Subscribe
                </button>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-black/50 border border-cyan-500/30 rounded-lg flex items-center justify-center text-gray-300 hover:text-cyan-400 hover:border-cyan-400 transition-all duration-300 group"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-cyan-500/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>Powered by AI</span>
              <div className="w-1 h-1 bg-cyan-400 rounded-full"></div>
              <span>Quantum Ready</span>
              <div className="w-1 h-1 bg-cyan-400 rounded-full"></div>
              <span>Future Forward</span>
            </div>
          </div>
        </div>
      </div>

      {/* Cyber scan line */}
      <div className="cyber-scan-line"></div>
    </footer>
  );
};

export default FuturisticFooter;
