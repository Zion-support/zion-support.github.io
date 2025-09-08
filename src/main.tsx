console.log("main.tsx: Start");
import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App.tsx';

// Performance monitoring setup
if (import.meta.env.DEV) {
  console.log('🚀 Zion Tech Group - Development Mode');
}

const root = createRoot(rootElement);
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
