'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

<<<<<<< HEAD
const ErrorPage: React.FC = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Error - Zion Tech Group</title>
        <meta name="description" content="An error occurred while loading the page." />
        <meta name="keywords" content="error, 404, not found" />
      </Helmet>

      <Navigation />
<<<<<<< HEAD
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-amber-900 to-slate-900">
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Error
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              An error occurred while loading the page.
=======
      
      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Error
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Error page.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                  Get Started
                </button>
                <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                  Learn More
                </button>
              </div></div></div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover how our solutions can help transform your business.
              </p>
            </div></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-4">
                    <feature.icon className="h-8 w-8 text-blue-600 mr-3" />
                    <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                  </div></div></div>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Contact us today to learn more about our services.
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => window.history.back()}
                className="bg-gradient-to-r from-amber-500 to-blue-600 hover:from-amber-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Go Back
              </button>
              <button 
                onClick={() => window.location.href = '/'}
                className="border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"
              >
                Go Home
              </button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default ErrorPage;
=======
import { useEffect } from 'react';

export default function Error({
  error,
  reset}: {
  error: Error & { digest?: string };)
    reset: () => void;
}) {
  useEffect(() => {
export default function Error({)}
  error,
  reset}: {}
  error: Error & { digest?: string };
  reset: () => void;
}) {}
  useEffect(() => {}
    // Log the error to an error reporting service
    // }, [error]);
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {}
  useEffect(() => {}
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return(<div className="min-h-screen bg-gray-50 flex items-center justify-center">)
      <div className="text-center">)
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Something went wrong!</h2>)
        <button;)
          onClick={() => reset()}
          className="px-4 py-2 bg-blue-600 text-white rounded hover: bg-blue-700"
        >
          Try again;
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center"></div>
      <div className="text-center"></div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Something went wrong!</h2>
        <button
          onClick={() => reset()}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Try again
        </button>
      </div>,
    </div>);
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
