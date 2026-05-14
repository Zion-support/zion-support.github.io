'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Server, Database, Cloud, ArrowRight, ChevronLeft, Check, Mail, Phone, MapPin, ExternalLink, Shield, Zap, BarChart3, Star } from 'lucide-react';
import Link from 'next/link';

type Category = 'cloud' | 'cms' | 'ecommerce' | 'database' | 'monitoring' | 'devops' | null;

const options: Record<string, { id: string; name: string; pros: string[]; cons: string[]; cost: string; bestFor: string }[]> = {
  cloud: [
    { id: 'aws', name: 'AWS', pros: ['Largest ecosystem', 'Broadest services', 'Global availability zones', 'Mature tooling'], cons: ['Complex pricing', 'Steep learning curve', 'Vendor lock-in'], cost: 'Pay-as-you-go from $100/mo', bestFor: 'Enterprise, startups with scale plans' },
    { id: 'gcp', name: 'Google Cloud', pros: ['Best ML/AI tools', 'Kubernetes native (GKE)', 'Fastest networking', 'BigQuery analytics'], cons: ['Smaller ecosystem', 'Fewer enterprise features', 'Regional gaps'], cost: 'Generous free tier, pay-as-you-go', bestFor: 'Data/ML workloads, modern startups' },
    { id: 'azure', name: 'Azure', pros: ['Microsoft integration', 'Hybrid cloud leader', 'Enterprise compliance', 'Active Directory'], cons: ['Complex management', 'Slower innovation', 'Portal UX'], cost: 'Discounted for Microsoft customers', bestFor: 'Microsoft shops, regulated industries' },
  ],
  cms: [
    { id: 'wordpress', name: 'WordPress', pros: ['Largest ecosystem', 'Easy to use', 'Thousands of plugins', 'SEO-friendly'], cons: ['Security concerns', 'Slow at scale', 'Plugin conflicts', 'High maintenance'], cost: 'Free, hosting $10-100/mo', bestFor: 'Blogs, small business, content-heavy sites' },
    { id: 'nextjs', name: 'Next.js (Headless)', pros: ['Lightning fast SSR', 'React ecosystem', 'Vercel integration', 'SEO-optimized'], cons: ['Requires dev team', 'Smaller plugin ecosystem', 'Steeper curve'], cost: 'Dev investment + hosting $20-200/mo', bestFor: 'High-performance, custom web apps' },
    { id: 'webflow', name: 'Webflow', pros: ['Visual builder', 'No code needed', 'Clean hosting', 'Design freedom'], cons: ['Vendor lock-in', 'Limited logic', 'Expensive at scale', 'Export restrictions'], cost: '$14-36/mo + CMS $45/mo', bestFor: 'Marketing sites, design agencies' },
    { id: 'shopify', name: 'Shopify', pros: ['All-in-one commerce', 'App ecosystem', 'Reliable hosting', 'Easy setup'], cons: ['Transaction fees', 'Theme limits', 'Monthly costs add up'], cost: '$39-399/mo + transaction fees', bestFor: 'E-commerce businesses of all sizes' },
  ],
  database: [
    { id: 'postgresql', name: 'PostgreSQL', pros: ['Open source & free', 'ACID compliance', 'JSON support', 'Huge ecosystem'], cons: ['Complex tuning at scale', 'Single-node bottleneck'], cost: 'Free (managed: $15-200/mo)', bestFor: 'Most relational workloads' },
    { id: 'mongodb', name: 'MongoDB', pros: ['Flexible schema', 'JSON native', 'Horizontal scaling', 'Atlas managed'], cons: ['No joins/ACID out-of-box', 'Memory heavy', 'Consistency tradeoffs'], cost: 'Free tier, Atlas from $9/mo', bestFor: 'Content-heavy, rapid iteration' },
    { id: 'supabase', name: 'Supabase', pros: ['PostgreSQL + tools', 'Built-in auth & realtime', 'Generous free tier', 'Developer-friendly'], cons: ['Newer platform', 'Fewer enterprise features', 'Scaling still maturing'], cost: 'Free tier, Pro $25/mo', bestFor: 'Startups, full-stack apps' },
    { id: 'dynamodb', name: 'DynamoDB', pros: ['Serverless', 'Massive scale', 'Predictable latency', 'AWS native'], cons: ['NoSQL only', 'Hot partition limits', 'Vendor lock-in'], cost: 'Pay-per-request from $1/mo', bestFor: 'High-throughput, AWS workloads' },
  ],
  ecommerce: [
    { id: 'shopify', name: 'Shopify', pros: ['Complete commerce platform', 'App ecosystem', 'Reliable'], cons: ['Transaction fees', 'Monthly costs'], cost: '$39-399/mo', bestFor: 'E-commerce focus' },
    { id: 'woocommerce', name: 'WooCommerce', pros: ['WordPress integration', 'Open source', 'Flexible'], cons: ['Self-hosted', 'Security responsibility'], cost: 'Free + hosting/plugin costs', bestFor: 'WordPress merchants' },
    { id: 'headless', name: 'Headless Commerce (Next.js + Stripe)', pros: ['Total customization', 'Blazing fast', 'No vendor lock-in', 'Stripe integration'], cons: ['Requires dev team', 'No dashboard out-of-box'], cost: 'Dev investment + Stripe fees', bestFor: 'Custom commerce experiences' },
  ],
  monitoring: [
    { id: 'datadog', name: 'Datadog', pros: ['Comprehensive', 'APM + logs + metrics', 'Best-in-class'], cons: ['Expensive at scale', 'Complex setup'], cost: 'From $15/host/mo', bestFor: 'Enterprise monitoring' },
    { id: 'grafana', name: 'Grafana + Prometheus', pros: ['Open source & free', 'Highly customizable', 'Active community'], cons: ['Self-managed', 'Alerting complexity'], cost: 'Free (self-hosted)', bestFor: 'DevOps teams, budget-conscious' },
    { id: 'newrelic', name: 'New Relic', pros: ['Full-stack observability', 'Generous free tier', 'Easy setup'], cons: ['Data volume limits', 'Less than Datadog'], cost: 'Free tier, from $0.30/GB', bestFor: 'Startups to mid-market' },
  ],
};

export default function TechStackAdvisor() {
  const [category, setCategory] = useState<Category>(null);
  const [step, setStep] = useState<'select' | 'compare'>('select');
  const [selected, setSelected] = useState<string[]>([]);

  const toggleSelect = (id: string) => {
    setSelected(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev.slice(0, 2), id].slice(-3));
  };

  const items = category ? options[category] : [];
  const selectedItems = items.filter(i => selected.includes(i.id));

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-8 px-4 md:py-16 md:px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 text-cyan-400 text-sm mb-4">
            <Code className="w-4 h-4" />
            Zion Tech Stack Advisor
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-3">Technology Comparison Tool</h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Compare platforms side-by-side with Zion's unbiased analysis. We don't sell vendor subscriptions — we build solutions.
          </p>
        </motion.div>

        {step === 'select' ? (
          <div className="space-y-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { key: 'cloud', label: 'Cloud Platforms', icon: <Cloud className="w-6 h-6" /> },
                { key: 'cms', label: 'CMS & Websites', icon: <Code className="w-6 h-6" /> },
                { key: 'ecommerce', label: 'E-Commerce Platforms', icon: <BarChart3 className="w-6 h-6" /> },
                { key: 'database', label: 'Databases', icon: <Database className="w-6 h-6" /> },
                { key: 'monitoring', label: 'Monitoring & Observability', icon: <BarChart3 className="w-6 h-6" /> },
              ].map(cat => (
                <button key={cat.key} onClick={() => { setCategory(cat.key as Category); setStep('compare'); setSelected([]); }}
                  className="text-left bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-cyan-500/50 hover:bg-cyan-500/5 transition-all group">
                  <div className="text-cyan-400 mb-3">{cat.icon}</div>
                  <h3 className="text-white font-semibold group-hover:text-cyan-400 transition-colors">{cat.label}</h3>
                  <div className="flex items-center gap-1 mt-2 text-cyan-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>Compare</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </button>
              ))}
            </div>
            {/* Contact CTA in the middle */}
            <div className="bg-slate-800/30 border border-slate-700/30 rounded-xl p-6 text-center">
              <p className="text-slate-400 mb-3">Need help choosing the right stack for your project?</p>
              <div className="text-slate-300 text-sm space-y-1">
                <p><Phone className="w-3.5 h-3.5 inline mr-1" /> +1 302 464 0950</p>
                <p><Mail className="w-3.5 h-3.5 inline mr-1" /> <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:underline">kleber@ziontechgroup.com</a></p>
                <p><MapPin className="w-3.5 h-3.5 inline mr-1" /> 364 E Main St STE 1008 Middletown DE 19709</p>
              </div>
            </div>
          </div>
        ) : (
          <AnimatePresence>
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
              <div className="flex items-center justify-between mb-6">
                <button onClick={() => { setCategory(null); setStep('select'); }} className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
                  <ChevronLeft className="w-4 h-4" /> Back to Categories
                </button>
                <p className="text-slate-400 text-sm">Select up to 3 to compare</p>
              </div>
              
              <div className="flex flex-wrap gap-3 mb-8">
                {items.map(item => (
                  <button key={item.id} onClick={() => toggleSelect(item.id)}
                    className={`px-4 py-2 rounded-lg border text-sm font-medium transition-all ${selected.includes(item.id) ? 'border-cyan-500 bg-cyan-500/10 text-white' : 'border-slate-700 text-slate-400 hover:border-slate-600'}`}>
                    {item.name}
                  </button>
                ))}
              </div>

              {selectedItems.length > 0 && (
                <div className="space-y-8">
                  <div className="grid md:grid-cols-3 gap-6">
                    {selectedItems.map((item, i) => (
                      <motion.div key={item.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
                        className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
                        <h3 className="text-xl font-bold text-white mb-4">{item.name}</h3>
                        <div className="space-y-4">
                          <div>
                            <p className="text-slate-400 text-xs mb-1">Best For</p>
                            <p className="text-cyan-400 text-sm">{item.bestFor}</p>
                          </div>
                          <div>
                            <p className="text-slate-400 text-xs mb-1">Cost</p>
                            <p className="text-white text-sm">{item.cost}</p>
                          </div>
                          <div>
                            <p className="text-green-400 text-xs mb-1 flex items-center gap-1"><Check className="w-3 h-3" /> Pros</p>
                            <ul className="space-y-1">{item.pros.map((p, pi) => <li key={pi} className="text-slate-300 text-sm flex items-start gap-1.5"><span className="text-green-500 mt-1.5">•</span>{p}</li>)}</ul>
                          </div>
                          <div>
                            <p className="text-red-400 text-xs mb-1 flex items-center gap-1"><ArrowRight className="w-3 h-3" /> Cons</p>
                            <ul className="space-y-1">{item.cons.map((c, ci) => <li key={ci} className="text-slate-300 text-sm flex items-start gap-1.5"><span className="text-red-500 mt-1.5">•</span>{c}</li>)}</ul>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Zion Recommendation */}
                  <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-xl p-6">
                    <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2"><Star className="w-5 h-5 text-cyan-400" /> Zion's Take</h3>
                    <p className="text-slate-300 text-sm mb-3">
                      We recommend the right platform for your specific needs. Our architects have deployed solutions across all major platforms.
                      {selectedItems.length === 1 && ` ${selectedItems[0].name} is a solid choice — let's discuss how we can build on it.`}
                    </p>
                    <Link href="/consultation" className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg text-sm font-medium transition-colors">
                      Discuss Your Stack <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>

                  <div className="text-center">
                    <button onClick={() => setSelected([])} className="text-slate-400 hover:text-white transition-colors text-sm">
                      Reset Selection
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        )}

        <div className="text-center mt-10 text-slate-500 text-xs">
          <p>Comparison tool by Zion Tech Group — we build on all major platforms, no vendor bias</p>
        </div>
      </div>
    </div>
  );
}
