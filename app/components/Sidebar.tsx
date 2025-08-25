'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ChevronRight, 
  Zap, 
  Brain, 
  Cloud, 
  Shield, 
  Database, 
  Cpu, 
  Network, 
  Building, 
  Factory, 
  Store, 
  Hospital, 
  GraduationCap, 
  FileText, 
  BookOpen, 
  Video, 
  Activity, 
  Users, 
  Target, 
  MessageSquare,
  Settings,
  HelpCircle,
  Star,
  TrendingUp,
  Rocket,
  Globe,
  Leaf,
  Eye,
  Heart,
  Calendar,
  ShoppingCart,
  Car,
  Plane,
  Ship,
  Home,
  Camera,
  Music,
  BarChart3,
  CreditCard,
  Truck
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const [expandedSections, setExpandedSections] = useState<string[]>([]);

  const toggleSection = (section: string) => {
    setExpandedSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const navigationSections = [
    {
      id: 'services',
      title: 'Services',
      icon: <Zap className="w-5 h-5" />,
      items: [
        {
          name: 'AI & Machine Learning',
          icon: <Brain className="w-4 h-4" />,
          path: '/ai-services',
          subItems: [
            { name: 'AI Autonomous Business Platform', path: '/ai-autonomous-business-platform' },
            { name: 'AI Consciousness Evolution', path: '/ai-consciousness-evolution' },
            { name: 'AI Research Assistant', path: '/ai-autonomous-research-assistant' },
            { name: 'AI Content Generator', path: '/ai-content-generator' },
            { name: 'AI Code Review', path: '/ai-code-review' },
            { name: 'AI Business Intelligence', path: '/ai-business-intelligence' }
          ]
        },
        {
          name: 'Cloud & DevOps',
          icon: <Cloud className="w-4 h-4" />,
          path: '/cloud-devops',
          subItems: [
            { name: 'Cloud Migration', path: '/cloud-migration' },
            { name: 'DevOps Automation', path: '/devops' },
            { name: 'Serverless Computing', path: '/serverless' },
            { name: 'Container Orchestration', path: '/kubernetes' },
            { name: 'Infrastructure as Code', path: '/iac' }
          ]
        },
        {
          name: 'Cybersecurity',
          icon: <Shield className="w-4 h-4" />,
          path: '/cybersecurity',
          subItems: [
            { name: 'Security Assessment', path: '/cybersecurity' },
            { name: 'Penetration Testing', path: '/penetration-testing' },
            { name: 'Compliance Management', path: '/compliance' },
            { name: 'Identity & Access Management', path: '/iam' },
            { name: 'Data Protection', path: '/data-protection' }
          ]
        },
        {
          name: 'Blockchain & Web3',
          icon: <Database className="w-4 h-4" />,
          path: '/blockchain',
          subItems: [
            { name: 'Blockchain Analytics', path: '/ai-blockchain-analytics' },
            { name: 'Smart Contracts', path: '/smart-contracts' },
            { name: 'DeFi Solutions', path: '/defi-solutions' },
            { name: 'NFT Platforms', path: '/nft-platforms' }
          ]
        },
        {
          name: 'Quantum Computing',
          icon: <Cpu className="w-4 h-4" />,
          path: '/quantum-computing',
          subItems: [
            { name: 'Quantum Processors', path: '/quantum-processors' },
            { name: 'Quantum Cloud Infrastructure', path: '/quantum-cloud-infrastructure' },
            { name: 'Quantum Financial Trading', path: '/quantum-financial-trading' },
            { name: 'Quantum Machine Learning', path: '/quantum-ml' }
          ]
        },
        {
          name: 'IoT & Edge Computing',
          icon: <Network className="w-4 h-4" />,
          path: '/iot-edge',
          subItems: [
            { name: 'Connected Devices', path: '/connected-devices' },
            { name: 'Edge Processing', path: '/edge-processing' },
            { name: 'Real-time Analytics', path: '/real-time-analytics' },
            { name: 'Smart Cities', path: '/smart-cities' }
          ]
        }
      ]
    },
    {
      id: 'solutions',
      title: 'Industry Solutions',
      icon: <Building className="w-5 h-5" />,
      items: [
        {
          name: 'Healthcare',
          icon: <Hospital className="w-4 h-4" />,
          path: '/healthcare',
          subItems: [
            { name: 'Digital Health Platforms', path: '/digital-health' },
            { name: 'Medical AI', path: '/medical-ai' },
            { name: 'Telemedicine', path: '/telemedicine' },
            { name: 'Health Analytics', path: '/health-analytics' }
          ]
        },
        {
          name: 'Fintech',
          icon: <CreditCard className="w-4 h-4" />,
          path: '/fintech',
          subItems: [
            { name: 'Digital Banking', path: '/digital-banking' },
            { name: 'Payment Solutions', path: '/payment-solutions' },
            { name: 'Risk Management', path: '/risk-management' },
            { name: 'RegTech', path: '/regtech' }
          ]
        },
        {
          name: 'Education',
          icon: <GraduationCap className="w-4 h-4" />,
          path: '/education',
          subItems: [
            { name: 'EdTech Platforms', path: '/edtech-platforms' },
            { name: 'Learning Management Systems', path: '/lms' },
            { name: 'Virtual Classrooms', path: '/virtual-classrooms' },
            { name: 'Student Analytics', path: '/student-analytics' }
          ]
        },
        {
          name: 'Manufacturing',
          icon: <Factory className="w-4 h-4" />,
          path: '/manufacturing',
          subItems: [
            { name: 'Industry 4.0', path: '/industry-4-0' },
            { name: 'Smart Manufacturing', path: '/smart-manufacturing' },
            { name: 'Predictive Maintenance', path: '/predictive-maintenance' },
            { name: 'Supply Chain Optimization', path: '/supply-chain' }
          ]
        },
        {
          name: 'Retail',
          icon: <Store className="w-4 h-4" />,
          path: '/retail',
          subItems: [
            { name: 'E-commerce Platforms', path: '/ecommerce' },
            { name: 'Omnichannel Solutions', path: '/omnichannel' },
            { name: 'Customer Analytics', path: '/customer-analytics' },
            { name: 'Inventory Management', path: '/inventory-management' }
          ]
        }
      ]
    },
    {
      id: 'resources',
      title: 'Resources',
      icon: <FileText className="w-5 h-5" />,
      items: [
        {
          name: 'Case Studies',
          icon: <BookOpen className="w-4 h-4" />,
          path: '/case-studies',
          subItems: [
            { name: 'AI Implementation', path: '/case-studies/ai' },
            { name: 'Digital Transformation', path: '/case-studies/digital-transformation' },
            { name: 'Cloud Migration', path: '/case-studies/cloud' },
            { name: 'Cybersecurity', path: '/case-studies/cybersecurity' }
          ]
        },
        {
          name: 'White Papers',
          icon: <FileText className="w-4 h-4" />,
          path: '/white-papers',
          subItems: [
            { name: 'AI Trends 2029', path: '/white-papers/ai-trends-2029' },
            { name: 'Quantum Computing Guide', path: '/white-papers/quantum-computing' },
            { name: 'Cybersecurity Best Practices', path: '/white-papers/cybersecurity' },
            { name: 'Digital Transformation', path: '/white-papers/digital-transformation' }
          ]
        },
        {
          name: 'Webinars',
          icon: <Video className="w-4 h-4" />,
          path: '/webinars',
          subItems: [
            { name: 'AI Implementation', path: '/webinars/ai-implementation' },
            { name: 'Cloud Strategy', path: '/webinars/cloud-strategy' },
            { name: 'Security Updates', path: '/webinars/security' },
            { name: 'Industry Insights', path: '/webinars/industry-insights' }
          ]
        },
        {
          name: 'Documentation',
          icon: <FileText className="w-4 h-4" />,
          path: '/docs',
          subItems: [
            { name: 'API Reference', path: '/docs/api' },
            { name: 'Integration Guides', path: '/docs/integration' },
            { name: 'Best Practices', path: '/docs/best-practices' },
            { name: 'Tutorials', path: '/docs/tutorials' }
          ]
        }
      ]
    },
    {
      id: 'company',
      title: 'Company',
      icon: <Users className="w-5 h-5" />,
      items: [
        {
          name: 'About Us',
          icon: <Users className="w-4 h-4" />,
          path: '/about',
          subItems: [
            { name: 'Our Story', path: '/about/story' },
            { name: 'Mission & Vision', path: '/about/mission' },
            { name: 'Values', path: '/about/values' },
            { name: 'Leadership', path: '/about/leadership' }
          ]
        },
        {
          name: 'Team',
          icon: <Users className="w-4 h-4" />,
          path: '/team',
          subItems: [
            { name: 'Leadership', path: '/team/leadership' },
            { name: 'Engineering', path: '/team/engineering' },
            { name: 'Sales', path: '/team/sales' },
            { name: 'Support', path: '/team/support' }
          ]
        },
        {
          name: 'Careers',
          icon: <Target className="w-4 h-4" />,
          path: '/careers',
          subItems: [
            { name: 'Open Positions', path: '/careers/positions' },
            { name: 'Benefits', path: '/careers/benefits' },
            { name: 'Culture', path: '/careers/culture' },
            { name: 'Apply Now', path: '/careers/apply' }
          ]
        },
        {
          name: 'Contact',
          icon: <MessageSquare className="w-4 h-4" />,
          path: '/contact',
          subItems: [
            { name: 'Sales', path: '/contact/sales' },
            { name: 'Support', path: '/contact/support' },
            { name: 'Partnerships', path: '/contact/partnerships' },
            { name: 'General Inquiries', path: '/contact/general' }
          ]
        }
      ]
    }
  ];

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed top-0 left-0 h-full w-80 bg-black border-r border-gray-800 z-50 transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0 lg:static lg:z-auto`}>
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-800">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-bold text-white">Navigation</span>
          </div>
          <button
            onClick={onClose}
            className="lg:hidden p-2 text-gray-400 hover:text-white transition-colors duration-200"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Content */}
        <div className="flex-1 overflow-y-auto py-6">
          <nav className="space-y-2 px-4">
            {navigationSections.map((section) => (
              <div key={section.id} className="space-y-1">
                <button
                  onClick={() => toggleSection(section.id)}
                  className="flex items-center justify-between w-full p-3 text-left text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-colors duration-200"
                >
                  <div className="flex items-center space-x-3">
                    {section.icon}
                    <span className="font-medium">{section.title}</span>
                  </div>
                  <ChevronRight 
                    className={`w-4 h-4 transition-transform duration-200 ${
                      expandedSections.includes(section.id) ? 'rotate-90' : ''
                    }`} 
                  />
                </button>

                {expandedSections.includes(section.id) && (
                  <div className="ml-8 space-y-1">
                    {section.items.map((item) => (
                      <div key={item.path} className="space-y-1">
                        <Link
                          href={item.path}
                          className="flex items-center space-x-3 p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-colors duration-200"
                          onClick={onClose}
                        >
                          {item.icon}
                          <span className="text-sm">{item.name}</span>
                        </Link>
                        
                        {/* Sub-items */}
                        {item.subItems && (
                          <div className="ml-6 space-y-1">
                            {item.subItems.map((subItem) => (
                              <Link
                                key={subItem.path}
                                href={subItem.path}
                                className="block p-2 text-gray-500 hover:text-white hover:bg-gray-800 rounded-lg transition-colors duration-200 text-sm"
                                onClick={onClose}
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Quick Actions */}
            <div className="pt-6 border-t border-gray-800">
              <h3 className="text-sm font-semibold text-gray-400 mb-3 px-3">Quick Actions</h3>
              <div className="space-y-2">
                <Link
                  href="/pricing"
                  className="flex items-center space-x-3 p-3 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-colors duration-200"
                  onClick={onClose}
                >
                  <Star className="w-4 h-4" />
                  <span>Pricing</span>
                </Link>
                <Link
                  href="/demo"
                  className="flex items-center space-x-3 p-3 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-colors duration-200"
                  onClick={onClose}
                >
                  <Rocket className="w-4 h-4" />
                  <span>Request Demo</span>
                </Link>
                <Link
                  href="/support"
                  className="flex items-center space-x-3 p-3 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-colors duration-200"
                  onClick={onClose}
                >
                  <HelpCircle className="w-4 h-4" />
                  <span>Support</span>
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};