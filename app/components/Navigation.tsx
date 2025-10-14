import React, { useState } from 'react''
import { Link, useLocation } from 'react-router-dom'
import {
  Menu
  X
  Brain
  Shield
  Zap
  Globe
  ChevronDown'
} from 'lucide-react'
interface NavigationProps {
  onSidebarToggle: () => void
}
const Navigation: React.FC<NavigationProps> = ({ onSidebarToggle }) => {
  const location = useLocation()
  const [isAIServicesOpen, setIsAIServicesOpen] = useState(false)
  const [isITServicesOpen, setIsITServicesOpen] = useState(false)
  const [isMicroSaasOpen, setIsMicroSaasOpen] = useState(false)
  const [is5GServicesOpen, setIs5GServicesOpen] = useState(false)
  const navigation = ['
    { name: 'Home', href: '/', icon: HomeIcon }'
    { name: 'About', href: '/about', icon: InformationCircleIcon }
    {'
      name: 'Services''
      href: '/services'
      icon: BriefcaseIcon
      submenu: ['
        { name: 'AI Solutions', href: '/ai-solutions', icon: CpuChipIcon }'
        { name: 'IT Solutions', href: '/it-solutions', icon: BriefcaseIcon }'
        { name: 'Micro SaaS', href: '/micro-saas-solutions', icon: GlobeAltIcon }'
        { name: 'Cybersecurity', href: '/cybersecurity', icon: ShieldCheckIcon }'
        { name: 'Cloud Infrastructure', href: '/cloud-infrastructure', icon: CloudIcon }'
        { name: '5G Solutions', href: '/5g-solutions', icon: SignalIcon }
      ]
    }
    {'
      name: 'Solutions''
      href: '/solutions'
      icon: CogIcon
      submenu: ['
        { name: 'AI Services', href: '/ai-services', icon: CpuChipIcon }'
        { name: 'IT Services', href: '/it-services', icon: BriefcaseIcon }'
        { name: 'Cloud Infrastructure', href: '/cloud-infrastructure', icon: CloudIcon }'
        { name: 'Case Studies', href: '/case-studies', icon: DocumentTextIcon }
      ]
    }'
    { name: 'Pricing', href: '/pricing', icon: CurrencyDollarIcon }'
    { name: 'Blog', href: '/blog', icon: DocumentTextIcon }'
    { name: 'Tutorials', href: '/tutorials', icon: AcademicCapIcon }'
    { name: 'Demo', href: '/demo', icon: PlayIcon }'
    { name: 'Support', href: '/support', icon: QuestionMarkCircleIcon }'
    { name: 'Contact', href: '/contact', icon: PhoneIcon }
  ]
  const isActive = (path: string) => {
    return location.pathname === path
  }
  const itServices = ['
    { name: 'Cloud Infrastructure', href: '/cloud-infrastructure', icon: <Cloud className="w-4 h-4" /> }'"
    { name: 'Cybersecurity', href: '/cybersecurity', icon: <Shield className="w-4 h-4" /> }'"
    { name: 'Web Development', href: '/web-development', icon: <Globe className="w-4 h-4" /> }'"
    { name: 'Mobile Development', href: '/mobile-development', icon: <Smartphone className="w-4 h-4" /> }'"
    { name: 'Database Management', href: '/database-management', icon: <Database className="w-4 h-4" /> }'"
    { name: 'Network Infrastructure', href: '/network-infrastructure', icon: <Network className="w-4 h-4" /> }
  ]
  const microSaasServices = ['"
    { name: 'Zion Analytics Pro', href: '/zion-analytics-pro', icon: <BarChart3 className="w-4 h-4" /> }'"
    { name: 'Zion Security Shield', href: '/zion-security-shield', icon: <Shield className="w-4 h-4" /> }'"
    { name: 'Zion Cloud Vault', href: '/zion-cloud-vault', icon: <Cloud className="w-4 h-4" /> }'"
    { name: 'Zion Content Studio', href: '/zion-content-studio', icon: <FileText className="w-4 h-4" /> }
  ]
  const fiveGServices = ['"
    { name: '5G Implementation', href: '/5g-implementation', icon: <Cpu className="w-4 h-4" /> }'"
    { name: '5G Edge Computing', href: '/5g-edge-computing', icon: <Zap className="w-4 h-4" /> }'"
    { name: '5G IoT Solutions', href: '/5g-iot-solutions', icon: <Wifi className="w-4 h-4" /> }'"
    { name: '5G Smart City', href: '/5g-smart-city-solutions', icon: <Building2 className="w-4 h-4" /> }
  ]
  return ("
    <nav className="bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50 sticky top-0 z-50">"
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">"
        <div className="flex justify-between items-center h-16">
          {/* Logo */}"
          <div className="flex items-center">"
            <Link to="/" className="flex items-center space-x-2">"
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg flex items-center justify-center">"
                <span className="text-white font-bold text-lg">Z</span>
              </div>"
              <span className="text-white font-bold text-xl">Zion Tech Group</span>
            </Link>
          </div>

          {/* Desktop Navigation */}"
          <div className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => {
              const Icon = item.icon
              return ("
                <div key={item.name} className="relative group">
                  <Link
                    to={item.href}
                    className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive(item.href)'
                        ? 'bg-purple-600 text-white''
                        : 'text-gray-300 hover:text-white hover:bg-slate-800'
                    }`}
                    onMouseEnter={() => item.submenu && setIsServicesOpen(true)}
                    onMouseLeave={() => item.submenu && setIsServicesOpen(false)}
                  >"
                    <Icon className="w-4 h-4" />
                    <span>{item.name}</span>"
                    {item.submenu && <ChevronDownIcon className="w-4 h-4 ml-1" />}
                  </Link>
                  
                  {/* Dropdown Menu */}
                  {item.submenu && isServicesOpen && ("
                    <div className="absolute left-0 mt-2 w-48 bg-slate-800 rounded-md shadow-lg py-1 z-50">
                      {item.submenu.map((subItem) => (
                        <Link key={subItem.name}
                          to={subItem.href}"
                          className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-slate-700"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          {/* CTA Button */}"
          <div className="hidden lg:flex items-center space-x-4">
            <Link"
              to="/contact""
              className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}"
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={onSidebarToggle}"
              className="p-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-md transition-all duration-300"
            >"
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">"
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )}
export default Navigation'"