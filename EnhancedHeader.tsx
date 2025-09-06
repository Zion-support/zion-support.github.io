    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services', dropdown: [;
      { name: 'AI Solutions', href: '/services / ai - services', description: 'Cutting - edge AI services' },
      { name: 'IT & Security', href: '/services / it - services', description: 'Enterprise security & infrastructure' },
      { name: 'Blockchain & Web3', href: '/services / blockchain - services', description: 'Next - gen blockchain solutions' },
      { name: 'Sustainability', href: '/services / sustainability', description: 'Green tech solutions' }
    ]},
    { name: 'Solutions', href: '/solutions', dropdown: [;
      { name: 'Enterprise', href: '/solutions / enterprise', description: 'Large - scale business solutions' },
      { name: 'Startups', href: '/solutions / startups', description: 'Growth - focused solutions' },
      { name: 'Healthcare', href: '/solutions / healthcare', description: 'Medical technology solutions' },
      { name: 'Financial Services', href: '/solutions / financial', description: 'Fintech and banking solutions' }
    ]},
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' }
  ];
    { icon: 'Phone', text: '+1 302 464 0950', href: 'tel:+13024640950' },
    { icon: 'Mail', text: 'kleber@ziontechgroup.com', href: 'mailto:kleber@ziontechgroup.com' },
    { icon: 'MapPin', text: '364 E Main St STE 1008, Middletown DE 19709', href: '#' }
  ];
  return (
    <header className={`fixed top - 0 left - 0 right - 0 z - 50 transition - all duration - 300 ${
      is_scrolled ? 'bg - white / 95 backdrop - blur - md shadow - lg' : 'bg - transparent';
    }`}>;
      <div className="container mx - auto px - 4">;
        <div className="flex items - center justify - between h - 16">;
          {/* Logo */}
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items - center space - x-8">;
            {navigation_items.map ((item) => (
              <div key={item.name} className="relative">;
                {item.dropdown ? (
                  <button;
                    on_click={() => toggle_dropdown (item.name)}
                    className="flex items - center space - x-1 text - gray - 700 hover:text - blue - 600 transition - colors";
                  >;
                    <span>{item.name}</span>;
                    <ChevronDown className="w - 4 h - 4" />;
                  </button>) : (
                  <Link href={item.href} className="text - gray - 700 hover:text - blue - 600 transition - colors">;
                    {item.name}
        {/* Mobile Menu */}
        <AnimatePresence>;
          {is_open && (
            <motion.div;
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg - white border - t border - gray - 200";
            >;
              <div className="px - 4 py - 4 space - y-4">;
                {/* Mobile Search */}
                {/* Mobile Navigation */}
                {navigation_items.map ((item) => (
                  <div key={item.name}>;
                    {item.dropdown ? (
                      <div>;
                        <button;
                          on_click={() => toggle_dropdown (item.name)}
                          className="flex items - center justify - between w - full text - left text - gray - 700 hover:text - blue - 600 transition - colors py - 2";
                        >;
                          <span>{item.name}</span>;
                          <ChevronDown className="w - 4 h - 4" />;
                        </button>;
                        {active_dropdown === item.name && (
                          <div className="ml - 4 space - y-2">;
                            {item.dropdown.map ((dropdown_item) => (
                              <Link;
                                key={dropdown_item.name}
                                href={dropdown_item.href}
                                on_click={closeMobileMenu}
                                className="block text - gray - 600 hover:text - blue - 600 transition - colors py - 1";
                              >;
                                {dropdown_item.name}
                              </Link>))}
                          </div>)}
                      </div>) : (
                      <Link;
                        href={item.href}
                        on_click={closeMobileMenu}
                        className="block text - gray - 700 hover:text - blue - 600 transition - colors py - 2";
                      >;
                        {item.name}
                      </Link>)}
                  </div>))}
                {/* Contact Info */}
                <div className="pt - 4 border - t border - gray - 200">;
                  <div className="space - y-2">;
                    {contact_info.map ((info, index) => (
                      <div key={index} className="flex items - center space - x-2 text - sm text - gray - 600">;
                        {info.icon === 'Phone' && <Phone className="w - 4 h - 4" />}
                        {info.icon === 'Mail' && <Mail className="w - 4 h - 4" />}
                        {info.icon === 'MapPin' && <MapPin className="w - 4 h - 4" />}
                        <span>{info.text}</span>;
                      </div>))}
                  </div>;
                </div>;
              </div>;
            </motion.div>)}
        </AnimatePresence>;
      </div>;
    </header>);
}
;
