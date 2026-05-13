'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Star, ArrowRight, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export default function AIContentModeration() {
  const features = [
    'Multi-modal content analysis',
    'Custom policy rule engine',
    'Real-time moderation workflows',
    'Appeal and escalation handling',
    'Compliance audit logging'
  ];
  const benefits = [
    'Moderate 99% of content automatically',
    'Reduce review team costs by 75%',
    'Maintain community safety standards',
    'Scale to millions of posts daily'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <section className="relative overflow-hidden py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <span className="text-6xl mb-4 block">🛡️</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">AI Content Moderation Platform</h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">Automated content review for user-generated platforms — detect spam, harassment, and policy violations across text, image, and video.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Core Capabilities</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <h3 className="text-white font-semibold">{f}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Business Benefits</h2>
          <div className="grid sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {benefits.map((b, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex items-start gap-3 bg-slate-800/50 border border-slate-700/50 rounded-lg p-4">
                <Star className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                <span className="text-slate-300">{b}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4 text-center">Transparent Pricing</h2>
          <p className="text-slate-400 text-center mb-10 max-w-2xl mx-auto">Average market price: $240–$560/month for comparable content moderation solutions. We deliver enterprise-grade quality at competitive rates.</p>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 text-center">
              <h3 className="text-slate-400 font-medium mb-2">Starter</h3>
              <p className="text-3xl font-bold text-white mb-4">$399/mo</p>
              <ul className="text-left space-y-2 text-slate-400 text-sm mb-6"><li>Core platform features</li><li>Standard support</li><li>Single environment</li></ul>
              <Link href="/consultation" className="block w-full py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors text-center">Get Started</Link>
            </div>
            <div className="bg-blue-600/20 border-2 border-blue-500 rounded-xl p-6 text-center relative">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-500 text-white text-xs px-3 py-1 rounded-full">Most Popular</span>
              <h3 className="text-blue-400 font-medium mb-2">Professional</h3>
              <p className="text-3xl font-bold text-white mb-4">$999/mo</p>
              <ul className="text-left space-y-2 text-slate-400 text-sm mb-6"><li>All Starter features</li><li>Priority support</li><li>Multi-environment</li><li>Advanced analytics</li></ul>
              <Link href="/consultation" className="block w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-center">Get Started</Link>
            </div>
            <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 text-center">
              <h3 className="text-purple-400 font-medium mb-2">Enterprise</h3>
              <p className="text-3xl font-bold text-white mb-4">$2,999/mo</p>
              <ul className="text-left space-y-2 text-slate-400 text-sm mb-6"><li>All Professional features</li><li>Dedicated account manager</li><li>Custom integrations</li><li>SLA guarantees</li></ul>
              <Link href="/consultation" className="block w-full py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors text-center">Contact Sales</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-slate-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Content Moderation?</h2>
          <p className="text-slate-400 mb-8">Schedule a free consultation with our AI solutions experts.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link href="/consultation" className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
              Schedule Free Consultation <ExternalLink className="w-4 h-4" />
            </Link>
            <Link href="/services" className="inline-flex items-center gap-2 px-8 py-3 border border-slate-600 hover:border-slate-500 text-white rounded-lg font-medium transition-colors">
              Browse All Services
            </Link>
          </div>
          <div className="text-slate-400 text-sm space-y-1">
            <p><Phone className="w-4 h-4 inline mr-1" /> +1 302 464 0950</p>
            <p><Mail className="w-4 h-4 inline mr-1" /> kleber@ziontechgroup.com</p>
            <p><MapPin className="w-4 h-4 inline mr-1" /> 364 E Main St STE 1008 Middletown DE 19709</p>
          </div>
        </div>
      </section>
    </div>
  );
}
