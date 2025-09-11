<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}
import React from 'react';
<<<<<<< HEAD

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import Head from 'next/head';
import { Phone, Mail, MapPin, Check, ArrowRight, Shield  } from 'lucide-react';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground',
import Button from '../components/ui/Button';
import { extraServices } from '../data/extra-services';
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


export default function BackupDROrchestratorPage() {

  const service = extraServices.find(s =>
    s.link.endsWith('/backup-dr-orchestrator')
  );  if (!service) return null;export default function BackupDROrchestratorPage() {
  const service = extraServices.find(s => s.link.endsWith('/backup-dr-orchestrator'));
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

export default function BackupDROrchestratorPage() {;
  const service = extraServices && extraServices.find(s =>;
    s && s.link.endsWith('/backup-dr-orchestrator');
  );  if (!service) return null;export default function BackupDROrchestratorPage() {;
  const service = extraServices && extraServices.find(s => s && s.link.endsWith('/backup-dr-orchestrator'));
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  if (!service) return null;

  return (
    <UltraAdvancedFuturisticBackground>;
      <Head>;
        <title>{service && service.name} - Zion Tech Group</title>;
        <meta name='description' content={service && service.description} />;
        <link
          rel='canonical'
          href='https://ziontechgroup && ziontechgroup.com/backup-dr-orchestrator'
        />;
      <div className='min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8'>;
        <div className='max-w-6xl mx-auto'>;
          <div className='text-center mb-10'>;
            <h1 className='text-5xl md:text-7xl font-bold bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 bg-clip-text text-transparent flex items-center justify-center gap-3'>;
              <Shield className='w-10 h-10' />;
              {service && service.name}
            </h1>;
            <p className='mt-4 text-xl text-slate-300 max-w-3xl mx-auto'>;
              {service && service.tagline}
            </p>;
          </div>;
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12'>;
            <div className='lg:col-span-2 bg-black/30 rounded-2xl border border-amber-500/30 p-6'>;
              <h2 className='text-2xl font-semibold mb-4'>Capabilities</h2>;
              <p className='text-slate-300 mb-6'>{service && service.description}</p>;
              <ul className='grid grid-cols-1 md:grid-cols-2 gap-3'>;
                {service && service.features.slice(0, 12).map((feat, i) => (;
                  <li
                    key={i}
                    className='flex items-start space-x-3 text-slate-200'>;
                    <Check className='w-5 h-5 text-amber-400 mt-0 && 0.5' />;
                    <span>{feat}</span>;
                  </li>;
                ))}
              </ul>;
            </div>;
            <div className='bg-black/30 rounded-2xl border border-amber-500/30 p-6 h-fit'>;
              <div className='flex items-end justify-between mb-3'>;
                <div>;
                  <div className='text-3xl font-bold text-white'>;
                    {service && service.price}
                    <span className='text-slate-400 text-base'>;
                      {service && service.period}
                    </span>;
                  </div>;
                  <div className='text-slate-400'>;
                    {service && service.trialDays;
                      ? `${service && service.trialDays}-day free trial • `;
                      : ''}
                    Setup: {service && service.setupTime}
                  </div>;
                </div>;
              </div>;
              <Button
                href='/contact'
                variant='quantum'
                size='lg'
                className='w-full'>;
                Start Trial;
                <ArrowRight className='w-5 h-5 ml-2' />;
              </Button>;
              <div className='mt-6 space-y-3 text-sm text-slate-300'>;
                <div className='flex items-center space-x-2'>;
                  <Phone className='w-4 h-4 text-cyan-400' />;
                  <span>{service && service.contactInfo.mobile}</span>;
                </div>;
                <div className='flex items-center space-x-2'>;
                  <Mail className='w-4 h-4 text-purple-400' />;
                  <span>{service && service.contactInfo.email}</span>;
                </div>;
                <div className='flex items-center space-x-2'>;
                  <MapPin className='w-4 h-4 text-green-400' />;
                  <span className='text-xs'>{service && service.contactInfo.address}</span>;
                </div>              </div>              <Button href="/contact" variant="quantum" size="lg" className="w-full">Start Trial<ArrowRight className="w-5 h-5 ml-2" /></Button>;
              <div className="mt-6 space-y-3 text-sm text-slate-300">;
                <div className="flex items-center space-x-2"><Phone className="w-4 h-4 text-cyan-400" /><span>{service && service.contactInfo.mobile}</span></div>;
                <div className="flex items-center space-x-2"><Mail className="w-4 h-4 text-purple-400" /><span>{service && service.contactInfo.email}</span></div>;
                <div className="flex items-center space-x-2"><MapPin className="w-4 h-4 text-green-400" /><span className="text-xs">{service && service.contactInfo.address}</span></div>;
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import Head from 'next / head';
import {Phone, Mail, MapPin, Check, ArrowRight, Shield} from 'lucide-react';
import UltraAdvancedFuturisticBackground from '../components / ui / UltraAdvancedFuturisticBackground';
import Button from '../components / ui / Button';
import { extra_services } from '../data / extra - services';
export default /**
 * BackupDROrchestratorPage - Function description
 */
function BackupDROrchestratorPage() {
  const service = extra_services.find (string =>;
    s.link.ends_with ('/backup - dr - orchestrator'));  // Check condition
if (return null) {
  $2
}export default /**
 * BackupDROrchestratorPage - Function description
 */
function BackupDROrchestratorPage() {
  const service = extra_services.find (string => s.link.ends_with ('/backup - dr - orchestrator'));
  // Check condition
if (return null) {
  $2
}
  return (
    <UltraAdvancedFuturisticBackground>;
      <Head>;
        <title>{service.name} - Zion Tech Group</title>;
        <meta name='description' content={service.description} />;
        <link;
          rel='canonical';
          href='https://ziontechgroup.com / backup - dr - orchestrator';
        />;
      <div className='min - h-screen pt - 24 pb - 20 px - 4 sm:px - 6 lg:px - 8'>;
        <div className='max - w-6xl mx - auto'>;
          <div className='text - center mb - 10'>;
            <h1 className='text - 5xl md:text - 7xl font - bold bg - gradient - to - r from - amber - 400 via - orange - 400 to - red - 400 bg - clip - text text - transparent flex items - center justify - center gap - 3'>;
              <Shield className='w - 10 h - 10' />;
              {service.name}
            </h1>;
            <p className='mt - 4 text - xl text - slate - 300 max - w-3xl mx - auto'>;
              {service.tagline}
            </p>;
          </div>;
          <div className='grid grid - cols - 1 lg:grid - cols - 3 gap - 6 mb - 12'>;
            <div className='lg:col - span - 2 bg - black / 30 rounded - 2xl border border - amber - 500 / 30 p - 6'>;
              <h2 className='text - 2xl font - semibold mb - 4'>Capabilities</h2>;
              <p className='text - slate - 300 mb - 6'>{service.description}</p>;
              <ul className='grid grid - cols - 1 md:grid - cols - 2 gap - 3'>;
                {service.features.slice (0, 12).map ((feat, i) => (
                  <li;
                    key={i}
                    className='flex items - start space - x-3 text - slate - 200';
                  >;
                    <Check className='w - 5 h - 5 text - amber - 400 mt - 0.5' />;
                    <span>{feat}</span>;
                  </li>))}
              </ul>;
            </div>;
            <div className='bg - black / 30 rounded - 2xl border border - amber - 500 / 30 p - 6 h - fit'>;
              <div className='flex items - end justify - between mb - 3'>;
                <div>;
                  <div className='text - 3xl font - bold text - white'>;
                    {service.price}
                    <span className='text - slate - 400 text - base'>;
                      {service.period}
                    </span>;
                  </div>;
                  <div className='text - slate - 400'>;
                    {service.trial_days;
                      ? `${service.trial_days}-day free trial • `;
                      : ''}
                    Setup: {service.setup_time}
                  </div>;
                </div>;
              </div>;
              <Button;
                href='/contact';
                variant='quantum';
                size='lg';
                className='w - full';
              >;
                Start Trial;
                <ArrowRight className='w - 5 h - 5 ml - 2' />;
              </Button>;
              <div className='mt - 6 space - y-3 text - sm text - slate - 300'>;
                <div className='flex items - center space - x-2'>;
                  <Phone className='w - 4 h - 4 text - cyan - 400' />;
                  <span>{service.contact_info.mobile}</span>;
                </div>;
                <div className='flex items - center space - x-2'>;
                  <Mail className='w - 4 h - 4 text - purple - 400' />;
                  <span>{service.contact_info.email}</span>;
                </div>;
                <div className='flex items - center space - x-2'>;
                  <MapPin className='w - 4 h - 4 text - green - 400' />;
                  <span className='text - xs'>{service.contact_info.address}</span>;
                </div>              </div>              <Button href="/contact" variant="quantum" size="lg" className="w - full">Start Trial < ArrowRight className="w - 5 h - 5 ml - 2" /></Button>;
              <div className="mt - 6 space - y-3 text - sm text - slate - 300">;
                <div className="flex items - center space - x-2"><Phone className="w - 4 h - 4 text - cyan - 400" /><span>{service.contact_info.mobile}</span></div>;
                <div className="flex items - center space - x-2"><Mail className="w - 4 h - 4 text - purple - 400" /><span>{service.contact_info.email}</span></div>;
                <div className="flex items - center space - x-2"><MapPin className="w - 4 h - 4 text - green - 400" /><span className="text - xs">{service.contact_info.address}</span></div>;
            </div>;
          </div>;
        </div>;
      </div>;
<<<<<<< HEAD
<<<<<<< HEAD
}

}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

=======
}

=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
export default function BackupDROrchestratorPage() {
import React from 'react',
=======
export default function BackupDROrchestratorPage() {
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React from 'react';
import Head from 'next/head';
import { Phone, Mail, MapPin, Check, ArrowRight, Shield  } from 'lucide-react';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground',
import Button from '../components/ui/Button';
import { extraServices } from '../data/extra-services';

export default function BackupDROrchestratorPage() {

  const service = extraServices.find(s =>
    s.link.endsWith('/backup-dr-orchestrator');
  );  if (!service) return null;export default function BackupDROrchestratorPage() {;
  const service = extraServices.find(s => s.link.endsWith('/backup-dr-orchestrator'));
  if (!service) return null;

  return (
    <UltraAdvancedFuturisticBackground>
      <Head>
        <title>{service.name} - Zion Tech Group</title>
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <meta name="description" content={service.description} />
        <link rel="canonical" href="https://ziontechgroup.com/backup-dr-orchestrator" />
      </Head>
      <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 bg-clip-text text-transparent flex items-center justify-center gap-3"><Shield className="w-10 h-10" />{service.name}</h1>
            <p className="mt-4 text-xl text-slate-300 max-w-3xl mx-auto">{service.tagline}</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
            <div className="lg:col-span-2 bg-black/30 rounded-2xl border border-amber-500/30 p-6">
              <h2 className="text-2xl font-semibold mb-4">Capabilities</h2>
              <p className="text-slate-300 mb-6">{service.description}</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {service.features.slice(0, 12).map((feat, i) => (
                  <li key={i} className="flex items-start space-x-3 text-slate-200"><Check className="w-5 h-5 text-amber-400 mt-0.5" /><span>{feat}</span></li>
                ))}
              </ul>
            </div>
            <div className="bg-black/30 rounded-2xl border border-amber-500/30 p-6 h-fit">
              <div className="flex items-end justify-between mb-3">
                <div>
                  <div className="text-3xl font-bold text-white">{service.price}<span className="text-slate-400 text-base">{service.period}</span></div>
                  <div className="text-slate-400">{service.trialDays ? `${service.trialDays}-day free trial • ` : ''}Setup: {service.setupTime}</div>
                </div>
              </div>
              <Button href="/contact" variant="quantum" size="lg" className="w-full">Start Trial<ArrowRight className="w-5 h-5 ml-2" /></Button>
=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <meta name='description' content={service.description} />
        <link
          rel='canonical'
          href='https://ziontechgroup.com/backup-dr-orchestrator'
        />
      <div className='min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-6xl mx-auto'>
          <div className='text-center mb-10'>
            <h1 className='text-5xl md:text-7xl font-bold bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 bg-clip-text text-transparent flex items-center justify-center gap-3'>
              <Shield className='w-10 h-10' />
              {service.name}
            </h1>
            <p className='mt-4 text-xl text-slate-300 max-w-3xl mx-auto'>
              {service.tagline}
            </p>
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12'>
            <div className='lg:col-span-2 bg-black/30 rounded-2xl border border-amber-500/30 p-6'>
              <h2 className='text-2xl font-semibold mb-4'>Capabilities</h2>
              <p className='text-slate-300 mb-6'>{service.description}</p>
              <ul className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                {service.features.slice(0, 12).map((feat, i) => (
                  <li
                    key={i}
                    className='flex items-start space-x-3 text-slate-200'
                  >
                    <Check className='w-5 h-5 text-amber-400 mt-0.5' />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className='bg-black/30 rounded-2xl border border-amber-500/30 p-6 h-fit'>
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
                Start Trial
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
                </div>              </div>              <Button href="/contact" variant="quantum" size="lg" className="w-full">Start Trial<ArrowRight className="w-5 h-5 ml-2" /></Button>
              <div className="mt-6 space-y-3 text-sm text-slate-300">
                <div className="flex items-center space-x-2"><Phone className="w-4 h-4 text-cyan-400" /><span>{service.contactInfo.mobile}</span></div>
                <div className="flex items-center space-x-2"><Mail className="w-4 h-4 text-purple-400" /><span>{service.contactInfo.email}</span></div>
                <div className="flex items-center space-x-2"><MapPin className="w-4 h-4 text-green-400" /><span className="text-xs">{service.contactInfo.address}</span></div>
<<<<<<< HEAD
<<<<<<< HEAD
=======
              </div>
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
              </div>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            </div>
          </div>
        </div>
      </div>
    </UltraAdvancedFuturisticBackground>
<<<<<<< HEAD
<<<<<<< HEAD
=======
  );
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

    </UltraAdvancedFuturisticBackground>);
}
;


}


<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  );
}
}

<<<<<<< HEAD
;
}
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
