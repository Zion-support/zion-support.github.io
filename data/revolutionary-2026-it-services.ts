export interface Revolutionary2026ItService {
  id: string;
  name: string;
  tagline: string;
  price: string;
  description: string;
  features: string[];
  link: string;
  category: string;
  realImplementation: boolean;
  contactInfo: {
    mobile: string;
    email: string;
    address: string;
  };
}

export const revolutionary2026ITServices: Revolutionary2026ItService[] = [
  {
    id: &quot;2026-revolutionary-it&quot;,
    name: &quot;2026 Revolutionary IT Platform&quot;,
    tagline: &quot;Revolutionary IT for 2026&quot;,
    price: &quot;$199/month&quot;,
    description: &quot;Revolutionary IT platform that transforms how businesses manage technology in 2026.&quot;,
    features: [
      &quot;Revolutionary IT&quot;,
      &quot;Transformative technology&quot;,
      &quot;Advanced capabilities&quot;,
      &quot;Innovation platform&quot;,
      &quot;Future-ready solutions&quot;
    ],
    link: &quot;/services/2026-revolutionary-it&quot;,
    category: &quot;Revolutionary 2026 IT&quot;,
    realImplementation: true,
    contactInfo: {
      mobile: &quot;+1 302 464 0950&quot;,
      email: &quot;kleber@ziontechgroup.com&quot;,
      address: &quot;364 E Main St STE 1008 Middletown DE 19709&quot;
    }
  }
];