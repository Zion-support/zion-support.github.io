import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import App from './App.tsx'
import './index.css'
import { reportWebVitals } from './reportWebVitals'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <HelmetProvider>
      <Router>
        <App  />
      </Router>
    </HelmetProvider>
  </React.StrictMode>,
)

// Register basic Web Vitals reporting
reportWebVitals()

// Optional: basic service worker registration for offline/fast reload of static assets
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/sw.js')
      .catch(() => void 0)
  })
}
