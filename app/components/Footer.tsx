import React, { memo } from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = memo(() => {
  return (
    <footer className="glass-card mt-20">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-6 text-gradient font-['Orbitron'] holographic-text">ZION TECH GROUP</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Advanced AI and IT Solutions for the modern world. We help businesses transform through cutting-edge technology, innovative micro SAAS solutions, and comprehensive digital transformation services.
            </p>
            <div className="space-y-2 text-sm text-gray-300">
              <p><strong className="text-cyan-400">Phone:</strong> <a href="tel:+13024640950" className="hover:text-cyan-300 transition-colors">+1 302 464 0950</a></p>
              <p><strong className="text-cyan-400">Email:</strong> <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-300 transition-colors">kleber@ziontechgroup.com</a></p>
              <p><strong className="text-cyan-400">Address:</strong> 364 E Main St STE 1008<br />Middletown DE 19709</p>
              <p><strong className="text-cyan-400">Website:</strong> <a href="https://ziontechgroup.com" className="hover:text-cyan-300 transition-colors">https://ziontechgroup.com</a></p>
            </div>
            <div className="flex space-x-4 mt-4">
              <a href="https://ziontechgroup.com" className="text-gray-300 hover:text-cyan-400 transition-colors neon-glow">
                <span className="sr-only">Website</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6 text-gradient holographic-text">Core Services</h4>
            <ul className="space-y-3">
              <li><Link to="/ai-services" className="text-gray-300 hover:text-cyan-400 transition-colors">AI Services</Link></li>
              <li><Link to="/it-services" className="text-gray-300 hover:text-cyan-400 transition-colors">IT Services</Link></li>
              <li><Link to="/cloud-infrastructure" className="text-gray-300 hover:text-cyan-400 transition-colors">Cloud Infrastructure</Link></li>
              <li><Link to="/digital-transformation" className="text-gray-300 hover:text-cyan-400 transition-colors">Digital Transformation</Link></li>
              <li><Link to="/data-analytics" className="text-gray-300 hover:text-cyan-400 transition-colors">Data Analytics</Link></li>
              <li><Link to="/web-development" className="text-gray-300 hover:text-cyan-400 transition-colors">Web Development</Link></li>
              <li><Link to="/mobile-development" className="text-gray-300 hover:text-cyan-400 transition-colors">Mobile Development</Link></li>
              <li><Link to="/database-management" className="text-gray-300 hover:text-cyan-400 transition-colors">Database Management</Link></li>
              <li><Link to="/network-infrastructure" className="text-gray-300 hover:text-cyan-400 transition-colors">Network Infrastructure</Link></li>
              <li><Link to="/micro-saas-solutions" className="text-gray-300 hover:text-cyan-400 transition-colors">Micro SaaS Solutions</Link></li>
              <li><Link to="/blockchain-solutions" className="text-gray-300 hover:text-cyan-400 transition-colors">Blockchain Solutions</Link></li>
              <li><Link to="/iot-solutions" className="text-gray-300 hover:text-cyan-400 transition-colors">IoT Solutions</Link></li>
              <li><Link to="/devops-automation" className="text-gray-300 hover:text-cyan-400 transition-colors">DevOps Automation</Link></li>
              <li><Link to="/data-engineering" className="text-gray-300 hover:text-cyan-400 transition-colors">Data Engineering</Link></li>
              <li><Link to="/api-development" className="text-gray-300 hover:text-cyan-400 transition-colors">API Development</Link></li>
              <li><Link to="/security-audit" className="text-gray-300 hover:text-cyan-400 transition-colors">Security Audit</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-md font-semibold mb-4 text-gradient holographic-text">AI Services</h4>
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
              <li><Link to="/pricing" className="text-gray-300 hover:text-cyan-400 transition-colors">Pricing</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-md font-semibold mb-4 text-gradient holographic-text">Innovative AI Solutions</h4>
            <ul className="space-y-2">
              <li><Link to="/ai-video-generator-pro" className="text-gray-300 hover:text-purple-400 transition-colors">AI Video Generator Pro</Link></li>
              <li><Link to="/ai-code-assistant-pro" className="text-gray-300 hover:text-purple-400 transition-colors">AI Code Assistant Pro</Link></li>
              <li><Link to="/ai-customer-insights-pro" className="text-gray-300 hover:text-purple-400 transition-colors">AI Customer Insights Pro</Link></li>
              <li><Link to="/ai-supply-chain-optimizer-pro" className="text-gray-300 hover:text-purple-400 transition-colors">AI Supply Chain Optimizer</Link></li>
              <li><Link to="/ai-hr-assistant-pro" className="text-gray-300 hover:text-purple-400 transition-colors">AI HR Assistant Pro</Link></li>
              <li><Link to="/ai-energy-optimizer-pro" className="text-gray-300 hover:text-purple-400 transition-colors">AI Energy Optimizer Pro</Link></li>
              <li><Link to="/ai-legal-assistant-pro" className="text-gray-300 hover:text-purple-400 transition-colors">AI Legal Assistant Pro</Link></li>
              <li><Link to="/ai-healthcare-assistant-pro" className="text-gray-300 hover:text-purple-400 transition-colors">AI Healthcare Assistant</Link></li>
              <li><Link to="/ai-real-estate-optimizer-pro" className="text-gray-300 hover:text-purple-400 transition-colors">AI Real Estate Optimizer</Link></li>
              <li><Link to="/ai-education-platform-pro" className="text-gray-300 hover:text-purple-400 transition-colors">AI Education Platform</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-md font-semibold mb-4">AI Tools</h4>
            <ul className="space-y-2">
              <li><Link to="/zion-ai-content-moderator" className="text-gray-300 hover:text-white">Content Moderator</Link></li>
              <li><Link to="/zion-ai-customer-support-pro" className="text-gray-300 hover:text-white">Customer Support Pro</Link></li>
              <li><Link to="/zion-ai-workflow-automator-pro" className="text-gray-300 hover:text-white">Workflow Automator Pro</Link></li>
              <li><Link to="/zion-ai-email-marketing-pro" className="text-gray-300 hover:text-white">Email Marketing Pro</Link></li>
              <li><Link to="/zion-ai-customer-churn-predictor" className="text-gray-300 hover:text-white">Customer Churn Predictor</Link></li>
              <li><Link to="/zion-ai-sales-predictor" className="text-gray-300 hover:text-white">Sales Predictor</Link></li>
              <li><Link to="/zion-ai-financial-forecaster" className="text-gray-300 hover:text-white">Financial Forecaster</Link></li>
              <li><Link to="/zion-ai-document-analyzer" className="text-gray-300 hover:text-white">Document Analyzer</Link></li>
              <li><Link to="/zion-ai-task-scheduler" className="text-gray-300 hover:text-white">Task Scheduler</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-md font-semibold mb-4 text-gradient holographic-text">Advanced Technologies</h4>
            <ul className="space-y-2">
              <li><Link to="/ai-cybersecurity-pro" className="text-gray-300 hover:text-green-400 transition-colors">AI Cybersecurity Pro</Link></li>
              <li><Link to="/ai-blockchain-optimizer-pro" className="text-gray-300 hover:text-green-400 transition-colors">AI Blockchain Optimizer</Link></li>
              <li><Link to="/ai-space-tech-pro" className="text-gray-300 hover:text-green-400 transition-colors">AI Space Tech Pro</Link></li>
              <li><Link to="/ai-quantum-computing-pro" className="text-gray-300 hover:text-green-400 transition-colors">AI Quantum Computing</Link></li>
              <li><Link to="/ai-manufacturing-optimizer-pro" className="text-gray-300 hover:text-green-400 transition-colors">AI Manufacturing Optimizer</Link></li>
              <li><Link to="/ai-insurance-optimizer-pro" className="text-gray-300 hover:text-green-400 transition-colors">AI Insurance Optimizer</Link></li>
              <li><Link to="/ai-travel-optimizer-pro" className="text-gray-300 hover:text-green-400 transition-colors">AI Travel Optimizer</Link></li>
              <li><Link to="/ai-environmental-monitor-pro" className="text-gray-300 hover:text-green-400 transition-colors">AI Environmental Monitor</Link></li>
              <li><Link to="/ai-construction-optimizer-pro" className="text-gray-300 hover:text-green-400 transition-colors">AI Construction Optimizer</Link></li>
              <li><Link to="/ai-transportation-optimizer-pro" className="text-gray-300 hover:text-green-400 transition-colors">AI Transportation Optimizer</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-md font-semibold mb-4">Pro AI Services</h4>
            <ul className="space-y-2">
              <li><Link to="/ai-voice-assistant-pro" className="text-gray-300 hover:text-white">AI Voice Assistant Pro</Link></li>
              <li><Link to="/ai-image-recognition-pro" className="text-gray-300 hover:text-white">AI Image Recognition Pro</Link></li>
              <li><Link to="/ai-fraud-detection-pro" className="text-gray-300 hover:text-white">AI Fraud Detection Pro</Link></li>
              <li><Link to="/ai-lead-scoring-pro" className="text-gray-300 hover:text-white">AI Lead Scoring Pro</Link></li>
              <li><Link to="/ai-predictive-maintenance-pro" className="text-gray-300 hover:text-white">AI Predictive Maintenance Pro</Link></li>
              <li><Link to="/ai-price-optimizer-pro" className="text-gray-300 hover:text-white">AI Price Optimizer Pro</Link></li>
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
            <h4 className="text-md font-semibold mb-4 text-gradient holographic-text">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-pink-400 transition-colors">About Us</Link></li>
              <li><Link to="/team" className="text-gray-300 hover:text-pink-400 transition-colors">Our Team</Link></li>
              <li><Link to="/careers" className="text-gray-300 hover:text-pink-400 transition-colors">Careers</Link></li>
              <li><Link to="/partnerships" className="text-gray-300 hover:text-pink-400 transition-colors">Partnerships</Link></li>
              <li><Link to="/case-studies" className="text-gray-300 hover:text-pink-400 transition-colors">Case Studies</Link></li>
              <li><Link to="/pricing" className="text-gray-300 hover:text-pink-400 transition-colors">Pricing</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-md font-semibold mb-4 text-gradient holographic-text">Resources</h4>
            <ul className="space-y-2">
              <li><Link to="/blog" className="text-gray-300 hover:text-yellow-400 transition-colors">Blog</Link></li>
              <li><Link to="/api-docs" className="text-gray-300 hover:text-yellow-400 transition-colors">API Documentation</Link></li>
              <li><Link to="/help" className="text-gray-300 hover:text-yellow-400 transition-colors">Help Center</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-yellow-400 transition-colors">Contact Us</Link></li>
              <li><Link to="/accessibility" className="text-gray-300 hover:text-yellow-400 transition-colors">Accessibility</Link></li>
              <li><Link to="/privacy" className="text-gray-300 hover:text-yellow-400 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-300 hover:text-yellow-400 transition-colors">Terms of Service</Link></li>
              <li><Link to="/cookies" className="text-gray-300 hover:text-yellow-400 transition-colors">Cookie Policy</Link></li>
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