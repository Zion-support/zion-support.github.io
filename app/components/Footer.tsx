import React from 'react';
import { Link } from 'react-router-dom';
import { contactInfo } from '../data/contactData';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-surface border-t border-neon-blue border-opacity-30">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-4 neon-text">
                Zion Tech Group
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Leading provider of AI automation, micro SaaS solutions, and IT services. 
                Empowering businesses with cutting-edge technology and innovative solutions.
              </p>
            </div>
            
            {/* Contact Information */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3">
                <span className="text-neon-blue">📞</span>
                <a 
                  href={`tel:${contactInfo.mobile}`} 
                  className="text-gray-300 hover:text-neon-blue transition-colors duration-300"
                >
                  {contactInfo.mobile}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-neon-purple">✉️</span>
                <a 
                  href={`mailto:${contactInfo.email}`} 
                  className="text-gray-300 hover:text-neon-purple transition-colors duration-300"
                >
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-neon-pink">📍</span>
                <div className="text-gray-300 text-sm">
                  <div>{contactInfo.address.street}</div>
                  <div>{contactInfo.address.city}, {contactInfo.address.state} {contactInfo.address.zip}</div>
                  <div>{contactInfo.address.country}</div>
                </div>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a 
                href={contactInfo.social.linkedin} 
                className="text-gray-400 hover:text-neon-blue transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a 
                href={contactInfo.social.twitter} 
                className="text-gray-400 hover:text-neon-blue transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a 
                href={contactInfo.social.github} 
                className="text-gray-400 hover:text-neon-blue transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Micro SaaS Solutions */}
          <div>
            <h4 className="text-lg font-semibold text-neon-blue mb-6">Micro SaaS</h4>
            <ul className="space-y-3">
              <li><Link to="/micro-saas-solutions" className="text-gray-300 hover:text-neon-blue transition-colors duration-300">All Solutions</Link></li>
              <li><Link to="/zion-ai-content-moderator" className="text-gray-300 hover:text-neon-blue transition-colors duration-300">Content Moderator</Link></li>
              <li><Link to="/zion-ai-customer-churn-predictor" className="text-gray-300 hover:text-neon-blue transition-colors duration-300">Churn Predictor</Link></li>
              <li><Link to="/zion-ai-sales-predictor" className="text-gray-300 hover:text-neon-blue transition-colors duration-300">Sales Predictor</Link></li>
              <li><Link to="/zion-ai-workflow-automator" className="text-gray-300 hover:text-neon-blue transition-colors duration-300">Workflow Automator</Link></li>
              <li><Link to="/zion-ai-financial-forecaster" className="text-gray-300 hover:text-neon-blue transition-colors duration-300">Financial Forecaster</Link></li>
              <li><Link to="/zion-ai-document-analyzer" className="text-gray-300 hover:text-neon-blue transition-colors duration-300">Document Analyzer</Link></li>
            </ul>
          </div>
          
          {/* IT Services */}
          <div>
            <h4 className="text-lg font-semibold text-neon-purple mb-6">IT Services</h4>
            <ul className="space-y-3">
              <li><Link to="/it-services" className="text-gray-300 hover:text-neon-purple transition-colors duration-300">All Services</Link></li>
              <li><Link to="/cloud-infrastructure" className="text-gray-300 hover:text-neon-purple transition-colors duration-300">Cloud Infrastructure</Link></li>
              <li><Link to="/cybersecurity" className="text-gray-300 hover:text-neon-purple transition-colors duration-300">Cybersecurity</Link></li>
              <li><Link to="/network-infrastructure" className="text-gray-300 hover:text-neon-purple transition-colors duration-300">Network Infrastructure</Link></li>
              <li><Link to="/web-development" className="text-gray-300 hover:text-neon-purple transition-colors duration-300">Web Development</Link></li>
              <li><Link to="/mobile-development" className="text-gray-300 hover:text-neon-purple transition-colors duration-300">Mobile Development</Link></li>
              <li><Link to="/database-management" className="text-gray-300 hover:text-neon-purple transition-colors duration-300">Database Management</Link></li>
            </ul>
          </div>
          
          {/* AI Services */}
          <div>
            <h4 className="text-lg font-semibold text-neon-pink mb-6">AI Services</h4>
            <ul className="space-y-3">
              <li><Link to="/ai-services" className="text-gray-300 hover:text-neon-pink transition-colors duration-300">All AI Services</Link></li>
              <li><Link to="/machine-learning" className="text-gray-300 hover:text-neon-pink transition-colors duration-300">Machine Learning</Link></li>
              <li><Link to="/natural-language-processing" className="text-gray-300 hover:text-neon-pink transition-colors duration-300">NLP Solutions</Link></li>
              <li><Link to="/computer-vision" className="text-gray-300 hover:text-neon-pink transition-colors duration-300">Computer Vision</Link></li>
              <li><Link to="/ai-automation" className="text-gray-300 hover:text-neon-pink transition-colors duration-300">AI Automation</Link></li>
              <li><Link to="/ai-data-analytics" className="text-gray-300 hover:text-neon-pink transition-colors duration-300">AI Data Analytics</Link></li>
            </ul>
          </div>
          
          {/* Company & Support */}
          <div>
            <h4 className="text-lg font-semibold text-neon-green mb-6">Company</h4>
            <ul className="space-y-3 mb-8">
              <li><Link to="/about" className="text-gray-300 hover:text-neon-green transition-colors duration-300">About Us</Link></li>
              <li><Link to="/team" className="text-gray-300 hover:text-neon-green transition-colors duration-300">Our Team</Link></li>
              <li><Link to="/careers" className="text-gray-300 hover:text-neon-green transition-colors duration-300">Careers</Link></li>
              <li><Link to="/partnerships" className="text-gray-300 hover:text-neon-green transition-colors duration-300">Partnerships</Link></li>
              <li><Link to="/pricing" className="text-gray-300 hover:text-neon-green transition-colors duration-300">Pricing</Link></li>
              <li><Link to="/case-studies" className="text-gray-300 hover:text-neon-green transition-colors duration-300">Case Studies</Link></li>
            </ul>
            
            <h4 className="text-lg font-semibold text-neon-green mb-6">Support</h4>
            <ul className="space-y-3">
              <li><Link to="/contact" className="text-gray-300 hover:text-neon-green transition-colors duration-300">Contact Us</Link></li>
              <li><Link to="/help" className="text-gray-300 hover:text-neon-green transition-colors duration-300">Help Center</Link></li>
              <li><Link to="/api-docs" className="text-gray-300 hover:text-neon-green transition-colors duration-300">API Documentation</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-neon-green transition-colors duration-300">Blog</Link></li>
              <li><Link to="/privacy" className="text-gray-300 hover:text-neon-green transition-colors duration-300">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-300 hover:text-neon-green transition-colors duration-300">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        {/* Business Hours */}
        <div className="mt-12 pt-8 border-t border-gray-600">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center md:text-left">
              <h5 className="text-white font-semibold mb-2">Business Hours</h5>
              <p className="text-gray-300 text-sm">{contactInfo.businessHours.weekdays}</p>
              <p className="text-gray-300 text-sm">{contactInfo.businessHours.weekends}</p>
            </div>
            <div className="text-center md:text-left">
              <h5 className="text-white font-semibold mb-2">Support</h5>
              <p className="text-gray-300 text-sm">{contactInfo.support.hours}</p>
              <p className="text-gray-300 text-sm">{contactInfo.support.email}</p>
            </div>
            <div className="text-center md:text-left">
              <h5 className="text-white font-semibold mb-2">Quick Contact</h5>
              <a 
                href={`tel:${contactInfo.mobile}`} 
                className="text-neon-blue hover:text-neon-purple transition-colors duration-300 font-semibold"
              >
                {contactInfo.mobile}
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-600">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm mb-4 md:mb-0">
              © 2024 Zion Tech Group. All rights reserved. | 
              <a href={contactInfo.domain} className="text-neon-blue hover:text-neon-purple transition-colors duration-300 ml-1">
                {contactInfo.domain}
              </a>
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-gray-400 hover:text-neon-blue transition-colors duration-300">
                Privacy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-neon-blue transition-colors duration-300">
                Terms
              </Link>
              <Link to="/cookies" className="text-gray-400 hover:text-neon-blue transition-colors duration-300">
                Cookies
              </Link>
              <Link to="/accessibility" className="text-gray-400 hover:text-neon-blue transition-colors duration-300">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;