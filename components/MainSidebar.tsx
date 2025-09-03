import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  Home,
  Briefcase,
  Users,
  Phone,
  Mail,
  MapPin,
  Settings,
  LogOut,
  Menu,
  X,
  Brain,
  Network,
  Cloud,
  Code,
  Server,
  Cpu
} from 'lucide-react';

interface MainSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const MainSidebar: React.FC<MainSidebarProps> = ({ isOpen, onClose }) => {
  const router = useRouter();
  const [expandedSections, setExpandedSections] = useState<string[]>([]);

  const toggleSection = (section: string) => {
    setExpandedSections(prev =>
      prev.includes(section)
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const mainNavigation = [
    { name: "Home", href: "/", icon: Home },
    { name: "About", href: "/about", icon: Users },
    { name: "Contact", href: "/contact", icon: Phone },
    { name: "Blog", href: "/blog", icon: Briefcase }
  ];

  const services = [
    { name: "AI Services", href: "/services/ai-services", icon: Brain },
    { name: "IT Services", href: "/services/it-services", icon: Network },
    { name: "Micro SaaS", href: "/services/micro-saas", icon: Cloud },
    { name: "Web Development", href: "/services/web-development", icon: Code },
    { name: "Cloud Services", href: "/services/cloud-services", icon: Server },
    { name: "AI Development", href: "/services/ai-development", icon: Cpu }
  ];

  const contactInfo = [
    { icon: Mail, text: "contact@ziontechgroup.com" },
    { icon: Phone, text: "+1 (555) 123-4567" },
    { icon: MapPin, text: "San Francisco, CA" }
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose} />
      <div className="relative flex flex-col w-full max-w-sm bg-white shadow-xl h-full">
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="font-semibold text-gray-900">Zion Tech Group</span>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto">
          <nav className="p-4 space-y-6">
            {/* Main Navigation */}
            <div>
              <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-3">
                Navigation
              </h3>
              <ul className="space-y-2">
                {mainNavigation.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                        router.pathname === item.href
                          ? "bg-blue-100 text-blue-700"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                      onClick={onClose}
                    >
                      <item.icon className="w-5 h-5 mr-3" />
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <button
                onClick={() => toggleSection("services")}
                className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
              >
                <span>Services</span>
                <span className={`transform transition-transform ${expandedSections.includes("services") ? "rotate-180" : ""}`}>
                  ▼
                </span>
              </button>
              {expandedSections.includes("services") && (
                <ul className="mt-2 space-y-1 pl-6">
                  {services.map((service) => (
                    <li key={service.name}>
                      <Link
                        href={service.href}
                        className="flex items-center px-3 py-2 rounded-md text-sm text-gray-600 hover:bg-gray-100 transition-colors"
                        onClick={onClose}
                      >
                        <service.icon className="w-4 h-4 mr-3" />
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-3">
                Contact Info
              </h3>
              <div className="space-y-3">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div key={index} className="flex items-center space-x-3 text-sm text-gray-600">
                      <Icon className="w-4 h-4" />
                      <span>{info.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </nav>
        </div>

        <div className="border-t p-4">
          <div className="flex space-x-2">
            <button className="flex-1 flex items-center justify-center px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md transition-colors">
              <Settings className="w-4 h-4 mr-2" />
              Settings
            </button>
            <button className="flex-1 flex items-center justify-center px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md transition-colors">
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSidebar;