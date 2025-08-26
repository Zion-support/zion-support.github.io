import React, { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import App from './App.tsx';
import './index.css';

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
			<Suspense fallback={
				<div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
					<div className="relative">
						<div className="w-32 h-32 border-4 border-zion-cyan/20 rounded-full"></div>
						<div className="absolute top-0 left-0 w-32 h-32 border-4 border-zion-cyan border-t-transparent rounded-full animate-spin"></div>
						<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-zion-cyan font-bold text-lg">
							ZION
						</div>
					</div>
				</div>
			}>
				<LazyApp />
			</Suspense>
		</HelmetProvider>
	</React.StrictMode>
);
