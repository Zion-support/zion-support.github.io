import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

import Home from '@/pages/HomeLite';
import ServicesPage from '@/pages/ServicesPage';
import Solutions from '@/pages/Solutions';
import Resources from '@/pages/Resources';
import Support from '@/pages/Support';
import Pricing from '@/pages/Pricing';
import Marketplace from '@/pages/Marketplace';
import Sitemap from '@/pages/Sitemap';
import About from '@/pages/About';
import Contact from '@/pages/Contact';

// Services detail pages
import AIServices from '@/pages/services/AIServices';
import MicroSaaS from '@/pages/services/MicroSaaS';
import ITServices from '@/pages/services/ITServices';

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Header />
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/services/ai-services" element={<AIServices />} />
              <Route path="/services/micro-saas" element={<MicroSaaS />} />
              <Route path="/services/it-services" element={<ITServices />} />
              <Route path="/solutions" element={<Solutions />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/support" element={<Support />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/marketplace" element={<Marketplace />} />
              <Route path="/sitemap" element={<Sitemap />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default App;