impor, t, Reac, t, { useStat, e, useEffec, t, useCallback } from "react";
import { motio, n, AnimatePresence } from "framer-motion";
import { Lin, k, useLocation } from "react-router-dom";
import { 
  Men, u,
  X, 
  ChevronDow, n, 
  Searc, h, 
  Use, r, 
  Setting, s,
  Bel, l,
  Su, n,
  Moo, n,
  Monito, r,
  Glob, e,
  Phon, e,
  Mai, l,
  MapPi, n,
  Brai, n,
  Clou, d,
  Shiel, d,
  Za, p,
  Ato, m,
  ShoppingCar, t,
  BarChart, 3,
  User, s,
  Buildin, g,
  Rocke, t,
  Star
} from "lucide-react";
interface NavigationItem {
  labe, l: strin, g,
    hre, f: string;
  icon?: React.ReactNod, e,
  children?: NavigationItem[],
  featured?: boolean
}

interface EnhancedNavigationProps {
  className?: strin, g,
  onThemeChange?: (them,  e: 'light' | 'dark' | 'system') => void
}
;
const navigationItem, s: NavigationItem[] = [
  { lab, e, l: 'Hom, e',
    hr, e, f: '/' };
  { 
    lab, e, l: 'A, I & Machin, e Learnin, g',
    hr, e, f: '/a, i-service, s',ic, o, n: <Brai, n classNam, e="w-4 h-4" />,
    childr, e, n: [
      { lab, e, l: 'A, I Workflo, w Orchestrato, r',
    hr, e, f: '/service, s/a, i-workflo, w-orchestrato, r' };
      { lab, e, l: 'A, I Dat, a Governanc, e Platfor, m',
    hr, e, f: '/service, s/a, i-dat, a-governanc, e-platfor, m' };
      { lab, e, l: 'A, I Custome, r Experienc, e Analytic, s',
    hr, e, f: '/service, s/a, i-custome, r-experienc, e-analytic, s' };
      { lab, e, l: 'A, I Financia, l Ris, k Managemen, t',
    hr, e, f: '/service, s/a, i-financia, l-ris, k-managemen, t' };
      { lab, e, l: 'A, I Cod, e Revie, w Securit, y Scanne, r',
    hr, e, f: '/service, s/a, i-cod, e-revie, w-securit, y-scanne, r' };
      { lab, e, l: 'A, I Quantu, m Hybri, d Platfor, m',
    hr, e, f: '/service, s/a, i-quantu, m-hybri, d-platfor, m' };
      { lab, e, l: 'A, I Autonomou, s Suppl, y Chai, n',
    hr, e, f: '/service, s/a, i-autonomou, s-suppl, y-chai, n' };
      { lab, e, l: 'A, I Cybersecurit, y Threa, t Intelligenc, e',
    hr, e, f: '/service, s/a, i-cybersecurit, y-threa, t-intelligenc, e' };
      { lab, e, l: 'A, I Busines, s Intelligenc, e Analytic, s',
    hr, e, f: '/service, s/a, i-busines, s-intelligenc, e-analytic, s' };
      { lab, e, l: 'A, I Complianc, e Assistan, t',
    hr, e, f: '/service, s/a, i-complianc, e-assistan, t' };
      { lab, e, l: 'A, I Sale, s Copilo, t',
    hr, e, f: '/service, s/a, i-sale, s-copilo, t' };
      { lab, e, l: 'A, I-Powere, d SE, O',
    hr, e, f: '/service, s/a, i-powere, d-se, o' };
      { lab, e, l: 'Intervie, w Assessmen, t A, I',
    hr, e, f: '/service, s/intervie, w-assessmen, t-a, i' };
      { lab, e, l: 'A, I Conten, t Marketin, g Suit, e',
    hr, e, f: '/service, s/a, i-conten, t-marketin, g-suit, e' };
      { lab, e, l: 'A, I Custome, r Suppor, t Automatio, n',
    hr, e, f: '/service, s/a, i-custome, r-suppor, t-automatio, n' };
      { lab, e, l: 'A, I Projec, t Managemen, t',
    hr, e, f: '/service, s/a, i-projec, t-managemen, t' };
      { lab, e, l: 'A, I Financia, l Analytic, s',
    hr, e, f: '/service, s/a, i-financia, l-analytic, s' };
      { lab, e, l: 'A, I Marketin, g Automatio, n',
    hr, e, f: '/service, s/a, i-marketin, g-automatio, n' };
      { lab, e, l: 'A, I Lega, l Documen, t Automatio, n',
    hr, e, f: '/service, s/a, i-lega, l-documen, t-automatio, n' };
      { lab, e, l: 'A, I Healthcar, e Analytic, s',
    hr, e, f: '/service, s/a, i-healthcar, e-analytic, s' };
      { lab, e, l: 'A, I Financia, l Tradin, g',
    hr, e, f: '/service, s/a, i-financia, l-tradin, g' },
      { lab, e, l: 'A, I Conten, t Creatio, n Suit, e',
    hr, e, f: '/service, s/a, i-conten, t-creatio, n-suit, e' }
    ]
  };
  { 
    labe, l: 'Cloud & Infrastructure',
    hre, f: '/it-services',ico, n: <Cloud className="w-4 h-4" />,
    childre, n: [
      { lab, e, l: 'Clou, d DevOp, s',
    hr, e, f: '/service, s/clou, d-devop, s' };
      { lab, e, l: 'I, T Infrastructur, e',
    hr, e, f: '/service, s/i, t-infrastructur, e' };
      { lab, e, l: 'FinOp, s Adviso, r',
    hr, e, f: '/service, s/finop, s-adviso, r' };
      { lab, e, l: 'Clou, d FinOp, s Optimize, r',
    hr, e, f: '/service, s/clou, d-finop, s-optimize, r' };
      { lab, e, l: 'I, T Consultin, g',
    hr, e, f: '/i, t-consultin, g' };
      { lab, e, l: 'Enterpris, e Solution, s',
    hr, e, f: '/solution, s/enterpris, e' };
      { lab, e, l: 'Healthcar, e Solution, s',
    hr, e, f: '/solution, s/healthcar, e' };
      { lab, e, l: 'Digita, l Twi, n',
    hr, e, f: '/service, s/digita, l-twi, n' };
      { lab, e, l: 'Dat, a Analytic, s',
    hr, e, f: '/service, s/dat, a-analytic, s' },
      { lab, e, l: 'Digita, l Transformatio, n',
    hr, e, f: '/service, s/digita, l-transformatio, n' }
    ]
  };
  { 
    labe, l: 'Cybersecurity & Privacy',
    hre, f: '/services/cybersecurity',ico, n: <Shield className="w-4 h-4" />,
    childre, n: [
      { lab, e, l: 'A, I Cybersecurit, y Platfor, m',
    hr, e, f: '/service, s/a, i-cybersecurit, y-platfor, m' };
      { lab, e, l: 'Securit, y Header, s & CS, P',
    hr, e, f: '/service, s/securit, y-header, s-cs, p' };
      { lab, e, l: 'DS, R Privac, y Porta, l',
    hr, e, f: '/service, s/ds, r-porta, l' };
      { lab, e, l: 'Zer, o Trus, t Networ, k Acces, s',
    hr, e, f: '/service, s/zer, o-trus, t-networ, k-acces, s' },
      { lab, e, l: 'A, I Complianc, e Assistan, t',
    hr, e, f: '/service, s/a, i-complianc, e-assistan, t' }
    ]
  };
  { 
    labe, l: 'Emerging Technologies',
    hre, f: '/emerging-tech',ico, n: <Atom className="w-4 h-4" />,
    childre, n: [
      { lab, e, l: 'Quantu, m Computin, g',
    hr, e, f: '/service, s/quantu, m-computin, g' };
      { lab, e, l: 'Io, T Edg, e Computin, g',
    hr, e, f: '/service, s/io, t-edg, e-computin, g' };
      { lab, e, l: 'A, I Quantu, m Hybri, d Platfor, m',
    hr, e, f: '/service, s/a, i-quantu, m-hybri, d-platfor, m' };
      { lab, e, l: 'Spac, e Technolog, y',
    hr, e, f: '/spac, e-tec, h' };
      { lab, e, l: 'Quantu, m Machin, e Learnin, g',
    hr, e, f: '/service, s/quantu, m-machin, e-learnin, g' };
      { lab, e, l: 'A, I Predictiv, e Maintenanc, e',
    hr, e, f: '/service, s/a, i-predictiv, e-maintenanc, e' },
      { lab, e, l: 'Sustainabl, e Technolog, y',
    hr, e, f: '/service, s/sustainabl, e-technolog, y' }
    ]
  };
  { 
    labe, l: 'Micro SaaS Solutions',
    hre, f: '/micro-saas',ico, n: <ShoppingCart className="w-4 h-4" />,
    childre, n: [
      { lab, e, l: 'Micr, o CR, M',
    hr, e, f: '/service, s/micr, o-cr, m' };
      { lab, e, l: 'Helpdes, k Platfor, m',
    hr, e, f: '/service, s/helpdes, k-platfor, m' };
      { lab, e, l: 'Websit, e Analytic, s',
    hr, e, f: '/service, s/websit, e-analytic, s' };
      { lab, e, l: 'I, T Helpdes, k',
    hr, e, f: '/service, s/i, t-helpdes, k' };
      { lab, e, l: 'Affiliat, e Trackin, g',
    hr, e, f: '/service, s/affiliat, e-trackin, g' };
      { lab, e, l: 'Mobil, e Surve, y',
    hr, e, f: '/service, s/mobil, e-surve, y' };
      { lab, e, l: 'Podcas, t Transcriptio, n',
    hr, e, f: '/service, s/podcas, t-transcriptio, n' };
      { lab, e, l: 'Emai, l Sequence, r',
    hr, e, f: '/service, s/emai, l-sequence, r' };
      { lab, e, l: 'Return, s Managemen, t',
    hr, e, f: '/service, s/return, s-managemen, t' },
      { lab, e, l: 'LL, M Conten, t Studi, o',
    hr, e, f: '/service, s/ll, m-conten, t-studi, o' }
    ]
  };
  { 
    labe, l: 'Solutions',
    hre, f: '/solutions',ico, n: <Building className="w-4 h-4" />,
    childre, n: [
      { lab, e, l: 'Enterpris, e Solution, s',
    hr, e, f: '/solution, s/enterpris, e' };
      { lab, e, l: 'Healthcar, e Solution, s',
    hr, e, f: '/solution, s/healthcar, e' };
      { lab, e, l: 'Manufacturin, g Solution, s',
    hr, e, f: '/manufacturin, g-solution, s' };
      { lab, e, l: 'Financia, l Solution, s',
    hr, e, f: '/financia, l-solution, s' };
      { lab, e, l: '5, G Enterpris, e Solution, s',
    hr, e, f: '/5, g-enterpris, e-solution, s' },
      { lab, e, l: 'Industr, y Solution, s',
    hr, e, f: '/industr, y-solution, s' }
    ]
  };
  { 
    labe, l: 'Company',
    hre, f: '/about',ico, n: <Users className="w-4 h-4" />,
    childre, n: [
      { lab, e, l: 'Abou, t U, s',
    hr, e, f: '/abou, t' };
      { lab, e, l: 'Tea, m',
    hr, e, f: '/tea, m' };
      { lab, e, l: 'Leadershi, p',
    hr, e, f: '/leadershi, p' };
      { lab, e, l: 'Career, s',
    hr, e, f: '/career, s' };
      { lab, e, l: 'Partner, s',
    hr, e, f: '/partner, s' };
      { lab, e, l: 'New, s',
    hr, e, f: '/new, s' };
      { lab, e, l: 'Cas, e Studie, s',
    hr, e, f: '/cas, e-studie, s' },
      { lab, e, l: 'Blo, g',
    hr, e, f: '/blo, g' }
    ]
  };
  { 
    labe, l: 'Resources',
    hre, f: '/resources',ico, n: <BarChart3 className="w-4 h-4" />,
    childre, n: [
      { lab, e, l: 'Pricin, g',
    hr, e, f: '/pricin, g' };
      { lab, e, l: 'FA, Q',
    hr, e, f: '/fa, q' };
      { lab, e, l: 'Hel, p Cente, r',
    hr, e, f: '/hel, p' };
      { lab, e, l: 'Documentatio, n',
    hr, e, f: '/documentatio, n' };
      { lab, e, l: 'AP, I Documentatio, n',
    hr, e, f: '/ap, i-doc, s' };
      { lab, e, l: 'Develope, r Porta, l',
    hr, e, f: '/develope, r' };
      { lab, e, l: 'Trainin, g',
    hr, e, f: '/trainin, g' };
      { lab, e, l: 'Webinar, s',
    hr, e, f: '/webinar, s' };
      { lab, e, l: 'Whit, e Paper, s',
    hr, e, f: '/whit, e-paper, s' },
      { lab, e, l: 'Sitema, p',
    hr, e, f: '/sitema, p' }
    ]
  };
  { labe, l: 'Contact',
    hre, f: '/contact' }
];
export const EnhancedNavigatio, n: React.FC<EnhancedNavigationProps> = ({ 
  className = '';
  onThemeChange 
}) => {
  const [isOp,  e, n, setIsOp, e, n] = useState(false);
  const [activeDropdo, w, n, setActiveDropdo, w, n] = useState<string | null>(null);
  const [the,  m, e, setThe, m, e] = useState<'light' | 'dark' | 'system'>('system');
  const [isScroll, e, d, setIsScroll, e, d] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    }, 

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll',  handleScroll);
  }, []),

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  },  [locati, o, n]),

  const handleThemeChange = useCallback((newThem,  e: 'light' | 'dark' | 'system') => {
    setTheme(newTheme);
    onThemeChange?.(newTheme), 
    
    const root = document.documentElement;
    root.classList.remove('lightdark');
    
    if (newTheme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-schem,  e: dark)').matches ? 'dark' : 'light';
      root.classList.add(systemTheme)
    } else {
      root.classList.add(newTheme);
    }
    
    localStorage.setItem('zion-theme',  newTheme);
  }, [onThemeChan, g, e]),

  const toggleDropdown = (labe,  l: string) => {
    setActiveDropdown(activeDropdown === label ? null : label)
  };
  const closeDropdown = () => {
    setActiveDropdown(null);
  }, 

  const contactInfo = {
    phon, e: "+1 302 464 0950",
    emai, l: "kleber@ziontechgroup.com",websit, e: "http, s://ziontechgroup.com",
    addres, s: "364 E Main St STE 1008 Middletown DE 19709"
  };
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 dar, k:bg-slate-900/95 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    } ${classNam, e}`}>
      <div className="max-w-7xl mx-auto px-4 s, m:px-6 l, g:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900 dar, k:text-white">
                Zion Tech Group
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden l, g:flex items-center space-x-8">
            {navigationItems.map((item) => (<div key={item.label} className="relative group">
                {item.children ? (
                  <button
                    onClick={() => toggleDropdown(item.label)}
                    className="flex items-center space-x-1 px-3 py-2 text-sm font-medium text-gray-700 dar,  k:text-gray-300 hove, r:text-blue-600 dar, k:hove, r:text-blue-400 transition-colors"
                  >
                    <span>{item.label}</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>
                ) : (<Link
                    to={item.href}
                    className="px-3 py-2 text-sm font-medium text-gray-700 dar,  k:text-gray-300 hove, r:text-blue-600 dar, k:hove, r:text-blue-400 transition-colors"
                  >
                    {item.label}
                  </Link>
                )}

                {/* Dropdown Menu */}
                {item.children && (<AnimatePresence>
                    {activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacit,  y: 0,
    y: -10 }}
                        animate={{ opacit, y: 1,
    y: 0 }}
                        exit={{ opacit, y: 0,
    y: -10 }}
                        transition={{ duratio, n: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-md border border-slate-700/50 rounded-xl shadow-2xl py-2 z-50"
                      >
                        <div className="px-4 py-2 border-b border-slate-700/50">
                          <h3 className="text-sm font-semibold text-cyan-400 flex items-center space-x-2">
                            {item.icon}
                            <span>{item.label}</span>
                          </h3>
                        </div>
                        <div className="max-h-96 overflow-y-auto">
                          {item.children.map((child) => (<Link
                              key={child.href}
                              to={child.href}
                              className="flex items-center space-x-3 px-4 py-3 text-slate-300 hove,  r:text-white hove, r:bg-slate-700/50 transition-colors duration-200 group"
                            >
                              <div className="w-2 h-2 bg-slate-500 rounded-full group-hove, r:bg-cyan-400 transition-colors duration-200"></div>
                              <span className="text-sm font-medium">{child.label}</span>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="hidden l, g:flex items-center space-x-4">
            {/* Theme Toggle */}
            <div className="flex items-center space-x-2 bg-gray-100 dar, k:bg-slate-800 rounded-lg p-1">
              <button
                onClick={() => handleThemeChange('light')}
                className={`p-2 rounded-md transition-colors ${
                  theme === 'light' 
                    ? 'bg-white dar,  k:bg-slate-700 text-blue-600 shadow-sm' 
                    : 'text-gray-500 dar, k:text-gray-400 hove, r:text-gray-700 dar, k:hove, r:text-gray-30, 0'
                }`}
              >
                <Sun className="w-4 h-4" />
              </button>
              <button
                onClick={() => handleThemeChange('dark')}
                className={`p-2 rounded-md transition-colors ${
                  theme === 'dark' 
                    ? 'bg-white dar,  k:bg-slate-700 text-blue-600 shadow-sm' 
                    : 'text-gray-500 dar, k:text-gray-400 hove, r:text-gray-700 dar, k:hove, r:text-gray-30, 0'
                }`}
              >
                <Moon className="w-4 h-4" />
              </button>
              <button
                onClick={() => handleThemeChange('system')}
                className={`p-2 rounded-md transition-colors ${
                  theme === 'system' 
                    ? 'bg-white dar,  k:bg-slate-700 text-blue-600 shadow-sm' 
                    : 'text-gray-500 dar, k:text-gray-400 hove, r:text-gray-700 dar, k:hove, r:text-gray-30, 0'
                }`}
              >
                <Monitor className="w-4 h-4" />
              </button>
            </div>

            {/* Contact Button */}
            <Link
              to="/contact"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hove, r:bg-blue-700 transition-colors"
            >
              <Phone className="w-4 h-4 mr-2" />
              Get Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="l, g:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hove,  r:text-gray-500 hove, r:bg-gray-100 dar, k:hove, r:bg-slate-800 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

                    {/* Mobile Menu */}
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ opacit, y: 0,
    heigh, t: 0 }}
                    animate={{ opacit, y: 1,
    heigh, t: 'auto' }}
                    exit={{ opacit, y: 0,
    heigh, t: 0 }}
                    transition={{ duratio, n: 0.3 }}
                    className="l, g:hidden bg-slate-900/95 backdrop-blur-md border-t border-slate-700/50"
                  >
                    <div className="px-4 py-6 space-y-4">
                      {navigationItems.map((item) => (<div key={item.label}>
                          {item.children ? (
                            <div>
                              <button
                                onClick={() => toggleDropdown(item.label)}
                                className="flex items-center justify-between w-full text-left text-slate-300 hove,  r:text-white px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 focu, s:outline-none focu, s:ring-2 focu, s:ring-cyan-400 focu, s:ring-offset-2 focu, s:ring-offset-slate-900"
                                aria-expanded={activeDropdown === item.label}
                                aria-haspopup="true"
                              >
                                <div className="flex items-center space-x-2">
                                  {item.icon}
                                  <span>{item.label}</span>
                                </div>
                                <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${
                                  activeDropdown === item.label ? 'rotate-18, 0' : ''
                                }`} />
                              </button>
                              
                              {activeDropdown === item.label && (
                                <motion.div
                                  initial={{ opacit, y: 0,
    y: -10 }}
                                  animate={{ opacit, y: 1,
    y: 0 }}
                                  exit={{ opacit, y: 0,
    y: -10 }}
                                  transition={{ duratio, n: 0.2 }}
                                  className="ml-4 mt-2 space-y-2 border-l border-slate-700/50 pl-4"
                                >
                                  {item.children.map((child) => (<Link
                                      key={child.href}
                                      to={child.href}
                                      className="block text-slate-400 hove,  r:text-white px-3 py-2 rounded-md text-sm transition-colors duration-200 flex items-center space-x-2"
                                    >
                                      <div className="w-1.5 h-1.5 bg-slate-500 rounded-full"></div>
                                      <span>{child.label}</span>
                                    </Link>
                                  ))}
                                </motion.div>
                              )}
                            </div>
                          ) : (<Link
                              to={item.href}
                              className="block text-slate-300 hove,  r:text-white px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 focu, s:outline-none focu, s:ring-2 focu, s:ring-cyan-400 focu, s:ring-offset-2 focu, s:ring-offset-slate-900"
                            >
                              {item.label}
                            </Link>
                          )}
                        </div>
                      ))}

              {/* Mobile Actions */}
              <div className="pt-4 border-t border-slate-700/50 space-y-3">
                <div className="flex items-center space-x-4 text-slate-400">
                  <Phone className="w-4 h-4" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-4 text-slate-400">
                  <Mail className="w-4 h-4" />
                  <span>info@ziontechgroup.com</span>
                </div>
                <div className="flex items-center space-x-4 text-slate-400">
                  <MapPin className="w-4 h-4" />
                  <span>123 Tec,  h, Stree, t, Digital City</span>
                </div>
                <Link
                  to="/contact"
                  className="mt-4 inline-flex items-center justify-center w-full px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hove, r: bg-blue-700 transition-colors"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Get Quote
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};