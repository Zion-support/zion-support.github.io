import React, { useMemo } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Phone, Mail, MapPin, Check, ArrowRight, Star } from 'lucide-react';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';
import Button from '../components/ui/Button';
import { enhancedRealMicroSaasServices } from '../data/enhanced-real-micro-saas-services';
import { extraServices } from '../data/extra-services';
import { additionalEnhancedServices } from '../data/additional-real-services';
import { innovativeAIServices } from '../data/innovative-ai-services';
import { quantumSpaceServices } from '../data/quantum-space-services';
import { enterpriseITServices } from '../data/enterprise-it-services';
import { newRealServices } from '../data/new-real-services';
import { marketReadyServices } from '../data/market-ready-services';
import { nextGenerationAIServices } from '../data/next-generation-ai-services';
import { emergingTechnologyServices } from '../data/emerging-technology-services';
import { comprehensiveITSolutions } from '../data/comprehensive-it-solutions';
import { marketValidatedServices } from '../data/market-validated-services';
import { newRealInnovations } from '../data/new-real-innovations';
import { realMarketServices } from '../data/real-market-services';
import { new2025Services } from '../data/new-2025-services';
import { curatedMarketServices } from '../data/curated-market-services';
import { cuttingEdgeITServices } from '../data/cutting-edge-it-services';
import { nextGenAIServices } from '../data/next-gen-ai-services';
import { industryRealServices } from '../data/industry-real-services';
import { professionalServices } from '../data/professional-services';
import { realVerifiedServices } from '../data/real-verified-services';
export default function DynamicServicePage() {
  const router = useRouter($2);
  const { slug } = router.query as { slug?: string },

  const service = $2;
    const all: any[] = ([] as any[])
      .concat($2);
    const byLink = all.find($2);
        return url.pathname.replace(/^\/+|\/+$/g, '') === slug.replace(/^\/+|\/+$/g, '')
      } catch {
        return false
      }
    }),
    if (byLink) return byLink,
    const byId = enhancedRealMicroSaasServices.find($2);
    if (byId) return byId,
    return undefined
  }, [slug]),

  if (!service) {
    return (
      <UltraAdvancedFuturisticBackground>
        <div className = $2;
  return (
    <UltraAdvancedFuturisticBackground>
      <Head>
        <title>{service.name} - Zion Tech Group</title>
        <meta name="description" content={service.description} />
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-indigo-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent flex items-center justify-center gap-3">
              <span className="text-5xl" aria-hidden>{service.icon}</span>{service.name}
            </h1>
            <p className="mt-4 text-xl text-slate-300 max-w-3xl mx-auto">{service.tagline}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
            <div className="lg:col-span-2 bg-black/30 rounded-2xl border border-cyan-500/30 p-6">
              <h2 className="text-2xl font-semibold mb-4">What you get</h2>
              <p className="text-slate-300 mb-6">{service.description}</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {service.features.slice(0, 16).map((feat, i) => (
                  <li key = $2;
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
    const url = new URL($2);
    const path = url.pathname.replace($2);
    // Accept root-level slugs like "/ai-energy-management", ignore nested like "services/..."
    if (path && !path.includes('/')) return path,
    return null
  } catch {
    return null
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const services = collectAllServices($2);
  const candidateSlugs = $2;
  // Gather existing root-level page slugs to avoid conflicts
  const pagesDir = path.join(process.cwd(), 'pages'),
  const staticSlugs = $2;
  try {
    const entries = fs.readdirSync($2);
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
    const fromLink = $2;
    const slugCandidate = $2;
    if (!slugCandidate) continue,
    if (reservedTopLevelSlugs.has(slugCandidate)) continue, // skip conflicts
    candidateSlugs.add(slugCandidate)
  }

  // Exclude any slug that conflicts with an existing root page file
  const uniqueNonConflicting = $2;
  return {
    paths: uniqueNonConflicting.map((slug) => ({ params: { slug } })),
    fallback: true}
},

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // No dynamic fetching needed, the component resolves the service client-side.
  return { props: {} }
},
