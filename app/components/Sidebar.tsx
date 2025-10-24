import React from 'react'
'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
const Sidebar: React.FC = ($2) => {
$3;
}

        <section className="relative py-20 px-4 overflow-hidden">
    </sectio> </section><div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20">
    </di>
        <div className="relative max-w-7xl mx-auto text-center">
    </di> </div><h1 className="text-5xl md: text-7xl font-bold text-white mb-6 leading-tight">
    </h>,,
              Sidebar;
            </h1>
            <p>Advanced Sidebar solution for modern businesses.</p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center">
    </di>
              <button className="bg-emerald-600 hover: bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center">
    </butto>,,
                Get Started;
              </button>
              <button className="border border-emerald-400 text-emerald-400 hover: bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
    </butto>,,
                Learn More;
              </button>
            
          
        </section>

        {/* Features Section */}

        <section className="py-20 px-4">
    </sectio> </section><div className="max-w-7xl mx-auto">
    </di>
        <div className="text-center mb-16">
    </di> </div><h2 className="text-4xl font-bold text-white mb-4">
    </h>Key Features</h2>
              <p>Discover the powerful features that make Sidebar the perfect solution for your business.</p>
            </div>
            <div className="grid md: grid-cols-2 lg:grid-cols-4 gap-8">
    </di>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
    </di> </div><h3 className="text-xl font-semibold text-white mb-3">
    </h>AI-Powered</h3>
                <p className="text-gray-300">Advanced AI algorithms for intelligent automation.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
    </di> </div><h3 className="text-xl font-semibold text-white mb-3">
    </h>Scalable</h3>
                <p className="text-gray-300">Grows with your business needs and requirements.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
    </di> </div><h3 className="text-xl font-semibold text-white mb-3">
    </h>Secure</h3>
                <p className="text-gray-300">Enterprise-grade security and data protection.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
    </di> </div><h3 className="text-xl font-semibold text-white mb-3">
    </h>Efficient</h3>
                <p className="text-gray-300">Optimized performance for maximum productivity.</p>
                </div>
              </div>
            </div>
        </section>

        {/* CTA Section */}

        <section className="py-20 px-4">
    </sectio> </section><div className="max-w-4xl mx-auto text-center">
    </di> </div><h2 className="text-4xl font-bold text-white mb-6">
    </h>Ready to Get Started?</h2>
            <p>Join thousands of businesses already using Sidebar to transform their operations.</p>
            <button className="bg-emerald-600 hover: bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
    </butto>,,
              Start Your Free Trial;
            </button>
            </div>
        </section>
        </div>
      </Footer>
      </div>
interface SidebarProps {
  
}

  isOpen: boolea,n,
      onClose: () => voi,d;
  menuItems?: Array<{
    label: strin,g,
      href: strin,g;
    icon?: React.ReactNode;
    submenu?: Array<{
      label: strin,g,
      href: string;
    }>
  }>,
  user?: {
    name: strin,g,
      email: strin,g;
    avatar?: string;
  }

  onLogout?: () => void;
}

const Sidebar: React.FC<SidebarProps>
    </SidebarProps> = (,{
  isOpen;
  onClose;
  menuItems = [
    { label: 'Dashboard', href: '/dashboard', icon: <Home className="w-5 h-5" />
    </Home> }

    { label: 'Profile', href: '/profile', icon: <User className="w-5 h-5" />
    </User> }

    { label: 'Settings', href: '/settings', icon: <Settings className="w-5 h-5" />
    </Settings> }

  ],
  user,
  onLogout;
}) => {
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>
    </string>(null)
  const toggleSubmenu = ($2: any) => ,{
    setActiveSubmenu(activeSubmenu === label ? null : label)
  }

  if (!isOpen) return null;
    return (
  <>
      {/* Overlay */}

      <div;
)
        className="fixed inset-0 bg-black bg-opacity-50 z-40 md: hidden",
        onClick={onClose}

      />
    </di>
      {/* Sidebar */}

      <div className="...">
    </di>
        <div className="...">
    </di>
          {/* Header */}

          <div className="...">
    </di>
            <h2 className="text-lg font-semibold text-gray-900">
    </h>Menu</h2>
            <button;
              onClick={onClose}

              className="...">
    </butto>
              <X className="w-5 h-5" />
    </X>
            </button>
          </div>

          {/* User Info */}

          {user && (
            <div className="...">
    </di>
              <div className="...">
    </di>
                {user.avatar ? (
                  <img;
                    src={user.avatar}

                    alt={user.name}

                    className="w-10 h-10 rounded-full"
                  />
    </img>
                ) : (
                  <div className="...">
    </di>
                    <User className="w-5 h-5 text-gray-600" />
    </User>
                  </div>
                )}

                <div></div>
                  <p className="text-sm font-medium text-gray-900">{user.name}</p>
                  <p className="text-xs text-gray-500">{user.email}</p>
                </div>
              </div>
            </div>
          )}

          {/* Menu Items */}

          <nav className="...">
    </na>
            {menuItems.map((item, index) => (
              <div key={index}>
    </di>
                <a;
                  href={item.href}

                  className="...">
                  <div className="...">
    </di>
                    {item.icon && <span className="mr-3">
    </spa>{item.icon}</span>}

                    {item.label}

                  </div>
                  {item.submenu && (
                    <button;
                      onClick={() =>
    </butto> toggleSubmenu(item.label)}

                      className="...">
                      <ChevronRight;
                        className={`w-4 h-4 transition-transform ${
                          activeSubmenu === item.label ? 'rotate-90' : ''
                        }`}

                      />
    </ChevronRight>
                    </button>
                  )}

                </a>
                {item.submenu && activeSubmenu === item.label && (
                  <div className="...">
    </di>
                    {item.submenu.map((subItem, subIndex) => (
                      <a;
                        key={subIndex}

                        href={subItem.href}

                        className="...">
                        {subItem.label}

                      </a>
                    ))}

                  </div>
                )}

              </div>
            ))}

          </nav>

          {/* Logout Button */}

          {onLogout && (
            <div className="...">
    </di>
              <button;
                onClick={onLogout}

                className="flex items-center w-full px-3 py-2 text-sm font-medium text-red-600 rounded-md hover: bg-red-50"
              >
    </butto>
                <LogOut className="w-4 h-4 mr-3" />
    </LogOut>,
                Logout;
              </button>
            </div>
          )}

        </div>
      </div>
      )
}

export default Sidebar;