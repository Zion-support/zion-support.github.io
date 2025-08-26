import React from 'react';
import { Link } from 'react-router-dom';

export function Logo() {
  return (
    <Link to="/" className="flex items-center space-x-2">
      <div className="w-8 h-8 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center">
        <span className="text-white font-bold text-lg">Z</span>
      </div>
      <div className="hidden sm:block">
        <h1 className="text-xl font-bold text-white">Zion Tech Group</h1>
        <p className="text-xs text-zion-slate-light">Innovation • Technology • Solutions</p>
      </div>
    </Link>
  );
}