import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Zap,
  Brain,
  Shield,
  Users,
  HardDrive,
  TrendingUp,
  Building2,
  FileText,
  HelpCircle,
  BarChart3,
  Menu,
  X,
  ChevronDown,
} from 'lucide-react';

export function MainNavigation({ className = '' }) {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    {
      name: 'Home',
      href: '/',
      icon: null,
    },
    {
      name: 'Services',
      href: '/services',
      icon: Zap,
      submenu: [
        {
          title: 'AI & Automation',
          items: [
            { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence' },
            { name: 'AI Sales Copilot', href: '/services/ai-sales-copilot' },
            { name: 'AI Compliance Assistant', href: '/services/ai-compliance-assistant' },
            { name: 'AI Workflow Automation', href: '/services/ai-workflow-automation' }
          ]
        },
        {
          title: 'Cloud & DevOps',
          items: [
            { name: 'Cloud FinOps Optimizer', href: '/services/cloud-finops-optimizer' },
            { name: 'Cloud Infrastructure', href: '/services/cloud-infrastructure' },
            { name: 'DevOps Automation', href: '/services/devops-automation' },
            { name: 'Edge Computing', href: '/services/edge-computing' }
          ]
        },
        {
          title: 'Cybersecurity',
          items: [
            { name: 'Zero Trust Security', href: '/services/zero-trust-security' },
            { name: 'AI Threat Detection', href: '/services/ai-threat-detection' },
            { name: 'Compliance Automation', href: '/services/compliance-automation' },
            { name: 'Security Operations', href: '/services/security-operations' }
          ]
        }
      ]
    },
    {
      name: 'Solutions',
      href: '/solutions',
      icon: Brain,
      submenu: [
        {
          title: 'Industry Solutions',
          items: [
            { name: 'Healthcare', href: '/solutions/healthcare' },
            { name: 'Financial Services', href: '/solutions/financial' },
            { name: 'Manufacturing', href: '/solutions/manufacturing' },
            { name: 'Government', href: '/solutions/government' }
          ]
        },
        {
          title: 'Technology Solutions',
          items: [
            { name: 'Digital Transformation', href: '/solutions/digital-transformation' },
            { name: 'Quantum Computing', href: '/solutions/quantum-computing' },
            { name: 'IoT & Edge', href: '/solutions/iot-edge' },
            { name: 'Blockchain', href: '/solutions/blockchain' }
          ]
        }
      ]
    },
    {
      name: 'Company',
      href: '/about',
      icon: Building2,
      submenu: [
        {
          title: 'About Us',
          items: [
            { name: 'Our Story', href: '/about' },
            { name: 'Leadership', href: '/leadership' },
            { name: 'Careers', href: '/careers' },
            { name: 'Partners', href: '/partners' }
          ]
        },
        {
          title: 'Resources',
          items: [
            { name: 'Blog', href: '/blog' },
            { name: 'Case Studies', href: '/case-studies' },
            { name: 'Documentation', href: '/docs' },
            { name: 'Support', href: '/support' }
          ]
        }
      ]
    },
    {
      name: 'Resources',
      href: '/resources',
      icon: FileText,
      submenu: [
        {
          title: 'Learning',
          items: [
            { name: 'Training', href: '/training' },
            { name: 'Webinars', href: '/webinars' },
            { name: 'White Papers', href: '/white-papers' },
            { name: 'Research', href: '/research' }
          ]
        },
        {
          title: 'Community',
          items: [
            { name: 'Developer Portal', href: '/developer' },
            { name: 'API Documentation', href: '/api' },
            { name: 'Forums', href: '/forums' },
            { name: 'Events', href: '/events' }
          ]
        }
      ]
    }
  ];

  const renderDropdown = (item, isOpen, setIsOpen) => {
    if (!item.submenu) return null;

    return (
      <div className="relative group">
        <button
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
          className="flex items-center space-x-1 text-sm font-medium transition-colors hover:text-primary text-muted-foreground"
        >
          {item.icon && <item.icon className="w-4 h-4" />}
          <span>{item.name}</span>
          <ChevronDown className="w-3 h-3" />
        </button>
        {isOpen && (
          <div
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
            className="absolute top-full left-0 mt-2 w-96 bg-zion-blue-dark border border-zion-purple/30 rounded-lg shadow-2xl shadow-zion-purple/20 z-50"
          >
            <div className="p-4">
              <div className="grid grid-cols-2 gap-4">
                {item.submenu.map((section, index) => (
                  <div key={index}>
                    <h4 className="text-zion-cyan font-semibold mb-3 flex items-center">
                      {section.title === 'AI & Automation' && <Zap className="w-4 h-4 mr-2" />}
                      {section.title === 'Cloud & DevOps' && <HardDrive className="w-4 h-4 mr-2" />}
                      {section.title === 'Cybersecurity' && <Shield className="w-4 h-4 mr-2" />}
                      {section.title === 'Industry Solutions' && <Building2 className="w-4 h-4 mr-2" />}
                      {section.title === 'Technology Solutions' && <Brain className="w-4 h-4 mr-2" />}
                      {section.title === 'About Us' && <Users className="w-4 h-4 mr-2" />}
                      {section.title === 'Resources' && <FileText className="w-4 h-4 mr-2" />}
                      {section.title === 'Learning' && <TrendingUp className="w-4 h-4 mr-2" />}
                      {section.title === 'Community' && <HelpCircle className="w-4 h-4 mr-2" />}
                      {section.title}
                    </h4>
                    <ul className="space-y-2 text-sm">
                      {section.items.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <Link
                            to={subItem.href}
                            className="text-zion-slate-light hover:text-zion-cyan transition-colors"
                          >
                            {subItem.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <nav className={`flex items-center space-x-8 ${className}`}>
      {navigationItems.map((item, index) => (
        <div key={index}>
          {item.submenu ? (
            renderDropdown(item, 
              item.name === 'Services' ? isServicesOpen : 
              item.name === 'Solutions' ? isSolutionsOpen : 
              item.name === 'Company' ? isCompanyOpen : 
              isResourcesOpen,
              item.name === 'Services' ? setIsServicesOpen : 
              item.name === 'Solutions' ? setIsSolutionsOpen : 
              item.name === 'Company' ? setIsCompanyOpen : 
              setIsResourcesOpen
            )
          ) : (
            <Link
              to={item.href}
              className="flex items-center space-x-1 text-sm font-medium transition-colors hover:text-primary text-muted-foreground"
            >
              {item.icon && <item.icon className="w-4 h-4" />}
              <span>{item.name}</span>
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
}