import React, { memo } from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = memo(() => {
  return (
    <footer className="glass-morphism border-t border-neon-blue">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold mb-4 gradient-text">Zion Tech Group</h3>
            <p className="futuristic-text mb-6">
              Advanced AI and IT Solutions for the modern world. We help businesses transform through cutting-edge technology.
            </p>
            
            {/* Contact Information */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3">
                <span className="text-neon-blue">📞</span>
                <a href="tel:+13024640950" className="futuristic-text hover:text-neon-blue transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-neon-purple">✉️</span>
                <a href="mailto:kleber@ziontechgroup.com" className="futuristic-text hover:text-neon-purple transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-neon-pink">📍</span>
                <span className="futuristic-text">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-neon-green">🌐</span>
                <a href="https://ziontechgroup.com" className="futuristic-text hover:text-neon-green transition-colors">
                  ziontechgroup.com
                </a>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <a href="https://ziontechgroup.com" className="text-neon-blue hover:text-neon-cyan transition-colors">
                <span className="sr-only">Website</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-md font-semibold mb-4 text-neon-blue">AI Services</h4>
            <ul className="space-y-2">
              <li><Link to="/ai-services" className="futuristic-text hover:text-neon-blue transition-colors">AI Development</Link></li>
              <li><Link to="/ai-voice-assistant" className="futuristic-text hover:text-neon-blue transition-colors">Voice Assistant</Link></li>
              <li><Link to="/ai-computer-vision" className="futuristic-text hover:text-neon-blue transition-colors">Computer Vision</Link></li>
              <li><Link to="/ai-content-generator" className="futuristic-text hover:text-neon-blue transition-colors">Content Generator</Link></li>
              <li><Link to="/ai-predictive-analytics" className="futuristic-text hover:text-neon-blue transition-colors">Predictive Analytics</Link></li>
              <li><Link to="/ai-chatbot-platform" className="futuristic-text hover:text-neon-blue transition-colors">Chatbot Platform</Link></li>
              <li><Link to="/ai-recommendation-engine" className="futuristic-text hover:text-neon-blue transition-colors">Recommendation Engine</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-md font-semibold mb-4 text-neon-purple">IT Services</h4>
            <ul className="space-y-2">
              <li><Link to="/it-services" className="futuristic-text hover:text-neon-purple transition-colors">IT Services</Link></li>
              <li><Link to="/web-development" className="futuristic-text hover:text-neon-purple transition-colors">Web Development</Link></li>
              <li><Link to="/mobile-development" className="futuristic-text hover:text-neon-purple transition-colors">Mobile Development</Link></li>
              <li><Link to="/cloud-infrastructure" className="futuristic-text hover:text-neon-purple transition-colors">Cloud Infrastructure</Link></li>
              <li><Link to="/database-management" className="futuristic-text hover:text-neon-purple transition-colors">Database Management</Link></li>
              <li><Link to="/network-infrastructure" className="futuristic-text hover:text-neon-purple transition-colors">Network Infrastructure</Link></li>
              <li><Link to="/devops-automation" className="futuristic-text hover:text-neon-purple transition-colors">DevOps & Automation</Link></li>
              <li><Link to="/blockchain-solutions" className="futuristic-text hover:text-neon-purple transition-colors">Blockchain Solutions</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-md font-semibold mb-4 text-neon-pink">Micro SaaS Tools</h4>
            <ul className="space-y-2">
              <li><Link to="/ai-document-processor" className="futuristic-text hover:text-neon-pink transition-colors">Document Processor</Link></li>
              <li><Link to="/zion-ai-time-tracker" className="futuristic-text hover:text-neon-pink transition-colors">Time Tracker</Link></li>
              <li><Link to="/zion-ai-crm-platform" className="futuristic-text hover:text-neon-pink transition-colors">CRM Platform</Link></li>
              <li><Link to="/zion-ai-hr-management" className="futuristic-text hover:text-neon-pink transition-colors">HR Management</Link></li>
              <li><Link to="/zion-ai-project-manager" className="futuristic-text hover:text-neon-pink transition-colors">Project Manager</Link></li>
              <li><Link to="/zion-ai-analytics-dashboard" className="futuristic-text hover:text-neon-pink transition-colors">Analytics Dashboard</Link></li>
              <li><Link to="/micro-saas-solutions" className="futuristic-text hover:text-neon-pink transition-colors">All Micro SaaS</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-md font-semibold mb-4 text-neon-green">Company & Resources</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="futuristic-text hover:text-neon-green transition-colors">About</Link></li>
              <li><Link to="/team" className="futuristic-text hover:text-neon-green transition-colors">Team</Link></li>
              <li><Link to="/careers" className="futuristic-text hover:text-neon-green transition-colors">Careers</Link></li>
              <li><Link to="/blog" className="futuristic-text hover:text-neon-green transition-colors">Blog</Link></li>
              <li><Link to="/api-docs" className="futuristic-text hover:text-neon-green transition-colors">API Docs</Link></li>
              <li><Link to="/help" className="futuristic-text hover:text-neon-green transition-colors">Help Center</Link></li>
              <li><Link to="/contact" className="futuristic-text hover:text-neon-green transition-colors">Contact</Link></li>
              <li><Link to="/pricing" className="futuristic-text hover:text-neon-green transition-colors">Pricing</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-neon-blue">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-center md:text-left futuristic-text">
              © 2025 Zion Tech Group. All rights reserved. | <a href="https://ziontechgroup.com" className="hover:text-neon-blue transition-colors">ziontechgroup.com</a>
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="futuristic-text hover:text-neon-blue text-sm transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="futuristic-text hover:text-neon-blue text-sm transition-colors">Terms of Service</Link>
              <Link to="/cookies" className="futuristic-text hover:text-neon-blue text-sm transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;