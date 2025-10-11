'use client'
import React from 'react'
import { useLocation } from 'react-router-dom'
import { ChevronRight, Home } from 'lucide-react'

const Breadcrumb: React.FC = () => {
  const location = useLocation()
  
  // Don't show breadcrumb on home page
  if (location.pathname === '/') {
    return null
  }

  const pathSegments = location.pathname.split('/').filter(Boolean)
  
  const breadcrumbItems = [
    { name: 'Home', path: '/' },
    ...pathSegments.map((segment, index) => ({
      name: segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' '),
      path: '/' + pathSegments.slice(0, index + 1).join('/')
    }))
  ]

  return (
    <nav className="bg-slate-800/30 backdrop-blur-sm border-b border-white/10 py-3 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <ol className="flex items-center space-x-2 text-sm">
          {breadcrumbItems.map((item, index) => (
            <li key={item.path} className="flex items-center">
              {index > 0 && (
                <ChevronRight className="h-4 w-4 text-gray-400 mx-2" />
              )}
              {index === 0 ? (
                <a 
                  href={item.path}
                  className="flex items-center text-gray-300 hover:text-white transition-colors"
                >
                  <Home className="h-4 w-4 mr-1" />
                  {item.name}
                </a>
              ) : index === breadcrumbItems.length - 1 ? (
                <span className="text-white font-medium">{item.name}</span>
              ) : (
                <a 
                  href={item.path}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {item.name}
                </a>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  )
}

export default Breadcrumb