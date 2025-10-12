import React from 'react';
import Navigation from './Navigation';

export default function Header() {
  return (
    <header className="bg-slate-900/90 backdrop-blur-sm border-b border-purple-500/20">
      <Navigation />
    </header>
  );
}