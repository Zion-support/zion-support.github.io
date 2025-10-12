import React from 'react';
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
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Zion Tech Group</h3>
            <p className="text-gray-300 mb-4">
              Advanced AI & IT Solutions for the modern enterprise.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* AI Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">AI Services</h4>
            <ul className="space-y-2">
              {aiServices.slice(0, 6).map((service, index) => (
                <li key={index}>
                  <a
                    href={service.url}
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* IT Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">IT Services</h4>
            <ul className="space-y-2">
              {itServices.slice(0, 6).map((service, index) => (
                <li key={index}>
                  <a
                    href={service.url}
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 mb-6">
              {company.slice(0, 4).map((item, index) => (
                <li key={index}>
                  <a
                    href={item.url}
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              {resources.slice(0, 4).map((resource, index) => (
                <li key={index}>
                  <a
                    href={resource.url}
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    {resource.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                Terms of Service
              </a>
              <a href="/cookies" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;