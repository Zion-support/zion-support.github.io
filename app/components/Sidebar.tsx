import React, { useState, useCallback, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  X,
  Brain,
  Shield,
  Zap,
  Globe,
  ChevronDown,
  ChevronRight,
  Home,
  User,
  Mail,
  Phone,
  MapPin,
  Clock,
  ArrowRight,
  Star,
  Users,
  Award,
  BarChart3,
  Cloud,
  Code,
  Database,
  Network,
  Smartphone,
  Monitor,
  Target,
  Calendar,
  Heart,
  Receipt,
  TrendingUp,
  Cpu,
  Package
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());
  const location = useLocation();

  const toggleSection = useCallback((section: string) => {
    setExpandedSections(prev => {
      const newSet = new Set(prev);
      if (newSet.has(section)) {
        newSet.delete(section);
      } else {
        newSet.add(section);
      }
      return newSet;
    });
  }, []);

  const services = useMemo(() => [
    {
      name: "AI Solutions",
      href: "/ai-services",
      icon: <Brain className="w-5 h-5" />,
      color: "from-blue-500 to-cyan-500",
      items: [
        { name: "AI Analytics", href: "/ai-analytics" },
        { name: "AI Automation", href: "/ai-automation" },
        { name: "AI Content Generation", href: "/ai-content-generation" },
        { name: "AI Customer Service", href: "/ai-customer-service" },
        { name: "AI Marketing", href: "/ai-marketing" },
        { name: "AI Healthcare", href: "/ai-healthcare" }
      ]
    },
    {
      name: "IT Services",
      href: "/services",
      icon: <Shield className="w-5 h-5" />,
      color: "from-green-500 to-emerald-500",
      items: [
        { name: "Cloud Infrastructure", href: "/cloud-infrastructure" },
        { name: "Cybersecurity", href: "/cybersecurity-solutions" },
        { name: "Web Development", href: "/web-development" },
        { name: "Mobile Development", href: "/mobile-development" },
        { name: "Database Management", href: "/database-management" },
        { name: "Custom Software", href: "/custom-software" }
      ]
    },
    {
      name: "Micro SAAS",
      href: "/micro-saas",
      icon: <Zap className="w-5 h-5" />,
      color: "from-purple-500 to-pink-500",
      items: [
        { name: "Zion Analytics Pro", href: "/zion-analytics-pro" },
        { name: "Zion Security Shield", href: "/zion-security-shield" },
        { name: "Zion Cloud Vault", href: "/zion-cloud-vault" },
        { name: "Zion Content Studio", href: "/zion-content-studio" },
        { name: "Zion AI Video Generator", href: "/zion-ai-video-generator" },
        { name: "Zion AI Invoice Generator", href: "/zion-ai-invoice-generator" }
      ]
    },
    {
      name: "5G Solutions",
      href: "/5g-solutions",
      icon: <Globe className="w-5 h-5" />,
      color: "from-orange-500 to-red-500",
      items: [
        { name: "5G Data Analytics", href: "/5g-data-analytics" },
        { name: "5G Edge Computing", href: "/5g-edge-computing" },
        { name: "5G Implementation", href: "/5g-implementation" },
        { name: "5G Mobile Applications", href: "/5g-mobile-applications" },
        { name: "5G Network Infrastructure", href: "/5g-network-infrastructure" },
        { name: "5G Private Networks", href: "/5g-private-networks" }
      ]
    }
  ], []);

  const mainPages = useMemo(() => [
    { name: "Home", href: "/", icon: <Home className="w-5 h-5" /> },
    { name: "About", href: "/about", icon: <User className="w-5 h-5" /> },
    { name: "Contact", href: "/contact", icon: <Mail className="w-5 h-5" /> },
    { name: "Blog", href: "/blog", icon: <Receipt className="w-5 h-5" /> },
    { name: "Demo", href: "/demo", icon: <Monitor className="w-5 h-5" /> },
    { name: "Support", href: "/support", icon: <Heart className="w-5 h-5" /> }
  ], []);

  const contactInfo = useMemo(() => [
    { icon: <Mail className="w-4 h-4" />, text: "kleber@ziontechgroup.com" },
    { icon: <Phone className="w-4 h-4" />, text: "+1 (302) 464-0950" },
    { icon: <MapPin className="w-4 h-4" />, text: "364 E Main St STE 1008, Middletown, DE 19709" }
  ], []);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
        onClick={onClose}
      />
      
      {/* Sidebar */}
      <div className="fixed top-0 left-0 h-full w-80 bg-slate-900/95 backdrop-blur-md border-r border-cyan-500/20 z-50 overflow-y-auto">
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <span className="text-xl font-bold text-white">Zion Tech Group</span>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Main Pages */}
          <div className="mb-8">
            <h3 className="text-cyan-400 font-semibold mb-4">Main Pages</h3>
            <div className="space-y-2">
              {mainPages.map((page, index) => (
                <Link
                  key={index}
                  to={page.href}
                  className={`flex items-center p-3 rounded-lg transition-colors group ${
                    location.pathname === page.href
                      ? 'bg-cyan-500/20 text-cyan-400'
                      : 'text-gray-300 hover:bg-slate-800/50 hover:text-white'
                  }`}
                  onClick={onClose}
                >
                  {page.icon}
                  <span className="ml-3">{page.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="mb-8">
            <h3 className="text-cyan-400 font-semibold mb-4">Services</h3>
            <div className="space-y-2">
              {services.map((service, index) => (
                <div key={index}>
                  <button
                    onClick={() => toggleSection(service.name)}
                    className="w-full flex items-center justify-between p-3 rounded-lg text-gray-300 hover:bg-slate-800/50 hover:text-white transition-colors group"
                  >
                    <div className="flex items-center">
                      <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center text-white mr-3`}>
                        {service.icon}
                      </div>
                      <span className="font-medium">{service.name}</span>
                    </div>
                    {expandedSections.has(service.name) ? (
                      <ChevronDown className="w-4 h-4" />
                    ) : (
                      <ChevronRight className="w-4 h-4" />
                    )}
                  </button>
                  
                  {expandedSections.has(service.name) && (
                    <div className="ml-11 space-y-1">
                      {service.items.map((item, itemIndex) => (
                        <Link
                          key={itemIndex}
                          to={item.href}
                          className={`block p-2 rounded-lg text-sm transition-colors ${
                            location.pathname === item.href
                              ? 'bg-cyan-500/20 text-cyan-400'
                              : 'text-gray-400 hover:bg-slate-800/50 hover:text-white'
                          }`}
                          onClick={onClose}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="mb-8">
            <h3 className="text-cyan-400 font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start text-gray-300">
                  <div className="text-cyan-400 mr-3 mt-0.5">{info.icon}</div>
                  <span className="text-sm">{info.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="pt-6 border-t border-gray-700">
            <Link
              to="/contact"
              className="block w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold text-center hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
              onClick={onClose}
            >
              Get Started
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
