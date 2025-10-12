import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, ArrowRight, Brain, Cloud, Shield, Globe, Database, Code, Smartphone, Rocket, Zap, Sparkles } from 'lucide-react';

export default function Footer() {
  const aiServices = [
    { name: 'AI Content Generator', path: '/ai-content-generator' },
    { name: 'AI Chatbot Builder', path: '/ai-chatbot-builder' },
    { name: 'AI Analytics Dashboard', path: '/ai-analytics-dashboard' },
    { name: 'AI Email Assistant', path: '/ai-email-assistant' },
    { name: 'AI Voice Assistant', path: '/ai-voice-assistant' },
    { name: 'AI Automation Suite', path: '/ai-automation' },
    { name: 'AI 3D Generation', path: '/ai-3d-generation' },
    { name: 'AI Drug Discovery Pro', path: '/ai-drug-discovery-pro' }
  ];

  const itServices = [
    { name: 'Cloud Migration', path: '/cloud-migration' },
    { name: 'Cybersecurity Solutions', path: '/cybersecurity-solutions' },
    { name: 'DevOps & CI/CD', path: '/devops-cicd' },
    { name: 'Data Analytics', path: '/data-analytics' },
    { name: 'Mobile Development', path: '/mobile-development' },
    { name: 'Web Development', path: '/web-development' },
    { name: 'Quantum Computing', path: '/quantum-computing-solutions' }
  ];

  const microSaasServices = [
    { name: 'AI Task Manager', path: '/ai-task-manager' },
    { name: 'AI Expense Tracker', path: '/ai-expense-tracker' },
    { name: 'AI Password Manager', path: '/ai-password-manager' },
    { name: 'AI Invoice Generator', path: '/ai-invoice-generator' },
    { name: 'AI Health Tracker', path: '/ai-health-tracker' },
    { name: 'AI Smart Calendar', path: '/ai-smart-calendar' },
    { name: 'AI Climate Solutions', path: '/ai-climate-solutions-pro' },
    { name: 'AI Carbon Tracker', path: '/ai-carbon-footprint-tracker' },
    { name: 'AI Smart Home Manager', path: '/ai-smart-home-energy-manager' },
    { name: 'AI Finance Optimizer', path: '/ai-personal-finance-optimizer' }
  ];

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'AI Services', path: '/ai-services' },
    { name: 'IT Services', path: '/it-services' },
    { name: 'Micro SAAS', path: '/micro-saas-services' },
    { name: '5G Solutions', path: '/5g-implementation' },
    { name: 'Contact', path: '/contact' }
  ];

  const legalPages = [
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms of Service', path: '/terms' }
  ];

  return (
    <footer className="bg-slate-900 text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold text-white">Zion Tech</span>
                <div className="text-xs text-cyan-400 font-medium">Group</div>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading provider of AI-powered solutions, cybersecurity, and digital transformation services. 
              Empowering businesses with cutting-edge technology.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-gray-300 group">
                <Mail className="w-4 h-4 mr-3 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-300 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-center text-gray-300 group">
                <Phone className="w-4 h-4 mr-3 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                <a href="tel:+13024640950" className="hover:text-cyan-300 transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex items-center text-gray-300 group">
                <MapPin className="w-4 h-4 mr-3 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                <span>364 E Main St STE 1008<br />Middletown DE 19709</span>
              </div>
            </div>
          </div>

          {/* AI Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-cyan-400 flex items-center">
              <Brain className="w-5 h-5 mr-2" />
              AI Services
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/ai-services" className="text-cyan-400 font-semibold text-sm hover:text-cyan-300 transition-colors">
                  All AI Services
                </Link>
              </li>
              {aiServices.map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.path} 
                    className="text-gray-300 hover:text-cyan-300 transition-all duration-300 flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* IT Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-cyan-400 flex items-center">
              <Server className="w-5 h-5 mr-2" />
              IT Services
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/it-services" className="text-cyan-400 font-semibold text-sm hover:text-cyan-300 transition-colors">
                  All IT Services
                </Link>
              </li>
              {itServices.map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.path} 
                    className="text-gray-300 hover:text-cyan-300 transition-all duration-300 flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Micro SAAS Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-cyan-400 flex items-center">
              <Rocket className="w-5 h-5 mr-2" />
              Micro SAAS
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/micro-saas-services" className="text-cyan-400 font-semibold text-sm hover:text-cyan-300 transition-colors">
                  All Micro SAAS
                </Link>
              </li>
              {microSaasServices.map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.path} 
                    className="text-gray-300 hover:text-cyan-300 transition-all duration-300 flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Quick Links */}
        <div className="border-t border-cyan-500/20 pt-8 mb-8">
          <h3 className="text-lg font-semibold mb-6 text-cyan-400">Quick Links</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {quickLinks.map((link, index) => (
              <Link key={index} to={link.path} className="text-gray-300 hover:text-cyan-300 transition-colors text-sm">
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-cyan-500/20 pt-8 mb-8">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4 text-white">Stay Updated</h3>
            <p className="text-gray-300 mb-6">
              Get the latest updates on AI technology and IT solutions delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-slate-800 border border-cyan-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
              />
              <button className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 transform hover:scale-105">
                <Sparkles className="w-4 h-4 mr-2" />
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Legal Links */}
        <div className="border-t border-cyan-500/20 pt-8 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              {legalPages.map((page, index) => (
                <Link key={index} to={page.path} className="text-gray-400 hover:text-cyan-300 transition-colors text-sm">
                  {page.name}
                </Link>
              ))}
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-cyan-300 transition-colors">
                <span className="sr-only">Twitter</span>
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-300 transition-colors">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-300 transition-colors">
                <span className="sr-only">GitHub</span>
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-cyan-500/20 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Zion Tech Group. All rights reserved. | Built with ❤️ by Zion Tech Group
          </p>
        </div>
      </div>
    </footer>
  );
}