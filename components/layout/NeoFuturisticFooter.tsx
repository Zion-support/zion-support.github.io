import React from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Globe, Github, Linkedin, ExternalLink } from 'lucide-react',

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
},

export default function NeoFuturisticFooter() {
  return (
    <footer className=&quot;relative mt-20 border-t border-slate-800/60 bg-black/60 backdrop-blur-xl overflow-hidden&quot;>
      <div className=&quot;absolute inset-0 pointer-events-none&quot;>
        <div className=&quot;absolute -inset-x-10 -top-32 h-64 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 blur-3xl&quot; />
        <div className=&quot;absolute inset-0 bg-neural-dots opacity-20 animate-shimmer&quot; />
import React from 'react';

const _contactInfo = {_mobile: '+1 302 464 0950', _email: 'kleber@ziontechgroup.com', _address: '364 E Main St STE 1008 Middletown DE 19709', _website: 'https://ziontechgroup.com'};

export default function NeoFuturisticFooter() {_return (
    <footer className="relative mt-20 border-t border-slate-800/60 bg-black/60 backdrop-blur-xl overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -inset-x-10 -top-32 h-64 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-neural-dots opacity-20 animate-shimmer" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      </div>

      <div className=&quot;relative container mx-auto px-4 py-12 text-slate-200&quot;>
        <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-10&quot;>
          <div>
            <motion.h3 initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className=&quot;text-xl font-semibold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-3&quot;>
              Zion Tech Group
            </motion.h3>
            <p className=&quot;text-slate-400 text-sm leading-relaxed&quot;>
              Productized AI, IT and micro SaaS solutions with transparent pricing and fast onboarding. Built for outcomes, delivered with reliability.
            </p>
          </div>

          <div className=&quot;space-y-2 text-sm&quot;>
            <div className=&quot;font-semibold text-slate-100 mb-2&quot;>Contact</div>
            <div className=&quot;flex items-center gap-2 text-cyan-300&quot;><Phone className=&quot;w-4 h-4&quot; /><a href={`tel:${contactInfo.mobile.replace(/[^+\d]/g, '')}`} className=&quot;hover:underline&quot;>{contactInfo.mobile}</a></div>
            <div className=&quot;flex items-center gap-2 text-purple-300&quot;><Mail className=&quot;w-4 h-4&quot; /><a href={`mailto:${contactInfo.email}`} className=&quot;hover:underline&quot;>{contactInfo.email}</a></div>
            <div className=&quot;flex items-center gap-2 text-emerald-300&quot;><MapPin className=&quot;w-4 h-4&quot; /><a href={`https://maps.google.com/?q=${encodeURIComponent(contactInfo.address)}`} target=&quot;_blank&quot; rel=&quot;noopener noreferrer&quot; className=&quot;hover:underline&quot;>{contactInfo.address}</a></div>
            <div className=&quot;flex items-center gap-2 text-sky-300&quot;><Globe className=&quot;w-4 h-4&quot; /><a href={contactInfo.website} className=&quot;hover:underline&quot;>ziontechgroup.com</a></div>
          </div>

          <div className=&quot;space-y-2 text-sm&quot;>
            <div className=&quot;font-semibold text-slate-100 mb-2&quot;>Resources</div>
            <a className=&quot;flex items-center gap-2 text-slate-300 hover:text-cyan-300&quot; href=&quot;/market-pricing&quot;><ExternalLink className=&quot;w-4 h-4&quot; /> Market Pricing</a>
            <a className=&quot;flex items-center gap-2 text-slate-300 hover:text-cyan-300&quot; href=&quot;/services&quot;><ExternalLink className=&quot;w-4 h-4&quot; /> Services</a>
            <a className=&quot;flex items-center gap-2 text-slate-300 hover:text-cyan-300&quot; href=&quot;/contact&quot;><ExternalLink className=&quot;w-4 h-4&quot; /> Contact</a>
            <div className=&quot;flex items-center gap-3 pt-2&quot;>
              <a aria-label=&quot;GitHub&quot; href=&quot;https://github.com/Zion-Holdings&quot; className=&quot;text-slate-400 hover:text-white&quot;><Github className=&quot;w-5 h-5&quot; /></a>
              <a aria-label=&quot;LinkedIn&quot; href=&quot;https://www.linkedin.com/company/zion-tech-group/&quot; className=&quot;text-slate-400 hover:text-white&quot;><Linkedin className=&quot;w-5 h-5&quot; /></a>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-t border-slate-800/60 pt-6">
          <div className="text-xs text-slate-500">© {_new Date().getFullYear()} Zion Tech Group. All rights reserved.</div>
          <div className="text-xs text-slate-500 flex gap-4">
            <a href="/privacy" className="hover: text-slate-300">Privacy</a>
            <a href="/terms" className="hover:text-slate-300">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

