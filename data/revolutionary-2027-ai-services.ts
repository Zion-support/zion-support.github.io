export interface Revolutionary2027AiService {
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

export const revolutionary2027AIServices: Revolutionary2027AiService[] = [
  {
    id: &quot;2027-revolutionary-ai&quot;,
    name: &quot;2027 Revolutionary AI Platform&quot;,
    tagline: &quot;Revolutionary AI for 2027&quot;,
    price: &quot;$399/month&quot;,
    description: &quot;Revolutionary AI platform that transforms how businesses use artificial intelligence in 2027.&quot;,
    features: [
      &quot;Revolutionary AI&quot;,
      &quot;Transformative capabilities&quot;,
      &quot;Advanced algorithms&quot;,
      &quot;Innovation platform&quot;,
      &quot;Future-ready AI&quot;
    ],
    link: &quot;/services/2027-revolutionary-ai&quot;,
    category: &quot;Revolutionary 2027 AI&quot;,
    realImplementation: true,
    contactInfo: {
      mobile: &quot;+1 302 464 0950&quot;,
      email: &quot;kleber@ziontechgroup.com&quot;,
      address: &quot;364 E Main St STE 1008 Middletown DE 19709&quot;
    }  }
],