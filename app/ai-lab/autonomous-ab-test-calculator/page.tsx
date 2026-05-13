'use client';

import React, { useState } from 'react';

interface ABResult {
  variantA: number; variantB: number;
  convRateA: number; convRateB: number;
  relativeLift: number; absoluteLift: number;
  statisticalSignificance: number; isSignificant: boolean;
  confidenceLevel: string; pValue: number;
  minSampleSize: number; hasEnoughSamples: boolean;
  timeToComplete: string;
  recommendation: string;
}

function calcPValue(vA: number, vB: number, nA: number, nB: number) {
  const pA = vA / nA;
  const pB = vB / nB;
  const pPooled = (vA + vB) / (nA + nB);
  const se = Math.sqrt(pPooled * (1 - pPooled) * (1 / nA + 1 / nB));
  if (se === 0) return 1;
  const z = (pB - pA) / se;
  // Approximation of normal CDF for |z|
  const t = 1 / (1 + 0.2316419 * Math.abs(z));
  const d = 0.3989422804 * Math.exp(-z * z / 2);
  const p = d * t * (0.3193815 + t * (-0.3565638 + t * (1.781478 + t * (-1.821256 + t * 1.330274))));
  return Math.max(0, Math.min(1, p * 2));
}

export default function AutonomousABTestCalculatorPage() {
  const [vA, setVA] = useState('4.5');
  const [vB, setVB] = useState('6.2');
  const [nA, setNA] = useState('2000');
  const [nB, setNB] = useState('2000');
  const [confidence, setConfidence] = useState<'90' | '95' | '99'>('95');
  const [result, setResult] = useState<ABResult | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const calculate = () => {
    setIsCalculating(true);
    setTimeout(() => {
      const va = parseFloat(vA);
      const vb = parseFloat(vB);
      const na = parseInt(nA);
      const nb = parseInt(nB);
      const convA = va / 100;
      const convB = vb / 100;
      const absLift = (convB - convA) * 100;
      const relLift = convA === 0 ? 0 : ((convB - convA) / convA) * 100;
      const pValue = calcPValue(va, nb * convA / 100, na, nb); // Approximate
      const significance = (1 - pValue) * 100;
      const isSig = significance >= parseInt(confidence);

      // Min sample size (simplified power calc)
      const effect = Math.abs(convB - convA);
      const avgP = (convA + convB) / 2;
      const zAlpha = confidence === '95' ? 1.96 : confidence === '99' ? 2.58 : 1.645;
      const zBeta = 0.84; // 80% power
      const minSample = effect > 0 ? Math.ceil((Math.pow(zAlpha + zBeta, 2) * 2 * avgP * (1 - avgP)) / Math.pow(effect, 2)) : 999999;

      let recommendation = '';
      if (!isSig) recommendation = `Not statistically significant at ${confidence}% level. Need more data.`;
      else if (relLift > 20) recommendation = `✅ Variant B is the clear winner! ${relLift.toFixed(1)}% lift is highly impactful.`;
      else if (relLift > 5) recommendation = `✅ Variant B is better (${relLift.toFixed(1)}% lift). Recommend implementing.`;
      else if (relLift > 0) recommendation = `⚠️ Small lift (${relLift.toFixed(1)}%). Run longer before deciding.`;
      else recommendation = `⚠️ Variant B underperforming. Variant A remains the winner.`;

      const daysToComplete = minSample > na ? Math.ceil(minSample / (na / 7)) : 'Complete' + ' days';

      setResult({
        variantA: va, variantB: vb,
        convRateA: convA * 100, convRateB: convB * 100,
        relativeLift: relLift, absoluteLift: absLift,
        statisticalSignificance: significance, isSignificant: isSig,
        confidenceLevel: confidence + '%', pValue,
        minSampleSize: minSample, hasEnoughSamples: na >= minSample,
        timeToComplete: `${daysToComplete}`,
        recommendation,
      });
      setIsCalculating(false);
    }, 400);
  };

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #059669 0%, #047857 100%)', color: '#f8fafc', padding: '2rem' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem', background: 'linear-gradient(90deg, #34d399, #06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>📊 Autonomous A/B Test Calculator</h1>
        <p style={{ color: '#a7f3d0', marginBottom: '2rem', fontSize: '1.1rem' }}>Statistical significance calculator for A/B tests. Compute lift, p-values, sample sizes, and recommended test duration.</p>

        <div style={{ display: 'grid', gridTemplateColumns: '380px 1fr 1fr', gap: '1.5rem', marginBottom: '2rem' }}>
          <div style={{ background: '#064e3b', padding: '1.5rem', borderRadius: '12px', border: '1px solid #047857' }}>
            <h3 style={{ marginBottom: '0.75rem', color: '#6ee7b7' }}>📝 Input</h3>
            {([['Variant A Conversion Rate (%)', vA, setVA], ['Variant B Conversion Rate (%)', vB, setVB], ['Variant A Sample Size', nA, setNA], ['Variant B Sample Size', nB, setNB]].map(([label, val, setter]) => (
              <div key={label as string} style={{ marginBottom: '0.75rem' }}>
                <label style={{ color: '#6ee7b7', fontSize: '0.8rem', display: 'block', marginBottom: '0.2rem' }}>{label}</label>
                <input type="number" step="0.01" value={val as string} onChange={e => (setter as any)(e.target.value)} style={{ width: '100%', padding: '0.5rem', borderRadius: '6px', background: '#0f172a', border: '1px solid #059669', color: '#f8fafc' }} />
              </div>
            )))}
            <div style={{ marginBottom: '1rem' }}>
              <label style={{ color: '#6ee7b7', fontSize: '0.8rem', display: 'block', marginBottom: '0.2rem' }}>Confidence Level</label>
              <select value={confidence} onChange={e => setConfidence(e.target.value as any)} style={{ width: '100%', padding: '0.5rem', borderRadius: '6px', background: '#0f172a', border: '1px solid #059669', color: '#f8fafc' }}>
                <option value="90">90%</option><option value="95" selected>95%</option><option value="99">99%</option>
              </select>
            </div>
            <button onClick={calculate} disabled={isCalculating} style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', background: 'linear-gradient(90deg, #059669, #0891b2)', color: 'white', border: 'none', cursor: 'pointer', fontWeight: '600' }}>{isCalculating ? '📊 Calculating...' : '📊 Calculate'}</button>
          </div>

          <div style={{ background: '#064e3b', padding: '1.5rem', borderRadius: '12px', border: '1px solid #047857' }}>
            <h3 style={{ marginBottom: '1rem', color: '#6ee7b7' }}>📈 Results</h3>
            {result ? (
              <>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '1.5rem' }}>
                  <div style={{ background: '#0f172a', padding: '1rem', borderRadius: '8px', textAlign: 'center' }}>
                    <div style={{ fontSize: '2rem', fontWeight: 'bold', color: result.relativeLift >= 0 ? '#4ade80' : '#f87171' }}>{result.relativeLift.toFixed(1)}%</div>
                    <div style={{ color: '#6ee7b7', fontSize: '0.75rem' }}>Relative Lift</div>
                  </div>
                  <div style={{ background: '#0f172a', padding: '1rem', borderRadius: '8px', textAlign: 'center' }}>
                    <div style={{ fontSize: '2rem', fontWeight: 'bold', color: result.statisticalSignificance >= parseInt(result.confidenceLevel) ? '#4ade80' : '#f59e0b' }}>{result.statisticalSignificance.toFixed(1)}%</div>
                    <div style={{ color: '#6ee7b7', fontSize: '0.75rem' }}>Significance</div>
                  </div>
                </div>
                <div style={{ background: '#0f172a', padding: '1rem', borderRadius: '8px', marginBottom: '0.75rem' }}>
                  <div style={{ color: '#6ee7b7', fontSize: '0.8rem', marginBottom: '0.25rem' }}>📊 Variant Comparison</div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', marginTop: '0.5rem' }}>
                    <div><div style={{ color: '#3b82f6', fontWeight: '600' }}>A: {result.convRateA.toFixed(2)}%</div></div>
                    <div><div style={{ color: '#a855f7', fontWeight: '600' }}>B: {result.convRateB.toFixed(2)}%</div></div>
                  </div>
                </div>
                <div style={{ background: '#0f172a', padding: '1rem', borderRadius: '8px' }}>
                  <div style={{ color: result.statisticalSignificance >= parseInt(result.confidenceLevel) ? '#4ade80' : '#f59e0b', fontWeight: '600' }}>{result.isSignificant ? '✅ Statistically Significant' : '⚠️ Not Yet Significant'}</div>
                  <div style={{ color: '#94a3b8', fontSize: '0.85rem', marginTop: '0.25rem' }}>p = {(result.pValue).toFixed(4)}</div>
                </div>
              </>
            ) : <div style={{ color: '#059669', textAlign: 'center', padding: '3rem 1rem' }}><div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📊</div>Results here</div>}
          </div>

          <div style={{ background: '#064e3b', padding: '1.5rem', borderRadius: '12px', border: '1px solid #047857' }}>
            <h3 style={{ marginBottom: '1rem', color: '#6ee7b7' }}>💡 Recommendations</h3>
            {result ? (
              <>
                <div style={{ background: '#0f172a', padding: '1rem', borderRadius: '8px', marginBottom: '1rem' }}>
                  <div style={{ color: '#f8fafc', lineHeight: 1.6, whiteSpace: 'pre-wrap' }}>{result.recommendation}</div>
                </div>
                <div style={{ background: '#0f172a', padding: '1rem', borderRadius: '8px' }}>
                  <div style={{ color: '#6ee7b7', fontSize: '0.8rem', marginBottom: '0.25rem' }}>📏 Sample Size Analysis</div>
                  <div style={{ color: result.hasEnoughSamples ? '#4ade80' : '#f59e0b', fontWeight: '600' }}>
                    Min needed: {result.minSampleSize} per variant
                  </div>
                  <div style={{ color: '#94a3b8', fontSize: '0.85rem' }}>Current: {parseInt(nA).toLocaleString()} A / {parseInt(nB).toLocaleString()} B</div>
                  <div style={{ color: '#94a3b8', fontSize: '0.85rem' }}>Est. days to complete: {result.timeToComplete}</div>
                </div>
              </>
            ) : <div style={{ color: '#059669', textAlign: 'center', padding: '2rem 1rem' }}><div style={{ fontSize: '2rem' }}>💡</div></div>}
          </div>
        </div>
      </div>
    </div>
  );
}