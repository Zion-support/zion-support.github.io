// // // // // // // // console.log('PrimaryNav search submit:', query);'
      router.push(`/search/${slugify(query)}`);'      setQuery('');'
''`
      // // // // // console.log('PrimaryNav search submit:', query);``
      router.push(`/search/${slugify(query)}`);'
      setQuery('')}
// Theme toggle component;

  const [isDark, setIsDark] = useState<typeof false>(false);

  const toggleTheme: any = (...args: unknown[]): unknown => {;    setIsDark(!isDark);
    // Add theme switching logic here;
  };

  return ()
    <>
      <header;
        className="sticky top-0 z-50 w-full border-b border-primary/20 bg-card/90 backdrop-blur-md""""
        role="navigation""""
        aria-label="Primary""""
        data-testid="header""""
""""
        <div className="container flex flex-wrap items-center justify-between gap-2 min-h-16 px-4 sm:px-6">
          <Logo  />
"""
          {/* Navigation - hidden on mobile, shown on desktop */}""""
          <div className="hidden md:block order-1 flex-shrink-0">
            <ResponsiveNavigation  />'
          </div>''
'''
                  // // // // // // // // console.log('PrimaryNav search suggestion selected:', sugg);
                onSelectSuggestion = {}
  (sugg) => {}
'
''
'''
                  // // // // // console.log('PrimaryNav search suggestion selected:',;
  ;
  sugg);
                  // Handle different suggestion types with proper navigation;
                  if (sugg.id) {}
`
                    // Product listings with IDs go to product detail page``
                    router.push(`/marketplace/listing/${sugg.id'`
'`'`
}`)} else if (sugg.type = == 'doc' && sugg.slug && sugg.slug.startsWith('/')) {}
'
                    // Documentation suggestions navigate directly to their path''
                    router.push(sugg.slug)} else if (sugg.type === 'blog' && sugg.slug) {}
`
                    // Blog posts navigate to blog detail page``
                    router.push(`/blog/${sugg.slug}`)} else {}
`
                    // Default: search results page with slug;``
                    router.push(`/search/${sugg.slug || slugify(sugg.text)}`)};'
                  setQuery('');
'
                  // Track analytics event''
                  if (typeof window !== 'null' && window.gtag) {}
'
                    window.gtag('event',search_suggestion_click', {}
                      search_term: sugg.text,
                      suggestion_type: sugg.type,
                      suggestion_id: sugg.id || sugg.slug;
                    })}
                }}
                searchSuggestions = {suggestions}
              />
            </form>
"""
            {/* Compact actions group */}""""
            <div className="flex items-center gap-1">
              <PointsBadge  />
              <HoverCard openDelay={100}>
                <HoverCardTrigger asChild>"""
                  <Link""""
                    href="/cart""""
                    className="relative p-1"""
                    aria-label = {}
'
  t('nav.cart',Cart')

}"""
                  >""""
                    <ShoppingCart aria-hidden="true" className="h-5 w-5 text-foreground hover:text-primary"  />"""
                    {cartCount > 0 && ("                      <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-[10px] rounded-full h-4 w-4 flex items-center justify-center">
                        {cartCount}
                      </span>
                    )}
                  </Link>
                </HoverCardTrigger>"""
                <HoverCardContent>""""
                  <div className="p-4">""""
                    <p className="text-sm text-muted-foreground">Cart preview</p>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </div>
"""
            {/* Compact controls group */}""""
            <div className="flex items-center gap-1 border-l border-primary/20 pl-1 ml-1">
              <ModeToggle  />
              <LanguageSelector  />
            </div>
"""
            {/* Auth links - flex wrap for very small screens */}""""
            <div className="flex items-center gap-1 flex-wrap">
              {!isLoggedIn && (
                <>"""
                  <Link""""
                    href="/auth/login""""
                    className="text-sm hover:text-primary whitespace-nowrap""""
                    data-testid="login-link"""
'
                    {t('auth.login')}
                  </Link>"""
                  <Link""""
                    href="/signup""""
                    className="text-sm hover:text-primary whitespace-nowrap"""
'
                    {t('auth.signup')}
                  </Link>
                </>
              )}
              {isLoggedIn && <UserMenu  />}
            </div>
          </div>

          {/* Mobile menu button */}
          <button"""
            onClick={() => setIsOpen(!isOpen)}""""
            className="lg:hidden text-white hover:text-cyan-400 transition-colors duration-200""""
          >""""
            {isOpen ? <X className="w-6 h-6"  /> : <Menu className="w-6 h-6"  />}          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && 
            <motion.div;
              initial = {}
  { opacity: 0,
  height: 0;
}}
              animate = {}
  { opacity: 1,'
  height: 'auto' 

}}
              exit = {}
  { opacity: 0,
  height: 0;
}}"""
              transition={{ duration: 0.3 }}""""
              className="lg:hidden bg-slate-900/95 backdrop-blur-md border-t border-white/10""""
            >""""
              <div className="px-4 py-6 space-y-4">
                {services.map((category, index) => ("""
                  <div key={index}>""""
                    <h3 className="text-sm font-semibold text-cyan-400 mb-2">
                      {category.category}"""
                    </h3>""""
                    <div className="space-y-2 ml-4">
                      {category.items.map((service: unknown, serviceIndex: unknown;
                        <Link;
                          key={serviceIndex}"""
                          to={service.path}""""
                          className="block text-gray-300 hover:text-white transition-colors duration-200"""
                          onClick={( setIsOpen(false)}
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                """
                <div className="pt-4 border-t border-white/10 space-y-2">
                  <Link """
                    to="/solutions"""
                ))}"""
                """"
                <div className="pt-4 border-t border-white/10 space-y-2">"""
                  <Link """"
                    to="/solutions""""
                    className="block text-gray-300 hover:text-white transition-colors duration-200"""
                    onClick={: unknown setIsOpen(false)}
                  >
                    Solutions;
                  <Link """
                    to="/about"""
                  </Link>"""
                  <Link """"
                    to="/about""""
                    className="block text-gray-300 hover:text-white transition-colors duration-200"""
                    onClick={: unknown setIsOpen(false)}
                  >
                    About;
                  <Link """
                    to="/blog"""
                  </Link>"""
                  <Link """"
                    to="/blog""""
                    className="block text-gray-300 hover:text-white transition-colors duration-200"""
                    onClick={: unknown setIsOpen(false)}
                  >
                    Blog;
                  <Link """
                    to="/contact"""
                  </Link>"""
                  <Link """"
                    to="/contact""""
                    className="block text-gray-300 hover:text-white transition-colors duration-200"""
                    onClick={: unknown setIsOpen(false)}
                  >
                    Contact;
                  </Link>
                </div>;
              </div>;
            </motion.div>;
          )};
        </AnimatePresence>;
      </nav>;
    </header>;
  )}'"`
'"`'"`
