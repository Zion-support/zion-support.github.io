import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link }  from 'react-router-dom';
import NewContentAdvertisingBanner2026 from './components/NewContentAdvertisingBanner2026';
import AutonomousAgentsInProduction2025 from './pages/AutonomousAgentsInProduction2025';
const HomeLanding: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      <div className="container mx-auto px-4 py-8 space-y-12">
        <header className="text-center">
          <h1 className="text-4xl font-bold mb-2">Zion Tech Group</h1>
          <p className="text-white/70">Latest insights and breakthroughs</p>
        </header>
        <NewContentAdvertisingBanner2026 />
        <div className="text-center">
          <Link className="underline text-cyan-300" to="/pages/AutonomousAgentsInProduction2025">Read: Autonomous Agents in Production 2025 →</Link>
        </div>
      </div>
    </div>
  );
};

const AppEntrypoint: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeLanding />} />
        <Route path="/pages/AutonomousAgentsInProduction2025" element={<AutonomousAgentsInProduction2025 />} />
      </Routes>
    </Router>
  );
};

export default AppEntrypoint;
