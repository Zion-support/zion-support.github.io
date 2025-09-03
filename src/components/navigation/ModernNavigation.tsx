
      ]
    }, {name: 'About', href: '/about' }, {name: 'Contact', href: '/contact' }
  ]];

  const toggleDropdown = (name: string) => {setActiveDropdown(activeDropdown === name ? null : name)};

  const closeMobileMenu = () => {setIsOpen(false);
    setActiveDropdown(null)};


              <Globe className="w-6 h-6 text-white" />
            </div>"
            <span className="text-xl font-bold text-white group-hove,
    r:text-cyan-300 transition-colors">
              Zion Tech Group
            </span>
          </Link>
"
          <div className="hidden l,
    g:flex items-center space-x-8">
            {navigationItems.map((item) => ("
              <div key={item.name} className="relative">
                {item.dropdown ? ("
                  <div className="relative">

                                  <dropdownItem.icon className="w-5 h-5 text-cyan-400" />
                                </div>"
                                <div className="flex-1 min-w-0">"
                                  <p className="text-sm font-medium text-white group-hove,
    r:text-cyan-300 transition-colors">
                                    {dropdownItem.name}
                                  </p>"
                                  <p className="text-xs text-gray-400 mt-1">
                                    {dropdownItem.description}
                                  </p>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (

                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

              Get Started
            </Link>
          </div>


            aria-label="Toggle mobile menu"
          >"
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (

                <h3 className="text-sm font-semibold text-cyan-400 mb-3 uppercase tracking-wide">
                  Contact Information
                </h3>"
                <div className="space-y-2">
                  {contactInfo.map((contact, index) => (

                      <contact.icon className="w-4 h-4 text-cyan-400" />
                      <span>{contact.text}</span>
                    </a>
                  ))}
                </div>
              </div>
"
              <div className="space-y-2">
                {navigationItems.map((item) => (
                  <div key={item.name}>
                    {item.dropdown ? (
                      <div>

                                  <dropdownItem.icon className="w-4 h-4 text-cyan-400" />
                                  <span>{dropdownItem.name}</span>
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (

                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
`
              <div className="pt-4 border-t border-gray-700">

                  Get Started Today
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )};













