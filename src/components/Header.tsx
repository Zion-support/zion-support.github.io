
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)};
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll)}, []);


    { name: 'Home', href: '/' }, { name: 'About', href: '/about' }, { name: 'Services', href: '/services' }, { name: 'Solutions', href: '/solutions' }, { name: 'Team', href: '/team' }, { name: 'Careers', href: '/careers' }, { name: 'Blog', href: '/blog' }, { name: 'Contact', href: '/contact' }

  ];



      scrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


        <div className="flex justify-between items-center py-4">
          {/* Logo */}"
          <div className="flex items-center">"
            <Link href="/" className="flex items-center space-x-2">"
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">"
                <span className="text-white font-bold text-sm">Z</span>
              </div>"
              <span className="text-xl font-bold text-gray-900">Zion Tech Group</span>
            </Link>
          </div>


            {navigation.map((item) => (

                className={`text-sm font-medium transition-colors ${
                  router.pathname === item.href`
                    ? 'text-blue-600''
                    : 'text-gray-700 hover:text-blue-600''
                }`}

              >

                {item.name}
              </Link>
            ))}
          </nav>

          {/* Search and Contact */}`
          <div className="hidden md: flex items-center space-x-4">"
            <form onSubmit={handleSearch} className="relative">

                className="w-64 px-4 py-2 pl-10 text-sm border border-gray-300 rounded-lg focus: outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"

              />

              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            </form>"
            <div className="flex items-center space-x-2 text-sm text-gray-600">"
              <Phone className="h-4 w-4" />
              <span>+1 (555) 123-4567</span>
            </div>

          </div>

          {/* Mobile menu button */}


            className="md: hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
          >

            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}

          </button>
        </div>


            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              {navigation.map((item) => (
                <Link key={item.name} href={item.href} className={`block px-3 py-2 text-base font-medium rounded-md ${ router.pathname === item.href ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover: text-blue-600 hover:bg-gray-50' }`} onClick={() => setMobileMenuOpen(false)}

                >
                  {item.name}
                </Link>
              ))}

                  <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                </form>
              </div>"
              <div className="px-3 py-2 flex items-center space-x-2 text-sm text-gray-600">"
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>

              </div>
            </div>
          </div>
        )}
      </nav>
    </header>





