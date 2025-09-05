<<<<<<< HEAD
export interface ProfessionalService {
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

export const professionalServices: ProfessionalService[] = [
  {
    id: &quot;it-consulting&quot;,
    name: &quot;IT Consulting Services&quot;,
    tagline: &quot;Expert IT consulting for business growth&quot;,
    price: &quot;$120/hour&quot;,
    description: &quot;Professional IT consulting services to help businesses optimize their technology investments.&quot;,
    features: [
      &quot;Technology assessment&quot;,
      &quot;Strategic planning&quot;,
      &quot;Implementation guidance&quot;,
      &quot;Performance optimization&quot;,
      &quot;Ongoing support&quot;
    ],
    link: &quot;/services/it-consulting&quot;,
    category: &quot;Professional Services&quot;,
    realImplementation: true,
    contactInfo: {
      mobile: &quot;+1 302 464 0950&quot;,
      email: &quot;kleber@ziontechgroup.com&quot;,
      address: &quot;364 E Main St STE 1008 Middletown DE 19709&quot;
    }
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  }
],