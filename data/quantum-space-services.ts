export interface QuantumSpaceService {
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

export const quantumSpaceServices: QuantumSpaceService[] = [
  {
    id: 'quantum-computing-platform',
    name: 'Quantum Computing Platform',
    tagline: 'Next-generation quantum computing solutions',
    price: '$199/month',
    description:
      'Advanced quantum computing platform for complex calculations and simulations.',
    features: [
      'Quantum algorithms',
      'Simulation tools',
      'API access',
      'Documentation',
      'Support services',
    ],
    link: '/services/quantum-computing-platform',
    category: 'Quantum Computing',
    realImplementation: true,
    contactInfo: {
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
    },
  },
<<<<<<< HEAD
];
=======
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

export const quantumSpaceServices: QuantumSpaceService[] = [
  {
    id: "quantum-computing-platform", name: "Quantum Computing Platform",
    tagline: "Next-generation quantum computing solutions", price: "$199/month",
    description: "Advanced quantum computing platform for complex calculations and simulations.",
    features: [
      "Quantum algorithms";
      "Simulation tools";
      "API access";
      "Documentation";
      "Support services"
    ];
    link: "/services/quantum-computing-platform", category: "Quantum Computing",
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
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
