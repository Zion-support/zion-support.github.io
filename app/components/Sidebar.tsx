import React from 'react'
import { X } from 'lucide-react'
import { Home } from 'lucide-react'
import { Users } from 'lucide-react'
import { Settings } from 'lucide-react'
import { Mail } from 'lucide-react'
import { Phone } from 'lucide-react'
import { MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'










interface Sidebar Props {
  is Open: boolean
  on Close: () => void
}
  )
const Sidebar: React.FC<Sidebar Props> = ({ is Open, on Close }) => {
  const navigation Items = 
  return (
    <>
      <div>
      {/* Overlay */}
  )
      {is Open && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          on Click={on Close}
  )
        />
      )}
  )
      {/* Sidebar */}
  )
      <div class Name={`
        fixed top-0 left-0 h-full w-64 bg-slate-800 transform transition-transform duration-300 ease-in-out z-50
        ${is Open ? 'translate-x-0' : '-translate-x-full'}
  )
        lg:translate-x-0 lg:static lg:inset-0
      `}>
        <div className="flex items-center justify-between p-4 border-b border-slate-700">
        
          <h2 className="text-xl font-bold text-white">Zion Tech Group</h2>
          <button
            on Click={on Close}
  )
            className="text-white hover:text-gray-300"
          >
            <X className="w-6 h-6" />
          </button>
        
        <nav className="mt-6">
          <ul className="space-y-2 px-4">
            {navigation Items.map((item) => {
              const Icon = item.icon
              return (
    <div>
                <li key={item.name}>
                  <Link
                    to={item.href}
  )
                    on Click={on Close}
  )
                    className="flex items-center text-gray-300 hover:text-white py-2"
                  >
                    <Icon className="w -5 h-5 mr-3" />
                    {item.name}
  )
                  </Link>
                </li>
              )
            })}
  )
          </ul>
  ); }; export default Sidebar;
=======
        </nav>
        <div className="absolute bottom-4 left-4 right-4">
        
          <div className="bg-slate-700 rounded-lg p-4">
        
            <div className="flex items-center text-sm text-gray-300 mb-2">
        
              <Map Pin className="w-4 h-4 mr-2" />
              <span>Contact Info</span>
            </div>
            <div className="flex items-center text-sm text-gray-300 mb-1">
        
              <Phone className="w-4 h-4 mr-2" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center text-sm text-gray-300">
        
              <Mail className="w-4 h-4 mr-2" />
              <span>info@ziontechgroup.com</span>
            </div>
        </div>
    </>
  )
}
  )
export default Sidebar;;
