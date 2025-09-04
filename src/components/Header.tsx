<<<<<<< HEAD
import React, { useState, useEffect } from 'react';';';
import { Link, useLocation } from 'react-router-dom';';';
import { MainNavigation } from './header/MainNavigation';';';
=======
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Zap, Search, Sun, Moon, User, Menu, X, Phone, Mail } from 'lucide-react';
<<<<<<< HEAD
=======
>>>>>>> cursor/test-and-fix-pm2-automations-and-merge-2088
import { Zap, Search, Sun, Moon, User, Menu, X } from 'lucide-react';
>>>>>>> origin/main
=======
>>>>>>> d200903062be89cd2962b930112f6c17412cdf5b

interface HeaderProps {

<<<<<<< HEAD
<<<<<<< HEAD
  className?: string;

}
export function Header(props: any) {const router = useRouter()
}
export function Header(props: any) {

export function Header(props: any) {
  const [isScrolled, setIsScrolled] = useState<any>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<any>(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState<any>(false);';
  const [isSearchOpen, setIsSearchOpen] = useState<any>(false);';';
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');';';
  const [searchQuery, setSearchQuery] = useState<any>('');
=======
<<<<<<< HEAD
export function Header(props: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState<boolean>(false);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [searchQuery, setSearchQuery] = useState<string>('');
=======
=======
>>>>>>> d200903062be89cd2962b930112f6c17412cdf5b
export function Header({ className = '' }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [searchQuery, setSearchQuery] = useState('');
<<<<<<< HEAD
>>>>>>> origin/main
>>>>>>> cursor/test-and-fix-pm2-automations-and-merge-2088
=======
>>>>>>> d200903062be89cd2962b930112f6c17412cdf5b
  const location = useLocation();

  useEffect(() => {
// TODO: Add dependencies if needed

  return () => {
    // Cleanup function
  };
}, []);, []);
const handleScroll = (props: any) => {
      setIsScrolled(window.scrollY > 10);
    };';
';';
    window.addEventListener('scroll', handleScroll);';';
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
';
  const toggleTheme = (props: any) => {';';
    setTheme(theme === 'dark' ? 'light' : 'dark');
    // You can add theme switching logic here
  };

  const handleSearch = (props: any) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Add search logic here
      
    }
  };

<<<<<<< HEAD
=======
  const navigationItems = [
    { name: 'Home', href: '/' },
    { 
      name: 'Services', 
      href: '/services',
      submenu: [
        { name: 'All Services', href: '/services' },
        { name: 'New Services 2025', href: '/new-services-2025' },
        { name: 'AI Services', href: '/ai-services' },
        { name: 'IT Services', href: '/it-services' },
        { name: 'Micro SaaS', href: '/micro-saas' }
      ]
    },
    { name: 'Solutions', href: '/solutions' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ];

>>>>>>> d200903062be89cd2962b930112f6c17412cdf5b
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-black/95 backdrop-blur-md border-b border-gray-800/50 shadow-lg"
          : "bg-transparent"
      } ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm: p x-6 lg: p x-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center group-hover: scal e-110 transition-transform duration-300">
              <Zap className="w-6 h-6 lg:w-7 lg:h-7 text-white"  />
            </div>
            <div className="hidden sm: bloc k">
              <h1 className="text-xl lg: tex t-2xl font-bold text-white group-hover: tex t-blue-400 transition-colors">
                Zion Tech Group
              </h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
<<<<<<< HEAD
<<<<<<< HEAD
          <MainNavigation className="hidden md: fle x"  />
=======
<<<<<<< HEAD
          <MainNavigation className="hidden md:flex" />
=======
          <nav className="hidden md:flex items-center space-x-8">
=======
          <nav className="hidden lg:flex items-center space-x-8">
>>>>>>> d200903062be89cd2962b930112f6c17412cdf5b
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-gray-300 hover:text-cyan-400 transition-colors duration-200 font-medium ${
                  location.pathname === item.href ? 'text-cyan-400' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
<<<<<<< HEAD
>>>>>>> origin/main
>>>>>>> cursor/test-and-fix-pm2-automations-and-merge-2088
=======

          {/* Contact Info - Hidden on small screens */}
          <div className="hidden xl:flex items-center space-x-4 text-sm text-gray-400">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>kleber@ziontechgroup.com</span>
            </div>
          </div>
>>>>>>> d200903062be89cd2962b930112f6c17412cdf5b

          {/* Right side actions */}
          <div className="flex items-center space-x-2 lg:space-x-4">
            {/* Search */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
<<<<<<< HEAD
              className="p-2 text-gray-300 hover: tex t-blue-400 transition-colors"
=======
              className="p-2 text-gray-300 hover:text-blue-400 transition-colors"
              aria-label="Search"
>>>>>>> d200903062be89cd2962b930112f6c17412cdf5b
            >
              <Search className="w-5 h-5"  />
            </button>

            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
<<<<<<< HEAD
              className="p-2 text-gray-300 hover: tex t-blue-400 transition-colors"';
            >';';
              {theme === 'dark' ? <Sun className="w-5 h-5"  /> : <Moon className="w-5 h-5"  />}
=======
              className="p-2 text-gray-300 hover:text-blue-400 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
>>>>>>> d200903062be89cd2962b930112f6c17412cdf5b
            </button>

            {/* User menu */}
            <div className="relative">
              <button
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
<<<<<<< HEAD
                className="flex items-center space-x-2 p-2 text-gray-400 hover: tex t-cyan-400 hover: b g-gray-800/50 rounded-md transition-colors duration-200"
=======
                className="flex items-center space-x-2 p-2 text-gray-400 hover:text-cyan-400 hover:bg-gray-800/50 rounded-md transition-colors duration-200"
                aria-label="User menu"
>>>>>>> d200903062be89cd2962b930112f6c17412cdf5b
              >
                <User className="w-5 h-5"  />
                <span className="hidden sm: bloc k">Account</span>
              </button>
              
              {isUserMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg py-1 z-50">
                  <Link
<<<<<<< HEAD
<<<<<<< HEAD
                    to="/login"
                    className="block px-4 py-2 text-sm text-gray-300 hover: b g-gray-700 hover: tex t-white"
                    onClick={() => setIsUserMenuOpen(false)}
=======
<<<<<<< HEAD
                    to="/login"
                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
                    onClick={() => setIsUserMenuOpen(false)}
=======
=======
>>>>>>> d200903062be89cd2962b930112f6c17412cdf5b
                    to="/dashboard"
                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
                    onClick={() => setIsUserMenuOpen(false)}
                  >
                    Dashboard
                  </Link>
                  <Link
                    to="/login"
                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
<<<<<<< HEAD
>>>>>>> origin/main
>>>>>>> cursor/test-and-fix-pm2-automations-and-merge-2088
=======
                    onClick={() => setIsUserMenuOpen(false)}
>>>>>>> d200903062be89cd2962b930112f6c17412cdf5b
                  >
                    Sign In
                  </Link>
                  <Link
<<<<<<< HEAD
                    to="/register"
                    className="block px-4 py-2 text-sm text-gray-300 hover: b g-gray-700 hover: tex t-white"
=======
                    to="/contact"
                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
>>>>>>> d200903062be89cd2962b930112f6c17412cdf5b
                    onClick={() => setIsUserMenuOpen(false)}
                  >
                    Sign Up
                  </Link>
                    </div>
  );
}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
<<<<<<< HEAD
              className="md: hidden p-2 text-gray-300 hover: tex t-blue-400 transition-colors"
=======
              className="lg:hidden p-2 text-gray-300 hover:text-blue-400 transition-colors"
              aria-label="Toggle mobile menu"
>>>>>>> d200903062be89cd2962b930112f6c17412cdf5b
            >
              {isMobileMenuOpen ? <X className="w-6 h-6"  /> : <Menu className="w-6 h-6"  />}
            </button>
          </div>
        </div>

<<<<<<< HEAD
<<<<<<< HEAD
        {/* Search Bar */}
        {isSearchOpen && (
          <div className="pb-4">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search services, solutions, or resources..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus: outlin e-none focus: rin g-2 focus: rin g-blue-500 focus: borde r-transparent"
              />
              <button
                type="submit"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover: tex t-blue-400"
              >
                <Search className="w-5 h-5"  />
              </button>
=======
<<<<<<< HEAD
        {/* Search Bar */}
        {isSearchOpen && (
          <div className="pb-4">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search services, solutions, or resources..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-blue-400"
              >
                <Search className="w-5 h-5" />
              </button>
=======
=======
>>>>>>> d200903062be89cd2962b930112f6c17412cdf5b
        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-900/95 backdrop-blur-md rounded-lg mt-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 text-base font-medium text-gray-300 hover:text-cyan-400 hover:bg-gray-800 rounded-md transition-colors duration-200 ${
                    location.pathname === item.href ? 'text-cyan-400 bg-gray-800' : ''
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile Contact Info */}
              <div className="border-t border-gray-800 pt-3 mt-3 px-3">
                <div className="text-sm text-gray-400 space-y-2">
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4" />
                    <a href="tel:+13024640950" className="hover:text-cyan-400">+1 302 464 0950</a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4" />
                    <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400">kleber@ziontechgroup.com</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Search overlay */}
        {isSearchOpen && (
          <div className="absolute top-full left-0 right-0 bg-gray-900/95 backdrop-blur-md border-t border-gray-800/50 p-4">
            <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search services, solutions, or help..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 pl-10 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
                <Search className="absolute left-3 top-3.5 w-4 h-4 text-gray-400" />
                <button
                  type="submit"
                  className="absolute right-2 top-2 bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-1.5 rounded-md font-semibold transition-colors"
                >
                  Search
                </button>
              </div>
<<<<<<< HEAD
>>>>>>> origin/main
>>>>>>> cursor/test-and-fix-pm2-automations-and-merge-2088
=======
>>>>>>> d200903062be89cd2962b930112f6c17412cdf5b
            </form>
          </div>
        )
      )}
    </div>
  );
}
      </div>
<<<<<<< HEAD
<<<<<<< HEAD

      {/* Mobile Navigation Overlay */}
      {isMobileMenuOpen && (
        <div className="md: hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md border-t border-gray-800/50">
          <div className="px-4 py-6">
            <MainNavigation  />
          </div>
            </div>
  );
}
=======
<<<<<<< HEAD

      {/* Mobile Navigation Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md border-t border-gray-800/50">
          <div className="px-4 py-6">
            <MainNavigation />
          </div>
        </div>
      )}
=======
>>>>>>> origin/main
>>>>>>> cursor/test-and-fix-pm2-automations-and-merge-2088
=======
>>>>>>> d200903062be89cd2962b930112f6c17412cdf5b
    </header>
  );
}
const router = useRouter()
}
  const [mobileMenuOpen, setMobileMenuOpen] = useState()"
  const [searchQuery, setSearchQuery] = useState<any>("")
}
  const [searchQuery, setSearchQuery] = useState()
}
  const [scrolled, setScrolled] = useState<any>(false)
}
  useEffect(() => {
    const handleScroll = (props: any) => {
      setScrolled(window.scrollY > 50)
}
    },
    window.addEventListener()
}
    return () => window.removeEventListener("scroll", handleScroll)
}
  }, [])
}
  const handleSearch = async (e: Reac t.FormEvent) => {,
    e.preventDefault(),
    if (searchQuery.trim()) {"
      router.push("/search?q="${encodeURIComponent(searchQuery.trim()),")}"
  }

  const navigation = []
  ]

  return ("
    <header className="{"fixed" w-full z-50 transition-all duration-300 ${"
      scrolled ? "bg-white shadow-lg" : "bg-white/95 backdrop-blur-sm">
}"}>""
      <div className = ""max-w-7xl" mx-auto px-4 sm: p x-6 l,"
    g: p x-8">"
  return (",
    <header className="{"fixed" w-full z-50 transition-all duration-300 ${ scrolled ? "bg-white shadow-lg" : "bg-white/95 backdrop-blur-sm" }"}>"
      <div className=""max-w-7xl" mx-auto px-4 sm: p x-6 lg: p x-8">"
    <header className="{"fixed" w-full z-50 transition-all duration-300 ${"
  return (<header className="{"fixed" w-full z-50 transition-all duration-300 ${">
      scrolled ? "bg-white shadow-lg" : "bg-white/95 backdrop-blur-sm"}"}>"
      <div className=""max-w-7xl" mx-auto px-4 sm: p x-6 lg: p x-8">"
        <div className="flex justify-between items-center py-4">",
          {/* comment */}""
          <div className="flex items-center">""
            <Link href="/" className="flex items-center space-x-2">""
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">""
                <span className="text-white font-bold text-sm">Z</span>"
              </div>""
              <span className="text-xl font-bold text-gray-900">Zion Tech Group</span>
            </Link>
          </div>
"
          {/* comment */}""
          <nav className="hidden md: flex items-center space-x-8">,
          {/* comment */}"
          <nav className="{"hidden" md: flex items-center space-x-8">
            {navigation.map((item) => (",
              <Link key="{item.name}" href="{item.href}" className="{"text-sm" font-medium transition-colors ${ router.pathname === item.href ? "text-blue-600" : "text-gray-700 hover: tex t-blue-600" }"} >"
              <Link key="{item.name}""
                href="{item.href}"""
                href="{item.href}""
                className=""}text-gray-700" hover: tex t-blue-600 transition-colors font-medium""
                className="{"text-sm" font-medium transition-colors ${
                  router.pathname === item.href""
                    ? "text-blue-600""">
                    : "text-gray-700 hover: tex t-blue-600""}"}

              >
                {item.name}

              </Link>
            ))}

          </nav>
          {/* comment */}""
          <div className=""hidden" md: flex items-center space-x-4">"",
            <form onSubmit="{handleSearch}" className="relative">"
              <input""
                type="text"""
                placeholder="Search...""
                value="{searchQuery}""
                onChange="{(e)" => setSearchQuery(e.target.value)}""
                className="w-64 px-4 py-2 pl-10 text-sm border border-gray-300 rounded-lg focus: outlin e-none focus: rin g-2 focu,
    s: rin g-blue-500 focu,"
    s: borde r-transparent"" />"",
              <input type="text" placeholder="Search..." value="{searchQuery}" onChange="{(e)" => setSearchQuery(e.target.value)}"
              <input type="text""
                placeholder="Search...""
                value="{searchQuery}""
                onChange="{(e)" => setSearchQuery(e.target.value)}"
                className="w-64 px-4 py-2 pl-10 text-sm border border-gray-300 rounded-lg focus: outlin e-none focus: rin g-2 focus: rin g-blue-500 focus: borde r-transparent""
                className="w-64 px-4 py-2 pl-10 pr-4 text-sm border border-gray-300 rounded-lg focus: outlin e-none focus: rin g-2 focus: rin g-blue-500 focus: borde r-transparent" />"
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400"   />
            </form>"
            <a href="tel:+15551234567" className="flex items-center space-x-1 text-gray-700 hover: tex t-blue-600 transition-colors">"
              <Phone className="w-4 h-4"   />"
              <span className="text-sm">Call</span>
            </a>"
            <a href="mailto: inf o@ziontechgroup.com" className="flex items-center space-x-1 text-gray-700 hover: tex t-blue-600 transition-colors">"
              <Mail className="w-4 h-4"   />"
              <span className="text-sm">Email</span>
            </a>"
                className="w-64 px-4 py-2 pl-10 text-sm border border-gray-300 rounded-lg focus: outlin e-none focus: rin g-2 focus: rin g-blue-500 focus: borde r-transparent" />"
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400"   />"
            </form>""
            <div className="flex items-center space-x-2 text-sm text-gray-600">""
              <Phone className="h-4 w-4"   />
              <span>+1 (555) 123-4567</span>
            </div>
,
          {/* comment */}"
          <button onClick="{()" => setMobileMenuOpen(!mobileMenuOpen)}"
          <button onClick="{()" => setMobileMenuOpen(!mobileMenuOpen)}""
            className="md: hidden p-2 rounded-md text-gray-600 hove,
    r: tex t-gray-900 hove,"
    r: b g-gray-100""
          >""
            className="md: hidden p-2 rounded-md text-gray-700 hover: tex t-blue-600 hover: b g-gray-100 transition-colors"",
            onClick="{()" => setMobileMenuOpen(!mobileMenuOpen)}

          >"
            {mobileMenuOpen ? <X className="w-6 h-6"   /> : <Menu className="w-6 h-6"   />}"
            onClick="{()" => setMobileMenuOpen(!mobileMenuOpen)}"
            className="md: hidden p-2 rounded-md text-gray-600 hover: tex t-gray-900 hover: b g-gray-100"
          >",
            {mobileMenuOpen ? <X className="h-6 w-6"   /> : <Menu className="h-6 w-6"   />}

          </button>
        </div>
        {/* comment */}"
        {mobileMenuOpen && (""
          <div className="md: hidde n">",
        {/* comment */}, {mobileMenuOpen && ("
          <div className="md: hidde n">"
            <div className="{"px-2" pt-2 pb-3 space-y-1 bg-white border-t">
              {navigation.map((item) => (",
                <Link key="{item.name}" href="{item.href}" className="{"block" px-3 py-2 text-base font-medium rounded-md ${ router.pathname === item.href ? "text-blue-600 bg-blue-50" : "text-gray-700 hover: tex t-blue-600 hover: b g-gray-50" }"} onClick="{()" => setMobileMenuOpen(false)}

        {/* comment */}

        {mobileMenuOpen && ("
          <div className=""md: hidde n" py-4 border-t border-gray-200"}>"
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => ("
                <Link key="{item.name}""
                  href="{item.href}"""
                  className="{"block" px-3 py-2 text-base font-medium rounded-md ${
                    router.pathname === item.href""
                      ? "text-blue-600 bg-blue-50"""
                      : "text-gray-700 hover: tex t-blue-600 hove,"
    r: b g-gray-50""}"}"
                  onClick="{()" => setMobileMenuOpen(false)}

                >
                  {item.name}

                </Link>
              ))}""
              <div className=""px-3" py-2">""
                <form onSubmit="{handleSearch}" className="relative">"
                  <input""
                    type="text"""
                    placeholder="Search...""
                    value="{searchQuery}""
                    onChange="{(e)" => setSearchQuery(e.target.value)}""
                    className="w-full px-4 py-2 pl-10 text-sm border border-gray-300 rounded-lg focus: outlin e-none focus: rin g-2 focu,
    s: rin g-blue-500 focu,"
    s: borde r-transparent"" />"",
                  href="{item.href}""
                  className="text-gray-700 hover: tex t-blue-600 transition-colors font-medium py-2"",
                  onClick="{()" => setMobileMenuOpen(false)}"
        {mobileMenuOpen && (<div className="md: hidde n">",
            <div className="{"px-2" pt-2 pb-3 space-y-1 bg-white border-t">, {navigation.map((item) => (<Link key="{item.name}""
                  href="{item.href}""
                  className="{"block" px-3 py-2 text-base font-medium rounded-md ${
                    router.pathname === item.href"
                      ? "text-blue-600 bg-blue-50"
                      : "text-gray-700 hover: tex t-blue-600 hover: b g-gray-50"}"} onClick="{()" => setMobileMenuOpen(false)}

                >
                  {item.name}

                </Link>
              ))}

            </nav>"
            <div className=""mt-4" pt-4 border-t border-gray-200`}>"
              <form onSubmit="{handleSearch}" className="relative mb-4">"
                <input type="text""
                  placeholder="Search...""
                  value="{searchQuery}""
                  onChange="{(e)" => setSearchQuery(e.target.value)}"
                  className="w-full px-4 py-2 pl-10 pr-4 text-sm border border-gray-300 rounded-lg focus: outlin e-none focus: rin g-2 focus: rin g-blue-500 focus: borde r-transparent" />"
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400"   />
              </form>"
              <div className="flex space-x-4">"
                <a href="tel:+15551234567" className="flex items-center space-x-1 text-gray-700 hover: tex t-blue-600 transition-colors">"
                  <Phone className="w-4 h-4"   />"
                  <span className="text-sm">Call</span>
                </a>"
                <a href="mailto: inf o@ziontechgroup.com" className="flex items-center space-x-1 text-gray-700 hover: tex t-blue-600 transition-colors">"
                  <Mail className="w-4 h-4"   />"
                  <span className="text-sm">Email</span>
                </a>"
              <div className="px-3 py-2">",
                <form onSubmit="{handleSearch}" className="relative">"
                  <input type="text" placeholder="Search..." value="{searchQuery}" onChange="{(e)" => setSearchQuery(e.target.value)}"
                    className="w-full px-4 py-2 pl-10 text-sm border border-gray-300 rounded-lg focus: outlin e-none focus: rin g-2 focus: rin g-blue-500 focus: borde r-transparent" />"
                  <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400"   />
                </form>"
              </div>""
              <div className="px-3 py-2 flex items-center space-x-2 text-sm text-gray-600">""
                <Phone className="h-4 w-4"   />
                <span>+1 (555) 123-4567</span>
              </div>
          </div>,
        )}

      </div>
    </header>
  )
}
  );"
}"
"

export default Component

</div>
</form>
</div>
</div>
</button>
</nav>
</div>
</header>
</div>
</header>
</div>
</header>
</any>
</any>';
</any>;';;';