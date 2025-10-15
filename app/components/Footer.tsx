import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4 text-blue-400">Zion Tech Group</h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Advanced AI and IT Solutions for the modern world. We help businesses accelerate growth through cutting-edge technology and intelligent automation.
            </p>
            <div className="space-y-2">
              <p className="text-gray-300">
                <span className="font-semibold">Phone:</span> 
                <a href="tel:+13024640950" className="text-blue-400 hover:text-blue-300 ml-2">+1 302 464 0950</a>
              </p>
              <p className="text-gray-300">
                <span className="font-semibold">Email:</span> 
                <a href="mailto:kleber@ziontechgroup.com" className="text-blue-400 hover:text-blue-300 ml-2">kleber@ziontechgroup.com</a>
              </p>
              <p className="text-gray-300">
                <span className="font-semibold">Address:</span> 
                <span className="ml-2">364 E Main St STE 1008, Middletown DE 19709</span>
              </p>
              <p className="text-gray-300">
                <span className="font-semibold">Website:</span> 
                <a href="https://ziontechgroup.com" className="text-blue-400 hover:text-blue-300 ml-2">https://ziontechgroup.com</a>
              </p>
            </div>
          </div>
          
          {/* AI Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-400">AI Services</h4>
            <ul className="space-y-2">
              <li><Link to="/ai-services" className="text-gray-300 hover:text-white transition-colors">AI Development</Link></li>
              <li><Link to="/ai-consulting" className="text-gray-300 hover:text-white transition-colors">AI Consulting</Link></li>
              <li><Link to="/ai-content-generator" className="text-gray-300 hover:text-white transition-colors">Content Generator</Link></li>
              <li><Link to="/ai-customer-support-pro" className="text-gray-300 hover:text-white transition-colors">Customer Support Pro</Link></li>
              <li><Link to="/ai-solutions" className="text-gray-300 hover:text-white transition-colors">AI Solutions</Link></li>
            </ul>
          </div>
          
          {/* Micro SaaS */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-400">Micro SaaS</h4>
            <ul className="space-y-2">
              <li><Link to="/zion-ai-task-scheduler" className="text-gray-300 hover:text-white transition-colors">Task Scheduler Pro</Link></li>
              <li><Link to="/zion-smart-expense-tracker" className="text-gray-300 hover:text-white transition-colors">Expense Tracker</Link></li>
              <li><Link to="/zion-ai-workflow-automator-pro" className="text-gray-300 hover:text-white transition-colors">Workflow Automator</Link></li>
              <li><Link to="/zion-ai-email-marketing-pro" className="text-gray-300 hover:text-white transition-colors">Email Marketing Pro</Link></li>
              <li><Link to="/zion-ai-social-scheduler-pro" className="text-gray-300 hover:text-white transition-colors">Social Scheduler Pro</Link></li>
            </ul>
          </div>
          
          {/* IT Solutions */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-400">IT Solutions</h4>
            <ul className="space-y-2">
              <li><Link to="/cloud-infrastructure" className="text-gray-300 hover:text-white transition-colors">Cloud Infrastructure</Link></li>
              <li><Link to="/web-development" className="text-gray-300 hover:text-white transition-colors">Web Development</Link></li>
              <li><Link to="/mobile-development" className="text-gray-300 hover:text-white transition-colors">Mobile Development</Link></li>
              <li><Link to="/data-analytics" className="text-gray-300 hover:text-white transition-colors">Data Analytics</Link></li>
              <li><Link to="/cybersecurity" className="text-gray-300 hover:text-white transition-colors">Cybersecurity</Link></li>
            </ul>
          </div>
        </div>
        
        {/* Additional Links Row */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4 text-blue-400">Company</h4>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/team" className="text-gray-300 hover:text-white transition-colors">Our Team</Link></li>
                <li><Link to="/careers" className="text-gray-300 hover:text-white transition-colors">Careers</Link></li>
                <li><Link to="/partnerships" className="text-gray-300 hover:text-white transition-colors">Partnerships</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-blue-400">Resources</h4>
              <ul className="space-y-2">
                <li><Link to="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</Link></li>
                <li><Link to="/case-studies" className="text-gray-300 hover:text-white transition-colors">Case Studies</Link></li>
                <li><Link to="/api-docs" className="text-gray-300 hover:text-white transition-colors">API Documentation</Link></li>
                <li><Link to="/help" className="text-gray-300 hover:text-white transition-colors">Help Center</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-blue-400">Support</h4>
              <ul className="space-y-2">
                <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</Link></li>
                <li><Link to="/pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</Link></li>
                <li><Link to="/accessibility" className="text-gray-300 hover:text-white transition-colors">Accessibility</Link></li>
                <li><Link to="/cookies" className="text-gray-300 hover:text-white transition-colors">Cookie Policy</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-blue-400">Legal</h4>
              <ul className="space-y-2">
                <li><Link to="/privacy" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms" className="text-gray-300 hover:text-white transition-colors">Terms of Service</Link></li>
                <li><Link to="/cookies" className="text-gray-300 hover:text-white transition-colors">Cookie Policy</Link></li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-center md:text-left">
              © 2024 Zion Tech Group. All rights reserved. | Advanced AI & IT Solutions
            </p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <a href="tel:+13024640950" className="text-blue-400 hover:text-blue-300 transition-colors">
                Call: +1 302 464 0950
              </a>
              <a href="mailto:kleber@ziontechgroup.com" className="text-blue-400 hover:text-blue-300 transition-colors">
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;