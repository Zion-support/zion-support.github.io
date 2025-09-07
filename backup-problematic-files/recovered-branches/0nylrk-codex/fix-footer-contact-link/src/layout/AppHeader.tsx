<>;
      <header className="sticky top-0 z-50 w-full border-b border-zion-purple/20 bg-zion-blue-dark/90 backdrop-blur-md">;
        <div className="container flex h-16 items-center px-4 sm:px-6">;
          <Logo />;
          <div className="ml-6 flex-1 hidden md:block">;
            <MainNavigation unreadCount={unreadCount} />;
          </div>;

              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-white/70 hover:text-white hover:bg-zion-purple/10 focus:outline-none";
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle mobile menu";
            >;
              <span className="sr-only">Open main menu</span>;
              {mobileMenuOpen ? (;
                <X className="block h-6 w-6" aria-hidden="true" />;

            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true";
          />;
          <div className="relative bg-zion-blue-dark border-t border-zion-purple/20 h-auto max-h-[calc(100vh-4rem)] overflow-y-auto">;

              onClose={() => setMobileMenuOpen(false)} ;
            />;
          </div>;
        </div>;
      )}
;
      {/* Mobile Bottom Navigation */}
      {isMobile && <MobileBottomNav unreadCount={unreadCount} />}
    </>;