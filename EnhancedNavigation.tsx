import React from 'react';
import Link from 'next/link';

const EnhancedNavigation: React.FC = () => {
  return (
    <nav className="bg-slate-800/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-12">
          <div className="flex items-center space-x-6">
            <Link href="/services" className="text-slate-300 hover:text-white transition-colors text-sm">
              AI Services
            </Link>
            <Link href="/services" className="text-slate-300 hover:text-white transition-colors text-sm">
              Cloud Solutions
            </Link>
            <Link href="/services" className="text-slate-300 hover:text-white transition-colors text-sm">
              Blockchain
            </Link>
            <Link href="/services" className="text-slate-300 hover:text-white transition-colors text-sm">
              Data Analytics
            </Link>
            <Link href="/services" className="text-slate-300 hover:text-white transition-colors text-sm">
              Cybersecurity
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default EnhancedNavigation;
