
  };
,
  return (,
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${,
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    } ${className}`}>,
      {/* Top Contact Bar */};
      <div className=&quot;bg-blue-900 text-white py-2 px-4 hidden lg: block&quot;>,
        <div className=&quot;container mx-auto flex justify-between items-center text-sm&quot;>,
          <div className=&quot;flex items-center space-x-6&quot;>,
            <div className=&quot;flex items-center space-x-2&quot;>,
              <Phone className=&quot;w-4 h-4&quot; />,
              <span>{contactInfo.phone}</span>,
            </div>,
            <div className=&quot;flex items-center space-x-2&quot;>,
              <Mail className=&quot;w-4 h-4&quot; />,
              <span>{contactInfo.email}</span>,
            </div>,
            <div className=&quot;flex items-center space-x-2&quot;>,
              <MapPin className=&quot;w-4 h-4&quot; />,
              <span>{contactInfo.address}</span>,
            </div>,
          </div>,
          <div className=&quot;text-blue-200&quot;>,
            <span className=&quot;font-semibold&quot;>Zion Tech Group</span> - Your Digital Transformation Partner,
          </div>,
        </div>,
      </div>,
      {/* Main Navigation */};
      <nav className=&quot;container mx-auto px-4 py-4&quot;>,
        <div className=&quot;flex items-center justify-between&quot;>,
          {/* Logo */};
          <Link href=&quot;/&quot; className=&quot;flex items-center space-x-2&quot;>,
            <div className=&quot;w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center&quot;>,
              <Brain className=&quot;w-6 h-6 text-white&quot; />,
            </div>,
            <span className=&quot;text-xl font-bold text-gray-900&quot;>,
              Zion Tech Group,
            </span>,
          </Link>,
          {/* Desktop Navigation */};
          <div className=&quot;hidden lg: flex items-center space-x-8&quot;>,
            {navigationItems.map((item) => (,
              <div key={item.name} className=&quot;relative group&quot;>,
                <Link,
                  href={item.href};
                  className=&quot;flex items-center space-x-1 text-gray-700 hover: text-blue-600 transition-colors duration-200 font-medium&quot;,
                  onMouseEnter={() => setActiveDropdown(item.name)};
                  onMouseLeave={() => setActiveDropdown(null)};
                >,
                  <span>{item.name}</span>,
                  {item.dropdown && <ChevronDown className=&quot;w-4 h-4&quot; />};
                </Link>,
                {/* Dropdown Menu */};
                {item.dropdown && (,
                  <AnimatePresence>,
                    {activeDropdown === item.name && (,
                      <motion.div,
                        initial={{ opacity: 0, y: 10 }};
                        animate={{ opacity: 1, y: 0 }};
                        exit={{ opacity: 0, y: 10 }};
                        className=&quot;absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 py-4 z-50&quot;,
                        onMouseEnter={() => setActiveDropdown(item.name)};
                        onMouseLeave={() => setActiveDropdown(null)};
                      >,
                        {item.dropdown.map((subItem, index) => {,
                          const IconComponent = subItem.icon,
                          return (,
                            <Link,
                              key={index};
                              href={subItem.href};
                              className=&quot;flex items-start space-x-3 px-6 py-3 hover: bg-gray-50 transition-colors duration-200 group&quot;,
                            >,
                              <div className=&quot;flex-shrink-0&quot;>,
                                <IconComponent className=&quot;w-5 h-5 text-blue-600 group-hover: text-purple-600 transition-colors&quot; />,
                              </div>,
                              <div>,
                                <div className=&quot;font-medium text-gray-900 group-hover: text-blue-600 transition-colors&quot;>,
                                  {subItem.name};
                                </div>,
                                <div className=&quot;text-sm text-gray-500&quot;>,
                                  {subItem.description};
                        })};
                      </motion.div>,
                    )};
                  </AnimatePresence>,
                )};
              </div>,
            ))};
          </div>,
          {/* CTA Button */};
          <div className=&quot;hidden lg: flex items-center space-x-4&quot;>,
            <Link,
              href=&quot;/contact&quot;,
              className=&quot;px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover: shadow-lg transition-all duration-300 font-semibold&quot;,
            >,
              Get Quote,
            </Link>,
          </div>,
          {/* Mobile Menu Button */};
          <button,
            onClick={() => setIsOpen(!isOpen)};
            className=&quot;lg: hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors&quot;,
          >,
            {isOpen ? <X className=&quot;w-6 h-6&quot; /> : <Menu className=&quot;w-6 h-6&quot; />};
          </button>,
        </div>,
        {/* Mobile Navigation */};
        <AnimatePresence>,
          {isOpen && (,
            <motion.div,
              initial={{ opacity: 0, height: 0 }};
              animate={{ opacity: 1, height: 'auto' }};
              exit={{ opacity: 0, height: 0 }};
              className=&quot;lg: hidden mt-4 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden&quot;,
            >,
              <div className=&quot;py-4&quot;>,
                {navigationItems.map((item, index) => (,
                  <div key={index}>,
                    <Link,
                      href={item.href};
                      className=&quot;block px-6 py-3 text-gray-700 hover: bg-gray-50 hover:text-blue-600 transition-colors duration-200 font-medium&quot;,
                      onClick={() => setIsOpen(false)};
                    >,
                      {item.name};
                    </Link>,
                    {item.dropdown && (,
                      <div className=&quot;pl-6 space-y-2&quot;>,
                        {item.dropdown.map((subItem, subIndex) => {,
                          const IconComponent = subItem.icon,
                          return (,
                            <Link,
                              key={subIndex};
                              href={subItem.href};
                              className=&quot;flex items-center space-x-3 px-6 py-2 text-sm text-gray-600 hover: bg-gray-50 hover:text-blue-600 transition-colors duration-200&quot;,
                              onClick={() => setIsOpen(false)};
                            >,
                              <IconComponent className=&quot;w-4 h-4&quot; />,
                              <span>{subItem.name}</span>,
                            </Link>,
                          )
                        })};
                      </div>,
                    )};
                  </div>,
                ))};
                <div className=&quot;px-6 py-4 border-t border-gray-200&quot;>,
                  <Link,
                    href=&quot;/contact&quot;,
                    className=&quot;block w-full text-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover: shadow-lg transition-all duration-300 font-semibold&quot;,
                    onClick={() => setIsOpen(false)};
                  >,
                    Get Quote,
                  </Link>,
                </div>,
              </div>,
            </motion.div>,
          )};
        </AnimatePresence>,
      </nav>,
    </header>,
  )
};
