import React, { memo, useMemo } from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = memo(() => {
  return (
    <footer className="glass-card mt-20">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-6 text-gradient font-['Orbitron']">ZION TECH GROUP</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading provider of AI-powered solutions, cybersecurity, cloud infrastructure, and digital transformation services. 
              We help businesses transform through cutting-edge technology and innovative micro SAAS solutions.
            </p>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-center">
                <span className="text-cyan-400 mr-2">📞</span>
                <a href="tel:+13024640950" className="hover:text-cyan-300 transition-colors">+1 (302) 464-0950</a>
              </div>
              <div className="flex items-center">
                <span className="text-cyan-400 mr-2">✉️</span>
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-300 transition-colors">kleber@ziontechgroup.com</a>
              </div>
              <div className="flex items-start">
                <span className="text-cyan-400 mr-2 mt-1">📍</span>
                <div>
                  <p>364 E Main St STE 1008</p>
                  <p>Middletown DE 19709</p>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-cyan-400 mr-2">🌐</span>
                <a href="https://ziontechgroup.com" className="hover:text-cyan-300 transition-colors">https://ziontechgroup.com</a>
              </div>
            </div>
            <div className="flex space-x-4 mt-6">
              <a href="https://ziontechgroup.com" className="text-gray-300 hover:text-cyan-400 transition-colors">
                <span className="sr-only">Website</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6 text-gradient">Core Services</h4>
            <ul className="space-y-3">
              <li><Link to="/ai-services" className="text-gray-300 hover:text-cyan-400 transition-colors">AI Services</Link></li>
              <li><Link to="/it-services" className="text-gray-300 hover:text-cyan-400 transition-colors">IT Solutions</Link></li>
              <li><Link to="/micro-saas-solutions" className="text-gray-300 hover:text-cyan-400 transition-colors">Micro SaaS Solutions</Link></li>
              <li><Link to="/cloud-infrastructure" className="text-gray-300 hover:text-cyan-400 transition-colors">Cloud Infrastructure</Link></li>
              <li><Link to="/digital-transformation" className="text-gray-300 hover:text-cyan-400 transition-colors">Digital Transformation</Link></li>
              <li><Link to="/data-analytics" className="text-gray-300 hover:text-cyan-400 transition-colors">Data Analytics</Link></li>
              <li><Link to="/cybersecurity-operations" className="text-gray-300 hover:text-cyan-400 transition-colors">Cybersecurity Operations</Link></li>
              <li><Link to="/managed-it-services" className="text-gray-300 hover:text-cyan-400 transition-colors">Managed IT Services</Link></li>
              <li><Link to="/cloud-migration" className="text-gray-300 hover:text-cyan-400 transition-colors">Cloud Migration</Link></li>
              <li><Link to="/pricing" className="text-gray-300 hover:text-cyan-400 transition-colors">Pricing Plans</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-md font-semibold mb-4">AI Services</h4>
            <ul className="space-y-2">
              <li><Link to="/ai-chatbot-builder" className="text-gray-300 hover:text-cyan-400 transition-colors">AI Chatbot Builder</Link></li>
              <li><Link to="/ai-document-processor" className="text-gray-300 hover:text-cyan-400 transition-colors">AI Document Processor</Link></li>
              <li><Link to="/ai-form-builder" className="text-gray-300 hover:text-cyan-400 transition-colors">AI Form Builder</Link></li>
              <li><Link to="/ai-voice-assistant" className="text-gray-300 hover:text-cyan-400 transition-colors">AI Voice Assistant</Link></li>
              <li><Link to="/ai-fraud-detection" className="text-gray-300 hover:text-cyan-400 transition-colors">AI Fraud Detection</Link></li>
              <li><Link to="/ai-image-recognition" className="text-gray-300 hover:text-cyan-400 transition-colors">AI Image Recognition</Link></li>
              <li><Link to="/ai-lead-scoring" className="text-gray-300 hover:text-cyan-400 transition-colors">AI Lead Scoring</Link></li>
              <li><Link to="/ai-predictive-maintenance" className="text-gray-300 hover:text-cyan-400 transition-colors">AI Predictive Maintenance</Link></li>
              <li><Link to="/ai-price-optimizer" className="text-gray-300 hover:text-cyan-400 transition-colors">AI Price Optimizer</Link></li>
              <li><Link to="/ai-scheduling-assistant" className="text-gray-300 hover:text-cyan-400 transition-colors">AI Scheduling Assistant</Link></li>
              <li><Link to="/ai-code-assistant-pro" className="text-gray-300 hover:text-cyan-400 transition-colors">AI Code Assistant Pro</Link></li>
              <li><Link to="/ai-video-analyzer-pro" className="text-gray-300 hover:text-cyan-400 transition-colors">AI Video Analyzer Pro</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-md font-semibold mb-4">Micro SaaS Solutions</h4>
            <ul className="space-y-2">
              <li><Link to="/ai-project-manager-pro" className="text-gray-300 hover:text-cyan-400 transition-colors">AI Project Manager Pro</Link></li>
              <li><Link to="/smart-invoice-generator-pro" className="text-gray-300 hover:text-cyan-400 transition-colors">Smart Invoice Generator Pro</Link></li>
              <li><Link to="/ai-customer-feedback-analyzer" className="text-gray-300 hover:text-cyan-400 transition-colors">AI Customer Feedback Analyzer</Link></li>
              <li><Link to="/smart-contract-manager-pro" className="text-gray-300 hover:text-cyan-400 transition-colors">Smart Contract Manager Pro</Link></li>
              <li><Link to="/ai-hr-assistant-pro" className="text-gray-300 hover:text-cyan-400 transition-colors">AI HR Assistant Pro</Link></li>
              <li><Link to="/smart-inventory-optimizer-pro" className="text-gray-300 hover:text-cyan-400 transition-colors">Smart Inventory Optimizer Pro</Link></li>
              <li><Link to="/ai-social-media-scheduler-pro" className="text-gray-300 hover:text-cyan-400 transition-colors">AI Social Media Scheduler Pro</Link></li>
              <li><Link to="/smart-email-marketing-pro" className="text-gray-300 hover:text-cyan-400 transition-colors">Smart Email Marketing Pro</Link></li>
              <li><Link to="/ai-customer-support-pro" className="text-gray-300 hover:text-cyan-400 transition-colors">AI Customer Support Pro</Link></li>
              <li><Link to="/smart-analytics-dashboard-pro" className="text-gray-300 hover:text-cyan-400 transition-colors">Smart Analytics Dashboard Pro</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-md font-semibold mb-4">IT Solutions</h4>
            <ul className="space-y-2">
              <li><Link to="/web-development" className="text-gray-300 hover:text-cyan-400 transition-colors">Web Development</Link></li>
              <li><Link to="/mobile-development" className="text-gray-300 hover:text-cyan-400 transition-colors">Mobile Development</Link></li>
              <li><Link to="/database-management" className="text-gray-300 hover:text-cyan-400 transition-colors">Database Management</Link></li>
              <li><Link to="/network-infrastructure" className="text-gray-300 hover:text-cyan-400 transition-colors">Network Infrastructure</Link></li>
              <li><Link to="/5g-solutions" className="text-gray-300 hover:text-cyan-400 transition-colors">5G Solutions</Link></li>
              <li><Link to="/blockchain-solutions" className="text-gray-300 hover:text-cyan-400 transition-colors">Blockchain Solutions</Link></li>
              <li><Link to="/iot-solutions" className="text-gray-300 hover:text-cyan-400 transition-colors">IoT Solutions</Link></li>
              <li><Link to="/devops-automation" className="text-gray-300 hover:text-cyan-400 transition-colors">DevOps Automation</Link></li>
              <li><Link to="/data-engineering" className="text-gray-300 hover:text-cyan-400 transition-colors">Data Engineering</Link></li>
              <li><Link to="/api-development" className="text-gray-300 hover:text-cyan-400 transition-colors">API Development</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-md font-semibold mb-4">Advanced Technologies</h4>
            <ul className="space-y-2">
              <li><Link to="/edge-computing" className="text-gray-300 hover:text-cyan-400 transition-colors">Edge Computing</Link></li>
              <li><Link to="/quantum-computing" className="text-gray-300 hover:text-cyan-400 transition-colors">Quantum Computing</Link></li>
              <li><Link to="/augmented-reality" className="text-gray-300 hover:text-cyan-400 transition-colors">Augmented Reality</Link></li>
              <li><Link to="/virtual-reality" className="text-gray-300 hover:text-cyan-400 transition-colors">Virtual Reality</Link></li>
              <li><Link to="/robotic-process-automation" className="text-gray-300 hover:text-cyan-400 transition-colors">Robotic Process Automation</Link></li>
              <li><Link to="/artificial-intelligence-infrastructure" className="text-gray-300 hover:text-cyan-400 transition-colors">AI Infrastructure & MLOps</Link></li>
              <li><Link to="/cybersecurity-operations" className="text-gray-300 hover:text-cyan-400 transition-colors">Cybersecurity Operations</Link></li>
              <li><Link to="/cloud-migration" className="text-gray-300 hover:text-cyan-400 transition-colors">Cloud Migration</Link></li>
              <li><Link to="/managed-it-services" className="text-gray-300 hover:text-cyan-400 transition-colors">Managed IT Services</Link></li>
              <li><Link to="/security-audit" className="text-gray-300 hover:text-cyan-400 transition-colors">Security Audit</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-md font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-cyan-400 transition-colors">About Us</Link></li>
              <li><Link to="/team" className="text-gray-300 hover:text-cyan-400 transition-colors">Our Team</Link></li>
              <li><Link to="/careers" className="text-gray-300 hover:text-cyan-400 transition-colors">Careers</Link></li>
              <li><Link to="/partnerships" className="text-gray-300 hover:text-cyan-400 transition-colors">Partnerships</Link></li>
              <li><Link to="/case-studies" className="text-gray-300 hover:text-cyan-400 transition-colors">Case Studies</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-cyan-400 transition-colors">Contact Us</Link></li>
              <li><Link to="/help" className="text-gray-300 hover:text-cyan-400 transition-colors">Help Center</Link></li>
              <li><Link to="/api-docs" className="text-gray-300 hover:text-cyan-400 transition-colors">API Documentation</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-md font-semibold mb-4">Resources & Legal</h4>
            <ul className="space-y-2">
              <li><Link to="/blog" className="text-gray-300 hover:text-cyan-400 transition-colors">Blog</Link></li>
              <li><Link to="/api-docs" className="text-gray-300 hover:text-cyan-400 transition-colors">API Documentation</Link></li>
              <li><Link to="/help" className="text-gray-300 hover:text-cyan-400 transition-colors">Help Center</Link></li>
              <li><Link to="/accessibility" className="text-gray-300 hover:text-cyan-400 transition-colors">Accessibility</Link></li>
              <li><Link to="/privacy" className="text-gray-300 hover:text-cyan-400 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-300 hover:text-cyan-400 transition-colors">Terms of Service</Link></li>
              <li><Link to="/cookies" className="text-gray-300 hover:text-cyan-400 transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-cyan-500/30">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left text-gray-300 mb-4 md:mb-0">
              <p className="mb-2">© 2025 Zion Tech Group. All rights reserved.</p>
              <p className="mb-2">
                📞 <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 transition-colors">+1 (302) 464-0950</a>
              </p>
              <p className="mb-2">
                ✉️ <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">kleber@ziontechgroup.com</a>
              </p>
              <p>
                📍 364 E Main St STE 1008, Middletown DE 19709
              </p>
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-300 hover:text-cyan-400 text-sm transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-gray-300 hover:text-cyan-400 text-sm transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;