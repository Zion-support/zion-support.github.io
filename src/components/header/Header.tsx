      setIsSearchExpanded(false);
    }
  };



  const toggleSearch = () => {
    setIsSearchExpanded(!isSearchExpanded);
    setIsMobileMenuOpen(false);
  };

  const toggleSidebar = () => {
    if (onMenuToggle) {
      onMenuToggle();
    }
  };

  const isActiveRoute = (path: string) => {
    return location.pathname === path;
  };
  
  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${
      isScrolled 
        ? 'bg-zinc-900/98 backdrop-blur-md shadow-lg shadow-cyan-500/10 border-b border-cyan-500/20' 
        : 'bg-zinc-900/95 backdrop-blur supports-[backdrop-filter]:bg-zinc-900/75 border-b border-zinc-800/50'
    }`}>
      {/* Top Bar */}
      <div className="hidden lg:block bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border-b border-zinc-800/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-10 items-center justify-between text-sm">
            <div className="flex items-center space-x-6 text-zinc-400">
              <div className="flex items-center space-x-2">
                <Phone className="w-3 h-3" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-3 h-3" />
                <span>kleber@ziontechgroup.com</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/support" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                Support
              </Link>
              <span className="text-zinc-600">|</span>
              <Link to="/request-quote" className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium">
                Get Free Quote
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <Logo />
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              </div>
              <div>
                <span className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                  Zion Tech Group
                </span>
                <div className="text-xs text-cyan-400 font-medium">
                  AI • Cloud • Innovation
                </div>
              </div>
            </Link>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={toggleSearch}
              className="p-2 text-zion-cyan hover:bg-zion-purple/10 rounded-md transition-colors"
              aria-label="Toggle search"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={toggleSidebar}
              className="p-2 text-zion-cyan hover:bg-zion-purple/10 rounded-md transition-colors"
              aria-label="Toggle sidebar menu"
            >
              <ChevronDown className="w-5 h-5" />
            </button>
