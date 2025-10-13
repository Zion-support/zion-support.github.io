'use client';
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-purple-500/20">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Zion Tech Group</h3>
            <p className="text-gray-300 text-sm">
              Leading the future of technology with innovative AI, cloud, and 5G solutions.
            </p>
          </div>
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/ai-services" className="text-gray-300 hover:text-white text-sm">
                  AI Services
                </Link>
              </li>
              <li>
                <Link to="/cloud-infrastructure" className="text-gray-300 hover:text-white text-sm">
                  Cloud Infrastructure
                </Link>
              </li>
              <li>
                <Link to="/5g-solutions" className="text-gray-300 hover:text-white text-sm">
                  5G Solutions
                </Link>
              </li>
              <li>
                <Link to="/cybersecurity-solutions" className="text-gray-300 hover:text-white text-sm">
                  Cybersecurity
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white text-sm">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-300 hover:text-white text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-300 hover:text-white text-sm">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Contact</h4>
            <div className="space-y-2">
              <p className="text-gray-300 text-sm">info@ziontechgroup.com</p>
              <p className="text-gray-300 text-sm">+1 (555) 123-4567</p>
              <p className="text-gray-300 text-sm">New York, NY</p>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700">
          <p className="text-gray-300 text-sm text-center">
            © {currentYear} Zion Tech Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;