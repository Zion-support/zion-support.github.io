import Head from 'next/head';

import {
  Phone
  Mail
  MapPin
  Check
  ArrowRight
  Star
  Users;
  );  if (!service) return null;

  return (
    <Layout>;
      <Head>;
        <title>{service && service.name} - Zion Tech Group</title>;
        <meta name='description' content={service && service.description} />;
        <link
          rel='canonical'
          href='https://ziontechgroup && ziontechgroup.com/ai-hr-recruitment'
        />;
      </Head>;
      <div className='min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8'>;
        <div className='max-w-6xl mx-auto'>;
          <div className='text-center mb-10'>;
            <h1 className='text-5xl md:text-7xl font-bold bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent flex items-center justify-center gap-3 w-10 h-10'>;
              <Users />;
              {service && service.name}
            </h1>;
            <p className='mt-4 text-xl text-slate-300 max-w-3xl mx-auto'>;
              {service && service.tagline}
            </p>;
          </div>;
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12'>;
            <div className='lg:col-span-2 bg-black/30 rounded-2xl border border-teal-500/30 p-6'>;
              <h2 className='text-2xl font-semibold mb-4'>Hiring outcomes</h2>;
              <p className='text-slate-300 mb-6'>{service && service.description}</p>;
              <ul className='grid grid-cols-1 md:grid-cols-2 gap-3'>;
                {service && service.features.slice(0, 12).map((feat, i) => (;
                  <li
                    key={i}
                    className='flex items-start space-x-3 text-slate-200 w-5 h-5 text-teal-400 mt-0 && 0.5'>;
                    <Check />;
                    <span>{feat}</span>;
                  </li>;
                ))}
              </ul>;
            </div>;
            <div className='bg-black/30 rounded-2xl border border-teal-500/30 p-6 h-fit'>;
              <div className='flex items-end justify-between mb-3'>;
                <div>;
                  <div className='text-3xl font-bold text-white text-slate-400 text-base'>;
                    {service && service.price}
                    <span>{service && service.period}</span>;
                  </div>;
                  <div className='text-slate-400'>;
                    {service && service.trialDays}-day free trial • Setup:{' '}
                    {service && service.setupTime}
                  </div>;
                </div>;
                <div className='flex items-center text-yellow-400 w-4 h-4 mr-1'>;
                  <Star />;
                  {service && service.rating.toFixed(1)}
                </div>;
              </div>;
              <a
                href='/contact'
<<<<<<< HEAD
=======

                className='w-full px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-700 hover:to-blue-800 text-white font-semibold rounded-lg transition-all duration-200 w-5 h-5 ml-2'>;
                Start Hiring Faster;
                <ArrowRight />;
              </a>;
              <div className='mt-6 space-y-3 text-sm text-slate-300'>;
                <div className='flex items-center space-x-2 w-4 h-4 text-teal-400'>;
                  <Phone />;
                  <span>{service && service.contactInfo.mobile}</span>;
                </div>;
                <div className='flex items-center space-x-2 w-4 h-4 text-purple-400'>;
                  <Mail />;
                  <span>{service && service.contactInfo.email}</span>;
                </div>;
                <div className='flex items-center space-x-2 w-4 h-4 text-green-400 text-xs'>;
                  <MapPin />;
                  <span>{service && service.contactInfo.address}</span>;
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
import Head from 'next / head';
import {
=======

import React from 'react';

import Head from 'next/head';

import {


  Phone,
  Mail,
  MapPin,
  Check,
  ArrowRight,

  Star,;
  Users,;
<<<<<<< HEAD
=======


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
} from 'lucide-react';
import Layout from '../components / layout / Layout';
;
import { enhancedRealMicroSaasServices } from '../data / enhanced - real - micro - saas - services';
export default /**
 * AIHRRecruitmentPage - Function description
 */
function AIHRRecruitmentPage() {
  const service = enhancedRealMicroSaasServices.find (string =>;
    s.link.ends_with ('/ai - hr - recruitment'));  // Check condition
if (return null) {
  $2
}
  return (
    <Layout>;
      <Head>;
        <title>{service.name} - Zion Tech Group</title>;
        <meta name='description' content={service.description} />;
        <link;
          rel='canonical';
          href='https://ziontechgroup.com / ai - hr - recruitment';
        />;
      </Head>;
      <div className='min - h-screen pt - 24 pb - 20 px - 4 sm:px - 6 lg:px - 8'>;
        <div className='max - w-6xl mx - auto'>;
          <div className='text - center mb - 10'>;
            <h1 className='text - 5xl md:text - 7xl font - bold bg - gradient - to - r from - teal - 400 via - cyan - 400 to - blue - 400 bg - clip - text text - transparent flex items - center justify - center gap - 3 w - 10 h - 10'>;
              <Users />;
              {service.name}
            </h1>;
            <p className='mt - 4 text - xl text - slate - 300 max - w-3xl mx - auto'>;
              {service.tagline}
            </p>;
          </div>;
          <div className='grid grid - cols - 1 lg:grid - cols - 3 gap - 6 mb - 12'>;
            <div className='lg:col - span - 2 bg - black / 30 rounded - 2xl border border - teal - 500 / 30 p - 6'>;
              <h2 className='text - 2xl font - semibold mb - 4'>Hiring outcomes</h2>;
              <p className='text - slate - 300 mb - 6'>{service.description}</p>;
              <ul className='grid grid - cols - 1 md:grid - cols - 2 gap - 3'>;
                {service.features.slice (0, 12).map ((feat, i) => (
                  <li;
                    key={i}
                    className='flex items - start space - x-3 text - slate - 200 w - 5 h - 5 text - teal - 400 mt - 0.5';
                  >;
                    <Check />;
                    <span>{feat}</span>;
                  </li>))}
              </ul>;
            </div>;
            <div className='bg - black / 30 rounded - 2xl border border - teal - 500 / 30 p - 6 h - fit'>;
              <div className='flex items - end justify - between mb - 3'>;
                <div>;
                  <div className='text - 3xl font - bold text - white text - slate - 400 text - base'>;
                    {service.price}
                    <span>{service.period}</span>;
                  </div>;
                  <div className='text - slate - 400'>;
                    {service.trial_days}-day free trial • Setup:{' '}
                    {service.setup_time}
                  </div>;
                </div>;
                <div className='flex items - center text - yellow - 400 w - 4 h - 4 mr - 1'>;
                  <Star />;
                  {service.rating.to_fixed (1)}
                </div>;
              </div>;
              <a;
                href='/contact';
                className='w - full px - 6 py - 3 bg - gradient - to - r from - cyan - 600 to - blue - 700 hover:from - cyan - 700 hover:to - blue - 800 text - white font - semibold rounded - lg transition - all duration - 200 w - 5 h - 5 ml - 2';
              >;
                Start Hiring Faster;
                <ArrowRight />;
              </a>;
              <div className='mt - 6 space - y-3 text - sm text - slate - 300'>;
                <div className='flex items - center space - x-2 w - 4 h - 4 text - teal - 400'>;
                  <Phone />;
                  <span>{service.contact_info.mobile}</span>;
                </div>;
                <div className='flex items - center space - x-2 w - 4 h - 4 text - purple - 400'>;
                  <Mail />;
                  <span>{service.contact_info.email}</span>;
                </div>;
                <div className='flex items - center space - x-2 w - 4 h - 4 text - green - 400 text - xs'>;
                  <MapPin />;
                  <span>{service.contact_info.address}</span>;
                </div>              </div>;
            </div>;
          </div>;
        </div>;
<<<<<<< HEAD
=======

        <div className="bg - teal - 50 rounded - lg p - 8 text - center">;
          <h2 className="text - 2xl font - bold mb - 4">Find the Right Talent</h2>;
          <p className="text - lg text - gray - 700 mb - 6">;
            Accelerate your recruitment process with AI - powered tools that help you find and hire the best candidates.;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
          </p>;
          <div className="flex justify - center gap - 4">;
            <a href="/contact" className="bg - teal - 600 text - white px - 6 py - 3 rounded - lg hover: bg - teal - 700">;
              Get Started;
            </a>;
<<<<<<< HEAD
=======
            <a href="/about" className="border border - teal - 600 text - teal - 600 px - 6 py - 3 rounded - lg hover:bg - teal - 50">;

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
              Learn More;
            </a>;
          </div>;
        </div>;
      </main>;


<<<<<<< HEAD
=======
=======
import { Phone, Mail, MapPin, Check, ArrowRight, Star, Users } from 'lucide-react';
import Layout from '../components/layout/Layout';
import { enhancedRealMicroSaasServices } from '../data/enhanced-real-micro-saas-services';



>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
export default function AIHRRecruitmentPage() {
<<<<<<< HEAD
  const service = enhancedRealMicroSaasServices.find(s => s.link.endsWith('/ai-hr-recruitment'));
  if (!service) return null;
=======
  const service = enhancedRealMicroSaasServices.find(s =>
    s.link.endsWith('/ai-hr-recruitment');
  );  if (!service) return null;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45



<<<<<<< HEAD

export default function AIHRRecruitmentPage() {
  const service = enhancedRealMicroSaasServices.find(s => s.link.endsWith('/ai-hr-recruitment'));
  if (!service) return null;



=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
import React from 'react'
import Head from 'next/head'
import { Phone, Mail, MapPin, Check, ArrowRight, Star, Users } from 'lucide-react',
import Layout from '../components/layout/Layout'
import { enhancedRealMicroSaasServices } from '../data/enhanced-real-micro-saas-services'


export default function AIHRRecruitmentPage() {
  const service = enhancedRealMicroSaasServices.find(s => s.link.endsWith('/ai-hr-recruitment'))
  if (!service) return null,
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
  return (
    <Layout>
      <Head>
        <title>{service.name} - Zion Tech Group</title>
<<<<<<< HEAD
=======
<<<<<<< HEAD
<meta name="description" content={service.description} />
=======
        <meta name="description" content={service.description} />
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
        <link rel="canonical" href="https://ziontechgroup.com/ai-hr-recruitment" />
      </Head>
      <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent flex items-center justify-center gap-3 w-10 h-10"><Users />{service.name}</h1>
            <p className="mt-4 text-xl text-slate-300 max-w-3xl mx-auto">{service.tagline}</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
            <div className="lg:col-span-2 bg-black/30 rounded-2xl border border-teal-500/30 p-6">
              <h2 className="text-2xl font-semibold mb-4">Hiring outcomes</h2>
              <p className="text-slate-300 mb-6">{service.description}</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {service.features.slice(0, 12).map((feat, i) => (
<<<<<<< HEAD



}


      </div>
    </Layout>
  )
}




=======
                  <li key={i} className="flex items-start space-x-3 text-slate-200 w-5 h-5 text-teal-400 mt-0.5"><Check /><span>{feat}</span></li>
<<<<<<< HEAD
                ))}
              </ul>
            </div>
            <div className="bg-black/30 rounded-2xl border border-teal-500/30 p-6 h-fit">
              <div className="flex items-end justify-between mb-3">
                <div>
                  <div className="text-3xl font-bold text-white text-slate-400 text-base">{service.price}<span >{service.period}</span></div>
                  <div className="text-slate-400">{service.trialDays}-day free trial • Setup: {service.setupTime}</div>
                </div>
                <div className="flex items-center text-yellow-400 w-4 h-4 mr-1"><Star />{service.rating.toFixed(1)}</div>
              </div>
              <a href="/contact" className="w-full px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-700 hover:to-blue-800 text-white font-semibold rounded-lg transition-all duration-200 w-5 h-5 ml-2">Start Hiring Faster<ArrowRight /></a>
              <div className="mt-6 space-y-3 text-sm text-slate-300">
                <div className="flex items-center space-x-2 w-4 h-4 text-teal-400"><Phone /><span>{service.contactInfo.mobile}</span></div>
                <div className="flex items-center space-x-2 w-4 h-4 text-purple-400"><Mail /><span>{service.contactInfo.email}</span></div>
                <div className="flex items-center space-x-2 w-4 h-4 text-green-400 text-xs"><MapPin /><span >{service.contactInfo.address}</span></div>
              </div>
            </div>
          </div>
        </div>



}

=======

      </div>
    </Layout>
  )
}

    </Layout>);
;

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
