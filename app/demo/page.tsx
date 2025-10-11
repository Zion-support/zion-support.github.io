
'use client';
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const DemoPage: React.FC = () => {
  const [selectedDemo, setSelectedDemo] = useState(0);

  const demos = [
    {
      title: "AI Solutions Demo",
      description: "Experience our AI-powered solutions in action"
    },
    {
      title: "Data Analytics Demo", 
      description: "See how our analytics tools transform your data"
    },
    {
      title: "Security Demo",
      description: "Witness our cybersecurity solutions in action"
    }
  ];

  return (
    <>
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-6">
              Live Demos
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              See our solutions in action
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              {demos.map((demo, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{demo.title}</h3>
                  <p className="text-gray-300 mb-4">{demo.description}</p>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
                    Watch Demo
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default DemoPage;