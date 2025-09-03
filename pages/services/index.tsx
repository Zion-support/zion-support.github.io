import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const ServicesIndex: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI, IT, and Micro SaaS services for modern businesses" />
      </Head>
      
      <main style={{ 
        fontFamily: 'system-ui, sans-serif', 
        lineHeight: 1.5, 
        padding: '32px', 
        maxWidth: 1120, 
        margin: '0 auto' 
      }}>
        <h1 style={{ marginTop: 0 }}>Services</h1>
        <p>Productized services and platforms you can deploy now.</p>

        <h2>Micro SaaS</h2>
        <ul>
          <li><Link href="/services/micro-saas/ai-seo-auditor">AI SEO Auditor</Link> — from $199/mo</li>
          <li><Link href="/services/micro-saas/lead-enrichment">Lead Enrichment API</Link> — from $149/mo</li>
          <li><Link href="/services/micro-saas/contract-ai">Contract AI Extractor</Link> — from $349/mo</li>
          <li><Link href="/services/micro-saas/smart-churn">Smart Churn Predictor</Link> — from $299/mo</li>
          <li><Link href="/services/micro-saas/ai-qa">AI QA Copilot</Link> — from $99/mo</li>
        </ul>

        <h2>AI Solutions</h2>
        <ul>
          <li><Link href="/services/ai/revenue-ops">Revenue Ops Intelligence</Link> — projects from $12k</li>
          <li><Link href="/services/ai/customer-experience">Customer Experience Analytics</Link> — from $8k</li>
          <li><Link href="/services/ai/devops-autopilot">DevOps Autopilot</Link> — from $15k</li>
        </ul>

        <h2>IT Services</h2>
        <ul>
          <li><Link href="/services/it/cloud-finops">Cloud FinOps</Link> — from $4k/mo</li>
          <li><Link href="/services/it/cybersecurity">Managed Cybersecurity</Link> — from $6k/mo</li>
          <li><Link href="/services/it/platform-engineering">Platform Engineering</Link> — from $18k/project</li>
        </ul>

        <h2 id="contact">Contact</h2>
        <p>
          Mobile: +1 302 464 0950 · Email: <a href="mailto:kleber@ziontechgroup.com">kleber@ziontechgroup.com</a><br/>
          Address: 364 E Main St STE 1008 Middletown DE 19709
        </p>
        <p>
          Visit our website: <a href="https://ziontechgroup.com" target="_blank" rel="noreferrer">ziontechgroup.com</a>
        </p>
      </main>
    </div>
  );
};

export default ServicesIndex;