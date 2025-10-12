import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Zap, Brain, Cloud, Users, ArrowRight, Shield, Database, Workflow, Link as LinkIcon, Linkedin, Twitter, Github } from 'lucide-react';

const Footer: React.FC = () => {
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
    { name: 'Mobile App Development', url: '/mobile-development', description: 'Mobile apps' },
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
    { name: 'News & Blog', url: '/news' },
    { name: 'Case Studies', url: '/case-studies' },
    { name: 'Partners', url: '/partners' },
    { name: 'Investors', url: '/investors' },
    { name: 'Contact', url: '/contact' }
  ];

  const resources = [
    { name: 'Documentation', url: '/docs' },
    { name: 'API Reference', url: '/api-docs' },
    { name: 'Tutorials', url: '/tutorials' },
    { name: 'White Papers', url: '/white-papers' },
    { name: 'Webinars', url: '/webinars' },
    { name: 'Support Center', url: '/support' },
    { name: 'Community', url: '/community' },
    { name: 'Status Page', url: '/status' }
  ];

  const socialLinks = [
    { name: 'Twitter', url: 'https://twitter.com/ziontechgroup', icon: <Twitter className="w-5 h-5" /> },
    { name: 'LinkedIn', url: 'https://linkedin.com/company/ziontechgroup', icon: <Linkedin className="w-5 h-5" /> },
    { name: 'GitHub', url: 'https://github.com/ziontechgroup', icon: <Github className="w-5 h-5" /> }
  ];

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white mb-4">Zion Tech Group</h3>
            <p className="text-gray-300 mb-4">
              Advanced AI & IT Solutions
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* AI Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white mb-4">AI Services</h4>
            <ul className="space-y-2">
              {aiServices.slice(0, 6).map((service, index) => (
                <li key={index}>
                  <Link to={service.url} className="text-gray-300 hover:text-cyan-400 transition-colors">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* IT Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white mb-4">IT Services</h4>
            <ul className="space-y-2">
              {itServices.slice(0, 6).map((service, index) => (
                <li key={index}>
                  <Link to={service.url} className="text-gray-300 hover:text-cyan-400 transition-colors">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              {company.map((item, index) => (
                <li key={index}>
                  <Link to={item.url} className="text-gray-300 hover:text-cyan-400 transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">
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