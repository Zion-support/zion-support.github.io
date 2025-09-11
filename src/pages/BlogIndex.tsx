import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function BlogIndex() {
  return (
    <>
      <Helmet>
        <title>Blog - Zion Tech Group</title>
        <meta name="description" content="Latest insights on AI, edge, cloud, and security from Zion Tech Group." />
      </Helmet>

      <div className="container" style={{ padding: '2rem 1rem' }}>
        <h1>Latest from the Blog</h1>
        <ul style={{ marginTop: '1rem', lineHeight: 1.8 }}>
          <li>
            <a href="/blog/generative-ai-security-best-practices">Generative AI Security Best Practices</a>
          </li>
          <li>
            <a href="/blog/edge-personalization-patterns-2025">Edge Personalization Patterns for 2025</a>
          </li>
          <li>
            <a href="/blog/llm-cost-optimization-playbook">LLM Cost Optimization Playbook</a>
          </li>
          <li>
            <a href="/blog/ai-governance-checklist-2025">AI Governance Checklist 2025</a>
          </li>
        </ul>
      </div>
    </>
  );
}

