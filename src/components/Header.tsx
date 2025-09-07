<<<<<<< HEAD
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Button from './Button';
import ThemeToggle from './ThemeToggle';
const Header: React.FC = () => {
=======
import { Link, useLocation } from 'react-router-dom';
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-f9ca

export function Header() {
>>>>>>> a2c6a2cc86d6e83a9083c45bfcf5a35f741b3208
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

  return (
    <header className="bg-background border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">Z</span>
            </div>
            <span className="text-xl font-bold text-foreground">Zion Tech Group</span>

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
              <span className="text-white font-bold text-lg">Z</span>
            <span className="text-xl font-bold">Zion Tech Group</span>
          
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 items-center">
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

            
          <button;
            onClick={toggleMenu}"
            className="md:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors"""
            aria-label="Toggle menu""

          <div className="md:hidden py-4 border-t border-slate-700">"
            <nav className="flex flex-col space-y-4">"





              <div className="flex items-center justify-center space-x-4">"
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
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