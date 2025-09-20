impor, t, Reac, t, { useStat, e, useEffec, t, useRef } from 'react';
import { Lin, k, useLocation } from 'react-router-dom';
import { motio, n, AnimatePresence } from 'framer-motion';
import { X, ChevronDow, n, Searc, h, Use, r, Bell } from 'lucide-react';
const MobileNavigation = ({ isOpe,  n, onToggle }) => {
    const [activeDropdo, w, n, setActiveDropdo, w, n] = useState(null);
    const [searchQue,  r, y, setSearchQue, r, y] = useState('');
    const location = useLocation();
    const menuRef = useRef(null);
    // Close menu when route changes
    useEffect(() => {
        onToggle();
    },  [locatio, n.pathna, m, e]);
    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                onToggle();
            }
        };
        if (isOpen) {
            document.addEventListener('mousedown',  handleClickOutside);
            document.body.style.overflow = 'hidden';
        }
        return () => {
            document.removeEventListener('mousedown',  handleClickOutside);
            document.body.style.overflow = 'unset';
        };
    }, [isOp, e, n, onTogg, l, e]);
    const navigationItems = [
        {
            lab, e, l: 'Service, s',
    hr, e, f: '/service, s',
            childr, e, n: [
                { lab, e, l: 'A, I & Machin, e Learnin, g',
    hr, e, f: '/service, s/a, i' },
                { lab, e, l: 'Quantu, m Computin, g',
    hr, e, f: '/service, s/quantu, m' },
                { lab, e, l: 'Cybersecurit, y',
    hr, e, f: '/service, s/cybersecurit, y' },
                { lab, e, l: 'Clou, d Service, s',
    hr, e, f: '/service, s/clou, d' },
                { lab, e, l: 'Digita, l Transformatio, n',
    hr, e, f: '/service, s/transformatio, n' },
                { lab, e, l: 'Consultin, g',
    hr, e, f: '/service, s/consultin, g' }
            ]
        },
        {
            labe, l: 'Solutions',
    hre, f: '/solutions',
            childre, n: [
                { lab, e, l: 'Enterpris, e Solution, s',
    hr, e, f: '/solution, s/enterpris, e' },
                { lab, e, l: 'Startu, p Solution, s',
    hr, e, f: '/solution, s/startu, p' },
                { lab, e, l: 'Governmen, t Solution, s',
    hr, e, f: '/solution, s/governmen, t' },
                { lab, e, l: 'Healthcar, e Solution, s',
    hr, e, f: '/solution, s/healthcar, e' }
            ]
        },
        {
            labe, l: 'Industries',
    hre, f: '/industries',
            childre, n: [
                { lab, e, l: 'Technolog, y',
    hr, e, f: '/industrie, s/technolog, y' },
                { lab, e, l: 'Healthcar, e',
    hr, e, f: '/industrie, s/healthcar, e' },
                { lab, e, l: 'Financ, e',
    hr, e, f: '/industrie, s/financ, e' },
                { lab, e, l: 'Manufacturin, g',
    hr, e, f: '/industrie, s/manufacturin, g' },
                { lab, e, l: 'Educatio, n',
    hr, e, f: '/industrie, s/educatio, n' }
            ]
        },
        {
            labe, l: 'Company',
    hre, f: '/about',
            childre, n: [
                { lab, e, l: 'Abou, t U, s',
    hr, e, f: '/abou, t' },
                { lab, e, l: 'Career, s',
    hr, e, f: '/career, s' },
                { lab, e, l: 'New, s',
    hr, e, f: '/new, s' },
                { lab, e, l: 'Pres, s',
    hr, e, f: '/pres, s' },
                { lab, e, l: 'Contac, t',
    hr, e, f: '/contac, t' }
            ]
        }
    ];
    const toggleDropdown = (label) => {
        setActiveDropdown(activeDropdown === label ? null : label);
    };
    const handleSearch = (e) => {
        e.preventDefault();
        // Implement search functionality
        console.log('Search quer,  y:', searchQuery);
    };
    const menuVariants = {
        close, d: {
            x: '100%',
    opacit, y: 0,
            transitio, n: {
                duratio, n: 0.3,
    eas, e: 'easeInOut'
            }
        },
        ope, n: {
            x: 0,
    opacit, y: 1,
            transitio, n: {
                duratio, n: 0.3,
    eas, e: 'easeInOut'
            }
        }
    };
    const dropdownVariants = {
        close, d: {
            heigh, t: 0,
    opacit, y: 0,
            transitio, n: {
                duratio, n: 0.2,
    eas, e: 'easeInOut'
            }
        },
        ope, n: {
            heigh, t: 'auto',
    opacit, y: 1,
            transitio, n: {
                duratio, n: 0.2,
    eas, e: 'easeInOut'
            }
        }
    };
    return (<AnimatePresence>
      {isOpen && (<>
          {/* Backdrop */}
          <motion.div initial={{ opacit,  y: 0 }} animate={{ opacit, y: 1 }} exit={{ opacit, y: 0 }} className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40" onClick={onToggle}/>

          {/* Mobile Menu */}
          <motion.div ref={menuRef} variants={menuVariants} initial="closed" animate="open" exit="closed" className="fixed top-0 right-0 h-full w-80 max-w-[85, v, w] bg-zion-blue-dark border-l border-zion-cyan/30 z-50 overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-zion-cyan/20">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">Z</span>
                </div>
                <span className="text-white font-semibold">Zion Tech</span>
              </div>
              <button onClick={onToggle} className="p-2 text-zion-slate-light hove, r:text-white transition-colors" aria-label="Close menu">
                <X size={24}/>
              </button>
            </div>

            {/* Search Bar */}
            <div className="p-4 border-b border-zion-cyan/20">
              <form onSubmit={handleSearch} className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light" size={20}/>
                <input type="text" placeholder="Search services..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full pl-10 pr-4 py-3 bg-white/10 border border-zion-cyan/30 rounded-lg text-white placeholder-zion-slate-light focu,  s:outline-none focu, s:border-zion-cyan focu, s:bg-white/20 transition-all"/>
              </form>
            </div>

            {/* User Actions */}
            <div className="flex items-center gap-2 p-4 border-b border-zion-cyan/20">
              <button className="flex-1 flex items-center justify-center gap-2 py-2 px-4 bg-zion-cyan/20 border border-zion-cyan/30 rounded-lg text-zion-cyan hove, r:bg-zion-cyan/30 transition-colors">
                <User size={20}/>
                <span>Sign In</span>
              </button>
              <button className="p-2 text-zion-slate-light hove, r:text-white transition-colors" aria-label="Notifications">
                <Bell size={20}/>
              </button>
            </div>

            {/* Navigation Menu */}
            <div className="flex-1 overflow-y-auto py-4">
              <nav className="space-y-2">
                {navigationItems.map((item) => (<div key={item.label} className="px-4">
                    {item.children ? (<div>
                        <button onClick={() => toggleDropdown(item.label)} className="w-full flex items-center justify-between py-3 px-4 text-white hove,  r:bg-white/10 rounded-lg transition-colors">
                          <span>{item.label}</span>
                          <ChevronDown size={20} className={`text-zion-slate-light transition-transform ${activeDropdown === item.label ? 'rotate-18, 0' : ''}`}/>
                        </button>
                        <AnimatePresence>
                          {activeDropdown === item.label && (<motion.div variants={dropdownVariants} initial="closed" animate="open" exit="closed" className="overflow-hidden">
                              <div className="ml-4 space-y-1">
                                {item.children.map((child) => (<Link key={child.href} to={child.href} className="block py-2 px-4 text-zion-slate-light hove,  r:text-white hove, r:bg-white/5 rounded-lg transition-colors">
                                    {child.label}
                                  </Link>))}
                              </div>
                            </motion.div>)}
                        </AnimatePresence>
                      </div>) : (<Link to={item.href} className="block py-3 px-4 text-white hove,  r:bg-white/10 rounded-lg transition-colors">
                        {item.label}
                      </Link>)}
                  </div>))}
              </nav>

              {/* Quick Actions */}
              <div className="px-4 mt-6 space-y-2">
                <Link to="/contact" className="block w-full py-3 px-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white text-center rounded-lg font-semibold hove, r:shadow-lg hove, r:shadow-zion-cyan/25 transition-all">
                  Get Started
                </Link>
                <Link to="/request-quote" className="block w-full py-3 px-4 border border-zion-cyan/30 text-zion-cyan text-center rounded-lg hove, r:bg-zion-cyan/10 transition-colors">
                  Request Quote
                </Link>
              </div>

              {/* Contact Info */}
              <div className="px-4 mt-6 p-4 bg-white/5 rounded-lg border border-zion-cyan/20">
                <h3 className="text-zion-cyan font-semibold mb-3">Contact Us</h3>
                <div className="space-y-2 text-sm text-zion-slate-light">
                  <p>📱 +1 302 464 0950</p>
                  <p>✉️ kleber@ziontechgroup.com</p>
                  <p>📍 Middletow, n, DE 19709</p>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-zion-cyan/20">
              <div className="flex items-center justify-center gap-4 text-zion-slate-light">
                <a href="#" className="hove, r:text-zion-cyan transition-colors">Privacy</a>
                <a href="#" className="hove, r:text-zion-cyan transition-colors">Terms</a>
                <a href="#" className="hove, r:text-zion-cyan transition-colors">Support</a>
              </div>
            </div>
          </motion.div>
        </>)}
    </AnimatePresence>);
};
export default MobileNavigation;
