import React from 'react';

import { Link, useLocation } from 'react-router-dom';';'
import {
  Bars3Icon,
  XMarkIcon,
  HomeIcon,
  InformationCircleIcon,
  PhoneIcon,
  DocumentTextIcon,
  AcademicCapIcon,
  QuestionMarkCircleIcon,
  ShieldCheckIcon,
  CurrencyDollarIcon,
  CogIcon,
  ChevronDownIcon,
  GlobeAltIcon,
  CloudIcon,
  CpuChipIcon,
  SignalIcon,
  UserGroupIcon,
  EnvelopeIcon,
  ShareIcon,
  ChatBubbleLeftRightIcon,
  ChartBarIcon,
  EyeIcon,
  CircleStackIcon,
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  UserPlusIcon,
  CheckCircleIcon,
  RocketLaunchIcon,;
  ServerIcon;
}; from '@heroicons/react/24/outline';''

interface NavigationProps {
  onSidebarToggle?: () => void;
}

const Navigation: React.FC<NavigationProps></NavigationProps> = ({ onSidebarToggle }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/', icon: HomeIcon },";'"'"
    { name: 'About', href: '/about', icon: InformationCircleIcon },";'"'"
    {
      name: 'AI Services',";'"'"
      href: '/ai-solutions',";'"'"
      icon: CpuChipIcon,
      submenu: [
        { name: 'AI Solutions Overview', href: '/ai-solutions', icon: CpuChipIcon },";'"'"
        { name: 'AI Email Marketing', href: '/ai-email-marketing-automation', icon: EnvelopeIcon },";'"'"
        { name: 'AI Social Media Manager', href: '/ai-social-media-manager', icon: ShareIcon },";'"'"
        { name: 'AI Customer Support Chatbot', href: '/ai-customer-support-chatbot', icon: ChatBubbleLeftRightIcon },";'"'"
        { name: 'AI Project Management Pro', href: '/ai-project-management-pro', icon: CogIcon },";'"'"
        { name: 'AI Analytics Dashboard Pro', href: '/ai-analytics-dashboard-pro', icon: ChartBarIcon },";'"'"
        { name: 'AI Content Generation', href: '/ai-content-generation-pro', icon: DocumentTextIcon },";'"'"
        { name: 'AI Computer Vision', href: '/ai-computer-vision', icon: EyeIcon },";'"'"
        { name: 'AI Automation Platform', href: '/ai-automation-platform', icon: CogIcon }";'"'"
      ]
    },
    {

  ];

  const toggleMobileMenu = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  const isActive = (path: string) => {
    return location.pathname === path,
  };



            </Link>
          </div>

          {/* Desktop Navigation */}

                )}
              </div>

            ))}
          </div>

          {/* Mobile menu button */}

          </div>
        </div>

      </div>

      {/* Mobile Navigation */}
      {isOpen && ()
        <div className="md:hidden bg-slate-900/95 backdrop-blur-sm border-t border-purple-500/20">""
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">""
            {navigationItems.map((item) => ()
              <Link
                key={item.name}
                to={item.path}
                onClick={() =></Link> setIsOpen(false)}
                className={`flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive(item.path)
                    ? 'text-purple-400 bg-purple-500/20'''
                    : 'text-gray-300 hover:text-white hover:bg-white/10'''
                }`}
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );

};
;
export default Navigation;