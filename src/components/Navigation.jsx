
      ]
    }, {'
      name: 'Emerging Technologies' ]
    }, {'
      name: 'Industry Solutions']
    }
  ];


      return location.pathname === '/'}
    return location.pathname.startsWith(href)};


          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-lg flex items-center justify-center">

                <Brain className="w-5 h-5 text-white" />
              </div>"
              <span className="text-xl font-bold text-white">Zion Tech Group</span>
            </Link>
          </div>

          <div className="hidden lg:flex lg:items-center lg:space-x-8">

            {navigationItems.map((item) => {
              const Icon = item.icon;
              return (


                  <Icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </Link>
              )})}

              >

                <Shield className="w-4 h-4" />
                <span>Services</span>"
                <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>

              {isServicesOpen && (`
                <div className="absolute top-full left-0 mt-2 w-80 bg-zion-blue-dark border border-zion-blue-light rounded-xl shadow-2xl z-50">"
                  <div className="p-4">"
                    <div className="grid grid-cols-1 gap-4">
                      {serviceCategories.map((category) => ("
                        <div key={category.name} className="space-y-2">"
                          <h3 className="text-sm font-semibold text-zion-cyan">{category.name}</h3>"
                          <div className="space-y-1">
                            {category.services.map((service) => (

                              >
                                {service.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>



              <Phone className="w-4 h-4" />
              <span>Contact Us</span>
            </a>
          </div>

            >

              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>



          <div className="px-2 pt-2 pb-3 space-y-1 bg-zion-blue-dark border-t border-zion-blue-light/30">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              return (

                >

                  <Icon className="w-5 h-5" />
                  <span>{item.name}</span>
                </Link>
              )})}

            <div className="px-3 py-2">
              <h3 className="text-sm font-semibold text-zion-cyan mb-2">Service Categories</h3>

              <div className="space-y-2">
                {serviceCategories.map((category) => ("
                  <div key={category.name} className="ml-4">"
                    <h4 className="text-sm font-medium text-white mb-1">{category.name}</h4>"
                    <div className="space-y-1">
                      {category.services.map((service) => (

                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="px-3 py-2 border-t border-zion-blue-light/30">
              <a"
                href="tel:+13024640950""
                className="flex items-center space-x-2 px-3 py-2 bg-zion-cyan text-zion-blue-dark rounded-lg font-medium"


                <Phone className="w-5 h-5" />
                <span>Call +1 302 464 0950</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )};











