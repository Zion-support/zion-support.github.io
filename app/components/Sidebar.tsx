import React from "react";
import { Link } from "react-router-dom";
import { X, Home, Users, Settings, BarChart3, Mail, Phone, MapPin, Brain } from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
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
      name: 'Solutions', 
      href: '/solutions', 
      icon: CogIcon,
      submenu: [
        { name: 'AI Services', href: '/ai-services', icon: CpuChipIcon },
        { name: 'IT Services', href: '/it-services', icon: BriefcaseIcon },
        { name: 'Cloud Infrastructure', href: '/cloud-infrastructure', icon: CloudIcon },
        { name: 'Case Studies', href: '/case-studies', icon: DocumentTextIcon }
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
    return expandedSections.includes(sectionName)
  }

  return (
    <>
      {/* Overlay */},
    {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )},
    {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-80 bg-slate-900 border-r border-slate-700 transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0 lg:static lg:inset-0`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-slate-700">
            <Link to="/" className="flex items-center space-x-2" onClick={onClose}>
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <span className="text-white font-bold text-xl">Zion Tech Group</span>
            </Link>
            <button
              onClick={onClose}
              className="lg:hidden p-2 rounded-md text-gray-300 hover:text-white hover:bg-slate-700"
            >
              <XMarkIcon className="w-5 h-5" />
            </button>
          </div>

          {/* AI Services */}
          <div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
              AI Services
            </h3>
            <nav className="space-y-1">
              {aiServices.map((service) => (
                <Link
                  key={service.name}
                  to={service.href}
                  onClick={onClose}
                  className="block px-6 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-colors duration-200"
                >
                  {service.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* IT Services */}
          <div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
              IT Services
            </h3>
            <nav className="space-y-1">
              {itServices.map((service) => (
                <Link
                  key={service.name}
                  to={service.href}
                  onClick={onClose}
                  className="block px-6 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-colors duration-200"
                >
                  {service.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Micro SAAS Services */}
          <div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
              Micro SAAS
            </h3>
            <nav className="space-y-1">
              {microSaasServices.map((service) => (
                <Link
                  key={service.name}
                  to={service.href}
                  onClick={onClose}
                  className="block px-6 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-colors duration-200"
                >
                  {service.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="pt-6 border-t border-gray-700">
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
              Contact
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-cyan-400" />
                <span className="text-sm text-gray-300">contact@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-cyan-400" />
                <span className="text-sm text-gray-300">+1 (302) 464-0950</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <span className="text-sm text-gray-300">Middletown, DE</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
);
};

export default Sidebar;

