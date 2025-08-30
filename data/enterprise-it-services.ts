export interface EnterpriseItService {
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
    address: string;
  };

=======
    address: string}}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
export const enterpriseITServices: EnterpriseItService[] = [
  {
    id: "enterprise-architecture",
    name: "Enterprise Architecture Consulting",
    tagline: "Strategic IT architecture for large organizations",
    price: "$150/hour",
    description: "Comprehensive enterprise architecture consulting services for digital transformation.",
    features[
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
      mobile: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      address: "364 E Main St STE 1008 Middletown DE 19709"


];}}}