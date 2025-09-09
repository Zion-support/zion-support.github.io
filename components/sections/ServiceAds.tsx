import React from 'react';

interface ServiceAdsProps {
  services?: any[];
}

export default function ServiceAds({ services = [] }: ServiceAdsProps) {
  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20">
      <h3 className="text-xl font-semibold text-white mb-4">Featured Services</h3>
      <p className="text-gray-300">Service advertisements will appear here.</p>
    </div>
  );
}
