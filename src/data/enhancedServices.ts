export interface ProductListing {
  id: string;
  title: string;
  description: string;
  category: string;
  price: number;
  currency: string;
  tags: string[];
  author: {
    name: string;
    avatar: string;
  };
  rating: number;
  reviews: number;
  image: string;
  featured: boolean;
}

export const ENHANCED_SERVICES: ProductListing[] = [
  {
    id: "ai-automation-suite",
    title: "AI Process Automation Suite",
    description: "Complete workflow automation solution using AI to streamline business processes.",
    category: "AI Automation",
    price: 2999,
    currency: "$",
    tags: ["Process Automation", "RPA", "Workflow Optimization", "AI"],
    author: {
      name: "Zion Tech Group",
      avatar: "/avatars/zion-tech.jpg"
    },
    rating: 4.8,
    reviews: 156,
    image: "/images/ai-automation.jpg",
    featured: true
  }
];

export const SERVICE_CATEGORIES = [
  "AI Automation",
  "Micro SaaS",
  "Cybersecurity",
  "Cloud Infrastructure",
  "Data Analytics",
  "IT Services"
];