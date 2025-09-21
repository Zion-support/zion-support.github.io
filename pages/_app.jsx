import React from 'react';

export default function App({ Component, pageProps }) {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-slate-900 text-white p-4">
        <h1 className="text-xl font-bold">Zion Tech Group</h1>
      </header>
      <main className="flex-1">
        <Component {...pageProps} />
      </main>
      <footer className="bg-slate-900 text-white p-4 text-center">
        <p>&copy; 2025 Zion Tech Group. All rights reserved.</p>
      </footer>
    </div>
  )
}