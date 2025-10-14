import React from "react";
import { Link } from "react-router-dom";
import { X, Home, Users, Settings, BarChart3, Mail, Phone, MapPin, Brain } from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  // const [expandedItems, setExpandedItems] = useState<string[]>([]);

  // const toggleExpanded = (itemName: string) => {
  //   setExpandedItems(prev => 
  //     prev.includes(itemName) 
  //       ? prev.filter(item => item !== itemName)
  //       : [...prev, itemName]
  //   );
  // };

  // const isActive = (href: string) => {
  //   return window.location.pathname === href;
  // };

  const mainNavItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'About', href: '/about', icon: Users },
    { name: 'Services', href: '/services', icon: Settings },
    { name: 'Analytics', href: '/analytics', icon: BarChart3 },
    { name: 'Contact', href: '/contact', icon: Mail },
  ];

  const aiServices = [
    { name: 'AI Analytics', href: '/ai-analytics' },
    { name: 'AI Automation', href: '/ai-automation-platform' },
    { name: 'AI Content Generation', href: '/ai-content-generation' },
    { name: 'AI Customer Support', href: '/ai-customer-support' },
    { name: 'AI Cybersecurity', href: '/ai-cybersecurity' },
    { name: 'AI Data Analytics', href: '/ai-data-analytics' },
  ];

  const itServices = [
    { name: 'Cloud Migration', href: '/cloud-migration' },
    { name: 'DevOps Services', href: '/devops-services' },
    { name: 'IT Consulting', href: '/it-consulting' },
    { name: 'Network Security', href: '/network-security' },
    { name: 'Software Development', href: '/software-development' },
    { name: 'Web Development', href: '/web-development' },
  ];

  const microSaasServices = [
    { name: 'Project Management Pro', href: '/project-management-pro' },
    { name: 'AI CRM Pro', href: '/zion-ai-crm-pro' },
    { name: 'Inventory Smart', href: '/zion-inventory-smart' },
    { name: 'Financial Analytics Pro', href: '/ai-financial-analytics-pro' },
    { name: 'Performance Monitor', href: '/zion-performance-monitor' },
    { name: 'Email Automation', href: '/zion-email-automation' },
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      <div className="fixed inset-0 bg-black/50" onClick={onClose}></div>
      <div className="fixed top-0 right-0 h-full w-80 bg-slate-900/95 backdrop-blur-md border-l border-cyan-500/20 overflow-y-auto">
        <div className="flex items-center justify-between p-4 border-b border-cyan-500/20">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-semibold text-white">Zion Tech Group</span>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-4 space-y-6">
          {/* Main Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
              Main
            </h3>
            <nav className="space-y-2">
              {mainNavItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={onClose}
                  className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 transition-colors duration-200"
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.name}</span>
                </Link>
              ))}
            </nav>
          </div>

          {/* AI Services */}
          <div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
              AI Services
            </h3>
            <nav className="space-y-1">
              {aiServices.map((service) => (
                <Link
                  key={service.name}
                  to={service.href}
                  onClick={onClose}
                  className="block px-6 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-colors duration-200"
                >
                  {service.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* IT Services */}
          <div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
              IT Services
            </h3>
            <nav className="space-y-1">
              {itServices.map((service) => (
                <Link
                  key={service.name}
                  to={service.href}
                  onClick={onClose}
                  className="block px-6 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-colors duration-200"
                >
                  {service.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Micro SAAS Services */}
          <div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
              Micro SAAS
            </h3>
            <nav className="space-y-1">
              {microSaasServices.map((service) => (
                <Link
                  key={service.name}
                  to={service.href}
                  onClick={onClose}
                  className="block px-6 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-colors duration-200"
                >
                  {service.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="pt-6 border-t border-gray-700">
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
              Contact
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-cyan-400" />
                <span className="text-sm text-gray-300">contact@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-cyan-400" />
                <span className="text-sm text-gray-300">+1 (302) 464-0950</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <span className="text-sm text-gray-300">Middletown, DE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;