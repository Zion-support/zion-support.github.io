import React from 'react';
import { AppRouter } from './router';
import './index.css';

export default function App(): React.JSX.Element {
  return (
    <div className="App">
      <AppRouter />
    </div>
  );
}