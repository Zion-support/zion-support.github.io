import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Brain,
  Atom,
  Shield,
  Cloud,
  Database,
  Code,
  Zap,
  ChevronDown,
  ChevronRight,
  Home,
  Users,
  Settings,
  HelpCircle,
  Bell,
  Search,
  Menu,
  X
} from 'lucide-react';

interface SidebarItem {
  name: string;
  href: string;
  icon?: React.ComponentType<any>;
  description?: string;
  subItems?: SidebarItem[];
}

interface SidebarSection {
  title: string;
  icon: React.ComponentType<any>;
  color: string;
  items: SidebarItem[];
  category?: string;
}

const sidebarSections = [
  {
    title: 'Revolutionary Services',
    icon: Zap,
    color: 'from-cyan-500 to-blue-600',
    items: [
      {
        name: 'AI & Consciousness',
        href: '/ai-services',
        icon: Brain,
        description: 'Advanced AI consciousness and evolution platforms',
        subItems: [
          { name: 'AI Consciousness Evolution', href: '/ai-consciousness-evolution' },
          { name: 'AI Autonomous Ecosystem', href: '/ai-autonomous-ecosystem' },
          { name: 'AI Ethics & Governance', href: '/ai-ethics-governance' },
          { name: 'AI Creativity Studio', href: '/ai-creativity-studio' },
          { name: 'AI Education Platform', href: '/ai-education-platform' },
          { name: 'AI Healthcare Diagnostics', href: '/ai-healthcare-diagnostics' },
          { name: 'AI Financial Intelligence', href: '/ai-financial-intelligence' },
          { name: 'AI Sustainability Platform', href: '/ai-sustainability-platform' },
          { name: 'AI Emotional Intelligence', href: '/ai-emotional-intelligence-platform' },
          { name: 'AI Legal Contract Analyzer', href: '/ai-legal-contract-analyzer' }
        ]
      },
      {
        name: 'Quantum Computing',
        href: '/quantum-services',
        icon: Atom,
        description: 'Next-generation quantum computing solutions',
        subItems: [
          { name: 'Quantum Cloud Infrastructure', href: '/quantum-cloud-infrastructure' },
          { name: 'Quantum Bio-Computing', href: '/quantum-bio-computing' },
          { name: 'Quantum Energy Platform', href: '/quantum-energy-platform' },
          { name: 'Quantum Materials Discovery', href: '/quantum-materials-discovery' },
          { name: 'Quantum Robotics', href: '/quantum-robotics' },
          { name: 'Quantum Internet Security', href: '/quantum-internet-security' },
          { name: 'Quantum Logistics', href: '/quantum-logistics-optimization' },
          { name: 'Quantum Cybersecurity', href: '/quantum-cybersecurity-platform' }
        ]
      }
    ]
  },
  {
    title: 'Core Services',
    icon: Shield,
    color: 'from-green-500 to-emerald-600',
    items: [
      {
        name: 'Cybersecurity',
        href: '/cybersecurity',
        icon: Shield,
        description: 'Advanced security solutions for modern threats',
        subItems: [
          { name: 'Zero Trust Architecture', href: '/zero-trust-architecture' },
          { name: 'AI-Powered Threat Detection', href: '/ai-threat-detection' },
          { name: 'Quantum-Safe Cryptography', href: '/quantum-safe-cryptography' },
          { name: 'Blockchain Security', href: '/blockchain-security' }
        ]
      },
      {
        name: 'Cloud Infrastructure',
        href: '/cloud-services',
        icon: Cloud,
        description: 'Scalable cloud solutions for enterprise',
        subItems: [
          { name: 'Multi-Cloud Strategy', href: '/multi-cloud-strategy' },
          { name: 'Edge Computing', href: '/edge-computing' },
          { name: 'Serverless Architecture', href: '/serverless-architecture' },
          { name: 'Container Orchestration', href: '/container-orchestration' }
        ]
      }
    ]
  }
];

const EnhancedSidebar2025: React.FC = () => {
  const [expandedSections, setExpandedSections] = useState<string[]>([]);
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const router = useRouter();

  const toggleSection = (sectionTitle: string) => {
    setExpandedSections(prev =>
      prev.includes(sectionTitle)
        ? prev.filter(title => title !== sectionTitle)
        : [...prev, sectionTitle]
    );
  };

  const toggleItem = (itemName: string) => {
    setExpandedItems(prev =>
      prev.includes(itemName)
        ? prev.filter(name => name !== itemName)
        : [...prev, itemName]
    );
  };

  const isActive = (href: string) => router.pathname === href;

  return (
    <div className={`bg-gray-900 text-white transition-all duration-300 ${isCollapsed ? 'w-16' : 'w-80'}`}>
      {/* Header */}
      <div className="p-4 border-b border-gray-700">
        <div className="flex items-center justify-between">
          {!isCollapsed && (
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Zion Tech</span>
            </div>
          )}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-2 rounded-lg hover:bg-gray-700 transition-colors"
          >
            {isCollapsed ? <Menu className="w-5 h-5" /> : <X className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto">
        {sidebarSections.map((section) => (
          <div key={section.title} className="mb-6">
            {!isCollapsed && (
              <button
                onClick={() => toggleSection(section.title)}
                className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-gray-800 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <div className={`w-8 h-8 bg-gradient-to-r ${section.color} rounded-lg flex items-center justify-center`}>
                    <section.icon className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-semibold">{section.title}</span>
                </div>
                {expandedSections.includes(section.title) ? (
                  <ChevronDown className="w-4 h-4" />
                ) : (
                  <ChevronRight className="w-4 h-4" />
                )}
              </button>
            )}

            <AnimatePresence>
              {(!isCollapsed && expandedSections.includes(section.title)) && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="overflow-hidden"
                >
                  <div className="space-y-1">
                    {section.items.map((item) => (
                      <div key={item.name}>
                        <Link
                          href={item.href}
                          className={`flex items-center space-x-3 px-4 py-2 text-sm hover:bg-gray-800 transition-colors ${
                            isActive(item.href) ? 'bg-blue-600 text-white' : 'text-gray-300'
                          }`}
                        >
                          {item.icon && <item.icon className="w-4 h-4" />}
                          <span>{item.name}</span>
                        </Link>

                        {item.subItems && item.subItems.length > 0 && (
                          <div className="ml-8 space-y-1">
                            {item.subItems.map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                className={`block px-4 py-2 text-sm hover:bg-gray-800 transition-colors ${
                                  isActive(subItem.href) ? 'bg-blue-600 text-white' : 'text-gray-400'
                                }`}
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-gray-700">
        <div className="space-y-2">
          <Link
            href="/settings"
            className="flex items-center space-x-3 px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 transition-colors rounded-lg"
          >
            <Settings className="w-4 h-4" />
            {!isCollapsed && <span>Settings</span>}
          </Link>
          <Link
            href="/help"
            className="flex items-center space-x-3 px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 transition-colors rounded-lg"
          >
            <HelpCircle className="w-4 h-4" />
            {!isCollapsed && <span>Help</span>}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EnhancedSidebar2025;