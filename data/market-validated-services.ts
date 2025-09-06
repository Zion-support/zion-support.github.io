export interface MarketValidatedService {
  id: string;
  name: string;
  tagline: string;
  price: string;
  description: string;
  features: string[];
  link: string;
  category: string;
  realImplementation: boolean;
}

export const marketValidatedServices: MarketValidatedService[] = [
  {
    id: "market-validated-example",
    name: "Market Validated Example",
    tagline: "A market validated service",
    price: "$99/month",
    description: "A market validated service description",
    features: ["Feature 1", "Feature 2"],
    link: "https://example.com",
    category: "SaaS",
    realImplementation: true
  }
];