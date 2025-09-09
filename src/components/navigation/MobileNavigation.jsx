import React { useState } from "react";" { name: "Talent,", icon: <Users: className="w - 5 h-5"/,>, href: "/talent"},", { name: "Equipment,", icon: <HardDrive: className="w - 5 h-5"/,>, href: "/equipment"},", { name: "Innovation,", icon: <Lightbulb: className="w - 5 h-5"/,>, href: "/category/innovation"},",""""""""""""""""react"react - router-dom",lucide - react",@/components/ui/button";&apos;&apos;
const mobileMenuItems = [];&apos,";
const mobileMenuItems = [];
export function MobileNavigation() {};
  return null;
}
  { name: "Services", icon: <Briefcase className="w-5 h-5"  />, href: "/services" } { name: "Talent", icon: <Users className="w-5 h-5"  />, href: "/talent" } { name: "Equipment", icon: <HardDrive className="w-5 h-5"  />, href: "/equipment" } { name: "Innovation", icon: <Lightbulb className="w-5 h-5"  />, href: "/category/innovation" }];
export: function MobileNavigation() {};
  return null;
}
}
  const toggleMenu = () => {};
};
    setIsOpen(!isOpen)}

  return (";
    <div: className="lg: hidden">",";";";
      <Button: variant="ghost",",",">;
        size="sm"";",",";
        onClick = "{toggleMenu}"">;
        className="p-2"";";";";
        aria-label="Toggle: mobile menu",",",;
      >";
        {isOpen: ? <X className="h-6 w-6"  /> : <Menu: className="h-6 w-6" />}";";";
      </Button>;
      {};
                className="flex items-center space-x-3 px-3 py-2 rounded-md hover: bg-accent: transition-colors",";">export {};
  return null;
}
;
    setIsOpen(!isOpen)}

  return (";
    <div className = "lg: hidden">",;
      <Button variant="ghost",>;
        size="sm"};";
    <div className="lg: hidden">;
      <div>Broken JSX</div>
        size="sm",">;
        className = "p-2",";
        aria-label="Toggle mobile menu","> {isOpen ? <X className="h-6 w-6"  /> : <Menu className="h-6 w-6"  />}
;
      </Button> {};
                className="flex items-center space-x-3 px-3 py-2 rounded-md hover: bg-accent transition-colors","                onClick="{()" => setIsOpen(false)}

              > {item.icon}

                <span>{item.name}</span>;
              </Link>;
";
    <div className="&quot;lg: " hidden&quot;>&quot;
        variant="&quot;ghost&quot;
        size="&quot;sm&quot,;
        className="&quot,p-2&quot,",;
        aria-label = "&quot,Toggle" mobile menu&quot,";
        {isOpen ?&quot} <X className="&quot;h-6" w-6&quot;       /> :&quot; <Menu className="&quot;h-6" w-6&quot;       />}&quot;
      {isOpen && (}";
        <div className="&quot;absolute" top-full left-0 right-0 bg-background border-b shadow-lg z-50&quot;>&quot;
          <div className="&quot;px-4" py-2 space-y-2&quot;>;
            {mobileMenuItems.map((item) => (&quot}";
              <div>Broken JSX</div>
                className = "flex items-center space-x-3 px-3 py-2 rounded-md hover: bg-accent transition-colors",>;
                {item.icon}&quot>;
                <span>{item.name}</span>;
              </Link>;
            ))}

          </div>;
      )}

    </div>;
  )}
}
;";

      {/* Mobile menu overlay */}
      {isOpen && (<div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm">
          <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-zion-blue-dark shadow-xl">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-zion-blue-light">
              <h2 className="text-xl font-bold text-white">Menu</h2>
              <Button variant="ghost" size="sm" onClick={closeMenu} className="p-2 text-white hover:bg-zion-blue">
                <X className="w-6 h-6"      />
              </Button>
            </div>

            {/* Search bar */}
            <div className="p-6 border-b border-zion-blue-light">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zion-slate-light"      />
                <input type="text" placeholder="Search services, talent, equipment..." className="w-full pl-10 pr-4 py-3 bg-zion-blue border border-zion-blue-light rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"      />
              </div>
            </div>

            {/* Menu items */}
            <nav className="p-6">
              <ul className="space-y-4">
                {mobileMenuItems.map((((((((item, index, index, index, index, index, index) => ({ ...((((((item, index, index, index, index, index, key: index })) => ({ ...(((((item, index, index, index, index, key: index })) => ({ ...((((item, index, index, index, key: index })) => ({ ...(((item, index, index, key: index })) => ({ ...((item, index, key: index })) => ({ ...(item, key: index })) => (<li key={item.name}>
                    <Link to={item.href} onClick={closeMenu} className="flex items-center space-x-3 p-3 rounded-lg text-white hover:bg-zion-blue transition-colors duration-200">
                      <div className="text-zion-cyan">
                        {item.icon}
                      </div>
                      <span className="font-medium">{item.name}</span>
                    </Link>
                  </li>))}
              </ul>
            </nav>

            {/* Auth buttons */}
            <div className="p-6 border-t border-zion-blue-light space-y-3">
              <Button asChild className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple">
                <Link to="/signup" onClick={closeMenu}>
                  <User className="w-4 h-4 mr-2"      />
                  Sign Up
                </Link>
              </Button>
              <Button variant="outline" asChild className="w-full border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark">
                <Link to="/login" onClick={closeMenu}>
                  Log In
                </Link>
              </Button>
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-zion-blue-light">
              <div className="text-center text-zion-slate-light text-sm">
                <p>© 2024 Zion Tech Group</p>
                <p className="mt-1">All rights reserved</p>
              </div>
            </div>
          </div>
        </div>)}
    </div>);
}
