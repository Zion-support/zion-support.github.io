import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { X, Brain, Shield, Zap, Globe, Home, Users, Code, Mail, ChevronDown, ChevronRight, BarChart3, Target, Cloud, Database, Settings, Phone, MapPin, Clock, Award, Star, TrendingUp, FileText, Bot, Video, Package, Mic, DollarSign, Leaf, Truck, Building, Briefcase, GraduationCap, ShoppingCart, CreditCard, Truck as TruckIcon, Package as PackageIcon, Home as HomeIcon, Car, Plane, Train, Ship, Bike, Coffee, Utensils, Gamepad2, Book, Newspaper, FileImage, FileVideo, FileAudio, FileCode, FileSpreadsheet, FilePdf, FileZip, Folder, Archive, Trash2, Edit, Copy, Cut, Paste, Save, Undo, Redo, RefreshCw, RotateCcw, RotateCw, Move, Maximize, Minimize, X as XIcon, Plus, Minus, Divide, Equal, Percent, Hash, AtSign, Euro, Pound, Yen, Bitcoin, CreditCard as Credit, Wallet, Banknote, Coins, PiggyBank, TrendingDown, BarChart, LineChart, Scatter, AreaChart, Candlestick, Gauge, Thermometer, Droplet, Wind, Sun, Moon, Cloud as CloudIcon, CloudRain, CloudSnow, CloudLightning, CloudDrizzle, CloudHail, CloudFog, CloudSun, CloudMoon, Sunrise, Sunset, Compass, Map, Navigation, Flag, Anchor, Sailboat } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const [expandedSections, setExpandedSections] = useState<string[]>([]);

  if (!isOpen) return null;

  const toggleSection = (section: string) => {
    setExpandedSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const navigationItems = [
    { name: 'Home', path: '/', icon: <Home className="w-5 h-5" /> },
    { name: 'About', path: '/about', icon: <Users className="w-5 h-5" /> },
    { name: 'Services', path: '/services', icon: <Shield className="w-5 h-5" /> },
    { name: 'Contact', path: '/contact', icon: <Mail className="w-5 h-5" /> },
  ];

  const aiServices = [
    { name: 'AI Analytics', path: '/ai-analytics', icon: <BarChart3 className="w-4 h-4" /> },
    { name: 'AI Content Generation', path: '/ai-content-generation', icon: <FileText className="w-4 h-4" /> },
    { name: 'AI Cybersecurity', path: '/ai-cybersecurity', icon: <Shield className="w-4 h-4" /> },
    { name: 'AI Customer Support', path: '/ai-customer-support', icon: <Bot className="w-4 h-4" /> },
    { name: 'AI Data Analytics', path: '/ai-data-analytics', icon: <Database className="w-4 h-4" /> },
    { name: 'AI Workflow Automation', path: '/ai-workflow-automation', icon: <Zap className="w-4 h-4" /> },
    { name: 'AI Blockchain Solutions', path: '/ai-blockchain-solutions', icon: <Shield className="w-4 h-4" /> },
    { name: 'AI Climate Solutions', path: '/ai-climate-solutions-pro', icon: <Leaf className="w-4 h-4" /> },
  ];

  const microSaasServices = [
    { name: 'Zion AI Video Generator', path: '/zion-ai-video-generator', icon: <Video className="w-4 h-4" /> },
    { name: 'Zion AI Customer Insights', path: '/zion-ai-customer-insights', icon: <Users className="w-4 h-4" /> },
    { name: 'Zion Smart Inventory', path: '/zion-smart-inventory-optimizer', icon: <Package className="w-4 h-4" /> },
    { name: 'Zion AI Voice Assistant', path: '/zion-ai-voice-assistant-pro', icon: <Mic className="w-4 h-4" /> },
    { name: 'Zion AI CRM Pro', path: '/zion-ai-crm-pro', icon: <Users className="w-4 h-4" /> },
    { name: 'Zion AI Marketing', path: '/zion-ai-marketing-automation', icon: <Target className="w-4 h-4" /> },
  ];

  const itServices = [
    { name: 'Cloud Migration', path: '/cloud-migration', icon: <Cloud className="w-4 h-4" /> },
    { name: 'Web Development', path: '/web-development', icon: <Code className="w-4 h-4" /> },
    { name: 'DevOps', path: '/devops', icon: <Settings className="w-4 h-4" /> },
    { name: 'IT Consulting', path: '/it-consulting', icon: <Building className="w-4 h-4" /> },
    { name: 'AI-Powered IT Consulting', path: '/ai-powered-it-consulting', icon: <Brain className="w-4 h-4" /> },
    { name: 'Network Security', path: '/network-security', icon: <Shield className="w-4 h-4" /> },
  ];

  const fiveGServices = [
    { name: '5G Network Infrastructure', path: '/5g-network-infrastructure', icon: <Globe className="w-4 h-4" /> },
    { name: '5G Edge Computing', path: '/5g-edge-computing', icon: <Cpu className="w-4 h-4" /> },
    { name: '5G IoT Solutions', path: '/5g-iot-solutions', icon: <Truck className="w-4 h-4" /> },
    { name: '5G Smart City', path: '/5g-smart-city-solutions', icon: <Building className="w-4 h-4" /> },
  ];

  const contactInfo = [
    { icon: <Mail className="w-4 h-4" />, text: 'kleber@ziontechgroup.com' },
    { icon: <Phone className="w-4 h-4" />, text: '+1 302 464 0950' },
    { icon: <MapPin className="w-4 h-4" />, text: '364 E Main St STE 1008, Middletown DE 19709' },
  ];

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
        onClick={onClose}
      />
      
      {/* Sidebar */}
      <div className="fixed top-0 right-0 h-full w-80 bg-slate-900/95 backdrop-blur-sm border-l border-cyan-500/20 z-50 transform transition-transform duration-300 ease-in-out overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-cyan-500/20">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">Zion Tech Group</span>
          </div>
          <button
            onClick={onClose}
            className="text-gray-300 hover:text-cyan-400 transition-colors"
            aria-label="Close sidebar"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <nav className="p-6 space-y-6">
          {/* Main Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-cyan-400 mb-3 uppercase tracking-wider">Main</h3>
            <ul className="space-y-2">
              {navigationItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors"
                    onClick={onClose}
                  >
                    {item.icon}
                    <span className="font-medium">{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* AI Services */}
          <div>
            <button
              onClick={() => toggleSection('ai-services')}
              className="flex items-center justify-between w-full px-4 py-3 rounded-lg text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors"
            >
              <div className="flex items-center space-x-3">
                <Brain className="w-5 h-5" />
                <span className="font-medium">AI Services</span>
              </div>
              {expandedSections.includes('ai-services') ? 
                <ChevronDown className="w-4 h-4" /> : 
                <ChevronRight className="w-4 h-4" />
              }
            </button>
            {expandedSections.includes('ai-services') && (
              <ul className="mt-2 ml-8 space-y-1">
                {aiServices.map((service) => (
                  <li key={service.name}>
                    <Link
                      to={service.path}
                      className="flex items-center space-x-3 px-3 py-2 rounded-lg text-sm text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors"
                      onClick={onClose}
                    >
                      {service.icon}
                      <span>{service.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Micro SAAS */}
          <div>
            <button
              onClick={() => toggleSection('micro-saas')}
              className="flex items-center justify-between w-full px-4 py-3 rounded-lg text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors"
            >
              <div className="flex items-center space-x-3">
                <Zap className="w-5 h-5" />
                <span className="font-medium">Micro SAAS</span>
              </div>
              {expandedSections.includes('micro-saas') ? 
                <ChevronDown className="w-4 h-4" /> : 
                <ChevronRight className="w-4 h-4" />
              }
            </button>
            {expandedSections.includes('micro-saas') && (
              <ul className="mt-2 ml-8 space-y-1">
                {microSaasServices.map((service) => (
                  <li key={service.name}>
                    <Link
                      to={service.path}
                      className="flex items-center space-x-3 px-3 py-2 rounded-lg text-sm text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors"
                      onClick={onClose}
                    >
                      {service.icon}
                      <span>{service.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* IT Services */}
          <div>
            <button
              onClick={() => toggleSection('it-services')}
              className="flex items-center justify-between w-full px-4 py-3 rounded-lg text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors"
            >
              <div className="flex items-center space-x-3">
                <Shield className="w-5 h-5" />
                <span className="font-medium">IT Services</span>
              </div>
              {expandedSections.includes('it-services') ? 
                <ChevronDown className="w-4 h-4" /> : 
                <ChevronRight className="w-4 h-4" />
              }
            </button>
            {expandedSections.includes('it-services') && (
              <ul className="mt-2 ml-8 space-y-1">
                {itServices.map((service) => (
                  <li key={service.name}>
                    <Link
                      to={service.path}
                      className="flex items-center space-x-3 px-3 py-2 rounded-lg text-sm text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors"
                      onClick={onClose}
                    >
                      {service.icon}
                      <span>{service.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* 5G Solutions */}
          <div>
            <button
              onClick={() => toggleSection('5g-solutions')}
              className="flex items-center justify-between w-full px-4 py-3 rounded-lg text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors"
            >
              <div className="flex items-center space-x-3">
                <Globe className="w-5 h-5" />
                <span className="font-medium">5G Solutions</span>
              </div>
              {expandedSections.includes('5g-solutions') ? 
                <ChevronDown className="w-4 h-4" /> : 
                <ChevronRight className="w-4 h-4" />
              }
            </button>
            {expandedSections.includes('5g-solutions') && (
              <ul className="mt-2 ml-8 space-y-1">
                {fiveGServices.map((service) => (
                  <li key={service.name}>
                    <Link
                      to={service.path}
                      className="flex items-center space-x-3 px-3 py-2 rounded-lg text-sm text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors"
                      onClick={onClose}
                    >
                      {service.icon}
                      <span>{service.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Contact Information */}
          <div className="pt-6 border-t border-cyan-500/20">
            <h3 className="text-sm font-semibold text-cyan-400 mb-3 uppercase tracking-wider">Contact Info</h3>
            <div className="space-y-3">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-3 text-sm text-gray-300">
                  <div className="text-cyan-400 mt-0.5">{info.icon}</div>
                  <span>{info.text}</span>
                </div>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;