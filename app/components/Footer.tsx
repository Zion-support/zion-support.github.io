'use client';
import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, Zap, Brain, Cloud, Code, Users, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const aiServices = [
    { name: 'AI Analytics', url: '/ai-analytics' },
    { name: 'AI Automation', url: '/ai-automation' },
    { name: 'AI Customer Support', url: '/ai-customer-support' },
    { name: 'AI Data Analytics', url: '/ai-data-analytics' },
    { name: 'AI Content Generation', url: '/ai-content-generation' },
    { name: 'AI Healthcare', url: '/ai-healthcare' },
    { name: 'AI Financial Services', url: '/ai-fintech' },
    { name: 'AI Cybersecurity', url: '/ai-cybersecurity' }
  ];

  const itServices = [
    { name: 'Cloud Infrastructure', url: '/cloud-infrastructure' },
    { name: 'DevOps & CI/CD', url: '/devops' },
    { name: 'Cybersecurity', url: '/cybersecurity' },
    { name: 'Data Analytics', url: '/data-analytics' },
    { name: 'Mobile Development', url: '/mobile-development' },
    { name: 'Web Development', url: '/web-development' },
    { name: 'Database Management', url: '/database-management' },
    { name: 'API Development', url: '/api-development' }
  ];

  const microSaas = [
    { name: 'Project Management', url: '/project-management' },
    { name: 'Team Collaboration', url: '/team-collaboration' },
    { name: 'Customer Support', url: '/customer-support' },
    { name: 'Analytics Dashboard', url: '/analytics-dashboard' },
    { name: 'Document Management', url: '/document-management' },
    { name: 'Task Automation', url: '/task-automation' }
  ];

  return (
    <footer className="bg-slate-900 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Zion Tech Group</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-sm">
              Leading provider of AI and IT solutions for modern businesses. 
              Transform your operations with cutting-edge technology.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-gray-400">
                <Phone className="w-4 h-4 mr-3" />
                <span>+1 (302) 464-0950</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Mail className="w-4 h-4 mr-3" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center text-gray-400">
                <MapPin className="w-4 h-4 mr-3" />
                <span>364 E Main St STE 1008, Middletown, DE 19709</span>
              </div>
            </div>
          </div>

          {/* AI Services */}
          <div>
            <h3 className="text-white font-semibold mb-4 flex items-center">
              <Brain className="w-5 h-5 mr-2 text-cyan-400" />
              AI Services
            </h3>
            <ul className="space-y-2">
              {aiServices.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.url}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* IT Services */}
          <div>
            <h3 className="text-white font-semibold mb-4 flex items-center">
              <Cloud className="w-5 h-5 mr-2 text-purple-400" />
              IT Services
            </h3>
            <ul className="space-y-2">
              {itServices.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.url}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Micro SaaS */}
          <div>
            <h3 className="text-white font-semibold mb-4 flex items-center">
              <Code className="w-5 h-5 mr-2 text-pink-400" />
              Micro SaaS
            </h3>
            <ul className="space-y-2">
              {microSaas.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.url}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="/contact" className="text-gray-400 hover:text-white text-sm transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;