import React from 'react.ts'
import ReactDOM from 'react-dom/client.ts'
import { BrowserRouter as Router  } from 'react-router-dom.ts'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
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
