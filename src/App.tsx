import React from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Welcome to Zion Tech Group
          </h1>
          <p className="text-lg text-foreground/80 mb-8">
            Advanced Technology Solutions for the Future
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-card p-6 rounded-lg border">
              <h3 className="text-xl font-semibold mb-2">AI Solutions</h3>
              <p className="text-foreground/70">
                Cutting-edge artificial intelligence solutions for modern businesses.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg border">
              <h3 className="text-xl font-semibold mb-2">Cloud Services</h3>
              <p className="text-foreground/70">
                Scalable cloud infrastructure and deployment solutions.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg border">
              <h3 className="text-xl font-semibold mb-2">Digital Transformation</h3>
              <p className="text-foreground/70">
                Complete digital transformation strategies and implementation.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;