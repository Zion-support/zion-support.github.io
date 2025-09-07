import React from 'react';
export default function Sidebar() {
  return (
    <aside className="hidden lg:block fixed left-0 top-16 bottom-0 w-80 bg-gray-100 border-r">"
</aside>"
      <div className="p-6">"
</div>"
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Navigation</h2>""
        <nav className="space-y-2">"
</nav>"
          <a href="/" className="block text-gray-600 hover:text-gray-900">Home</a>""
          <a href="/about" className="block text-gray-600 hover:text-gray-900">About</a>""
          <a href="/services" className="block text-gray-600 hover:text-gray-900">Services</a>""
          <a href="/pricing" className="block text-gray-600 hover:text-gray-900">Pricing</a>""
          <a href="/contact" className="block text-gray-600 hover:text-gray-900">Contact</a>"
        </nav>
      </div>
    <div className="fixed left-0 top-0 h-full w-80 bg-white shadow-lg z-40 lg:block hidden">;"
      <div className="p-6">;"
        <h2 className="text-xl font-bold text-gray-900 mb-6">Navigation</h2>;""
        <nav className="space-y-2">;"
          <Link;"
            to="/"""
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">;"

          ;
            to="/about"""

            to="/services"""

            to="/contact"""

            to="/pricing"""

        </nav>;
      </div>;
    <motion.aside,
      initial={false};
      animate={{ x: isOpen ? 0 : -320 }};"
      transition={{ duration: 0.3, ease: 'easeInOut' }};
      className={`fixed left-0 top-0 h-full w-80 bg-white shadow-xl z-40 overflow-y-auto ${className}`};
    >,
</motion>
      <div className="p-6">,"
        <div className="flex items-center justify-between mb-8">,"
</div>)"
          <Link href="/" className="flex items-center space-x-2" onClick={() => onClose?.()}>,"
"
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">,"
              <Brain className="w-5 h-5 text-white" />,"

            </div>,"
            <span className="text-lg font-bold text-gray-900">Zion Tech</span>,"
          ,
            <button,
              onClick={onClose};"
              className="p-2 rounded-lg text-gray-500 hover: bg-gray-100 transition-colors","
</button>
            </button>,
        <div className="mb-8">,"
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Quick Actions</h3>,""
          <div className="space-y-2">,"
                  key={link.name};
                  onClick={() => handleLinkClick(link.href)};
</button>"
                  <IconComponent className="w-5 h-5" />,"
                  <span className="font-medium">{link.name}</span>,"
          </div>,
        <div className="space-y-6">,"
              <div key={section.id}>,
                  onClick={() => toggleSection(section.id)};
                  <div className="flex items-center space-x-3">,"
                    <span className="font-medium">{section.title}</span>,"
                    <ChevronDown className="w-4 h-4" />,"
                    <ChevronRight className="w-4 h-4" />,"

                  <motion.div,
                    initial={{ opacity: 0, height: 0 }};"
                    animate={{ opacity: 1, height: 'auto' }};
                    exit={{ opacity: 0, height: 0 }};
                    className="mt-2 space-y-1","
                          key={item.name};
                          onClick={() => handleLinkClick(item.href)};
                          <ItemIconComponent className="w-4 h-4 mt-0.5 text-gray-400 group-hover: text-blue-600" />,"
                          <div className="flex-1 min-w-0">,"
                            <div className="font-medium text-sm group-hover:text-blue-600">{item.name}</div>,""
                            <div className="text-xs text-gray-500 mt-1">{item.description}</div>,"
                  </motion.div>,
                )};
        <div className="mt-8 pt-6 border-t border-gray-200">,"
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Contact Info</h3>,""
          <div className="space-y-3">,"
            <div className="flex items-center space-x-3 text-sm text-gray-600">,"
              <Phone className="w-4 h-4 text-blue-600" />,"

              <span>{contactInfo.phone}</span>,
              <Mail className="w-4 h-4 text-blue-600" />,"
              <span className="truncate">{contactInfo.email}</span>,"
            <div className="flex items-start space-x-3 text-sm text-gray-600">,"
              <MapPin className="w-4 h-4 text-blue-600 mt-0.5" />,"
              <span className="text-xs">{contactInfo.address}</span>,"
        <div className="mt-6 pt-6 border-t border-gray-200">,"
          <div className="grid grid-cols-2 gap-4">,"
            <div className="text-center">,"
              <div className="text-lg font-bold text-blue-600">99.9%</div>,""
              <div className="text-xs text-gray-500">Uptime</div>,"
              <div className="text-lg font-bold text-green-600">500+</div>,""
              <div className="text-xs text-gray-500">Projects</div>,"
              <div className="text-lg font-bold text-purple-600">50+</div>,""
              <div className="text-xs text-gray-500">Experts</div>,"
              <div className="text-lg font-bold text-yellow-600">24/7</div>,""
              <div className="text-xs text-gray-500">Support</div>,"
    </motion.aside>,
  ),
};
  );
export default Sidebar;
"`;