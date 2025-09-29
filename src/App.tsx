import React from 'react';
import { AppRouter } from './router';
import './index.css';

export default function App(): React.JSX.Element {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <AppRouter />
    </div>
  );
}