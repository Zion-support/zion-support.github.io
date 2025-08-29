import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import App from './App'
import './index.css'
import './utils/serviceWorkerRegistration'
import { EnhancedErrorBoundary } from './components/EnhancedErrorBoundary'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <HelmetProvider>
        <EnhancedErrorBoundary>
          <App />
        </EnhancedErrorBoundary>
      </HelmetProvider>
    </Router>
  </React.StrictMode>,
)

// Service worker is automatically registered via serviceWorkerRegistration.ts
