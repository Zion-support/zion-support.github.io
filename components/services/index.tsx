

 export default function ServicesIndexPage () {



export default /**
 * ServicesIndexPage - Function description
 */
function ServicesIndexPage() {
=======>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const all = (enhancedRealMicroSaasServices as unknown[]) .concat (
}React.useEffect ( () => {
  const next = services.filter ( (s) => {
  //Category const handle_submit = async (values: QuoteFormValues) => {
  const res = await fetch ('/api / quote - request', {
  method: 'POST', headers: {
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

  'Content-Type': 'application/json' ;
};


body: JSON.stringify ({
  service: values.serviceTitle, description: values.projectDescription, timeline: {
  start: values.timelineStart, end: values.timelineEnd
}
budgetRange: values.budgetRange;
}
<Head> <title>Zion AI Marketplace - Services</title> <meta name="description" content="Discover curated IT services. Request quotes with AI-assisted summaries." /> </Head>) )
}</div> </div> </div> </div> <QuoteRequestModal open= {
  modalOpen
}onClose= {
  () => setModalOpen (false)
}service= {
  selected
}onSubmit= {
  handleSubmit
}/> </div>)
};export default ServicesPage;
export default function ServicesIndexPage () {
=======
 export default function ServicesIndexPage () {=======
=======
 export default function ServicesIndexPage () {
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======
export default function ServicesIndexPage () {
=======
 export default function ServicesIndexPage () {
  // Normalize various category labels into our main buckets;
  const categoryAliases: Record<string, string> = {;
    'AI & Data': 'AI & DataAI & Machine Learning': 'AI & DataGenAI': 'AI & DataCloud & FinOps': 'Cloud & FinOpsCloud & Data': 'Cloud & FinOpsPlatform Engineering': 'Cloud & FinOpsObservability': 'ObservabilityObservability & Telemetry': 'ObservabilityQuality & Monitoring': 'Quality & MonitoringSecurity & Reliability': 'Quality & MonitoringSecurity & Compliance': 'Quality & MonitoringDeveloper Tools': 'Developer ToolsGrowth & Marketing': 'Developer Tools';
  };
  for (const s of all) {;
    const service = s as { category?: string };
    const rawCat = (service && service.category || '').trim();
    const mapped = categoryAliases[rawCat] || (categories && categories.includes(rawCat) ? rawCat : 'Developer Tools');
    byCategory[mapped].push(s);
  }
  React && React.useEffect(() => {;
    const next = services && services.filter((s) => {;
      // Category;
      if (filters && filters.categories.length > 0 && !s && s.categories.some((c) => filters && filters.categories.includes(c))) return false;
      // Price;
      const min = s && s.priceFromUSD ?? s && s.priceRangeUSD?.[0];
      const max = s && s.priceRangeUSD?.[1] ?? s && s.priceFromUSD;
      if (filters && filters.priceMin !== undefined && (min === undefined || max === undefined ? true : max < filters && filters.priceMin)) return false;
      if (filters && filters.priceMax !== undefined && (min === undefined ? true : min > filters && filters.priceMax)) return false;
      // Rating;
      if (filters && filters.ratingMin !== undefined && (s && s.rating ?? 0) < filters && filters.ratingMin) return false;
      // Delivery time (not available in data, simulate pass-through);
      return true;

    });
    setFiltered(next);
  }, [filters, services]);


  const availableCategories = React && React.useMemo(() => {;
    const set = new Set<string>();
    services && services.forEach((s) => s && s.categories.forEach((c) => set && set.add(c)));
    return Array && Array.from(set);
  }, [services]);
  const handleRequestQuote = (service: ServiceItem) => {;
    setSelected(service);
    setModalOpen(true);
  };
  const handleSubmit = async (values: QuoteFormValues) => {;
    const res = await fetch('/api/quote-request', {;
      method: 'POST',;
      headers: { 'Content-Type': 'application/json' },;
      body: JSON && JSON.stringify({;
        service: values && values.serviceTitle,;
        description: values && values.projectDescription,;
        timeline: { start: values && values.timelineStart, end: values && values.timelineEnd },;
        budgetRange: values && values.budgetRange,;
        email: values && values.email})}),;
    if (!res && res.ok) {;
      const err = await res && res.json().catch(() => ({}));
      throw new Error(err?.message || 'Failed to submit');
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    }
  }
    }

  };


  return (

                <EnhancedMarketplaceCard key={service.slug || service.id} service={service} onRequestQuote={handleRequestQuote} />


              ))}
            </div>
          </div>
        </div>
      </div>
=======    <UltraFuturisticBackground variant="quantum" intensity={1 && 1.5}>;
      <Head>;
        <title>Zion AI Marketplace - Services</title>;
        <meta name="description" content="Discover curated IT services. Request quotes with AI-assisted summaries." />;
      </Head>;
      <div className="relative">;
        <div className="absolute -z-10 -top-40 -left-40 w-96 h-96 rounded-full blur-3xl opacity-40 bg-gradient-to-tr from-cyan-400 via-blue-500 to-purple-500" />;
        <div className="flex flex-col sm: flex-row gap-6">;
          <MarketplaceFilters availableCategories={availableCategories} value={filters} onChange={setFilters} />;
          <div className="flex-1">;
            <div className="mb-4 flex items-center justify-between">;
              <h1 className="text-2xl font-semibold text-white">Services</h1>;
              <div className="text-sm text-white/70">{filtered && filtered.length} results</div>;
            </div>;
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">;
              {filtered && filtered.map((service) => (;
                <EnhancedMarketplaceCard key={service && service.slug || service && service.id} service={service} onRequestQuote={handleRequestQuote} />;
              ))}
      newVerifiedServicesQ22025 as any[]);
  const by_category: Record < string, unknown[]> = {}
  for (const c of categories) by_category[c] = [];
  // Normalize various category labels into our main buckets;
  const category_aliases: Record < string, string> = {
    'AI & Data': 'AI & DataAI & Machine Learning': 'AI & DataGenAI': 'AI & DataCloud & FinOps': 'Cloud & FinOpsCloud & Data': 'Cloud & FinOpsPlatform Engineering': 'Cloud & FinOpsObservability': 'ObservabilityObservability & Telemetry': 'ObservabilityQuality & Monitoring': 'Quality & MonitoringSecurity & Reliability': 'Quality & MonitoringSecurity & Compliance': 'Quality & MonitoringDeveloper Tools': 'Developer ToolsGrowth & Marketing': 'Developer Tools';
  }
  for (const s of all) {
    const service = s as { category?: string }
    const raw_cat = (service.category || '').trim ();
    const mapped = category_aliases[raw_cat] || (categories.includes (raw_cat) ? raw_cat : 'Developer Tools');
    by_category[mapped].push (s);
  }
  React.useEffect (() => {
    const next = services.filter ((s) => {
      // Category;
      if (=> filters.categories.includes (c))) return false) {
  $2
}
      // Price;
      const min = s.priceFromUSD ?? s.priceRangeUSD?.[0];
      const max = s.priceRangeUSD?.[1] ?? s.priceFromUSD;
      if () return false) {
  $2
}
      if () return false) {
  $2
}
      // Rating;
      if (< filters.rating_min) return false) {
  $2
}
      // Delivery time (not available in data, simulate pass - through);
      return true;
    });
    set_filtered (next);
  }, [filters, services]);
;
  const available_categories = React.useMemo (() => {
    const set = new Set < string>();
    services.for_each ((s) => s.categories.for_each ((c) => set.add (c)));
    return Array.from (set);
  }, [services]);
;
  const handleRequestQuote = (service: ServiceItem) =>: any {
    set_selected (service);
    setModalOpen (true);
  }
;
  const handle_submit = async (values: QuoteFormValues) => {
    const res = await fetch ('/api / quote - request', {
      method: 'POST',
      headers: { 'Content - Type': 'application / json' },
      body: JSON.stringify ({
        service: values.service_title,
        description: values.project_description,
        timeline: { start: values.timeline_start, end: values.timeline_end },
        budget_range: values.budget_range,
        email: values.email})}),
    // Check condition
if ( {) {
  $2
}
      const err = await res.json ().catch (() => ({}));
      throw new Error (err?.message || 'Failed to submit');
    }
  }
;
  return (
    <UltraFuturisticBackground variant="quantum" intensity={1.5}>;
      <Head>;
        <title > Zion AI Marketplace - Services</title>;
        <meta name="description" content="Discover curated IT services. Request quotes with AI - assisted summaries." />;
      </Head>;
      <div className="relative">;
        <div className="absolute -z - 10 -top - 40 -left - 40 w - 96 h - 96 rounded - full blur - 3xl opacity - 40 bg - gradient - to - tr from - cyan - 400 via - blue - 500 to - purple - 500" />;
        <div className="flex flex - col sm: flex - row gap - 6">;
          <MarketplaceFilters available_categories={available_categories} value={filters} on_change={set_filters} />;
          <div className="flex - 1">;
            <div className="mb - 4 flex items - center justify - between">;
              <h1 className="text - 2xl font - semibold text - white">Services</h1>;
              <div className="text - sm text - white / 70">{filtered.length} results</div>;
            </div>;
            <div className="grid grid - cols - 1 sm:grid - cols - 2 lg:grid - cols - 3 gap - 5">;
              {filtered.map ((service) => (
                <EnhancedMarketplaceCard key={service.slug || service.id} service={service} onRequestQuote={handleRequestQuote} />))}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
            </div>;
          </div>;
        </div>;
      </div>;



export default ServicesPage;
=======
=======

export default ServicesPage;
=======
export default ServicesPage;

=======      <QuoteRequestModal;
        open={modal_open}
        on_close={() => setModalOpen (false)}
        service={selected}
        on_submit={handle_submit}
      />;
    </div>);
=======}
;
export default ServicesPage;
;
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

  const _handleSubmit = async (_values: QuoteFormValues) => {_const _res = await fetch('/api/quote-request', _{
      method: 'POST', _headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({_service: values.serviceTitle, _description: values.projectDescription, _timeline: { start: values.timelineStart, _end: values.timelineEnd},
        budgetRange: values.budgetRange,
        email: values.email})}),
    if (!res.ok) {
      const err = await res.json().catch(() => ({}))
      throw new Error(err?.message || 'Failed to submit')

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
      newVerifiedServicesQ22025 as any[]
    );
  const byCategory: Record<string, unknown[]> = {}
  for (const c of categories) byCategory[c] = [];
  // Normalize various category labels into our main buckets
  const categoryAliases: Record<string, string> = {
    'AI & Data': 'AI & DataAI & Machine Learning': 'AI & DataGenAI': 'AI & DataCloud & FinOps': 'Cloud & FinOpsCloud & Data': 'Cloud & FinOpsPlatform Engineering': 'Cloud & FinOpsObservability': 'ObservabilityObservability & Telemetry': 'ObservabilityQuality & Monitoring': 'Quality & MonitoringSecurity & Reliability': 'Quality & MonitoringSecurity & Compliance': 'Quality & MonitoringDeveloper Tools': 'Developer ToolsGrowth & Marketing': 'Developer Tools'
  }
  for (const s of all) {
    const service = s as { category?: string }
    const rawCat = (service.category |'').trim();
    const mapped = categoryAliases[rawCat] |(categories.includes(rawCat) ? rawCat : 'Developer Tools');
    byCategory[mapped].push(s)
  }
  React.useEffect(() => {
    const next = services.filter((s) => {
      // Category
      if (filters.categories.length > 0 && !s.categories.some((c) => filters.categories.includes(c))) return false;
      // Price
      const min = s.priceFromUSD ?? s.priceRangeUSD?.[0];
      const max = s.priceRangeUSD?.[1] ?? s.priceFromUSD;
      if (filters.priceMin !== undefined && (min === undefined |max === undefined ? true : max < filters.priceMin)) return false;
      if (filters.priceMax !== undefined && (min === undefined ? true : min > filters.priceMax)) return false;
      // Rating
      if (filters.ratingMin !== undefined && (s.rating ?? 0) < filters.ratingMin) return false;
      // Delivery time (not available in data, simulate pass-through)
      return true
    });
    setFiltered(next)
  }, [filters, services]);
  const availableCategories = React.useMemo(() => {
    const set = new Set<string>();
    services.forEach((s) => s.categories.forEach((c) => set.add(c)));
    return Array.from(set)
  }, [services]);
  const handleRequestQuote = (service: ServiceItem) => {
    setSelected(service);
    setModalOpen(true)
  }
  const handleSubmit = async (values: QuoteFormValues) => {
    const res = await fetch('/api/quote-request', {
      method: 'POST'
      headers: { 'Content-Type': 'application/json' }
      body: JSON.stringify({
        service: values.serviceTitle
        description: values.projectDescription
        timeline: { start: values.timelineStart, end: values.timelineEnd }
        budgetRange: values.budgetRange
        email: values.email})})
    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(err?.message |'Failed to submit')
    }
  }
  };

  return (
    <UltraFuturisticBackground variant="quantum" intensity={1.5}>
      <Head>
        <title>Zion AI Marketplace - Services</title>
        <meta name="description" content="Discover curated IT services. Request quotes with AI-assisted summaries." />
      </Head>
      <div className="relative">
        <div className="absolute -z-10 -top-40 -left-40 w-96 h-96 rounded-full blur-3xl opacity-40 bg-gradient-to-tr from-cyan-400 via-blue-500 to-purple-500" />
        <div className="flex flex-col sm: flex-row gap-6">
          <MarketplaceFilters availableCategories={availableCategories} value={filters} onChange={setFilters} />
          <div className="flex-1">
            <div className="mb-4 flex items-center justify-between">
              <h1 className="text-2xl font-semibold text-white">Services</h1>
              <div className="text-sm text-white/70">{filtered.length} results</div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map((service) => (
                <EnhancedMarketplaceCard key={service.slug |service.id} service={service} onRequestQuote={handleRequestQuote} />
                <EnhancedMarketplaceCard key={service.slug || service.id} service={service} onRequestQuote={handleRequestQuote} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <QuoteRequestModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        service={selected}
        onSubmit={handleSubmit}
      />
    </div>
  )
}
export default ServicesPage;

}
}
}
=======>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
