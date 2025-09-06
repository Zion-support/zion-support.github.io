import React from 'react';
import Head from 'next/head';
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
import {
  Phone,
  Mail,
  MapPin,
  Check,
  ArrowRight,
  Car,
  Star,;
} from 'lucide-react';
<<<<<<< HEAD
=======
=======
import { Phone, Mail, MapPin, Check, ArrowRight, Car, Star } from 'lucide-react';
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';
import Button from '../components/ui/Button';
import { enhancedRealMicroSaasServices } from '../data/enhanced-real-micro-saas-services';

export default function AutonomousVehicleAIPage() {
<<<<<<< HEAD
  const service = enhancedRealMicroSaasServices.find(s =>
    s.link.endsWith('/autonomous-vehicle-ai-platform')
  );  if (!service) return null;
=======
<<<<<<< HEAD
  const service = enhancedRealMicroSaasServices.find(s =>
    s.link.endsWith('/autonomous-vehicle-ai-platform')
  );
=======
import { Phone, Mail, MapPin, Check, ArrowRight, Car, Star } from 'lucide-react';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';
import Button from '../components/ui/Button';
import { enhancedRealMicroSaasServices } from '../data/enhanced-real-micro-saas-services';
export default function AutonomousVehicleAIPage() {
  const service = enhancedRealMicroSaasServices.find(s => s.link.endsWith('/autonomous-vehicle-ai-platform'));
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  const service = enhancedRealMicroSaasServices.find(s => s.link.endsWith('/autonomous-vehicle-ai-platform'));
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  if (!service) return null;
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

  return (
    <UltraAdvancedFuturisticBackground>
      <Head>
        <title>{service.name} - Zion Tech Group</title>
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        <meta name='description' content={service.description} />
        <link
          rel='canonical'
          href='https://ziontechgroup.com/autonomous-vehicle-ai-platform'
        />
<<<<<<< HEAD
=======
=======
        <meta name="description" content={service.description} />
        <link rel="canonical" href="https://ziontechgroup.com/autonomous-vehicle-ai-platform" />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      </Head>
      <div className='min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-6xl mx-auto'>
          <div className='text-center mb-10'>
            <h1 className='text-5xl md:text-7xl font-bold bg-gradient-to-r from-orange-400 via-red-400 to-rose-400 bg-clip-text text-transparent flex items-center justify-center gap-3'>
              <Car className='w-10 h-10' />
              {service.name}
            </h1>
            <p className='mt-4 text-xl text-slate-300 max-w-3xl mx-auto'>
              {service.tagline}
            </p>
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12'>
            <div className='lg:col-span-2 bg-black/30 rounded-2xl border border-orange-500/30 p-6'>
              <h2 className='text-2xl font-semibold mb-4'>
                Autonomous capabilities
              </h2>
              <p className='text-slate-300 mb-6'>{service.description}</p>
              <ul className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                {service.features.slice(0, 12).map((feat, i) => (
                  <li
                    key={i}
                    className='flex items-start space-x-3 text-slate-200'
                  >
                    <Check className='w-5 h-5 text-orange-400 mt-0.5' />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className='bg-black/30 rounded-2xl border border-orange-500/30 p-6 h-fit'>
              <div className='flex items-end justify-between mb-3'>
                <div>
                  <div className='text-3xl font-bold text-white'>
                    {service.price}
                    <span className='text-slate-400 text-base'>
                      {service.period}
                    </span>
                  </div>
                  <div className='text-slate-400'>
                    {service.trialDays}-day free trial • Setup:{' '}
                    {service.setupTime}
                  </div>
                </div>
                <div className='flex items-center text-yellow-400'>
                  <Star className='w-4 h-4 mr-1' />
                  {service.rating.toFixed(1)}
                </div>
              </div>
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              <Button
                href='/contact'
                variant='quantum'
                size='lg'
                className='w-full'
              >
                Schedule a Pilot
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
                </div>              </div>
=======
                </div>
=======
        <meta name="description" content={service.description} />
        <link rel="canonical" href="https://ziontechgroup.com/autonomous-vehicle-ai-platform" />
      </Head>
      <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-orange-400 via-red-400 to-rose-400 bg-clip-text text-transparent flex items-center justify-center gap-3"><Car className="w-10 h-10" />{service.name}</h1>
            <p className="mt-4 text-xl text-slate-300 max-w-3xl mx-auto">{service.tagline}</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
            <div className="lg:col-span-2 bg-black/30 rounded-2xl border border-orange-500/30 p-6">
              <h2 className="text-2xl font-semibold mb-4">Autonomous capabilities</h2>
              <p className="text-slate-300 mb-6">{service.description}</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {service.features.slice(0, 12).map((feat, i) => (
                  <li key={i} className="flex items-start space-x-3 text-slate-200"><Check className="w-5 h-5 text-orange-400 mt-0.5" /><span>{feat}</span></li>
                ))}
              </ul>
            </div>
            <div className="bg-black/30 rounded-2xl border border-orange-500/30 p-6 h-fit">
              <div className="flex items-end justify-between mb-3">
                <div>
                  <div className="text-3xl font-bold text-white">{service.price}<span className="text-slate-400 text-base">{service.period}</span></div>
                  <div className="text-slate-400">{service.trialDays}-day free trial • Setup: {service.setupTime}</div>
                </div>
                <div className="flex items-center text-yellow-400"><Star className="w-4 h-4 mr-1" />{service.rating.toFixed(1)}</div>
              </div>
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              <Button href="/contact" variant="quantum" size="lg" className="w-full">Schedule a Pilot<ArrowRight className="w-5 h-5 ml-2" /></Button>
              <div className="mt-6 space-y-3 text-sm text-slate-300">
                <div className="flex items-center space-x-2"><Phone className="w-4 h-4 text-cyan-400" /><span>{service.contactInfo.mobile}</span></div>
                <div className="flex items-center space-x-2"><Mail className="w-4 h-4 text-purple-400" /><span>{service.contactInfo.email}</span></div>
                <div className="flex items-center space-x-2"><MapPin className="w-4 h-4 text-green-400" /><span className="text-xs">{service.contactInfo.address}</span></div>
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              </div>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
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
<<<<<<< HEAD
=======
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
