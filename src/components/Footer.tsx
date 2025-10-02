import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Zion Tech Group
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Leading provider of AI-powered solutions, micro SaaS platforms, and enterprise IT services. 
              Transforming businesses through innovative technology.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/services/ai-services" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm">
                  AI Services
                </Link>
              </li>
              <li>
                <Link to="/services/it-services" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm">
                  IT Services
                </Link>
              </li>
              <li>
                <Link to="/services/micro-saas" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm">
                  Micro SaaS
                </Link>
              </li>
              <li>
                <Link to="/services/real-time-cognitive-automation" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm">
                  Cognitive Automation
                </Link>
              </li>
              <li>
                <Link to="/services/quantum-computing-consulting" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm">
                  Quantum Computing
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Solutions</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/solutions/enterprise" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm">
                  Enterprise Solutions
                </Link>
              </li>
              <li>
                <Link to="/solutions/smb" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm">
                  SMB Solutions
                </Link>
              </li>
              <li>
                <Link to="/solutions/startup" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm">
                  Startup Solutions
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm">
                  Resources
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300 text-sm">contact@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300 text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300 text-sm">San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 Zion Tech Group. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}