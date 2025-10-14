import React from "react";
import { Link } from "react-router-dom";
import { X, Brain, Cloud, Zap, ChevronDown, ChevronRight } from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const mainLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" }
  ];

  const additionalLinks = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Our Team", href: "/team" },
    { name: "Documentation", href: "/docs" },
    { name: "Careers", href: "/careers" }
  ];

  const aiServices = [
    { name: 'AI Analytics', href: '/ai-analytics' },
    { name: 'AI Automation', href: '/ai-automation-platform' },
    { name: 'AI Content Generation', href: '/ai-content-generation' },
    { name: 'AI Customer Support', href: '/ai-customer-support' },
    { name: 'AI Cybersecurity', href: '/ai-cybersecurity' },
    { name: 'AI Data Analytics', href: '/ai-data-analytics' }
  ];

  const itServices = [
    { name: 'Cloud Migration', href: '/cloud-migration' },
    { name: 'DevOps Services', href: '/devops-services' },
    { name: 'IT Consulting', href: '/it-consulting' },
    { name: 'Network Security', href: '/network-security' },
    { name: 'Software Development', href: '/software-development' },
    { name: 'Web Development', href: '/web-development' }
  ];

  const microSaasServices = [
    { name: 'Project Management Pro', href: '/project-management-pro' },
    { name: 'AI CRM Pro', href: '/zion-ai-crm-pro' },
    { name: 'Inventory Smart', href: '/zion-inventory-smart' },
    { name: 'Financial Analytics Pro', href: '/ai-financial-analytics-pro' },
    { name: 'Performance Monitor', href: '/zion-performance-monitor' },
    { name: 'Email Automation', href: '/zion-email-automation' }
  ];

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 z-50 md:hidden">
        <div className="fixed inset-0 bg-black/50" onClick={onClose} />
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
              className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <nav className="p-4 space-y-6">
            {/* Main Navigation */}
            <div>
              <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-3">Main</h3>
              <ul className="space-y-2">
                {mainLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      onClick={onClose}
                      className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* AI Services */}
            <div>
              <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-3 flex items-center">
                <Brain className="w-4 h-4 mr-2" />
                AI Services
              </h3>
              <ul className="space-y-2">
                {aiServices.map((service) => (
                  <li key={service.name}>
                    <Link
                      to={service.href}
                      onClick={onClose}
                      className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* IT Services */}
            <div>
              <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-3 flex items-center">
                <Cloud className="w-4 h-4 mr-2" />
                IT Services
              </h3>
              <ul className="space-y-2">
                {itServices.map((service) => (
                  <li key={service.name}>
                    <Link
                      to={service.href}
                      onClick={onClose}
                      className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Micro SaaS Services */}
            <div>
              <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-3 flex items-center">
                <Zap className="w-4 h-4 mr-2" />
                Micro SaaS
              </h3>
              <ul className="space-y-2">
                {microSaasServices.map((service) => (
                  <li key={service.name}>
                    <Link
                      to={service.href}
                      onClick={onClose}
                      className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Additional Links */}
            <div>
              <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-3">More</h3>
              <ul className="space-y-2">
                {additionalLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      onClick={onClose}
                      className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
