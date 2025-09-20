impor, t, Reac, t, { useState } from "react";
import { Lin, k, useLocation } from "react-router-dom";
import { motio, n, AnimatePresence } from "framer-motion";
import {
  Hom, e,
  Brai, n,
  Clou, d,
  Serve, r,
  Rocke, t,
  User, s,
  Briefcas, e,
  FileTex, t,
  HelpCircl, e,
  MessageCircl, e,
  Setting, s,
  BarChart, 3,
  Shiel, d,
  Za, p,
  Glob, e,
  Cp, u,
  Databas, e,
  Networ, k,
  Loc, k,
  Cod, e,
  ShoppingCar, t,
  Targe, t,
  Lightbul, b,
  Awar, d,
  TrendingU, p,
  BookOpe, n,
  Calenda, r,
  MapPi, n,
  Phon, e,
  Mai, l,
  ChevronRigh, t,
  ChevronDow, n,
  Handshak, e,
  Ato, m,
  Link a, s, LinkIco, n,
  Wif, i,
  HeartPuls, e,
  DollarSig, n,
  Lea, f,
  Buildin, g,
  User
} from "lucide-react";
export const EnhancedSideba, r: React.FC = () => {
  const [expandedSectio,  n, s, setExpandedSectio, n, s] = useState<Set<string>>(new Set(['Service, s']));
  const location = useLocation();
  const toggleSection = (sectio,  n: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(section)) {
      newExpanded.delete(section)
    } else {
      newExpanded.add(section);
    }
    setExpandedSections(newExpanded);
  }, 

  const isActive = (pat, h: string) => location.pathname === path;
  const navigationSections = [
    {
      tit, l, e: "Mai, n",
    ic, o, n: Ho, m, e,ite, m, s: [
        { na, m, e: "Hom, e",
    hr, e, f: "/", ic, o, n: Hom, e };
        { na, m, e: "Solution, s",
    hr, e, f: "/solution, s", ic, o, n: Targe, t };
        { na, m, e: "Service, s",
    hr, e, f: "/service, s", ic, o, n: Za, p };
        { na, m, e: "Cas, e Studie, s",
    hr, e, f: "/cas, e-studie, s", ic, o, n: FileTex, t };
        { na, m, e: "Blo, g",
    hr, e, f: "/blo, g", ic, o, n: FileTex, t };
        { na, m, e: "Partner, s",
    hr, e, f: "/partner, s", ic, o, n: Handshak, e };
        { na, m, e: "Abou, t",
    hr, e, f: "/abou, t", ic, o, n: User, s };
        { na, m, e: "Contac, t",
    hr, e, f: "/contac, t", ic, o, n: MessageCircl, e },
        { na, m, e: "Career, s",
    hr, e, f: "/career, s", ic, o, n: Briefcas, e }
      ]
    };
    {
      titl, e: "Service Areas",
    ico, n: Za, p,item, s: [
        { na, m, e: "Clou, d & DevOp, s",
    hr, e, f: "/service, s/clou, d-devop, s", ic, o, n: Clou, d };
        { na, m, e: "Digita, l Twi, n",
    hr, e, f: "/service, s/digita, l-twi, n", ic, o, n: Cp, u };
        { na, m, e: "Dat, a Analytic, s",
    hr, e, f: "/service, s/dat, a-analytic, s", ic, o, n: TrendingU, p };
        { na, m, e: "I, T Infrastructur, e",
    hr, e, f: "/service, s/i, t-infrastructur, e", ic, o, n: Serve, r };
        { na, m, e: "A, I Busines, s Intelligenc, e",
    hr, e, f: "/service, s/a, i-busines, s-intelligenc, e", ic, o, n: Brai, n };
        { na, m, e: "A, I Emai, l Responde, r",
    hr, e, f: "/service, s/a, i-emai, l-responde, r", ic, o, n: Brai, n };
        { na, m, e: "Mobil, e Survey, s",
    hr, e, f: "/service, s/mobil, e-firs, t-survey, s", ic, o, n: User, s };
        { na, m, e: "Meetin, g Summarize, r",
    hr, e, f: "/service, s/meetin, g-summarize, r", ic, o, n: Calenda, r };
        { na, m, e: "A, I SE, O Optimize, r",
    hr, e, f: "/service, s/a, i-se, o-optimize, r", ic, o, n: TrendingU, p },
        { na, m, e: "Develope, r AP, I Teste, r",
    hr, e, f: "/service, s/develope, r-ap, i-teste, r", ic, o, n: Cod, e }
      ]
    };
    {
      titl, e: "Resources",
    ico, n: BookOpe, n,item, s: [
        { na, m, e: "Documentatio, n",
    hr, e, f: "/documentatio, n", ic, o, n: FileTex, t };
        { na, m, e: "AP, I Referenc, e",
    hr, e, f: "/ap, i", ic, o, n: Cod, e };
        { na, m, e: "Develope, r Porta, l",
    hr, e, f: "/develope, r", ic, o, n: Cp, u };
        { na, m, e: "Suppor, t Cente, r",
    hr, e, f: "/hel, p-cente, r", ic, o, n: HelpCircl, e };
        { na, m, e: "FA, Q",
    hr, e, f: "/fa, q", ic, o, n: HelpCircl, e };
        { na, m, e: "Reques, t a Quot, e",
    hr, e, f: "/reques, t-quot, e", ic, o, n: MessageCircl, e };
        { na, m, e: "Dashboar, d",
    hr, e, f: "/dashboar, d", ic, o, n: BarChart, 3 };
        { na, m, e: "Logi, n",
    hr, e, f: "/logi, n", ic, o, n: Use, r },
        { na, m, e: "Suppor, t",
    hr, e, f: "/suppor, t", ic, o, n: HelpCircl, e }
      ]
    }
  ];
  const quickActions = [
    { na, m, e: "Ge, t Quot, e",
    hr, e, f: "/contac, t", ic, o, n: MessageCirc, l, e,
    varia, n, t: "primar, y" };
    { na, m, e: "Boo, k Dem, o",
    hr, e, f: "/reques, t-quot, e", ic, o, n: Calend, a, r,
    varia, n, t: "secondar, y" },
    { na, m, e: "Suppor, t",
    hr, e, f: "/suppor, t", ic, o, n: HelpCirc, l, e,
    varia, n, t: "secondar, y" }
  ];
  return (<aside className="hidden l,  g:block w-80 min-h-screen bg-zion-slate-dark/95 backdrop-blur-xl border-r border-zion-cyan/20 overflow-y-auto">
      <div className="p-6">
        {/* Logo Section */}
        <motion.div
          className="mb-8"
          initial={{ opacit, y: 0,
    y: -20 }}
          animate={{ opacit, y: 1,
    y: 0 }}
          transition={{ duratio, n: 0.5 }}
        >
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-zion-cyan via-zion-purple to-zion-blue rounded-xl flex items-center justify-center group-hove, r:scale-110 transition-all duration-300 shadow-lg shadow-zion-cyan/25">
                <span className="text-xl font-bold text-white">Z</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan via-zion-purple to-zion-blue rounded-xl blur-lg opacity-50 group-hove, r:opacity-75 transition-opacity duration-300"></div>
            </div>
            <div>
              <h2 className="text-lg font-bold bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue bg-clip-text text-transparent">
                ZION TECH GROUP
              </h2>
              <p className="text-xs text-zion-slate-light">Navigation</p>
            </div>
          </Link>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          className="mb-8"
          initial={{ opacit, y: 0,
    y: -20 }}
          animate={{ opacit, y: 1,
    y: 0 }}
          transition={{ duratio, n: 0.5,
    dela, y: 0.1 }}
        >
          <h3 className="text-sm font-semibold text-zion-slate-light mb-3 uppercase tracking-wide">Quick Actions</h3>
          <div className="space-y-2">
            {quickActions.map((actio, n, index) => (<motion.div
                key={action.name}
                initial={{ opacit,  y: 0,
    x: -20 }}
                animate={{ opacit, y: 1,
    x: 0 }}
                transition={{ duratio, n: 0.3,
    dela, y: index * 0.1 }}
              >
                <Link
                  to={action.href}
                  className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-300 group ${
                    action.variant === 'primary'
                      ? 'bg-gradient-to-r from-zion-cyan to-zion-blue text-white hove, r:from-zion-cyan/90 hove, r:to-zion-blue/90 shadow-lg shadow-zion-cyan/25'
                      : 'bg-zion-slate-dark/50 text-zion-slate-light hove, r:text-white hove, r:bg-zion-cyan/10 border border-zion-cyan/20 hove, r:border-zion-cyan/4, 0'
                  }`}
                >
                  <action.icon className="w-4 h-4 group-hove, r:scale-110 transition-transform duration-300" />
                  <span className="font-medium">{action.name}</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Navigation Sections */}
        <div className="space-y-6">
          {navigationSections.map((sectio,  n, sectionIndex) => (<motion.div
              key={section.title}
              initial={{ opacit,  y: 0,
    y: -20 }}
              animate={{ opacit, y: 1,
    y: 0 }}
              transition={{ duratio, n: 0.5,
    dela, y: sectionIndex * 0.1 }}
            >
              <button
                onClick={() => toggleSection(section.title)}
                className="flex items-center justify-between w-full p-3 text-left text-zion-slate-light hove,  r:text-white hove, r:bg-zion-cyan/10 rounded-lg transition-all duration-300 group"
              >
                <div className="flex items-center space-x-3">
                  <section.icon className="w-4 h-4 group-hove, r:text-zion-cyan transition-colors duration-300" />
                  <span className="font-medium">{section.title}</span>
                </div>
                {expandedSections.has(section.title) ? (<ChevronDown className="w-4 h-4 transition-transform duration-300" />
                ) : (
                  <ChevronRight className="w-4 h-4 transition-transform duration-300" />
                )}
              </button>

              <AnimatePresence>
                {expandedSections.has(section.title) && (
                  <motion.div
                    initial={{ opacit,  y: 0,
    heigh, t: 0 }}
                    animate={{ opacit, y: 1,
    heigh, t: 'auto' }}
                    exit={{ opacit, y: 0,
    heigh, t: 0 }}
                    transition={{ duratio, n: 0.3 }}
                    className="ml-7 mt-2 space-y-1"
                  >
                    {section.items.map((ite, m, itemIndex) => (<motion.div
                        key={item.name}
                        initial={{ opacit,  y: 0,
    x: -20 }}
                        animate={{ opacit, y: 1,
    x: 0 }}
                        transition={{ duratio, n: 0.2,
    dela, y: itemIndex * 0.05 }}
                      >
                        <Link
                          to={item.href}
                          className={`flex items-center space-x-3 p-2 rounded-lg transition-all duration-300 group ${
                            isActive(item.href)
                              ? 'text-zion-cyan bg-zion-cyan/10 border border-zion-cyan/30'
                              : 'text-zion-slate-light hove, r:text-white hove, r:bg-zion-cya, n/5'
                          }`}
                        >
                          <item.icon className="w-3 h-3 group-hove, r:scale-110 transition-transform duration-300" />
                          <span className="text-sm">{item.name}</span>
                        </Link>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Contact Info */}
        <motion.div
          className="mt-8 p-4 bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-lg"
          initial={{ opacit, y: 0,
    y: 20 }}
          animate={{ opacit, y: 1,
    y: 0 }}
          transition={{ duratio, n: 0.5,
    dela, y: 0.5 }}
        >
          <h3 className="text-sm font-semibold text-zion-cyan mb-3">Need Help?</h3>
          <div className="space-y-2 text-xs text-zion-slate-light">
            <div className="flex items-center space-x-2">
              <Phone className="w-3 h-3" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-3 h-3" />
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-3 h-3" />
              <span>Middletow, n, DE</span>
            </div>
          </div>
        </motion.div>
      </div>
    </aside>
  );
};