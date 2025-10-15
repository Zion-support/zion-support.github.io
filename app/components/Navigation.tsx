import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  Bars3Icon,
  XMarkIcon,
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
  UserGroupIcon,
  ChatBubbleLeftRightIcon,
  EyeIcon,
  ChartBarIcon,
  WifiIcon,
  CheckCircleIcon,
  CircleStackIcon,
  AdjustmentsHorizontalIcon,
  RocketLaunchIcon,
  CodeBracketIcon,
  ServerIcon,
  WrenchScrewdriverIcon,
  HandRaisedIcon
} from '@heroicons/react/24/outline'

interface NavigationProps {
  onSidebarToggle?: () => void
}

const Navigation: React.FC<NavigationProps> = ({ onSidebarToggle }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false)
  const [isResourcesOpen, setIsResourcesOpen] = useState(false)
  const [isCompanyOpen, setIsCompanyOpen] = useState(false)
  const location = useLocation()

  const navigation = [
    { name: 'Home', href: '/', icon: HomeIcon },
    { name: 'About', href: '/about', icon: InformationCircleIcon },
    { name: 'Services', href: '/services', icon: BriefcaseIcon },
    { name: 'Contact', href: '/contact', icon: PhoneIcon },
    { name: 'Blog', href: '/blog', icon: DocumentTextIcon },
    { name: 'Tutorials', href: '/tutorials', icon: AcademicCapIcon },
    { name: 'Demo', href: '/demo', icon: PlayIcon },
    { name: 'Support', href: '/support', icon: QuestionMarkCircleIcon },
  ]

  const services = [
    { name: 'AI Solutions', href: '/ai-solutions', icon: CpuChipIcon },
    { name: 'Cybersecurity', href: '/cybersecurity', icon: ShieldCheckIcon },
    { name: 'Cloud Infrastructure', href: '/cloud-infrastructure', icon: CloudIcon },
    { name: 'Digital Transformation', href: '/digital-transformation', icon: RocketLaunchIcon },
    { name: 'Micro SaaS Solutions', href: '/micro-saas-solutions', icon: CogIcon },
    { name: 'IT Solutions', href: '/it-solutions', icon: ServerIcon },
  ]

  const solutions = [
    { name: '5G Solutions', href: '/5g-solutions', icon: SignalIcon },
    { name: 'Blockchain', href: '/blockchain', icon: CircleStackIcon },
    { name: 'AR/VR Platform', href: '/ar-vr-platform', icon: EyeIcon },
    { name: 'Automation', href: '/automation', icon: AdjustmentsHorizontalIcon },
  ]

  const resources = [
    { name: 'Case Studies', href: '/case-studies', icon: ChartBarIcon },
    { name: 'Documentation', href: '/docs', icon: DocumentTextIcon },
    { name: 'API Docs', href: '/api-docs', icon: CodeBracketIcon },
    { name: 'Partnerships', href: '/partnerships', icon: HandRaisedIcon },
  ]

  const company = [
    { name: 'Team', href: '/team', icon: UserGroupIcon },
    { name: 'Careers', href: '/careers', icon: BriefcaseIcon },
    { name: 'Privacy', href: '/privacy', icon: ShieldCheckIcon },
    { name: 'Terms', href: '/terms', icon: DocumentTextIcon },
  ]

  const isActive = (path: string) => location.pathname === path

  return (
    <nav className="bg-slate-900 border-b border-slate-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <div className="h-8 w-8 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">Z</span>
              </div>
              <span className="ml-2 text-white font-bold text-xl">Zion Tech Group</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            <div className="relative group">
              <button
                className="flex items-center text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                Services
                <ChevronDownIcon className="ml-1 h-4 w-4" />
              </button>
              {isServicesOpen && (
                <div
                  className="absolute top-full left-0 mt-1 w-64 bg-slate-800 rounded-md shadow-lg py-1 z-50"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      to={service.href}
                      className="flex items-center px-4 py-2 text-sm text-gray-300 hover:bg-slate-700 hover:text-white transition-colors"
                    >
                      <service.icon className="mr-3 h-4 w-4" />
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="relative group">
              <button
                className="flex items-center text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                onMouseEnter={() => setIsSolutionsOpen(true)}
                onMouseLeave={() => setIsSolutionsOpen(false)}
              >
                Solutions
                <ChevronDownIcon className="ml-1 h-4 w-4" />
              </button>
              {isSolutionsOpen && (
                <div
                  className="absolute top-full left-0 mt-1 w-64 bg-slate-800 rounded-md shadow-lg py-1 z-50"
                  onMouseEnter={() => setIsSolutionsOpen(true)}
                  onMouseLeave={() => setIsSolutionsOpen(false)}
                >
                  {solutions.map((solution) => (
                    <Link
                      key={solution.name}
                      to={solution.href}
                      className="flex items-center px-4 py-2 text-sm text-gray-300 hover:bg-slate-700 hover:text-white transition-colors"
                    >
                      <solution.icon className="mr-3 h-4 w-4" />
                      {solution.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="relative group">
              <button
                className="flex items-center text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                onMouseEnter={() => setIsResourcesOpen(true)}
                onMouseLeave={() => setIsResourcesOpen(false)}
              >
                Resources
                <ChevronDownIcon className="ml-1 h-4 w-4" />
              </button>
              {isResourcesOpen && (
                <div
                  className="absolute top-full left-0 mt-1 w-64 bg-slate-800 rounded-md shadow-lg py-1 z-50"
                  onMouseEnter={() => setIsResourcesOpen(true)}
                  onMouseLeave={() => setIsResourcesOpen(false)}
                >
                  {resources.map((resource) => (
                    <Link
                      key={resource.name}
                      to={resource.href}
                      className="flex items-center px-4 py-2 text-sm text-gray-300 hover:bg-slate-700 hover:text-white transition-colors"
                    >
                      <resource.icon className="mr-3 h-4 w-4" />
                      {resource.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="relative group">
              <button
                className="flex items-center text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                onMouseEnter={() => setIsCompanyOpen(true)}
                onMouseLeave={() => setIsCompanyOpen(false)}
              >
                Company
                <ChevronDownIcon className="ml-1 h-4 w-4" />
              </button>
              {isCompanyOpen && (
                <div
                  className="absolute top-full left-0 mt-1 w-64 bg-slate-800 rounded-md shadow-lg py-1 z-50"
                  onMouseEnter={() => setIsCompanyOpen(true)}
                  onMouseLeave={() => setIsCompanyOpen(false)}
                >
                  {company.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="flex items-center px-4 py-2 text-sm text-gray-300 hover:bg-slate-700 hover:text-white transition-colors"
                    >
                      <item.icon className="mr-3 h-4 w-4" />
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {navigation.slice(0, 4).map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? 'text-white bg-slate-800'
                    : 'text-gray-300 hover:text-white hover:bg-slate-800'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2 rounded-md"
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800 rounded-lg mt-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isActive(item.href)
                      ? 'text-white bg-slate-700'
                      : 'text-gray-300 hover:text-white hover:bg-slate-700'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <item.icon className="mr-3 h-5 w-5" />
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation