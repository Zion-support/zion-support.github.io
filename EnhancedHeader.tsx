import { Menu, X } from 'lucide-react';'import React, { useState } from 'react';'import { Link } from 'react-router-dom';';'const EnhancedHeader: React.FC = () => {;
const [isMenuOpen, setIsMenuOpen] = useState(false);
const toggleMenu = () => {
  
  
  
    setIsMenuOpen(!isMenuOpen)
  }
  return (
  
    <header className="bg-slate-900/95 backdrop-blur-sm border-b border-cyan-500/20 fixed w-full top-0 z-50">""<div className="container mx-auto px-4">""<div className="flex items-center justify-between h-16">""          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">""<div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">""<span className="text-white font-bold text-lg">Z""            <span className="text-white font-bold text-xl">Zion Tech Group""          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">""<Link to="/" className="text-gray-300 hover:text-cyan-400 transition-colors">""              Home
            <Link to="/about" className="text-gray-300 hover:text-cyan-400 transition-colors">""              About
            <Link to="/services" className="text-gray-300 hover:text-cyan-400 transition-colors">""              Services
            <Link to="/contact" className="text-gray-300 hover:text-cyan-400 transition-colors">""              Contact
          {/* Mobile Menu Button */}
          <$2 />
            onClick={toggleMenu}
            className="md:hidden text-gray-300 hover:text-cyan-400 transition-colors">""            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}""        {/* Mobile Navigation */}
        {isMenuOpen && (
  
          <div className="md:hidden py-4 border-t border-cyan-500/20">""<nav className="flex flex-col space-y-4">""<Link to="/" className="text-gray-300 hover:text-cyan-400 transition-colors">""                Home
              <Link to="/about" className="text-gray-300 hover:text-cyan-400 transition-colors">""                About
              <Link to="/services" className="text-gray-300 hover:text-cyan-400 transition-colors">""                Services
              <Link to="/contact" className="text-gray-300 hover:text-cyan-400 transition-colors">""                Contact
        )}
  )
}
export default EnhancedHeader</div></div>;
</div></div>
</span></span>
</Link></Link>
</Link></Link>
</Link></Link>
</Link></Link>
</Link></header>
</nav></nav>