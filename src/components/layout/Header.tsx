

  },
,
  return (,
    <header className = $2;
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    } ${className}`}>,
      {/* Top Contact Bar */},
      <div className = $2;
        <div className = $2;
          <div className = $2;
            <div className = $2;
              <Phone className = $2;
              <span>{contactInfo.phone}</span>,
            </div>,
            <div className = $2;
              <Mail className = $2;
              <span>{contactInfo.email}</span>,
            </div>,
            <div className = $2;
              <MapPin className = $2;
              <span>{contactInfo.address}</span>,
            </div>,
          </div>,
          <div className = $2;
            <span className = $2;
          </div>,
        </div>,
      </div>,
      {/* Main Navigation */},
      <nav className = $2;
        <div className = $2;
          {/* Logo */},
          <Link href = $2;
            <div className = $2;
              <Brain className = $2;
            </div>,
            <span className = $2;
              Zion Tech Group,
            </span>,
          </Link>,
          {/* Desktop Navigation */},
          <div className = $2;
            {navigationItems.map((item) => (,
              <div key = $2;
                <Link,
                  href = $2;
                  className = $2;
                  onMouseEnter = $2;
                  onMouseLeave = $2;
                >,
                  <span>{item.name}</span>,
                  {item.dropdown && <ChevronDown className = $2;
                </Link>,
                {/* Dropdown Menu */},
                {item.dropdown && (,
                  <AnimatePresence>,
                    {activeDropdown = $2;
                      <motion.div,
                        initial={{ opacit: 0, y: 10}},
                        animate={{ opacit: 1, y: 0}},
                        exit={{ opacit: 0, y: 10}},
                        className = $2;
                        onMouseEnter = $2;
                        onMouseLeave = $2;
                      >,
                        {item.dropdown.map((subItem, index) => {,
                          const IconComponent = $2;
                          return (,
                            <Link,
                              key = $2;
                              href = $2;
                              className = $2;
                            >,
                              <div className = $2;
                                <IconComponent className = $2;
                              </div>,
                              <div>,
                                <div className = $2;
                                  {subItem.name},
                                </div>,
                                <div className = $2;
                                  {subItem.description}
                        })},
                      </motion.div>,
                    )},
                  </AnimatePresence>,
                )},
              </div>,
            ))},
          </div>,
          {/* CTA Button */},
          <div className = $2;
            <Link,
              href = $2;
              className = $2;
            >,
              Get Quote,
            </Link>,
          </div>,
          {/* Mobile Menu Button */},
          <button,
            onClick = $2;
            className = $2;
          >,
            {isOpen ? <X className = $2;
          </button>,
        </div>,
        {/* Mobile Navigation */},
        <AnimatePresence>,
          {isOpen && (,
            <motion.div,
              initial={{ opacit: 0, heigh: 0}},
              animate={{ opacit: 1, heigh: 'auto' }},
              exit={{ opacit: 0, heigh: 0}},
              className = $2;
            >,
              <div className = $2;
                {navigationItems.map((item, index) => (,
                  <div key = $2;
                    <Link,
                      href = $2;
                      className = $2;
                      onClick = $2;
                    >,
                      {item.name},
                    </Link>,
                    {item.dropdown && (,
                      <div className = $2;
                        {item.dropdown.map((subItem, subIndex) => {,
                          const IconComponent = $2;
                          return (,
                            <Link,
                              key = $2;
                              href = $2;
                              className = $2;
                              onClick = $2;
                            >,
                              <IconComponent className = $2;
                              <span>{subItem.name}</span>,
                            </Link>,
                          )
                        })},
                      </div>,
                    )},
                  </div>,
                ))},
                <div className = $2;
                  <Link,
                    href = $2;
                    className = $2;
                    onClick = $2;
                  >,
                    Get Quote,
                  </Link>,
                </div>,
              </div>,
            </motion.div>,
          )},
        </AnimatePresence>,
      </nav>,
    </header>,
  )

},

