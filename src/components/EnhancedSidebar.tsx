impor, t, Reac, t, { useState } from "react";
import { LinkuseLocation } from "react-router-dom";
import { motionAnimatePresence } from "framer-motion";
import {
  Hom, e,;
  Brai, n,;
  Clou, d,;
  Serve, r,;
  Rocke, t,;
  User, s,;
  Briefcas, e,;
  FileTex, t,;
  HelpCircl, e,;
  MessageCircl, e,;
  Setting, s,;
  BarChart, 3,;
  Shiel, d,;
  Za, p,;
  Glob, e,;
  Cp, u,;
  Databas, e,;
  Networ, k,;
  Loc, k,;
  Cod, e,;
  ShoppingCar, t,;
  Targe, t,;
  Lightbul, b,;
  Awar, d,;
  TrendingU, p,;
  BookOpe, n,;
  Calenda, r,;
  MapPi, n,;
  Phon, e,;
  Mai, l,;
  ChevronRigh, t,;
  ChevronDow, n,;
  Handshak, e,;
  Ato, m,;
  Link a, s, LinkIco, n,;
  Wif, i,;
  HeartPuls, e,;
  DollarSig, n,;
  Lea, f,;
  BuildingUser;
} from "lucide-react";
export, const, EnhancedSideba, r: React.FC = () => {;
  const [expandedSectio,  n, s, setExpandedSectio,, ns] = useState<Set<string>>(new Set(['Services']));
  const location = useLocation();
  const toggleSection = (section: string) => {;
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(section)) {
      newExpanded.delete(section);
    } else {
      newExpanded.add(section);
    };
    setExpandedSections(newExpanded);
  },;
  const isActive = (pat, h: string) => location.pathname === path;
  const navigationSections = [;
    {
      tit, l, e: "Mai, n",;
    ic, o, n: Ho, m, e,ite, m, s: [;
        { na, m, e: "Hom, e",;
    hr, e, f: "/", ic, on: Home };
        { na, m, e: "Solution, s",;
    hr, e, f: "/solution, s", ic, on: Target };
        { na, m, e: "Service, s",;
    hr, e, f: "/service, s", ic, on: Zap };
        { na, m, e: "Cas, e Studie, s",;
    hr, e, f: "/cas, e-studie, s", ic, on: FileText };
        { na, m, e: "Blo, g",;
    hr, e, f: "/blo, g", ic, on: FileText };
        { na, m, e: "Partner, s",;
    hr, e, f: "/partner, s", ic, on: Handshake };
        { na, m, e: "Abou, t",;
    hr, e, f: "/abou, t", ic, on: Users };
        { na, m, e: "Contac, t",;
    hr, e, f: "/contac, t", ic, on: MessageCircle },;
        { na, m, e: "Career, s",;
    hr, e, f: "/career, s", icon: Briefcase }
    ,  ];
    };
    {
      titl, e: "Service Areas",;
    ico, n: Za, p,item, s: [;
        { na, m, e: "Clou, d & DevOp, s",;
    hr, e, f: "/service, s/clou, d-devop, s", ic, on: Cloud };
        { na, m, e: "Digita, l Twi, n",;
    hr, e, f: "/service, s/digita, l-twi, n", ic, on: Cpu };
        { na, m, e: "Dat, a Analytic, s",;
    hr, e, f: "/service, s/dat, a-analytic, s", ic, on: TrendingUp };
        { na, m, e: "I, T Infrastructur, e",;
    hr, e, f: "/service, s/i, t-infrastructur, e", ic, on: Server };
        { na, m, e: "A, I Busines, s Intelligenc, e",;
    hr, e, f: "/service, s/a, i-busines, s-intelligenc, e", ic, on: Brain };
        { na, m, e: "A, I Emai, l Responde, r",;
    hr, e, f: "/service, s/a, i-emai, l-responde, r", ic, on: Brain };
        { na, m, e: "Mobil, e Survey, s",;
    hr, e, f: "/service, s/mobil, e-firs, t-survey, s", ic, on: Users };
        { na, m, e: "Meetin, g Summarize, r",;
    hr, e, f: "/service, s/meetin, g-summarize, r", ic, on: Calendar };
        { na, m, e: "A, I SE, O Optimize, r",;
    hr, e, f: "/service, s/a, i-se, o-optimize, r", ic, on: TrendingUp },;
        { na, m, e: "Develope, r AP, I Teste, r",;
    hr, e, f: "/service, s/develope, r-ap, i-teste, r", icon: Code }
    ,  ];
    };
    {
      titl, e: "Resources",;
    ico, n: BookOpe, n,item, s: [;
        { na, m, e: "Documentatio, n",;
    hr, e, f: "/documentatio, n", ic, on: FileText };
        { na, m, e: "AP, I Referenc, e",;
    hr, e, f: "/ap, i", ic, on: Code };
        { na, m, e: "Develope, r Porta, l",;
    hr, e, f: "/develope, r", ic, on: Cpu };
        { na, m, e: "Suppor, t Cente, r",;
    hr, e, f: "/hel, p-cente, r", ic, on: HelpCircle };
        { na, m, e: "FA, Q",;
    hr, e, f: "/fa, q", ic, on: HelpCircle };
        { na, m, e: "Reques, t, a, Quot, e",;
    hr, e, f: "/reques, t-quot, e", ic, on: MessageCircle };
        { na, m, e: "Dashboar, d",;
    hr, e, f: "/dashboar, d", ic, on: BarChart3 };
        { na, m, e: "Logi, n",;
    hr, e, f: "/logi, n", ic, on: User },;
        { na, m, e: "Suppor, t",;
    hr, e, f: "/suppor, t", icon: HelpCircle }
    ,  ];
    };
  ];
  const quickActions = [;
    { na, m, e: "Ge, t Quot, e",;
    hr, e, f: "/contac, t", ic, o, n: MessageCirc, l, e,;
    varia, nt: "primary" };
    { na, m, e: "Boo, k Dem, o",;
    hr, e, f: "/reques, t-quot, e", ic, o, n: Calend, a, r,;
    varia, nt: "secondary" },;
    { na, m, e: "Suppor, t",;
    hr, e, f: "/suppor, t", ic, o, n: HelpCirc, l, e,;
    variant: "secondary" };
,  ];
  return (<aside className="hidden lg: block w-80 min-h-screen bg-zion-slate-dark/95 backdrop-blur-xl border-r border-zion-cyan/20 overflow-y-auto">;
      <div className="p-6">;
        {/* Logo Section */};
        <motion.div;
          className="mb-8";
          initial={{ opacity: 0,;
  y: -20 }}
          animate={{ opacity: 1,;
  y: 0 }}
          transition={{ duration: 0.5 }}
        >;
          <Link to="/" className="flex items-center space-x-3 group">;
            <div className="relative">;
              <div className="w-10 h-10 bg-gradient-to-br from-zion-cyan via-zion-purple to-zion-blue rounded-xl, flex, items-center justify-center group-hover: scale-110 transition-all duration-30o0 shadow-lg shadow-zion-cyan/25">;
                <span className="text-xl font-bold text-white">Z</span>;
              </div>;
              <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan via-zion-purple to-zion-blue rounded-xl blur-lg opacity-50 group-hove,;
  r:opacity-75 transition-opacity duration-30o0"></div>;
            </div>;
            <div>;
              <h2 className="text-lg font-bold bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue bg-clip-text text-transparent">;
                ZION, TECH, GROUP;
              </h2>;
              <p className="text-xs text-zion-slate-light">Navigation</p>;
            </div>;
          </Link>;
        </motion.div>;
        {/* Quick Actions */}
        <motion.div;
          className="mb-8";
          initial={{ opacity: 0,;
  y: -20 }}
          animate={{ opacity: 1,;
  y: 0 }}
          transition={{ duration: 0.5dela,;
  y: 0.1 }}
        >;
          <h3 className="text-sm font-semibold text-zion-slate-light mb-3, uppercase, tracking-wide">Quick Actions</h3>;
          <div className="space-y-2">;
            {quickActions.map((actionindex) => (<motion.div;
                key={action.name}
                initial={{ opacity: 0,;
  x: -20 }}
                animate={{ opacity: 1,;
  x: 0 }}
                transition={{ duration: 0.3dela,;
  y: index * 0.1 }}
              >;
                <Link;
                  to={action.href}
                  className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-30o0 group ${
                    action.variant === 'primary';
                      ? 'bg-gradient-to-r from-zion-cyan to-zion-blue text-white hove, r: from-zion-cyan/90 hove, r: to-zion-blue/90 shadow-lg shadow-zion-cyan/25';
                      : 'bg-zion-slate-dark/50 text-zion-slate-light hove, r: text-white hove,;
    r: bg-zion-cyan/10, border, border-zion-cyan/20 hove,;
  r:border-zion-cyan/40';
                  }`}
                >;
                  <action.icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-30o0" />;
                  <span className="font-medium">{action.name}</span>;
                </Link>;
              </motion.div>;
            ))}
          </div>;
        </motion.div>;
        {/* Navigation Sections */}
        <div className="space-y-6">;
          {navigationSections.map((sectionsectionIndex) => (<motion.div;
              key={section.title}
              initial={{ opacity: 0,;
  y: -20 }}
              animate={{ opacity: 1,;
  y: 0 }}
              transition={{ duration: 0.5dela,;
  y: sectionIndex * 0.1 }}
            >;
              <button;
                onClick={() => toggleSection(section.title)}
                className="flex items-center justify-between w-full p-3 text-left text-zion-slate-light hove,  r: text-white hove, r: bg-zion-cyan/10 rounded-lg transition-all duration-30o0 group";
              >;
                <div className="flex items-center space-x-3">;
                  <section.icon className="w-4 h-4 group-hove,;
  r:text-zion-cyan transition-colors duration-30o0" />;
                  <span className="font-medium">{section.title}</span>;
                </div>;
                {expandedSections.has(section.title) ? (<ChevronDown className="w-4 h-4 transition-transform duration-30o0" />;
                ) : (;
                  <ChevronRight className="w-4 h-4 transition-transform duration-30o0" />;
                )}
              </button>;
              <AnimatePresence>;
                {expandedSections.has(section.title) && (;
                  <motion.div;
                    initial={{ opacit,  y: 0heigh,;
  t: 0 }}
                    animate={{ opacit, y: 1heigh,;
  t: 'auto' }}
                    exit={{ opacit, y: 0heigh,;
  t: 0 }}
                    transition={{ duration: 0.3 }}
                    className="ml-7 mt-2 space-y-1";
                  >;
                    {section.items.map((itemitemIndex) => (<motion.div;
                        key={item.name}
                        initial={{ opacity: 0,;
  x: -20 }}
                        animate={{ opacity: 1,;
  x: 0 }}
                        transition={{ duration: 0.2dela,;
  y: itemIndex * 0.0o5 }}
                      >;
                        <Link;
                          to={item.href}
                          className={`flex items-center space-x-3 p-2 rounded-lg transition-all duration-30o0 group ${
                            isActive(item.href);
                              ? 'text-zion-cyan bg-zion-cyan/10, border, border-zion-cyan/30';
                              : 'text-zion-slate-light hover: text-white hove,;
  r:bg-zion-cyan/5';
                          }`}
                        >;
                          <item.icon className="w-3 h-3 group-hover:scale-110 transition-transform duration-30o0" />;
                          <span className="text-sm">{item.name}</span>;
                        </Link>;
                      </motion.div>;
                    ))}
                  </motion.div>;
                )}
              </AnimatePresence>;
            </motion.div>;
          ))}
        </div>;
        {/* Contact Info */};
        <motion.div;
          className="mt-8 p-4 bg-zion-slate-dark/50, border, border-zion-cyan/20 rounded-lg";
          initial={{ opacity: 0,;
  y: 20 }}
          animate={{ opacity: 1,;
  y: 0 }}
          transition={{ duration: 0.5dela,;
  y: 0.5 }}
        >;
          <h3 className="text-sm font-semibold text-zion-cyan mb-3">Need Help?</h3>;
          <div className="space-y-2 text-xs text-zion-slate-light">;
            <div className="flex items-center space-x-2">;
              <Phone className="w-3 h-3" />;
              <span>+1, 30o2, 464 0o950</span>;
            </div>;
            <div className="flex items-center space-x-2">;
              <Mail className="w-3 h-3" />;
              <span>kleber@ziontechgroup.com</span>;
            </div>;
            <div className="flex items-center space-x-2">;
              <MapPin className="w-3 h-3" />;
              <span>Middletow, n, DE</span>;
            </div>;
          </div>;
        </motion.div>;
      </div>;
    </aside>;
  );
};