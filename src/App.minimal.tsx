import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AdditionalServicesPage from './pages/AdditionalServicesPage';

const AppMinimal: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/additional-services"
          element={<AdditionalServicesPage />}
        />
        <Route
          path="*"
          element={(
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
              <div className="p-8 rounded-lg bg-white shadow text-center">
                <h1 className="text-2xl font-bold mb-2">Zion Website</h1>
                <p className="text-gray-700 mb-4">Temporary minimal app to enable build.</p>
                <Link to="/additional-services" className="text-blue-600 hover:underline">View Additional Services</Link>
              </div>
            </div>
          )}
        />
      </Routes>
    </Router>
  );
};

export default AppMinimal;