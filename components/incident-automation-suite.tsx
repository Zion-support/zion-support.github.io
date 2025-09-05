<<<<<<< HEAD
import React from 'react',
import Head from 'next/head',
import { Activity, Phone, Mail, MapPin, Check, ArrowRight } from 'lucide-react',
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground',
import Button from '../components/ui/Button',
import { enhancedRealMicroSaasServices } from '../data/enhanced-real-micro-saas-services',
export default function IncidentAutomationSuitePage() {
  const service = enhancedRealMicroSaasServices.find(s => s.link.endsWith('/incident-automation-suite')),
  if (!service) return null,
=======
import React from 'react';
import Head from 'next/head';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';
import Button from '../components/ui/Button';

export default function IncidentAutomationSuitePage() {_const _service = enhancedRealMicroSaasServices.find(s => s.link.endsWith('/incident-automation-suite'));
  if (!service) return null;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  return (
    <UltraAdvancedFuturisticBackground>
      <Head>
        <title>{service.name} - Zion Tech Group</title>
<<<<<<< HEAD
        <meta name=&quot;description&quot; content={service.description} />
        <link rel=&quot;canonical&quot; href=&quot;https://ziontechgroup.com/incident-automation-suite&quot; />
      </Head>
      <div className=&quot;min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8&quot;>
        <div className=&quot;max-w-6xl mx-auto&quot;>
          <div className=&quot;text-center mb-10&quot;>
            <h1 className=&quot;text-5xl md:text-7xl font-bold bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent flex items-center justify-center gap-3&quot;><Activity className=&quot;w-10 h-10&quot; />{service.name}</h1>
            <p className=&quot;mt-4 text-xl text-slate-300 max-w-3xl mx-auto&quot;>{service.tagline}</p>
          </div>
          <div className=&quot;grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12&quot;>
            <div className=&quot;lg:col-span-2 bg-black/30 rounded-2xl border border-emerald-500/30 p-6&quot;>
              <h2 className=&quot;text-2xl font-semibold mb-4&quot;>Capabilities</h2>
              <p className=&quot;text-slate-300 mb-6&quot;>{service.description}</p>
              <ul className=&quot;grid grid-cols-1 md:grid-cols-2 gap-3&quot;>
                {service.features.slice(0, 12).map((feat, i) => (
                  <li key={i} className=&quot;flex items-start space-x-3 text-slate-200&quot;><Check className=&quot;w-5 h-5 text-emerald-400 mt-0.5&quot; /><span>{feat}</span></li>
=======
        <meta name="description" content={_service.description} />
        <link rel="canonical" href="https://ziontechgroup.com/incident-automation-suite" />
      </Head>
      <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent flex items-center justify-center gap-3"><Activity className="w-10 h-10" />{_service.name}</h1>
            <p className="mt-4 text-xl text-slate-300 max-w-3xl mx-auto">{_service.tagline}</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
            <div className="lg:col-span-2 bg-black/30 rounded-2xl border border-emerald-500/30 p-6">
              <h2 className="text-2xl font-semibold mb-4">Capabilities</h2>
              <p className="text-slate-300 mb-6">{_service.description}</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {_service.features.slice(0, _12).map(_(feat, _i) => (
                  <li key={i} className="flex items-start space-x-3 text-slate-200"><Check className="w-5 h-5 text-emerald-400 mt-0.5" /><span>{_feat}</span></li>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                ))}
              </ul>
            </div>
            <div className=&quot;bg-black/30 rounded-2xl border border-emerald-500/30 p-6 h-fit&quot;>
              <div className=&quot;flex items-end justify-between mb-3&quot;>
                <div>
<<<<<<< HEAD
                  <div className=&quot;text-3xl font-bold text-white&quot;>{service.price}<span className=&quot;text-slate-400 text-base&quot;>{service.period}</span></div>
                  <div className=&quot;text-slate-400&quot;>{service.trialDays}-day free trial • Setup: {service.setupTime}</div>
                </div>
              </div>
              <Link href=&quot;/contact&quot; variant=&quot;quantum&quot; size=&quot;lg&quot; className=&quot;w-full&quot;>Start Trial<ArrowRight className=&quot;w-5 h-5 ml-2&quot; /></Button>
              <div className=&quot;mt-6 space-y-3 text-sm text-slate-300&quot;>
                <div className=&quot;flex items-center space-x-2&quot;><Phone className=&quot;w-4 h-4 text-cyan-400&quot; /><span>{service.contactInfo.mobile}</span></div>
                <div className=&quot;flex items-center space-x-2&quot;><Mail className=&quot;w-4 h-4 text-purple-400&quot; /><span>{service.contactInfo.email}</span></div>
                <div className=&quot;flex items-center space-x-2&quot;><MapPin className=&quot;w-4 h-4 text-green-400&quot; /><span className=&quot;text-xs&quot;>{service.contactInfo.address}</span></div>
=======
                  <div className="text-3xl font-bold text-white">{_service.price}<span className="text-slate-400 text-base">{_service.period}</span></div>
                  <div className="text-slate-400">{_service.trialDays}-day free trial • Setup: {_service.setupTime}</div>
                </div>
              </div>
              <Link href="/contact" variant="quantum" size="lg" className="w-full">Start Trial<ArrowRight className="w-5 h-5 ml-2" /></Button>
              <div className="mt-6 space-y-3 text-sm text-slate-300">
                <div className="flex items-center space-x-2"><Phone className="w-4 h-4 text-cyan-400" /><span>{_service.contactInfo.mobile}</span></div>
                <div className="flex items-center space-x-2"><Mail className="w-4 h-4 text-purple-400" /><span>{_service.contactInfo.email}</span></div>
                <div className="flex items-center space-x-2"><MapPin className="w-4 h-4 text-green-400" /><span className="text-xs">{_service.contactInfo.address}</span></div>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              </div>
            </div>
          </div>
        </div>
      </div>
    </UltraAdvancedFuturisticBackground>
  )
}

