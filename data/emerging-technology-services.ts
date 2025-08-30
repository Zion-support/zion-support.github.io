export interface EmergingTechnologyService {
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
export const emergingTechnologyServices: EmergingTechnologyService[] = [
  {
    id: "blockchain-platform",
    name: "Blockchain Development Platform",
    tagline: "Build and deploy blockchain applications",
    price: "$179/month",
    description: "Comprehensive blockchain development platform for creating decentralized applications.",
    features[
      "Smart contract development",
      "DApp deployment",
      "Blockchain integration",
      "Security auditing",
      "Performance monitoring"
    ],
    link: "/services/blockchain-platform",
    category: "Emerging Tech",
    realImplementation: true,
    contactInfo: {
      mobile: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      address: "364 E Main St STE 1008 Middletown DE 19709"


];}}}