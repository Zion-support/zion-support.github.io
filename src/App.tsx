>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/layout/Footer';
import { Sidebar } from './components/layout/Sidebar';
import { ErrorBoundary } from './components/ErrorBoundary';
;
// Import pages;
import HomePage from '../pages/index';
import AboutPage from '../pages/about';
import ContactPage from '../pages/contact';
import ServicesPage from '../pages/services';
import PricingPage from '../pages/pricing';
;
export default function App() {; return (; <ErrorBoundary>; <Router>; <div className = "min-h-screen bg-gray-50">; <Header />; <Sidebar />; <main className = "flex-1 lg: ml-80">, <Routes>, <Route path = "/" element = {<HomePage />} />; <Route path = "/about" element = {<AboutPage />} />; <Route path = "/contact" element = {<ContactPage />} />; <Route path = "/services" element = {<ServicesPage />} />; <Route path = "/pricing" element = {<PricingPage />} />; </Routes>; </main>; <Footer />; </div>; </Router>; </ErrorBoundary>; )};};
};
>>>>>>> 03f1818a747ef77bbf37ae59cfaf28d591236f31
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
