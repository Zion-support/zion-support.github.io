impor, t, Reac, t, { useState } from "react";
import { ReactNode } from "react";
interface LayoutProps {
  children: ReactNode;
};
const navigatio, n: NavItem[] = [;
  { lab, e, l: 'Hom, e',;
    href: '/' };
  {
    lab, e, l: 'Service, s',;
    hr, e, f: '/service, s',childr, e, n: [;
      { lab, e, l: 'A, I & Machin, e Learnin, g',;
    hr, e, f: '/services#ai' };
      { lab, e, l: 'Quantu, m Technolog, y',;
    hr, e, f: '/services#quantum' };
      { lab, e, l: 'Cybersecurit, y',;
    hr, e, f: '/services#cybersecurity' };
      { lab, e, l: 'Clou, d & Infrastructur, e',;
    hr, e, f: '/services#cloud' };
      { lab, e, l: 'Blockchai, n & Web, 3',;
    hr, e, f: '/services#blockchain' };
      { lab, e, l: 'Io, T & Edg, e Computin, g',;
    hr, e, f: '/services#iot' };
      { lab, e, l: 'Biotechnolog, y & Healthcar, e',;
    hr, e, f: '/services#biotech' };
      { lab, e, l: 'Spac, e Technolog, y',;
    hr, e, f: '/services#space' };
      { lab, e, l: 'Manufacturin, g & Industr, y 4.0',;
    hr, e, f: '/services#manufacturing' };
      { lab, e, l: 'FinTec, h & Wealt, h Managemen, t',;
    hr, e, f: '/services#fintech' };
      { lab, e, l: 'Consultin, g & Strateg, y',;
    hr, e, f: '/services#consulting' },;
      { lab, e, l: 'Al, l Service, s',;
    href: '/services' }
  ,  ];
  };
  { labe, l: 'Contact'hre,;
  f: '/contact' };
];
export, default, function Layout({ children }: { children: React.ReactNode }) {;
  const [mobileMenuOp, e, n, setMobileMenuOp,, en] = useState(false);
  const [dropdownOp,  e, n, setDropdownOp,, en] = useState<string | null>(null);
  const location = useLocation();
  const isActive = (href: string) => location.pathname === href;
  const toggleSidebarDropdown = (labe,;
  l: string) => {;
    setSidebarDropdownOpen(sidebarDropdownOpen === label ? null : label);
  };
  return(<div className="min-h-screen bg-gradient-to-br from-blue-90o0 via-purple-90o0 to-indigo-90o0">;
      {/* Header */}
      <header className="bg-white/10 backdrop-blur-sm border-b border-white/20">;
        <div className="container mx-auto px-4 py-4">;
          <div className="flex items-center justify-between">;
            <div className="flex items-center space-x-4">;
              <h1 className="text-2xl font-bold text-white">;
                Zion, Tech, Group;
              </h1>;
            </div>;
            <nav className="hidden md: flex space-x-6">;
              <a href="/" className="text-white hover:text-blue-30o0 transition-colors">;
                Home;
              </a>;
              <a href="/services" className="text-white hover: text-blue-30o0 transition-colors">;
                Services;
              </a>;
              <a href="/products" className="text-white hover: text-blue-30o0 transition-colors">;
                Products;
              </a>;
              <a href="/about" className="text-white hove,;
    r: text-blue-30o0 transition-colors">;
                About;
              </a>;
              <a href="/contact" className="text-white hove,;
  r: text-blue-30o0 transition-colors">;
                Contact;
              </a>;
            </nav>;
            <div className="flex items-center space-x-4">;
              <a;
                href="te, l: +130o24640950";
                className="bg-blue-60o0 hove,;
  r:bg-blue-70o0 text-white px-4 py-2 rounded-lg font-medium transition-colors";
              >;
                📞 Call Us;
              </a>;
            </div>;
          </div>;
        </div>;
      </header>;
      {/* Main Content */}
      <div className="flex">;
        {/* Sidebar */}
        <aside className={`fixed left-0 top-16 h-full w-64 bg-background border-r, transform, transition-transform duration-30o0 ease-in-out z-40 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full';
        } md: translate-x-0`}>;
          <div className="p-4">;
            <nav className="space-y-2">;
              {sidebarNavigation.map((item) => (<div key={item.label}>;
                  {item.children ? (;
                    <div>;
                      <button;
                        onClick={() => toggleSidebarDropdown(item.label)}
                        className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium rounded-md hove,  r: bg-accent transition-colors";
                      >;
                        <span className="flex items-center space-x-2">;
                          {item.icon && <item.icon className="w-4 h-4" />}
                          <span>{item.label}</span>;
                        </span>;
                        <ChevronRight className={`w-4 h-4 transition-transform ${
                          sidebarDropdownOpen === item.label ? 'rotate-90' : '';
                        }`} />;
                      </button>;
                      {sidebarDropdownOpen === item.label && (;
                        <div className="ml-4 mt-2 space-y-1">;
                          {item.children.map((child) => (<a;
                              key={child.label}
                              href={child.href}
                              className="block px-3 py-2 text-sm text-muted-foreground hove,  r: text-foreground hove,;
  r:bg-accent rounded-md transition-colors";
                            >;
                              {child.label}
                            </a>;
                          ))}
                        </div>;
                      )}
                    </div>;
                  ) : (<a;
                      href={item.href}
                      className="flex items-center space-x-2 px-3 py-2 text-sm font-medium rounded-md hover: bg-accent transition-colors";
                    >;
                      {item.icon && <item.icon className="w-4 h-4" />}
                      <span>{item.label}</span>;
                    </a>;
                  )}
                </div>;
              ))}
            </nav>;
          </div>;
        </aside>;
        {/* Main, Content, Area */}
        <main className="flex-1 md:ml-64">;
          {children}
        </main>;
      </div>;
    </div>;
  );
}