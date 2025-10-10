'use client';
import React, { memo } from 'react';
import { Phone, Mail, MapPin, Clock, Zap, Brain, Cloud, Code, Users } from 'lucide-react';

const Footer: React.FC = memo(() => {
  const currentYear = new Date().getFullYear();
  
  const aiServices = [
    { name: 'AI Strategy & Consulting', url: '/ai-services', description: 'Strategic AI consulting' },
    { name: 'Machine Learning Solutions', url: '/ai-services', description: 'Custom ML models' },
    { name: 'Natural Language Processing', url: '/ai-services', description: 'NLP and chatbots' },
    { name: 'Computer Vision', url: '/ai-services', description: 'Image and video analysis' },
    { name: 'AI Automation', url: '/ai-services', description: 'Process automation' },
    { name: 'AI Data Analytics', url: '/ai-services', description: 'Intelligent analytics' },
    { name: 'AI Healthcare Solutions', url: '/ai-services', description: 'Medical AI applications' },
    { name: 'AI Financial Services', url: '/ai-services', description: 'Fintech AI solutions' },
    { name: 'AI HR & Talent Management', url: '/ai-services', description: 'HR automation' },
    { name: 'AI Supply Chain Optimization', url: '/ai-services', description: 'Supply chain AI' },
    { name: 'AI Cybersecurity Suite', url: '/ai-services', description: 'Security AI' },
    { name: 'AI Edge Computing', url: '/ai-services', description: 'Distributed AI processing' }
  ];

  const itServices = [
    { name: 'Cloud Infrastructure', url: '/it-services', description: 'AWS, Azure, GCP' },
    { name: 'DevOps & CI/CD', url: '/it-services', description: 'Automation pipelines' },
    { name: 'Cybersecurity Solutions', url: '/it-services', description: 'Security solutions' },
    { name: 'Web Development', url: '/it-services', description: 'Modern web apps' },
    { name: 'Mobile Development', url: '/it-services', description: 'iOS & Android' },
    { name: 'API Development', url: '/it-services', description: 'API solutions' },
    { name: 'IT Support & Helpdesk', url: '/it-services', description: '24/7 support' },
    { name: 'IT Consulting', url: '/it-services', description: 'Strategic planning' }
  ];

  const microSaasServices = [
    { name: 'Zion Analytics Pro', url: '/micro-saas', description: 'Business intelligence' },
    { name: 'Zion Chat AI', url: '/micro-saas', description: 'AI customer support' },
    { name: 'Zion Security Shield', url: '/micro-saas', description: 'Cybersecurity monitoring' },
    { name: 'Zion Cloud Vault', url: '/micro-saas', description: 'Cloud backup' },
    { name: 'Zion Content Studio', url: '/micro-saas', description: 'Content creation' },
    { name: 'Zion CRM Pro', url: '/micro-saas', description: 'Customer management' },
    { name: 'Zion Workflow Engine', url: '/micro-saas', description: 'Process automation' },
    { name: 'Zion Lead Gen AI', url: '/micro-saas', description: 'Lead generation' }
  ];

  const companyLinks = [
    { name: 'About Us', url: '/about' },
    { name: 'Case Studies', url: '/case-studies' },
    { name: 'Blog', url: '/blog' },
    { name: 'Careers', url: '/careers' },
    { name: 'Partners', url: '/partners' },
    { name: 'Support', url: '/support' }
  ];

  const resourcesLinks = [
    { name: 'Pricing', url: '/pricing' },
    { name: 'FAQ', url: '/faq' },
    { name: 'Documentation', url: '/docs' },
    { name: 'API Reference', url: '/api-docs' },
    { name: 'Tutorials', url: '/tutorials' },
    { name: 'Community', url: '/community' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', url: '/privacy' },
    { name: 'Terms of Service', url: '/terms' },
    { name: 'Cookie Policy', url: '/cookies' },
    { name: 'GDPR Compliance', url: '/gdpr' },
    { name: 'Security', url: '/security' },
    { name: 'Compliance', url: '/compliance' }
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">Zion Tech Group</h3>
              <p className="text-gray-300 leading-relaxed">
                Leading provider of AI-powered enterprise solutions, quantum computing, 
                autonomous systems, and digital transformation services.
              </p>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-cyan-400" />
                <a href="tel:+13024640950" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  (302) 464-0950
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-cyan-400" />
                <a href="mailto:kleber@ziontechgroup.com" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <span className="text-gray-300">
                  364 E Main St STE 1008<br />
                  Middletown, DE 19709
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-cyan-400" />
                <span className="text-gray-300">
                  Mon-Fri: 9AM-6PM EST<br />
                  24/7 Emergency Support
                </span>
              </div>
            </div>
          </div>

          {/* AI Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 flex items-center">
              <Brain className="w-5 h-5 text-cyan-400 mr-2" />
              AI Services
            </h4>
            <ul className="space-y-3">
              {aiServices.slice(0, 6).map((service, index) => (
                <li key={index}>
                  <a 
                    href={service.url} 
                    className="text-gray-300 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* IT Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 flex items-center">
              <Cloud className="w-5 h-5 text-purple-400 mr-2" />
              IT Services
            </h4>
            <ul className="space-y-3">
              {itServices.slice(0, 6).map((service, index) => (
                <li key={index}>
                  <a 
                    href={service.url} 
                    className="text-gray-300 hover:text-purple-400 transition-colors text-sm"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Micro SaaS */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 flex items-center">
              <Code className="w-5 h-5 text-green-400 mr-2" />
              Micro SaaS
            </h4>
            <ul className="space-y-3">
              {microSaasServices.slice(0, 6).map((service, index) => (
                <li key={index}>
                  <a 
                    href={service.url} 
                    className="text-gray-300 hover:text-green-400 transition-colors text-sm"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Secondary Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 pt-8 border-t border-gray-700">
          <div>
            <h5 className="text-sm font-semibold text-white mb-4">Company</h5>
            <ul className="space-y-2">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.url} 
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h5 className="text-sm font-semibold text-white mb-4">Resources</h5>
            <ul className="space-y-2">
              {resourcesLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.url} 
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h5 className="text-sm font-semibold text-white mb-4">Legal</h5>
            <ul className="space-y-2">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.url} 
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Zap className="w-4 h-4 text-yellow-400" />
                <span className="text-sm text-gray-400">99.9% Uptime</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-gray-400">500+ Projects</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;