import React from 'react';
import { Helmet } from 'react-helmet-async';

type Service = { name: string; summary: string; pricing: string };

const aiServices: Service[] = [
  { name: 'GenAI Content & SEO Automation', summary: 'Editorial-quality drafts, clustering, briefs, internal linking.', pricing: '$1k–$6k/month' },
  { name: 'LLM Evaluation & Safety Suite', summary: 'Red-teaming, guardrails, prompt tests, toxicity and bias checks.', pricing: '$799–$3,500/month' },
  { name: 'Computer Vision & Image Analysis', summary: 'Detection, OCR, quality control, medical imaging.', pricing: '$5k–$25k setup' },
  { name: 'NLP Pipelines', summary: 'NER, sentiment, topic modeling, classifiers and RAG.', pricing: '$3k–$15k setup' },
  { name: 'MLOps & Model Monitoring', summary: 'CI/CD for ML, drift, retraining, governance.', pricing: '$6k–$25k setup + $500–$2k/mo' },
  { name: 'Recommendation Systems', summary: 'Personalized ranking, hybrid candidates, bandits.', pricing: '$6k–$30k setup' },
  { name: 'Fraud & Risk Scoring', summary: 'Real-time anomaly detection and explainability.', pricing: '$8k–$40k setup' },
  { name: 'Voice AI', summary: 'ASR, TTS, telephony bots, call insights.', pricing: '$4k–$20k setup' },
];

export default function AIServices() {
  return (
    <main style={{ padding: '40px 20px' }}>
      <Helmet>
        <title>AI Services — Zion Tech Group</title>
        <meta name="description" content="GenAI, NLP, Vision, MLOps, Safety and evaluation services with transparent pricing." />
        <link rel="canonical" href="https://ziontechgroup.com/ai-services" />
      </Helmet>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <header style={{ textAlign: 'center', marginBottom: 24 }}>
          <h1 style={{ fontSize: 34, fontWeight: 800 }}>Artificial Intelligence Services</h1>
          <p style={{ color: '#64748b' }}>From ideation to production with governance and measurable impact.</p>
        </header>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 20 }}>
          {aiServices.map((s) => (
            <div key={s.name} style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: 12, padding: 20 }}>
              <h3 style={{ fontSize: 18, fontWeight: 700 }}>{s.name}</h3>
              <p style={{ color: '#64748b', margin: '8px 0' }}>{s.summary}</p>
              <p style={{ fontWeight: 600 }}>Pricing: {s.pricing}</p>
            </div>
          ))}
        </div>
        <section style={{ marginTop: 36 }}>
          <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 8 }}>Benefits</h2>
          <ul>
            <li>Faster time-to-value via reusable blueprints</li>
            <li>Compliance-first guardrails and observability</li>
            <li>Cost control with token budgeting and caching</li>
          </ul>
          <p style={{ marginTop: 16 }}>Contact: +1 302 464 0950 · kleber@ziontechgroup.com · 364 E Main St STE 1008 Middletown DE 19709</p>
        </section>
      </div>
    </main>
  );
}



