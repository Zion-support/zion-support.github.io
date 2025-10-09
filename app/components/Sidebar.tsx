import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, ChevronRight, Brain, Cloud, Code, Zap, X, Menu } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({});

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const navigationSections = [
    {
      title: 'AI Services',
      icon: Brain,
      color: 'text-purple-400',
      items: [
        { name: 'AI Services', path: '/ai-services' },
        { name: 'AI Marketing', path: '/ai-marketing' },
        { name: 'AI Automation', path: '/ai-automation' },
        { name: 'AI Healthcare', path: '/ai-healthcare' },
        { name: 'AI Fintech', path: '/ai-fintech' },
        { name: 'AI Content Generation', path: '/ai-content-generation' },
        { name: 'AI Data Analytics', path: '/ai-data-analytics' },
        { name: 'AI Cybersecurity', path: '/ai-cybersecurity' },
        { name: 'AI Workflow Automation', path: '/ai-workflow-automation' },
        { name: 'AI Mobile App Development', path: '/ai-mobile-app-development' },
        { name: 'AI E-commerce Solutions', path: '/ai-ecommerce-solutions' },
        { name: 'AI Customer Support', path: '/ai-customer-support' },
        { name: 'AI Sales Automation', path: '/ai-sales-automation' },
        { name: 'AI Data Visualization', path: '/ai-data-visualization' },
        { name: 'AI Lead Generation', path: '/ai-lead-generation' },
        { name: 'AI Document Processing', path: '/ai-document-processing' },
        { name: 'AI Predictive Analytics', path: '/ai-predictive-analytics' },
        { name: 'AI Image Recognition', path: '/ai-image-recognition' },
        { name: 'AI Voice Processing', path: '/ai-voice-processing' },
        { name: 'AI Recommendation Engine', path: '/ai-recommendation-engine' },
        { name: 'AI Sentiment Analysis', path: '/ai-sentiment-analysis' },
        { name: 'AI Research Assistant', path: '/ai-research-assistant' }
      ]
    },
    {
      title: 'IT Services',
      icon: Cloud,
      color: 'text-blue-400',
      items: [
        { name: 'IT Services', path: '/it-services' },
        { name: 'IT Infrastructure', path: '/it-infrastructure' },
        { name: 'Cybersecurity', path: '/cybersecurity' },
        { name: 'Cloud Services', path: '/cloud-services' },
        { name: 'DevOps', path: '/devops' },
        { name: 'Database Services', path: '/database' },
        { name: 'Networking', path: '/networking' },
        { name: 'System Administration', path: '/system-admin' },
        { name: 'IT Consulting', path: '/it-consulting' },
        { name: 'Managed IT Services', path: '/managed-it' },
        { name: 'IT Training', path: '/it-training' },
        { name: 'IT Project Management', path: '/it-project-management' },
        { name: 'Performance Optimization', path: '/performance-optimization' },
        { name: 'Backup & Recovery', path: '/backup-recovery' },
        { name: 'Enterprise Solutions', path: '/enterprise-solutions' },
        { name: 'IT Infrastructure Design', path: '/it-infrastructure-design' }
      ]
    },
    {
      title: 'Micro SAAS',
      icon: Code,
      color: 'text-green-400',
      items: [
        { name: 'Micro SAAS Solutions', path: '/micro-saas' },
        { name: 'Developer Tools', path: '/developer-tools' },
        { name: 'Business Apps', path: '/business-apps' },
        { name: 'Marketing Tools', path: '/marketing-tools' },
        { name: 'Analytics Tools', path: '/analytics-tools' },
        { name: 'Communication Tools', path: '/communication-tools' },
        { name: 'Productivity Tools', path: '/productivity' },
        { name: 'HR & Recruitment', path: '/hr-recruitment-tools' },
        { name: 'Customer Support', path: '/customer-support-tools' },
        { name: 'Sales & CRM', path: '/sales-crm-tools' },
        { name: 'Project Management', path: '/project-management-tools' },
        { name: 'Content Creation', path: '/content-creation-tools' }
      ]
    },
    {
      title: 'Emerging Tech',
      icon: Zap,
      color: 'text-orange-400',
      items: [
        { name: 'Quantum Computing', path: '/quantum-computing' },
        { name: 'Autonomous Systems', path: '/autonomous-systems' },
        { name: 'Blockchain & Web3', path: '/blockchain-web3' },
        { name: 'IoT & Edge Computing', path: '/iot-edge-computing' },
        { name: 'Business Intelligence', path: '/business-intelligence' },
        { name: 'Robotics', path: '/robotics' },
        { name: 'AR/VR Solutions', path: '/ar-vr-solutions' },
        { name: 'Smart Cities', path: '/smart-cities' },
        { name: 'Digital Transformation', path: '/digital-transformation' },
        { name: 'Innovation Labs', path: '/innovation-labs' },
        { name: 'Sustainability Tech', path: '/sustainability-tech' },
        { name: 'Future Technologies', path: '/future-technologies' }
      ]
    }
  ];

  const mainPages = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
    { name: 'Team', path: '/team' },
    { name: 'Careers', path: '/careers' },
    { name: 'Pricing', path: '/pricing' }
  ];

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
        onClick={onClose}
      />
      
      {/* Sidebar */}
      <div className="fixed top-0 left-0 h-full w-80 bg-slate-900 z-50 transform transition-transform duration-300 ease-in-out lg:translate-x-0">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-slate-700">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-white font-bold text-lg">Zion Tech Group</span>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white lg:hidden"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation */}
          <div className="flex-1 overflow-y-auto">
            <div className="p-4">
              {/* Main Pages */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
                  Main Pages
                </h3>
                <ul className="space-y-1">
                  {mainPages.map((page) => (
                    <li key={page.name}>
                      <Link
                        href={page.path}
                        className="block px-3 py-2 text-gray-300 hover:text-cyan-400 hover:bg-slate-800 rounded-lg transition-colors"
                        onClick={onClose}
                      >
                        {page.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Service Sections */}
              {navigationSections.map((section) => (
                <div key={section.title} className="mb-6">
                  <button
                    onClick={() => toggleSection(section.title)}
                    className="flex items-center justify-between w-full px-3 py-2 text-left text-gray-300 hover:text-cyan-400 hover:bg-slate-800 rounded-lg transition-colors"
                  >
                    <div className="flex items-center space-x-2">
                      <section.icon className={`w-4 h-4 ${section.color}`} />
                      <span className="font-medium">{section.title}</span>
                    </div>
                    {expandedSections[section.title] ? (
                      <ChevronDown className="w-4 h-4" />
                    ) : (
                      <ChevronRight className="w-4 h-4" />
                    )}
                  </button>
                  
                  {expandedSections[section.title] && (
                    <ul className="mt-2 ml-6 space-y-1">
                      {section.items.map((item) => (
                        <li key={item.name}>
                          <Link
                            href={item.path}
                            className="block px-3 py-2 text-sm text-gray-400 hover:text-cyan-400 hover:bg-slate-800 rounded-lg transition-colors"
                            onClick={onClose}
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-slate-700">
            <div className="text-center">
              <a
                href="tel:+13024640950"
                className="block w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all"
                onClick={onClose}
              >
                Call (302) 464-0950
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;