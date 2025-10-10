'use client';
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Brain, Cloud, Code, BarChart, Users, Zap, ArrowRight, Sparkles, Cpu, Target, Globe, Database, Smartphone, Lock, TrendingUp, Settings, Calendar, CheckSquare, FileText, MessageCircle, Heart, DollarSign, Box, Monitor, Link as LinkIcon, Server, Github, Linkedin, Twitter } from 'lucide-react';
const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const aiServices = [
    { name: 'AI Strategy & Consulting', url: '/ai-services', description: 'Strategic AI consulting' },
    { name: 'Machine Learning Solutions', url: '/ai-services', description: 'Custom ML models' },
    { name: 'Natural Language Processing', url: '/ai-services', description: 'NLP and chatbots' },
    { name: 'Computer Vision', url: '/ai-services', description: 'Image and video analysis' },
    { name: 'AI Analytics', url: '/ai-services', description: 'Data-driven insights' },
    { name: 'AI Automation', url: '/ai-services', description: 'Process automation' }
  ];
  const itServices = [
    { name: 'Cloud Infrastructure', url: '/it-services', description: 'Scalable cloud solutions' },
    { name: 'Cybersecurity', url: '/it-services', description: 'Security solutions' },
    { name: 'API Development', url: '/it-services', description: 'Custom API solutions' },
    { name: 'Database Management', url: '/it-services', description: 'Database optimization' },
    { name: 'Network Solutions', url: '/it-services', description: 'Network infrastructure' },
    { name: 'Managed IT Services', url: '/it-services', description: '24/7 IT support' }
  ];
  const microSaasServices = [
    { name: 'Project Management', url: '/micro-saas', description: 'Streamlined project tracking' },
    { name: 'Customer Support', url: '/micro-saas', description: 'Efficient support systems' },
    { name: 'Analytics Dashboard', url: '/micro-saas', description: 'Business intelligence' },
    { name: 'Content Management', url: '/micro-saas', description: 'Content organization' },
    { name: 'Team Collaboration', url: '/micro-saas', description: 'Team productivity tools' },
    { name: 'Financial Tracking', url: '/micro-saas', description: 'Financial management' }
  ];
  const resourcesLinks = [
    { name: 'Blog', url: '/blog' },
    { name: 'Case Studies', url: '/case-studies' },
    { name: 'Documentation', url: '/docs' },
    { name: 'API Reference', url: '/api-docs' },
    { name: 'Support', url: '/support' },
    { name: 'FAQ', url: '/faq' }
  ];
  return (
    <footer className="bg-slate-900 border-t border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg: col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Zion Tech Group</span>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Leading provider of AI and IT solutions for modern businesses. 
              We help companies transform their operations with cutting-edge technology.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-sm text-gray-300">
                <Phone className="w-4 h-4 mr-2" />
                <span>+1 (302) 464-0950</span>
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <Mail className="w-4 h-4 mr-2" />
                <span>info@ziontechgroup.com</span>
              </div>
              <div className="flex items-start text-sm text-gray-300">
                <MapPin className="w-4 h-4 mr-2 mt-0.5" />
                <span>364 E Main St STE 1008<br />Middletown DE 19709</span>
              </div>
            </div>
          </div>
          {/* AI Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyan-400 flex items-center">
              <Brain className="w-5 h-5 mr-2" />
              AI Services
            </h3>
            <ul className="space-y-2">
              {aiServices.map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.url}
                    className="text-gray-300 hover: text-cyan-400 transition-colors duration-200 text-sm">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* IT Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-400 flex items-center">
              <Cloud className="w-5 h-5 mr-2" />
              IT Services
            </h3>
            <ul className="space-y-2">
              {itServices.map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.url}
                    className="text-gray-300 hover: text-cyan-400 transition-colors duration-200 text-sm">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Micro SaaS */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-green-400 flex items-center">
              <Code className="w-5 h-5 mr-2" />
              Micro SaaS
            </h3>
            <ul className="space-y-2">
              {microSaasServices.slice(0, 6).map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.url}
                    className="text-gray-300 hover: text-cyan-400 transition-colors duration-200 text-sm">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md: flex-row justify-between items-center">
            <div className="text-sm text-gray-400 mb-4 md:mb-0">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            <div className="flex space-x-6 mt-4 md: mt-0">
              <a href="/privacy" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">
                Terms of Service
              </a>
              <a href="/cookies" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )};
Footer.displayName = 'Footer';
export default Footer
