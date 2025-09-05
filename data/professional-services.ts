export interface ProfessionalService {_id: string;
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

export const professionalServices: ProfessionalService[] = [
  {_id: "it-consulting", _name: "IT Consulting Services", _tagline: "Expert IT consulting for business growth", _price: "$120/hour", _description: "Professional IT consulting services to help businesses optimize their technology investments.", _features: [
      "Technology assessment", _"Strategic planning", _"Implementation guidance", _"Performance optimization", _"Ongoing support"
    ], _link: "/services/it-consulting", _category: "Professional Services", _realImplementation: true, _contactInfo: {
      mobile: "+1 302 464 0950", _email: "kleber@ziontechgroup.com", _address: "364 E Main St STE 1008 Middletown DE 19709"}
  }
];