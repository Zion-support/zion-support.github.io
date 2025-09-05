export interface RealMicroSaasService2024 {
  id: string;
  name: string;
  tagline: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  rating: number;
  customers: string;
}

export const realMicroSaasServices2024: RealMicroSaasService2024[] = [
  {
    id: "ai-invoice-generator-pro",
    name: "AI Invoice Generator Pro",
    tagline: "Intelligent invoice creation and payment tracking",
    price: "$29",
    period: "/month",
    description: "AI-powered invoice generation platform with automated templates, payment tracking, and multi-currency support.",
    features: [
      "AI-powered templates",
      "Automated follow-ups",
      "Multi-currency support",
      "Payment tracking",
      "Custom branding",
      "Integration APIs"
    ],
    rating: 4.8,
    customers: "1,200+"
  }
];
