<<<<<<< HEAD

import Head from 'next/head';
import { Activity, Phone, Mail, MapPin, Check, ArrowRight  } from 'lucide-react';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';

export default function IncidentAutomationSuitePage() {

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  const service = enhancedRealMicroSaasServices.find(s => s.link.endsWith('/incident-automation-suite'));
  if (!service) return null;

  return (
    <UltraFuturisticBackground variant="quantum" intensity={1.5}>
<<<<<<< HEAD
=======
<<<<<<<< HEAD:backup-problematic-files/components/incident-automation-suite.tsx.backup.1755991612
import React from 'react'
import Head from 'next/head'
import { Activity, Phone, Mail, MapPin, Check, ArrowRight } from 'lucide-react',
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground'
import Button from '../components/ui/Button'
import { enhancedRealMicroSaasServices } from '../data/enhanced-real-micro-saas-services'
export default function IncidentAutomationSuitePage() {
  const service = enhancedRealMicroSaasServices.find(s => s.link.endsWith('/incident-automation-suite'))
  if (!service) return null,
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231
========
:pages-disabled/biotech-ai.tsx
import React from 'react',
import React from 'react';
:backup-problematic-files/temp_conflicts/pages/incident-automation-suite.tsx
import Head from 'next/head';
import { Activity, Phone, Mail, MapPin, Check, ArrowRight  } from 'lucide-react';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';
:pages-disabled/biotech-ai.tsx
import { Button  } from '../components/ui/Button';
import { enhancedRealMicroSaasServices } from '../data/enhanced-real-micro-saas-services';
import {Button} from '../components/ui/Button';
import {enhancedRealMicroSaasServices} from '../data/enhanced-real-micro-saas-services';
:backup-problematic-files/temp_conflicts/pages/incident-automation-suite.tsx
export default function IncidentAutomationSuitePage() {

:pages-disabled/biotech-ai.tsx
export default function IncidentAutomationSuitePage() {;
export default function IncidentAutomationSuitePage() {
:backup-problematic-files/temp_conflicts/pages/incident-automation-suite.tsx
  const service = enhancedRealMicroSaasServices.find(s => s.link.endsWith('/incident-automation-suite'));
  if (!service) return null;
>>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_conflicts/pages/incident-automation-suite.tsx

  return (
    <UltraAdvancedFuturisticBackground>
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      <Head>
        <title>{service.name} - Zion Tech Group</title>
        <meta name="description" content={service.description} />
        <link rel="canonical" href="https://ziontechgroup.com/incident-automation-suite" />
      </Head>
      <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent flex items-center justify-center gap-3"><Activity className="w-10 h-10" />{service.name}</h1>
            <p className="mt-4 text-xl text-slate-300 max-w-3xl mx-auto">{service.tagline}</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
            <div className="lg:col-span-2 bg-black/30 rounded-2xl border border-emerald-500/30 p-6">
              <h2 className="text-2xl font-semibold mb-4">Capabilities</h2>
              <p className="text-slate-300 mb-6">{service.description}</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {service.features.slice(0, 12).map((feat, i) => (
                  <li key={i} className="flex items-start space-x-3 text-slate-200"><Check className="w-5 h-5 text-emerald-400 mt-0.5" /><span>{feat}</span></li>
                ))}
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
