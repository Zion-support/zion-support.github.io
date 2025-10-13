<<<<<<< HEAD
import React from 'react';
=======
<<<<<<< HEAD
<<<<<<< HEAD
'use client;

import React, { memo } from 'react;

import { Link } from 'react-router-dom;

import { Phone, Mail, MapPin, Clock, Zap, Brain, Cloud, Code, Users } from lucide-react;

const Footer: React.FC = memo(() => {;

const currentYear = new Date().getFullYear();;;

const aiServices = [;;;

    { name: 'AI Solutions', url: '/ai-services', description: 'Comprehensive AI solutions },
    { name: 'AI Marketing Automation', url: '/ai-marketing', description: 'AI-powered marketing automation },
    { name: 'AI Customer Support', url: '/ai-customer-support', description: 'AI-powered customer service },
    { name: 'AI Data Analytics', url: '/ai-data-analytics', description: 'Advanced data insights },
    { name: 'AI Content Generation', url: '/ai-content-generation', description: 'AI content creation },
    { name: 'AI Healthcare Solutions', url: '/ai-healthcare', description: 'Medical AI solutions },
    { name: 'AI Financial Services', url: '/ai-fintech', description: 'Financial AI applications },
    { name: 'AI E-commerce Solutions', url: '/ai-ecommerce-solutions', description: 'E-commerce AI solutions },
    { name: 'AI Cybersecurity', url: '/ai-cybersecurity', description: 'AI security solutions },
    { name: 'AI Mobile Apps', url: '/ai-mobile-app-development', description: 'Mobile AI applications },
    { name: 'AI Sales Automation', url: '/ai-sales-automation', description: 'Intelligent sales processes },
    { name: 'AI Workflow Automation', url: '/ai-workflow-automation', description: 'Workflow optimization },
    { name: 'AI Data Visualization', url: '/ai-data-visualization', description: 'Advanced data visualization },
    { name: 'AI Lead Generation', url: '/ai-lead-generation', description: 'AI-powered lead generation },
    { name: 'AI Document Processing', url: '/ai-document-processing', description: 'AI document processing },
    { name: 'AI Process Automation', url: '/ai-automation', description: 'Intelligent process automation }

=======
'use client';
import React, { memo } from 'react';
>>>>>>> origin/cursor/ad-creation-and-management-f267
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Zion Tech Group</h3>
            <p className="text-gray-400">
              Advanced AI and IT solutions for modern businesses.
            </p>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link to="/ai-services" className="text-gray-400 hover:text-white">AI Services</Link></li>
              <li><Link to="/cloud-solutions" className="text-gray-400 hover:text-white">Cloud Solutions</Link></li>
              <li><Link to="/cybersecurity" className="text-gray-400 hover:text-white">Cybersecurity</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white">About</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
              <li><Link to="/careers" className="text-gray-400 hover:text-white">Careers</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-400 hover:text-white">Terms of Service</Link></li>
            </ul>
          </div>
<<<<<<< HEAD
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Zion Tech Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
=======
          {/* Emerging Technologies */}

          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyan-400 flex items-center>
              <Zap className="w-5 h-5 mr-2 />
              Emerging Tech
            </h3>
<<<<<<< HEAD
            <ul className="space-y-2>
              {emergingTech.map((service, index) => (

=======
            <ul className="space-y-2">
              {emergingTech.map((service, index) => (}
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
                <li key={index}>
                  <Link 
                    href={service.url}

                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm
                  >
                    {service.name}

                  </Link>
                </li>
                ))}

            </ul>
          </div>
          {/* Company & Support */}

          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyan-400 flex items-center>
              <Users className="w-5 h-5 mr-2 />
              Company
            </h3>
<<<<<<< HEAD
            <ul className="space-y-2 mb-6>
              {companyLinks.map((link, index) => (

=======
            <ul className="space-y-2 mb-6">
              {companyLinks.map((link, index) => (}
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
                <li key={index}>
                  <Link 
                    href={link.url}

                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm
                  >
                    {link.name}

                  </Link>
                </li>
                ))}

            </ul>
<<<<<<< HEAD
            <h3 className="text-lg font-semibold mb-4 text-cyan-400>Support</h3>
            <ul className="space-y-2 mb-6>
              {supportLinks.map((link, index) => (

=======
            <h3 className="text-lg font-semibold mb-4 text-cyan-400">Support</h3>
            <ul className="space-y-2 mb-6">
              {supportLinks.map((link, index) => (}
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
                <li key={index}>
                  <Link 
                    href={link.url}

                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm
                  >
                    {link.name}

                  </Link>
                </li>
                ))}

            </ul>
            <div className="space-y-3>
              <div className="flex items-center text-sm text-gray-300>
                <Phone className="w-4 h-4 mr-2 text-cyan-400 />
                <a href={`tel:${contactInfo.phone}`} className="hover:text-cyan-400 transition-colors font-medium>
                  {contactInfo.phone}

                </a>
              </div>
              <div className="flex items-center text-sm text-gray-300>
                <Mail className="w-4 h-4 mr-2 text-cyan-400 />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-cyan-400 transition-colors font-medium>
                  {contactInfo.email}

                </a>
              </div>
              <div className="flex items-start text-sm text-gray-300>
                <MapPin className="w-4 h-4 mr-2 text-cyan-400 mt-0.5 />
                <span className="leading-relaxed>{contactInfo.address}</span>
              </div>
              <div className="flex items-center text-sm text-gray-300>
                <Clock className="w-4 h-4 mr-2 text-cyan-400 />
                <span>{contactInfo.hours}</span>
              </div>
              <div className="text-xs text-cyan-400 font-medium>
                {contactInfo.emergency}

=======
import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Zion Tech</span>
            </div>
            <p className="text-gray-300 text-sm">
              Leading provider of advanced AI and IT solutions for businesses worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-cyan-400 transition-colors">About</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-cyan-400 transition-colors">Services</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-cyan-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/ai-services" className="text-gray-300 hover:text-cyan-400 transition-colors">AI Solutions</Link></li>
              <li><Link to="/it-services" className="text-gray-300 hover:text-cyan-400 transition-colors">IT Services</Link></li>
              <li><Link to="/consultation" className="text-gray-300 hover:text-cyan-400 transition-colors">Consultation</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span className="text-gray-300 text-sm">info@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-cyan-400" />
                <span className="text-gray-300 text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span className="text-gray-300 text-sm">Global Services</span>
>>>>>>> cursor/fix-errors-and-merge-to-main-92c8
              </div>
            </div>
          </div>
        </div>
<<<<<<< HEAD
        <div className="mt-8 pt-8 border-t border-gray-700>
          <div className="flex flex-col md:flex-row justify-between items-center>
            <div className="text-sm text-gray-400 mb-4 md:mb-0>
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            <div className="flex space-x-6>
              <a href="/privacy" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors>
                Privacy Policy
              </a>
              <a href="/terms" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors>
                Terms of Service
              </a>
              <a href="/cookies" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors>
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )})
Footer.displayName = 'Footer
=======

        <div className="border-t border-slate-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Zion Tech Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

>>>>>>> cursor/fix-errors-and-merge-to-main-92c8
export default Footer;
>>>>>>> origin/cursor/ad-creation-and-management-f267
