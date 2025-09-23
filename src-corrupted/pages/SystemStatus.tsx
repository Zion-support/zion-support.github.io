import React from 'react';
import { SEO } from '../components/SEO';

const SystemStatus: React.FC = () => {
  return (
    <>
      <SEO
        title="System Status | Zion Tech Group"
        description="Check system status and uptime"
        keywords="system status, uptime, monitoring"
        canonical="/system-status"
      />
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold mb-4">System Status</h1>
          <p className="text-xl text-slate-300">This page is being updated with new content.</p>
        </div>
      </div>
    </>
  );
};

export default SystemStatus;
