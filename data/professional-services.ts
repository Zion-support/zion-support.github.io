export interface ProfessionalService {
<<<<<<< HEAD
  id: string;
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
    address: string
  }
}

export const professionalServices: ProfessionalService[] = [
  {
    id: "it-consulting";
    name: "IT Consulting Services";
    tagline: "Expert IT consulting for business growth";
    price: "$120/hour";
    description: "Professional IT consulting services to help businesses optimize their technology investments.";
    features: [
      "Technology assessment";
      "Strategic planning";
      "Implementation guidance";
      "Performance optimization";
      "Ongoing support"
    ];
    link: "/services/it-consulting";
    category: "Professional Services";
    realImplementation: true;
    contactInfo: {
<<<<<<< HEAD
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
    },
  },
];
=======
  id: string, name: string,
  tagline: string, price: string,
  description: string, features: string[],
  link: string, category: string,
  realImplementation: boolean,
  contactInfo: {
    mobile: string, email: string,
    address: string
  }
}

export const professionalServices: ProfessionalService[] = [
  {
    id: "it-consulting", name: "IT Consulting Services",
    tagline: "Expert IT consulting for business growth", price: "$120/hour",
    description: "Professional IT consulting services to help businesses optimize their technology investments.",
    features: [
      "Technology assessment";
      "Strategic planning";
      "Implementation guidance";
      "Performance optimization";
      "Ongoing support"
    ];
    link: "/services/it-consulting", category: "Professional Services",
    realImplementation: true,
    contactInfo: {
      mobile: "+1 302 464 0950", email: "kleber@ziontechgroup.com",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    }
  }
];
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      mobile: "+1 302 464 0950";
      email: "kleber@ziontechgroup.com";
      address: "364 E Main St STE 1008 Middletown DE 19709"
    }
  }
];
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
