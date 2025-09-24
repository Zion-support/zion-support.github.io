import React from 'react';

export const Sidebar: React.FC = () => {
  return (
    <aside className="fixed left-0 top-0 h-full w-80 bg-gray-900 border-r border-gray-800 hidden lg:block">
      <div className="p-6">
        <div className="text-2xl font-bold text-white mb-8">
          Zion Tech Group
        </div>
        
        <nav className="space-y-4">
          <a href="/" className="block text-gray-300 hover:text-white transition-colors py-2">
            🏠 Home
          </a>
          <a href="/about" className="block text-gray-300 hover:text-white transition-colors py-2">
            ℹ️ About
          </a>
          <a href="/services" className="block text-gray-300 hover:text-white transition-colors py-2">
            🛠️ Services
          </a>
          <a href="/ai-solutions" className="block text-gray-300 hover:text-white transition-colors py-2">
            🤖 AI Solutions
          </a>
          <a href="/quantum-computing" className="block text-gray-300 hover:text-white transition-colors py-2">
            ⚛️ Quantum Computing
          </a>
          <a href="/cybersecurity" className="block text-gray-300 hover:text-white transition-colors py-2">
            🛡️ Cybersecurity
          </a>
          <a href="/blog" className="block text-gray-300 hover:text-white transition-colors py-2">
            📝 Blog
          </a>
          <a href="/contact" className="block text-gray-300 hover:text-white transition-colors py-2">
            📞 Contact
          </a>
        </nav>
      </div>
    </aside>
  );
};