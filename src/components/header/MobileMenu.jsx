
      name: 'Home',
      href: '/',
      icon: Home
    } ]
    }
  ];

  const directLinks = [
    { href: '/pricing', label: 'Pricing' },
    { href: '/contact', label: 'Contact' },
    { href: '/help', label: 'Support' },
    { href: '/get-started', label: 'Get Started' },
    { href: '/request-quote', label: 'Request Quote' },
  ];

  const handleNavigation = (path) => {
    onNavigate(path)};

  if (!isOpen) return null;

  return (""
    <div className="lg: hidden fixed inset-0 z-50">
      {/* Overlay */}
      <div ""

        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      /" >"

      

            <X className="h-5 w-5" />

          </button>
        </div>


          <nav className="space-y-1">
            {navigationItems.map((item) => (

                          {child.icon && <child.icon className="h-4 w-4 mr-3" />}

                          <span>{child.name}</span>
                        </Link>
                      ))}
                    </div>
                  </details>
                ) : (


                    <span className="font-medium">{item.name}</span>
                  </Link>
                );
              })}
            </nav>



              >
                Go to Dashboard
              </Link>
            </div>


              >
                Get Started
              </Link>
            </div>

              <DollarSign className="h-4 w-4" />

              <span>Request Quote</span>
            </Link>
          </div>
        </div>
      )}
    </div>







