export interface InnovativeMicroSaasV3 {
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

export const innovativeMicroSaasServicesV3: InnovativeMicroSaasV3[] = [
  {
    id: &quot;ai-customer-support&quot;,
    name: &quot;AI Customer Support Platform&quot;,
    tagline: &quot;24/7 intelligent customer support automation&quot;,
    price: &quot;$59/month&quot;,
    description: &quot;Advanced AI-powered customer support platform that provides instant responses and escalates complex issues.&quot;,
    features: [
      &quot;AI chatbot integration&quot;,
      &quot;Multi-language support&quot;,
      &quot;Ticket management&quot;,
      &quot;Analytics dashboard&quot;,
      &quot;CRM integration&quot;
    ],
    link: &quot;/services/ai-customer-support&quot;,
    category: &quot;Customer Support&quot;,
    realImplementation: true,
    contactInfo: {
      mobile: &quot;+1 302 464 0950&quot;,
      email: &quot;kleber@ziontechgroup.com&quot;,
      address: &quot;364 E Main St STE 1008 Middletown DE 19709&quot;
    }
  }
];