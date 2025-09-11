import React from 'react';

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">Zion Tech Group</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="/" className="text-gray-600 hover:text-gray-900">Home</a>
              <a href="/about" className="text-gray-600 hover:text-gray-900">About</a>
              <a href="/services" className="text-gray-600 hover:text-gray-900">Services</a>
              <a href="/contact" className="text-gray-600 hover:text-gray-900">Contact</a>
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="opacity-80">© {new Date().getFullYear()} Zion Tech Group</div>
            <nav className="flex flex-wrap items-center gap-4">
              <a className="hover:text-gray-300" href="/privacy">Privacy</a>
              <a className="hover:text-gray-300" href="/terms">Terms</a>
              <a className="hover:text-gray-300" href="/contact">Contact</a>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}