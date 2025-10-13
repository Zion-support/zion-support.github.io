import { Shield } from 'lucide-react';
import { Brain } from 'lucide-react';
import { Monitor } from 'lucide-react';
import { Target } from 'lucide-react';
import { BarChart3 } from 'lucide-react';

"use client";

export default function AiFinancialAnalyticsProPage() {
  const features = [
    {
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      title: "AI-Powered Insights",
      description:
        "Advanced machine learning algorithms analyze your financial data to provide actionable insights",
      benefits: [
        "Predictive analytics",
        "Risk assessment",
        "Trend identification",
        "Anomaly detection",
      ],
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-green-400" />,
      title: "Real-time Analytics",
      description:
        "Monitor your financial performance in real-time with comprehensive dashboards and reports",
      benefits: [
        "Live data updates",
        "Custom dashboards",
        "Interactive charts",
        "Export capabilities",
      ],
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-400" />,
      title: "Risk Management",
      description:
        "Identify and mitigate financial risks with advanced risk assessment and monitoring tools",
      benefits: [
        "Risk scoring",
        "Early warning systems",
        "Compliance monitoring",
        "Audit trails",
      ],
    },
    {
      icon: <Target className="w-8 h-8 text-yellow-400" />,
      title: "Goal Tracking",
      description:
        "Set and track financial goals with intelligent recommendations and progress monitoring",
      benefits: [
        "Goal setting",
        "Progress tracking",
        "Smart recommendations",
        "Achievement rewards",
      ],
    },
  ];

  const analyticsFeatures = [
    {
      category: "Financial Analysis",
      items: [
        "Revenue Analysis",
        "Cost Analysis",
        "Profitability Analysis",
        "Cash Flow Analysis",
        "Budget Variance",
        "Financial Ratios",
      ],
    },
    {
      category: "Predictive Analytics",
      items: [
        "Revenue Forecasting",
        "Expense Prediction",
        "Market Analysis",
        "Customer Behavior",
        "Risk Assessment",
        "Trend Analysis",
      ],
    },
    {
      category: "Reporting & Visualization",
      items: [
        "Custom Reports",
        "Interactive Dashboards",
        "Data Visualization",
        "Export Options",
        "Scheduled Reports",
        "Real-time Updates",
      ],
    },
    {
      category: "Integration & Security",
      items: [
        "API Integration",
        "Data Security",
        "Compliance Tools",
        "Audit Logs",
        "User Management",
        "Backup & Recovery",
      ],
    },
  ];

  const pricingPlans = [
    {
      name: "Professional",
      price: "$199",
      period: "/month",
      description: "Perfect for growing businesses",
      features: [
        "Up to 10 data sources",
        "Advanced analytics",
        "Custom dashboards",
        "Email support",
        "Basic reporting",
        "API access",
      ],
      popular: false,
    },
    {
      name: "Enterprise",
      price: "$499",
      period: "/month",
      description: "Ideal for large organizations",
      features: [
        "Unlimited data sources",
        "AI-powered insights",
        "Custom development",
        "Priority support",
        "Advanced security",
        "White-label solution",
        "Dedicated account manager",
      ],
      popular: true,
    },
    {
      name: "Custom",
      price: "Contact Us",
      period: "",
      description: "Tailored solutions",
      features: [
        "Custom features",
        "On-premise deployment",
        "24/7 support",
        "Training & consulting",
        "Custom integrations",
        "SLA guarantee",
      ],
      popular: false,
    },
  ];

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <Helmet>
        <title>AI Financial Analytics Pro - Zion Tech Group</title>
        <meta name="description" content="Professional AI financial analytics services coming soon." />
      </Helmet>
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-6">
          AI Financial Analytics Pro
        </h1>
        <p className="text-lg text-gray-300 mb-8">
          Professional AI financial analytics services coming soon.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
        >
          Contact Us
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </div>
    </div>
  );
}
