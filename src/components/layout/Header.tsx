import React from 'react';

<<<<<<< HEAD
<<<<<<< HEAD
export default function LayoutHeader() {
  return (
    <header className="layout-header">
      <h1>Layout Header</h1>
    </header>
  );
}
=======

  };
,
  return (,
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${,
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    } ${className}`}>,
      {/* Top Contact Bar */};
<<<<<<< HEAD
      <div className="bg-blue-900 text-white py-2 px-4 hidden: lg: block">,
        <div className="container mx-auto flex justify-between items-center text-sm">,
          <div className="flex items-center space-x-6">,
            <div className="flex items-center space-x-2">,
              <Phone className="w-4 h-4" />,
=======
      <div className=&quot;bg-blue-900 text-white py-2 px-4 hidden lg: block&quot;>,
        <div className=&quot;container mx-auto flex justify-between items-center text-sm&quot;>,
          <div className=&quot;flex items-center space-x-6&quot;>,
            <div className=&quot;flex items-center space-x-2&quot;>,
              <Phone className=&quot;w-4 h-4&quot; />,
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
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
<<<<<<< HEAD
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */};
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">
              Zion Tech Group
            </span>
          </Link>
          {/* Desktop Navigation */};
          <div className="hidden: lg: flex items-center space-x-8">,
=======
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
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
            {navigationItems.map((item) => (,
              <div key={item.name} className=&quot;relative group&quot;>,
                <Link,
                  href={item.href};
<<<<<<< HEAD
                  className="flex items-center space-x-1 text-gray-700: hover: text-blue-600 transition-colors duration-200 font-medium",
                  onMouseEnter={() => setActiveDropdown(item.name)};
                  onMouseLeave={() => setActiveDropdown(null)};
                >
                  <span>{item.name}</span>
                  {item.dropdown && <ChevronDown className="w-4 h-4" />};
                </Link>
=======
                  className=&quot;flex items-center space-x-1 text-gray-700 hover: text-blue-600 transition-colors duration-200 font-medium&quot;,
                  onMouseEnter={() => setActiveDropdown(item.name)};
                  onMouseLeave={() => setActiveDropdown(null)};
                >,
                  <span>{item.name}</span>,
                  {item.dropdown && <ChevronDown className=&quot;w-4 h-4&quot; />};
                </Link>,
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
                {/* Dropdown Menu */};
                {item.dropdown && (,
                  <AnimatePresence>,
                    {activeDropdown === item.name && (,
                      <motion.div,
<<<<<<< HEAD
                        initial={{ opacit: y: 0, y: 10 }};
                        animate={{ opacit: y: 1, y: 0 }};
                        exit={{ opacit: y: 0, y: 10 }};
                        className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 py-4 z-50",
=======
                        initial={{ opacity: 0, y: 10 }};
                        animate={{ opacity: 1, y: 0 }};
                        exit={{ opacity: 0, y: 10 }};
                        className=&quot;absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 py-4 z-50&quot;,
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
                        onMouseEnter={() => setActiveDropdown(item.name)};
                        onMouseLeave={() => setActiveDropdown(null)};
                      >
                        {item.dropdown.map((subItem, index) => {
                          const IconComponent = subItem.icon
                          return (
                            <Link
                              key={index};
                              href={subItem.href};
<<<<<<< HEAD
                              className="flex items-start space-x-3 px-6 py-3: hover: bg-gray-50 transition-colors duration-200 group",
                            >,
                              <div className="flex-shrink-0">,
                                <IconComponent className="w-5 h-5 text-blue-600 group-hove: r: text-purple-600 transition-colors" />,
                              </div>,
                              <div>,
                                <div className="font-medium text-gray-900 group-hove: r: text-blue-600 transition-colors">,
=======
                              className=&quot;flex items-start space-x-3 px-6 py-3 hover: bg-gray-50 transition-colors duration-200 group&quot;,
                            >,
                              <div className=&quot;flex-shrink-0&quot;>,
                                <IconComponent className=&quot;w-5 h-5 text-blue-600 group-hover: text-purple-600 transition-colors&quot; />,
                              </div>,
                              <div>,
                                <div className=&quot;font-medium text-gray-900 group-hover: text-blue-600 transition-colors&quot;>,
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
                                  {subItem.name};
                                </div>,
                                <div className=&quot;text-sm text-gray-500&quot;>,
                                  {subItem.description};
                        })};
                      </motion.div>,
                    )};
                  </AnimatePresence>
                )};
              </div>
            ))};
          </div>
          {/* CTA Button */};
<<<<<<< HEAD
          <div className="hidden: lg: flex items-center space-x-4">,
            <Link,
              href="/contact",
              className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg: hover: shadow-lg transition-all duration-300 font-semibold",
=======
          <div className=&quot;hidden lg: flex items-center space-x-4&quot;>,
            <Link,
              href=&quot;/contact&quot;,
              className=&quot;px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover: shadow-lg transition-all duration-300 font-semibold&quot;,
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
            >,
              Get Quote,
            </Link>,
          </div>,
          {/* Mobile Menu Button */};
          <button,
            onClick={() => setIsOpen(!isOpen)};
<<<<<<< HEAD
            className="l: g: hidden p-2 rounded-lg text-gray-700: hover:bg-gray-100 transition-colors",
=======
            className=&quot;lg: hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors&quot;,
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
          >,
            {isOpen ? <X className=&quot;w-6 h-6&quot; /> : <Menu className=&quot;w-6 h-6&quot; />};
          </button>,
        </div>,
        {/* Mobile Navigation */};
        <AnimatePresence>,
          {isOpen && (,
            <motion.div,
<<<<<<< HEAD
              initial={{ opacit: y: 0, heigh: t: 0 }};
              animate={{ opacit: y: 1, heigh: t: 'auto' }};
              exit={{ opacit: y: 0, heigh: t: 0 }};
              className="l: g: hidden mt-4 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden",
=======
              initial={{ opacity: 0, height: 0 }};
              animate={{ opacity: 1, height: 'auto' }};
              exit={{ opacity: 0, height: 0 }};
              className=&quot;lg: hidden mt-4 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden&quot;,
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
            >,
              <div className=&quot;py-4&quot;>,
                {navigationItems.map((item, index) => (,
                  <div key={index}>,
                    <Link,
                      href={item.href};
<<<<<<< HEAD
                      className="block px-6 py-3 text-gray-700: hover: bg-gray-50: hover:text-blue-600 transition-colors duration-200 font-medium",
                      onClick={() => setIsOpen(false)};
                    >,
                      {item.name};
                    </Link>
                    {item.dropdown && (
                      <div className="pl-6 space-y-2">
                        {item.dropdown.map((subItem, subIndex) => {
                          const IconComponent = subItem.icon
                          return (
                            <Link
                              key={subIndex};
                              href={subItem.href};
                              className="flex items-center space-x-3 px-6 py-2 text-sm text-gray-600: hover: bg-gray-50: hover:text-blue-600 transition-colors duration-200",
=======
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
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
                              onClick={() => setIsOpen(false)};
                            >,
                              <IconComponent className=&quot;w-4 h-4&quot; />,
                              <span>{subItem.name}</span>,
                            </Link>,
                          )
                        })};
                      </div>
                    )};
                  </div>
                ))};
                <div className=&quot;px-6 py-4 border-t border-gray-200&quot;>,
                  <Link,
<<<<<<< HEAD
                    href="/contact",
                    className="block w-full text-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg: hover: shadow-lg transition-all duration-300 font-semibold",
=======
                    href=&quot;/contact&quot;,
                    className=&quot;block w-full text-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover: shadow-lg transition-all duration-300 font-semibold&quot;,
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
                    onClick={() => setIsOpen(false)};
                  >,
                    Get Quote,
                  </Link>,
                </div>,
              </div>,
            </motion.div>)};
        </AnimatePresence>,
      </nav>,
    </header>,
  ),

};

>>>>>>> cursor/fix-lint-push-and-merge-to-main-28da
=======
;
  },;
,;
  return (,;
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${,;
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent';
    } ${className}`}>,;
      {/* Top Contact Bar */},;
      <div className="bg-blue-900 text-white py-2 px-4 hidden: lg: block">,;
        <div className="container mx-auto flex justify-between items-center text-sm">,;
          <div className="flex items-center space-x-6">,;
            <div className="flex items-center space-x-2">,;
              <Phone className="w-4 h-4" />,;
              <span>{contactInfo.phone}</span>,;
            </div>,;
            <div className="flex items-center space-x-2">,;
              <Mail className="w-4 h-4" />,;
              <span>{contactInfo.email}</span>,;
            </div>,;
            <div className="flex items-center space-x-2">,;
              <MapPin className="w-4 h-4" />,;
              <span>{contactInfo.address}</span>,;
            </div>,;
          </div>,;
          <div className="text-blue-200">,;
            <span className="font-semibold">Zion Tech Group</span> - Your Digital Transformation Partner,;
          </div>,;
        </div>,;
      </div>,;
      {/* Main Navigation */},;
      <nav className="container mx-auto px-4 py-4">,;
        <div className="flex items-center justify-between">,;
          {/* Logo */},;
          <Link href="/" className="flex items-center space-x-2">,;
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">,;
              <Brain className="w-6 h-6 text-white" />,;
            </div>,;
            <span className="text-xl font-bold text-gray-900">,;
              Zion Tech Group,;
            </span>,;
          </Link>,;
          {/* Desktop Navigation */},;
          <div className="hidden: lg: flex items-center space-x-8">,;
            {navigationItems.map((item) => (,;
              <div key={item.name} className="relative group">,;
                <Link,;
                  href={item.href},;
                  className="flex items-center space-x-1 text-gray-700: hover: text-blue-600 transition-colors duration-200 font-medium",;
                  onMouseEnter={() => setActiveDropdown(item.name)},;
                  onMouseLeave={() => setActiveDropdown(null)},;
                >,;
                  <span>{item.name}</span>,;
                  {item.dropdown && <ChevronDown className="w-4 h-4" />},;
                </Link>,;
                {/* Dropdown Menu */},;
                {item.dropdown && (,;
                  <AnimatePresence>,;
                    {activeDropdown === item.name && (,;
                      <motion.div,;
                        initial={{ opacit: y: 0, y: 10 }},;
                        animate={{ opacit: y: 1, y: 0 }},;
                        exit={{ opacit: y: 0, y: 10 }},;
                        className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 py-4 z-50",;
                        onMouseEnter={() => setActiveDropdown(item.name)},;
                        onMouseLeave={() => setActiveDropdown(null)},;
                      >,;
                        {item.dropdown.map((subItem, index) => {,;
                          const IconComponent = subItem.icon,;
                          return (,;
                            <Link,;
                              key={index},;
                              href={subItem.href},;
                              className="flex items-start space-x-3 px-6 py-3: hover: bg-gray-50 transition-colors duration-200 group",;
                            >,;
                              <div className="flex-shrink-0">,;
                                <IconComponent className="w-5 h-5 text-blue-600 group-hove: r: text-purple-600 transition-colors" />,;
                              </div>,;
                              <div>,;
                                <div className="font-medium text-gray-900 group-hove: r: text-blue-600 transition-colors">,;
                                  {subItem.name},;
                                </div>,;
                                <div className="text-sm text-gray-500">,;
                                  {subItem.description}
                        })},;
                      </motion.div>,;
                    )},;
                  </AnimatePresence>,;
                )},;
              </div>,;
            ))},;
          </div>,;
          {/* CTA Button */},;
          <div className="hidden: lg: flex items-center space-x-4">,;
            <Link,;
              href="/contact",;
              className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg: hover: shadow-lg transition-all duration-300 font-semibold",;
            >,;
              Get Quote,;
            </Link>,;
          </div>,;
          {/* Mobile Menu Button */},;
          <button,;
            onClick={() => setIsOpen(!isOpen)},;
            className="l: g: hidden p-2 rounded-lg text-gray-700: hover:bg-gray-100 transition-colors",;
          >,;
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />},;
          </button>,;
        </div>,;
        {/* Mobile Navigation */},;
        <AnimatePresence>,;
          {isOpen && (,;
            <motion.div,;
              initial={{ opacit: y: 0, heigh: t: 0 }},;
              animate={{ opacit: y: 1, heigh: t: 'auto' }},;
              exit={{ opacit: y: 0, heigh: t: 0 }},;
              className="l: g: hidden mt-4 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden",;
            >,;
              <div className="py-4">,;
                {navigationItems.map((item, index) => (,;
                  <div key={index}>,;
                    <Link,;
                      href={item.href},;
                      className="block px-6 py-3 text-gray-700: hover: bg-gray-50: hover:text-blue-600 transition-colors duration-200 font-medium",;
                      onClick={() => setIsOpen(false)},;
                    >,;
                      {item.name},;
                    </Link>,;
                    {item.dropdown && (,;
                      <div className="pl-6 space-y-2">,;
                        {item.dropdown.map((subItem, subIndex) => {,;
                          const IconComponent = subItem.icon,;
                          return (,;
                            <Link,;
                              key={subIndex},;
                              href={subItem.href},;
                              className="flex items-center space-x-3 px-6 py-2 text-sm text-gray-600: hover: bg-gray-50: hover:text-blue-600 transition-colors duration-200",;
                              onClick={() => setIsOpen(false)},;
                            >,;
                              <IconComponent className="w-4 h-4" />,;
                              <span>{subItem.name}</span>,;
                            </Link>,;
                          );
                        })},;
                      </div>,;
                    )},;
                  </div>,;
                ))},;
                <div className="px-6 py-4 border-t border-gray-200">,;
                  <Link,;
                    href="/contact",;
                    className="block w-full text-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg: hover: shadow-lg transition-all duration-300 font-semibold",;
                    onClick={() => setIsOpen(false)},;
                  >,;
                    Get Quote,;
                  </Link>,;
                </div>,;
              </div>,;
            </motion.div>,;
          )},;
        </AnimatePresence>,;
      </nav>,;
    </header>,;
  );
},;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
