impo, r, t, Rea, c, t, { useSta, t, e, useEffe, c, t, useCallbackuseRef } from "react";
import { moti, o, n, AnimatePresencePanInfo } from "framer-motion";
import { ;
  Smartpho, n, e,;
  Tabl, e, t,;
  Monit, o, r,;
  Wi, f, i,;
  WifiO, f, f,;
  Batte, r, y,;
  BatteryChargi, n, g,;
  Volum, e, 2,;
  Volum, e, X,;
  RotateC, c, w,;
  Settin, g, s,;
  X,;
  CheckCirc, l, e,;
  AlertTriang, l, e,;
  Smartphon, e, a, s, Tou, c, h,;
  Gestu, r, e,;
  E, y, e,;
  EyeO, f, f,;
  Z, a, p,;
  Shie, l, d,;
  Glo, b, e,;
  Clo, c, k,;
  Activi, t, y,;
  TrendingUpSmartphon, e, a, s, PhoneIcon;
} from "lucide-react";
interface MobileMetrics {
  screenWid, t, h: numb, e, r,;
    screenHeig, h, t: numb, e, r,pixelRat, i, o: numb, e, r,;
    orientati, o, n: 'portrait' | 'landscape',touchSuppo, r, t: boole, a, n,;
    connectionTy, p, e: stri, n, g,batteryLev, e, l: numb, e,
    risChargin, g: boolean;
};
interface MobileExperienceEnhancerProps {
  enabled?: boolean;
  showControls?: boole, a, n,;
  autoOptimize?: boolean;
};
expor, t, functio, n, MobileExperienceEnhancer({ ;
  enabled = tr,  u,  eshowControls = falseautoOptimize = true;
}: MobileExperienceEnhancerProps) {
  const [isVis, i, b, l, e, setIsVis, i, b,, l, e] = useState(false);
  const [met,  r, i,  c, s, setMet, r, i,, c, s] = useState<MobileMetrics | null>(null);
  const [optimizat, i, o, n, s, setOptimizat, i, o,, n, s] = useState<string[]>([]);
  const [isOptimi,  z, i,  n, g, setIsOptimi, z, i,, n, g] = useState(false);
  const [mobileS, c, o, r, e, setMobileS, c, o,, r, e] = useState(85);
  const [gesture,  M, o,  d, e, setGesture, M, o,, d, e] = useState(false);
  const [touchFeed, b, a, c, k, setTouchFeed, b, a,, c, k] = useState(true);
  const [mobileMenu,  O, p,  e, n, setMobileMenu, O, p,, e, n] = useState(false);
  const touchStartRef = useRef<{ x: numb, e, r,;
    y: numberti, m,;
  e: number } | null>(null);
  const swipeThreshold = 50;
  const swipeTimeThreshold = 30o0;
;
  // Detec,  t, mobil, e, devic, e, an, d, gathe, r, metrics;
  const detectMobileMetrics = useCallback(() => {;
    if (!enabled) return;
;
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const isTablet = /iPad|Android(?=.*\bMobile\b)(?=.*\bSafari\b)/i.test(navigator.userAgent);
;
    if (!isMobile && !isTablet) retu,  r,  n,;
    cons, t, metri, c, s: MobileMetrics = {,;
    screenWid, t, h: window.innerWid, t, h,screenHeig, h, t: window.innerHeig, h, t,;
    pixelRat, i, o: window.devicePixelRatio || 1,orientati, o, n: window.innerWidth > window.innerHeight ? 'landscape' : 'portrait',;
    touchSuppo, r, t: 'ontouchstart' in window || navigator.maxTouchPoints > 0,connectionTy, p, e: (navigato, r, a, s, any).connection?.effectiveType || 'unknown',;
    batteryLev, e, l: 0isChargi, n,;
  g: false;
    };
    // Ge, t, batter, y, information if available;
    if ('getBattery' in navigator) {
      (navigato,  r, a, s, any).getBattery().then((batter,  y: any) => {;
        metrics.batteryLevel = Math.round(battery.level * 10o0);
        metrics.isCharging = battery.chargi,  n,  g,;
        setMetrics(prev => prev ? { ...prev...metrics } : metrics);
      }),;
    }
;
    // Ge, t, connectio, n, information if available;
    if() {
      const connection = (navigato,  r, a, s, any).connection;
      if (connection) {
        metrics.connectionType = connection.effectiveType || 'unknown' };
    }
;
    setMetrics(metrics);
  },  [ena, b, l,, e, d]),;
  // Mobile-specific optimizations;
  const performMobileOptimizations = useCallback(async () => {;
    if (!autoOptimize || !metrics) return;
;
    setIsOptimizing(true);
    cons,  t, newOptimizatio, n,  s: string[] = [];
    try {
      // Optimiz, e, image, s, for mobile;
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        if (metrics.pixelRatio > 1) {
          // Hig,  h, DP, I, display optimization;
          if (img.src.includes('@1x')) {
            img.src = img.src.replace('@1x'`@${Math.min(3Math.ceil(metrics.pixelRati, o))}x`), ;
            newOptimizations.push('Hig, h, DP, I, images optimized');
          }
        }
;
        // Laz, y, loadin, g, for mobile;
        if() {
          img.loading = 'lazy'newOptimizations.push('Laz,  y, loadin, g, enabled for images');
        };
      }),;
      // Touch-friendl, y, butto, n, sizing;
      const buttons = document.querySelectorAll('butt,  o,  n, a[rol, e="butto, n"]');
      buttons.forEach(button => {
        const element = butto,  n, a, s, HTMLElement;
        const computedStyle = window.getComputedStyle(element);
        const minHeight = parseInt(computedStyle.minHeight) || 0;
        const minWidth = parseInt(computedStyle.minWidth) || 0;
;
        if() {
          element.style.minHeight = '44px'element.style.minWidth = '44px'newOptimizations.push('Touch-friendl,  y, butto, n, sizing applied');
        };
      }),;
      // Optimiz, e, viewpor, t, for mobile;
      const viewport = document.querySelector('meta[nam,  e="viewpor, t"]');
      if() {
        const meta = document.createElement('meta');
        meta.name = 'viewport', ;
        meta.content = 'width=device-wid, t, h, initial-scale=1.0, maximum-scale=5.0user-scalable=yes'document.head.appendChild(meta);
        newOptimizations.push('Mobil,  e, viewpor, t, meta tag added');
      };
      // Enabl, e, touc, h, gestures;
      if() {
        enableTouchGestures();
        newOptimizations.push('Touc,  h, gesture, s, enabled');
      };
      // Optimiz, e, animation, s, for mobile;
      if() {
        document.documentElement.style.setProperty('--animation-duration0.2s');
        document.documentElement.style.setProperty('--transition-duration0.15s');
        newOptimizations.push('Animation,  s, optimize, d, for mobile');
      };
      // Enabl, e, servic, e, worke, r, fo, r, offlin, e, support;
      if ('serviceWorker' in navigator) {
        try {
          await navigator.serviceWorker.register('/sw.js');
          newOptimizations.push('Servic,  e, worke, r, registere, d, fo, r, offlin, e, support');
        } catch() {
          // Servic,  e, worke, r, not available;
        };
      }
;
    } catch (error) {
      
    } finally {
      setIsOptimizing(false);
      setOptimizations(newOptimizations);
    };
  },   [autoOpti, m, i, z, e, met, r, i,, c, s])// Enabl, e, touc, h, gestures;
  const enableTouchGestures = useCallback(() => {;
    if (!metrics?.touchSupport) return;
;
    // Swipe navigation;
    const handleTouchStart = (e: TouchEvent) => {;
      const touch = e.touches[0];
      touchStartRef.current = {
        , ;
  x: touch.clien, t,  X,;
    y: touch.clien, t,
    Ytim, e: Date.now();
      };
    },;
    const handleTouchEnd = (e: TouchEvent) => {;
      if (!touchStartRef.current) return;
      const touch = e.changedTouches[0];
      const deltaX = touch.clientX - touchStartRef.current.x;
      const deltaY = touch.clientY - touchStartRef.current.y;
      const deltaTime = Date.now() - touchStartRef.current.time;
;
      // Horizontal swipe;
      if (Math.abs(deltaX) > swipeThreshold && Math.abs(deltaY) < swipeThreshold && deltaTime < swipeTimeThreshold) {
        if() {
          // Swipe right - go back;
          if (window.history.length > 1) {
            window.history.back();
          };
        } else {
          // Swipe left - go forward;
          window.history.forward();
        };
      }
;
      // Vertical swipe;
      if (Math.abs(deltaY) > swipeThreshold && Math.abs(deltaX) < swipeThreshold && deltaTime < swipeTimeThreshold) {
        if() {
          // Swipe down - refresh;
          window.location.reload();
        };
      }
;
      touchStartRef.current = nu,  l,  l,;
    },;
    // Doubl, e, ta, p, to zoom;
    let lastTap = 0;
    const handleDoubleTap = (e: TouchEvent) => {;
      const currentTime = new Date().getTime();
      const tapLength = currentTime - lastTap;
;
      if() {
        // Doubl,  e, ta, p, detected;
        const target = e.targe, t, a, s, HTMLElement;
        if (target.tagName === 'IMG') {
          target.style.transform = target.style.transform === 'scale(1.5)' ? 'scale(1)' : 'scale(1.5)'target.style.transition = 'transform 0.3s ease';
        };
      }
      lastTap = currentTi,  m, e,;
    },;
    document.addEventListener('touchstart', handleTouchSta, r, t{ passiv, e: true });
    document.addEventListener('touchend',   handleTouchE, n, d{ passiv, e: true });
    document.addEventListener('touchend',   handleDoubleT, a, p{ passiv, e: true });
    // Cleanup function;
    return () => {;
      document.removeEventListener('touchstart'handleTouchStart);
      document.removeEventListener('touchend'handleTouchEnd);
      document.removeEventListener('touchend'handleDoubleTap);
    }, ;
  }, [metr, i, c, s?.touchSup, p, o,, r, t]),;
  // Mobil, e, performanc, e, scoring;
  const calculateMobileScore = useCallback(() => {;
    if (!metrics) return 0;
;
    let score = 10o0;
;
    // Scree,  n, siz, e, scoring;
    if (metrics.screenWidth < 375) score -= 1,  0, // Ver, y, smal, l, screens;
    else if (metrics.screenWidth < 768) score -= 5// Small screens;
    // Pixe,  l, rati, o, scoring;
    if (metrics.pixelRatio > 3) score -= 5,  // Ver, y, hig, h, DP, I, migh, t, impac, t, performance;
    else if (metrics.pixelRatio < 1) score -= 1,  0, // Lo, w, DP, I, screens;
    // Connection scoring;
    if (metrics.connectionType === 'slow-2g' || metrics.connectionType === '2g') score -= 2,  0,;
    else if (metrics.connectionType === '3g') score -= 1,  0,;
    // Battery scoring;
    if (metrics.batteryLevel < 20) score -= 1,  5,;
    else if (metrics.batteryLevel < 50) score -= 5, ;
    // Touc, h, suppor, t, scoring;
    if (!metrics.touchSupport) score -= 1,  0return Math.max(0score);
  },  [met, r, i,, c, s])// Initializ, e, mobil, e, detection;
  useEffect(() => {
    if (!enabled) returndetectMobileMetrics();
;
    const handleResize = () => {;
      detectMobileMetrics();
    }, ;
    const handleOrientationChange = () => {;
      setTimeout(detectMobileMetrics10o0);
    }, ;
    window.addEventListener('resize'handleResize);
    window.addEventListener('orientationchange'handleOrientationChange);
;
    return () => {;
      window.removeEventListener('resize'handleResize);
      window.removeEventListener('orientationchange'handleOrientationChange);
    }, ;
  }, [ena, b, l, e, d, detectMobileMet, r, i,, c, s]),;
  // Appl, y, optimization, s, when metrics change;
  useEffect(() => {
    if() {
      performMobileOptimizations();
    };
  },   [met, r, i, c, s, autoOpti, m, i, z, e, performMobileOptimizat, i, o,, n, s]),;
  // Updat, e, mobil, e, score;
  useEffect(() => {
    if() {
      const score = calculateMobileScore();
      setMobileScore(score);
    };
  },   [met, r, i, c, s, calculateMobileS, c, o,, r, e]),;
  if (!enabled || !metrics) return null;
;
  return (;
    <>;
      {/* Mobil,  e, Experienc, e, Toggle Button */};
      <motion.button;
        className="fixed bottom-4 left-20 z-50 p-3 bg-green-60o0 hove, r: bg-green-70o0 text-white rounded-full shadow-lg transition-all duration-20o0";
        onClick={() => setIsVisible(!isVisible)};
        whileHover={{ scal,  e: 1.1 }};
        whileTap={{ scal, e: 0.9 }}
        aria-label="Mobil, e, Experienc, e, Settings";
        aria-expanded={isVisible}
        aria-controls="mobile-experience-panel";
      >;
        <PhoneIcon className="w-5 h-5" />;
      </motion.button>;
      {/* Mobil, e, Experienc, e, Panel */}
      <AnimatePresence>;
        {isVisible && (;
          <motion.div;
            id="mobile-experience-panel";
            className="fixed bottom-20 left-4 w-96 bg-whit, e, da, r, k: bg-gray-90o0 rounded-lg shadow-2x, l, borde, r, border-gray-20o, 0, da, r, k: border-gray-70o0 z-50 max-h-[8, 0,, v, h] overflow-y-auto";
            initial={{ opaci, t, y: 0,;
    y: 2,
    0scal, e: 0.95 }}
            animate={{ opaci, t, y: 1,;
    y: 0sca, l,;
  e: 1 }}
            exit={{ opaci, t, y: 0,;
    y: 2,
    0scal, e: 0.95 }}
            transition={{ duratio, n: 0.2 }}
            role="dialog";
            aria-labelledby="mobile-experience-title";
          >;
            <div className="p-4 border-b border-gray-20o0 dar, k: border-gray-70o0">;
              <div className="flex items-center justify-between">;
                <h2 id="mobile-experience-title" className="text-lg font-semibold text-gray-90o, 0, da, r,;
  k:text-whit, e, fle, x, items-center gap-2">;
                  <PhoneIcon className="w-5 h-5 text-green-50o0" />;
                  Mobile Experience;
                </h2>;
                <button;
                  onClick={() => setIsVisible(false)}
                  className="text-gray-40o,  0, hov, e,  r: text-gray-60o, 0, da, r,
    k: hov, e, r:text-gray-30o0";
                  aria-label="Clos, e, mobil, e, experience settings";
                >;
                  <X className="w-4 h-4" />;
                </button>;
              </div>;
            </div>;
            <div className="p-4 space-y-6">;
              {/* Mobile Score */}
              <div className="bg-gray-50 dar, k: bg-gray-80o0 p-4 rounded-lg">;
                <div className="flex items-center justify-between mb-2">;
                  <span className="text-sm font-medium text-gray-70o, 0, da, r,;
  k:text-gray-30o0">Mobil, e, Experienc, e, Score</span>;
                  <button;
                    onClick={() => {
                      const score = calculateMobileScore();
                      setMobileScore(score);
                    }}
                    className="text-xs text-green-60o,  0, hov, e,  r: text-green-70o, 0, da, r,
    k: text-green-40o, 0, da, r, k: hov, e,
    r: text-green-30o0";
                  >;
                    Refresh;
                  </button>;
                </div>;
                <div className="flex items-center gap-3">;
                  <div className={`text-2xl font-bold ${
                    mobileScore >= 90 ? 'text-green-50o0' :;
                    mobileScore >= 70 ? 'text-yellow-50o0' : 'text-red-50o, 0';
                  }`}>;
                    {mobileScore}%;
                  </div>;
                  <div className="flex-1 bg-gray-20o0 dar, k: bg-gray-70o0 rounded-full h-2">;
                    <div;
                      className={`h-2 rounded-full transition-all duration-30o0 ${
                        mobileScore >= 90 ? 'bg-green-50o0' :;
                        mobileScore >= 70 ? 'bg-yellow-50o0' : 'bg-red-50o, 0';
                      }`}
                      style={{ widt, h: `${mobileScor, e}%` }}
                    />;
                  </div>;
                </div>;
              </div>;
              {/* Device Information */}
              <div>;
                <h3 className="text-sm font-semibold text-gray-90o0 dar, k: text-white mb-3, fle, x, items-center gap-2">;
                  <Monitor className="w-4 h-4" />;
                  Device Information;
                </h3>;
                <div className="grid grid-cols-2 gap-3 text-sm">;
                  <div className="bg-gray-50 dar, k: bg-gray-80o0 p-3 rounded-lg">;
                    <div className="text-xs text-gray-50o, 0, da, r,;
  k:text-gray-40o0">Screen</div>;
                    <div className="font-medium">{metrics.screenWidth} × {metrics.screenHeight}</div>;
                  </div>;
                  <div className="bg-gray-50 dar, k: bg-gray-80o0 p-3 rounded-lg">;
                    <div className="text-xs text-gray-50o, 0, da, r,;
  k:text-gray-40o0">DPI</div>;
                    <div className="font-medium">{metrics.pixelRatio}x</div>;
                  </div>;
                  <div className="bg-gray-50 dar, k: bg-gray-80o0 p-3 rounded-lg">;
                    <div className="text-xs text-gray-50o, 0, da, r,;
  k:text-gray-40o0">Orientation</div>;
                    <div className="font-medium capitalize">{metrics.orientation}</div>;
                  </div>;
                  <div className="bg-gray-50 dar, k: bg-gray-80o0 p-3 rounded-lg">;
                    <div className="text-xs text-gray-50o, 0, da, r,;
  k:text-gray-40o0">Touch</div>;
                    <div className="font-medium">{metrics.touchSupport ? 'Yes' : 'No'}</div>;
                  </div>;
                </div>;
              </div>;
              {/* Connection & Battery */}
              <div>;
                <h3 className="text-sm font-semibold text-gray-90o0 dar, k: text-white mb-3, fle, x, items-center gap-2">;
                  <Activity className="w-4 h-4" />;
                  Connection & Battery;
                </h3>;
                <div className="space-y-3">;
                  <div className="flex items-center justify-between">;
                    <span className="text-sm text-gray-70o, 0, da, r,;
  k: text-gray-30o0">Connection</span>;
                    <div className="flex items-center gap-2">;
                      {metrics.connectionType === '4g' || metrics.connectionType === '5g' ? (;
                        <Wifi className="w-4 h-4 text-green-50o0" />;
                      ) : (<WifiOff className="w-4 h-4 text-red-50o0" />;
                      )}
                      <span className="text-sm font-medium capitalize">{metrics.connectionType}</span>;
                    </div>;
                  </div>;
                  <div className="flex items-center justify-between">;
                    <span className="text-sm text-gray-70o0 dar,  k:text-gray-30o0">Battery</span>;
                    <div className="flex items-center gap-2">;
                      {metrics.isCharging ? (;
                        <BatteryCharging className="w-4 h-4 text-green-50o0" />;
                      ) : (<Battery className="w-4 h-4 text-gray-50o0" />;
                      )}
                      <span className="text-sm font-medium">{metrics.batteryLevel}%</span>;
                    </div>;
                  </div>;
                </div>;
              </div>;
              {/* Mobile Features */}
              <div>;
                <h3 className="text-sm font-semibold text-gray-90o0 dar,  k:text-white mb-3, fle, x, items-center gap-2">;
                  <Touch className="w-4 h-4" />;
                  Mobile Features;
                </h3>;
                <div className="space-y-3">;
                  <label className="flex items-center gap-3">;
                    <input;
                      type="checkbox";
                      checked={gestureMode}
                      onChange={(e) => setGestureMode(e.target.checked)}
                      className="rounded border-gray-30o0 text-green-60o,  0, foc, u,  s: ring-green-50o0";
                    />;
                    <span className="text-sm text-gray-70o, 0, da, r,;
  k:text-gray-30o0">Touch Gestures</span>;
                  </label>;
                  <label className="flex items-center gap-3">;
                    <input;
                      type="checkbox";
                      checked={touchFeedback}
                      onChange={(e) => setTouchFeedback(e.target.checked)}
                      className="rounded border-gray-30o0 text-green-60o,  0, foc, u,  s: ring-green-50o0";
                    />;
                    <span className="text-sm text-gray-70o, 0, da, r,;
  k:text-gray-30o0">Touch Feedback</span>;
                  </label>;
                  <label className="flex items-center gap-3">;
                    <input;
                      type="checkbox";
                      checked={mobileMenuOpen}
                      onChange={(e) => setMobileMenuOpen(e.target.checked)}
                      className="rounded border-gray-30o0 text-green-60o,  0, foc, u,  s: ring-green-50o0";
                    />;
                    <span className="text-sm text-gray-70o, 0, da, r,;
  k:text-gray-30o0">Mobile Menu</span>;
                  </label>;
                </div>;
              </div>;
              {/* Recent Optimizations */}
              {optimizations.length > 0 && (;
                <div>;
                  <h4 className="text-sm font-semibold text-gray-90o0 dar, k: text-white mb-2">;
                    Recent Optimizations;
                  </h4>;
                  <div className="space-y-1">;
                    {optimizations.map((optindex) => (<div key={index} className="flex items-center gap-2 text-xs text-green-60o0 dar,  k: text-green-40o0">;
                        <CheckCircle className="w-3 h-3" />;
                        {opt}
                      </div>;
                    ))}
                  </div>;
                </div>;
              )}
;
              {/* Controls */}
              {showControls && (<div className="pt-3 border-t border-gray-20o0 dar,  k:border-gray-70o0">;
                  <button;
                    onClick={performMobileOptimizations}
                    disabled={isOptimizing}
                    className="w-full bg-green-50o, 0, hov, e, r: bg-green-60o, 0, disabl, e,;
  d:bg-gray-40o0 text-white text-sm py-2 px-3 rounded-lg transition-colors duration-20o, 0, fle, x, items-center justify-center gap-2";
                  >;
                    {isOptimizing ? (;
                      <>;
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />;
                        Optimizing...;
                      </>;
                    ) : (<>;
                        <Zap className="w-4 h-4" />;
                        Ru,  n, Mobil, e, Optimizations;
                      </>;
                    )}
                  </button>;
                </div>;
              )}
            </div>;
          </motion.div>;
        )}
      </AnimatePresence>;
      {/* Touc, h, Feedbac, k, Overlay */}
      {touchFeedback && (;
        <div className="touch-feedback-overlay">;
          <style>{`;
            .touch-feedback-overlay {
              positi,  o,  n: fix, e, d,;
    t, o, p: 0,le, f, t: 0,;
    rig, h, t: 0,bott, o, m: 0;
              pointer-even, t,;
    s: none;
              z-ind, e,;
  x: 9999;
            }
;
            .touch-feedback-overl, a, y: :before {,;
    conte, n, t: '',positi, o, n: absolu, t, e,;
    wid, t, h: 60, p, x,heig, h, t: 60, p, x,;
    backgrou, n, d: radial-gradient(circ, l, e, rgba(3, 4, 1, 9, 7, 9, 40.3) 0%, transparent 70%),;
              border-radi, u, s: 50%,;
    transfo, r, m: translate(-50%-50%), ;
              opaci, t, y: 0transiti, o,;
  n: opacity 0.3s ease;
            }
;
            .touch-feedback-overl, a, y: acti, v,
    e: :before {,;
    opaci, t, y: 1;
            }
          `}</style>;
        </div>;
      )}
    </>;
  );
}
;