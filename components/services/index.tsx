<<<<<<< HEAD
=======

export default function ServicesIndexPage () {
 export default function ServicesIndexPage () {
export default function ServicesIndexPage () {
 export default function ServicesIndexPage () {
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  const all = (enhancedRealMicroSaasServices as unknown[]) .concat (
}React.useEffect ( () => {
  const next = services.filter ( (s) => {
  //Category const handle_submit = async (values: QuoteFormValues) => {
  const res = await fetch ('/api / quote - request', {
  method: 'POST', headers: {
<<<<<<< HEAD
  'Content-Type': 'application/json'
}
  'Content-Type': 'application/json' ;
};
=======


  'Content-Type': 'application/json' ;
};


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
<<<<<<< HEAD


=======
export default function ServicesIndexPage () {
 export default function ServicesIndexPage () {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  const all = (enhancedRealMicroSaasServices as unknown[]) .concat (
}React.useEffect ( () => {
  const next = services.filter ( (s) => {
  //Category const handleSubmit = async (values: QuoteFormValues) => {
  const res = await fetch ('/api/quote-request', {
  method: 'POST', headers: {
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
const mapLocalToServiceItem = (item: any): ServiceItem => ({
  slug: item.slug
  title: item.name
  description: item.description
  provider: 'Zion Provider'
  priceRangeUSD: item.priceRangeUSD
  categories: [item.category]
  rating: Math.round((3.8 + Math.random() * 1.2) * 10) / 10})
const ServicesPage: NextPage = () => {
  const [services, setServices] = React.useState<ServiceItem[]>([]);
  const [filtered, setFiltered] = React.useState<ServiceItem[]>([]);
  const [filters, setFilters] = React.useState<Filters>({ categories: [] })
  const [modalOpen, setModalOpen] = React.useState(false);
  const [selected, setSelected] = React.useState<ServiceItem | null>(null);
export default function ServicesIndexPage() {
  const all = (enhancedRealMicroSaasServices as unknown[])
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
      extraServices as any[];
  'Content - Type': 'application / json';
}
body: JSON.stringify ({
  service: values.service_title, description: values.project_description, timeline: {
  start: values.timeline_start, end: values.timeline_end;
}
budget_range: values.budget_range;
;
}
<Head> <title > Zion AI Marketplace - Services</title> <meta name="description" content="Discover curated IT services. Request quotes with AI - assisted summaries." /> </Head>) );
}</div> </div> </div> </div> <QuoteRequestModal open= {
  modal_open;
}on_close= {
  () => setModalOpen (false);
}service= {
  selected;
}on_submit= {
  handle_submit;
}/> </div>);
}export default ServicesPage;
const mapLocalToServiceItem = (item: any): ServiceItem => ({
  slug: item.slug,
  title: item.name,
  description: item.description,
  provider: 'Zion Provider',
  priceRangeUSD: item.priceRangeUSD,
  categories: [item.category],
  rating: Math.round ((3.8 + Math.random () * 1.2) * 10) / 10}),
const ServicesPage: NextPage = () => {
  const [services, set_services] = React.useState < ServiceItem[]>([]);
  const [filtered, set_filtered] = React.useState < ServiceItem[]>([]);
  const [filters, set_filters] = React.useState < Filters>({ categories: [] }),
  const [modal_open, setModalOpen] = React.useState (false);
  const [selected, set_selected] = React.useState < ServiceItem | null>(null);
;
export default /**
 * ServicesIndexPage - Function description
 */
function ServicesIndexPage() {
  const all = (enhancedRealMicroSaasServices as unknown[]);
    .concat (
      extra_services as any[];
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      additionalEnhancedServices as any[];
      newlyAddedServices as any[];
      curatedMarketServices as any[];
      realMarketServices as any[];
      new2025Services as any[];
      marketValidatedServices as any[];
      moreRealServices2025 as any[];
      realOperationalServices as any[];
      verified2025Additions as any[];
      realServicesQ12025 as any[];
<<<<<<< HEAD

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

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
    const set = new Set<string>();
    services && services.forEach((s) => s && s.categories.forEach((c) => set && set.add(c)));
    return Array && Array.from(set);
  }, [services]);
    }
  }
              ))}
            </div>
          </div>
        </div>
      </div>

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    <UltraFuturisticBackground variant="quantum" intensity={1 && 1.5}>;
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

            </div>;
          </div>;
        </div>;
      </div>;





<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      <QuoteRequestModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        service={selected}
        onSubmit={handleSubmit}
<<<<<<< HEAD
      />
    </div>
  )
}
export default ServicesPage;

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
export default ServicesPage;

}
}
}
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
export default ServicesPage;

export default ServicesPage;

      <QuoteRequestModal;
        open={modal_open}
        on_close={() => setModalOpen (false)}
        service={selected}
        on_submit={handle_submit}
      />;
    </div>);
}
;
export default ServicesPage;
;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
