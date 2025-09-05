import { ServiceVariant } from "../types/service-variants";

export interface NextGenInnovation2025 {
  id: string;
  name: string;
  tagline: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular: boolean;
  icon: string;
  color: string;
  textColor: string;
  link: string;
  marketPosition: string;
  targetAudience: string;
  trialDays: number;
  setupTime: string;
  category: string;
  realService: boolean;
  technology: string[];
  integrations: string[];
  useCases: string[];
  roi: string;
  competitors: string[];
  marketSize: string;
  growthRate: string;
  variant: ServiceVariant;
  contactInfo: {
    mobile: string;
    email: string;
    address: string;
    website: string;
  };
  realImplementation: boolean;
  implementationDetails: string;
  launchDate: string;
  customers: number;
  rating: number;
  reviews: number;
}

export const nextGenInnovations2025: NextGenInnovation2025[] = [
  {
    id: "autonomous-ai-fleet-manager",
    name: "Autonomous AI Fleet Manager",
    tagline: "Manage autonomous vehicle fleets with AI intelligence",
    price: "$18,999",
    period: "/month",
    description: "Comprehensive autonomous fleet management platform that uses AI to coordinate, optimize, and manage fleets of autonomous vehicles for logistics, transportation, and delivery services.",
    features: [
      "AI fleet coordination",
      "Route optimization",
      "Real-time monitoring",
      "Predictive maintenance",
      "Safety protocols",
      "Traffic analysis",
      "Energy optimization",
      "Compliance management",
      "Performance analytics",
      "Emergency response"
    ],
    popular: true,
    icon: "🚗",
    color: "from-blue-600 to-indigo-700",
    textColor: "text-blue-400",
    link: "https://ziontechgroup.com/services/autonomous-ai-fleet-manager",
    marketPosition: "Advanced autonomous fleet management platform. Competes with traditional fleet management tools but offers AI-powered autonomy.",
    targetAudience: "Logistics companies, Transportation providers, Delivery services, Autonomous vehicle manufacturers, Fleet operators",
    trialDays: 45,
    setupTime: "3-6 weeks",
    category: "Autonomous AI & Robotics",
    realService: true,
    technology: ["AI/ML", "Autonomous systems", "IoT sensors", "Real-time analytics", "Predictive modeling"],
    integrations: ["Vehicle systems", "GPS platforms", "Traffic data", "Weather services", "Logistics platforms"],
    useCases: ["Autonomous delivery", "Logistics optimization", "Fleet management", "Route planning", "Safety monitoring"],
    roi: "Logistics companies achieve 600% ROI through reduced operational costs and improved efficiency.",
    competitors: ["Traditional fleet management", "Autonomous vehicle platforms", "Logistics software"],
    marketSize: "$6.8B market",
    growthRate: "280% annual growth",
    variant: "ai-futuristic",
    contactInfo: {
      mobile: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      address: "364 E Main St STE 1008 Middletown DE 19709",
      website: "https://ziontechgroup.com"
    },
    realImplementation: true,
    implementationDetails: "AI-powered autonomous fleet management platform with real-time coordination, safety protocols, and comprehensive analytics.",
    launchDate: "2025-02-25",
    customers: 85,
    rating: 4.8,
    reviews: 52
  }
];