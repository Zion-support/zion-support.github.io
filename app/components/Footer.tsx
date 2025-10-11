import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <span className="text-xl font-bold">Zion Tech Group</span>
            </div>
            <p className="text-gray-400 text-sm">
              Advanced AI and IT solutions for modern businesses. We help companies leverage cutting-edge technology to achieve their goals.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link to="/ai-services" className="text-gray-400 hover:text-white transition-colors text-sm">
                  AI Services
                </Link>
              </li>
              <li>
                <Link to="/it-services" className="text-gray-400 hover:text-white transition-colors text-sm">
                  IT Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* AI Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">AI Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/ai-services" className="text-gray-400 hover:text-white transition-colors text-sm">
                  All AI Services
                </Link>
              </li>
              <li>
                <Link to="/ai-content-generator" className="text-gray-400 hover:text-white transition-colors text-sm">
                  AI Content Generator
                </Link>
              </li>
              <li>
                <Link to="/ai-chatbot-builder" className="text-gray-400 hover:text-white transition-colors text-sm">
                  AI Chatbot Builder
                </Link>
              </li>
              <li>
                <Link to="/ai-analytics-dashboard" className="text-gray-400 hover:text-white transition-colors text-sm">
                  AI Analytics Dashboard
                </Link>
              </li>
              <li>
                <Link to="/ai-email-assistant" className="text-gray-400 hover:text-white transition-colors text-sm">
                  AI Email Assistant
                </Link>
              </li>
              <li>
                <Link to="/ai-voice-assistant" className="text-gray-400 hover:text-white transition-colors text-sm">
                  AI Voice Assistant
                </Link>
              </li>
            </ul>
          </div>

          {/* IT Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">IT Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/it-services" className="text-gray-400 hover:text-white transition-colors text-sm">
                  All IT Services
                </Link>
              </li>
              <li>
                <Link to="/cloud-migration" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Cloud Migration
                </Link>
              </li>
              <li>
                <Link to="/cybersecurity-solutions" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Cybersecurity
                </Link>
              </li>
              <li>
                <Link to="/devops-cicd" className="text-gray-400 hover:text-white transition-colors text-sm">
                  DevOps & CI/CD
                </Link>
              </li>
              <li>
                <Link to="/data-analytics" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Data Analytics
                </Link>
              </li>
              <li>
                <Link to="/mobile-development" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Mobile Development
                </Link>
              </li>
            </ul>
          </div>

          {/* Micro SAAS */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Micro SAAS</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/micro-saas-services" className="text-gray-400 hover:text-white transition-colors text-sm">
                  All Micro SAAS
                </Link>
              </li>
              <li>
                <Link to="/ai-task-manager" className="text-gray-400 hover:text-white transition-colors text-sm">
                  AI Task Manager
                </Link>
              </li>
              <li>
                <Link to="/ai-expense-tracker" className="text-gray-400 hover:text-white transition-colors text-sm">
                  AI Expense Tracker
                </Link>
              </li>
              <li>
                <Link to="/ai-password-manager" className="text-gray-400 hover:text-white transition-colors text-sm">
                  AI Password Manager
                </Link>
              </li>
              <li>
                <Link to="/ai-invoice-generator" className="text-gray-400 hover:text-white transition-colors text-sm">
                  AI Invoice Generator
                </Link>
              </li>
              <li>
                <Link to="/ai-health-tracker" className="text-gray-400 hover:text-white transition-colors text-sm">
                  AI Health Tracker
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-gray-400" />
                <span className="text-gray-400 text-sm">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-gray-400" />
                <span className="text-gray-400 text-sm">+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-gray-400" />
                <span className="text-gray-400 text-sm">364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Zion Tech Group. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}