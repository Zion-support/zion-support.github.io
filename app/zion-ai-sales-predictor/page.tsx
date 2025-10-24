import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SEOOptimizer from "../components/SEOOptimizer";
import { Star } from 'lucide-react';
import { CheckCircle } from 'lucide-react';
import { TrendingUp } from 'lucide-react';
import { Calendar } from 'lucide-react';
export default function ZionAISalesPredictor() {

  const features = [
    "AI-powered sales forecasting with 95% accuracy",
    "Predict customer behavior and buying patterns",
    "Lead scoring and qualification automation",
    "Revenue forecasting and pipeline analysis",
    "Customer lifetime value prediction",
    "Churn prediction and prevention alerts",
    "Market trend analysis and insights",
    "Real-time sales performance monitoring",
    "Integration with CRM systems (Salesforce, HubSpot)",
    "Custom prediction models for your industry",
    "Automated sales recommendations",
    "ROI tracking and optimization"
  ];

  const benefits = [
    "Increase sales revenue by 35% on average",
    "Reduce sales cycle time by 40%",
    "Improve lead conversion rates by 60%",
    "Predict customer churn 30 days in advance",
    "Optimize pricing strategies automatically",
    "Make data-driven sales decisions"
  ];

  const pricing = [
    {
      name: "Starter",
      price: "$39",
      period: "month",
      description: "Perfect for small sales teams",
      features: ["Up to 1,000 leads/month", "Basic predictions", "Email support", "1 user", "Standard accuracy"],
      popular: false
    },
    {
      name: "Professional",
      price: "$99",
      period: "month",
      description: "Ideal for growing sales teams",
      features: ["Up to 10,000 leads/month", "Advanced AI models", "Priority support", "5 users", "CRM integration", "Custom models"],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$199",
      period: "month",
      description: "For large sales organizations",
      features: ["Unlimited leads", "Custom AI training", "Dedicated support", "Unlimited users", "Advanced analytics", "White-labeling"],
      popular: false
  ];

  const testimonials = [
    {
      name: "David Kim",
      company: "TechCorp Solutions",
      role: "VP of Sales",
      content: "Zion AI Sales Predictor has transformed our sales process. We've increased our close rate by 45% and can now predict which leads will convert with incredible accuracy.",
      rating: 5
    },
    {
      name: "Lisa Martinez",
      company: "Growth Marketing Co.",
      role: "Sales Director",
      content: "The churn prediction feature alone has saved us thousands of dollars. We can now intervene before customers leave and retain 80% more of them.",
      rating: 5
    },
    {
      name: "James Wilson",
      company: "Enterprise Software Inc.",
      role: "CEO",
      content: "This tool has revolutionized our sales forecasting. We can now predict quarterly revenue with 95% accuracy, which has been a game-changer for our business planning.",
      rating: 5
  ];

  return null;
};

export default function ZionAiSalesPredictorPage() {

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>Zion Ai Sales Predictor - Zion Tech Group</title>
        <meta name="description" content="Zion Ai Sales Predictor solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">Zion Ai Sales Predictor</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8">
            Discover our comprehensive zion ai sales predictor solutions designed to meet your business needs.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}