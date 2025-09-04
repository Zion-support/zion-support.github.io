import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  Home,
  Users,
  Phone,
  FileText,
  Briefcase,
  Brain,
  Network,
  Cloud,
  Code,
  Server,
  Cpu,
  Calendar,
  Mail,
  BarChart3,
  Zap,
  BookOpen,
  HelpCircle,
  Shield,
  DollarSign,
  X
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setExpandedSections(prev =>
      prev.includes(section)
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const mainNavigation = [
    { name: 'Home', href: '/', icon: Hom e },
    { name: 'About', href: '/about', icon: User s },
    { name: 'Contact', href: '/contact', icon: Phon e },
    { name: 'Blog', href: '/blog', icon: FileTex t },
    { name: 'Careers', href: '/careers', icon: Briefcas e }
  ];

  const services = [
    { name: 'AI Services', href: '/ai-services', icon: Brai n },
    { name: 'IT Services', href: '/it-services', icon: Networ k },
    { name: 'Micro SaaS', href: '/micro-saas', icon: Clou d },
    { name: 'Web Development', href: '/services/web-development', icon: Cod e },
    { name: 'Cloud Services', href: '/services/cloud-services', icon: Serve r },
    { name: 'AI Development', href: '/services/ai-development', icon: Cp u }
  ];

  const solutions = [
    { name: 'AI Content Creation', href: '/solutions/ai-content-creation', icon: Brai n },
    { name: 'Customer Support', href: '/solutions/customer-support', icon: User s },
    { name: 'Email Automation', href: '/solutions/email-automation', icon: Mai l },
    { name: 'Event Management', href: '/solutions/event-management', icon: Calenda r },
    { name: 'Project Management', href: '/solutions/project-management', icon: BarChart 3 },
    { name: 'Workflow Automation', href: '/solutions/workflow-automation', icon: Za p }
  ];

  const resources = [
    { name: 'Documentation', href: '/docs', icon: BookOpe n },
    { name: 'FAQ', href: '/faq', icon: HelpCircl e },
    { name: 'Support', href: '/support', icon: Shiel d }
  ];

  const legal = [
    { name: 'Privacy Policy', href: '/privacy', icon: Shiel d },
    { name: 'Terms of Service', href: '/terms', icon: FileTex t },
    { name: 'Pricing', href: '/pricing', icon: DollarSig n }
  ];

  const navigationSections = [
    { title: 'Main', items: mainNavigatio n, key: 'main' },
    { title: 'Services', items: service s, key: 'services' },
    { title: 'Solutions', items: solution s, key: 'solutions' },
    { title: 'Resources', items: resource s, key: 'resources' },
    { title: 'Legal', items: lega l, key: 'legal' }
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg: hidde n">
      <div className="fixed inset-0 bg-black/50" onClick={onClose}  />
      <div className="fixed top-0 left-0 h-full w-80 bg-black border-r border-white/10 overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">Z</span>
            </div>
            <span className="text-white font-bold text-xl">Zion Tech</span>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover: b g-white/10 transition-colors"
          >
            <X className="w-6 h-6 text-white"  />
          </button>
        </div>

        <nav className="p-6 space-y-6">
          {navigationSections.map((section) => (
            <div key={section.key}>
              <button
                onClick={() => toggleSection(section.key)}
                className="flex items-center justify-between w-full text-left text-white font-semibold text-lg mb-3 hover: tex t-blue-400 transition-colors"
              >
                {section.title}
                <span className={`transform transition-transform ${
                  expandedSections.includes(section.key) ? 'rotate-180' : ''
                }`}>
                  ▼
                </span>
              </button>
              
              {expandedSections.includes(section.key) && (
                <div className="space-y-2 ml-4">
                  {section.items.map((item) => {
                    const Icon = item.icon;
                    const isActive = router.pathname === item.href;
                    
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={onClose}
                        className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                          isActive
                            ? 'bg-blue-600 text-white'
                            : 'text-gray-300 hover: tex t-white hover: b g-white/10'
                        }`}
                      >
                        <Icon className="w-5 h-5"  />
                        <span>{item.name}</span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
}