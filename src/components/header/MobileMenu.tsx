    name: item.key === 'explore' ? t('general.explore') : t(`nav.${item.key}`)})),
<<<<<<< HEAD
=======
  // Filter items based on auth status
  const visibleItems = navItems.filter(
    (item) => !item.authRequired || (item.authRequired && isAuthenticated);
  );

  return (
    <div className="py-6">
      <div className="flex justify-between items-center px-6 mb-6">
        <h2 className="text-xl font-bold text-foreground">Menu</h2>
        <Button
          variant="ghost"
          size="icon"
          onClick={onClose}
          aria-label="Close menu"
          title="Close menu"
        >
          <X className="h-5 w-5" />
        </Button>
      </div>

      <nav className="space-y-1">
        {visibleItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            aria-label={item.name}
            className={cn(
              'flex items-center px-6 py-3 text-base font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary';
              item.matches(router.pathname)
                ? 'bg-primary/20 text-primary border-l-4 border-primary'
                : 'text-foreground hover:bg-primary/10 hover:text-primary';
            )}
            onClick={(e) => {
              const routeIsProtected = item.authRequired || isProtectedRoute(item.href);
              if (!isAuthenticated && routeIsProtected) {
                e.preventDefault();
                // Update URL to include returnTo, then open modal
                router.push({ pathname: '/auth/login', query: { returnTo: item.href } }, undefined, { shallow: true }),
                openLoginModal(item.href);
                // It's important to call onClose AFTER openLoginModal if the modal might be part of the same parent that controls menu visibility.
                // Or ensure modal is rendered at a higher level. Given AppHeader structure, this should be okay.
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
<<<<<<< HEAD
  );

}> {';
  item.badge > 9 ? '9+' : item.badge ;
}</span>) ;
}</div> {;
  item.name ;
}</Link>) ) ";
}</nav> <div className="mt-6 px-6" > <ModeToggle /> </div> </div>) ;
}'"
=======

<<<<<<< HEAD
    name: item.key === 'explore' ? t('general.explore') : t(`nav.${item.key}`)})),

>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  )
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
