import Link from 'next/link'
import { motion, AnimatePresence  } from 'framer-motion'
import { Menu, X, ChevronDown, Search, Phone, Mail, MapPin, Rocket, Brain, Atom, Shield } from 'lucide-react'
interface UltraFuturisticNavigationProps {
  className?: string}

          href: '/services/quantum'
          icon: Atom'
          color: 'from-cyan-500 to-blue-600'

        {

          name: 'View All Services',
  href: '/services',
          icon: Rocket}
          color: 'from-gray-500 to-gray-600'}

      ]
    },
      { name: 'Solutions'}
  href: '/solutions'}
},

      { name: 'About'}
  href: '/about'}
},

      { name: 'Contact'}
  href: '/contact'}
},

      { name: 'Pricing'}
  href: '/pricing'}

  ]
        ? 'bg-gray-900/95 backdrop-blur-xl border-b border-gray-700/50 shadow-2xl'

  const [isOpen, setIsOpen] = useState(false)
const [isScrolled, setIsScrolled] = useState(false)
const contactInfo = {mobile: '+1 302 464 0950';}
  email: 'kleber@ziontechgroup.com';,address: '364 E Main St STE 1008 Middletown DE 19709';}>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8' />
className='flex items-center space-x-3'
origin/cursor/automate-test-improve-and-merge-code-2533
          >
            <div className='w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center shadow-2xl'>

              <Rocket className='w-7 h-7 text-white' />
            </div>
            <div>'
              <div className='text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent'>
                Zion Tech Group
              </div>'
              <div className='text-xs text-gray-400 -mt-1'>

              </div>            </div>
          </motion.div>
          {/* Desktop Navigation */}'
          <div className='hidden lg:flex items-center space-x-8'>
            {navigationItems.map((item, index) => ('
              <div key={item.name} className='relative group'>                {item.hasDropdown ? (          >'
        : 'bg-transparent'`
    } ${className}`}>;"
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;"
        <div className="flex items-center justify-between h-20">
              <Rocket className="w-7 h-7 text-white" />
            </div>
            <div>"
              <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">

            </div>
          </motion.div>

              <Rocket className='w-7 h-7 text-white' />
            </div>
            <div>;'
              <div className='text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent'>
className='flex items-center space-x-3'
              />
            <div className='w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center shadow-2xl'    />
              <Rocket className='w-7 h-7 text-white'    />
            </div>
            <div    />
              <div className='text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent'    />
                Zion Tech Group
                Revolutionary Technology
              </div>
            </div>
          </motion.div>

          {/* Desktop Navigation *}

<div className='hidden lg:flex items-center space-x-8'    />
            {navigationItems.map((item, index) => (}
              <div key={item.name} className='relative group'    />
                {item.hasDropdown ? (}
                  <div;}
onMouseEnter={() =    /> setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
<button className='flex items-center space-x-1 text-gray-300 hover: text-white transition-colors duration-300 py-2 px-3 rounded-lg hover:bg-gray-800/50'    />
                      <span    />{item.name}</span>
                      <ChevronDown className='w-4 h-4 transition-transform duration-300 group-hover:rotate-180'    />
                    </button>
origin/cursor/automate-test-improve-and-merge-code-2533
                    {/* Dropdown Menu */}
                    <AnimatePresence>
                      {activeDropdown === item && item.name && (
                            <div className='grid gap-3'>                              {item && item.dropdownItems?.map((dropdownItem, idx) => (
                                <Link
                                  key={dropdownItem && dropdownItem.name}
                                  href={dropdownItem && dropdownItem.href}'"
                                  className='flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-800/50 transition-all duration-300 group/item'                          className="absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-xl border border-gray-700/50 rounded-2xl shadow-2xl overflow-hidden">;"
                          <div className="p-4">;"
                            <div className="grid gap-3">
                                <Link
                                  key={dropdownItem && dropdownItem.name}
                                  href={dropdownItem && dropdownItem.href}'
                                  className='flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-800/50 transition-all duration-300 group/item'>
                                    <dropdownItem && dropdownItem.icon className='w-5 h-5 text-white' />
                                  </div>
                                  <div>;'
                                    <div className='text-white font-medium group-hover/item:text-cyan-300 transition-colors'>
                                      {dropdownItem && dropdownItem.name}
                                    </div>
                                    {dropdownItem && dropdownItem.name ===;'
                                      'View All Services' && (;'
                                      <div className='text-xs text-gray-400'>
                                        Explore our complete portfolio
                                    <dropdownItem && dropdownItem.icon className="w-5 h-5 text-white" />
                                  </div>
                                  <div>;"
                                    <div className="text-white font-medium group-hover/item:text-cyan-300 transition-colors">
                                      {dropdownItem && dropdownItem.name}
                                    </div>;'
                                    {dropdownItem && dropdownItem.name === 'View All Services' && (;"
                                      <div className="text-xs text-gray-400">Explore our complete portfolio</div>
                                  key={dropdownItem.name}
                                  href={dropdownItem.href}
className='flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-800/50 transition-all duration-300 group/item'    />

                                  <div
                                    className={`w-10 h-10 bg-gradient-to-r ${dropdownItem.color} rounded-lg flex items-center justify-center group-hover/item: scale-110 transition-transform duration-300
}    />

                                    <dropdownItem.icon className='w-5 h-5 text-white'    />
                                  </div>
                                  <div    />
                                    <div className='text-white font-medium group-hover/item:text-cyan-300 transition-colors'    />
                                      {dropdownItem.name}
                                    </div>
                                    {dropdownItem.name ===
                                      'View All Services' && (<div className='text-xs text-gray-400'    />
                                        Explore our complete portfolio;}
                                      </div>;}
                                    )}

                                  </div>
                                </Link>

                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}

                    </AnimatePresence>
                  </div>
                ) : (

                  >
                    {item.name}
                  </Link>
                  <Link
href={item.href}
className='text-gray-300 hover: text-white transition-colors duration-300 py-2 px-3 rounded-lg hover:bg-gray-800/50'
                      />

                    {item.nam}

                  </Link>
                )}
              </div>
            ))}href={item.href}"
                    className=\"text-gray-300 hover:text-white transition-colors duration-300 py-2 px-3 rounded-lg hover:bg-gray-800/50\">

                                  </div>
                                </Link>))}
                            </div>
                          </div>
                        </motion.div>)}
                    </AnimatePresence>
                    {item.name}
                  </Link>)}
              </div>)

          </div>
          </div>
          {/* Contact Info & CTA */}

                <Phone className='w-4 h-4 text-cyan-400' />                <span>{contactInfo && contactInfo.mobile}</span>          <div className="hidden lg:flex items-center space-x-6">
            {/* Contact Info */}

<div className='hidden lg: flex items-center space-x-6'    />

            {/* Contact Info *}

            <div className='flex items-center space-x-4 text-sm text-gray-300'    />
              <div className='flex items-center space-x-2'    />
                <Phone className='w-4 h-4 text-cyan-400'    />
                <span    />{contactInfo.mobile}</span>
              </div>
            </div>
            {/* CTA Button */}
<motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }
}    />
              <Link
                href='/contact'
                className='inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-cyan-500/30'    />

                <Rocket className='w-4 h-4 mr-2'    />
                Get Started
              </Link>
            </motion.div>
          </div>
          {/* Mobile Menu Button */}

              <Link'
                href='/contact''
                className='inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-cyan-500/30'>;'
                <Rocket className='w-4 h-4 mr-2' />                Get Started              <Link"
                href="/contact"
          {/* Mobile Menu Button */}'
          <div className='lg:hidden'>
          {/* Mobile Menu Button */}"
          <div className="lg:hidden">

<div className='hidden lg:flex items-center space-x-6'>
            {/* Contact Info */}
            <div className='flex items-center space-x-4 text-sm text-gray-300'>
              <div className='flex items-center space-x-2'>
                <Phone className='w-4 h-4 text-cyan-400' />
                <span>{contactInfo.mobile}</span>
              </div>
            </div>
            {/* CTA Button */}
<motion.div whileHover={{ scale: 1.05 ;}} whileTap={{ scale: 0.95 ;}}>
              <Link
                href='/contact'
                className='inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-cyan-500/30'
              >
                <Rocket className='w-4 h-4 mr-2' />
                Get Started
              </Link>
            </motion.div>
          </div>
          {/* Mobile Menu Button */}
<div className='lg:hidden'>
origin/cursor/automate-test-improve-and-merge-code-2533
            <button
              onClick={() => setIsOpen(!isOpen)}

              className='text-gray-300 hover:text-white transition-colors duration-300 p-2 rounded-lg hover:bg-gray-800/50'
            >
              {isOpen ? ('
                <X className='w-6 h-6' />
              ) : ('
                <Menu className='w-6 h-6' />

              className="text-gray-300 hover:text-white transition-colors duration-300 p-2 rounded-lg hover:bg-gray-800/50"
            >"
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>
              )}
            </button>
          </div>
        </div>
      </div>
origin/cursor/automate-test-improve-and-merge-code-2533
      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
className='lg:hidden bg-gray-900/95 backdrop-blur-xl border-t border-gray-700/50 overflow-hidden'
              />
            <div className='px-4 py-6 space-y-4'    />

              {/* Mobile Navigation Items */}
              {navigationItems.map(item => (<div key={item.nam}
}    />
                  {item.hasDropdown ? (<div    />
                      <button
onClick={() =    />;}
                          setActiveDropdown(activeDropdown === item.name ? null : item.name;}
                          )}
                        className='flex items-center justify-between w-full text-left text-gray-300 hover:text-white transition-colors duration-300 py-3 px-4 rounded-lg hover:bg-gray-800/50'
                        <span    />{item.name}</span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === item.name ? 'rotate-180' : '';}
                          }`}

                           />
                      </button>
                      {activeDropdown === item.name && (
                        <motion.div
                           />
                      </button>
                          className='ml-4 mt-2 space-y-2'

className='ml-4 mt-2 space-y-2'
origin/cursor/automate-test-improve-and-merge-code-2533
                        >
                          {item.dropdownItems?.map(dropdownItem => (

                          {item && item.dropdownItems?.map((dropdownItem) => (
                            <Link
                              key={dropdownItem && dropdownItem.name}
                              href={dropdownItem && dropdownItem.href}"
                              className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800/50 transition-all duration-300"
                              onClick={() => setIsOpen(false)}
                                className={`w-8 h-8 bg-gradient-to-r ${dropdownItem.color} rounded-lg flex items-center justify-center`}
                              >
                              <div
className={`w-8 h-8 bg-gradient-to-r ${dropdownItem.color} rounded-lg flex items-center justify-center`}
                                  />
                                <dropdownItem.icon className='w-4 h-4 text-white'    />
                              </div>
                              <span className='text-gray-300 hover: text-white transition-colors'    />
                                {dropdownItem.name}
                              </span>
                            </Link>

                          )

                        </motion && motion.div>
                      )}
                    </div>
                  ) : (
                      href={item.href}
className='block text-gray-300 hover:text-white transition-colors duration-300 py-3 px-4 rounded-lg hover:bg-gray-800/50'
origin/cursor/automate-test-improve-and-merge-code-2533
                      onClick={() => setIsOpen(false)}

                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}

              {/* Mobile Contact Info */}
<div className='pt-6 border-t border-gray-700/50 space-y-3'>
                <div className='flex items-center space-x-3 text-gray-300'>
                  <Phone className='w-4 h-4 text-cyan-400' />
origin/cursor/automate-test-improve-and-merge-code-2533
                  <span>{contactInfo.mobile}</span>
                </div>'
                <div className='flex items-center space-x-3 text-gray-300'>'
                  <Mail className='w-4 h-4 text-purple-400' />
                  <span>{contactInfo.email}</span>

                  <span className='text-sm'>{contactInfo.address}</span>                </div>
              </div>
              {/* Mobile CTA */}'
              <div className='pt-4'>                  <span>{contactInfo.mobile}</span>
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              {/* Mobile Contact Info */}
                  <span>{contactInfo.mobile}</span>
                      onClick={() => setIsOpen(false)}
                    >
                      {item && item.name}
                    <Link
href={item.href}
className='block text-gray-300 hover: text-white transition-colors duration-300 py-3 px-4 rounded-lg hover:bg-gray-800/50'
                      onClick={() =    /> setIsOpen(false)}

                    >

                      {item.nam}

                    </Link>
                  <span className="text-sm">{contactInfo.address}</span>
                  <span className='text-sm'>{contactInfo.address}</span>
origin/cursor/automate-test-improve-and-merge-code-2533
                <div className='flex items-center space-x-3 text-gray-300' />
                  <MapPin className='w-4 h-4 text-green-400' />

              {/* Mobile Contact Info */}
<div className='pt-6 border-t border-gray-700/50 space-y-3'    />
                <div className='flex items-center space-x-3 text-gray-300'    />
                  <Phone className='w-4 h-4 text-cyan-400'    />
                  <span    />{contactInfo.mobile}</span>
                </div>
                <div className='flex items-center space-x-3 text-gray-300'    />
                  <Mail className='w-4 h-4 text-purple-400'    />
                  <span    />{contactInfo.email}</span>
                </div>
                <div className='flex items-center space-x-3 text-gray-300'    />
                  <MapPin className='w-4 h-4 text-green-400'    />

                  <span className='text-sm'    />{contactInfo.address}</span>
                </div>

                              key={dropdown_item.name}
                              href={dropdown_item.href}
                              className='flex items - center space - x-3 p - 3 rounded - lg hover:bg - gray - 800 / 50 transition - all duration - 300'
                              on_click={() =    /> setIsOpen (false)}
                            >
                                {dropdown_item.name}
                              </span>
                            </Link>))}
                        </motion.div>)}

                      on_click={() => setIsOpen (false)}
                    >
                      {item.name}
                    </Link>)}
                </div>))}

              <div className='pt - 4'>                  <span>{contact_info.mobile}</span>
                </div>;"
                <div className="flex items - center space - x-3 text - gray - 300">;"
                  <Mail className="w - 4 h - 4 text - purple - 400" />
                  <span>{contact_info.email}</span>
                </div>;"
                <div className="flex items - center space - x-3 text - gray - 300">;"
                  <MapPin className="w - 4 h - 4 text - green - 400" />;"
                  <span className="text - sm">{contact_info.address}</span>
                </div>
              </div>
              {/* Mobile CTA */}'
              <div className='pt - 4'>
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        )}

      </AnimatePresence>
    </nav>
  )
  )
  )
  )
          </motion.div>)}
      </AnimatePresence>
    </nav>)
<div className='pt-4'>
                <Link
                  href='/contact'
                  className='block w-full text-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-300'
                  onClick={() => setIsOpen(false)}
                >
                  <Rocket className='w-5 h-5 inline mr-2' />
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
origin/cursor/automate-test-improve-and-merge-code-2533

