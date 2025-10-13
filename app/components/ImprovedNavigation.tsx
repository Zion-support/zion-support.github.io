import { Link } from 'react-router-dom';
import React from 'react';
import { ArrowRight, ChevronDown, Menu, X, Brain, Shield, Zap, Globe, BarChart3, Cloud, Sparkles, Search, User, Settings, HelpCircle, Phone, Mail, MapPin, Star, TrendingUp, Users, Award, Clock, CheckCircle, DollarSign, Play } from 'lucide-react';

const ImprovedNavigation = () => 
  }, [location]);

  const navigationItems = [
    
        },
        
        },
        
        },
        
        },
        
        },
        
        },
        
        },
        
        },
        
        },
        
        },
        
        },
        
        },
        
        },
        
        },
        
        },
        
        },
        
        },
        
        },
        
        },
        
        },
        
        },
        
        },
        
        },
        
        },
        
        }
      ]
    },
    
        },
        
        },
        
        },
        
        },
        
        },
        
        },
        
        },
        
        },
        
        },
        
        },
        
        },
        
        },
        
        },
        
        }
      ]
    },
    
        },
        
        },
        
        },
        
        },
        
        },
        
        },
        
        },
        
        },
        
        },
        
        },
        
        },
        
        },
        
        },
        
        },
        
        },
        
        },
        
        },
        
        },
        
        },
        
        },
        
        },
        
        },
        
        },
        
        }
      ]
    },
    
        },
        
        },
        
        },
        
        },
        
        },
        
        },
        
        },
        
        }
      ]
    },
    
        },
        
        },
        
        },
        
        },
        
        },
        
        },
        
        },
        
        }
      ]
    }
  ];

  const Sidebar = () => (
    <div className={`fixed inset-0 z-50 lg:hidden ${isSidebarOpen ? 'block' : 'hidden'}`} /></div>
      <div className="fixed inset-0 bg-black/50" onClick={() = /> setIsSidebarOpen(false)} />
      <div className="fixed right-0 top-0 h-full w-80 bg-slate-900/95 backdrop-blur-sm border-l border-white/10" /></div>
        <div className="p-6" /></div>
          <div className="flex items-center justify-between mb-8" /></div>
            <h2 className="text-xl font-bold text-white" />Menu</h2>
            <button
              onClick={() = /> setIsSidebarOpen(false)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" / />
            </button>
          </div>

          {/* Search */}
          <div className="mb-6" /></div>
            <div className="relative" /></div>
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" / />
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) = /> setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>
          </div>

          {/* Navigation Items */}
          <div className="space-y-4" /></div>
            
              <div key={item.label} /></div>
                <Link
                  to={item.href}
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/10 transition-colors"
                  onClick={() = /> setIsSidebarOpen(false)}
                >
                  <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${item.color} flex items-center justify-center`} /></div>
                    {item.icon}
                  </div>
                  <div /></div>
                    <div className="text-white font-medium" />{item.label}</div>
                    <div className="text-gray-400 text-sm" />{item.description}</div>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {/* Quick Links */}
          <div className="mt-8 pt-6 border-t border-white/10" /></div>
            <h3 className="text-white font-medium mb-4" />Quick Links</h3>
            <div className="space-y-2" /></div>
              
                  key={link.href}
                  to={link.href}
                  className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors"
                  onClick={() =></Lin> setIsSidebarOpen(false)}
                >
                  {link.icon}
                  <span />{link.label}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="mt-8 pt-6 border-t border-white/10" /></div>
            <h3 className="text-white font-medium mb-4" />Contact</h3>
            <div className="space-y-3" /></div>
              <div className="flex items-center space-x-3" /></div>
                <Phone className="w-4 h-4 text-cyan-400" / />
                <span className="text-gray-300 text-sm" />{contactInfo.phone}</span>
              </div>
              <div className="flex items-center space-x-3" /></div>
                <Mail className="w-4 h-4 text-cyan-400" / />
                <span className="text-gray-300 text-sm" />{contactInfo.email}</span>
              </div>
              <div className="flex items-start space-x-3" /></div>
                <MapPin className="w-4 h-4 text-cyan-400 mt-0.5" / />
                <span className="text-gray-300 text-sm" />{contactInfo.address}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div /></div>
      <header className="bg-black/20 backdrop-blur-sm border-b border-white/10 relative z-50" /></header>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" /></div>
          <div className="flex justify-between items-center py-4" /></div>
            {/* Logo */}
            <Link to="/" className="text-2xl font-bold text-white group" /></Link>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:from-cyan-300 group-hover:to-purple-300 transition-all duration-300" /></span>
                Zion Tech Group
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-8" /></nav>
              
                  key={item.label}
                  className="relative group"
                  onMouseEnter={() =></di> setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    to={item.href}
                    className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300 relative group"
                   /></Link>
                    {item.icon}
                    <span />{item.label}</span>
                    <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" / />
                  </Link>
                  
                  {/* Enhanced Dropdown Menu */}
                  
                          <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${item.color} flex items-center justify-center`} /></div>
                            {item.icon}
                          </div>
                          <div /></div>
                            <h3 className="text-white font-semibold" />{item.label}</h3>
                            <p className="text-gray-400 text-sm">{item.description}</p>
                          </div>
                        </div>
                        <div className="space-y-1 max-h-96 overflow-y-auto" /></div>
                          
                              key={dropdownItem.href}
                              to={dropdownItem.href}
                              className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-700/50 transition-colors duration-200 group"
                            ></Lin></Link>
                              <div className="w-6 h-6 text-gray-400 group-hover:text-cyan-400 transition-colors" /></div>
                                {dropdownItem.icon}
                              </div>
                              <div className="flex-1" /></div>
                                <div className="text-sm text-gray-300 group-hover:text-cyan-400 transition-colors" /></div>
                                  {dropdownItem.label}
                                </div>
                                <div className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors" /></div>
                                  {dropdownItem.description}
                                </div>
                              </div>
                              <ArrowRight className="w-3 h-3 text-gray-400 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" / />
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Quick Links & CTA */}
            <div className="hidden md:flex items-center space-x-4" /></div>
              <div className="hidden lg:flex space-x-4" /></div>
                
                    key={link.href}
                    to={link.href}
                    className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm"
                  ></Lin></Link>
                    {link.icon}
                    <span />{link.label}</span>
                  </Link>
                ))}
              </div>
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105 flex"
               /></Link>
                Contact Us
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" / />
              </Link>
            </div>

            {/* Mobile Menu Buttons */}
            <div className="lg:hidden flex items-center space-x-2" /></div>
              <button
                onClick={() = /> setIsSidebarOpen(true)}
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 p-2"
              >
                <Menu className="w-6 h-6" / />
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          
                  <div key={item.label} /></div>
                    <Link
                      to={item.href}
                      className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-2"
                      onClick={() = /> setIsOpen(false)}
                    >
                      {item.icon}
                      <span className="font-medium" />{item.label}</span>
                    </Link>
                    <div className="ml-6 space-y-2" /></div>
                      
                          key={dropdownItem.href}
                          to={dropdownItem.href}
                          className="block text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-300 py-1"
                          onClick={() =></Lin> setIsOpen(false)}
                        >
                          {dropdownItem.label}
                        </Link>
                      ))}
                      
                          to={item.href}
                          className="block text-sm text-cyan-400 hover:text-cyan-300 transition-colors duration-300 py-1 font-medium"
                          onClick={() =></Lin> setIsOpen(false)}
                        >
                          View All →
                        </Link>
                      )}
                    </div>
                  </div>
                ))}
                
                <div className="pt-4 border-t border-white/10" /></div>
                  <div className="space-y-2" /></div>
                    
                        key={link.href}
                        to={link.href}
                        className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-2"
                        onClick={() =></Lin> setIsOpen(false)}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Sidebar */}
      <Sidebar / />
</div>
  );
};

export default ImprovedNavigation;
