import React from 'react';
import { Helmet } from 'react-helmet-async';
<<<<<<< HEAD
import { motion } from 'framer-motion';
import { Package, Zap, BarChart3, Users, CheckCircle, ArrowRight, Brain, Target, Globe, Shield } from 'lucide-react';
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
      popular: false
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
      popular: true
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
      popular: false
    }
  ];
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-b119

export default function SmartInventoryOptimizerPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>Smart Inventory Optimizer - Zion Tech Group</title>
        <meta name="description" content="Smart Inventory Optimizer solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">Smart Inventory Optimizer</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8">
            Discover our comprehensive smart inventory optimizer solutions designed to meet your business needs.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Expert Solutions</h3>
              <p className="text-gray-300">
                Our team of experts delivers tailored solutions for your specific requirements.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Cutting-Edge Technology</h3>
              <p className="text-gray-300">
                We use the latest technologies and best practices to ensure optimal performance.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">24/7 Support</h3>
              <p className="text-gray-300">
                Get round-the-clock support from our dedicated team of professionals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
<<<<<<< HEAD
};

=======
}
>>>>>>> cursor/fix-errors-and-merge-to-main-b119
