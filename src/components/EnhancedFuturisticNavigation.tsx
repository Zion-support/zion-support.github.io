impor, t, Reac, t, { useStat, e, useEffect } from "react";
import { Lin, k, useLocation } from "react-router-dom";
import { motio, n, AnimatePresence } from "framer-motion";
import {
  Men, u,
  X,
  Searc, h,
  Use, r,
  Bel, l,
  ChevronDow, n,
  Brai, n,
  Shiel, d,
  Clou, d,
  Za, p,
  Glob, e,
  Cp, u,
  Databas, e,
  Networ, k,
  Loc, k,
  Cod, e,
  Rocke, t,
  User, s,
  BarChart, 3,
  FileImag, e,
  TrendingU, p,
  MessageCircl, e,
  Vide, o,
  FileTex, t,
  Hear, t,
  PanelLef, t,
  ShoppingCar, t,
  Setting, s,
  HelpCircl, e,
  BookOpe, n,
  Briefcas, e,
  Awar, d,
  Targe, t,
  Lightbul, b,
  ShieldChec, k,
  Serve, r,
  Smartphon, e,
  Monito, r,
  Wif, i,
  Bluetoot, h,
  Satellit, e,
  Ato, m,
  Dn, a,
  Microscop, e,
  Flas, k,
  TestTub, e,
  Syring, e,
  Stethoscop, e,
  HeartPuls, e,
  BrainCircui, t,
  Ey, e,
  Ea, r,
  Han, d,
  Foo, t,
  Bon, e,
  Toot, h,
  Pil, l,
  Bandag, e,
  Thermomete, r,
  Scal, e,
  Calculato, r,
  ChartBa, r,
  PieChar, t,
  LineChar, t,
  Activit, y,
  TrendingDow, n,
  Minu, s,
  Plu, s,
  Equa, l,
  Divid, e,
  Percen, t,
  DollarSig, n,
  Eur, o,
  Poun, d,
  Ye, n,
  Bitcoi, n,
  Ethereu, m,
  CreditCar, d,
  Walle, t,
  Banknot, e,
  Coin, s,
  PiggyBan, k,
  Saf, e,
  Vaul, t,
  LockKeyhol, e,
  Ke, y,
  Fingerprin, t,
  QrCod, e,
  Barcod, e,
  Sca, n,
  Camer, a,
  VideoOf, f,
  Mi, c,
  MicOf, f,
  Volume, 2,
  Volume, X,
  Pla, y,
  Paus, e,
  Sto, p,
  SkipBac, k,
  SkipForwar, d,
  Rewin, d,
  FastForwar, d,
  Shuffl, e,
  Repea, t,
  Repeat, 1,
  Shuffle, 2,
  SkipBack, 2,
  SkipForward, 2,
  PlayCircl, e,
  PauseCircl, e,
  StopCircl, e,
  SkipBackCircl, e,
  SkipForwardCircl, e,
  RewindCircl, e,
  FastForwardCircl, e,
  ShuffleCircl, e,
  RepeatCircl, e,
  Repeat1Circl, e,
  Shuffle2Circl, e,
  SkipBack2Circl, e,
  SkipForward2Circl, e,
  PlaySquar, e,
  PauseSquar, e,
  StopSquar, e,
  SkipBackSquar, e,
  SkipForwardSquar, e,
  RewindSquar, e,
  FastForwardSquar, e,
  ShuffleSquar, e,
  RepeatSquar, e,
  Repeat1Squar, e,
  Shuffle2Squar, e,
  SkipBack2Squar, e,
  SkipForward2Squar, e,
  PlayTriangl, e,
  PauseTriangl, e,
  StopTriangl, e,
  SkipBackTriangl, e,
  SkipForwardTriangl, e,
  RewindTriangl, e,
  FastForwardTriangl, e,
  ShuffleTriangl, e,
  RepeatTriangl, e,
  Repeat1Triangl, e,
  Shuffle2Triangl, e,
  SkipBack2Triangl, e,
  SkipForward2Triangl, e,
  PlayOctago, n,
  PauseOctago, n,
  StopOctago, n,
  SkipBackOctago, n,
  SkipForwardOctago, n,
  RewindOctago, n,
  FastForwardOctago, n,
  ShuffleOctago, n,
  RepeatOctago, n,
  Repeat1Octago, n,
  Shuffle2Octago, n,
  SkipBack2Octago, n,
  SkipForward2Octago, n,
  PlayDodecago, n,
  PauseDodecago, n,
  StopDodecago, n,
  SkipBackDodecago, n,
  SkipForwardDodecago, n,
  RewindDodecago, n,
  FastForwardDodecago, n,
  ShuffleDodecago, n,
  RepeatDodecago, n,
  Repeat1Dodecago, n,
  Shuffle2Dodecago, n,
  SkipBack2Dodecago, n,
  SkipForward2Dodecago, n,
  Hom, e,
  Inf, o,
  Phon, e,
  Mai, l,
  MapPi, n,
  Sta, r,
  Crow, n,
  Ge, m,
  Sparkle, s,
  Flam, e,
  Thunde, r,
  Lightnin, g,
  Su, n,
  Moo, n,
  Plane, t,
  Galax, y,
  Univers, e,
  Infinit, y,
  Alph, a,
  Bet, a,
  Gamm, a,
  Delt, a,
  Epsilo, n,
  Zet, a,
  Et, a,
  Thet, a,
  Iot, a,
  Kapp, a,
  Lambd, a,
  M, u,
  N, u,
  X, i,
  Omicro, n,
  P, i,
  Rh, o,
  Sigm, a,
  Ta, u,
  Upsilo, n,
  Ph, i,
  Ch, i,
  Ps, i,
  Omega
} from "lucide-react";
export const EnhancedFuturisticNavigatio, n: React.FC = () => {
  const [mobileMenuOp,  e, n, setMobileMenuOp, e, n] = useState(false);
  const [searchQue, r, y, setSearchQue, r, y] = useState('');
  const [activeDropdo,  w, n, setActiveDropdo, w, n] = useState<string | null>(null);
  const [scroll, e, d, setScroll, e, d] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    }, 
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll',  handleScroll);
  }, []),

  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  },  [locatio, n.pathna, m, e]);
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery.tri, m())}`, 
    }
  },

  const toggleDropdown = (dropdow, n: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  };
  const navigationItems = [
    {
      na,  m, e: 'Hom, e',
    hr, e, f: '/',ic, o, n: Ho, m, e,
    col, o, r: 'fro, m-zio, n-cya, n t, o-zio, n-blu, e',isMa, i, n: tru, e
    };
    {
      na, m, e: 'A, I & Consciousnes, s',
    hr, e, f: '/a, i-service, s',ic, o, n: Bra, i, n,
    col, o, r: 'fro, m-zio, n-purpl, e t, o-zio, n-pin, k',dropdo, w, n: [
        { na, m, e: 'A, I Consciousnes, s Simulato, r',
    hr, e, f: '/a, i-service, s/consciousnes, s-simulato, r', ic, o, n: Bra, i, n,
    descripti, o, n: 'Advance, d A, I consciousnes, s researc, h platfor, m' };
        { na, m, e: 'Quantu, m Emotio, n Processo, r',
    hr, e, f: '/a, i-service, s/quantu, m-emotio, n', ic, o, n: Hea, r, t,
    descripti, o, n: 'Quantu, m-powere, d emotiona, l intelligenc, e' };
        { na, m, e: 'A, I Autonomou, s System, s',
    hr, e, f: '/a, i-service, s/autonomou, s-system, s', ic, o, n: C, p, u,
    descripti, o, n: 'Sel, f-managin, g A, I infrastructur, e' };
        { na, m, e: 'Neura, l Networ, k Architec, t',
    hr, e, f: '/a, i-service, s/neura, l-architec, t', ic, o, n: Netwo, r, k,
    descripti, o, n: 'Custo, m neura, l networ, k desig, n' };
        { na, m, e: 'A, I Ethic, s Framewor, k',
    hr, e, f: '/a, i-service, s/a, i-ethic, s', ic, o, n: Shie, l, d,
    descripti, o, n: 'Ethica, l A, I developmen, t tool, s' },
        { na, m, e: 'Predictiv, e Analytic, s',
    hr, e, f: '/a, i-service, s/predictiv, e-analytic, s', ic, o, n: Trending, U, p,
    descripti, o, n: 'A, I-powere, d busines, s insight, s' }
      ]
    };
    {
      nam, e: 'Micro SAAS',
    hre, f: '/micro-saas',ico, n: Cod, e,
    colo, r: 'from-zion-purple to-zion-cyan',dropdow, n: [
        { na, m, e: 'A, I Busines, s Intelligenc, e',
    hr, e, f: '/micr, o-saa, s/a, i-busines, s-intelligenc, e', ic, o, n: BarChar, t, 3,
    descripti, o, n: 'Intelligen, t busines, s analytic, s platfor, m' };
        { na, m, e: 'Custome, r Experienc, e Hu, b',
    hr, e, f: '/micr, o-saa, s/custome, r-experienc, e', ic, o, n: Use, r, s,
    descripti, o, n: '36, 0° custome, r journe, y managemen, t' };
        { na, m, e: 'Quantu, m Computin, g Suit, e',
    hr, e, f: '/micr, o-saa, s/quantu, m-computin, g', ic, o, n: At, o, m,
    descripti, o, n: 'Quantu, m computin, g solution, s' };
        { na, m, e: 'Suppl, y Chai, n Optimize, r',
    hr, e, f: '/micr, o-saa, s/suppl, y-chai, n', ic, o, n: Glo, b, e,
    descripti, o, n: 'A, I-powere, d suppl, y chai, n managemen, t' };
        { na, m, e: 'Cybersecurit, y Platfor, m',
    hr, e, f: '/micr, o-saa, s/cybersecurit, y', ic, o, n: ShieldChe, c, k,
    descripti, o, n: 'Advance, d threa, t protectio, n' };
        { na, m, e: 'Io, T Edg, e Computin, g',
    hr, e, f: '/micr, o-saa, s/io, t-edg, e', ic, o, n: C, p, u,
    descripti, o, n: 'Edg, e computin, g solution, s' };
        { na, m, e: 'Conten, t Creatio, n A, I',
    hr, e, f: '/micr, o-saa, s/conten, t-creatio, n', ic, o, n: FileTe, x, t,
    descripti, o, n: 'A, I-powere, d conten, t generatio, n' },
        { na, m, e: 'H, R Managemen, t Suit, e',
    hr, e, f: '/micr, o-saa, s/h, r-platfor, m', ic, o, n: Briefca, s, e,
    descripti, o, n: 'Moder, n H, R managemen, t platfor, m' }
      ]
    };
    {
      nam, e: 'IT Services',
    hre, f: '/it-services',ico, n: Networ, k,
    colo, r: 'from-zion-blue to-zion-purple',dropdow, n: [
        { na, m, e: 'Infrastructur, e Managemen, t',
    hr, e, f: '/i, t-service, s/infrastructur, e', ic, o, n: Serv, e, r,
    descripti, o, n: 'Complet, e infrastructur, e solution, s' };
        { na, m, e: 'Digita, l Transformatio, n',
    hr, e, f: '/i, t-service, s/digita, l-transformatio, n', ic, o, n: Z, a, p,
    descripti, o, n: 'Digita, l transformatio, n consultin, g' };
        { na, m, e: 'I, T Consultin, g',
    hr, e, f: '/i, t-service, s/consultin, g', ic, o, n: Use, r, s,
    descripti, o, n: 'Exper, t I, T consultin, g service, s' };
        { na, m, e: 'Onsit, e Suppor, t',
    hr, e, f: '/i, t-service, s/onsit, e-suppor, t', ic, o, n: Wi, f, i,
    descripti, o, n: '2, 4/7 onsit, e technica, l suppor, t' };
        { na, m, e: 'Gree, n I, T Solution, s',
    hr, e, f: '/i, t-service, s/gree, n-i, t', ic, o, n: Hea, r, t,
    descripti, o, n: 'Sustainabl, e I, T infrastructur, e' },
        { na, m, e: '5, G Networ, k Solution, s',
    hr, e, f: '/i, t-service, s/5, g-solution, s', ic, o, n: Satelli, t, e,
    descripti, o, n: 'Nex, t-ge, n networ, k infrastructur, e' }
      ]
    };
    {
      nam, e: 'Emerging Tech',
    hre, f: '/emerging-tech',ico, n: Rocke, t,
    colo, r: 'from-zion-cyan to-zion-purple',dropdow, n: [
        { na, m, e: 'Quantu, m Computin, g',
    hr, e, f: '/emergin, g-tec, h/quantu, m-computin, g', ic, o, n: At, o, m,
    descripti, o, n: 'Quantu, m computin, g solution, s' };
        { na, m, e: 'Blockchai, n & DeF, i',
    hr, e, f: '/emergin, g-tec, h/blockchai, n-def, i', ic, o, n: Lo, c, k,
    descripti, o, n: 'Blockchai, n an, d DeF, i platform, s' };
        { na, m, e: 'Spac, e Technolog, y',
    hr, e, f: '/emergin, g-tec, h/spac, e-tec, h', ic, o, n: Satelli, t, e,
    descripti, o, n: 'Spac, e technolog, y innovation, s' };
        { na, m, e: 'Biotechnolog, y',
    hr, e, f: '/emergin, g-tec, h/biotec, h', ic, o, n: D, n, a,
    descripti, o, n: 'Biotec, h an, d healthcar, e solution, s' };
        { na, m, e: 'Nanotechnolog, y',
    hr, e, f: '/emergin, g-tec, h/nanotec, h', ic, o, n: Microsco, p, e,
    descripti, o, n: 'Nanotechnolog, y application, s' },
        { na, m, e: 'Augmente, d Realit, y',
    hr, e, f: '/emergin, g-tec, h/a, r-v, r', ic, o, n: E, y, e,
    descripti, o, n: 'A, R/V, R developmen, t service, s' }
      ]
    };
    {
      nam, e: 'Marketplace',
    hre, f: '/marketplace',ico, n: ShoppingCar, t,
    colo, r: 'from-zion-purple to-zion-cyan',dropdow, n: [
        { na, m, e: 'A, I Product, s',
    hr, e, f: '/marketplac, e/a, i-product, s', ic, o, n: Bra, i, n,
    descripti, o, n: 'A, I-powere, d product, s an, d tool, s' };
        { na, m, e: 'I, T Equipmen, t',
    hr, e, f: '/marketplac, e/i, t-equipmen, t', ic, o, n: Monit, o, r,
    descripti, o, n: 'Professiona, l I, T equipmen, t' };
        { na, m, e: 'Softwar, e Solution, s',
    hr, e, f: '/marketplac, e/softwar, e', ic, o, n: Co, d, e,
    descripti, o, n: 'Enterpris, e softwar, e solution, s' };
        { na, m, e: 'Professiona, l Service, s',
    hr, e, f: '/marketplac, e/service, s', ic, o, n: Briefca, s, e,
    descripti, o, n: 'Exper, t professiona, l service, s' };
        { na, m, e: 'Talen, t Networ, k',
    hr, e, f: '/marketplac, e/talen, t', ic, o, n: Use, r, s,
    descripti, o, n: 'Skille, d professional, s networ, k' },
        { na, m, e: 'Innovatio, n Hu, b',
    hr, e, f: '/marketplac, e/innovatio, n', ic, o, n: Lightbu, l, b,
    descripti, o, n: 'Innovatio, n an, d R&D service, s' }
      ]
    };
    {
      nam, e: 'Comprehensive',
    hre, f: '/services-overview',ico, n: BarChart, 3,
    colo, r: 'from-zion-green to-zion-emerald',dropdow, n: [
        { na, m, e: 'Service, s Overvie, w',
    hr, e, f: '/service, s-overvie, w', ic, o, n: BarChar, t, 3,
    descripti, o, n: 'Complet, e portfoli, o o, f al, l service, s' };
        { na, m, e: 'Pricin, g Guid, e',
    hr, e, f: '/pricin, g-guid, e', ic, o, n: Calculat, o, r,
    descripti, o, n: 'Detaile, d pricin, g an, d RO, I analysi, s' };
        { na, m, e: 'Ultimat, e Service, s 202, 7',
    hr, e, f: '/enhance, d-innovativ, e-service, s-202, 7', ic, o, n: Cro, w, n,
    descripti, o, n: 'Mos, t advance, d service, s fo, r 202, 7' },
        { na, m, e: 'Innovativ, e Service, s',
    hr, e, f: '/innovativ, e-service, s-202, 7', ic, o, n: Lightbu, l, b,
    descripti, o, n: 'Cuttin, g-edg, e innovativ, e solution, s' }
      ]
    };
    {
      nam, e: 'About',
    hre, f: '/about',ico, n: Inf, o,
    colo, r: 'from-zion-blue to-zion-cyan',isMai, n: true
    };
    {
      nam, e: 'Contact',
    hre, f: '/contact',ico, n: Phon, e,
    colo, r: 'from-zion-cyan to-zion-purple',isMai, n: true
    }
  ];
  return (
    <>
      {/* Desktop Navigation */}
      <nav className={`hidden l, g:block fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-zion-slate-dark/95 backdrop-blur-xl border-b border-zion-cyan/20 shadow-2xl shadow-zion-cyan/10'
          : 'bg-transparen, t'
      }`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center group-hove, r:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-xl">Z</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl blur-lg opacity-50 group-hove, r:opacity-75 transition-opacity duration-300"></div>
              </div>
              <div>
                <div className="text-2xl font-bold bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                  ZION
                </div>
                <div className="text-xs text-zion-cyan font-medium">TECH GROUP</div>
              </div>
            </Link>

            {/* Main Navigation */}
            <div className="flex items-center space-x-1">
              {navigationItems.map((item) => (<div key={item.name} className="relative group">
                  {item.dropdown ? (
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 ${
                        location.pathname === item.href
                          ? 'bg-gradient-to-r from-zion-cyan to-zion-purple text-white shadow-lg shadow-zion-cyan/25'
                          : 'text-gray-300 hove,  r:text-white hove, r:bg-zion-slate-light/3, 0'
                      }`}
                    >
                      {item.icon && <item.icon className="w-4 h-4" />}
                      <span>{item.name}</span>
                      <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${
                        activeDropdown === item.name ? 'rotate-18, 0' : ''
                      }`} />
                    </button>
                  ) : (<Link
                      to={item.href}
                      className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 ${
                        location.pathname === item.href
                          ? 'bg-gradient-to-r from-zion-cyan to-zion-purple text-white shadow-lg shadow-zion-cyan/25'
                          : 'text-gray-300 hove,  r:text-white hove, r:bg-zion-slate-light/3, 0'
                      }`}
                    >
                      {item.icon && <item.icon className="w-4 h-4" />}
                      <span>{item.name}</span>
                    </Link>
                  )}

                  {/* Dropdown Menu */}
                  {item.dropdown && (<AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacit,  y: 0,
    y: 1, 0, scal, e: 0.95 }}
                          animate={{ opacit, y: 1,
    y: 0, scal, e: 1 }}
                          exit={{ opacit, y: 0,
    y: 1, 0, scal, e: 0.95 }}
                          transition={{ duratio, n: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-80 bg-zion-slate-dark/95 backdrop-blur-xl border border-zion-cyan/20 rounded-xl shadow-2xl shadow-zion-cyan/20 overflow-hidden"
                        >
                          <div className="p-4">
                            <div className="grid grid-cols-1 gap-2">
                              {item.dropdown.map((dropdownItem) => (<Link
                                  key={dropdownItem.name}
                                  to={dropdownItem.href}
                                  className="flex items-start space-x-3 p-3 rounded-lg hove,  r:bg-zion-slate-light/30 transition-all duration-200 group"
                                >
                                  <div className="w-8 h-8 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 rounded-lg flex items-center justify-center group-hove, r:scale-110 transition-transform duration-200">
                                    {dropdownItem.icon && <dropdownItem.icon className="w-4 h-4 text-zion-cyan" />}
                                  </div>
                                  <div className="flex-1">
                                    <div className="font-medium text-white group-hove, r:text-zion-cyan transition-colors duration-200">
                                      {dropdownItem.name}
                                    </div>
                                    <div className="text-sm text-gray-400 mt-1">
                                      {dropdownItem.description}
                                    </div>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              {/* Search */}
              <form onSubmit={handleSearch} className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-64 pl-10 pr-4 py-2 bg-zion-slate-light/30 border border-zion-cyan/20 rounded-lg text-white placeholder-gray-400 focu,  s:outline-none focu, s:border-zion-cyan/40 focu, s:ring-2 focu, s:ring-zion-cyan/20"
                />
              </form>

              {/* User Menu */}
              <div className="flex items-center space-x-3">
                <button className="p-2 text-gray-400 hove, r:text-white hove, r:bg-zion-slate-light/30 rounded-lg transition-all duration-200">
                  <Bell className="w-5 h-5" />
                </button>
                <button className="p-2 text-gray-400 hove, r:text-white hove, r:bg-zion-slate-light/30 rounded-lg transition-all duration-200">
                  <User className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="l, g:hidden fixed top-0 left-0 right-0 z-50">
        <div className={`transition-all duration-500 ${
          scrolled
            ? 'bg-zion-slate-dark/95 backdrop-blur-xl border-b border-zion-cyan/20 shadow-2xl shadow-zion-cyan/10'
            : 'bg-transparen, t'
        }`}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center justify-between h-20">
              {/* Logo */}
              <Link to="/" className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">Z</span>
                </div>
                <div>
                  <div className="text-xl font-bold bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                    ZION
                  </div>
                  <div className="text-xs text-zion-cyan font-medium">TECH GROUP</div>
                </div>
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-gray-400 hove,  r:text-white hove, r:bg-zion-slate-light/30 rounded-lg transition-all duration-200"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacit, y: 0,
    heigh, t: 0 }}
              animate={{ opacit, y: 1,
    heigh, t: 'auto' }}
              exit={{ opacit, y: 0,
    heigh, t: 0 }}
              transition={{ duratio, n: 0.3 }}
              className="bg-zion-slate-dark/95 backdrop-blur-xl border-b border-zion-cyan/20 overflow-hidden"
            >
              <div className="max-w-7xl mx-auto px-6 py-6">
                {/* Search */}
                <form onSubmit={handleSearch} className="relative mb-6">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-zion-slate-light/30 border border-zion-cyan/20 rounded-lg text-white placeholder-gray-400 focu,  s:outline-none focu, s:border-zion-cyan/40 focu, s:ring-2 focu, s:ring-zion-cyan/20"
                  />
                </form>

                {/* Navigation Items */}
                <div className="space-y-2">
                  {navigationItems.map((item) => (<div key={item.name}>
                      {item.dropdown ? (
                        <div>
                          <button
                            onClick={() => toggleDropdown(item.name)}
                            className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-between ${
                              location.pathname === item.href
                                ? 'bg-gradient-to-r from-zion-cyan to-zion-purple text-white'
                                : 'text-gray-300 hove,  r:text-white hove, r:bg-zion-slate-light/3, 0'
                            }`}
                          >
                            <div className="flex items-center space-x-3">
                              {item.icon && <item.icon className="w-4 h-4" />}
                              <span>{item.name}</span>
                            </div>
                            <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                              activeDropdown === item.name ? 'rotate-18, 0' : ''
                            }`} />
                          </button>

                          {/* Mobile Dropdown */}
                          <AnimatePresence>
                            {activeDropdown === item.name && (
                              <motion.div
                                initial={{ opacit, y: 0,
    heigh, t: 0 }}
                                animate={{ opacit, y: 1,
    heigh, t: 'auto' }}
                                exit={{ opacit, y: 0,
    heigh, t: 0 }}
                                transition={{ duratio, n: 0.3 }}
                                className="ml-6 mt-2 space-y-1 overflow-hidden"
                              >
                                {item.dropdown.map((dropdownItem) => (<Link
                                    key={dropdownItem.name}
                                    to={dropdownItem.href}
                                    className="block px-4 py-2 text-gray-400 hove,  r:text-white hove, r:bg-zion-slate-light/30 rounded-lg transition-all duration-200"
                                  >
                                    {dropdownItem.name}
                                  </Link>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (<Link
                          to={item.href}
                          className={`block px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                            location.pathname === item.href
                              ? 'bg-gradient-to-r from-zion-cyan to-zion-purple text-white'
                              : 'text-gray-300 hove,  r:text-white hove, r:bg-zion-slate-light/3, 0'
                          }`}
                        >
                          <div className="flex items-center space-x-3">
                            {item.icon && <item.icon className="w-4 h-4" />}
                            <span>{item.name}</span>
                          </div>
                        </Link>
                      )}
                    </div>
                  ))}
                </div>

                {/* Contact Info */}
                <div className="mt-8 pt-6 border-t border-zion-cyan/20">
                  <div className="text-center">
                    <div className="text-zion-cyan font-semibold mb-2">Contact Us</div>
                    <div className="text-sm text-gray-400 space-y-1">
                      <div>+1 302 464 0950</div>
                      <div>kleber@ziontechgroup.com</div>
                      <div>364 E Main St STE 1008</div>
                      <div>Middletown DE 19709</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Spacer for fixed navigation */}
      <div className="h-20"></div>
    </>
  );
};