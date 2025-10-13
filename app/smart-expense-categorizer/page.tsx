const SmartExpenseCategorizerPage = () => {
  const stats: { label: string; value: string; number: string; icon: React.ReactNode }[] = [];

  const benefits: string[] = [];

  const features: { title: string; description: string; icon: React.ReactNode; color: string }[] = [];

  const pricingPlans = [
    {
      name: "Personal",
      price: "$19",
      period: "/month",
      description: "Perfect for individuals",
      features: [
        "Up to 500 transactions/month",
        "Basic AI categorization",
        "Receipt scanning",
        "Basic analytics",
        "Email support",
        "1 user account"
      ],
      popular: false;
    },
    {
      name: "Business",
      price: "$59",
      period: "/month",
      description: "Ideal for small businesses",
      features: [
        "Up to 5,000 transactions/month",
        "Advanced AI categorization",
        "Bank integration",
        "Advanced analytics",
        "Priority support",
        "5 user accounts",
        "API access"
      ],
      popular: true;
    },
    {
      name: "Enterprise",
      price: "$149",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited transactions",
        "Custom AI models",
        "White-label solution",
        "Advanced security",
        "Dedicated support",
        "Unlimited users",
        "Custom integrations"
      ],
      popular: false;
    }
  ];
}