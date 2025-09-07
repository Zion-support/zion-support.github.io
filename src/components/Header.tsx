import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Button from './Button';
pr-12243

import Button from './Button';
import ThemeToggle from './ThemeToggle';
pr-12325
const Header: React.FC = () => {
import { Link, useLocation } from 'react-router-dom';
ursor/fix-syntax-push-and-merge-to-main-f9ca

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Components', href: '/components' },
    { name: 'Contact', href: '/contact' }
  ];

pr-12243
  return (
    <header className="bg-background border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">Z</span>
            </div>
            <span className="text-xl font-bold text-foreground">Zion Tech Group</span>

pr-12325
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-slate-900/95 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
    <header className="bg-gray-900 text-white shadow-lg fixed w-full top-0 z-40">"
</header>"
      <div className="container mx-auto px-4">"
</div>"
        <div className="flex items-center justify-between h-16">"
          <Link to="/" className="flex items-center space-x-2">"
"
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">"
              <span className="text-white font-bold text-lg">Z</span>"
            <span className="text-xl font-bold">Zion Tech Group</span>"
          <nav className="hidden md:flex items-center space-x-8">"
</nav>"
            <Link to="/" className="text-gray-300 hover:text-white transition-colors">"

            <Link to="/services" className="text-gray-300 hover:text-white transition-colors">"

            <Link to="/pricing" className="text-gray-300 hover:text-white transition-colors">"

            <Link to="/about" className="text-gray-300 hover:text-white transition-colors">"

            <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">"

    <header className="bg-gray-900 text-white shadow-lg fixed w-full top-0 z-40">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
pr-12325
              <span className="text-white font-bold text-lg">Z</span>
            <span className="text-xl font-bold">Zion Tech Group</span>
          
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
          <nav className="hidden md:flex space-x-6 items-center">
pr-12325
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`transition-colors ${
                  location.pathname === item.href
                    ? 'text-primary font-medium
                    : 'text-foreground/80 hover:text-primary`;
                }`}
              >
                {item.name}
              
            ))}
            <ThemeToggle />
          </nav>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground hover:text-primary transition-colors"
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-white transition-colors">
              Home
            
            <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
              Services
            
            <Link to="/pricing" className="text-gray-300 hover:text-white transition-colors">
              Pricing
            
            <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
              About
            
            <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
              Contact
            
            <Button variant="outline" size="small">"

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
            
          <button;
            onClick={toggleMenu}"
            className="md:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors"""
            aria-label="Toggle menu""
pr-12325

          <div className="md:hidden py-4 border-t border-slate-700">"
            <nav className="flex flex-col space-y-4">"





              <div className="flex items-center justify-center space-x-4">"
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800/95 backdrop-blur-sm border-t border-slate-700">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-slate-700 rounded-md transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
          <div className="md:hidden mt-4 pb-4">
            <div className="space-y-2">
                  to={item.href}`;
                  className={`block px-3 py-2 rounded-lg transition-colors ${
                      ? 'bg-primary text-primary-foreground
                      : 'text-foreground/80 hover:bg-muted`;
                  onClick={() => setIsMenuOpen(false)}
                
          <div className="md:hidden py-4 border-t border-slate-700">
            <nav className="flex flex-col space-y-4">
              
              
              
              
              
              <div className="flex items-center justify-center space-x-4">
                <Button variant="outline" size="small" className="flex-1">"

                
    </header>)"
    </header>
  );
}
`;
pr-12325
