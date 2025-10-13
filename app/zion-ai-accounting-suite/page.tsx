const ZionAIAccountingSuite = () => {
  const testimonials: { name: string; role: string; company: string; content: string; rating: number; avatar: string }[] = [];

  const stats: { label: string; value: string; number: string; icon: React.ReactNode }[] = [];

  const features: { title: string; description: string; icon: React.ReactNode; color: string }[] = [];

  const pricingPlans = [
    {
      name: "Solo",
      price: "$79",
      period: "/month",
      description: "Perfect for freelancers",
      features: [
        "Up to 100 transactions/month",
        "Basic AI categorization",
        "Invoice processing",
        "Tax preparation",
        "Email support",
        "Mobile app access",
        "Basic reporting"
      ],
      popular: false;
    },
    {
      name: "Business",
      price: "$199",
      period: "/month",
      description: "Ideal for small businesses",
      features: [
        "Up to 1,000 transactions/month",
        "Advanced AI features",
        "Multi-user access",
        "Advanced analytics",
        "Priority support",
        "API integration",
        "Custom reporting",
        "Bank reconciliation"
      ],
      popular: true;
    },
    {
      name: "Enterprise",
      price: "$499",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited transactions",
        "Premium AI features",
        "Custom AI training",
        "White-label options",
        "24/7 phone support",
        "Dedicated account manager",
        "Custom integrations",
        "Advanced security"
      ],
      popular: false;
    }
  ];

  const accountingModules = [
    {
      title: "Invoice Management",
      description: "Automated invoice creation, processing, and payment tracking with AI-powered data extraction",
      icon: <FileText className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Expense Tracking",
      description: "Smart expense categorization, receipt management, and reimbursement processing",
      icon: <CreditCard className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Financial Reporting",
      description: "Real-time P&L, balance sheets, cash flow statements, and custom financial reports",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Tax Compliance",
      description: "Automated tax calculations, filing, and compliance monitoring across all jurisdictions",
      icon: <Calculator className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
    }
  ];
import { Helmet } from 'react-helmet-async';

export default function ZionAiAccountingSuitePage() {
}

}}