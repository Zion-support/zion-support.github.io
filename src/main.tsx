import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '../App'
import './globals.css'

// Initialize performance optimizations
if (typeof window !== 'undefined') {
  // Preload critical resources
  const preloadLink = document.createElement('link')
  preloadLink.rel = 'preload'
  preloadLink.href = '/fonts/inter-var.woff2'
  preloadLink.as = 'font'
  preloadLink.type = 'font/woff2'
  preloadLink.crossOrigin = 'anonymous'
  document.head.appendChild(preloadLink)
}

// Create root and render app
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
