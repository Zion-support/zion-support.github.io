<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const service = enhancedRealMicroSaasServices.find(s => s.link.endsWith('/prompt-policy-registry'));
  if (!service) return null;


<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

import React from 'react',;
import Head from 'next/head',;
import { Phone, Mail, MapPin, Check, ArrowRight, FileText, Star } from 'lucide-react',;
import Layout from '../components/layout/Layout',;
import { enhancedRealMicroSaasServices } from '../data/enhanced-real-micro-saas-services',;

<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React from 'react'
import Head from 'next/head'
import { Phone, Mail, MapPin, Check, ArrowRight, FileText, Star } from 'lucide-react',
import Layout from '../components/layout/Layout'
import { enhancedRealMicroSaasServices } from '../data/enhanced-real-micro-saas-services'


<<<<<<< HEAD

import React from 'react';
import Head from 'next/head';
import { Phone, Mail, MapPin, Check, ArrowRight, FileText, Star } from 'lucide-react';
import Layout from '../components/layout/Layout';
import { enhancedRealMicroSaasServices } from '../data/enhanced-real-micro-saas-services';
export default function PromptPolicyRegistryPage() {
  const service = enhancedRealMicroSaasServices.find(s => s.link.endsWith('/prompt-policy-registry'))
  if (!service) return null
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

import React from 'react',;
import Head from 'next/head',;
import { Phone, Mail, MapPin, Check, ArrowRight, FileText, Star } from 'lucide-react',;
import Layout from '../components/layout/Layout',;
import { enhancedRealMicroSaasServices } from '../data/enhanced-real-micro-saas-services',;
import React from 'react'
import Head from 'next/head'
import { Phone, Mail, MapPin, Check, ArrowRight, FileText, Star } from 'lucide-react',
import Layout from '../components/layout/Layout'
import { enhancedRealMicroSaasServices } from '../data/enhanced-real-micro-saas-services'
<<<<<<< HEAD
export default function PromptPolicyRegistryPage() {
  const service = enhancedRealMicroSaasServices.find(s => s.link.endsWith('/prompt-policy-registry'))
  if (!service) return null,
export default function PromptPolicyRegistryPage() {
  const service = enhancedRealMicroSaasServices.find(s => s.link.endsWith('/prompt-policy-registry'))
  if (!service) return null,
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export default function PromptPolicyRegistryPage() {
  const service = enhancedRealMicroSaasServices.find(s => s.link.endsWith('/prompt-policy-registry'))
  if (!service) return null,
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
export default function PromptPolicyRegistryPage() {
  const service = enhancedRealMicroSaasServices.find(s => s.link.endsWith('/prompt-policy-registry'))
  if (!service) return null,
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return (
    <Layout>
      <Head>
        <title>{service.name} - Zion Tech Group</title>
        <meta name="description" content={service.description} />
        <link rel="canonical" href="https://ziontechgroup.com/prompt-policy-registry" />
      </Head>
      <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent flex items-center justify-center gap-3 w-10 h-10"><FileText />{service.name}</h1>
            <p className="mt-4 text-xl text-slate-300 max-w-3xl mx-auto">{service.tagline}</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
            <div className="lg:col-span-2 bg-black/30 rounded-2xl border border-indigo-500/30 p-6">
              <h2 className="text-2xl font-semibold mb-4">What you get</h2>
              <p className="text-slate-300 mb-6">{service.description}</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {service.features.slice(0, 12).map((feat, i) => (
                  <li key={i} className="flex items-start space-x-3 text-slate-200 w-5 h-5 text-indigo-400 mt-0.5"><Check /><span>{feat}</span></li>
<<<<<<< HEAD

<<<<<<< HEAD
                ))}
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                ))}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              </ul>
            </div>
            <div className="bg-black/30 rounded-2xl border border-indigo-500/30 p-6 h-fit">
              <div className="flex items-end justify-between mb-3">
                <div>
                  <div className="text-3xl font-bold text-white text-slate-400 text-base">{service.price}<span >{service.period}</span></div>
                  <div className="text-slate-400">{service.trialDays}-day free trial • Setup: {service.setupTime}</div>
                </div>
                <div className="flex items-center text-yellow-400 w-4 h-4 mr-1"><Star />{service.rating.toFixed(1)}</div>
              </div>
<<<<<<< HEAD

<<<<<<< HEAD
              <a href="/contact" className="w-full px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-700 hover:to-blue-800 text-white font-semibold rounded-lg transition-all duration-200 w-5 h-5 ml-2">Start Now<ArrowRight /></Link>


              <a href="/contact" className="w-full px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-700 hover:to-blue-800 text-white font-semibold rounded-lg transition-all duration-200 w-5 h-5 ml-2">Start Now<ArrowRight /></a>
              <a href="/contact" className="w-full px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-700 hover:to-blue-800 text-white font-semibold rounded-lg transition-all duration-200 w-5 h-5 ml-2">Start Now<ArrowRight /></Link>
=======

              <a href="/contact" className="w-full px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-700 hover:to-blue-800 text-white font-semibold rounded-lg transition-all duration-200 w-5 h-5 ml-2">Start Now<ArrowRight /></Link>


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
              <a href="/contact" className="w-full px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-700 hover:to-blue-800 text-white font-semibold rounded-lg transition-all duration-200 w-5 h-5 ml-2">Start Now<ArrowRight /></a>
              <a href="/contact" className="w-full px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-700 hover:to-blue-800 text-white font-semibold rounded-lg transition-all duration-200 w-5 h-5 ml-2">Start Now<ArrowRight /></Link>


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <div className="mt-6 space-y-3 text-sm text-slate-300">
                <div className="flex items-center space-x-2 w-4 h-4 text-cyan-400"><Phone /><span>{service.contactInfo.mobile}</span></div>
                <div className="flex items-center space-x-2 w-4 h-4 text-purple-400"><Mail /><span>{service.contactInfo.email}</span></div>
                <div className="flex items-center space-x-2 w-4 h-4 text-green-400 text-xs"><MapPin /><span >{service.contactInfo.address}</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
<<<<<<< HEAD
<<<<<<< HEAD
}


=======

}


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

<<<<<<< HEAD
}
import React from 'react',
import Head from 'next / head',
import { Phone, Mail, MapPin, Check, ArrowRight, FileText, Star } from 'lucide-react',
import Layout from '../components / layout / Layout',
import { enhancedRealMicroSaasServices } from '../data / enhanced - real - micro - saas - services',
export default /**
 * PromptPolicyRegistryPage - Function description
 */
function PromptPolicyRegistryPage() {
  const service = enhancedRealMicroSaasServices.find (string => s.link.ends_with ('/prompt - policy - registry')),
  // Check condition
if (return null, ) {
  $2
}
  return (
    <Layout>;
      <Head>;
        <title>{service.name} - Zion Tech Group</title>;
        <meta name="description" content={service.description} />;
        <link rel="canonical" href="https://ziontechgroup.com / prompt - policy - registry" />;
      </Head>;
      <div className="min - h-screen pt - 24 pb - 20 px - 4 sm:px - 6 lg:px - 8">;
        <div className="max - w-6xl mx - auto">;
          <div className="text - center mb - 10">;
            <h1 className="text - 5xl md:text - 7xl font - bold bg - gradient - to - r from - violet - 400 via - purple - 400 to - indigo - 400 bg - clip - text text - transparent flex items - center justify - center gap - 3 w - 10 h - 10"><FileText />{service.name}</h1>;
            <p className="mt - 4 text - xl text - slate - 300 max - w-3xl mx - auto">{service.tagline}</p>;
          </div>;
          <div className="grid grid - cols - 1 lg:grid - cols - 3 gap - 6 mb - 12">;
            <div className="lg:col - span - 2 bg - black / 30 rounded - 2xl border border - indigo - 500 / 30 p - 6">;
              <h2 className="text - 2xl font - semibold mb - 4">What you get</h2>;
              <p className="text - slate - 300 mb - 6">{service.description}</p>;
              <ul className="grid grid - cols - 1 md:grid - cols - 2 gap - 3">;
                {service.features.slice (0, 12).map ((feat, i) => (
                  <li key={i} className="flex items - start space - x-3 text - slate - 200 w - 5 h - 5 text - indigo - 400 mt - 0.5"><Check /><span>{feat}</span></li>))}
              </ul>;
            </div>;
            <div className="bg - black / 30 rounded - 2xl border border - indigo - 500 / 30 p - 6 h - fit">;
              <div className="flex items - end justify - between mb - 3">;
                <div>;
                  <div className="text - 3xl font - bold text - white text - slate - 400 text - base">{service.price}<span >{service.period}</span></div>;
                  <div className="text - slate - 400">{service.trial_days}-day free trial • Setup: {service.setup_time}</div>;
                </div>;
                <div className="flex items - center text - yellow - 400 w - 4 h - 4 mr - 1"><Star />{service.rating.to_fixed (1)}</div>;
              </div>;
              <a href="/contact" className="w - full px - 6 py - 3 bg - gradient - to - r from - cyan - 600 to - blue - 700 hover:from - cyan - 700 hover:to - blue - 800 text - white font - semibold rounded - lg transition - all duration - 200 w - 5 h - 5 ml - 2">Start Now < ArrowRight /></a>;
              <div className="mt - 6 space - y-3 text - sm text - slate - 300">;
                <div className="flex items - center space - x-2 w - 4 h - 4 text - cyan - 400"><Phone /><span>{service.contact_info.mobile}</span></div>;
                <div className="flex items - center space - x-2 w - 4 h - 4 text - purple - 400"><Mail /><span>{service.contact_info.email}</span></div>;
                <div className="flex items - center space - x-2 w - 4 h - 4 text - green - 400 text - xs"><MapPin /><span >{service.contact_info.address}</span></div>;
              </div>;
            </div>;
          </div>;
        </div>;
      </div>;
    </Layout>);
}
;
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
;
;
;
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
