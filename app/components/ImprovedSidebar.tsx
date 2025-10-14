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
          
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300">
            <h3 className="text-xl font-semibold text-white mb-3">24/7 Support</h3>
            <p className="text-gray-300">
              Round-the-clock support to ensure your systems run smoothly at all times.
            </p>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300">
            <h3 className="text-xl font-semibold text-white mb-3">Proven Results</h3>
            <p className="text-gray-300">
              Track record of delivering successful projects and exceeding client expectations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImprovedSidebarPage;