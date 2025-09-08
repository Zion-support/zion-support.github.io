

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)}, {
      name: 'Solutions'',,';
      href: '/solutions',,';
      dropdown: [

    }, { name: 'Pricing', href: '/pricing' }, { name: 'About', href: '/about' }, { name: 'Blog', href: '/blog' }];

  const toggleDropdown = (itemName: string) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);

  return (
    <nav className="bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-white text-2xl font-bold hover:text-blue-300 transition-colors"
            >

              Zion Tech Group
            </Link>
          </div>
          {/* Desktop Navigation */}

                      <button
                        onClick={() => toggleDropdown(item.name)}
                        className="text-white hover: text-blue-300 px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
                      >
                        {item.name}
                        <ChevronDown className="ml-1 h-4 w-4" />
                      </button>

                              onClick={() => setActiveDropdown(null)}

                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </div>

                      )}
                    </div>
                  ) : (

                    >
                      {item.nam,e}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>

            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}

              />
              <Search className="absolute right-3 top-2.5 h-4 w-4 text-gray-300" />
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <a
                href="tel:+13024640950"
                className="text-white hover:text-blue-300 flex items-center"
              >
                <Phone className="h-4 w-4 mr-1" />
                <span className="hidden lg:inline">+1 302 464 0950</span>
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="text-white hover:text-blue-300 flex items-center"
              >
                <Mail className="h-4 w-4 mr-1" />
                <span className="hidden lg:inline">Contact</span>
              </a>
            </div>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}


  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-blue-600 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="text-xl font-bold text-gray-800">Zion Tech Group</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-gray-600 hover:text-blue-600 transition-colors">
              Home
            </Link>

              Contact
            </Link>

            </Link>
          </div>

          {/* Desktop Navigation */}

              Get Started
            </Link>

          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-gray-600 hover:text-gray-900"
            onClick={() => setIsOpen(!isOpen)}

          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}


          </button>
        </div>

              <div key={item.name}>

                {item.dropdown ? (
                  <div>
                    <button
                      onClick={() => toggleDropdown(item.name)}

                    >
                      {item.name}
                      <ChevronDown className="h-4 w-4" />
                    </button>

                          <Link
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="text-gray-300 hover: text-white block px-3 py-2 rounded-md text-sm"
                            onClick={() => {
                              setIsOpen(false);
                              setActiveDropdown(null)
                            }}

                          >
                            <div className="font-medium text-gray-900 group-hover:text-blue-600">
                              {industry && industry.name}
                            </div>
                            <div className="text-sm text-gray-500">
                              {industry && industry.description}
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (

                  >
                    {item.name}


            </div>
          </div>
        )}
      </div>




