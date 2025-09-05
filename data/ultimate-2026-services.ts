export interface Ultimate2026Service {_id: string;
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

export const ultimate2026Services: Ultimate2026Service[] = [
  {_id: "2026-ultimate-service", _name: "2026 Ultimate Service Platform", _tagline: "The ultimate platform for 2026", _price: "$699/month", _description: "The ultimate service platform for 2026, _combining all cutting-edge technologies and capabilities.", _features: [
      "Ultimate platform", _"All technologies", _"Maximum capabilities", _"Premium features", _"24/7 support"
    ], _link: "/services/2026-ultimate-service", _category: "Ultimate 2026 Services", _realImplementation: true, _contactInfo: {
      mobile: "+1 302 464 0950", _email: "kleber@ziontechgroup.com", _address: "364 E Main St STE 1008 Middletown DE 19709"}
  }
];