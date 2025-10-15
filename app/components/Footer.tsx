import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Shield, 
  Zap, 
  Globe, 
  Mail, 
  Phone, 
  MapPin,
  ArrowRight,
  Star,
  Award,
  BarChart3,
  Cloud,
  Code,
  Database,
  Users,
  Settings,
  Heart
} from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    aiServices: [
      { name: 'AI Analytics', href: '/ai-analytics' },
      { name: 'AI Content Generation', href: '/ai-content-generation' },
      { name: 'AI Customer Support', href: '/ai-customer-support' },
      { name: 'AI Cybersecurity', href: '/ai-cybersecurity' },
      { name: 'AI Data Analytics', href: '/ai-data-analytics' },
      { name: 'AI Marketing Automation', href: '/ai-marketing-automation' },
    ],
    itServices: [
      { name: 'Cloud Migration', href: '/cloud-migration' },
      { name: 'DevOps Services', href: '/devops-services' },
      { name: 'IT Consulting', href: '/it-consulting' },
      { name: 'Network Security', href: '/network-security' },
      { name: 'Software Development', href: '/software-development' },
      { name: 'Web Development', href: '/web-development' },
    ],
    microSaas: [
      { name: 'Zion AI CRM Pro', href: '/zion-ai-crm-pro' },
      { name: 'Zion AI Video Generator', href: '/zion-ai-video-generator' },
      { name: 'Zion AI Financial Analytics Pro', href: '/zion-ai-financial-analytics-pro' },
      { name: 'Zion AI Cybersecurity Pro', href: '/zion-ai-cybersecurity-pro' },
      { name: 'Zion AI Marketing Automation Pro', href: '/zion-ai-marketing-automation-pro' },
      { name: 'Zion AI Project Manager Pro', href: '/zion-ai-project-manager-pro' },
    ],
    company: [
      { name: 'About', href: '/about' },
      { name: 'Contact', href: '/contact' },
      { name: 'Blog', href: '/blog' },
      { name: 'Support', href: '/support' },
      { name: 'Demo', href: '/demo' },
      { name: 'Tutorials', href: '/tutorials' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
    ],
  };

  return (
    <footer className="bg-slate-900 border-t border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Zion Tech Group</span>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed">
              Leading provider of AI-powered solutions, cybersecurity, cloud infrastructure, 
              and digital transformation for modern businesses.
            </p>
            <div className="flex space-x-4">
              <a href="mailto:kleber@ziontechgroup.com" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
              <a href="tel:+13024640950" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* AI Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">AI Services</h3>
            <ul className="space-y-2">
              {footerLinks.aiServices.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-cyan-400 transition-colors text-sm flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 group-hover:translate-x-1 transition-transform" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* IT Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">IT Services</h3>
            <ul className="space-y-2">
              {footerLinks.itServices.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-cyan-400 transition-colors text-sm flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 group-hover:translate-x-1 transition-transform" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Micro SAAS */}
          <div>
            <h3 className="text-white font-semibold mb-4">Micro SAAS</h3>
            <ul className="space-y-2">
              {footerLinks.microSaas.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-cyan-400 transition-colors text-sm flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 group-hover:translate-x-1 transition-transform" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2 mb-6">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-cyan-400 transition-colors text-sm flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 group-hover:translate-x-1 transition-transform" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-cyan-400 transition-colors text-sm flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 group-hover:translate-x-1 transition-transform" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Zion Tech Group. All rights reserved.
          </p>
          <div className="flex items-center space-x-2 mt-4 md:mt-0">
            <span className="text-gray-400 text-sm">Made with</span>
            <Heart className="w-4 h-4 text-red-500" />
            <span className="text-gray-400 text-sm">for innovation</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
