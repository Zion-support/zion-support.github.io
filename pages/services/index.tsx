import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const ServicesPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Services - Zion Tech Group</title>
        <meta name="description" content="Explore our comprehensive AI micro SaaS, IT, and AI services with transparent pricing." />
      </Head>
      
      <main style={{ fontFamily: 'system-ui, sans-serif', lineHeight: 1.5, padding: '32px', maxWidth: 1120, margin: '0 auto' }}>
        <h1 style={{ marginTop: 0 }}>AI-Powered Micro SAAS Solutions</h1>
        <p>Discover our comprehensive suite of AI-powered micro SaaS services, IT solutions, and AI platforms with transparent pricing and rapid deployment.</p>

        <h2>AI Micro SaaS Services</h2>
        <ul>
          <li><Link href="/services/ai-customer-churn-predictor">AI Customer Churn Predictor Pro</Link> — $299/month (94% accuracy)</li>
          <li><Link href="/services/ai-financial-fraud-detection">AI Financial Fraud Detection Suite</Link> — $499/month (99.7% accuracy)</li>
          <li><Link href="/services/ai-supply-chain-optimization">AI Supply Chain Optimization Platform</Link> — $799/month (25% cost reduction)</li>
          <li><Link href="/services/ai-healthcare-diagnostics">AI Healthcare Diagnostics Assistant</Link> — $1,299/month (96% accuracy)</li>
          <li><Link href="/services/ai-content-creation-studio">AI Content Creation Studio Pro</Link> — $199/month (10x faster content)</li>
          <li><Link href="/services/ai-predictive-maintenance">AI Predictive Maintenance Platform</Link> — $599/month (60% downtime reduction)</li>
          <li><Link href="/services/ai-legal-document-analysis">AI Legal Document Analysis Suite</Link> — $899/month (80% time savings)</li>
          <li><Link href="/services/ai-real-estate-analytics">AI Real Estate Analytics Platform</Link> — $399/month (25% valuation improvement)</li>
          <li><Link href="/services/ai-cybersecurity-threat-intelligence">AI Cybersecurity Threat Intelligence</Link> — $699/month (75% incident reduction)</li>
          <li><Link href="/services/ai-personal-finance-advisor">AI Personal Finance Advisor</Link> — $99/month (24/7 guidance)</li>
        </ul>

        <h2>Advanced AI Solutions</h2>
        <ul>
          <li><Link href="/services/ai-ecommerce-personalization">AI E-commerce Personalization Engine</Link> — $299/month (35% conversion increase)</li>
          <li><Link href="/services/ai-hr-recruitment">AI HR Recruitment Platform</Link> — $499/month (50% faster hiring)</li>
          <li><Link href="/services/ai-energy-management">AI Energy Management System</Link> — $399/month (30% cost reduction)</li>
          <li><Link href="/services/ai-autonomous-vehicle-management">AI Autonomous Vehicle Management</Link> — $1,999/month (fleet optimization)</li>
          <li><Link href="/services/ai-blockchain-supply-chain">AI Blockchain Supply Chain Platform</Link> — $1,299/month (transparency)</li>
          <li><Link href="/services/ai-smart-city-infrastructure">AI Smart City Infrastructure Management</Link> — $2,499/month (40% traffic reduction)</li>
          <li><Link href="/services/ai-quantum-financial-trading">AI Quantum Financial Trading Platform</Link> — $4,999/month (quantum advantage)</li>
        </ul>

        <h2>IT Services</h2>
        <ul>
          <li><Link href="/services/cloud-devops">Cloud DevOps & Infrastructure</Link> — from $4k/month</li>
          <li><Link href="/services/cybersecurity">Managed Cybersecurity</Link> — from $6k/month</li>
          <li><Link href="/services/digital-transformation">Digital Transformation</Link> — from $18k/project</li>
        </ul>

        <h2>Comprehensive Showcase</h2>
        <p>
          <Link href="/services/comprehensive-micro-saas-showcase" className="text-blue-600 underline">
            View our complete AI micro SaaS showcase with detailed features, benefits, and market pricing →
          </Link>
        </p>

        <h2 id="contact">Contact Information</h2>
        <div style={{ backgroundColor: '#f8f9fa', padding: '24px', borderRadius: '8px', marginTop: '24px' }}>
          <h3 style={{ marginTop: 0 }}>Get in Touch</h3>
          <p><strong>Mobile:</strong> <a href="tel:+13024640950">+1 302 464 0950</a></p>
          <p><strong>Email:</strong> <a href="mailto:kleber@ziontechgroup.com">kleber@ziontechgroup.com</a></p>
          <p><strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709</p>
          <p><strong>Website:</strong> <a href="https://ziontechgroup.com" target="_blank" rel="noreferrer">https://ziontechgroup.com</a></p>
          <div style={{ marginTop: '16px' }}>
            <Link href="/contact" style={{ 
              backgroundColor: '#007bff', 
              color: 'white', 
              padding: '12px 24px', 
              borderRadius: '6px', 
              textDecoration: 'none',
              display: 'inline-block'
            }}>
              Request a Quote
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ServicesPage;