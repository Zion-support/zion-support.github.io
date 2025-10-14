import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-40 hover:text-white">About</Link></li>
              <li><Link to="/careers" className="text-gray-40 hover:text-white">Careers</Link></li>
              <li><Link to="/contact" className="text-gray-40 hover:text-white">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/ai-services" className="text-gray-40 hover:text-white">AI Services</Link></li>
              <li><Link to="/it-services" className="text-gray-40 hover:text-white">IT Services</Link></li>
              <li><Link to="/cloud-services" className="text-gray-40 hover:text-white">Cloud Services</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/blog" className="text-gray-40 hover:text-white">Blog</Link></li>
              <li><Link to="/case-studies" className="text-gray-40 hover:text-white">Case Studies</Link></li>
              <li><Link to="/privacy" className="text-gray-40 hover:text-white">Privacy</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center text-gray-40">
                <Mail className="w-4 h-4 mr-2" />
                contact@ziontech.com
              </div>
              <div className="flex items-center text-gray-40">
                <Phone className="w-4 h-4 mr-2" />
                +1 (555) 123-4567
              </div>
              <div className="flex items-center text-gray-40">
                <MapPin className="w-4 h-4 mr-2" />
                San Francisco, CA
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-80 mt-8 pt-8 text-center text-gray-40">
          <p>&copy; 224 Zion Tech Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
};

export default Footer;