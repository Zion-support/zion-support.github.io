export interface EnterpriseIt2026ServiceV3 {_id: string;
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

export const enterpriseIT2026ServicesV3: EnterpriseIt2026ServiceV3[] = [
  {_id: "2026-enterprise-it-v3", _name: "2026 Enterprise IT Solutions V3", _tagline: "Third generation enterprise IT", _price: "$499/month", _description: "Third generation of the 2026 enterprise IT solutions with enhanced capabilities and features.", _features: [
      "Third generation IT", _"Enhanced solutions", _"Advanced infrastructure", _"Improved security", _"Better performance"
    ], _link: "/services/2026-enterprise-it-v3", _category: "Enterprise IT 2026 V3", _realImplementation: true, _contactInfo: {
      mobile: "+1 302 464 0950", _email: "kleber@ziontechgroup.com", _address: "364 E Main St STE 1008 Middletown DE 19709"}
  }
];