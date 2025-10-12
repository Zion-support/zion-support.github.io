import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Zap, Brain, Cloud, Users, ArrowRight, Shield, Database, Workflow, Link as LinkIcon, Linkedin, Twitter, Github } from 'lucide-react';

const currentYear = new Date().getFullYear();

const aiServices = [
  { name: 'AI Analytics & BI', url: '/ai-analytics', description: 'Business intelligence' },
  { name: 'AI Automation', url: '/ai-automation', description: 'Process automation' },
  { name: 'AI Chatbots & NLP', url: '/ai-chatbot-builder', description: 'Conversational AI' },
  { name: 'AI Content Generation', url: '/ai-content-generation', description: 'Automated content' },
  { name: 'AI Cybersecurity', url: '/ai-cybersecurity', description: 'AI security' },
  { name: 'AI CRM', url: '/ai-crm', description: 'Smart CRM' },
  { name: 'AI Data Analytics', url: '/ai-data-analytics', description: 'Data insights' },
  { name: 'AI Healthcare', url: '/ai-healthcare', description: 'Medical AI' },
  { name: 'AI Computer Vision', url: '/ai-computer-vision', description: 'Image analysis' },
  { name: 'AI Voice Solutions', url: '/ai-voice-solutions', description: 'Speech recognition' },
  { name: 'AI Financial Services', url: '/ai-financial-services', description: 'Fintech AI' },
  { name: 'AI E-commerce Solutions', url: '/ai-ecommerce-solutions', description: 'E-commerce AI' }
];

const itServices = [
  { name: 'Cloud Migration', url: '/cloud-migration', description: 'Cloud solutions' },
  { name: 'DevOps & CI/CD', url: '/devops', description: 'Development operations' },
  { name: 'Cybersecurity', url: '/cybersecurity', description: 'Security solutions' },
  { name: 'Database Management', url: '/database', description: 'Database services' },
  { name: 'API Development', url: '/api', description: 'API solutions' },
  { name: 'Web Development', url: '/web-development', description: 'Web solutions' },
  { name: 'IT Consulting', url: '/it-consulting', description: 'IT advisory' },
  { name: 'System Integration', url: '/system-integration', description: 'System solutions' },
  { name: 'Data Management', url: '/data-management', description: 'Data solutions' },
  { name: 'Network Security', url: '/network-security', description: 'Network protection' },
  { name: 'IT Support', url: '/it-support', description: 'Technical support' }
];

const company = [
  { name: 'About Us', url: '/about' },
  { name: 'Our Team', url: '/team' },
  { name: 'Careers', url: '/careers' },
  { name: 'Case Studies', url: '/case-studies' },
  { name: 'Blog', url: '/blog' },
  { name: 'Partners', url: '/partners' },
  { name: 'Investors', url: '/investors' },
  { name: 'Contact', url: '/contact' }
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">Z</span>
              </div>
              <span className="text-xl font-bold">Zion Tech Group</span>
            </div>
            <p className="text-gray-400 text-sm">
              Leading provider of AI-powered solutions and IT services for businesses worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* AI Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">AI Services</h3>
            <ul className="space-y-2">
              {aiServices.slice(0, 6).map((service) => (
                <li key={service.name}>
                  <Link 
                    to={service.url} 
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* IT Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">IT Services</h3>
            <ul className="space-y-2">
              {itServices.slice(0, 6).map((service) => (
                <li key={service.name}>
                  <Link 
                    to={service.url} 
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.url} 
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-400 hover:text-white text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-white text-sm">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-gray-400 hover:text-white text-sm">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;