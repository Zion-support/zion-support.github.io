export interface EmergingTech2026ServiceV3 {
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

export const emergingTech2026ServicesV3: EmergingTech2026ServiceV3[] = [
  {
    id: &quot;2026-emerging-tech-v3&quot;,
    name: &quot;2026 Emerging Tech Platform V3&quot;,
    tagline: &quot;Third generation emerging tech&quot;,
    price: &quot;$399/month&quot;,
    description: &quot;Third generation of the 2026 emerging tech platform with enhanced capabilities and features.&quot;,
    features: [
      &quot;Third generation tech&quot;,
      &quot;Enhanced capabilities&quot;,
      &quot;Advanced features&quot;,
      &quot;Improved platform&quot;,
      &quot;Better performance&quot;
    ],
    link: &quot;/services/2026-emerging-tech-v3&quot;,
    category: &quot;Emerging Tech 2026 V3&quot;,
    realImplementation: true,
    contactInfo: {
      mobile: &quot;+1 302 464 0950&quot;,
      email: &quot;kleber@ziontechgroup.com&quot;,
      address: &quot;364 E Main St STE 1008 Middletown DE 19709&quot;
    }  }
],