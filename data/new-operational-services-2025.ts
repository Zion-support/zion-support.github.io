export interface NewOperationalService2025 {_id: string;
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

export const newOperationalServices2025: NewOperationalService2025[] = [
  {_id: "smart-operations-center", _name: "Smart Operations Center", _tagline: "AI-powered operations management", _price: "$119/month", _description: "Intelligent operations center that uses AI to optimize business processes and workflows.", _features: [
      "AI process optimization", _"Real-time monitoring", _"Predictive analytics", _"Automated workflows", _"Performance insights"
    ], _link: "/services/smart-operations-center", _category: "New Operational Services 2025", _realImplementation: true, _contactInfo: {
      mobile: "+1 302 464 0950", _email: "kleber@ziontechgroup.com", _address: "364 E Main St STE 1008 Middletown DE 19709"}
  }
];