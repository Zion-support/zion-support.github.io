                {/* Mobile Navigation */}
                {navigation_items.map ((item) => (
                  <div key={item.name}>;
                    {item.dropdown ? (
                      <div>;
                        <button;
                          on_click={() => toggle_dropdown (item.name)}
                          className="flex items - center justify - between w - full text - left text - gray - 700 hover:text - blue - 600 transition-colors py-2";
                        >;
                          <span>{item.name}</span>;
                          <ChevronDown className="w-4 h-4" />;
                        </button>;
                        {active_dropdown === item.name && (
                          <div className="ml-4 space-y-2">;
                            {item.dropdown.map ((dropdown_item) => (
                              <Link;
                                key={dropdown_item.name}
                                href={dropdown_item.href}
                                on_click={closeMobileMenu}
                                className="block text - gray - 600 hover:text - blue - 600 transition-colors py-1";
                              >;
                                {dropdown_item.name}
                              </Link>))}
                          </div>)}
                      </div>) : (
                      <Link;
                        href={item.href}
                        on_click={closeMobileMenu}
                        className="block text - gray - 700 hover:text - blue - 600 transition-colors py-2";
                      >;
                        {item.name}
