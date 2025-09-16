import React from 'react'
import ReactDOM from 'react-dom/client'
import AppEntrypoint from './AppEntrypoint'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppEntrypoint />
  </React.StrictMode>,
)