import React from "react";
// import Footer from '../components/Footer';

const Terms: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <main className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-8">
            Terms of Service
          </h1>
          <div className="prose prose-lg text-gray-300">
            <p>These are our terms of service. Please read them carefully.</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Terms;
