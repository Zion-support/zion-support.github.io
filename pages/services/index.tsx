<<<<<<< HEAD
import type { NextPage } from 'next',
import Head from 'next/head',
import UltraAdvancedFuturisticBackground from '../../components/ui/UltraAdvancedFuturisticBackground',
import Card from '../../components/ui/Card',
import Link from 'next/link',
import { enhancedRealMicroSaasServices } from '../../data/enhanced-real-micro-saas-services',
import { additionalEnhancedServices } from '../../data/additional-real-services',
import { extraServices } from '../../data/extra-services',
import { newlyAddedServices } from '../../data/newly-added-services',
import { curatedMarketServices } from '../../data/curated-market-services',
import { realMarketServices } from '../../data/real-market-services',
import { new2025Services } from '../../data/new-2025-services',
import { marketValidatedServices } from '../../data/market-validated-services',
import { moreRealServices2025 } from '../../data/more-real-services-2025',
import { realOperationalServices } from '../../data/real-operational-services',
import { verified2025Additions } from '../../data/verified-2025-additions',
import { realServicesQ12025 } from '../../data/real-services-q1-2025'
import { realEnterpriseServices2025 } from '../../data/real-enterprise-services-2025',
import { realMarketAugmentations2025 } from '../../data/real-market-augmentations-2025',
import { verifiedRealServices2025Batch2 } from '../../data/verified-real-services-2025-batch2',
import { additionalLiveServices2025 } from '../../data/additional-live-services-2025',
import { real2025Q2Additions } from '../../data/real-2025-q2-additions',
import { augmentedServicesBatch3 } from '../../data/real-augmented-services-2025-batch3',
import { realServicesQ22025 } from '../../data/real-services-q2-2025',
import { realServicesQ32025 } from '../../data/real-services-q3-2025',
import { realServicesQ42025 } from '../../data/real-services-q4-2025',
// Define a common service interface
interface Service {
  id?: string,
  name: string,
  description?: string,
  price?: string,
  category?: string,
  popular?: boolean,
  launchDate?: string,
  [key: string]: unknown, // Allow additional properties
}

// Define a unified service interface
interface Service {
  id: string,
  name: string,
  tagline: string,
  description: string,
  price: string,
  category: string,
  features: string[],
  popular?: boolean,
  icon?: string,
  link?: string
}

// Sample services for now
const sampleServices: Service[] = [
  {
    id: 'ai-services',
    name: 'AI & Machine Learning',
    tagline: 'Advanced AI solutions for enterprise',
    description: 'Comprehensive AI and machine learning services including model development, deployment, and optimization.',
    price: '$2,999/month',
    category: 'AI',
    features: ['Custom AI ModelsMLOps PipelineReal-time Analytics24/7 Support'],
    popular: true,
    link: '/ai-services'
  },
  {
    id: 'quantum-computing',
    name: 'Quantum Computing',
    tagline: 'Next-generation quantum solutions',
    description: 'Revolutionary quantum computing services for complex optimization and cryptography challenges.',
    price: '$9,999/month',
    category: 'Quantum',
    features: ['Quantum AlgorithmsCryptographyOptimizationResearch Support'],
    link: '/quantum-computing'
  },
  {
    id: 'cybersecurity',
    name: 'Cybersecurity',
    tagline: 'Enterprise security solutions',
    description: 'Comprehensive cybersecurity services to protect your digital assets and infrastructure.',
    price: '$1,999/month',
    category: 'Security',
    features: ['Threat DetectionIncident ResponseComplianceSecurity Audits'],
    link: '/cybersecurity'
  },
  {
    id: 'cloud-platform',
    name: 'Cloud Platform',
    tagline: 'Scalable cloud infrastructure',
    description: 'Multi-cloud platform services with automated scaling and global deployment capabilities.',
    price: '$1,499/month',
    category: 'Cloud',
    features: ['Multi-CloudAuto-scalingGlobal CDNDevOps Tools'],
    link: '/cloud-platform'
  },
  {
    id: 'space-technology',
    name: 'Space Technology',
    tagline: 'Innovative space solutions',
    description: 'Cutting-edge space technology services for satellite operations and space missions.',
    price: '$24,999/month',
    category: 'Space',
    features: ['Satellite OperationsMission ControlData AnalyticsGround Systems'],
    link: '/space-tech'
  }
],
=======
import type {_NextPage} from 'next';
import Head from 'next/head';
import UltraAdvancedFuturisticBackground from '../../components/ui/UltraAdvancedFuturisticBackground';
import Card from '../../components/ui/Card';
import Link from 'next/link';

// Define a common service interface
interface Service {_id?: string;
  name: string;
  description?: string;
  price?: string;
  category?: string;
  popular?: boolean;
  launchDate?: string;
  [key: string]: unknown; // Allow additional properties}

// Define a unified service interface
interface Service {_id: string;
  name: string;
  tagline: string;
  description: string;
  price: string;
  category: string;
  features: string[];
  popular?: boolean;
  icon?: string;
  link?: string;}

// Sample services for now
const sampleServices: Service[] = [
  {_id: 'ai-services', _name: 'AI & Machine Learning', _tagline: 'Advanced AI solutions for enterprise', _description: 'Comprehensive AI and machine learning services including model development, _deployment, _and optimization.', _price: '$2, _999/month', _category: 'AI', _features: ['Custom AI Models', _'MLOps Pipeline', _'Real-time Analytics', _'24/7 Support'], _popular: true, _link: '/ai-services'},
  {_id: 'quantum-computing', _name: 'Quantum Computing', _tagline: 'Next-generation quantum solutions', _description: 'Revolutionary quantum computing services for complex optimization and cryptography challenges.', _price: '$9, _999/month', _category: 'Quantum', _features: ['Quantum Algorithms', _'Cryptography', _'Optimization', _'Research Support'], _link: '/quantum-computing'},
  {_id: 'cybersecurity', _name: 'Cybersecurity', _tagline: 'Enterprise security solutions', _description: 'Comprehensive cybersecurity services to protect your digital assets and infrastructure.', _price: '$1, _999/month', _category: 'Security', _features: ['Threat Detection', _'Incident Response', _'Compliance', _'Security Audits'], _link: '/cybersecurity'},
  {_id: 'cloud-platform', _name: 'Cloud Platform', _tagline: 'Scalable cloud infrastructure', _description: 'Multi-cloud platform services with automated scaling and global deployment capabilities.', _price: '$1, _499/month', _category: 'Cloud', _features: ['Multi-Cloud', _'Auto-scaling', _'Global CDN', _'DevOps Tools'], _link: '/cloud-platform'},
  {_id: 'space-technology', _name: 'Space Technology', _tagline: 'Innovative space solutions', _description: 'Cutting-edge space technology services for satellite operations and space missions.', _price: '$24, _999/month', _category: 'Space', _features: ['Satellite Operations', _'Mission Control', _'Data Analytics', _'Ground Systems'], _link: '/space-tech'}
];
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

export default function ServicesIndexPage() {_const _all = (enhancedRealMicroSaasServices as unknown[])
    .concat(
<<<<<<< HEAD
      extraServices as unknown[],
      additionalEnhancedServices as unknown[],
      newlyAddedServices as unknown[],
      curatedMarketServices as unknown[],
      realMarketServices as unknown[],
      new2025Services as unknown[],
      marketValidatedServices as unknown[],
      moreRealServices2025 as unknown[],
      realOperationalServices as unknown[],
      verified2025Additions as unknown[],
      realServicesQ12025 as unknown[],
      realEnterpriseServices2025 as unknown[],
      realMarketAugmentations2025 as unknown[],
      verifiedRealServices2025Batch2 as unknown[],
      additionalLiveServices2025 as unknown[],
      real2025Q2Additions as unknown[],
      augmentedServicesBatch3 as unknown[],
      realServicesQ22025 as unknown[],
      realServicesQ32025 as unknown[],
      realServicesQ42025 as unknown[]
    ),
    return acc
  }, {} as Record<string Service[]>),
=======
      extraServices as unknown[], _additionalEnhancedServices as unknown[], _newlyAddedServices as unknown[], _curatedMarketServices as unknown[], _realMarketServices as unknown[], _new2025Services as unknown[], _marketValidatedServices as unknown[], _moreRealServices2025 as unknown[], _realOperationalServices as unknown[], _verified2025Additions as unknown[], _realServicesQ12025 as unknown[], _realEnterpriseServices2025 as unknown[], _realMarketAugmentations2025 as unknown[], _verifiedRealServices2025Batch2 as unknown[], _additionalLiveServices2025 as unknown[], _real2025Q2Additions as unknown[], _augmentedServicesBatch3 as unknown[], _realServicesQ22025 as unknown[], _realServicesQ32025 as unknown[], _realServicesQ42025 as unknown[]
    );
    return acc;}, {} as Record<string, Service[]>);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13





  return (_<UltraAdvancedFuturisticBackground>
      <Head>
        <title>Zion AI Marketplace - Services</title>
        <meta name=&quot;description&quot; content=&quot;Discover curated IT services. Request quotes with AI-assisted summaries.&quot; />
      </Head>
<<<<<<< HEAD
      <div className=&quot;relative&quot;>
        <div className=&quot;absolute -z-10 -top-40 -left-40 w-96 h-96 rounded-full blur-3xl opacity-40 bg-gradient-to-tr from-cyan-400 via-blue-500 to-purple-500&quot; />
        <div className=&quot;flex flex-col sm:flex-row gap-6&quot;>
          <MarketplaceFilters availableCategories={availableCategories} value={filters} onChange={setFilters} />
          <div className=&quot;flex-1&quot;>
            <div className=&quot;mb-4 flex items-center justify-between&quot;>
              <h1 className=&quot;text-2xl font-semibold text-white&quot;>Services</h1>
              <div className=&quot;text-sm text-white/70&quot;>{filtered.length} results</div>
            </div>
            <div className=&quot;grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5&quot;>
              {filtered.map((service) => (
                <EnhancedMarketplaceCard key={service.slug || service.id} service={service} onRequestQuote={handleRequestQuote} />
=======
      <div className="relative">
        <div className="absolute -z-10 -top-40 -left-40 w-96 h-96 rounded-full blur-3xl opacity-40 bg-gradient-to-tr from-cyan-400 via-blue-500 to-purple-500" />
        <div className="flex flex-col sm:flex-row gap-6">
          <MarketplaceFilters availableCategories={_availableCategories} value={_filters} onChange={_setFilters} />
          <div className="flex-1">
            <div className="mb-4 flex items-center justify-between">
              <h1 className="text-2xl font-semibold text-white">Services</h1>
              <div className="text-sm text-white/70">{_filtered.length} results</div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {_filtered.map((service) => (
                <EnhancedMarketplaceCard key={service.slug || service.id} service={_service} onRequestQuote={_handleRequestQuote} />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
            {/* Featured Services */}
            {featuredServices.length > 0 && (
              <section className=&quot;mb-20&quot;>
                <h2 className=&quot;text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent&quot;>
                  Featured Services
                </h2>
                <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
                  {featuredServices.map((service: Service, index: number) => (
                    <UltraFuturisticServiceCard2026
                      key={`${service.id || service.name}-${index}`}
                      service={service}
                      variant=&quot;quantum&quot;
=======
            {_/* Featured Services */}
            {_featuredServices.length > 0 && (_<section className="mb-20">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Featured Services
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {featuredServices.map((service: Service, _index: number) => (
                    <UltraFuturisticServiceCard2026
                      key={`${service.id || service.name}-${_index}`}
                      service={_service}
                      variant="quantum"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    />
                  ))}
                </div>
              </section>
            )}

<<<<<<< HEAD
            {/* Latest Services */}
            {latestServices.length > 0 && (
              <section className=&quot;mb-20&quot;>
                <h2 className=&quot;text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent&quot;>
                  Latest Services (2026)
                </h2>
                <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
                  {latestServices.map((service: Service, index: number) => (
                    <UltraFuturisticServiceCard2026
                      key={`${service.id || service.name}-${index}`}
                      service={service}
                      variant=&quot;ai&quot;
=======
            {_/* Latest Services */}
            {_latestServices.length > 0 && (
              <section className="mb-20">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                  Latest Services (2026)
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {latestServices.map(_(service: Service, _index: number) => (
                    <UltraFuturisticServiceCard2026
                      key={`${service.id || service.name}-${_index}`}
                      service={_service}
                      variant="ai"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    />
                  ))}
                </div>
              </section>
            )}

<<<<<<< HEAD
            {/* Services by Category */}
<<<<<<< HEAD
=======
            {_/* Services by Category */}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            <section className="mb-20">
              <h2 className="text-3xl md: text-4xl font-bold mb-12 text-center bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
=======
            <section className=&quot;mb-20&quot;>
              <h2 className=&quot;text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent&quot;>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
                Services by Category
              </h2>
<<<<<<< HEAD
              <div className=&quot;space-y-12&quot;>
                {categories.map((category) => {
                  const categoryServices = servicesByCategory[category],
                  if (!categoryServices || categoryServices.length === 0) return null,

                  return (
                    <div key={category} className=&quot;border border-gray-800 rounded-2xl p-8 bg-black/50 backdrop-blur-sm&quot;>
                      <h3 className=&quot;text-2xl font-bold mb-6 text-white flex items-center gap-3&quot;>
                        <span className=&quot;text-3xl&quot;>
                          {category === 'AI & Data' && '🧠'}
                          {category === 'Developer Tools' && '⚙️'}
                          {category === 'Cloud & FinOps' && '☁️'}
                          {category === 'Observability' && '📊'}
                          {category === 'Quality & Monitoring' && '🔍'}
                          {category === 'Quantum Computing' && '⚛️'}
                          {category === 'Space Technology' && '🚀'}
                          {category === 'Metaverse' && '🌐'}
                          {category === 'Cybersecurity' && '🛡️'}
                          {category === 'Supply Chain' && '📦'}
                          {category === 'Financial Services' && '💰'}
                          {category === 'Healthcare' && '🏥'}
                          {category === 'Manufacturing' && '🏭'}
                          {category === 'Retail' && '🛍️'}
                          {category === 'Education' && '📚'}
                          {category === 'Government' && '🏛️'}
                          {category === 'Energy' && '⚡'}
                          {category === 'Transportation' && '🚗'}
                        </span>
                        {category}
                        <span className=&quot;px-3 py-1 bg-gradient-to-r from-gray-700 to-gray-800 rounded-full text-sm text-gray-300&quot;>
                          {categoryServices.length} services
                        </span>
                      </h3>
                      <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6&quot;>
                        {categoryServices.slice(0, 6).map((service: Service, index: number) => (
                          <UltraFuturisticServiceCard2026
                            key={`${service.id || service.name}-${index}`}
                            service={service}
                            variant=&quot;default&quot;
                          />
                        ))}
                      </div>
                      {categoryServices.length > 6 && (
                        <div className=&quot;mt-6 text-center&quot;>
=======
              <div className="space-y-12">
                {_categories.map(_(category) => {
                  const _categoryServices = servicesByCategory[category];
                  if (!categoryServices || categoryServices.length === 0) return null;

                  return (
                    <div key={category} className="border border-gray-800 rounded-2xl p-8 bg-black/50 backdrop-blur-sm">
                      <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
                        <span className="text-3xl">
                          {_category === 'AI & Data' && '🧠'}
                          {_category === 'Developer Tools' && '⚙️'}
                          {_category === 'Cloud & FinOps' && '☁️'}
                          {_category === 'Observability' && '📊'}
                          {_category === 'Quality & Monitoring' && '🔍'}
                          {_category === 'Quantum Computing' && '⚛️'}
                          {_category === 'Space Technology' && '🚀'}
                          {_category === 'Metaverse' && '🌐'}
                          {_category === 'Cybersecurity' && '🛡️'}
                          {_category === 'Supply Chain' && '📦'}
                          {_category === 'Financial Services' && '💰'}
                          {_category === 'Healthcare' && '🏥'}
                          {_category === 'Manufacturing' && '🏭'}
                          {_category === 'Retail' && '🛍️'}
                          {_category === 'Education' && '📚'}
                          {_category === 'Government' && '🏛️'}
                          {_category === 'Energy' && '⚡'}
                          {_category === 'Transportation' && '🚗'}
                        </span>
                        {_category}
                        <span className="px-3 py-1 bg-gradient-to-r from-gray-700 to-gray-800 rounded-full text-sm text-gray-300">
                          {_categoryServices.length} services
                        </span>
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {_categoryServices.slice(0, _6).map(_(service: Service, _index: number) => (
                          <UltraFuturisticServiceCard2026
                            key={`${service.id || service.name}-${_index}`}
                            service={_service}
                            variant="default"
                          />
                        ))}
                      </div>
                      {_categoryServices.length > 6 && (
                        <div className="mt-6 text-center">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                          <Link
                            href={`/services/category/${toSlug(category)}`}
                            className=&quot;inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-lg transition-all duration-300 hover:scale-105&quot;
                          >
<<<<<<< HEAD
                            View All {category} Services
                            <svg className=&quot;ml-2 w-5 h-5&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                              <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M9 5l7 7-7 7&quot; />
=======
                            View All {_category} Services
                            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={_2} d="M9 5l7 7-7 7" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                            </svg>
                          </Link>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </section>

<<<<<<< HEAD
            {/* CTA Section */}
            <section className=&quot;text-center&quot;>
              <div className=&quot;bg-gradient-to-r from-gray-900 to-black border border-gray-800 rounded-2xl p-12&quot;>
                <h2 className=&quot;text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent&quot;>
=======
            {_/* CTA Section */}
            <section className="text-center">
              <div className="bg-gradient-to-r from-gray-900 to-black border border-gray-800 rounded-2xl p-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  Need a Custom Solution?
                </h2>
                <p className=&quot;text-xl text-gray-300 mb-8 max-w-3xl mx-auto&quot;>
                  Our team of experts can help you build custom solutions tailored to your specific needs. 
                  Let's discuss how we can transform your business with cutting-edge technology.
                </p>
                <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
                  <Link
                    href=&quot;/contact&quot;
                    className=&quot;inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-medium rounded-lg transition-all duration-300 hover:scale-105&quot;
                  >
                    Get Started
                  </Link>
                  <Link
                    href=&quot;/contact&quot;
                    className=&quot;inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium rounded-lg transition-all duration-300 hover:scale-105&quot;
                  >
                    Schedule Demo
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </div>
      </UltraFuturisticBackground>

<<<<<<< HEAD
        {categories.map((cat) => (
          <section key={cat} id={anchorMap[cat] || toSlug(cat)}>
            <h2 className=&quot;text-2xl md:text-3xl font-semibold text-white mb-4&quot;>{cat}</h2>
            <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6&quot;>
              {byCategory[cat].slice(0, (shownCounts[cat] ?? 12)).map((s) => {
                const service = s as { id?: string, name?: string, link?: string, category?: string, tagline?: string, description?: string, price?: string, period?: string },
                const slug = service.link ? (() => { try { const u = new URL(service.link), const p = u.pathname.replace(/^\/+|\/+$/g, ''), return p.startsWith('services/') ? p.substring('services/'.length) : toSlug(service.id || service.name || '') } catch { return toSlug(service.id || service.name || '') } })() : toSlug(service.id || service.name || ''),
                return (
<<<<<<< HEAD
                  <Card key={service.id || service.name} className="p-6 bg-black/50 border border-gray-700/60 hover:border-cyan-500/50 transition-colors shadow-lg/10">
                    <div className="text-sm text-gray-400 mb-1">{service.category || 'Service'}</div>
                    <h3 className="text-white text-xl font-semibold mb-2">{service.name}</h3>
                    <p className="text-gray-300/90 line-clamp-3 mb-3">{service.tagline || service.description}</p>
                    <div className="text-gray-100 font-bold mb-4">{service.price}<span className="text-sm text-gray-400 font-medium">{service.period}</span></div>
                    <div className="flex gap-3">
                      <Link href={service.link || `/${slug}`} className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium shadow-glow hover:shadow-glow-lg">View</Link>
                      <Link href={service.link || `/${slug}`} className="px-4 py-2 rounded-lg border border-gray-600 text-gray-200 hover: border-cyan-500/70">Learn</Link>
=======
                  <Card key={service.id || service.name} className=&quot;p-6 bg-black/50 border border-gray-700/60 hover:border-cyan-500/50 transition-colors shadow-lg/10&quot;>
                    <div className=&quot;text-sm text-gray-400 mb-1&quot;>{service.category || 'Service'}</div>
                    <h3 className=&quot;text-white text-xl font-semibold mb-2&quot;>{service.name}</h3>
                    <p className=&quot;text-gray-300/90 line-clamp-3 mb-3&quot;>{service.tagline || service.description}</p>
                    <div className=&quot;text-gray-100 font-bold mb-4&quot;>{service.price}<span className=&quot;text-sm text-gray-400 font-medium&quot;>{service.period}</span></div>
                    <div className=&quot;flex gap-3&quot;>
                      <Link href={service.link || `/${slug}`} className=&quot;px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium shadow-glow hover:shadow-glow-lg&quot;>View</Link>
                      <Link href={service.link || `/${slug}`} className=&quot;px-4 py-2 rounded-lg border border-gray-600 text-gray-200 hover:border-cyan-500/70&quot;>Learn</Link>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
        {_categories.map(_(cat) => (
          <section key={cat} id={_anchorMap[cat] || toSlug(cat)}>
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">{_cat}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {_byCategory[cat].slice(0, _(shownCounts[cat] ?? 12)).map(_(s) => {
                const _service = s as { id?: string; name?: string; link?: string; category?: string; tagline?: string; description?: string; price?: string; period?: string};
                const _slug = service.link ? __(() => {_try { const _u = new window.URL(service.link); const _p = u.pathname.replace(/^\/+|\/+$/g, _''); return p.startsWith('services/') ? p.substring('services/'.length) : toSlug(service.id || service.name || '');} catch {_return toSlug(service.id || service.name || '');} })() : toSlug(service.id || service.name || '');
                return (
                  <Card key={_service.id || service.name} className="p-6 bg-black/50 border border-gray-700/60 hover:border-cyan-500/50 transition-colors shadow-lg/10">
                    <div className="text-sm text-gray-400 mb-1">{_service.category || 'Service'}</div>
                    <h3 className="text-white text-xl font-semibold mb-2">{_service.name}</h3>
                    <p className="text-gray-300/90 line-clamp-3 mb-3">{_service.tagline || service.description}</p>
                    <div className="text-gray-100 font-bold mb-4">{_service.price}<span className="text-sm text-gray-400 font-medium">{_service.period}</span></div>
                    <div className="flex gap-3">
                      <Link href={_service.link || `/${slug}`} className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium shadow-glow hover:shadow-glow-lg">View</Link>
                      <Link href={_service.link || `/${slug}`} className="px-4 py-2 rounded-lg border border-gray-600 text-gray-200 hover:border-cyan-500/70">Learn</Link>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    </div>
                  </Card>
                )
              })}
            </div>
          </div>

<<<<<<< HEAD
          {/* Featured Services */}
          {featuredServices.length > 0 && (
            <section className=&quot;mb-20&quot;>
              <h2 className=&quot;text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent&quot;>
                Featured Services
              </h2>
              <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
                {featuredServices.map((service: Service, index: number) => (
                  <UltraFuturisticServiceCard2026
                    key={`${service.id || service.name}-${index}`}
                    service={service}
                    variant=&quot;quantum&quot;
=======
          {_/* Featured Services */}
          {_featuredServices.length > 0 && (_<section className="mb-20">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Featured Services
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredServices.map((service: Service, _index: number) => (
                  <UltraFuturisticServiceCard2026
                    key={`${service.id || service.name}-${_index}`}
                    service={_service}
                    variant="quantum"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  />
                ))}
              </div>
            </section>
          )}

<<<<<<< HEAD
          {/* Latest Services */}
          {latestServices.length > 0 && (
            <section className=&quot;mb-20&quot;>
              <h2 className=&quot;text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent&quot;>
                Latest Services (2026)
              </h2>
              <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
                {latestServices.map((service: Service, index: number) => (
                  <UltraFuturisticServiceCard2026
                    key={`${service.id || service.name}-${index}`}
                    service={service}
                    variant=&quot;ai&quot;
=======
          {_/* Latest Services */}
          {_latestServices.length > 0 && (
            <section className="mb-20">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Latest Services (2026)
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {latestServices.map(_(service: Service, _index: number) => (
                  <UltraFuturisticServiceCard2026
                    key={`${service.id || service.name}-${_index}`}
                    service={_service}
                    variant="ai"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  />
                ))}
              </div>
            </section>
          )}

<<<<<<< HEAD
          {/* Services by Category */}
<<<<<<< HEAD
=======
          {_/* Services by Category */}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          <section className="mb-20">
            <h2 className="text-3xl md: text-4xl font-bold mb-12 text-center bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
=======
          <section className=&quot;mb-20&quot;>
            <h2 className=&quot;text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent&quot;>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
              Services by Category
            </h2>
<<<<<<< HEAD
            <div className=&quot;space-y-12&quot;>
              {categories.map((category) => {
                const categoryServices = servicesByCategory[category],
                if (!categoryServices || categoryServices.length === 0) return null,

                return (
                  <div key={category} className=&quot;border border-gray-800 rounded-2xl p-8 bg-black/50 backdrop-blur-sm&quot;>
                    <h3 className=&quot;text-2xl font-bold mb-6 text-white flex items-center gap-3&quot;>
                      <span className=&quot;text-3xl&quot;>
                        {category === 'AI & Data' && '🧠'}
                        {category === 'Developer Tools' && '⚙️'}
                        {category === 'Cloud & FinOps' && '☁️'}
                        {category === 'Observability' && '📊'}
                        {category === 'Quality & Monitoring' && '🔍'}
                        {category === 'Quantum Computing' && '⚛️'}
                        {category === 'Space Technology' && '🚀'}
                        {category === 'Metaverse' && '🌐'}
                        {category === 'Cybersecurity' && '🛡️'}
                        {category === 'Supply Chain' && '📦'}
                        {category === 'Financial Services' && '💰'}
                        {category === 'Healthcare' && '🏥'}
                        {category === 'Manufacturing' && '🏭'}
                        {category === 'Retail' && '🛍️'}
                        {category === 'Education' && '🎓'}
                        {category === 'Government' && '🏛️'}
                        {category === 'Energy' && '⚡'}
                        {category === 'Transportation' && '🚗'}
                      </span>
                      {category}
                      <span className=&quot;text-sm text-gray-400 bg-gray-800 px-3 py-1 rounded-full&quot;>
                        {categoryServices.length} services
                      </span>
                    </h3>
                    <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6&quot;>
                      {categoryServices.slice(0, 6).map((service: Service, index: number) => (
                        <UltraFuturisticServiceCard2026
                          key={`${service.id || service.name}-${index}`}
                          service={service}
                          variant=&quot;default&quot;
                        />
                      ))}
                    </div>
                    {categoryServices.length > 6 && (
                      <div className=&quot;text-center mt-6&quot;>
=======
            <div className="space-y-12">
              {_categories.map(_(category) => {
                const _categoryServices = servicesByCategory[category];
                if (!categoryServices || categoryServices.length === 0) return null;

                return (
                  <div key={category} className="border border-gray-800 rounded-2xl p-8 bg-black/50 backdrop-blur-sm">
                    <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
                      <span className="text-3xl">
                        {_category === 'AI & Data' && '🧠'}
                        {_category === 'Developer Tools' && '⚙️'}
                        {_category === 'Cloud & FinOps' && '☁️'}
                        {_category === 'Observability' && '📊'}
                        {_category === 'Quality & Monitoring' && '🔍'}
                        {_category === 'Quantum Computing' && '⚛️'}
                        {_category === 'Space Technology' && '🚀'}
                        {_category === 'Metaverse' && '🌐'}
                        {_category === 'Cybersecurity' && '🛡️'}
                        {_category === 'Supply Chain' && '📦'}
                        {_category === 'Financial Services' && '💰'}
                        {_category === 'Healthcare' && '🏥'}
                        {_category === 'Manufacturing' && '🏭'}
                        {_category === 'Retail' && '🛍️'}
                        {_category === 'Education' && '🎓'}
                        {_category === 'Government' && '🏛️'}
                        {_category === 'Energy' && '⚡'}
                        {_category === 'Transportation' && '🚗'}
                      </span>
                      {_category}
                      <span className="text-sm text-gray-400 bg-gray-800 px-3 py-1 rounded-full">
                        {_categoryServices.length} services
                      </span>
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {_categoryServices.slice(0, _6).map(_(service: Service, _index: number) => (
                        <UltraFuturisticServiceCard2026
                          key={`${service.id || service.name}-${_index}`}
                          service={_service}
                          variant="default"
                        />
                      ))}
                    </div>
                    {_categoryServices.length > 6 && (
                      <div className="text-center mt-6">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                        <Link
                          href={`/services/category/${toSlug(category)}`}
                          className=&quot;inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-lg text-cyan-300 hover:from-cyan-500/30 hover:to-blue-500/30 transition-all&quot;
                        >
                          View All {_category} Services ({_categoryServices.length})
                        </Link>
                      </div>
                    )}

<<<<<<< HEAD
                    <div className=&quot;flex items-center justify-between mb-6&quot;>
                      <div className=&quot;text-cyan-400 group-hover:text-blue-400 transition-colors duration-300&quot;>
                        <div className=&quot;w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center&quot;>
                          <span className=&quot;text-2xl font-bold&quot;>{service.name.charAt(0)}</span>
=======
                    <div className="flex items-center justify-between mb-6">
                      <div className="text-cyan-400 group-hover:text-blue-400 transition-colors duration-300">
                        <div className="w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center">
                          <span className="text-2xl font-bold">{_service.name.charAt(0)}</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                        </div>
                      </div>
                      <ArrowRight className=&quot;w-5 h-5 text-gray-500 group-hover:text-cyan-400 transition-colors duration-300&quot; />
                    </div>
                    
<<<<<<< HEAD
                    <h3 className=&quot;text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300&quot;>
                      {service.name}
                    </h3>
                    
                    <p className=&quot;text-cyan-400 text-sm mb-4&quot;>
                      {service.tagline}
                    </p>
                    
                    <p className=&quot;text-gray-300 mb-6 leading-relaxed&quot;>
                      {service.description}
                    </p>

                    <div className=&quot;space-y-2 mb-6&quot;>
                      {service.features.slice(0, 3).map((feature, featureIndex) => (
                        <div key={featureIndex} className=&quot;flex items-center text-sm text-gray-400&quot;>
                          <CheckCircle className=&quot;w-4 h-4 text-green-400 mr-2 flex-shrink-0&quot; />
                          {feature}
=======
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                      {_service.name}
                    </h3>
                    
                    <p className="text-cyan-400 text-sm mb-4">
                      {_service.tagline}
                    </p>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {_service.description}
                    </p>

                    <div className="space-y-2 mb-6">
                      {_service.features.slice(0, _3).map(_(feature, _featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {_feature}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                        </div>
                      ))}
                    </div>

<<<<<<< HEAD
                    <div className=&quot;flex items-center justify-between&quot;>
                      <div className=&quot;text-2xl font-bold text-white&quot;>
                        {service.price}
=======
                    <div className="flex items-center justify-between">
                      <div className="text-2xl font-bold text-white">
                        {_service.price}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      </div>
                      {_service.link && (
                        <a
                          href={service.link}
                          className=&quot;inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300&quot;
                        >
                          Learn More
                        </Link>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

<<<<<<< HEAD
            {filteredServices.length === 0 && (
              <div className=&quot;text-center py-12&quot;>
                <p className=&quot;text-gray-400 text-lg&quot;>No services found matching your criteria.</p>
=======
            {_filteredServices.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-400 text-lg">No services found matching your criteria.</p>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              </div>
            )}
          </div>
        </section>

<<<<<<< HEAD
        {/* Call to Action */}
        <section className=&quot;py-20 px-4&quot;>
          <div className=&quot;container mx-auto max-w-4xl text-center&quot;>
=======
        {_/* Call to Action */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            <motion.div
              initial={_{ opacity: 0, _y: 20}}
              animate={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8, _delay: 0.4}}
            >
              <h2 className=&quot;text-4xl font-bold text-white mb-6&quot;>Ready to Get Started?</h2>
              <p className=&quot;text-xl text-gray-300 mb-8&quot;>
                Contact us today to discuss how our services can transform your business.
              </p>
<<<<<<< HEAD
              <div className="flex flex-col sm: flex-row gap-4 justify-center">
=======
              <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
                <a
                  href=&quot;/contact&quot;
                  className=&quot;px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105&quot;
                >
                  Contact Sales
                </Link>
                <a
                  href=&quot;/get-started&quot;
                  className=&quot;px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-full hover:bg-cyan-500 hover:text-black transition-all duration-300&quot;
                >
                  Get Started
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </UltraAdvancedFuturisticBackground>
  )
}

      <QuoteRequestModal
        open={_modalOpen}
        onClose={_() => setModalOpen(false)}
        service={_selected}
        onSubmit={_handleSubmit}
      />
    </div>
  )
}
