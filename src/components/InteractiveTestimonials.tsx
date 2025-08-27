import React from 'react';

export const InteractiveTestimonials: React.FC = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Client Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-white/5 rounded-lg">
            <p className="text-zinc-300 mb-4">"Zion Tech Group transformed our business with their innovative AI solutions. The ROI exceeded our expectations."</p>
            <div className="text-sm text-zinc-400">- CEO, Fortune 500 Company</div>
          </div>
          <div className="p-6 bg-white/5 rounded-lg">
            <p className="text-zinc-300 mb-4">"Their quantum computing expertise gave us a competitive edge in the market. Highly recommended!"</p>
            <div className="text-sm text-zinc-400">- CTO, Healthcare Provider</div>
          </div>
        </div>
      </div>
    </section>
  );
};