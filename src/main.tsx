import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <Router>
        <App />
      </Router>
    </HelmetProvider>
  </React.StrictMode>,
)

// Register service worker in production only
if ('serviceWorker' in navigator && import.meta.env.PROD) {
	window.addEventListener('load', () => {
		const swUrl = '/sw.js'
		navigator.serviceWorker.register(swUrl).catch((error) => {
			console.error('Service worker registration failed:', error)
		})
	})
}
