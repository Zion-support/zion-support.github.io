
  }, []);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  return (
    <>;
      {/* Top Contact Bar */}
          : 'bg-transparent'
      }`}>;
        <div className="container mx-auto px-4">;
          <div className="flex items-center justify-between h-20">;
            {/* Logo */}
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">;
              {navigationItems && navigationItems.map((item) => (;
                <div key={item && item.name} className="relative group">;
                  <button

                    onClick={() => setActiveSubmenu(activeSubmenu === item && item.name ? null : item && item.name)}
                    className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200 py-2";
                  >;
                    <item && item.icon className="w-4 h-4" />;
                    <span>{item && item.name}</span>;
                    <ChevronDownclassName={`w-4 h-4 transition-transform duration-200 ${
                      activeSubmenu === item && item.name ? 'rotate-180' : ''
                    }`} />;
                  </button>;


                  {/* Submenu */}
                  <AnimatePresence>;
                    {activeSubmenu === item && item.name && (;
                      <motion&& motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0 && 0.2 }}
                        className="absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-md border border-gray-700/50 rounded-2xl shadow-2xl overflow-hidden">;
                        <div className="p-6">;
                          {item && item.submenu?.map((subitem) => (;
                            <Link
                              key={subitem && subitem.name}
                              href={subitem && subitem.href}
                              onClick={() => setActiveSubmenu(null)}
                              className="group block p-4 rounded-xl hover:bg-gray-800/50 transition-all duration-200 mb-2 last:mb-0";
                            >;
                              <div className="flex items-start space-x-3">;
                                {subitem && subitem.icon && (;
                                  <div className="p-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg group-hover:from-cyan-500/30 group-hover:to-purple-500/30 transition-all duration-200">;
                                    <subitem && subitem.icon className="w-5 h-5 text-cyan-400" />;
                                  </div>;
                                )}
                                <div className="flex-1">;
                                  <h3 className="font-semibold text-white group-hover:text-cyan-400 transition-colors duration-200">;
                                    {subitem && subitem.name}
                                  </h3>;
                                  <p className="text-sm text-gray-400 mt-1">;
                                    {subitem && subitem.description}
                                  </p>;
                                  {subitem && subitem.services && (;
                                    <div className="mt-2 flex flex-wrap gap-1">;
                                      {subitem && subitem.services.slice(0, 2).map((service) => (;
                                        <span
                                          key={service}
                                          className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded-md">;
                                          {service}
                                        </span>;
                                      ))}
                                      {subitem && subitem.services.length > 2 && (;
                                        <span className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded-md">;
                                          +{subitem && subitem.services.length - 2} more;
                                        </span>;
                                      )}
                                    </div>;
                                  )}
                                </div>;
                              </div>;
                            </Link>;
                          ))}
                        </div>;
                      </motion && motion.div>;
                    )}
                  </AnimatePresence>;
                </div>;
              ))}
            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-4">;
              <Link
                href="/pricing"
                className="px-6 py-2 text-gray-300 hover:text-white transition-colors duration-200">;
                Pricing;
              </Link>;
              <Link
                href="/contact"
            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors duration-200">;
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>;
          </div>;
        </div>;
      </nav>;

      {/* Mobile Menu */}
      <AnimatePresence>;
        {isOpen && (;
          <motion&& motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0 && 0.3 }}
                      {item && item.badge && (
                        <span className="px-2 py-1 text-xs font-medium bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full">;
                          {item && item.badge}
                        </span>;
                      )}
                  {activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0 && 0.2 }}
                      className="ml-8 mt-2 space-y-2">;
                      {item && item.children?.map((child) => (;
                        <Link
                          key={child && child.name}
                          href={child && child.href}
                          className="block px-4 py-2 text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                          onClick={() => setIsOpen(false)}
                          className="block p-2 text-gray-300 hover:text-white transition-colors text-sm";
                        >;
                          <subItem && subItem.icon className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors duration-200" />;
                          <span className="text-gray-300 group-hover:text-white transition-colors duration-200">;
                            {subItem && subItem.name}
                          </span>;
                        </Link>;
                      ))}
                    </motion && motion.div>;
                  )}
                </div>;
              ))}
              {/* Mobile CTA */}
              <div className="pt-4">;
                <Link
                  href="/contact"
                  className="block w-full text-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium rounded-lg transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >;
                  Get Started;
                </Link>;
            className="fixed inset-0 z-50 lg:hidden";
          >;
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={closeMenu}
            {/* Menu Panel */}
            <div className="absolute right-0 top-0 h-full w-80 bg-gray-900/95 backdrop-blur-md border-l border-gray-700/50 overflow-y-auto">
              <div className="p-6">
                {/* Close Button */}
                <div className="flex justify-end mb-6">
                  <button
                    onClick={closeMenu}
                      {/* Mobile Submenu */}
                      <AnimatePresence>;
                        {activeSubmenu === item && item.name && (;
                          <motion&& motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0 && 0.2 }}
                            className="ml-8 space-y-2">;
                            {item && item.submenu?.map((subitem) => (;
                              <Link
                                key={subitem && subitem.name}
                                href={subitem && subitem.href}
                                onClick={closeMenu}
                                className="block p-3 rounded-lg hover:bg-gray-800/50 transition-all duration-200">;
                                <h4 className="text-white font-medium">{subitem && subitem.name}</h4>;
                                <p className="text-sm text-gray-400 mt-1">{subitem && subitem.description}</p>;
                              </Link>;
                            ))}
                          </motion && motion.div>;
                        )}
                      </AnimatePresence>;
                    </div>;
                  ))}
                {/* Mobile CTA */}
                <div className="mt-8 space-y-4">;
                  <Link
                    href="/pricing"
                    onClick={closeMenu}
                    className="block w-full text-center px-6 py-3 border border-gray-600 text-gray-300 rounded-xl hover:border-gray-500 hover:text-white transition-all duration-200">;
                    View Pricing;
                  </Link>;
                  <Link
                    href="/contact"
                    onClick={closeMenu}
                {/* Mobile Contact Info */}
                <div className="mt-8 pt-6 border-t border-gray-700/50">;
                  <div className="space-y-3 text-sm">;
                    <div className="flex items-center space-x-3 text-gray-400">;
                      <Phone className="w-4 h-4 text-cyan-400" />;
                      <span>{contactInfo && contactInfo.phone}</span>;
                    </div>;
                    <div className="flex items-center space-x-3 text-gray-400">;
                      <Mail className="w-4 h-4 text-purple-400" />;
                      <span>{contactInfo && contactInfo.email}</span>;
                    </div>;
                    <div className="flex items-start space-x-3 text-gray-400">;
                      <MapPin className="w-4 h-4 text-green-400 mt-0 && 0.5" />;
                      <span className="text-xs">{contactInfo && contactInfo.address}</span>;
      {/* Mobile Menu */}
      <AnimatePresence>;
        {is_open && (
          <motion.div;
            initial={{ opacity: 0, coordinate_x: '100%' }}
            animate={{ opacity: 1, coordinate_x: 0 }}
            exit={{ opacity: 0, coordinate_x: '100%' }}
            transition={{ duration: 0.3 }}
                      {item.badge && (
                        <span className="px - 2 py - 1 text - xs font - medium bg - gradient - to - r from - cyan - 500 to - blue - 600 text - white rounded - full">;
                          {item.badge}
                        </span>)}
                    </div>;
                    <ChevronDown className={`w - 4 h - 4 transition - transform duration - 200 ${
                      active_dropdown === item.name ? 'rotate - 180' : '';
                    }`} />;
                  </button>;
                  {active_dropdown === item.name && (
                    <motion.div;
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="ml - 8 mt - 2 space - y-2";
                    >;
                      {item.children?.map ((child) => (
                        <Link;
                          key={child.name}
                          href={child.href}
                          className="block px - 4 py - 2 text - sm text - gray - 400 hover:text - cyan - 400 transition - colors duration - 200";
                          on_click={() => setIsOpen (false)}
                          className="block p - 2 text - gray - 300 hover:text - white transition - colors text - sm";
                        >;
                          <sub_item.icon className="w - 5 h - 5 text - gray - 400 group - hover:text - cyan - 400 transition - colors duration - 200" />;
                          <span className="text - gray - 300 group - hover:text - white transition - colors duration - 200">;
                            {sub_item.name}
                          </span>;
                        </Link>))}
                    </motion.div>)}
                </div>))}
              {/* Mobile CTA */}
              <div className="pt - 4">;
                <Link;
                  href="/contact";
                  className="block w - full text - center px - 6 py - 3 bg - gradient - to - r from - cyan - 500 to - blue - 600 hover:from - cyan - 600 hover:to - blue - 700 text - white font - medium rounded - lg transition - all duration - 300";
                  on_click={() => setIsOpen (false)}
                >;
                  Get Started;
                </Link>;
            className="fixed inset - 0 z - 50 lg:hidden";
          >;
            {/* Backdrop */}
            <div;
              className="absolute inset - 0 bg - black / 50 backdrop - blur - sm";
              on_click={close_menu}
            />;
            {/* Menu Panel */}
            <div className="absolute right - 0 top - 0 h - full w - 80 bg - gray - 900 / 95 backdrop - blur - md border - l border - gray - 700 / 50 overflow - y-auto">;
              <div className="p - 6">;
                {/* Close Button */}
                <div className="flex justify - end mb - 6">;
                  <button;
                    on_click={close_menu}
                    className="p - 2 text - gray - 400 hover:text - white transition - colors duration - 200";
                  >;
                    <X className="w - 6 h - 6" />;
                  </button>;
                </div>;
                {/* Mobile Navigation Items */}
                <div className="space - y-4">;
                  {navigation_items.map ((item) => (
                    <div key={item.name}>;
                      <button;
                        on_click={() => setActiveSubmenu (active_submenu === item.name ? null : item.name)}
                        className="flex items - center justify - between w - full text - left p - 4 rounded - xl hover:bg - gray - 800 / 50 transition - all duration - 200";
                      >;
                        <div className="flex items - center space - x-3">;
                          <item.icon className="w - 5 h - 5 text - cyan - 400" />;
                          <span className="text - white font - medium">{item.name}</span>;
                        </div>;
                        <ChevronDown className={`w - 4 h - 4 text - gray - 400 transition - transform duration - 200 ${
                          active_submenu === item.name ? 'rotate - 180' : '';
                        }`} />;
                      </button>;
                      {/* Mobile Submenu */}
                      <AnimatePresence>;
                        {active_submenu === item.name && (
                          <motion.div;
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                {/* Mobile CTA */}
                <div className="mt - 8 space - y-4">;
                  <Link;
                    href="/pricing";
                    on_click={close_menu}
                    className="block w - full text - center px - 6 py - 3 border border - gray - 600 text - gray - 300 rounded - xl hover:border - gray - 500 hover:text - white transition - all duration - 200";
                  >;
                    View Pricing;
                  </Link>;
                  <Link;
                    href="/contact";
                    on_click={close_menu}
                    className="block w - full text - center px - 6 py - 3 bg - gradient - to - r from - cyan - 500 to - purple - 600 text - white rounded - xl hover:from - cyan - 600 hover:to - purple - 700 transition - all duration - 300";
                  >;
                    Contact Us;
                  </Link>;
                </div>;
                {/* Mobile Contact Info */}
                <div className="mt - 8 pt - 6 border - t border - gray - 700 / 50">;
                  <div className="space - y-3 text - sm">;
                    <div className="flex items - center space - x-3 text - gray - 400">;
                      <Phone className="w - 4 h - 4 text - cyan - 400" />;
                      <span>{contact_info.phone}</span>;
                    </div>;
                    <div className="flex items - center space - x-3 text - gray - 400">;
                      <Mail className="w - 4 h - 4 text - purple - 400" />;
                      <span>{contact_info.email}</span>;
                    </div>;
                    <div className="flex items - start space - x-3 text - gray - 400">;
                      <MapPin className="w - 4 h - 4 text - green - 400 mt - 0.5" />;
                      <span className="text - xs">{contact_info.address}</span>;
                    </div>;
                  </div>;
                </div>;
              </div>;
            </div>;
          </motion && motion.div>;
        )}
      </AnimatePresence>
      {/* Spacer for fixed navigation */}
      <div className="h-20" />
    </>
  )
}

export default EnhancedNavigation2025;
          </motion.div>)}
      </AnimatePresence>;
      {/* Spacer for fixed navigation */}
      <div className="h - 20" />;
    </>);
}
;
