'use client';
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowRight, Brain, Cloud, Shield, Code, BarChart, Users, Zap, Cpu, Server, Globe, Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: 'AI Services', url: '/ai-services', description: 'Advanced AI solutions' },
    { name: 'IT Services', url: '/it-services', description: 'Complete IT infrastructure' },
    { name: 'Micro SaaS', url: '/micro-saas', description: 'Specialized software solutions' },
    { name: 'Consulting', url: '/consultation', description: 'Expert technology guidance' }
  ];

  const aiServices = [
    { name: 'Business Intelligence', url: '/ai-services#bi' },
    { name: 'Computer Vision', url: '/ai-services#vision' },
    { name: 'Natural Language Processing', url: '/ai-services#nlp' },
    { name: 'Process Automation', url: '/ai-services#automation' },
    { name: 'Predictive Analytics', url: '/ai-services#analytics' },
    { name: 'Cybersecurity AI', url: '/ai-services#security' }
  ];

  const itServices = [
    { name: 'Cloud Migration', url: '/it-services#cloud' },
    { name: 'Server Management', url: '/it-services#servers' },
    { name: 'Network Security', url: '/it-services#security' },
    { name: 'Database Management', url: '/it-services#database' },
    { name: 'IT Support', url: '/it-services#support' },
    { name: 'Monitoring', url: '/it-services#monitoring' }
  ];

  const microSaasServices = [
    { name: 'Analytics Dashboard', url: '/micro-saas#analytics' },
    { name: 'Customer Support', url: '/micro-saas#support' },
    { name: 'Security Monitor', url: '/micro-saas#security' },
    { name: 'Cloud Backup', url: '/micro-saas#backup' },
    { name: 'Performance Tracker', url: '/micro-saas#performance' },
    { name: 'Workflow Automation', url: '/micro-saas#automation' }
  ];

  const company = [
    { name: 'About Us', url: '/about' },
    { name: 'Our Team', url: '/about#team' },
    { name: 'Careers', url: '/careers' },
    { name: 'Partners', url: '/partners' },
    { name: 'Case Studies', url: '/case-studies' },
    { name: 'Blog', url: '/blog' }
  ];

  const support = [
    { name: 'Help Center', url: '/support' },
    { name: 'Documentation', url: '/docs' },
    { name: 'API Reference', url: '/api-docs' },
    { name: 'Status Page', url: '/status' },
    { name: 'Contact Support', url: '/contact' },
    { name: 'System Requirements', url: '/requirements' }
  ];

  const legal = [
    { name: 'Privacy Policy', url: '/privacy' },
    { name: 'Terms of Service', url: '/terms' },
    { name: 'Cookie Policy', url: '/cookies' },
    { name: 'GDPR Compliance', url: '/gdpr' },
    { name: 'Security', url: '/security' },
    { name: 'SLA', url: '/sla' }
  ];

  const socialLinks = [
    { name: 'Facebook', url: '#', icon: Facebook },
    { name: 'Twitter', url: '#', icon: Twitter },
    { name: 'LinkedIn', url: '#', icon: Linkedin },
    { name: 'Instagram', url: '#', icon: Instagram },
    { name: 'YouTube', url: '#', icon: Youtube }
  ];

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Zion Tech Group</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, 
              and digital transformation services. Transform your business with cutting-edge technology.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-gray-400">
                <Phone className="w-4 h-4 mr-3" />
                <a href="tel:+13024640950" className="hover:text-white transition-colors">
                  (302) 464-0950
                </a>
              </div>
              <div className="flex items-center text-gray-400">
                <Mail className="w-4 h-4 mr-3" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-white transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-center text-gray-400">
                <MapPin className="w-4 h-4 mr-3" />
                <span>364 E Main St STE 1008, Middletown, DE 19709</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.url}
                    className="text-gray-400 hover:text-white transition-colors flex items-center group"
                  >
                    <span>{service.name}</span>
                    <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* AI Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">AI Services</h3>
            <ul className="space-y-3">
              {aiServices.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.url}
                    className="text-gray-400 hover:text-white transition-colors flex items-center group"
                  >
                    <span>{service.name}</span>
                    <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* IT Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">IT Services</h3>
            <ul className="space-y-3">
              {itServices.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.url}
                    className="text-gray-400 hover:text-white transition-colors flex items-center group"
                  >
                    <span>{service.name}</span>
                    <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.url}
                    className="text-gray-400 hover:text-white transition-colors flex items-center group"
                  >
                    <span>{item.name}</span>
                    <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-3">
              {support.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.url}
                    className="text-gray-400 hover:text-white transition-colors flex items-center group"
                  >
                    <span>{item.name}</span>
                    <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            <div className="flex space-x-6">
              {legal.map((item) => (
                <Link
                  key={item.name}
                  to={item.url}
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
