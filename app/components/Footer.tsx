'use client';
import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Zap, Brain, Cloud, Code, Users, Cpu, ArrowRight, BarChart, Shield, Globe, Database, Smartphone, FileText, MessageCircle, Target, CheckSquare, DollarSign, Box, Settings, Heart, Eye, Mic, Workflow, Link as LinkIcon, Wifi, Package, TrendingUp, Calendar, CheckCircle, ShoppingCart, Star, Award, Sparkles } from 'lucide-react';

const Footer: React.FC = memo(() => {
  const currentYear = new Date().getFullYear();
  
  const aiServices = [
    { name: 'AI Analytics Dashboard Pro', url: '/ai-analytics-dashboard-pro', description: 'Advanced BI platform', isPopular: true },
    { name: 'AI Content Generation Pro', url: '/ai-content-generation-pro', description: 'Enterprise content AI', isNew: true },
    { name: 'AI Customer Support Enterprise', url: '/ai-customer-support-enterprise', description: '24/7 intelligent support', isPopular: true },
    { name: 'AI Workflow Automation Pro', url: '/ai-workflow-automation-pro', description: 'Intelligent automation' },
    { name: 'AI Cybersecurity Monitor Pro', url: '/ai-cybersecurity-monitor-pro', description: 'AI-powered security', isPopular: true },
    { name: 'AI Predictive Analytics Enterprise', url: '/ai-predictive-analytics-enterprise', description: 'Business forecasting' },
    { name: 'AI Computer Vision', url: '/ai-computer-vision', description: 'Image analysis' },
    { name: 'AI Voice Solutions', url: '/ai-voice-solutions', description: 'Speech recognition' },
    { name: 'AI Healthcare Solutions', url: '/ai-healthcare', description: 'Medical AI' },
    { name: 'AI Financial Services', url: '/ai-financial-services', description: 'Fintech AI' },
    { name: 'AI Document Processing', url: '/ai-document-processing', description: 'Document analysis' },
    { name: 'AI HR Solutions', url: '/ai-hr-solutions', description: 'Human resources AI' }
  ];

  const itServices = [
    { name: 'Cloud Infrastructure Enterprise', url: '/cloud-infrastructure-enterprise', description: 'Enterprise cloud solutions', isPopular: true },
    { name: 'Cybersecurity Solutions Advanced', url: '/cybersecurity-solutions-advanced', description: 'Advanced security', isPopular: true },
    { name: 'Custom Web Development Enterprise', url: '/custom-web-development-enterprise', description: 'Enterprise web apps', isPopular: true },
    { name: 'Mobile Development Enterprise', url: '/mobile-development-enterprise', description: 'Enterprise mobile apps' },
    { name: 'API Development Enterprise', url: '/api-development-enterprise', description: 'Enterprise API solutions' },
    { name: 'DevOps & CI/CD Enterprise', url: '/devops-cicd-enterprise', description: 'Enterprise automation', isPopular: true },
    { name: 'IT Support', url: '/it-support', description: '24/7 technical support' },
    { name: 'Data Analytics & BI', url: '/data-analytics-bi', description: 'Business intelligence' },
    { name: 'Custom Software', url: '/custom-software', description: 'Tailored solutions' },
    { name: 'Database Management', url: '/database-management', description: 'Database optimization' },
    { name: 'Network Infrastructure', url: '/network-infrastructure', description: 'Network setup' },
    { name: 'IT Asset Management', url: '/it-asset-management', description: 'Asset lifecycle' }
  ];

  const microSaasServices = [
    { name: 'Zion Analytics Pro', url: '/zion-analytics-pro', description: 'Business intelligence platform', isPopular: true },
    { name: 'Zion Chat AI', url: '/zion-chat-ai', description: 'AI customer support', isPopular: true },
    { name: 'Zion Security Shield', url: '/zion-security-shield', description: 'Cybersecurity monitoring', isPopular: true },
    { name: 'Zion Cloud Vault', url: '/zion-cloud-vault', description: 'Cloud backup & recovery' },
    { name: 'Zion Content Studio', url: '/zion-content-studio', description: 'Content creation platform' },
    { name: 'Zion CRM Intelligence', url: '/zion-crm-intelligence', description: 'Smart CRM solution', isPopular: true },
    { name: 'Zion Data Sync', url: '/zion-data-sync', description: 'Data synchronization' },
    { name: 'Zion Lead Magnet', url: '/zion-lead-magnet', description: 'Lead generation tool' },
    { name: 'Zion Project Master', url: '/zion-project-master', description: 'Project management' },
    { name: 'Zion Email Automation', url: '/zion-email-automation', description: 'Email marketing' },
    { name: 'Zion Inventory Smart', url: '/zion-inventory-smart', description: 'Inventory management' },
    { name: 'Zion Invoice Genius', url: '/zion-invoice-genius', description: 'Invoice automation' }
  ];

  const emergingTechServices = [
    { name: '5G Implementation Enterprise', url: '/5g-implementation-enterprise', description: '5G network solutions', isNew: true },
    { name: 'AI 3D Generation Pro', url: '/ai-3d-generation-pro', description: 'AI-powered 3D content', isNew: true },
    { name: 'Quantum Computing Solutions', url: '/quantum-computing-solutions', description: 'Quantum computing', isNew: true },
    { name: 'AR/VR Solutions Enterprise', url: '/ar-vr-solutions-enterprise', description: 'Immersive experiences' },
    { name: 'Blockchain Development Enterprise', url: '/blockchain-development-enterprise', description: 'Blockchain solutions' },
    { name: 'IoT Integration', url: '/iot-integration', description: 'Internet of Things' }
  ];

  const companyLinks = [
    { name: 'About Us', url: '/about' },
    { name: 'Our Team', url: '/team' },
    { name: 'Careers', url: '/careers' },
    { name: 'Case Studies', url: '/case-studies' },
    { name: 'Partners', url: '/partners' },
    { name: 'Press', url: '/press' }
  ];

  const resourceLinks = [
    { name: 'Documentation', url: '/docs' },
    { name: 'API Reference', url: '/api-docs' },
    { name: 'Tutorials', url: '/tutorials' },
    { name: 'Blog', url: '/blog' },
    { name: 'FAQ', url: '/faq' },
    { name: 'Support', url: '/support' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', url: '/privacy' },
    { name: 'Terms of Service', url: '/terms' },
    { name: 'Cookie Policy', url: '/cookies' },
    { name: 'Compliance', url: '/compliance' },
    { name: 'GDPR', url: '/gdpr' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Brain className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold">Zion Tech Group</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-sm">
              Leading technology company providing cutting-edge AI solutions, cloud infrastructure, 
              cybersecurity, and custom software development services.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-gray-300">
                <Phone className="h-4 w-4 mr-2" />
                <a href="tel:+13024640950" className="hover:text-white transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="h-4 w-4 mr-2" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-white transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="h-4 w-4 mr-2" />
                <span>364 E Main St STE 1008<br />Middletown DE 19709</span>
              </div>
            </div>
          </div>

          {/* AI Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Brain className="h-5 w-5 mr-2 text-purple-400" />
              AI Services
            </h3>
            <ul className="space-y-2">
              {aiServices.slice(0, 6).map((service, index) => (
                <li key={index} className="flex items-center justify-between">
                  <Link
                    to={service.url}
                    className="text-gray-300 hover:text-white transition-colors text-sm flex-1"
                  >
                    {service.name}
                  </Link>
                  {service.isPopular && (
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black text-xs font-bold px-1 py-0.5 rounded ml-2">
                      POP
                    </span>
                  )}
                  {service.isNew && (
                    <span className="bg-gradient-to-r from-green-400 to-cyan-400 text-black text-xs font-bold px-1 py-0.5 rounded ml-2">
                      NEW
                    </span>
                  )}
                </li>
              ))}
              <li>
                <Link
                  to="/ai-services"
                  className="text-purple-400 hover:text-purple-300 transition-colors text-sm font-medium flex items-center"
                >
                  View All AI Services
                  <ArrowRight className="h-3 w-3 ml-1" />
                </Link>
              </li>
            </ul>
          </div>

          {/* IT Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Code className="h-5 w-5 mr-2 text-cyan-400" />
              IT Services
            </h3>
            <ul className="space-y-2">
              {itServices.slice(0, 6).map((service, index) => (
                <li key={index} className="flex items-center justify-between">
                  <Link
                    to={service.url}
                    className="text-gray-300 hover:text-white transition-colors text-sm flex-1"
                  >
                    {service.name}
                  </Link>
                  {service.isPopular && (
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black text-xs font-bold px-1 py-0.5 rounded ml-2">
                      POP
                    </span>
                  )}
                </li>
              ))}
              <li>
                <Link
                  to="/it-services"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium flex items-center"
                >
                  View All IT Services
                  <ArrowRight className="h-3 w-3 ml-1" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Micro SAAS */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Zap className="h-5 w-5 mr-2 text-green-400" />
              Micro SAAS
            </h3>
            <ul className="space-y-2">
              {microSaasServices.slice(0, 6).map((service, index) => (
                <li key={index} className="flex items-center justify-between">
                  <Link
                    to={service.url}
                    className="text-gray-300 hover:text-white transition-colors text-sm flex-1"
                  >
                    {service.name}
                  </Link>
                  {service.isPopular && (
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black text-xs font-bold px-1 py-0.5 rounded ml-2">
                      POP
                    </span>
                  )}
                </li>
              ))}
              <li>
                <Link
                  to="/micro-saas"
                  className="text-green-400 hover:text-green-300 transition-colors text-sm font-medium flex items-center"
                >
                  View All Products
                  <ArrowRight className="h-3 w-3 ml-1" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Emerging Technologies */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Cpu className="h-5 w-5 mr-2 text-indigo-400" />
              Emerging Tech
            </h3>
            <ul className="space-y-2">
              {emergingTechServices.slice(0, 6).map((service, index) => (
                <li key={index} className="flex items-center justify-between">
                  <Link
                    to={service.url}
                    className="text-gray-300 hover:text-white transition-colors text-sm flex-1"
                  >
                    {service.name}
                  </Link>
                  {service.isNew && (
                    <span className="bg-gradient-to-r from-green-400 to-cyan-400 text-black text-xs font-bold px-1 py-0.5 rounded ml-2">
                      NEW
                    </span>
                  )}
                </li>
              ))}
              <li>
                <Link
                  to="/emerging-tech"
                  className="text-indigo-400 hover:text-indigo-300 transition-colors text-sm font-medium flex items-center"
                >
                  View All Tech
                  <ArrowRight className="h-3 w-3 ml-1" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Additional Links */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Company */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                {companyLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.url}
                      className="text-gray-300 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                {resourceLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.url}
                      className="text-gray-300 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                {legalLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.url}
                      className="text-gray-300 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            <div className="flex items-center space-x-6">
              <div className="flex items-center text-gray-400 text-sm">
                <Clock className="h-4 w-4 mr-2" />
                24/7 Support Available
              </div>
              <div className="flex items-center text-gray-400 text-sm">
                <Shield className="h-4 w-4 mr-2" />
                Enterprise Security
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