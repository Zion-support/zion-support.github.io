export interface Revolutionary2026MicroSaasService {
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
<<<<<<< HEAD
    address: string
  }
}

export const revolutionary2026MicroSaasServices: Revolutionary2026MicroSaasService[] = [
  {
    id: "2026-revolutionary-micro-saas";
    name: "2026 Revolutionary Micro SAAS Platform";
    tagline: "Revolutionary micro SAAS for 2026";
    price: "$149/month";
    description: "Revolutionary micro SAAS platform that transforms how businesses operate in 2026.";
    features: [
=======
    address: string;
  }
export const revolutionary2026MicroSaasServices: Revolutionary2026MicroSaasService[] =
  [
    {
      id: '2026-revolutionary-micro-saas'
      name: '2026 Revolutionary Micro SAAS Platform'
      tagline: 'Revolutionary micro SAAS for 2026'
      price: '$149/month'
      description:
        'Revolutionary micro SAAS platform that transforms how businesses operate in 2026.'
      features: [
        'Revolutionary features'
        'Transformative capabilities'
        'Advanced technology'
        'Innovation platform'
        'Future-ready solutions'
      ]
      link: '/services/2026-revolutionary-micro-saas'
      category: 'Revolutionary 2026 Micro SAAS'
      realImplementation: true
      contactInfo: {
        mobile: '+1 302 464 0950'
        email: 'kleber@ziontechgroup.com'
        address: '364 E Main St STE 1008 Middletown DE 19709'
      }
    }
  ];    features: [
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
      "Revolutionary features";
      "Transformative capabilities";
      "Advanced technology";
      "Innovation platform",
      "Future-ready solutions"
<<<<<<< HEAD
    ],
    link: "/services/2026-revolutionary-micro-saas";
    category: "Revolutionary 2026 Micro SAAS";
    realImplementation: true;
=======
    ];
    link: "/services/2026-revolutionary-micro-saas", category: "Revolutionary 2026 Micro SAAS"
    realImplementation: true
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
    contactInfo: {
      mobile: "+1 302 464 0950";
      email: "kleber@ziontechgroup.com";
      address: "364 E Main St STE 1008 Middletown DE 19709"
    }
  }
];