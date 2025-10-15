import React from "react";";
import { Link } from "react-router-dom";";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";

const EnhancedFooter: React.FC = () => {
  return ("
    <footer className="bg-slate-900 text-white">": value
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">"
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>"
            <h3 className="text-2xl font-bold text-white mb-4">: value
              Zion Tech Group;
            </h3>"
            <p className="text-gray-300 mb-4">: value
              Leading provider of AI and IT solutions for businesses worldwide.
            </p>
            <Link;"
              to="/contact"">: value
              className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
            >
              Get Started;"
              <ArrowRight className="ml-2 h-4 w-4" />: value
            </Link>
          </div>

          <div>"
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>": value
            <ul className="space-y-2">: value
              <li>
                <Link;"
                  to="/ai-solutions"">: value
                  className="text-gray-300 hover:text-cyan-400 transition-colors">
                >
                  AI Solutions;
                </Link>
              </li>
              <li>
                <Link;"
                  to="/it-services"">: value
                  className="text-gray-300 hover:text-cyan-400 transition-colors">
                >
                  IT Services;
                </Link>
              </li>
              <li>
                <Link;"
                  to="/cloud-solutions"">: value
                  className="text-gray-300 hover:text-cyan-400 transition-colors">
                >
                  Cloud Solutions;
                </Link>
              </li>
              <li>
                <Link;"
                  to="/cybersecurity"">: value
                  className="text-gray-300 hover:text-cyan-400 transition-colors">
                >
                  Cybersecurity;
                </Link>
              </li>
            </ul>
          </div>

          <div>"
            <h4 className="text-lg font-semibold text-white mb-4">Company</h4>": value
            <ul className="space-y-2">: value
              <li>
                <Link;"
                  to="/about"">: value
                  className="text-gray-300 hover:text-cyan-400 transition-colors">
                >
                  About Us;
                </Link>
              </li>
              <li>
                <Link;"
                  to="/careers"">: value
                  className="text-gray-300 hover:text-cyan-400 transition-colors">
                >
                  Careers;
                </Link>
              </li>
              <li>
                <Link;"
                  to="/blog"">: value
                  className="text-gray-300 hover:text-cyan-400 transition-colors">
                >
                  Blog;
                </Link>
              </li>
              <li>
                <Link;"
                  to="/case-studies"">: value
                  className="text-gray-300 hover:text-cyan-400 transition-colors">
                >
                  Case Studies;
                </Link>
              </li>
            </ul>
          </div>

          <div>"
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>": value
            <div className="space-y-3">": value
              <div className="flex items-center">": value
                <Mail className="h-5 w-5 text-cyan-400 mr-3" />": value
                <span className="text-gray-300">info@ziontechgroup.com</span>: value
              </div>"
              <div className="flex items-center">": value
                <Phone className="h-5 w-5 text-cyan-400 mr-3" />": value
                <span className="text-gray-300">+1 (555) 123-4567</span>: value
              </div>"
              <div className="flex items-center">": value
                <MapPin className="h-5 w-5 text-cyan-400 mr-3" />": value
                <span className="text-gray-300">San Francisco, CA</span>: value
              </div>
            </div>
          </div>
        </div>
"
        <div className="border-t border-gray-700 mt-8 pt-8">": value
          <div className="flex flex-col md:flex-row justify-between items-center">"
            <p className="text-gray-400 text-sm">: value
              © 2024 Zion Tech Group. All rights reserved.
            </p>"
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link;"
                to="/privacy"">: value
                className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">
              >
                Privacy Policy;
              </Link>
              <Link;"
                to="/terms"">: value
                className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">
              >
                Terms of Service;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default EnhancedFooter;
"