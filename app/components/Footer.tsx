<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-01d9
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-029f
'use client';
import React, { memo } from 'react';
>>>>>>> origin/cursor/ad-creation-and-management-f267
import { Link } from 'react-router-dom';
<<<<<<< HEAD
=======
import { Phone, Mail, MapPin, Clock, Brain } from 'lucide-react';

const Footer: React.FC = memo(() => {
  const currentYear = new Date().getFullYear();
  
  const companyLinks = [
    { name: 'About Us', url: '/about' },
    { name: 'Our Team', url: '/team' },
    { name: 'Case Studies', url: '/case-studies' },
    { name: 'Blog', url: '/blog' },
    { name: 'Careers', url: '/careers' },
    { name: 'Partners', url: '/partners' },
    { name: 'Support', url: '/support' },
    { name: 'Status', url: '/status' }
  ];

  const resourcesLinks = [
    { name: 'Pricing', url: '/pricing' },
    { name: 'FAQ', url: '/faq' },
    { name: 'Documentation', url: '/docs' },
    { name: 'API Reference', url: '/api-docs' },
    { name: 'Tutorials', url: '/tutorials' },
    { name: 'Community', url: '/community' },
    { name: 'Demo', url: '/demo' },
    { name: 'Compliance', url: '/compliance' }
  ];

  const enterpriseLinks = [
    { name: 'Enterprise Solutions', url: '/enterprise' },
    { name: 'Digital Transformation', url: '/digital-transformation' },
    { name: 'Business Intelligence', url: '/business-intelligence' },
    { name: 'Edge Computing', url: '/edge-computing' },
    { name: 'Consultation', url: '/consultation' },
    { name: 'Custom Development', url: '/custom-software' }
  ];
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-01d9

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Zion Tech Group</h3>
            <p className="text-gray-400">
              Advanced AI and IT solutions for modern businesses.
=======
import React from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, ArrowRight, Brain, Cloud, Shield, Globe, Database, Smartphone } from 'lucide-react'

export default function Footer() {
  const aiServices = [
    { name: 'AI Content Generator', path: '/ai-services' },
    { name: 'AI Chatbot Builder', path: '/ai-services' },
    { name: 'AI Analytics Dashboard', path: '/ai-services' },
    { name: 'AI Email Assistant', path: '/ai-services' }
  ]

  const itServices = [
    { name: 'Cloud Migration', path: '/it-services' },
    { name: 'Cybersecurity', path: '/it-services' },
    { name: 'Mobile Development', path: '/it-services' },
    { name: 'Data Analytics', path: '/it-services' }
  ]

  const microSaasServices = [
    { name: 'AI Task Manager', path: '/micro-saas-services' },
    { name: 'AI Expense Tracker', path: '/micro-saas-services' },
    { name: 'AI Password Manager', path: '/micro-saas-services' },
    { name: 'AI Invoice Generator', path: '/micro-saas-services' }
  ]

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms of Service', path: '/terms' }
  ]

  return (
    <footer className="bg-gray-900/50 backdrop-blur-lg border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mr-2">
                <span className="text-white font-bold text-sm">Z</span>
              </div>
              <span className="text-xl font-bold text-white">Zion Tech Group</span>
            </div>
            <p className="text-gray-300 mb-4">
              Leading provider of AI-powered solutions, IT services, and digital transformation for modern businesses.
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-033b
            </p>
          </div>
<<<<<<< HEAD
<<<<<<< HEAD
          <div>
            <h4 className="text-md font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link to="/ai-services" className="text-gray-400 hover:text-white">AI Services</Link></li>
              <li><Link to="/cloud-solutions" className="text-gray-400 hover:text-white">Cloud Solutions</Link></li>
              <li><Link to="/cybersecurity" className="text-gray-400 hover:text-white">Cybersecurity</Link></li>
=======

          {/* AI Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Brain className="w-5 h-5 mr-2 text-blue-400" />
              AI Services
            </h3>
            <ul className="space-y-2">
              {aiServices.map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.path}
                    className="text-gray-300 hover:text-white transition-colors text-sm flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service.name}
                  </Link>
                </li>
              ))}
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-033b
            </ul>
          </div>
          <div>
<<<<<<< HEAD
            <h4 className="text-md font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white">About</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
              <li><Link to="/careers" className="text-gray-400 hover:text-white">Careers</Link></li>
=======
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Database className="w-5 h-5 mr-2 text-green-400" />
              IT Services
            </h3>
            <ul className="space-y-2">
              {itServices.map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.path}
                    className="text-gray-300 hover:text-white transition-colors text-sm flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service.name}
                  </Link>
                </li>
              ))}
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-033b
            </ul>
          </div>
          <div>
<<<<<<< HEAD
            <h4 className="text-md font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-400 hover:text-white">Terms of Service</Link></li>
=======
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Smartphone className="w-5 h-5 mr-2 text-purple-400" />
              Micro SAAS
            </h3>
            <ul className="space-y-2">
              {microSaasServices.map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.path}
                    className="text-gray-300 hover:text-white transition-colors text-sm flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service.name}
                  </Link>
                </li>
              ))}
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-033b
            </ul>
          </div>
        </div>
<<<<<<< HEAD
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
=======

          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyan-400">Company</h3>
            <ul className="space-y-2">
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-01d9
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

<<<<<<< HEAD
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
=======
          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyan-400">Resources</h3>
            <ul className="space-y-2">
              {resourcesLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.url}
                    className="text-gray-300 hover:text-cyan-400 text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyan-400">Enterprise</h3>
            <ul className="space-y-2">
              {enterpriseLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.url}
                    className="text-gray-300 hover:text-cyan-400 text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm">
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-01d9
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
<<<<<<< HEAD
};

>>>>>>> cursor/fix-errors-and-merge-to-main-92c8
export default Footer;
>>>>>>> origin/cursor/ad-creation-and-management-f267
=======
});

Footer.displayName = 'Footer';
export default Footer;
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-01d9
=======

        {/* Quick Links & Contact */}
        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.path}
                      className="text-gray-300 hover:text-white transition-colors text-sm flex items-center group"
                    >
                      <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Contact Info</h3>
              <div className="space-y-3">
                <div className="flex items-center text-gray-300 text-sm">
                  <Phone className="w-4 h-4 mr-3 text-green-400" />
                  <span>+1 (302) 464-0950</span>
                </div>
                <div className="flex items-center text-gray-300 text-sm">
                  <Mail className="w-4 h-4 mr-3 text-blue-400" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-start text-gray-300 text-sm">
                  <MapPin className="w-4 h-4 mr-3 text-red-400 mt-0.5" />
                  <span>364 E Main St STE 1008<br />Middletown, DE 19709</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Zion Tech Group. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-033b
