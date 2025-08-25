import React from "react";
import { Twitter, Linkedin, Facebook, Instagram, Github, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">Z</span>
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Zion Tech Group
                </span>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed max-w-md">
                Empowering businesses with cutting-edge AI solutions and innovative technology services. 
                Transform your digital future with Zion Tech Group.
              </p>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="h-4 w-4 text-blue-400" />
                <a href="mailto:info@ziontechgroup.com" className="hover:text-blue-400 transition-colors">
                  info@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="h-4 w-4 text-blue-400" />
                <a href="tel:+13024640950" className="hover:text-blue-400 transition-colors">
                  +1 (302) 464-0950
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="h-4 w-4 text-blue-400" />
                <span>Delaware, United States</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4">
              <a 
                href="https://linkedin.com/company/ziontechgroup" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors p-2 hover:bg-gray-800 rounded-lg"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://twitter.com/ziontechgroup" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors p-2 hover:bg-gray-800 rounded-lg"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="https://github.com/ziontechgroup" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors p-2 hover:bg-gray-800 rounded-lg"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg">Services</h3>
            <ul className="space-y-3">
              <li><Link to="/ai-solutions" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">AI Solutions</Link></li>
              <li><Link to="/services/cybersecurity" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">Cybersecurity</Link></li>
              <li><Link to="/cloud-devops" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">Cloud & DevOps</Link></li>
              <li><Link to="/digital-transformation" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">Digital Transformation</Link></li>
              <li><Link to="/services/quantum-technology" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">Quantum Technology</Link></li>
              <li><Link to="/services/micro-saas-solutions" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">Micro-SaaS Solutions</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg">Company</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">About Us</Link></li>
              <li><Link to="/mission" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">Our Mission</Link></li>
              <li><Link to="/team" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">Team</Link></li>
              <li><Link to="/careers" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">Careers</Link></li>
              <li><Link to="/partners" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">Partners</Link></li>
              <li><Link to="/case-studies" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">Case Studies</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Zion Tech Group. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;