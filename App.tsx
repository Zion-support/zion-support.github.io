import React from 'react';
import { Suspense, lazy } from 'react';
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

export default function App(): React.JSX.Element {
  return (
    <ErrorBoundary>
      <Router>
        <div className="min-h-screen bg-white">
          <ScrollToTop />
          <Header />
          <main className="flex-grow">
            <Suspense fallback={
              <div className="container mx-auto px-4 py-8">
                <LoadingSpinner size="lg" className="py-20" />
              </div>
            }>
              <Routes>
                <Route path="/" element={
                  <div className="container mx-auto px-4 py-8">
                    <div className="max-w-4xl mx-auto text-center">
                      <h1 className="text-6xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        Welcome to Zion Tech Group
                      </h1>
                      <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
                        Your trusted partner in AI and technology solutions.
                        We're revolutionizing the future with cutting-edge innovations that drive business transformation.
                      </p>
                      <div className="grid md:grid-cols-2 gap-6 mb-8">
                        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg">
                          <h3 className="text-xl font-semibold text-gray-900 mb-3">AI Solutions</h3>
                          <p className="text-gray-600">
                            Advanced artificial intelligence systems that transform your business operations.
                          </p>
                        </div>
                        <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg">
                          <h3 className="text-xl font-semibold text-gray-900 mb-3">Tech Innovation</h3>
                          <p className="text-gray-600">
                            Next-generation technology solutions for the modern enterprise.
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-wrap justify-center gap-4 mb-12">
                        <Link
                          className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg"
                          to="/pages/UltimateTechBreakthrough2026"
                        >
                          Explore Our Technology
                        </Link>
                        <Link
                          className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-300 border-2 border-gray-200 hover:border-gray-300 shadow-lg"
                          to="/contact"
                        >
                          Get in Touch
                        </Link>
                      </div>
                      {/* Stats Section */}
                      <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 text-white text-center">
                        <div className="grid md:grid-cols-3 gap-8">
                          <div>
                            <div className="text-4xl font-bold mb-2">500+</div>
                            <div className="text-gray-300">Projects Completed</div>
                          </div>
                          <div>
                            <div className="text-4xl font-bold mb-2">99.9%</div>
                            <div className="text-gray-300">Uptime Guarantee</div>
                          </div>
                          <div>
                            <div className="text-4xl font-bold mb-2">24/7</div>
                            <div className="text-gray-300">Support Available</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                } />
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
                          <form className="space-y-4">
                            <div>
                              <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              />
                            </div>
                            <div>
                              <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              />
                            </div>
                            <div>
                              <textarea
                                placeholder="Your Message"
                                rows={4}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              ></textarea>
                            </div>
                            <button
                              type="submit"
                              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300"
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
                        The page you're looking for doesn't exist or has been moved.
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