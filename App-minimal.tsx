import React from 'react;'
import { BrowserRouter as Router } from 'react-router-dom;'
// Minimal working App component
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-8">
          
          <div className="mt-8 text-center">
            <p className="text-gray-400">
              Welcome to our minimal app version
            </p>
          </div>
        </div>
      </div>
    </Router>
  );
}
export default AppMinimal
