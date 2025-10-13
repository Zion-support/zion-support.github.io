import React from 'react';
import { Link } from 'react-router-dom';
import { X, Home, Users, Brain, Shield, Zap, Globe, BarChart3, Cloud, Code, Database, Mail, Phone, MapPin, Star, Award, ChevronRight } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const mainNavItems = [
    { name: 'Home', path: '/', icon: <Home className="w-5 h-5" /> },
    { name: 'About', path: '/about', icon: <Users className="w-5 h-5" /> },
    { name: 'Services', path: '/services', icon: <Zap className="w-5 h-5" /> },
    { name: 'AI Services', path: '/ai-services', icon: <Brain className="w-5 h-5" /> },
    { name: 'IT Services', path: '/it-services', icon: <Shield className="w-5 h-5" /> },
    { name: 'Micro SAAS', path: '/micro-saas', icon: <Zap className="w-5 h-5" /> },
    { name: '5G Solutions', path: '/5g-solutions', icon: <Globe className="w-5 h-5" /> },
    { name: 'Pricing', path: '/pricing', icon: <BarChart3 className="w-5 h-5" /> },
    { name: 'Blog', path: '/blog', icon: <Code className="w-5 h-5" /> },
    { name: 'Contact', path: '/contact', icon: <Mail className="w-5 h-5" /> }
  ];

  const aiServices = [
    { name: 'AI Analytics', path: '/ai-analytics' },
    { name: 'AI Automation', path: '/ai-automation' },
    { name: 'AI Content Generation', path: '/ai-content-generation' },
    { name: 'AI Customer Service', path: '/ai-customer-service' },
    { name: 'AI Fraud Detection', path: '/ai-fraud-detection' },
    { name: 'AI Healthcare', path: '/ai-healthcare' },
    { name: 'AI Marketing', path: '/ai-marketing' },
    { name: 'AI Project Management', path: '/ai-project-management' }
  ];

  const itServices = [
    { name: 'Cloud Services', path: '/cloud-services' },
    { name: 'Cybersecurity', path: '/cybersecurity' },
    { name: 'Web Development', path: '/web-development' },
    { name: 'Mobile Development', path: '/mobile-development' },
    { name: 'Database Management', path: '/database-management' },
    { name: 'Custom Development', path: '/custom-development' }
  ];

  const microSaasServices = [
    { name: 'Zion AI Neural Interface', path: '/zion-ai-neural-interface', featured: true },
    { name: 'AI Voice Cloning Studio', path: '/ai-voice-cloning-studio', featured: true },
    { name: 'AI Quantum Financial Oracle', path: '/ai-quantum-financial-oracle', featured: true },
    { name: 'AI Space Mission Optimizer', path: '/ai-space-mission-optimizer', featured: true },
    { name: 'Zion Analytics Pro', path: '/zion-analytics-pro', featured: false },
    { name: 'Zion Security Shield', path: '/zion-security-shield', featured: false }
  ];

  const companyLinks = [
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Careers', path: '/careers' },
    { name: 'Press', path: '/press' },
    { name: 'Partners', path: '/partners' }
  ];

  const supportLinks = [
    { name: 'Documentation', path: '/docs' },
    { name: 'Support', path: '/support' },
    { name: 'Tutorials', path: '/tutorials' },
    { name: 'Demo', path: '/demo' },
    { name: 'Consultation', path: '/consultation' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms of Service', path: '/terms' },
    { name: 'Cookie Policy', path: '/cookies' },
    { name: 'GDPR Compliance', path: '/gdpr' }
  ];

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />
      <div className="fixed top-0 right-0 h-full w-80 bg-slate-900/95 backdrop-blur-md border-l border-cyan-500/20 overflow-y-auto">
        <div className="flex items-center justify-between p-4 border-b border-cyan-500/20">
          <h2 className="text-lg font-semibold text-white">Navigation</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="p-4 space-y-6">
          {/* Main Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-3">Main Menu</h3>
            <div className="space-y-1">
              {mainNavItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="flex items-center space-x-3 px-3 py-2 text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all duration-300 rounded-lg group"
                  onClick={onClose}
                >
                  {item.icon}
                  <span className="font-medium">{item.name}</span>
                  <ChevronRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              ))}
            </div>
          </div>

          {/* AI Services */}
          <div>
            <h3 className="text-sm font-semibold text-purple-400 uppercase tracking-wider mb-3">AI Services</h3>
            <div className="space-y-1">
              {aiServices.slice(0, 4).map((service) => (
                <Link
                  key={service.name}
                  to={service.path}
                  className="block px-3 py-2 text-gray-300 hover:text-purple-400 hover:bg-purple-500/10 transition-all duration-300 rounded-lg text-sm"
                  onClick={onClose}
                >
                  {service.name}
                </Link>
              ))}
              <Link
                to="/ai-services"
                className="block px-3 py-2 text-purple-400 hover:text-purple-300 transition-colors rounded-lg text-sm font-medium"
                onClick={onClose}
              >
                View All AI Services →
              </Link>
            </div>
          </div>

          {/* IT Services */}
          <div>
            <h3 className="text-sm font-semibold text-green-400 uppercase tracking-wider mb-3">IT Services</h3>
            <div className="space-y-1">
              {itServices.slice(0, 4).map((service) => (
                <Link
                  key={service.name}
                  to={service.path}
                  className="block px-3 py-2 text-gray-300 hover:text-green-400 hover:bg-green-500/10 transition-all duration-300 rounded-lg text-sm"
                  onClick={onClose}
                >
                  {service.name}
                </Link>
              ))}
              <Link
                to="/it-services"
                className="block px-3 py-2 text-green-400 hover:text-green-300 transition-colors rounded-lg text-sm font-medium"
                onClick={onClose}
              >
                View All IT Services →
              </Link>
            </div>
          </div>

          {/* Micro SAAS */}
          <div>
            <h3 className="text-sm font-semibold text-yellow-400 uppercase tracking-wider mb-3">Micro SAAS</h3>
            <div className="space-y-1">
              {microSaasServices.slice(0, 4).map((service) => (
                <Link
                  key={service.name}
                  to={service.path}
                  className="flex items-center justify-between px-3 py-2 text-gray-300 hover:text-yellow-400 hover:bg-yellow-500/10 transition-all duration-300 rounded-lg text-sm group"
                  onClick={onClose}
                >
                  <span>{service.name}</span>
                  {service.featured && (
                    <Star className="w-3 h-3 text-yellow-400 fill-current" />
                  )}
                </Link>
              ))}
              <Link
                to="/micro-saas"
                className="block px-3 py-2 text-yellow-400 hover:text-yellow-300 transition-colors rounded-lg text-sm font-medium"
                onClick={onClose}
              >
                View All Micro SAAS →
              </Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-3">Company</h3>
            <div className="space-y-1">
              {companyLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="block px-3 py-2 text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all duration-300 rounded-lg text-sm"
                  onClick={onClose}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-semibold text-blue-400 uppercase tracking-wider mb-3">Support</h3>
            <div className="space-y-1">
              {supportLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="block px-3 py-2 text-gray-300 hover:text-blue-400 hover:bg-blue-500/10 transition-all duration-300 rounded-lg text-sm"
                  onClick={onClose}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Legal</h3>
            <div className="space-y-1">
              {legalLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300 rounded-lg text-sm"
                  onClick={onClose}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="pt-4 border-t border-gray-700">
            <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-3">Contact Info</h3>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-cyan-400 mt-0.5" />
                <span>364 E Main St STE 1008<br />Middletown DE 19709</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;