<<<<<<< HEAD
import React from 'react',;
import Head from 'next/head',;
import { Phone, Mail, MapPin, Check, ArrowRight, Search, Star } from 'lucide-react',;
import Layout from '../components/layout/Layout',;
;
import { enhancedRealMicroSaasServices } from '../data/enhanced-real-micro-saas-services',;
;
export default function DataQualityMonitorPage() {;
  const service = enhancedRealMicroSaasServices.find(s => s.link.endsWith('/data-quality-monitor')),;
  if (!service) return null,;
;
  return (;
    <Layout>;
      <Head>;
        <title>{service.name} - Zion Tech Group</title>;
        <meta name="description" content={service.description} />;
        <link rel="canonical" href="https://ziontechgroup.com/data-quality-monitor" />;
      </Head>;
      <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">;
        <div className="max-w-6xl mx-auto">;
          <div className="text-center mb-10">;
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-indigo-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent flex items-center justify-center gap-3 w-10 h-10"><Search />{service.name}</h1>;
            <p className="mt-4 text-xl text-slate-300 max-w-3xl mx-auto">{service.tagline}</p>;
          </div>;
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">;
            <div className="lg:col-span-2 bg-black/30 rounded-2xl border border-indigo-500/30 p-6">;
              <h2 className="text-2xl font-semibold mb-4">What you get</h2>;
              <p className="text-slate-300 mb-6">{service.description}</p>;
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">;
                {service.features.slice(0, 12).map((feat, i) => (;
                  <li key={i} className="flex items-start space-x-3 text-slate-200 w-5 h-5 text-indigo-400 mt-0.5"><Check /><span>{feat}</span></li>;
                ))}
              </ul>;
            </div>;
            <div className="bg-black/30 rounded-2xl border border-indigo-500/30 p-6 h-fit">;
              <div className="flex items-end justify-between mb-3">;
                <div>;
                  <div className="text-3xl font-bold text-white text-slate-400 text-base">{service.price}<span >{service.period}</span></div>;
                  <div className="text-slate-400">{service.trialDays}-day free trial • Setup:{service.setupTime}</div>;
                </div>;
                <div className="flex items-center text-yellow-400 w-4 h-4 mr-1"><Star />{service.rating.toFixed(1)}</div>;
              </div>;
              <a href="/contact" className="w-full px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-700 hover:to-blue-800 text-white font-semibold rounded-lg transition-all duration-200 w-5 h-5 ml-2">Start Now<ArrowRight /></a>;
              <div className="mt-6 space-y-3 text-sm text-slate-300">;
                <div className="flex items-center space-x-2 w-4 h-4 text-cyan-400"><Phone /><span>{service.contactInfo.mobile}</span></div>;
                <div className="flex items-center space-x-2 w-4 h-4 text-purple-400"><Mail /><span>{service.contactInfo.email}</span></div>;
                <div className="flex items-center space-x-2 w-4 h-4 text-green-400 text-xs"><MapPin /><span >{service.contactInfo.address}</span></div>;
              </div>;
            </div>;
          </div>;
        </div>;
      </div>;
    </Layout>;
  ),;
=======
import React from 'react',
import Head from 'next/head',
import { Phone, Mail, MapPin, Check, ArrowRight, Search, Star } from 'lucide-react',
import Layout from '../components/layout/Layout',
import { enhancedRealMicroSaasServices } from '../data/enhanced-real-micro-saas-services',
export default function DataQualityMonitorPage() {
  const service = enhancedRealMicroSaasServices.find(s => s.link.endsWith('/data-quality-monitor')),
  if (!service) return null,
  return (
    <Layout>
      <Head>
        <title>{service.name} - Zion Tech Group</title>
        <meta name=&quot;description&quot; content={service.description} />
        <link rel=&quot;canonical&quot; href=&quot;https://ziontechgroup.com/data-quality-monitor&quot; />
      </Head>
      <div className=&quot;min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8&quot;>
        <div className=&quot;max-w-6xl mx-auto&quot;>
          <div className=&quot;text-center mb-10&quot;>
            <h1 className=&quot;text-5xl md:text-7xl font-bold bg-gradient-to-r from-indigo-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent flex items-center justify-center gap-3 w-10 h-10&quot;><Search />{service.name}</h1>
            <p className=&quot;mt-4 text-xl text-slate-300 max-w-3xl mx-auto&quot;>{service.tagline}</p>
          </div>
          <div className=&quot;grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12&quot;>
            <div className=&quot;lg:col-span-2 bg-black/30 rounded-2xl border border-indigo-500/30 p-6&quot;>
              <h2 className=&quot;text-2xl font-semibold mb-4&quot;>What you get</h2>
              <p className=&quot;text-slate-300 mb-6&quot;>{service.description}</p>
              <ul className=&quot;grid grid-cols-1 md:grid-cols-2 gap-3&quot;>
                {service.features.slice(0, 12).map((feat, i) => (
                  <li key={i} className=&quot;flex items-start space-x-3 text-slate-200 w-5 h-5 text-indigo-400 mt-0.5&quot;><Check /><span>{feat}</span></li>                ))}
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
              <a href=&quot;/contact&quot; className=&quot;w-full px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-700 hover:to-blue-800 text-white font-semibold rounded-lg transition-all duration-200 w-5 h-5 ml-2&quot;>Start Now<ArrowRight /></Link>
              <div className=&quot;mt-6 space-y-3 text-sm text-slate-300&quot;>
                <div className=&quot;flex items-center space-x-2 w-4 h-4 text-cyan-400&quot;><Phone /><span>{service.contactInfo.mobile}</span></div>
                <div className=&quot;flex items-center space-x-2 w-4 h-4 text-purple-400&quot;><Mail /><span>{service.contactInfo.email}</span></div>
                <div className=&quot;flex items-center space-x-2 w-4 h-4 text-green-400 text-xs&quot;><MapPin /><span >{service.contactInfo.address}</span></div>              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}
;
