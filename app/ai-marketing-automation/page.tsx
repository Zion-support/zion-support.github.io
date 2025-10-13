
export default function AIMarketingAutomation() {
  const features = [
    {
      title: "Email Marketing Automation",
      description: "Intelligent email campaigns with personalized content, automated sequences, and advanced segmentation based on user behavior and preferences.",
      icon: <Mail className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      benefits: ["Personalized Content", "Behavioral Triggers", "A/B Testing", "Analytics Dashboard"]
    },
    {
      title: "Social Media Management",
      description: "Automated social media posting, content scheduling, and engagement tracking across all major platforms with AI-powered content optimization.",
      icon: <Share2 className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      benefits: ["Multi-platform Posting", "Content Optimization", "Engagement Tracking", "Hashtag Research"]
    },
    {
      title: "Lead Scoring & Nurturing",
      description: "AI-powered lead qualification and automated nurturing sequences that identify high-value prospects and guide them through the sales funnel.",
      icon: <Target className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      benefits: ["Lead Scoring", "Nurturing Sequences", "Behavioral Tracking", "Conversion Optimization"]
    },
    {
      title: "Campaign Analytics",
      description: "Comprehensive analytics and reporting with real-time insights, ROI tracking, and predictive analytics for campaign optimization.",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      benefits: ["Real-time Analytics", "ROI Tracking", "Predictive Insights", "Custom Reports"]
    },
    {
      title: "Customer Segmentation",
      description: "Advanced customer segmentation using AI to create highly targeted audiences based on demographics, behavior, and preferences.",
      icon: <Users className="w-8 h-8" />,
      color: "from-indigo-500 to-purple-500",
      benefits: ["Dynamic Segmentation", "Behavioral Analysis", "Personalization", "Audience Insights"]
    },
    {
      title: "Workflow Automation",
      description: "Automated marketing workflows that trigger based on customer actions, ensuring timely and relevant communication throughout the customer journey.",
      icon: <Zap className="w-8 h-8" />,
      color: "from-teal-500 to-cyan-500",
      benefits: ["Trigger-based Actions", "Multi-channel Workflows", "Conditional Logic", "Performance Monitoring"]
    }
  ];

  const pricing = [
    {
      name: "Starter",
      price: "$199",
      period: "/month",
      description: "Perfect for small businesses getting started with marketing automation",
      features: [
        "Up to 1,000 contacts",
        "Email automation",
        "Basic analytics",
        "Social media posting",
        "Email support"
      ],
      popular: false;
    },
    {
      name: "Professional",
      price: "$399",
      period: "/month",
      description: "Ideal for growing businesses with advanced automation needs",
      features: [
        "Up to 10,000 contacts",
        "Advanced email automation",
        "Lead scoring",
        "A/B testing",
        "Advanced analytics",
        "Priority support"
      ],
      popular: true;
    },
    {
      name: "Enterprise",
      price: "$799",
      period: "/month",
      description: "Complete solution for large organizations with complex requirements",
      features: [
        "Unlimited contacts",
        "Custom workflows",
        "Advanced segmentation",
        "API access",
        "Custom integrations",
        "Dedicated support"
      ],
      popular: false;
    }
  ];

}

}