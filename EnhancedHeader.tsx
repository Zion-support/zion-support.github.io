
              className="lg:hidden bg-white border-t border-gray-200"
            >
              <div className="px-4 py-4 space-y-4">
                {/* Mobile Navigation */}
                {navigation_items.map ((item) => (
                  <div key={item.name}>;
                    {item.dropdown ? (
                      <div>;
                        <button;
                          on_click={() => toggle_dropdown (item.name)}
                          className="flex items - center justify - between w - full text - left text - gray - 700 hover:text - blue - 600 transition - colors py - 2";
                        >;
                          <span>{item.name}</span>;
                          <ChevronDown className="w - 4 h - 4" />;
                        </button>;
                        {active_dropdown === item.name && (
                          <div className="ml - 4 space - y-2">;
                            {item.dropdown.map ((dropdown_item) => (
                              <Link;
                                key={dropdown_item.name}
                                href={dropdown_item.href}
                                on_click={closeMobileMenu}
                                className="block text - gray - 600 hover:text - blue - 600 transition - colors py - 1";
                              >;
                                {dropdown_item.name}
                              </Link>))}
                          </div>)}
                      </div>) : (
                      <Link;
                        href={item.href}
                        on_click={closeMobileMenu}
                        className="block text - gray - 700 hover:text - blue - 600 transition - colors py - 2";
                      >;
                        {item.name}

                      </Link>
                    )}
                  </div>
                ))}
                {/* Contact Info */}
                <div className="pt-4 border-t border-gray-200">
                  <div className="space-y-2">
                    {contact_info.map((info, index) => (
                      <div key={index} className="flex items-center space-x-2 text-sm text-gray-600">
                        {info.icon === 'Phone' && <Phone className="w-4 h-4" />}
                        {info.icon === 'Mail' && <Mail className="w-4 h-4" />}
                        {info.icon === 'MapPin' && <MapPin className="w-4 h-4" />}
                        <span>{info.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
