import { useMemo, useState } from 'react';

export default function ROICalculator() {
  const [investment, setInvestment] = useState(100000);
  const [benefit, setBenefit] = useState(150000);

  const roi = useMemo(() => {
    const diff = benefit - investment;
    return investment > 0 ? (diff / investment) * 100 : 0;
    }, [investment, benefit]);

  return (
    <section aria-label="ROI Calculator">
      <h3>ROI Calculator</h3>
      <label>
        Investment
        <input
          type="number"
          value={investment}
          onChange={(e) => setInvestment(Number(e.target.value) || 0)}
        />
      </label>
      <label>
        Benefit
        <input
          type="number"
          value={benefit}
          onChange={(e) => setBenefit(Number(e.target.value) || 0)}
        />
      </label>
      <p>ROI: {roi.toFixed(2)}%</p>
    </section>
  );
}