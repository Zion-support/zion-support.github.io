import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './globals.css';

const _root = document.getElementById('root');

if (_root) {
  ReactDOM.createRoot(_root).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
