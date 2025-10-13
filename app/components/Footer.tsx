<<<<<<< HEAD
import React from 'react';
import { Helmet } from 'react-helmet-async';
=======
'use client';
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
>>>>>>> cursor/delete-records-a75e

export default function FooterPage() {
  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Footer - Zion Tech Group</title>
        <meta name="description" content="Advanced Footer solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Footer
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            This page is under development. Please check back later.
=======
    <footer className="bg-slate-900 border-t border-purple-500/20">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Zion Tech Group</h3>
            <p className="text-gray-300 text-sm">
              Advanced AI and IT solutions for modern businesses.
            </p>
          </div>
          <div>
            <h4 className="text-white text-md font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/ai-services" className="text-gray-300 hover:text-white text-sm">
                  AI Solutions
                </Link>
              </li>
              <li>
                <Link to="/it-services" className="text-gray-300 hover:text-white text-sm">
                  IT Services
                </Link>
              </li>
              <li>
                <Link to="/consultation" className="text-gray-300 hover:text-white text-sm">
                  Consultation
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white text-md font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-300 hover:text-white text-sm">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white text-md font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
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
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700">
          <p className="text-gray-300 text-sm text-center">
            © {currentYear} Zion Tech Group. All rights reserved.
>>>>>>> cursor/delete-records-a75e
          </p>
        </div>
      </div>
    </div>
  );
<<<<<<< HEAD
}
=======
};

export default Footer;
>>>>>>> cursor/delete-records-a75e
