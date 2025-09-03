
  ChevronRight,
  Home,
  Zap,
  Brain,
  Shield,
  Cloud,
  Cpu,
  Users,
  ShoppingCart,
  BookOpen,
  MessageCircle,
  HelpCircle,
  DollarSign,
  Star,
  Target,
  TrendingUp,
  Award,
  Settings,
  Globe,
  Rocket,
  Heart,
  Lock,
  Database,
  Network,
  Palette,
  Video,
  PenTool,
  Atom,
  Server,
  Smartphone,
  BarChart3,
  Search,
  FileText,
  Calendar,
  Briefcase,
  Info,
  Phone,
  Mail,
  MapPin,
  Building,
  TestTube } from 'lucide-react';


export function Sidebar({ isOpen = false, onClose }) {
  const router = useRouter();


  const [expandedSections, setExpandedSections] = useState(['services', 'solutions']);

  const toggleSection = (sectionName) => {
    setExpandedSections(prev => 
      prev.includes(sectionName);
        ? prev.filter(s => s !== sectionName);
        : [...prev, sectionName]

        { name: 'About', href: '/about', icon: Building }, { name: 'Services', href: '/services', icon: Briefcase }, { name: 'Solutions', href: '/solutions', icon: Target }, { name: 'AI Services', href: '/ai-services', icon: Brain }, { name: 'Case Studies', href: '/case-studies', icon: FileText }, { name: 'Contact', href: '/contact', icon: Mail }, { name: 'Blog', href: '/blog', icon: FileText }
      ]
    }, {'
      title: 'Core Services' ]
    }, {'
      title: 'Resources' { name: 'Documentation', href: '/docs', icon: BookOpen, description: 'Technical Guides' }, { name: 'API Reference', href: '/api', icon: Code, description: 'Developer Resources' }, { name: 'Training', href: '/training', icon: Award, description: 'Skill Development' }, { name: 'Help Center', href: '/help', icon: HelpCircle, description: 'Support Resources' }, { name: 'Search', href: '/search', icon: Search, description: 'Find Content' }, { name: 'Press', href: '/press', icon: Newspaper, description: 'News & Updates' }
      ]
    }, {'
      title: 'Support',
      items: ['
        { nam,
    e: 'Help Center', href: '/support', icon: HelpCircle, description: 'Self-Service Support' }, { name: 'Contact Us', href: '/contact', icon: MessageCircle, description: 'Get in Touch' }, { name: 'Partners', href: '/partners', icon: Users, description: 'Become a Partner' }, { name: 'Careers', href: '/careers', icon: Briefcase, description: 'Join Our Team' }, { name: 'Team', href: '/team', icon: Users, description: 'Meet Our Team' }

      ]
    }
  ]}
    return router.pathname.startsWith(href)};


  return (
    <>

          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />

      )}, {/* Sidebar */}"
      <div className={`

        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">

              <span className="text-white font-bold text-lg">Z</span>
            </div>"
            <span className="text-white font-semibold">Zion Tech</span>
          </div>


            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Navigation */}"
        <div className="flex-1 overflow-y-auto py-4">

              <div className="space-y-1">
                {section.items.map((item, itemIndex) => (
                  <div key={item.name}>

                    {item.href ? (



                            {item.description}
                          </span>
                        )}
                      </Link>
                    ) : (

                      >
                        <div className="flex items-center">

                          <item.icon className="h-4 w-4 mr-3 flex-shrink-0" />
                          <span>{item.name}</span>
                        </div>
                        {expandedSections.includes(item.name.toLowerCase()) ? ("
                          <ChevronDown className="h-4 w-4" />
                        ) : ("
                          <ChevronRight className="h-4 w-4" />

                        )}
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>



              <MessageCircle className="h-3 w-3 mr-1" />

              Get Support
            </Link>
          </div>
        </div>
      </div>


