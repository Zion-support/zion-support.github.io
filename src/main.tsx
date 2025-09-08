import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import App from './App'
import './index.css'
import { registerServiceWorker } from './utils/serviceWorker'
import { ErrorBoundary } from './components/ErrorBoundary'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <HelmetProvider>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </HelmetProvider>
    </Router>
  </React.StrictMode>,
)

// Register service worker in production only
if ('serviceWorker' in navigator && import.meta.env.PROD) {
	window.addEventListener('load', () => {
		const swUrl = '/sw.js'
		navigator.serviceWorker.register(swUrl).catch((error) => {
			// // // // // console.error('Service worker registration failed:', error)
		})
	})
}
