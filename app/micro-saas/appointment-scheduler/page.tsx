import React from 'react';

import SEOHead from '../components/SEOHead';

const AppointmentSchedulerPage: React.FC = () => {
  return (
    <>
      <SEOHead 
        title="appointment-scheduler - Zion Tech Group"
        description="Zion Tech Group appointment-scheduler service page"
      />
      <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">appointment-scheduler</h1>
          <p className="text-gray-300">Coming soon...</p>
        </div>
      </div>
    </>
  );
};

export default AppointmentSchedulerPage;
