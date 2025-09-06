<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
  const service = enhancedRealMicroSaasServices.find(s => s.link.endsWith('/ai-video-editing'));
  if (!service) return null;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

export default function AIVideoEditingPage() {
  const service = enhancedRealMicroSaasServices.find(s => s.link.endsWith('/ai-video-editing'))
  if (!service) return null,

<<<<<<< HEAD
export default function AIVideoEditingPage() {
  const service = enhancedRealMicroSaasServices.find(s => s.link.endsWith('/ai-video-editing'))
  if (!service) return null,
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import React from 'react',;
import Head from 'next/head',;
import { Phone, Mail, MapPin, Check, ArrowRight, Star, Film } from 'lucide-react',;
import Layout from '../components/layout/Layout',;
import { enhancedRealMicroSaasServices } from '../data/enhanced-real-micro-saas-services',;
<<<<<<< HEAD
export default function AIVideoEditingPage() {
  const service = enhancedRealMicroSaasServices.find(s => s.link.endsWith('/ai-video-editing'))
  if (!service) return null,
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

import React from 'react'
import Head from 'next/head'
import { Phone, Mail, MapPin, Check, ArrowRight, Star, Film } from 'lucide-react',
import Layout from '../components/layout/Layout'
import { enhancedRealMicroSaasServices } from '../data/enhanced-real-micro-saas-services'



import React from 'react';
import Head from 'next/head';
import { Phone, Mail, MapPin, Check, ArrowRight, Star, Film } from 'lucide-react';
import Layout from '../components/layout/Layout';
import { enhancedRealMicroSaasServices } from '../data/enhanced-real-micro-saas-services';
export default function AIVideoEditingPage() {
  const service = enhancedRealMicroSaasServices.find(s => s.link.endsWith('/ai-video-editing'))
  if (!service) return null
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import React from 'react',;
import Head from 'next/head',;
import { Phone, Mail, MapPin, Check, ArrowRight, Star, Film } from 'lucide-react',;
import Layout from '../components/layout/Layout',;
import { enhancedRealMicroSaasServices } from '../data/enhanced-real-micro-saas-services',;

=======
import React from 'react'
import Head from 'next/head'
import { Phone, Mail, MapPin, Check, ArrowRight, Star, Film } from 'lucide-react',
import Layout from '../components/layout/Layout'
import { enhancedRealMicroSaasServices } from '../data/enhanced-real-micro-saas-services'
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export default function AIVideoEditingPage() {
  const service = enhancedRealMicroSaasServices.find(s => s.link.endsWith('/ai-video-editing'))
  if (!service) return null,
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
=======
export default function AIVideoEditingPage() {
  const service = enhancedRealMicroSaasServices.find(s => s.link.endsWith('/ai-video-editing'))
  if (!service) return null,
export default function AIVideoEditingPage() {
  const service = enhancedRealMicroSaasServices.find(s => s.link.endsWith('/ai-video-editing'))
  if (!service) return null,
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
export default function AIVideoEditingPage() {
  const service = enhancedRealMicroSaasServices.find(s => s.link.endsWith('/ai-video-editing'))
  if (!service) return null,
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  return (
    <Layout>
      <Head>
        <title>{service.name} - Zion Tech Group</title>
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
        <meta name="description" content={service.description} />
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        <link rel="canonical" href="https://ziontechgroup.com/ai-video-editing" />
      </Head>
      <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent flex items-center justify-center gap-3 w-10 h-10"><Film />{service.name}</h1>
            <p className="mt-4 text-xl text-slate-300 max-w-3xl mx-auto">{service.tagline}</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
            <div className="lg:col-span-2 bg-black/30 rounded-2xl border border-amber-500/30 p-6">
              <h2 className="text-2xl font-semibold mb-4">Editing capabilities</h2>
              <p className="text-slate-300 mb-6">{service.description}</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {service.features.slice(0, 12).map((feat, i) => (
                  <li key={i} className="flex items-start space-x-3 text-slate-200 w-5 h-5 text-amber-400 mt-0.5"><Check /><span>{feat}</span></li>
<<<<<<< HEAD

=======
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD

=======
                ))}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              </ul>
            </div>
            <div className="bg-black/30 rounded-2xl border border-amber-500/30 p-6 h-fit">
              <div className="flex items-end justify-between mb-3">
                <div>
                  <div className="text-3xl font-bold text-white text-slate-400 text-base">{service.price}<span >{service.period}</span></div>
                  <div className="text-slate-400">{service.trialDays}-day free trial • Setup: {service.setupTime}</div>
                </div>
                <div className="flex items-center text-yellow-400 w-4 h-4 mr-1"><Star />{service.rating.toFixed(1)}</div>
              </div>
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b

              <a href="/contact" className="w-full px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-700 hover:to-blue-800 text-white font-semibold rounded-lg transition-all duration-200 w-5 h-5 ml-2">Create Your First Cut<ArrowRight /></Link>


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
=======
              <a href="/contact" className="w-full px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-700 hover:to-blue-800 text-white font-semibold rounded-lg transition-all duration-200 w-5 h-5 ml-2">Create Your First Cut<ArrowRight /></Link>


              <a href="/contact" className="w-full px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-700 hover:to-blue-800 text-white font-semibold rounded-lg transition-all duration-200 w-5 h-5 ml-2">Create Your First Cut<ArrowRight /></a>
              <a href="/contact" className="w-full px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-700 hover:to-blue-800 text-white font-semibold rounded-lg transition-all duration-200 w-5 h-5 ml-2">Create Your First Cut<ArrowRight /></Link>
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              <div className="mt-6 space-y-3 text-sm text-slate-300">
                <div className="flex items-center space-x-2 w-4 h-4 text-amber-400"><Phone /><span>{service.contactInfo.mobile}</span></div>
                <div className="flex items-center space-x-2 w-4 h-4 text-purple-400"><Mail /><span>{service.contactInfo.email}</span></div>
                <div className="flex items-center space-x-2 w-4 h-4 text-green-400 text-xs"><MapPin /><span >{service.contactInfo.address}</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
}

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  );
};
  )
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df


<<<<<<< HEAD
=======
=======
  )
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
}
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b

}

<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
import React from 'react',
import Head from 'next / head',
import { Phone, Mail, MapPin, Check, ArrowRight, Star, Film } from 'lucide-react',
import Layout from '../components / layout / Layout',
import { enhancedRealMicroSaasServices } from '../data / enhanced - real - micro - saas - services',
export default /**
 * AIVideoEditingPage - Function description
 */
function AIVideoEditingPage() {
  const service = enhancedRealMicroSaasServices.find (string => s.link.ends_with ('/ai - video - editing')),
  // Check condition
if (return null, ) {
  $2
}
  return (
    <Layout>;
      <Head>;
        <title>{service.name} - Zion Tech Group</title>;
        <meta name="description" content={service.description} />;
        <link rel="canonical" href="https://ziontechgroup.com / ai - video - editing" />;
      </Head>;
      <div className="min - h-screen pt - 24 pb - 20 px - 4 sm:px - 6 lg:px - 8">;
        <div className="max - w-6xl mx - auto">;
          <div className="text - center mb - 10">;
            <h1 className="text - 5xl md:text - 7xl font - bold bg - gradient - to - r from - yellow - 400 via - orange - 400 to - red - 400 bg - clip - text text - transparent flex items - center justify - center gap - 3 w - 10 h - 10"><Film />{service.name}</h1>;
            <p className="mt - 4 text - xl text - slate - 300 max - w-3xl mx - auto">{service.tagline}</p>;
          </div>;
          <div className="grid grid - cols - 1 lg:grid - cols - 3 gap - 6 mb - 12">;
            <div className="lg:col - span - 2 bg - black / 30 rounded - 2xl border border - amber - 500 / 30 p - 6">;
              <h2 className="text - 2xl font - semibold mb - 4">Editing capabilities</h2>;
              <p className="text - slate - 300 mb - 6">{service.description}</p>;
              <ul className="grid grid - cols - 1 md:grid - cols - 2 gap - 3">;
                {service.features.slice (0, 12).map ((feat, i) => (
                  <li key={i} className="flex items - start space - x-3 text - slate - 200 w - 5 h - 5 text - amber - 400 mt - 0.5"><Check /><span>{feat}</span></li>))}
              </ul>;
            </div>;
            <div className="bg - black / 30 rounded - 2xl border border - amber - 500 / 30 p - 6 h - fit">;
              <div className="flex items - end justify - between mb - 3">;
                <div>;
                  <div className="text - 3xl font - bold text - white text - slate - 400 text - base">{service.price}<span >{service.period}</span></div>;
                  <div className="text - slate - 400">{service.trial_days}-day free trial • Setup: {service.setup_time}</div>;
                </div>;
                <div className="flex items - center text - yellow - 400 w - 4 h - 4 mr - 1"><Star />{service.rating.to_fixed (1)}</div>;
              </div>;
              <a href="/contact" className="w - full px - 6 py - 3 bg - gradient - to - r from - cyan - 600 to - blue - 700 hover:from - cyan - 700 hover:to - blue - 800 text - white font - semibold rounded - lg transition - all duration - 200 w - 5 h - 5 ml - 2">Create Your First Cut < ArrowRight /></a>;
              <div className="mt - 6 space - y-3 text - sm text - slate - 300">;
                <div className="flex items - center space - x-2 w - 4 h - 4 text - amber - 400"><Phone /><span>{service.contact_info.mobile}</span></div>;
                <div className="flex items - center space - x-2 w - 4 h - 4 text - purple - 400"><Mail /><span>{service.contact_info.email}</span></div>;
                <div className="flex items - center space - x-2 w - 4 h - 4 text - green - 400 text - xs"><MapPin /><span >{service.contact_info.address}</span></div>;
              </div>;
            </div>;
          </div>;
        </div>;
      </div>;
    </Layout>);
}


<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
=======
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
