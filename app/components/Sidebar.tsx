import React from 'react';
import { Link } from 'react-router-dom';
import { X, Brain, Globe, Users, Code, Mail, Zap, ChevronRight } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const location = useLocation()
  const [expandedSections, setExpandedSections] = useState<string[]>([])
  
  const navigation = [
    { name: 'Home', href: '/', icon: HomeIcon },
    { name: 'About', href: '/about', icon: InformationCircleIcon },
    { 
      name: 'Services', 
      href: '/services', 
      icon: BriefcaseIcon,
      submenu: [
        { name: 'AI Solutions', href: '/ai-solutions', icon: CpuChipIcon },
        { name: 'Cybersecurity', href: '/cybersecurity', icon: ShieldCheckIcon },
        { name: 'Cloud Infrastructure', href: '/cloud-solutions', icon: CloudIcon },
        { name: 'Digital Transformation', href: '/digital-transformation', icon: CogIcon },
        { name: 'Micro SaaS', href: '/micro-saas', icon: GlobeAltIcon },
        { name: '5G Solutions', href: '/5g-solutions', icon: SignalIcon }
      ]
    },
    {
      name: 'IT Services',
      path: '/services',
      icon: <Code className="w-5 h-5" />,
      children: [
        { name: 'Web Development', path: '/web-development', icon: <Code className="w-4 h-4" /> },
        { name: 'Cloud Migration', path: '/cloud-migration', icon: <Globe className="w-4 h-4" /> },
        { name: 'DevOps Services', path: '/devops-services', icon: <Zap className="w-4 h-4" /> },
        { name: 'IT Consulting', path: '/it-consulting', icon: <Users className="w-4 h-4" /> }
      ]
    },
    { name: 'Pricing', href: '/pricing', icon: CurrencyDollarIcon },
    { name: 'Blog', href: '/blog', icon: DocumentTextIcon },
    { name: 'Tutorials', href: '/tutorials', icon: AcademicCapIcon },
    { name: 'Demo', href: '/demo', icon: PlayIcon },
    { name: 'Support', href: '/support', icon: QuestionMarkCircleIcon },
    { name: 'Contact', href: '/contact', icon: PhoneIcon }
  ]
  
  const additionalLinks = [
    { name: 'Privacy Policy', href: '/privacy', icon: ShieldCheckIcon },
    { name: 'Terms of Service', href: '/terms', icon: DocumentTextIcon },
    { name: 'Our Team', href: '/team', icon: UserGroupIcon },
    { name: 'Documentation', href: '/docs', icon: DocumentTextIcon },
    { name: 'Careers', href: '/careers', icon: BriefcaseIcon }
  ]
  
  const isActive = (path: string) => {
    return location.pathname === path;
  }
  
  const toggleSection = (sectionName: string) => {
    setExpandedSections(prev => 
      prev.includes(sectionName) 
        ? prev.filter(name => name !== sectionName)
        : [...prev, sectionName]
    );
  }
  
  const isExpanded = (sectionName: string) => {
    return expandedSections.includes(sectionName);
  }
  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
        onClick={onClose}
      />
      
      {/* Sidebar */}
      <div className="fixed top-0 left-0 h-full w-80 bg-slate-900/95 backdrop-blur-md border-r border-white/10 z-50 transform transition-transform duration-300 ease-in-out">
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">Zion Tech Group</span>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="p-6 space-y-2">
          {navigationItems.map((item) => (
            <div key={item.name}>
              {item.children ? (
                <div>
                  <div className="flex items-center justify-between py-3 px-4 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors">
                    <div className="flex items-center space-x-3">
                      {item.icon}
                      <span className="font-medium">{item.name}</span>
                    </div>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                  
                  <div className="ml-6 space-y-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        to={child.path}
                        onClick={onClose}
                        className="flex items-center space-x-3 py-2 px-4 text-sm text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-colors"
                      >
                        {child.icon}
                        <span>{child.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  to={item.path}
                  onClick={onClose}
                  className="flex items-center space-x-3 py-3 px-4 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                >
                  {item.icon}
                  <span className="font-medium">{item.name}</span>
                </Link>
              )}
            </div>
          ))}
        </nav>

        <div className="absolute bottom-6 left-6 right-6">
          <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-lg p-4">
            <h3 className="text-cyan-400 font-semibold mb-2">Need Help?</h3>
            <p className="text-gray-300 text-sm mb-3">
              Contact our support team for assistance.
            </p>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="text-cyan-400 hover:text-cyan-300 text-sm font-medium"
            >
              kleber@ziontechgroup.com
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
