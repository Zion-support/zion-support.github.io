import React from 'react'
import ReactDOM from 'react-dom/client'
// Use a tiny shell App to avoid conflicted monolith in project root
import App from './shell/AppShell'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)