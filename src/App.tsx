import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import SolutionsPage from './pages/SolutionsPage';
import Resources from './pages/Resources';

const HomePage = React.lazy(() => import('./pages/HomePage'));
const AboutPage = React.lazy(() => import('./pages/AboutPage'));
const ContactPage = React.lazy(() => import('./pages/ContactPage'));
const ServicesPage = React.lazy(() => import('./pages/ServicesPage'));
const BlogPage = React.lazy(() => import('./pages/BlogPage'));

const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
  </div>
);

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 xl:grid-cols-[18rem_1fr] gap-8">
            <Sidebar />
            <div id="main-content">
              <React.Suspense fallback={<LoadingSpinner />}>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/solutions/*" element={<SolutionsPage />} />
                  <Route path="/services/*" element={<ServicesPage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/blog/*" element={<BlogPage />} />
                  <Route path="/resources" element={<Resources />} />
                </Routes>
              </React.Suspense>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;