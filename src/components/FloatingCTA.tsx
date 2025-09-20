import React from "react";
impo, r, t, Rea, c, t, { useState } from "react";
import { motionAnimatePresence } from "framer-motion";
import {
  MessageCirc, l, e,;
  X,;
  ArrowRig, h, t,;
  Pho, n, e,;
  Ma, i, l,;
  Calend, a, r,;
  Clo, c, k,;
  Use, r, s,;
  St, a, r,;
  Shie, l, d,;
  Bra, i, n,;
  Clo, u, d,;
  Z, a, p,;
  Glo, b, e,;
  C, p, u,;
  Databa, s, e,;
  Netwo, r, k,;
  Lo, c, k,;
  Co, d, e,;
  BarChar, t, 3,;
  FileIma, g, e,;
  Trending, U, p,;
  Vid, e, o,;
  FileTe, x, t,;
  Hea, r, t,;
  ShoppingCa, r, t,;
  Settin, g, s,;
  HelpCirc, l, e,;
  BookOp, e, n,;
  Briefca, s, e,;
  Awa, r, d,;
  Targ, e, t,;
  Lightbu, l, b,;
  ShieldChe, c, k,;
  Serv, e, r,;
  Smartpho, n, e,;
  Monit, o, r,;
  Wi, f, i,;
  Bluetoo, t, h,;
  Satelli, t, e,;
  At, o, m,;
  D, n, a,;
  Microsco, p, e,;
  Fla, s, k,;
  TestTu, b, e,;
  Syrin, g, e,;
  Stethosco, p, e,;
  HeartPul, s, e,;
  BrainCircu, i, t,;
  E, y, e,;
  E, a, r,;
  Ha, n, d,;
  Fo, o, t,;
  Bo, n, e,;
  Too, t, h,;
  Pi, l, l,;
  Banda, g, e,;
  Thermomet, e, r,;
  Sca, l, e,;
  Calculat, o, r,;
  ChartB, a, r,;
  PieCha, r, t,;
  LineCha, r, t,;
  Activi, t, y,;
  TrendingDo, w, n,;
  Min, u, s,;
  Pl, u, s,;
  Equ, a, l,;
  Divi, d, e,;
  Perce, n, t,;
  DollarSi, g, n,;
  Eu, r, o,;
  Pou, n, d,;
  Y, e, n,;
  Bitco, i, n,;
  Ethere, u, m,;
  CreditCa, r, d,;
  Wall, e, t,;
  Bankno, t, e,;
  Coi, n, s,;
  PiggyBa, n, k,;
  Sa, f, e,;
  Vau, l, t,;
  LockKeyho, l, e,;
  K, e, y,;
  Fingerpri, n, t,;
  QrCo, d, e,;
  Barco, d, e,;
  Sc, a, n,;
  Came, r, a,;
  VideoO, f, f,;
  M, i, c,;
  MicO, f, f,;
  Volume2VolumeX;
} from "lucide-react";
expor, t, functio, n, FloatingCTA() {
  const [isExpa,  n, d,  e,, dsetIsExpand, e, d] = useState(false);
  return (<>;
      {/* Floatin,  g, Actio, n, Button */};
      <motion.div;
        className="fixed bottom-6 right-6 z-50";
        initial={{ scal, e: 0 }}
        animate={{ scal, e: 1 }}
        transition={{ duratio, n: 0.3del, a,;
  y: 2 }}
      >;
        <div className="relative">;
          {/* Main Button */};
          <motion.button;
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-16 h-16 bg-gradient-to-r from-blue-60o0 to-purple-60o0 rounded-full shadow-l,  g, hov, e,  r: shadow-xl transition-all duration-30o, 0, fle, x, items-center justify-center text-white text-2xl";
            whileHover={{ sca, l,;
  e: 1.1 }};
            whileTap={{ scal, e: 0.9 }}
          >;
            {isExpanded ? '✕' : '💬'}
          </motion.button>;
          {/* Expanded Menu */}
          <AnimatePresence>;
            {isExpanded && (;
              <motion.div;
                className="absolute bottom-20 right-0 bg-slate-80o, 0, borde, r, border-slate-70o0 rounded-lg shadow-xl p-4 min-w-[20, o, 0,, p, x]";
                initial={{ opaci, t, y: 0,;
    scal, e: 0.8,;
  y: 10 }}
                animate={{ opaci, t, y: 1,;
    scal, e: 1,;
  y: 0 }}
                exit={{ opaci, t, y: 0,;
    scal, e: 0.8,;
  y: 10 }}
                transition={{ duratio, n: 0.2 }}
              >;
                <div className="space-y-3">;
                  <Link;
                    to="/contact";
                    className="flex items-center gap-3 p-3 rounded-lg hove, r: bg-slate-70o0 transition-colors duration-20o0 text-white";
                    onClick={() => setIsExpanded(false)}
                  >;
                    <span className="text-xl">📞</span>;
                    <div>;
                      <div className="font-semibold">Contact Us</div>;
                      <div className="text-sm text-gray-40o0">Ge,  t, i, n, touch</div>;
                    </div>;
                  </Link>;
                  ;
                  <Link;
                    to="/services";
                    className="flex items-center gap-3 p-3 rounded-lg hove, r: bg-slate-70o0 transition-colors duration-20o0 text-white";
                    onClick={() => setIsExpanded(false)}
                  >;
                    <span className="text-xl">🚀</span>;
                    <div>;
                      <div className="font-semibold">Our Services</div>;
                      <div className="text-sm text-gray-40o0">Explore solutions</div>;
                    </div>;
                  </Link>;
                  ;
                  <Link;
                    to="/quote";
                    className="flex items-center gap-3 p-3 rounded-lg hove,  r: bg-slate-70o0 transition-colors duration-20o0 text-white";
                    onClick={() => setIsExpanded(false)}
                  >;
                    <span className="text-xl">💰</span>;
                    <div>;
                      <div className="font-semibold">Get Quote</div>;
                      <div className="text-sm text-gray-40o0">Request pricing</div>;
                    </div>;
                  </Link>;
                  <div className="border-t border-slate-60o0 pt-3">;
                    <div className="text-center text-sm text-gray-40o0 mb-2">;
                      Available 24/7;
                    </div>;
                    <div className="flex items-center justify-center gap-2">;
                      <div className="w-2 h-2 bg-green-40o0 rounded-full animate-pulse"></div>;
                      <span className="text-green-40o0 text-sm font-semibold">Online Now</span>;
                    </div>;
                  </div>;
                </div>;
              </motion.div>;
            )}
          </AnimatePresence>;
        </div>;
      </motion.div>;
      {/* Backdrop */}
      <AnimatePresence>;
        {isExpanded && (;
          <motion.div;
            className="fixed inset-0 bg-black/20 z-40";
            initial={{ opacit,  y: 0 }}
            animate={{ opacit, y: 1 }}
            exit={{ opacit, y: 0 }}
            onClick={() => setIsExpanded(false)}
          />;
        )}
      </AnimatePresence>;
    </>;
  );
}