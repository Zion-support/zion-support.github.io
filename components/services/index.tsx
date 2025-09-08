
<<<<<<< HEAD



=======
import type { NextPage } from 'next',
import Head from 'next/head',
import React from 'react',
import SEO from '../../components/SEO',
import UltraFuturisticBackground from '../../components/ui/UltraFuturisticBackground',
import Card from '../../components/ui/Card';
import Link from 'next/link';
import { enhancedRealMicroSaasServices  } from '../../data/enhanced-real-micro-saas-services';
import { additionalEnhancedServices  } from '../../data/additional-real-services';
import { extraServices  } from '../../data/extra-services';
import { newlyAddedServices  } from '../../data/newly-added-services';
import { curatedMarketServices  } from '../../data/curated-market-services';
import { realMarketServices  } from '../../data/real-market-services';
import { new2025Services  } from '../../data/new-2025-services';
import { marketValidatedServices  } from '../../data/market-validated-services';
import { moreRealServices2025  } from '../../data/more-real-services-2025';
>>>>>>> origin/cursor/delete-old-data-records-6bba
import { realOperationalServices } from '../../data/real-operational-services';
import { verified2025Additions } from '../../data/verified-2025-additions';
import { realServicesQ12025 } from '../../data/real-services-q1-2025'
import { newVerifiedServicesQ22025 } from '../../data/real-verified-services-q2-2025'

<<<<<<< HEAD

const mapLocalToServiceItem = null;

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
export default function ServicesIndexPage () {
 export default function ServicesIndexPage () {}
  const all = (enhancedRealMicroSaasServices as unknown[]) .concat (}
}React;
  useEffect ( () => {
<<<<<<< HEAD


=======
export default function ServicesIndexPage () {
  const all = (enhancedRealMicroSaasServices as unknown[]) .concat (
}React.useEffect ( () => {
  const next = services.filter ( (s) => {
  //Category const handleSubmit = async (values: QuoteFormValues) => {
>>>>>>> origin/cursor/delete-old-data-records-6bba
  const res = await fetch ('/api/quote-request', {
  method: 'POST',
  headers: {
body: JSON.stringify ({
<<<<<<< HEAD



=======
  service: values.serviceTitle, description: values.projectDescription, timeline: {
  start: values.timelineStart, end: values.timelineEnd
}
budgetRange: values.budgetRange;
}
<Head> <title>Zion AI Marketplace - Services</title> <meta name="description" content="Discover curated IT services. Request quotes with AI-assisted summaries." /> </Head>) )
}</div> </div> </div> </div> <QuoteRequestModal open= {}
>>>>>>> origin/cursor/delete-old-data-records-6bba
  const all = (enhancedRealMicroSaasServices as unknown[]) .concat (
}React.useEffect ( () => {
  const next = services.filter ( (s) => {
  //Category const handle_submit = async (values: QuoteFormValues) => {
  const res = await fetch ('/api / quote - request', {
  method: 'POST', headers: {
<<<<<<< HEAD



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

  'Content-Type': 'application/json' ;
};

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

body: JSON.stringify ({
  service: values.serviceTitle, description: values.projectDescription, timeline: {
  start: values.timelineStart, end: values.timelineEnd
}
"budgetRange": values.budgetRange;
}
<Head> <title>Zion AI Marketplace - Services</title> <meta name="description" content="Discover curated IT services. Request quotes with AI-assisted summaries." /> </Head>) )"
}</div> </div> </div> </div> <QuoteRequestModal open= {
  }
<<<<<<< HEAD

  modalOpen
}onClose= {}
  () => setModalOpen (false)

}service= {
  selected
}onSubmit= {

;
  const all = (enhancedRealMicroSaasServices as unknown[]) .concat (}React.useEffect ( () => {const next = services.filter ( (s) => {//Category const handle_submit = async (values: QuoteFormValues) => {const res = await fetch ('/api / quote - request', {method: 'POST', headers: {'Content-Type': 'application/json';
}body: JSON.stringify ({service: values.serviceTitle, description: values.projectDescription, timeline: {start: values.timelineStart, end: values.timelineEnd;
}
budgetRange: values.budgetRange;
}
<Head> <title>Zion AI Marketplace - Services</title> <meta name="description" content="Discover curated IT services. Request quotes with AI-assisted summaries." /> </Head>) )}</div> </div> </div> </div> <QuoteRequestModal open= {modalOpen;
}onClose= {() => setModalOpen (false)}service= {selected;
}onSubmit= {handleSubmit;
}/> </div>)}export default ServicesPage;import type { NextPage } from 'next',import Head from 'next/head',import React from 'react',import SEO from '../../components/SEO',import UltraFuturisticBackground from '../../components/ui/UltraFuturisticBackground',import Card from '../../components/ui/Card';
import Link from 'next/link';
import { enhancedRealMicroSaasServices   } from '../../data/enhanced-real-micro-saas-services';
import { additionalEnhancedServices   } from '../../data/additional-real-services';
import { extraServices   } from '../../data/extra-services';
import { newlyAddedServices   } from '../../data/newly-added-services';
import { curatedMarketServices   } from '../../data/curated-market-services';
import { realMarketServices   } from '../../data/real-market-services';
import { new2025Services   } from '../../data/new-2025-services';
import { marketValidatedServices   } from '../../data/market-validated-services';
import { moreRealServices2025   } from '../../data/more-real-services-2025';
import { realOperationalServices  } from '../../data/real-operational-services';
import { verified2025Additions  } from '../../data/verified-2025-additions';
import { realServicesQ12025  } from '../../data/real-services-q1-2025';
import { newVerifiedServicesQ22025  } from '../../data/real-verified-services-q2-2025';
const mapLocalToServiceItem  = null;export default function ServicesIndexPage () {export default function ServicesIndexPage () {const all = (enhancedRealMicroSaasServices as unknown[]) .concat (}React.useEffect ( () => {const next = services.filter ( (s) => {//Category const handleSubmit = async (values: QuoteFormValues) => {const res = await fetch ('/api/quote-request', {method: 'POST', headers: {body: JSON.stringify ({service: values.serviceTitle, description: values.projectDescription, timeline: {start: values.timelineStart, end: values.timelineEnd;
}
budgetRange: values.budgetRange;
}
<Head> <title>Zion AI Marketplace - Services</title> <meta name="description" content="Discover curated IT services. Request quotes with AI-assisted summaries." /> </Head>) )}</div> </div> </div> </div> <QuoteRequestModal open= {modalOpen;
}onClose= {() => setModalOpen (false)}service= {selected;
}onSubmit= {handleSubmit;
}/> </div>)}export default ServicesPage;
const mapLocalToServiceItem = (item: any): ServiceItem => ({slug: item.slug;
  title: item.name;
  description: item.description;
  provider: 'Zion Provider';
  priceRangeUSD: item.priceRangeUSD;
  categories: [item.category];
  rating: Math.round((3.8 + Math.random() * 1.2) * 10) / 10})const ServicesPage: NextPage = () => {const [services, setServices] = React.useState<ServiceItem[]>([])const [filtered, setFiltered] = React.useState<ServiceItem[]>([])const [filters, setFilters] = React.useState<Filters>({ categories: [] })const [modalOpen, setModalOpen] = React.useState(false)const [selected, setSelected] = React.useState<ServiceItem | null>(null)export default function ServicesIndexPage() {const all = (enhancedRealMicroSaasServices as unknown[])extraServices as any[];
}onSubmit= {

=======
  modalOpen
}onClose= {}
  () => setModalOpen (false)
}service= {}
  selected}
}onSubmit= {
>>>>>>> origin/cursor/delete-old-data-records-6bba
}
  handleSubmit }
}/> </div>) 
};

export default ServicesPage;

"
  selected
}onSubmit= {}
<<<<<<< HEAD

  handleSubmit
}/> </div>)


=======
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
rating: Math.round ((3.8 + Math.random () * 1.2) * 10) / 10}),
export default function ServicesIndexPage () {
 export default function ServicesIndexPage () {
>>>>>>> origin/cursor/delete-old-data-records-6bba
  const all = (enhancedRealMicroSaasServices as unknown[]) .concat (
}React.useEffect ( () => {
  const next = services.filter ( (s) => {
  //Category const handleSubmit = async (values: QuoteFormValues) => {
  const res = await fetch ('/api/quote-request', {
  method: 'POST', headers: {
<<<<<<< HEAD

  'Content-Type': 'application/json' ;
};

=======
  'Content-Type': 'application/json'
}
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
  }
  selected
}onSubmit= {

<<<<<<< HEAD
  handleSubmit
}/> </div>)
};export default ServicesPage;


const mapLocalToServiceItem = (item: any): ServiceItem => ({

  slug: item.slug
  title: item.name
  description: item.description
  provider: Zion Provider'
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

=======
  }

  handleSubmit 
}/> </div>) 
};
export default ServicesPage;

"
  selected
}onSubmit= {}
  handleSubmit
}/> </div>)
};export default ServicesPage;
  handleSubmit
}/> </div>)
};export default ServicesPage;
const mapLocalToServiceItem = (item: any): ServiceItem => ({
  slug: item.slug,
  title: item.name,
      extraServices as any[];
  'Content - Type': 'application / json';
}
body: JSON.stringify ({service: values.service_title, description: values.project_description, timeline: {start: values.timeline_start, end: values.timeline_end;
}
>>>>>>> origin/cursor/delete-old-data-records-6bba

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

    const set = new Set<string>();
    services && services.forEach((s) => s && s.categories.forEach((c) => set && set.add(c)));
    return Array && Array.from(set);
  }, [services]);


    <UltraFuturisticBackground variant="quantum" intensity={1 && 1.5}>;
      <Head>;
        <title>Zion AI Marketplace - Services</title>;
        <meta name=description" content="Discover curated IT services. Request quotes with AI-assisted summaries. />;
      </Head>;
      <div className="relative">;
        <div className=absolute -z-10 -top-40 -left-40 w-96 h-96 rounded-full blur-3xl opacity-40 bg-gradient-to-tr from-cyan-400 via-blue-500 to-purple-500" />;"
        <div className=flex flex-col sm: flex-row gap-6>;
          <MarketplaceFilters availableCategories={availableCategories} value={filters} onChange={setFilters} />;"
          <div className="flex-1>;
            <div className="mb-4 flex items-center justify-between">;
              <h1 className=text-2xl font-semibold text-white">Services</h1>;"
              <div className=text-sm text-white/70>{filtered && filtered.length} results</div>;
            </div>;"
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5>;
              {filtered && filtered.map((service) => (;
                <EnhancedMarketplaceCard key={service && service.slug || service && service.id} service={service} onRequestQuote={handleRequestQuote} />;
              ))}
      newVerifiedServicesQ22025 as any[]);
  const by_category: Record < string, unknown[]> = {}
  for (const c of categories) by_category[c] = [];
  // Normalize various category labels into our main buckets;
  const category_aliases: Record < string, string> = {
    AI & Data': 'AI & DataAI & Machine Learning: AI & DataGenAI': 'AI & DataCloud & FinOps: Cloud & FinOpsCloud & Data': 'Cloud & FinOpsPlatform Engineering: Cloud & FinOpsObservability': 'ObservabilityObservability & Telemetry: ObservabilityQuality & Monitoring': 'Quality & MonitoringSecurity & Reliability: Quality & MonitoringSecurity & Compliance': 'Quality & MonitoringDeveloper Tools: Developer ToolsGrowth & Marketing': 'Developer Tools;
  }
  for (const s of all) {}
    const service = s as { category?: string }
    const raw_cat = (service.category || '').trim ();
    const mapped = category_aliases[raw_cat] || (categories.includes (raw_cat) ? raw_cat : Developer Tools');
    by_category[mapped].push (s);
  }
  React.useEffect (() => {}
    const next = services.filter ((s) => {}
      // Category;
      if (=> filters.categories.includes (c))) return false) {}
  $2;
}
      // Price;
      if () return false) {}
  $2;
}
      if () return false) {}
  $2;
}
      // Rating;
      if (< filters.rating_min) return false) {}
  $2;
}
      // Delivery time (not available in data, simulate pass - through);
      return true;
    });
    set_filtered (next);
  }, [filters, services]);
  const available_categories = React.useMemo (() => {}
    const set = new Set < string>();
    services.for_each ((s) => s.categories.for_each ((c) => set.add (c)));
    return Array.from (set);
  }, [services]);
  const handleRequestQuote = (service: ServiceItem) =>: any {}
    set_selected (service);
    setModalOpen (true);
  }
  const handle_submit = async (values: QuoteFormValues) => {'
    const res = await fetch (/api / quote - request, {'
      method: 'POST,
      headers: { 'Content - Type': application / json },
      body: JSON.stringify ({}
        service: values.service_title,
        description: values.project_description,
        timeline: { start: values.timeline_start, end: values.timeline_end },
        budget_range: values.budget_range,
        email: values.email})}),
    // Check condition;
if ( {) {}
  $2;
}
      const err = await res.json ().catch (() => ({}));'
      throw new Error (err?.message || 'Failed to submit');
    }
  }
  return (
    <UltraFuturisticBackground variant="quantum" intensity={1.5}>;
      <Head>;
        <title > Zion AI Marketplace - Services</title>;"
=======
      // Price;
      const min = s.priceFromUSD ?? s.priceRangeUSD?.[0];
      const max = s.priceRangeUSD?.[1] ?? s.priceFromUSD;
      if () return false) {$2;
}
      if () return false) {$2;
}
      // Rating;
      if (< filters.rating_min) return false) {$2;
}
      // Delivery time (not available in data, simulate pass - through)return true;
    })set_filtered (next)}, [filters, services])const available_categories = React.useMemo (() => {const set = new Set < string>()services.for_each ((s) => s.categories.for_each ((c) => set.add (c)))return Array.from (set)}, [services])const handleRequestQuote = (service: ServiceItem) =>: any {set_selected (service)setModalOpen (true)}const handle_submit = async (values: QuoteFormValues) => {const res = await fetch ('/api / quote - request', {method: 'POST',headers: { 'Content - Type': 'application / json' },body: JSON.stringify ({service: values.service_title,description: values.project_description,timeline: { start: values.timeline_start, end: values.timeline_end },budget_range: values.budget_range,email: values.email})}),// Check condition;
if ( {) {$2;
}
      const err = await res.json ().catch (() => ({}))throw new Error (err?.message || 'Failed to submit')}
  }return (<UltraFuturisticBackground variant="quantum" intensity={1.5}>;
      <Head>;
        <title > Zion AI Marketplace - Services</title>;
>>>>>>> origin/cursor/delete-old-data-records-6bba
        <meta name="description" content="Discover curated IT services. Request quotes with AI - assisted summaries." />;
      </Head>;
      <div className="relative">;
        <div className="absolute -z - 10 -top - 40 -left - 40 w - 96 h - 96 rounded - full blur - 3xl opacity - 40 bg - gradient - to - tr from - cyan - 400 via - blue - 500 to-purple-500" />;
        <div className="flex flex - col sm: flex-row gap-6">;
          <MarketplaceFilters available_categories={available_categories} value={filters} on_change={set_filters} />;
          <div className="flex-1">;
            <div className="mb - 4 flex items-center justify-between">;
              <h1 className="text - 2xl font-semibold text-white">Services</h1>;
              <div className="text-sm text-white / 70">{filtered.length} results</div>;
            </div>;
            <div className="grid grid - cols - 1 sm:grid - cols - 2 lg:grid - cols-3 gap-5">;
<<<<<<< HEAD
              {filtered.map ((service) => (
                <EnhancedMarketplaceCard key={service.slug || service.id} service={service} onRequestQuote={handleRequestQuote} />))}



            </div>;
=======
              {filtered.map ((service) => (<EnhancedMarketplaceCard key={service.slug || service.id} service={service} onRequestQuote={handleRequestQuote} />))}</div>;
>>>>>>> origin/cursor/delete-old-data-records-6bba
          </div>;
      </div>;<QuoteRequestModal;
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        service={selected}
        onSubmit={handleSubmit}
export default ServicesPage;export default ServicesPage;<QuoteRequestModal;
const mapLocalToServiceItem = null;
origin/cursor/automate-test-improve-and-merge-code-2533
export default function ServicesIndexPage () {

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
      <QuoteRequestModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        service={selected}
        onSubmit={handleSubmit}

<<<<<<< HEAD


      />;
    </div>;
  );
};



export default ServicesPage;

=======
export default ServicesPage;

export default ServicesPage;


>>>>>>> origin/cursor/delete-old-data-records-6bba
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
<<<<<<< HEAD





=======
    </div>)}export default ServicesPage;handleSubmit;
}/> </div>)}export default ServicesPage;
const mapLocalToServiceItem = $2;
  title: item.name,
  description: item.description,
  provider: 'Zion Provider',
  priceRangeUSD: item.priceRangeUSD,
  categories: [item.category],
  rating: Math.round((3.8 + Math.random() * 1.2) * 10) / 10}),

const ServicesPage: NextPage = () => {
  const [services, setServices] = React.useState<ServiceItem[]>([]);
  const [filtered, setFiltered] = React.useState<ServiceItem[]>([]);
  const [filters, setFilters] = React.useState<Filters>({ categories: [] }),
  const [modalOpen, setModalOpen] = React.useState(false);
  const [selected, setSelected] = React.useState<ServiceItem | null>(null);

export default function ServicesIndexPage() {
  const all = (enhancedRealMicroSaasServices as unknown[])
    .concat(
      extraServices as any[];
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
      newVerifiedServicesQ22025 as any[]
    );
  const byCategory: Record<string, unknown[]> = {};


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

  React.useEffect(() => {
    const next = services.filter((s) => {
      // Category
      if (filters.categories.length > 0 && !s.categories.some((c) => filters.categories.includes(c))) return false;
      // Price
      const min = s.priceFromUSD ?? s.priceRangeUSD?.[0];
      const max = s.priceRangeUSD?.[1] ?? s.priceFromUSD;

      if (filters.priceMin !== undefined && (min === undefined || max === undefined ? true : max < filters.priceMin)) return false;
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

  };

  return (
    <UltraFuturisticBackground variant="quantum" intensity={1.5}>
      <Head>
        <title>Zion AI Marketplace - Services</title>
        <meta name="description" content="Discover curated IT services. Request quotes with AI-assisted summaries." />
      </Head>
      <div className="relative">
        <div className="absolute -z-10 -top-40 -left-40 w-96 h-96 rounded-full blur-3xl opacity-40 bg-gradient-to-tr from-cyan-400 via-blue-500 to-purple-500" />

        <div className="flex flex-col sm:flex-row gap-6">
          <MarketplaceFilters availableCategories={availableCategories} value={filters} onChange={setFilters} />
          <div className="flex-1">
            <div className="mb-4 flex items-center justify-between">
              <h1 className="text-2xl font-semibold text-white">Services</h1>
              <div className="text-sm text-white/70">{filtered.length} results</div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map((service) => (

                <EnhancedMarketplaceCard key={service.slug || service.id} service={service} onRequestQuote={handleRequestQuote} />
              ))}
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

>>>>>>> origin/cursor/delete-old-data-records-6bba
