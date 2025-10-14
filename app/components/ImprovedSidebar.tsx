import React from "react";
import { Helmet } from "react-helmet-async";
const ImprovedSidebarPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>ImprovedSidebar - Zion Tech Group</title>
        <meta name="description" content="Professional ImprovedSidebar services by Zion Tech Group." />
        <meta name="keywords" content="ImprovedSidebar, AI solutions, IT services" />
      </Helmet>
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            ImprovedSidebar
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional ImprovedSidebar services designed to help your business grow and succeed.
          </p>
        </div>
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300">
            <h3 className="text-xl font-semibold text-white mb-3">Expert Solutions</h3>
            <p className="text-gray-300">
              Our team of experts provides cutting-edge solutions tailored to your specific needs.
            </p>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300">
            <h3 className="text-xl font-semibold text-white mb-3">24/7 Support</h3>
            <p className="text-gray-300">
              Round-the-clock support to ensure your systems run smoothly at all times.
            </p>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300">
            <h3 className="text-xl font-semibold text-white mb-3">Proven Results</h3>
            <p className="text-gray-300">
              Track record of delivering successful projects and exceeding client expectations.
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto py-4">
            {/* Main Navigation */}
            <div className="px-4 mb-6">
              <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                Main
              </h3>
              <ul className="space-y-1">
                {mainNavigation.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                        isActive(item.href)
                          ? 'bg-cyan-600 text-white'
                          : 'text-gray-300 hover:bg-slate-800 hover:text-white'
                      }`}
                    >
                      <item.icon className="h-5 w-5" />
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Service Sections */}
            {serviceSections.map((section) => (
              <div key={section.id} className="px-4 mb-6">
                <button
                  onClick={() => toggleSection(section.id)}
                  className="flex items-center justify-between w-full px-3 py-2 rounded-lg text-sm font-medium text-gray-300 hover:bg-slate-800 hover:text-white transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-6 h-6 bg-gradient-to-r ${section.color} rounded flex items-center justify-center`}>
                      <section.icon className="w-4 h-4 text-white" />
                    </div>
                    <span>{section.title}</span>
                  </div>
                  <ChevronDownIcon 
                    className={`w-4 h-4 transition-transform ${
                      expandedSections.has(section.id) ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
                
                {expandedSections.has(section.id) && (
                  <ul className="mt-2 space-y-1">
                    {section.links.map((link) => (
                      <li key={link.name}>
                        <Link
                          to={link.href}
                          onClick={() => setIsOpen(false)}
                          className={`block px-6 py-2 rounded-lg text-sm font-medium transition-colors ${
                            isActive(link.href)
                              ? 'bg-cyan-600 text-white'
                              : 'text-gray-300 hover:bg-slate-800 hover:text-white'
                          }`}
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};
export default ImprovedSidebarPage;
