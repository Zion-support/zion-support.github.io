<<<<<<< HEAD:pages/managed-postgres-ha.tsx
<<<<<<< HEAD
<<<<<<< HEAD

export default function ManagedPostgresHAPage() {
  const service = enhancedRealMicroSaasServices.find(s => s.link.endsWith('/managed-postgres-ha'))
  if (!service) return null,

:pages_backup/managed-postgres-ha.tsx
export default function ManagedPostgresHAPage() {
  const service = enhancedRealMicroSaasServices.find(s => s.link.endsWith('/managed-postgres-ha'))
  if (!service) return null,
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
import React from 'react',;
import Head from 'next/head',;
import { Phone, Mail, MapPin, Check, ArrowRight, Database, Star } from 'lucide-react',;
import Layout from '../components/layout/Layout',;
=======

'
import React from 'react',;'
import Head from 'next/head',;'
import { Phone, Mail, MapPin, Check, ArrowRight, Database, Star } from 'lucide-react',;'
import Layout from '../components/layout/Layout',;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/managed-postgres-ha.tsx
import { enhancedRealMicroSaasServices } from '../data/enhanced-real-micro-saas-services',;
export default function ManagedPostgresHAPage() {
  const service = enhancedRealMicroSaasServices.find(s => s.link.endsWith('/managed-postgres-ha'))
  if (!service) return null,
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
import React from 'react'
import Head from 'next/head'
import { Phone, Mail, MapPin, Check, ArrowRight, Database, Star } from 'lucide-react',
import Layout from '../components/layout/Layout'
import { enhancedRealMicroSaasServices } from '../data/enhanced-real-micro-saas-services'
import React from 'react',;
import Head from 'next/head',;
import { Phone, Mail, MapPin, Check, ArrowRight, Database, Star } from 'lucide-react',;
import Layout from '../components/layout/Layout',;
import { enhancedRealMicroSaasServices } from '../data/enhanced-real-micro-saas-services',;
export default function ManagedPostgresHAPage() {
  const service = enhancedRealMicroSaasServices.find(s => s.link.endsWith('/managed-postgres-ha'))
  if (!service) return null,
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

=======
export default function ManagedPostgresHAPage() {
  const service = enhancedRealMicroSaasServices.find(s => s.link.endsWith('/managed-postgres-ha'))
  if (!service) return null,
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
export default function ManagedPostgresHAPage() {
  const service = enhancedRealMicroSaasServices.find(s => s.link.endsWith('/managed-postgres-ha'))
  if (!service) return null,
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/managed-postgres-ha.tsx
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import {
  Phone,
  Mail,
  MapPin,
  Check,
  ArrowRight,
  Database,
  Star,;
} from 'lucide-react';
import Layout from '../components/layout/Layout';

import { enhancedRealMicroSaasServices } from '../data/enhanced-real-micro-saas-services';

export default function ManagedPostgresHAPage() {
  const service = enhancedRealMicroSaasServices.find(s =>
    s.link.endsWith('/managed-postgres-ha')
  );
  if (!service) return null;

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  return (
    <Layout>
      <Head>
=======
export default function ManagedPostgresHAPage() { return null; }
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/managed-postgres-ha.tsx
        <title>{service.name} - Zion Tech Group</title>
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        <link rel="canonical" href="https://ziontechgroup.com/managed-postgres-ha" />
      </Head>"
      <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">"
        <div className="max-w-6xl mx-auto">"
          <div className="text-center mb-10">"
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent flex items-center justify-center gap-3 w-10 h-10"><Database />{service.name}</h1>"
            <p className="mt-4 text-xl text-slate-300 max-w-3xl mx-auto">{service.tagline}</p>
          </div>"
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">"
            <div className="lg:col-span-2 bg-black/30 rounded-2xl border border-emerald-500/30 p-6">"
              <h2 className="text-2xl font-semibold mb-4">What we manage</h2>"
              <p className="text-slate-300 mb-6">{service.description}</p>"
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {service.features.slice(0, 12).map((feat, i) => ("
                  <li key={i} className="flex items-start space-x-3 text-slate-200 w-5 h-5 text-emerald-400 mt-0.5"><Check /><span>{feat}</span></li>

:pages_backup/managed-postgres-ha.tsx

:pages_backup/managed-postgres-ha.tsx
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              </ul>
            </div>"
            <div className="bg-black/30 rounded-2xl border border-emerald-500/30 p-6 h-fit">"
              <div className="flex items-end justify-between mb-3">
                <div>"
                  <div className="text-3xl font-bold text-white text-slate-400 text-base">{service.price}<span >{service.period}</span></div>"
                  <div className="text-slate-400">{service.trialDays}-day free trial • Setup: {service.setupTime}</div>
                </div>"
                <div className="flex items-center text-yellow-400 w-4 h-4 mr-1"><Star />{service.rating.toFixed(1)}</div>
              </div>

:pages_backup/managed-postgres-ha.tsx
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

"
              <a href="/contact" className="w-full px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-700 hover:to-blue-800 text-white font-semibold rounded-lg transition-all duration-200 w-5 h-5 ml-2">Request Assessment<ArrowRight /></Link>"
              <div className="mt-6 space-y-3 text-sm text-slate-300">'"
                <div className="flex items-center space-x-2 w-4 h-4 text-cyan-400 hover:text-white"><Phone /><a href={`tel:${service.contactInfo.mobile.replace(/[^+\\d]/g, '')}`} >{service.contactInfo.mobile}</Link></div>"`
                <div className="flex items-center space-x-2 w-4 h-4 text-purple-400 hover:text-white"><Mail /><a href={`mailto:${service.contactInfo.email}`} >{service.contactInfo.email}</Link></div>"`
                <div className="flex items-center space-x-2 w-4 h-4 text-green-400 text-xs hover:text-white"><MapPin /><a href={`https://maps.google.com/?q=${encodeURIComponent(service.contactInfo.address)}`} target="_blank" rel="noopener noreferrer" >{service.contactInfo.address}</Link></div>

:pages_backup/managed-postgres-ha.tsx
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
<meta name='description' content={service.description} />
        <link
          rel='canonical'
          href='https://ziontechgroup.com/managed-postgres-ha'
        />
      </Head>
      <div className='min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-6xl mx-auto'>
          <div className='text-center mb-10'>
            <h1 className='text-5xl md:text-7xl font-bold bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent flex items-center justify-center gap-3 w-10 h-10'>
              <Database />
              {service.name}
            </h1>
            <p className='mt-4 text-xl text-slate-300 max-w-3xl mx-auto'>
              {service.tagline}
            </p>
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12'>
            <div className='lg:col-span-2 bg-black/30 rounded-2xl border border-emerald-500/30 p-6'>
              <h2 className='text-2xl font-semibold mb-4'>What we manage</h2>
              <p className='text-slate-300 mb-6'>{service.description}</p>
              <ul className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                {service.features.slice(0, 12).map((feat, i) => (
                  <li
                    key={i}
                    className='flex items-start space-x-3 text-slate-200 w-5 h-5 text-emerald-400 mt-0.5'
                  >
                    <Check />
                    <span>{feat}</span>
                  </li>
                ))}
origin/cursor/automate-test-improve-and-merge-code-2533
              </ul>
            </div>
            <div className='bg-black/30 rounded-2xl border border-emerald-500/30 p-6 h-fit'>
              <div className='flex items-end justify-between mb-3'>
                <div>
                  <div className='text-3xl font-bold text-white text-slate-400 text-base'>
                    {service.price}
                    <span>{service.period}</span>
                  </div>
                  <div className='text-slate-400'>
                    {service.trialDays}-day free trial • Setup:{' '}
                    {service.setupTime}
                  </div>
                </div>
                <div className='flex items-center text-yellow-400 w-4 h-4 mr-1'>
                  <Star />
                  {service.rating.toFixed(1)}
                </div>
              </div>
              <a
                href='/contact'
                className='w-full px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-700 hover:to-blue-800 text-white font-semibold rounded-lg transition-all duration-200 w-5 h-5 ml-2'
              >
                Request Assessment
                <ArrowRight />
              </a>
              <div className='mt-6 space-y-3 text-sm text-slate-300'>
                <div className='flex items-center space-x-2 w-4 h-4 text-cyan-400 hover:text-white'>
                  <Phone />
                  <a
                    href={`tel:${service.contactInfo.mobile.replace(/[^+\\d]/g, '')}`}
                  >
                    {service.contactInfo.mobile}
                  </a>
                </div>
                <div className='flex items-center space-x-2 w-4 h-4 text-purple-400 hover:text-white'>
                  <Mail />
                  <a href={`mailto:${service.contactInfo.email}`}>
                    {service.contactInfo.email}
                  </a>
                </div>
                <div className='flex items-center space-x-2 w-4 h-4 text-green-400 text-xs hover:text-white'>
                  <MapPin />
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(service.contactInfo.address)}`}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    {service.contactInfo.address}
                  </a>
                </div>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
<<<<<<< HEAD
  )
<<<<<<< HEAD:pages_backup/managed-postgres-ha.tsx
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

}

  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}

:pages_backup/managed-postgres-ha.tsx
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
;
;
:pages_backup/managed-postgres-ha.tsx
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

=======
);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
);
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/managed-postgres-ha.tsx
=======

'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/managed-postgres-ha.tsx
=======
);
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
