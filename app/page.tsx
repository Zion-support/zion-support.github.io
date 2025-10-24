'use client';

import React from 'react';

const AppPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <main>
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Zion Tech Group</h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Leading technology solutions provider helping businesses transform their digital infrastructure with cutting-edge AI and IT services.</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AppPage;
