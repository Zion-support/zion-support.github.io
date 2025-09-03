import React from 'react';
import Link from 'next/link';

const PricingPage: React.FC = () => {
  return (
    <main style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      <section style={{ background: 'white', padding: '40px', borderRadius: '15px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '20px', color: '#1a202c' }}>Pricing</h1>
        <p style={{ color: '#4a5568', marginBottom: '40px', maxWidth: '800px', fontSize: '1.1rem' }}>
          We tailor solutions to your needs. Below are typical starting ranges observed in the market. Get a custom quote at any time.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          <div style={{ border: '1px solid #e2e8f0', borderRadius: '12px', padding: '24px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '8px', color: '#1a202c' }}>AI Development</h3>
            <p style={{ color: '#4a5568', marginBottom: '16px' }}>Model prototyping, fine-tuning, RAG, and integrations.</p>
            <ul style={{ color: '#2d3748', marginBottom: '16px', paddingLeft: '20px' }}>
              <li style={{ marginBottom: '8px' }}>POC: $5,000–$15,000</li>
              <li style={{ marginBottom: '8px' }}>MVP: $20,000–$60,000</li>
              <li style={{ marginBottom: '8px' }}>Enterprise: $75,000+</li>
            </ul>
            <Link href="/contact" style={{ display: 'inline-block', background: '#3182ce', color: 'white', padding: '8px 16px', borderRadius: '8px', textDecoration: 'none' }}>Request Quote</Link>
          </div>

          <div style={{ border: '1px solid #e2e8f0', borderRadius: '12px', padding: '24px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '8px', color: '#1a202c' }}>Micro SaaS</h3>
            <p style={{ color: '#4a5568', marginBottom: '16px' }}>Idea validation, build, payments, analytics, hosting.</p>
            <ul style={{ color: '#2d3748', marginBottom: '16px', paddingLeft: '20px' }}>
              <li style={{ marginBottom: '8px' }}>Starter: $8,000–$25,000</li>
              <li style={{ marginBottom: '8px' }}>Growth: $30,000–$80,000</li>
              <li style={{ marginBottom: '8px' }}>Scale: $100,000+</li>
            </ul>
            <Link href="/contact" style={{ display: 'inline-block', background: '#3182ce', color: 'white', padding: '8px 16px', borderRadius: '8px', textDecoration: 'none' }}>Request Quote</Link>
          </div>

          <div style={{ border: '1px solid #e2e8f0', borderRadius: '12px', padding: '24px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '8px', color: '#1a202c' }}>Cloud & DevOps</h3>
            <p style={{ color: '#4a5568', marginBottom: '16px' }}>AWS/GCP/Azure architecture, IaC, observability.</p>
            <ul style={{ color: '#2d3748', marginBottom: '16px', paddingLeft: '20px' }}>
              <li style={{ marginBottom: '8px' }}>Audit & Setup: $3,000–$12,000</li>
              <li style={{ marginBottom: '8px' }}>Migration: $10,000–$40,000</li>
              <li style={{ marginBottom: '8px' }}>Managed: from $2,000/mo</li>
            </ul>
            <Link href="/contact" style={{ display: 'inline-block', background: '#3182ce', color: 'white', padding: '8px 16px', borderRadius: '8px', textDecoration: 'none' }}>Request Quote</Link>
          </div>

          <div style={{ border: '1px solid #e2e8f0', borderRadius: '12px', padding: '24px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '8px', color: '#1a202c' }}>Cybersecurity</h3>
            <p style={{ color: '#4a5568', marginBottom: '16px' }}>Pen-testing, hardening, SOC, compliance.</p>
            <ul style={{ color: '#2d3748', marginBottom: '16px', paddingLeft: '20px' }}>
              <li style={{ marginBottom: '8px' }}>Security Audit: $4,000–$15,000</li>
              <li style={{ marginBottom: '8px' }}>Remediation: $8,000–$50,000</li>
              <li style={{ marginBottom: '8px' }}>Managed SOC: from $3,000/mo</li>
            </ul>
            <Link href="/contact" style={{ display: 'inline-block', background: '#3182ce', color: 'white', padding: '8px 16px', borderRadius: '8px', textDecoration: 'none' }}>Request Quote</Link>
          </div>

          <div style={{ border: '1px solid #e2e8f0', borderRadius: '12px', padding: '24px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '8px', color: '#1a202c' }}>Data & Analytics</h3>
            <p style={{ color: '#4a5568', marginBottom: '16px' }}>Warehouses, pipelines, BI, ML ops.</p>
            <ul style={{ color: '#2d3748', marginBottom: '16px', paddingLeft: '20px' }}>
              <li style={{ marginBottom: '8px' }}>Strategy & Setup: $5,000–$20,000</li>
              <li style={{ marginBottom: '8px' }}>Dashboards: $6,000–$25,000</li>
              <li style={{ marginBottom: '8px' }}>ML Ops: $25,000+</li>
            </ul>
            <Link href="/contact" style={{ display: 'inline-block', background: '#3182ce', color: 'white', padding: '8px 16px', borderRadius: '8px', textDecoration: 'none' }}>Request Quote</Link>
          </div>

          <div style={{ border: '1px solid #e2e8f0', borderRadius: '12px', padding: '24px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '8px', color: '#1a202c' }}>Web & Mobile</h3>
            <p style={{ color: '#4a5568', marginBottom: '16px' }}>React/Next.js, React Native, APIs.</p>
            <ul style={{ color: '#2d3748', marginBottom: '16px', paddingLeft: '20px' }}>
              <li style={{ marginBottom: '8px' }}>Website: $3,000–$15,000</li>
              <li style={{ marginBottom: '8px' }}>MVP App: $20,000–$70,000</li>
              <li style={{ marginBottom: '8px' }}>Enterprise: $80,000+</li>
            </ul>
            <Link href="/contact" style={{ display: 'inline-block', background: '#3182ce', color: 'white', padding: '8px 16px', borderRadius: '8px', textDecoration: 'none' }}>Request Quote</Link>
          </div>
        </div>

        <div style={{ marginTop: '40px', textAlign: 'center', padding: '30px', background: '#f7fafc', borderRadius: '12px' }}>
          <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '15px', color: '#1a202c' }}>
            Need a Custom Solution?
          </h3>
          <p style={{ color: '#4a5568', marginBottom: '20px' }}>
            Contact us for a personalized quote tailored to your specific requirements.
          </p>
          <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" style={{ 
              background: '#3182ce', 
              color: 'white', 
              padding: '12px 24px', 
              borderRadius: '8px', 
              textDecoration: 'none',
              fontWeight: '600'
            }}>
              Get Custom Quote
            </Link>
            <Link href="/services-catalog" style={{ 
              background: 'transparent', 
              color: '#3182ce', 
              padding: '12px 24px', 
              borderRadius: '8px', 
              textDecoration: 'none',
              fontWeight: '600',
              border: '2px solid #3182ce'
            }}>
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PricingPage;