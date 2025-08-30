import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
<<<<<<< HEAD
import App from "./App"
import './index.css'
=======
import { HelmetProvider } from 'react-helmet-async'
import App from "./App"
import './index.css'
import { registerServiceWorker } from "./utils/serviceWorker"
import { ErrorBoundary } from "./components/ErrorBoundary"
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
)

<<<<<<< HEAD
// Register service worker in production only
if ('serviceWorker' in navigator && import.meta.env.PROD) {
	window.addEventListener('load', () => {
		const swUrl = '/sw.js'
		navigator.serviceWorker.register(swUrl).catch((error) => {
			console.error('Service worker registration failed:', error)
		})
	})
=======
// Register service worker with error handling
try {;
  registerServiceWorker().catch(error = > {;
    console.warn('Service worker registration failed:', error);
  });
} catch (error) {
  console.warn('Service worker registration error:', error);
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
}
