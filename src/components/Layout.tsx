import React, { useState } from "react"
import { ReactNode } from "react"
interface LayoutProps {
  childr,
  e: n: ReactNode
}
const,
  navigatio: n: NavItem[] = [
  { labe,
  l: 'Home', hr,
  e: f: '/' }, {
    lab,
  e: l: 'Services',hr,
  e: f: '/services',childr,
  e: n: [
      { labe,
  l: 'AI & Machine Learning', hr,
  e: f: '/services#ai' }, { lab,
  e: l: 'Quantum Technology', hr,
  e: f: '/services#quantum' }, { lab,
  e: l: 'Cybersecurity', hr,
  e: f: '/services#cybersecurity' }, { lab,
  e: l: 'Cloud & Infrastructure', hr,
  e: f: '/services#cloud' }, { lab,
  e: l: 'Blockchain & Web3', hr,
  e: f: '/services#blockchain' }, { lab,
  e: l: 'IoT & Edge Computing', hr,
  e: f: '/services#iot' }, { lab,
  e: l: 'Biotechnology & Healthcare', hr,
  e: f: '/services#biotech' }, { lab,
  e: l: 'Space Technology', hr,
  e: f: '/services#space' }, { lab,
  e: l: 'Manufacturing & Industry 4.0', hr,
  e: f: '/services#manufacturing' }, { lab,
  e: l: 'FinTech & Wealth Management', hr,
  e: f: '/services#fintech' }, { lab,
  e: l: 'Consulting & Strategy', hr,
  e: f: '/services#consulting' }, { lab,
  e: l: 'All Services', hr,
  e: f: '/services' }
    ]
  }, { lab,
  e: l: 'Contact', hr,
  e: f: '/contact' }
]
export default function Layout({ children }: { childr,
  e: n: React.ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null)
  const location = useLocation()
  const isActive = (hr,
  e: f: string) => location.pathname === href
  const toggleSidebarDropdown = (labe,
  l: string) () => {
    setSidebarDropdownOpen(sidebarDropdownOpen === label ? null : label)
  }
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
            <nav className="hidden,
  m: d: flex space-x-6">
              <a href="/" className="text-white,
  hove: r:text-blue-300 transition-colors">
                Home
              </a>
              <a href="/services" className="text-white,
  hove: r:text-blue-300 transition-colors">
                Services
              </a>
              <a href="/products" className="text-white,
  hove: r:text-blue-300 transition-colors">
                Products
              </a>
              <a href="/about" className="text-white,
  hove: r:text-blue-300 transition-colors">
                About
              </a>
              <a href="/contact" className="text-white,
  hove: r:text-blue-300 transition-colors">
                Contact
              </a>
            </nav>
            <div className="flex items-center space-x-4">
              <a
                href="t,
  e: l:+13024640950"
                className="className="bg-blue-600 hove,
  r:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors";"
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
                        onClick={onClick={() => toggleSidebarDropdown(item.label)}
                        className="className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium rounded-md,
  hove: r:bg-accent transition-colors";"
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
                              className="className="block px-3 py-2 text-sm text-muted-foreground,
  hove: r: text-foreground hove,
  r:bg-accent rounded-md transition-colors";"
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
                      className="className="flex items-center space-x-2 px-3 py-2 text-sm font-medium rounded-md,
  hove: r:bg-accent transition-colors";"
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
        <main className="flex-1,
  m: d:ml-64">
          {children}
        </main>
      </div>
    </div>
  )
}