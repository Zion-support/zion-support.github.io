import React from 'react';
import { createRoot } from 'react-dom/client';
import App from '../App';

// Main entry point
export default function main() {
  const container = document.getElementById('root');
  if (container) {
    const root = createRoot(container);
    root.render(<App />);
  }
}