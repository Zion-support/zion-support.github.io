import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Zion Tech Group</h1>
          <p>Revolutionary technology solutions for the future</p>
        </header>
        
        <Routes>
          <Route path="/" element={
            <main>
              <section>
                <h2>Welcome to Zion Tech Group</h2>
                <p>We are building the future with cutting-edge technology solutions.</p>
              </section>
            </main>
          } />
        </Routes>
        
        <footer>
          <p>&copy; 2025 Zion Tech Group. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;