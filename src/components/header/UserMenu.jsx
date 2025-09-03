
import { User, Settings, LogOut, Bell, MessageSquare, Shield, CreditCard, HelpCircle } from 'lucide-react';


export function UserMenu({user }) {const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false)}
    };


    console.log('Logging out...');
    setIsOpen(false)};


      href: '/profile',
      icon: User,
      description: 'Manage your account'
    },

      href: '/dashboard',
      icon: Settings,
      description: 'View your projects'
    },

      href: '/messages',
      icon: MessageSquare,
      description: 'Check your inbox'
    },

      href: '/notifications',
      icon: Bell,
      description: 'Manage alerts'
    },

      href: '/security',
      icon: Shield,
      description: 'Privacy & security'
    },

      href: '/billing',
      icon: CreditCard,
      description: 'Payment methods'
    },

      href: '/profile',
      icon: User, ""
      description: 'Manage your account',

      href: '/messages',
      icon: MessageSquare, ""
      description: 'Check your inbox',

      href: '/security',
      icon: Shield, ""
      description: 'Privacy & security',



      href: '/help',
      icon: HelpCircle, ""
      description: 'Get support' }
  ];



          {user?.name || user?.email || 'User'}
        </span>
      </button>


                  {user?.email || 'user@example.com'}
                </p>
              </div>
            </div>
          </div>

          {/* Menu Items */}""
          <div className="py-2">
            {menuItems.map((item) => (


                  <p className="text-xs text-zion-slate-light">{item.description}</p>
                </div>
              </Link>
            ))}
          </div>


              <LogOut className="h-4 w-4 mr-3" />

              <span>Sign Out</span>
            </button>
          </div>
        </div>
      )}
    </div>
  )}







