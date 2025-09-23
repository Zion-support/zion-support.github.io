"use client";

import React, { useMemo, useState } from 'react';

export default function ROICalculator() {
  const [investment, setInvestment] = useState(50000);
  const [savingsPct, setSavingsPct] = useState(3);

  const annualSavings = useMemo(() => (investment * savingsPct) / 100, [investment, savingsPct]);
  const roi = useMemo(() => (annualSavings / investment) * 100, [annualSavings, investment]);

  return (
    <div className="bg-white rounded-xl p-6 shadow border">
      <h3 className="text-lg font-semibold mb-4">Simple ROI Calculator</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
        <label className="block">
          <span className="text-sm text-gray-600">Investment ($)</span>
          <input
            type="number"
            value={investment}
            onChange={e => setInvestment(Number(e.target.value) || 0)}
            className="mt-1 w-full rounded border px-3 py-2"
            min={0}
          />
        </label>
        <label className="block">
          <span className="text-sm text-gray-600">Annual Savings (%)</span>
          <input
            type="number"
            value={savingsPct}
            onChange={e => setSavingsPct(Number(e.target.value) || 0)}
            className="mt-1 w-full rounded border px-3 py-2"
            min={0}
          />
        </label>
        <div className="p-3 bg-gray-50 rounded border">
          <div className="text-sm text-gray-600">Estimated ROI</div>
          <div className="text-2xl font-bold">{roi.toFixed(1)}%</div>
        </div>
      </div>
      <div className="mt-3 text-sm text-gray-600">Annual savings: ${annualSavings.toLocaleString()}</div>
    </div>
  );
}

