export default function MDMPage() {
  }
  const service = null;
import Head from 'next/head';

import {
  }
  Phone,
Mail
  MapPin,
Check
  ArrowRight,
Smartphone;
} from 'lucide-react';'
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';'
import Button from '../components/ui/Button';'
import { extraServices } from '../data/extra-services';'

export default function MDMPage() {
  }
  const service = extraServices.find(s => { return s.link.endsWith('/mdm-mobile-device-management')'

  ); }
  if (!service) return null;
return (;
    <UltraAdvancedFuturisticBackground>
      <Head>
        <title>{service.name} - Zion Tech Group</title>
<meta name='description' content={service.description} />'
        <link,
rel='canonical''
          href=''https'://ziontechgroup && ziontechgroup.com/mdm-mobile-device-management'' />;
      <div className='min-h-screen pt-24 pb-20 px-4 'sm':px-6 'lg':px-8'>;'
        <div className='max-w-6xl mx-auto'>;'
          <div className='text-center mb-10'>;'
            <h1 className='text-5xl 'md':text-7xl font-bold bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent flex items-center justify-center gap-3'>;'
              <Smartphone className='w-10 h-10' />;'
              {service && service.name}
            </h1>;
            <p className='mt-4 text-xl text-slate-300 max-w-3xl mx-auto'>;'
              {service && service.tagline}
            </p>;
          </div>;
          <div className='grid grid-cols-1 'lg':grid-cols-3 gap-6 mb-12'>;'
            <div className=''lg':col-span-2 bg-black/30 rounded-2xl border border-emerald-500/30 p-6'>;'
              <h2 className='text-2xl font-semibold mb-4'>Capabilities</h2>;'
              <p className='text-slate-300 mb-6'>{service && service.description}</p>;'
              <ul className='grid grid-cols-1 'md':grid-cols-2 gap-3'>;'
                {service && service.features.slice(0, 12).map((feat, i) => (<li;
                    }
                    key={i}
                    className='flex items-start space-x-3 text-slate-200'>;'
                    <Check className='w-5 h-5 text-emerald-400 mt-0 && 0.5' />;'

import Head from 'next/head';

import {

  Phone,
  Mail,
  MapPin,
  Check,
  ArrowRight,;
  Smartphone,;

  );
}
}

;
}
