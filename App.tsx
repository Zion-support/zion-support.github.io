import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ErrorBoundary from "./src/components/ErrorBoundary";
import Header from "./src/components/Header";
import Sidebar from "./src/components/layout/Sidebar";
import Footer from "./src/components/Footer";
import HomePage from "./src/pages/Home";
import AboutPage from "./src/pages/About";
import ContactPage from "./src/pages/Contact";
import ServicesPage from "./src/pages/Services";
import PricingPage from "./src/pages/Pricing";

export default function App() {
<<<<<<< HEAD
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  const handleMenuClick = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-purple-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Zion Tech Group
          </h1>
          <p className="text-xl text-blue-200 mb-8">
            Innovative IT Solutions & AI Services
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h3 className="text-lg font-semibold mb-2">AI Services</h3>
              <p className="text-sm text-blue-200">
                Advanced AI-powered solutions for modern businesses
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h3 className="text-lg font-semibold mb-2">IT Services</h3>
              <p className="text-sm text-blue-200">
                Comprehensive managed IT and cybersecurity solutions
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h3 className="text-lg font-semibold mb-2">Micro SAAS</h3>
              <p className="text-sm text-blue-200">
                Scalable software solutions for growing businesses
              </p>
            </div>
          </div>
          <div className="mt-12">
            <p className="text-sm text-blue-300">
              Successfully built and deployed on Netlify! 🚀
            </p>
          </div>
        </div>
      </Router>
    </ErrorBoundary>
  );
}
