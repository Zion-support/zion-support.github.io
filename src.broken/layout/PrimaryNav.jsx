  16rem)'
}>
                    <ShoppingCart aria-hidden="true" className="h-5 w-5 text-foreground hover:text-primary"/>

          {/* Mobile menu button */}
          <button className="md:hidden p-2 rounded focus:outline-none flex-shrink-0" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-expanded={mobileMenuOpen} aria-label={t('general.toggle_mobile_menu')}>
