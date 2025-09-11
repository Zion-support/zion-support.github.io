import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Check, DollarSign, Phone, Mail, MapPin } from 'lucide-react';
import { real2029Q2Additions } from '@/../data/real-2029-q2-additions';
import { SEO } from '@/components/SEO';

export default function RealServices2029Q2() {
  return (
    <>
      <SEO
        title="New Real Services (2029 Q2) - Zion Tech Group"
        description="Explore newly added real micro SaaS, IT, and AI services with transparent pricing, features, and direct links."
        canonical="/services/2029-q2"
        url="https://ziontechgroup.com/services/2029-q2"
        keywords="micro saas pricing, ai services, it managed services, soc as a service, lead enrichment api"
      />
      <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light text-white">
        {/* Hero */}
        <section className="relative py-20 text-center">
          <div className="container mx-auto px-4">
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-4"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              New Real Services — 2029 Q2
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-zion-slate-light max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Practical, market-ready offerings across Cybersecurity, AI Quality, Data, Cloud FinOps, and more — with pricing, features, and ROI.
            </motion.p>
          </div>
        </section>

        {/* Contact Banner */}
        <div className="bg-white/5 border-y border-white/10">
          <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row gap-3 md:items-center md:justify-between text-sm">
            <div className="flex items-center gap-3"><Phone className="w-4 h-4 text-zion-cyan" /><span>+1 302 464 0950</span></div>
            <div className="flex items-center gap-3"><Mail className="w-4 h-4 text-zion-cyan" /><span>kleber@ziontechgroup.com</span></div>
            <div className="flex items-center gap-3"><MapPin className="w-4 h-4 text-zion-cyan" /><span>364 E Main St STE 1008, Middletown DE 19709</span></div>
          </div>
        </div>

        {/* Services Grid */}
        <section className="py-14">
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {real2029Q2Additions.map((svc) => (
              <motion.div
                key={svc.id}
                className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="mb-3 text-xs uppercase tracking-wider text-zion-cyan/80">{svc.category}</div>
                <h3 className="text-xl font-semibold mb-2">{svc.name}</h3>
                <div className="flex items-center gap-2 text-zion-cyan mb-3">
                  <DollarSign className="w-4 h-4" />
                  <span className="font-medium">{svc.price}</span>
                </div>
                <p className="text-zion-slate-light text-sm mb-4">{svc.description}</p>
                <ul className="space-y-1 mb-4">
                  {svc.features.slice(0, 5).map((f, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-zion-slate-light">
                      <Check className="w-4 h-4 text-green-400 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex items-center gap-2">
                  <a
                    href={svc.link.startsWith('http') ? svc.link : `https://ziontechgroup.com${svc.link}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-zion-purple hover:bg-zion-purple-dark text-white text-sm"
                  >
                    Visit Service
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="pb-20">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 border border-white/10 rounded-2xl p-8 text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Need help choosing?</h2>
              <p className="text-zion-slate-light mb-6">We can tailor a package with clear ROI and timelines.</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a href="mailto:kleber@ziontechgroup.com?subject=Service Consultation" className="px-5 py-3 rounded-lg bg-white text-zion-purple font-medium">Schedule Consultation</a>
                <a href="tel:+13024640950" className="px-5 py-3 rounded-lg border border-white/20">Call +1 302 464 0950</a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

