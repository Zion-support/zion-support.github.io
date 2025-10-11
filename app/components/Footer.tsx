'use client';
import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Zap, Brain, Cloud, Code, Users, ArrowRight, Shield, BarChart, Database, Globe, Smartphone, Settings, Calendar, FileText, MessageCircle, Heart, DollarSign, Box, Monitor, Target, TrendingUp, CheckCircle, Package, Mic, Workflow, Eye, Wifi, MessageSquare, ShoppingCart, Linkedin, Twitter, Github } from 'lucide-react';

const Footer: React.FC = memo(() => {
  const currentYear = new Date().getFullYear();
  
  const aiServices = [
    { name: 'AI Chatbots & NLP', url: '/ai-chatbot-builder', description: 'Conversational AI' },
    { name: 'AI Content Generation', url: '/ai-content-generation', description: 'Automated content' },
    { name: 'AI Data Analytics', url: '/ai-data-analytics', description: 'Business intelligence' },
    { name: 'AI Computer Vision', url: '/ai-computer-vision', description: 'Image analysis' },
    { name: 'AI Voice Solutions', url: '/ai-voice-solutions', description: 'Speech recognition' },
    { name: 'AI Workflow Automation', url: '/ai-automation', description: 'Process automation' },
    { name: 'AI Healthcare Solutions', url: '/ai-healthcare', description: 'Medical AI' },
    { name: 'AI Financial Services', url: '/ai-financial-services', description: 'Fintech AI' }
  ]

  const itServices = [
    { name: 'Cloud Infrastructure', url: '/cloud-infrastructure', description: 'AWS, Azure, GCP' },
    { name: 'DevOps & CI/CD', url: '/devops-cicd', description: 'Automation pipelines' },
    { name: 'Cybersecurity Solutions', url: '/cybersecurity-solutions', description: 'Security solutions' },
    { name: 'Web Development', url: '/web-development', description: 'Modern web apps' },
    { name: 'Mobile Development', url: '/mobile-development', description: 'iOS & Android' },
    { name: 'API Development', url: '/api-development', description: 'API solutions' },
    { name: 'IT Support', url: '/it-support', description: '24/7 technical support' },
    { name: 'Data Analytics & BI', url: '/data-analytics-bi', description: 'Business intelligence' }
  ]

  const companyLinks = [
    { name: 'About Us', url: '/about' },
    { name: 'Our Team', url: '/team' },
    { name: 'Case Studies', url: '/case-studies' },
    { name: 'Blog', url: '/blog' },
    { name: 'Careers', url: '/careers' },
    { name: 'Partners', url: '/partners' },
    { name: 'Support', url: '/support' },
    { name: 'Status', url: '/status' }
  ]

  return (
    <footer className="bg-slate-900/90 backdrop-blur-sm border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">Zion Tech Group</h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Leading provider of AI-powered enterprise solutions, quantum computing, and digital transformation services.
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com/company/zion-tech-group" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://twitter.com/ziontechgroup" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="https://github.com/zion-tech-group" className="text-gray-400 hover:text-white transition-colors">
                <Github className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* AI Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-cyan-400">AI Services</h3>
            <ul className="space-y-2">
              {aiServices.map((service) => (
                <li key={service.name}>
                  <Link to={service.url} className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm">
                    {service.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/ai-services" className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200 text-sm font-medium">
                  View All AI Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* IT Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-purple-400">IT Services</h3>
            <ul className="space-y-2">
              {itServices.map((service) => (
                <li key={service.name}>
                  <Link to={service.url} className="text-gray-300 hover:text-purple-400 transition-colors duration-200 text-sm">
                    {service.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/it-services" className="text-purple-400 hover:text-purple-300 transition-colors duration-200 text-sm font-medium">
                  View All IT Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-cyan-400">Company</h3>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.url} className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-cyan-400">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-cyan-400" />
                <a href="mailto:kleber@ziontechgroup.com" className="text-gray-300 text-sm hover:text-cyan-400 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-cyan-400" />
                <a href="tel:+13024640950" className="text-gray-300 text-sm hover:text-cyan-400 transition-colors">
                  (302) 464-0950
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span className="text-gray-300 text-sm">364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>
            <Link 
              to="/contact" 
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;