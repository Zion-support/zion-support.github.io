'use client';

import { Metadata } from 'next';

export default function PricingPage() {
  const handleCheckout = (plan: string) => {
    alert(`The ${plan} plan is coming soon! Please contact us for more details.`);
  };

  return (
    <div>
      <h1>Pricing</h1>
      <div>
        <h2>Pro</h2>
        <p>$15/month – Unlimited features</p>
        <button onClick={() => handleCheckout('pro')}>Subscribe Pro</button>
      </div>
      <div>
        <h2>Enterprise</h2>
        <p>$99/month – All features with SLA</p>
        <button onClick={() => handleCheckout('enterprise')}>Subscribe Enterprise</button>
      </div>
    </div>
  );
}