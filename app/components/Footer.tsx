import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Github,
  ArrowRight,
  Brain,
  Cloud,
  Wifi,
  BarChart3,
  Shield,
  Code,
  Globe,
  Zap
} from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black/40 backdrop-blur-md border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">Z</span>
              </div>
              <span className="text-white font-bold text-xl">Zion Tech Group</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Leading provider of AI-powered solutions, IT services, micro SAAS, and digital transformation for modern businesses. Transform your operations with cutting-edge technology.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* AI Services */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold flex items-center">
              <Brain className="h-4 w-4 mr-2 text-blue-400" />
              AI Services
            </h3>
            <div className="space-y-2">
              <Link to="/ai-services" className="block text-gray-300 hover:text-white transition-colors text-sm">
                All AI Services
              </Link>
              <Link to="/ai-analytics" className="block text-gray-300 hover:text-white transition-colors text-sm">
                AI Analytics
              </Link>
              <Link to="/ai-content-generation" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Content Generation
              </Link>
              <Link to="/ai-customer-support" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Customer Support
              </Link>
              <Link to="/ai-cybersecurity" className="block text-gray-300 hover:text-white transition-colors text-sm">
                AI Cybersecurity
              </Link>
              <Link to="/zion-ai-video-generator" className="block text-gray-300 hover:text-white transition-colors text-sm">
                AI Video Generator
              </Link>
            </div>
          </div>

          {/* IT Services */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold flex items-center">
              <Settings className="h-4 w-4 mr-2 text-blue-400" />
              IT Services
            </h3>
            <div className="space-y-2">
              <Link to="/services" className="block text-gray-300 hover:text-white transition-colors text-sm">
                All Services
              </Link>
              <Link to="/cloud-migration" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Cloud Migration
              </Link>
              <Link to="/web-development" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Web Development
              </Link>
              <Link to="/devops-services" className="block text-gray-300 hover:text-white transition-colors text-sm">
                DevOps Services
              </Link>
              <Link to="/network-security" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Network Security
              </Link>
              <Link to="/managed-services" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Managed Services
              </Link>
            </div>
          </div>

          {/* 5G & Micro SAAS */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold flex items-center">
              <Wifi className="h-4 w-4 mr-2 text-blue-400" />
              5G & SAAS
            </h3>
            <div className="space-y-2">
              <Link to="/5g-solutions" className="block text-gray-300 hover:text-white transition-colors text-sm">
                5G Solutions
              </Link>
              <Link to="/micro-saas" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Micro SAAS
              </Link>
              <Link to="/project-management-tool" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Project Management
              </Link>
              <Link to="/customer-relationship-manager" className="block text-gray-300 hover:text-white transition-colors text-sm">
                CRM System
              </Link>
              <Link to="/social-media-scheduler" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Social Media Tools
              </Link>
            </div>
          </div>

          {/* Company & Support */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold flex items-center">
              <Globe className="h-4 w-4 mr-2 text-blue-400" />
              Company
            </h3>
            <div className="space-y-2">
              <Link to="/about" className="block text-gray-300 hover:text-white transition-colors text-sm">
                About Us
              </Link>
              <Link to="/blog" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Blog
              </Link>
              <Link to="/tutorials" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Tutorials
              </Link>
              <Link to="/demo" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Demo
              </Link>
              <Link to="/support" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Support
              </Link>
            </div>
          </div>
        </div>

        {/* Contact Info Section */}
        <div className="border-t border-white/10 mt-8 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-blue-400" />
              <div>
                <p className="text-white font-medium">Email</p>
                <p className="text-gray-300 text-sm">info@ziontechgroup.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-blue-400" />
              <div>
                <p className="text-white font-medium">Phone</p>
                <p className="text-gray-300 text-sm">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="h-5 w-5 text-blue-400" />
              <div>
                <p className="text-white font-medium">Location</p>
                <p className="text-gray-300 text-sm">New York, NY</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-gray-400 text-sm">
                © 2024 Zion Tech Group. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Terms of Service
                </Link>
              </div>
            </div>
            <div className="mt-4 md:mt-0">
              <p className="text-gray-400 text-xs">
                Powered by cutting-edge AI and modern technology
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;