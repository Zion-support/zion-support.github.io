import React, { Suspense } from 'react';
import LoadingSpinner from './components/LoadingSpinner';

// Main App Component
function App() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <div>App content here</div>
    </Suspense>
  );
}

export default App;