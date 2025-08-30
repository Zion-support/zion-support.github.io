export interface RealOperationalService {
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
export const realOperationalServices: RealOperationalService[] = [
  {
    id: "operational-intelligence",
    name: "Operational Intelligence Platform",
    tagline: "Real-time operational insights and optimization",
    price: "$99/month",
    description: "Comprehensive operational intelligence platform for monitoring and optimizing business operations.",
    features[
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
      mobile: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      address: "364 E Main St STE 1008 Middletown DE 19709"


];}}}