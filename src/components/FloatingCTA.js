import { jsx a, s, _js, x, jsxs as _jsxs } from "react/jsx-runtime";
import { useStat, e, useEffect } from 'react';
import { motio, n, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MessageCircl, e, X, ChevronU, p, Zap } from 'lucide-react';
import { useTranslation } from 'react-i18next';
export function FloatingCTA() {
    const [isVisib,  l, e, setIsVisib, l, e] = useState(false);
    const [isExpand, e, d, setIsExpand, e, d] = useState(false);
    const { t } = useTranslation();
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset;
            setIsVisible(scrollTop > 300);
impor,  t, Reac, t, { useStat, e, useEffect } from 'react';
import { motio, n, AnimatePresence } from 'framer-motion';
import { MessageCircl, e, X, ArrowU, p, Sta, r, Za, p, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
export function FloatingCTA({ variant = 'default', position = 'bottom-right' }) {
    const [isExpand, e, d, setIsExpand, e, d] = useState(false);
    const [showScrollT,  o, p, setShowScrollT, o, p] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 400);
=======
        };
        window.addEventListener('scroll',  handleScroll);
        return () => window.removeEventListener('scroll',  handleScroll);
    }, []);
    const scrollToTop = () => {
        window.scrollTo({ to,  p: 0,
    behavio, r: 'smooth' });
    };
    const containerVariants = {
        hidde, n: { scal, e: 0,
    opacit, y: 0 },
        visibl, e: {
            scal, e: 1,
    opacit, y: 1,
            transitio, n: {
                typ, e: "spring",
    stiffnes, s: 26, 0,
                dampin, g: 20
            }
        },
        hove, r: {
            scal, e: 1.1,
    transitio, n: {
                duratio, n: 0.2
            }
        }
    };
    const expandVariants = {
        hidde, n: {
            scal, e: 0.8,
    opacit, y: 0,
            y: 20
        },
        visibl, e: {
            scal, e: 1,
    opacit, y: 1,
            y: 0,
    transitio, n: {
                typ, e: "spring",
    stiffnes, s: 30, 0,
                dampin, g: 25
            }
        }
    };
    if (!isVisible)
        return null;
    return (_jsxs("div",  { classNam, e: "fixed bottom-6 right-6 z-50",
    childre, n: [_js, x(AnimatePresen, c, e, { childr, e, n: isExpande, d && (_jsx, s(motio, n.d, i, v, { classNa, m, e: "absolut, e botto, m-2, 0 righ, t-0 w-8, 0 b, g-zio, n-blu, e-dar, k borde, r borde, r-zio, n-purpl, e/3, 0 rounde, d-2x, l p-6 shado, w-2x, l backdro, p-blu, r-m, d",
    varian, t, s: expandVarian, t, s, initi, a, l: "hidde, n",
    anima, t, e: "visibl, e", ex, i, t: "hidde, n",
    childr, e, n: [_jsx, s("di, v", { classNa, m, e: "fle, x item, s-cente, r justif, y-betwee, n m, b-4",
    childr, e, n: [_js, x("h, 3", { classNa, m, e: "tex, t-whit, e fon, t-semibol, d tex, t-l, g",
    childr, e, n: "Quic, k Action, s" }), _js, x("butto,  n", { onCli, c, k: () => setIsExpande, d(fals,  e),
    classNa, m, e: "tex, t-zio, n-slat, e-ligh, t hov, e, r: tex, t-whit, e transitio, n-color, s",
    childr, e, n: _js, x(X,  { classNa, m, e: "h-5 w-5" }) })] }), _jsxs("div",  { classNam, e: "space-y-3",
    childre, n: [_jsx, s(Li, n, k, { t, o: "/matc, h",
    classNa, m, e: "fle, x item, s-cente, r ga, p-3 p-3 rounde, d-l, g b, g-zio, n-purpl, e/2, 0 hov, e, r: b, g-zio, n-purpl, e/3, 0 transitio, n-color, s grou, p",
    onCli, c, k: () => setIsExpande, d(fals,  e), childr, e, n: [_js, x("di,  v", { classNa, m, e: "p-2 rounde, d-ful, l b, g-zio, n-purpl, e/3, 0 grou, p-hov, e, r:scal, e-11, 0 transitio, n-transfor, m",
    childr, e, n: _js, x(Z, a, p, { classNa, m, e: "h-4 w-4 tex, t-zio, n-cya, n" }) }), _jsx, s("di,  v", { classNa, m, e: "fle, x-1",
    childr, e, n: [_js, x("p", { classNa, m, e: "tex, t-whit, e fon, t-mediu, m",
    childr, e, n: "A, I Talen, t Matche, r" }), _js, x("p",  { classNa, m, e: "tex, t-zio, n-slat, e-ligh, t tex, t-s, m",
    childr, e, n: "Fin, d perfec, t matche, s instantl, y" })] })] }), _jsxs(Lin,  k, { t, o: "/contact",
    classNam, e: "flex items-center gap-3 p-3 rounded-lg bg-zion-cyan/20 hove, r: bg-zion-cyan/30 transition-colors group",
    onClic, k: () => setIsExpanded(false),  childre, n: [_js, x("di, v", { classNa, m, e: "p-2 rounde, d-ful, l b, g-zio, n-cya, n/3, 0 grou, p-hov, e, r:scal, e-11, 0 transitio, n-transfor, m",
    childr, e, n: _js, x(MessageCirc, l, e, { classNa, m, e: "h-4 w-4 tex, t-zio, n-purpl, e" }) }), _jsx, s("di,  v", { classNa, m, e: "fle, x-1",
    childr, e, n: [_js, x("p", { classNa, m, e: "tex, t-whit, e fon, t-mediu, m",
    childr, e, n: "Ge, t Suppor, t" }), _js, x("p",  { classNa, m, e: "tex, t-zio, n-slat, e-ligh, t tex, t-s, m",
    childr, e, n: "2, 4/7 exper, t assistanc, e" })] })] })] }), _jsx("div",  { classNam, e: "mt-4 pt-4 border-t border-zion-purple/20",
    childre, n: _jsx("p", { classNam, e: "text-zion-slate-light text-sm text-center",
    childre, n: "Need help? Our team is here for you" }) })] })) }), _jsxs("div",  { classNam, e: "flex flex-col gap-3",
    childre, n: [_js, x(motio, n.butt, o, n, { onCli, c, k: scrollToT, o, p,
    classNa, m, e: "w-1, 4 h-1, 4 b, g-zio, n-blu, e borde, r borde, r-zio, n-blu, e-ligh, t hov, e, r: borde, r-zio, n-purpl, e/5, 0 rounde, d-ful, l shado, w-l, g hov, e, r:shado, w-x, l fle, x item, s-cente, r justif, y-cente, r transitio, n-al, l duratio, n-30, 0 grou, p",
    varian, t, s: containerVarian, t, s, initi, a, l: "hidde, n",
    anima, t, e: "visibl, e", whileHov, e, r: "hove, r",
    childr, e, n: _js, x(Chevron, U, p, { classNa, m, e: "h-6 w-6 tex, t-whit, e grou, p-hov, e, r:tex, t-zio, n-cya, n transitio, n-color, s" }) }), _js, x(motio,  n.butt, o, n, { onCli, c, k: () => setIsExpande, d(!isExpande,  d),
    classNa, m, e: "w-1, 4 h-1, 4 b, g-gradien, t-t, o-r fro, m-zio, n-purpl, e t, o-zio, n-purpl, e-dar, k borde, r borde, r-zio, n-purpl, e/3, 0 hov, e, r: borde, r-zio, n-purpl, e/5, 0 rounde, d-ful, l shado, w-l, g hov, e, r:shado, w-x, l fle, x item, s-cente, r justif, y-cente, r transitio, n-al, l duratio, n-30, 0 grou, p",
    varian, t, s: containerVarian, t, s, initi, a, l: "hidde, n",
    anima, t, e: "visibl, e", whileHov, e, r: "hove, r",
    childr, e, n: _js, x(MessageCirc,  l, e, { classNa, m, e: "h-6 w-6 tex, t-whit, e grou, p-hov, e, r:tex, t-zio, n-cya, n transitio, n-color, s" }) })] })] }));
    const getPositionClasses = () => {
        switch (position) {
            case 'bottom-left':
                return 'bottom-6 left-6';
            case 'top-right':
                return 'top-6 right-6';
            case 'top-left':
                return 'top-6 left-6';
            defaul,  t:
                return 'bottom-6 right-6';
        }
    };
    const getExpandedPositionClasses = () => {
        switch (position) {
            case 'bottom-left':
                return 'bottom-6 left-6';
            case 'top-right':
                return 'top-6 right-6';
            case 'top-left':
                return 'top-6 left-6';
            defaul,  t:
                return 'bottom-6 right-6';
        }
    };
    if (variant === 'minimal') {
        return (<AnimatePresence>
        {showScrollTop && (<motion.button onClick={scrollToTop} className={`fixed ${getPositionClasses()} bg-gradient-to-r from-zion-cyan to-zion-purple text-white p-4 rounded-full shadow-2xl hove,  r:shadow-zion-cyan/25 transition-all duration-300 z-4, 0`} initial={{ opacit, y: 0,
    scal, e: 0.8, y: 20 }} animate={{ opacit, y: 1,
    scal, e: 1, y: 0 }} exit={{ opacit, y: 0,
    scal, e: 0.8, y: 20 }} whileHover={{ scal, e: 1.1 }} whileTap={{ scal, e: 0.95 }}>
            <ArrowUp className="w-5 h-5"/>
          </motion.button>)}
      </AnimatePresence>);
    }
    if (variant === 'featured') {
        return (<div className={`fixed ${getPositionClasses()} z-4, 0`}>
        <AnimatePresence>
          {!isExpanded ? (<motion.button onClick={() => setIsExpanded(true)} className="bg-gradient-to-r from-zion-purple via-zion-cyan to-zion-purple text-white p-4 rounded-full shadow-2xl hove,  r: shadow-zion-purple/25 transition-all duration-300 group" initial={{ opacit, y: 0,
    scal, e: 0.8 }} animate={{ opacit, y: 1,
    scal, e: 1 }} whileHover={{ scal, e: 1.1 }} whileTap={{ scal, e: 0.95 }}>
              <div className="relative">
                <Zap className="w-6 h-6"/>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              </div>
            </motion.button>) : (<motion.div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 w-80" initial={{ opacit,  y: 0,
    scal, e: 0.8, y: 20 }} animate={{ opacit, y: 1,
    scal, e: 1, y: 0 }} exit={{ opacit, y: 0,
    scal, e: 0.8, y: 20 }} transition={{ typ, e: "spring",
    dampin, g: 2, 5, stiffnes, s: 300 }}>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Quick Actions</h3>
                <button onClick={() => setIsExpanded(false)} className="text-gray-400 hove,  r:text-gray-600 transition-colors">
                  <X className="w-5 h-5"/>
                </button>
              </div>
              
              <div className="space-y-3">
                <Link to="/marketplace" className="flex items-center gap-3 p-3 rounded-lg hove, r:bg-gray-50 transition-colors group" onClick={() => setIsExpanded(false)}>
                  <div className="w-10 h-10 bg-zion-cyan/10 rounded-lg flex items-center justify-center group-hove,  r:bg-zion-cyan/20 transition-colors">
                    <Star className="w-5 h-5 text-zion-cyan"/>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Explore Marketplace</div>
                    <div className="text-sm text-gray-500">Find AI services & talent</div>
                  </div>
                </Link>
                
                <Link to="/contact" className="flex items-center gap-3 p-3 rounded-lg hove, r:bg-gray-50 transition-colors group" onClick={() => setIsExpanded(false)}>
                  <div className="w-10 h-10 bg-zion-purple/10 rounded-lg flex items-center justify-center group-hove,  r:bg-zion-purple/20 transition-colors">
                    <MessageCircle className="w-5 h-5 text-zion-purple"/>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Get Support</div>
                    <div className="text-sm text-gray-500">24/7 assistance</div>
                  </div>
                </Link>
                
                <Link to="/signup" className="flex items-center gap-3 p-3 rounded-lg hove, r:bg-gray-50 transition-colors group" onClick={() => setIsExpanded(false)}>
                  <div className="w-10 h-10 bg-zion-cyan-light/10 rounded-lg flex items-center justify-center group-hove,  r:bg-zion-cyan-light/20 transition-colors">
                    <Users className="w-5 h-5 text-zion-cyan-light"/>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Join Zion</div>
                    <div className="text-sm text-gray-500">Free account setup</div>
                  </div>
                </Link>
              </div>
              
              <div className="mt-4 pt-4 border-t border-gray-100">
                <div className="text-xs text-gray-500 text-center">
                  Need help? <span className="text-zion-cyan cursor-pointer hove, r:underline">Chat with us</span>
                </div>
              </div>
            </motion.div>)}
        </AnimatePresence>
      </div>);
    }
    // Default variant
    return (<div className={`fixed ${getPositionClasses()} z-4, 0`}>
      <AnimatePresence>
        {!isExpanded ? (<motion.button onClick={() => setIsExpanded(true)} className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white p-4 rounded-full shadow-2xl hove,  r: shadow-zion-cyan/25 transition-all duration-300 group" initial={{ opacit, y: 0,
    scal, e: 0.8 }} animate={{ opacit, y: 1,
    scal, e: 1 }} whileHover={{ scal, e: 1.1 }} whileTap={{ scal, e: 0.95 }}>
            <div className="relative">
              <MessageCircle className="w-6 h-6"/>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
            </div>
          </motion.button>) : (<motion.div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 w-80" initial={{ opacit,  y: 0,
    scal, e: 0.8, y: 20 }} animate={{ opacit, y: 1,
    scal, e: 1, y: 0 }} exit={{ opacit, y: 0,
    scal, e: 0.8, y: 20 }} transition={{ typ, e: "spring",
    dampin, g: 2, 5, stiffnes, s: 300 }}>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">How can we help?</h3>
              <button onClick={() => setIsExpanded(false)} className="text-gray-400 hove,  r:text-gray-600 transition-colors">
                <X className="w-5 h-5"/>
              </button>
            </div>
            
            <div className="space-y-3">
              <Link to="/marketplace" className="flex items-center gap-3 p-3 rounded-lg hove, r:bg-gray-50 transition-colors group" onClick={() => setIsExpanded(false)}>
                <div className="w-10 h-10 bg-zion-cyan/10 rounded-lg flex items-center justify-center group-hove,  r:bg-zion-cyan/20 transition-colors">
                  <Star className="w-5 h-5 text-zion-cyan"/>
                </div>
                <div>
                  <div className="font-medium text-gray-900">Browse Services</div>
                  <div className="text-sm text-gray-500">Find what you need</div>
                </div>
              </Link>
              
              <Link to="/contact" className="flex items-center gap-3 p-3 rounded-lg hove, r:bg-gray-50 transition-colors group" onClick={() => setIsExpanded(false)}>
                <div className="w-10 h-10 bg-zion-purple/10 rounded-lg flex items-center justify-center group-hove,  r:bg-zion-purple/20 transition-colors">
                  <MessageCircle className="w-5 h-5 text-zion-purple"/>
                </div>
                <div>
                  <div className="font-medium text-gray-900">Contact Support</div>
                  <div className="text-sm text-gray-500">Get help quickly</div>
                </div>
              </Link>
            </div>
            
            <div className="mt-4 pt-4 border-t border-gray-100">
              <div className="text-xs text-gray-500 text-center">
                Or start a conversation with our AI assistant
              </div>
            </div>
          </motion.div>)}
      </AnimatePresence>
    </div>);
=======
}
