import React from 'react';
<<<<<<< HEAD
import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App.tsx';
=======
import { createRoot } from 'react-dom/client';
import App from '../App.tsx';
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee
import './index.css';

const rootElement = document.getElementById('root');

<<<<<<< HEAD
function renderApp() {
    const app = (
        <React.StrictMode>
            <HelmetProvider>
                <QueryClientProvider client={queryClient}>
                    <Router>
                        <App />
                    </Router>
                </QueryClientProvider>
            </HelmetProvider>
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
    console.error('Global error caught in main.jsx:', error);
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
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee
