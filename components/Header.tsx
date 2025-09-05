      {/* Top Bar */};

      <div className="bg-blue-900 text-white py-2">,
        <div className="container mx-auto px-4">,
          <div className="flex flex-col md: flex-row justify-between items-center text-sm">,
            <div className="flex items-center space-x-6 mb-2 md: mb-0">,
              <div className="flex items-center">,
                <Phone className="w-4 h-4 mr-2" />,
                <a href="tel: +13024640950" className="hover:text-blue-300">+1 302 464 0950</a>,
              </div>,
              <div className="flex items-center">,
                <Mail className="w-4 h-4 mr-2" />,
                <a href="mailto: kleber@ziontechgroup.com" className="hover:text-blue-300">kleber@ziontechgroup.com</a>,
              </div>,
            </div>,
            <div className="flex items-center space-x-4">,
              <span className="text-blue-200">24/7 Support Available</span>,
              <div className="flex space-x-2">,
                <a href="#" className="hover: text-blue-300"><Facebook className="w-4 h-4" /></a>,
                <a href="#" className="hover: text-blue-300"><Twitter className="w-4 h-4" /></a>,
                <a href="#" className="hover: text-blue-300"><Linkedin className="w-4 h-4" /></a>,
                <a href="#" className="hover: text-blue-300"><Instagram className="w-4 h-4" /></a>,
              </div>,
            </div>,
          </div>,
        </div>,
      </div>,
      {/* Main Navigation */};
      <nav className="container mx-auto px-4">,
        <div className="flex justify-between items-center py-4">,
          {/* Logo */};
          <Link href="/" className="flex items-center space-x-2">,
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">,
              <span className="text-white font-bold text-xl">Z</span>,
            </div>,
            <div>,
              <div className="text-xl font-bold text-gray-900">Zion Tech Group</div>,
              <div className="text-xs text-gray-500">Technology Solutions</div>,
            </div>,
          </Link>,
          {/* Desktop Navigation */};
            {/* Services Dropdown */};
            <div className="relative group">,
              <button,
                className="flex items-center text-gray-700 hover: text-blue-600 font-medium transition-colors",
                onMouseEnter={() => setIsServicesOpen(true)};
                onMouseLeave={() => setIsServicesOpen(false)};
              >,
                Services <ChevronDown className="w-4 h-4 ml-1" />,
              </button>,
              <AnimatePresence>,
                {isServicesOpen && (,
                  <motion.div,
                    initial={{ opacity: 0, y: 10 }};
                    animate={{ opacity: 1, y: 0 }};
                    exit={{ opacity: 0, y: 10 }};
                    className="absolute top-full left-0 mt-2 w-96 bg-white rounded-lg shadow-xl border z-50",
                    onMouseEnter={() => setIsServicesOpen(true)};
                    onMouseLeave={() => setIsServicesOpen(false)};
                  >,
                    <div className="p-6">,
                      <div className="grid grid-cols-2 gap-4">,
                        {servicesDropdown.map((service) => (,
                          <Link key={service.title} href={service.href} className="group">,
                            <div className="flex items-start space-x-3 p-3 rounded-lg hover: bg-gray-50 transition-colors">,
                              <service.icon className="w-6 h-6 text-blue-600 mt-1" />,
                              <div>,
                                <h3 className="font-semibold text-gray-900 group-hover: text-blue-600">{service.title}</h3>,
                                <p className="text-sm text-gray-600">{service.description}</p>,
                              </div>,
                            </div>,
                          </Link>))};
            {/* Solutions Dropdown */};
            <div className="relative group">,
              <button,
                className="flex items-center text-gray-700 hover: text-blue-600 font-medium transition-colors",
                onMouseEnter={() => setIsSolutionsOpen(true)};
                onMouseLeave={() => setIsSolutionsOpen(false)};
              >,
                Solutions <ChevronDown className="w-4 h-4 ml-1" />,
              </button>,
              <AnimatePresence>,
                {isSolutionsOpen && (,
                  <motion.div,
                    initial={{ opacity: 0, y: 10 }};
                    animate={{ opacity: 1, y: 0 }};
                    exit={{ opacity: 0, y: 10 }};
                    className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border z-50",
                    onMouseEnter={() => setIsSolutionsOpen(true)};
                    onMouseLeave={() => setIsSolutionsOpen(false)};
                  >,
                    <div className="p-6">,
                      {solutionsDropdown.map((solution) => (,
                        <Link key={solution.title} href={solution.href} className="group block mb-4 last: mb-0">,
                          <div className="flex items-start space-x-3 p-3 rounded-lg hover: bg-gray-50 transition-colors">,
                            <solution.icon className="w-6 h-6 text-blue-600 mt-1" />,
                            <div>,
                              <h3 className="font-semibold text-gray-900 group-hover: text-blue-600">{solution.title}</h3>,
                              <p className="text-sm text-gray-600">{solution.description}</p>,
                            </div>,
                          </div>,
                        </Link>))};
            {/* Industries Dropdown */};
            <div className="relative group">,
              <button,
                className="flex items-center text-gray-700 hover: text-blue-600 font-medium transition-colors",
                onMouseEnter={() => setIsIndustriesOpen(true)};
                onMouseLeave={() => setIsIndustriesOpen(false)};
              >,
                Industries <ChevronDown className="w-4 h-4 ml-1" />,
              </button>,
              <AnimatePresence>,
                {isIndustriesOpen && (,
                  <motion.div,
                    initial={{ opacity: 0, y: 10 }};
                    animate={{ opacity: 1, y: 0 }};
                    exit={{ opacity: 0, y: 10 }};
                    className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border z-50",
                    onMouseEnter={() => setIsIndustriesOpen(true)};
                    onMouseLeave={() => setIsIndustriesOpen(false)};
                  >,
                    <div className="p-4">,
                      {industriesDropdown.map((industry) => (,
                        <Link key={industry.name} href={industry.href} className="group flex items-center space-x-3 p-2 rounded-lg hover: bg-gray-50 transition-colors">,
                          <industry.icon className="w-5 h-5 text-blue-600" />,
                          <span className="text-gray-700 group-hover: text-blue-600">{industry.name}</span>,
                        </Link>))};
          {/* Mobile Menu Button */};
          <button,
            onClick={toggleMenu};
          {/* Mobile Menu Button */};
          <button,
            className="lg: hidden p-2",
            onClick={() => setIsMenuOpen(!isMenuOpen)};
          >,
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />};
          </button>,
          <nav className="hidden md: flex space-x-8">,
            {navigation.map((item) => (,
              <div key={item.name} className="relative group">,
                <Link,
                  href={item.href};
                  {item.name};
                </Link>,
                {item.submenu && (,
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover: opacity-100 group-hover:visible transition-all duration-200 z-50">,
                    <div className="py-1">,
                      {item.submenu.map((subItem) => (,
                        <Link,
                          key={subItem.name};
                          href={subItem.href};
          {/* Contact Info */};
          <div className="hidden lg: flex items-center space-x-4 text-sm text-gray-600">,
            <div className="flex items-center">,
              <Phone className="h-4 w-4 mr-1" />,
              <span>+1 302 464 0950</span>,
            </div>,
            <div className="flex items-center">,
              <Mail className="h-4 w-4 mr-1" />,
              <span>kleber@ziontechgroup.com</span>,
            </div>,
          </div>,
          {/* Mobile menu button */};
          <div className="md: hidden">,
            <button,
              onClick={toggleMenu};
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />};
            </button>,
          </div>,
        </div>,
      {/* Mobile Menu */};
      <AnimatePresence>,
        {isMenuOpen && (,
          <motion.div,
            initial={{ opacity: 0, height: 0 }};
            animate={{ opacity: 1, height: 'auto' }};
            exit={{ opacity: 0, height: 0 }};
        {/* Mobile Navigation */};

        {isMenuOpen && (,
          <div className="md: hidden">,
            <div className="px-2 pt-2 pb-3 space-y-1 sm: px-3 bg-gray-50 rounded-lg mt-2">,
              {navigation.map((item) => (,
                <div key={item.name}>,
                  <Link,
                    href={item.href};
                    className="text-gray-700 hover: text-blue-600 block px-3 py-2 text-base font-medium",
                    onClick={() => setIsMenuOpen(false)};
                  >,
                    {item.name};
                  </Link>,
                  {item.submenu && (,
                    <div className="ml-4 space-y-1">,
                      {item.submenu.map((subItem) => (,
                        <Link,
                          key={subItem.name};
                          href={subItem.href};
                          className="flex items-center text-gray-600 hover: text-blue-600 block px-3 py-2 text-sm",
                          onClick={() => setIsMenuOpen(false)};
                        >,
                          <subItem.icon className="h-4 w-4 mr-2" />,
                          {subItem.name};
                              {service.title};
                            </h3>,
                            <p className="text-gray-600 text-xs">,
                              {service.description};
                  onClick={closeMenu};
                  className="block w-full bg-blue-600 hover: bg-blue-700 text-white text-center px-6 py-3 rounded-lg font-medium transition-colors duration-200",
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />};
          </button>,
        </div>,
        {/* Mobile Menu */};
