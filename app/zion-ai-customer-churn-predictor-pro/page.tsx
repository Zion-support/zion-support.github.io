import React from 'react';
import { Helmet } from 'react-helmet-async';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
import { 
  TrendingDown, 
  BarChart3, 
  Target, 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Clock, 
  Users, 
  Sparkles,
  AlertTriangle,
  Cpu,
  Globe,
  Heart,
  MousePointer
} from 'lucide-react';

const ZionAICustomerChurnPredictorProPage: React.FC = () => {
  const features = [
    {
      title: "AI-Powered Churn Prediction",
      description: "Advanced machine learning algorithms predict customer churn with 94% accuracy using behavioral patterns and engagement data.",
      icon: <Cpu className="w-6 h-6" />,
      benefits: ["94% prediction accuracy", "Real-time risk scoring", "Behavioral pattern analysis"]
    },
    {
      title: "Early Warning System",
      description: "Get instant alerts when customers show signs of potential churn, allowing proactive intervention strategies.",
      icon: <AlertTriangle className="w-6 h-6" />,
      benefits: ["Real-time alerts", "Risk level indicators", "Customizable thresholds"]
    },
    {
      title: "Personalized Retention Campaigns",
      description: "AI generates personalized retention strategies and campaigns based on individual customer risk profiles.",
      icon: <Target className="w-6 h-6" />,
      benefits: ["Personalized strategies", "Automated campaigns", "A/B testing recommendations"]
    },
    {
      title: "Customer Health Scoring",
      description: "Comprehensive health scores that track customer engagement, satisfaction, and loyalty metrics over time.",
      icon: <Heart className="w-6 h-6" />,
      benefits: ["Health score tracking", "Engagement metrics", "Loyalty indicators"]
    },
    {
      title: "Retention Analytics Dashboard",
      description: "Detailed analytics and insights on churn patterns, retention rates, and the effectiveness of retention efforts.",
      icon: <BarChart3 className="w-6 h-6" />,
      benefits: ["Churn analytics", "Retention insights", "ROI measurement"]
    },
    {
      title: "Multi-Channel Integration",
      description: "Integrate with your CRM, email marketing, support systems, and other tools for comprehensive customer data.",
      icon: <Globe className="w-6 h-6" />,
      benefits: ["CRM integration", "Email marketing sync", "Support system connection"]
    }
  ];

  const industries = [
    { name: "SaaS", icon: <Cpu className="w-6 h-6" />, color: "from-blue-500 to-blue-600" },
    { name: "E-commerce", icon: <MousePointer className="w-6 h-6" />, color: "from-green-500 to-green-600" },
    { name: "Subscription", icon: <Heart className="w-6 h-6" />, color: "from-pink-500 to-purple-600" },
    { name: "Financial Services", icon: <TrendingDown className="w-6 h-6" />, color: "from-yellow-500 to-orange-600" },
    { name: "Healthcare", icon: <Heart className="w-6 h-6" />, color: "from-cyan-500 to-blue-600" },
    { name: "Education", icon: <Users className="w-6 h-6" />, color: "from-purple-500 to-pink-600" }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$149",
      period: "/month",
      description: "Perfect for small businesses starting their retention efforts",
      features: [
        "Up to 1,000 customers",
        "Basic churn prediction",
        "Email alerts",
        "Standard analytics",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$399",
      period: "/month",
      description: "Ideal for growing businesses with complex customer bases",
      features: [
        "Up to 10,000 customers",
        "Advanced AI prediction",
        "Personalized campaigns",
        "Advanced analytics",
        "Priority support",
        "API access",
        "Custom integrations"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$999",
      period: "/month",
      description: "For large organizations with enterprise-scale customer retention needs",
      features: [
        "Unlimited customers",
        "Enterprise AI features",
        "White-label options",
        "Dedicated support",
        "Custom development",
        "Advanced security",
        "On-premise deployment"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Jennifer Martinez",
      company: "SaaS Solutions Inc.",
      role: "Customer Success Director",
      content: "Zion AI Churn Predictor Pro helped us reduce churn by 40% and increase customer lifetime value by 60%. The predictions are incredibly accurate!",
      rating: 5,
      avatar: "JM",
    },
    {
      name: "Robert Kim",
      company: "E-commerce Plus",
      role: "VP of Customer Experience",
      content: "The early warning system is a game-changer. We can now intervene before customers even think about leaving.",
      rating: 5,
      avatar: "RK",
    },
    {
      name: "Sarah Johnson",
      company: "SubscriptionBox Co.",
      role: "Retention Manager",
      content: "The personalized retention campaigns have increased our retention rate by 35%. The AI recommendations are spot-on.",
      rating: 5,
      avatar: "SJ",
    }
  ];
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-c832

export default function ZionAiCustomerChurnPredictorPro() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Helmet>
        <title>Zion Ai Customer Churn Predictor Pro - Zion Tech Group</title>
        <meta name="description" content="Advanced zion ai customer churn predictor pro solutions by Zion Tech Group" />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Zion Ai Customer Churn Predictor Pro
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Advanced zion ai customer churn predictor pro solutions by Zion Tech Group.
          </p>
        </div>
      </div>
    </div>
  );
}