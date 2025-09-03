import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, ArrowUp } from 'lucide-react';

const EnhancedFooter = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Zion Tech Group</h3>
            <p className="text-gray-300 mb-4">
              Leading provider of cutting-edge technology solutions and AI services.
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com/company/zion-tech-group" className="text-gray-400 hover:text-white">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="https://twitter.com/ziontechgroup" className="text-gray-400 hover:text-white">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="https://github.com/zion-tech-group" className="text-gray-400 hover:text-white">
                <Github className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="/ai-services" className="text-gray-300 hover:text-white">AI Services</a></li>
              <li><a href="/micro-saas" className="text-gray-300 hover:text-white">Micro SaaS</a></li>
              <li><a href="/it-services" className="text-gray-300 hover:text-white">IT Services</a></li>
              <li><a href="/cybersecurity" className="text-gray-300 hover:text-white">Cybersecurity</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="/about" className="text-gray-300 hover:text-white">About Us</a></li>
              <li><a href="/team" className="text-gray-300 hover:text-white">Our Team</a></li>
              <li><a href="/careers" className="text-gray-300 hover:text-white">Careers</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-white">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-blue-400" />
                <span className="text-gray-300">+1 302 464 0950</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-blue-400" />
                <span className="text-gray-300">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-3 text-blue-400" />
                <span className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Zion Tech Group. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 flex items-center text-gray-400 hover:text-white"
          >
            <ArrowUp className="h-5 w-5 mr-2" />
            Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
};

export default EnhancedFooter;