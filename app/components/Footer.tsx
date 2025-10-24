import React from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const serviceCategories = [
    {
      title: 'AI Services',
      icon: <Brain className="w-5 h-5 text-cyan-400" />,
      services: [
        { name: 'AI Analytics Dashboard Pro', href: '/ai-analytics-dashboard-pro' },
        { name: 'AI Content Generation Pro', href: '/ai-content-generation-pro' },
        { name: 'AI Automation Suite', href: '/ai-automation-suite' },
        { name: 'AI Business Intelligence Pro', href: '/ai-business-intelligence-pro' },
        { name: 'AI Code Assistant Pro', href: '/ai-code-assistant-pro' },
        { name: 'AI Chatbot Enterprise', href: '/ai-chatbot-enterprise' },
        { name: 'AI Customer Insights Pro', href: '/ai-customer-insights-pro' },
        { name: 'AI Project Management Pro', href: '/ai-project-management-pro' },
        { name: 'AI Social Media Manager Pro', href: '/ai-social-media-manager-pro' },
        { name: 'AI Email Marketing Pro', href: '/ai-email-marketing-pro' }
      ]
    },
    {
      title: 'IT Services',
      icon: <Code className="w-5 h-5 text-purple-400" />,
      services: [
        { name: 'AI Cloud Infrastructure', href: '/ai-cloud-infrastructure' },
        { name: 'AI API Management', href: '/ai-api-management' },
        { name: 'Database Solutions', href: '/database-solutions' },
        { name: 'Advanced Security Suite', href: '/advanced-security-suite' },
        { name: 'Performance Monitoring', href: '/performance-monitoring' },
        { name: 'DevOps Solutions', href: '/devops-solutions' }
      ]
    },
    {
      title: '5G Solutions',
      icon: <Wifi className="w-5 h-5 text-green-400" />,
      services: [
        { name: '5G Implementation', href: '/5g-implementation' },
        { name: '5G Network Infrastructure', href: '/5g-network-infrastructure' },
        { name: '5G IoT Solutions', href: '/5g-iot-solutions' },
        { name: '5G Smart City Solutions', href: '/5g-smart-city-solutions' },
        { name: '5G Edge Computing', href: '/5g-edge-computing' },
        { name: '5G Private Networks', href: '/5g-private-networks' }
      ]
    },
    {
      title: 'Micro SAAS',
      icon: <Cloud className="w-5 h-5 text-orange-400" />,
      services: [
        { name: 'AI Analytics Dashboard Pro', href: '/ai-analytics-dashboard-pro' },
        { name: 'AI Content Generation Pro', href: '/ai-content-generation-pro' },
        { name: 'AI Lead Generation Pro', href: '/ai-lead-generation-pro' },
        { name: 'AI CRM Enterprise', href: '/ai-crm-enterprise' },
        { name: 'AI Scheduling Assistant Pro', href: '/ai-scheduling-assistant-pro' },
        { name: 'AI Document Processor Pro', href: '/ai-document-processor-pro' },
        { name: 'AI Email Marketing Pro', href: '/ai-email-marketing-pro' },
        { name: 'AI Social Media Manager Pro', href: '/ai-social-media-manager-pro' },
        { name: 'AI Price Optimization Pro', href: '/ai-price-optimization-pro' },
        { name: 'AI Security Monitor Pro', href: '/ai-security-monitor-pro' },
        { name: 'AI Password Manager Pro', href: '/ai-password-manager-pro' },
        { name: 'AI Compliance Monitor Pro', href: '/ai-compliance-monitor-pro' }
      ]
    }
  ];

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Blog', href: '/blog' },
    { name: 'Careers', href: '/careers' }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: <Facebook className="w-5 h-5" />, href: 'https://facebook.com/ziontechgroup' },
    { name: 'Twitter', icon: <Twitter className="w-5 h-5" />, href: 'https://twitter.com/ziontechgroup' },
    { name: 'LinkedIn', icon: <Linkedin className="w-5 h-5" />, href: 'https://linkedin.com/company/ziontechgroup' },
    { name: 'Instagram', icon: <Instagram className="w-5 h-5" />, href: 'https://instagram.com/ziontechgroup' },
    { name: 'GitHub', icon: <Github className="w-5 h-5" />, href: 'https://github.com/ziontechgroup' }
  ];

const FooterPage: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold">Zion Tech Group</span>
            </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6 text-gradient holographic-text">Services</h4>
            <ul className="space-y-3">
              <li><Link to="/ai-services" className="text-gray-300 hover:text-cyan-400 transition-colors group flex items-center"><span className="w-2 h-2 bg-cyan-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>AI Services</Link></li>
              <li><Link to="/it-services" className="text-gray-300 hover:text-cyan-400 transition-colors group flex items-center"><span className="w-2 h-2 bg-cyan-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>IT Services</Link></li>
              <li><Link to="/cloud-infrastructure" className="text-gray-300 hover:text-cyan-400 transition-colors group flex items-center"><span className="w-2 h-2 bg-cyan-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>Cloud Infrastructure</Link></li>
              <li><Link to="/digital-transformation" className="text-gray-300 hover:text-cyan-400 transition-colors group flex items-center"><span className="w-2 h-2 bg-cyan-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>Digital Transformation</Link></li>
              <li><Link to="/data-analytics" className="text-gray-300 hover:text-cyan-400 transition-colors group flex items-center"><span className="w-2 h-2 bg-cyan-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>Data Analytics</Link></li>
              <li><Link to="/web-development" className="text-gray-300 hover:text-cyan-400 transition-colors group flex items-center"><span className="w-2 h-2 bg-cyan-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>Web Development</Link></li>
              <li><Link to="/mobile-development" className="text-gray-300 hover:text-cyan-400 transition-colors group flex items-center"><span className="w-2 h-2 bg-cyan-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>Mobile Development</Link></li>
              <li><Link to="/micro-saas-solutions" className="text-gray-300 hover:text-cyan-400 transition-colors group flex items-center"><span className="w-2 h-2 bg-cyan-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>Micro SaaS Solutions</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-md font-semibold mb-4">AI Services</h4>
            <ul className="space-y-2">
              <li><Link to="/ai-chatbot-builder" className="text-gray-300 hover:text-white">AI Chatbot Builder</Link></li>
              <li><Link to="/ai-document-processor" className="text-gray-300 hover:text-white">AI Document Processor</Link></li>
              <li><Link to="/ai-form-builder" className="text-gray-300 hover:text-white">AI Form Builder</Link></li>
              <li><Link to="/ai-voice-assistant" className="text-gray-300 hover:text-white">AI Voice Assistant</Link></li>
              <li><Link to="/ai-fraud-detection" className="text-gray-300 hover:text-white">AI Fraud Detection</Link></li>
              <li><Link to="/ai-image-recognition" className="text-gray-300 hover:text-white">AI Image Recognition</Link></li>
              <li><Link to="/ai-lead-scoring" className="text-gray-300 hover:text-white">AI Lead Scoring</Link></li>
              <li><Link to="/ai-predictive-maintenance" className="text-gray-300 hover:text-white">AI Predictive Maintenance</Link></li>
              <li><Link to="/ai-price-optimizer" className="text-gray-300 hover:text-white">AI Price Optimizer</Link></li>
              <li><Link to="/ai-scheduling-assistant" className="text-gray-300 hover:text-white">AI Scheduling Assistant</Link></li>
              <li><Link to="/ai-crm-optimizer" className="text-gray-300 hover:text-white">AI CRM Optimizer</Link></li>
              <li><Link to="/ai-data-visualizer" className="text-gray-300 hover:text-white">AI Data Visualizer</Link></li>
              <li><Link to="/ai-email-optimizer" className="text-gray-300 hover:text-white">AI Email Optimizer</Link></li>
              <li><Link to="/ai-website-analyzer" className="text-gray-300 hover:text-white">AI Website Analyzer</Link></li>
              <li><Link to="/ai-social-media-manager" className="text-gray-300 hover:text-white">AI Social Media Manager</Link></li>
              <li><Link to="/ai-code-assistant" className="text-gray-300 hover:text-white">AI Code Assistant</Link></li>
              <li><Link to="/ai-translator" className="text-gray-300 hover:text-white">AI Translator</Link></li>
              <li><Link to="/ai-video-generator" className="text-gray-300 hover:text-white">AI Video Generator</Link></li>
              <li><Link to="/ai-audio-processor" className="text-gray-300 hover:text-white">AI Audio Processor</Link></li>
              <li><Link to="/ai-3d-model-generator" className="text-gray-300 hover:text-white">AI 3D Model Generator</Link></li>
              <li><Link to="/ai-legal-assistant" className="text-gray-300 hover:text-white">AI Legal Assistant</Link></li>
              <li><Link to="/ai-medical-assistant" className="text-gray-300 hover:text-white">AI Medical Assistant</Link></li>
              <li><Link to="/pricing" className="text-gray-300 hover:text-white">Pricing</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-md font-semibold mb-4">Zion AI Tools</h4>
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
              <li><Link to="/zion-ai-translation-service" className="text-gray-300 hover:text-white">Translation Service</Link></li>
              <li><Link to="/zion-ai-video-generator" className="text-gray-300 hover:text-white">Video Generator</Link></li>
              <li><Link to="/ai-code-assistant" className="text-gray-300 hover:text-white">AI Code Assistant</Link></li>
              <li><Link to="/ai-translator" className="text-gray-300 hover:text-white">AI Translator</Link></li>
              <li><Link to="/ai-audio-processor" className="text-gray-300 hover:text-white">AI Audio Processor</Link></li>
              <li><Link to="/ai-3d-model-generator" className="text-gray-300 hover:text-white">AI 3D Model Generator</Link></li>
              <li><Link to="/ai-legal-assistant" className="text-gray-300 hover:text-white">AI Legal Assistant</Link></li>
              <li><Link to="/ai-medical-assistant" className="text-gray-300 hover:text-white">AI Medical Assistant</Link></li>
              <li><Link to="/ai-education-tutor" className="text-gray-300 hover:text-white">AI Education Tutor</Link></li>
              <li><Link to="/ai-real-estate-analyzer" className="text-gray-300 hover:text-white">AI Real Estate Analyzer</Link></li>
              <li><Link to="/ai-supply-chain-optimizer" className="text-gray-300 hover:text-white">AI Supply Chain Optimizer</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-md font-semibold mb-4">Advanced AI Services</h4>
            <ul className="space-y-2">
              <li><Link to="/zion-ai-fraud-detection" className="text-gray-300 hover:text-white">AI Fraud Detection</Link></li>
              <li><Link to="/zion-ai-image-recognition" className="text-gray-300 hover:text-white">AI Image Recognition</Link></li>
              <li><Link to="/zion-ai-lead-scoring" className="text-gray-300 hover:text-white">AI Lead Scoring</Link></li>
              <li><Link to="/zion-ai-predictive-maintenance" className="text-gray-300 hover:text-white">AI Predictive Maintenance</Link></li>
              <li><Link to="/zion-ai-price-optimizer" className="text-gray-300 hover:text-white">AI Price Optimizer</Link></li>
              <li><Link to="/zion-ai-voice-assistant" className="text-gray-300 hover:text-white">AI Voice Assistant</Link></li>
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
            <h4 className="text-md font-semibold mb-4">Micro SaaS Solutions</h4>
            <ul className="space-y-2">
              <li><Link to="/micro-saas-solutions" className="text-gray-300 hover:text-white">Micro SaaS Overview</Link></li>
              <li><Link to="/zion-smart-analytics-dashboard" className="text-gray-300 hover:text-white">Smart Analytics Dashboard</Link></li>
              <li><Link to="/zion-smart-crm-automation" className="text-gray-300 hover:text-white">Smart CRM Automation</Link></li>
              <li><Link to="/zion-smart-inventory-manager" className="text-gray-300 hover:text-white">Smart Inventory Manager</Link></li>
              <li><Link to="/zion-smart-expense-tracker" className="text-gray-300 hover:text-white">Smart Expense Tracker</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-md font-semibold mb-4">Enterprise Solutions</h4>
            <ul className="space-y-2">
              <li><Link to="/blockchain-solutions-pro" className="text-gray-300 hover:text-white">Blockchain Solutions Pro</Link></li>
              <li><Link to="/iot-solutions-pro" className="text-gray-300 hover:text-white">IoT Solutions Pro</Link></li>
              <li><Link to="/devops-automation-pro" className="text-gray-300 hover:text-white">DevOps Automation Pro</Link></li>
              <li><Link to="/quantum-computing-solutions" className="text-gray-300 hover:text-white">Quantum Computing</Link></li>
              <li><Link to="/edge-computing-solutions" className="text-gray-300 hover:text-white">Edge Computing</Link></li>
              <li><Link to="/augmented-reality-solutions" className="text-gray-300 hover:text-white">AR Solutions</Link></li>
              <li><Link to="/virtual-reality-solutions" className="text-gray-300 hover:text-white">VR Solutions</Link></li>
              <li><Link to="/robotic-process-automation" className="text-gray-300 hover:text-white">RPA Solutions</Link></li>
              <li><Link to="/low-code-platform" className="text-gray-300 hover:text-white">Low-Code Platform</Link></li>
              <li><Link to="/serverless-architecture" className="text-gray-300 hover:text-white">Serverless Architecture</Link></li>
              <li><Link to="/container-orchestration" className="text-gray-300 hover:text-white">Container Orchestration</Link></li>
              <li><Link to="/ai-infrastructure" className="text-gray-300 hover:text-white">AI Infrastructure</Link></li>
              <li><Link to="/data-lake-solutions" className="text-gray-300 hover:text-white">Data Lake Solutions</Link></li>
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
              <li><Link to="/tutorials" className="text-gray-300 hover:text-white">Tutorials</Link></li>
              <li><Link to="/docs" className="text-gray-300 hover:text-white">Documentation</Link></li>
              <li><Link to="/api-docs" className="text-gray-300 hover:text-white">API Docs</Link></li>
              <li><Link to="/help" className="text-gray-300 hover:text-white">Help Center</Link></li>
              <li><Link to="/support" className="text-gray-300 hover:text-white">Support</Link></li>
              <li><Link to="/demo" className="text-gray-300 hover:text-white">Live Demos</Link></li>
              <li><Link to="/accessibility" className="text-gray-300 hover:text-white">Accessibility</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-md font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
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
              <div className="flex items-center text-gray-300">
                <Phone className="h-5 w-5 mr-3" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="h-5 w-5 mr-3" />
                <span>123 Tech Street, Silicon Valley, CA 94000</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-white transition-colors flex items-center group"
                  >
                    {link.name}
                    <ArrowRight className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-white transition-colors flex items-center group"
                  >
                    {link.name}
                    <ArrowRight className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-white transition-colors flex items-center group"
                  >
                    {link.name}
                    <ArrowRight className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="max-w-md">
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-300 mb-4">
              Get the latest news and updates about our services and industry insights.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="bg-blue-600 text-white px-6 py-2 rounded-r-md hover:bg-blue-700 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Zion Tech Group. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
            <Link to="/cookies" className="text-gray-400 hover:text-white text-sm transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default FooterPage;
