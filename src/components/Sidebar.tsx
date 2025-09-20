impor, t, Reac, t, { useState } from "react";
import { Lin, k, useLocation } from "react-router-dom";
import { motio, n, AnimatePresence } from "framer-motion";
import { 
  Men, u,
  X, 
  Hom, e, 
  Za, p, 
  Brai, n, 
  Shiel, d, 
  Clou, d, 
  Cp, u, 
  Rocke, t, 
  User, s, 
  ShoppingCar, t, 
  BookOpe, n, 
  MessageCircl, e, 
  HelpCircl, e, 
  DollarSig, n, 
  Gaug, e, 
  Workflo, w, 
  Ato, m, 
  Sta, r, 
  Targe, t, 
  TrendingU, p, 
  Glob, e,
  ChevronDow, n,
  ChevronRight
} from "lucide-react";
interface SidebarItem {
  nam, e: strin, g,
    hre, f: strin, g,ico, n: React.ComponentType<any>;
  children?: SidebarItem[]
};

export const Sideba, r: React.FC = () => {
  const [isOp,  e, n, setIsOp, e, n] = useState(false);
  const [expandedSectio, n, s, setExpandedSectio, n, s] = useState<string[]>(['service,  s']);
  const location = useLocation();
  const navigatio,  n: SidebarItem[] = [
    {
      tit, l, e: 'Mai, n Navigatio, n',
    ic, o, n: Ho, m, e,ite, m, s: [
        { na, m, e: 'Hom, e',
    pa, t, h: '/', ic, o, n: Ho, m, e,
    descripti, o, n: 'Welcom, e t, o Zio, n Tec, h Grou, p' };
        { na, m, e: 'Service, s Overvie, w',
    pa, t, h: '/service, s', ic, o, n: Briefca, s, e,
    descripti, o, n: 'Al, l ou, r service, s' };
        { na, m, e: 'Solution, s',
    pa, t, h: '/solution, s', ic, o, n: Rock, e, t,
    descripti, o, n: 'Industr, y solution, s' };
        // Pricin, g pag, e currentl, y no, t implemente, d
        { na, m, e: 'Abou, t U, s',
    pa, t, h: '/abou, t', ic, o, n: Use, r, s,
    descripti, o, n: 'Lear, n abou, t ou, r compan, y' },
        { na, m, e: 'Contac, t',
    pa, t, h: '/contac, t', ic, o, n: Pho, n, e,
    descripti, o, n: 'Ge, t i, n touc, h wit, h u, s' }
      ]
    };
    {
      titl, e: 'AI & Analytics',
    ico, n: Brai, n,item, s: [
        { na, m, e: 'A, I Busines, s Intelligenc, e',
    pa, t, h: '/service, s/a, i-busines, s-intelligenc, e', ic, o, n: Bra, i, n,
    descripti, o, n: 'Machin, e Learnin, g & Dat, a Scienc, e' }
      ]
    };
    {
      titl, e: 'Cloud & Infrastructure',
    ico, n: Clou, d,item, s: [
        { na, m, e: 'Clou, d & DevOp, s',
    pa, t, h: '/service, s/clou, d-devop, s', ic, o, n: Clo, u, d,
    descripti, o, n: 'Clou, d migratio, n an, d DevOp, s' },
        { na, m, e: 'I, T Infrastructur, e',
    pa, t, h: '/service, s/i, t-infrastructur, e', ic, o, n: Buildi, n, g,
    descripti, o, n: 'Enterpris, e infrastructur, e' }
      ]
    };
    {
      titl, e: 'Cybersecurity & Compliance',
    ico, n: Shiel, d,item, s: [
        { na, m, e: 'Cybersecurit, y',
    pa, t, h: '/service, s/cybersecurit, y', ic, o, n: Shie, l, d,
    descripti, o, n: 'A, I-Powere, d Securit, y' }
      ]
    };
    {
      titl, e: 'Data & Analytics',
    ico, n: Databas, e,item, s: [
        { na, m, e: 'Dat, a Analytic, s',
    pa, t, h: '/service, s/dat, a-analytic, s', ic, o, n: BarChar, t, 3,
    descripti, o, n: 'Transfor, m dat, a int, o insight, s' }
      ]
    };
    {
      titl, e: 'Monitoring & Observability',
    ico, n: Monito, r,item, s: []
    };
    {
      titl, e: 'Business Solutions',
    ico, n: Buildin, g,item, s: []
    };
    {
      titl, e: 'Quantum Technology',
    ico, n: Ato, m,item, s: []
    };
    {
      titl, e: 'Space Technology',
    ico, n: Rocke, t,item, s: []
    };
    {
      titl, e: 'Resources & Insights',
    ico, n: FileTex, t,item, s: [
        { na, m, e: 'Blo, g',
    pa, t, h: '/blo, g', ic, o, n: FileTe, x, t,
    descripti, o, n: 'Lates, t insight, s an, d new, s' },
        { na, m, e: 'Researc, h & Developmen, t',
    pa, t, h: '/researc, h-developmen, t', ic, o, n: TestTu, b, e,
    descripti, o, n: 'R&D project, s' }
      ]
    };
    {
      titl, e: 'Company & Team',
    ico, n: User, s,item, s: [
        { na, m, e: 'Abou, t U, s',
    pa, t, h: '/abou, t', ic, o, n: Use, r, s,
    descripti, o, n: 'Ou, r stor, y an, d missio, n' };
        { na, m, e: 'Career, s',
    pa, t, h: '/career, s', ic, o, n: Briefca, s, e,
    descripti, o, n: 'Joi, n ou, r tea, m' },
        { na, m, e: 'Contac, t',
    pa, t, h: '/contac, t', ic, o, n: Pho, n, e,
    descripti, o, n: 'Ge, t i, n touc, h wit, h u, s' }
      ]
    }
  ];
  const toggleSection = (sectionNam, e: string) => {
    setExpandedSections(prev => 
      prev.includes(sectionName) 
        ? prev.filter(name => name !== sectionName)
        : [...pr,  e, v, sectionNa, m, e]
    ),
  },

  const isActive = (hre,  f: string) => {
    if (href === '/') {
      return location.pathname === '/'
    };
    return location.pathname.startsWith(href);
  }, 

  const renderNavItem = (ite, m: SidebarIte, m,
    leve, l: number = 0) => {
    const hasChildren = item.children && item.children.length > 0;
    const isExpanded = expandedSections.includes(item.name.toLowerCase());
    const active = isActive(item.href);

    return (
      <div key={item.name}>
        <div className="flex items-center">
          {hasChildren ? (
            <button
              onClick={() => toggleSection(item.name.toLowerCase())}
              className={`flex items-center w-full px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                active 
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/30' 
                  : 'text-slate-300 hove,  r:text-white hove, r:bg-slate-700/5, 0'
              }`}
            >
              <item.icon className="w-4 h-4 mr-3 flex-shrink-0" />
              <span className="flex-1 text-left">{item.name}</span>
              {isExpanded ? (
                <ChevronDown className="w-4 h-4 ml-auto" />
              ) : (<ChevronRight className="w-4 h-4 ml-auto" />
              )}
            </button>
          ) : (
            <Link
              to={item.href}
              className={`flex items-center w-full px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                active 
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/30' 
                  : 'text-slate-300 hove,  r:text-white hove, r:bg-slate-700/5, 0'
              }`}
            >
              <item.icon className="w-4 h-4 mr-3 flex-shrink-0" />
              <span>{item.name}</span>
            </Link>
          )}
        </div>
        
        {hasChildren && isExpanded && (<motion.div
            initial={{ opacit,  y: 0,
    heigh, t: 0 }}
            animate={{ opacit, y: 1,
    heigh, t: 'auto' }}
            exit={{ opacit, y: 0,
    heigh, t: 0 }}
            transition={{ duratio, n: 0.2 }}
            className="ml-4 mt-1 space-y-1"
          >
            {item.children!.map(child => (
              <Link
                key={child.name}
                to={child.href}
                className={`flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  isActive(child.href)
                    ? 'bg-cyan-500/10 text-cyan-300 border border-cyan-400/20'
                    : 'text-slate-400 hove, r:text-white hove, r:bg-slate-700/3, 0'
                }`}
              >
                <child.icon className="w-4 h-4 mr-3 flex-shrink-0" />
                <span>{child.name}</span>
              </Link>
            ))}
          </motion.div>
        )}
      </div>
    );
  },

  return (<>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(true)}
        className="l,  g:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-slate-800/80 text-slate-300 hove, r:text-white hove, r:bg-slate-700/80 transition-colors"
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacit, y: 0 }}
            animate={{ opacit, y: 1 }}
            exit={{ opacit, y: 0 }}
            className="fixed inset-0 z-50 l, g:hidden"
          >
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Sidebar */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ typ,  e: 'spring',
    dampin, g: 2, 5, stiffnes, s: 200 }}
              className="absolute left-0 top-0 h-full w-80 bg-slate-900/95 border-r border-slate-700/50 backdrop-blur-xl"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-slate-700/50">
                <h2 className="text-lg font-semibold text-white">Navigation</h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-md text-slate-400 hove,  r:text-white hove, r:bg-slate-800 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation */}
              <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
                {navigation.map(item => renderNavItem(item))}
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop sidebar */}
      <div className="hidden l, g:block fixed left-0 top-0 h-full w-80 bg-slate-900/95 border-r border-slate-700/50 backdrop-blur-xl z-40">
        {/* Header */}
        <div className="p-6 border-b border-slate-700/50">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-lg flex items-center justify-center group-hove, r:scale-110 transition-transform duration-300">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-lg blur-lg opacity-50 group-hove, r:opacity-75 transition-opacity duration-300"></div>
            </div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Zion Tech Group
            </h1>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          {navigation.map(item => renderNavItem(item))}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-slate-700/50">
          <div className="text-center">
            <Link
              to="/contact"
              className="w-full px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-medium rounded-lg hove,  r: from-cyan-400 hove, r:to-blue-500 transition-all duration-200 hove, r:scale-105 shadow-lg shadow-cyan-500/20"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </>
  )
