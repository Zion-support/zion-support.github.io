import React, { Suspense } from 'react';

function App() {
  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <div>Welcome</div>
      </Suspense>
    </main>
  );
}

export default App;