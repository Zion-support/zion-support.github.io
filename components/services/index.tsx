

<<<<<<< HEAD
<<<<<<< HEAD
export default function ServicesIndexPage () {

 export default function ServicesIndexPage () {



export default /**
 * ServicesIndexPage - Function description
 */
function ServicesIndexPage() {
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import type { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import SEO from '../../components/SEO';
import UltraFuturisticBackground from '../../components/ui/UltraFuturisticBackground';
import Card from '../../components/ui/Card';
import Link from 'next/link';
import { enhancedRealMicroSaasServices } from '../../data/enhanced-real-micro-saas-services';
import { additionalEnhancedServices } from '../../data/additional-real-services';
import { extraServices } from '../../data/extra-services';
import { newlyAddedServices } from '../../data/newly-added-services';
import { curatedMarketServices } from '../../data/curated-market-services';
import { realMarketServices } from '../../data/real-market-services';
import { new2025Services } from '../../data/new-2025-services';
import { marketValidatedServices } from '../../data/market-validated-services';
import { moreRealServices2025 } from '../../data/more-real-services-2025';
import { realOperationalServices } from '../../data/real-operational-services';
import { verified2025Additions } from '../../data/verified-2025-additions';
import { realServicesQ12025 } from '../../data/real-services-q1-2025'
import { newVerifiedServicesQ22025 } from '../../data/real-verified-services-q2-2025'
import { Star } from 'lucide-react';
<<<<<<< HEAD
<<<<<<< HEAD
rating: Math.round ((3.8 + Math.random () * 1.2) * 10) / 10}),
=======
=======
<<<<<<< HEAD
<<<<<<< HEAD

export default function ServicesIndexPage () {
=======
 export default function ServicesIndexPage () {
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
=======
 export default function ServicesIndexPage () {
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======
export default function ServicesIndexPage () {
=======
 export default function ServicesIndexPage () {
<<<<<<< HEAD
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const all = (enhancedRealMicroSaasServices as unknown[]) .concat (
}React.useEffect ( () => {
  const next = services.filter ( (s) => {
  //Category const handleSubmit = async (values: QuoteFormValues) => {
  const res = await fetch ('/api/quote-request', {
  method: 'POST', headers: {
<<<<<<< HEAD
<<<<<<< HEAD
  'Content-Type': 'application/json'
}
=======
  'Content-Type': 'application/json' ;
};
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
  'Content-Type': 'application/json' ;
};
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
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
}
import React from 'react';
 export default function ServicesIndexPage() {;
  const all = (enhancedRealMicroSaasServices as unknown[]) .concat (;
}React && React.useEffect ( () => {;
  const next = services && services.filter ( (s) => {;
  //Category const handleSubmit = async (values: QuoteFormValues) => {;
  const res = await fetch ('/api/quote-request', {;
  method: 'POST', headers: {;
  'Content-Type': 'application/json' ;
};
body: JSON && JSON.stringify ({;
  service: values && values.serviceTitle, description: values && values.projectDescription, timeline: {;
  start: values && values.timelineStart, end: values && values.timelineEnd ;
};
budgetRange: values && values.budgetRange;
};
<Head> <title>Zion AI Marketplace - Services</title> <meta name="description" content="Discover curated IT services. Request quotes with AI-assisted summaries." /> </Head>) ) ;
}</div> </div> </div> </div> <QuoteRequestModalopen= {
  modalOpen 
}onClose= {
  () => setModalOpen (false) ;
}service= {;
  selected ;
}onSubmit= {;
  handleSubmit ;
}/> </div>) ;
};export default ServicesPage;
const mapLocalToServiceItem = (item: any): ServiceItem => ({;
  slug: item && item.slug,;
  title: item && item.name,;
  description: item && item.description,;
  provider: 'Zion Provider',;
  priceRangeUSD: item && item.priceRangeUSD,;
  categories: [item && item.category],;
  rating: Math && Math.round((3 && 3.8 + Math && Math.random() * 1 && 1.2) * 10) / 10}),;
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
    .concat(;
      extraServices as any[];
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
    });
    setFiltered(next);
  }, [filters, services]);
  const availableCategories = React && React.useMemo(() => {;
=======

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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    const set = new Set<string>();
    services && services.forEach((s) => s && s.categories.forEach((c) => set && set.add(c)));
    return Array && Array.from(set);
  }, [services]);
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    }
  }
    }

  };


  return (
<<<<<<< HEAD
=======


                <EnhancedMarketplaceCard key={service.slug || service.id} service={service} onRequestQuote={handleRequestQuote} />


              ))}
            </div>
          </div>
        </div>
      </div>

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            </div>;
          </div>;
        </div>;
      </div>;

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <QuoteRequestModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        service={selected}
        onSubmit={handleSubmit}

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      />;
    </div>;
  );
};
<<<<<<< HEAD
<<<<<<< HEAD
export default ServicesPage;


export default ServicesPage;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


export default ServicesPage;
=======
export default ServicesPage;

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      <QuoteRequestModal;
        open={modal_open}
        on_close={() => setModalOpen (false)}
        service={selected}
        on_submit={handle_submit}
      />;
    </div>);
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}
;
export default ServicesPage;
;
<<<<<<< HEAD
<<<<<<< HEAD

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
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
