import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Linkedin, Twitter, Github } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { name: 'Twitter', url: 'https://twitter.com/ziontechgroup', icon: <Twitter className="w-5 h-5" /> },
    { name: 'LinkedIn', url: 'https://linkedin.com/company/ziontechgroup', icon: <Linkedin className="w-5 h-5" /> },
    { name: 'GitHub', url: 'https://github.com/ziontechgroup', icon: <Github className="w-5 h-5" /> }
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Zion Tech Group</h3>
            <p className="text-lg text-gray-300 mb-8">Advanced AI & IT Solutions</p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link to="/ai-services" className="text-gray-300 hover:text-white transition-colors">AI Services</Link></li>
              <li><Link to="/cloud-infrastructure" className="text-gray-300 hover:text-white transition-colors">Cloud Infrastructure</Link></li>
              <li><Link to="/cybersecurity-solutions" className="text-gray-300 hover:text-white transition-colors">Cybersecurity</Link></li>
              <li><Link to="/web-development" className="text-gray-300 hover:text-white transition-colors">Web Development</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/team" className="text-gray-300 hover:text-white transition-colors">Our Team</Link></li>
              <li><Link to="/careers" className="text-gray-300 hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-lg text-gray-300 mb-8">© {currentYear} Zion Tech Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
