interface Service {
id: string;,
name: string;
}

import * as React from "react";
import { Routes, Route } from "react-router-dom, ";
import { ThemeProvider } from "./components/ThemeProvider, ";
import ErrorBoundary from "./components/ErrorBoundary";

// Simple components;
const Home: any = () => (
<div className="min-h-screen bg-gray-900 text-white p-8">
<h1 className="text-4xl font-bold mb-4">Zion Tech Group</h1>
<p className="text-xl">Advanced AI; Quantum Computing & Technology Solutions</p>
</div>
);

const Services: any = () => (
<div className="min-h-screen bg-gray-900 text-white p-8">
<h1 className="text-4xl font-bold mb-4">Our Services</h1>
<p className="text-xl">Comprehensive technology solutions for your business</p>
</div>
);

const About: any = () => (
<div className="min-h-screen bg-gray-900 text-white p-8">
<h1 className="text-4xl font-bold mb-4">About Us</h1>
<p className="text-xl">Leading the future of technology</p>
</div>
);

const Contact: any = () => (
<div className="min-h-screen bg-gray-900 text-white p-8">
<h1 className="text-4xl font-bold mb-4">Contact Us</h1>
<p className="text-xl">Get in touch with our team</p>
</div>
);

const App: React.FC = () => {
<<<<<<< HEAD
return (
<ErrorBoundary>
<ThemeProvider>
<Routes>
<Route path="/" element={<Home />} />
<Route path="/services" element={<Services />} />
<Route path="/about" element={<About />} />
<Route path="/contact" element={<Contact />} />
</Routes>
</ThemeProvider>
</ErrorBoundary>
);
};
=======
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </ThemeProvider>
    </ErrorBoundary>
  );
  };
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-a97e

export default App;<//ErrorBoundary><///ErrorBoundary>
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import { Footer } from './components/Footer'
import Sidebar from './components/layout/Sidebar'
import ErrorBoundary from './components/ErrorBoundary'
// Import pages,
import HomePage from './pages/Home'
import AboutPage from './pages/About'
import ContactPage from './pages/Contact'
import ServicesPage from './pages/Services'
import PricingPage from './pages/Pricing'
export default function App() {
return (
<ErrorBoundary>
<Router>
<div className="min-h-screen bg-gray-50">
<Header />
<Sidebar />
<main className="flex-1 lg:ml-80">
<Routes>
<Route path="/" element={<HomePage />} />
<Route path="/about" element={<AboutPage />} />
<Route path="/contact" element={<ContactPage />} />
<Route path="/services" element={<ServicesPage />} />
<Route path="/pricing" element={<PricingPage />} />
</Routes>
</main>
<Footer />
</div>
</Router>
</ErrorBoundary>
)
}
