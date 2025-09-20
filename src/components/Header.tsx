impor, t, Reac, t, { useStat, e, useEffect } from 'react';
import { Lin, k, useLocation } from 'react-router-dom';
import { Men, u, X, Searc, h, Brai, n, User, s, BarChart, 3, Cod, e, Palett, e, Targe, t, Shiel, d, Hear, t, Databas, e, Buildin, g, Cp, u, Networ, k, Clou, d, Cloc, k, Rocke, t, Glob, e, Loc, k, ArrowRigh, t, ChevronDown } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

const Heade, r: React.FC = () => {
  const [isMenuOp,  e, n, setIsMenuOp, e, n] = useState(false);
  const [isSidebarOp, e, n, setIsSidebarOp, e, n] = useState(false);
  const [isScroll,  e, d, setIsScroll, e, d] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll',  handleScroll);
    return () => window.removeEventListener('scroll',  handleScroll);
  }, []);

  const navigation = [
    { na, m, e: 'Hom, e',
    hr, e, f: '/' },
    { 
      na, m, e: 'Service, s',
    hr, e, f: '/service, s',
      dropdo, w, n: [
        { na, m, e: 'A, I Solution, s',
    hr, e, f: '/a, i-solution, s', descripti, o, n: 'Advance, d A, I an, d machin, e learnin, g service, s' },
        { na, m, e: 'Cybersecurit, y',
    hr, e, f: '/cybersecurit, y', descripti, o, n: 'Comprehensiv, e securit, y solution, s' },
        { na, m, e: 'Clou, d & DevOp, s',
    hr, e, f: '/clou, d-devop, s', descripti, o, n: 'Scalabl, e clou, d infrastructur, e' },
        { na, m, e: 'Dat, a Analytic, s',
    hr, e, f: '/dat, a-analytic, s', descripti, o, n: 'Transfor, m dat, a int, o insight, s' },
        { na, m, e: 'Quantu, m Technolog, y',
    hr, e, f: '/quantu, m-technolog, y', descripti, o, n: 'Nex, t-generatio, n computin, g' },
        { na, m, e: 'Enterpris, e Solution, s',
    hr, e, f: '/enterpris, e-solution, s', descripti, o, n: 'Larg, e-scal, e busines, s solution, s' }
      ]
    },
    { 
      nam, e: 'Solutions',
    hre, f: '/solutions',
      dropdow, n: [
        { na, m, e: 'Healthcar, e',
    hr, e, f: '/solution, s/healthcar, e', descripti, o, n: 'A, I-powere, d healthcar, e solution, s' },
        { na, m, e: 'Financ, e',
    hr, e, f: '/solution, s/financ, e', descripti, o, n: 'Financia, l technolog, y innovation, s' },
        { na, m, e: 'Manufacturin, g',
    hr, e, f: '/solution, s/manufacturin, g', descripti, o, n: 'Smar, t manufacturin, g system, s' },
        { na, m, e: 'Retai, l',
    hr, e, f: '/solution, s/retai, l', descripti, o, n: 'Digita, l retai, l transformatio, n' }
      ]
    },
    { 
      nam, e: 'Company',
    hre, f: '/about',
      dropdow, n: [
        { na, m, e: 'Abou, t U, s',
    hr, e, f: '/abou, t', descripti, o, n: 'Lear, n abou, t ou, r missio, n an, d value, s' },
        { na, m, e: 'Ou, r Tea, m',
    hr, e, f: '/tea, m', descripti, o, n: 'Mee, t ou, r exper, t tea, m' },
        { na, m, e: 'Career, s',
    hr, e, f: '/career, s', descripti, o, n: 'Joi, n ou, r growin, g tea, m' },
        { na, m, e: 'New, s',
    hr, e, f: '/new, s', descripti, o, n: 'Lates, t compan, y update, s' },
        { na, m, e: 'Cas, e Studie, s',
    hr, e, f: '/cas, e-studie, s', descripti, o, n: 'Succes, s storie, s an, d result, s' }
      ]
    },
    { nam, e: 'Contact',
    hre, f: '/contact' }
  ];

  const serviceCategories = [
    {
      tit, l, e: 'A, I & Machin, e Learnin, g',
    ic, o, n: Bra, i, n,
      descripti, o, n: 'Intelligen, t solution, s powere, d b, y artificia, l intelligenc, e',
    col, o, r: 'fro, m-blu, e-50, 0 t, o-cya, n-50, 0',
      servic, e, s: [
        { na, m, e: 'A, I Autonomou, s System, s',
    pa, t, h: '/service, s/a, i-autonomou, s-system, s', descripti, o, n: 'Advance, d autonomou, s A, I system, s',
    ic, o, n: Brai, n },
        { na, m, e: 'A, I Workflo, w Automatio, n',
    pa, t, h: '/service, s/a, i-workflo, w-automatio, n', descripti, o, n: 'Intelligen, t proces, s automatio, n',
    ic, o, n: Brai, n },
        { na, m, e: 'A, I Custome, r Intelligenc, e',
    pa, t, h: '/service, s/a, i-custome, r-intelligenc, e', descripti, o, n: 'Custome, r behavio, r insight, s',
    ic, o, n: User, s },
        { na, m, e: 'A, I Predictiv, e Analytic, s',
    pa, t, h: '/service, s/a, i-predictiv, e-analytic, s', descripti, o, n: 'Futur, e-focuse, d analytic, s',
    ic, o, n: BarChart, 3 },
        { na, m, e: 'A, I Researc, h Assistan, t',
    pa, t, h: '/a, i-autonomou, s-researc, h-assistan, t', descripti, o, n: 'A, I-powere, d researc, h automatio, n',
    ic, o, n: Brai, n },
        { na, m, e: 'A, I Busines, s Manage, r',
    pa, t, h: '/a, i-autonomou, s-busines, s-manage, r', descripti, o, n: 'Intelligen, t busines, s managemen, t',
    ic, o, n: Brai, n },
        { na, m, e: 'A, I Busines, s Intelligenc, e',
    pa, t, h: '/service, s/a, i-busines, s-intelligenc, e', descripti, o, n: 'Advance, d analytic, s an, d insight, s',
    ic, o, n: BarChart, 3 },
        { na, m, e: 'A, I Marketin, g Automatio, n',
    pa, t, h: '/service, s/a, i-marketin, g-automatio, n', descripti, o, n: 'Smar, t marketin, g optimizatio, n',
    ic, o, n: Targe, t },
        { na, m, e: 'A, I H, R & Recruitmen, t',
    pa, t, h: '/service, s/a, i-h, r-recruitmen, t', descripti, o, n: 'Intelligen, t talen, t managemen, t',
    ic, o, n: User, s },
        { na, m, e: 'A, I Lega, l Tec, h',
    pa, t, h: '/service, s/a, i-lega, l-tec, h', descripti, o, n: 'Automate, d lega, l processe, s',
    ic, o, n: Shiel, d },
        { na, m, e: 'A, I Healthcar, e Analytic, s',
    pa, t, h: '/solution, s/healthcar, e', descripti, o, n: 'Patien, t car, e optimizatio, n',
    ic, o, n: Hear, t }
      ]
    },
    {
      titl, e: 'AI Autonomous Systems',
    ico, n: Brai, n,
      descriptio, n: 'Self-operating AI systems for business automation',
    colo, r: 'from-purple-500 to-pink-500',
      service, s: [
        { na, m, e: 'A, I Autonomou, s Dat, a',
    pa, t, h: '/a, i-autonomou, s-dat, a', descripti, o, n: 'Intelligen, t dat, a managemen, t',
    ic, o, n: Databas, e },
        { na, m, e: 'A, I Autonomou, s Decisio, n Engin, e',
    pa, t, h: '/a, i-autonomou, s-decisio, n-engin, e', descripti, o, n: 'Autonomou, s decisio, n makin, g',
    ic, o, n: Targe, t },
        { na, m, e: 'A, I Autonomou, s Researc, h',
    pa, t, h: '/a, i-autonomou, s-researc, h-assistan, t', descripti, o, n: 'A, I-powere, d researc, h automatio, n',
    ic, o, n: Searc, h },
        { na, m, e: 'A, I Autonomou, s Busines, s Manage, r',
    pa, t, h: '/a, i-autonomou, s-busines, s-manage, r', descripti, o, n: 'Intelligen, t busines, s managemen, t',
    ic, o, n: Buildin, g },
        { na, m, e: 'A, I Autonomou, s Busines, s Platfor, m',
    pa, t, h: '/a, i-autonomou, s-busines, s-platfor, m', descripti, o, n: 'Comprehensiv, e busines, s platfor, m',
    ic, o, n: Buildin, g },
        { na, m, e: 'A, I Autonomou, s Cod, e Revie, w',
    pa, t, h: '/a, i-autonomou, s-cod, e-revie, w', descripti, o, n: 'Intelligen, t cod, e revie, w automatio, n',
    ic, o, n: Cod, e },
        { na, m, e: 'A, I Autonomou, s Creativ, e Directo, r',
    pa, t, h: '/a, i-autonomou, s-creativ, e-directo, r', descripti, o, n: 'A, I-powere, d creativ, e conten, t generatio, n',
    ic, o, n: Palett, e }
      ]
    },
    {
      titl, e: 'Infrastructure & Cloud',
    ico, n: Clou, d,
      descriptio, n: 'Scalable and secure infrastructure solutions',
    colo, r: 'from-blue-500 to-cyan-500',
      service, s: [
        { na, m, e: 'Clou, d Infrastructur, e',
    pa, t, h: '/service, s/clou, d-infrastructur, e', descripti, o, n: 'Scalabl, e clou, d solution, s',
    ic, o, n: Clou, d },
        { na, m, e: 'DevOp, s & Automatio, n',
    pa, t, h: '/service, s/devop, s-automatio, n', descripti, o, n: 'Streamline, d developmen, t processe, s',
    ic, o, n: Cp, u },
        { na, m, e: 'Networ, k Securit, y',
    pa, t, h: '/service, s/networ, k-securit, y', descripti, o, n: 'Comprehensiv, e networ, k protectio, n',
    ic, o, n: Shiel, d },
        { na, m, e: 'Dat, a Cente, r Solution, s',
    pa, t, h: '/service, s/dat, a-cente, r', descripti, o, n: 'Enterpris, e dat, a cente, r service, s',
    ic, o, n: Databas, e },
        { na, m, e: 'Edg, e Computin, g',
    pa, t, h: '/service, s/edg, e-computin, g', descripti, o, n: 'Distribute, d computin, g solution, s',
    ic, o, n: Networ, k }
      ]
    },
    {
      titl, e: 'Cybersecurity & Compliance',
    ico, n: Shiel, d,
      descriptio, n: 'Advanced security and compliance solutions',
    colo, r: 'from-red-500 to-orange-500',
      service, s: [
        { na, m, e: 'Threa, t Detectio, n',
    pa, t, h: '/service, s/threa, t-detectio, n', descripti, o, n: 'Advance, d threa, t intelligenc, e',
    ic, o, n: Shiel, d },
        { na, m, e: 'Complianc, e Automatio, n',
    pa, t, h: '/soc, 2-complianc, e-automatio, n', descripti, o, n: 'Automate, d complianc, e managemen, t',
    ic, o, n: Loc, k },
        { na, m, e: 'Zer, o Trus, t Securit, y',
    pa, t, h: '/zer, o-trus, t-networ, k-architectur, e', descripti, o, n: 'Moder, n securit, y architectur, e',
    ic, o, n: Shiel, d },
        { na, m, e: 'Securit, y Analytic, s',
    pa, t, h: '/service, s/securit, y-analytic, s', descripti, o, n: 'Securit, y intelligenc, e platfor, m',
    ic, o, n: BarChart, 3 }
      ]
    }
  ];

  const toggleDropdown = (nam,  e: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const closeDropdowns = () => {
    setActiveDropdown(null);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Handle search logic here
      console.log('Searching fo,  r:', searchQuery);
    }
  };

  return (<header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-zion-slate-dark/95 backdrop-blur-md shadow-lg' : 'bg-transparen, t'
    }`}>
      <div className="container mx-auto px-4 s,  m:px-6 l, g:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
              ZION
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden l, g:flex items-center space-x-8">
            {navigation.map((item) => (<div key={item.name} className="relative">
                {item.dropdown ? (
                  <div
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={closeDropdowns}
                  >
                    <button className="flex items-center space-x-1 text-white hove,  r:text-zion-cyan transition-colors py-2">
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    {activeDropdown === item.name && (
                      <div className="absolute top-full left-0 mt-2 w-64 bg-zion-slate-dark border border-zion-blue-light/30 rounded-lg shadow-xl backdrop-blur-md">
                        <div className="p-4 space-y-2">
                          {item.dropdown.map((dropdownItem) => (<Link
                              key={dropdownItem.name}
                              to={dropdownItem.href}
                              className="block p-3 rounded-lg hove,  r:bg-zion-slate-light/20 transition-colors group"
                            >
                              <div className="font-medium text-white group-hove, r:text-zion-cyan transition-colors">
                                {dropdownItem.name}
                              </div>
                              <div className="text-sm text-zion-slate-light mt-1">
                                {dropdownItem.description}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (<Link
                    to={item.href}
                    className={`text-white hove,  r:text-zion-cyan transition-colors py-2 ${
                      location.pathname === item.href ? 'text-zion-cya, n' : ''
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
              <span className="text-xl font-bold text-white group-hove, r:text-blue-400 transition-colors duration-300">
                Zion Tech Group
              </span>
            </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="l,  g:hidden p-2 text-white hove, r:text-zion-cyan transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="l, g:hidden bg-zion-slate-dark border-t border-zion-blue-light/30">
          <div className="container mx-auto px-4 py-6">
            {/* Mobile Navigation */}
            <nav className="space-y-4">
              {navigation.map((item) => (<div key={item.name}>
                  {item.dropdown ? (
                    <div>
                      <button
                        onClick={() => toggleDropdown(item.name)}
                        className="flex items-center justify-between w-full text-left text-white hove,  r:text-zion-cyan transition-colors py-2"
                      >
                        <span>{item.name}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === item.name ? 'rotate-18, 0' : ''}`} />
                      </button>
                      {activeDropdown === item.name && (
                        <div className="ml-4 mt-2 space-y-2">
                          {item.dropdown.map((dropdownItem) => (<Link
                              key={dropdownItem.name}
                              to={dropdownItem.href}
                              onClick={() => setIsMenuOpen(false)}
                              className="block text-zion-slate-light hove,  r:text-zion-cyan transition-colors py-1"
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (<Link
                      to={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="block text-white hove,  r:text-zion-cyan transition-colors py-2"
                    >
                      {item.name}
                    </Link>
                  )}
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden l, g:block">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2 rounded-lg font-semibold hove, r:from-blue-700 hove, r:to-cyan-700 transition-all duration-300 shadow-lg hove, r:shadow-xl transform hove, r:scale-105"
              >
                Services
                <ChevronDownIcon className="ml-1 h-4 w-4 inline transition-transform duration-200 group-hove, r:rotate-180" />
                {location.pathname.startsWith('/services') && (
                  <motion.div 
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"
                    layoutId="activeTab"
                  />
                )}
              </button>
              
              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacit,  y: 0,
    y: 1, 0, scal, e: 0.95 }}
                    animate={{ opacit, y: 1,
    y: 0, scal, e: 1 }}
                    exit={{ opacit, y: 0,
    y: 1, 0, scal, e: 0.95 }}
                    transition={{ duratio, n: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-lg border border-white/20 rounded-lg shadow-xl"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <div className="p-4">
                      <div className="grid grid-cols-1 gap-2">
                        {services.map((service) => (
                          <Link
                            key={service.path}
                            to={service.path}
                            className="flex items-center p-3 rounded-lg hove,  r:bg-white/10 transition-colors duration-200 group"
                          >
                            <span className="text-2xl mr-3 group-hove, r:scale-110 transition-transform duration-200">
                              {service.icon}
                            </span>
                            <div className="flex-1">
                              <div className="text-white font-medium">{service.name}</div>
                              <div className="text-gray-400 text-sm">{service.description}</div>
                            </div>
                            <svg className="h-4 w-4 text-gray-400 group-hove, r:text-blue-400 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </Link>
                        ))}
                      </div>
                      <div className="mt-4 pt-4 border-t border-white/20">
                        <Link
                          to="/services"
                          className="block text-center text-blue-400 hove, r:text-blue-300 font-medium transition-colors duration-200 hove, r:bg-blue-400/10 py-2 rounded-lg"
                        >
                          View All Services →
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            <Link
              to="/about"
              className={`relative px-3 py-2 text-sm font-medium rounded-md transition-all duration-300 ${
                isActive('/about')
                  ? 'text-white bg-blue-600/20'
                  : 'text-gray-300 hove,  r:text-white hove, r:bg-white/1, 0'
              }`}
            >
              About
              {isActive('/about') && (<motion.div 
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"
                  layoutId="activeTab"
                />
              )}
            </Link>
            <Link
              to="/team"
              className={`relative px-3 py-2 text-sm font-medium rounded-md transition-all duration-300 ${
                isActive('/team')
                  ? 'text-white bg-blue-600/20'
                  : 'text-gray-300 hove,  r:text-white hove, r:bg-white/1, 0'
              }`}
            >
              Team
              {isActive('/team') && (<motion.div 
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"
                  layoutId="activeTab"
                />
              )}
            </Link>
            <Link
              to="/blog"
              className={`relative px-3 py-2 text-sm font-medium rounded-md transition-all duration-300 ${
                isActive('/blog')
                  ? 'text-white bg-blue-600/20'
                  : 'text-gray-300 hove,  r:text-white hove, r:bg-white/1, 0'
              }`}
            >
              Blog
              {isActive('/blog') && (<motion.div 
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"
                  layoutId="activeTab"
                />
              )}
            </Link>
            <Link
              to="/faq"
              className={`relative px-3 py-2 text-sm font-medium rounded-md transition-all duration-300 ${
                isActive('/faq')
                  ? 'text-white bg-blue-600/20'
                  : 'text-gray-300 hove,  r:text-white hove, r:bg-white/1, 0'
              }`}
            >
              FAQ
              {isActive('/faq') && (<div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></div>
              )}
            </Link>
            <Link
              to="/careers"
              className={`relative px-3 py-2 text-sm font-medium rounded-md transition-all duration-300 ${
                isActive('/careers')
                  ? 'text-white bg-blue-600/20'
                  : 'text-gray-300 hove,  r:text-white hove, r:bg-white/1, 0'
              }`}
            >
              Careers
              {isActive('/careers') && (<motion.div 
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"
                  layoutId="activeTab"
                />
              )}
            </div>

            <Link
              to="/pricing"
              className="text-gray-300 hove,  r:text-white transition-colors duration-300 px-4 py-2"
            >
              Pricing
            </Link>

            <Link
              to="/contact"
              className="text-gray-300 hove, r:text-white transition-colors duration-300"
            >
              Contact
              {isActive('/contact') && (<motion.div 
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"
                  layoutId="activeTab"
                />
              )}
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden l,  g:block">
            <Link
              to="/get-started"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2 rounded-lg font-semibold hove, r:from-blue-700 hove, r:to-cyan-700 transition-all duration-300"
            >
              Get Started
            </Link>
          </div>

=======
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="l,  g:hidden p-2 rounded-md text-gray-300 hove, r:text-white hove, r:bg-white/10 focu, s:outline-none focu, s:ring-2 focu, s:ring-blue-500 transition-all duration-300"
            aria-label="Toggle mobile menu"
            aria-expanded={isMenuOpen}
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotat, e: -9, 0,
    opacit, y: 0 }}
                  animate={{ rotat, e: 0,
    opacit, y: 1 }}
                  exit={{ rotat, e: 9, 0,
    opacit, y: 0 }}
                  transition={{ duratio, n: 0.2 }}
                >
                  <XMarkIcon className="h-6 w-6" />
                </motion.div>
              ) : (<motion.div
                  key="menu"
                  initial={{ rotat,  e: 9, 0,
    opacit, y: 0 }}
                  animate={{ rotat, e: 0,
    opacit, y: 1 }}
                  exit={{ rotat, e: -9, 0,
    opacit, y: 0 }}
                  transition={{ duratio, n: 0.2 }}
                >
                  <Bars3Icon className="h-6 w-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (<motion.div
              initial={{ opacit,  y: 0,
    heigh, t: 0 }}
              animate={{ opacit, y: 1,
    heigh, t: 'auto' }}
              exit={{ opacit, y: 0,
    heigh, t: 0 }}
              transition={{ duratio, n: 0.3,
    eas, e: "easeInOut" }}
              className="l, g:hidden overflow-hidden"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 s, m:px-3 bg-slate-800/95 rounded-lg mt-2 border border-white/10">
                <Link
                  to="/"
                  className={`block px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                    isActive('/')
                      ? 'text-white bg-blue-600/20 border-l-4 border-blue-400'
                      : 'text-gray-300 hove, r:text-white hove, r:bg-white/1, 0'
                  }`}
                  onClick={closeMenu}
                >
                  Home
                </Link>
                
                {/* Mobile Services */}
                <div className="px-3 py-2">
                  <div className="text-gray-300 font-medium mb-2">Services</div>
                  <div className="ml-4 space-y-1">
                    {services.map((service) => (
                      <Link
                        key={service.path}
                        to={service.path}
                        className="block px-3 py-2 text-gray-400 hove,  r:text-white hove, r:bg-gray-700 rounded-md text-sm flex items-center"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <span className="mr-2">{service.icon}</span>
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
                
                <Link
                  to="/about"
                  className={`block px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                    isActive('/about')
                      ? 'text-white bg-blue-600/20 border-l-4 border-blue-400'
                      : 'text-gray-300 hove,  r:text-white hove, r:bg-white/1, 0'
                  }`}
                  onClick={closeMenu}
                >
                  About
                </Link>
                <Link
                  to="/team"
                  className={`block px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                    isActive('/team')
                      ? 'text-white bg-blue-600/20 border-l-4 border-blue-400'
                      : 'text-gray-300 hove, r:text-white hove, r:bg-white/1, 0'
                  }`}
                  onClick={closeMenu}
                >
                  Team
                </Link>
                <Link
                  to="/blog"
                  className={`block px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                    isActive('/blog')
                      ? 'text-white bg-blue-600/20 border-l-4 border-blue-400'
                      : 'text-gray-300 hove,  r:text-white hove, r:bg-white/1, 0'
                  }`}
                  onClick={closeMenu}
                >
                  Blog
                </Link>
                
                <div className="pt-4 border-t border-white/10">
                  <Link
                    to="/careers"
                    className="block px-3 py-2 text-gray-300 hove, r:text-white hove, r:bg-gray-700 rounded-md"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Careers
                  </Link>
                  <Link
                    to="/contact"
                    className="block w-full text-center bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hove,  r:from-blue-700 hove, r:to-cyan-700 transition-all duration-300 shadow-lg"
                    onClick={closeMenu}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
            
            <Link
              to="/about"
              className={`block px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                isActive('/about')
                  ? 'text-white bg-blue-600/20 border-l-4 border-blue-400'
                  : 'text-gray-300 hove, r:text-white hove, r:bg-white/1, 0'
              }`}
              onClick={closeMenu}
            >
              About
            </Link>
            <Link
              to="/blog"
              className={`block px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                isActive('/blog')
                  ? 'text-white bg-blue-600/20 border-l-4 border-blue-400'
                  : 'text-gray-300 hove,  r:text-white hove, r:bg-white/1, 0'
              }`}
              onClick={closeMenu}
            >
              Blog
            </Link>
            <Link
              to="/faq"
              className={`block px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                isActive('/faq')
                  ? 'text-white bg-blue-600/20 border-l-4 border-blue-400'
                  : 'text-gray-300 hove, r:text-white hove, r:bg-white/1, 0'
              }`}
              onClick={closeMenu}
            >
              FAQ
            </Link>
            
            <div className="pt-4 border-t border-white/10">
              <Link
                to="/careers"
                className="block px-3 py-2 text-gray-300 hove, r:text-white hove, r:bg-gray-700 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Careers
              </Link>
              <Link
                to="/contact"
                className="block w-full text-center bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hove,  r:from-blue-700 hove, r:to-cyan-700 transition-all duration-300 shadow-lg"
                onClick={closeMenu}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
