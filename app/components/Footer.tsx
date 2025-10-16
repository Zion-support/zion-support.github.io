import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Github, 
  Instagram,
  ArrowRight,
  Clock,
  Shield,
  Award,
  Users
} from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const serviceCategories = [
    {
      title: 'Micro SAAS Solutions',
      services: [
        { name: 'AI Content Writer', path: '/micro-saas' },
        { name: 'Project Manager', path: '/micro-saas' },
        { name: 'Email Marketing', path: '/micro-saas' },
        { name: 'Analytics Dashboard', path: '/micro-saas' },
        { name: 'Document Processor', path: '/micro-saas' }
      ]
    },
    {
      title: 'AI Services',
      services: [
        { name: 'AI Automation', path: '/ai-services' },
        { name: 'Machine Learning', path: '/ai-services' },
        { name: 'Computer Vision', path: '/ai-services' },
        { name: 'Natural Language Processing', path: '/ai-services' },
        { name: 'Predictive Analytics', path: '/ai-services' }
      ]
    },
    {
      title: 'IT Services',
      services: [
        { name: 'Cloud Migration', path: '/it-services' },
        { name: 'Cybersecurity', path: '/it-services' },
        { name: 'DevOps', path: '/it-services' },
        { name: 'Mobile Development', path: '/it-services' },
        { name: 'Web Development', path: '/it-services' }
      ]
    }
  ];

  const quickLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'News', path: '/news' },
    { name: 'Contact', path: '/contact' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', path: '/privacy-policy' },
    { name: 'Terms of Service', path: '/terms' },
    { name: 'Service Level Agreement', path: '/sla' },
    { name: 'Cookie Policy', path: '/cookies' },
    { name: 'GDPR Compliance', path: '/gdpr' }
  ];

  const supportLinks = [
    { name: 'Help Center', path: '/help' },
    { name: 'Documentation', path: '/docs' },
    { name: 'API Reference', path: '/api-docs' },
    { name: 'System Status', path: '/status' },
    { name: 'Contact Support', path: '/contact' }
  ];
>>>>>>> origin/cursor/comprehensive-app-audit-and-update-10a2

const Footer: React.FC = memo(() => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold mb-4">Zion Tech Group</h3>
            <p className="text-gray-300 mb-4">
              Advanced AI and IT Solutions for the modern world. We help businesses transform through cutting-edge technology.
            </p>
            <div className="flex space-x-4">
              <a href="https://ziontechgroup.com" className="text-gray-300 hover:text-white">
                <span className="sr-only">Website</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-md font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link to="/ai-services" className="text-gray-300 hover:text-white">AI Services</Link></li>
              <li><Link to="/it-services" className="text-gray-300 hover:text-white">IT Services</Link></li>
              <li><Link to="/cloud-infrastructure" className="text-gray-300 hover:text-white">Cloud Infrastructure</Link></li>
              <li><Link to="/digital-transformation" className="text-gray-300 hover:text-white">Digital Transformation</Link></li>
              <li><Link to="/data-analytics" className="text-gray-300 hover:text-white">Data Analytics</Link></li>
              <li><Link to="/web-development" className="text-gray-300 hover:text-white">Web Development</Link></li>
              <li><Link to="/mobile-development" className="text-gray-300 hover:text-white">Mobile Development</Link></li>
              <li><Link to="/database-management" className="text-gray-300 hover:text-white">Database Management</Link></li>
              <li><Link to="/network-infrastructure" className="text-gray-300 hover:text-white">Network Infrastructure</Link></li>
              <li><Link to="/micro-saas-solutions" className="text-gray-300 hover:text-white">Micro SaaS Solutions</Link></li>
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
              <li><Link to="/pricing" className="text-gray-300 hover:text-white">Pricing</Link></li>
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
              <li><Link to="/accessibility" className="text-gray-300 hover:text-white">Accessibility</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-cyan-400">Micro SaaS Tools</h4>
            <ul className="space-y-3">
              <li><Link to="/zion-ai-chatbot-builder" className="text-gray-300 hover:text-cyan-400 transition-colors block py-1">AI Chatbot Builder</Link></li>
              <li><Link to="/zion-ai-form-builder" className="text-gray-300 hover:text-cyan-400 transition-colors block py-1">AI Form Builder</Link></li>
              <li><Link to="/zion-ai-document-processor" className="text-gray-300 hover:text-cyan-400 transition-colors block py-1">AI Document Processor</Link></li>
              <li><Link to="/zion-ai-scheduling-assistant" className="text-gray-300 hover:text-cyan-400 transition-colors block py-1">AI Scheduling Assistant</Link></li>
              <li><Link to="/zion-ai-social-media-manager" className="text-gray-300 hover:text-cyan-400 transition-colors block py-1">AI Social Media Manager</Link></li>
              <li><Link to="/zion-ai-crm-optimizer" className="text-gray-300 hover:text-cyan-400 transition-colors block py-1">AI CRM Optimizer</Link></li>
              <li><Link to="/zion-ai-email-optimizer" className="text-gray-300 hover:text-cyan-400 transition-colors block py-1">AI Email Optimizer</Link></li>
              <li><Link to="/zion-ai-website-analyzer" className="text-gray-300 hover:text-cyan-400 transition-colors block py-1">AI Website Analyzer</Link></li>
              <li><Link to="/zion-ai-data-visualizer" className="text-gray-300 hover:text-cyan-400 transition-colors block py-1">AI Data Visualizer</Link></li>
              <li><Link to="/pricing" className="text-gray-300 hover:text-cyan-400 transition-colors block py-1">Pricing</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-cyan-400">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-300 hover:text-cyan-400 transition-colors block py-1">About Us</Link></li>
              <li><Link to="/team" className="text-gray-300 hover:text-cyan-400 transition-colors block py-1">Our Team</Link></li>
              <li><Link to="/careers" className="text-gray-300 hover:text-cyan-400 transition-colors block py-1">Careers</Link></li>
              <li><Link to="/partnerships" className="text-gray-300 hover:text-cyan-400 transition-colors block py-1">Partnerships</Link></li>
              <li><Link to="/case-studies" className="text-gray-300 hover:text-cyan-400 transition-colors block py-1">Case Studies</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-cyan-400 transition-colors block py-1">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-cyan-400">Resources</h4>
            <ul className="space-y-3">
              <li><Link to="/blog" className="text-gray-300 hover:text-cyan-400 transition-colors block py-1">Blog</Link></li>
              <li><Link to="/api-docs" className="text-gray-300 hover:text-cyan-400 transition-colors block py-1">API Docs</Link></li>
              <li><Link to="/help" className="text-gray-300 hover:text-cyan-400 transition-colors block py-1">Help Center</Link></li>
              <li><Link to="/accessibility" className="text-gray-300 hover:text-cyan-400 transition-colors block py-1">Accessibility</Link></li>
              <li><Link to="/data-analytics" className="text-gray-300 hover:text-cyan-400 transition-colors block py-1">Data Analytics</Link></li>
              <li><Link to="/web-development" className="text-gray-300 hover:text-cyan-400 transition-colors block py-1">Web Development</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-cyan-400">Legal</h4>
            <ul className="space-y-3">
              <li><Link to="/privacy" className="text-gray-300 hover:text-cyan-400 transition-colors block py-1">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-300 hover:text-cyan-400 transition-colors block py-1">Terms of Service</Link></li>
              <li><Link to="/cookies" className="text-gray-300 hover:text-cyan-400 transition-colors block py-1">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-center md:text-left text-gray-300">
              © 2025 Zion Tech Group. All rights reserved. | <a href="https://ziontechgroup.com" className="hover:text-white">ziontechgroup.com</a>
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-300 hover:text-white text-sm">Privacy Policy</Link>
              <Link to="/terms" className="text-gray-300 hover:text-white text-sm">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;