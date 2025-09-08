
   isOpen: boolean;
   onClos,e: () => void} interface NavigationItem {
   name: string;

   href: string


  const navigationItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/about', label: 'About', icon: Info },
    { path: '/careers', label: 'Careers', icon: Briefcase },
    { path: '/contact', label: 'Contact', icon: Phone },
    { path: '/help', label: 'Help', icon: HelpCircle },
    { path: '/sitemap', label: 'Sitemap', icon: FileText },
    { path: '/micro-saas-services', label: 'Services', icon: Globe },
    { path: '/green-it', label: 'Green IT', icon: Settings },
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/build-and-fix-errors-e276
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
  ];





      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeMenu}
          >
<<<<<<< HEAD
=======
<<<<<<< HEAD
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white mb-4">Quick Access</h3>
              
              <div className="grid grid-cols-2 gap-3">
                <a href="/services" className="flex items-center gap-3 p-3 rounded-lg bg-zion-blue/20 hover:bg-zion-blue/30 transition-colors duration-200">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-zion-cyan to-zion-blue flex items-center justify-center">
                    <Search className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-white font-medium">Services</span>
                </a>
                
                <a href="/talent" className="flex items-center gap-3 p-3 rounded-lg bg-zion-blue/20 hover:bg-zion-blue/30 transition-colors duration-200">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-zion-purple to-zion-purple-dark flex items-center justify-center">
                    <User className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-white font-medium">Talent</span>
                </a>
                
                <a href="/about" className="flex items-center gap-3 p-3 rounded-lg bg-zion-blue/20 hover:bg-zion-blue/30 transition-colors duration-200">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                    <Home className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-white font-medium">About</span>
                </a>
                
                <a href="/contact" className="flex items-center gap-3 p-3 rounded-lg bg-zion-blue/20 hover:bg-zion-blue/30 transition-colors duration-200">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
                    <Menu className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-white font-medium">Contact</span>
                </a>
              </div>
              
              <div className="pt-4 border-t border-zion-blue-light/30">
                <button className="w-full bg-gradient-to-r from-zion-cyan to-zion-blue text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                  Get Started
                </button>
=======
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
            <motion.div
              className="absolute right-0 top-0 h-full w-80 bg-zion-blue-dark/95 backdrop-blur-lg border-l border-zion-blue-light/30"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-zion-blue-light/20">
                <h2 className="text-xl font-bold text-white">Menu</h2>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={closeMenu}
                  className="text-zion-cyan hover:text-zion-cyan-light hover:bg-zion-cyan/10"
                >
                  <X className="w-6 h-6" />
                </Button>
              </div>


              {/* Contact Section */}
              <div className="p-6 border-t border-zion-blue-light/20">
                <div className="text-center space-y-3">
                  <div className="text-sm text-zion-slate-light">
                    <p>📞 +1 (302) 464-0950</p>
                    <p>📧 kleber@ziontechgroup.com</p>
                  </div>
                  <Button
                    onClick={() => {
                      closeMenu();
                      window.location.href = 'tel:+13024640950';
                    }}
                    className="w-full bg-zion-cyan hover:bg-zion-cyan-light text-white"
                  >
                    Call Now
                  </Button>
                </div>
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/build-and-fix-errors-e276
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

