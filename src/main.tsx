import React from 'react'
import { createRoot } from 'react-dom/client'
// Temporarily disable CSS import to unblock build
// import './index.css'
import AppMinimal from './AppMinimal'


const container = document.getElementById('root')
if (container) {
  const root = createRoot(container)
  root.render(
    <React.StrictMode>
      <AppMinimal />
    </React.StrictMode>
  )
}

