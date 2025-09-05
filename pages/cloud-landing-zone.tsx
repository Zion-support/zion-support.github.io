import React from 'react';
import Head from 'next/head';
import { Phone, Mail, MapPin, Check, ArrowRight, Cloud, Star } from 'lucide-react';
import Layout from '../components/layout/Layout';

import { enhancedRealMicroSaasServices } from '../data/enhanced-real-micro-saas-services';

export default function CloudLandingZonePage() {
  const service = enhancedRealMicroSaasServices.find(s => s.link.endsWith('/cloud-landing-zone'));
  if (!service) return null;

  return (
    <Layout>
      <Head>
        <title>{service.name} - Zion Tech Group</title>
        <meta name=&quot;description&quot; content={service.description} />
        <link rel=&quot;canonical&quot; href=&quot;https://ziontechgroup.com/cloud-landing-zone&quot; />
      </Head>
      <div className=&quot;min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8&quot;>
        <div className=&quot;max-w-6xl mx-auto&quot;>
          <div className=&quot;text-center mb-10&quot;>
            <h1 className=&quot;text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent flex items-center justify-center gap-3 w-10 h-10&quot;><Cloud />{service.name}</h1>
            <p className=&quot;mt-4 text-xl text-slate-300 max-w-3xl mx-auto&quot;>{service.tagline}</p>
          </div>
          <div className=&quot;grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12&quot;>
            <div className=&quot;lg:col-span-2 bg-black/30 rounded-2xl border border-indigo-500/30 p-6&quot;>
              <h2 className=&quot;text-2xl font-semibold mb-4&quot;>Blueprints & guardrails</h2>
              <p className=&quot;text-slate-300 mb-6&quot;>{service.description}</p>
              <ul className=&quot;grid grid-cols-1 md:grid-cols-2 gap-3&quot;>
                {service.features.slice(0, 12).map((feat, i) => (
                  <li key={i} className=&quot;flex items-start space-x-3 text-slate-2 00 w-5 h-5 text-indigo-400 mt-0.5&quot;><Check /><span>{feat}</span></li>
                ))}
              </ul>
            </div>
            <div className=&quot;bg-black/30 rounded-2xl border border-indigo-500/30 p-6 h-fit&quot;>
              <div className=&quot;flex items-end justify-between mb-3&quot;>
                <div>
                  <div className=&quot;text-3xl font-bold text-white text-slate-400 text-base&quot;>{service.price}<span >{service.period}</span></div>
                  <div className=&quot;text-slate-400&quot;>{service.trialDays}-day free trial • Setup: {service.setupTime}</div>
                </div>
                <div className=&quot;flex items-center text-yellow-400 w-4 h-4 mr-1&quot;><Star />{service.rating.toFixed(1)}</div>
              </div>
              <a href=&quot;/contact&quot; className=&quot;w-full px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-700 hover:to-blue-800 text-white font-semibold rounded-lg transition-all duration-200 w-5 h-5 ml-2&quot;>Start Blueprint<ArrowRight /></Link>
              <div className=&quot;mt-6 space-y-3 text-sm text-slate-300&quot;>
                <div className=&quot;flex items-center space-x-2 w-4 h-4 text-cyan-400&quot;><Phone /><span>{service.contactInfo.mobile}</span></div>
                <div className=&quot;flex items-center space-x-2 w-4 h-4 text-purple-400&quot;><Mail /><span>{service.contactInfo.email}</span></div>
                <div className=&quot;flex items-center space-x-2 w-4 h-4 text-green-400 text-xs&quot;><MapPin /><span >{service.contactInfo.address}</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

