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
              Advanced AI and IT Solutions for the modern world. We help businesses transform through cutting-edge technology and innovative micro SaaS solutions.
            </p>
            <div className="space-y-2 text-sm text-gray-300">
              <p><strong>Phone:</strong> <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors">+1 302 464 0950</a></p>
              <p><strong>Email:</strong> <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors">kleber@ziontechgroup.com</a></p>
              <p><strong>Address:</strong> 364 E Main St STE 1008<br />Middletown DE 19709</p>
              <p><strong>Website:</strong> <a href="https://ziontechgroup.com" className="hover:text-cyan-400 transition-colors">https://ziontechgroup.com</a></p>
            </div>
            <div className="flex space-x-4 mt-6">
              <a href="https://ziontechgroup.com" className="text-gray-300 hover:text-cyan-400 transition-colors">
                <span className="sr-only">Website</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </a>
              <a href="https://linkedin.com/company/ziontechgroup" className="text-gray-300 hover:text-cyan-400 transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://twitter.com/ziontechgroup" className="text-gray-300 hover:text-cyan-400 transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6 text-gradient">AI Services</h4>
            <ul className="space-y-3">
              <li><Link to="/ai-services" className="text-gray-300 hover:text-cyan-400 transition-colors">AI Solutions Overview</Link></li>
              <li><Link to="/ai-code-assistant" className="text-gray-300 hover:text-cyan-400 transition-colors">AI Code Assistant</Link></li>
              <li><Link to="/ai-translator-pro" className="text-gray-300 hover:text-cyan-400 transition-colors">AI Translator Pro</Link></li>
              <li><Link to="/ai-video-generator" className="text-gray-300 hover:text-cyan-400 transition-colors">AI Video Generator</Link></li>
              <li><Link to="/ai-voice-cloner" className="text-gray-300 hover:text-cyan-400 transition-colors">AI Voice Cloner</Link></li>
              <li><Link to="/ai-design-assistant" className="text-gray-300 hover:text-cyan-400 transition-colors">AI Design Assistant</Link></li>
              <li><Link to="/ai-content-generator" className="text-gray-300 hover:text-cyan-400 transition-colors">AI Content Generator</Link></li>
              <li><Link to="/ai-chatbot-builder" className="text-gray-300 hover:text-cyan-400 transition-colors">AI Chatbot Builder</Link></li>
              <li><Link to="/ai-fraud-detection" className="text-gray-300 hover:text-cyan-400 transition-colors">AI Fraud Detection</Link></li>
              <li><Link to="/ai-image-recognition" className="text-gray-300 hover:text-cyan-400 transition-colors">AI Image Recognition</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6 text-gradient">Micro SaaS Solutions</h4>
            <ul className="space-y-3">
              <li><Link to="/micro-saas-solutions" className="text-gray-300 hover:text-cyan-400 transition-colors">Micro SaaS Overview</Link></li>
              <li><Link to="/ai-crm-optimizer" className="text-gray-300 hover:text-cyan-400 transition-colors">AI CRM Optimizer</Link></li>
              <li><Link to="/ai-data-visualizer" className="text-gray-300 hover:text-cyan-400 transition-colors">AI Data Visualizer</Link></li>
              <li><Link to="/ai-email-optimizer" className="text-gray-300 hover:text-cyan-400 transition-colors">AI Email Optimizer</Link></li>
              <li><Link to="/ai-website-analyzer" className="text-gray-300 hover:text-cyan-400 transition-colors">AI Website Analyzer</Link></li>
              <li><Link to="/ai-social-media-manager" className="text-gray-300 hover:text-cyan-400 transition-colors">AI Social Media Manager</Link></li>
              <li><Link to="/task-manager-pro" className="text-gray-300 hover:text-cyan-400 transition-colors">Task Manager Pro</Link></li>
              <li><Link to="/analytics-dashboard-pro" className="text-gray-300 hover:text-cyan-400 transition-colors">Analytics Dashboard Pro</Link></li>
              <li><Link to="/expense-tracker-pro" className="text-gray-300 hover:text-cyan-400 transition-colors">Expense Tracker Pro</Link></li>
              <li><Link to="/password-manager-pro" className="text-gray-300 hover:text-cyan-400 transition-colors">Password Manager Pro</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6 text-gradient">IT Solutions</h4>
            <ul className="space-y-3">
              <li><Link to="/it-services" className="text-gray-300 hover:text-cyan-400 transition-colors">IT Services Overview</Link></li>
              <li><Link to="/cloud-infrastructure" className="text-gray-300 hover:text-cyan-400 transition-colors">Cloud Infrastructure</Link></li>
              <li><Link to="/web-development" className="text-gray-300 hover:text-cyan-400 transition-colors">Web Development</Link></li>
              <li><Link to="/mobile-development" className="text-gray-300 hover:text-cyan-400 transition-colors">Mobile Development</Link></li>
              <li><Link to="/database-management" className="text-gray-300 hover:text-cyan-400 transition-colors">Database Management</Link></li>
              <li><Link to="/network-infrastructure" className="text-gray-300 hover:text-cyan-400 transition-colors">Network Infrastructure</Link></li>
              <li><Link to="/5g-solutions" className="text-gray-300 hover:text-cyan-400 transition-colors">5G Solutions</Link></li>
              <li><Link to="/digital-transformation" className="text-gray-300 hover:text-cyan-400 transition-colors">Digital Transformation</Link></li>
              <li><Link to="/blockchain-solutions" className="text-gray-300 hover:text-cyan-400 transition-colors">Blockchain Solutions</Link></li>
              <li><Link to="/iot-solutions" className="text-gray-300 hover:text-cyan-400 transition-colors">IoT Solutions</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6 text-gradient">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-300 hover:text-cyan-400 transition-colors">About Us</Link></li>
              <li><Link to="/team" className="text-gray-300 hover:text-cyan-400 transition-colors">Our Team</Link></li>
              <li><Link to="/careers" className="text-gray-300 hover:text-cyan-400 transition-colors">Careers</Link></li>
              <li><Link to="/partnerships" className="text-gray-300 hover:text-cyan-400 transition-colors">Partnerships</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-cyan-400 transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6 text-gradient">Legal</h4>
            <ul className="space-y-3">
              <li><Link to="/privacy" className="text-gray-300 hover:text-cyan-400 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-300 hover:text-cyan-400 transition-colors">Terms of Service</Link></li>
              <li><Link to="/cookies" className="text-gray-300 hover:text-cyan-400 transition-colors">Cookie Policy</Link></li>
              <li><Link to="/accessibility" className="text-gray-300 hover:text-cyan-400 transition-colors">Accessibility</Link></li>
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