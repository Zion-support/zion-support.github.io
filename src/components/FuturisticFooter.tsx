import React from 'react';

const FuturisticFooter: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center">
          <h3 className="text-xl font-bold mb-4">Zion Tech Group</h3>
          <p className="text-gray-300 text-sm mb-4">
            Leading provider of AI and technology solutions for modern businesses.
          </p>
          <p className="text-gray-400 text-sm">
            © 2024 Zion Tech Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FuturisticFooter;