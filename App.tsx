import React from 'react';
import { AppRouter } from './src/router';
import './src/index.css';

export default function App(): React.JSX.Element {
  return (
    <div className="App">
      <AppRouter />
    </div>
  );
}
