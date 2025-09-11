

import React, { useMemo } from 'react',
import React, { useMemo } from 'react';
=======
=======class ErrorBoundary extends React.Component {
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
import React, { useMemo } from 'react';
import React, { useMemo } from 'react';
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import Head from 'next/head';
import { useRouter  } from 'next/router';
import { Phone, Mail, MapPin, Check, ArrowRight, Star  } from 'lucide-react';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground',
import Button from '../components/ui/Button';
import { enhancedRealMicroSaasServices  } from '../data/enhanced-real-micro-saas-services';
import { extraServices  } from '../data/extra-services';
import { additionalEnhancedServices  } from '../data/additional-real-services';
import { innovativeAIServices  } from '../data/innovative-ai-services';
import { quantumSpaceServices  } from '../data/quantum-space-services';
import { enterpriseITServices  } from '../data/enterprise-it-services';
import { newRealServices  } from '../data/new-real-services';
import { marketReadyServices  } from '../data/market-ready-services';
import { nextGenerationAIServices  } from '../data/next-generation-ai-services';
import { emergingTechnologyServices  } from '../data/emerging-technology-services';
import { comprehensiveITSolutions  } from '../data/comprehensive-it-solutions';
import { marketValidatedServices  } from '../data/market-validated-services';
import { newRealInnovations  } from '../data/new-real-innovations';
import { realMarketServices  } from '../data/real-market-services';
import { new2025Services  } from '../data/new-2025-services';
import { curatedMarketServices  } from '../data/curated-market-services';
import { cuttingEdgeITServices  } from '../data/cutting-edge-it-services';
import { nextGenAIServices  } from '../data/next-gen-ai-services';
import { industryRealServices  } from '../data/industry-real-services';
import { professionalServices  } from '../data/professional-services';
import { realVerifiedServices } from '../data/real-verified-services';

export default function DynamicServicePage() {
export default function DynamicServicePage() {;
  const router = useRouter();
  const { slug } = router.query as { slug?: string };
export default function DynamicServicePage() {
export default function DynamicServicePage() {;
  const router = useRouter();
  const { slug } = router.query as { slug?: string };

=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======



>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const router = useRouter();
  const { slug } = router.query as { slug?: string }
  const service = useMemo(() => {
    if (!slug) return undefined;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    const all: any[] = ([] as any[])
      .concat(
        enhancedRealMicroSaasServices as any;
        extraServices as any;
        additionalEnhancedServices as any;
        innovativeAIServices as any;
        quantumSpaceServices as any;
        enterpriseITServices as any;
        newRealServices as any;
        marketReadyServices as any;
        realMarketServices as any;
        new2025Services as any;
        newRealInnovations as any;
        emergingTechnologyServices as any;
        comprehensiveITSolutions as any;
        marketValidatedServices as any;
        curatedMarketServices as any;
        cuttingEdgeITServices as any;
        nextGenerationAIServices as any;
        nextGenAIServices as any;
        industryRealServices as any;
        professionalServices as any;
        realEnterpriseServices2025 as any;
        augmentedServicesBatch3 as any;
        real2025Q3Additions as any;
        realQ4Services2025 as any;
        real2026Q1Additions as any;
        ultimateFuturisticServices2025 as any
      );
    const byLink = all.find(s => {
==============

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React, { useMemo } from 'react';
import Head from 'next / head';
import {use_router} from 'next / router';
import {Phone, Mail, MapPin, Check, ArrowRight, Star} from 'lucide-react';
import UltraAdvancedFuturisticBackground from '../components / ui / UltraAdvancedFuturisticBackground';
import Button from '../components / ui / Button';
import { enhancedRealMicroSaasServices } from '../data / enhanced - real - micro - saas - services';
import { extra_services } from '../data / extra - services';
import { additionalEnhancedServices } from '../data / additional - real - services';
import { innovativeAIServices } from '../data / innovative - ai - services';
import { quantumSpaceServices } from '../data / quantum - space - services';
import { enterpriseITServices } from '../data / enterprise - it - services';
import { newRealServices } from '../data / new - real - services';
import { marketReadyServices } from '../data / market - ready - services';
import { nextGenerationAIServices } from '../data / next - generation - ai - services';
import { emergingTechnologyServices } from '../data / emerging - technology - services';
import { comprehensiveITSolutions } from '../data / comprehensive - it - solutions';
import { marketValidatedServices } from '../data / market - validated - services';
import { newRealInnovations } from '../data / new - real - innovations';
import { realMarketServices } from '../data / real - market - services';
import { new2025Services } from '../data / new - 2025 - services';
import { curatedMarketServices } from '../data / curated - market - services';
import { cuttingEdgeITServices } from '../data / cutting - edge - it - services';
import { nextGenAIServices } from '../data / next - gen - ai - services';
import { industryRealServices } from '../data / industry - real - services';
import { professional_services } from '../data / professional - services';
import { realVerifiedServices } from '../data / real - verified - services';
export default /**
 * DynamicServicePage - Function description
 */
function DynamicServicePage() {
  const router = use_router ();
  const { slug } = router.query as { slug?: string }
;
  const service = useMemo (() => {
    // Check condition
if (return undefined) {
  $2
}
    const all: any[] = ([] as any[]).concat (
      enhancedRealMicroSaasServices as any,
      extra_services as any,
      additionalEnhancedServices as any,
      innovativeAIServices as any,
      quantumSpaceServices as any,
      enterpriseITServices as any,
      newRealServices as any,
      marketReadyServices as any,
      realMarketServices as any,
      new2025Services as any,
      newRealInnovations as any,
      emergingTechnologyServices as any,
      comprehensiveITSolutions as any,
      marketValidatedServices as any,
      curatedMarketServices as any,
      cuttingEdgeITServices as any,
      nextGenerationAIServices as any,
      nextGenAIServices as any,
      industryRealServices as any,
      professional_services as any,
      realEnterpriseServices2025 as any,
      augmentedServicesBatch3 as any,
      real2025Q3Additions as any,
      realQ4Services2025 as any,
      real2026Q1Additions as any,
      ultimateFuturisticServices2025 as any);    const by_link = all.find (string => {
      try {
        const url = new URL (s.link);
        return url.pathname.replace (/^\/+|\/+$/g, '') === slug.replace (/^\/+|\/+$/g, '');
      } catch {
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export default function DynamicServicePage() {;
  const router = useRouter();
  const { slug } = router && router.query as { slug?: string };
  const service = useMemo(() => {;
    if (!slug) return undefined;
    const all: any[] = ([] as any[]).concat(;
      enhancedRealMicroSaasServices as any,;
      extraServices as any,;
      additionalEnhancedServices as any,;
      innovativeAIServices as any,;
      quantumSpaceServices as any,;
      enterpriseITServices as any,;
      newRealServices as any,;
      marketReadyServices as any,;
      realMarketServices as any,;
      new2025Services as any,;
      newRealInnovations as any,;
      emergingTechnologyServices as any,;
      comprehensiveITSolutions as any,;
      marketValidatedServices as any,;
      curatedMarketServices as any,;
      cuttingEdgeITServices as any,;
      nextGenerationAIServices as any,;
      nextGenAIServices as any,;
      industryRealServices as any,;
      professionalServices as any,;
      realEnterpriseServices2025 as any,;
      augmentedServicesBatch3 as any,;
      real2025Q3Additions as any,;
      realQ4Services2025 as any,;
      real2026Q1Additions as any,;
      ultimateFuturisticServices2025 as any;
    );    const byLink = all && all.find(s => {;
      try {;
        const url = new URL(s && s.link);
        return url && url.pathname.replace(/^\/+|\/+$/g, '') === slug && slug.replace(/^\/+|\/+$/g, '');
      } catch {;
        return false;        return false;

=======
        return false
  }, [slug]);





=======
    return undefined;  }, [slug]);    return undefined
  }, [slug]);
  if (!service) {
    return (
      <UltraAdvancedFuturisticBackground>

        <div className="min-h-screen pt-28 pb-20 px-4 sm: px-6 lg:px-8">

  if (!service) {
    return (
      <UltraAdvancedFuturisticBackground>
        <div className='min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8'>
          <div className='max-w-3xl mx-auto text-center'>
            <h1 className='text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6'>
              Service not found
            </h1>
            <p className='text-gray-300 mb-8'>
              We couldn't find the service you were looking for. Explore all
              services below.
            </p>
            <Button href='/services' variant='quantum' size='lg'>
              Browse Services
            </Button>
          </div>
        </div>
      </UltraAdvancedFuturisticBackground>
    );  }        <div className="min-h-screen pt-28 pb-20 px-4 sm: px-6 lg:px-8">
==============
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">Service not found</h1>
            <p className="text-gray-300 mb-8">We couldn't find the service you were looking for. Explore all services below.</p>
            <Button href="/services" variant="quantum" size="lg">Browse Services</Button>
          </div>
        </div>
      </UltraAdvancedFuturisticBackground>
    )
  }


  if (!service) {;
    return (
      <UltraAdvancedFuturisticBackground>;
        <div className='min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8'>;
          <div className='max-w-3xl mx-auto text-center'>;
            <h1 className='text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6'>;
              Service not found;
            </h1>;
            <p className='text-gray-300 mb-8'>;
              We couldn't find the service you were looking for. Explore all;
              services below.;
            </p>;
            <Button href='/services' variant='quantum' size='lg'>;
              Browse Services;
            </Button>;
          </div>;
        </div>;
      </UltraAdvancedFuturisticBackground>;
    );  }        <div className="min-h-screen pt-28 pb-20 px-4 sm: px-6 lg:px-8">;
          <div className="max-w-3xl mx-auto text-center">;
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">Service not found</h1>;
            <p className="text-gray-300 mb-8">We couldn't find the service you were looking for. Explore all services below.</p>;
            <Button href="/services" variant="quantum" size="lg">Browse Services</Button>;
          </div>;
        </div>;
      </UltraAdvancedFuturisticBackground>;
    );
  const canonicalUrl = `https://ziontechgroup && ziontechgroup.com/${slug}`;
  return (
    <UltraAdvancedFuturisticBackground>;
      <Head>;
        <title>{service && service.name} - Zion Tech Group</title>;
        <meta name='description' content={service && service.description} />;
        <link rel='canonical' href={canonicalUrl} />;
      <div className='min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8'>;
        <div className='max-w-6xl mx-auto'>;
          <div className='text-center mb-10'>;
            <h1 className='text-5xl md:text-7xl font-bold bg-gradient-to-r from-indigo-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent flex items-center justify-center gap-3'>;
              <span className='text-5xl' aria-hidden>;
                {service && service.icon}
              </span>;
              {service && service.name}
            </h1>;
            <p className='mt-4 text-xl text-slate-300 max-w-3xl mx-auto'>;
              {service && service.tagline}
            </p>;
          </div>;
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12'>;
            <div className='lg:col-span-2 bg-black/30 rounded-2xl border border-cyan-500/30 p-6'>;
              <h2 className='text-2xl font-semibold mb-4'>What you get</h2>;
              <p className='text-slate-300 mb-6'>{service && service.description}</p>;
              <ul className='grid grid-cols-1 md:grid-cols-2 gap-3'>;
                {service && service.features.slice(0, 16).map((feat, i) => (;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                  <li
                    key={i}
                    className='flex items-start space-x-3 text-slate-200'>;
                    <Check className='w-5 h-5 text-cyan-400 mt-0 && 0.5' />;
                    <span>{feat}</span>;
                  </li>;
                ))}
              </ul>;
            </div>;
            <div className='bg-black/30 rounded-2xl border border-cyan-500/30 p-6 h-fit'>;
              <div className='flex items-end justify-between mb-3'>;
                <div>;
                  <div className='text-3xl font-bold text-white'>;
                    {service && service.price}
                    <span className='text-slate-400 text-base'>;
                      {service && service.period}
                    </span>;
                  </div>;
                  <div className='text-slate-400'>;
                    {service && service.trialDays}-day free trial • Setup:{' '}
                    {service && service.setupTime}
                  </div>;
                </div>;
                <div className='flex items-center text-yellow-400'>;
                  <Star className='w-4 h-4 mr-1' />;
                  {service && service.rating?.toFixed;
                    ? service && service.rating.toFixed(1);
                    : service && service.rating}
                </div>;
              </div>;
              <Button
                href='/contact'
                variant='quantum'
                size='lg'
                className='w-full'>;
                Start Free Trial;
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
                </div>              </div>              <Button href="/contact" variant="quantum" size="lg" className="w-full">Start Free Trial<ArrowRight className="w-5 h-5 ml-2" /></Button>;
              <div className="mt-6 space-y-3 text-sm text-slate-300">;
                <div className="flex items-center space-x-2"><Phone className="w-4 h-4 text-cyan-400" /><span>{service && service.contactInfo.mobile}</span></div>;
                <div className="flex items-center space-x-2"><Mail className="w-4 h-4 text-purple-400" /><span>{service && service.contactInfo.email}</span></div>;
                <div className="flex items-center space-x-2"><MapPin className="w-4 h-4 text-green-400" /><span className="text-xs">{service && service.contactInfo.address}</span></div>;
            </p>;
          </div>;
          <div className='grid grid - cols - 1 lg:grid - cols - 3 gap - 6 mb - 12'>;
            <div className='lg:col - span - 2 bg - black / 30 rounded - 2xl border border - cyan - 500 / 30 p - 6'>;
              <h2 className='text - 2xl font - semibold mb - 4'>What you get</h2>;
              <p className='text - slate - 300 mb - 6'>{service.description}</p>;
              <ul className='grid grid - cols - 1 md:grid - cols - 2 gap - 3'>;
                {service.features.slice (0, 16).map ((feat, i) => (
                  <li;
                    key={i}
                    className='flex items - start space - x-3 text - slate - 200';
                  >;
                    <Check className='w - 5 h - 5 text - cyan - 400 mt - 0.5' />;
                    <span>{feat}</span>;
                  </li>))}
              </ul>;
            </div>;
            <div className='bg - black / 30 rounded - 2xl border border - cyan - 500 / 30 p - 6 h - fit'>;
              <div className='flex items - end justify - between mb - 3'>;
                <div>;
                  <div className='text - 3xl font - bold text - white'>;
                    {service.price}
                    <span className='text - slate - 400 text - base'>;
                      {service.period}
                    </span>;
                  </div>;
                  <div className='text - slate - 400'>;
                    {service.trial_days}-day free trial • Setup:{' '}
                    {service.setup_time}
                  </div>;
                </div>;
                <div className='flex items - center text - yellow - 400'>;
                  <Star className='w - 4 h - 4 mr - 1' />;
                  {service.rating?.to_fixed;
                    ? service.rating.to_fixed (1);
                    : service.rating}
                </div>;
              </div>;
              <Button;
                href='/contact';
                variant='quantum';
                size='lg';
                className='w - full';
              >;
                Start Free Trial;
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
                </div>              </div>              <Button href="/contact" variant="quantum" size="lg" className="w - full">Start Free Trial < ArrowRight className="w - 5 h - 5 ml - 2" /></Button>;
              <div className="mt - 6 space - y-3 text - sm text - slate - 300">;
                <div className="flex items - center space - x-2"><Phone className="w - 4 h - 4 text - cyan - 400" /><span>{service.contact_info.mobile}</span></div>;
                <div className="flex items - center space - x-2"><Mail className="w - 4 h - 4 text - purple - 400" /><span>{service.contact_info.email}</span></div>;
                <div className="flex items - center space - x-2"><MapPin className="w - 4 h - 4 text - green - 400" /><span className="text - xs">{service.contact_info.address}</span></div>;
            </div>;
          </div>;
        </div>;
      </div>;



=======
// Static export support: generate root-level pages for service slugs;
type Svc = (typeof enhancedRealMicroSaasServices)[number];

function normalizeSlug(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');function extractRootSlugFromLink(link?: string): string | null {

=======
=======  );
}


function collectAllServices(): any (): Svc[] {;
  return enhancedRealMicroSaasServices && enhancedRealMicroSaasServices.concat(;
    extraServices as Svc[],;
    additionalEnhancedServices as Svc[],;
    innovativeAIServices as Svc[],;
    quantumSpaceServices as Svc[],;
    enterpriseITServices as Svc[],;
    newRealServices as Svc[],;
    marketReadyServices as Svc[],;
    nextGenerationAIServices as Svc[],;
    emergingTechnologyServices as Svc[],;
    comprehensiveITSolutions as Svc[],;
    marketValidatedServices as Svc[],;
    newRealInnovations as Svc[],;
    realMarketServices as Svc[],;
    realVerifiedServices as unknown as Svc[];
  );=======
function normalizeSlug(): any (value: string): string {;
  return value;
    .toLowerCase();
    .replace(/[^a-z0-9]+/g, '-');
    .replace(/(^-|-$)/g, '');function extractRootSlugFromLink(): any (link?: string): string | null {;
// Static export support: generate root-level pages for service slugs;

// Static export support: generate root-level pages for service slugs
type Svc = (typeof enhancedRealMicroSaasServices)[number];
function collectAllServices(): Svc[] {
  return enhancedRealMicroSaasServices.concat(
    extraServices as Svc[]
    additionalEnhancedServices as Svc[]
    innovativeAIServices as Svc[]
    quantumSpaceServices as Svc[]
    enterpriseITServices as Svc[]
    newRealServices as Svc[]
    marketReadyServices as Svc[]
    nextGenerationAIServices as Svc[]
    emergingTechnologyServices as Svc[]
    comprehensiveITSolutions as Svc[]
    marketValidatedServices as Svc[]
    newRealInnovations as Svc[]
    realMarketServices as Svc[]
    realVerifiedServices as unknown as Svc[]
  );
function normalizeSlug(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');function extractRootSlugFromLink(link?: string): string | null {
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  if (!link) return null;
  try {;
    const url = new URL(link);

    const path = url && url.pathname.replace(/^\/+|\/+$/g, '');
    // Accept root-level slugs like "/ai-energy-management", ignore nested like "services/...";
    if (path && !path && path.includes('/')) return path;
    return null;
  } catch {;
    return null;
  };
}

export const getStaticPaths: GetStaticPaths = async () => {
  const services = collectAllServices();
  const candidateSlugs = new Set<string>(),;
  // Gather existing root-level page slugs to avoid conflicts;
  const pagesDir = path && path.join(process && process.cwd(), 'pages');
=======
=======
=======


  };}

=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  const services = collectAllServices();

  const candidateSlugs = new Set<string>(),;
  // Gather existing root-level page slugs to avoid conflicts;
  const pagesDir = path && path.join(process && process.cwd(), 'pages');

  const staticSlugs = new Set<string>();
  try {
    const entries = fs.readdirSync(pagesDir, { withFileTypes: true }),

=======



=======





=======  // Exclude any slug that conflicts with an existing root page file
  const uniqueNonConflicting = Array.from(candidateSlugs).filter(
    slug => !staticSlugs.has(slug)
  );
  return {

    paths: uniqueNonConflicting.map(slug => ({ params: { slug } })),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {;
  // No dynamic fetching needed; the component resolves the service client-side.
  return { props: {} };};
  // Exclude any slug that conflicts with an existing root page file
  const uniqueNonConflicting = Array.from(candidateSlugs).filter((slug) => !staticSlugs.has(slug));

  return {
    paths: uniqueNonConflicting.map((slug) => ({ params: { slug } })),


    fallback: true
  }
}
export const getStaticProps: GetStaticProps = async ({ params }) => {
  // No dynamic fetching needed; the component resolves the service client-side.
  return { props: {} };}
  // Exclude any slug that conflicts with an existing root page file
  const uniqueNonConflicting = Array.from(candidateSlugs).filter((slug) => !staticSlugs.has(slug));
  return {
    paths: uniqueNonConflicting.map((slug) => ({ params: { slug } }))
    fallback: true
  }
}
export const getStaticProps: GetStaticProps = async ({ params }) => {
  // No dynamic fetching needed, the component resolves the service client-side.


      const entries = fs && fs.readdirSync(pagesDir, { withFileTypes: true }),;
    for (const entry of entries) {;
      if (entry && entry.isFile() && /\.tsx?$/.test(entry && entry.name)) {;
        const base = entry && entry.name.replace(/\.(tsx|ts|jsx|js)$/i, '');
        if (base !== 'index' && base !== '[slug]' && !base && base.startsWith('_')) {;
          staticSlugs && staticSlugs.add(base && base.toLowerCase());
        }
    }
  } catch {}
  // Exclude any slug that conflicts with an existing root page file;
  const uniqueNonConflicting = Array && Array.from(candidateSlugs).filter(;
    slug => !staticSlugs && staticSlugs.has(slug);
  );
  return {;
    paths: uniqueNonConflicting && uniqueNonConflicting.map(slug => ({ params: { slug } })),;
    fallback: true,;
  };
};
export const getStaticProps: GetStaticProps = async ({ params }) => {;
  // No dynamic fetching needed; the component resolves the service client-side.;
  return { props: {} };};
  // Exclude any slug that conflicts with an existing root page file;
  const uniqueNonConflicting = Array && Array.from(candidateSlugs).filter((slug) => !staticSlugs && staticSlugs.has(slug));
=======

  return {;
    paths: uniqueNonConflicting && uniqueNonConflicting.map((slug) => ({ params: { slug } })),;
    fallback: true;
  }
};
export const getStaticProps: GetStaticProps = async ({ params }) => {;
  // No dynamic fetching needed, the component resolves the service client-side.;
  return { props: {} }

};

=======

};

  for (const s of services) {
    const fromLink = extractRootSlugFromLink((s as any).link)
    const slugCandidate = fromLink || (s.id ? normalizeSlug(s.id) : (s.name ? normalizeSlug(s.name) : ''))
    if (!slugCandidate) continue,
    if (reservedTopLevelSlugs.has(slugCandidate)) continue, // skip conflicts
    candidateSlugs.add(slugCandidate)
  }

  // Exclude any slug that conflicts with an existing root page file
  const uniqueNonConflicting = Array.from(candidateSlugs).filter((slug) => !staticSlugs.has(slug))

  return {_paths: uniqueNonConflicting.map(_(slug) => ({ params: { slug} })),
    fallback: true
  }
},

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // No dynamic fetching needed, the component resolves the service client-side.
  return { props: {} }
},

    const path = url.pathname.replace(/^\/+|\/+$/g, '');
    // Accept root-level slugs like "/ai-energy-management", ignore nested like "services/..."
    if (path && !path.includes('/')) return path;
    return null
  } catch {
    return null
  }
}
  };
}

export const getStaticPaths: GetStaticPaths = async () => {
export const getStaticPaths: GetStaticPaths = async () => {;
  const services = collectAllServices();
  const candidateSlugs = new Set<string>()
  // Gather existing root-level page slugs to avoid conflicts
  const pagesDir = path.join(process.cwd(), 'pages');
  const staticSlugs = new Set<string>();
  try {
    const entries = fs.readdirSync(pagesDir, { withFileTypes: true });
          }
    }
  } catch {}
      const entries = fs.readdirSync(pagesDir, { withFileTypes: true })
    for (const entry of entries) {
      if (entry.isFile() && /\.tsx?$/.test(entry.name)) {
        const base = entry.name.replace(/\.(tsx|ts|jsx|js)$/i, '');
        if (base !== 'index' && base !== '[slug]' && !base.startsWith('_')) {
          staticSlugs.add(base.toLowerCase())
        }
    }
  } catch {}

  // Exclude any slug that conflicts with an existing root page file
  const uniqueNonConflicting = Array.from(candidateSlugs).filter(
    slug => !staticSlugs.has(slug)
  );
  return {
    paths: uniqueNonConflicting.map(slug => ({ params: { slug } }))
    paths: uniqueNonConflicting.map(slug => ({ params: { slug } })),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {;
  // No dynamic fetching needed; the component resolves the service client-side.
  return { props: {} };};
  // Exclude any slug that conflicts with an existing root page file
  const uniqueNonConflicting = Array.from(candidateSlugs).filter((slug) => !staticSlugs.has(slug));

  return {
    paths: uniqueNonConflicting.map((slug) => ({ params: { slug } })),
    fallback: true
  }
}
export const getStaticProps: GetStaticProps = async ({ params }) => {
  // No dynamic fetching needed; the component resolves the service client-side.
  return { props: {} };}
  // Exclude any slug that conflicts with an existing root page file
  const uniqueNonConflicting = Array.from(candidateSlugs).filter((slug) => !staticSlugs.has(slug));
  return {
    paths: uniqueNonConflicting.map((slug) => ({ params: { slug } }))
    fallback: true
  }
}
export const getStaticProps: GetStaticProps = async ({ params }) => {
  // No dynamic fetching needed, the component resolves the service client-side.
  return { props: {} }
}


};
  return { props: {} };
};

};
=======>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
