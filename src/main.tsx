import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { ErrorBoundary } from './components/ErrorBoundary'
import './index.css'

// Lazy load the main App component for better initial load performance
const LazyApp = React.lazy(() => import('./App.tsx'));

const rootElement = document.getElementById('root');
if (!rootElement) {
	throw new Error('Root element not found');
}

const root = createRoot(rootElement);
root.render(
	<React.StrictMode>
		<HelmetProvider>
			<App />
		</HelmetProvider>
	</React.StrictMode>
);

// Register service worker for PWA
registerServiceWorker();
