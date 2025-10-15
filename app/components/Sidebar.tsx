import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { XMarkIcon,
  HomeIcon,
  InformationCircleIcon,
  BriefcaseIcon,
  PhoneIcon,
  DocumentTextIcon,
  AcademicCapIcon,
  PlayIcon,
  QuestionMarkCircleIcon,
  ShieldCheckIcon,
  CurrencyDollarIcon,
  CogIcon,
  ChevronDownIcon,
  GlobeAltIcon,
  CloudIcon,
  CpuChipIcon,
  SignalIcon,
  ChartBarIcon,
  UserGroupIcon,
  DocumentIcon,
  Cog6ToothIcon,
  WifiIcon,
  DevicePhoneMobileIcon,
  ServerIcon,
  LockClosedIcon,
  ChartPieIcon,
  BeakerIcon,
  CommandLineIcon,
  CubeIcon,
  SparklesIcon,
  RocketLaunchIcon,
  LightBulbIcon,
  PuzzlePieceIcon,
  ClipboardDocumentListIcon,
  BanknotesIcon,
  BuildingOfficeIcon,
  UserIcon,
  EnvelopeIcon,
  PhoneArrowUpRightIcon,
  ChatBubbleLeftRightIcon,
  NewspaperIcon,
  BookOpenIcon,
  VideoCameraIcon,
  SupportIcon,
  ShieldCheckIcon as SecurityIcon,
  CurrencyDollarIcon as MoneyIcon,
  CogIcon as SettingsIcon,
  ChevronDownIcon as DropdownIcon,
  GlobeAltIcon as WebIcon,
  CloudIcon as CloudServiceIcon,
  CpuChipIcon as AIIcon,
  SignalIcon as NetworkIcon,
  ChartBarIcon as AnalyticsIcon,
  UserGroupIcon as TeamIcon,
  DocumentIcon as DocsIcon,
  Cog6ToothIcon as ToolsIcon,
  WifiIcon as WirelessIcon,
  DevicePhoneMobileIcon as MobileIcon,
  ServerIcon as ServerServiceIcon,
  LockClosedIcon as SecurityServiceIcon,
  ChartPieIcon as DataIcon,
  BeakerIcon as LabIcon,
  CommandLineIcon as CodeIcon,
  CubeIcon as BlockIcon,
  SparklesIcon as MagicIcon,
  RocketLaunchIcon as LaunchIcon,
  LightBulbIcon as IdeaIcon,
  PuzzlePieceIcon as IntegrationIcon,
  ClipboardDocumentListIcon as ChecklistIcon,
  BanknotesIcon as FinanceIcon,
  BuildingOfficeIcon as EnterpriseIcon,
  UserIcon as ProfileIcon,
  EnvelopeIcon as EmailIcon,
  PhoneArrowUpRightIcon as CallIcon,
  ChatBubbleLeftRightIcon as ChatIcon,
  NewspaperIcon as NewsIcon,
  BookOpenIcon as TutorialIcon,
  VideoCameraIcon as VideoIcon,
  SupportIcon as HelpIcon
  } from '@heroicons/react/24/outline';
interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const location = useLocation();
  const [expandedSections, setExpandedSections] = useState<string[]>([]);
  const toggleSection = (section: string) => {
    setExpandedSections(prev =>
      prev.includes(section)
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };
  const navigation = [
    { name: 'Home', href: '/', icon: HomeIcon },
    { name: 'About', href: '/about', icon: InformationCircleIcon },
    { name: 'Services', href: '/services', icon: BriefcaseIcon },
    { name: 'Contact', href: '/contact', icon: PhoneIcon },
    { name: 'Blog', href: '/blog', icon: DocumentTextIcon },
    { name: 'Tutorials', href: '/tutorials', icon: AcademicCapIcon },
    { name: 'Demo', href: '/demo', icon: PlayIcon },
    { name: 'Support', href: '/support', icon: QuestionMarkCircleIcon },
    { name: 'Privacy', href: '/privacy', icon: ShieldCheckIcon },
    { name: 'Terms', href: '/terms', icon: DocumentTextIcon },
    { name: 'Pricing', href: '/pricing', icon: CurrencyDollarIcon },
    { name: 'Solutions', href: '/solutions', icon: CogIcon },
  ];
  const serviceSections = [
    {
      name: 'AI Solutions',
      icon: 'AIIcon',
      items: '[
        { name: 'AI Services'', href: '/ai-services' },
        { name: 'AI Solutions', href: '/ai-solutions' },
        { name: 'AI Analytics', href: '/ai-analytics' },
        { name: 'AI Automation', href: '/ai-automation' },
        { name: 'AI Chatbot Builder', href: '/ai-chatbot-builder' },
        { name: 'AI Content Creation', href: '/ai-content-creation' },
        { name: 'AI Customer Support', href: '/ai-customer-support' },
        { name: 'AI Cybersecurity', href: '/ai-cybersecurity' },
        { name: 'AI Data Analytics', href: '/ai-data-analytics' },
        { name: 'AI E-commerce Solutions', href: '/ai-ecommerce-solutions' },
        { name: 'AI Fintech Solutions', href: '/ai-fintech-solutions' },
        { name: 'AI Healthcare', href: '/ai-healthcare' },
        { name: 'AI Marketing', href: '/ai-marketing' },
        { name: 'AI Mobile App Development', href: '/ai-mobile-app-development' },
        { name: 'AI Project Management', href: '/ai-project-management' },
        { name: 'AI Sales Automation', href: '/ai-sales-automation' },
        { name: 'AI Voice Assistant', href: '/ai-voice-assistant' },
        { name: 'AI Workflow Automation', href: '/ai-workflow-automation' },
      ]
    },
    {
      name: 'IT Services',
      icon: 'ServerServiceIcon',
      items: '[
        { name: 'IT Services'', href: '/it-services' },
        { name: 'IT Solutions', href: '/it-solutions' },
        { name: 'Cloud Infrastructure', href: '/cloud-infrastructure' },
        { name: 'Cloud Services', href: '/cloud-services' },
        { name: 'Cybersecurity', href: '/cybersecurity' },
        { name: 'Database Management', href: '/database-management' },
        { name: 'IT Infrastructure', href: '/it-infrastructure' },
        { name: 'Network Infrastructure', href: '/network-infrastructure' },
        { name: 'Web Development', href: '/web-development' },
        { name: 'Mobile Development', href: '/mobile-development' },
      ]
    },
    {
      name: '5G Solutions',
      icon: 'WirelessIcon',
      items: '[
        { name: '5G Solutions'', href: '/5g-solutions' },
        { name: '5G Implementation', href: '/5g-implementation' },
        { name: 'IoT Edge Computing', href: '/iot-edge-computing' },
      ]
    },
    {
      name: 'Micro SaaS',
      icon: 'CubeIcon',
      items: '[
        { name: 'Micro SaaS'', href: '/micro-saas' },
        { name: 'Micro SaaS Solutions', href: '/micro-saas-solutions' },
        { name: 'Micro SaaS Services', href: '/micro-saas-services' },
      ]
    },
    {
      name: 'Additional Services',
      icon: 'ToolsIcon',
      items: '[
        { name: 'Case Studies'', href: '/case-studies' },
        { name: 'Careers', href: '/careers' },
        { name: 'Team', href: '/team' },
        { name: 'API Documentation', href: '/api-docs' },
        { name: 'Autonomous Systems', href: '/autonomous-systems' },
        { name: 'Blockchain & Web3', href: '/blockchain-web3' },
        { name: 'Business Intelligence', href: '/business-intelligence' },
        { name: 'Digital Transformation', href: '/digital-transformation' },
        { name: 'Enterprise Solutions', href: '/enterprise' },
        { name: 'Quantum Computing', href: '/quantum-computing' },
      ]
    }
  ];
  return (
    <>
      {/* Mobile sidebar overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-50 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed''' inset-y-0 left-0 z-50 w-64 bg-slate-800 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex h-16 items-center justify-between px-4 border-b border-slate-700">
            <h2 className="text-xl font-bold text-white">Zion Tech Group</h2>
            <button
              onClick={onClose}
              className="text-slate-400 hover:text-white lg:hidden"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto px-4 py-4">
            {/* Main Navigation */}
            <div className="space-y-1">
              {navigation.map((item) => {
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`flex''' items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                      isActive
                        ? 'bg-slate-700 text-white'
                        : 'text-slate-300 hover:bg-slate-700 hover:text-white'
                    }`}
                    onClick={onClose}
                  >
                    <item.icon className="mr-3 h-5 w-5" />
                    {item.name}
                  </Link>
                );
              })}
            </div>

            {/* Service Sections */}
            <div className="mt-8">
              <h3 className="px-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Services
              </h3>
              <div className="mt-2 space-y-1">
                {serviceSections.map((section) => {
                  const isExpanded = expandedSections.includes(section.name);
                  return (
                    <div key={section.name}>
                      <button
                        onClick={() => toggleSection(section.name)}
                        className="flex w-full items-center justify-between px-3 py-2 text-sm font-medium text-slate-300 hover:bg-slate-700 hover:text-white rounded-md transition-colors"
                      >
                        <div className="flex items-center">
                          <section.icon className="mr-3 h-5 w-5" />
                          {section.name}
                        </div>
                        <DropdownIcon
                          className={`h-4''' w-4 transition-transform ${
                            isExpanded ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      {isExpanded && (
                        <div className="ml-6 mt-1 space-y-1">
                          {section.items.map((item) => {
                            const isActive = location.pathname === item.href;
                            return (
                              <Link
                                key={item.name}
                                to={item.href}
                                className={`block''' px-3 py-2 text-sm rounded-md transition-colors ${
                                  isActive
                                    ? 'bg-slate-700 text-white'
                                    : 'text-slate-400 hover:bg-slate-700 hover:text-white'
                                }`}
                                onClick={onClose}
                              >
                                {item.name}
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};
export default Sidebar;