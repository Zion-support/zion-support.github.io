import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

try {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
} catch (error) {
  console.error("Global error caught in main.tsx:", error);
  const rootElement = document.getElementById('root');
  if (rootElement) {
    rootElement.innerHTML = `
      <div style="padding: 20px; text-align: center; font-family: sans-serif;">
        <h1>Application Error</h1>
        <p>A critical error occurred while loading the application.</p>
        <p>Error: ${(error as Error).message}</p>
        <p>Please check the console for more details.</p>
      </div>
    `;
  }
}