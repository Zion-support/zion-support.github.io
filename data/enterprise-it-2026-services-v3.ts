export interface EnterpriseIt2026ServiceV3 {
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

export const enterpriseIT2026ServicesV3: EnterpriseIt2026ServiceV3[] = [
  {
    id: &quot;2026-enterprise-it-v3&quot;,
    name: &quot;2026 Enterprise IT Solutions V3&quot;,
    tagline: &quot;Third generation enterprise IT&quot;,
    price: &quot;$499/month&quot;,
    description: &quot;Third generation of the 2026 enterprise IT solutions with enhanced capabilities and features.&quot;,
    features: [
      &quot;Third generation IT&quot;,
      &quot;Enhanced solutions&quot;,
      &quot;Advanced infrastructure&quot;,
      &quot;Improved security&quot;,
      &quot;Better performance&quot;
    ],
    link: &quot;/services/2026-enterprise-it-v3&quot;,
    category: &quot;Enterprise IT 2026 V3&quot;,
    realImplementation: true,
    contactInfo: {
      mobile: &quot;+1 302 464 0950&quot;,
      email: &quot;kleber@ziontechgroup.com&quot;,
      address: &quot;364 E Main St STE 1008 Middletown DE 19709&quot;
    }  }
],