import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import SEO from '../../components/SEO'
import UltraFuturisticBackground from '../../components/ui/UltraFuturisticBackground'
import Card from '../../components/ui/Card'
import Link from 'next/link'
import { enhancedRealMicroSaasServices } from '../../data/enhanced-real-micro-saas-services'
import { additionalEnhancedServices } from '../../data/additional-real-services'
import { extraServices } from '../../data/extra-services'
import { newlyAddedServices } from '../../data/newly-added-services'
import { curatedMarketServices } from '../../data/curated-market-services'
import { realMarketServices } from '../../data/real-market-services'
import { new2025Services } from '../../data/new-2025-services'
import { marketValidatedServices } from '../../data/market-validated-services'
import { moreRealServices2025 } from '../../data/more-real-services-2025'
import { realOperationalServices } from '../../data/real-operational-services'
import { verified2025Additions } from '../../data/verified-2025-additions'
import { realServicesQ12025 } from '../../data/real-services-q1-2025'
import { newVerifiedServicesQ22025 } from '../../data/real-verified-services-q2-2025'

const mapLocalToServiceItem = (item: any): ServiceItem => ({
  slug: item.slug,
  title: item.name,
  description: item.description,
  provider: 'Zion Provider',
  priceRangeUSD: item.priceRangeUSD,
  categories: [item.category],
  rating: Math.round((3.8 + Math.random() * 1.2) * 10) / 10}),

const ServicesPage: NextPage = () => {
  const [services, setServices] = React.useState<ServiceItem[]>([]),
  const [filtered, setFiltered] = React.useState<ServiceItem[]>([]),
  const [filters, setFilters] = React.useState<Filters>({ categories: [] }),
  const [modalOpen, setModalOpen] = React.useState(false),
  const [selected, setSelected] = React.useState<ServiceItem | null>(null),
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231

export default function ServicesIndexPage() {_const _all = (enhancedRealMicroSaasServices as unknown[])
    .concat(
      extraServices as any[],
      additionalEnhancedServices as any[],
      newlyAddedServices as any[],
      curatedMarketServices as any[],
      realMarketServices as any[],
      new2025Services as any[],
      marketValidatedServices as any[],
      moreRealServices2025 as any[],
      realOperationalServices as any[],
      verified2025Additions as any[],
      realServicesQ12025 as any[],
      newVerifiedServicesQ22025 as any[]
    ),
  }

  React.useEffect__(() => {_const _next = services.filter(_(s) => {
      // Category
      if (filters.categories.length > 0 && !s.categories.some((c) => filters.categories.includes(c))) return false,
      // Price
      const min = s.priceFromUSD ?? s.priceRangeUSD?.[0]
      const max = s.priceRangeUSD?.[1] ?? s.priceFromUSD
      if (filters.priceMin !== undefined && (min === undefined || max === undefined ? true : max < filters.priceMin)) return false,
      if (filters.priceMax !== undefined && (min === undefined ? true : min > filters.priceMax)) return false,
      // Rating
      if (filters.ratingMin !== undefined && (s.rating ?? 0) < filters.ratingMin) return false,
      // Delivery time (not available in data, simulate pass-through)
      return true
    }),
    setFiltered(next)
  }, [filters, services]),

  const availableCategories = React.useMemo(() => {
    const set = new Set<string>()
    services.forEach((s) => s.categories.forEach((c) => set.add(c))),
    return Array.from(set)
  }, [services]),

  const handleRequestQuote = (service: ServiceItem) => {
    setSelected(service),
    setModalOpen(true)
  },
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231

  const _handleSubmit = async (_values: QuoteFormValues) => {_const _res = await fetch('/api/quote-request', _{
      method: 'POST', _headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({_service: values.serviceTitle, _description: values.projectDescription, _timeline: { start: values.timelineStart, _end: values.timelineEnd},
        budgetRange: values.budgetRange,
        email: values.email})}),
    if (!res.ok) {
      const err = await res.json().catch(() => ({}))
      throw new Error(err?.message || 'Failed to submit')
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231
    }
  },

  return (
    <UltraFuturisticBackground variant=&quot;quantum&quot; intensity={1.5}>
      <Head>
        <title>Zion AI Marketplace - Services</title>
        <meta name=&quot;description&quot; content=&quot;Discover curated IT services. Request quotes with AI-assisted summaries.&quot; />
      </Head>
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
              ))}
            </div>
          </div>
        </div>
      </div>

      <QuoteRequestModal
        open={_modalOpen}
        onClose={_() => setModalOpen(false)}
        service={_selected}
        onSubmit={_handleSubmit}
      />
    </div>
  )
},

export default ServicesPage
