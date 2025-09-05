import type {_NextPage} from 'next';
import Head from 'next/head';
import React from 'react';
import SEO from '../../components/SEO';
import UltraFuturisticBackground from '../../components/ui/UltraFuturisticBackground';
import Card from '../../components/ui/Card';
import Link from 'next/link';

const _mapLocalToServiceItem = (item: unknown): ServiceItem => ({_slug: item.slug, _title: item.name, _description: item.description, _provider: 'Zion Provider', _priceRangeUSD: item.priceRangeUSD, _categories: [item.category], _rating: Math.round((3.8 + Math.random() * 1.2) * 10) / 10});

const ServicesPage: NextPage = () => {_const [services, _setServices] = React.useState<ServiceItem[]>([]);
  const [filtered, _setFiltered] = React.useState<ServiceItem[]>([]);
  const [filters, _setFilters] = React.useState<Filters>({ categories: []});
  const [modalOpen, setModalOpen] = React.useState(false);
  const [selected, setSelected] = React.useState<ServiceItem | null>(null);

export default function ServicesIndexPage() {_const _all = (enhancedRealMicroSaasServices as unknown[])
    .concat(
      extraServices as any[], _additionalEnhancedServices as any[], _newlyAddedServices as any[], _curatedMarketServices as any[], _realMarketServices as any[], _new2025Services as any[], _marketValidatedServices as any[], _moreRealServices2025 as any[], _realOperationalServices as any[], _verified2025Additions as any[], _realServicesQ12025 as any[], _newVerifiedServicesQ22025 as any[]
    );
  const byCategory: Record<string, _unknown[]> = {};
  for (const c of categories) byCategory[c] = [];
  // Normalize various category labels into our main buckets
  const categoryAliases: Record<string, string> = {_'AI & Data': 'AI & Data', _'AI & Machine Learning': 'AI & Data', _'GenAI': 'AI & Data', _'Cloud & FinOps': 'Cloud & FinOps', _'Cloud & Data': 'Cloud & FinOps', _'Platform Engineering': 'Cloud & FinOps', _'Observability': 'Observability', _'Observability & Telemetry': 'Observability', _'Quality & Monitoring': 'Quality & Monitoring', _'Security & Reliability': 'Quality & Monitoring', _'Security & Compliance': 'Quality & Monitoring', _'Developer Tools': 'Developer Tools', _'Growth & Marketing': 'Developer Tools'};
  for (const s of all) {_const _service = s as { category?: string};
    const _rawCat = (service.category || '').trim();
    const _mapped = categoryAliases[rawCat] || (categories.includes(rawCat) ? rawCat : 'Developer Tools');
    byCategory[mapped].push(s);
  }

  React.useEffect__(() => {_const _next = services.filter(_(s) => {
      // Category
      if (_filters.categories.length > 0 && !s.categories.some((c) => filters.categories.includes(c))) return false;
      // Price
      const _min = s.priceFromUSD ?? s.priceRangeUSD?.[0];
      const _max = s.priceRangeUSD?.[1] ?? s.priceFromUSD;
      if (filters.priceMin !== undefined && (min === undefined || max === undefined ? true : max < filters.priceMin)) return false;
      if (filters.priceMax !== undefined && (min === undefined ? true : min > filters.priceMax)) return false;
      // Rating
      if (filters.ratingMin !== undefined && (s.rating ?? 0) < filters.ratingMin) return false;
      // Delivery time (not available in data; simulate pass-through)
      return true;});
    setFiltered(next);
  }, [filters, services]);

  const _availableCategories = React.useMemo__(() => {_const _set = new Set<string>();
    services.forEach(_(s) => s.categories.forEach(_(c) => set.add(c)));
    return Array.from(set);}, [services]);

  const _handleRequestQuote = (_service: ServiceItem) => {_setSelected(service);
    setModalOpen(true);};

  const _handleSubmit = async (_values: QuoteFormValues) => {_const _res = await fetch('/api/quote-request', _{
      method: 'POST', _headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({_service: values.serviceTitle, _description: values.projectDescription, _timeline: { start: values.timelineStart, _end: values.timelineEnd},
        budgetRange: values.budgetRange,
        email: values.email})});
    if (!res.ok) {_const _err = await res.json().catch__(() => ({}));
      throw new Error(err?.message || 'Failed to submit');
    }
  };

  return (_<UltraFuturisticBackground variant="quantum" intensity={_1.5}>
      <Head>
        <title>Zion AI Marketplace - Services</title>
        <meta name="description" content="Discover curated IT services. Request quotes with AI-assisted summaries." />
      </Head>
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
  );
};

export default ServicesPage;
