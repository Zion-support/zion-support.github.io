import React from 'react''
import { User, X, Home, Settings, HelpCircle } from 'lucide-react'
interface SidebarNavigationProps {
  isOpen: boolean
  onClose: () => void
}
const navigationItems = ['
  { name: 'Home', href: '/', icon: Home }'
  { name: 'Profile', href: '/profile', icon: User }'
  { name: 'Settings', href: '/settings', icon: Settings }'
  { name: 'Help', href: '/help', icon: HelpCircle }
]
const SidebarNavigation: React.FC<SidebarNavigationProps> = ({ isOpen, onClose }) => {
  return ('
    <div className={`fixed inset-0 z-50 ${isOpen ? 'block' : 'hidden'}`}>
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose} />"
      <div className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out">"
        <div className="flex items-center justify-between p-4 border-b">"
          <h2 className="text-lg font-semibold">Navigation</h2>
          <button
            onClick={onClose}"
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >"
            <X className="w-5 h-5" />
          </button>
        </div>"
        <nav className="p-4">"
          <ul className="space-y-2">
            {navigationItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}"
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100 transition-colors"
                >"
                  <item.icon className="w-5 h-5" />
                  <span>{item.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  )
}
export default SidebarNavigation'"