import React from 'react';

const PrivacyPage: React.FC = () => {
  return (
    <main style={{ padding: '40px 20px', maxWidth: '1000px', margin: '0 auto', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      <section style={{ background: 'white', padding: '40px', borderRadius: '15px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '20px', color: '#1a202c' }}>Privacy Policy</h1>
        <p style={{ color: '#4a5568', marginBottom: '30px' }}>Last updated: 2025-09-03</p>

        <div style={{ lineHeight: '1.6', color: '#2d3748' }}>
          <p style={{ marginBottom: '20px' }}>We respect your privacy. This policy explains what information we collect and how we use it.</p>
          
          <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '15px', marginTop: '30px', color: '#1a202c' }}>Information We Collect</h2>
          <ul style={{ marginBottom: '20px', paddingLeft: '20px' }}>
            <li style={{ marginBottom: '8px' }}>Contact details you provide (name, email, phone) via forms</li>
            <li style={{ marginBottom: '8px' }}>Usage analytics (pages visited, approximate location, device/browser)</li>
            <li style={{ marginBottom: '8px' }}>Business information shared to scope projects</li>
          </ul>
          
          <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '15px', marginTop: '30px', color: '#1a202c' }}>How We Use Information</h2>
          <ul style={{ marginBottom: '20px', paddingLeft: '20px' }}>
            <li style={{ marginBottom: '8px' }}>To respond to inquiries and provide services</li>
            <li style={{ marginBottom: '8px' }}>To improve our website and offerings</li>
            <li style={{ marginBottom: '8px' }}>To comply with legal obligations</li>
          </ul>
          
          <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '15px', marginTop: '30px', color: '#1a202c' }}>Data Sharing</h2>
          <p style={{ marginBottom: '20px' }}>We do not sell personal data. We may share data with service providers under strict agreements (e.g., hosting, analytics) or when required by law.</p>
          
          <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '15px', marginTop: '30px', color: '#1a202c' }}>Security</h2>
          <p style={{ marginBottom: '20px' }}>We use industry-standard safeguards such as encryption in transit, least-privilege access, and regular security reviews.</p>
          
          <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '15px', marginTop: '30px', color: '#1a202c' }}>Your Rights</h2>
          <p style={{ marginBottom: '20px' }}>You may request access, correction, or deletion of your data. Contact us at <a href="mailto:kleber@ziontechgroup.com" style={{ color: '#3182ce', textDecoration: 'none' }}>kleber@ziontechgroup.com</a>.</p>
          
          <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '15px', marginTop: '30px', color: '#1a202c' }}>Contact</h2>
          <p style={{ marginBottom: '20px' }}>Zion Tech Group, 364 E Main St STE 1008, Middletown DE 19709. Phone: +1 302 464 0950</p>
        </div>
      </section>
    </main>
  );
};

export default PrivacyPage;