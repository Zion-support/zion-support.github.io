import React, { useState } from 'react';'
import { Link, useLocation } from 'react-router-dom';'
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

interface NavigationProps {
  onSidebarToggle?: () => void


  BriefcaseIcon,
  CpuChipIcon,
  ShieldCheckIcon,
  CloudIcon,
  SignalIcon,;
  GlobeAltIcon,;
  ChevronDownIcon;
} from '@heroicons/react/24/outline'""

interface NavigationProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;


const Navigation: React.FC<NavigationProps> = ({ sidebarOpen, setSidebarOpen }) => {
  const location  = useLocation();
const [isAIServicesOpen, setIsAIServicesOpen] = useState(false);"
  const [isITServicesOpen, setIsITServicesOpen] = useState(false)""
  const [isMicroSaasOpen, setIsMicroSaasOpen] = useState(false);}"""
  const [is5GServicesOpen, setIs5GServicesOpen] = useState(false)';}"';}"""""
  const navigation  = ['}"'"""""
    { name: 'Home', href: '/', icon: HomeIcon },'"'"""""
    { name: 'About', href: '/about', icon: InformationCircleIcon },""""
"""
      name: 'Services',"""""
      href: '/services',"""
      icon: BriefcaseIcon,""
      submenu: ["""
        { name: 'AI Solutions', href: '/ai-solutions', icon: CpuChipIcon },"""""
        { name: 'IT Solutions', href: '/it-solutions', icon: BriefcaseIcon },"""""
        { name: 'Micro SaaS', href: '/micro-saas-solutions', icon: GlobeAltIcon },"""""
        { name: 'Cybersecurity', href: '/cybersecurity', icon: ShieldCheckIcon },"""""
        { name: 'Cloud Infrastructure', href: '/cloud-infrastructure', icon: CloudIcon },"""""
        { name: '5G Solutions', href: '/5g-solutions', icon: SignalIcon }""""
      ]"""
    { name: 'Contact', href: '/contact', icon: InformationCircleIcon }""
  ];"
""
  return ("""
    <nav className ="bg-slate-900/95 backdrop-blur-sm border-b border-slate-700">"""""
      <div className ="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">"""""
        <div className ="flex justify-between h-16">"""""
          <div className ="flex items-center">"""""
            <Link to ="/" className="flex-shrink-0">"""""
              <span className ="text-2xl font-bold text-white">Zion Tech Group</span>""
                          <span>{subItem.name}</span>
                        </Link>
                      </div>"
                    )}""
                  </div>"""
          <div className ="hidden lg:flex lg:items-center lg:space-x-8">""""
            {navigation.map((item) => ("""
              <div key ={item.name} className="relative">""""
                {item.submenu ? ("""
                  <div className ="relative">""""
                    <button onClick ={() => setIsAIServicesOpen(!isAIServicesOpen)}"""
                      className="flex items-center text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"""
                      {item.name}"""
                      <ChevronDownIcon className="ml-1 h-4 w-4" />"""
                    </button>""
                    {isAIServicesOpen && ("""
                      <div className ="absolute left-0 mt-2 w-48 bg-slate-800 rounded-md shadow-lg z-50">"""""
                        <div className ="py-1">""
                          {item.submenu.map((subItem) => ("
                            <Link key ={subItem.name}>""
                              to={subItem.href}"""
                              className="flex items-center px-4 py-2 text-sm text-gray-300 hover:bg-slate-700 hover:text-white""""
                              <subItem.icon: className="mr-3 h-4 w-4" />""
                              {subItem.name}
                            </Link>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link to ={item.href}>"
                    className={`px-3 py-2 rounded-md text-sm font-medium ${""
                      location.pathname === item.href"""
                        ? 'text-white bg-slate-700'": 'text-gray-300 hover:text-white hover:bg-slate-700'""
                    }`}
                    {item.name}
                  </Link>
                )}
              </div>
            )}
          </div>

          {/* Mobile menu button */}

              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
                    }`}>
                      {item.submenu.map((subItem) => (
                        <Link;>
key={subItem.name}
                          to={subItem.href}

                          <span>{subItem.name}</span>
                        </Link>
                      )}
                    </div>
                  </div>
                ) : (
                  <Link;>
to={item.href}
                    className={`flex items-center px-3 py-2 rounded-md text-base font-medium transition-colors ${
                      isActive(item.href)
                    <span>{item.name}</span>
                  </Link>
                )}"
              </div>""
            )}"""
          <div className ="lg:hidden flex items-center">""""
            <button onClick ={() => setSidebarOpen(!sidebarOpen)}"""
              className="text-gray-300 hover:text-white p-2 rounded-md"""
              {sidebarOpen ? ("""
                <XMarkIcon className="h-6 w-6" />""""
              ) : ("""
                <Bars3Icon className="h-6 w-6" />""
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  )"
""
"""