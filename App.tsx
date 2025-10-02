import React, { JSX } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import HomePage from './app/page';
import { Header, Footer } from './app/components/Navigation';
import PerformanceMonitor from './app/components/PerformanceMonitor';
import SEOOptimizer from './app/components/SEOOptimizer';
import AccessibilityEnhancer from './app/components/AccessibilityEnhancer';
import LazyLoader from './app/components/LazyLoader';
import './app/globals.css';
import ConsensusIntelligenceBreakthroughBanner from "./components/ConsensusIntelligenceBreakthroughBanner";
import AutonomousEnterpriseBreakthroughBanner from "./components/AutonomousEnterpriseBreakthroughBanner";
import June2026MegaBreakthroughBanner from "./components/June2026MegaBreakthroughBanner";
import QuantumConsciousnessRevolutionBanner from "./components/QuantumConsciousnessRevolutionBanner";

export default function App(): JSX.Element {
  return (
    <HelmetProvider>
      <AccessibilityEnhancer>
        <SEOOptimizer
          title="Zion Tech Group - Revolutionary AI Solutions for Enterprise"
          description="Transform your business with Meta-Cognitive AI, Quantum-Neural Networks, and Autonomous Operations. Experience 2000x processing speed and 99.9% automation rates."
          keywords="AI, Enterprise AI, Quantum Computing, Autonomous Operations, Meta-Cognitive AI, Zion Tech Group"
          structuredData={{
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Zion Tech Group",
            "url": "https://ziontechgroup.com",
            "description": "Revolutionary AI Solutions for Enterprise",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://ziontechgroup.com/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          }}
        />
        <PerformanceMonitor />
        <Router>
          <div className="min-h-screen bg-slate-950">
            <Header />
            
            {/* NEW: June 2026 Mega Breakthrough Banner - Most Prominent */}
            <LazyLoader>
              <June2026MegaBreakthroughBanner />
            </LazyLoader>

            {/* NEW: Quantum Consciousness Revolution Banner - Revolutionary Technology */}
            <LazyLoader>
              <QuantumConsciousnessRevolutionBanner />
            </LazyLoader>

            {/* Existing Banners and Sections */}
            <LazyLoader>
              <ConsensusIntelligenceBreakthroughBanner />
            </LazyLoader>
            <LazyLoader>
              <AutonomousEnterpriseBreakthroughBanner />
            </LazyLoader>
            
            <main className="min-h-screen" role="main" id="main-content">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/services" element={
                  <LazyLoader>
                    <div className="py-20 px-4">
                      <h1 className="text-4xl font-bold text-center text-white">Services</h1>
                    </div>
                  </LazyLoader>
                } />
                <Route path="/case-studies" element={
                  <LazyLoader>
                    <div className="py-20 px-4">
                      <h1 className="text-4xl font-bold text-center text-white">Case Studies</h1>
                    </div>
                  </LazyLoader>
                } />
                <Route path="/contact" element={
                  <LazyLoader>
                    <div className="py-20 px-4">
                      <h1 className="text-4xl font-bold text-center text-white">Contact</h1>
                    </div>
                  </LazyLoader>
                } />
                <Route path="/about" element={
                  <LazyLoader>
                    <div className="py-20 px-4">
                      <h1 className="text-4xl font-bold text-center text-white">About</h1>
                    </div>
                  </LazyLoader>
                } />
                <Route path="*" element={
                  <div className="py-20 px-4">
                    <h1 className="text-4xl font-bold text-center text-white">404 - Page Not Found</h1>
                  </div>
                } />
              </Routes>
            </main>
            
            <Footer />
          </div>
        </Router>
      </AccessibilityEnhancer>
    </HelmetProvider>
  );
}