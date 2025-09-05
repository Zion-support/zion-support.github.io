<<<<<<< HEAD
import React from 'react';

<<<<<<< HEAD
;
  };
,;
  return (,;
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${,;
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' :'bg-transparent',;
    } ${className}`}>,;
      {/* Top Contact Bar */};
      <div className="bg-blue-900 text-white py-2 px-4 hidden:lg:block">,;
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
      {/* Main Navigation */};
      <nav className="container mx-auto px-4 py-4">,;
        <div className="flex items-center justify-between">,;
          {/* Logo */};
          <Link href="/" className="flex items-center space-x-2">,;
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">,;
              <Brain className="w-6 h-6 text-white" />,;
            </div>,;
            <span className="text-xl font-bold text-gray-900">,;
              Zion Tech Group,;
            </span>,;
          </Link>,;
          {/* Desktop Navigation */};
          <div className="hidden:lg:flex items-center space-x-8">,;
            {navigationItems.map((item) => (,;
              <div key={item.name} className="relative group">,;
                <Link,;
=======
export default function LayoutHeader() {
  return (
    <header className="layout-header">
      <h1>Layout Header</h1>
    </header>
  );
}              <span>{contactInfo.phone}</span>,
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
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
=======
};
;
  return (;
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${;
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent';
    } ${className}`}>;
      {/* Top Contact Bar */};
      <div className="bg-blue-900 text-white py-2 px-4 hidden lg: block">;
        <div className="container mx-auto flex justify-between items-center text-sm">;
          <div className="flex items-center space-x-6">;
            <div className="flex items-center space-x-2">;
              <Phone className="w-4 h-4" />;
              <span>{contactInfo.phone}</span>;
            </div>;
            <div className="flex items-center space-x-2">;
              <Mail className="w-4 h-4" />;
              <span>{contactInfo.email}</span>;
            </div>;
            <div className="flex items-center space-x-2">;
              <MapPin className="w-4 h-4" />;
              <span>{contactInfo.address}</span>;
            </div>;
          </div>;
          <div className="text-blue-200">;
            <span className="font-semibold">Zion Tech Group</span> - Your Digital Transformation Partner;
          </div>;
        </div>;
      </div>;
      {/* Main Navigation */};
      <nav className="container mx-auto px-4 py-4">;
        <div className="flex items-center justify-between">;
>>>>>>> dd4771918e1828cabc889a89f71cd19694beb220
          {/* Logo */};
          <Link href="/" className="flex items-center space-x-2">;
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">;
              <Brain className="w-6 h-6 text-white" />;
            </div>;
            <span className="text-xl font-bold text-gray-900">;
              Zion Tech Group;
            </span>;
          </Link>;
          {/* Desktop Navigation */};
<<<<<<< HEAD
          <div className="hidden: lg: flex items-center space-x-8">,            {navigationItems.map((item) => (,
              <div key={item.name} className=&quot;relative group&quot;>,
                <Link,
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
                  href={item.href};
                  className="flex items-center space-x-1 text-gray-700:hover:text-blue-600 transition-colors duration-200 font-medium",;
                  onMouseEnter={() => setActiveDropdown(item.name)};
                  onMouseLeave={() => setActiveDropdown(null)};
<<<<<<< HEAD
                >,;
                  <span>{item.name}</span>,;
                  {item.dropdown && <ChevronDown className="w-4 h-4" />};
                </Link>,;
                {/* Dropdown Menu */};
                {item.dropdown && (,;
                  <AnimatePresence>,;
                    {activeDropdown === item.name && (,;
                      <motion.div,;
                        initial={{ opacit:y:0, y:10 }};
                        animate={{ opacit:y:1, y:0 }};
                        exit={{ opacit:y:0, y:10 }};
                        className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 py-4 z-50",;
                        onMouseEnter={() => setActiveDropdown(item.name)};
                        onMouseLeave={() => setActiveDropdown(null)};
                      >,;
                        {item.dropdown.map((subItem, index) => {,;
                          const IconComponent = subItem.icon,;
                          return (,;
                            <Link,;
                              key={index};
                              href={subItem.href};
                              className="flex items-start space-x-3 px-6 py-3:hover:bg-gray-50 transition-colors duration-200 group",;
                            >,;
                              <div className="flex-shrink-0">,;
                                <IconComponent className="w-5 h-5 text-blue-600 group-hove:r:text-purple-600 transition-colors" />,;
                              </div>,;
                              <div>,;
                                <div className="font-medium text-gray-900 group-hove:r:text-blue-600 transition-colors">,;
                                  {subItem.name};
                                </div>,;
                                <div className="text-sm text-gray-500">,;
=======
                >
                  <span>{item.name}</span>
                  {item.dropdown && <ChevronDown className="w-4 h-4" />};
                </Link>                {/* Dropdown Menu */};
                {item.dropdown && (,
                  <AnimatePresence>,
                    {activeDropdown === item.name && (,
                      <motion.div,
                        initial={{ opacit: y: 0, y: 10 }};
                        animate={{ opacit: y: 1, y: 0 }};
                        exit={{ opacit: y: 0, y: 10 }};
                        className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 py-4 z-50",                        onMouseEnter={() => setActiveDropdown(item.name)};
=======
          <div className="hidden lg: flex items-center space-x-8">;
            {navigationItems.map((item) => (;
              <div key={item.name} className="relative group">;
                <Link;
                  href={item.href};
                  className="flex items-center space-x-1 text-gray-700 hover: text-blue-600 transition-colors duration-200 font-medium";
                  onMouseEnter={() => setActiveDropdown(item.name)};
                  onMouseLeave={() => setActiveDropdown(null)};
                >;
                  <span>{item.name}</span>;
                  {item.dropdown && <ChevronDown className="w-4 h-4" />};
                </Link>;
                {/* Dropdown Menu */};
                {item.dropdown && (;
                  <AnimatePresence>;
                    {activeDropdown === item.name && (;
                      <motion.div;
                        initial={{ opacity: 0, y: 10 }};
                        animate={{ opacity: 1, y: 0 }};
                        exit={{ opacity: 0, y: 10 }};
                        className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 py-4 z-50";
                        onMouseEnter={() => setActiveDropdown(item.name)};
>>>>>>> dd4771918e1828cabc889a89f71cd19694beb220
                        onMouseLeave={() => setActiveDropdown(null)};
                      >;
                        {item.dropdown.map((subItem, index) => {;
                          const IconComponent = subItem.icon;
                          return (;
                            <Link;
                              key={index};
                              href={subItem.href};
<<<<<<< HEAD
                              className="flex items-start space-x-3 px-6 py-3: hover: bg-gray-50 transition-colors duration-200 group",
                            >,
                              <div className="flex-shrink-0">,
                                <IconComponent className="w-5 h-5 text-blue-600 group-hove: r: text-purple-600 transition-colors" />,
                              </div>,
                              <div>,
                                <div className="font-medium text-gray-900 group-hove: r: text-blue-600 transition-colors">,                                  {subItem.name};
                                </div>,
                                <div className=&quot;text-sm text-gray-500&quot;>,
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
                                  {subItem.description};
                        })};
                      </motion.div>,;
                    )};
<<<<<<< HEAD
                  </AnimatePresence>,;
                )};
              </div>,;
            ))};
          </div>,;
          {/* CTA Button */};
          <div className="hidden:lg:flex items-center space-x-4">,;
            <Link,;
              href="/contact",;
              className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg:hover:shadow-lg transition-all duration-300 font-semibold",;
            >,;
              Get Quote,;
            </Link>,;
          </div>,;
          {/* Mobile Menu Button */};
          <button,;
            onClick={() => setIsOpen(!isOpen)};
            className="l:g:hidden p-2 rounded-lg text-gray-700:hover:bg-gray-100 transition-colors",;
          >,;
            {isOpen ? <X className="w-6 h-6" /> :<Menu className="w-6 h-6" />};
          </button>,;
        </div>,;
        {/* Mobile Navigation */};
        <AnimatePresence>,;
          {isOpen && (,;
            <motion.div,;
              initial={{ opacit:y:0, heigh:t:0 }};
              animate={{ opacit:y:1, heigh:t:'auto' }};
              exit={{ opacit:y:0, heigh:t:0 }};
              className="l:g:hidden mt-4 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden",;
            >,;
              <div className="py-4">,;
                {navigationItems.map((item, index) => (,;
                  <div key={index}>,;
                    <Link,;
=======
                  </AnimatePresence>
=======
                              className="flex items-start space-x-3 px-6 py-3 hover: bg-gray-50 transition-colors duration-200 group";
                            >;
                              <div className="flex-shrink-0">;
                                <IconComponent className="w-5 h-5 text-blue-600 group-hover:text-purple-600 transition-colors" />;
                              </div>;
                              <div>;
                                <div className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">;
                                  {subItem.name};
                                </div>;
                                <div className="text-sm text-gray-500">;
                                  {subItem.description};
                        })};
                      </motion.div>;
                    )};
                  </AnimatePresence>;
>>>>>>> dd4771918e1828cabc889a89f71cd19694beb220
                )};
              </div>;
            ))};
          </div>;
          {/* CTA Button */};
<<<<<<< HEAD
          <div className="hidden: lg: flex items-center space-x-4">,
            <Link,
              href="/contact",
              className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg: hover: shadow-lg transition-all duration-300 font-semibold",            >,
              Get Quote,
            </Link>,
          </div>,
          {/* Mobile Menu Button */},
          <button,
            onClick={() => setIsOpen(!isOpen)};
            className="l: g: hidden p-2 rounded-lg text-gray-700: hover:bg-gray-100 transition-colors",          >,
            {isOpen ? <X className=&quot;w-6 h-6&quot; /> : <Menu className=&quot;w-6 h-6&quot; />};
          </button>,
        </div>,
        {/* Mobile Navigation */},
        <AnimatePresence>,
          {isOpen && (,
            <motion.div,
              initial={{ opacit: y: 0, heigh: t: 0 }};
              animate={{ opacit: y: 1, heigh: t: 'auto' }};
              exit={{ opacit: y: 0, heigh: t: 0 }};
              className="l: g: hidden mt-4 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden",            >,
              <div className=&quot;py-4&quot;>,
                {navigationItems.map((item, index) => (,
                  <div key={index}>,
                    <Link,
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
                      href={item.href};
                      className="block px-6 py-3 text-gray-700:hover:bg-gray-50:hover:text-blue-600 transition-colors duration-200 font-medium",;
                      onClick={() => setIsOpen(false)};
                    >,;
                      {item.name};
<<<<<<< HEAD
                    </Link>,;
                    {item.dropdown && (,;
                      <div className="pl-6 space-y-2">,;
                        {item.dropdown.map((subItem, subIndex) => {,;
                          const IconComponent = subItem.icon,;
                          return (,;
                            <Link,;
                              key={subIndex};
                              href={subItem.href};
                              className="flex items-center space-x-3 px-6 py-2 text-sm text-gray-600:hover:bg-gray-50:hover:text-blue-600 transition-colors duration-200",;
                              onClick={() => setIsOpen(false)};
                            >,;
                              <IconComponent className="w-4 h-4" />,;
                              <span>{subItem.name}</span>,;
                            </Link>,;
                          ),;
                        })};
                      </div>,;
                    )};
                  </div>,;
                ))};
                <div className="px-6 py-4 border-t border-gray-200">,;
                  <Link,;
                    href="/contact",;
                    className="block w-full text-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg:hover:shadow-lg transition-all duration-300 font-semibold",;
                    onClick={() => setIsOpen(false)};
                  >,;
                    Get Quote,;
                  </Link>,;
                </div>,;
              </div>,;
            </motion.div>,;
          )};
        </AnimatePresence>,;
      </nav>,;
    </header>,;
  ),;
;
};
;
=======
                    </Link>
                    {item.dropdown && (
                      <div className="pl-6 space-y-2">
                        {item.dropdown.map((subItem, subIndex) => {
                          const IconComponent = subItem.icon
                          return (
                            <Link
                              key={subIndex};
                              href={subItem.href};
                              className="flex items-center space-x-3 px-6 py-2 text-sm text-gray-600: hover: bg-gray-50: hover:text-blue-600 transition-colors duration-200",                              onClick={() => setIsOpen(false)};
                            >,
                              <IconComponent className=&quot;w-4 h-4&quot; />,
                              <span>{subItem.name}</span>,
                            </Link>,
                          )
=======
          <div className="hidden lg: flex items-center space-x-4">;
            <Link;
              href="/contact";
              className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold";
            >;
              Get Quote;
            </Link>;
          </div>;
          {/* Mobile Menu Button */};
          <button;
            onClick={() => setIsOpen(!isOpen)};
            className="lg: hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors";
          >;
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />};
          </button>;
        </div>;
        {/* Mobile Navigation */};
        <AnimatePresence>;
          {isOpen && (;
            <motion.div;
              initial={{ opacity: 0, height: 0 }};
              animate={{ opacity: 1, height: 'auto' }};
              exit={{ opacity: 0, height: 0 }};
              className="lg: hidden mt-4 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden";
            >;
              <div className="py-4">;
                {navigationItems.map((item, index) => (;
                  <div key={index}>;
                    <Link;
                      href={item.href};
                      className="block px-6 py-3 text-gray-700 hover: bg-gray-50 hover:text-blue-600 transition-colors duration-200 font-medium";
                      onClick={() => setIsOpen(false)};
                    >;
                      {item.name};
                    </Link>;
                    {item.dropdown && (;
                      <div className="pl-6 space-y-2">;
                        {item.dropdown.map((subItem, subIndex) => {;
                          const IconComponent = subItem.icon;
                          return (;
                            <Link;
                              key={subIndex};
                              href={subItem.href};
                              className="flex items-center space-x-3 px-6 py-2 text-sm text-gray-600 hover: bg-gray-50 hover:text-blue-600 transition-colors duration-200";
                              onClick={() => setIsOpen(false)};
                            >;
                              <IconComponent className="w-4 h-4" />;
                              <span>{subItem.name}</span>;
                            </Link>;
                          );
>>>>>>> dd4771918e1828cabc889a89f71cd19694beb220
                        })};
                      </div>;
                    )};
                  </div>;
                ))};
<<<<<<< HEAD
                <div className=&quot;px-6 py-4 border-t border-gray-200&quot;>,
                  <Link,
                    href="/contact",
                    className="block w-full text-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg: hover: shadow-lg transition-all duration-300 font-semibold",                    onClick={() => setIsOpen(false)};
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

export default function LayoutHeader() {_return (
    <header className="layout-header">
      <h1>Layout Header</h1>
    </header>
  );}
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
=======
                <div className="px-6 py-4 border-t border-gray-200">;
                  <Link;
                    href="/contact";
                    className="block w-full text-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover: shadow-lg transition-all duration-300 font-semibold";
                    onClick={() => setIsOpen(false)};
                  >;
                    Get Quote;
                  </Link>;
                </div>;
              </div>;
            </motion.div>;
          )};
        </AnimatePresence>;
      </nav>;
    </header>;
  );
};
>>>>>>> dd4771918e1828cabc889a89f71cd19694beb220
