import React from "react";
import {
  Helmet,
} from "react-helmet-async";
import {
  Users,
  CheckCircle,
  ArrowRight,
  DollarSign,
  Clock,
  Star,
  TrendingUp,
  Lock,
  Smartphone,
  Cloud,
  Database,
  Cpu,
  Target,
  Rocket,
} from "lucide-react";

export default function AIMicroSAAS(): React.JSX.Element {
  const microSAASServices = [
    {
      id: "ai-content-optimizer",
      name: "AI Content Optimizer Pro",
      description: "Automatically optimize your content for SEO and engagement using advanced AI algorithms.",
      price: "$29/month",
      features: [
        "Real-time content analysis",
        "SEO optimization suggestions",
        "Engagement score tracking",
        "A/B testing automation",
      ],
      icon: <Target className="w-8 h-8" />,
    },
    {
      id: "ai-customer-support",
      name: "AI Customer Support Bot",
      description: "24/7 intelligent customer support with natural language processing and sentiment analysis.",
      price: "$49/month",
      features: [
        "Multi-language support",
        "Sentiment analysis",
        "Escalation to human agents",
        "Knowledge base integration",
      ],
      icon: <Users className="w-8 h-8" />,
    },
    {
      id: "ai-analytics-dashboard",
      name: "AI Analytics Dashboard",
      description: "Comprehensive business intelligence with predictive analytics and automated reporting.",
      price: "$39/month",
      features: [
        "Predictive analytics",
        "Automated reporting",
        "Custom dashboards",
        "Real-time insights",
      ],
      icon: <TrendingUp className="w-8 h-8" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Helmet>
        <title>AI Micro SaaS Services - Zion Website</title>
        <meta name="description" content="Discover our AI-powered micro SaaS services designed to help businesses scale efficiently." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            AI Micro SaaS Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Powerful AI-driven micro SaaS solutions designed to help your business scale efficiently and intelligently.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {microSAASServices.map((service) => (
            <div key={service.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="text-blue-600 mr-3">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {service.name}
                </h3>
              </div>
              
              <p className="text-gray-600 mb-4">
                {service.description}
              </p>
              
              <div className="mb-4">
                <span className="text-3xl font-bold text-blue-600">
                  {service.price}
                </span>
              </div>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center">
                Get Started
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
