
      name: 'Home',
      href: '/',
      icon: Home
    } ]
    }
  ];

  const handleNavigation = (path) => {onNavigate(path)};

  if (!isOpen) return null;


import { X, ChevronRight, Home, Briefcase, Target, Building, FileText, Video, Mail, Brain, Cloud, Shield, Server, Rocket, Users, HelpCircle, DollarSign } from 'lucide-react';


export function MobileMenu({ isOpen, onClose, user, onNavigate }) {
  const navigationItems = [

      href: '/services',
      icon: Briefcase, children: [""
        { name: 'AI Services', href: '/services/ai', icon: Brain }","
        { name: 'Cloud Solutions', href: '/services/cloud', icon: Cloud }, ""
        { name: 'Cybersecurity', href: '/services/cybersecurity', icon: Shield }","
        { name: 'IT Infrastructure', href: '/services/infrastructure', icon: Server }, ""
        { name: 'Digital Transformation', href: '/services/transformation', icon: Rocket }

      href: '/solutions',
      icon: Target, children: [""
        { name: 'Industry Solutions', href: '/solutions/industry' }, ""
        { name: 'Manufacturing', href: '/solutions/manufacturing' }, ""
        { name: 'Financial Services', href: '/solutions/financial' }, ""
        { name: 'Healthcare', href: '/solutions/healthcare' }, ""
        { name: 'Retail', href: '/solutions/retail' }

      href: '/about',
      icon: Building, children: [""
        { name: 'Company', href: '/about' }, ""
        { name: 'Team', href: '/about/team' }, ""
        { name: 'Careers', href: '/careers' }, ""
        { name: 'Partners', href: '/partners' }

      href: '#',
      icon: FileText, children: [""
        { name: 'Case Studies', href: '/case-studies' }, ""
        { name: 'Research & Development', href: '/research-development' }, ""
        { name: 'Events', href: '/events' }, ""
        { name: 'News', href: '/news' }, ""
        { name: 'Blog', href: '/blog' }, ""
        { name: 'White Papers', href: '/white-papers' }, ""
        { name: 'Webinars', href: '/webinars' }

      href: '/support',
      icon: HelpCircle, children: [""
        { name: 'Help Center', href: '/support' }, ""
        { name: 'Documentation', href: '/docs' }, ""
        { name: 'Training', href: '/training' }, ""
        { name: 'Contact', href: '/contact' }
      ] }
  ];

  const handleNavigation = (path) => {
    onNavigate(path)};

  if (!isOpen) return null;

  return (""
    <div className="lg: hidden fixed inset-0 z-50">
      {/* Overlay */}
      <div ""

        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      /" >"

      

            <X className="h-5 w-5" />

          </button>
        </div>


          <nav className="space-y-1">
            {navigationItems.map((item) => (

                          {child.icon && <child.icon className="h-4 w-4 mr-3" />}

                          <span>{child.name}</span>
                        </Link>
                      ))}
                    </div>
                  </details>
                ) : (


                    <span className="font-medium">{item.name}</span>
                  </Link>
                );
              })}
            </nav>



              >
                Go to Dashboard
              </Link>
            </div>


              >
                Get Started
              </Link>
            </div>

              <DollarSign className="h-4 w-4" />

              <span>Request Quote</span>
            </Link>
          </div>
        </div>
      )}
    </div>







