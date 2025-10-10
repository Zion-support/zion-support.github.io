import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Cloud, Network, Phone, Mail, MapPin, Heart, Info } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Zion Tech Group</h3>
                <p className="text-sm text-cyan-400">AI & IT SOLUTIONS</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading provider of AI and IT solutions for modern businesses. 
              We help companies transform their operations with cutting-edge technology.
            </p>
            <div className="space-y-3">
              <a
                href="tel:+13024640950"
                className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>(302) 464-0950</span>
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>kleber@ziontechgroup.com</span>
              </a>
              <div className="flex items-start space-x-2 text-gray-300">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span className="text-sm">364 E Main St STE 1008<br />Middletown DE 19709</span>
              </div>
            </div>
          </div>

          {/* AI Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">AI Services</h4>
            <ul className="space-y-3">
              <li><Link to="/ai-analytics" className="text-gray-300 hover:text-cyan-400 transition-colors">AI Analytics</Link></li>
              <li><Link to="/ai-automation" className="text-gray-300 hover:text-cyan-400 transition-colors">AI Automation</Link></li>
              <li><Link to="/ai-chatbot-builder" className="text-gray-300 hover:text-cyan-400 transition-colors">AI Chatbot</Link></li>
              <li><Link to="/ai-crm" className="text-gray-300 hover:text-cyan-400 transition-colors">AI CRM</Link></li>
              <li><Link to="/ai-cybersecurity" className="text-gray-300 hover:text-cyan-400 transition-colors">AI Cybersecurity</Link></li>
              <li><Link to="/ai-services" className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium">View All AI Services →</Link></li>
            </ul>
          </div>

          {/* IT Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">IT Services</h4>
            <ul className="space-y-3">
              <li><Link to="/cloud-infrastructure" className="text-gray-300 hover:text-cyan-400 transition-colors">Cloud Infrastructure</Link></li>
              <li><Link to="/cybersecurity-solutions" className="text-gray-300 hover:text-cyan-400 transition-colors">Cybersecurity</Link></li>
              <li><Link to="/web-development" className="text-gray-300 hover:text-cyan-400 transition-colors">Web Development</Link></li>
              <li><Link to="/mobile-development" className="text-gray-300 hover:text-cyan-400 transition-colors">Mobile Development</Link></li>
              <li><Link to="/devops-cicd" className="text-gray-300 hover:text-cyan-400 transition-colors">DevOps & CI/CD</Link></li>
              <li><Link to="/it-services" className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium">View All IT Services →</Link></li>
            </ul>
          </div>

          {/* Micro SaaS */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Micro SaaS</h4>
            <ul className="space-y-3">
              <li><Link to="/zion-analytics-pro" className="text-gray-300 hover:text-cyan-400 transition-colors">Zion Analytics Pro</Link></li>
              <li><Link to="/zion-chat-ai" className="text-gray-300 hover:text-cyan-400 transition-colors">Zion Chat AI</Link></li>
              <li><Link to="/zion-security-shield" className="text-gray-300 hover:text-cyan-400 transition-colors">Zion Security Shield</Link></li>
              <li><Link to="/zion-cloud-vault" className="text-gray-300 hover:text-cyan-400 transition-colors">Zion Cloud Vault</Link></li>
              <li><Link to="/zion-content-studio" className="text-gray-300 hover:text-cyan-400 transition-colors">Zion Content Studio</Link></li>
              <li><Link to="/micro-saas" className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium">View All Micro SaaS →</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Zion Tech Group. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Privacy Policy</Link>
              <Link to="/terms" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Terms of Service</Link>
              <Link to="/cookies" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
