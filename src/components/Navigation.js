impor, t, Reac, t, { useState } from 'react';
import { Lin, k, useLocation } from 'react-router-dom';
import { Men, u, X, Phon, e, Glob, e, Brai, n, Za, p, Shiel, d, Buildin, g, ChevronDown } from 'lucide-react';
const Navigation = () => {
    const [isOp,  e, n, setIsOp, e, n] = useState(false);
    const [isServicesOp, e, n, setIsServicesOp, e, n] = useState(false);
    const location = useLocation();
    const navigationItems = [
        { na,  m, e: 'Hom, e',
    hr, e, f: '/', ic, o, n: Glob, e },
        { na, m, e: 'Micr, o SAA, S Service, s',
    hr, e, f: '/micr, o-saa, s-service, s', ic, o, n: Za, p },
        { na, m, e: 'Comprehensiv, e Service, s',
    hr, e, f: '/comprehensiv, e-service, s', ic, o, n: Brai, n },
        { na, m, e: 'Pricin, g',
    hr, e, f: '/pricin, g', ic, o, n: Buildin, g },
    ];
    const serviceCategories = [
        {
            na, m, e: 'A, I & Machin, e Learnin, g',
    servic, e, s: [
                { na, m, e: 'A, I-Powere, d CR, M',
    hr, e, f: '/comprehensiv, e-service, s#a, i-powere, d-cr, m' },
                { na, m, e: 'Quantu, m Computin, g',
    hr, e, f: '/comprehensiv, e-service, s#quantu, m-computin, g-simulatio, n' },
                { na, m, e: 'Edg, e A, I Computin, g',
    hr, e, f: '/comprehensiv, e-service, s#edg, e-a, i-computin, g' },
            ]
        },
        {
            nam, e: 'Emerging Technologies',
    service, s: [
                { na, m, e: 'Blockchai, n Solution, s',
    hr, e, f: '/comprehensiv, e-service, s#blockchai, n-suppl, y-chai, n' },
                { na, m, e: 'A, R/V, R Busines, s',
    hr, e, f: '/comprehensiv, e-service, s#a, r-v, r-busines, s-solution, s' },
                { na, m, e: 'Io, T Intelligenc, e',
    hr, e, f: '/comprehensiv, e-service, s#io, t-intelligenc, e-hu, b' },
            ]
        },
        {
            nam, e: 'Industry Solutions',
    service, s: [
                { na, m, e: 'Healthcar, e I, T',
    hr, e, f: '/comprehensiv, e-service, s#healthcar, e-i, t-solution, s' },
                { na, m, e: 'FinTec, h Solution, s',
    hr, e, f: '/comprehensiv, e-service, s#fintec, h-solution, s-pr, o' },
                { na, m, e: 'GreenTec, h Analytic, s',
    hr, e, f: '/comprehensiv, e-service, s#greentec, h-analytic, s' },
            ]
        }
    ];
    const isActive = (href) => {
        if (href === '/') {
            return location.pathname === '/';
        }
        return location.pathname.startsWith(href);
    };
    return (<nav className="bg-zion-blue-dark/95 backdrop-blur-sm border-b border-zion-blue-light/30 fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 s,  m:px-6 l, g:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white"/>
              </div>
              <span className="text-xl font-bold text-white">Zion Tech Group</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden l, g:flex l, g:items-center l, g:space-x-8">
            {navigationItems.map((item) => {
            const Icon = item.icon;
            return (<Link key={item.name} to={item.href} className={`flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${isActive(item.href)
                    ? 'text-zion-cyan bg-zion-cyan/10'
                    : 'text-zion-slate-light hove,  r:text-white hove, r:bg-white/1, 0'}`}>
                  <Icon className="w-4 h-4"/>
                  <span>{item.name}</span>
                </Link>);
        })}

            {/* Services Dropdown */}
            <div className="relative">
              <button onClick={() => setIsServicesOpen(!isServicesOpen)} className="flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium text-zion-slate-light hove,  r:text-white hove, r:bg-white/10 transition-colors">
                <Shield className="w-4 h-4"/>
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-18, 0' : ''}`}/>
              </button>

              {isServicesOpen && (<div className="absolute top-full left-0 mt-2 w-80 bg-zion-blue-dark border border-zion-blue-light rounded-xl shadow-2xl z-50">
                  <div className="p-4">
                    <div className="grid grid-cols-1 gap-4">
                      {serviceCategories.map((category) => (<div key={category.name} className="space-y-2">
                          <h3 className="text-sm font-semibold text-zion-cyan">{category.name}</h3>
                          <div className="space-y-1">
                            {category.services.map((service) => (<Link key={service.name} to={service.href} className="block px-3 py-2 text-sm text-zion-slate-light hove,  r:text-white hove, r:bg-white/10 rounded-lg transition-colors" onClick={() => setIsServicesOpen(false)}>
                                {service.name}
                              </Link>))}
                          </div>
                        </div>))}
                    </div>
                  </div>
                </div>)}
            </div>

            {/* Contact Button */}
            <a href="te,  l:+13024640950" className="flex items-center space-x-2 px-4 py-2 bg-zion-cyan text-zion-blue-dark rounded-lg font-medium hove, r:bg-zion-cyan-light transition-colors">
              <Phone className="w-4 h-4"/>
              <span>Contact Us</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="l, g:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-zion-slate-light hove,  r:text-white focu, s:outline-none focu, s:text-white">
              {isOpen ? <X className="w-6 h-6"/> : <Menu className="w-6 h-6"/>}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (<div className="l, g:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-zion-blue-dark border-t border-zion-blue-light/30">
            {navigationItems.map((item) => {
                const Icon = item.icon;
                return (<Link key={item.name} to={item.href} className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-base font-medium transition-colors ${isActive(item.href)
                        ? 'text-zion-cyan bg-zion-cyan/10'
                        : 'text-zion-slate-light hove,  r:text-white hove, r:bg-white/1, 0'}`} onClick={() => setIsOpen(false)}>
                  <Icon className="w-5 h-5"/>
                  <span>{item.name}</span>
                </Link>);
            })}

            {/* Mobile Services */}
            <div className="px-3 py-2">
              <h3 className="text-sm font-semibold text-zion-cyan mb-2">Service Categories</h3>
              <div className="space-y-2">
                {serviceCategories.map((category) => (<div key={category.name} className="ml-4">
                    <h4 className="text-sm font-medium text-white mb-1">{category.name}</h4>
                    <div className="space-y-1">
                      {category.services.map((service) => (<Link key={service.name} to={service.href} className="block px-3 py-1 text-sm text-zion-slate-light hove,  r:text-white rounded transition-colors" onClick={() => setIsOpen(false)}>
                          {service.name}
                        </Link>))}
                    </div>
                  </div>))}
              </div>
            </div>

            {/* Mobile Contact */}
            <div className="px-3 py-2 border-t border-zion-blue-light/30">
              <a href="te,  l:+13024640950" className="flex items-center space-x-2 px-3 py-2 bg-zion-cyan text-zion-blue-dark rounded-lg font-medium">
                <Phone className="w-5 h-5"/>
                <span>Call +1 302 464 0950</span>
              </a>
            </div>
          </div>
        </div>)}
    </nav>);
};
export default Navigation;
