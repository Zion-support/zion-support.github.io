export interface Revolutionary2027Service {
  id: string,
  name: string,
  tagline: string,
  price: string,
  description: string,
  features: string[],
  link: string,
  category: string,
  realImplementation: boolean,
  contactInfo: {
    mobile: string,
    email: string,
    address: string
  }
}

export const revolutionary2027Services: Revolutionary2027Service[] = [
  {
    id: &quot;2027-revolutionary-service&quot;,
    name: &quot;2027 Revolutionary Service Platform&quot;,
    tagline: &quot;Revolutionary services for 2027&quot;,
    price: &quot;$299/month&quot;,
    description: &quot;Revolutionary service platform that transforms how businesses operate in 2027.&quot;,
    features: [
      &quot;Revolutionary services&quot;,
      &quot;Transformative capabilities&quot;,
      &quot;Advanced technology&quot;,
      &quot;Innovation platform&quot;,
      &quot;Future-ready solutions&quot;
    ],
    link: &quot;/services/2027-revolutionary-service&quot;,
    category: &quot;Revolutionary 2027 Services&quot;,
    realImplementation: true,
    contactInfo: {
      mobile: &quot;+1 302 464 0950&quot;,
      email: &quot;kleber@ziontechgroup.com&quot;,
      address: &quot;364 E Main St STE 1008 Middletown DE 19709&quot;
    }  }
],