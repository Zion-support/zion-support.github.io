import React from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight, Home } from 'lucide-react'

const Breadcrumb: React.FC = () => {
  return (
    <nav className="bg-slate-800/50 backdrop-blur-sm border-b border-cyan-500/20 py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ol className="flex items-center space-x-2 text-sm">
          <li>
            <Link to="/" className="text-gray-400 hover:text-cyan-400 transition-colors">
              <Home className="w-4 h-4" />
            </Link>
          </li>
          <li>
            <ChevronRight className="w-4 h-4 text-gray-500" />
          </li>
          <li>
            <span className="text-cyan-400">Current Page</span>
          </li>
        </ol>
      </div>
    </nav>
  )
}

export default Breadcrumb
