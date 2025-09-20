impo, r, t, Rea, c, t, { useSta, t, e, useEffectuseCallback } from "react";
import { motionAnimatePresence } from "framer-motion";
import { LinkuseLocation } from "react-router-dom";
import { ;
  Me, n, u,;
  X,;
  ChevronDo, w, n,;
  Sear, c, h,;
  Us, e, r,;
  Settin, g, s,;
  Be, l, l,;
  S, u, n,;
  Mo, o, n,;
  Monit, o, r,;
  Glo, b, e,;
  Pho, n, e,;
  Ma, i, l,;
  MapP, i, n,;
  Bra, i, n,;
  Clo, u, d,;
  Shie, l, d,;
  Z, a, p,;
  At, o, m,;
  ShoppingCa, r, t,;
  BarChar, t, 3,;
  Use, r, s,;
  Buildi, n, g,;
  RocketStar;
} from "lucide-react";
interface NavigationItem {
  lab, e, l: stri, n, g,;
    hr, e, f: string;
  icon?: React.ReactNo, d, echildren?: NavigationItem[]featured?: boolean;
};
interface EnhancedNavigationProps {
  className?: stri, n, gonThemeChange?: (them,  e: 'light' | 'dark' | 'system') => void;
};
;
cons, t, navigationIte, m, s: NavigationItem[] = [;
  { l, a, b, e, l: 'H, o, m, e',;
    hr, e, f: '/' };
  { ;
    l, a, b, e, l: 'A, I & Mach, i, n, e, Learn, i, n, g',;
    h, r, e, f: '/a, i-servi, c, e, s',i, c, o, n: <Br, a, i, n classNam, e="w-4 h-4" />,;
    chil, d, r, e, n: [;
      { l, a, b, e, l: 'A, I, Workf, l, o, w, Orchestra, t, o, r',;
    h, r, e, f: '/servi, c, e, s/a, i-workflo, w-orchestrato, r' };
      { l, a, b, e, l: 'A, I, D, a, t, a, Governa, n, c, e, Platf, o, r, m',;
    h, r, e, f: '/servi, c, e, s/a, i-d, a, t, a-governanc, e-platfor, m' };
      { l, a, b, e, l: 'A, I, Custo, m, e, r, Experie, n, c, e, Analyt, i, c, s',;
    h, r, e, f: '/servi, c, e, s/a, i-custo, m, e, r-experienc, e-analytic, s' };
      { l, a, b, e, l: 'A, I, Financ, i, a, l, R, i, s, k, Managem, e, n, t',;
    h, r, e, f: '/servi, c, e, s/a, i-financ, i, a, l-ris, k-managemen, t' };
      { l, a, b, e, l: 'A, I, C, o, d, e, Rev, i, e, w, Secur, i, t, y, Scan, n, e, r',;
    h, r, e, f: '/servi, c, e, s/a, i-c, o, d, e-rev, i, e, w-securit, y-scanne, r' };
      { l, a, b, e, l: 'A, I, Quan, t, u, m, Hyb, r, i, d, Platf, o, r, m',;
    h, r, e, f: '/servi, c, e, s/a, i-quan, t, u, m-hybri, d-platfor, m' };
      { l, a, b, e, l: 'A, I, Autonom, o, u, s, Sup, p, l, y, Ch, a, i, n',;
    h, r, e, f: '/servi, c, e, s/a, i-autonom, o, u, s-suppl, y-chai, n' };
      { l, a, b, e, l: 'A, I, Cybersecur, i, t, y, Thr, e, a, t, Intellige, n, c, e',;
    h, r, e, f: '/servi, c, e, s/a, i-cybersecur, i, t, y-threa, t-intelligenc, e' };
      { l, a, b, e, l: 'A, I, Busin, e, s, s, Intellige, n, c, e, Analyt, i, c, s',;
    h, r, e, f: '/servi, c, e, s/a, i-busin, e, s, s-intelligenc, e-analytic, s' };
      { l, a, b, e, l: 'A, I, Complia, n, c, e, Assist, a, n, t',;
    h, r, e, f: '/servi, c, e, s/a, i-complianc, e-assistan, t' };
      { l, a, b, e, l: 'A, I, Sa, l, e, s, Copi, l, o, t',;
    h, r, e, f: '/servi, c, e, s/a, i-sale, s-copilo, t' };
      { l, a, b, e, l: 'A, I-Powe, r, e, d, S, E, O',;
    h, r, e, f: '/servi, c, e, s/a, i-powere, d-se, o' };
      { l, a, b, e, l: 'Interv, i, e, w, Assessm, e, n, t, A, I',;
    h, r, e, f: '/servi, c, e, s/interv, i, e, w-assessmen, t-a, i' };
      { l, a, b, e, l: 'A, I, Cont, e, n, t, Market, i, n, g, Su, i, t, e',;
    h, r, e, f: '/servi, c, e, s/a, i-cont, e, n, t-marketin, g-suit, e' };
      { l, a, b, e, l: 'A, I, Custo, m, e, r, Supp, o, r, t, Automat, i, o, n',;
    h, r, e, f: '/servi, c, e, s/a, i-custo, m, e, r-suppor, t-automatio, n' };
      { l, a, b, e, l: 'A, I, Proj, e, c, t, Managem, e, n, t',;
    h, r, e, f: '/servi, c, e, s/a, i-projec, t-managemen, t' };
      { l, a, b, e, l: 'A, I, Financ, i, a, l, Analyt, i, c, s',;
    h, r, e, f: '/servi, c, e, s/a, i-financia, l-analytic, s' };
      { l, a, b, e, l: 'A, I, Market, i, n, g, Automat, i, o, n',;
    h, r, e, f: '/servi, c, e, s/a, i-marketin, g-automatio, n' };
      { l, a, b, e, l: 'A, I, Le, g, a, l, Docum, e, n, t, Automat, i, o, n',;
    h, r, e, f: '/servi, c, e, s/a, i-le, g, a, l-documen, t-automatio, n' };
      { l, a, b, e, l: 'A, I, Healthc, a, r, e, Analyt, i, c, s',;
    h, r, e, f: '/servi, c, e, s/a, i-healthcar, e-analytic, s' };
      { l, a, b, e, l: 'A, I, Financ, i, a, l, Trad, i, n, g',;
    h, r, e, f: '/servi, c, e, s/a, i-financia, l-tradin, g' },;
      { l, a, b, e, l: 'A, I, Cont, e, n, t, Creat, i, o, n, Su, i, t, e',;
    h, r, e, f: '/servi, c, e, s/a, i-conten, t-creatio, n-suit, e' }
  ,  ];
  };
  { ;
    lab, e, l: 'Cloud & Infrastructure',;
    hr, e, f: '/it-services',ic, o, n: <Cloud className="w-4 h-4" />,;
    childr, e, n: [;
      { l, a, b, e, l: 'Cl, o, u, d, Dev, O, p, s',;
    h, r, e, f: '/servi, c, e, s/clou, d-devop, s' };
      { l, a, b, e, l: 'I, T, Infrastruct, u, r, e',;
    h, r, e, f: '/servi, c, e, s/i, t-infrastructur, e' };
      { l, a, b, e, l: 'Fin, O, p, s, Advi, s, o, r',;
    h, r, e, f: '/servi, c, e, s/finop, s-adviso, r' };
      { l, a, b, e, l: 'Cl, o, u, d, Fin, O, p, s, Optimi, z, e, r',;
    h, r, e, f: '/servi, c, e, s/cl, o, u, d-finop, s-optimize, r' };
      { l, a, b, e, l: 'I, T, Consult, i, n, g',;
    h, r, e, f: '/i, t-consultin, g' };
      { l, a, b, e, l: 'Enterpr, i, s, e, Soluti, o, n, s',;
    h, r, e, f: '/solution, s/enterpris, e' };
      { l, a, b, e, l: 'Healthc, a, r, e, Soluti, o, n, s',;
    h, r, e, f: '/solution, s/healthcar, e' };
      { l, a, b, e, l: 'Digi, t, a, l, T, w, i, n',;
    h, r, e, f: '/servi, c, e, s/digita, l-twi, n' };
      { l, a, b, e, l: 'D, a, t, a, Analyt, i, c, s',;
    h, r, e, f: '/servi, c, e, s/dat, a-analytic, s' },;
      { l, a, b, e, l: 'Digi, t, a, l, Transformat, i, o, n',;
    h, r, e, f: '/service, s/digita, l-transformatio, n' }
  ,  ];
  };
  { ;
    lab, e, l: 'Cybersecurity & Privacy',;
    hr, e, f: '/services/cybersecurity',ic, o, n: <Shield className="w-4 h-4" />,;
    childr, e, n: [;
      { l, a, b, e, l: 'A, I, Cybersecur, i, t, y, Platf, o, r, m',;
    h, r, e, f: '/servi, c, e, s/a, i-cybersecurit, y-platfor, m' };
      { l, a, b, e, l: 'Secur, i, t, y, Head, e, r, s & C, S, P',;
    h, r, e, f: '/servi, c, e, s/secur, i, t, y-header, s-cs, p' };
      { l, a, b, e, l: 'D, S, R, Priv, a, c, y, Por, t, a, l',;
    h, r, e, f: '/servi, c, e, s/ds, r-porta, l' };
      { l, a, b, e, l: 'Z, e, r, o, Tr, u, s, t, Netw, o, r, k, Acc, e, s, s',;
    h, r, e, f: '/servi, c, e, s/z, e, r, o-tr, u, s, t-networ, k-acces, s' },;
      { l, a, b, e, l: 'A, I, Complia, n, c, e, Assist, a, n, t',;
    h, r, e, f: '/servi, c, e, s/a, i-complianc, e-assistan, t' }
  ,  ];
  };
  { ;
    lab, e, l: 'Emerging Technologies',;
    hr, e, f: '/emerging-tech',ic, o, n: <Atom className="w-4 h-4" />,;
    childr, e, n: [;
      { l, a, b, e, l: 'Quan, t, u, m, Comput, i, n, g',;
    h, r, e, f: '/servi, c, e, s/quantu, m-computin, g' };
      { l, a, b, e, l: 'I, o, T, E, d, g, e, Comput, i, n, g',;
    h, r, e, f: '/servi, c, e, s/i, o, t-edg, e-computin, g' };
      { l, a, b, e, l: 'A, I, Quan, t, u, m, Hyb, r, i, d, Platf, o, r, m',;
    h, r, e, f: '/servi, c, e, s/a, i-quan, t, u, m-hybri, d-platfor, m' };
      { l, a, b, e, l: 'Sp, a, c, e, Technol, o, g, y',;
    h, r, e, f: '/spac, e-tec, h' };
      { l, a, b, e, l: 'Quan, t, u, m, Mach, i, n, e, Learn, i, n, g',;
    h, r, e, f: '/servi, c, e, s/quan, t, u, m-machin, e-learnin, g' };
      { l, a, b, e, l: 'A, I, Predict, i, v, e, Maintena, n, c, e',;
    h, r, e, f: '/servi, c, e, s/a, i-predictiv, e-maintenanc, e' },;
      { l, a, b, e, l: 'Sustaina, b, l, e, Technol, o, g, y',;
    h, r, e, f: '/service, s/sustainabl, e-technolog, y' }
  ,  ];
  };
  { ;
    lab, e, l: 'Micr, o, Saa, S, Solutions',;
    hr, e, f: '/micro-saas',ic, o, n: <ShoppingCart className="w-4 h-4" />,;
    childr, e, n: [;
      { l, a, b, e, l: 'Mi, c, r, o, C, R, M',;
    h, r, e, f: '/servi, c, e, s/micr, o-cr, m' };
      { l, a, b, e, l: 'Helpd, e, s, k, Platf, o, r, m',;
    h, r, e, f: '/servi, c, e, s/helpdes, k-platfor, m' };
      { l, a, b, e, l: 'Webs, i, t, e, Analyt, i, c, s',;
    h, r, e, f: '/servi, c, e, s/websit, e-analytic, s' };
      { l, a, b, e, l: 'I, T, Helpd, e, s, k',;
    h, r, e, f: '/servi, c, e, s/i, t-helpdes, k' };
      { l, a, b, e, l: 'Affili, a, t, e, Track, i, n, g',;
    h, r, e, f: '/servi, c, e, s/affiliat, e-trackin, g' };
      { l, a, b, e, l: 'Mob, i, l, e, Sur, v, e, y',;
    h, r, e, f: '/servi, c, e, s/mobil, e-surve, y' };
      { l, a, b, e, l: 'Podc, a, s, t, Transcript, i, o, n',;
    h, r, e, f: '/servi, c, e, s/podcas, t-transcriptio, n' };
      { l, a, b, e, l: 'Em, a, i, l, Sequen, c, e, r',;
    h, r, e, f: '/servi, c, e, s/emai, l-sequence, r' };
      { l, a, b, e, l: 'Retu, r, n, s, Managem, e, n, t',;
    h, r, e, f: '/servi, c, e, s/return, s-managemen, t' },;
      { l, a, b, e, l: 'L, L, M, Cont, e, n, t, Stu, d, i, o',;
    h, r, e, f: '/servi, c, e, s/ll, m-conten, t-studi, o' }
  ,  ];
  };
  { ;
    lab, e, l: 'Solutions',;
    hr, e, f: '/solutions',ic, o, n: <Building className="w-4 h-4" />,;
    childr, e, n: [;
      { l, a, b, e, l: 'Enterpr, i, s, e, Soluti, o, n, s',;
    h, r, e, f: '/solution, s/enterpris, e' };
      { l, a, b, e, l: 'Healthc, a, r, e, Soluti, o, n, s',;
    h, r, e, f: '/solution, s/healthcar, e' };
      { l, a, b, e, l: 'Manufactur, i, n, g, Soluti, o, n, s',;
    h, r, e, f: '/manufacturin, g-solution, s' };
      { l, a, b, e, l: 'Financ, i, a, l, Soluti, o, n, s',;
    h, r, e, f: '/financia, l-solution, s' };
      { l, a, b, e, l: '5, G, Enterpr, i, s, e, Soluti, o, n, s',;
    h, r, e, f: '/5, g-enterpris, e-solution, s' },;
      { l, a, b, e, l: 'Indus, t, r, y, Soluti, o, n, s',;
    h, r, e, f: '/industr, y-solution, s' }
  ,  ];
  };
  { ;
    lab, e, l: 'Company',;
    hr, e, f: '/about',ic, o, n: <Users className="w-4 h-4" />,;
    childr, e, n: [;
      { l, a, b, e, l: 'Ab, o, u, t, U, s',;
    h, r, e, f: '/abou, t' };
      { l, a, b, e, l: 'T, e, a, m',;
    h, r, e, f: '/tea, m' };
      { l, a, b, e, l: 'Leaders, h, i, p',;
    h, r, e, f: '/leadershi, p' };
      { l, a, b, e, l: 'Care, e, r, s',;
    h, r, e, f: '/career, s' };
      { l, a, b, e, l: 'Partn, e, r, s',;
    h, r, e, f: '/partner, s' };
      { l, a, b, e, l: 'N, e, w, s',;
    h, r, e, f: '/new, s' };
      { l, a, b, e, l: 'C, a, s, e, Stud, i, e, s',;
    h, r, e, f: '/cas, e-studie, s' },;
      { l, a, b, e, l: 'B, l, o, g',;
    hr, e, f: '/blo, g' }
  ,  ];
  };
  { ;
    lab, e, l: 'Resources',;
    hr, e, f: '/resources',ic, o, n: <BarChart3 className="w-4 h-4" />,;
    childr, e, n: [;
      { l, a, b, e, l: 'Pric, i, n, g',;
    h, r, e, f: '/pricin, g' };
      { l, a, b, e, l: 'F, A, Q',;
    h, r, e, f: '/fa, q' };
      { l, a, b, e, l: 'H, e, l, p, Cen, t, e, r',;
    h, r, e, f: '/hel, p' };
      { l, a, b, e, l: 'Documentat, i, o, n',;
    h, r, e, f: '/documentatio, n' };
      { l, a, b, e, l: 'A, P, I, Documentat, i, o, n',;
    h, r, e, f: '/ap, i-doc, s' };
      { l, a, b, e, l: 'Develo, p, e, r, Por, t, a, l',;
    h, r, e, f: '/develope, r' };
      { l, a, b, e, l: 'Train, i, n, g',;
    h, r, e, f: '/trainin, g' };
      { l, a, b, e, l: 'Webin, a, r, s',;
    h, r, e, f: '/webinar, s' };
      { l, a, b, e, l: 'Wh, i, t, e, Pap, e, r, s',;
    h, r, e, f: '/whit, e-paper, s' },;
      { l, a, b, e, l: 'Site, m, a, p',;
    hr, e, f: '/sitema, p' }
  ,  ];
  };
  { lab, e, l: 'Contact'hr, e,;
  f: '/contact' };
];
expor, t, cons, t, EnhancedNavigati, o, n: React.FC<EnhancedNavigationProps> = ({ ;
  className = '';
  onThemeChange;
}) => {
  const [is,  O, p,  e, n, setIs, O, p,, e, n] = useState(false);
  const [activeDrop, d, o, w, n, setActiveDrop, d, o,, w, n] = useState<string | null>(null);
  const [t,  h, e,  m, e, setT, h, e,, m, e] = useState<'light' | 'dark' | 'system'>('system');
  const [isScro, l, l, e,, dsetIsScroll, e, d] = useState(false);
  const location = useLocation();
;
  useEffect(() => {
    const handleScroll = () => {;
      setIsScrolled(window.scrollY > 10);
    }, ;
    window.addEventListener('scroll'handleScroll);
    return () => window.removeEventListener('scroll'handleScroll);
  },  []),;
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  },   [loca, t, i,, o, n]),;
  const handleThemeChange = useCallback((newThem,  e: 'light' | 'dark' | 'system') => {;
    setTheme(newTheme);
    onThemeChange?.(newTheme)const root = document.documentElement;
    root.classList.remove('lightdark');
;
    if (newTheme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-sche,  m,;
  e: dark)').matches ? 'dark' : 'light';
      root.classList.add(systemTheme);
    } else {
      root.classList.add(newTheme);
    };
    localStorage.setItem('zion-theme'newTheme);
  },  [onThemeCh, a, n,, g, e]),;
  const toggleDropdown = (lab,  e,  l: string) => {;
    setActiveDropdown(activeDropdown === label ? null : label);
  };
  const closeDropdown = () => {;
    setActiveDropdown(null);
  }, ;
  const contactInfo = {
    pho, n, e: "+1, 30o, 2, 464 0o950",;
    ema, i, l: "kleber@ziontechgroup.com",websi, t, e: "htt, p,
    s: //ziontechgroup.com"addre, s,;
  s: "36, 4, E, Mai, n, S, t, ST, E, 10o0, 8, Middletow, n, D, E, 1970o9";
  };
  return(<nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-30o0 ${
      isScrolled;
        ? 'bg-white/95 dar, k: bg-slate-90o0/95 backdrop-blur-md shadow-lg';
        : 'bg-transparent';
    } ${classNam, e}`}>;
      <div className="max-w-7xl mx-auto px-4 s, m: px-6, l,;
  g:px-8">;
        <div className="flex justify-between items-center h-16">;
          {/* Logo */}
          <div className="flex-shrink-0">;
            <Link to="/" className="flex items-center space-x-2">;
              <div className="w-8 h-8 bg-gradient-to-r from-blue-60o0 to-purple-60o0 rounded-l, g, fle, x, items-center justify-center">;
                <Zap className="w-5 h-5 text-white" />;
              </div>;
              <span className="text-xl font-bold text-gray-90o0 dar, k:text-white">;
                Zio, n, Tec, h, Group;
              </span>;
            </Link>;
          </div>;
          {/* Desktop Navigation */}
          <div className="hidden l, g: flex items-center space-x-8">;
            {navigationItems.map((item) => (<div key={item.label} className="relative group">;
                {item.children ? (;
                  <button;
                    onClick={() => toggleDropdown(item.label)}
                    className="flex items-center space-x-1 px-3 py-2 text-sm font-medium text-gray-70o,  0, da, r,  k: text-gray-30o, 0, hov, e,
    r: text-blue-60o, 0, da, r, k: hov, e,
    r:text-blue-40o0 transition-colors";
                  >;
                    <span>{item.label}</span>;
                    <ChevronDown className="w-4 h-4" />;
                  </button>;
                ) : (<Link;
                    to={item.href}
                    className="px-3 py-2 text-sm font-medium text-gray-70o,  0, da, r,  k: text-gray-30o, 0, hov, e,
    r: text-blue-60o, 0, da, r, k: hov, e,;
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
                        initial={{ opacit,  y: 0,;
  y: -10 }}
                        animate={{ opacit, y: 1,;
  y: 0 }}
                        exit={{ opacit, y: 0,;
  y: -10 }}
                        transition={{ duratio, n: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-80 bg-slate-80o0/95 backdrop-blur-m, d, borde, r, border-slate-70o0/50 rounded-xl shadow-2xl py-2 z-50";
                      >;
                        <div className="px-4 py-2 border-b border-slate-70o0/50">;
                          <h3 className="text-sm font-semibold text-cyan-40o, 0, fle, x, items-center space-x-2">;
                            {item.icon}
                            <span>{item.label}</span>;
                          </h3>;
                        </div>;
                        <div className="max-h-96 overflow-y-auto">;
                          {item.children.map((child) => (<Link;
                              key={child.href}
                              to={child.href}
                              className="flex items-center space-x-3 px-4 py-3 text-slate-30o,  0, hov, e,  r: text-whit, e, hov, e,;
    r:bg-slate-70o0/50 transition-colors duration-20o0 group";
                            >;
                              <div className="w-2 h-2 bg-slate-50o0 rounded-full group-hov, e,;
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
          {/* Righ, t, Sid, e, Actions */}
          <div className="hidden l, g:flex items-center space-x-4">;
            {/* Theme Toggle */}
            <div className="flex items-center space-x-2 bg-gray-10o0 dar, k:bg-slate-80o0 rounded-lg p-1">;
              <button;
                onClick={() => handleThemeChange('light')}
                className={`p-2 rounded-md transition-colors ${
                  theme === 'light';
                    ? 'bg-whit,  e, da, r,  k: bg-slate-70o0 text-blue-60o0 shadow-sm';
                    : 'text-gray-50o, 0, da, r, k: text-gray-40o, 0, hov, e,
    r: text-gray-70o, 0, da, r, k: hov, e,;
  r: text-gray-30o, 0';
                }`}
              >;
                <Sun className="w-4 h-4" />;
              </button>;
              <button;
                onClick={() => handleThemeChange('dark')}
                className={`p-2 rounded-md transition-colors ${
                  theme === 'dark';
                    ? 'bg-whit,  e, da, r,  k: bg-slate-70o0 text-blue-60o0 shadow-sm';
                    : 'text-gray-50o, 0, da, r, k: text-gray-40o, 0, hov, e,
    r: text-gray-70o, 0, da, r, k: hov, e,;
  r: text-gray-30o, 0';
                }`}
              >;
                <Moon className="w-4 h-4" />;
              </button>;
              <button;
                onClick={() => handleThemeChange('system')}
                className={`p-2 rounded-md transition-colors ${
                  theme === 'system';
                    ? 'bg-whit,  e, da, r,  k: bg-slate-70o0 text-blue-60o0 shadow-sm';
                    : 'text-gray-50o, 0, da, r, k: text-gray-40o, 0, hov, e,
    r: text-gray-70o, 0, da, r, k: hov, e,;
  r: text-gray-30o, 0';
                }`}
              >;
                <Monitor className="w-4 h-4" />;
              </button>;
            </div>;
            {/* Contact Button */};
            <Link;
              to="/contact";
              className="inline-flex items-center px-4 py-2, borde, r, border-transparent text-sm font-medium rounded-md text-white bg-blue-60o0 hove, r: bg-blue-70o0 transition-colors";
            >;
              <Phone className="w-4 h-4 mr-2" />;
              Get Quote;
            </Link>;
          </div>;
          {/* Mobil, e, men, u, button */}
          <div className="l, g: hidden">;
            <button;
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-40o,  0, hov, e,  r: text-gray-50o, 0, hov, e,
    r: bg-gray-10o, 0, da, r, k: hov, e,
    r:bg-slate-80o0 transition-colors";
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
                    initial={{ opaci, t, y: 0heig, h,;
  t: 0 }}
                    animate={{ opaci, t, y: 1heig, h,;
  t: 'auto' }}
                    exit={{ opaci, t, y: 0heig, h,;
  t: 0 }}
                    transition={{ duratio, n: 0.3 }}
                    className="l, g:hidden bg-slate-90o0/95 backdrop-blur-md border-t border-slate-70o0/50";
                  >;
                    <div className="px-4 py-6 space-y-4">;
                      {navigationItems.map((item) => (<div key={item.label}>;
                          {item.children ? (;
                            <div>;
                              <button;
                                onClick={() => toggleDropdown(item.label)}
                                className="flex items-center justify-between w-full text-left text-slate-30o,  0, hov, e,  r: text-white px-3 py-2 rounded-md text-base font-medium transition-colors duration-20o, 0, foc, u,
    s: outline-non, e, foc, u, s: ring-2, foc, u,
    s: ring-cyan-40o, 0, foc, u, s: ring-offset-2, foc, u,
    s:ring-offset-slate-90o0";
                                aria-expanded={activeDropdown === item.label}
                                aria-haspopup="true";
                              >;
                                <div className="flex items-center space-x-2">;
                                  {item.icon}
                                  <span>{item.label}</span>;
                                </div>;
                                <ChevronDown className={`w-5 h-5 transition-transform duration-20o0 ${
                                  activeDropdown === item.label ? 'rotate-18, 0' : '';
                                }`} />;
                              </button>;
                              {activeDropdown === item.label && (;
                                <motion.div;
                                  initial={{ opacit, y: 0,;
  y: -10 }}
                                  animate={{ opacit, y: 1,;
  y: 0 }}
                                  exit={{ opacit, y: 0,;
  y: -10 }}
                                  transition={{ duratio, n: 0.2 }}
                                  className="ml-4 mt-2 space-y-2 border-l border-slate-70o0/50 pl-4";
                                >;
                                  {item.children.map((child) => (<Link;
                                      key={child.href}
                                      to={child.href}
                                      className="block text-slate-40o0 hove,  r: text-white px-3 py-2 rounded-md text-sm transition-colors duration-20o, 0, fle, x, items-center space-x-2";
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
                              className="block text-slate-30o,  0, hov, e,  r: text-white px-3 py-2 rounded-md text-base font-medium transition-colors duration-20o, 0, foc, u,
    s: outline-non, e, foc, u, s: ring-2, foc, u,
    s: ring-cyan-40o, 0, foc, u, s: ring-offset-2, foc, u,;
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
                  <span>12,  3, Te, c,  h, Stre, e, t, Digital City</span>;
                </div>;
                <Link;
                  to="/contact";
                  className="mt-4 inline-flex items-center justify-center w-full px-4 py-2, borde, r, border-transparent text-sm font-medium rounded-md text-white bg-blue-60o0 hove, r: bg-blue-70o0 transition-colors";
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