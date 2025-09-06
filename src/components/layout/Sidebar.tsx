import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar: React.FC = () => {
  return (
    <aside className="hidden lg:block w-80 bg-gray-100 p-6">
      <nav className="space-y-4">
        <Link to="/" className="block text-gray-700 hover:text-blue-600">
          Home
        </Link>
        <Link to="/about" className="block text-gray-700 hover:text-blue-600">
          About
        </Link>
        <Link to="/services" className="block text-gray-700 hover:text-blue-600">
          Services
        </Link>
        <Link to="/contact" className="block text-gray-700 hover:text-blue-600">
          Contact
        </Link>
      </nav>
    </aside>
  )
}

export default Sidebar