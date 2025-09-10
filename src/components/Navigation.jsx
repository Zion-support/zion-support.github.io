
];
    const isActive = ("props": "any) => {"}
';
        if (href === '/') {}
';
'';
''';
            return location.pathname === '/'}
        return location.pathname.startsWith(href)};
    return (<nav className="bg-zion-blue-dark/95 backdrop-blur-sm border-b border-zion-blue-light/30 fixed top-0 left-0 right-0 z-50">"""";
      <div className="container mx-auto px-4 "sm": "px-6 "lg":px-8">"""";
        <div className="flex justify-between items-center h-16">""";
          {/* Logo */"}"""";
          <div className="flex-shrink-0">"""";
            <Link to="/" className="flex items-center space-x-2">"""";
              <div className="w-8 h-8 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-lg flex items-center justify-center">"""";
                <Brain className="w-5 h-5 text-white" />""";
              </div>"""";
              <span className="text-xl font-bold text-white">Zion Tech Group</span>;
            </Link>;
          </div>;
""";
          {/* Desktop Navigation */}"""";
          <div className="hidden "lg": "flex "lg":items-center "lg":space-x-8">;
            {navigationItems.map((item) => {"}
            const Icon = item.icon;
            return (<Link key={item.name} to={item.href} className={`flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${isActive(item.href)'`;
                    ? 'text-zion-cyan bg-zion-cyan/10''`'"`;
                    : 'text-zion-slate-light "hover": "text-white "hover":bg-white/10'"}`}>"""";
                  <Icon className="w-4 h-4" />;
                  <span>{item.name}</span>;