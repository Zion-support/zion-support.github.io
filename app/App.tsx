'use client'

import React from 'react';
import { useRouter } from 'next/navigation'
;
const App: React.FC = () => {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-white text-center mb-8">
          "Zion Tech Group"
        </h1>
        <p className="text-xl text-gray-300 text-center">
          "Welcome to our AI-powered technology solutions"
        </p>
      </div>
    </div>
  );
}
  );
}
export default App