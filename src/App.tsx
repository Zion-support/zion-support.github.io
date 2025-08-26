import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AppLayout } from './layout/AppLayout';
import ContentRoutes from './routes/ContentRoutes';
import MarketplaceRoutes from './routes/MarketplaceRoutes';
import TalentRoutes from './routes/TalentRoutes';
import CommunityRoutes from './routes/CommunityRoutes';
import DashboardRoutes from './routes/DashboardRoutes';
import AuthRoutes from './routes/AuthRoutes';
import EnterpriseRoutes from './routes/EnterpriseRoutes';
import MobileAppRoutes from './routes/MobileAppRoutes';
import ErrorRoutes from './routes/ErrorRoutes';

function App() {
  return (
    <div className="App">
      <Routes>
        {/* Main Content Routes */}
        <Route path="/*" element={<AppLayout><ContentRoutes /></AppLayout>} />
        
        {/* Marketplace Routes */}
        <Route path="/marketplace/*" element={<AppLayout><MarketplaceRoutes /></AppLayout>} />
        
        {/* Talent Routes */}
        <Route path="/talent/*" element={<AppLayout><TalentRoutes /></AppLayout>} />
        
        {/* Community Routes */}
        <Route path="/community/*" element={<AppLayout><CommunityRoutes /></AppLayout>} />
        
        {/* Dashboard Routes */}
        <Route path="/dashboard/*" element={<AppLayout><DashboardRoutes /></AppLayout>} />
        
        {/* Auth Routes */}
        <Route path="/auth/*" element={<AuthRoutes />} />
        
        {/* Enterprise Routes */}
        <Route path="/enterprise/*" element={<AppLayout><EnterpriseRoutes /></AppLayout>} />
        
        {/* Mobile App Routes */}
        <Route path="/mobile/*" element={<AppLayout><MobileAppRoutes /></AppLayout>} />
        
        {/* Error Routes */}
        <Route path="*" element={<AppLayout><ErrorRoutes /></AppLayout>} />
      </Routes>
    </div>
  );
}

export default App;