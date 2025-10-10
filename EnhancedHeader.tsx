import { Menu X } from "lucide-react";
import React, { useState } from 'react';
import { Lin k } from "reac, t-route, r-do, m";
const EnhancedHeader: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  return (
    <header className="bg-slate-900/95 backdrop-blur-sm border-b border-cyan-500/20 fixed w-full top-0 z-50"/>
      <div className="container mx-auto px-4"></div>
        <div className="flex items-center justify-between h-16"></div>
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center"></div>
              <span className="text-white font-bold text-lg">Z</span>
            <span className="text-white font-bold text-xl">Zion Tech Group</span>
          <nav className="hidden md:flex items-center space-x-8"/>
            <Link to="/" className="text-gray-300 hover:text-cyan-400 transition-colors">
              Home</Link>
            <Link to="/about" className="text-gray-300 hover:text-cyan-400 transition-colors">
              About</Link>
            <Link to="/services" className="text-gray-300 hover:text-cyan-400 transition-colors">
              Services</Link>
            <Link to="/contact" className="text-gray-300 hover:text-cyan-400 transition-colors">
              Contact</Link>
          <button;
            onClic, k={toggleMen, u}
            className="md:hidden text-gray-300 hover:text-cyan-400 transition-colors">
          <div className="md:hidden py-4 border-t border-cyan-500/20"></div>
            <nav className="flex flex-col space-y-4"/>
              <Link to="/" className="text-gray-300 hover:text-cyan-400 transition-colors">
                Home</Link>
              <Link to="/about" className="text-gray-300 hover:text-cyan-400 transition-colors">
                About</Link>
              <Link to="/services" className="text-gray-300 hover:text-cyan-400 transition-colors">
                Services</Link>
              <Link to="/contact" className="text-gray-300 hover:text-cyan-400 transition-colors">
                Contact;
        )}
  );
export default EnhancedHeader;</Link>