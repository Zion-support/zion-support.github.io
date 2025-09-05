import React, { useMemo } from 'react',
import Head from 'next/head',
import { useRouter } from 'next/router',
import { Phone, Mail, MapPin, Check, ArrowRight, Star } from 'lucide-react',
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground',
import Button from '../components/ui/Button',
import { enhancedRealMicroSaasServices } from '../data/enhanced-real-micro-saas-services',
import { extraServices } from '../data/extra-services',
import { additionalEnhancedServices } from '../data/additional-real-services',
import { innovativeAIServices } from '../data/innovative-ai-services',
import { quantumSpaceServices } from '../data/quantum-space-services',
import { enterpriseITServices } from '../data/enterprise-it-services',
import { newRealServices } from '../data/new-real-services',
import { marketReadyServices } from '../data/market-ready-services',
import { nextGenerationAIServices } from '../data/next-generation-ai-services',
import { emergingTechnologyServices } from '../data/emerging-technology-services',
import { comprehensiveITSolutions } from '../data/comprehensive-it-solutions',
import { marketValidatedServices } from '../data/market-validated-services',
import { newRealInnovations } from '../data/new-real-innovations',
import { realMarketServices } from '../data/real-market-services',
import { new2025Services } from '../data/new-2025-services',
import { curatedMarketServices } from '../data/curated-market-services',
import { cuttingEdgeITServices } from '../data/cutting-edge-it-services',
import { nextGenAIServices } from '../data/next-gen-ai-services',
import { industryRealServices } from '../data/industry-real-services',
import { professionalServices } from '../data/professional-services',
import { realVerifiedServices } from '../data/real-verified-services',
export default function DynamicServicePage() {
  const router = useRouter(),
  const { slug } = router.query as { slug?: string },

  const service = useMemo(() => {
    if (!slug) return undefined,
    const all: any[] = ([] as any[])
      .concat(
        enhancedRealMicroSaasServices as any,
        extraServices as any,
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
        professionalServices as any,
        realEnterpriseServices2025 as any,
        augmentedServicesBatch3 as any,
        real2025Q3Additions as any,
        realQ4Services2025 as any,
        real2026Q1Additions as any,
        ultimateFuturisticServices2025 as any
      ),
    const byLink = all.find(s => {
      try {
        const url = new URL(s.link),
        return url.pathname.replace(/^\/+|\/+$/g, '') === slug.replace(/^\/+|\/+$/g, '')
      } catch {
        return false
      }
    }),
    if (byLink) return byLink,
    const byId = enhancedRealMicroSaasServices.find(s => s.id === slug),
    if (byId) return byId,
    return undefined
  }, [slug]),

  if (!service) {
    return (
      <UltraAdvancedFuturisticBackground>
<<<<<<< HEAD
        <div className="min-h-screen pt-28 pb-20 px-4 sm: px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">Service not found</h1>
            <p className="text-gray-300 mb-8">We couldn't find the service you were looking for. Explore all services below.</p>
            <Button href="/services" variant="quantum" size="lg">Browse Services</Button>
=======
        <div className=&quot;min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8&quot;>
          <div className=&quot;max-w-3xl mx-auto text-center&quot;>
            <h1 className=&quot;text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6&quot;>Service not found</h1>
            <p className=&quot;text-gray-300 mb-8&quot;>We couldn't find the service you were looking for. Explore all services below.</p>
            <Button href=&quot;/services&quot; variant=&quot;quantum&quot; size=&quot;lg&quot;>Browse Services</Button>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
          </div>
        </div>
      </UltraAdvancedFuturisticBackground>
    )
  }

  const canonicalUrl = `https://ziontechgroup.com/${slug}`,

  return (
    <UltraAdvancedFuturisticBackground>
      <Head>
        <title>{service.name} - Zion Tech Group</title>
        <meta name=&quot;description&quot; content={service.description} />
        <link rel=&quot;canonical&quot; href={canonicalUrl} />
      </Head>
      <div className=&quot;min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8&quot;>
        <div className=&quot;max-w-6xl mx-auto&quot;>
          <div className=&quot;text-center mb-10&quot;>
            <h1 className=&quot;text-5xl md:text-7xl font-bold bg-gradient-to-r from-indigo-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent flex items-center justify-center gap-3&quot;>
              <span className=&quot;text-5xl&quot; aria-hidden>{service.icon}</span>{service.name}
            </h1>
            <p className=&quot;mt-4 text-xl text-slate-300 max-w-3xl mx-auto&quot;>{service.tagline}</p>
          </div>

          <div className=&quot;grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12&quot;>
            <div className=&quot;lg:col-span-2 bg-black/30 rounded-2xl border border-cyan-500/30 p-6&quot;>
              <h2 className=&quot;text-2xl font-semibold mb-4&quot;>What you get</h2>
              <p className=&quot;text-slate-300 mb-6&quot;>{service.description}</p>
              <ul className=&quot;grid grid-cols-1 md:grid-cols-2 gap-3&quot;>
                {service.features.slice(0, 16).map((feat, i) => (
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
                <div className=&quot;flex items-center text-yellow-400&quot;><Star className=&quot;w-4 h-4 mr-1&quot; />{service.rating?.toFixed ? service.rating.toFixed(1) : service.rating}</div>
              </div>
              <Button href=&quot;/contact&quot; variant=&quot;quantum&quot; size=&quot;lg&quot; className=&quot;w-full&quot;>Start Free Trial<ArrowRight className=&quot;w-5 h-5 ml-2&quot; /></Button>
              <div className=&quot;mt-6 space-y-3 text-sm text-slate-300&quot;>
                <div className=&quot;flex items-center space-x-2&quot;><Phone className=&quot;w-4 h-4 text-cyan-400&quot; /><span>{service.contactInfo.mobile}</span></div>
                <div className=&quot;flex items-center space-x-2&quot;><Mail className=&quot;w-4 h-4 text-purple-400&quot; /><span>{service.contactInfo.email}</span></div>
                <div className=&quot;flex items-center space-x-2&quot;><MapPin className=&quot;w-4 h-4 text-green-400&quot; /><span className=&quot;text-xs&quot;>{service.contactInfo.address}</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </UltraAdvancedFuturisticBackground>
  )
}

// Static export support: generate root-level pages for service slugs
type Svc = typeof enhancedRealMicroSaasServices[number],

function collectAllServices(): Svc[] {
  return enhancedRealMicroSaasServices
    .concat(
      extraServices as Svc[],
      additionalEnhancedServices as Svc[],
      innovativeAIServices as Svc[],
      quantumSpaceServices as Svc[],
      enterpriseITServices as Svc[],
      newRealServices as Svc[],
      marketReadyServices as Svc[],
      nextGenerationAIServices as Svc[],
      emergingTechnologyServices as Svc[],
      comprehensiveITSolutions as Svc[],
      marketValidatedServices as Svc[],
      newRealInnovations as Svc[],
      realMarketServices as Svc[],
      realVerifiedServices as unknown as Svc[]
    )
}

function normalizeSlug(value: string): string {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

function extractRootSlugFromLink(link?: string): string | null {
  if (!link) return null,
  try {
<<<<<<< HEAD
    const url = new URL(link),
    const path = url.pathname.replace(/^\/+|\/+$/g, ''),
    // Accept root-level slugs like "/ai-energy-management", ignore nested like "services/..."
    if (path && !path.includes('/')) return path,
    return null
=======
    const url = new URL(link);
    const path = url.pathname.replace(/^\/+|\/+$/g, '');
    // Accept root-level slugs like &quot;/ai-energy-management&quot;; ignore nested like &quot;services/...&quot;
    if (path && !path.includes('/')) return path;
    return null;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
  } catch {
    return null
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const services = collectAllServices(),
  const candidateSlugs = new Set<string>(),

  // Gather existing root-level page slugs to avoid conflicts
  const pagesDir = path.join(process.cwd(), 'pages'),
  const staticSlugs = new Set<string>(),
  try {
    const entries = fs.readdirSync(pagesDir, { withFileTypes: true }),
    for (const entry of entries) {
      if (entry.isFile() && /\.tsx?$/.test(entry.name)) {
        const base = entry.name.replace(/\.(tsx|ts|jsx|js)$/i, ''),
        if (base !== 'index' && base !== '[slug]' && !base.startsWith('_')) {
          staticSlugs.add(base.toLowerCase())
        }
      }
    }
  } catch {}

  for (const s of services) {
    const fromLink = extractRootSlugFromLink((s as any).link),
    const slugCandidate = fromLink || (s.id ? normalizeSlug(s.id) : (s.name ? normalizeSlug(s.name) : '')),
    if (!slugCandidate) continue,
    if (reservedTopLevelSlugs.has(slugCandidate)) continue, // skip conflicts
    candidateSlugs.add(slugCandidate)
  }

  // Exclude any slug that conflicts with an existing root page file
  const uniqueNonConflicting = Array.from(candidateSlugs).filter((slug) => !staticSlugs.has(slug)),

  return {
    paths: uniqueNonConflicting.map((slug) => ({ params: { slug } })),
    fallback: true
  }
},

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // No dynamic fetching needed, the component resolves the service client-side.
  return { props: {} }
},
