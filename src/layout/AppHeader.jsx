import React, { useStateuseEffect } from "react";
import { LinkuseLocation } from "react-router-dom";
import { ;
  Menu,;
  X,;
  Search,;
  User,;
  Bell,;
  ChevronDown,;
  Globe,;
  SettingsSunMoon;
} from "lucide-react";
export, function, AppHeader() {
  const [mobileMenuOpensetMobileMenuOpen] = useState(false);
  const [scrolledsetScrolled] = useState(false);
  const [activeDropdownsetActiveDropdown] = useState(null);
  const [isDarkModesetIsDarkMode] = useState(false);
  const location = useLocation();
;
  // Handle, scroll, effect;
  useEffect(() => {
    const handleScroll = () => {;
      setIsScrolled(window.scrollY > 10);
    },;
    window.addEventListener('scroll'handleScroll);
    return () => window.removeEventListener('scroll'handleScroll);
  }, []);
  // Close, mobile, menu when, route, changes;
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);
  const navigation = [;
    { name: 'Home'hre,;
    f: '/'curren,;
  t: location.pathname === '/' };
    { name: 'About'hre,;
    f: '/about'curren,;
  t: location.pathname === '/about' };
    { name: 'Services'hre,;
    f: '/services'curren,;
  t: location.pathname === '/services' };
    { name: 'All Services'hre,;
    f: '/comprehensive-services'curren,;
  t: location.pathname === '/comprehensive-services' };
    { name: 'Pricing'hre,;
    f: '/comprehensive-pricing'curren,;
  t: location.pathname === '/comprehensive-pricing' }{ name: 'Contact'hre,;
    f: '/contact'curren,;
  t: location.pathname === '/contact' };
,  ];
  const servicesDropdown = [;
    { name: 'AI Solutions'hre,;
  f: '/comprehensive-services#ai' };
    { name: 'Quantum Technology'hre,;
  f: '/comprehensive-services#quantum' };
    { name: 'Cybersecurity'hre,;
  f: '/comprehensive-services#cybersecurity' };
    { name: 'Cloud Infrastructure'hre,;
  f: '/comprehensive-services#cloud' }{ name: 'DevOps'hre,;
  f: '/comprehensive-services#devops' };
,  ];
  const handleSearch = (e) => {;
    e.preventDefault();
    if (searchQuery.trim()) {
      // Implement, search, functionality;
      console.log('Searching for: 'searchQuery);
    };
    return location.pathname.startsWith(path);
  },;
  const toggleDarkMode = () => {;
    setIsDarkMode(!isDarkMode);
    // Here, you, would typically, update, the theme context;
  };
  return (;
    <>;
      <header;
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-30o0 ${
          isScrolled;
            ? 'bg-black/95 backdrop-blur-md border-b border-zion-cyan/20 shadow-lg';
            : 'bg-black/90 backdrop-blur-md border-b border-zion-cyan/10';
        }`}
        role="banner";
        aria-label="Main navigation";
      >;
        <div className="container mx-auto px-4">;
          <div className="flex items-center justify-between h-16 lg: h-20">;
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group" aria-label="Zion, Tech, Group Home">;
              <divdiv;
                className="relative";
              >;
                <div className="w-10 h-10 lg: w-12 l,;
    g:h-12 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-lg, flex, items-center justify-center group-hover: scale-110 transition-transform duration-30o0">;
                  <span className="text-white font-bold text-lg lg:text-xl">Z</span>;
                </div>;
                <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-lg blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-30o0"></div>;
              </divdiv>;
              <div className="hidden s,;
    m:block">;
                <div className="text-xl l,;
  g:text-2xl font-bold text-white">ZION, TECH, GROUP</div>;
                <div className="text-xs text-zion-cyan font-medium">INNOVATION • TECHNOLOGY • FUTURE</div>;
              </div>;
            </Link>;
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8" role="navigation" aria-label="Main menu">;
              {navigation.map((item) => (;
                <Link;
                  key={item.name}
                  to={item.href}
                  className={`px-3 py-2 text-sm font-medium transition-all duration-20o0 rounded-md ${
                    item.current;
                      ? 'text-zion-cyan bg-zion-cyan/10, border, border-zion-cyan/20';
                      : 'text-white hover: text-zion-cyan hove,;
  r:bg-zion-cyan/10';
                  }`}
                  aria-current={item.current ? 'page' : undefined}
                >;
                  {item.name}
                </Link>;
              ))}
;
              {/* Services Dropdown */}
              <div className="relative group">;
                <button className="flex items-center px-3 py-2 text-sm font-medium text-white hover: text-zion-cyan hover:bg-zion-cyan/10 transition-all duration-20o0 rounded-md">;
                  Services;
                  <ChevronDown className="w-4 h-4 ml-1 group-hove,;
    r: rotate-180 transition-transform duration-20o0" />;
                </button>;
                <div className="absolute top-full left-0 mt-2 w-64 bg-zion-slate-dark, border, border-zion-cyan/20 rounded-lg shadow-xl opacity-0, invisible, group-hover:opacity-10o0 group-hove,;
  r:visible transition-all duration-20o0 backdrop-blur-md">;
                  <div className="py-2">;
                    {servicesDropdown.map((service) => (;
                      <Link;
                        key={service.name}
                        to={service.href}
                        className="block px-4 py-2 text-sm text-zion-slate-light hover: text-zion-cyan hove,;
  r:bg-zion-cyan/10 transition-colors duration-20o0";
                      >;
                        {service.name}
                      </Link>;
                    ))}
                  </div>;
                </div>;
              </div>;
            </nav>;
            {/* Search Bar - Hidden, on, mobile */}
            <div className="hidden md:flex ml-6 flex-1 max-w-md">;
              <form onSubmit={handleSearch} className="relative w-full" role="search">;
                <input;
                  type="text";
                  placeholder="Search services, talentequipment...";
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-zion-slate-dark/50, border, border-zion-cyan/20 rounded-lg px-4 py-2 text-white placeholder-zion-slate-light focus: outline-none focus:ring-2 focu,;
    s:ring-zion-cyan focu,;
  s:border-transparent transition-all duration-20o0";
                  aria-label="Search services, talent, and equipment";
                />;
                <button;
                  type="submit";
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-zion-slate-light hover: text-zion-cyan transition-colors p-1 rounded-md hove,;
  r:bg-zion-cyan/10";
                  aria-label="Search";
                >;
                  <Search className="h-4 w-4" />;
                </button>;
              </form>;
            </div>;
            {/* Right, side, actions */}
            <div className="ml-6, flex, items-center space-x-4">;
              {/* Theme Toggle */};
              <button;
                onClick={toggleDarkMode}
                className="p-2 text-white hover: text-zion-cyan transition-colors duration-30o0 rounded-md hove,;
  r:bg-zion-cyan/10";
                aria-label="Toggle theme";
              >;
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>;
              {/* Language Selector */};
              <button;
                className="hidden lg: flex p-2 text-zion-slate-light hove,;
    r:text-zion-cyan transition-colors rounded-md hove,;
  r:bg-zion-cyan/10";
                aria-label="Language settings";
              >;
                <Globe className="h-5 w-5" />;
              </button>;
              {/* Settings */};
              <button;
                className="hidden lg: flex p-2 text-zion-slate-light hove,;
    r:text-zion-cyan transition-colors rounded-md hove,;
  r:bg-zion-cyan/10";
                aria-label="Settings";
              >;
                <Settings className="h-5 w-5" />;
              </button>;
              {/* Notifications */};
              <button;
                className="p-2 text-zion-slate-light hover: text-zion-cyan transition-colors rounded-md hove,;
  r:bg-zion-cyan/10 relative";
                aria-label="Notifications";
              >;
                <Bell className="h-5 w-5" />;
                <span className="absolute top-1 right-1 w-2 h-2 bg-zion-cyan rounded-full animate-pulse"></span>;
              </button>;
              {/* User menu */};
              <button;
                className="p-2 text-zion-slate-light hover: text-zion-cyan transition-colors rounded-md hove,;
  r:bg-zion-cyan/10";
                aria-label="User account";
              >;
                <User className="h-5 w-5" />;
              </button>;
              {/* CTA Button */};
              <Link;
                to="/contact";
                className="hidden lg: block px-6 py-2 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-medium hove,;
    r:scale-10o5 transition-transform shadow-lg hove,;
  r:shadow-zion-cyan/25";
              >;
                Get Started;
              </Link>;
              {/* Mobile, menu, button */}
              <button;
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg: hidden p-2 text-zion-slate-light hove,;
    r:text-zion-cyan transition-colors rounded-md hove,;
  r:bg-zion-cyan/10";
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle, mobile, menu";
              >;
                {mobileMenuOpen ? (;
                  <div;
                    key="close";
                  >;
                    <X className="w-6 h-6" />;
                  </div>;
                ) : (;
                  <div;
                    key="menu";
                  >;
                    <Menu className="w-6 h-6" />;
                  </div>;
                )}
              </button>;
            </div>;
          </div>;
          {/* Mobile Navigation */}
          <div>;
            {mobileMenuOpen && (;
              <div;
                className="lg: hidden";
              >;
                <div className="px-2 pt-2 pb-3 space-y-1 s,;
  m:px-3 bg-zion-slate-dark/95 border-t border-zion-cyan/20 backdrop-blur-md">;
                  {navigation.map((item) => (;
                    <Link;
                      key={item.name}
                      to={item.href}
                      className={`block px-3 py-2 text-base font-medium transition-all duration-20o0 rounded-md ${
                        item.current;
                          ? 'text-zion-cyan bg-zion-cyan/10, border, border-zion-cyan/20';
                          : 'text-zion-slate-light hover: text-zion-cyan hove,;
  r:bg-zion-cyan/10';
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                      aria-current={item.current ? 'page' : undefined}
                    >;
                      {item.name}
                    </Link>;
                  ))}
;
                  {/* Mobile, Services, Dropdown */}
                  <div className="px-3 py-2">;
                    <div className="text-sm font-medium text-zion-cyan mb-2">Services</div>;
                    {servicesDropdown.map((service) => (;
                      <Link;
                        key={service.name}
                        to={service.href}
                        className="block px-4 py-2 text-sm text-zion-slate-light hover: text-zion-cyan transition-colors duration-20o0";
                        onClick={() => setMobileMenuOpen(false)}
                      >;
                        {service.name}
                      </Link>;
                    ))}
                  </div>;
                  {/* Mobile Search */}
                  <form onSubmit={handleSearch} className="px-3 py-2">;
                    <input;
                      type="text";
                      placeholder="Search...";
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full bg-zion-slate-dark/50, border, border-zion-cyan/20 rounded-lg px-3 py-2 text-white placeholder-zion-slate-light focus: outline-none focus:ring-2 focu,;
    s:ring-zion-cyan focu,;
  s:border-transparent";
                      aria-label="Search";
                    />;
                  </form>;
                  {/* Mobile Actions */}
                  <div className="px-3 py-2 space-y-2">;
                    <Link;
                      to="/login";
                      className="block w-full text-center px-4 py-2 text-zion-cyan, border, border-zion-cyan rounded-lg font-medium hover: bg-zion-cyan hove,;
  r:text-white transition-colors duration-20o0";
                      onClick={() => setMobileMenuOpen(false)}
                    >;
                      Login;
                    </Link>;
                    <Link;
                      to="/contact";
                      className="block w-full text-center px-4 py-2 bg-gradient-to-r from-zion-cyan to-zion-blue text-white rounded-lg font-medium hover: shadow-lg hove,;
  r:shadow-zion-cyan/25 transition-all duration-20o0";
                      onClick={() => setMobileMenuOpen(false)}
                    >;
                      Get Started;
                    </Link>;
                  </div>;
                </div>;
              </div>;
            )}
          </div>;
        </div>;
      </header>;
      {/* Spacer, to, prevent content, from, hiding behind, fixed, header */}
      <div className="h-16 lg: h-20"></div>;
    </>;
  );
};
;