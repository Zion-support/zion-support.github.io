import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Sidebar } from './components/Sidebar';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { SolutionsPage } from './pages/SolutionsPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { BlogPage } from './pages/BlogPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { ComprehensiveServicesPage } from './pages/ComprehensiveServicesPage';
import Sitemap from './pages/Sitemap';
import Support from './pages/Support';
import Training from './pages/Training';
import Helpdesk from './pages/Helpdesk';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <div className="flex pt-16">
        <Sidebar />
        <main className="flex-1 ml-64 min-h-screen">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/*" element={<ServicesPage />} />
            <Route path="/comprehensive-services" element={<ComprehensiveServicesPage />} />
            <Route path="/solutions" element={<SolutionsPage />} />
            <Route path="/solutions/*" element={<SolutionsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/about/*" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/*" element={<BlogPage />} />
            <Route path="/careers" element={<AboutPage />} />
            <Route path="/partners" element={<AboutPage />} />
            <Route path="/press" element={<AboutPage />} />
            <Route path="/case-studies" element={<BlogPage />} />
            <Route path="/research-development" element={<BlogPage />} />
            <Route path="/docs" element={<BlogPage />} />
            <Route path="/api" element={<BlogPage />} />
            <Route path="/developer" element={<BlogPage />} />
            <Route path="/help" element={<Helpdesk />} />
            <Route path="/training" element={<Training />} />
            <Route path="/community" element={<BlogPage />} />
            <Route path="/support" element={<Support />} />
            <Route path="/sitemap" element={<Sitemap />} />
            <Route path="/privacy-policy" element={<BlogPage />} />
            <Route path="/terms-of-service" element={<BlogPage />} />
            <Route path="/cookie-policy" element={<BlogPage />} />
            <Route path="/request-quote" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;