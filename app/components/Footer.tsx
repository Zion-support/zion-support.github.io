import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Brain, Cloud, Cpu, Wifi, Lock, BarChart3 } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="space-y-4 lg:col-span-2">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-500/25">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Zion Tech Group</span>
            </div>
            <p className="text-gray-400 text-sm">
              Advanced AI and IT solutions for modern businesses. We help companies leverage cutting-edge technology to achieve their goals.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/ziontechgroup" className="text-gray-400 hover:text-cyan-400 transition-colors hover:scale-110 transform">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/company/ziontechgroup" className="text-gray-400 hover:text-cyan-400 transition-colors hover:scale-110 transform">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://twitter.com/ziontechgroup" className="text-gray-400 hover:text-cyan-400 transition-colors hover:scale-110 transform">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-cyan-400">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-cyan-300 transition-colors text-sm hover:translate-x-1 transform">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-cyan-300 transition-colors text-sm hover:translate-x-1 transform">
                  About
                </Link>
              </li>
              <li>
                <Link to="/ai-services" className="text-gray-400 hover:text-cyan-300 transition-colors text-sm hover:translate-x-1 transform">
                  AI Services
                </Link>
              </li>
              <li>
                <Link to="/it-services" className="text-gray-400 hover:text-cyan-300 transition-colors text-sm hover:translate-x-1 transform">
                  IT Services
                </Link>
              </li>
              <li>
                <Link to="/micro-saas-services" className="text-gray-400 hover:text-cyan-300 transition-colors text-sm hover:translate-x-1 transform">
                  Micro SAAS
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-cyan-300 transition-colors text-sm hover:translate-x-1 transform">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* AI Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-cyan-400 flex items-center">
              <Brain className="w-5 h-5 mr-2" />
              AI Services
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/ai-services" className="text-gray-400 hover:text-cyan-300 transition-colors text-sm hover:translate-x-1 transform">
                  All AI Services
                </Link>
              </li>
              <li>
                <Link to="/ai-content-generator" className="text-gray-400 hover:text-cyan-300 transition-colors text-sm hover:translate-x-1 transform">
                  AI Content Generator
                </Link>
              </li>
              <li>
                <Link to="/ai-chatbot-builder" className="text-gray-400 hover:text-cyan-300 transition-colors text-sm hover:translate-x-1 transform">
                  AI Chatbot Builder
                </Link>
              </li>
              <li>
                <Link to="/ai-analytics-dashboard" className="text-gray-400 hover:text-cyan-300 transition-colors text-sm hover:translate-x-1 transform">
                  AI Analytics Dashboard
                </Link>
              </li>
              <li>
                <Link to="/ai-email-assistant" className="text-gray-400 hover:text-cyan-300 transition-colors text-sm hover:translate-x-1 transform">
                  AI Email Assistant
                </Link>
              </li>
              <li>
                <Link to="/ai-voice-assistant" className="text-gray-400 hover:text-cyan-300 transition-colors text-sm hover:translate-x-1 transform">
                  AI Voice Assistant
                </Link>
              </li>
            </ul>
          </div>

          {/* IT Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-cyan-400 flex items-center">
              <Cloud className="w-5 h-5 mr-2" />
              IT Services
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/it-services" className="text-gray-400 hover:text-cyan-300 transition-colors text-sm hover:translate-x-1 transform">
                  All IT Services
                </Link>
              </li>
              <li>
                <Link to="/cloud-migration" className="text-gray-400 hover:text-cyan-300 transition-colors text-sm hover:translate-x-1 transform">
                  Cloud Migration
                </Link>
              </li>
              <li>
                <Link to="/cybersecurity-solutions" className="text-gray-400 hover:text-cyan-300 transition-colors text-sm hover:translate-x-1 transform">
                  Cybersecurity
                </Link>
              </li>
              <li>
                <Link to="/devops-cicd" className="text-gray-400 hover:text-cyan-300 transition-colors text-sm hover:translate-x-1 transform">
                  DevOps & CI/CD
                </Link>
              </li>
              <li>
                <Link to="/data-analytics" className="text-gray-400 hover:text-cyan-300 transition-colors text-sm hover:translate-x-1 transform">
                  Data Analytics
                </Link>
              </li>
              <li>
                <Link to="/mobile-development" className="text-gray-400 hover:text-cyan-300 transition-colors text-sm hover:translate-x-1 transform">
                  Mobile Development
                </Link>
              </li>
            </ul>
          </div>

          {/* Micro SAAS */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-cyan-400 flex items-center">
              <Cpu className="w-5 h-5 mr-2" />
              Micro SAAS
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/micro-saas-services" className="text-gray-400 hover:text-cyan-300 transition-colors text-sm hover:translate-x-1 transform">
                  All Micro SAAS
                </Link>
              </li>
              <li>
                <Link to="/ai-task-manager" className="text-gray-400 hover:text-cyan-300 transition-colors text-sm hover:translate-x-1 transform">
                  AI Task Manager
                </Link>
              </li>
              <li>
                <Link to="/ai-expense-tracker" className="text-gray-400 hover:text-cyan-300 transition-colors text-sm hover:translate-x-1 transform">
                  AI Expense Tracker
                </Link>
              </li>
              <li>
                <Link to="/ai-password-manager" className="text-gray-400 hover:text-cyan-300 transition-colors text-sm hover:translate-x-1 transform">
                  AI Password Manager
                </Link>
              </li>
              <li>
                <Link to="/ai-invoice-generator" className="text-gray-400 hover:text-cyan-300 transition-colors text-sm hover:translate-x-1 transform">
                  AI Invoice Generator
                </Link>
              </li>
              <li>
                <Link to="/ai-health-tracker" className="text-gray-400 hover:text-cyan-300 transition-colors text-sm hover:translate-x-1 transform">
                  AI Health Tracker
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-cyan-400">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 group">
                <Mail className="w-4 h-4 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                <a href="mailto:kleber@ziontechgroup.com" className="text-gray-400 hover:text-cyan-300 transition-colors text-sm">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-center space-x-3 group">
                <Phone className="w-4 h-4 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                <a href="tel:+13024640950" className="text-gray-400 hover:text-cyan-300 transition-colors text-sm">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex items-start space-x-3 group">
                <MapPin className="w-4 h-4 text-cyan-400 group-hover:text-cyan-300 transition-colors mt-0.5" />
                <span className="text-gray-400 text-sm">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-cyan-500/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Zion Tech Group. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="/privacy-policy" className="text-gray-400 hover:text-cyan-300 transition-colors text-sm hover:translate-y-[-1px] transform">
                Privacy Policy
              </a>
              <a href="/terms-of-service" className="text-gray-400 hover:text-cyan-300 transition-colors text-sm hover:translate-y-[-1px] transform">
                Terms of Service
              </a>
              <a href="/sitemap" className="text-gray-400 hover:text-cyan-300 transition-colors text-sm hover:translate-y-[-1px] transform">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}