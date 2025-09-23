import React from 'react';
import { ReactNode } from 'react';
interface LayoutProps {
  children: ReactNode;
}
const navigation: NavItem[] = [
  { label: 'Home', href: '/' },
  { 
    label: 'Services', 
    href: '/services',
    children: [
      { label: 'AI & Machine Learning', href: '/services#ai' },
      { label: 'Quantum Technology', href: '/services#quantum' },
      { label: 'Cybersecurity', href: '/services#cybersecurity' },
      { label: 'Cloud & Infrastructure', href: '/services#cloud' },
      { label: 'Blockchain & Web3', href: '/services#blockchain' },
      { label: 'IoT & Edge Computing', href: '/services#iot' },
      { label: 'Biotechnology & Healthcare', href: '/services#biotech' },
      { label: 'Space Technology', href: '/services#space' },
      { label: 'Manufacturing & Industry 4.0', href: '/services#manufacturing' },
      { label: 'FinTech & Wealth Management', href: '/services#fintech' },
      { label: 'Consulting & Strategy', href: '/services#consulting' },
      { label: 'All Services', href: '/services' }
    ]
  },
  { label: 'Contact', href: '/contact' }
];
export default function Layout({ children }: { children: React.ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const location = useLocation();
  const isActive = (href: string) => location.pathname === href;
  const toggleSidebarDropdown = (label: string) => {
    setSidebarDropdownOpen(sidebarDropdownOpen === label ? null : label);
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
            <nav className="hidden md:flex space-x-6">
              <a href="/" className="text-white hover:text-blue-300 transition-colors">
                Home
              </a>
              <a href="/services" className="text-white hover:text-blue-300 transition-colors">
                Services
              </a>
              <a href="/products" className="text-white hover:text-blue-300 transition-colors">
                Products
              </a>
              <a href="/about" className="text-white hover:text-blue-300 transition-colors">
                About
              </a>
              <a href="/contact" className="text-white hover:text-blue-300 transition-colors">
                Contact
              </a>
            </nav>
            <div className="flex items-center space-x-4">
              <a 
                href="tel:+13024640950" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
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
        } md:translate-x-0`}>
          <div className="p-4">
            <nav className="space-y-2">
              {sidebarNavigation.map((item) => (
                <div key={item.label}>
                  {item.children ? (
                    <div>
                      <button
                        onClick={() => toggleSidebarDropdown(item.label)}
                        className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium rounded-md hover:bg-accent transition-colors"
                      >
                        <span className="flex items-center space-x-2">
                          {item.icon && <item.icon className="w-4 h-4" />}
                          <span>{item.label}</span>
                        </span>
                        <ChevronRight className={`w-4 h-4 transition-transform ${
                          sidebarDropdownOpen === item.label ? 'rotate-90' : ''
                        }`} />
                      </button>
                      {sidebarDropdownOpen === item.label && (
                        <div className="ml-4 mt-2 space-y-1">
                          {item.children.map((child) => (
                            <a
                              key={child.label}
                              href={child.href}
                              className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent rounded-md transition-colors"
                            >
                              {child.label}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <a
                      href={item.href}
                      className="flex items-center space-x-2 px-3 py-2 text-sm font-medium rounded-md hover:bg-accent transition-colors"
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
        <main className="flex-1 md:ml-64">
          {children}
        </main>
      </div>
    </div>
  );
}