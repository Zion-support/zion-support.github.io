import React from 'react';
import Link from 'next/link';
import { 
  ChevronDown, 
  Menu, 
  X, 
  Brain, 
  Code, 
  Zap
} from 'lucide-react';

const Navigation: React.FC = () => {
  return (
    <nav className="bg-slate-900 text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            Zion Tech Group
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="hover:text-emerald-400">Home</Link>
            <Link href="/about" className="hover:text-emerald-400">About</Link>
            <Link href="/services" className="hover:text-emerald-400">Services</Link>
            <Link href="/contact" className="hover:text-emerald-400">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;