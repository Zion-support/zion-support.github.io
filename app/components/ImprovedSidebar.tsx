import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  XMarkIcon, 
  HomeIcon, 
  UserGroupIcon, 
  BriefcaseIcon, 
  CurrencyDollarIcon, 
  DocumentTextIcon,
  ChatBubbleLeftRightIcon,
  CogIcon,
  QuestionMarkCircleIcon,
  ShieldCheckIcon,
  CloudIcon,
  CpuChipIcon,
  GlobeAltIcon,
  DevicePhoneMobileIcon,
  CodeBracketIcon,
  WrenchScrewdriverIcon,
  ChartBarIcon,
  LockClosedIcon,
  ServerIcon,
  Cog6ToothIcon,
  SparklesIcon,
  RocketLaunchIcon,
  BeakerIcon,
  HeartIcon,
  ShieldExclamationIcon,
  DocumentDuplicateIcon,
  AcademicCapIcon,
  PresentationChartLineIcon,
  CommandLineIcon,
  PuzzlePieceIcon,
  ArrowRightIcon,
  ChevronDownIcon
} from '@heroicons/react/24/outline';

interface ImprovedSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const ImprovedSidebar: React.FC<ImprovedSidebarProps> = ({ isOpen, onClose }) => {
  const location = useLocation();
  const [expandedSections, setExpandedSections] = useState<string[]>([]);

  const toggleSection = (section: string) => {
    setExpandedSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const mainLinks = [
    { name: 'Home', href: '/', icon: HomeIcon },
    { name: 'About', href: '/about', icon: UserGroupIcon },
    { name: 'Services', href: '/services', icon: BriefcaseIcon },
    { name: 'Pricing', href: '/pricing', icon: CurrencyDollarIcon },
    { name: 'Blog', href: '/blog', icon: DocumentTextIcon },
    { name: 'Contact', href: '/contact', icon: ChatBubbleLeftRightIcon },
    { name: 'Demo', href: '/demo', icon: PresentationChartLineIcon },
    { name: 'Support', href: '/support', icon: QuestionMarkCircleIcon }
  ];

  const aiServices = [
    { name: 'AI Analytics', href: '/ai-analytics', icon: ChartBarIcon },
    { name: 'AI Services', href: '/ai-services', icon: CpuChipIcon },
    { name: 'AI Healthcare', href: '/ai-healthcare-diagnostics', icon: HeartIcon },
    { name: 'AI Automation', href: '/ai-automation-platform', icon: CogIcon },
    { name: 'AI Content Generation', href: '/ai-content-generation', icon: DocumentTextIcon },
    { name: 'AI Customer Support', href: '/ai-customer-support', icon: ChatBubbleLeftRightIcon },
    { name: 'AI Cybersecurity', href: '/ai-cybersecurity', icon: ShieldExclamationIcon },
    { name: 'AI Data Analytics', href: '/ai-data-analytics', icon: ChartBarIcon }
  ];

  const itServices = [
    { name: 'Cloud Infrastructure', href: '/cloud-infrastructure', icon: CloudIcon },
    { name: 'IT Services', href: '/it-services', icon: CpuChipIcon },
    { name: 'Web Development', href: '/web-development', icon: GlobeAltIcon },
    { name: 'Mobile Development', href: '/mobile-development', icon: DevicePhoneMobileIcon },
    { name: 'Database Management', href: '/database-management', icon: ServerIcon },
    { name: 'Custom Software', href: '/custom-software', icon: CodeBracketIcon },
    { name: 'Cybersecurity Solutions', href: '/cybersecurity-solutions', icon: LockClosedIcon },
    { name: 'System Integration', href: '/system-integration', icon: WrenchScrewdriverIcon }
  ];

  const businessSolutions = [
    { name: 'Micro SaaS', href: '/micro-saas', icon: RocketLaunchIcon },
    { name: 'Cloud Services', href: '/cloud-services', icon: ServerIcon },
    { name: 'Digital Transformation', href: '/digital-transformation', icon: SparklesIcon },
    { name: 'Process Automation', href: '/process-automation', icon: Cog6ToothIcon },
    { name: 'Data Migration', href: '/data-migration', icon: ArrowRightIcon },
    { name: 'Performance Optimization', href: '/performance-optimization', icon: ChartBarIcon },
    { name: 'API Development', href: '/api-development', icon: CommandLineIcon },
    { name: 'Legacy Modernization', href: '/legacy-modernization', icon: BeakerIcon }
  ];

  const additionalLinks = [
    { name: 'Privacy Policy', href: '/privacy', icon: ShieldCheckIcon },
    { name: 'Terms of Service', href: '/terms', icon: DocumentTextIcon },
    { name: 'Cookie Policy', href: '/cookies', icon: DocumentTextIcon },
    { name: 'Sitemap', href: '/sitemap', icon: GlobeAltIcon },
    { name: 'Our Team', href: '/team', icon: UserGroupIcon },
    { name: 'Documentation', href: '/docs', icon: DocumentDuplicateIcon },
    { name: 'Careers', href: '/careers', icon: BriefcaseIcon },
    { name: 'Tutorials', href: '/tutorials', icon: AcademicCapIcon }
  ];

  const serviceSections = [
    { title: 'AI Services', links: aiServices, icon: CpuChipIcon, key: 'ai' },
    { title: 'IT Services', links: itServices, icon: CpuChipIcon, key: 'it' },
    { title: 'Business Solutions', links: businessSolutions, icon: PuzzlePieceIcon, key: 'business' }
  ];

  const isActive = (href: string) => location.pathname === href;

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
      <div className={`
        fixed top-0 left-0 h-full w-80 bg-gradient-to-b from-slate-900 to-slate-800 
        transform transition-transform duration-300 ease-in-out z-50 lg:translate-x-0
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        shadow-2xl border-r border-slate-700
      `}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-slate-700 bg-gradient-to-r from-slate-800 to-slate-700">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                <CpuChipIcon className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Zion Tech</span>
            </div>
            <button
              onClick={onClose}
              className="lg:hidden p-2 rounded-lg hover:bg-slate-600 transition-colors"
            >
              <XMarkIcon className="w-6 h-6 text-white" />
            </button>          </div>
          
          {/* Navigation Content */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {/* Main Links */}
            <div className="space-y-2 mb-8">
              {mainLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                      isActive(link.href)
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
                        : 'text-gray-300 hover:bg-slate-700 hover:text-white'
                    }`}
                    onClick={onClose}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{link.name}</span>
                  </Link>
                );
              })}
            </div>

            {/* Service Sections */}
            {serviceSections.map((section) => {
              const Icon = section.icon;
              const isExpanded = expandedSections.includes(section.key);
              
              return (
                <div key={section.key} className="mb-6">
                  <button
                    onClick={() => toggleSection(section.key)}
                    className="flex items-center justify-between w-full px-4 py-3 text-left text-gray-300 hover:text-white transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      <Icon className="w-5 h-5" />
                      <span className="font-medium">{section.title}</span>
                    </div>
                    <ChevronDownIcon className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {isExpanded && (
                    <div className="ml-8 space-y-1 mt-2">
                      {section.links.map((link) => {
                        const LinkIcon = link.icon;
                        return (
                          <Link
                            key={link.name}
                            to={link.href}
                            className={`flex items-center space-x-3 px-4 py-2 rounded-lg text-sm transition-all duration-200 ${
                              isActive(link.href)
                                ? 'bg-slate-700 text-cyan-400'
                                : 'text-gray-400 hover:bg-slate-700 hover:text-white'
                            }`}
                            onClick={onClose}
                          >
                            <LinkIcon className="w-4 h-4" />
                            <span>{link.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}

            {/* Additional Links */}
            <div className="space-y-2 mb-8">
              <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Additional
              </div>
              {additionalLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={`flex items-center space-x-3 px-4 py-2 rounded-lg text-sm transition-all duration-200 ${
                      isActive(link.href)
                        ? 'bg-slate-700 text-cyan-400'
                        : 'text-gray-400 hover:bg-slate-700 hover:text-white'
                    }`}
                    onClick={onClose}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{link.name}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImprovedSidebar;