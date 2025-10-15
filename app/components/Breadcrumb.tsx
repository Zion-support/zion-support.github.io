"use client"
import React from "react"
import { ChevronRight, Home } from "lucide-react"
import { useLocation, Link } from "react-router-dom"

export default function Breadcrumb() {
  const location = useLocation()
  const pathnames = location.pathname.split("/").filter((x) => x)
  
  if (pathnames.length === 0) {
    return null
  }

  return (
    <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-4">
      <Link to="/" className="flex items-center hover:text-gray-700">
        <Home className="w-4 h-4" />
      </Link>
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`
        const isLast = index === pathnames.length - 1
        
        return (
          <React.Fragment key={name}>
            <ChevronRight className="w-4 h-4" />
            {isLast ? (
              <span className="text-gray-900 font-medium capitalize">
                {name.replace(/-/g, ' ')}
              </span>
            ) : (
              <Link 
                to={routeTo} 
                className="hover:text-gray-700 capitalize"
              >
                {name.replace(/-/g, ' ')}
              </Link>
            )}
          </React.Fragment>
        )
      })}
    </nav>
  )
}