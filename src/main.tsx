import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ErrorBoundary } from './components/ErrorBoundary'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<ErrorBoundary>
			<App />
		</ErrorBoundary>
	</React.StrictMode>,
)

// Register service worker with error handling
try {
  registerServiceWorker().catch(error => {
    console.warn('Service worker registration failed:', error);
  });
} catch (error) {
  console.warn('Service worker registration error:', error);
}
