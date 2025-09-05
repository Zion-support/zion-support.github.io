export interface EmergingTech2027Service {
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

export const emergingTech2027Services: EmergingTech2027Service[] = [
  {
    id: &quot;2027-emerging-tech&quot;,
    name: &quot;2027 Emerging Tech Platform&quot;,
    tagline: &quot;Emerging tech for 2027&quot;,
    price: &quot;$349/month&quot;,
    description: &quot;Advanced platform showcasing emerging technologies and innovations for 2027.&quot;,
    features: [
      &quot;Emerging technologies&quot;,
      &quot;Innovation platform&quot;,
      &quot;Future capabilities&quot;,
      &quot;Advanced features&quot;,
      &quot;Expert insights&quot;
    ],
    link: &quot;/services/2027-emerging-tech&quot;,
    category: &quot;Emerging Tech 2027&quot;,
    realImplementation: true,
    contactInfo: {
      mobile: &quot;+1 302 464 0950&quot;,
      email: &quot;kleber@ziontechgroup.com&quot;,
      address: &quot;364 E Main St STE 1008 Middletown DE 19709&quot;
    }  }
],