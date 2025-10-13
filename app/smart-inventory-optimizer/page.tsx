<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <Helmet>
        <title>Page - Zion Tech Group</title>
        <meta name="description" content="Professional services coming soon." />
      </Helmet>
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-6">
          Coming Soon
        </h1>
        <p className="text-lg text-gray-300 mb-8">
          Professional services coming soon.
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
=======
const SmartInventoryOptimizerPage = () => {
  const stats: { label: string; value: string; number: string; icon: React.ReactNode }[] = [];

  const benefits: string[] = [];

  const features: { title: string; description: string; icon: React.ReactNode; color: string }[] = [];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$49",
      period: "/month",
      description: "Perfect for small businesses",
      features: [
        "Up to 1,000 SKUs",
        "Basic demand forecasting",
        "Reorder point alerts",
        "Basic analytics",
        "Email support",
        "1 warehouse location"
      ],
      popular: false;
    },
    {
      name: "Professional",
      price: "$149",
      period: "/month",
      description: "Ideal for growing businesses",
      features: [
        "Up to 10,000 SKUs",
        "Advanced AI forecasting",
        "Multi-location support",
        "Advanced analytics",
        "Priority support",
        "API access",
        "Supplier integration"
      ],
      popular: true;
    },
    {
      name: "Enterprise",
      price: "$399",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited SKUs",
        "Custom AI models",
        "White-label solution",
        "Advanced security",
        "Dedicated support",
        "Custom integrations",
        "On-premise deployment"
      ],
      popular: false;
    }
  ];
}
>>>>>>> cursor/fix-errors-and-merge-to-main-b18f
