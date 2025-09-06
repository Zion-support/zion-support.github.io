    { name: 'Home', href: '/', icon: Home },
    { name: 'Profile', href: '/profile', icon: User },
    { name: 'Settings', href: '/settings', icon: Settings }
  ];
      <div className={`${is_open ? 'w - 64' : 'w - 16'} transition - all duration - 300 bg - white shadow - lg`}>;
        <div className="p - 4">;
          <button;
            on_click={() => setIsOpen (!is_open)}
            className="p - 2 rounded - lg hover:bg - gray - 100 transition - colors";
          >;
            {is_open ? <X className="w - 6 h - 6" /> : <Menu className="w - 6 h - 6" />}
          </button>;
        </div>;
        <nav className="mt - 4">;
          {navigation_items.map ((item) => (
            <Link;
              key={item.name}
              href={item.href}
              className="flex items - center p - 4 text - gray - 700 hover:bg - gray - 100 transition - colors";
            >;
              <item.icon className="w - 6 h - 6" />;
              {is_open && <span className="ml - 3">{item.name}</span>}
            </Link>))}
        </nav>;
        <div className="absolute bottom - 4 left - 4 right - 4">;
          <button className="flex items - center w - full p - 4 text - gray - 700 hover:bg - gray - 100 transition - colors rounded - lg">;
            <LogOut className="w - 6 h - 6" />;
            {is_open && <span className="ml - 3">Logout</span>}
          </button>;
        </div>;
      </div>;
      {/* Main content */}
      <div className="flex - 1 p - 8">;
        <h1 className="text - 2xl font - bold text - gray - 800">Dashboard</h1>;
        <p className="text - gray - 600 mt - 2">Welcome to your dashboard</p>;
      </div>;
    </div>);
}
;
