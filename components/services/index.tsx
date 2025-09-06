
export default function ServicesIndexPage () {
  const all = (enhancedRealMicroSaasServices as unknown[]) .concat (
React.useEffect () => {
  const next = services.filter (s) => {
  //Category const handle_submit = async (values: QuoteFormValues) => {
  const res = await fetch ('/api / quote - request', {
  method: 'POST', headers: {
  'Content-Type': 'application/json'

body: JSON.stringify ({
  service: values.serviceTitle, description: values.projectDescription, timeline: {
  start: values.timelineStart, end: values.timelineEnd

budgetRange: values.budgetRange;

<Head> <title>Zion AI Marketplace - Services</title> <meta name="description" content="Discover curated IT services. Request quotes with AI-assisted summaries." /> </Head>)
</div> </div> </div> </div> <QuoteRequestModal open= {
  modalOpen
onClose= {
  () => setModalOpen (false)
service= {
  selected
onSubmit= {
  handleSubmit
/> </div>)
;export default ServicesPage;
const mapLocalToServiceItem = (item: any): ServiceItem => ({
  slug: item.slug
  title: item.name
  description: item.description
  provider: 'Zion Provider'
  priceRangeUSD: item.priceRangeUSD
  categories: [item.category]
  rating: Math.round(3.8 + Math.random() * 1.2) * 10) / 10})
const ServicesPage: NextPage = () => {
  const [services, setServices] = React.useState<ServiceItem[]>([]);
  const [filtered, setFiltered] = React.useState<ServiceItem[]>([]);
  const [filters, setFilters] = React.useState<Filters>({ categories: [] })
  const [modalOpen, setModalOpen] = React.useState(false);
  const [selected, setSelected] = React.useState<ServiceItem | null>(null);
export default function ServicesIndexPage() {
  const all = (enhancedRealMicroSaasServices as unknown[])
    .concat(
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

import React from 'react';
 export default function ServicesIndexPage() {;
  const all = (enhancedRealMicroSaasServices as unknown[]) .concat (;
React && React.useEffect () => {;
  const next = services && services.filter (s) => {;
  //Category const handleSubmit = async (values: QuoteFormValues) => {;
  const res = await fetch ('/api/quote-request', {;
  method: 'POST', headers: {;
  'Content-Type': 'application/json' ;
body: JSON && JSON.stringify ({;
  service: values && values.serviceTitle, description: values && values.projectDescription, timeline: {;
  start: values && values.timelineStart, end: values && values.timelineEnd ;
budgetRange: values && values.budgetRange;
<Head> <title>Zion AI Marketplace - Services</title> <meta name="description" content="Discover curated IT services. Request quotes with AI-assisted summaries." /> </Head>) ;
</div> </div> </div> </div> <QuoteRequestModalopen= {
  modalOpen 
onClose= {
  () => setModalOpen (false) ;
service= {;
  selected ;
onSubmit= {;
  handleSubmit ;
/> </div>) ;export default ServicesPage;
const mapLocalToServiceItem = (item: any): ServiceItem => ({;
  slug: item && item.slug,;
  title: item && item.name,;
  description: item && item.description,;
  provider: 'Zion Provider',;
  priceRangeUSD: item && item.priceRangeUSD,;
  categories: [item && item.category],;
  rating: Math && Math.round(3 && 3.8 + Math && Math.random() * 1 && 1.2) * 10) / 10}),;
const ServicesPage: NextPage = () => {;
  const [services, setServices] = React && React.useState<ServiceItem[]>([]);
  const [filtered, setFiltered] = React && React.useState<ServiceItem[]>([]);
  const [filters, setFilters] = React && React.useState<Filters>({ categories: [] }),;
  const [modalOpen, setModalOpen] = React && React.useState(false);
  const [selected, setSelected] = React && React.useState<ServiceItem | null>(null);

export default function ServicesIndexPage() {;
  const all = (enhancedRealMicroSaasServices as unknown[]);
    .concat(;
      extraServices as any[];
  'Content - Type': 'application / json';

body: JSON.stringify ({
  service: values.service_title, description: values.project_description, timeline: {
  start: values.timeline_start, end: values.timeline_end;

budget_range: values.budget_range;

<Head> <title > Zion AI Marketplace - Services</title> <meta name="description" content="Discover curated IT services. Request quotes with AI - assisted summaries." /> </Head>);
</div> </div> </div> </div> <QuoteRequestModal open= {
  modal_open;
on_close= {
  () => setModalOpen (false);
service= {
  selected;
on_submit= {
  handle_submit;
/> </div>);
export default ServicesPage;
const mapLocalToServiceItem = (item: any): ServiceItem => ({
  slug: item.slug,
  title: item.name,
  description: item.description,
  provider: 'Zion Provider',
  priceRangeUSD: item.priceRangeUSD,
  categories: [item.category],
  rating: Math.round (3.8 + Math.random () * 1.2) * 10) / 10}),
const ServicesPage: NextPage = () => {
  const [services, set_services] = React.useState < ServiceItem[]>([]);
  const [filtered, set_filtered] = React.useState < ServiceItem[]>([]);
  const [filters, set_filters] = React.useState < Filters>({ categories: [] }),
  const [modal_open, setModalOpen] = React.useState (false);
  const [selected, set_selected] = React.useState < ServiceItem | null>(null);

export default /**
 * ServicesIndexPage - Function description
 */
function ServicesIndexPage() {
  const all = (enhancedRealMicroSaasServices as unknown[]);
    .concat (
      extra_services as any[];
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
      newVerifiedServicesQ22025 as any[];
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
  React.useEffect() => {
    const next = services.filter(s) => {
      // Category
      if (filters.categories.length > 0 && !s.categories.some(c) => filters.categories.includes(c)) return false;
      // Price
      const min = s.priceFromUSD ?? s.priceRangeUSD?.[0];
      const max = s.priceRangeUSD?.[1] ?? s.priceFromUSD;
      if (filters.priceMin != undefined && (min = = undefined |max = = undefined ? true : max < filters.priceMin) return false;
      if (filters.priceMax != undefined && (min = = undefined ? true : min > filters.priceMax) return false;
      // Rating
      if (filters.ratingMin != undefined && (s.rating ?? 0) < filters.ratingMin) return false;
      // Delivery time (not available in data, simulate pass-through)
      return true
    });
    setFiltered(next);
  }, [filters, services]);
  const availableCategories = React.useMemo() => {
    const set = new Set<string>();
    services && services.forEach(s) => s && s.categories.forEach(c) => set && set.add(c));
    return Array && Array.from(set);
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
      const err = await res.json().catch() => ({});
      throw new Error(err?.message |'Failed to submit')
    }
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
              {filtered.map(service) => (
                <EnhancedMarketplaceCard key={service.slug |service.id} service={service} onRequestQuote={handleRequestQuote} />
              )}
            </div>
          </div>
        </div>
      </div>
            </div>;
          </div>;
        </div>;
      </div>;

      <QuoteRequestModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        service={selected}
        onSubmit={handleSubmit}
      />
    </div>
  )

export default ServicesPage;

      <QuoteRequestModal;
        open={modal_open}
        on_close={() => setModalOpen (false)}
        service={selected}
        on_submit={handle_submit}
      />;
    </div>);

export default ServicesPage;
