'use client';
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, ArrowRight, Brain, Cloud, Shield, Globe, Database, Smartphone, Zap, Sparkles, Star } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const aiServices = [
    { name: 'AI Chatbots & NLP', url: '/ai-chatbot-builder', description: 'Conversational AI' },
    { name: 'AI Content Generation', url: '/ai-content-generation', description: 'Automated content' },
    { name: 'AI Data Analytics', url: '/ai-data-analytics', description: 'Business intelligence' },
    { name: 'AI Computer Vision', url: '/ai-computer-vision', description: 'Image analysis' },
    { name: 'AI Voice Solutions', url: '/ai-voice-solutions', description: 'Speech recognition' },
    { name: 'AI Workflow Automation', url: '/ai-automation', description: 'Process automation' },
    { name: 'AI Healthcare Solutions', url: '/ai-healthcare', description: 'Medical AI' },
    { name: 'AI Financial Services', url: '/ai-financial-services', description: 'Fintech AI' },
    { name: 'AI Document Processing', url: '/ai-document-processing', description: 'Document analysis' },
    { name: 'AI Predictive Analytics', url: '/ai-predictive-analytics', description: 'Business forecasting' },
    { name: 'AI HR Solutions', url: '/ai-hr-solutions', description: 'Human resources AI' },
    { name: 'AI Edge Computing', url: '/ai-edge-computing', description: 'Distributed AI processing' }
  ];

  const itServices = [
    { name: 'Cloud Migration', url: '/cloud-migration', description: 'Cloud infrastructure' },
    { name: 'Cybersecurity Solutions', url: '/cybersecurity-solutions', description: 'Security solutions' },
    { name: 'DevOps & CI/CD', url: '/devops-cicd', description: 'Automation pipelines' },
    { name: 'Data Analytics', url: '/data-analytics', description: 'Business intelligence' },
    { name: 'Mobile Development', url: '/mobile-development', description: 'iOS & Android' },
    { name: 'API Development', url: '/api-development', description: 'API solutions' },
    { name: 'IT Support', url: '/it-support', description: '24/7 technical support' },
    { name: 'Data Analytics & BI', url: '/data-analytics-bi', description: 'Business intelligence' },
    { name: 'Custom Software', url: '/custom-software', description: 'Tailored solutions' },
    { name: 'Database Management', url: '/database-management', description: 'Database optimization' },
    { name: 'Network Infrastructure', url: '/network-infrastructure', description: 'Network setup' },
    { name: 'IT Asset Management', url: '/it-asset-management', description: 'Asset lifecycle' }
  ];

  const microSaasServices = [
    { name: 'Zion Analytics Pro', url: '/zion-analytics-pro', description: 'Business intelligence platform' },
    { name: 'Zion Chat AI', url: '/zion-chat-ai', description: 'AI customer support' },
    { name: 'Zion Security Shield', url: '/zion-security-shield', description: 'Cybersecurity monitoring' },
    { name: 'Zion Cloud Vault', url: '/zion-cloud-vault', description: 'Cloud storage solution' },
    { name: 'Zion Content Studio', url: '/zion-content-studio', description: 'Content creation platform' },
    { name: 'Zion CRM Intelligence', url: '/zion-crm-intelligence', description: 'Smart CRM solution' },
    { name: 'Zion Data Sync', url: '/zion-data-sync', description: 'Data synchronization' },
    { name: 'Zion Lead Magnet', url: '/zion-lead-magnet', description: 'Lead generation tool' },
    { name: 'Zion Project Master', url: '/zion-project-master', description: 'Project management' },
    { name: 'Zion Email Automation', url: '/zion-email-automation', description: 'Email marketing' },
    { name: 'Zion Inventory Smart', url: '/zion-inventory-smart', description: 'Inventory management' },
    { name: 'Zion Invoice Genius', url: '/zion-invoice-genius', description: 'Invoice automation' }
  ];

  const companyLinks = [
    { name: 'About Us', url: '/about' },
    { name: 'Our Team', url: '/team' },
    { name: 'Careers', url: '/careers' },
    { name: 'Partners', url: '/partners' },
    { name: 'Case Studies', url: '/case-studies' },
    { name: 'Blog', url: '/blog' }
  ];

  const resourceLinks = [
    { name: 'Documentation', url: '/docs' },
    { name: 'API Reference', url: '/api-docs' },
    { name: 'Tutorials', url: '/tutorials' },
    { name: 'FAQ', url: '/faq' },
    { name: 'Support', url: '/support' },
    { name: 'Community', url: '/community' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', url: '/privacy' },
    { name: 'Terms of Service', url: '/terms' },
    { name: 'Cookie Policy', url: '/cookies' },
    { name: 'Compliance', url: '/compliance' }
  ];

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/ziontechgroup', icon: Github },
    { name: 'LinkedIn', url: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin },
    { name: 'Twitter', url: 'https://twitter.com/ziontechgroup', icon: Twitter }
  ];

  return (
    <footer className="bg-slate-900 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Zion Tech Group</span>
            </div>
            <p className="text-gray-300 mb-4">
              Leading provider of AI and IT solutions, helping businesses transform through cutting-edge technology.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* AI Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">AI Services</h3>
            <ul className="space-y-2">
              {aiServices.slice(0, 6).map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.url}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              to="/ai-services"
              className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium mt-2"
            >
              View All AI Services
              <ArrowRight className="ml-1 h-3 w-3" />
            </Link>
          </div>

          {/* IT Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">IT Solutions</h3>
            <ul className="space-y-2">
              {itServices.slice(0, 6).map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.url}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              to="/it-services"
              className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium mt-2"
            >
              View All IT Services
              <ArrowRight className="ml-1 h-3 w-3" />
            </Link>
          </div>

          {/* Micro SAAS */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Micro SAAS</h3>
            <ul className="space-y-2">
              {microSaasServices.slice(0, 6).map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.url}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              to="/micro-saas"
              className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium mt-2"
            >
              View All Products
              <ArrowRight className="ml-1 h-3 w-3" />
            </Link>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            <div className="flex flex-wrap gap-6">
              {legalLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.url}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start text-gray-300">
              <Phone className="h-4 w-4 mr-2" />
              <a href="tel:+13024640950" className="hover:text-white transition-colors">
                +1 (302) 464-0950
              </a>
            </div>
            <div className="flex items-center justify-center md:justify-start text-gray-300">
              <Mail className="h-4 w-4 mr-2" />
              <a href="mailto:kleber@ziontechgroup.com" className="hover:text-white transition-colors">
                kleber@ziontechgroup.com
              </a>
            </div>
            <div className="flex items-center justify-center md:justify-start text-gray-300">
              <MapPin className="h-4 w-4 mr-2" />
              <span>364 E Main St STE 1008<br />Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;