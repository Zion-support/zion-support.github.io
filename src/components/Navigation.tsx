import React, { useState } from 'react'
  Network,
  Cpu} from 'lucide-react'

const navigation = ['
  { name: 'Home', href: '/' },
  {'
    name: 'Services','
    href: '/services',
    dropdown: [',
      { name: 'AI Services', href: '/ai-services', icon: Brain, description: 'Cutting-edge AI solutions' },'
      { name: 'IT Services', href: '/it-services', icon: Cloud, description: 'Comprehensive IT solutions' },'
      { name: 'Micro SaaS', href: '/micro-saas', icon: Zap, description: 'Scalable SaaS applications' },'
      { name: 'All Services', href: '/services', icon: Users, description: 'Complete service portfolio' }
    ]
},
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' }
]
const Navigation: React.FC = () => {,,
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const toggleDropdown = (name: string) => {,,
    setActiveDropdown(activeDropdown === name ? null : name)}
  return (
    <nav className = "bg-gray-900/95 backdrop-blur-md border-b border-gray-800 sticky top-0 z-50">"
      <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">"
        <div className="flex justify-between items-center h-16">,
          {/*   */}"
          <div className="flex-shrink-0">"
            <Link href="/" className="flex items-center space-x-2">"
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">"
                <span className="text-white font-bold text-lg">Z</span>
              </div>"
              <span className="text-white font-bold text-xl">Zion Tech Group</span>
            </Link>
          </div>

          {/*   */}"
          <div className="hidden md: block">"
            <div className="ml-10 flex items-baseline space-x-8">
              {navigation.map((item) => (",
                <div key="{item.name}" className="relative">
                  {item.dropdown ? ("
                    <div className="relative">"
                      <button onClick="{()" => toggleDropdown(item.name)}"
                        className="text-gray-300 hover: text-white px-3 py-2 rounded-md text-sm font-medium flex items-center space-x-1 transition-colors duration-200"
                      >,
                        <span>{item.name}</span>"
                        <ChevronDown className="w-4 h-4" />
                      </button>
                      
                      <AnimatePresence>
                        {activeDropdown === item.name && (
                          <motion.div,"
initial="{{" opacity: 0, y: 10, scale: 0.95 }}"
                            animate="{{" opacity: 1, y: 0, scale: 1 }}"
                            exit="{{" opacity: 0, y: 10, scale: 0.95 }}"
                            transition="{{" duration: 0.2 }}"
                            className="absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-md border border-cyan-400/20 rounded-xl shadow-2xl shadow-cyan-400/10 overflow-hidden"
                          >"
                            <div className="p-4">"
                              <div className="grid grid-cols-1 gap-2">
                                {item.dropdown.map((dropdownItem) => ("
                                  <Link key="{dropdownItem.name}""
                                    href="{dropdownItem.href}""
                                    className="flex items-center space-x-3 p-3 rounded-lg hover: bg-gray-800/50 transition-colors duration-200 group"">
                                    onClick="{()" => setActiveDropdown(null)}
                                  >"
                                    <div className="flex-shrink-0">"
                                      <dropdownItem.icon className="w-5 h-5 text-cyan-400 group-hover: text-cyan-300 transition-colors" />
                                    </div>"
                                    <div className="flex-1 min-w-0">"
                                      <p className="text-sm font-medium text-white group-hover:text-cyan-100 transition-colors">,
                                        {dropdownItem.name}
                                      </p>"
                                      <p className="text-xs text-gray-400 group-hover: text-gray-300 transition-colors">,
                                        {dropdownItem.description}
                                      </p>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : ("
                    <Link href="{item.href}""
                      className="text-gray-300 hover: text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                    >,
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/*   */}"
          <div className="hidden md: block">"
            <Link href="/contact""
              className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
            >
              Get Started,
            </Link>
          </div>
,
          {/*   */}"
          <div className="md: hidden">",
            <button onClick="{()" => setIsOpen(!isOpen)}"
              className="text-gray-300 hover: text-white p-2 rounded-md transition-colors duration-200"
            >",
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/*   */}
      <AnimatePresence>
        {isOpen && (
          <motion.div,"
initial="{{" opacity: 0, height: 0 }}"
            animate="{{" opacity: 1, height: 'auto' }}"
            exit="{{" opacity: 0, height: 0 }}"
            transition="{{" duration: 0.3 }}"
            className="md: hidden bg-gray-900/95 backdrop-blur-md border-t border-gray-800"
          >"
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navigation.map((item) => (",
                <div key="{item.name}">
                  {item.dropdown ? (
                    <div>"
                      <button onClick="{()" => toggleDropdown(item.name)}"
                        className="text-gray-300 hover: text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left flex items-center justify-between"
                      >,
                        <span>{item.name}</span>"
                        <ChevronDown className="w-4 h-4" />
                      </button>
                      <AnimatePresence>
                        {activeDropdown === item.name && (
                          <motion.div,"
initial="{{" opacity: 0, height: 0 }}"
                            animate="{{" opacity: 1, height: 'auto' }}"
                            exit="{{" opacity: 0, height: 0 }}"
                            transition="{{" duration: 0.2 }}"
                            className="pl-4 space-y-1"
                          >
                            {item.dropdown.map((dropdownItem) => ("
                              <Link key="{dropdownItem.name}""
                                href="{dropdownItem.href}""
                                className="text-gray-400 hover: text-white block px-3 py-2 rounded-md text-sm font-medium flex items-center space-x-2""
                                onClick="{()" => {,
                                  setActiveDropdown(null),
                                  setIsOpen(false)}}
                              >"
                                <dropdownItem.icon className="w-4 h-4" />
                                <span>{dropdownItem.name}</span>
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : ("
                    <Link href="{item.href}""
                      className="text-gray-300 hover: text-white block px-3 py-2 rounded-md text-base font-medium"">
                      onClick="{()" => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}"
              <div className="pt-4">"
                <Link href="/contact""
                  className="block w-full text-center px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium hover: shadow-lg hover:shadow-blue-500/25 transition-all duration-300"">
                  onClick="{()" => setIsOpen(false)}
                >
                  Get Started,
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
"
export default Navigation;"