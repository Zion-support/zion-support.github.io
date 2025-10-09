import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, ArrowRight, Shield, Award, Globe, Facebook, Twitter, Linkedin, Instagram, Youtube, Github, FileText, Users, CreditCard, Calendar, Share2, MessageSquare, BarChart, Camera, Target, Zap, Heart, Code, Cloud, Brain, Atom } from 'lucide-react';

const Footer: React.FC = memo(() => {
  const currentYear = new Date().getFullYear();

  const microSaasServices = [
    { name: 'AI Content Generator', url: '/ai-content-generator', description: 'AI-powered content creation' },
    { name: 'AI CRM Automation', url: '/ai-crm-automation', description: 'Intelligent customer management' },
    { name: 'AI Invoice Generator', url: '/ai-invoice-generator', description: 'Automated billing solutions' },
    { name: 'AI Project Manager', url: '/ai-project-manager', description: 'Smart project management' },
    { name: 'AI Social Media Manager', url: '/ai-social-media-manager', description: 'Social media automation' },
    { name: 'AI Email Marketing', url: '/ai-email-marketing', description: 'Email campaign automation' }
  ];

  const aiServices = [
    { name: 'AI Chatbot Builder', url: '/ai-chatbot-builder', description: 'Intelligent chatbots' },
    { name: 'AI Data Analytics', url: '/ai-data-analytics', description: 'Advanced data insights' },
    { name: 'AI Image Recognition', url: '/ai-image-recognition', description: 'Computer vision solutions' },
    { name: 'AI Marketing', url: '/ai-marketing', description: 'AI-powered marketing' },
    { name: 'AI Automation', url: '/ai-automation', description: 'Process automation' },
    { name: 'AI Healthcare', url: '/ai-healthcare', description: 'Medical AI solutions' }
  ];

  const itServices = [
    { name: 'Cloud Infrastructure', url: '/cloud-infrastructure', description: 'Cloud migration & setup' },
    { name: 'Cybersecurity', url: '/cybersecurity', description: 'Security solutions' },
    { name: 'IT Support', url: '/it-support', description: '24/7 technical support' },
    { name: 'Database Management', url: '/database-management', description: 'Database optimization' },
    { name: 'Managed IT', url: '/managed-it', description: 'Complete IT management' },
    { name: 'Cloud Migration', url: '/cloud-migration', description: 'Seamless cloud transition' }
  ];

  const emergingTech = [
    { name: 'Quantum Computing', url: '/quantum-computing', description: 'Next-gen computing' },
    { name: 'Autonomous Systems', url: '/autonomous-systems', description: 'Self-managing systems' },
    { name: 'Blockchain', url: '/blockchain', description: 'Decentralized solutions' },
    { name: 'IoT Edge Computing', url: '/iot-edge-computing', description: 'Connected devices' },
    { name: 'AR/VR Solutions', url: '/ar-vr-solutions', description: 'Immersive experiences' }
  ];

  const companyLinks = [
    { name: 'About Us', url: '/about' },
    { name: 'Our Team', url: '/team' },
    { name: 'Careers', url: '/careers' },
    { name: 'Case Studies', url: '/case-studies' },
    { name: 'Blog', url: '/blog' },
    { name: 'Contact', url: '/contact' }
  ];

  const supportLinks = [
    { name: 'Documentation', url: '/docs' },
    { name: 'API Docs', url: '/api-docs' },
    { name: 'Support Center', url: '/contact' },
    { name: 'Status Page', url: '/status' },
    { name: 'Privacy Policy', url: '/privacy' },
    { name: 'Terms of Service', url: '/terms' },
    { name: 'Cookie Policy', url: '/cookies' },
    { name: 'GDPR', url: '/gdpr' }
  ];

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Zion Tech Group</h3>
                <p className="text-sm text-gray-400">AI & IT Solutions</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4 text-sm">
              Leading provider of AI-powered solutions, IT consulting, and innovative micro SAAS applications for businesses worldwide.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-400 text-sm">
                <Phone className="w-4 h-4" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400 text-sm">
                <Mail className="w-4 h-4" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400 text-sm">
                <MapPin className="w-4 h-4" />
                <span>364 E Main St STE 1008<br />Middletown DE 19709</span>
              </div>
            </div>
          </div>

          {/* Micro SAAS Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-cyan-400 flex items-center">
              <Code className="w-5 h-5 mr-2" />
              Micro SAAS
            </h4>
            <ul className="space-y-2">
              {microSaasServices.map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.url}
                    className="text-gray-400 hover:text-cyan-400 transition-colors text-sm block"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* AI Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-purple-400 flex items-center">
              <Brain className="w-5 h-5 mr-2" />
              AI Services
            </h4>
            <ul className="space-y-2">
              {aiServices.map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.url}
                    className="text-gray-400 hover:text-purple-400 transition-colors text-sm block"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* IT Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-400 flex items-center">
              <Cloud className="w-5 h-5 mr-2" />
              IT Services
            </h4>
            <ul className="space-y-2">
              {itServices.map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.url}
                    className="text-gray-400 hover:text-blue-400 transition-colors text-sm block"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-green-400 flex items-center">
              <Globe className="w-5 h-5 mr-2" />
              Company
            </h4>
            <ul className="space-y-2 mb-6">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.url}
                    className="text-gray-400 hover:text-green-400 transition-colors text-sm block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            <h4 className="text-lg font-semibold mb-4 text-yellow-400 flex items-center">
              <Shield className="w-5 h-5 mr-2" />
              Support
            </h4>
            <ul className="space-y-2">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.url}
                    className="text-gray-400 hover:text-yellow-400 transition-colors text-sm block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">
                Cookie Policy
              </Link>
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-green-400" />
                <span>Enterprise Security</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-4 h-4 text-yellow-400" />
                <span>ISO 27001 Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="w-4 h-4 text-blue-400" />
                <span>Global Reach</span>
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