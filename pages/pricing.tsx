import React from 'react';
import Link from 'next/link';
<<<<<<< HEAD
=======
import Layout from '../components/Layout';
>>>>>>> c3407f17831351e4f4cfd0efb90f6fd048cb9536

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
<<<<<<< HEAD
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
=======

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="border rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">AI Development</h3>
              <p className="text-gray-600 mb-4">Model prototyping, fine-tuning, RAG, and integrations.</p>
              <ul className="text-gray-700 space-y-2 mb-4 list-disc list-inside">
                <li>POC: $5,000–$15,000</li>
                <li>MVP: $20,000–$60,000</li>
                <li>Enterprise: $75,000+</li>
              </ul>
              <Link href="/contact" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">Request Quote</Link>
            </div>

            <div className="border rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Micro SaaS</h3>
              <p className="text-gray-600 mb-4">Idea validation, build, payments, analytics, hosting.</p>
              <ul className="text-gray-700 space-y-2 mb-4 list-disc list-inside">
                <li>Starter: $8,000–$25,000</li>
                <li>Growth: $30,000–$80,000</li>
                <li>Scale: $100,000+</li>
              </ul>
              <Link href="/contact" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">Request Quote</Link>
            </div>

            <div className="border rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Cloud & DevOps</h3>
              <p className="text-gray-600 mb-4">AWS/GCP/Azure architecture, IaC, observability.</p>
              <ul className="text-gray-700 space-y-2 mb-4 list-disc list-inside">
                <li>Audit & Setup: $3,000–$12,000</li>
                <li>Migration: $10,000–$40,000</li>
                <li>Managed: from $2,000/mo</li>
              </ul>
              <Link href="/contact" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">Request Quote</Link>
            </div>

            <div className="border rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Cybersecurity</h3>
              <p className="text-gray-600 mb-4">Pen-testing, hardening, SOC, compliance.</p>
              <ul className="text-gray-700 space-y-2 mb-4 list-disc list-inside">
                <li>Security Audit: $4,000–$15,000</li>
                <li>Remediation: $8,000–$50,000</li>
                <li>Managed SOC: from $3,000/mo</li>
              </ul>
              <Link href="/contact" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">Request Quote</Link>
            </div>

            <div className="border rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Data & Analytics</h3>
              <p className="text-gray-600 mb-4">Warehouses, pipelines, BI, ML ops.</p>
              <ul className="text-gray-700 space-y-2 mb-4 list-disc list-inside">
                <li>Strategy & Setup: $5,000–$20,000</li>
                <li>Dashboards: $6,000–$25,000</li>
                <li>ML Ops: $25,000+</li>
              </ul>
              <Link href="/contact" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">Request Quote</Link>
            </div>

            <div className="border rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Web & Mobile</h3>
              <p className="text-gray-600 mb-4">React/Next.js, React Native, APIs.</p>
              <ul className="text-gray-700 space-y-2 mb-4 list-disc list-inside">
                <li>Website: $3,000–$15,000</li>
                <li>MVP App: $20,000–$70,000</li>
                <li>Enterprise: $80,000+</li>
              </ul>
              <Link href="/contact" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">Request Quote</Link>
            </div>
>>>>>>> c3407f17831351e4f4cfd0efb90f6fd048cb9536
          </div>
        </div>
      </section>
    </main>
  );
};

export default PricingPage;