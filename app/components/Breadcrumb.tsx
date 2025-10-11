'use client'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ChevronRight, Home } from 'lucide-react'

const Breadcrumb: React.FC = () => {
  const location = useLocation()
  const pathnames = location.pathname.split('/').filter((x) => x)

  return (
    <nav className="bg-slate-800/50 backdrop-blur-sm border-b border-cyan-500/20 py-2" aria-label="Breadcrumb">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ol className="flex items-center space-x-2 text-sm">
          <li>
            <Link to="/" className="text-cyan-400 hover:text-cyan-300 flex items-center">
              <Home className="w-4 h-4 mr-1" />
              Home
            </Link>
          </li>
          {pathnames.map((name, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`
            const isLast = index === pathnames.length - 1
            return (
              <li key={name} className="flex items-center">
                <ChevronRight className="w-4 h-4 text-gray-400 mx-2" />
                {isLast ? (
                  <span className="text-gray-300 capitalize">{name.replace('-', ' ')}</span>
                ) : (
                  <Link to={routeTo} className="text-cyan-400 hover:text-cyan-300 capitalize">
                    {name.replace('-', ' ')}
                  </Link>
                )}
              </li>
            )
          })}
        </ol>
      </div>
    </nav>
  )
}

export default Breadcrumb