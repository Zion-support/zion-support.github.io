export interface ExtraService {
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

export const extraServices: ExtraService[] = [
  {
    id: "extra-service-example",
    name: "Extra Service Example",
    tagline: "An example extra service",
    price: "$49/month",
    description: "An example extra service description",
    features: ["Feature 1", "Feature 2"],
    link: "https://example.com",
    category: "SaaS",
    realImplementation: true
  }
];