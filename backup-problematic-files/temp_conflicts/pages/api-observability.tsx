<<<<<<< HEAD

import Head from 'next/head';
import { Shield, Phone, Mail, MapPin, Check, ArrowRight  } from 'lucide-react';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';

export default function ApiObservabilityPage() {

=======
:pages-disabled/quantum-logistics.tsx
import React from 'react',
import React from 'react';
:backup-problematic-files/temp_conflicts/pages/api-observability.tsx
import Head from 'next/head';
import { Shield, Phone, Mail, MapPin, Check, ArrowRight  } from 'lucide-react';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';
:pages-disabled/quantum-logistics.tsx
import { Button  } from '../components/ui/Button';
import { enhancedRealMicroSaasServices } from '../data/enhanced-real-micro-saas-services';
import {Button} from '../components/ui/Button';
import {enhancedRealMicroSaasServices} from '../data/enhanced-real-micro-saas-services';
:backup-problematic-files/temp_conflicts/pages/api-observability.tsx
export default function ApiObservabilityPage() {

:pages-disabled/quantum-logistics.tsx
export default function ApiObservabilityPage() {;
export default function ApiObservabilityPage() {
:backup-problematic-files/temp_conflicts/pages/api-observability.tsx
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  const service = enhancedRealMicroSaasServices.find(s => s.link.endsWith('/api-observability'));
  if (!service) return null;

  return (
    <UltraFuturisticBackground variant="quantum" intensity={1.5}>"

      <Head>
<<<<<<< HEAD
        <title>{service.name} - Zion Tech Group</title>
        <meta name="description" content={service.description} />
        <link rel="canonical" href="https://ziontechgroup.com/api-observability" />
      </Head>
      <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent flex items-center justify-center gap-3"><Shield className="w-10 h-10" />{service.name}</h1>
            <p className="mt-4 text-xl text-slate-300 max-w-3xl mx-auto">{service.tagline}</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
            <div className="lg:col-span-2 bg-black/30 rounded-2xl border border-cyan-500/30 p-6">
              <h2 className="text-2xl font-semibold mb-4">Capabilities</h2>
              <p className="text-slate-300 mb-6">{service.description}</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {service.features.slice(0, 12).map((feat, i) => (
                  <li key={i} className="flex items-start space-x-3 text-slate-200"><Check className="w-5 h-5 text-cyan-400 mt-0.5" /><span>{feat}</span></li>
                ))}
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

        <title>{service.name} - Zion Tech Group</title>"
        <meta name="description" content={service.description} />"
</meta>"
        <link rel="canonical" href="https://ziontechgroup.com/api-observability" />"
</link>
      "
      <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">"
</div>"
        <div className="max-w-6xl mx-auto">"
          <div className="text-center mb-10">"
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent flex items-center justify-center gap-3"><Shield className="w-10 h-10" />{service.name}</h1>""
            <p className="mt-4 text-xl text-slate-300 max-w-3xl mx-auto">{service.tagline}</p>"
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">"
            <div className="lg:col-span-2 bg-black/30 rounded-2xl border border-cyan-500/30 p-6">"
              <h2 className="text-2xl font-semibold mb-4">Capabilities</h2>""
              <p className="text-slate-300 mb-6">{service.description}</p>""
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">"
</ul>"
                  <li key={i} className="flex items-start space-x-3 text-slate-200"><Check className="w-5 h-5 text-cyan-400 mt-0.5" /><span>{feat}</span></li>")"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
