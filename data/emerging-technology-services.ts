export interface EmergingTechnologyService {_id: string;
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

export const emergingTechnologyServices: EmergingTechnologyService[] = [
  {_id: "blockchain-platform", _name: "Blockchain Development Platform", _tagline: "Build and deploy blockchain applications", _price: "$179/month", _description: "Comprehensive blockchain development platform for creating decentralized applications.", _features: [
      "Smart contract development", _"DApp deployment", _"Blockchain integration", _"Security auditing", _"Performance monitoring"
    ], _link: "/services/blockchain-platform", _category: "Emerging Tech", _realImplementation: true, _contactInfo: {
      mobile: "+1 302 464 0950", _email: "kleber@ziontechgroup.com", _address: "364 E Main St STE 1008 Middletown DE 19709"}
  }
];