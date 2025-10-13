import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Zion Tech Group
            </h3>
            <p className="text-gray-300 mb-6">
              Leading provider of AI-powered solutions, cybersecurity, cloud infrastructure, 
              and digital transformation services.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-purple-400" />
                <span className="text-gray-300">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-purple-400" />
                <span className="text-gray-300">+1-302-464-0950</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-purple-400" />
                <span className="text-gray-300">364 E Main St STE 1008, Middletown, DE 19709</span>
              </div>
            </div>
          </div>

          {/* AI Solutions */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-cyan-400">AI Solutions</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/ai-automated-reporting" className="text-gray-300 hover:text-purple-400 transition-colors">
                  AI Automated Reporting
                </Link>
              </li>
              <li>
                <Link to="/ai-data-analytics-pro" className="text-gray-300 hover:text-purple-400 transition-colors">
                  AI Data Analytics Pro
                </Link>
              </li>
              <li>
                <Link to="/ai-email-assistant" className="text-gray-300 hover:text-purple-400 transition-colors">
                  AI Email Assistant
                </Link>
              </li>
              <li>
                <Link to="/ai-fraud-detection" className="text-gray-300 hover:text-purple-400 transition-colors">
                  AI Fraud Detection
                </Link>
              </li>
              <li>
                <Link to="/ai-predictive-analytics" className="text-gray-300 hover:text-purple-400 transition-colors">
                  AI Predictive Analytics
                </Link>
              </li>
            </ul>
          </div>

          {/* IT Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-cyan-400">IT Services</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/cybersecurity-solutions" className="text-gray-300 hover:text-purple-400 transition-colors">
                  Cybersecurity Solutions
                </Link>
              </li>
              <li>
                <Link to="/cloud-infrastructure" className="text-gray-300 hover:text-purple-400 transition-colors">
                  Cloud Infrastructure
                </Link>
              </li>
              <li>
                <Link to="/custom-software" className="text-gray-300 hover:text-purple-400 transition-colors">
                  Custom Software Development
                </Link>
              </li>
              <li>
                <Link to="/database-management" className="text-gray-300 hover:text-purple-400 transition-colors">
                  Database Management
                </Link>
              </li>
              <li>
                <Link to="/network-infrastructure" className="text-gray-300 hover:text-purple-400 transition-colors">
                  Network Infrastructure
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-cyan-400">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-purple-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-purple-400 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-purple-400 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="text-gray-300 hover:text-purple-400 transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-gray-300 hover:text-purple-400 transition-colors">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-700/50">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Zion Tech Group. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 bg-gradient-to-r from-purple-900/50 to-blue-900/50 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Join thousands of businesses already using our AI and IT solutions to boost their performance and achieve guaranteed ROI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 flex items-center justify-center"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              to="/demo" 
              className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-3 px-8 rounded-lg transition duration-300"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}