'use client';
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Zap, 
  Brain, 
  Cloud, 
  Code, 
  Users, 
  ArrowRight, 
  Shield, 
  BarChart, 
  Database, 
  Globe, 
  Smartphone, 
  Settings, 
  Calendar, 
  FileText, 
  MessageCircle, 
  Heart, 
  DollarSign, 
  Box, 
  Monitor, 
  Target, 
  TrendingUp, 
  CheckCircle, 
  Package, 
  Mic, 
  Workflow, 
  Eye, 
  Wifi, 
  MessageSquare, 
  ShoppingCart 
} from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const aiServices = [
    { name: 'AI Chatbots & NLP', url: '/ai-chatbot-builder', description: 'Conversational AI' },
    { name: 'AI Content Generation', url: '/ai-content-generation', description: 'Automated content' },
    { name: 'AI Data Analytics', url: '/ai-data-analytics', description: 'Intelligent insights' },
    { name: 'AI Automation', url: '/ai-automation', description: 'Process automation' },
    { name: 'AI Computer Vision', url: '/ai-computer-vision', description: 'Image recognition' },
    { name: 'AI Voice Solutions', url: '/ai-voice-solutions', description: 'Speech processing' }
  ];

  const itServices = [
    { name: 'Cloud Architecture', url: '/cloud-services', description: 'Scalable infrastructure' },
    { name: 'Web Development', url: '/web-development', description: 'Modern web apps' },
    { name: 'Mobile Development', url: '/mobile-development', description: 'iOS & Android' },
    { name: 'DevOps & CI/CD', url: '/devops', description: 'Deployment automation' },
    { name: 'API Development', url: '/api-development', description: 'RESTful services' },
    { name: 'Database Design', url: '/database-design', description: 'Data architecture' }
  ];

  const companyLinks = [
    { name: 'About Us', url: '/about' },
    { name: 'Our Team', url: '/team' },
    { name: 'Careers', url: '/careers' },
    { name: 'Case Studies', url: '/case-studies' },
    { name: 'Blog', url: '/blog' },
    { name: 'Press Kit', url: '/press' }
  ];

  const supportLinks = [
    { name: 'Documentation', url: '/docs' },
    { name: 'API Reference', url: '/api-docs' },
    { name: 'Support Center', url: '/support' },
    { name: 'Contact Us', url: '/contact' },
    { name: 'Status Page', url: '/status' },
    { name: 'Community', url: '/community' }
  ];

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Zion Tech Group</h3>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Leading provider of AI and IT solutions that transform businesses and drive innovation. 
              We help companies leverage cutting-edge technology to achieve their goals.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-5 h-5 text-cyan-400" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-5 h-5 text-cyan-400" />
                <span>info@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <span>123 Tech Street, Innovation City, IC 12345</span>
              </div>
            </div>
          </div>

          {/* AI Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 flex items-center">
              <Brain className="w-5 h-5 mr-2 text-cyan-400" />
              AI Services
            </h4>
            <ul className="space-y-3">
              {aiServices.map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.url} 
                    className="text-gray-300 hover:text-cyan-400 transition-colors block group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform inline-block">
                      {service.name}
                    </span>
                    <p className="text-sm text-gray-400 mt-1">{service.description}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* IT Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 flex items-center">
              <Code className="w-5 h-5 mr-2 text-cyan-400" />
              IT Services
            </h4>
            <ul className="space-y-3">
              {itServices.map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.url} 
                    className="text-gray-300 hover:text-cyan-400 transition-colors block group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform inline-block">
                      {service.name}
                    </span>
                    <p className="text-sm text-gray-400 mt-1">{service.description}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Support */}
          <div>
            <h4 className="text-lg font-semibold mb-6 flex items-center">
              <Users className="w-5 h-5 mr-2 text-cyan-400" />
              Company
            </h4>
            <ul className="space-y-3 mb-8">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.url} 
                    className="text-gray-300 hover:text-cyan-400 transition-colors block group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform inline-block">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="text-lg font-semibold mb-6 flex items-center">
              <MessageCircle className="w-5 h-5 mr-2 text-cyan-400" />
              Support
            </h4>
            <ul className="space-y-3">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.url} 
                    className="text-gray-300 hover:text-cyan-400 transition-colors block group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform inline-block">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
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