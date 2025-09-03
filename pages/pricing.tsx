import React from 'react';
import Link from 'next/link';

const PricingPage: React.FC = () => {
  return (
    <div style={{
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
            Pricing
          </h1>
          <p style={{
            fontSize: '1.25rem',
            opacity: 0.9,
            maxWidth: 600,
            margin: '0 auto',
            lineHeight: 1.6
          }}>
            We tailor solutions to your needs. Below are typical starting ranges observed in the market. Get a custom quote at any time.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 32,
          marginBottom: 60
        }}>
          <div style={{
            background: 'rgba(255,255,255,0.05)',
            padding: 32,
            borderRadius: 16,
            border: '1px solid rgba(255,255,255,0.1)',
            backdropFilter: 'blur(10px)'
          }}>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: 700,
              marginBottom: 16,
              color: '#22d3ee'
            }}>
              AI Development
            </h3>
            <p style={{
              opacity: 0.8,
              lineHeight: 1.6,
              marginBottom: 20
            }}>
              Model prototyping, fine-tuning, RAG, and integrations.
            </p>
            <ul style={{
              opacity: 0.9,
              lineHeight: 1.8,
              marginBottom: 24,
              paddingLeft: 20
            }}>
              <li>POC: $5,000–$15,000</li>
              <li>MVP: $20,000–$60,000</li>
              <li>Enterprise: $75,000+</li>
            </ul>
            <Link href="/contact" style={{
              display: 'inline-block',
              background: '#22d3ee',
              color: '#0b1220',
              padding: '12px 24px',
              borderRadius: 8,
              textDecoration: 'none',
              fontWeight: 600
            }}>
              Request Quote
            </Link>
          </div>

          <div style={{
            background: 'rgba(255,255,255,0.05)',
            padding: 32,
            borderRadius: 16,
            border: '1px solid rgba(255,255,255,0.1)',
            backdropFilter: 'blur(10px)'
          }}>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: 700,
              marginBottom: 16,
              color: '#22d3ee'
            }}>
              Micro SaaS
            </h3>
            <p style={{
              opacity: 0.8,
              lineHeight: 1.6,
              marginBottom: 20
            }}>
              Idea validation, build, payments, analytics, hosting.
            </p>
            <ul style={{
              opacity: 0.9,
              lineHeight: 1.8,
              marginBottom: 24,
              paddingLeft: 20
            }}>
              <li>Starter: $8,000–$25,000</li>
              <li>Growth: $30,000–$80,000</li>
              <li>Scale: $100,000+</li>
            </ul>
            <Link href="/contact" style={{
              display: 'inline-block',
              background: '#22d3ee',
              color: '#0b1220',
              padding: '12px 24px',
              borderRadius: 8,
              textDecoration: 'none',
              fontWeight: 600
            }}>
              Request Quote
            </Link>
          </div>

          <div style={{
            background: 'rgba(255,255,255,0.05)',
            padding: 32,
            borderRadius: 16,
            border: '1px solid rgba(255,255,255,0.1)',
            backdropFilter: 'blur(10px)'
          }}>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: 700,
              marginBottom: 16,
              color: '#22d3ee'
            }}>
              Cloud & DevOps
            </h3>
            <p style={{
              opacity: 0.8,
              lineHeight: 1.6,
              marginBottom: 20
            }}>
              AWS/GCP/Azure architecture, IaC, observability.
            </p>
            <ul style={{
              opacity: 0.9,
              lineHeight: 1.8,
              marginBottom: 24,
              paddingLeft: 20
            }}>
              <li>Audit & Setup: $3,000–$12,000</li>
              <li>Migration: $10,000–$40,000</li>
              <li>Managed: from $2,000/mo</li>
            </ul>
            <Link href="/contact" style={{
              display: 'inline-block',
              background: '#22d3ee',
              color: '#0b1220',
              padding: '12px 24px',
              borderRadius: 8,
              textDecoration: 'none',
              fontWeight: 600
            }}>
              Request Quote
            </Link>
          </div>

          <div style={{
            background: 'rgba(255,255,255,0.05)',
            padding: 32,
            borderRadius: 16,
            border: '1px solid rgba(255,255,255,0.1)',
            backdropFilter: 'blur(10px)'
          }}>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: 700,
              marginBottom: 16,
              color: '#22d3ee'
            }}>
              Cybersecurity
            </h3>
            <p style={{
              opacity: 0.8,
              lineHeight: 1.6,
              marginBottom: 20
            }}>
              Pen-testing, hardening, SOC, compliance.
            </p>
            <ul style={{
              opacity: 0.9,
              lineHeight: 1.8,
              marginBottom: 24,
              paddingLeft: 20
            }}>
              <li>Security Audit: $4,000–$15,000</li>
              <li>Remediation: $8,000–$50,000</li>
              <li>Managed SOC: from $3,000/mo</li>
            </ul>
            <Link href="/contact" style={{
              display: 'inline-block',
              background: '#22d3ee',
              color: '#0b1220',
              padding: '12px 24px',
              borderRadius: 8,
              textDecoration: 'none',
              fontWeight: 600
            }}>
              Request Quote
            </Link>
          </div>

          <div style={{
            background: 'rgba(255,255,255,0.05)',
            padding: 32,
            borderRadius: 16,
            border: '1px solid rgba(255,255,255,0.1)',
            backdropFilter: 'blur(10px)'
          }}>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: 700,
              marginBottom: 16,
              color: '#22d3ee'
            }}>
              Data & Analytics
            </h3>
            <p style={{
              opacity: 0.8,
              lineHeight: 1.6,
              marginBottom: 20
            }}>
              Warehouses, pipelines, BI, ML ops.
            </p>
            <ul style={{
              opacity: 0.9,
              lineHeight: 1.8,
              marginBottom: 24,
              paddingLeft: 20
            }}>
              <li>Strategy & Setup: $5,000–$20,000</li>
              <li>Dashboards: $6,000–$25,000</li>
              <li>ML Ops: $25,000+</li>
            </ul>
            <Link href="/contact" style={{
              display: 'inline-block',
              background: '#22d3ee',
              color: '#0b1220',
              padding: '12px 24px',
              borderRadius: 8,
              textDecoration: 'none',
              fontWeight: 600
            }}>
              Request Quote
            </Link>
          </div>

          <div style={{
            background: 'rgba(255,255,255,0.05)',
            padding: 32,
            borderRadius: 16,
            border: '1px solid rgba(255,255,255,0.1)',
            backdropFilter: 'blur(10px)'
          }}>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: 700,
              marginBottom: 16,
              color: '#22d3ee'
            }}>
              Web & Mobile
            </h3>
            <p style={{
              opacity: 0.8,
              lineHeight: 1.6,
              marginBottom: 20
            }}>
              React/Next.js, React Native, APIs.
            </p>
            <ul style={{
              opacity: 0.9,
              lineHeight: 1.8,
              marginBottom: 24,
              paddingLeft: 20
            }}>
              <li>Website: $3,000–$15,000</li>
              <li>MVP App: $20,000–$70,000</li>
              <li>Enterprise: $80,000+</li>
            </ul>
            <Link href="/contact" style={{
              display: 'inline-block',
              background: '#22d3ee',
              color: '#0b1220',
              padding: '12px 24px',
              borderRadius: 8,
              textDecoration: 'none',
              fontWeight: 600
            }}>
              Request Quote
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;

