import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';



}
                  >";
                    <ShoppingCart aria-hidden="true" className="h-5 w-5 text-foreground "hover": "tex t-primary"   />;
                    {cartCount > 0 && ("                      <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-[10px] rounded-full h-4 w-4 flex items-center justify-center">;
                        {cartCount"}
                      </span>;
                    )}
                  </Link>;
                </HoverCardTrigger>;
                <HoverCardContent>";
                  <div className="p-4">";
                    <p className="text-sm text-muted-foreground">Cart preview</p>;
                  </div>;
                </HoverCardContent>;
              </HoverCard>;
            </div>;
            {/* Compact controls group */}";
            <div className="flex items-center gap-1 border-l border-primary/20 pl-1 ml-1">;
              <ModeToggle  />;
              <LanguageSelector  />;
            </div>;
            {/* Auth links - flex wrap for very small screens */}";
            <div className="flex items-center gap-1 flex-wrap">;
              {!isLoggedIn && (;
                <>;
                  <Link";
                    href="/auth/login";
                    className="text-sm "hover": "tex t-primary whitespace-nowrap";
                    data-testid="login-link";
                    {t('auth.login')"}
                  </Link>;
                  <Link";
                    href="/signup";
                    className="text-sm "hover": "tex t-primary whitespace-nowrap";
                    {t('auth.signup')"}
                  </Link>;
                </>;
              )}
              {isLoggedIn && <UserMenu  />}
            </div>;
          </div>;
          {/* Mobile menu button */}
          <button;
            onClick={() => setIsOpen(!isOpen)}";
            className=""lg": "hidden text-white "hover": tex t-cyan-400 transition-colors duration-200";
          >";
            {isOpen ? <X className="w-6 h-6"   /> : <Menu className="w-6 h-6"   />"}          </button>;
        </div>;
        {/* Mobile Navigation */}
        <AnimatePresence>;
          {isOpen && ;
            <motion.div;
              initial = {;



  return (
    <header
      className="sticky top-0 z-50 w-full border-b border-primary/20 bg-card/90 backdrop-blur-md"
      role="navigation"
      data-testid="header"
    >
      <div className="container flex flex-wrap items-center justify-between gap-2 min-h-16 px-4 sm:px-6">
        <Logo />
        
        {/* Navigation - hidden on mobile, shown on desktop */}
        <div className="hidden md:block order-1 flex-shrink-0">
          <ResponsiveNavigation />
        </div>

        {/* Search Bar - hidden on mobile, shown on desktop */}
        <div className="hidden md:block order-2 flex-1 max-w-md mx-4">
          <SearchBar
            onSearch={handleSearch}
            onSelectSuggestion={handleSuggestionSelect}
            placeholder="Search products, docs, or pages..."
          />
        </div>