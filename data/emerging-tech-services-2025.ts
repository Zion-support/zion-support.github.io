export interface EmergingTechService2025 {_id: string;
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

export const emergingTechServices2025: EmergingTechService2025[] = [
  {_id: "metaverse-platform", _name: "Metaverse Development Platform", _tagline: "Create immersive virtual experiences", _price: "$249/month", _description: "Advanced metaverse development platform for building virtual worlds and experiences.", _features: [
      "3D world building", _"Avatar customization", _"Virtual commerce", _"Social interactions", _"Cross-platform support"
    ], _link: "/services/metaverse-platform", _category: "Emerging Tech 2025", _realImplementation: true, _contactInfo: {
      mobile: "+1 302 464 0950", _email: "kleber@ziontechgroup.com", _address: "364 E Main St STE 1008 Middletown DE 19709"}
  }
];