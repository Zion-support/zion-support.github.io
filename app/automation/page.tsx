import React from 'react';
import SEO from '@/components/SEO';

export default function AutomationPage() {
  return (
    <div>
      <SEO
        title="Automation - Zion Holdings"
        description="Business process automation solutions"
      />
      <div className="min-h-screen bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold mb-8">Automation</h1>
          <p className="text-xl text-gray-300">
            Streamline your business processes with automation.
          </p>
        </div>
      </div>
    </div>
  );
}