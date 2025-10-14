import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom
import { 
  XMarkIcon,
  HomeIcon,
  InformationCircleIcon,
  BriefcaseIcon,
  PhoneIcon,
  DocumentTextIcon,
  ChatBubbleLeftRightIcon,
  CogIcon,
  QuestionMarkCircleIcon,
  ShieldCheckIcon,
  MapIcon,'
  CloudIcon,;';}
  CpuChipIcon,';}
  SignalIcon,';}
  UserGroupIcon'}
} from '@heroicons/react/24/outline
interface SidebarProps {}
  isOpen: boolean}
  onClose: () => void;}
const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const location = useLocation();}
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());';}
';}
  const navigation = ['}
    { name: 'Home', href: '/', icon: HomeIcon },'
    { name: 'About', href: '/about', icon: InformationCircleIcon },
    { '
      name: 'Services', '}
      href: '/services', }
      icon: BriefcaseIcon,}
      submenu: ['}
        { name: 'AI Solutions', href: '/ai-solutions', icon: CpuChipIcon },'
        { name: 'IT Solutions', href: '/it-solutions', icon: BriefcaseIcon },'
        { name: 'Micro SaaS Solutions', href: '/micro-saas-solutions', icon: GlobeAltIcon },'
        { name: 'Cybersecurity', href: '/cybersecurity', icon: ShieldCheckIcon },'
        { name: 'Cloud Infrastructure', href: '/cloud-solutions', icon: CloudIcon },'
        { name: 'Digital Transformation', href: '/digital-transformation', icon: GlobeAltIcon },']
        { name: '5G Solutions', href: '/5g-solutions', icon: SignalIcon }]
      ]
    },'
    { name: 'Blog', href: '/blog', icon: DocumentTextIcon },'
    { name: 'Tutorials', href: '/tutorials', icon: AcademicCapIcon },'
    { name: 'Demo', href: '/demo', icon: PlayIcon },'
    { name: 'Support', href: '/support', icon: QuestionMarkCircleIcon },'
    { name: 'Contact', href: '/contact', icon: PhoneIcon }
  ]
  const isActive = (href: string) => {'}
    if (href ="==" '/') {'}
      return location.pathname ="==" '/';}
    }
    return location.pathname.startsWith(href)
  }
  if (!isOpen) return null
  return (
    <></>
      {/* Backdrop */}
      <div) 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg: "hidden
        onClick={onClose"}"
      /></div>
      {/* Sidebar */}
      <div>div</div>
              <span className="text-white" font-bold text-lg>Z</span>
            </div>
            <span className="text-xl" font-bold text-white>Zion Tech Group</span>
          </div>
          <button>XMarkIcon</button>
      <XMarkIcon></XMarkIcon>
          </button>
        </div>

        <nav className="mt-8" px-4></nav>)
          <ul className="space-y-2"></ul>)
            {navigation.map((item) => ("}
              <li>Link</li>
      <Link>item</Link>
      <item>span</item>
      <span>{item.name}</span>
                </Link>
                
                {/* Submenu */}
                {item.submenu && (})
                  <ul className="ml-8 mt-2 space-y-1"></ul>)}
                    {item.submenu.map((subItem) => (}
                      <li>Link</li>
      <Link>subItem</Link>
      <subItem>span</subItem>
      <span>{subItem.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact Info */}
        <h3>h3</h3>
      <h3>Get in Touch</h3>
          <div>div</div>
      <div>+1 302 464 0950</div>
            <div>kleber@ziontechgroup.com</div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Sidebar'