'use client';
import React, { useState, useEffect } from 'react';

export default function SiteHealthBadge() {
  const [status, setStatus] = useState<'checking' | 'healthy' | 'warning' | 'critical'>('checking');

  useEffect(() => {
    // Simplified heuristic: check page load performance as health proxy
    const check = () => {
      if (typeof window === 'undefined') return;
      const nav = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const ttfb = nav ? nav.responseStart - nav.requestStart : 0;
      if (ttfb > 1000) setStatus('critical');
      else if (ttfb > 500) setStatus('warning');
      else setStatus('healthy');
    };
    // Run after paint
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setTimeout(check, 100);
      });
    });
  }, []);

  const colors: Record<string, { bg: string; text: string; label: string }> = {
    checking: { bg: '#1e293b', text: '#94a3b8', label: 'Checking...' },
    healthy: { bg: '#064e3b', text: '#6ee7b7', label: 'Operational' },
    warning: { bg: '#854d0e', text: '#fcd34d', label: 'Degraded' },
    critical: { bg: '#991b1b', text: '#fca5a5', label: 'Outage' },
  };

  const c = colors[status];

  return (
    <a
      href="/status"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.5rem',
        padding: '0.35rem 0.75rem',
        background: c.bg,
        color: c.text,
        border: `1px solid ${c.text}33`,
        borderRadius: '999px',
        fontSize: '0.75rem',
        fontWeight: 600,
        textDecoration: 'none',
        transition: 'opacity 0.2s'
      }}
      title="View real-time site health monitor"
    >
      <span style={{
        width: '7px', height: '7px',
        borderRadius: '50%',
        background: c.text,
        opacity: status === 'checking' ? 0.5 : 1,
        animation: status === 'checking' ? 'pulse 1.5s infinite' : 'none'
      }} />
      {c.label}
    </a>
  );
}
