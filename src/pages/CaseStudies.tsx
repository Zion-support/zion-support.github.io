import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { ArrowRight } from 'lucide-react';

export default function CaseStudies() {
  const studies = [
    {
      id: 'ai-cx',
      title: 'AI-Powered Customer Service Transformation',
      industry: 'Retail',
      company: 'Global Retail Corp',
      summary: '40% reduction in support costs and 85% faster response time with AI chat and assisted routing.'
    },
    {
      id: 'zero-trust',
      title: 'Zero-Trust Security in Healthcare',
      industry: 'Healthcare',
      company: 'MediTech Solutions',
      summary: 'HIPAA-compliant zero-trust rollout with 95% reduction in incidents over 12 months.'
    },
    {
      id: 'multi-cloud',
      title: 'Multi-Cloud Strategy & DevOps',
      industry: 'Manufacturing',
      company: 'Global Manufacturing Corp',
      summary: '50% cost reduction and 99.9% uptime with modernized multi-cloud and CI/CD.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <SEO title="Case Studies - Zion Tech Group" description="Real-world success stories from Zion Tech Group clients across industries." />

      <section className="relative py-20 sm:py-28">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-4"
          >
            Case Studies
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-slate-300 max-w-3xl mx-auto"
          >
            Proof of value from AI, cloud, cybersecurity, and digital transformation engagements.
          </motion.p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-7xl">
          {studies.map((s, idx) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="bg-slate-900/60 border border-slate-700/50 hover:border-cyan-400/40 rounded-2xl p-6"
            >
              <div className="flex items-center justify-between mb-2 text-sm text-slate-400">
                <span>{s.industry}</span>
                <span>{s.company}</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
              <p className="text-slate-300 text-sm mb-4">{s.summary}</p>
              <button className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-medium rounded-lg hover:opacity-90">
                View Details
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

