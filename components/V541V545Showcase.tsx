import React from 'react';

const V541V545Showcase = () => {
  const engines = [
    { id: 'V541', name: 'Sentiment Trajectory Predictor', icon: '📈', desc: 'Predicts emotional trajectory across email threads with proactive intervention recommendations', color: '#3b82f6' },
    { id: 'V542', name: 'Stakeholder Influence Analyzer', icon: '🎯', desc: 'Maps organizational dynamics and identifies decision-makers and key influencers', color: '#8b5cf6' },
    { id: 'V543', name: 'Negotiation Coach AI', icon: '🤝', desc: 'Real-time negotiation strategies with deal signal detection and leverage assessment', color: '#10b981' },
    { id: 'V544', name: 'Compliance Auto-Auditor', icon: '🛡️', desc: 'Automated GDPR, HIPAA, PCI-DSS, SOX compliance monitoring with real-time alerts', color: '#ef4444' },
    { id: 'V545', name: 'Revenue Attribution Tracker', icon: '💰', desc: 'Tracks email impact on revenue pipeline with ROI calculations and deal forecasting', color: '#f59e0b' },
  ];

  return (
    <section style={{ padding: '4rem 2rem', background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)', borderRadius: '16px', margin: '2rem 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#fff', textAlign: 'center', marginBottom: '0.5rem' }}>
          🧠 Email Intelligence V541-V545
        </h2>
        <p style={{ color: '#94a3b8', textAlign: 'center', fontSize: '1.2rem', marginBottom: '3rem' }}>
          5 Advanced AI Engines • 345 Total Engines • All Enforce Reply-All
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
          {engines.map((engine) => (
            <div key={engine.id} style={{
              background: 'rgba(30, 41, 59, 0.8)',
              border: `1px solid ${engine.color}33`,
              borderRadius: '12px',
              padding: '1.5rem',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <span style={{ fontSize: '2rem' }}>{engine.icon}</span>
                <div>
                  <span style={{ color: engine.color, fontSize: '0.85rem', fontWeight: 'bold' }}>{engine.id}</span>
                  <h3 style={{ color: '#fff', fontSize: '1.1rem', margin: 0 }}>{engine.name}</h3>
                </div>
              </div>
              <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: 1.6 }}>{engine.desc}</p>
            </div>
          ))}
        </div>

        <div style={{ background: 'rgba(59, 130, 246, 0.1)', border: '1px solid rgba(59, 130, 246, 0.3)', borderRadius: '12px', padding: '2rem', textAlign: 'center' }}>
          <h3 style={{ color: '#60a5fa', fontSize: '1.3rem', marginBottom: '1rem' }}>🚀 Key Capabilities</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
            {['Sentiment Prediction', 'Stakeholder Mapping', 'Negotiation Coaching', 'Compliance Auditing', 'Revenue Tracking', 'Reply-All Enforcement', 'Case-by-Case Analysis', 'Proactive Interventions'].map((cap) => (
              <span key={cap} style={{ background: 'rgba(59, 130, 246, 0.2)', color: '#93c5fd', padding: '0.5rem 1rem', borderRadius: '20px', fontSize: '0.85rem' }}>
                {cap}
              </span>
            ))}
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '2rem', padding: '1.5rem', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '12px' }}>
          <h3 style={{ color: '#34d399', marginBottom: '0.5rem' }}>📞 Contact Us</h3>
          <p style={{ color: '#94a3b8', margin: '0.25rem 0' }}>📱 +1 302 464 0950 | 📧 kleber@ziontechgroup.com</p>
          <p style={{ color: '#94a3b8', margin: '0.25rem 0' }}>📍 364 E Main St STE 1008, Middletown, DE 19709</p>
        </div>
      </div>
    </section>
  );
};

export default V541V545Showcase;
