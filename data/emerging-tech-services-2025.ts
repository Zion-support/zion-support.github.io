export interface EmergingTechService2025 {
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

export const emergingTechServices2025: EmergingTechService2025[] = [
  {
    id: &quot;metaverse-platform&quot;,
    name: &quot;Metaverse Development Platform&quot;,
    tagline: &quot;Create immersive virtual experiences&quot;,
    price: &quot;$249/month&quot;,
    description: &quot;Advanced metaverse development platform for building virtual worlds and experiences.&quot;,
    features: [
      &quot;3D world building&quot;,
      &quot;Avatar customization&quot;,
      &quot;Virtual commerce&quot;,
      &quot;Social interactions&quot;,
      &quot;Cross-platform support&quot;
    ],
    link: &quot;/services/metaverse-platform&quot;,
    category: &quot;Emerging Tech 2025&quot;,
    realImplementation: true,
    contactInfo: {
      mobile: &quot;+1 302 464 0950&quot;,
      email: &quot;kleber@ziontechgroup.com&quot;,
      address: &quot;364 E Main St STE 1008 Middletown DE 19709&quot;
    }  }
],