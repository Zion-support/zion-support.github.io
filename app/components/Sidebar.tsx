import React from 'react';
'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const Sidebar: React.FC = ($2) => {
$3
};
        <section className="relative py-20 px-4 overflow-hidden"> </section><div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20">
        <div className="relative max-w-7xl mx-auto text-center"> </div><h1 className="text-5xl md: text-7xl font-bold text-white mb-6 leading-tight">,
              Sidebar
            </h1>
            <p>Advanced Sidebar solution for modern businesses.</p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center">,
              <button className="bg-emerald-600 hover: bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center">,
                Get Started
              </button>
              <button className="border border-emerald-400 text-emerald-400 hover: bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">,
                Learn More
              </button>
            
          
        </section>,
,
        {/* Features Section */}
        <section className="py-20 px-4"> </section><div className="max-w-7xl mx-auto">
        <div className="text-center mb-16"> </div><h2 className="text-4xl font-bold text-white mb-4">Key Features</h2>
              <p>Discover the powerful features that make Sidebar the perfect solution for your business.</p>
            </div>
            <div className="grid md: grid-cols-2 lg:grid-cols-4 gap-8">,
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20"> </div><h3 className="text-xl font-semibold text-white mb-3">AI-Powered</h3>
                <p className="text-gray-300">Advanced AI algorithms for intelligent automation.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20"> </div><h3 className="text-xl font-semibold text-white mb-3">Scalable</h3>
                <p className="text-gray-300">Grows with your business needs and requirements.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20"> </div><h3 className="text-xl font-semibold text-white mb-3">Secure</h3>
                <p className="text-gray-300">Enterprise-grade security and data protection.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20"> </div><h3 className="text-xl font-semibold text-white mb-3">Efficient</h3>
                <p className="text-gray-300">Optimized performance for maximum productivity.</p>
                </div>
              </div>
            </div>
        </section>,
,
        {/* CTA Section */}
        <section className="py-20 px-4"> </section><div className="max-w-4xl mx-auto text-center"> </div><h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p>Join thousands of businesses already using Sidebar to transform their operations.</p>
            <button className="bg-emerald-600 hover: bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">,
              Start Your Free Trial
            </button>
            </div>
        </section>
        </div>
      </Footer>
      </div>
<<<<<<< HEAD

interface SidebarProps {
  isOpen: boolean,
      onClose: () => void
  menuItems?: Array<{
    label: string,
      href: string
    icon?: React.ReactNode
    submenu?: Array<{
      label: string,
      href: string
    }>
  }>
  user?: {
    name: string,
      email: string
    avatar?: string
  }
  onLogout?: () => void
}

const Sidebar: React.FC<SidebarProps> = ({
  isOpen
  onClose
  menuItems = [
    { label: 'Dashboard', href: '/dashboard', icon: <Home className="w-5 h-5" /> },
    { label: 'Profile', href: '/profile', icon: <User className="w-5 h-5" /> },
    { label: 'Settings', href: '/settings', icon: <Settings className="w-5 h-5" /> }
  ],
  user,
  onLogout,
}) => {
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)
  const toggleSubmenu = (label: string) => {
    setActiveSubmenu(activeSubmenu === label ? null : label)
  }
  if (!isOpen) return null
    return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
        onClick={onClose}
      />
      {/* Sidebar */}
      <div className="...">
        <div className="...">
          {/* Header */}
          <div className="...">
            <h2 className="text-lg font-semibold text-gray-900">Menu</h2>
            <button
              onClick={onClose}
              className="...">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* User Info */}
          {user && (
            <div className="...">
              <div className="...">
                {user.avatar ? (
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-10 h-10 rounded-full"
                  />
                ) : (
                  <div className="...">
                    <User className="w-5 h-5 text-gray-600" />
                  </div>
                )}
                <div>
                  <p className="text-sm font-medium text-gray-900">{user.name}</p>
                  <p className="text-xs text-gray-500">{user.email}</p>
                </div>
              </div>
            </div>
          )}

          {/* Menu Items */}
          <nav className="...">
            {menuItems.map((item, index) => (
              <div key={index}>
                <a
                  href={item.href}
                  className="...">
                  <div className="...">
                    {item.icon && <span className="mr-3">{item.icon}</span>}
                    {item.label}
                  </div>
                  {item.submenu && (
                    <button
                      onClick={() => toggleSubmenu(item.label)}
                      className="...">
                      <ChevronRight
                        className={`w-4 h-4 transition-transform ${
                          activeSubmenu === item.label ? 'rotate-90' : ''
                        }`}
                      />
                    </button>
                  )}
                </a>
                {item.submenu && activeSubmenu === item.label && (
                  <div className="...">
                    {item.submenu.map((subItem, subIndex) => (
                      <a
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
              <button
                onClick={onLogout}
                className="flex items-center w-full px-3 py-2 text-sm font-medium text-red-600 rounded-md hover:bg-red-50"
              >
                <LogOut className="w-4 h-4 mr-3" />
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
      )
}
export default Sidebar