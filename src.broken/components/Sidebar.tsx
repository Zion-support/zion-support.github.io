import { Link, useLocation  } from 'react-router-dom';
  return (<>
      {/* Mobile overlay */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 lg:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-bold text-gray-800">Zion Tech</h2>
          <button
            onClick={onToggle}
            className="lg:hidden p-2 rounded-md hover:bg-gray-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="p-4 space-y-2">
          {navigation.map((section) => (
            <div key={section.id} className="space-y-2">
              <button
                onClick={() => toggleSection(section.id)}
                className="flex items-center justify-between w-full p-2 text-left text-gray-700 hover:bg-gray-100 rounded-md"
              >
                <div className="flex items-center space-x-2">
                  <section.icon className="w-5 h-5" />
                  <span className="font-medium">{section.title}</span>
                </div>
                <ChevronRight
                  className={`w-4 h-4 transition-transform ${expandedSections.includes(section.id) ? 'rotate-90' : ''
                  }`}
                />
              </button>

              {expandedSections.includes(section.id) && (
                <div className="ml-6 space-y-1">
                  {section.links.map((link) => (
                    <Link
                      key={link.href}
                      to={link.href}
                      className={`flex items-center space-x-2 p-2 text-sm text-gray-600 hover:bg-gray-100 rounded-md ${location.pathname === link.href ? 'bg-blue-50 text-blue-600' : ''
                      }`}
                    >
                      <link.icon className="w-4 h-4" />
                      <span>{link.name}</span>
                    </Link>
                  ))}
                </div>
              )}
