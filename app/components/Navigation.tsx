import React, { useState, useCallback, useEffect, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
  Zap,
  ChevronDown
} from 'lucide-react';

interface NavigationItem {
  name: string;
  path: string;
  icon: React.ReactNode;
  dropdown?: NavigationItem[];
}const Navigation = React.memo<NavigationProps>(({ onSidebarToggle }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMicroSaasOpen, setIsMicroSaasOpen] = useState(false);
  const [isItServicesOpen, setIsItServicesOpen] = useState(false);
  const [is5GServicesOpen, setIs5GServicesOpen] = useState(false); cursor/analyze-improve-and-deploy-application-30da
  const location = useLocation();
  
  const toggleMenu = useCallback(() => {
export default function Navigation({ onSidebarToggle }: NavigationProps) {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();
  const toggleMicroSaas = useCallback(() => {
    setIsMicroSaasOpen(!isMicroSaasOpen);
  }, [isMicroSaasOpen]);

  const navigation = [
    { name: 'Home', href: '/', icon: HomeIcon },
    { name: 'About', href: '/about', icon: InformationCircleIcon },
    { 
      name: 'Services', 
      href: '/services', 
      icon: BriefcaseIcon,
      submenu: [
        { name: 'AI Solutions', href: '/ai-solutions', icon: CpuChipIcon },
        { name: 'IT Solutions', href: '/it-solutions', icon: CogIcon },
        { name: 'Micro SaaS Solutions', href: '/micro-saas-solutions', icon: GlobeAltIcon },
        { name: 'Cybersecurity', href: '/cybersecurity', icon: ShieldCheckIcon },
        { name: 'Cloud Infrastructure', href: '/cloud-solutions', icon: CloudIcon },
        { name: 'Digital Transformation', href: '/digital-transformation', icon: CogIcon },
        { name: '5G Solutions', href: '/5g-solutions', icon: SignalIcon }
      ]
    },
    { 
      name: 'Solutions', 
      href: '/solutions', 
      icon: CogIcon,
      submenu: [
        { name: 'AI Solutions', href: '/ai-solutions', icon: CpuChipIcon },
        { name: 'IT Solutions', href: '/it-solutions', icon: BriefcaseIcon },
        { name: 'Micro SaaS Solutions', href: '/micro-saas-solutions', icon: GlobeAltIcon },
        { name: 'Cybersecurity', href: '/cybersecurity', icon: ShieldCheckIcon },
        { name: 'Cloud Infrastructure', href: '/cloud-solutions', icon: CloudIcon },
        { name: 'Digital Transformation', href: '/digital-transformation', icon: CogIcon },
        { name: '5G Solutions', href: '/5g-solutions', icon: SignalIcon }
      ]
    },
    { name: 'Blog', href: '/blog', icon: DocumentTextIcon },
    { name: 'Tutorials', href: '/tutorials', icon: AcademicCapIcon },
    { name: 'Demo', href: '/demo', icon: PlayIcon },
    { name: 'Support', href: '/support', icon: QuestionMarkCircleIcon },
    { name: 'Contact', href: '/contact', icon: PhoneIcon }
  ];

  const isActive = (href: string) => {
    if (href === '/') {
      return location.pathname === '/';
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigationItems = [
    {
      name: 'AI Services',
      path: '/ai-services',
      dropdown: [
        { name: 'AI Content Generator', path: '/ai-content-generator' },
        { name: 'AI Cybersecurity Suite', path: '/ai-cybersecurity-suite' },
        { name: 'AI Drug Discovery Pro', path: '/ai-drug-discovery-pro' },
        { name: 'AI 3D Generation', path: '/ai-3d-generation' },
        { name: 'AI Chatbot Builder', path: '/ai-chatbot-builder' },
        { name: 'AI Analytics Dashboard', path: '/ai-analytics-dashboard' },
        { name: 'AI Code Assistant', path: '/ai-code-assistant' },
        { name: 'AI Customer Support', path: '/ai-customer-support' },
        { name: 'AI Email Marketing', path: '/ai-email-marketing' },
        { name: 'AI Voice Assistant', path: '/ai-voice-assistant' },
        { name: 'AI Data Processing', path: '/ai-document-processing' },
        { name: 'AI Business Intelligence', path: '/ai-business-intelligence' },
        { name: 'AI Project Management', path: '/ai-project-management' },
        { name: 'AI Computer Vision', path: '/ai-computer-vision' },
        { name: 'AI Translation Services', path: '/ai-translation-services' }
      ]
    },
    {
      name: 'IT Services',
      path: '/it-services',
      dropdown: [
        { name: 'Web Development', path: '/web-development' },
        { name: 'Mobile Development', path: '/mobile-development' },
        { name: 'Cloud Migration', path: '/cloud-migration' },
        { name: 'Cybersecurity', path: '/cybersecurity' },
        { name: 'Database Management', path: '/database-management' },
        { name: 'Network Infrastructure', path: '/network-infrastructure' },
        { name: 'DevOps Solutions', path: '/devops' },
        { name: 'Data Analytics', path: '/data-analytics' },
        { name: 'API Development', path: '/api-development' },
        { name: 'Server Management', path: '/server-management' },
        { name: 'IT Security Audit', path: '/it-security-audit' },
        { name: 'IT Support & Maintenance', path: '/it-support' }
      ]
    },
    {
      name: 'Micro SaaS',
      path: '/micro-saas-services',
      dropdown: [
        { name: 'AI Password Manager Pro', path: '/micro-saas/ai-password-manager' },
        { name: 'AI Task Manager', path: '/micro-saas/ai-task-manager' },
        { name: 'AI Email Marketing', path: '/micro-saas/ai-email-marketing' },
        { name: 'Contract Manager', path: '/micro-saas/contract-manager' },
        { name: 'AI Customer Insights', path: '/ai-customer-insights' },
        { name: 'AI Workflow Automation', path: '/ai-workflow-automation' },
        { name: 'Smart Appointment Scheduler', path: '/micro-saas/appointment-scheduler' },
        { name: 'AI Chat Analytics', path: '/micro-saas/chat-analytics' },
        { name: 'Document Processor', path: '/micro-saas/document-processor' },
        { name: 'Expense Tracker Pro', path: '/micro-saas/expense-tracker' },
        { name: 'Inventory Manager', path: '/micro-saas/inventory-management' },
        { name: 'Lead Generation Suite', path: '/micro-saas/lead-generation' },
        { name: 'Social Media Scheduler', path: '/micro-saas/social-scheduler' },
        { name: 'Analytics Dashboard', path: '/micro-saas/analytics-dashboard' },
        { name: 'Website Monitor', path: '/micro-saas/website-monitor' },
        { name: 'Email Signature Manager', path: '/micro-saas/email-signature' },
        { name: 'Meeting Room Booker', path: '/micro-saas/meeting-room-booker' },
        { name: 'Employee Directory', path: '/micro-saas/employee-directory' },
        { name: 'Invoice Generator', path: '/micro-saas/invoice-generator' },
        { name: 'Time Tracking Pro', path: '/micro-saas/time-tracking' }
      ]
    },
    {
      name: '5G Solutions',
      path: '/5g-solutions',
      dropdown: [
        { name: '5G Network Infrastructure', path: '/5g-network-infrastructure' },
        { name: '5G IoT Solutions', path: '/5g-iot-solutions' },
        { name: '5G Edge Computing', path: '/5g-edge-computing' },
        { name: '5G Private Networks', path: '/5g-private-networks' },
        { name: '5G Mobile Applications', path: '/5g-mobile-applications' },
        { name: '5G Data Analytics', path: '/5g-data-analytics' }
      ]
    },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Pricing', path: '/pricing' }
  ]

  return (
    <nav className="bg-slate-900/95 backdrop-blur-sm border-b border-slate-700/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">Z</span>
            </div>
            <span className="text-xl font-bold text-white">Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.name} className="relative group">
                  <Link
                    to={item.href}
                    className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive(item.href)
                        ? 'bg-purple-600 text-white'
                        : 'text-gray-300 hover:text-white hover:bg-slate-800'
                    }`}
                    onMouseEnter={() => item.submenu && setIsServicesOpen(true)}
                    onMouseLeave={() => item.submenu && setIsServicesOpen(false)}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.name}</span>
                    {item.submenu && <ChevronDownIcon className="w-4 h-4 ml-1" />}
                  </Link>
                  
                  {/* Dropdown Menu */}
                  {item.submenu && isServicesOpen && (
                    <div className="absolute left-0 mt-2 w-56 bg-slate-800 rounded-lg shadow-lg py-2 z-50 border border-slate-700">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-slate-700 transition-colors"
                          onClick={() => setIsServicesOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 flex items-center space-x-2"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-md transition-all duration-300"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800/95 backdrop-blur-sm">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.children ? (
                    <div>
                      <button
                        onClick={() => setIsServicesOpen(!isServicesOpen)}
                        className="flex items-center space-x-2 w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-slate-700"
                      >
                        <item.icon className="w-5 h-5" />
                        <span>{item.name}</span>
                        <ChevronDownIcon className="w-4 h-4 ml-auto" />
                      </button>
                      {isServicesOpen && (
                        <div className="pl-8 space-y-1">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              className="flex items-center space-x-2 px-3 py-2 rounded-md text-sm text-gray-400 hover:text-white hover:bg-slate-700"
                              onClick={() => {
                                setIsOpen(false);
                                setIsServicesOpen(false);
                              }}
                            >
                              <subItem.icon className="w-4 h-4" />
                              <span>{subItem.name}</span>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className={`flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium transition-colors ${
                        isActive(item.href)
                          ? 'text-purple-400 bg-slate-700'
                          : 'text-gray-300 hover:text-white hover:bg-slate-700'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      <item.icon className="w-5 h-5" />
                      <span>{item.name}</span>
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
