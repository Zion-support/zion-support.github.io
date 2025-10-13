
export default function page() {
  const stats = [
    { label: "Stat 1", value: "100%" }
  ];
  const testimonials = [
    { name: "John Doe", role: "CEO", company: "Tech Corp", content: "Great service!", avatar: "/placeholder-avatar.jpg", rating: 5 }
  ];
  const benefits = [
    "Benefit 1",
    "Benefit 2"
  ];
  const features = [
    {
      title: "AI-Powered Campaign Optimization",
      description: "Automatically optimize your marketing campaigns using machine learning algorithms that analyze performance data and adjust targeting, timing, and content in real-time.",
      icon: <Target className="w-6 h-6" />,
      benefits: ["Real-time optimization", "A/B testing automation", "Performance prediction", "ROI maximization"]
    },
    {
      title: "Intelligent Audience Segmentation",
      description: "AI-driven audience segmentation that automatically groups customers based on behavior, preferences, and engagement patterns for highly targeted campaigns.",
      icon: <Users className="w-6 h-6" />,
      benefits: ["Behavioral segmentation", "Predictive modeling", "Dynamic audience updates", "Personalization at scale"]
    },
    {
      title: "Multi-Channel Campaign Orchestration",
      description: "Seamlessly coordinate campaigns across email, social media, SMS, push notifications, and web with unified messaging and timing.",
      icon: <MessageSquare className="w-6 h-6" />,
      benefits: ["Cross-channel consistency", "Unified customer journey", "Automated scheduling", "Performance tracking"]
    },
    {
      title: "Predictive Content Generation",
      description: "AI-powered content creation that generates personalized marketing messages, subject lines, and creative assets based on audience data and preferences.",
      icon: <Brain className="w-6 h-6" />,
      benefits: ["Personalized content", "A/B testing automation", "Brand voice consistency", "Performance optimization"]
    },
    {
      title: "Advanced Analytics & Insights",
      description: "Comprehensive analytics dashboard with AI-powered insights, attribution modeling, and predictive analytics for data-driven marketing decisions.",
      icon: <BarChart3 className="w-6 h-6" />,
      benefits: ["Attribution modeling", "Predictive analytics", "Custom dashboards", "Real-time reporting"]
    },
    {
      title: "Automated Lead Nurturing",
      description: "Intelligent lead nurturing workflows that automatically guide prospects through the sales funnel with personalized content and timing.",
      icon: <Zap className="w-6 h-6" />,
      benefits: ["Behavioral triggers", "Personalized sequences", "Lead scoring integration", "Conversion optimization"]
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$149",
      period: "/month",
      description: "Perfect for small businesses",
      features: [
        "Up to 5,000 contacts",
        "Basic AI features",
        "Email campaigns",
        "Social media integration",
        "Email support",
        "Basic analytics",
        "5 users included"
      ],
      popular: false;
    },
    {
      name: "Professional",
      price: "$299",
      period: "/month",
      description: "Most popular for growing businesses",
      features: [
        "Up to 25,000 contacts",
        "Advanced AI features",
        "Multi-channel campaigns",
        "Priority support",
        "Advanced analytics",
        "Custom workflows",
        "15 users included",
        "API access"
      ],
      popular: true;
    },
    {
      name: "Enterprise",
      price: "$599",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited contacts",
        "AI-powered insights",
        "Custom integrations",
        "24/7 phone support",
        "Advanced security",
        "White-label options",
        "Unlimited users",
        "Dedicated account manager"
      ],
      popular: false;
    }
  ];

}

}