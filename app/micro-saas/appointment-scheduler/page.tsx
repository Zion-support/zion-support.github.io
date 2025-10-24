'use client';

import React from 'react';

const AppointmentSchedulerPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            Appointment Scheduler
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional Appointment Scheduler services by Zion Tech Group. Advanced AI and IT solutions for your business.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-4">Our Services</h2>
            <p className="text-gray-300 mb-6">
              We provide comprehensive Appointment Scheduler solutions tailored to your business needs.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-2">Service 1</h3>
                <p className="text-gray-300">Description of service 1</p>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-2">Service 2</h3>
                <p className="text-gray-300">Description of service 2</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentSchedulerPage;
