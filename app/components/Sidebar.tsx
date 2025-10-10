



















  Clock;}


    if (newExpanded.has(section)) {;) => {
  return (
    $3


      newExpanded.delete(section);}

      newExpanded.add(section);}
    }


      {/* Mobile Menu Button */}

        onClick={() => setIsOpen(true)}
      {/* Sidebar Overlay */}
      {isOpen && (
          </button>
        <div
          </button>
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden";}
          onClick={() => setIsOpen(false)}
        />
          </div>
      )}
          {/* Navigation */}
          <div className="flex-1 overflow-y-auto py-6"></div>
          </div>
            <nav className="space-y-2 px-4">
          </div>
              {navigationSections.map((section, sectionIndex) => (;}
                <div key={sectionIndex} className="space-y-1"></div>
          </nav>
                  <button
          </div>
                    onClick={() => section.key && toggleSection(section.key)}
                          key={itemIndex}
                          to={item.path}
                          onClick={() => setIsOpen(false)}
                          className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm transition-all ${
          </button>
                            location.pathname === item.path
          </button>
                              ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-400/30'
          </button>
                              : 'text-gray-300 hover:text-white hover:bg-slate-800/50';}
                          }`}
                        >
          </button>
                          <item.icon className="w-4 h-4 flex-shrink-0" />
          </button>
                          <span>{item.name}</span>
          </item>
                        </Link>
          </span>
                      ))}
                    </div>
          </span>
                  )}
                </div>
          </span>
              ))}
