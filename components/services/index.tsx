<<<<<<< HEAD
<<<<<<< HEAD

export default function ServicesIndexPage () {
=======
 export default function ServicesIndexPage () {
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
export default function ServicesIndexPage () {
=======
 export default function ServicesIndexPage () {
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  const all = (enhancedRealMicroSaasServices as unknown[]) .concat (
}React.useEffect ( () => {
  const next = services.filter ( (s) => {
  //Category const handle_submit = async (values: QuoteFormValues) => {
  const res = await fetch ('/api / quote - request', {
  method: 'POST', headers: {
<<<<<<< HEAD
  'Content-Type': 'application/json'
}
=======
  'Content-Type': 'application/json' ;
};
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
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
    .concat(
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      extraServices as any[];
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
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

    }
  }
=======
    }

  };


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  return (


                <EnhancedMarketplaceCard key={service.slug || service.id} service={service} onRequestQuote={handleRequestQuote} />


              ))}
            </div>
          </div>
        </div>
      </div>

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      <QuoteRequestModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        service={selected}
        onSubmit={handleSubmit}

<<<<<<< HEAD
=======
export default ServicesPage;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

=======
}
}
}
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
