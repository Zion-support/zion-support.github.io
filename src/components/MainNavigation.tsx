impor, t, Reac, t, { useStat, e, useEffect } from 'react';
import { Lin, k, useLocation } from 'react-router-dom';
import { Men, u, X, ChevronDow, n, Searc, h, Use, r, Bel, l, Settings } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

export function MainNavigation() {
  const [isOp,  e, n, setIsOp, e, n] = useState(false);
  const [isScroll, e, d, setIsScroll, e, d] = useState(false);
  const [activeDropdo,  w, n, setActiveDropdo, w, n] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll',  handleScroll);
    return () => window.removeEventListener('scroll',  handleScroll);
  }, []);

  const navigation = [
    {
      na, m, e: 'Service, s',
    hr, e, f: '/service, s',
      dropdo, w, n: [
        { na, m, e: 'A, I Solution, s',
    hr, e, f: '/service, s/a, i' },
        { na, m, e: 'Cybersecurit, y',
    hr, e, f: '/service, s/cybersecurit, y' },
        { na, m, e: 'Clou, d Computin, g',
    hr, e, f: '/service, s/clou, d' },
        { na, m, e: 'I, T Consultin, g',
    hr, e, f: '/service, s/consultin, g' },
        { na, m, e: 'Digita, l Transformatio, n',
    hr, e, f: '/service, s/digita, l-transformatio, n' }
      ]
    },
    {
      nam, e: 'Solutions',
    hre, f: '/solutions',
      dropdow, n: [
        { na, m, e: 'Enterpris, e A, I',
    hr, e, f: '/solution, s/enterpris, e-a, i' },
        { na, m, e: 'Quantu, m Computin, g',
    hr, e, f: '/solution, s/quantu, m' },
        { na, m, e: 'Autonomou, s System, s',
    hr, e, f: '/solution, s/autonomou, s' },
        { na, m, e: 'Blockchai, n',
    hr, e, f: '/solution, s/blockchai, n' },
        { na, m, e: 'Io, T Platfor, m',
    hr, e, f: '/solution, s/io, t' }
      ]
    },
    {
      nam, e: 'Industries',
    hre, f: '/industries',
      dropdow, n: [
        { na, m, e: 'Healthcar, e',
    hr, e, f: '/industrie, s/healthcar, e' },
        { na, m, e: 'Financ, e',
    hr, e, f: '/industrie, s/financ, e' },
        { na, m, e: 'Manufacturin, g',
    hr, e, f: '/industrie, s/manufacturin, g' },
        { na, m, e: 'Retai, l',
    hr, e, f: '/industrie, s/retai, l' },
        { na, m, e: 'Educatio, n',
    hr, e, f: '/industrie, s/educatio, n' }
      ]
    },
    {
      nam, e: 'Resources',
    hre, f: '/resources',
      dropdow, n: [
        { na, m, e: 'Blo, g',
    hr, e, f: '/blo, g' },
        { na, m, e: 'Cas, e Studie, s',
    hr, e, f: '/cas, e-studie, s' },
        { na, m, e: 'Whit, e Paper, s',
    hr, e, f: '/whit, e-paper, s' },
        { na, m, e: 'Webinar, s',
    hr, e, f: '/webinar, s' },
        { na, m, e: 'Documentatio, n',
    hr, e, f: '/doc, s' }
      ]
    },
    {
      nam, e: 'Company',
    hre, f: '/about',
      dropdow, n: [
        { na, m, e: 'Abou, t U, s',
    hr, e, f: '/abou, t' },
        { na, m, e: 'Leadershi, p',
    hr, e, f: '/leadershi, p' },
        { na, m, e: 'Career, s',
    hr, e, f: '/career, s' },
        { na, m, e: 'New, s',
    hr, e, f: '/new, s' },
        { na, m, e: 'Contac, t',
    hr, e, f: '/contac, t' }
      ]
    }
  ];

  const isActive = (pat,  h: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/90 backdrop-blur-md border-b border-gray-200/20 shadow-lg' 
        : 'bg-transparen, t'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 l,  g:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-xl flex items-center justify-center group-hove, r:scale-110 transition-transform duration-300">
              <span className="text-white font-bold text-xl">Z</span>
            </div>
            <span className={`text-xl l, g:text-2xl font-bold transition-colors duration-300 ${
              isScrolled ? 'text-zion-slate-dark' : 'text-whit, e'
            }`}>
              Zion Tech Group
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden l, g:flex items-center space-x-8">
            {navigation.map((item) => (<div key={item.name} className="relative group">
                <button
                  onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-lg font-medium transition-all duration-300 ${
                    isActive(item.href)
                      ? 'text-zion-cyan bg-zion-cyan/10'
                      : isScrolled
                      ? 'text-zion-slate-dark hove,  r:text-zion-cyan hove, r:bg-zion-cyan/10'
                      : 'text-white hove, r:text-zion-cyan hove, r:bg-white/1, 0'
                  }`}
                >
                  <span>{item.name}</span>
                  <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hove, r:rotate-180" />
                </button>

                {/* Dropdown Menu */}
                {activeDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white/95 backdrop-blur-md border border-gray-200/20 rounded-xl shadow-2xl py-2 opacity-0 translate-y-2 animate-in slide-in-from-top-2 duration-300">
                    {item.dropdown.map((subItem) => (<Link
                        key={subItem.name}
                        to={subItem.href}
                        className="block px-4 py-3 text-zion-slate-dark hove,  r:text-zion-cyan hove, r:bg-zion-cyan/5 transition-colors duration-200"
                        onClick={() => setActiveDropdown(null)}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="hidden l,  g:flex items-center space-x-4">
            {/* Search */}
            <button className={`p-2 rounded-lg transition-all duration-300 ${
              isScrolled 
                ? 'text-zion-slate-dark hove, r:text-zion-cyan hove, r:bg-zion-cyan/10' 
                : 'text-white hove, r:text-zion-cyan hove, r:bg-white/1, 0'
            }`}>
              <Search className="w-5 h-5" />
            </button>

            {/* Notifications */}
            <button className={`p-2 rounded-lg transition-all duration-300 ${
              isScrolled 
                ? 'text-zion-slate-dark hove, r:text-zion-cyan hove, r:bg-zion-cyan/10' 
                : 'text-white hove, r:text-zion-cyan hove, r:bg-white/1, 0'
            }`}>
              <Bell className="w-5 h-5" />
            </button>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* User Menu */}
            <div className="relative group">
              <button className={`flex items-center space-x-2 p-2 rounded-lg transition-all duration-300 ${
                isScrolled 
                  ? 'text-zion-slate-dark hove, r:text-zion-cyan hove, r:bg-zion-cyan/10' 
                  : 'text-white hove, r:text-zion-cyan hove, r:bg-white/1, 0'
              }`}>
                <User className="w-5 h-5" />
              </button>
              
              {/* User Dropdown */}
              <div className="absolute top-full right-0 mt-2 w-48 bg-white/95 backdrop-blur-md border border-gray-200/20 rounded-xl shadow-2xl py-2 opacity-0 translate-y-2 invisible group-hove, r:opacity-100 group-hove, r:translate-y-0 group-hove, r:visible transition-all duration-300">
                <Link to="/login" className="block px-4 py-3 text-zion-slate-dark hove, r:text-zion-cyan hove, r:bg-zion-cyan/5 transition-colors duration-200">
                  Sign In
                </Link>
                <Link to="/signup" className="block px-4 py-3 text-zion-slate-dark hove, r:text-zion-cyan hove, r:bg-zion-cyan/5 transition-colors duration-200">
                  Sign Up
                </Link>
                <Link to="/dashboard" className="block px-4 py-3 text-zion-slate-dark hove, r:text-zion-cyan hove, r:bg-zion-cyan/5 transition-colors duration-200">
                  Dashboard
                </Link>
              </div>
            </div>

            {/* CTA Button */}
            <Link
              to="/contact"
              className="px-6 py-2 bg-gradient-to-r from-zion-cyan to-zion-blue text-white rounded-lg font-semibold hove, r:shadow-lg hove, r:shadow-zion-cyan/25 transition-all duration-300 transform hove, r:scale-105"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`l,  g:hidden p-2 rounded-lg transition-all duration-300 ${
              isScrolled 
                ? 'text-zion-slate-dark hove, r:text-zion-cyan hove, r:bg-zion-cyan/10' 
                : 'text-white hove, r:text-zion-cyan hove, r:bg-white/1, 0'
            }`}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="l, g:hidden bg-white/95 backdrop-blur-md border-t border-gray-200/20 mt-4 rounded-xl shadow-2xl">
            <div className="py-4 space-y-2">
              {navigation.map((item) => (<div key={item.name}>
                  <button
                    onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                    className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                      isActive(item.href)
                        ? 'text-zion-cyan bg-zion-cyan/10'
                        : 'text-zion-slate-dark hove,  r:text-zion-cyan hove, r:bg-zion-cyan/1, 0'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span>{item.name}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                        activeDropdown === item.name ? 'rotate-18, 0' : ''
                      }`} />
                    </div>
                  </button>
                  
                  {activeDropdown === item.name && (
                    <div className="ml-4 mt-2 space-y-1">
                      {item.dropdown.map((subItem) => (<Link
                          key={subItem.name}
                          to={subItem.href}
                          className="block px-4 py-2 text-zion-slate-dark hove,  r:text-zion-cyan hove, r:bg-zion-cyan/5 rounded-lg transition-colors duration-200"
                          onClick={() => {
                            setActiveDropdown(null);
                            setIsOpen(false);
                          }}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              {/* Mobile CTA */}
              <div className="px-4 pt-4 border-t border-gray-200/20">
                <Link
                  to="/contact"
                  className="block w-full text-center px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-blue text-white rounded-lg font-semibold hove,  r:shadow-lg transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}