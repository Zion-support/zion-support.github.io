import React, { useState } from 'react';

const EnhancedHeader: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = {
    main: [
      { name: 'Home', href: '/' },
      {
        name: 'Services',
        href: '/services',
        dropdown: [
          { name: 'AI Solutions', href: '/services/ai-services', description: 'Cutting-edge AI services' },
          { name: 'IT & Security', href: '/services/it-services', description: 'Enterprise security & infrastructure' },
          { name: 'Blockchain & Web3', href: '/services/blockchain-services', description: 'Next-gen blockchain solutions' },
          { name: 'Sustainability', href: '/services/sustainability', description: 'Green tech solutions' },
        ],
      },
      {
        name: 'Solutions',
        href: '/solutions',
        dropdown: [
          { name: 'Enterprise', href: '/solutions/enterprise', description: 'Large-scale business solutions' },
          { name: 'Startups', href: '/solutions/startups', description: 'Growth-focused solutions' },
        ],
      },
      { name: 'About', href: '/about' },
      { name: 'Contact', href: '/contact' },
    ],
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-blue-600">
              Zion Tech
            </a>
          </div>
          <nav className="hidden md:flex space-x-8">
            {navigation.main.map(item => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                {item.name}
              </a>
            ))}
          </nav>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              Menu
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default EnhancedHeader;
