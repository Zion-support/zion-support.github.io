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
  const services = [
    {
      title: 'AI Solutions',
      description: 'Cutting-edge artificial intelligence solutions for your business needs. From machine learning to natural language processing.',
      icon: '🤖',
      features: ['Machine Learning', 'NLP', 'Computer Vision', 'Predictive Analytics'],
    },
    {
      title: 'IT Services',
      description: 'Comprehensive IT services and infrastructure management. Keep your systems running smoothly and securely.',
      icon: '💻',
      features: ['System Administration', 'Network Security', 'Cloud Migration', '24/7 Support'],
    },
    {
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services. Modernize your infrastructure with our cloud expertise.',
      icon: '☁️',
      features: ['AWS/Azure/GCP', 'DevOps', 'Containerization', 'Auto-scaling'],
    },
    {
      title: 'Cybersecurity',
      description: 'Advanced security solutions to protect your business from evolving threats and ensure compliance.',
      icon: '🔒',
      features: ['Threat Detection', 'Compliance', 'Penetration Testing', 'Security Audits'],
    },
    {
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with our advanced analytics and business intelligence solutions.',
      icon: '📊',
      features: ['Data Visualization', 'Business Intelligence', 'Real-time Analytics', 'Custom Dashboards'],
    },
    {
      title: 'Digital Transformation',
      description: 'Complete digital transformation services to modernize your business processes and improve efficiency.',
      icon: '🚀',
      features: ['Process Automation', 'Workflow Optimization', 'Digital Strategy', 'Change Management'],
    },
  ];

  const handleMenuClick = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <ParticleBackground />
      <Header />

      <main className="relative">
        {/* Hero Section */}
        <section className="relative py-20 px-4 text-center">
          <div className="container mx-auto max-w-6xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Welcome to Zion Tech
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Your trusted partner for AI and IT solutions. We help businesses transform through
              cutting-edge technology and innovative solutions.
            </p>
          </div>
        </div>
      </Router>
    </ErrorBoundary>
  );
}
