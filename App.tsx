import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import only existing components
import Home from './src/pages/Home';
import About from './About';
import Blog from './src/pages/Blog';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;