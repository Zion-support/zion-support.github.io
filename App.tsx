import React, { JSX } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './app/page';
import { Header, Footer } from './app/components/Navigation';
import './app/globals.css';
import ConsensusIntelligenceBreakthroughBanner from "./components/ConsensusIntelligenceBreakthroughBanner";
import AutonomousEnterpriseBreakthroughBanner from "./components/AutonomousEnterpriseBreakthroughBanner";
import June2026MegaBreakthroughBanner from "./components/June2026MegaBreakthroughBanner";
import QuantumConsciousnessRevolutionBanner from "./components/QuantumConsciousnessRevolutionBanner";

export default function App(): JSX.Element {
  return (
    <Router>
      <div className="min-h-screen bg-slate-950">
        <Header />
        
        {/* NEW: June 2026 Mega Breakthrough Banner - Most Prominent */}
        <June2026MegaBreakthroughBanner />

        {/* NEW: Quantum Consciousness Revolution Banner - Revolutionary Technology */}
        <QuantumConsciousnessRevolutionBanner />

        {/* Existing Banners and Sections */}
        <ConsensusIntelligenceBreakthroughBanner />
        <AutonomousEnterpriseBreakthroughBanner />
        
        <main className="min-h-screen">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<div className="py-20 px-4"><h1 className="text-4xl font-bold text-center text-white">Services</h1></div>} />
            <Route path="/case-studies" element={<div className="py-20 px-4"><h1 className="text-4xl font-bold text-center text-white">Case Studies</h1></div>} />
            <Route path="/contact" element={<div className="py-20 px-4"><h1 className="text-4xl font-bold text-center text-white">Contact</h1></div>} />
            <Route path="/about" element={<div className="py-20 px-4"><h1 className="text-4xl font-bold text-center text-white">About</h1></div>} />
            <Route path="*" element={<div className="py-20 px-4"><h1 className="text-4xl font-bold text-center text-white">404 - Page Not Found</h1></div>} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}