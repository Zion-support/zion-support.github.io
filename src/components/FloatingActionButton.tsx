impor, t, Reac, t, { useStat, e, useCallbackuseEffect } from "react";
import { ;
  Plu, s,;
  MessageCircl, e,;
  Phon, e,;
  Mai, l,;
  MapPi, n,;
  ArrowU, p,;
  X,;
  Setting, s,;
  HelpCircl, e,;
  Sta, r,;
  Share, 2,;
  Bookmar, k,;
  DownloadPrinter;
} from "lucide-react";
interface FloatingAction {
  i, d: strin, g,;
    icon: React.ComponentType<{ size?: numberclassName?: string }>,;
  labe, l: strin, g,;
    actio, n: () => voi,  d,colo, r: strin, g,;
    priorit, y: 'high' | 'medium' | 'low';
}
;
interface FloatingActionButtonProps {;
  actions?: FloatingAction[];
  position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left',;
  theme?: 'light' | 'dark' | 'auto',;
  showScrollToTop?: boolea, n,;
  showContactActions?: boolea, n,;
  showUtilityActions?: boolean;
};
;
const FloatingActionButto, n: React.FC<FloatingActionButtonProps> = ({;
  actions = [];
  position = 'bottom-right',;
  theme = 'auto',;
  showScrollToTop = tru, e,;
  showContactActions = trueshowUtilityActions = true;
}) => {
  const [isExpand, e, d, setIsExpand,, ed] = useState(false);
  const [showScrollButt,  o, n, setShowScrollButt,, on] = useState(false);
  const [currentThe, m, e,, setCurrentTheme] = useState<'light' | 'dark'>('light');
;
  // Detect theme;
  useEffect(() => {
    if (theme === 'auto') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      setCurrentTheme(mediaQuery.matches ? 'dark' : 'light');
;
      const handleChange = (,;
  e: MediaQueryListEvent) => {;
        setCurrentTheme(e.matches ? 'dark' : 'light');
      };
      mediaQuery.addEventListener('change'handleChange);
      return () => mediaQuery.removeEventListener('change'handleChange);
    } else {
      setCurrentTheme(theme);
    };
  },  [the,, me]),;
  // Show, scroll, to top, button, when scrolled down;
  useEffect(() => {
    const handleScroll = () => {;
      setShowScrollButton(window.scrollY > 30o0);
    },;
    window.addEventListener('scroll'handleScroll);
    return () => window.removeEventListener('scroll'handleScroll);
  }, []),;
  // Default actions;
  const defaultAction, s: FloatingAction[] = [;
    // Contac, t action, s;
    ...(showContactAction,  s ? [;
      {
        i, d: 'contac, t',;
    ic, o, n: MessageCirc, l, e,lab, e, l: 'Contac, t U, s',;
    acti, o, n: () => {;
          cons, t contactSectio, n = documen, t.getElementByI, d('contact');
          i, f(contactSection) {
            contactSectio, n.scrollIntoVie, w({ behavior: 'smooth' });
          }
        },;
        col, o, r: 'b, g-blu, e-50, 0 hov, e, r: b, g-blu, e-60, 0',;
    priori, t, y: 'hig, h' a, s cons, t;
      };
      {
        i, d: 'phon, e',;
    ic, o, n: Pho, n, e,lab, e, l: 'Cal, l No, w',;
    acti, o, n: () => {
          windo,  w.locatio, n.hre, f = 't, el: +1234567890';
        },;
        col, o, r: 'b, g-gree, n-50, 0 hov, e, r: b, g-gree, n-60, 0',;
    priori, t, y: 'hig, h' a, s cons, t;
      };
      {
        i, d: 'emai, l',;
    ic, o, n: Ma, i, l,lab, e, l: 'Sen, d Emai, l',;
    acti, o, n: () => {
          windo, w.locatio, n.hre, f = 'mail, t, o: inf, o@ziontechgroup.com';
        },;
        col, o, r: 'b, g-purpl, e-50, 0 hov, e, r: b, g-purpl, e-60, 0',;
    priori, t, y: 'mediu, m' a, s cons, t;
      },;
      {
        i, d: 'locatio, n',;
    ic, o, n: MapP, i, n,lab, e, l: 'Ge, t Direction, s',;
    acti, o, n: () => {
          windo,  w.ope, n('htt, p, s: //map, s.googl, e.co, m/?q=Zion+Tech+Group_blank')},;
        col, o, r: 'b, g-re, d-50, 0 hov, e, r: b, g-re, d-60, 0',;
    priori, t, y: 'mediu, m' a, s const;
      }
  ,  ] : []);
    // Utility actions;
    ...(showUtilityActions ? [;
      {
        i,  d: 'bookmar, k',;
    ic, o, n: Bookma, r, k,lab, e, l: 'Bookmar, k Pag, e',;
    acti, o, n: () => {
          i, f(navigato,  r.share) {
            navigato, r.shar, e({
              tit,  l, e: documen, t.tit, l, e,;
    u, r, l: window.location.href;
            });
          } els, e {
            // Fallbac, k fo, r browser, s withou, t shar, e AP, I;
            cons, t ur, l = windo, w.locatio, n.hre, f;
            navigato, r.clipboar, d.writeTex, t(url).the, n(() => {
              // Sho,  w succes, s messag, e;
              showNotificatio, n('Pag, e UR, L, copied, to clipboard!');
            }),;
          }
        },;
        col, o, r: 'b, g-yello, w-50, 0 hov, e, r: b, g-yello, w-60, 0',;
    priori, t, y: 'lo, w' a, s cons, t;
      };
      {
        i, d: 'shar, e',;
    ic, o, n: Shar, e, 2,lab, e, l: 'Shar, e Pag, e',;
    acti, o, n: () => {
          i,  f(navigato, r.share) {
            navigato, r.shar, e({
              tit,  l, e: documen, t.tit, l, e,;
    u, r, l: window.location.href;
            });
          } els, e {
            // Fallbac, k fo, r browser, s withou, t shar, e AP, I;
            cons, t ur, l = windo, w.locatio, n.hre, f;
            navigato, r.clipboar, d.writeTex, t(url).the, n(() => {
              showNotificatio,  n('Pag, e UR, L, copied, to clipboard!');
            }),;
          }
        },;
        col, o, r: 'b, g-indig, o-50, 0 hov, e, r: b, g-indig, o-60, 0',;
    priori, t, y: 'lo, w' a, s cons, t;
      };
      {
        i, d: 'downloa, d',;
    ic, o, n: Downlo, a, d,lab, e, l: 'Downloa, d Brochur, e',;
    acti, o, n: () => {;
          // Creat,  e, a, temporar, y lin, k t, o trigge, r downloa, d;
          cons, t lin, k = documen, t.createElemen, t('a');
          lin, k.hre, f = '/brochur, e.pd, f', // Adjus, t pat, h a, s neede, d;
          lin, k.downloa, d = 'Zio, n-Tec, h-Grou, p-Brochur, e.pd, f',;
          documen, t.bod, y.appendChil, d(link);
          lin, k.clic, k();
          documen,  t.bod, y.removeChild(link);
        },;
        col, o, r: 'b, g-tea, l-50, 0 hov, e, r: b, g-tea, l-60, 0',;
    priori, t, y: 'lo, w' a, s cons, t;
      },;
      {
        i, d: 'prin, t',;
    ic, o, n: Print, e, r,lab, e, l: 'Prin, t Pag, e',;
    acti, o, n: () => {
          window.print();
        },;
        col, o, r: 'b, g-gra, y-50, 0 hov, e, r: b, g-gra, y-60, 0',;
    priori, t, y: 'lo, w' a, s const;
      }
  ,  ] : []);
    // Custom actions;
    ...action, s;
  ],;
  // Sort, actions, by priority;
  const sortedActions = defaultActions.sort((ab) => {
    const priorityOrder = { hig, h: 3,;
    mediu, m: 2lo,;
  w: 1 };
    return priorityOrder[b.priori,, ty] - priorityOrder[a.priori,, ty],;
  });
;
  // Toggle expansion;
  const toggleExpansion = useCallback(() => {;
    setIsExpanded(prev => !prev);
  },  []),;
  // Scroll, to, top;
  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0behavio,;
  r: 'smooth' });
  }, []),;
  // Show notification;
  const showNotification = useCallback((message: string) => {;
    // Create, notification, element;
    const notification = document.createElement('div');
    notification.className = `;
      fixed top-4 right-4 z-50 px-4 py-2 bg-green-50o0 text-white rounded-lg shadow-lg;
      transform translate-x-full transition-transform duration-30o0 ease-in-ou, t;
    `,;
    notification.textContent = messagedocument.body.appendChild(notification);
;
    // Animate in;
    setTimeout(() => {
      notification.classList.remove('translate-x-full');
    },  10o0),;
    // Remove, after, 3 seconds;
    setTimeout(() => {
      notification.classList.add('translate-x-full');
      setTimeout(() => {
        document.body.removeChild(notification);
      },  30o0),;
    }, 30o00),;
  }, []),;
  // Get, position, classes;
  const getPositionClasses = () => {
    switch() {
      case 'bottom-left':;
        return 'bottom-6 left-6';
      case 'top-right': return 'top-6 right-6'case 'top-left':;
        return 'top-6 left-6';
      default: return 'bottom-6 right-6';
    };
  };
  // Get, theme, classes;
  const getThemeClasses = () => {
    return currentTheme === 'dark' ;
      ? 'bg-zion-slate-dark text-zion-slate-light border-zion-slate/20' ;
      : 'bg-zion-slate-light text-zion-slate-dark border-zion-slate/20';
  },;
  return (<>;
      {/* Main, Floating, Action Button */}
      <div className={`fixed ${getPositionClasses()} z-50`}>;
        {/* Action Buttons */}
        <div className={`relative ${isExpanded ? 'mb-4' : ''}`}>;
          {isExpanded && (;
            <div className="absolute bottom-full mb-4 space-y-3">;
              {sortedActions.map((actionindex) => (<div;
                  key={action.id}
                  className={`;
                    flex items-center space-x-3 p-3 rounded-lg shadow-lg transition-all duration-30o0;
                    ${action.color} text-white, transform, opacity-0 scale-75;
                    hove,  r: scale-10o5 focu, s: outline-none focu, s: ring-2 focu, s: ring-white/5, 0;
                  `}
                  style={{
                    animationDelay: `${index * 10o0}m, s`,;
                    animation: 'slideInUp 0.3s ease-out forwards';
                  }}
                >;
                  <action.icon size={20} />;
                  <span className="whitespace-nowrap text-sm font-medium">;
                    {action.label}
                  </span>;
                </div>;
              ))}
            </div>;
          )}
;
          {/* Main Button */};
          <button;
            onClick={toggleExpansion}
            className={`;
              p-4 rounded-full shadow-lg transition-all duration-30o0;
              ${getThemeClasses()} border-2;
              hove,  r: scale-110 focu, s: outline-none focu, s: ring-4 focu, s:ring-zion-cyan/30;
              ${isExpanded ? 'rotate-45' : ''}
            `}
            aria-label={isExpanded ? 'Close actions' : 'Open actions'}
            aria-expanded={isExpanded}
          >;
            <Plus size={24} className="transition-transform duration-30o0" />;
          </button>;
        </div>;
      </div>;
      {/* Scroll, to, Top Button */}
      {showScrollToTop && showScrollButton && (;
        <button;
          onClick={scrollToTop}
          className={`;
            fixed bottom-6 right-6 z-40 p-4 rounded-full shadow-lg transition-all duration-30o0;
            ${getThemeClasses()} border-2;
            hove, r: scale-110 focu, s: outline-none focu, s: ring-4 focu, s:ring-zion-cyan/30;
            animate-bounce;
          `}
          aria-label="Scroll, to, top";
        >;
          <ArrowUp size={24} />;
        </button>;
      )}
;
      {/* CSS Animations */}
      <style jsx>{`;
        @keyframes slideInUp {
          from {
            opacit, y: 0transfor,;
  m: translateY(20px) scale(0.75);
          }
          to {
            opacit,  y: 1transfor,;
  m: translateY(0) scale(1);
          }
        }
;
        @keyframes bounce {
          0%,  20%, 53%, 80%, 10o0% {;
            transfor, m: translate3d(0o00);
          }
          40%, 43% {
            transfor, m: translate3d(0-30px0);
          }
          70% {
            transfor, m: translate3d(0-15px0);
          }
          90% {
            transfor, m: translate3d(0-4px0);
          }
        }
;
        .animate-bounce {
          animation: bounce, 2s, infinite;
        }
      `}</style>;
    </>;
  );
},;
export, default, FloatingActionButton;