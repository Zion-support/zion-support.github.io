export interface InnovativeMicroSaasV3 {
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
<<<<<<< HEAD
    address: string
  }
=======
    address: string;
  };
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
}

export const innovativeMicroSaasServicesV3: InnovativeMicroSaasV3[] = [
  {
<<<<<<< HEAD
    id: "ai-customer-support";
    name: "AI Customer Support Platform";
    tagline: "24/7 intelligent customer support automation";
    price: "$59/month";
    description: "Advanced AI-powered customer support platform that provides instant responses and escalates complex issues.";
    features: [
      "AI chatbot integration";
      "Multi-language support";
      "Ticket management";
      "Analytics dashboard",
      "CRM integration"
    ],
    link: "/services/ai-customer-support";
    category: "Customer Support";
    realImplementation: true;
    contactInfo: {
      mobile: "+1 302 464 0950";
=======
    address: string;
  }
export const innovativeMicroSaasServicesV3: InnovativeMicroSaasV3[] = [
  {
    id: 'ai-customer-support'
    name: 'AI Customer Support Platform'
    tagline: '24/7 intelligent customer support automation'
    price: '$59/month'
    description:
      'Advanced AI-powered customer support platform that provides instant responses and escalates complex issues.'
    features: [
      'AI chatbot integration'
      'Multi-language support'
      'Ticket management'
      'Analytics dashboard'
      'CRM integration'
    ]
    link: '/services/ai-customer-support'
    category: 'Customer Support'
    realImplementation: true
    contactInfo: {
      mobile: '+1 302 464 0950'
      email: 'kleber@ziontechgroup.com'
      address: '364 E Main St STE 1008 Middletown DE 19709'
    }
  }
];      mobile: "+1 302 464 0950";
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
      email: "kleber@ziontechgroup.com";
      address: "364 E Main St STE 1008 Middletown DE 19709"
    }
  }
];
=======
    id: 'ai-customer-support',
    name: 'AI Customer Support Platform',
    tagline: '24/7 intelligent customer support automation',
    price: '$59/month',
    description:
      'Advanced AI-powered customer support platform that provides instant responses and escalates complex issues.',
    features: [
      'AI chatbot integration',
      'Multi-language support',
      'Ticket management',
      'Analytics dashboard',
      'CRM integration',
    ],
    link: '/services/ai-customer-support',
    category: 'Customer Support',
    realImplementation: true,
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
    },
  },
];
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
