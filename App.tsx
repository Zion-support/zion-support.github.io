import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center py-20">
          Zion Tech Group
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Building the future with innovative technology solutions
        </p>
        <div className="text-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors mr-4">
            Get Started
          </button>
          <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors">
            Learn More
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;