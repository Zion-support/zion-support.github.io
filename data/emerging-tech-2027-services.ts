export interface EmergingTech2027Service {_id: string;
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

export const emergingTech2027Services: EmergingTech2027Service[] = [
  {_id: "2027-emerging-tech", _name: "2027 Emerging Tech Platform", _tagline: "Emerging tech for 2027", _price: "$349/month", _description: "Advanced platform showcasing emerging technologies and innovations for 2027.", _features: [
      "Emerging technologies", _"Innovation platform", _"Future capabilities", _"Advanced features", _"Expert insights"
    ], _link: "/services/2027-emerging-tech", _category: "Emerging Tech 2027", _realImplementation: true, _contactInfo: {
      mobile: "+1 302 464 0950", _email: "kleber@ziontechgroup.com", _address: "364 E Main St STE 1008 Middletown DE 19709"}
  }
];