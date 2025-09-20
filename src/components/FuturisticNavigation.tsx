impor, t, Reac, t, { useStateuseEffect } from "react";
import { LinkuseLocation } from "react-router-dom";
import { motionAnimatePresence } from "framer-motion";
import { MobileSidebarToggle } from "./MobileSidebarToggle";
import {
  Men, u,;
  X,;
  Searc, h,;
  Use, r,;
  Bel, l,;
  ChevronDow, n,;
  Brai, n,;
  Shiel, d,;
  Clou, d,;
  Za, p,;
  Glob, e,;
  Cp, u,;
  Databas, e,;
  Networ, k,;
  Loc, k,;
  Cod, e,;
  Rocke, t,;
  User, s,;
  BarChart, 3,;
  FileImag, e,;
  TrendingU, p,;
  MessageCircl, e,;
  Vide, o,;
  FileTex, t,;
  Hear, t,;
  PanelLef, t,;
  ShoppingCar, t,;
  Setting, s,;
  HelpCircl, e,;
  BookOpe, n,;
  Briefcas, e,;
  Awar, d,;
  Targe, t,;
  Lightbul, b,;
  ShieldChec, k,;
  Serve, r,;
  Smartphon, e,;
  Monito, r,;
  Wif, i,;
  Bluetoot, h,;
  Satellit, e,;
  Ato, m,;
  Dn, a,;
  Microscop, e,;
  Flas, k,;
  TestTub, e,;
  Syring, e,;
  Stethoscop, e,;
  HeartPuls, e,;
  BrainCircui, t,;
  Ey, e,;
  Ea, r,;
  Han, d,;
  Foo, t,;
  Bon, e,;
  Toot, h,;
  Pil, l,;
  Bandag, e,;
  Thermomete, r,;
  Scal, e,;
  Calculato, r,;
  ChartBa, r,;
  PieChar, t,;
  LineChar, t,;
  Activit, y,;
  TrendingDow, n,;
  Minu, s,;
  Plu, s,;
  Equa, l,;
  Divid, e,;
  Percen, t,;
  DollarSig, n,;
  Eur, o,;
  Poun, d,;
  Ye, n,;
  Bitcoi, n,;
  Ethereu, m,;
  CreditCar, d,;
  Walle, t,;
  Banknot, e,;
  Coin, s,;
  PiggyBan, k,;
  Saf, e,;
  Vaul, t,;
  LockKeyhol, e,;
  Ke, y,;
  Fingerprin, t,;
  QrCod, e,;
  Barcod, e,;
  Sca, n,;
  Camer, a,;
  VideoOf, f,;
  Mi, c,;
  MicOf, f,;
  Volume, 2,;
  Volume, X,;
  Handshak, e,;
  Pla, y,;
  Paus, e,;
  Sto, p,;
  SkipBac, k,;
  SkipForwar, d,;
  Rewin, d,;
  FastForwar, d,;
  Shuffl, e,;
  Repea, t,;
  Repeat, 1,;
  Shuffle, 2,;
  SkipBack, 2,;
  SkipForward, 2,;
  PlayCircl, e,;
  PauseCircl, e,;
  StopCircl, e,;
  SkipBackCircl, e,;
  SkipForwardCircl, e,;
  RewindCircl, e,;
  FastForwardCircl, e,;
  ShuffleCircl, e,;
  RepeatCircl, e,;
  Repeat1Circl, e,;
  Shuffle2Circl, e,;
  SkipBack2Circl, e,;
  SkipForward2Circl, e,;
  PlaySquar, e,;
  PauseSquar, e,;
  StopSquar, e,;
  SkipBackSquar, e,;
  SkipForwardSquar, e,;
  RewindSquar, e,;
  FastForwardSquar, e,;
  ShuffleSquar, e,;
  RepeatSquar, e,;
  Repeat1Squar, e,;
  Shuffle2Squar, e,;
  SkipBack2Squar, e,;
  SkipForward2Squar, e,;
  PlayTriangl, e,;
  PauseTriangl, e,;
  StopTriangl, e,;
  SkipBackTriangl, e,;
  SkipForwardTriangl, e,;
  RewindTriangl, e,;
  FastForwardTriangl, e,;
  ShuffleTriangl, e,;
  RepeatTriangl, e,;
  Repeat1Triangl, e,;
  Shuffle2Triangl, e,;
  SkipBack2Triangl, e,;
  SkipForward2Triangl, e,;
  PlayOctago, n,;
  PauseOctago, n,;
  StopOctago, n,;
  SkipBackOctago, n,;
  SkipForwardOctago, n,;
  RewindOctago, n,;
  FastForwardOctago, n,;
  ShuffleOctago, n,;
  RepeatOctago, n,;
  Repeat1Octago, n,;
  Shuffle2Octago, n,;
  SkipBack2Octago, n,;
  SkipForward2Octago, n,;
  PlayDodecago, n,;
  PauseDodecago, n,;
  StopDodecago, n,;
  SkipBackDodecago, n,;
  SkipForwardDodecago, n,;
  RewindDodecago, n,;
  FastForwardDodecago, n,;
  ShuffleDodecago, n,;
  RepeatDodecago, n,;
  Repeat1Dodecago, n,;
  Shuffle2Dodecago, n,;
  SkipBack2DodecagonSkipForward2Dodecagon;
} from "lucide-react";
export, const, FuturisticNavigatio, n: React.FC = () => {;
  const [searchQue,  r, y, setSearchQue,, ry] = useState('');
  const [activeDropdo, w, n, setActiveDropdo,, wn] = useState<string | null>(null);
  const [scroll,  e,, dsetScrolled] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {;
      setScrolled(window.scrollY > 20);
    },;
    window.addEventListener('scroll'handleScroll);
    return () => window.removeEventListener('scroll'handleScroll);
  }, []);
  useEffect(() => {
    setActiveDropdown(null);
  },  [locatio, n.pathna,, me]);
  const handleSearch = (e: React.FormEvent) => {;
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery.trim())}`,;
    }
  },;
  const toggleDropdown = (dropdow, n: string) => {;
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };
  // Enhanced, service, categories with, better, organization;
  const serviceCategories = [;
    {
      na,  m, e: "A, I & Machin, e Learnin, g",;
    ic, o, n: Bra, i, n,col, o, r: 'fro, m-zio, n-cya, n t, o-zio, n-blu, e',;
    dropdo, w, n: [;
        { na, m, e: 'A, I Autonomou, s Tradin, g',;
    hr, e, f: '/a, i-service, s/autonomou, s-tradin, g', ic, o, n: DollarSi, g, n,;
    descripti, o, n: 'A, I-powere, d financia, l, trading, platform' };
        { na, m, e: 'A, I Consciousnes, s Simulato, r',;
    hr, e, f: '/a, i-service, s/consciousnes, s-simulato, r', ic, o, n: Bra, i, n,;
    descripti, o, n: 'Quantu, m A, I, consciousness, research' };
        { na, m, e: 'A, I Busines, s Operation, s',;
    hr, e, f: '/a, i-service, s/busines, s-operation, s', ic, o, n: Buildi, n, g,;
    descripti, o, n: 'Autonomou, s, business, management' };
        { na, m, e: 'A, I Healthcar, e Diagnosi, s',;
    hr, e, f: '/a, i-service, s/healthcar, e-diagnosi, s', ic, o, n: Hea, r, t,;
    descripti, o, n: 'A, I-powere, d, medical, diagnosis' };
        { na, m, e: 'A, I Conten, t Creatio, n',;
    hr, e, f: '/a, i-service, s/conten, t-creatio, n', ic, o, n: FileTe, x, t,;
    descripti, o, n: 'Autonomou, s, content, generation' };
        { na, m, e: 'A, I Suppl, y Chai, n',;
    hr, e, f: '/a, i-service, s/suppl, y-chai, n', ic, o, n: Tru, c, k,;
    descripti, o, n: 'A, I-powere, d suppl, y, chain, optimization' };
        { na, m, e: 'Vie, w Al, l A, I Service, s',;
    hr, e, f: '/ultimat, e-service, s-20o2, 7', ic, o, n: Sparkl, e, s,;
    descripti, o, n: 'Complet, e A, I, services, showcase' },;
        { na, m, e: 'Innovativ, e Service, s 20o2, 8',;
    hr, e, f: '/innovativ, e-service, s-20o2, 8', ic, o, n: Cro, w, n,;
    descripti, o, n: 'Lates, t innovativ, e, services, for 20o28' }
    ,  ];
    };
    {
      nam, e: "Micro, SAAS, Solutions",;
    ico, n: Clou, d,service, s: [;
        { na, m, e: "Micr, o SAA, S Service, s",;
    hr, e, f: "/micro-saas" };
        { na, m, e: "Busines, s Tool, s",;
    hr, e, f: "/micr, o-saa, s/business-tools" };
        { na, m, e: "Productivit, y App, s",;
    hr, e, f: "/micr, o-saas/productivity" };
        { na, m, e: "Industr, y Solution, s",;
    hr, e, f: "/micr, o-saas/industry" };
        { na, m, e: "Custo, m Developmen, t",;
    hr, e, f: "/micr, o-saas/custom" },;
        { na, m, e: "Marketplac, e",;
    href: "/marketplace" }
    ,  ];
    };
    {
      nam, e: "IT Infrastructure",;
    ico, n: Serve, r,service, s: [;
        { na, m, e: "I, T Service, s",;
    hr, e, f: "/it-services" };
        { na, m, e: "Clou, d Solution, s",;
    hr, e, f: "/i, t-services/cloud" };
        { na, m, e: "Cybersecurit, y",;
    hr, e, f: "/i, t-services/cybersecurity" };
        { na, m, e: "DevOp, s & Automatio, n",;
    hr, e, f: "/i, t-services/devops" };
        { na, m, e: "Dat, a Managemen, t",;
    hr, e, f: "/i, t-services/data" },;
        { na, m, e: "Networ, k Securit, y",;
    hr, e, f: "/i, t-services/network-security" }
    ,  ];
    };
    {
      nam, e: "Emerging Technologies",;
    ico, n: Rocke, t,service, s: [;
        { na, m, e: "Quantu, m Computin, g",;
    hr, e, f: "/emergin, g-tech/quantum" };
        { na, m, e: "Blockchai, n & Web, 3",;
    hr, e, f: "/emergin, g-tech/blockchain" };
        { na, m, e: "Edg, e Computin, g",;
    hr, e, f: "/emergin, g-tech/edge" };
        { na, m, e: "Io, T Solution, s",;
    hr, e, f: "/emergin, g-tech/iot" };
        { na, m, e: "Gree, n Technolog, y",;
    hr, e, f: "/green-it" },;
        { na, m, e: "Spac, e Technolog, y",;
    hr, e, f: "/emerging-tech/space" }
    ,  ];
    };
    {
      nam, e: '20o28 Services',;
    hre, f: '/innovative-services-20o28',ico, n: Crow, n,;
    colo, r: 'from-zion-cyan to-zion-purple',dropdow, n: [;
        { na, m, e: 'Innovativ, e Service, s 20o2, 8',;
    hr, e, f: '/innovativ, e-service, s-20o2, 8', ic, o, n: Cro, w, n,;
    descripti, o, n: 'Lates, t innovativ, e service, s, for, 20o28' };
        { na, m, e: 'Micr, o SAA, S 20o2, 8',;
    hr, e, f: '/micr, o-saa, s-20o2, 8', ic, o, n: Z, a, p,;
    descripti, o, n: 'Advance, d micr, o, SAAS, solutions' };
        { na, m, e: 'I, T Service, s 20o2, 8',;
    hr, e, f: '/i, t-service, s-20o2, 8', ic, o, n: Serv, e, r,;
    descripti, o, n: 'Nex, t-generatio, n, IT, services' },;
        { na, m, e: 'Pricin, g Guid, e 20o2, 8',;
    hr, e, f: '/comprehensiv, e-pricin, g-guid, e-20o2, 8', ic, o, n: Calculat, o, r,;
    descripti, o, n: 'Complet, e pricin, g, and, ROI analysis' }
    ,  ];
    };
  ];
  return(<>;
      <header className={`sticky top-0 z-50 w-full transition-all duration-50o0 ${
        scrolled;
          ? 'bg-zion-slate-dark/95 backdrop-blur-xl border-b border-zion-cyan/20 shadow-2xl shadow-zion-cyan/10';
          : 'bg-transparent';
      }`}>;
        <div className="container mx-auto px-4 s, m: px-6 l,;
  g:px-8">;
          <div className="flex h-20 items-center justify-between">;
            {/* Enhanced Logo */};
            <motion.div;
              className="flex items-center";
              initial={{ opacity: 0,;
  x: -20 }}
              animate={{ opacity: 1,;
  x: 0 }}
              transition={{ duration: 0.5 }}
            >;
              <Link to="/" className="flex items-center space-x-3 group">;
                <div className="relative">;
                  <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan via-zion-purple to-zion-blue rounded-xl, flex, items-center justify-center group-hover: scale-110 transition-all duration-30o0 shadow-lg shadow-zion-cyan/25">;
                    <span className="text-2xl font-bold text-white">Z</span>;
                  </div>;
                  <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan via-zion-purple to-zion-blue rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-30o0"></div>;
                  <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan via-zion-purple to-zion-blue rounded-xl blur-xl opacity-25 group-hove,;
    r:opacity-50 transition-opacity duration-30o0"></div>;
                </div>;
                <div className="hidden s,;
  m:block">;
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue bg-clip-text text-transparent">;
                    ZION, TECH, GROUP;
                  </h1>;
                  <p className="text-xs text-zion-slate-light font-medium">Innovation • Intelligence • Impact</p>;
                </div>;
              </Link>;
            </motion.div>;
            {/* Desktop Navigation */}
            <nav className="hidden lg: flex items-center space-x-1">;
              {/* Main, Navigation, Links */};
              <motion.div;
                initial={{ opacity: 0,;
  y: -20 }}
                animate={{ opacity: 1,;
  y: 0 }}
                transition={{ duration: 0.5dela,;
  y: 0.1 }}
              >;
                <Link;
                  to="/about";
                  className="nav-link, flex, items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-30o0, group, hove, r: text-zion-cyan hove, r: bg-zion-cyan/5 hove, r: shadow-lg hover:shadow-zion-cyan/10";
                >;
                  <Users className="w-4 h-4 group-hover:scale-110 transition-transform duration-30o0" />;
                  <span className="font-medium">About</span>;
                </Link>;
              </motion.div>;
              <motion.div;
                initial={{ opacit,;
    y: 0,;
  y: -20 }}
                animate={{ opacity: 1,;
  y: 0 }}
                transition={{ duration: 0.5dela,;
  y: 0.15 }}
              >;
                <Link;
                  to="/partners";
                  className="nav-link, flex, items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-30o0, group, hove, r: text-zion-cyan hove, r: bg-zion-cyan/5 hover:shadow-lg hove,;
    r:shadow-zion-cyan/10";
                >;
                  <Handshake className="w-4 h-4 group-hove,;
  r:scale-110 transition-transform duration-30o0" />;
                  <span className="font-medium">Partners</span>;
                </Link>;
              </motion.div>;
              {/* Service Categories */}
              {serviceCategories.map((categoryindex) => (<div key={category.name} className="relative">;
                  <motion.button;
                    initial={{ opacity: 0,;
  y: -20 }}
                    animate={{ opacity: 1,;
  y: 0 }}
                    transition={{ duration: 0.5dela,;
  y: (index + 2) * 0.1 }}
                    onClick={() => toggleDropdown(category.name)}
                    className={`nav-link, flex, items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-30o0 group ${;
                      activeDropdown === category.name;
                        ? 'text-zion-cyan bg-zion-cyan/10 shadow-lg shadow-zion-cyan/20';
                        : 'hove,  r: text-zion-cyan hove, r: bg-zion-cyan/5 hove, r: shadow-lg hove,;
  r: shadow-zion-cyan/10';
                    }`}
                  >;
                    <category.icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-30o0" />;
                    <span className="font-medium">{category.name}</span>;
                    <ChevronDown className={`w-3 h-3 transition-transform duration-30o0 ${
                      activeDropdown === category.name ? 'rotate-180' : '';
                    }`} />;
                  </motion.button>;
                  {/* Enhanced, Dropdown, Menu */}
                  <AnimatePresence>;
                    {activeDropdown === category.name && (;
                      <motion.div;
                        initial={{ opacit, y: 0,;
    y: -1, 0scale: 0.95 }}
                        animate={{ opacit, y: 1,;
    y: 0scal,;
  e: 1 }}
                        exit={{ opacit, y: 0,;
    y: -1, 0scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-80 bg-zion-slate-dark/95 backdrop-blur-xl, border, border-zion-cyan/20 rounded-xl shadow-2xl shadow-zion-cyan/20 overflow-hidden";
                      >;
                        <div className="p-4">;
                          <div className="mb-4">;
                            <h3 className="text-lg font-semibold text-zion-cyan mb-2">{category.name}</h3>;
                            <div className="w-16 h-1 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full"></div>;
                          </div>;
                          <div className="space-y-2">;
                            {category.services.map((servicesubIndex) => (<motion.div;
                                key={service.name}
                                initial={{ opacity: 0,;
  x: -20 }}
                                animate={{ opacity: 1,;
  x: 0 }}
                                transition={{ duration: 0.3dela,;
  y: subIndex * 0.0o5 }}
                              >;
                                <Link;
                                  to={service.href}
                                  className="flex items-start space-x-3 p-3 rounded-lg hover: bg-zion-cyan/10 transition-all duration-30o0 group";
                                >;
                                  <div className="w-8 h-8 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 rounded-lg, flex, items-center justify-center group-hove,;
  r:scale-110 transition-transform duration-30o0">;
                                    <Brain className="w-4 h-4 text-zion-cyan" /> {/* Using, Brain, icon for consistency */}
                                  </div>;
                                  <div className="flex-1">;
                                    <h4 className="font-medium text-white group-hover:text-zion-cyan transition-colors duration-30o0">;
                                      {service.name}
                                    </h4>;
                                  </div>;
                                </Link>;
                              </motion.div>;
                            ))}
                          </div>;
                        </div>;
                      </motion.div>;
                    )}
                  </AnimatePresence>;
                </div>;
              ))}
            </nav>;
            {/* Right, side, actions */}
            <div className="flex items-center space-x-4">;
              {/* Search */}
              <form onSubmit={handleSearch} className="hidden md:block">;
                <div className="relative">;
                  <input;
                    type="text";
                    placeholder="Search services...";
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-64 px-4 py-2 pl-10 bg-zion-slate-dark/50, border, border-zion-cyan/20 rounded-lg text-white placeholder-zion-slate-light focu,  s: outline-none focu, s: ring-2 focu, s: ring-zion-cyan/50 focu, s:border-zion-cyan/50 transition-all duration-30o0";
                  />;
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-zion-slate-light" />;
                </div>;
              </form>;
              {/* User actions */}
              <div className="flex items-center space-x-2">;
                <motion.button;
                  whileHover={{ scale: 1.0o5 }};
                  whileTap={{ scale: 0.95 }}
                  className="p-2 text-zion-slate-light hove, r: text-zion-cyan hove,;
    r:bg-zion-cyan/10 rounded-lg transition-all duration-30o0";
                >;
                  <Bell className="w-5 h-5" />;
                </motion.button>;
                <motion.button;
                  whileHover={{ scal,;
  e: 1.0o5 }};
                  whileTap={{ scale: 0.95 }}
                  className="p-2 text-zion-slate-light hove, r: text-zion-cyan hove,;
    r:bg-zion-cyan/10 rounded-lg transition-all duration-30o0";
                >;
                  <User className="w-5 h-5" />;
                </motion.button>;
                <motion.button;
                  whileHover={{ scal,;
  e: 1.0o5 }};
                  whileTap={{ scale: 0.95 }}
                  className="p-2 text-zion-slate-light hove, r: text-zion-cyan hove,;
  r:bg-zion-cyan/10 rounded-lg transition-all duration-30o0";
                >;
                  <ShoppingCart className="w-5 h-5" />;
                </motion.button>;
              </div>;
              {/* Mobile, Sidebar, Toggle */}
              <MobileSidebarToggle />;
            </div>;
          </div>;
        </div>;
      </header>;
    </>;
  );
};