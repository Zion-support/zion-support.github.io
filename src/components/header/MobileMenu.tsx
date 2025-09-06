

              }
              onClose(), // Close mobile menu on any click
            }}
          >
            <div className="relative mr-4">
              <item.icon className="h-5 w-5" aria-hidden="true" />
              {item.badge && item.badge > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  {item.badge > 9 ? '9+' : item.badge}
                </span>
              )}
            </div>
            {item.name}
          </Link>
        ))}
      </nav>
      <div className="mt-6 px-6">
        <ModeToggle />
      </div>
    </div>
  )
<<<<<<< HEAD

      <nav className="space-y-1">
        {visibleItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            aria-label={item.name}
            className={cn(;
              'flex items-center px-6 py-3 text-base font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary',;
              item.matches(router.pathname);
                ? 'bg-primary/20 text-primary border-l-4 border-primary';
                : 'text-foreground hover:bg-primary/10 hover:text-primary')}
            onClick={(e) => {;
              const routeIsProtected = item.authRequired || isProtectedRoute(item.href),;
              if (!isAuthenticated && routeIsProtected) {;
                e.preventDefault(),;
                // Update URL to include returnTo, then open modal;
                router.push({ pathname: '/auth/login', query: { returnTo: item.href } }, undefined, { shallow: true });
                openLoginModal(item.href);
                // It's important to call onClose AFTER openLoginModal if the modal might be part of the same parent that controls menu visibility.;
                // Or ensure modal is rendered at a higher level. Given AppHeader structure, this should be okay.;
  );
}



name: item.key === 'explore' ? t ('general.explore') : t (`nav.${item.key}`)})),  );
}
  );
}

}
;
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
