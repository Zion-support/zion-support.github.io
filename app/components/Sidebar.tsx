import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  XMarkIcon,
  HomeIcon,
  InformationCircleIcon,
  BriefcaseIcon,
  PhoneIcon,
  DocumentTextIcon,
  AcademicCapIcon,
  PlayIcon,
  QuestionMarkCircleIcon,
  CurrencyDollarIcon,
  CogIcon,
  GlobeAltIcon,
  CloudIcon,
  CpuChipIcon,
  SignalIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  BuildingOfficeIcon,
  ChartBarIcon,
  WrenchScrewdriverIcon
} from '@heroicons/react/24/outline';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const navigation = [
    { name: 'Home', href: '/', icon: HomeIcon },
    { name: 'About', href: '/about', icon: InformationCircleIcon },
    { name: 'Services', href: '/services', icon: BriefcaseIcon },
    { name: 'Solutions', href: '/solutions', icon: CogIcon },
    { name: 'AI Solutions', href: '/ai-solutions', icon: CpuChipIcon },
    { name: 'IT Solutions', href: '/it-solutions', icon: WrenchScrewdriverIcon },
    { name: 'Micro SaaS Solutions', href: '/micro-saas-solutions', icon: GlobeAltIcon },
    { name: 'Cloud Solutions', href: '/cloud-solutions', icon: CloudIcon },
    { name: 'Cybersecurity', href: '/cybersecurity', icon: ShieldCheckIcon },
    { name: '5G Solutions', href: '/5g-solutions', icon: SignalIcon },
    { name: 'Team', href: '/team', icon: UserGroupIcon },
    { name: 'Case Studies', href: '/case-studies', icon: ChartBarIcon },
    { name: 'Blog', href: '/blog', icon: DocumentTextIcon },
    { name: 'Tutorials', href: '/tutorials', icon: AcademicCapIcon },
    { name: 'Demo', href: '/demo', icon: PlayIcon },
    { name: 'Support', href: '/support', icon: QuestionMarkCircleIcon },
    { name: 'Pricing', href: '/pricing', icon: CurrencyDollarIcon },
    { name: 'Contact', href: '/contact', icon: PhoneIcon }
  ];

  const quickLinks = [
    { name: 'AI Chatbot Enterprise', href: '/ai-chatbot-enterprise' },
    { name: 'AI Computer Vision', href: '/ai-computer-vision' },
    { name: 'AI Content Generation Pro', href: '/ai-content-generation-pro' },
    { name: 'AI Analytics Dashboard Pro', href: '/ai-analytics-dashboard-pro' },
    { name: 'AI Automation Platform', href: '/ai-automation-platform' },
    { name: 'AI Blockchain Solutions', href: '/ai-blockchain-solutions' },
    { name: 'Cloud Infrastructure', href: '/cloud-infrastructure' },
    { name: 'Cybersecurity Solutions', href: '/cybersecurity-solutions' },
    { name: 'Web Development', href: '/web-development' },
    { name: 'Mobile App Development', href: '/mobile-app-development' }
  ];

  return (
    <>
      <Helmet>
        <title>Navigation - Zion Tech Group</title>
        <meta name="description" content="Navigate through our comprehensive AI and IT solutions" />
      </Helmet>
      
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-80 bg-slate-900 transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-slate-700">
            <div className="flex items-center">
              <div className="h-8 w-8 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <span className="ml-2 text-white font-bold text-xl">Zion Tech Group</span>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white lg:hidden"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation */}
          <div className="flex-1 overflow-y-auto">
            <nav className="p-6 space-y-2">
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
                  Main Navigation
                </h3>
                {navigation.slice(0, 4).map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="flex items-center px-3 py-2 text-gray-300 hover:text-white hover:bg-slate-700 rounded-lg transition-colors"
                    onClick={onClose}
                  >
                    <item.icon className="w-5 h-5 mr-3" />
                    {item.name}
                  </Link>
                ))}
              </div>

              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
                  Solutions
                </h3>
                {navigation.slice(4, 10).map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="flex items-center px-3 py-2 text-gray-300 hover:text-white hover:bg-slate-700 rounded-lg transition-colors"
                    onClick={onClose}
                  >
                    <item.icon className="w-5 h-5 mr-3" />
                    {item.name}
                  </Link>
                ))}
              </div>

              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
                  Company
                </h3>
                {navigation.slice(10, 13).map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="flex items-center px-3 py-2 text-gray-300 hover:text-white hover:bg-slate-700 rounded-lg transition-colors"
                    onClick={onClose}
                  >
                    <item.icon className="w-5 h-5 mr-3" />
                    {item.name}
                  </Link>
                ))}
              </div>

              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
                  Resources
                </h3>
                {navigation.slice(13, 18).map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="flex items-center px-3 py-2 text-gray-300 hover:text-white hover:bg-slate-700 rounded-lg transition-colors"
                    onClick={onClose}
                  >
                    <item.icon className="w-5 h-5 mr-3" />
                    {item.name}
                  </Link>
                ))}
              </div>
            </nav>
          </div>

          {/* Quick Links */}
          <div className="p-6 border-t border-slate-700">
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
              Popular Services
            </h3>
            <div className="space-y-2">
              {quickLinks.slice(0, 5).map((link) => (
                <a
                  key={link.name}
                  href={`https://ziontechgroup.com${link.href}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-slate-700 rounded-lg transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="p-6 border-t border-slate-700">
            <div className="text-sm text-gray-400">
              <div className="mb-2">
                <strong className="text-white">Contact Us</strong>
              </div>
              <div className="mb-1">
                <a href="tel:+13024640950" className="hover:text-white transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div className="mb-1">
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-white transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="text-xs">
                364 E Main St STE 1008<br />
                Middletown DE 19709
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;