import React from 'react';
<<<<<<< HEAD
import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App';
=======
import { createRoot } from 'react-dom/client';
import App from '../App.tsx';
>>>>>>> cursor/create-and-deploy-new-content-764d
import './index.css';

const rootElement = document.getElementById('root');

<<<<<<< HEAD
function renderApp() {
    const app = (
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
    
    if (rootElement?.hasChildNodes()) {
        hydrateRoot(rootElement, app);
    } else if (rootElement) {
        createRoot(rootElement).render(app);
    }
}

function displayFatalError(message) {
    if (rootElement) {
        rootElement.innerHTML = `
            <div style="padding:20px;text-align:center;font-family:sans-serif;">
                <h1>Application Error</h1>
                <p>${message}</p>
            </div>`;
    }
}

try {
    renderApp();
} catch (error) {
    console.error('Global error caught in main.tsx:', error);
    displayFatalError(error.message);
}

window.addEventListener('error', (e) => {
    console.error('Unhandled error:', e.error || e.message);
    displayFatalError(e.message);
});
=======
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
>>>>>>> cursor/create-and-deploy-new-content-764d
