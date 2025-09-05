export interface ProfessionalService {;
  id: string,;
  name: string,;
  tagline: string,;
  price: string,;
  description: string,;
  features: string[],;
  link: string,;
  category: string,;
  realImplementation: boolean,;
  contactInfo: {;
    mobile: string,;
    email: string,;
    address: string;
  }
}
<<<<<<< HEAD

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
=======
;
export const professionalServices: ProfessionalService[] = [;
  {;
    id: "it-consulting",;
    name: "IT Consulting Services",;
    tagline: "Expert IT consulting for business growth",;
    price: "$120/hour",;
    description: "Professional IT consulting services to help businesses optimize their technology investments.",;
    features: [;
      "Technology assessment",;
      "Strategic planning",;
      "Implementation guidance",;
      "Performance optimization",;
      "Ongoing support";
    ],;
    link: "/services/it-consulting",;
    category: "Professional Services",;
    realImplementation: true,;
    contactInfo: {;
      mobile: "+1 302 464 0950",;
      email: "kleber@ziontechgroup.com",;
      address: "364 E Main St STE 1008 Middletown DE 19709";
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
    }
  }
];