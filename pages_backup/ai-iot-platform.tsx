<<<<<<< HEAD
import React from 'react',
import React from 'react';
import Head from 'next/head';

:pages_backup/ai-iot-platform.tsx
import Head from 'next/head';
import { Phone, Mail, MapPin, Check, ArrowRight, Star, Cpu  } from 'lucide-react';
import Layout from '../components/layout/Layout';
import { enhancedRealMicroSaasServices } from '../data/enhanced-real-micro-saas-services';
export default function AIIoTPlatformPage() {
  const service = null;
<<<<<<< HEAD:pages/ai-iot-platform.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import {
  Phone
  Mail
  MapPin
  Check
  ArrowRight
  Star
=======
import {};
  Phone;
  Mail;
  MapPin;
  Check;
  ArrowRight;
  Star;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/ai-iot-platform.tsx
  Cpu;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  );  if (!service) return null;

  return (
    <Layout>;
      <Head>;
        <title>{service && service.name} - Zion Tech Group</title>;'
        <meta name='description' content={service && service.description} />;
        <link'
          rel='canonical''
          href='https://ziontechgroup && ziontechgroup.com/ai-iot-platform'
        />;
      </Head>;'
      <div className='min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8'>;'
        <div className='max-w-6xl mx-auto'>;'
          <div className='text-center mb-10'>;'
            <h1 className='text-5xl md:text-7xl font-bold bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent flex items-center justify-center gap-3 w-10 h-10'>;
              <Cpu />;
              {service && service.name}
            </h1>;'
            <p className='mt-4 text-xl text-slate-300 max-w-3xl mx-auto'>;
              {service && service.tagline}
            </p>;
          </div>;'
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12'>;'
            <div className='lg:col-span-2 bg-black/30 rounded-2xl border border-violet-500/30 p-6'>;'
              <h2 className='text-2xl font-semibold mb-4'>IoT intelligence</h2>;'
              <p className='text-slate-300 mb-6'>{service && service.description}</p>;'
              <ul className='grid grid-cols-1 md:grid-cols-2 gap-3'>;
                {service && service.features.slice(0, 12).map((feat, i) => (;
                  <li;
                    key={i}'
                    className='flex items-start space-x-3 text-slate-200 w-5 h-5 text-violet-400 mt-0 && 0.5'>;
                    <Check />;
                    <span>{feat}</span>;
                  </li>;
                ))}
              </ul>;
            </div>;'
            <div className='bg-black/30 rounded-2xl border border-violet-500/30 p-6 h-fit'>;'
              <div className='flex items-end justify-between mb-3'>;
                <div>;'
                  <div className='text-3xl font-bold text-white text-slate-400 text-base'>;
                    {service && service.price}
                    <span>{service && service.period}</span>;
                  </div>;'
                  <div className='text-slate-400'>;'
                    {service && service.trialDays}-day free trial • Setup:{' '}
                    {service && service.setupTime}
                  </div>;
                </div>;'
                <div className='flex items-center text-yellow-400 w-4 h-4 mr-1'>;
                  <Star />;
                  {service && service.rating.toFixed(1)}
                </div>;
              </div>;
              <a'
                href='/contact'
:pages_backup/ai-iot-platform.tsx
<<<<<<< HEAD
import Head from 'next / head';
import {

=======
'
import Head from 'next / head';
import {}
';
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/ai-iot-platform.tsx
import React from 'react';
'
import Head from 'next/head';

:pages_backup/ai-iot-platform.tsx
import {

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  Phone,
  Mail,
  MapPin,
  Check,
  ArrowRight,
:pages_backup/ai-iot-platform.tsx

=======
  Star,;
  Cpu,;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
} from 'lucide-react';
=======
;
  Star,;
  Cpu,;
'
} from 'lucide-react';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/ai-iot-platform.tsx
import Layout from '../components / layout / Layout';
;'
import { enhancedRealMicroSaasServices } from '../data / enhanced - real - micro - saas - services';
export default /**;
 * AIIoTPlatformPage - Function description;
 */
function AIIoTPlatformPage() {}
  const service = enhancedRealMicroSaasServices.find (string =>;'
    s.link.ends_with ('/ai - iot - platform'));  // Check condition;
if (return null) {}
  $2;
}
  return (
    <Layout>;
      <Head>;
        <title>{service.name} - Zion Tech Group</title>;'
        <meta name='description' content={service.description} />;
        <link;'
          rel='canonical';'
          href='https://ziontechgroup.com / ai - iot - platform';
        />;
      </Head>;'
      <div className='min - h-screen pt - 24 pb - 20 px - 4 sm:px - 6 lg:px - 8'>;'
        <div className='max - w-6xl mx - auto'>;'
          <div className='text - center mb - 10'>;'
            <h1 className='text - 5xl md:text - 7xl font - bold bg - gradient - to - r from - violet - 400 via - purple - 400 to - fuchsia - 400 bg - clip - text text - transparent flex items - center justify - center gap - 3 w - 10 h - 10'>;
              <Cpu />;
              {service.name}
            </h1>;'
            <p className='mt - 4 text - xl text - slate - 300 max - w-3xl mx - auto'>;
              {service.tagline}
            </p>;
          </div>;'
          <div className='grid grid - cols - 1 lg:grid - cols - 3 gap - 6 mb - 12'>;'
            <div className='lg:col - span - 2 bg - black / 30 rounded - 2xl border border - violet - 500 / 30 p - 6'>;'
              <h2 className='text - 2xl font - semibold mb - 4'>IoT intelligence</h2>;'
              <p className='text - slate - 300 mb - 6'>{service.description}</p>;'
              <ul className='grid grid - cols - 1 md:grid - cols - 2 gap - 3'>;
                {service.features.slice (0, 12).map ((feat, i) => (
                  <li;
                    key={i}'
                    className='flex items - start space - x-3 text - slate - 200 w - 5 h - 5 text - violet - 400 mt - 0.5';
                  >;
                    <Check />;
                    <span>{feat}</span>;
                  </li>))}
              </ul>;
            </div>;'
            <div className='bg - black / 30 rounded - 2xl border border - violet - 500 / 30 p - 6 h - fit'>;'
              <div className='flex items - end justify - between mb - 3'>;
                <div>;'
                  <div className='text - 3xl font - bold text - white text - slate - 400 text - base'>;
                    {service.price}
                    <span>{service.period}</span>;
                  </div>;'
                  <div className='text - slate - 400'>;'
                    {service.trial_days}-day free trial • Setup:{' '}
                    {service.setup_time}
                  </div>;
                </div>;'
                <div className='flex items - center text - yellow - 400 w - 4 h - 4 mr - 1'>;
                  <Star />;
                  {service.rating.to_fixed (1)}
                </div>;
              </div>;
              <a;'
                href='/contact';'
                className='w - full px - 6 py - 3 bg - gradient - to - r from - cyan - 600 to - blue - 700 hover:from - cyan - 700 hover:to - blue - 800 text - white font - semibold rounded - lg transition - all duration - 200 w - 5 h - 5 ml - 2';
              >;
                Modernize IoT Ops;
                <ArrowRight />;
              </a>;'
              <div className='mt - 6 space - y-3 text - sm text - slate - 300'>;'
                <div className='flex items - center space - x-2 w - 4 h - 4 text - violet - 400'>;
                  <Phone />;
                  <span>{service.contact_info.mobile}</span>;
                </div>;'
                <div className='flex items - center space - x-2 w - 4 h - 4 text - purple - 400'>;
                  <Mail />;
                  <span>{service.contact_info.email}</span>;
                </div>;'
                <div className='flex items - center space - x-2 w - 4 h - 4 text - green - 400 text - xs'>;
                  <MapPin />;
                  <span>{service.contact_info.address}</span>;
                </div>              </div>;
            </div>;
          </div>;
        </div>;
:pages_backup/ai-iot-platform.tsx
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/ai-iot-platform.tsx
          </p>;
          <div className="flex justify - center gap - 4">;"
            <a href="/contact" className="bg - violet - 600 text - white px - 6 py - 3 rounded - lg hover: bg - violet - 700">;
              Get Started;
            </a>;
:pages_backup/ai-iot-platform.tsx
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/ai-iot-platform.tsx
              Learn More;
            </a>;
          </div>;
        </div>;
      </main>;

:pages_backup/ai-iot-platform.tsx
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
export default function AIIoTPlatformPage() {
const service = enhancedRealMicroSaasServices.find(s => s.link.endsWith('/ai-iot-platform'));
  if (!service) return null;

export default function AIIoTPlatformPage() {
  const service = enhancedRealMicroSaasServices.find(s => s.link.endsWith('/ai-iot-platform'));
  if (!service) return null;

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import React from 'react'
import Head from 'next/head'
import { Phone, Mail, MapPin, Check, ArrowRight, Star, Cpu } from 'lucide-react',
import Layout from '../components/layout/Layout'
=======

export default function AIIoTPlatformPage() {}
'
import React from 'react''
import Head from 'next/head''
import { Phone, Mail, MapPin, Check, ArrowRight, Star, Cpu } from 'lucide-react','
import Layout from '../components/layout/Layout''
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/ai-iot-platform.tsx
import { enhancedRealMicroSaasServices } from '../data/enhanced-real-micro-saas-services'
export default function AIIoTPlatformPage() {
  const service = enhancedRealMicroSaasServices.find(s => s.link.endsWith('/ai-iot-platform'))
  if (!service) return null,
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

:pages_backup/ai-iot-platform.tsx
export default function AIIoTPlatformPage() {
  const service = enhancedRealMicroSaasServices.find(s => s.link.endsWith('/ai-iot-platform'))
  if (!service) return null,
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    s.link.endsWith('/ai-iot-platform')
  );
  if (!service) return null;

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  return (
    <Layout>
      <Head>
        <title>{service.name} - Zion Tech Group</title>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        <link rel="canonical" href="https://ziontechgroup.com/ai-iot-platform" />
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
<meta name='description' content={service.description} />
        <link
          rel='canonical'
          href='https://ziontechgroup.com/ai-iot-platform'
        />
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      </Head>
      <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent flex items-center justify-center gap-3 w-10 h-10"><Cpu />{service.name}</h1>
=======
export default function AIIoTPlatformPage() { return null; }
        <title>{service.name} - Zion Tech Group</title>

"
        <link rel="canonical" href="https://ziontechgroup.com/ai-iot-platform" />
      </Head>"
      <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">"
        <div className="max-w-6xl mx-auto">"
          <div className="text-center mb-10">"
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent flex items-center justify-center gap-3 w-10 h-10"><Cpu />{service.name}</h1>"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/ai-iot-platform.tsx
            <p className="mt-4 text-xl text-slate-300 max-w-3xl mx-auto">{service.tagline}</p>
          </div>"
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">"
            <div className="lg:col-span-2 bg-black/30 rounded-2xl border border-violet-500/30 p-6">"
              <h2 className="text-2xl font-semibold mb-4">IoT intelligence</h2>"
              <p className="text-slate-300 mb-6">{service.description}</p>"
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {service.features.slice(0, 12).map((feat, i) => (
<<<<<<< HEAD:pages/ai-iot-platform.tsx
<<<<<<< HEAD

}

      </div>
    </Layout>
  )
}

:pages_backup/ai-iot-platform.tsx
                  <li
                    key={i}
                    className='flex items-start space-x-3 text-slate-200 w-5 h-5 text-violet-400 mt-0.5'
                  >
                    <Check />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className='bg-black/30 rounded-2xl border border-violet-500/30 p-6 h-fit'>
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
                Modernize IoT Ops
                <ArrowRight />
              </a>
              <div className='mt-6 space-y-3 text-sm text-slate-300'>
                <div className='flex items-center space-x-2 w-4 h-4 text-violet-400'>
                  <Phone />
                  <span>{service.contactInfo.mobile}</span>
                </div>
                <div className='flex items-center space-x-2 w-4 h-4 text-purple-400'>
                  <Mail />
                  <span>{service.contactInfo.email}</span>
                </div>
                <div className='flex items-center space-x-2 w-4 h-4 text-green-400 text-xs'>
                  <MapPin />
                  <span>{service.contactInfo.address}</span>
                </div>
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
              </div>
            </div>
          </div>
        </div>
}
      </div>
    </Layout>
  )
}

    </Layout>);
;

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
<div className="bg-violet-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Connect Your World</h2>
          <p className="text-lg text-gray-700 mb-6">
            Build smart, connected systems with our AI-powered IoT platform for seamless device management and automation.
          </p>
          <div className="flex justify-center gap-4">
            <a href="/contact" className="bg-violet-600 text-white px-6 py-3 rounded-lg hover: bg-violet-700">
              Get Started
            </a>
            <a href="/about" className="border border-violet-600 text-violet-600 px-6 py-3 rounded-lg hover:bg-violet-50">
              Learn More
            </a>
          </div>
        </div>
      </main>
    </Layout>
  );
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
