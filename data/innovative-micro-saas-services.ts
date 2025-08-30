export interface InnovativeMicroSaasService {
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
export const innovativeMicroSaasServices: InnovativeMicroSaasService[] = [
  {
    id: "smart-project-manager",
    name: "Smart Project Manager",
    tagline: "AI-powered project management and collaboration",
    price: "$39/month",
    description: "Intelligent project management platform that uses AI to optimize workflows and team collaboration.",
    features[
      "AI task prioritization",
      "Team collaboration tools",
      "Progress tracking",
      "Resource optimization",
      "Integration capabilities"
    ],
    link: "/services/smart-project-manager",
    category: "Project Management",
    realImplementation: true,
    contactInfo: {
      mobile: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      address: "364 E Main St STE 1008 Middletown DE 19709"


];}}}