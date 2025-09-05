export interface Revolutionary2026AiService {
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

export const revolutionary2026AIServices: Revolutionary2026AiService[] = [
  {
    id: &quot;2026-revolutionary-ai&quot;,
    name: &quot;2026 Revolutionary AI Platform&quot;,
    tagline: &quot;Revolutionary AI for 2026&quot;,
    price: &quot;$249/month&quot;,
    description: &quot;Revolutionary AI platform that transforms how businesses use artificial intelligence in 2026.&quot;,
    features: [
      &quot;Revolutionary AI&quot;,
      &quot;Transformative capabilities&quot;,
      &quot;Advanced algorithms&quot;,
      &quot;Innovation platform&quot;,
      &quot;Future-ready AI&quot;
    ],
    link: &quot;/services/2026-revolutionary-ai&quot;,
    category: &quot;Revolutionary 2026 AI&quot;,
    realImplementation: true,
    contactInfo: {
      mobile: &quot;+1 302 464 0950&quot;,
      email: &quot;kleber@ziontechgroup.com&quot;,
      address: &quot;364 E Main St STE 1008 Middletown DE 19709&quot;
    }
  }
],