import React from 'react';
import Head from 'next/head';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';
import { Button } from '../components/ui/Button';
import { Globe, Check, Phone, Mail, MapPin, ExternalLink } from 'lucide-react';

export default function DomainDNSMonitorPage() {
  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const features = [
    'Registrar expiry and auto-renew checks',
    'NS/DS drift and delegation correctness',
    'DNSSEC presence and validity',
    'MX/SPF/DMARC health and alignment',
    'Propagation tests across regions',
    'Alerts, webhooks and change history'
  ];

  return (
    <UltraAdvancedFuturisticBackground>
      <Head>
        <title>Domain & DNS Monitor | Zion Tech Group</title>
        <meta name="description" content="Continuous domain and DNS health monitoring with registrar expiry, DNSSEC, MX/SPF/DMARC checks and alerts." />
        <link rel="canonical" href="https://ziontechgroup.com/domain-dns-monitor" />
      </Head>

      <div className="min-h-screen pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent flex items-center justify-center gap-3">
              <Globe className="w-10 h-10" /> Domain & DNS Monitor
            </h1>
            <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">Monitor registrar, delegation, DNSSEC, and email records with proactive alerts.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 p-6 bg-black/40 border border-gray-700/50 rounded-lg">
              <h2 className="text-2xl font-semibold text-white mb-4">Overview</h2>
              <p className="text-gray-300 mb-6">Stay ahead of domain and DNS issues by continuously checking registrar settings, delegation chain, DNSSEC validity, and mail records. Get alerts with context and remediation steps.</p>
              <h3 className="text-lg font-semibold text-white mb-3">Key Features</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-300">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-2"><Check className="w-4 h-4 text-emerald-400 mt-0.5" /> <span>{f}</span></li>
                ))}
              </ul>
            </div>
            <div className="p-6 bg-black/40 border border-gray-700/50 rounded-lg">
              <div className="text-sm text-gray-400 mb-1">Pricing</div>
              <div className="text-3xl font-bold text-white">$29<span className="text-base">/month</span></div>
              <div className="text-sm text-gray-400 mt-2">Trial: 14 days • Setup: Same day</div>
              <div className="mt-6 flex gap-3">
                <a href="/contact" className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-center py-2 rounded">Contact Sales</a>
                <a href="https://ziontechgroup.com/domain-dns-monitor" className="flex-1 border border-gray-600 text-gray-200 text-center py-2 rounded"><ExternalLink className="inline w-4 h-4 mr-2" /> Learn More</a>
              </div>
              <div className="mt-6 space-y-3 text-sm">
                <div className="flex items-center gap-2 text-cyan-400"><Phone className="w-4 h-4" /><a href={`tel:${contactInfo.mobile.replace(/[^+\d]/g, '')}`} className="hover:underline">{contactInfo.mobile}</a></div>
                <div className="flex items-center gap-2 text-purple-400"><Mail className="w-4 h-4" /><a href={`mailto:${contactInfo.email}`} className="hover:underline">{contactInfo.email}</a></div>
                <div className="flex items-center gap-2 text-green-400"><MapPin className="w-4 h-4" /><a href={`https://maps.google.com/?q=${encodeURIComponent(contactInfo.address)}`} target="_blank" rel="noopener noreferrer" className="hover:underline text-xs">{contactInfo.address}</a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
          </UltraAdvancedFuturisticBackground>
  );
}

