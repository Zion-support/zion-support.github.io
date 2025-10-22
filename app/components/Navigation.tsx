import React from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <nav className="bg-slate-900/90 backdrop-blur-sm border-b border-slate-700">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold text-cyan-400">
            Zion Tech Group
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link to="/about" className="text-gray-300 hover:text-cyan-400 transition-colors">
              About
            </Link>
            <Link to="/services" className="text-gray-300 hover:text-cyan-400 transition-colors">
              Services
            </Link>
            <Link to="/contact" className="text-gray-300 hover:text-cyan-400 transition-colors">
              Contact
            </Link>
          </div>

          <button
            className="md:hidden text-gray-300 hover:text-cyan-400"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link to="/about" className="block text-gray-300 hover:text-cyan-400 transition-colors">
              About
            </Link>
            <Link to="/services" className="block text-gray-300 hover:text-cyan-400 transition-colors">
              Services
            </Link>
            <Link to="/contact" className="block text-gray-300 hover:text-cyan-400 transition-colors">
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation
