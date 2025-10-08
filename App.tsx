import React, { Suspense, lazy } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { ErrorBoundary } from './app/components/ErrorBoundary';

// Lazy load components
const UnifiedContentPromotion = lazy(() => import('./app/components/UnifiedContentPromotion').catch(() => ({ default: () => null })));
const InteractiveAIROICalculator = lazy(() => import('./app/components/InteractiveAIROICalculator').catch(() => ({ default: () => null })));

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <ErrorBoundary>
        <div className="App">
          <header className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-5xl font-bold mb-4">Zion Tech Group</h1>
              <p className="text-xl">Advanced AI and IT Solutions</p>
            </div>
          </header>
          
          <main>
            <Suspense fallback={<div className="py-16 text-center">Loading...</div>}>
              <UnifiedContentPromotion />
            </Suspense>
            
            <section className="py-16 px-4 bg-white">
              <div className="container mx-auto max-w-6xl">
                <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="p-6 bg-gray-50 rounded-lg">
                    <h3 className="text-2xl font-bold mb-4">AI Solutions</h3>
                    <p className="text-gray-600">Cutting-edge artificial intelligence solutions for your business</p>
                  </div>
                  <div className="p-6 bg-gray-50 rounded-lg">
                    <h3 className="text-2xl font-bold mb-4">IT Consulting</h3>
                    <p className="text-gray-600">Expert technology consulting and implementation services</p>
                  </div>
                  <div className="p-6 bg-gray-50 rounded-lg">
                    <h3 className="text-2xl font-bold mb-4">Cloud Services</h3>
                    <p className="text-gray-600">Scalable cloud infrastructure and migration services</p>
                  </div>
                </div>
              </div>
            </section>

            <Suspense fallback={<div className="py-16 text-center">Loading...</div>}>
              <InteractiveAIROICalculator />
            </Suspense>
          </main>

          <footer className="bg-gray-900 text-white py-8">
            <div className="container mx-auto px-4 text-center">
              <p>&copy; 2024 Zion Tech Group. All rights reserved.</p>
            </div>
          </footer>
        </div>
      </ErrorBoundary>
    </HelmetProvider>
  );
};

export default App;