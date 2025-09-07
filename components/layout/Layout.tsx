import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="bg-slate-900 border-b border-slate-800">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="text-xl font-bold text-blue-400">
              Zion Tech Group
            </div>
            <div className="space-x-4">
              <a href="/" className="text-slate-300 hover:text-white">Home</a>
              <a href="/services" className="text-slate-300 hover:text-white">Services</a>
              <a href="/about" className="text-slate-300 hover:text-white">About</a>
              <a href="/contact" className="text-slate-300 hover:text-white">Contact</a>
            </div>
          </nav>
        </div>
      </header>
      <main>{children}</main>
      <footer className="bg-slate-900 border-t border-slate-800 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-slate-400">
            <p>&copy; 2025 Zion Tech Group. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}