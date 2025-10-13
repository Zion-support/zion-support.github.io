<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7665

<<<<<<< HEAD
export default function zionAiSalesPredictor() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>Zion Ai Sales Predictor - Zion Tech Group</title>
        <meta name="description" content="Zion Ai Sales Predictor solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-8">Zion Ai Sales Predictor</h1>
          <p className="text-xl text-gray-300 mb-8">
=======
export default function ZionAiSalesPredictorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Helmet>
        <title>Zion Ai Sales Predictor - Zion Tech Group</title>
        <meta name="description" content="Advanced zion ai sales predictor solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Zion Ai Sales Predictor
          </h1>
          <p className="text-xl text-gray-600 mb-8">
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ef50
            This page is under development. Please check back later.
=======

export default function ZionaisalespredictorPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Zion Ai Sales Predictor</h1>
          <p className="text-xl text-gray-600 mb-8">
            Advanced AI and IT solutions for your business needs.
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Feature 1</h3>
            <p className="text-gray-600">
              Comprehensive solution for your business requirements.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Feature 2</h3>
            <p className="text-gray-600">
              Advanced technology integration and optimization.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Feature 3</h3>
            <p className="text-gray-600">
              Scalable and secure implementation.
            </p>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
=======
import { ArrowRight, CheckCircle, Star, TrendingUp, Video, Calendar } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
=======

=======
import React from 'react';
import { Helmet } from "react-helmet-async";
import { Helmet } from 'react-helmet-async';
import { Star } from 'lucide-react';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-07e8

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

  const benefits = [
    "Increase sales revenue by 35% on average",
    "Reduce sales cycle time by 40%",
    "Improve lead conversion rates by 60%",
    "Predict customer churn 30 days in advance",
    "Optimize pricing strategies automatically",
    "Make data-driven sales decisions"

  const pricing = [
<<<<<<< HEAD
    {,
    name: "Starter",
        price: "$39",
        period: "month",
        description: "Perfect for small sales teams",
        features: ["Up to 1,000 leads/month", "Basic predictions", "Email support", "1 user", "Standard accuracy"],
        popular: false
    },
    {,
    name: "Professional",
        price: "$99",
        period: "month",
        description: "Ideal for growing sales teams",
        features: ["Up to 10,000 leads/month", "Advanced AI models", "Priority support", "5 users", "CRM integration", "Custom models"],
        popular: true
    },
    {,
    name: "Enterprise",
        price: "$199",
        period: "month",
        description: "For large sales organizations",
        features: ["Unlimited leads", "Custom AI training", "Dedicated support", "Unlimited users", "Advanced analytics", "White-labeling"],
        popular: false
=======
    {
      name: "Starter",
      price: "$39",
      period: "month",
      description: "Perfect for small sales teams",
      features: ["Up to 1,000 leads/month", "Basic predictions", "Email support", "1 user", "Standard accuracy"],
      popular: false;
    },
    {
      name: "Professional",
      price: "$99",
      period: "month",
      description: "Ideal for growing sales teams",
      features: ["Up to 10,000 leads/month", "Advanced AI models", "Priority support", "5 users", "CRM integration", "Custom models"],
      popular: true;
    },
    {
      name: "Enterprise",
      price: "$199",
      period: "month",
      description: "For large sales organizations",
      features: ["Unlimited leads", "Custom AI training", "Dedicated support", "Unlimited users", "Advanced analytics", "White-labeling"],
      popular: false;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-34b5
    }

  const testimonials = [
<<<<<<< HEAD
    {,
    name: "David Kim",
        company: "TechCorp Solutions",
        role: "VP of Sales",
        content: "Zion AI Sales Predictor has transformed our sales process. We've increased our close rate by 45% and can now predict which leads will convert with incredible accuracy.",
        rating: 5
    },
    {,
    name: "Lisa Martinez",
        company: "Growth Marketing Co.",
        role: "Sales Director",
        content: "The churn prediction feature alone has saved us thousands of dollars. We can now intervene before customers leave and retain 80% more of them.",
        rating: 5
    },
    {,
    name: "James Wilson",
        company: "Enterprise Software Inc.",
        role: "CEO",
        content: "This tool has revolutionized our sales forecasting. We can now predict quarterly revenue with 95% accuracy, which has been a game-changer for our business planning.",
        rating: 5
=======
    {
      name: "David Kim",
      company: "TechCorp Solutions",
      role: "VP of Sales",
      content: "Zion AI Sales Predictor has transformed our sales process. We've increased our close rate by 45% and can now predict which leads will convert with incredible accuracy.",
      rating: 5;
    },
    {
      name: "Lisa Martinez",
      company: "Growth Marketing Co.",
      role: "Sales Director",
      content: "The churn prediction feature alone has saved us thousands of dollars. We can now intervene before customers leave and retain 80% more of them.",
      rating: 5;
    },
    {
      name: "James Wilson",
      company: "Enterprise Software Inc.",
      role: "CEO",
      content: "This tool has revolutionized our sales forecasting. We can now predict quarterly revenue with 95% accuracy, which has been a game-changer for our business planning.",
      rating: 5;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-34b5
    }

<<<<<<< HEAD
import React from 'react';

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">

        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Page
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            This page is under development. Please check back later.
          </p>

        </div>
      </div>
    </div>
=======
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-34b5

}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
