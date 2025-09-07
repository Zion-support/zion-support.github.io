import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          Zion Tech Group
        </Link>
      </div>
    </header>
  );
};

export default Header;