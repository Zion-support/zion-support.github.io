import React from 'react'
import { Link } from 'react-router-dom'

interface SidebarProps {
  isOpen?: boolean
  onClose?: () => void
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen = false, onClose }) => {
  return (
    <aside className={`w-64 bg-slate-800 min-h-screen p-4 ${isOpen ? 'block' : 'hidden md:block'}`}>
      <nav className="space-y-2">
        <Link to="/" className="block text-gray-300 hover:text-cyan-400 transition-colors">
          Home
        </Link>
        <Link to="/about" className="block text-gray-300 hover:text-cyan-400 transition-colors">
          About
        </Link>
        <Link to="/services" className="block text-gray-300 hover:text-cyan-400 transition-colors">
          Services
        </Link>
        <Link to="/contact" className="block text-gray-300 hover:text-cyan-400 transition-colors">
          Contact
        </Link>
      </nav>
    </aside>
  )
}

export default Sidebar
