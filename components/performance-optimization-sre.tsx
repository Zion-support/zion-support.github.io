<<<<<<< HEAD
import React from 'react',
=======
import React from 'react';
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
import Head from 'next/head';
import { Phone, Mail, MapPin, Check, ArrowRight, Activity  } from 'lucide-react';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground',
import Button from '../components/ui/Button';
import { extraServices } from '../data/extra-services';
<<<<<<< HEAD
<<<<<<< HEAD
=======
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
export default function PerformanceOptimizationSREPage() {
=======
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export default function PerformanceOptimizationSREPage() {

  const service = extraServices.find(s =>
<<<<<<< HEAD
    s.link.endsWith('/performance-optimization-sre')
<<<<<<< HEAD
  );  if (!service) return null;export default function PerformanceOptimizationSREPage() {
=======
    s.link.endsWith('/performance-optimization-sre');
  );  if (!service) return null;export default function PerformanceOptimizationSREPage() {;
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
  const service = extraServices.find(s => s.link.endsWith('/performance-optimization-sre'));
=======
  );
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
  if (!service) return null;

  return (
    <UltraAdvancedFuturisticBackground>
      <Head>
        <title>{service.name} - Zion Tech Group</title>
        <meta name='description' content={service.description} />
        <link
          rel='canonical'
          href='https://ziontechgroup.com/performance-optimization-sre'
        />
      <div className='min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-6xl mx-auto'>
          <div className='text-center mb-10'>
            <h1 className='text-5xl md:text-7xl font-bold bg-gradient-to-r from-fuchsia-400 via-pink-400 to-rose-400 bg-clip-text text-transparent flex items-center justify-center gap-3'>
              <Activity className='w-10 h-10' />
              {service.name}
            </h1>
            <p className='mt-4 text-xl text-slate-300 max-w-3xl mx-auto'>
              {service.tagline}
            </p>
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12'>
            <div className='lg:col-span-2 bg-black/30 rounded-2xl border border-fuchsia-500/30 p-6'>
              <h2 className='text-2xl font-semibold mb-4'>Engagement Scope</h2>
              <p className='text-slate-300 mb-6'>{service.description}</p>
              <ul className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                {service.features.slice(0, 12).map((feat, i) => (
                  <li
                    key={i}
                    className='flex items-start space-x-3 text-slate-200'
                  >
                    <Check className='w-5 h-5 text-fuchsia-400 mt-0.5' />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className='bg-black/30 rounded-2xl border border-fuchsia-500/30 p-6 h-fit'>
              <div className='flex items-end justify-between mb-3'>
                <div>
                  <div className='text-3xl font-bold text-white'>
                    {service.price}
                    <span className='text-slate-400 text-base'>
                      {service.period}
                    </span>
                  </div>
                  <div className='text-slate-400'>
                    {service.trialDays
                      ? `${service.trialDays}-day free trial • `
                      : ''}
                    Setup: {service.setupTime}
                  </div>
                </div>
              </div>
              <Button
                href='/contact'
                variant='quantum'
                size='lg'
                className='w-full'
              >
                Request Proposal
                <ArrowRight className='w-5 h-5 ml-2' />
              </Button>
              <div className='mt-6 space-y-3 text-sm text-slate-300'>
                <div className='flex items-center space-x-2'>
                  <Phone className='w-4 h-4 text-cyan-400' />
                  <span>{service.contactInfo.mobile}</span>
                </div>
                <div className='flex items-center space-x-2'>
                  <Mail className='w-4 h-4 text-purple-400' />
                  <span>{service.contactInfo.email}</span>
                </div>
                <div className='flex items-center space-x-2'>
                  <MapPin className='w-4 h-4 text-green-400' />
                  <span className='text-xs'>{service.contactInfo.address}</span>
<<<<<<< HEAD
                </div>              </div>              <Button href="/contact" variant="quantum" size="lg" className="w-full">Request Proposal<ArrowRight className="w-5 h-5 ml-2" /></Button>
              <div className="mt-6 space-y-3 text-sm text-slate-300">
                <div className="flex items-center space-x-2"><Phone className="w-4 h-4 text-cyan-400" /><span>{service.contactInfo.mobile}</span></div>
                <div className="flex items-center space-x-2"><Mail className="w-4 h-4 text-purple-400" /><span>{service.contactInfo.email}</span></div>
                <div className="flex items-center space-x-2"><MapPin className="w-4 h-4 text-green-400" /><span className="text-xs">{service.contactInfo.address}</span></div>
=======
                </div>
              </div>
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
            </div>
          </div>
        </div>
      </div>
    </UltraAdvancedFuturisticBackground>
  );
<<<<<<< HEAD
}
=======
<<<<<<< HEAD
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
}

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
<<<<<<< HEAD
;
}
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
