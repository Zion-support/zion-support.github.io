import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Zion Tech</h3>
            <p className="text-gray-300">
              Advanced AI & IT Solutions for modern businesses.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>AI Solutions</li>
              <li>Cybersecurity</li>
              <li>5G Technology</li>
              <li>Cloud Services</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <span>info@ziontech.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                <span>123 Tech Street, Innovation City</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Hours</h4>
            <div className="flex items-center text-gray-300">
              <Clock className="w-4 h-4 mr-2" />
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 Zion Tech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;