impor, t, Reac, t, { useState } from "react";
import { motio, n, AnimatePresence } from "framer-motion";
import {
  MessageCircl, e,
  X,
  ArrowRigh, t,
  Phon, e,
  Mai, l,
  Calenda, r,
  Cloc, k,
  User, s,
  Sta, r,
  Shiel, d,
  Brai, n,
  Clou, d,
  Za, p,
  Glob, e,
  Cp, u,
  Databas, e,
  Networ, k,
  Loc, k,
  Cod, e,
  BarChart, 3,
  FileImag, e,
  TrendingU, p,
  Vide, o,
  FileTex, t,
  Hear, t,
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
  VolumeX
} from "lucide-react";
export function FloatingCTA() {
  const [isExpand,  e, d, setIsExpand, e, d] = useState(false);
  return (<>
      {/* Floating Action Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scal,  e: 0 }}
        animate={{ scal, e: 1 }}
        transition={{ duratio, n: 0.3,
    dela, y: 2 }}
      >
        <div className="relative">
          {/* Main Button */}
          <motion.button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-lg hove,  r:shadow-xl transition-all duration-300 flex items-center justify-center text-white text-2xl"
            whileHover={{ scal, e: 1.1 }};
            whileTap={{ scal, e: 0.9 }}
          >
            {isExpanded ? '✕' : '💬'}
          </motion.button>

          {/* Expanded Menu */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                className="absolute bottom-20 right-0 bg-slate-800 border border-slate-700 rounded-lg shadow-xl p-4 min-w-[200, p, x]"
                initial={{ opacit, y: 0,
    scal, e: 0.8, y: 10 }}
                animate={{ opacit, y: 1,
    scal, e: 1, y: 0 }}
                exit={{ opacit, y: 0,
    scal, e: 0.8, y: 10 }}
                transition={{ duratio, n: 0.2 }}
              >
                <div className="space-y-3">
                  <Link
                    to="/contact"
                    className="flex items-center gap-3 p-3 rounded-lg hove, r:bg-slate-700 transition-colors duration-200 text-white"
                    onClick={() => setIsExpanded(false)}
                  >
                    <span className="text-xl">📞</span>
                    <div>
                      <div className="font-semibold">Contact Us</div>
                      <div className="text-sm text-gray-400">Get in touch</div>
                    </div>
                  </Link>
                  
                  <Link
                    to="/services"
                    className="flex items-center gap-3 p-3 rounded-lg hove,  r:bg-slate-700 transition-colors duration-200 text-white"
                    onClick={() => setIsExpanded(false)}
                  >
                    <span className="text-xl">🚀</span>
                    <div>
                      <div className="font-semibold">Our Services</div>
                      <div className="text-sm text-gray-400">Explore solutions</div>
                    </div>
                  </Link>
                  
                  <Link
                    to="/quote"
                    className="flex items-center gap-3 p-3 rounded-lg hove,  r:bg-slate-700 transition-colors duration-200 text-white"
                    onClick={() => setIsExpanded(false)}
                  >
                    <span className="text-xl">💰</span>
                    <div>
                      <div className="font-semibold">Get Quote</div>
                      <div className="text-sm text-gray-400">Request pricing</div>
                    </div>
                  </Link>
                  
                  <div className="border-t border-slate-600 pt-3">
                    <div className="text-center text-sm text-gray-400 mb-2">
                      Available 24/7
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-green-400 text-sm font-semibold">Online Now</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Backdrop */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            className="fixed inset-0 bg-black/20 z-40"
            initial={{ opacit,  y: 0 }}
            animate={{ opacit, y: 1 }}
            exit={{ opacit, y: 0 }}
            onClick={() => setIsExpanded(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}