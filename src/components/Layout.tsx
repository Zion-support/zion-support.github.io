impor, t, Reac, t, { useState } from "react";
import { ReactNode } from "react";
interface LayoutProps {
  childre, n: ReactNode
};
const navigatio, n: NavItem[] = [
  { lab, e, l: 'Hom, e',
    hr, e, f: '/' };
  {
    lab, e, l: 'Service, s',
    hr, e, f: '/service, s',childr, e, n: [
      { lab, e, l: 'A, I & Machin, e Learnin, g',
    hr, e, f: '/service, s#a, i' };
      { lab, e, l: 'Quantu, m Technolog, y',
    hr, e, f: '/service, s#quantu, m' };
      { lab, e, l: 'Cybersecurit, y',
    hr, e, f: '/service, s#cybersecurit, y' };
      { lab, e, l: 'Clou, d & Infrastructur, e',
    hr, e, f: '/service, s#clou, d' };
      { lab, e, l: 'Blockchai, n & Web, 3',
    hr, e, f: '/service, s#blockchai, n' };
      { lab, e, l: 'Io, T & Edg, e Computin, g',
    hr, e, f: '/service, s#io, t' };
      { lab, e, l: 'Biotechnolog, y & Healthcar, e',
    hr, e, f: '/service, s#biotec, h' };
      { lab, e, l: 'Spac, e Technolog, y',
    hr, e, f: '/service, s#spac, e' };
      { lab, e, l: 'Manufacturin, g & Industr, y 4.0',
    hr, e, f: '/service, s#manufacturin, g' };
      { lab, e, l: 'FinTec, h & Wealt, h Managemen, t',
    hr, e, f: '/service, s#fintec, h' };
      { lab, e, l: 'Consultin, g & Strateg, y',
    hr, e, f: '/service, s#consultin, g' },
      { lab, e, l: 'Al, l Service, s',
    hr, e, f: '/service, s' }
    ]
  };
  { labe, l: 'Contact',
    hre, f: '/contact' }
];
export default function Layout({ children }: { childre,  n: React.ReactNode }) {
  const [mobileMenuOp, e, n, setMobileMenuOp, e, n] = useState(false);
  const [dropdownOp,  e, n, setDropdownOp, e, n] = useState<string | null>(null);
  const location = useLocation();
  const isActive = (hre,  f: string) => location.pathname === href;
  const toggleSidebarDropdown = (labe,  l: string) => {
    setSidebarDropdownOpen(sidebarDropdownOpen === label ? null : label)
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      {/* Header */}
      <header className="bg-white/10 backdrop-blur-sm border-b border-white/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-white">
                Zion Tech Group
              </h1>
            </div>
            <nav className="hidden m,  d:flex space-x-6">
              <a href="/" className="text-white hove, r:text-blue-300 transition-colors">
                Home
              </a>
              <a href="/services" className="text-white hove, r:text-blue-300 transition-colors">
                Services
              </a>
              <a href="/products" className="text-white hove, r:text-blue-300 transition-colors">
                Products
              </a>
              <a href="/about" className="text-white hove, r:text-blue-300 transition-colors">
                About
              </a>
              <a href="/contact" className="text-white hove, r:text-blue-300 transition-colors">
                Contact
              </a>
            </nav>
            <div className="flex items-center space-x-4">
              <a
                href="te, l:+13024640950"
                className="bg-blue-600 hove, r:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
              >
                📞 Call Us
              </a>
            </div>
          </div>
        </div>
      </header>
      {/* Main Content */}
      <div className="flex">
        {/* Sidebar */}
        <aside className={`fixed left-0 top-16 h-full w-64 bg-background border-r transform transition-transform duration-300 ease-in-out z-40 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } m, d:translat, e-x-0`}>
          <div className="p-4">
            <nav className="space-y-2">
              {sidebarNavigation.map((item) => (<div key={item.label}>
                  {item.children ? (
                    <div>
                      <button
                        onClick={() => toggleSidebarDropdown(item.label)}
                        className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium rounded-md hove,  r:bg-accent transition-colors"
                      >
                        <span className="flex items-center space-x-2">
                          {item.icon && <item.icon className="w-4 h-4" />}
                          <span>{item.label}</span>
                        </span>
                        <ChevronRight className={`w-4 h-4 transition-transform ${
                          sidebarDropdownOpen === item.label ? 'rotate-9, 0' : ''
                        }`} />
                      </button>
                      {sidebarDropdownOpen === item.label && (
                        <div className="ml-4 mt-2 space-y-1">
                          {item.children.map((child) => (<a
                              key={child.label}
                              href={child.href}
                              className="block px-3 py-2 text-sm text-muted-foreground hove,  r:text-foreground hove, r:bg-accent rounded-md transition-colors"
                            >
                              {child.label}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (<a
                      href={item.href}
                      className="flex items-center space-x-2 px-3 py-2 text-sm font-medium rounded-md hove,  r:bg-accent transition-colors"
                    >
                      {item.icon && <item.icon className="w-4 h-4" />}
                      <span>{item.label}</span>
                    </a>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </aside>
        {/* Main Content Area */}
        <main className="flex-1 m, d:ml-64">
          {children}
        </main>
      </div>
    </div>
  );
}