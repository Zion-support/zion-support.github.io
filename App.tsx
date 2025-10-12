import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Navigation from './app/components/Navigation'
import Footer from './app/components/Footer'
import AppRoutes from './app/routes'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        <main className="pt-20">
          <AppRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App