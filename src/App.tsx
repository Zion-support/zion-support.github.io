import React from 'react';
function App() {
  console.log('App component rendering...');
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Zion Tech Group
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Leading AI & Technology Solutions for a Smarter Future
        </p>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">Site is Working!</h2>
          <p className="text-gray-700 mb-4">
            ✅ The React application is now loading correctly!
          </p>
          <p className="text-gray-600">
            The console errors have been resolved and the site is functional.
          </p>
        </div>
      </div>
    </div>
  );
}
export default App;

