export interface Revolutionary2027ItService {
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

export const revolutionary2027ITServices: Revolutionary2027ItService[] = [
  {
    id: &quot;2027-revolutionary-it&quot;,
    name: &quot;2027 Revolutionary IT Platform&quot;,
    tagline: &quot;Revolutionary IT for 2027&quot;,
    price: &quot;$349/month&quot;,
    description: &quot;Revolutionary IT platform that transforms how businesses manage technology in 2027.&quot;,
    features: [
      &quot;Revolutionary IT&quot;,
      &quot;Transformative technology&quot;,
      &quot;Advanced capabilities&quot;,
      &quot;Innovation platform&quot;,
      &quot;Future-ready solutions&quot;
    ],
    link: &quot;/services/2027-revolutionary-it&quot;,
    category: &quot;Revolutionary 2027 IT&quot;,
    realImplementation: true,
    contactInfo: {
      mobile: &quot;+1 302 464 0950&quot;,
      email: &quot;kleber@ziontechgroup.com&quot;,
      address: &quot;364 E Main St STE 1008 Middletown DE 19709&quot;
    }
  }
];