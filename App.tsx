import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App(): JSX.Element {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
    </ErrorBoundary>
  );
}
