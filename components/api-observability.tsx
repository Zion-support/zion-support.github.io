<<<<<<< HEAD
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
 return (<UltraAdvancedFuturisticBackground> <Head> <title> {;
  service && service.name ;
}- Zion Tech Group</title>) ) ;
}</ul> </div> <div className="bg-black/30 rounded-2xl border border-cyan-500/30 p-6 h-fit" > <div className="flex items-end justify-between mb-3" > <div> </div> </div> </div> </div> </div> </UltraAdvancedFuturisticBackground>) import React from 'react';
import React from 'react';
=======
<<<<<<< HEAD
<<<<<<< HEAD

return (<UltraAdvancedFuturisticBackground> <Head> <title> {
  service.name
}- Zion Tech Group</title>) )
=======
 return (<UltraAdvancedFuturisticBackground> <Head> <title> {
=======
return (<UltraAdvancedFuturisticBackground> <Head> <title> {
=======
 return (<UltraAdvancedFuturisticBackground> <Head> <title> {
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  service.name 
}- Zion Tech Group</title>) ) 
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
}</ul> </div> <div className="bg-black/30 rounded-2xl border border-cyan-500/30 p-6 h-fit" > <div className="flex items-end justify-between mb-3" > <div> </div> </div> </div> </div> </div> </UltraAdvancedFuturisticBackground>) import React from 'react';

>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
import Head from 'next/head';
import { Shield, Phone, Mail, MapPin, Check, ArrowRight  } from 'lucide-react';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground',
import Button from '../components/ui/Button';
<<<<<<< HEAD
import {enhancedRealMicroSaasServices} from '../data/enhanced-real-micro-saas-services';
export default function ApiObservabilityPage() {;
  const service = enhancedRealMicroSaasServices && enhancedRealMicroSaasServices.find(s => s && s.link.endsWith('/api-observability'));
  if (!service) return null;
  return (
    <UltraAdvancedFuturisticBackground>;
      <Head>;
        <title>{service && service.name} - Zion Tech Group</title>;
        <meta name="description" content={service && service.description} />;
        <link rel="canonical" href="https://ziontechgroup && ziontechgroup.com/api-observability" />;
      </Head>;
      <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">;
        <div className="max-w-6xl mx-auto">;
          <div className="text-center mb-10">;
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent flex items-center justify-center gap-3"><Shield className="w-10 h-10" />{service && service.name}</h1>;
            <p className="mt-4 text-xl text-slate-300 max-w-3xl mx-auto">{service && service.tagline}</p>;
          </div>;
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">;
            <div className="lg:col-span-2 bg-black/30 rounded-2xl border border-cyan-500/30 p-6">;
              <h2 className="text-2xl font-semibold mb-4">Capabilities</h2>;
              <p className="text-slate-300 mb-6">{service && service.description}</p>;
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">;
                {service && service.features.slice(0, 12).map((feat, i) => (;
                  <li key={i} className="flex items-start space-x-3 text-slate-200"><Check className="w-5 h-5 text-cyan-400 mt-0 && 0.5" /><span>{feat}</span></li>;
                ))}
              </ul>;
            </div>;
            <div className="bg-black/30 rounded-2xl border border-cyan-500/30 p-6 h-fit">;
              <div className="flex items-end justify-between mb-3">;
                <div>;
                  <div className="text-3xl font-bold text-white">{service && service.price}<span className="text-slate-400 text-base">{service && service.period}</span></div>;
                  <div className="text-slate-400">{service && service.trialDays}-day free trial • Setup: {service && service.setupTime}</div>;
                </div>;
              </div>;
              <Link href="/contact" variant="quantum" size="lg" className="w-full">Start Trial<ArrowRight className="w-5 h-5 ml-2" /></Button>;
              <div className="mt-6 space-y-3 text-sm text-slate-300">;
                <div className="flex items-center space-x-2"><Phone className="w-4 h-4 text-cyan-400" /><span>{service && service.contactInfo.mobile}</span></div>;
                <div className="flex items-center space-x-2"><Mail className="w-4 h-4 text-purple-400" /><span>{service && service.contactInfo.email}</span></div>;
                <div className="flex items-center space-x-2"><MapPin className="w-4 h-4 text-green-400" /><span className="text-xs">{service && service.contactInfo.address}</span></div>;
  service.name;
}- Zion Tech Group</title>) );
}</ul> </div> <div className="bg - black / 30 rounded - 2xl border border - cyan - 500 / 30 p - 6 h - fit" > <div className="flex items - end justify - between mb - 3" > <div> </div> </div> </div> </div> </div> </UltraAdvancedFuturisticBackground>) import React from 'react';
import Head from 'next / head';
import {Shield, Phone, Mail, MapPin, Check, ArrowRight} from 'lucide-react';
import UltraAdvancedFuturisticBackground from '../components / ui / UltraAdvancedFuturisticBackground';
import Button from '../components / ui / Button';
import {enhancedRealMicroSaasServices} from '../data / enhanced - real - micro - saas - services';
export default /**
 * ApiObservabilityPage - Function description
 */
function ApiObservabilityPage() {
  const service = enhancedRealMicroSaasServices.find (string => s.link.ends_with ('/api - observability'));
  // Check condition
if (return null) {
  $2
}
  return (
    <UltraAdvancedFuturisticBackground>;
      <Head>;
        <title>{service.name} - Zion Tech Group</title>;
        <meta name="description" content={service.description} />;
        <link rel="canonical" href="https://ziontechgroup.com / api - observability" />;
      </Head>;
      <div className="min - h-screen pt - 24 pb - 20 px - 4 sm:px - 6 lg:px - 8">;
        <div className="max - w-6xl mx - auto">;
          <div className="text - center mb - 10">;
            <h1 className="text - 5xl md:text - 7xl font - bold bg - gradient - to - r from - cyan - 400 via - blue - 400 to - purple - 400 bg - clip - text text - transparent flex items - center justify - center gap - 3"><Shield className="w - 10 h - 10" />{service.name}</h1>;
            <p className="mt - 4 text - xl text - slate - 300 max - w-3xl mx - auto">{service.tagline}</p>;
          </div>;
          <div className="grid grid - cols - 1 lg:grid - cols - 3 gap - 6 mb - 12">;
            <div className="lg:col - span - 2 bg - black / 30 rounded - 2xl border border - cyan - 500 / 30 p - 6">;
              <h2 className="text - 2xl font - semibold mb - 4">Capabilities</h2>;
              <p className="text - slate - 300 mb - 6">{service.description}</p>;
              <ul className="grid grid - cols - 1 md:grid - cols - 2 gap - 3">;
                {service.features.slice (0, 12).map ((feat, i) => (
                  <li key={i} className="flex items - start space - x-3 text - slate - 200"><Check className="w - 5 h - 5 text - cyan - 400 mt - 0.5" /><span>{feat}</span></li>))}
              </ul>;
            </div>;
            <div className="bg - black / 30 rounded - 2xl border border - cyan - 500 / 30 p - 6 h - fit">;
              <div className="flex items - end justify - between mb - 3">;
                <div>;
                  <div className="text - 3xl font - bold text - white">{service.price}<span className="text - slate - 400 text - base">{service.period}</span></div>;
                  <div className="text - slate - 400">{service.trial_days}-day free trial • Setup: {service.setup_time}</div>;
                </div>;
              </div>;
              <Link href="/contact" variant="quantum" size="lg" className="w - full">Start Trial < ArrowRight className="w - 5 h - 5 ml - 2" /></Button>;
              <div className="mt - 6 space - y-3 text - sm text - slate - 300">;
                <div className="flex items - center space - x-2"><Phone className="w - 4 h - 4 text - cyan - 400" /><span>{service.contact_info.mobile}</span></div>;
                <div className="flex items - center space - x-2"><Mail className="w - 4 h - 4 text - purple - 400" /><span>{service.contact_info.email}</span></div>;
                <div className="flex items - center space - x-2"><MapPin className="w - 4 h - 4 text - green - 400" /><span className="text - xs">{service.contact_info.address}</span></div>;
              </div>;
            </div>;
          </div>;
        </div>;
      </div>;
}
    </UltraAdvancedFuturisticBackground>);
}
;
=======
<<<<<<< HEAD
import { enhancedRealMicroSaasServices } from '../data/enhanced-real-micro-saas-services';
=======
import {enhancedRealMicroSaasServices} from '../data/enhanced-real-micro-saas-services';
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
export default function ApiObservabilityPage() {

=======
<<<<<<< HEAD
export default function ApiObservabilityPage() {;
=======
export default function ApiObservabilityPage() {
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  const service = enhancedRealMicroSaasServices.find(s => s.link.endsWith('/api-observability'));
  if (!service) return null;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45

  return (
    <UltraAdvancedFuturisticBackground>
      <Head>
        <title>{service.name} - Zion Tech Group</title>
<<<<<<< HEAD
        <meta name=&quot;description&quot; content={service.description} />
        <link rel=&quot;canonical&quot; href=&quot;https://ziontechgroup.com/api-observability&quot; />
      </Head>
      <div className=&quot;min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8&quot;>
        <div className=&quot;max-w-6xl mx-auto&quot;>
          <div className=&quot;text-center mb-10&quot;>
            <h1 className=&quot;text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent flex items-center justify-center gap-3&quot;><Shield className=&quot;w-10 h-10&quot; />{service.name}</h1>
            <p className=&quot;mt-4 text-xl text-slate-300 max-w-3xl mx-auto&quot;>{service.tagline}</p>
          </div>
          <div className=&quot;grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12&quot;>
            <div className=&quot;lg:col-span-2 bg-black/30 rounded-2xl border border-cyan-500/30 p-6&quot;>
              <h2 className=&quot;text-2xl font-semibold mb-4&quot;>Capabilities</h2>
              <p className=&quot;text-slate-300 mb-6&quot;>{service.description}</p>
              <ul className=&quot;grid grid-cols-1 md:grid-cols-2 gap-3&quot;>
                {service.features.slice(0, 12).map((feat, i) => (
                  <li key={i} className=&quot;flex items-start space-x-3 text-slate-200&quot;><Check className=&quot;w-5 h-5 text-cyan-400 mt-0.5&quot; /><span>{feat}</span></li>
                ))}
              </ul>
            </div>
            <div className=&quot;bg-black/30 rounded-2xl border border-cyan-500/30 p-6 h-fit&quot;>
              <div className=&quot;flex items-end justify-between mb-3&quot;>
                <div>
                  <div className=&quot;text-3xl font-bold text-white&quot;>{service.price}<span className=&quot;text-slate-400 text-base&quot;>{service.period}</span></div>
                  <div className=&quot;text-slate-400&quot;>{service.trialDays}-day free trial • Setup: {service.setupTime}</div>
                </div>
              </div>
              <Link href=&quot;/contact&quot; variant=&quot;quantum&quot; size=&quot;lg&quot; className=&quot;w-full&quot;>Start Trial<ArrowRight className=&quot;w-5 h-5 ml-2&quot; /></Button>
              <div className=&quot;mt-6 space-y-3 text-sm text-slate-300&quot;>
                <div className=&quot;flex items-center space-x-2&quot;><Phone className=&quot;w-4 h-4 text-cyan-400&quot; /><span>{service.contactInfo.mobile}</span></div>
                <div className=&quot;flex items-center space-x-2&quot;><Mail className=&quot;w-4 h-4 text-purple-400&quot; /><span>{service.contactInfo.email}</span></div>
                <div className=&quot;flex items-center space-x-2&quot;><MapPin className=&quot;w-4 h-4 text-green-400&quot; /><span className=&quot;text-xs&quot;>{service.contactInfo.address}</span></div>
=======
        <meta name="description" content={service.description} />
        <link rel="canonical" href="https://ziontechgroup.com/api-observability" />
      </Head>
      <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent flex items-center justify-center gap-3"><Shield className="w-10 h-10" />{service.name}</h1>
            <p className="mt-4 text-xl text-slate-300 max-w-3xl mx-auto">{service.tagline}</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
            <div className="lg:col-span-2 bg-black/30 rounded-2xl border border-cyan-500/30 p-6">
              <h2 className="text-2xl font-semibold mb-4">Capabilities</h2>
              <p className="text-slate-300 mb-6">{service.description}</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {service.features.slice(0, 12).map((feat, i) => (
                  <li key={i} className="flex items-start space-x-3 text-slate-200"><Check className="w-5 h-5 text-cyan-400 mt-0.5" /><span>{feat}</span></li>
                ))}
              </ul>
            </div>
            <div className="bg-black/30 rounded-2xl border border-cyan-500/30 p-6 h-fit">
              <div className="flex items-end justify-between mb-3">
                <div>
                  <div className="text-3xl font-bold text-white">{service.price}<span className="text-slate-400 text-base">{service.period}</span></div>
                  <div className="text-slate-400">{service.trialDays}-day free trial • Setup: {service.setupTime}</div>
                </div>
              </div>
              <Link href="/contact" variant="quantum" size="lg" className="w-full">Start Trial<ArrowRight className="w-5 h-5 ml-2" /></Button>
              <div className="mt-6 space-y-3 text-sm text-slate-300">
                <div className="flex items-center space-x-2"><Phone className="w-4 h-4 text-cyan-400" /><span>{service.contactInfo.mobile}</span></div>
                <div className="flex items-center space-x-2"><Mail className="w-4 h-4 text-purple-400" /><span>{service.contactInfo.email}</span></div>
                <div className="flex items-center space-x-2"><MapPin className="w-4 h-4 text-green-400" /><span className="text-xs">{service.contactInfo.address}</span></div>
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
              </div>
            </div>
          </div>
        </div>
      </div>
    </UltraAdvancedFuturisticBackground>
<<<<<<< HEAD
  )
}

=======
  );
<<<<<<< HEAD
}
=======
}

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
<<<<<<< HEAD
;
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
