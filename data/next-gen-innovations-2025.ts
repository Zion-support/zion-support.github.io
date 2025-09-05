export interface NextGenInnovation2025 {
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

export const nextGenInnovations2025: NextGenInnovation2025[] = [
  {
    id: &quot;next-gen-ai-suite&quot;,
    name: &quot;Next-Gen AI Suite&quot;,
    tagline: &quot;Future-ready AI solutions&quot;,
    price: &quot;$179/month&quot;,
    description: &quot;Next-generation AI suite that provides cutting-edge artificial intelligence capabilities.&quot;,
    features: [
      &quot;Next-gen AI models&quot;,
      &quot;Advanced capabilities&quot;,
      &quot;Future-ready features&quot;,
      &quot;Innovation platform&quot;,
      &quot;Expert support&quot;
    ],
    link: &quot;/services/next-gen-ai-suite&quot;,
    category: &quot;Next-Gen Innovations 2025&quot;,
    realImplementation: true,
    contactInfo: {
      mobile: &quot;+1 302 464 0950&quot;,
      email: &quot;kleber@ziontechgroup.com&quot;,
      address: &quot;364 E Main St STE 1008 Middletown DE 19709&quot;
    }  }
],