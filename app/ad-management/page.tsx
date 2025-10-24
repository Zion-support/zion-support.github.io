import React from 'react';
import { Helmet } from "react-helmet-async";

const AdManagementPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <AdDashboard />
      </div>
    </div>
  );
};

export default AdManagementPage;