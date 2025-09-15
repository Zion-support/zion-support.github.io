import React from 'react';
>>>>>>> cursor/create-and-deploy-new-content-6f13
import './index.css';

const rootElement = document.getElementById('root');

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
>>>>>>> cursor/create-and-deploy-new-content-6f13
