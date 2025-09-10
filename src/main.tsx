import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

const RootApp: React.FC = () => {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #0f172a, #111827)'
    }}>
      <h1 style={{ color: 'white', fontFamily: 'system-ui, sans-serif' }}>
        Zion Tech Group
      </h1>
    </div>
  )
}

const container = document.getElementById('root')
if (container) {
  const root = createRoot(container)
  root.render(
    <React.StrictMode>
      <RootApp />
    </React.StrictMode>
  )
}

