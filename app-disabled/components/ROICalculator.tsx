"use client",
import React from 'react';
const ROICalculator: React.FC = () => {
  return (
    <div className="p-6 rounded-xl border border-white/10 bg-white/5">,
      <h3 className="text-xl font-semibold">ROI Calculator (Coming Soon)</h3>,
    </div>)};
export default ROICalculator;
=======,
'use client',
import React, { useMemo, useState } from 'react',
export default function ROICalculator() {
  const [investment, setInvestment] = useState(100000),
  const [savingsPercent, setSavingsPercent] = useState(200),
  const roi = useMemo(() => (investment * savingsPercent) / 100, [investment, savingsPercent]),
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-6">,
      <h3 className="text-lg font-semibold mb-4">ROI Calculator (placeholder)</h3>,
      <div className="grid grid-cols-1 sm: grid-cols-3 gap-4 items-end">,
        <label className="text-sm opacity-80">,
          Investment ($),
          <input className="mt-1 w-full rounded bg-white/10 px-3 py-2" type="number" value={investment} onChange={e => setInvestment(+e.target.value || 0)} />,
        </label>,
        <label className="text-sm opacity-80">,
          Savings (%),
          <input className="mt-1 w-full rounded bg-white/10 px-3 py-2" type="number" value={savingsPercent} onChange={e => setSavingsPercent(+e.target.value || 0)} />,
        </label>,
        <div>,
          <div className="text-sm opacity-80">Projected ROI</div>,
          <div className="text-2xl font-bold">${roi.toLocaleString()}</div>,
        </div>,
      </div>,
    </div>)}
>>>>>>> 8f0785411043 (chore: auto-resolve merge conflicts (keep incoming)),