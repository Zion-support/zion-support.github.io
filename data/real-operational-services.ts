export interface RealOperationalService {
export interface RealOperationalService {;
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
export interface RealOperationalService {;
    address: string;
  };
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
export const realOperationalServices: RealOperationalService[] = [
  {
<<<<<<< HEAD
    id: "operational-intelligence", name: "Operational Intelligence Platform",
    tagline: "Real-time operational insights and optimization", price: "$99/month",
    description: "Comprehensive operational intelligence platform for monitoring and optimizing business operations.",
=======
<<<<<<< HEAD
    id: 'operational-intelligence'
    name: 'Operational Intelligence Platform'
    tagline: 'Real-time operational insights and optimization'
    price: '$99/month'
    description:
      'Comprehensive operational intelligence platform for monitoring and optimizing business operations.'
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    features: [
      "Real-time monitoring";
      "Performance analytics";
      "Operational insights";
      "Optimization recommendations";
      "Alert system"
    ];
    link: "/services/operational-intelligence", category: "Operational Services",
    realImplementation: true,
    contactInfo: {
      mobile: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
    },
  },;
];      mobile: "+1 302 464 0950";
      email: "kleber@ziontechgroup.com";
      mobile: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    }
  }
];
<<<<<<< HEAD
      email: "kleber@ziontechgroup.com";
      address: "364 E Main St STE 1008 Middletown DE 19709";
    }
  }
];
;
=======
=======
    id: "operational-intelligence",
    name: "Operational Intelligence Platform",
    tagline: "Real-time operational insights and optimization",
    price: "$99/month",
    description: "Comprehensive operational intelligence platform for monitoring and optimizing business operations.",
    features: [
      "Real-time monitoring",
      "Performance analytics",
      "Operational insights",
      "Optimization recommendations",
      "Alert system"
    ],
    link: "/services/operational-intelligence",
    category: "Operational Services",
    realImplementation: true,
    contactInfo: {
<<<<<<< HEAD
      mobile: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
=======
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
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      address: "364 E Main St STE 1008 Middletown DE 19709"
    }
  }
];
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
