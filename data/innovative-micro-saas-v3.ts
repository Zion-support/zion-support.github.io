<<<<<<< HEAD
export interface InnovativeMicroSaasV3 {
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
=======
export interface InnovativeMicroSaasV3 {_id: string;
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
    address: string;};
}

export const innovativeMicroSaasServicesV3: InnovativeMicroSaasV3[] = [
  {_id: "ai-customer-support", _name: "AI Customer Support Platform", _tagline: "24/7 intelligent customer support automation", _price: "$59/month", _description: "Advanced AI-powered customer support platform that provides instant responses and escalates complex issues.", _features: [
      "AI chatbot integration", _"Multi-language support", _"Ticket management", _"Analytics dashboard", _"CRM integration"
    ], _link: "/services/ai-customer-support", _category: "Customer Support", _realImplementation: true, _contactInfo: {
      mobile: "+1 302 464 0950", _email: "kleber@ziontechgroup.com", _address: "364 E Main St STE 1008 Middletown DE 19709"}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  }
],