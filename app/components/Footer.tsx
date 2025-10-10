'use client';
import React from 'react';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  const aiServices = [
    { name: 'AI Strategy & Consulting', url: '/ai-services', description: 'Strategic AI consulting' },
    { name: 'Machine Learning Solutions', url: '/ai-services', description: 'Custom ML models' },
    { name: 'Natural Language Processing', url: '/ai-services', description: 'NLP and chatbots' },
    { name: 'Computer Vision', url: '/ai-services', description: 'Image and video analysis' },
    { name: 'AI Automation', url: '/ai-services', description: 'Process automation' },
    { name: 'AI Data Analytics', url: '/ai-services', description: 'Intelligent analytics' }
  ];

  const itServices = [
    { name: 'Cloud Infrastructure', url: '/it-services', description: 'AWS, Azure, GCP' },
    { name: 'Cybersecurity', url: '/cybersecurity', description: 'Security solutions' },
    { name: 'DevOps & CI/CD', url: '/devops', description: 'Development operations' },
    { name: 'Database Management', url: '/database-services', description: 'Database solutions' },
    { name: 'Mobile Development', url: '/mobile-development', description: 'iOS & Android apps' },
    { name: 'Web Development', url: '/web-development', description: 'Modern web apps' }
  ];

  const company = [
    { name: 'About Us', url: '/about' },
    { name: 'Our Team', url: '/team' },
    { name: 'Careers', url: '/careers' },
    { name: 'Case Studies', url: '/case-studies' },
    { name: 'Blog', url: '/blog' },
    { name: 'Contact', url: '/contact' }
  ];

  const support = [
    { name: 'Documentation', url: '/docs' },
    { name: 'API Reference', url: '/api-docs' },
    { name: 'Support Center', url: '/support' },
    { name: 'Status Page', url: '/status' },
    { name: 'Privacy Policy', url: '/privacy' },
    { name: 'Terms of Service', url: '/terms' }
  ];

  return (
    <footer className="bg-slate-900 border-t border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">Zion Tech Group</h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Leading provider of AI and IT solutions, transforming businesses through innovative technology and expert consulting.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Mail className="w-5 h-5 mr-3 text-purple-400" />
                <span>contact@ziontechgroup.com</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="w-5 h-5 mr-3 text-purple-400" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="w-5 h-5 mr-3 text-purple-400" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* AI Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">AI Services</h4>
            <ul className="space-y-2">
              {aiServices.map((service, index) => (
                <li key={index}>
                  <a 
                    href={service.url} 
                    className="text-gray-300 hover:text-purple-400 transition-colors duration-200 flex items-center group"
                  >
                    {service.name}
                    <ArrowRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* IT Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">IT Services</h4>
            <ul className="space-y-2">
              {itServices.map((service, index) => (
                <li key={index}>
                  <a 
                    href={service.url} 
                    className="text-gray-300 hover:text-purple-400 transition-colors duration-200 flex items-center group"
                  >
                    {service.name}
                    <ArrowRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Support */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2 mb-6">
              {company.map((item, index) => (
                <li key={index}>
                  <a 
                    href={item.url} 
                    className="text-gray-300 hover:text-purple-400 transition-colors duration-200 flex items-center group"
                  >
                    {item.name}
                    <ArrowRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
            
            <h4 className="text-lg font-semibold text-white mb-4">Support</h4>
            <ul className="space-y-2">
              {support.map((item, index) => (
                <li key={index}>
                  <a 
                    href={item.url} 
                    className="text-gray-300 hover:text-purple-400 transition-colors duration-200 flex items-center group"
                  >
                    {item.name}
                    <ArrowRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Zion Tech Group. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="/privacy" className="text-gray-400 hover:text-purple-400 text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-gray-400 hover:text-purple-400 text-sm transition-colors">
                Terms of Service
              </a>
              <a href="/cookies" className="text-gray-400 hover:text-purple-400 text-sm transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
