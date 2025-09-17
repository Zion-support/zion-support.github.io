import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
>>>>>>> 223483ef1209b0284879b571c698436a9a71d005

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <PerformanceMonitorComponent />
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        <Header />
        
        <Routes>
          <Route path="/" element={
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
};

export default App;