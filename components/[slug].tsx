import React, {_useMemo} from 'react';
import Head from 'next/head';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';
import Button from '../components/ui/Button';

export default function DynamicServicePage() {_const _router = useRouter();
  const { slug} = router.query as {_slug?: string};

  const _service = useMemo__(() => {_if (!slug) return undefined;
    const all: unknown[] = ([] as any[])
      .concat(
        enhancedRealMicroSaasServices as any, _extraServices as any, _additionalEnhancedServices as any, _innovativeAIServices as any, _quantumSpaceServices as any, _enterpriseITServices as any, _newRealServices as any, _marketReadyServices as any, _realMarketServices as any, _new2025Services as any, _newRealInnovations as any, _emergingTechnologyServices as any, _comprehensiveITSolutions as any, _marketValidatedServices as any, _curatedMarketServices as any, _cuttingEdgeITServices as any, _nextGenerationAIServices as any, _nextGenAIServices as any, _industryRealServices as any, _professionalServices as any, _realEnterpriseServices2025 as any, _augmentedServicesBatch3 as any, _real2025Q3Additions as any, _realQ4Services2025 as any, _real2026Q1Additions as any, _ultimateFuturisticServices2025 as any
      );
    const _byLink = all.find(s => {
      try {
        const _url = new window.URL(s.link);
        return url.pathname.replace(/^\/+|\/+$/g, _'') === slug.replace(/^\/+|\/+$/g, _'');} catch {_return false;}
    });
    if (byLink) return byLink;
    const _byId = enhancedRealMicroSaasServices.find(s => s.id === slug);
    if (byId) return byId;
    return undefined;
  }, [slug]);

  if (!service) {_return (
      <UltraAdvancedFuturisticBackground>
        <div className="min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">Service not found</h1>
            <p className="text-gray-300 mb-8">We couldn't find the service you were looking for. Explore all services below.</p>
            <Button href="/services" variant="quantum" size="lg">Browse Services</Button>
          </div>
        </div>
      </UltraAdvancedFuturisticBackground>
    );}

  const _canonicalUrl = `https://ziontechgroup.com/${_slug}`;

  return (
    <UltraAdvancedFuturisticBackground>
      <Head>
        <title>{_service.name} - Zion Tech Group</title>
        <meta name="description" content={_service.description} />
        <link rel="canonical" href={_canonicalUrl} />
      </Head>
      <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-indigo-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent flex items-center justify-center gap-3">
              <span className="text-5xl" aria-hidden>{_service.icon}</span>{_service.name}
            </h1>
            <p className="mt-4 text-xl text-slate-300 max-w-3xl mx-auto">{_service.tagline}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
            <div className="lg:col-span-2 bg-black/30 rounded-2xl border border-cyan-500/30 p-6">
              <h2 className="text-2xl font-semibold mb-4">What you get</h2>
              <p className="text-slate-300 mb-6">{_service.description}</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {_service.features.slice(0, _16).map(_(feat, _i) => (
                  <li key={i} className="flex items-start space-x-3 text-slate-200"><Check className="w-5 h-5 text-cyan-400 mt-0.5" /><span>{_feat}</span></li>
                ))}
              </ul>
            </div>
            <div className="bg-black/30 rounded-2xl border border-cyan-500/30 p-6 h-fit">
              <div className="flex items-end justify-between mb-3">
                <div>
                  <div className="text-3xl font-bold text-white">{_service.price}<span className="text-slate-400 text-base">{_service.period}</span></div>
                  <div className="text-slate-400">{_service.trialDays}-day free trial • Setup: {_service.setupTime}</div>
                </div>
                <div className="flex items-center text-yellow-400"><Star className="w-4 h-4 mr-1" />{_service.rating?.toFixed ? service.rating.toFixed(1) : service.rating}</div>
              </div>
              <Button href="/contact" variant="quantum" size="lg" className="w-full">Start Free Trial<ArrowRight className="w-5 h-5 ml-2" /></Button>
              <div className="mt-6 space-y-3 text-sm text-slate-300">
                <div className="flex items-center space-x-2"><Phone className="w-4 h-4 text-cyan-400" /><span>{_service.contactInfo.mobile}</span></div>
                <div className="flex items-center space-x-2"><Mail className="w-4 h-4 text-purple-400" /><span>{_service.contactInfo.email}</span></div>
                <div className="flex items-center space-x-2"><MapPin className="w-4 h-4 text-green-400" /><span className="text-xs">{_service.contactInfo.address}</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </UltraAdvancedFuturisticBackground>
  );
}

// Static export support: generate root-level pages for service slugs
type Svc = typeof enhancedRealMicroSaasServices[number];

function collectAllServices(): Svc[] {_return enhancedRealMicroSaasServices
    .concat(
      extraServices as Svc[], _additionalEnhancedServices as Svc[], _innovativeAIServices as Svc[], _quantumSpaceServices as Svc[], _enterpriseITServices as Svc[], _newRealServices as Svc[], _marketReadyServices as Svc[], _nextGenerationAIServices as Svc[], _emergingTechnologyServices as Svc[], _comprehensiveITSolutions as Svc[], _marketValidatedServices as Svc[], _newRealInnovations as Svc[], _realMarketServices as Svc[], _realVerifiedServices as unknown as Svc[]
    );}

function normalizeSlug(_value: string): string {_return value.toLowerCase().replace(/[^a-z0-9]+/g, _'-').replace(/(^-|-$)/g, _'');}

function extractRootSlugFromLink(_link?: string): string | null {_if (!link) return null;
  try {
    const _url = new window.URL(link);
    const _path = url.pathname.replace(/^\/+|\/+$/g, _'');
    // Accept root-level slugs like "/ai-energy-management"; ignore nested like "services/..."
    if (path && !path.includes('/')) return path;
    return null;} catch {_return null;}
}

export const getStaticPaths: GetStaticPaths = async () => {_const _services = collectAllServices();
  const _candidateSlugs = new Set<string>();

  // Gather existing root-level page slugs to avoid conflicts
  const _pagesDir = path.join(process.cwd(), _'pages');
  const _staticSlugs = new Set<string>();
  try {
    const _entries = fs.readdirSync(pagesDir, _{ withFileTypes: true});
    for (const entry of entries) {_if (entry.isFile() && /\.tsx?$/.test(entry.name)) {
        const _base = entry.name.replace(/\.(tsx|ts|jsx|js)$/i, _'');
        if (base !== 'index' && base !== '[slug]' && !base.startsWith('_')) {
          staticSlugs.add(base.toLowerCase());}
      }
    }
  } catch {}

  for (const s of services) {_const _fromLink = extractRootSlugFromLink((s as any).link);
    const _slugCandidate = fromLink || (s.id ? normalizeSlug(s.id) : (s.name ? normalizeSlug(s.name) : ''));
    if (!slugCandidate) continue;
    if (reservedTopLevelSlugs.has(slugCandidate)) continue; // skip conflicts
    candidateSlugs.add(slugCandidate);}

  // Exclude any slug that conflicts with an existing root page file
  const _uniqueNonConflicting = Array.from(candidateSlugs).filter(_(slug) => !staticSlugs.has(slug));

  return {_paths: uniqueNonConflicting.map(_(slug) => ({ params: { slug} })),
    fallback: true
  };
};

export const getStaticProps: GetStaticProps = async (_{_params}) => {_// No dynamic fetching needed; the component resolves the service client-side.
  return { props: {} };
};
