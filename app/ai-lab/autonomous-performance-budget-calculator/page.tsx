'use client';
import React, { useState } from 'react';

interface Metric { label: string; value: number; budget: number; unit: string; status: 'pass' | 'warning' | 'fail' }
interface BudgetTier { name: string; description: string; jsBudget: number; imageBudget: number; fontBudget: number; totalBudget: number }

const TIERS: BudgetTier[] = [
  { name: 'Light (Blog/Landing)', description: 'Content-focused pages with minimal interactivity', jsBudget: 170, imageBudget: 400, fontBudget: 50, totalBudget: 700 },
  { name: 'Medium (Web App)', description: 'Interactive SPAs with moderate complexity', jsBudget: 250, imageBudget: 300, fontBudget: 80, totalBudget: 800 },
  { name: 'Heavy (E-commerce)', description: 'Feature-rich stores with rich media and cart flows', jsBudget: 350, imageBudget: 500, fontBudget: 100, totalBudget: 1200 },
];

const VITAL_BUDGETS: Metric[] = [
  { label: 'LCP (Largest Contentful Paint)', value: 2.5, budget: 2.5, unit: 's', status: 'pass' },
  { label: 'INP (Interaction to Next Paint)', value: 200, budget: 200, unit: 'ms', status: 'pass' },
  { label: 'CLS (Cumulative Layout Shift)', value: 0.1, budget: 0.1, unit: '', status: 'pass' },
  { label: 'TTFB (Time to First Byte)', value: 800, budget: 800, unit: 'ms', status: 'pass' },
  { label: 'FCP (First Contentful Paint)', value: 1.8, budget: 1.8, unit: 's', status: 'pass' },
];

export default function AutonomousPerformanceBudgetCalculatorPage() {
  const [pageType, setPageType] = useState<'landing' | 'app' | 'ecommerce'>('landing');
  const [device, setDevice] = useState<'mobile' | 'desktop'>('mobile');
  const [connection, setConnection] = useState<'3g' | '4g' | 'wifi'>('4g');
  const [calculated, setCalculated] = useState(false);
  const [budget, setBudget] = useState<BudgetTier | null>(null);

  const multipliers = {
    '3g': { js: 0.6, image: 0.5, font: 0.7, total: 0.6 },
    '4g': { js: 0.8, image: 0.8, font: 0.9, total: 0.8 },
    'wifi': { js: 1.0, image: 1.0, font: 1.0, total: 1.0 },
  };
  const deviceMult = device === 'mobile' ? 0.7 : 1.0;

  const calculate = () => {
    const tier = pageType === 'landing' ? TIERS[0] : pageType === 'app' ? TIERS[1] : TIERS[2];
    const m = multipliers[connection];
    setBudget({
      ...tier,
      jsBudget: Math.round(tier.jsBudget * m.js * deviceMult),
      imageBudget: Math.round(tier.imageBudget * m.image * deviceMult),
      fontBudget: Math.round(tier.fontBudget * m.font * deviceMult),
      totalBudget: Math.round(tier.totalBudget * m.total * deviceMult),
    });
    setCalculated(true);
  };

  const vitals = calculated ? VITAL_BUDGETS.map(v => ({
    ...v,
    value: device === 'mobile' ? v.value * 1.3 : v.value,
    budget: connection === '3g' ? v.budget * 1.5 : connection === '4g' ? v.budget * 1.2 : v.budget,
  })) : [];

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #042f2e 0%, #0c4a6e 50%, #1e1b4b 100%)', color: '#f8fafc', padding: '2rem' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem', background: 'linear-gradient(90deg, #2dd4bf, #60a5fa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>⚡ Autonomous Performance Budget Calculator</h1>
        <p style={{ color: '#94a3b8', marginBottom: '2rem', fontSize: '1.1rem' }}>Calculate performance budgets for your page type, device, and connection speed. Stay within Core Web Vitals thresholds.</p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '2rem' }}>
          <div style={{ background: '#0c4a6e', padding: '1.5rem', borderRadius: '12px', border: '1px solid #0e7490' }}>
            <h3 style={{ color: '#2dd4bf', marginBottom: '1rem' }}>⚙️ Configuration</h3>
            <div style={{ marginBottom: '1rem' }}>
              <label style={{ color: '#94a3b8', fontSize: '0.8rem', display: 'block', marginBottom: '0.25rem' }}>Page Type</label>
              <select value={pageType} onChange={e => setPageType(e.target.value as any)} style={{ width: '100%', padding: '0.5rem', background: '#042f2e', border: '1px solid #0e7490', color: '#f8fafc', borderRadius: '6px' }}>
                <option value="landing">Light (Blog/Landing)</option>
                <option value="app">Medium (Web App)</option>
                <option value="ecommerce">Heavy (E-commerce)</option>
              </select>
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <label style={{ color: '#94a3b8', fontSize: '0.8rem', display: 'block', marginBottom: '0.25rem' }}>Target Device</label>
              <select value={device} onChange={e => setDevice(e.target.value as any)} style={{ width: '100%', padding: '0.5rem', background: '#042f2e', border: '1px solid #0e7490', color: '#f8fafc', borderRadius: '6px' }}>
                <option value="mobile">Mobile (stricter)</option>
                <option value="desktop">Desktop</option>
              </select>
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <label style={{ color: '#94a3b8', fontSize: '0.8rem', display: 'block', marginBottom: '0.25rem' }}>Connection Speed</label>
              <select value={connection} onChange={e => setConnection(e.target.value as any)} style={{ width: '100%', padding: '0.5rem', background: '#042f2e', border: '1px solid #0e7490', color: '#f8fafc', borderRadius: '6px' }}>
                <option value="3g">3G (slow)</option>
                <option value="4g">4G (moderate)</option>
                <option value="wifi">WiFi/Fiber (fast)</option>
              </select>
            </div>
            <button onClick={calculate} style={{ width: '100%', padding: '0.75rem', background: 'linear-gradient(90deg, #0d9488, #0ea5e9)', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: '600', fontSize: '1rem' }}>⚡ Calculate Budget</button>
          </div>

          <div style={{ background: '#0c4a6e', padding: '1.5rem', borderRadius: '12px', border: '1px solid #0e7490' }}>
            <h3 style={{ color: '#2dd4bf', marginBottom: '1rem' }}>📊 Resource Budgets</h3>
            {budget ? (
              <>
                <div style={{ background: '#042f2e', padding: '1rem', borderRadius: '8px', marginBottom: '0.75rem' }}>
                  <div style={{ fontSize: '0.8rem', color: '#94a3b8', marginBottom: '0.25rem' }}>Total Budget</div>
                  <div style={{ fontSize: '2rem', fontWeight: '700', color: '#2dd4bf' }}>{budget.totalBudget} KB</div>
                </div>
                {[
                  { label: 'JavaScript Bundle', value: budget.jsBudget, color: '#60a5fa' },
                  { label: 'Images', value: budget.imageBudget, color: '#4ade80' },
                  { label: 'Font Files', value: budget.fontBudget, color: '#f59e0b' },
                ].map((item, i) => (
                  <div key={i} style={{ background: '#042f2e', padding: '0.75rem', borderRadius: '8px', marginBottom: '0.5rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                      <span style={{ fontSize: '0.85rem', color: '#94a3b8' }}>{item.label}</span>
                      <span style={{ fontSize: '0.85rem', fontWeight: '600', color: item.color }}>{item.value} KB</span>
                    </div>
                    <div style={{ height: '8px', background: '#064e3b', borderRadius: '4px', overflow: 'hidden' }}>
                      <div style={{ height: '100%', width: `${Math.min(100, (item.value / budget.totalBudget) * 100)}%`, background: item.color, borderRadius: '4px' }}></div>
                    </div>
                  </div>
                ))}
              </>
            ) : (
              <div style={{ color: '#2dd4bf', textAlign: 'center', padding: '3rem' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>⚡</div>
                <div>Configure and calculate</div>
              </div>
            )}
          </div>
        </div>

        {calculated && (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '2rem' }}>
            <div style={{ background: '#0c4a6e', padding: '1.5rem', borderRadius: '12px', border: '1px solid #0e7490' }}>
              <h3 style={{ color: '#2dd4bf', marginBottom: '1rem' }}>\u{1F4C8} Core Web Vitals Budget</h3>
              {vitals.map((v, i) => {
                const pct = (v.value / v.budget) * 100;
                const color = pct <= 80 ? '#22c55e' : pct <= 100 ? '#f59e0b' : '#ef4444';
                return (
                  <div key={i} style={{ background: '#042f2e', padding: '0.75rem', borderRadius: '8px', marginBottom: '0.5rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                      <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>{v.label}</span>
                      <span style={{ fontSize: '0.8rem', fontWeight: '600', color }}>{v.value.toFixed(2)}{v.unit}</span>
                    </div>
                    <div style={{ height: '6px', background: '#064e3b', borderRadius: '3px', overflow: 'hidden' }}>
                      <div style={{ height: '100%', width: `${Math.min(100, pct)}%`, background: color, borderRadius: '3px' }}></div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div style={{ background: '#0c4a6e', padding: '1.5rem', borderRadius: '12px', border: '1px solid #0e7490' }}>
              <h3 style={{ color: '#2dd4bf', marginBottom: '1rem' }}>\u{1F4A1} Recommendations</h3>
              <div style={{ fontSize: '0.85rem', color: '#94a3b8', lineHeight: 1.8 }}>
                {connection === '3g' && <div>• ⚠️ 3G budget is tight — consider code splitting and lazy loading</div>}
                {device === 'mobile' && <div>• 📱 Mobile-first: prioritize critical CSS inline, defer non-critical JS</div>}
                {pageType === 'ecommerce' && <div>• 🛒 E-commerce: use image CDN with WebP/AVIF, preconnect to payment gateway</div>}
                {pageType === 'app' && <div>• 🔧 Web App: consider service worker caching, route-based code splitting</div>}
                <div>• ✅ Minify and compress all JS/CSS (gzip/brotli)</div>
                <div>• ✅ Use HTTP/2 multiplexing for parallel asset loading</div>
                <div>• ✅ Set cache-control headers: immutable for hashed assets</div>
                {device === 'mobile' && connection === '3g' && <div>• 🔴 CRITICAL: Mobile+3G combination needs aggressive optimization. Target < 300KB total</div>}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
