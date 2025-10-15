import React from 'react';
import { X, Brain, Cloud, Shield, Zap, Globe, Smartphone, Database, Lock, BarChart3, Users, CheckCircle, ArrowRight, ChevronDown, ChevronRight } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const [expandedSections, setExpandedSections] = React.useState<{ [key: string]: boolean }>({});

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const microSaasServices = [
    { name: "AI Content Generator", href: "/ai-content-generator", icon: Brain },
    { name: "Analytics Dashboard", href: "/ai-analytics-dashboard", icon: BarChart3 },
    { name: "Customer Support Bot", href: "/ai-customer-support-bot", icon: Users },
    { name: "Automated Testing", href: "/ai-automated-testing", icon: CheckCircle },
    { name: "Smart Invoice Manager", href: "/ai-smart-invoice", icon: Smartphone },
    { name: "AI Project Manager", href: "/ai-project-manager", icon: Globe },
    { name: "AI Code Assistant", href: "/ai-code-assistant", icon: Database },
    { name: "AI Marketing Automation", href: "/ai-marketing-automation", icon: Zap }
  ];

  const aiServices = [
    { name: "Machine Learning Platform", href: "/ai-ml-platform", icon: Brain },
    { name: "Computer Vision", href: "/ai-computer-vision", icon: Globe },
    { name: "Natural Language Processing", href: "/ai-nlp", icon: Database },
    { name: "Predictive Analytics", href: "/ai-predictive-analytics", icon: BarChart3 },
    { name: "AI Automation Suite", href: "/ai-automation-suite", icon: Zap },
    { name: "AI Cybersecurity", href: "/ai-cybersecurity", icon: Shield },
    { name: "AI Healthcare Solutions", href: "/ai-healthcare-solutions", icon: Users },
    { name: "AI Financial Services", href: "/ai-financial-services", icon: BarChart3 }
  ];

  const itServices = [
    { name: "Cloud Infrastructure", href: "/cloud-infrastructure", icon: Cloud },
    { name: "Cybersecurity Solutions", href: "/cybersecurity", icon: Shield },
    { name: "Digital Transformation", href: "/digital-transformation", icon: Zap },
    { name: "5G Network Solutions", href: "/5g-solutions", icon: Globe },
    { name: "IT Consulting", href: "/it-services", icon: Database },
    { name: "DevOps Services", href: "/devops-services", icon: Zap },
    { name: "Data Management", href: "/data-management", icon: Database },
    { name: "Network Security", href: "/network-security", icon: Lock }
  ];

  const mainPages = [
    { name: "Home", href: "/", icon: Globe },
    { name: "About", href: "/about", icon: Users },
    { name: "Pricing", href: "/pricing", icon: BarChart3 },
    { name: "Case Studies", href: "/case-studies", icon: CheckCircle },
    { name: "Blog", href: "/blog", icon: Database },
    { name: "Contact", href: "/contact", icon: Users }
  ];

  const supportPages = [
    { name: "Documentation", href: "/docs", icon: Database },
    { name: "API Reference", href: "/api-docs", icon: Globe },
    { name: "Tutorials", href: "/tutorials", icon: CheckCircle },
    { name: "Support Center", href: "/support", icon: Users },
    { name: "Status Page", href: "/status", icon: BarChart3 },
    { name: "Community", href: "/community", icon: Users }
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose} />
      <div className="fixed top-0 left-0 h-full w-80 bg-slate-800 overflow-y-auto">
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-cyan-500 to-purple-600 p-2 rounded-lg">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Zion Tech Group</span>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white p-2"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Main Pages */}
          <div className="mb-8">
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Main Pages</h3>
            <nav className="space-y-2">
              {mainPages.map((page, index) => (
                <a
                  key={index}
                  href={page.href}
                  className="flex items-center space-x-3 text-gray-300 hover:text-white hover:bg-slate-700 px-3 py-2 rounded-lg transition-colors"
                  onClick={onClose}
                >
                  <page.icon className="w-5 h-5" />
                  <span>{page.name}</span>
                </a>
              ))}
            </nav>
          </div>

          {/* Micro SAAS Services */}
          <div className="mb-8">
            <button
              onClick={() => toggleSection('micro-saas')}
              className="flex items-center justify-between w-full text-left text-gray-300 hover:text-white hover:bg-slate-700 px-3 py-2 rounded-lg transition-colors mb-2"
            >
              <div className="flex items-center space-x-3">
                <Smartphone className="w-5 h-5" />
                <span className="font-semibold">Micro SAAS</span>
              </div>
              {expandedSections['micro-saas'] ? (
                <ChevronDown className="w-4 h-4" />
              ) : (
                <ChevronRight className="w-4 h-4" />
              )}
            </button>
            {expandedSections['micro-saas'] && (
              <div className="ml-8 space-y-2">
                {microSaasServices.map((service, index) => (
                  <a
                    key={index}
                    href={service.href}
                    className="flex items-center space-x-3 text-gray-400 hover:text-cyan-400 hover:bg-slate-700 px-3 py-2 rounded-lg transition-colors"
                    onClick={onClose}
                  >
                    <service.icon className="w-4 h-4" />
                    <span className="text-sm">{service.name}</span>
                  </a>
                ))}
                <a
                  href="/micro-saas-solutions"
                  className="flex items-center space-x-3 text-cyan-400 hover:text-cyan-300 hover:bg-slate-700 px-3 py-2 rounded-lg transition-colors font-semibold"
                  onClick={onClose}
                >
                  <ArrowRight className="w-4 h-4" />
                  <span className="text-sm">View All Services</span>
                </a>
              </div>
            )}
          </div>

          {/* AI Services */}
          <div className="mb-8">
            <button
              onClick={() => toggleSection('ai-services')}
              className="flex items-center justify-between w-full text-left text-gray-300 hover:text-white hover:bg-slate-700 px-3 py-2 rounded-lg transition-colors mb-2"
            >
              <div className="flex items-center space-x-3">
                <Brain className="w-5 h-5" />
                <span className="font-semibold">AI Services</span>
              </div>
              {expandedSections['ai-services'] ? (
                <ChevronDown className="w-4 h-4" />
              ) : (
                <ChevronRight className="w-4 h-4" />
              )}
            </button>
            {expandedSections['ai-services'] && (
              <div className="ml-8 space-y-2">
                {aiServices.map((service, index) => (
                  <a
                    key={index}
                    href={service.href}
                    className="flex items-center space-x-3 text-gray-400 hover:text-purple-400 hover:bg-slate-700 px-3 py-2 rounded-lg transition-colors"
                    onClick={onClose}
                  >
                    <service.icon className="w-4 h-4" />
                    <span className="text-sm">{service.name}</span>
                  </a>
                ))}
                <a
                  href="/ai-solutions"
                  className="flex items-center space-x-3 text-purple-400 hover:text-purple-300 hover:bg-slate-700 px-3 py-2 rounded-lg transition-colors font-semibold"
                  onClick={onClose}
                >
                  <ArrowRight className="w-4 h-4" />
                  <span className="text-sm">View All Services</span>
                </a>
              </div>
            )}
          </div>

          {/* IT Services */}
          <div className="mb-8">
            <button
              onClick={() => toggleSection('it-services')}
              className="flex items-center justify-between w-full text-left text-gray-300 hover:text-white hover:bg-slate-700 px-3 py-2 rounded-lg transition-colors mb-2"
            >
              <div className="flex items-center space-x-3">
                <Cloud className="w-5 h-5" />
                <span className="font-semibold">IT Services</span>
              </div>
              {expandedSections['it-services'] ? (
                <ChevronDown className="w-4 h-4" />
              ) : (
                <ChevronRight className="w-4 h-4" />
              )}
            </button>
            {expandedSections['it-services'] && (
              <div className="ml-8 space-y-2">
                {itServices.map((service, index) => (
                  <a
                    key={index}
                    href={service.href}
                    className="flex items-center space-x-3 text-gray-400 hover:text-green-400 hover:bg-slate-700 px-3 py-2 rounded-lg transition-colors"
                    onClick={onClose}
                  >
                    <service.icon className="w-4 h-4" />
                    <span className="text-sm">{service.name}</span>
                  </a>
                ))}
                <a
                  href="/it-solutions"
                  className="flex items-center space-x-3 text-green-400 hover:text-green-300 hover:bg-slate-700 px-3 py-2 rounded-lg transition-colors font-semibold"
                  onClick={onClose}
                >
                  <ArrowRight className="w-4 h-4" />
                  <span className="text-sm">View All Services</span>
                </a>
              </div>
            )}
          </div>

          {/* Support */}
          <div className="mb-8">
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Support</h3>
            <nav className="space-y-2">
              {supportPages.map((page, index) => (
                <a
                  key={index}
                  href={page.href}
                  className="flex items-center space-x-3 text-gray-300 hover:text-white hover:bg-slate-700 px-3 py-2 rounded-lg transition-colors"
                  onClick={onClose}
                >
                  <page.icon className="w-5 h-5" />
                  <span>{page.name}</span>
                </a>
              ))}
            </nav>
          </div>

          {/* CTA Buttons */}
          <div className="space-y-3">
            <a
              href="/demo"
              className="block w-full text-center bg-slate-700 hover:bg-slate-600 text-white font-bold py-3 px-4 rounded-lg transition-colors"
              onClick={onClose}
            >
              View Demo
            </a>
            <a
              href="/contact"
              className="block w-full text-center bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300"
              onClick={onClose}
            >
              Get Started
            </a>
          </div>

          {/* Contact Info */}
          <div className="mt-8 pt-6 border-t border-slate-700">
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="w-2 h-2 bg-green-400 rounded-full mt-2"></span>
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