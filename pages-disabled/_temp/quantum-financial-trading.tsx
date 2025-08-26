<<<<<<< HEAD
import React from 'react';
import Head from 'next/head';
import { Phone, Mail, MapPin, Check, ArrowRight, TrendingUp, Star } from 'lucide-react';
import Layout from '../components/layout/Layout';

=======
import NextHead from 'next/head';
import { Activity, Check, Phone, Mail, MapPin } from 'lucide-react';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';
import Button from '../components/ui/Button';
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-7d74
import { enhancedRealMicroSaasServices } from '../data/enhanced-real-micro-saas-services';

export default function QuantumFinancialTradingPage() {
  const service = enhancedRealMicroSaasServices.find(s => (s.link || '').endsWith('/quantum-financial-trading'));
  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709'
  };

  return (
<<<<<<< HEAD
    <Layout>
      <Head>
        <title>{service.name} - Zion Tech Group</title>
        <meta name="description" content={service.description} />
=======
    <UltraAdvancedFuturisticBackground>
      <NextHead>
        <title>{service?.name || 'Quantum Financial Trading Platform'} - Zion Tech Group</title>
        <meta name="description" content={service?.description || 'Nanosecond execution, risk controls, and backtesting powered by quantum-inspired models.'} />
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-7d74
        <link rel="canonical" href="https://ziontechgroup.com/quantum-financial-trading" />
      </NextHead>
      <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
<<<<<<< HEAD
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-400 bg-clip-text text-transparent flex items-center justify-center gap-3 w-10 h-10"><TrendingUp />{service.name}</h1>
            <p className="mt-4 text-xl text-slate-300 max-w-3xl mx-auto">{service.tagline}</p>
=======
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent flex items-center justify-center gap-3">
              <Activity className="w-10 h-10" />{service?.name || 'Quantum Financial Trading Platform'}
            </h1>
            <p className="mt-4 text-xl text-slate-300 max-w-3xl mx-auto">{service?.tagline || 'Ultra-low latency, market microstructure analytics, and risk-aware execution.'}</p>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-7d74
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
            <div className="lg:col-span-2 bg-black/30 rounded-2xl border border-cyan-500/30 p-6">
              <h2 className="text-2xl font-semibold mb-4">Capabilities</h2>
              <p className="text-slate-300 mb-6">{service?.description || 'Backtesting frameworks, factor models, multi-venue routing, and pre-trade risk checks.'}</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
<<<<<<< HEAD
                {service.features.slice(0, 12).map((feat, i) => (
                  <li key={i} className="flex items-start space-x-3 text-slate-200 w-5 h-5 text-yellow-400 mt-0.5"><Check /><span>{feat}</span></li>
=======
                {(service?.features?.slice(0, 12) || ['Nanosecond execution', 'Backtesting suite', 'Risk controls', 'Multi-venue routing', 'Factor libraries', 'Surveillance']).map((feat, i) => (
                  <li key={i} className="flex items-start space-x-3 text-slate-200"><Check className="w-5 h-5 text-cyan-400 mt-0.5" /><span>{feat}</span></li>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-7d74
                ))}
              </ul>
            </div>
            <div className="bg-black/30 rounded-2xl border border-cyan-500/30 p-6 h-fit">
              <div className="flex items-end justify-between mb-3">
                <div>
<<<<<<< HEAD
                  <div className="text-3xl font-bold text-white text-slate-400 text-base">{service.price}<span >{service.period}</span></div>
                  <div className="text-slate-400">{service.trialDays}-day free trial • Setup: {service.setupTime}</div>
                </div>
                <div className="flex items-center text-yellow-400 w-4 h-4 mr-1"><Star />{service.rating.toFixed(1)}</div>
              </div>
              <a href="/contact" className="w-full px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-700 hover:to-blue-800 text-white font-semibold rounded-lg transition-all duration-200 w-5 h-5 ml-2">Book a Strategy Call<ArrowRight /></a>
              <div className="mt-6 space-y-3 text-sm text-slate-300">
                <div className="flex items-center space-x-2 w-4 h-4 text-cyan-400"><Phone /><span>{service.contactInfo.mobile}</span></div>
                <div className="flex items-center space-x-2 w-4 h-4 text-purple-400"><Mail /><span>{service.contactInfo.email}</span></div>
                <div className="flex items-center space-x-2 w-4 h-4 text-green-400 text-xs"><MapPin /><span >{service.contactInfo.address}</span></div>
=======
                  <div className="text-3xl font-bold text-white">{service?.price || 'Enterprise'}<span className="text-slate-400 text-base">{service?.period || ''}</span></div>
                </div>
              </div>
              <Button href="/contact" variant="quantum" size="lg" className="w-full">Request Demo</Button>
              <div className="mt-6 space-y-3 text-sm text-slate-300">
                <div className="flex items-center space-x-2"><Phone className="w-4 h-4 text-cyan-400" /><span>{contactInfo.mobile}</span></div>
                <div className="flex items-center space-x-2"><Mail className="w-4 h-4 text-purple-400" /><span>{contactInfo.email}</span></div>
                <div className="flex items-center space-x-2"><MapPin className="w-4 h-4 text-green-400" /><span className="text-xs">{contactInfo.address}</span></div>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-7d74
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

