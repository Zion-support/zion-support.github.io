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
  UserGroupIcon
} from '@heroicons/react/24/outline'

interface NavigationProps {
  onSidebarToggle?: () => void
}

const Navigation: React.FC<NavigationProps> = ({ onSidebarToggle }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false)
  const location = useLocation()

  const navigation = [
    { name: 'Home', href: '/', icon: HomeIcon },
    { name: 'About', href: '/about', icon: InformationCircleIcon },
    { name: 'Services', href: '/services', icon: BriefcaseIcon },
    { name: 'Contact', href: '/contact', icon: PhoneIcon },
    { name: 'Blog', href: '/blog', icon: DocumentTextIcon },
    { name: 'Careers', href: '/careers', icon: AcademicCapIcon },
    { name: 'Demo', href: '/demo', icon: PlayIcon },
    { name: 'Support', href: '/support', icon: QuestionMarkCircleIcon }
  ]

  const services = [
    { name: 'AI Solutions', href: '/ai-solutions', icon: CpuChipIcon },
    { name: 'Cybersecurity', href: '/cybersecurity', icon: ShieldCheckIcon },
    { name: 'Cloud Infrastructure', href: '/cloud-infrastructure', icon: CloudIcon },
    { name: 'IT Services', href: '/it-services', icon: CogIcon },
    { name: 'Digital Transformation', href: '/digital-transformation', icon: GlobeAltIcon },
    { name: '5G Solutions', href: '/5g-solutions', icon: SignalIcon }
  ]

  const solutions = [
    { name: 'Enterprise Solutions', href: '/enterprise', icon: UserGroupIcon },
    { name: 'Micro SaaS', href: '/micro-saas', icon: CurrencyDollarIcon },
    { name: 'Custom Development', href: '/custom-software', icon: CogIcon }
  ]

  const isActive = (href: string) => {
    return location.pathname === href
  }

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen)
    if (onSidebarToggle) {
      onSidebarToggle()
    }
  }

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="text-2xl font-bold text-blue-600">
                Zion Tech Group
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`${
                    isActive(item.href)
                      ? 'border-blue-500 text-gray-900'
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
                >
                  <item.icon className="w-4 h-4 mr-2" />
                  {item.name}
                </Link>
              ))}
              
              {/* Services Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="text-gray-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium"
                >
                  Services
                  <ChevronDownIcon className="w-4 h-4 ml-1" />
                </button>
                {isServicesOpen && (
                  <div className="absolute z-10 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        to={service.href}
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        <service.icon className="w-4 h-4 mr-3" />
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Solutions Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
                  className="text-gray-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium"
                >
                  Solutions
                  <ChevronDownIcon className="w-4 h-4 ml-1" />
                </button>
                {isSolutionsOpen && (
                  <div className="absolute z-10 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                    {solutions.map((solution) => (
                      <Link
                        key={solution.name}
                        to={solution.href}
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        <solution.icon className="w-4 h-4 mr-3" />
                        {solution.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
          
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <Link
              to="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium"
            >
              Get Started
            </Link>
          </div>

          <div className="sm:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              {isOpen ? (
                <XMarkIcon className="block h-6 w-6" />
              ) : (
                <Bars3Icon className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`${
                  isActive(item.href)
                    ? 'bg-blue-50 border-blue-500 text-blue-700'
                    : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'
                } block pl-3 pr-4 py-2 border-l-4 text-base font-medium`}
                onClick={() => setIsOpen(false)}
              >
                <item.icon className="w-4 h-4 mr-2 inline" />
                {item.name}
              </Link>
            ))}
            
            {/* Mobile Services */}
            <div className="pl-3 pr-4 py-2">
              <div className="text-sm font-medium text-gray-500 mb-2">Services</div>
              {services.map((service) => (
                <Link
                  key={service.name}
                  to={service.href}
                  className="flex items-center pl-6 pr-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                  onClick={() => setIsOpen(false)}
                >
                  <service.icon className="w-4 h-4 mr-3" />
                  {service.name}
                </Link>
              ))}
            </div>

            {/* Mobile Solutions */}
            <div className="pl-3 pr-4 py-2">
              <div className="text-sm font-medium text-gray-500 mb-2">Solutions</div>
              {solutions.map((solution) => (
                <Link
                  key={solution.name}
                  to={solution.href}
                  className="flex items-center pl-6 pr-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                  onClick={() => setIsOpen(false)}
                >
                  <solution.icon className="w-4 h-4 mr-3" />
                  {solution.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navigation