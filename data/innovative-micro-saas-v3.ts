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
  }
];