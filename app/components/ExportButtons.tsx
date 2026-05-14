// ExportButtons — PDF download + email delivery
'use client';

import { useState } from 'react';
import type { ServiceData } from '@/components/ServiceLayout';

export default function ExportButtons({ services }: { services: ServiceData[] }) {
  const [loading, setLoading] = useState(false);

  const generatePDF = async () => {
    setLoading(true);
    try {
      const resp = await fetch('/api/compare', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ services: services.map(s => s.id), action: 'pdf' })
      });
      const blob = await resp.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `zion-comparison-${services.map(s=>s.id).join('-')}.pdf`;
      a.click();
      URL.revokeObjectURL(url);
    } catch (e) {
      alert('PDF generation failed');
    } finally {
      setLoading(false);
    }
  };

  const emailComparison = async () => {
    setLoading(true);
    try {
      const resp = await fetch('/api/compare', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ services: services.map(s => s.id), action: 'email' })
      });
      const data = await resp.json();
      alert(data.message || 'Comparison sent to your email!');
    } catch (e) {
      alert('Failed to send email');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex gap-3">
      <button
        onClick={generatePDF}
        disabled={loading}
        className="rounded-lg bg-slate-800 px-4 py-2 text-sm font-medium text-white border border-slate-600 hover:bg-slate-700 disabled:opacity-50"
      >
        {loading ? 'Generating…' : '📄 Download PDF'}
      </button>
      <button
        onClick={emailComparison}
        disabled={loading}
        className="rounded-lg bg-purple-600 px-4 py-2 text-sm font-medium text-white hover:bg-purple-500 disabled:opacity-50"
      >
        {loading ? 'Sending…' : '✉️ Email Me This Comparison'}
      </button>
    </div>
  );
}
