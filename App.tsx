import { Suspense, lazy, useEffect, useState } from 'react';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Footer from './src/Footer';
import Header from './src/Header';
import ScrollToTop from './src/ScrollToTop';
import ErrorBoundary from './src/components/ErrorBoundary';
import LoadingSpinner from './src/components/LoadingSpinner';
import PerformanceMonitor from './src/components/PerformanceMonitor';
import './src/index.css';

// Lazy load the main page component for better performance
const UltimateTechBreakthrough2026 = lazy(() => import('./src/pages/UltimateTechBreakthrough2026'));
const EnhancedHomePage = lazy(() => import('./src/components/EnhancedHomePage'));

export default function App(): React.JSX.Element {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading time for better UX
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ErrorBoundary>
      <Router>
        <div className="min-h-screen bg-white">
          <ScrollToTop />
          <Header />
          <main className="flex-grow">
            {!isLoaded && (
              <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
                <LoadingSpinner size="lg" />
              </div>
            )}
            <Suspense fallback={
              <div className="container mx-auto px-4 py-8">
                <LoadingSpinner size="lg" className="py-20" />
              </div>
            }>
              <Routes>
                <Route path="/" element={<EnhancedHomePage />} />
                <Route path="/services" element={<UltimateTechBreakthrough2026 />} />
                <Route path="/pages/UltimateTechBreakthrough2026" element={<UltimateTechBreakthrough2026 />} />
                <Route path="/contact" element={
                  <div className="container mx-auto px-4 py-8">
                    <div className="max-w-4xl mx-auto">
                      <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
                        <p className="text-xl text-gray-600">
                          Ready to transform your business with our AI and technology solutions?
                          Get in touch with our team today.
                        </p>
                      </div>
                      <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl shadow-lg">
                          <h3 className="text-2xl font-semibold text-gray-900 mb-6">Get In Touch</h3>
                          <div className="space-y-4">
                            <div className="flex items-center">
                              <svg className="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                              </svg>
                              <span className="text-gray-600">info@ziontechgroup.com</span>
                            </div>
                            <div className="flex items-center">
                              <svg className="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                              </svg>
                              <span className="text-gray-600">+1 (555) 123-4567</span>
                            </div>
                            <div className="flex items-start">
                              <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                              <span className="text-gray-600">123 Tech Street<br />Innovation City, IC 12345</span>
                            </div>
                          </div>
                        </div>
                        <div className="bg-white border border-gray-200 p-8 rounded-xl shadow-lg">
                          <h3 className="text-2xl font-semibold text-gray-900 mb-6">Send us a message</h3>
                          <form className="space-y-4" onSubmit={(e) => {
                            e.preventDefault();
                            alert('Thank you for your message! We\'ll get back to you soon.');
                          }}>
                            <div>
                              <input
                                type="text"
                                placeholder="Your Name"
                                required
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                              />
                            </div>
                            <div>
                              <input
                                type="email"
                                placeholder="Your Email"
                                required
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                              />
                            </div>
                            <div>
                              <textarea
                                placeholder="Your Message"
                                rows={4}
                                required
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                              ></textarea>
                            </div>
                            <button
                              type="submit"
                              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg"
                            >
                              Send Message
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                } />
                <Route path="*" element={
                  <div className="container mx-auto px-4 py-8">
                    <div className="max-w-2xl mx-auto text-center">
                      <div className="text-8xl font-bold text-gray-200 mb-4">404</div>
                      <h1 className="text-3xl font-bold text-gray-900 mb-4">Page Not Found</h1>
                      <p className="text-lg text-gray-600 mb-8">
                        The page you&apos;re looking for doesn&apos;t exist or has been moved.
                      </p>
                      <Link
                        className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 inline-block"
                        to="/"
                      >
                        Go Home
                      </Link>
                    </div>
                  </div>
                } />
              </Routes>
            </Suspense>
          </main>
          <Footer />
          <PerformanceMonitor />
        </div>
      </Router>
    </ErrorBoundary>
  );
}