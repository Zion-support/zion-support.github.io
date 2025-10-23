import React from "react";
import { Helmet } from "react-helmet-async";
import { TrendingUp, Users, Target, BarChart3 } from "lucide-react";

const AISalesAutomationPage: React.FC = () => {
  
  const _features = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Lead Scoring & Qualification",
      description:
        "Automatically score and qualify leads using AI to identify the most promising prospects and prioritize your sales efforts.",
      benefits: [
        "95% accuracy in lead scoring",
        "Automated qualification",
        "Priority ranking",
        "Behavioral analysis",
      ],
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Automated Follow-ups",
      description:
        "Never miss a follow-up with intelligent automation that sends personalized messages at the perfect time.",
      benefits: [
        "Perfect timing",
        "Personalized content",
        "Multi-channel outreach",
        "A/B testing",
      ],
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Predictive Analytics",
      description:
        "Predict which deals are most likely to close and when, helping you focus on high-probability opportunities.",
      benefits: [
        "Deal probability scoring",
        "Close date prediction",
        "Risk identification",
        "Revenue forecasting",
      ],
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Performance Optimization",
      description:
        "Continuously optimize your sales process with AI-driven insights and recommendations for better results.",
      benefits: [
        "Process optimization",
        "Performance insights",
        "Best practice recommendations",
        "ROI tracking",
      ],
    },
  ];

  const _pricingPlans = [
    {
      name: "Starter",
      price: "$299",
      period: "/month",
      description: "Perfect for small sales teams getting started",
      features: [
        "1,000 leads/month",
        "Basic lead scoring",
        "Email automation",
        "Standard analytics",
        "Email support",
        "5 team members",
      ],
      popular: false,
    },
    {
      name: "Professional",
      price: "$799",
      period: "/month",
      description: "Ideal for growing sales teams with moderate volume",
      features: [
        "5,000 leads/month",
        "Advanced lead scoring",
        "Multi-channel automation",
        "Advanced analytics",
        "Priority support",
        "25 team members",
        "CRM integration",
        "Custom workflows",
        "A/B testing",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Page,999",
      period: "/month",
      description: "For large sales organizations with high volume",
      features: [
        "Unlimited leads",
        "Premium AI features",
        "All automation channels",
        "Custom analytics",
        "24/7 phone support",
        "Unlimited team members",
        "All integrations",
        "Custom workflows",
        "Advanced A/B testing",
        "API access",
        "White-label options",
      ],
      popular: false,
    },
  ];

  const _testimonials = [
    {
      name: "Robert Johnson",
      role: "VP of Sales",
      company: "TechCorp Solutions",
      content:
        "Our sales team increased their close rate by 60% using Zion Tech Group's AI automation. The lead scoring is incredibly accurate.",
      rating: 5,
    },
    {
      name: "Maria Garcia",
      role: "Sales Director",
      company: "Growth Inc.",
      content:
        "The automated follow-ups have been a game-changer. We never miss an opportunity, and our response rates have tripled.",
      rating: 5,
    },
    {
      name: "James Wilson",
      role: "CEO",
      company: "StartupXYZ",
      content:
        "The predictive analytics helped us identify which deals to focus on. Our revenue increased by 150% in just 6 months.",
      rating: 5,
    },
  ];

  const _stats = [
    { number: "60%", label: "Increase in Close Rate" },
    { number: "3x", label: "Higher Response Rates" },
    { number: "40%", label: "Time Saved on Follow-ups" },
    { number: "95%", label: "Lead Scoring Accuracy" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Page - Zion Tech Group</title>

      </Helmet>
        
          </div><div className="container mx-auto px-4 py-20">
        
          </div><div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-8">Page</h1>
            <p className="text-xl text-gray-300 mb-8">
            Advanced page solutions by Zion Tech Group
          </p>
        <div className="max-w-4xl mx-auto">
        
          </div><div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
          <h1 className="text-2xl font-semibold text-white mb-4">
              Coming Soon
            </h2>
          
          </div><p className="text-gray-300">
              This page is under development. Please check back later for
              updates.
            </p>
        </div>
      </div>
        </div>
      </div>
  );
};

export default Page;

export default AISalesAutomationPage;
