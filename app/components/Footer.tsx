'use client';
import React, { memo } from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, Award, Shield, Zap, ArrowRight, Brain, Cloud, Code, BarChart, Users, Globe } from 'lucide-react';
const Footer: React.FC = memo(() => {
  const currentYear = new Date().getFullYear();
  const aiServices = [
    { name: 'AI Services', url: '/ai-services', description: 'Comprehensive AI solutions' },
    { name: 'AI Marketing', url: '/ai-marketing', description: 'AI-powered marketing automation' },
    { name: 'AI Automation', url: '/ai-automation', description: 'Intelligent process automation' },
    { name: 'AI Healthcare', url: '/ai-healthcare', description: 'Medical AI solutions' },
    { name: 'AI Fintech', url: '/ai-fintech', description: 'Financial AI applications' },
    { name: 'AI Content Generation', url: '/ai-content-generation', description: 'AI content creation' },
    { name: 'AI Data Analytics', url: '/ai-data-analytics', description: 'Advanced data insights' },
    { name: 'AI Cybersecurity', url: '/ai-cybersecurity', description: 'AI security solutions' },
    { name: 'AI Workflow Automation', url: '/ai-workflow-automation', description: 'Workflow optimization' }
  ];
  const itServices = [
    { name: 'IT Services', url: '/it-services', description: 'Comprehensive IT support' },
    { name: 'IT Infrastructure', url: '/it-infrastructure', description: 'Enterprise infrastructure' },
    { name: 'Micro SAAS', url: '/micro-saas', description: '50+ ready-to-use apps' },
    { name: 'Cybersecurity', url: '/cybersecurity', description: 'Security solutions' },
    { name: 'DevOps & CI/CD', url: '/devops', description: 'Development operations' },
    { name: 'Database Services', url: '/database', description: 'Database management' },
    { name: 'Cloud Services', url: '/cloud-services', description: 'Cloud solutions' },
    { name: 'Networking', url: '/networking', description: 'Network infrastructure' },
    { name: 'Autonomous Systems', url: '/autonomous-systems', description: 'Self-managing systems' },
    { name: 'Blockchain & Web3', url: '/blockchain-web3', description: 'Decentralized solutions' },
    { name: 'IoT & Edge Computing', url: '/iot-edge-computing', description: 'Connected devices' },
    { name: 'Business Intelligence', url: '/business-intelligence', description: 'Data-driven insights' },
    { name: 'Robotics', url: '/robotics', description: 'Robotic solutions' }
  ];
  const companyLinks = [
    { name: 'About Us', url: '/about' },
    { name: 'Our Team', url: '/team' },
    { name: 'Case Studies', url: '/case-studies' },
    { name: 'Careers', url: '/careers' },
    { name: 'News', url: '/news' },
    { name: 'Contact', url: '/contact' }
  ];
  const supportLinks = [
    { name: 'Documentation', url: '/docs' },
    { name: 'API Reference', url: '/api-docs' },
    { name: 'Support Center', url: '/support' },
    { name: 'System Status', url: '/status' },
    { name: 'Privacy Policy', url: '/privacy' },
    { name: 'Terms of Service', url: '/terms' }
  ];
  const contactInfo = {
    phone: '+1 (302) 464-0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008, Middletown, DE 19709',
    hours: 'Mon-Fri: 9AM-6PM EST'
  };
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white cyber-grid relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-cyan-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-pink-500 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* AI Services */}
          <div className="cyber-card p-6 rounded-xl">
            <div className="flex items-center mb-4">
              <Brain className="w-6 h-6 text-cyan-400 mr-2 energy-pulse" />
              <h3 className="text-lg font-semibold text-cyan-400 neon-text">AI Services</h3>
            </div>
            <ul className="space-y-2">
              {aiServices.slice(0, 6).map((service, index) => (
                <li key={index}>
                  <Link 
                    href={service.url}
                    className="text-gray-300 hover:text-cyan-400 transition-all duration-300 text-sm hover:neon-glow cyber-scan-line block py-1"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* IT Services */}
          <div className="cyber-card p-6 rounded-xl">
            <div className="flex items-center mb-4">
              <Cloud className="w-6 h-6 text-purple-400 mr-2 energy-pulse" />
              <h3 className="text-lg font-semibold text-purple-400 neon-text">IT Services</h3>
            </div>
            <ul className="space-y-2">
              {itServices.slice(0, 6).map((service, index) => (
                <li key={index}>
                  <Link 
                    href={service.url}
                    className="text-gray-300 hover:text-purple-400 transition-all duration-300 text-sm hover:neon-glow cyber-scan-line block py-1"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Company */}
          <div className="cyber-card p-6 rounded-xl">
            <div className="flex items-center mb-4">
              <Users className="w-6 h-6 text-pink-400 mr-2 energy-pulse" />
              <h3 className="text-lg font-semibold text-pink-400 neon-text">Company</h3>
            </div>
            <ul className="space-y-2">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.url}
                    className="text-gray-300 hover:text-pink-400 transition-all duration-300 text-sm hover:neon-glow cyber-scan-line block py-1"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Support & Contact */}
          <div className="cyber-card p-6 rounded-xl">
            <div className="flex items-center mb-4">
              <Shield className="w-6 h-6 text-green-400 mr-2 energy-pulse" />
              <h3 className="text-lg font-semibold text-green-400 neon-text">Support</h3>
            </div>
            <ul className="space-y-2 mb-6">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.url}
                    className="text-gray-300 hover:text-green-400 transition-all duration-300 text-sm hover:neon-glow cyber-scan-line block py-1"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="space-y-3">
              <div className="flex items-center text-sm text-gray-300 hover:text-cyan-400 transition-all duration-300 group">
                <Phone className="w-4 h-4 mr-2 group-hover:neon-glow" />
                <a href={`tel:${contactInfo.phone}`} className="hover:neon-glow">
                  {contactInfo.phone}
                </a>
              </div>
              <div className="flex items-center text-sm text-gray-300 hover:text-cyan-400 transition-all duration-300 group">
                <Mail className="w-4 h-4 mr-2 group-hover:neon-glow" />
                <a href={`mailto:${contactInfo.email}`} className="hover:neon-glow">
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex items-center text-sm text-gray-300 hover:text-cyan-400 transition-all duration-300 group">
                <MapPin className="w-4 h-4 mr-2 group-hover:neon-glow" />
                <span className="group-hover:neon-glow">{contactInfo.address}</span>
              </div>
              <div className="flex items-center text-sm text-gray-300 hover:text-cyan-400 transition-all duration-300 group">
                <Clock className="w-4 h-4 mr-2 group-hover:neon-glow" />
                <span className="group-hover:neon-glow">{contactInfo.hours}</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Enhanced Footer Bottom */}
        <div className="mt-12 pt-8 border-t border-cyan-500/30 relative">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center energy-pulse">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <div className="text-sm text-gray-400">
                © {currentYear} Zion Tech Group. All rights reserved.
              </div>
            </div>
            <div className="flex flex-wrap gap-6">
              <a href="/privacy" className="text-sm text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:neon-glow">
                Privacy Policy
              </a>
              <a href="/terms" className="text-sm text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:neon-glow">
                Terms of Service
              </a>
              <a href="/cookies" className="text-sm text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:neon-glow">
                Cookie Policy
              </a>
              <a href="/gdpr" className="text-sm text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:neon-glow">
                GDPR
              </a>
            </div>
          </div>
          
          {/* Additional Contact CTA */}
          <div className="mt-8 text-center">
            <div className="cyber-card p-6 rounded-xl max-w-2xl mx-auto">
              <h4 className="text-lg font-semibold text-white mb-2 neon-text">Ready to Transform Your Business?</h4>
              <p className="text-gray-300 mb-4">Get started with our AI-powered solutions today</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="cyber-button hover:scale-105 transition-all duration-300"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call (302) 464-0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="border-2 border-cyan-500 text-cyan-400 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300 hover:neon-glow"
                >
                  <Mail className="w-4 h-4 mr-2 inline" />
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
});
Footer.displayName = 'Footer';
export default Footer;