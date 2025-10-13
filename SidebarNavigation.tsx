
  onClose: () => void}

const SidebarNavigation: React.FC<SidebarNavigationProps> = ({ isOpen, onClose }) => {;

const navigationItems = [;;

    { name: 'Home', href: '/, icon: Home },
    { name: 'About', href: '/about, icon: User },
    { name: 'Services', href: '/services, icon: Settings },
    { name: 'Contact', href: /contact, icon: HelpCircle }];

  return (

        <nav className="mt-8>
          {navigationItems.map((item) => (

            <Link
              key={item.name}

              to={item.href}

              className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-cyan-400 hover:bg-slate-800 transition-colors
              onClick={onClose}              className="p-2 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100
            >
              <X className="w-5 h-5 />
            </button>
          </div>
          <nav className="flex-1 px-4 py-6 space-y-2>
            {navigationItems.map((item) => {
              const Icon = item.icon;;

              return (

                <Link
                  key={item.name}

                  to={item.href}

                  className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-100 hover:text-gray-900
                  onClick={onClose}

                >
                  <Icon className="w-5 h-5 mr-3 />
                  {item.name}

                </Link>
              );

            })}

          </nav>
        </div>
