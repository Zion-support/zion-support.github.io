import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, ArrowRight, Shield, Award, Globe, Facebook, Twitter, Linkedin, Instagram, Youtube, Github } from 'lucide-react';

const Footer: React.FC = memo(() => {
  const currentYear = new Date().getFullYear();

  const aiServices = [
    { name: 'AI Marketing', url: '/ai-marketing', description: 'AI-powered marketing automation' },
    { name: 'AI Automation', url: '/ai-automation', description: 'Intelligent process automation' },
    { name: 'AI Healthcare', url: '/ai-healthcare', description: 'Medical AI solutions' },
    { name: 'AI Fintech', url: '/ai-fintech', description: 'Financial AI applications' },
    { name: 'AI Content Generation', url: '/ai-content-generation', description: 'AI content creation' },
    { name: 'AI Data Analytics', url: '/ai-data-analytics', description: 'Advanced data insights' },
    { name: 'AI Cybersecurity', url: '/ai-cybersecurity', description: 'AI security solutions' },
    { name: 'AI Workflow Automation', url: '/ai-workflow-automation', description: 'Workflow optimization' },
    { name: 'AI Customer Support', url: '/ai-customer-support', description: 'AI-powered customer service' },
    { name: 'AI Sales Automation', url: '/ai-sales-automation', description: 'Intelligent sales processes' },
    { name: 'AI Project Management', url: '/ai-project-management', description: 'AI-powered project management' },
    { name: 'AI Voice Processing', url: '/ai-voice-processing', description: 'Voice AI solutions' },
    { name: 'AI Image Recognition', url: '/ai-image-recognition', description: 'Computer vision AI' }
  ];

  const itServices = [
    { name: 'IT Infrastructure', url: '/it-infrastructure', description: 'Enterprise infrastructure' },
    { name: 'IT Support', url: '/it-support', description: 'Comprehensive IT support' },
    { name: 'Cloud Infrastructure', url: '/cloud-infrastructure', description: 'Cloud migration & setup' },
    { name: 'Cybersecurity', url: '/cybersecurity', description: 'Security solutions' },
    { name: 'Database Management', url: '/database-management', description: 'Database management' },
    { name: 'Managed IT', url: '/managed-it', description: '24/7 IT management' }
  ];

  const emergingTech = [
    { name: 'Quantum Computing', url: '/quantum-computing', description: 'Next-gen computing' },
    { name: 'Autonomous Systems', url: '/autonomous-systems', description: 'Self-managing systems' },
    { name: 'Blockchain', url: '/blockchain', description: 'Decentralized solutions' },
    { name: 'IoT Edge Computing', url: '/iot-edge-computing', description: 'Connected devices' },
    { name: 'Robotics', url: '/robotics', description: 'Intelligent robots' }
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
    { name: 'Support', url: '/contact' },
    { name: 'Status', url: '/status' },
    { name: 'Consultation', url: '/consultation' },
    { name: 'Pricing', url: '/pricing' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', url: '/privacy' },
    { name: 'Terms of Service', url: '/terms' },
    { name: 'Cookie Policy', url: '/cookies' },
    { name: 'GDPR', url: '/gdpr' },
    { name: 'Compliance', url: '/compliance' }
  ];

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
            <p className="text-gray-400 mb-4">
              Leading provider of AI-powered solutions, IT consulting, and innovative technology services for businesses worldwide.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-400">
                <Phone className="w-4 h-4" />
                <span>(302) 464-0950</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Mail className="w-4 h-4" />
                <span>support@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <MapPin className="w-4 h-4" />
                <span>Global Services</span>
              </div>
            </div>
          </div>

          {/* AI Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-cyan-400">AI Services</h4>
            <ul className="space-y-2">
              {aiServices.slice(0, 6).map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.url}
                    className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* IT Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-cyan-400">IT Services</h4>
            <ul className="space-y-2">
              {itServices.map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.url}
                    className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-cyan-400">Company</h4>
            <ul className="space-y-2 mb-6">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.url}
                    className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            <h4 className="text-lg font-semibold mb-4 text-cyan-400">Support</h4>
            <ul className="space-y-2">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.url}
                    className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Compliance */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-cyan-400">Legal</h4>
            <ul className="space-y-2">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.url}
                    className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} Zion Tech Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;
