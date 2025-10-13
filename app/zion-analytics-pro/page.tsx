import React from "react";
import { ArrowRight, CheckCircle, BarChart3, DollarSign } from 'lucide-react';
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SEOOptimizer from "../components/SEOOptimizer";

export default function ZionAnalyticsPro() {
  const features = [
    "Real-time dashboard analytics",
    "Predictive business insights",
    "Automated report generation",
    "Custom data visualization",
    "Multi-platform integration",
    "Advanced filtering & segmentation",
    "Export to PDF/Excel/CSV",
    "White-label options",
    "AI-powered recommendations",
    "Mobile app access",
    "API integration",
    "Custom metrics & KPIs"
  ];

  const _benefits = [
    "Increase revenue by 25%",
    "Reduce reporting time by 80%",
    "Make data-driven decisions",
    "Scale with your business",
    "Improve operational efficiency",
    "Identify growth opportunities"
  ];

  const pricing = [
    {
      name: "Starter",
      price: "$29",
      period: "month",
      description: "Perfect for small businesses",
      features: ["Up to 5 data sources", "Basic dashboards", "Email support", "1 user"],
      popular: false
    },
    {
      name: "Professional",
      price: "$79",
      period: "month",
      description: "Ideal for growing companies",
      features: ["Up to 20 data sources", "Advanced analytics", "Priority support", "5 users", "Custom reports"],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$199",
      period: "month",
      description: "For large organizations",
      features: ["Unlimited data sources", "AI insights", "24/7 support", "Unlimited users", "White-label options"],
      popular: false
    }
  ];

export default function ZionAnalyticsProPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>Zion Analytics Pro - Zion Tech Group</title>
        <meta name="description" content="Zion Analytics Pro solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">Zion Analytics Pro</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8">
            Discover our comprehensive zion analytics pro solutions designed to meet your business needs.
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
}

}