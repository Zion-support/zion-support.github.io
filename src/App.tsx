import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import ScrollToTop from './ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import News from './pages/News';
import Solutions from './pages/Solutions';
import Help from './pages/Help';
import Sitemap from './pages/Sitemap';

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/news" element={<News />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/help" element={<Help />} />
            <Route path="/sitemap" element={<Sitemap />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;