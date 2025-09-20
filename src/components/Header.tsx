import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, Brain } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-zion-blue-dark border-b border-zion-blue-light sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-2">
              <Brain className="w-8 h-8 text-zion-cyan" />
              <span className="text-xl font-bold text-white">Zion Tech</span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/services" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
              Services
            </Link>
            <Link href="/blog" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
              Blog
            </Link>
            <Link href="/careers" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
              Careers
            </Link>
            <Link href="/contact" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
              Contact
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-zion-blue-light">
            <nav className="flex flex-col space-y-4">
              <Link href="/services" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                Services
              </Link>
              <Link href="/blog" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                Blog
              </Link>
              <Link href="/careers" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                Careers
              </Link>
              <Link href="/contact" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};