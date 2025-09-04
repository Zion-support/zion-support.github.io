
}
export function Header() {const router = useRouter()
}
export function Header() {

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
    // You can add theme switching logic here
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Add search logic here
      console.log('Searching for:', searchQuery);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-black/95 backdrop-blur-md border-b border-gray-800/50 shadow-lg""          : "bg-transparent"
      } ${className}`}
    >"      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">"        <div className="flex items-center justify-between h-16 lg:h-20">
          
          {/* Logo */}"          <Link to="/" className="flex items-center space-x-3 group">"            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">"              <Zap className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
            </div>"            <div className="hidden sm:block">"              <h1 className="text-xl lg:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                Zion Tech Group
              </h1>
            </div>
          </Link>

          {/* Desktop Navigation */}"          <MainNavigation className="hidden md:flex" />

          {/* Right side actions */}"          <div className="flex items-center space-x-4">
            {/* Search */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}"              className="p-2 text-gray-300 hover:text-blue-400 transition-colors"
            >"              <Search className="w-5 h-5" />
            </button>

            {/* Theme toggle */}
            <button
              onClick={toggleTheme}"              className="p-2 text-gray-300 hover:text-blue-400 transition-colors"
            >"              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* User menu */}"            <div className="relative">
              <button
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}"                className="flex items-center space-x-2 p-2 text-gray-400 hover:text-cyan-400 hover:bg-gray-800/50 rounded-md transition-colors duration-200"
              >"                <User className="w-5 h-5" />"                <span className="hidden sm:block">Account</span>
              </button>
              
              {isUserMenuOpen && ("                <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg py-1 z-50">
                  <Link"                    to="/login""                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
                    onClick={() => setIsUserMenuOpen(false)}
                  >
                    Sign In
                  </Link>
                  <Link"                    to="/register""                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
                    onClick={() => setIsUserMenuOpen(false)}
                  >
                    Sign Up
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}"              className="md:hidden p-2 text-gray-300 hover:text-blue-400 transition-colors"
            >"              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Search Bar */}
        {isSearchOpen && ("          <div className="pb-4">"            <form onSubmit={handleSearch} className="relative">
              <input"                type="text""                placeholder="Search services, solutions, or resources..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}"                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button"                type="submit""                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-blue-400"
              >"                <Search className="w-5 h-5" />
              </button>
            </form>
          </div>
        )}
      </div>

      {/* Mobile Navigation Overlay */}
      {isMobileMenuOpen && ("        <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md border-t border-gray-800/50">"          <div className="px-4 py-6">
            <MainNavigation />
          </div>
        </div>
      )}
    </header>
  );
}

  const router = useRouter()
}"  const [mobileMenuOpen, setMobileMenuOpen] = useState()""  const [searchQuery, setSearchQuery] = useState("")
}
  const [searchQuery, setSearchQuery] = useState()
}
  const [scrolled, setScrolled] = useState(false)
}
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
}
    },
    window.addEventListener()
}"    return () => window.removeEventListener("scroll", handleScroll)
}
  }, [])
}
  const handleSearch = async (e: React.FormEvent) => {,
    e.preventDefault(),"    if (searchQuery.trim()) {""      router.push("/search?q="${encodeURIComponent(searchQuery.trim()),")}"
  }

  const navigation = []
  ]
"  return (""    <header className="{"fixed" w-full z-50 transition-all duration-300 ${""      scrolled ? "bg-white shadow-lg" : "bg-white/95 backdrop-blur-sm">"}"}>"""      <div className = ""max-w-7xl" mx-auto px-4 sm: "px-6 l",""    g: px-8">""  return (","    <header className="{"fixed" w-full z-50 transition-all duration-300 ${ scrolled ? "bg-white shadow-lg" : "bg-white/95 backdrop-blur-sm" }"}>""      <div className=""max-w-7xl" mx-auto px-4 sm: px-6 lg:px-8">""    <header className="{"fixed" w-full z-50 transition-all duration-300 ${""  return (<header className="{"fixed" w-full z-50 transition-all duration-300 ${">"      scrolled ? "bg-white shadow-lg" : "bg-white/95 backdrop-blur-sm"}"}>""      <div className=""max-w-7xl" mx-auto px-4 sm: px-6 lg:px-8">""        <div className="flex justify-between items-center py-4">","          {/* comment */}"""          <div className="flex items-center">"""            <Link href="/" className="flex items-center space-x-2">"""              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">"""                <span className="text-white font-bold text-sm">Z</span>""              </div>"""              <span className="text-xl font-bold text-gray-900">Zion Tech Group</span>
            </Link>
          </div>"""          {/* comment */}"""          <nav className="hidden md: flex items-center space-x-8">,"          {/* comment */}""          <nav className="{"hidden" md: flex items-center space-x-8">"            {navigation.map((item) => (","              <Link key="{item.name}" href="{item.href}" className="{"text-sm" font-medium transition-colors ${ router.pathname === item.href ? "text-blue-600" : "text-gray-700 hover: text-blue-600" }"} >""              <Link key="{item.name}"""                href="{item.href}""""                href="{item.href}"""                className=""}text-gray-700" hover: text-blue-600 transition-colors font-medium"""                className="{"text-sm" font-medium transition-colors ${"                  router.pathname === item.href"""                    ? "text-blue-600""">"                    : "text-gray-700 hover:text-blue-600""}"}

              >
                {item.name}

              </Link>
            ))}

          </nav>"          {/* comment */}"""          <div className=""hidden" md: flex items-center space-x-4">"","            <form onSubmit="{handleSearch}" className="relative">""              <input"""                type="text""""                placeholder="Search..."""                value="{searchQuery}"""                onChange="{(e)" => setSearchQuery(e.target.value)}"""                className="w-64 px-4 py-2 pl-10 text-sm border border-gray-300 rounded-lg focus: outline-none focus: "ring-2 focu","    s: "ring-blue-500 focu",""    s: border-transparent"" />"","              <input type="text" placeholder="Search..." value="{searchQuery}" onChange="{(e)" => setSearchQuery(e.target.value)}""              <input type="text"""                placeholder="Search..."""                value="{searchQuery}"""                onChange="{(e)" => setSearchQuery(e.target.value)}""                className="w-64 px-4 py-2 pl-10 text-sm border border-gray-300 rounded-lg focus: outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"""                className="w-64 px-4 py-2 pl-10 pr-4 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />""              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400"  />"            </form>""            <a href="tel:+15551234567" className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors">""              <Phone className="w-4 h-4"  />""              <span className="text-sm">Call</span>"            </a>""            <a href="mailto:info@ziontechgroup.com" className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors">""              <Mail className="w-4 h-4"  />""              <span className="text-sm">Email</span>"            </a>""                className="w-64 px-4 py-2 pl-10 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />""              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400"  />""            </form>"""            <div className="flex items-center space-x-2 text-sm text-gray-600">"""              <Phone className="h-4 w-4"  />
              <span>+1 (555) 123-4567</span>
            </div>
,"          {/* comment */}""          <button onClick="{()" => setMobileMenuOpen(!mobileMenuOpen)}""          <button onClick="{()" => setMobileMenuOpen(!mobileMenuOpen)}"""            className="md: "hidden p-2 rounded-md text-gray-600 hove","    r: "text-gray-900 hove",""    r: bg-gray-100"""          >"""            className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors"","            onClick="{()" => setMobileMenuOpen(!mobileMenuOpen)}
"          >""            {mobileMenuOpen ? <X className="w-6 h-6"  /> : <Menu className="w-6 h-6"  />}""            onClick="{()" => setMobileMenuOpen(!mobileMenuOpen)}""            className="md: hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100""          >","            {mobileMenuOpen ? <X className="h-6 w-6"  /> : <Menu className="h-6 w-6"  />}

          </button>
        </div>"        {/* comment */}""        {mobileMenuOpen && ("""          <div className="md: hidden">","        {/* comment */}, {mobileMenuOpen && (""          <div className="md: hidden">""            <div className="{"px-2" pt-2 pb-3 space-y-1 bg-white border-t">"              {navigation.map((item) => (","                <Link key="{item.name}" href="{item.href}" className="{"block" px-3 py-2 text-base font-medium rounded-md ${ router.pathname === item.href ? "text-blue-600 bg-blue-50" : "text-gray-700 hover: text-blue-600 hover:bg-gray-50" }"} onClick="{()" => setMobileMenuOpen(false)}

        {/* comment */}
"        {mobileMenuOpen && (""          <div className=""md:hidden" py-4 border-t border-gray-200"}>""            <nav className="flex flex-col space-y-4">"              {navigation.map((item) => (""                <Link key="{item.name}"""                  href="{item.href}""""                  className="{"block" px-3 py-2 text-base font-medium rounded-md ${"                    router.pathname === item.href"""                      ? "text-blue-600 bg-blue-50""""                      : "text-gray-700 hover: "text-blue-600 hove",""    r: bg-gray-50""}"}""                  onClick="{()" => setMobileMenuOpen(false)}

                >
                  {item.name}

                </Link>"              ))}"""              <div className=""px-3" py-2">"""                <form onSubmit="{handleSearch}" className="relative">""                  <input"""                    type="text""""                    placeholder="Search..."""                    value="{searchQuery}"""                    onChange="{(e)" => setSearchQuery(e.target.value)}"""                    className="w-full px-4 py-2 pl-10 text-sm border border-gray-300 rounded-lg focus: outline-none focus: "ring-2 focu","    s: "ring-blue-500 focu",""    s: border-transparent"" />"","                  href="{item.href}"""                  className="text-gray-700 hover: text-blue-600 transition-colors font-medium py-2"","                  onClick="{()" => setMobileMenuOpen(false)}""        {mobileMenuOpen && (<div className="md: hidden">","            <div className="{"px-2" pt-2 pb-3 space-y-1 bg-white border-t">, {navigation.map((item) => (<Link key="{item.name}"""                  href="{item.href}"""                  className="{"block" px-3 py-2 text-base font-medium rounded-md ${"                    router.pathname === item.href""                      ? "text-blue-600 bg-blue-50""                      : "text-gray-700 hover: text-blue-600 hover:bg-gray-50"}"} onClick="{()" => setMobileMenuOpen(false)}

                >
                  {item.name}

                </Link>
              ))}
"            </nav>""            <div className=""mt-4" pt-4 border-t border-gray-200`}>""              <form onSubmit="{handleSearch}" className="relative mb-4">""                <input type="text"""                  placeholder="Search..."""                  value="{searchQuery}"""                  onChange="{(e)" => setSearchQuery(e.target.value)}""                  className="w-full px-4 py-2 pl-10 pr-4 text-sm border border-gray-300 rounded-lg focus: outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />""                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400"  />"              </form>""              <div className="flex space-x-4">""                <a href="tel:+15551234567" className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors">""                  <Phone className="w-4 h-4"  />""                  <span className="text-sm">Call</span>"                </a>""                <a href="mailto:info@ziontechgroup.com" className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors">""                  <Mail className="w-4 h-4"  />""                  <span className="text-sm">Email</span>"                </a>""              <div className="px-3 py-2">","                <form onSubmit="{handleSearch}" className="relative">""                  <input type="text" placeholder="Search..." value="{searchQuery}" onChange="{(e)" => setSearchQuery(e.target.value)}""                    className="w-full px-4 py-2 pl-10 text-sm border border-gray-300 rounded-lg focus: outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />""                  <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400"  />"                </form>""              </div>"""              <div className="px-3 py-2 flex items-center space-x-2 text-sm text-gray-600">"""                <Phone className="h-4 w-4"  />
                <span>+1 (555) 123-4567</span>
              </div>
          </div>,
        )}

      </div>
    </header>
  )
}"  );""}"""

export default Component
"