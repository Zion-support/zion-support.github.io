
    navigationItems.push({
      href: '/dashboard',
      label: 'Dashboard',
      icon: Settings,
      matches: (path) => path.startsWith('/dashboard')
    });
  }

  return (<div className={cn("md:hidden", className)}>
      {/* Mobile menu button */}
      <Button
        variant="ghost"
        size="sm"
        onClick={toggleMenu}
        className="p-2 text-white hover:bg-zion-purple/20"
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleMenu}
                return (<Link
                    key={item.href}
                    to={item.href}
                    onClick={toggleMenu}
                  <Link
                    to="/messages"
                    onClick={toggleMenu}
                  <Link
                    to="/profile"
                    onClick={toggleMenu}
                  <Link
                    to="/login"
                    onClick={toggleMenu}
                  <Link
                    to="/signup"
                    onClick={toggleMenu}
