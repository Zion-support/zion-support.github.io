'use client';
import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Zap, Brain, Cloud, Code, Users, ArrowRight } from 'lucide-react';

const Footer: React.FC = memo(() => {
  const currentYear = new Date().getFullYear();
<<<<<<< HEAD

  return (
    <footer className="relative bg-slate-900 text-gray-300 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-transparent" />
=======
  
  const aiServices = [
    { name: 'AI Chatbots & NLP', url: '/ai-chatbot-builder', description: 'Conversational AI' },
    { name: 'AI Content Generation', url: '/ai-content-generation', description: 'Automated content' },
    { name: 'AI Data Analytics', url: '/ai-data-analytics', description: 'Business intelligence' },
    { name: 'AI Computer Vision', url: '/ai-computer-vision', description: 'Image analysis' },
    { name: 'AI Voice Solutions', url: '/ai-voice-solutions', description: 'Speech recognition' },
    { name: 'AI Workflow Automation', url: '/ai-automation', description: 'Process automation' },
    { name: 'AI Healthcare Solutions', url: '/ai-healthcare', description: 'Medical AI' },
    { name: 'AI Financial Services', url: '/ai-financial-services', description: 'Fintech AI' },
    { name: 'AI Document Processing', url: '/ai-document-processing', description: 'Document analysis' },
    { name: 'AI Predictive Analytics', url: '/ai-predictive-analytics', description: 'Business forecasting' },
    { name: 'AI HR Solutions', url: '/ai-hr-solutions', description: 'Human resources AI' },
    { name: 'AI Marketing Automation', url: '/ai-marketing', description: 'Marketing AI' }
  ];

  const itServices = [
    { name: 'Cloud Infrastructure', url: '/cloud-infrastructure', description: 'Cloud solutions' },
    { name: 'Cybersecurity', url: '/cybersecurity', description: 'Security services' },
    { name: 'Web Development', url: '/web-development', description: 'Custom websites' },
    { name: 'Mobile Development', url: '/mobile-development', description: 'Mobile apps' },
    { name: 'DevOps & CI/CD', url: '/devops', description: 'Development operations' },
    { name: 'Database Management', url: '/database', description: 'Data solutions' },
    { name: 'Network Solutions', url: '/network-solutions', description: 'Network infrastructure' },
    { name: 'IT Consulting', url: '/it-consulting', description: 'Technology consulting' },
    { name: 'Managed IT Services', url: '/managed-it', description: 'Ongoing support' },
    { name: 'Digital Transformation', url: '/digital-transformation', description: 'Business transformation' }
  ];

  const companyLinks = [
    { name: 'About Us', url: '/about' },
    { name: 'Our Team', url: '/team' },
    { name: 'Careers', url: '/careers' },
    { name: 'Case Studies', url: '/case-studies' },
    { name: 'Blog', url: '/blog' },
    { name: 'News', url: '/news' }
  ];

  const supportLinks = [
    { name: 'Help Center', url: '/help' },
    { name: 'Documentation', url: '/docs' },
    { name: 'API Reference', url: '/api-docs' },
    { name: 'Status Page', url: '/status' },
    { name: 'Contact Support', url: '/contact' },
    { name: 'System Status', url: '/system-status' }
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5"></div>
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
<<<<<<< HEAD
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
=======
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Zion Tech Group</h3>
                <p className="text-sm text-cyan-400">AI & IT Solutions</p>
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
              </div>
              <span className="text-2xl font-bold text-white">Zion Tech Group</span>
            </div>
<<<<<<< HEAD
            <p className="text-gray-400 mb-6 max-w-md">
              Leading provider of AI and IT solutions that transform businesses through cutting-edge technology, 
              innovation, and exceptional service delivery.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-cyan-400" />
                <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors">
                  (302) 464-0950
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-cyan-400" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <span>364 E Main St STE 1008, Middletown, DE 19709</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-cyan-400" />
                <span>Mon-Fri: 9AM-6PM EST | 24/7 Emergency Support</span>
=======
            <p className="text-gray-300 text-sm leading-relaxed">
              Leading provider of AI-powered solutions and IT services, helping businesses transform through cutting-edge technology.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-slate-700 rounded-lg flex items-center justify-center hover:bg-cyan-600 transition-colors cursor-pointer">
                <Phone className="w-4 h-4" />
              </div>
              <div className="w-8 h-8 bg-slate-700 rounded-lg flex items-center justify-center hover:bg-cyan-600 transition-colors cursor-pointer">
                <Mail className="w-4 h-4" />
              </div>
              <div className="w-8 h-8 bg-slate-700 rounded-lg flex items-center justify-center hover:bg-cyan-600 transition-colors cursor-pointer">
                <MapPin className="w-4 h-4" />
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
              </div>
            </div>
          </div>

          {/* AI Services */}
<<<<<<< HEAD
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Brain className="w-5 h-5 text-cyan-400 mr-2" />
              AI Services
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/ai-analytics" className="hover:text-cyan-400 transition-colors">
                  AI Analytics
                </Link>
              </li>
              <li>
                <Link to="/ai-automation" className="hover:text-cyan-400 transition-colors">
                  AI Automation
                </Link>
              </li>
              <li>
                <Link to="/ai-chatbot-builder" className="hover:text-cyan-400 transition-colors">
                  AI Chatbot
                </Link>
              </li>
              <li>
                <Link to="/ai-cybersecurity" className="hover:text-cyan-400 transition-colors">
                  AI Cybersecurity
                </Link>
              </li>
              <li>
                <Link to="/ai-services" className="text-cyan-400 hover:text-cyan-300 font-medium">
                  View All AI Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* IT Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Cloud className="w-5 h-5 text-cyan-400 mr-2" />
              IT Services
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/cloud-infrastructure" className="hover:text-cyan-400 transition-colors">
                  Cloud Infrastructure
                </Link>
              </li>
              <li>
                <Link to="/cybersecurity-solutions" className="hover:text-cyan-400 transition-colors">
                  Cybersecurity
                </Link>
              </li>
              <li>
                <Link to="/web-development" className="hover:text-cyan-400 transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link to="/mobile-development" className="hover:text-cyan-400 transition-colors">
                  Mobile Development
                </Link>
              </li>
              <li>
                <Link to="/it-services" className="text-cyan-400 hover:text-cyan-300 font-medium">
                  View All IT Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Users className="w-5 h-5 text-cyan-400 mr-2" />
              Company
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="hover:text-cyan-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/team" className="hover:text-cyan-400 transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-cyan-400 transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-cyan-400 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-cyan-400 transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
=======
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white flex items-center">
              <Zap className="w-5 h-5 mr-2 text-cyan-400" />
              AI Services
            </h4>
            <div className="space-y-3">
              {aiServices.slice(0, 6).map((service, index) => (
                <Link
                  key={index}
                  to={service.url}
                  className="block text-gray-300 hover:text-cyan-400 transition-colors text-sm"
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </div>

          {/* IT Services */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white flex items-center">
              <Cloud className="w-5 h-5 mr-2 text-cyan-400" />
              IT Services
            </h4>
            <div className="space-y-3">
              {itServices.slice(0, 6).map((service, index) => (
                <Link
                  key={index}
                  to={service.url}
                  className="block text-gray-300 hover:text-cyan-400 transition-colors text-sm"
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white flex items-center">
              <Users className="w-5 h-5 mr-2 text-cyan-400" />
              Company
            </h4>
            <div className="space-y-3">
              {companyLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.url}
                  className="block text-gray-300 hover:text-cyan-400 transition-colors text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
          </div>
        </div>

        {/* Bottom Section */}
<<<<<<< HEAD
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="hover:text-cyan-400 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-cyan-400 transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="hover:text-cyan-400 transition-colors">
=======
        <div className="border-t border-slate-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-gray-400 hover:text-cyan-400 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-cyan-400 transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-gray-400 hover:text-cyan-400 transition-colors">
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
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