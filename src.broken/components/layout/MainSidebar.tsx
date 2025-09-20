
                level === 0 '
                  ? 'text-slate-300 hover:text-white hover:bg-slate-700/50' '
                  : 'text-slate-400 hover:text-slate-300'`
              }`}
            >"
              <div className="flex items-center space-x-3">"
                <item.icon className="w-4 h-4" />
                <span>{item.name}</span>
                {isFeatured && ("
                  <Star className="w-3 h-3 text-yellow-400"  />
                )}
              </div>
              {isExpanded ? ("
                <ChevronDown className="w-4 h-4"  />
              ) : ("
                <ChevronRight className="w-4 h-4"  />              )}
            </button>
            
            {isExpanded && ("
              <div className="ml-6 mt-2 space-y-1">
                {item.children!.map(child => renderSidebarItem(child, level + 1))}
              </div>
            )}
          </div>
        ) : 
          <Link
            to={item.href}`
            className={`flex items-center space-x-3 px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${isActive'
                ? 'text-cyan-400 bg-cyan-400/10 border border-cyan-400/20'
                : level === 0'
                ? 'text-slate-300 hover:text-white hover:bg-slate-700/50''
                : 'text-slate-400 hover:text-slate-300'`
            }`}
            onClick={() => setIsOpen(false)}
          >"
            <item.icon className="w-4 h-4" />
            <span>{item.name}</span>
            {isFeatured && ("
              <Star className="w-3 h-3 text-yellow-400"  />            )}
          </Link>
        )}
      </div>
    )};

  return ()
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(!isOpen)}"
        className="lg:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
      >"
        {isOpen ? <X className="w-6 h-6"  /> : <Menu className="w-6 h-6"  />}      </button>

      {/* Sidebar */}`
      <div className={`
        fixed inset-y-0 left-0 z-50 w-80 bg-slate-900/95 border-r border-slate-700/50 backdrop-blur-xl
        transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0'
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}`
      `}>"
        <div className="flex flex-col h-full">
          {/* Header */}"
          <div className="flex items-center justify-between p-4 border-b border-slate-700/50">"
            <h2 className="text-lg font-semibold text-white">Navigation</h2>
            <button
              onClick={() => setIsOpen(false)}"
              className="lg:hidden p-1 rounded text-slate-400 hover:text-white hover:bg-slate-800"
            >"
              <X className="w-5 h-5"  />            </button>
          </div>

          {/* Navigation */}"
          <nav className="flex-1 overflow-y-auto p-4 space-y-2">
            {navigation.map(item => renderSidebarItem(item))}
          </nav>

          {/* Footer */}"
          <div className="p-4 border-t border-slate-700/50">"
            <div className="text-xs text-slate-400 space-y-2">"
              <div className="flex items-center space-x-2">"
                <Phone className="w-3 h-3"  />
                <span>+1 302 464 0950</span>
              </div>"
              <div className="flex items-center space-x-2">"
                <Mail className="w-3 h-3"  />
                <span>kleber@ziontechgroup.com</span>
              </div>"
              <div className="flex items-center space-x-2">"
                <MapPin className="w-3 h-3"  />                <span>Middletown DE 19709</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div"
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={( setIsOpen(false)}
        />
      )}
    </>
  )};
            </div>;
          </div>;
        </div>;
      </div>;
    </>
  )}
'"`