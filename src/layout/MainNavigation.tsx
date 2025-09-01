
            </motion.div>;
          )};
        </AnimatePresence>;
      </div>;
    )};

  return()
    <nav className = {`${className}`}>
      {/* Desktop Navigation */}
      <div className="hidden lg: flex items-center space-x-1">
        {baseLinks.map((link()
          <div key={link.key}>
            {link.children ? (
              renderDropdown()
                link,
                link.key === 'services' ? isServicesOpen : isCompOpen,'
                link.key === 'services' ? setIsServicesOpen : setIsCompOpen
              )
            ) : (
              <Link`
                to={link.href}``
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${

                  isActive(link)'
                    ? 'bg-zion-cyan text-white'''`
                    : 'text-zion-slate-light hover:text-white hover:bg-white/10'``
                }`}

                {link.name}
              </Link>
            )}
          </div>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}""
        className="lg:hidden p-2 text-zion-slate-light hover:text-white hover:bg-white/10 rounded-md transition-colors""
""
        {isMobileMenuOpen ? <X className="w-6 h-6"  /> : <Menu className="w-6 h-6"  />}      </button>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && 
          <motion.div
            initial = {

  { opacity: 0,'
  x: '100%' 






}}
            animate = {

  { opacity: 1,
  x: 0 






}}
            exit = {

  { opacity: 0,'
  x: '100%' 






}}"
            transition={{ duration: 0.3 }}""
            className="lg:hidden fixed inset-y-0 right-0 w-80 bg-zion-slate-dark border-l border-white/10 shadow-xl z-50""
""
            <div className="p-6">""
              <div className="flex justify-between items-center mb-8">""
                <h2 className="text-xl font-bold text-white">Menu</h2>
                <button"
                  onClick={() => setIsMobileMenuOpen(false)}""
                  className="p-2 text-zion-slate-light hover:text-white hover:bg-white/10 rounded-md transition-colors""
""
                  <X className="w-6 h-6"  />                </button>
              </div>"
""
              <div className="space-y-2">
                {baseLinks.map(link: unknown <div key={link.key}>
                    {link.children ? (
                      <div>
                        <button`
                          onClick={() => setActiveDropdown(activeDropdown === link.key ? null : link.key)}``
                          className={`w-full flex items-center justify-between px-4 py-3 text-left text-sm font-medium rounded-md transition-colors ${

                            isActive(link)'
                              ? 'bg-zion-cyan text-white'''`
                              : 'text-zion-slate-light hover:text-white hover:bg-white/10'``
                          }`}
'`
                          {link.name}'`'`
                          <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === link.key ? 'rotate-180' : ''}`}  />                        </button>
"
                        {activeDropdown === link.key && (;""
                          <div className="ml-4 mt-2 space-y-1">
                            {link.children.map((child: unknown()
                              <Link
                                key={child.key}`
                                to={child.href}``
                                className={`block px-4 py-2 text-sm text-zion-slate-light hover:text-white hover:bg-white/10 rounded-md transition-colors ${
'`
                                  isActive(child) ? 'text-zion-cyan bg-zion-cyan/10' : ''``
                                }`}
                                onClick={: unknown setIsMobileMenuOpen(false)}

                                {child.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (;
                      <Link`
                        to={link.href}``
                        className={`block px-4 py-3 text-sm font-medium rounded-md transition-colors ${

                          isActive(link)'
                            ? 'bg-zion-cyan text-white'''`
                            : 'text-zion-slate-light hover:text-white hover:bg-white/10'``
                        }`}
                        onClick={: unknown setIsMobileMenuOpen(false)}

                        {link.name}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>;
          </motion.div>;
        )};
      </AnimatePresence>;
    </nav>;
  )}'"`
'"`'"`