import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
// Minimal working App component
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-white text-center mb-8">
            Zion Tech Group
          </h1>
          <p className="text-xl text-gray-300 text-center">
            Advanced AI & IT Solutions
          </p>
          <div className="mt-8 text-center">
            <p className="text-gray-400">
              Website is being updated. Please check back soon.
            </p>
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App;<//Router>