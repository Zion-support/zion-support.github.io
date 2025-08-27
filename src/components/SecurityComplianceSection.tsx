import React from 'react';

export const SecurityComplianceSection: React.FC = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Security & Compliance</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-white/5 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">ISO 27001</h3>
            <p className="text-zinc-300">Information Security Management</p>
          </div>
          <div className="text-center p-6 bg-white/5 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">SOC 2 Type II</h3>
            <p className="text-zinc-300">Security, Availability, Processing Integrity</p>
          </div>
          <div className="text-center p-6 bg-white/5 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">GDPR</h3>
            <p className="text-zinc-300">Data Protection & Privacy</p>
          </div>
        </div>
      </div>
    </section>
  );
};