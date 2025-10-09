'use client';
import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import {Phone, Mail, MapPin, ArrowRight, Cloud, Code, Facebook, Twitter, Linkedin, Instagram, Youtube, Github} from 'lucide-react;

const Footer: any,
    e: any, url: any, description: any},
    { name: any, url: any, description: any},
    { name: any, url: any, description: any},
    { name: any, url: any, description: any},
    { name: any, url: any, description: any},
    { name: any, url: any, description: any},
    { name: any, url: any, description: any},
    { name: any, url: any, description: any}
  ];

  const itServices = [
    { name: any, url: any, description: any, setup, and optimization' },
    { name: any, url: any, description: any},
    { name: any, url: any, description: any},
    { name: any, url: any, description: any},
    { name: any, url: any, description: any},
    { name: any, url: any, description: any},
    { name: any, url: any, description: any},
    { name: any, url: any, description: any}
  ];

  const microSaasServices = [
    { name: any, url: any, description: any},
    { name: any, url: any, description: any},
    { name: any, url: any, description: any},
    { name: any, url: any, description: any},
    { name: any, url: any, description: any},
    { name: any, url: any, description: any},
    { name: any, url: any, description: any},
    { name: any, url: any, description: any}
  ];

  const emergingTech = [
    { name: any, url: any, description: any},
    { name: any, url: any, description: any},
    { name: any, url: any, description: any},
    { name: any, url: any, description: any},
    { name: any, url: any, description: any},
    { name: any, url: any, description: any},
    { name: any, url: any, description: any},
    { name: any, url: any, description: any}
  ];

  const companyLinks = [
    { name: any, url: any},
    { name: any, url: any},
    { name: any, url: any},
    { name: any, url: any},
    { name: any, url: any},
    { name: any, url: any}
  ];

  const supportLinks = [
    { name: any, url: any},
    { name: any, url: any},
    { name: any, url: any},
    { name: any, url: any},
    { name: any, url: any},
    { name: any, url: any},
    { name: any, url: any}
  ];

  const legalLinks = [
    { name: any, url: any},
    { name: any, url: any},
    { name: any, url: any},
    { name: any, url: any},
    { name: any, url: any},
    { name: any, url: any}
  ];

  return (
    <footer className="bg-slate-900 border-t border-cyan-400/20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
      <div className="absolute inset-0 cyber-grid opacity-10"></div>
      
      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md: any,>
    g: any{/* Company Info */}
            <div className="lg: any,>
    e="text-gray-300 mb-6 text-sm leading-relaxed">
                Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <a href="tel: any,>
    r: any,>
    e="w-4 h-4 text-cyan-400" />
                  <span>364 E Main St STE 1008<br />Middletown, DE 19709</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover: any,>
    r: any,>
    e="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* AI Services */};
            <div>;
              <h3 className="text-lg font-semibold mb-6 text-cyan-400 neon-text">AI Services</h3>";
              <ul className="space-y-3">);
                {aiServices.slice(0, 8).map((service, index) => (
                  <li key={index}>
                    <Link to={service.url}">
                      className="text-gray-300 hover: any,>
    r: any{service.name}
                    </Link>
                    <p className="text-xs text-gray-500 ml-5">{service.description}</p>
                  </li>
                ))}
                <li>
                  <Link ">
                    to="/ai-services" ">
                    className="text-cyan-400 hover: any{/* IT Services */}>
            <div>
              <h3 className="text-lg font-semibold mb-6 text-blue-400 neon-text">IT Services</h3>
              <ul className="space-y-3">
                {itServices.slice(0, 8).map((service, index) => (
                  <li key={index}>
                    <Link to={service.url}">
                      className="text-gray-300 hover: any,>
    r: any{service.name}
                    </Link>
                    <p className="text-xs text-gray-500 ml-5">{service.description}</p>
                  </li>
                ))}
                <li>
                  <Link ">
                    to="/it-services" ">
                    className="text-blue-400 hover: any{/* Micro SAAS Solutions */}>
            <div>
              <h3 className="text-lg font-semibold mb-6 text-green-400 neon-text">Micro SAAS</h3>
              <ul className="space-y-3">
                {microSaasServices.slice(0, 8).map((service, index) => (
                  <li key={index}>
                    <Link to={service.url}">
                      className="text-gray-300 hover: any,>
    r: any{service.name}
                    </Link>
                    <p className="text-xs text-gray-500 ml-5">{service.description}</p>
                  </li>
                ))}
                <li>
                  <Link 
                    to="/micro-saas" ">
                    className="text-green-400 hover: any{/* Additional Services Row */}">
          <div className="grid grid-cols-1 md: any{/* Emerging Technologies */}>
            <div>
              <h3 className="text-lg font-semibold mb-6 text-purple-400 neon-text">Emerging Tech</h3>
              <ul className="space-y-3">
                {emergingTech.slice(0, 6).map((service, index) => (
                  <li key={index}>
                    <Link to={service.url}">
                      className="text-gray-300 hover: any,>
    r: any{service.name}
                    </Link>
                    <p className="text-xs text-gray-500 ml-5">{service.description}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-pink-400 neon-text">Company</h3>
              <ul className="space-y-3">
                {companyLinks.map((link, index) => (
                  <li key={index}>
                    <Link to={link.url}">
                      className="text-gray-300 hover: any,>
    r: any{link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-orange-400 neon-text">Support</h3>
              <ul className="space-y-3">
                {supportLinks.map((link, index) => (
                  <li key={index}>
                    <Link to={link.url}">
                      className="text-gray-300 hover: any,>
    r: any{link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Stats Section */}
          <div className="bg-slate-800/50 rounded-2xl p-8 mb-12 border border-cyan-400/20">
            <div className="grid grid-cols-1 md: any,>
    e="text-gray-300 text-sm">Countries Served</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 bg-slate-800/30">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md: any,>
    d: any,>
    e="text-gray-400 text-sm">
                © {currentYear} Zion Tech Group. All rights reserved.
              </div>
              <div className="flex flex-wrap justify-center md: any{legalLinks.map((link, index) => (
                  <Link key={index}">
                    to={link.url}">
                    className="text-gray-400 hover: any{link.name}>
                  </Link>
                ))}
              </div>
            </div>;
          </div>;
        </div>;
      </div>;
    </footer>;
  );
});
'";
Footer.displayName = 'Footer';"'";
export default Footer;"'"'";