export interface ExtraService {
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
export interface ExtraService {
=======


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
  id: string;
  name: string;
  tagline: string;
  price: string;
  description: string;
  features: string[];
  link: string;
  category: string;
  real_implementation: boolean;
  contact_info: {
    mobile: string;
    email: string;
}



    address: string;
  }
export const extraServices: ExtraService[] = [
  {
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

=======
    address: string;
  }
;
export const extra_services: ExtraService[] = [;
  {
    id: 'cloud - migration - expert',
    name: 'Cloud Migration Expert',
    tagline: 'Seamless cloud migration and optimization',
    price: '$99 / hour',
    description:;
      'Professional cloud migration services for businesses looking to modernize their infrastructure.',
    features: [;
      'AWS / Azure / GCP migration',
      'Performance optimization',
      'Cost analysis',
      'Security implementation',
      '24 / 7 support',
    ],
    link: '/services / cloud - migration - expert',
    category: 'Cloud Services',
    real_implementation: true,
    contact_info: {

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup && ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
    },
  },
  {
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
  id: string, name: string,
  tagline: string, price: string,
  description: string, features: string[],
  link: string, category: string,
  realImplementation: boolean,
  contactInfo: {
    mobile: string, email: string,
    address: string
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
  id: string;
=======
id: string;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
    address: string;
  };
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
}

    address: string;
  }
export const extraServices: ExtraService[] = [
  {


<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup && ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
    },
  },
];      mobile: "+1 302 464 0950";
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======


=======

    id: "cloud-migration-expert",
    name: "Cloud Migration Expert",
    tagline: "Seamless cloud migration and optimization",
    price: "$99/hour",
    description: "Professional cloud migration services for businesses looking to modernize their infrastructure.",
    features: [
      "AWS/Azure/GCP migration",
      "Performance optimization",
      "Cost analysis",
      "Security implementation",
      "24/7 support"
    ],
    link: "/services/cloud-migration-expert",
    category: "Cloud Services",
    realImplementation: true,
    contactInfo: {
      mobile: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      address: "364 E Main St STE 1008 Middletown DE 19709"
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
    }
  },
  {
    id: "cybersecurity-audit",
    name: "Cybersecurity Audit Pro",
    tagline: "Comprehensive security assessment and protection",
    price: "$199/hour",
    description: "Complete cybersecurity audit and vulnerability assessment for enterprise-level protection.",
    features: [
      "Vulnerability assessment",
      "Penetration testing",
      "Security policy review",
      "Compliance audit",
      "Remediation guidance"
    ],
    link: "/services/cybersecurity-audit",
    category: "Security",
    realImplementation: true,
    contactInfo: {
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
      address: "364 E Main St STE 1008 Middletown DE 19709"
      address: "364 E Main St STE 1008 Middletown DE 19709"
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
    address: string
  }
}

export const extraServices: ExtraService[] = [
  {
    id: "cloud-migration-expert";
    name: "Cloud Migration Expert";
    tagline: "Seamless cloud migration and optimization";
    price: "$99/hour";
    description: "Professional cloud migration services for businesses looking to modernize their infrastructure.";
    features: [
      "AWS/Azure/GCP migration";
      "Performance optimization";
      "Cost analysis";
      "Security implementation",
      "24/7 support"
    ],
    link: "/services/cloud-migration-expert";
    category: "Cloud Services";
    realImplementation: true;
    contactInfo: {
      mobile: "+1 302 464 0950";
      email: "kleber@ziontechgroup.com";
      address: "364 E Main St STE 1008 Middletown DE 19709"
    }
  },
  {
    id: "cybersecurity-audit";
    name: "Cybersecurity Audit Pro";
    tagline: "Comprehensive security assessment and protection";
    price: "$199/hour";
    description: "Complete cybersecurity audit and vulnerability assessment for enterprise-level protection.";
    features: [
      "Vulnerability assessment";
      "Penetration testing";
      "Security policy review";
      "Compliance audit",
      "Remediation guidance"
    ],
    link: "/services/cybersecurity-audit";
    category: "Security";
    realImplementation: true;
    contactInfo: {
      mobile: "+1 302 464 0950";
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
      email: "kleber@ziontechgroup.com";
      address: "364 E Main St STE 1008 Middletown DE 19709";
    }
  }

      mobile: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
<<<<<<< HEAD
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
      address: "364 E Main St STE 1008 Middletown DE 19709"
    }
  },
  {
    id: "cybersecurity-audit",
    name: "Cybersecurity Audit Pro",
    tagline: "Comprehensive security assessment and protection",
    price: "$199/hour",
    description: "Complete cybersecurity audit and vulnerability assessment for enterprise-level protection.",
    features: [
      "Vulnerability assessment",
      "Penetration testing",
      "Security policy review",
      "Compliance audit",
      "Remediation guidance"
    ],
    link: "/services/cybersecurity-audit",
    category: "Security",
    realImplementation: true,
    contactInfo: {
<<<<<<< HEAD
      mobile: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
    },
  },;
];      mobile: "+1 302 464 0950";
      email: "kleber@ziontechgroup.com";
      address: "364 E Main St STE 1008 Middletown DE 19709"
    }
  }
];
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
