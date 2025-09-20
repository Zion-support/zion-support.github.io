impor, t, Reac, t, { useStat, e, useEffectuseCallback } from "react";
import { motionAnimatePresence } from "framer-motion";
import { LinkuseLocation } from "react-router-dom";
import { ;
  Men, u,;
  X,;
  ChevronDow, n,;
  Searc, h,;
  Use, r,;
  Setting, s,;
  Bel, l,;
  Su, n,;
  Moo, n,;
  Monito, r,;
  Glob, e,;
  Phon, e,;
  Mai, l,;
  MapPi, n,;
  Brai, n,;
  Clou, d,;
  Shiel, d,;
  Za, p,;
  Ato, m,;
  ShoppingCar, t,;
  BarChart, 3,;
  User, s,;
  Buildin, g,;
  RocketStar;
} from "lucide-react";
interface NavigationItem {
  labe, l: strin, g,;
    hre, f: string;
  icon?: React.ReactNod, echildren?: NavigationItem[]featured?: boolean;
};
interface EnhancedNavigationProps {
  className?: strin, gonThemeChange?: (theme: 'light' | 'dark' | 'system') => void;
};
;
const navigationItem, s: NavigationItem[] = [;
  { lab, e, l: 'Hom, e',;
    href: '/' };
  { ;
    lab, e, l: 'A, I & Machin, e Learnin, g',;
    hr, e, f: '/a, i-service, s',ic, o, n: <Brai, n className="w-4 h-4" />,;
    childr, e, n: [;
      { lab, e, l: 'A, I Workflo, w Orchestrato, r',;
    hr, e, f: '/service, s/a, i-workflow-orchestrator' };
      { lab, e, l: 'A, I Dat, a Governanc, e Platfor, m',;
    hr, e, f: '/service, s/a, i-dat, a-governance-platform' };
      { lab, e, l: 'A, I Custome, r Experienc, e Analytic, s',;
    hr, e, f: '/service, s/a, i-custome, r-experience-analytics' };
      { lab, e, l: 'A, I Financia, l Ris, k Managemen, t',;
    hr, e, f: '/service, s/a, i-financia, l-risk-management' };
      { lab, e, l: 'A, I Cod, e Revie, w Securit, y Scanne, r',;
    hr, e, f: '/service, s/a, i-cod, e-revie, w-security-scanner' };
      { lab, e, l: 'A, I Quantu, m Hybri, d Platfor, m',;
    hr, e, f: '/service, s/a, i-quantu, m-hybrid-platform' };
      { lab, e, l: 'A, I Autonomou, s Suppl, y Chai, n',;
    hr, e, f: '/service, s/a, i-autonomou, s-supply-chain' };
      { lab, e, l: 'A, I Cybersecurit, y Threa, t Intelligenc, e',;
    hr, e, f: '/service, s/a, i-cybersecurit, y-threat-intelligence' };
      { lab, e, l: 'A, I Busines, s Intelligenc, e Analytic, s',;
    hr, e, f: '/service, s/a, i-busines, s-intelligence-analytics' };
      { lab, e, l: 'A, I Complianc, e Assistan, t',;
    hr, e, f: '/service, s/a, i-compliance-assistant' };
      { lab, e, l: 'A, I Sale, s Copilo, t',;
    hr, e, f: '/service, s/a, i-sales-copilot' };
      { lab, e, l: 'A, I-Powere, d SE, O',;
    hr, e, f: '/service, s/a, i-powered-seo' };
      { lab, e, l: 'Intervie, w Assessmen, t A, I',;
    hr, e, f: '/service, s/intervie, w-assessment-ai' };
      { lab, e, l: 'A, I Conten, t Marketin, g Suit, e',;
    hr, e, f: '/service, s/a, i-conten, t-marketing-suite' };
      { lab, e, l: 'A, I Custome, r Suppor, t Automatio, n',;
    hr, e, f: '/service, s/a, i-custome, r-support-automation' };
      { lab, e, l: 'A, I Projec, t Managemen, t',;
    hr, e, f: '/service, s/a, i-project-management' };
      { lab, e, l: 'A, I Financia, l Analytic, s',;
    hr, e, f: '/service, s/a, i-financial-analytics' };
      { lab, e, l: 'A, I Marketin, g Automatio, n',;
    hr, e, f: '/service, s/a, i-marketing-automation' };
      { lab, e, l: 'A, I Lega, l Documen, t Automatio, n',;
    hr, e, f: '/service, s/a, i-lega, l-document-automation' };
      { lab, e, l: 'A, I Healthcar, e Analytic, s',;
    hr, e, f: '/service, s/a, i-healthcare-analytics' };
      { lab, e, l: 'A, I Financia, l Tradin, g',;
    hr, e, f: '/service, s/a, i-financial-trading' },;
      { lab, e, l: 'A, I Conten, t Creatio, n Suit, e',;
    hr, e, f: '/service, s/a, i-content-creation-suite' }
  ,  ];
  };
  { ;
    labe, l: 'Cloud & Infrastructure',;
    hre, f: '/it-services',ico, n: <Cloud className="w-4 h-4" />,;
    childre, n: [;
      { lab, e, l: 'Clou, d DevOp, s',;
    hr, e, f: '/service, s/cloud-devops' };
      { lab, e, l: 'I, T Infrastructur, e',;
    hr, e, f: '/service, s/it-infrastructure' };
      { lab, e, l: 'FinOp, s Adviso, r',;
    hr, e, f: '/service, s/finops-advisor' };
      { lab, e, l: 'Clou, d FinOp, s Optimize, r',;
    hr, e, f: '/service, s/clou, d-finops-optimizer' };
      { lab, e, l: 'I, T Consultin, g',;
    hr, e, f: '/it-consulting' };
      { lab, e, l: 'Enterpris, e Solution, s',;
    hr, e, f: '/solutions/enterprise' };
      { lab, e, l: 'Healthcar, e Solution, s',;
    hr, e, f: '/solutions/healthcare' };
      { lab, e, l: 'Digita, l Twi, n',;
    hr, e, f: '/service, s/digital-twin' };
      { lab, e, l: 'Dat, a Analytic, s',;
    hr, e, f: '/service, s/data-analytics' },;
      { lab, e, l: 'Digita, l Transformatio, n',;
    hr, e, f: '/services/digital-transformation' }
  ,  ];
  };
  { ;
    labe, l: 'Cybersecurity & Privacy',;
    hre, f: '/services/cybersecurity',ico, n: <Shield className="w-4 h-4" />,;
    childre, n: [;
      { lab, e, l: 'A, I Cybersecurit, y Platfor, m',;
    hr, e, f: '/service, s/a, i-cybersecurity-platform' };
      { lab, e, l: 'Securit, y Header, s & CS, P',;
    hr, e, f: '/service, s/securit, y-headers-csp' };
      { lab, e, l: 'DS, R Privac, y Porta, l',;
    hr, e, f: '/service, s/dsr-portal' };
      { lab, e, l: 'Zer, o Trus, t Networ, k Acces, s',;
    hr, e, f: '/service, s/zer, o-trus, t-network-access' },;
      { lab, e, l: 'A, I Complianc, e Assistan, t',;
    hr, e, f: '/service, s/ai-compliance-assistant' }
  ,  ];
  };
  { ;
    labe, l: 'Emerging Technologies',;
    hre, f: '/emerging-tech',ico, n: <Atom className="w-4 h-4" />,;
    childre, n: [;
      { lab, e, l: 'Quantu, m Computin, g',;
    hr, e, f: '/service, s/quantum-computing' };
      { lab, e, l: 'Io, T Edg, e Computin, g',;
    hr, e, f: '/service, s/io, t-edge-computing' };
      { lab, e, l: 'A, I Quantu, m Hybri, d Platfor, m',;
    hr, e, f: '/service, s/a, i-quantu, m-hybrid-platform' };
      { lab, e, l: 'Spac, e Technolog, y',;
    hr, e, f: '/space-tech' };
      { lab, e, l: 'Quantu, m Machin, e Learnin, g',;
    hr, e, f: '/service, s/quantu, m-machine-learning' };
      { lab, e, l: 'A, I Predictiv, e Maintenanc, e',;
    hr, e, f: '/service, s/a, i-predictive-maintenance' },;
      { lab, e, l: 'Sustainabl, e Technolog, y',;
    hr, e, f: '/services/sustainable-technology' }
  ,  ];
  };
  { ;
    labe, l: 'Micro, SaaS, Solutions',;
    hre, f: '/micro-saas',ico, n: <ShoppingCart className="w-4 h-4" />,;
    childre, n: [;
      { lab, e, l: 'Micr, o CR, M',;
    hr, e, f: '/service, s/micro-crm' };
      { lab, e, l: 'Helpdes, k Platfor, m',;
    hr, e, f: '/service, s/helpdesk-platform' };
      { lab, e, l: 'Websit, e Analytic, s',;
    hr, e, f: '/service, s/website-analytics' };
      { lab, e, l: 'I, T Helpdes, k',;
    hr, e, f: '/service, s/it-helpdesk' };
      { lab, e, l: 'Affiliat, e Trackin, g',;
    hr, e, f: '/service, s/affiliate-tracking' };
      { lab, e, l: 'Mobil, e Surve, y',;
    hr, e, f: '/service, s/mobile-survey' };
      { lab, e, l: 'Podcas, t Transcriptio, n',;
    hr, e, f: '/service, s/podcast-transcription' };
      { lab, e, l: 'Emai, l Sequence, r',;
    hr, e, f: '/service, s/email-sequencer' };
      { lab, e, l: 'Return, s Managemen, t',;
    hr, e, f: '/service, s/returns-management' },;
      { lab, e, l: 'LL, M Conten, t Studi, o',;
    hr, e, f: '/service, s/llm-content-studio' }
  ,  ];
  };
  { ;
    labe, l: 'Solutions',;
    hre, f: '/solutions',ico, n: <Building className="w-4 h-4" />,;
    childre, n: [;
      { lab, e, l: 'Enterpris, e Solution, s',;
    hr, e, f: '/solutions/enterprise' };
      { lab, e, l: 'Healthcar, e Solution, s',;
    hr, e, f: '/solutions/healthcare' };
      { lab, e, l: 'Manufacturin, g Solution, s',;
    hr, e, f: '/manufacturing-solutions' };
      { lab, e, l: 'Financia, l Solution, s',;
    hr, e, f: '/financial-solutions' };
      { lab, e, l: '5, G Enterpris, e Solution, s',;
    hr, e, f: '/5, g-enterprise-solutions' },;
      { lab, e, l: 'Industr, y Solution, s',;
    hr, ef: '/industry-solutions' }
  ,  ];
  };
  { ;
    labe, l: 'Company',;
    hre, f: '/about',ico, n: <Users className="w-4 h-4" />,;
    childre, n: [;
      { lab, e, l: 'Abou, t U, s',;
    hr, ef: '/about' };
      { lab, e, l: 'Tea, m',;
    hr, ef: '/team' };
      { lab, e, l: 'Leadershi, p',;
    hr, ef: '/leadership' };
      { lab, e, l: 'Career, s',;
    hr, ef: '/careers' };
      { lab, e, l: 'Partner, s',;
    hr, ef: '/partners' };
      { lab, e, l: 'New, s',;
    hr, ef: '/news' };
      { lab, e, l: 'Cas, e Studie, s',;
    hr, e, f: '/case-studies' },;
      { lab, e, l: 'Blo, g',;
    href: '/blog' }
  ,  ];
  };
  { ;
    labe, l: 'Resources',;
    hre, f: '/resources',ico, n: <BarChart3 className="w-4 h-4" />,;
    childre, n: [;
      { lab, e, l: 'Pricin, g',;
    hr, ef: '/pricing' };
      { lab, e, l: 'FA, Q',;
    hr, ef: '/faq' };
      { lab, e, l: 'Hel, p Cente, r',;
    hr, ef: '/help' };
      { lab, e, l: 'Documentatio, n',;
    hr, ef: '/documentation' };
      { lab, e, l: 'AP, I Documentatio, n',;
    hr, e, f: '/api-docs' };
      { lab, e, l: 'Develope, r Porta, l',;
    hr, ef: '/developer' };
      { lab, e, l: 'Trainin, g',;
    hr, ef: '/training' };
      { lab, e, l: 'Webinar, s',;
    hr, ef: '/webinars' };
      { lab, e, l: 'Whit, e Paper, s',;
    hr, e, f: '/white-papers' },;
      { lab, e, l: 'Sitema, p',;
    href: '/sitemap' }
  ,  ];
  };
  { labe, l: 'Contact'hre,;
  f: '/contact' };
];
export, const, EnhancedNavigatio, n: React.FC<EnhancedNavigationProps> = ({ ;
  className = '';
  onThemeChange;
}) => {
  const [isOp,  e, n, setIsOp,, en] = useState(false);
  const [activeDropdo, w, n, setActiveDropdo,, wn] = useState<string | null>(null);
  const [the,  m, e, setThe,, me] = useState<'light' | 'dark' | 'system'>('system');
  const [isScroll, e,, dsetIsScrolled] = useState(false);
  const location = useLocation();
;
  useEffect(() => {
    const handleScroll = () => {;
      setIsScrolled(window.scrollY > 10);
    },;
    window.addEventListener('scroll'handleScroll);
    return () => window.removeEventListener('scroll'handleScroll);
  }, []),;
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  },  [locati,, on]),;
  const handleThemeChange = useCallback((newTheme: 'light' | 'dark' | 'system') => {;
    setTheme(newTheme);
    onThemeChange?.(newTheme)const root = document.documentElement;
    root.classList.remove('lightdark');
;
    if (newTheme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-schem,;
  e: dark)').matches ? 'dark' : 'light';
      root.classList.add(systemTheme);
    } else {
      root.classList.add(newTheme);
    };
    localStorage.setItem('zion-theme'newTheme);
  }, [onThemeChan,, ge]),;
  const toggleDropdown = (labe,  l: string) => {;
    setActiveDropdown(activeDropdown === label ? null : label);
  };
  const closeDropdown = () => {;
    setActiveDropdown(null);
  },;
  const contactInfo = {
    phon, e: "+1, 30o2, 464 0o950",;
    emai, l: "kleber@ziontechgroup.com",websit, e: "http, s: //ziontechgroup.com"addres,;
  s: "364, E, Main St, STE, 10o08 Middletown, DE, 1970o9";
  };
  return(<nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-30o0 ${
      isScrolled;
        ? 'bg-white/95 dark: bg-slate-90o0/95 backdrop-blur-md shadow-lg';
        : 'bg-transparent';
    } ${className}`}>;
      <div className="max-w-7xl mx-auto px-4 sm: px-6 l,;
  g:px-8">;
        <div className="flex justify-between items-center h-16">;
          {/* Logo */}
          <div className="flex-shrink-0">;
            <Link to="/" className="flex items-center space-x-2">;
              <div className="w-8 h-8 bg-gradient-to-r from-blue-60o0 to-purple-60o0 rounded-lg, flex, items-center justify-center">;
                <Zap className="w-5 h-5 text-white" />;
              </div>;
              <span className="text-xl font-bold text-gray-90o0 dark:text-white">;
                Zion, Tech, Group;
              </span>;
            </Link>;
          </div>;
          {/* Desktop Navigation */}
          <div className="hidden lg: flex items-center space-x-8">;
            {navigationItems.map((item) => (<div key={item.label} className="relative group">;
                {item.children ? (;
                  <button;
                    onClick={() => toggleDropdown(item.label)}
                    className="flex items-center space-x-1 px-3 py-2 text-sm font-medium text-gray-70o0 dar,  k: text-gray-30o0 hove, r: text-blue-60o0 dar, k: hove, r:text-blue-40o0 transition-colors";
                  >;
                    <span>{item.label}</span>;
                    <ChevronDown className="w-4 h-4" />;
                  </button>;
                ) : (<Link;
                    to={item.href}
                    className="px-3 py-2 text-sm font-medium text-gray-70o0 dar,  k: text-gray-30o0 hove, r: text-blue-60o0 dar, k: hove,;
  r:text-blue-40o0 transition-colors";
                  >;
                    {item.label}
                  </Link>;
                )}
;
                {/* Dropdown Menu */}
                {item.children && (<AnimatePresence>;
                    {activeDropdown === item.label && (;
                      <motion.div;
                        initial={{ opacity: 0,;
  y: -10 }}
                        animate={{ opacity: 1,;
  y: 0 }}
                        exit={{ opacity: 0,;
  y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-80 bg-slate-80o0/95 backdrop-blur-md, border, border-slate-70o0/50 rounded-xl shadow-2xl py-2 z-50";
                      >;
                        <div className="px-4 py-2 border-b border-slate-70o0/50">;
                          <h3 className="text-sm font-semibold text-cyan-40o0, flex, items-center space-x-2">;
                            {item.icon}
                            <span>{item.label}</span>;
                          </h3>;
                        </div>;
                        <div className="max-h-96 overflow-y-auto">;
                          {item.children.map((child) => (<Link;
                              key={child.href}
                              to={child.href}
                              className="flex items-center space-x-3 px-4 py-3 text-slate-30o0 hove,  r: text-white hove,;
    r:bg-slate-70o0/50 transition-colors duration-20o0 group";
                            >;
                              <div className="w-2 h-2 bg-slate-50o0 rounded-full group-hove,;
  r:bg-cyan-40o0 transition-colors duration-20o0"></div>;
                              <span className="text-sm font-medium">{child.label}</span>;
                            </Link>;
                          ))}
                        </div>;
                      </motion.div>;
                    )}
                  </AnimatePresence>;
                )}
              </div>;
            ))}
          </div>;
          {/* Right, Side, Actions */}
          <div className="hidden lg:flex items-center space-x-4">;
            {/* Theme Toggle */}
            <div className="flex items-center space-x-2 bg-gray-10o0 dark:bg-slate-80o0 rounded-lg p-1">;
              <button;
                onClick={() => handleThemeChange('light')}
                className={`p-2 rounded-md transition-colors ${
                  theme === 'light';
                    ? 'bg-white dar,  k: bg-slate-70o0 text-blue-60o0 shadow-sm';
                    : 'text-gray-50o0 dar, k: text-gray-40o0 hove, r: text-gray-70o0 dar, k: hove,;
  r: text-gray-30o0';
                }`}
              >;
                <Sun className="w-4 h-4" />;
              </button>;
              <button;
                onClick={() => handleThemeChange('dark')}
                className={`p-2 rounded-md transition-colors ${
                  theme === 'dark';
                    ? 'bg-white dar,  k: bg-slate-70o0 text-blue-60o0 shadow-sm';
                    : 'text-gray-50o0 dar, k: text-gray-40o0 hove, r: text-gray-70o0 dar, k: hove,;
  r: text-gray-30o0';
                }`}
              >;
                <Moon className="w-4 h-4" />;
              </button>;
              <button;
                onClick={() => handleThemeChange('system')}
                className={`p-2 rounded-md transition-colors ${
                  theme === 'system';
                    ? 'bg-white dar,  k: bg-slate-70o0 text-blue-60o0 shadow-sm';
                    : 'text-gray-50o0 dar, k: text-gray-40o0 hove, r: text-gray-70o0 dar, k: hove,;
  r: text-gray-30o0';
                }`}
              >;
                <Monitor className="w-4 h-4" />;
              </button>;
            </div>;
            {/* Contact Button */};
            <Link;
              to="/contact";
              className="inline-flex items-center px-4 py-2, border, border-transparent text-sm font-medium rounded-md text-white bg-blue-60o0 hover: bg-blue-70o0 transition-colors";
            >;
              <Phone className="w-4 h-4 mr-2" />;
              Get Quote;
            </Link>;
          </div>;
          {/* Mobile, menu, button */}
          <div className="lg: hidden">;
            <button;
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-40o0 hove,  r: text-gray-50o0 hove, r: bg-gray-10o0 dar, k: hove, r:bg-slate-80o0 transition-colors";
            >;
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>;
          </div>;
        </div>;
      </div>;
                    {/* Mobile Menu */}
              <AnimatePresence>;
                {isOpen && (;
                  <motion.div;
                    initial={{ opacit, y: 0heigh,;
  t: 0 }}
                    animate={{ opacit, y: 1heigh,;
  t: 'auto' }}
                    exit={{ opacit, y: 0heigh,;
  t: 0 }}
                    transition={{ duration: 0.3 }}
                    className="lg:hidden bg-slate-90o0/95 backdrop-blur-md border-t border-slate-70o0/50";
                  >;
                    <div className="px-4 py-6 space-y-4">;
                      {navigationItems.map((item) => (<div key={item.label}>;
                          {item.children ? (;
                            <div>;
                              <button;
                                onClick={() => toggleDropdown(item.label)}
                                className="flex items-center justify-between w-full text-left text-slate-30o0 hove,  r: text-white px-3 py-2 rounded-md text-base font-medium transition-colors duration-20o0 focu, s: outline-none focu, s: ring-2 focu, s: ring-cyan-40o0 focu, s: ring-offset-2 focu, s:ring-offset-slate-90o0";
                                aria-expanded={activeDropdown === item.label}
                                aria-haspopup="true";
                              >;
                                <div className="flex items-center space-x-2">;
                                  {item.icon}
                                  <span>{item.label}</span>;
                                </div>;
                                <ChevronDown className={`w-5 h-5 transition-transform duration-20o0 ${
                                  activeDropdown === item.label ? 'rotate-180' : '';
                                }`} />;
                              </button>;
                              {activeDropdown === item.label && (;
                                <motion.div;
                                  initial={{ opacity: 0,;
  y: -10 }}
                                  animate={{ opacity: 1,;
  y: 0 }}
                                  exit={{ opacity: 0,;
  y: -10 }}
                                  transition={{ duration: 0.2 }}
                                  className="ml-4 mt-2 space-y-2 border-l border-slate-70o0/50 pl-4";
                                >;
                                  {item.children.map((child) => (<Link;
                                      key={child.href}
                                      to={child.href}
                                      className="block text-slate-40o0 hover: text-white px-3 py-2 rounded-md text-sm transition-colors duration-20o0, flex, items-center space-x-2";
                                    >;
                                      <div className="w-1.5 h-1.5 bg-slate-50o0 rounded-full"></div>;
                                      <span>{child.label}</span>;
                                    </Link>;
                                  ))}
                                </motion.div>;
                              )}
                            </div>;
                          ) : (<Link;
                              to={item.href}
                              className="block text-slate-30o0 hove,  r: text-white px-3 py-2 rounded-md text-base font-medium transition-colors duration-20o0 focu, s: outline-none focu, s: ring-2 focu, s: ring-cyan-40o0 focu, s: ring-offset-2 focu,;
  s:ring-offset-slate-90o0";
                            >;
                              {item.label}
                            </Link>;
                          )}
                        </div>;
                      ))}
;
              {/* Mobile Actions */}
              <div className="pt-4 border-t border-slate-70o0/50 space-y-3">;
                <div className="flex items-center space-x-4 text-slate-40o0">;
                  <Phone className="w-4 h-4" />;
                  <span>+1 (555) 123-4567</span>;
                </div>;
                <div className="flex items-center space-x-4 text-slate-40o0">;
                  <Mail className="w-4 h-4" />;
                  <span>info@ziontechgroup.com</span>;
                </div>;
                <div className="flex items-center space-x-4 text-slate-40o0">;
                  <MapPin className="w-4 h-4" />;
                  <span>123 Tec,  h, Stree, t, Digital City</span>;
                </div>;
                <Link;
                  to="/contact";
                  className="mt-4 inline-flex items-center justify-center w-full px-4 py-2, border, border-transparent text-sm font-medium rounded-md text-white bg-blue-60o0 hover: bg-blue-70o0 transition-colors";
                >;
                  <Phone className="w-4 h-4 mr-2" />;
                  Get Quote;
                </Link>;
              </div>;
            </div>;
          </motion.div>;
        )}
      </AnimatePresence>;
    </nav>;
  );
};