'use client'
import React from 'react'
import { useLocation } from 'react-router-dom'
import { ChevronRight, Home } from 'lucide-react'

const Breadcrumb: React.FC = () => {
  const location = useLocation()
  
  const pathSegments = location.pathname.split('/').filter(segment => segment !== '')
  
  if (pathSegments.length === 0) {
    return null
  }

  const breadcrumbItems = [
    { name: 'Home', path: '/', icon: Home }
  ]

  let currentPath = ''
  pathSegments.forEach((segment, index) => {
    currentPath += `/${segment}`
    const name = segment
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
    
    breadcrumbItems.push({
      name,
      path: currentPath
    })
  })

  return (
    <nav className="bg-slate-900/50 backdrop-blur-sm border-b border-white/10 py-3 px-4">
      <div className="max-w-7xl mx-auto">
        <ol className="flex items-center space-x-2 text-sm">
          {breadcrumbItems.map((item, index) => (
            <li key={item.path} className="flex items-center">
              {index > 0 && (
                <ChevronRight className="w-4 h-4 text-gray-400 mx-2" />
              )}
              <a
                href={item.path}
                className={`flex items-center space-x-1 transition-colors ${
                  index === breadcrumbItems.length - 1
                    ? 'text-cyan-400 font-semibold'
                    : 'text-gray-300 hover:text-cyan-400'
                }`}
              >
                {index === 0 && <item.icon className="w-4 h-4" />}
                <span>{item.name}</span>
              </a>
            </li>
          ))}
        </ol>
      </div>
    </nav>
  )
}

export default Breadcrumb
