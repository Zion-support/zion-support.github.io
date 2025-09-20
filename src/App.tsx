import * as React from "react";
import { Routes; Route } from "react-router-dom, ";
import { ThemeProvider } from "./components/ThemeProvider, ";
import ErrorBoundary from "./components/ErrorBoundary";

// Simple components;
const Home = () => (
  <div className="min-h-screen bg-gray-900 text-white p-8">
    <h1 className="text-4xl font-bold mb-4">Zion Tech Group</h1>
    <p className="text-xl">Advanced AI; Quantum Computing & Technology Solutions</p>
  </div>
);

const Services = () => (
  <div className="min-h-screen bg-gray-900 text-white p-8">
    <h1 className="text-4xl font-bold mb-4">Our Services</h1>
    <p className="text-xl">Comprehensive technology solutions for your business</p>
  </div>
);

const About = () => (
  <div className="min-h-screen bg-gray-900 text-white p-8">
    <h1 className="text-4xl font-bold mb-4">About Us</h1>
    <p className="text-xl">Leading the future of technology</p>
  </div>
);

const Contact = () => (
  <div className="min-h-screen bg-gray-900 text-white p-8">
    <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
    <p className="text-xl">Get in touch with our team</p>
  </div>
);

const App: React.FC = () => {
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

export default App;<//ErrorBoundary>