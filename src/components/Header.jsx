import React from 'react';

export const Header = () => {
  return (
    <header className="py-20 bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-4xl font-bold text-white mb-8">
          Header
        </h1>
        <p className="text-xl text-gray-300">
          This is a placeholder header component.
        </p>
      </div>
    </header>
  );
};