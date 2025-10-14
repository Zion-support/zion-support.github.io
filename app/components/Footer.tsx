import React from 'react';
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';

export default function Footer() {
  return (
    <>
      <Helmet>
        <title>Footer - Zion Tech Group</title>
        <meta name="description" content="Professional footer services by Zion Tech Group." />
      </Helmet>
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">
              Footer
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Professional footer services by Zion Tech Group.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">
                  Expert Solutions
                </h3>
                <p className="text-blue-700">
                  Our team of experts delivers cutting-edge solutions.
                </p>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-900 mb-2">
                  Custom Implementation
                </h3>
                <p className="text-green-700">
                  Tailored implementations for your specific requirements.
                </p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-purple-900 mb-2">
                  24/7 Support
                </h3>
                <p className="text-purple-700">
                  Round-the-clock support for all your needs.
                </p>
=======
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Github, Twitter, Linkedin, Brain, ArrowRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const services = [
    { name: 'AI Solutions', href: '/ai-solutions' },
    { name: 'Cybersecurity', href: '/cybersecurity' },
    { name: 'Cloud Infrastructure', href: '/cloud-infrastructure' },
    { name: 'Digital Transformation', href: '/digital-transformation' },
    { name: 'IT Services', href: '/it-services' },
    { name: 'Micro SAAS', href: '/micro-saas' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Zion Tech Group</span>
            </div>
            <p className="text-gray-400 mb-4">
              Leading technology solutions provider specializing in AI, cybersecurity, and digital transformation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.href}
                    className="text-gray-400 hover:text-white transition-colors flex items-center"
                  >
                    <ArrowRight className="w-3 h-3 mr-2" />
                    {service.name}

                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/careers" className="text-gray-400 hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>

            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-blue-400" />
                <span className="text-gray-300">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-blue-400" />
                <span className="text-gray-300">+1-302-464-0950</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-blue-400" />
                <span className="text-gray-300">Middletown, DE</span>

>>>>>>> 5bbf6eb309caf703a91374ea05e64114adb2cc9b
              </div>
            </div>
          </div>
        </div>
<<<<<<< HEAD
=======

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} Zion Tech Group. All rights reserved.
          </p>

        </div>
>>>>>>> 5bbf6eb309caf703a91374ea05e64114adb2cc9b
      </div>
    </>
  );
}