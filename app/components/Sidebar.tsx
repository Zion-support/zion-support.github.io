import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  X, 
  Brain, 
  Shield, 
  Zap, 
  Globe, 
  Home, 
  User, 
  Mail, 
  Phone, 
  MapPin,
  ArrowRight,
  BarChart3,
  Cloud,
  Users,
  Award,
  Star,
  ChevronRight
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = React.memo(({ isOpen, onClose }: SidebarProps) => {
  const location = useLocation();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const mainLinks = [
    { name: 'Home', href: '/', icon: <Home className="w-5 h-5" /> },
    { name: 'About', href: '/about', icon: <User className="w-5 h-5" /> },
    { name: 'Contact', href: '/contact', icon: <Mail className="w-5 h-5" /> },
  ];

  const services = [
    {
      title: 'AI Services',
      href: '/ai-services',
      icon: <Brain className="w-5 h-5" />,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'IT Services',
      href: '/services',
      icon: <Shield className="w-5 h-5" />,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Micro SAAS',
      href: '/micro-saas',
      icon: <Zap className="w-5 h-5" />,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: '5G Solutions',
      href: '/5g-solutions',
      icon: <Globe className="w-5 h-5" />,
      color: 'from-orange-500 to-red-500'
    }
  ];

  const microSaas = [
    {
      title: 'Zion Analytics Pro',
      href: '/zion-analytics-pro',
      icon: <BarChart3 className="w-4 h-4" />,
      price: 'From $299/month'
    },
    {
      title: 'Security Shield',
      href: '/zion-security-shield',
      icon: <Shield className="w-4 h-4" />,
      price: 'From $499/month'
    },
    {
      title: 'Cloud Vault',
      href: '/zion-cloud-vault',
      icon: <Cloud className="w-4 h-4" />,
      price: 'From $99/month'
    },
    {
      title: 'AI CRM Pro',
      href: '/zion-ai-crm-pro',
      icon: <Users className="w-4 h-4" />,
      price: 'From $199/month'
    }
  ];

  const contactInfo = [
    {
      icon: <Mail className="w-4 h-4" />,
      text: 'kleber@ziontechgroup.com'
    },
    {
      icon: <Phone className="w-4 h-4" />,
      text: '+1 (302) 464-0950'
    },
    {
      icon: <MapPin className="w-4 h-4" />,
      text: '364 E Main St STE 1008, Middletown, DE 19709'
    }
  ];

  const isActive = (path: string) => location.pathname === path;

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
        onClick={onClose}
      />
      
      {/* Sidebar */}
      <div className="fixed top-0 right-0 h-full w-80 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 z-50 transform transition-transform duration-300 ease-in-out lg:hidden">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-white/20">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Zion Tech Group
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-white hover:bg-white/10 transition-colors duration-300"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation */}
          <div className="flex-1 overflow-y-auto p-6">
            {/* Main Links */}
            <div className="mb-8">
              <h3 className="text-sm font-semibold text-cyan-400 mb-4 uppercase tracking-wider">
                Main Menu
              </h3>
              <ul className="space-y-2">
                {mainLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      onClick={onClose}
                      className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 group ${
                        isActive(link.href)
                          ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                          : 'text-white hover:bg-white/10 hover:text-cyan-400'
                      }`}
                    >
                      {link.icon}
                      <span className="font-medium">{link.name}</span>
                      {isActive(link.href) && (
                        <ChevronRight className="w-4 h-4 ml-auto" />
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="mb-8">
              <h3 className="text-sm font-semibold text-cyan-400 mb-4 uppercase tracking-wider">
                Our Services
              </h3>
              <div className="space-y-2">
                {services.map((service) => (
                  <Link
                    key={service.title}
                    to={service.href}
                    onClick={onClose}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 group ${
                      isActive(service.href)
                        ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                        : 'text-white hover:bg-white/10 hover:text-cyan-400'
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center`}>
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <div className="font-medium">{service.title}</div>
                    </div>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Micro SAAS */}
            <div className="mb-8">
              <h3 className="text-sm font-semibold text-cyan-400 mb-4 uppercase tracking-wider">
                Featured Micro SAAS
              </h3>
              <div className="space-y-2">
                {microSaas.map((saas) => (
                  <Link
                    key={saas.title}
                    to={saas.href}
                    onClick={onClose}
                    className="flex items-center justify-between px-4 py-3 rounded-lg text-white hover:bg-white/10 hover:text-cyan-400 transition-all duration-300 group"
                  >
                    <div className="flex items-center space-x-3">
                      {saas.icon}
                      <span className="font-medium text-sm">{saas.title}</span>
                    </div>
                    <span className="text-xs text-cyan-400">{saas.price}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="mb-8">
              <h3 className="text-sm font-semibold text-cyan-400 mb-4 uppercase tracking-wider">
                Contact Information
              </h3>
              <div className="space-y-3">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-3 text-sm text-gray-300">
                    <div className="w-5 h-5 text-cyan-400 mt-0.5">
                      {info.icon}
                    </div>
                    <span className="leading-relaxed">{info.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4 border-t border-white/20">
              <Link
                to="/contact"
                onClick={onClose}
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 group"
              >
                <span>Get Started Today</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

Sidebar.displayName = "Sidebar";

export default Sidebar;
