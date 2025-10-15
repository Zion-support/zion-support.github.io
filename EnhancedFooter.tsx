import React from "react";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";

const EnhancedFooter: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Zion Tech Group
            </h3>
            <p className="text-gray-300 mb-4">
              Leading provider of AI and IT solutions for businesses worldwide.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
            >
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/ai-solutions"
                  className="text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  AI Solutions
                </a>
              </li>
              <li>
                <a
                  href="/it-services"
                  className="text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  IT Services
                </a>
              </li>
              <li>
                <a
                  href="/cloud-solutions"
                  className="text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  Cloud Solutions
                </a>
              </li>
              <li>
                <a
                  href="/5g-solutions"
                  className="text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  5G Solutions
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/about"
                  className="text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/team"
                  className="text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  Our Team
                </a>
              </li>
              <li>
                <a
                  href="/careers"
                  className="text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="/case-studies"
                  className="text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  Case Studies
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-cyan-400 mr-3" />
                <span className="text-gray-300">info@ziontechgroup.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-cyan-400 mr-3" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-cyan-400 mr-3" />
                <span className="text-gray-300">San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              © 2024 Zion Tech Group. All rights reserved.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="/privacy"
                className="text-gray-400 hover:text-cyan-400 text-sm transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="text-gray-400 hover:text-cyan-400 text-sm transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="/cookies"
                className="text-gray-400 hover:text-cyan-400 text-sm transition-colors"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default EnhancedFooter;