'use client';
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight,
  Facebook,
  Twitter,
  Linkedin,
  Github,
  Instagram
} from 'lucide-react';

const Footer: React.FC = () => {
  const aiServices = [
    { name: 'AI Analytics', url: '/ai-analytics' },
    { name: 'AI Automation', url: '/ai-automation' },
    { name: 'AI Chatbot', url: '/ai-chatbot-builder' },
    { name: 'AI Content', url: '/ai-content-generation' },
    { name: 'AI CRM', url: '/ai-crm' },
    { name: 'AI Marketing', url: '/ai-marketing' }
  ];

  const itServices = [
    { name: 'Cloud Services', url: '/cloud-services' },
    { name: 'Cybersecurity', url: '/cybersecurity' },
    { name: 'DevOps', url: '/devops' },
    { name: 'Data Analytics', url: '/data-analytics' },
    { name: 'Web Development', url: '/web-development' },
    { name: 'Mobile Apps', url: '/mobile-development' }
  ];

  const companyLinks = [
    { name: 'About Us', url: '/about' },
    { name: 'Careers', url: '/careers' },
    { name: 'Blog', url: '/blog' },
    { name: 'Case Studies', url: '/case-studies' },
    { name: 'Partners', url: '/partners' },
    { name: 'Contact', url: '/contact' }
  ];

  const supportLinks = [
    { name: 'Help Center', url: '/help' },
    { name: 'Documentation', url: '/docs' },
    { name: 'API Reference', url: '/api-docs' },
    { name: 'Status', url: '/status' },
    { name: 'Privacy Policy', url: '/privacy' },
    { name: 'Terms of Service', url: '/terms' }
  ];

  const additionalServices = [
    { name: 'Blockchain', url: '/blockchain' },
    { name: 'IoT Solutions', url: '/iot' },
    { name: 'Edge Computing', url: '/edge-computing' },
    { name: 'Consultation', url: '/consultation' },
    { name: 'Custom Development', url: '/custom-software' }
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Futuristic Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3 group">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg shadow-cyan-500/25">
                <Brain className="w-7 h-7 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-white neon-text-enhanced group-hover:glow">Zion Tech Group</span>
                <span className="text-sm text-cyan-400 font-medium tracking-wider">AI & IT SOLUTIONS</span>
              </div>
            </div>
            
            <p className="text-gray-300 text-lg leading-relaxed max-w-md">
              Leading the future of technology with cutting-edge AI solutions and comprehensive IT services. 
              Empowering businesses to thrive in the digital age.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                <Mail className="w-5 h-5" />
                <span>contact@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                <Phone className="w-5 h-5" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                <MapPin className="w-5 h-5" />
                <span>San Francisco, CA</span>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-cyan-500 transition-all duration-300 group">
                <Facebook className="w-5 h-5 text-gray-400 group-hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-cyan-500 transition-all duration-300 group">
                <Twitter className="w-5 h-5 text-gray-400 group-hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-cyan-500 transition-all duration-300 group">
                <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-cyan-500 transition-all duration-300 group">
                <Github className="w-5 h-5 text-gray-400 group-hover:text-white" />
              </a>
            </div>
          </div>

          {/* AI Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-cyan-400 neon-text-enhanced">AI Services</h3>
            <ul className="space-y-3">
              {aiServices.map((service) => (
                <li key={service.name}>
                  <Link 
                    to={service.url} 
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 flex items-center group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* IT Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-purple-400 neon-text-enhanced">IT Services</h3>
            <ul className="space-y-3">
              {itServices.map((service) => (
                <li key={service.name}>
                  <Link 
                    to={service.url} 
                    className="text-gray-300 hover:text-purple-400 transition-colors duration-300 flex items-center group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Support */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-pink-400 neon-text-enhanced">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.url} 
                    className="text-gray-300 hover:text-pink-400 transition-colors duration-300 flex items-center group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            <div className="pt-4">
              <h3 className="text-lg font-bold text-pink-400 neon-text-enhanced mb-3">Support</h3>
              <ul className="space-y-3">
                {supportLinks.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.url} 
                      className="text-gray-300 hover:text-pink-400 transition-colors duration-300 flex items-center group"
                    >
                      <ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-slate-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 Zion Tech Group. All rights reserved. | Privacy Policy | Terms of Service
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>Made with ❤️ in San Francisco</span>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>All systems operational</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;