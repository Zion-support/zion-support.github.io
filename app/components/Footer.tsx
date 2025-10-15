import React, { memo } from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = memo(() => {
  return (
    <footer className="glass-card mt-20">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-6 text-gradient font-['Orbitron']">ZION TECH GROUP</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Advanced AI and IT Solutions for the modern world. We help businesses transform through cutting-edge technology, 
              innovative micro SaaS solutions, and comprehensive digital transformation services.
            </p>
            <div className="space-y-2 text-sm text-gray-300">
              <p><strong>📞 Phone:</strong> <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors">+1 (302) 464-0950</a></p>
              <p><strong>✉️ Email:</strong> <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors">kleber@ziontechgroup.com</a></p>
              <p><strong>📍 Address:</strong> 364 E Main St STE 1008<br />Middletown DE 19709</p>
              <p><strong>🌐 Website:</strong> <a href="https://ziontechgroup.com" className="hover:text-cyan-400 transition-colors">https://ziontechgroup.com</a></p>
            </div>
            <div className="flex space-x-4 mt-6">
              <a href="https://ziontechgroup.com" className="text-gray-300 hover:text-cyan-400 transition-colors">
                <span className="sr-only">Website</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </a>
              <a href="mailto:kleber@ziontechgroup.com" className="text-gray-300 hover:text-cyan-400 transition-colors">
                <span className="sr-only">Email</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </a>
              <a href="tel:+13024640950" className="text-gray-300 hover:text-cyan-400 transition-colors">
                <span className="sr-only">Phone</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
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
              <li><Link to="/web-development" className="text-gray-300 hover:text-cyan-400 transition-colors">Web Development</Link></li>
              <li><Link to="/mobile-development" className="text-gray-300 hover:text-cyan-400 transition-colors">Mobile Development</Link></li>
              <li><Link to="/blockchain-solutions" className="text-gray-300 hover:text-cyan-400 transition-colors">Blockchain Solutions</Link></li>
              <li><Link to="/iot-solutions" className="text-gray-300 hover:text-cyan-400 transition-colors">IoT Solutions</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6 text-gradient">AI Services</h4>
            <ul className="space-y-3">
              <li><Link to="/ai-chatbot-builder" className="text-gray-300 hover:text-cyan-400 transition-colors">AI Chatbot Builder</Link></li>
              <li><Link to="/ai-content-generator" className="text-gray-300 hover:text-cyan-400 transition-colors">AI Content Generator</Link></li>
              <li><Link to="/ai-code-assistant-pro" className="text-gray-300 hover:text-cyan-400 transition-colors">AI Code Assistant Pro</Link></li>
              <li><Link to="/ai-translator-pro" className="text-gray-300 hover:text-cyan-400 transition-colors">AI Translator Pro</Link></li>
              <li><Link to="/ai-video-analyzer-pro" className="text-gray-300 hover:text-cyan-400 transition-colors">AI Video Analyzer Pro</Link></li>
              <li><Link to="/ai-personalization-engine-pro" className="text-gray-300 hover:text-cyan-400 transition-colors">AI Personalization Engine</Link></li>
              <li><Link to="/ai-voice-synthesizer-pro" className="text-gray-300 hover:text-cyan-400 transition-colors">AI Voice Synthesizer Pro</Link></li>
              <li><Link to="/ai-data-cleaner-pro" className="text-gray-300 hover:text-cyan-400 transition-colors">AI Data Cleaner Pro</Link></li>
              <li><Link to="/ai-test-generator-pro" className="text-gray-300 hover:text-cyan-400 transition-colors">AI Test Generator Pro</Link></li>
              <li><Link to="/ai-knowledge-base-pro" className="text-gray-300 hover:text-cyan-400 transition-colors">AI Knowledge Base Pro</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6 text-gradient">Micro SaaS Solutions</h4>
            <ul className="space-y-3">
              <li><Link to="/task-manager-pro" className="text-gray-300 hover:text-cyan-400 transition-colors">Task Manager Pro</Link></li>
              <li><Link to="/crm-pro" className="text-gray-300 hover:text-cyan-400 transition-colors">CRM Pro</Link></li>
              <li><Link to="/analytics-dashboard-pro" className="text-gray-300 hover:text-cyan-400 transition-colors">Analytics Dashboard Pro</Link></li>
              <li><Link to="/ai-meeting-scheduler-pro" className="text-gray-300 hover:text-cyan-400 transition-colors">AI Meeting Scheduler Pro</Link></li>
              <li><Link to="/ai-content-calendar-pro" className="text-gray-300 hover:text-cyan-400 transition-colors">AI Content Calendar Pro</Link></li>
              <li><Link to="/ai-customer-feedback-pro" className="text-gray-300 hover:text-cyan-400 transition-colors">AI Customer Feedback Pro</Link></li>
              <li><Link to="/ai-inventory-forecaster-pro" className="text-gray-300 hover:text-cyan-400 transition-colors">AI Inventory Forecaster Pro</Link></li>
              <li><Link to="/ai-employee-scheduler-pro" className="text-gray-300 hover:text-cyan-400 transition-colors">AI Employee Scheduler Pro</Link></li>
              <li><Link to="/lead-generator-pro" className="text-gray-300 hover:text-cyan-400 transition-colors">Lead Generator Pro</Link></li>
              <li><Link to="/time-tracker-pro" className="text-gray-300 hover:text-cyan-400 transition-colors">Time Tracker Pro</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6 text-gradient">Advanced IT Solutions</h4>
            <ul className="space-y-3">
              <li><Link to="/edge-computing-solutions" className="text-gray-300 hover:text-cyan-400 transition-colors">Edge Computing Solutions</Link></li>
              <li><Link to="/quantum-computing-services" className="text-gray-300 hover:text-cyan-400 transition-colors">Quantum Computing Services</Link></li>
              <li><Link to="/augmented-reality-solutions" className="text-gray-300 hover:text-cyan-400 transition-colors">Augmented Reality Solutions</Link></li>
              <li><Link to="/virtual-reality-platforms" className="text-gray-300 hover:text-cyan-400 transition-colors">Virtual Reality Platforms</Link></li>
              <li><Link to="/robotic-process-automation" className="text-gray-300 hover:text-cyan-400 transition-colors">Robotic Process Automation</Link></li>
              <li><Link to="/low-code-platforms" className="text-gray-300 hover:text-cyan-400 transition-colors">Low-Code Platforms</Link></li>
              <li><Link to="/serverless-architecture" className="text-gray-300 hover:text-cyan-400 transition-colors">Serverless Architecture</Link></li>
              <li><Link to="/container-orchestration" className="text-gray-300 hover:text-cyan-400 transition-colors">Container Orchestration</Link></li>
              <li><Link to="/ai-infrastructure" className="text-gray-300 hover:text-cyan-400 transition-colors">AI Infrastructure</Link></li>
              <li><Link to="/devops-automation" className="text-gray-300 hover:text-cyan-400 transition-colors">DevOps Automation</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6 text-gradient">Specialized Solutions</h4>
            <ul className="space-y-3">
              <li><Link to="/ai-fraud-detection" className="text-gray-300 hover:text-cyan-400 transition-colors">AI Fraud Detection</Link></li>
              <li><Link to="/ai-image-recognition" className="text-gray-300 hover:text-cyan-400 transition-colors">AI Image Recognition</Link></li>
              <li><Link to="/ai-lead-scoring" className="text-gray-300 hover:text-cyan-400 transition-colors">AI Lead Scoring</Link></li>
              <li><Link to="/ai-predictive-maintenance" className="text-gray-300 hover:text-cyan-400 transition-colors">AI Predictive Maintenance</Link></li>
              <li><Link to="/ai-price-optimizer" className="text-gray-300 hover:text-cyan-400 transition-colors">AI Price Optimizer</Link></li>
              <li><Link to="/ai-voice-assistant" className="text-gray-300 hover:text-cyan-400 transition-colors">AI Voice Assistant</Link></li>
              <li><Link to="/ai-document-processor" className="text-gray-300 hover:text-cyan-400 transition-colors">AI Document Processor</Link></li>
              <li><Link to="/ai-form-builder" className="text-gray-300 hover:text-cyan-400 transition-colors">AI Form Builder</Link></li>
              <li><Link to="/ai-scheduling-assistant" className="text-gray-300 hover:text-cyan-400 transition-colors">AI Scheduling Assistant</Link></li>
              <li><Link to="/ai-email-analyzer-pro" className="text-gray-300 hover:text-cyan-400 transition-colors">AI Email Analyzer Pro</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-md font-semibold mb-4">Enterprise Solutions</h4>
            <ul className="space-y-2">
              <li><Link to="/blockchain-solutions-pro" className="text-gray-300 hover:text-white">Blockchain Solutions Pro</Link></li>
              <li><Link to="/iot-solutions-pro" className="text-gray-300 hover:text-white">IoT Solutions Pro</Link></li>
              <li><Link to="/devops-automation-pro" className="text-gray-300 hover:text-white">DevOps Automation Pro</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-md font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-white">About</Link></li>
              <li><Link to="/team" className="text-gray-300 hover:text-white">Team</Link></li>
              <li><Link to="/careers" className="text-gray-300 hover:text-white">Careers</Link></li>
              <li><Link to="/partnerships" className="text-gray-300 hover:text-white">Partnerships</Link></li>
              <li><Link to="/case-studies" className="text-gray-300 hover:text-white">Case Studies</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-md font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><Link to="/blog" className="text-gray-300 hover:text-white">Blog</Link></li>
              <li><Link to="/api-docs" className="text-gray-300 hover:text-white">API Docs</Link></li>
              <li><Link to="/help" className="text-gray-300 hover:text-white">Help Center</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link></li>
              <li><Link to="/accessibility" className="text-gray-300 hover:text-white">Accessibility</Link></li>
              <li><Link to="/privacy" className="text-gray-300 hover:text-white">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-300 hover:text-white">Terms of Service</Link></li>
              <li><Link to="/cookies" className="text-gray-300 hover:text-white">Cookie Policy</Link></li>
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