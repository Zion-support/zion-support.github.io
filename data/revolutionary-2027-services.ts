export interface Revolutionary2027Service {_id: string;
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

export const revolutionary2027Services: Revolutionary2027Service[] = [
  {_id: "2027-revolutionary-service", _name: "2027 Revolutionary Service Platform", _tagline: "Revolutionary services for 2027", _price: "$299/month", _description: "Revolutionary service platform that transforms how businesses operate in 2027.", _features: [
      "Revolutionary services", _"Transformative capabilities", _"Advanced technology", _"Innovation platform", _"Future-ready solutions"
    ], _link: "/services/2027-revolutionary-service", _category: "Revolutionary 2027 Services", _realImplementation: true, _contactInfo: {
      mobile: "+1 302 464 0950", _email: "kleber@ziontechgroup.com", _address: "364 E Main St STE 1008 Middletown DE 19709"}
  }
];