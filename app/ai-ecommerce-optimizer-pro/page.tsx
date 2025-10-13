
import { Brain, TrendingUp, BarChart3, Zap } from 'lucide-react';

export default function AIEcommerceOptimizerPro() {
  const features = [
    {
      icon: <Brain className="w-6 h-6 text-cyan-400" />,
      title: "AI-Powered Optimization",
      description:
        "Advanced machine learning algorithms analyze customer behavior and optimize your store automatically",
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-green-400" />,
      title: "Conversion Rate Optimization",
      description:
        "Increase your conversion rates by up to 40% with intelligent product recommendations and layout optimization",
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-purple-400" />,
      title: "Real-time Analytics",
      description:
        "Get detailed insights into customer behavior, sales patterns, and performance metrics",
    },
    {
      icon: <Zap className="w-6 h-6 text-yellow-400" />,
      title: "Automated A/B Testing",
      description:
        "Continuously test and optimize your store elements for maximum performance",
    },
  ];

  const optimizationFeatures = [
    {
      category: "Product Optimization",
      items: [
        "Smart Product Recommendations",
        "Dynamic Pricing",
        "Inventory Management",
        "Product Search Optimization",
        "Cross-selling & Upselling",
        "Product Image Enhancement",
      ],
    },
    {
      category: "Customer Experience",
      items: [
        "Personalized Shopping Experience",
        "Chatbot Integration",
        "Customer Journey Mapping",
        "Mobile Optimization",
        "Page Speed Optimization",
        "User Interface Enhancement",
      ],
    },
    {
      category: "Marketing Automation",
      items: [
        "Email Campaign Optimization",
        "Social Media Integration",
        "Retargeting Campaigns",
        "SEO Enhancement",
        "Content Personalization",
        "Customer Segmentation",
      ],
    },
    {
      category: "Analytics & Reporting",
      items: [
        "Sales Performance Tracking",
        "Customer Behavior Analysis",
        "Revenue Optimization",
        "ROI Measurement",
        "Predictive Analytics",
        "Custom Dashboards",
      ],
    },
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$99",
      period: "/month",
      description: "Perfect for small e-commerce stores",
      features: [
        "Up to 1,000 products",
        "Basic AI optimization",
        "Standard analytics",
        "Email support",
        "Mobile optimization",
        "Basic A/B testing",
      ],
      popular: false,
    },
    {
      name: "Professional",
      price: "$299",
      period: "/month",
      description: "Ideal for growing businesses",
      features: [
        "Up to 10,000 products",
        "Advanced AI features",
        "Real-time analytics",
        "Priority support",
        "Advanced A/B testing",
        "API access",
        "Custom integrations",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "$799",
      period: "/month",
      description: "For large e-commerce operations",
      features: [
        "Unlimited products",
        "Custom AI training",
        "White-label solution",
        "Dedicated support",
        "Advanced analytics",
        "Custom development",
        "SLA guarantee",
      ],
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-6">
            AI Ecommerce Optimizer Pro
          </h1>
          <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
            Advanced AI-powered ecommerce optimization solutions to boost your online sales and customer experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-colors">
              <div className="flex items-center mb-4">
                {feature.icon}
                <h3 className="text-xl font-semibold text-white ml-3">{feature.title}</h3>
              </div>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {optimizationFeatures.map((category, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4">{category.category}</h3>
              <ul className="space-y-2">
                {category.items.map((item, idx) => (
                  <li key={idx} className="text-gray-300 flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
