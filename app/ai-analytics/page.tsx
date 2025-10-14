import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  BarChart3, 
  Brain, 
  CheckCircle, 
  Star, 
  Zap, 
  Globe, 
  Mail, 
  Phone, 
  Database,
  Settings,
  Monitor,
  Sparkles,
  TrendingDown,
  Lightbulb
} from "lucide-react";

export default function AiAnalytics() {
  const features = [
    {
      title: "Real-time Data Processing",
      description: "Process and analyze data in real-time with our advanced AI algorithms that provide instant insights and actionable intelligence.",
      icon: <Zap className="w-8 h-8" />,
      benefits: ["Instant data processing", "Real-time dashboards", "Live monitoring", "Immediate alerts"]
    },
    {
      title: "Predictive Analytics",
      description: "Leverage machine learning models to predict future trends, behaviors, and outcomes with high accuracy.",
      icon: <Brain className="w-8 h-8" />,
      benefits: ["Trend forecasting", "Behavior prediction", "Risk assessment", "Opportunity identification"]
    },
    {
      title: "Advanced Data Visualization",
      description: "Transform complex data into intuitive, interactive visualizations that make insights accessible to everyone.",
      icon: <BarChart3 className="w-8 h-8" />,
      benefits: ["Interactive charts", "Custom dashboards", "Mobile-responsive", "Export capabilities"]
    },
    {
      title: "Automated Insights Generation",
      description: "AI automatically generates insights and recommendations based on your data patterns and business context.",
      icon: <Lightbulb className="w-8 h-8" />,
      benefits: ["Smart recommendations", "Pattern recognition", "Anomaly detection", "Automated reporting"]
    },
    {
      title: "Multi-source Data Integration",
      description: "Connect and analyze data from multiple sources including databases, APIs, files, and cloud services.",
      icon: <Database className="w-8 h-8" />,
      benefits: ["100+ integrations", "Data transformation", "Real-time sync", "Unified data model"]
    },
    {
      title: "Custom AI Models",
      description: "Build and deploy custom machine learning models tailored to your specific business needs and data patterns.",
      icon: <Settings className="w-8 h-8" />,
      benefits: ["Custom model training", "Model deployment", "Performance monitoring", "Continuous learning"]
    }
  ];

  const analyticsStats = [
    { number: "40%", label: "Faster Decision Making", icon: <Zap className="w-6 h-6" /> },
    { number: "85%", label: "Prediction Accuracy", icon: <Brain className="w-6 h-6" /> },
    { number: "60%", label: "Cost Reduction", icon: <TrendingDown className="w-6 h-6" /> },
    { number: "24/7", label: "Automated Monitoring", icon: <Monitor className="w-6 h-6" /> }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$299",
      period: "month",
      description: "Perfect for small businesses getting started with AI analytics",
      features: [
        "Up to 5 data sources",
        "Basic dashboards",
        "Standard reports",
        "Email support",
        "1 user account",
        "Basic AI models"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$599",
      period: "month",
      description: "Ideal for growing businesses with advanced analytics needs",
      features: [
        "Up to 25 data sources",
        "Advanced dashboards",
        "Custom reports",
        "Priority support",
        "Up to 10 user accounts",
        "Advanced AI models",
        "API access",
        "Mobile app"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$999",
      period: "month",
      description: "Complete solution for large organizations",
      features: [
        "Unlimited data sources",
        "Custom dashboards",
        "Advanced AI features",
        "24/7 dedicated support",
        "Unlimited user accounts",
        "Custom AI models",
        "White-label options",
        "On-premise deployment"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      role: "CEO",
      content: "Zion AI Analytics has revolutionized our decision-making process. The predictive insights helped us identify market opportunities before our competitors.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      company: "E-commerce Solutions",
      role: "CTO",
      content: "The real-time analytics and automated insights have improved our operational efficiency by 40%. We can now make data-driven decisions instantly.",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      company: "Digital Marketing Agency",
      role: "Operations Director",
      content: "The AI-powered recommendations have been game-changing. Our campaign performance improved by 60% thanks to the intelligent insights.",
      rating: 5,
      avatar: "ER"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Page - Zion Tech Group</title>
        <meta name="description" content="Professional page services by Zion Tech Group." />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Page</h1>
          <p className="text-xl text-gray-600 mb-8">
            Professional page solutions tailored to your business needs.</p>
          <div className="grid md: grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">
                Expert Solutions;
              </h3>
              <p className="text-blue-700">
                Our team of experts delivers cutting-edge page solutions.</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-900 mb-2">
                Custom Implementation;
              </h3>
              <p className="text-green-700">
                Tailored page implementations for your specific requirements.</p>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-purple-900 mb-2">
                24/7 Support;
              </h3>
              <p className="text-purple-700">
                Round-the-clock support for all your page needs.</p>
            </div>
          </div>
          <div className="mt-12">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Get Started Today,
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
            Page</h1>
          <p className="text-xl text-gray-600 mb-8">
            Professional page solutions tailored to your business needs.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">
                Expert Solutions</h3>
              <p className="text-blue-700">
                Our team of experts delivers cutting-edge page solutions.</p></div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-900 mb-2">
                Custom Implementation</h3>
              <p className="text-green-700">
                Tailored page implementations for your specific requirements.</p></div>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-purple-900 mb-2">
                24/7 Support</h3>
              <p className="text-purple-700">
                Round-the-clock support for all your page needs.</p></div></div>
          <div className="mt-12">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Get Started Today</button></div></div></div></div>
)}
            </button>
          </div>
        </div>
      </div>
    </div>
)}
};
