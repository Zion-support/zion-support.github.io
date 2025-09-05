import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { 
  Menu, 
  X, 
  Search, 
  Phone, 
  Mail, 
  MapPin,
  ChevronDown,
  Building2
} from 'lucide-react';

export default function Header({ onMenuClick }: { onMenuClick: () => void }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <Building2 className="w-8 h-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">Zion Tech Group</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/services" className="text-gray-700 hover:text-blue-600 font-medium">
              Services
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 font-medium">
              Contact
            </Link>
            <Link href="/quote" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Get Quote
            </Link>
          </nav>
          
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-700 hover:text-blue-600">
              <Search className="w-5 h-5" />
            </button>
            <button 
              onClick={onMenuClick}
              className="md:hidden p-2 text-gray-700 hover:text-blue-600"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}