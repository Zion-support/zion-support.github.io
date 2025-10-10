import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <main>
          <Routes>
            <Route path="/" element={<div>Hello World</div>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
