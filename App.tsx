import React, { JSX } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './app/page';
import SolutionsPage from './app/solutions/page';
import ResourcesPage from './app/resources/page';
import TeamPage from './app/team/page';
import NewsPage from './app/news/page';
import PressPage from './app/press/page';
import CareersPage from './app/careers/page';
import MarketplacePage from './app/marketplace/page';
import ServicesPage from './app/services/page';
import AIInvoiceProcessingPage from './app/services/ai-invoice-processing-saas/page';
import ComprehensiveITServicesPage from './app/services/comprehensive-it-services/page';
import ContactPage from './app/contact/page';
import AboutPage from './app/about/page';
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
            <Route path="/solutions" element={<SolutionsPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/press" element={<PressPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/marketplace" element={<MarketplacePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/ai-invoice-processing-saas" element={<AIInvoiceProcessingPage />} />
            <Route path="/services/comprehensive-it-services" element={<ComprehensiveITServicesPage />} />
            <Route path="/comprehensive-micro-saas-services" element={<ServicesPage />} />
            <Route path="/comprehensive-it-services" element={<ComprehensiveITServicesPage />} />
            <Route path="/case-studies" element={<div className="py-20 px-4"><h1 className="text-4xl font-bold text-center text-white">Case Studies</h1></div>} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<div className="py-20 px-4"><h1 className="text-4xl font-bold text-center text-white">404 - Page Not Found</h1></div>} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}