import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// Minimal working App component
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <h1>Zion Tech Group</h1>
      </div>
    </Router>
  );
}

export default App;