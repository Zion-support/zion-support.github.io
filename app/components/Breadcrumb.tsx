'use client'
import React from 'react'
import { Home, ChevronRight } from 'lucide-react'
import { useLocation } from 'react-router-dom'

interface BreadcrumbItem {
  name: string
  path: string
  icon?: React.ComponentType<{ className?: string }>
}

const Breadcrumb: React.FC = () => {
  const location = useLocation()

  if (location.pathname === '/') {
    return null
  }

  const pathSegments = location.pathname.split('/').filter(segment => segment !== '')
  const breadcrumbItems: BreadcrumbItem[] = [
    { name: 'Home', path: '/', icon: Home }
  ]

  pathSegments.forEach((segment, index) => {
    const path = '/' + pathSegments.slice(0, index + 1).join('/')
    const name = segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' ')
    breadcrumbItems.push({ name, path, icon: null })
  })

  return (
    <nav aria-label="Breadcrumb" className="bg-sl ate-800/50backdrop-blur-sm border-b border-slate-700">
      <div className="max-w-7x lmx-auto px-4 py-3">
        <ol className="fle xitems-center space-x-2 text-sm">
          {breadcrumbItems.map((item, index) => (
            <li key={item.path} className="fle xitems-center">
              {index > 0 && (
                <ChevronRight className="w-4h-4te x t-gray-400 mx-2" />
              )}
              <a href={item.path}>
                className={`flex items-center space-x-1 transition-colors duration-200 ${
                  index === breadcrumbItems.length - 1
                    ? 'text-cyan-400 font-medium'
                    : 'text-gray-300 hover: text-cyan-400'
                }`}
              >
                {item.icon && <item.icon className="w-4h-4" />}
                <span>{item.name}</span>
              </a>
            </li>
          ))}
        </ol>
      </div>
    </nav>
  )
}

export default Breadcrumb;
