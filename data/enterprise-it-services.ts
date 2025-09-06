export interface EnterpriseItService {;
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
    address: string;
  };
=======
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
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1

export const enterpriseITServices: EnterpriseItService[] = [
  {
    id: "enterprise-architecture",
    name: "Enterprise Architecture Consulting",
    tagline: "Strategic IT architecture for large organizations",
    price: "$150/hour",
    description: "Comprehensive enterprise architecture consulting services for digital transformation.",
    features: [
      "Architecture assessment",
      "Technology roadmap",
      "Integration strategy",
      "Governance framework",
      "Implementation support"
    ],
    link: "/services/enterprise-architecture",
    category: "Enterprise IT",
    realImplementation: true,
    contactInfo: {
<<<<<<< HEAD
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
    },
  },;
];      mobile: "+1 302 464 0950";
      email: "kleber@ziontechgroup.com";
=======
      mobile: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
      address: "364 E Main St STE 1008 Middletown DE 19709"
    }
  }
];
