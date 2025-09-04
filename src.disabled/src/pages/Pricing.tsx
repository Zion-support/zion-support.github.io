import React from 'react';
import { PRICING_TIERS } from '../data/realMicroSaasServices2025';

export default function Pricing() {
  return (
    <div className="space-y-4">
      <h2>Pricing</h2>
      <div className="grid gap-4 md:grid-cols-3">
        {PRICING_TIERS.map(t => (
          <div key={t.name} className="card">
            <h3 className="text-lg font-semibold">{t.name}</h3>
            <div className="text-2xl font-bold my-2">{t.price}</div>
            <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
              {t.features.map(f => <li key={f}>{f}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

