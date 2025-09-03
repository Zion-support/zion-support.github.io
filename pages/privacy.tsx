import React from 'react';

const PrivacyPage: React.FC = () => {
  return (
    <main style={{
      minHeight: 'calc(100vh - 200px)',
      background: 'linear-gradient(135deg, #0b1220 0%, #1e293b 100%)',
      color: 'white',
      padding: '60px 20px'
    }}>
      <div style={{
        maxWidth: 1200,
        margin: '0 auto'
      }}>
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <h1 style={{
            fontSize: '3rem',
            fontWeight: 800,
            marginBottom: 24,
            background: 'linear-gradient(135deg, #22d3ee 0%, #06b6d4 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Privacy Policy
          </h1>
          <p style={{
            fontSize: '1.1rem',
            opacity: 0.8,
            marginBottom: 40
          }}>
            Last updated: 2025-09-03
          </p>
        </div>

        <div style={{
          background: 'rgba(255,255,255,0.05)',
          padding: 40,
          borderRadius: 16,
          border: '1px solid rgba(255,255,255,0.1)',
          backdropFilter: 'blur(10px)',
          lineHeight: 1.8
        }}>
          <p style={{ marginBottom: 24, fontSize: '1.1rem' }}>
            We respect your privacy. This policy explains what information we collect and how we use it.
          </p>
          
          <h2 style={{
            fontSize: '1.5rem',
            fontWeight: 700,
            marginBottom: 16,
            color: '#22d3ee'
          }}>
            Information We Collect
          </h2>
          <ul style={{ marginBottom: 32, paddingLeft: 20 }}>
            <li>Contact details you provide (name, email, phone) via forms</li>
            <li>Usage analytics (pages visited, approximate location, device/browser)</li>
            <li>Business information shared to scope projects</li>
          </ul>
          
          <h2 style={{
            fontSize: '1.5rem',
            fontWeight: 700,
            marginBottom: 16,
            color: '#22d3ee'
          }}>
            How We Use Information
          </h2>
          <ul style={{ marginBottom: 32, paddingLeft: 20 }}>
            <li>To respond to inquiries and provide services</li>
            <li>To improve our website and offerings</li>
            <li>To comply with legal obligations</li>
          </ul>
          
          <h2 style={{
            fontSize: '1.5rem',
            fontWeight: 700,
            marginBottom: 16,
            color: '#22d3ee'
          }}>
            Data Sharing
          </h2>
          <p style={{ marginBottom: 32 }}>
            We do not sell personal data. We may share data with service providers under strict agreements (e.g., hosting, analytics) or when required by law.
          </p>
          
          <h2 style={{
            fontSize: '1.5rem',
            fontWeight: 700,
            marginBottom: 16,
            color: '#22d3ee'
          }}>
            Security
          </h2>
          <p style={{ marginBottom: 32 }}>
            We use industry-standard safeguards such as encryption in transit, least-privilege access, and regular security reviews.
          </p>
          
          <h2 style={{
            fontSize: '1.5rem',
            fontWeight: 700,
            marginBottom: 16,
            color: '#22d3ee'
          }}>
            Your Rights
          </h2>
          <p style={{ marginBottom: 32 }}>
            You may request access, correction, or deletion of your data. Contact us at{' '}
            <a href="mailto:kleber@ziontechgroup.com" style={{ color: '#22d3ee' }}>
              kleber@ziontechgroup.com
            </a>.
          </p>
          
          <h2 style={{
            fontSize: '1.5rem',
            fontWeight: 700,
            marginBottom: 16,
            color: '#22d3ee'
          }}>
            Contact
          </h2>
          <p>
            Zion Tech Group, 364 E Main St STE 1008, Middletown DE 19709. Phone: +1 302 464 0950
          </p>
        </div>
      </div>
    </main>
  );
};

export default PrivacyPage;

