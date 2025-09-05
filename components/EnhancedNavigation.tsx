import React, {_useState, _useEffect} from 'react';
import Link from 'next/link';

const EnhancedNavigation: React.FC = () => {_const [isOpen, _setIsOpen] = useState(false);
  const [isScrolled, _setIsScrolled] = useState(false);

  useEffect__(() => {
    const _handleScroll = () => {
      setIsScrolled(window.scrollY > 20);};

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={_`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-900/95 backdrop-blur-xl border-b border-white/10 shadow-2xl' 
        : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-white">Zion Tech Group</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/services" className="text-white hover:text-cyan-400 transition-colors">
              Services
            </Link>
            <Link href="/about" className="text-white hover:text-cyan-400 transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-white hover:text-cyan-400 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default EnhancedNavigation;