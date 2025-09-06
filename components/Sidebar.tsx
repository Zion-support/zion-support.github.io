

interface SidebarProps {}
  isOpen: boolean;
  onClose: () => void;
}


  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div;
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={onClose}
          />
          {/* Sidebar */}
          <motion.div;
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}'
            exit={{ x: '-100%' }}

          >"
            <div className="p-6">
              {/* Header */}"
              <div className="flex items-center justify-between mb-8">"
                <div className="flex items-center space-x-2">"
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">"
                    <Building2 className="w-8 h-8 text-white" />
                  </div>"
                  <span className="text-xl font-bold text-gray-900">Zion Tech Group</span>
                </div>
                <button;
                  onClick={onClose}

                >"
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Navigation */}"
              <nav className="space-y-4">
                {Object.entries(navigation).map(([title, links]) => (
                  <div key={title}>
                    <button;
                      onClick={() => handleDropdownToggle(title)}

              {/* Quick Links */}"
              <div className="mt-8 pt-8 border-t border-gray-200">"
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>"
                <div className="space-y-2">
                  {quickLinks.map((link) => (
                    <Link;
                      key={link.name}
                      href={link.href}"
                      className="block text-gray-600 hover:text-blue-600 transition-colors py-1"
                      onClick={onClose}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>

              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );


'"