import React from 'react';
<<<<<<< HEAD
import EnhancedSEO from '../components/EnhancedSEO';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { AlertTriangle } from 'lucide-react';
import { Star } from 'lucide-react';
import { CheckCircle } from 'lucide-react';
import { TrendingUp } from 'lucide-react';
import { Zap } from 'lucide-react';
import { Globe } from 'lucide-react';
import { Monitor } from 'lucide-react';
import { BarChart3 } from 'lucide-react';
import { Smartphone } from 'lucide-react';
import { Package } from 'lucide-react';

const ZionAIInventoryManager = () => {
  const testimonials = [
    {
      name: "John Smith",
      role: "CEO, TechCorp",
      content: "Zion Tech Group transformed our business with their AI solutions.",
      avatar: "/images/testimonials/john-smith.jpg"
    },
    {
      name: "Sarah Johnson",
      role: "CTO, InnovateLabs",
      content: "The team's expertise in AI and automation is unmatched.",
      avatar: "/images/testimonials/sarah-johnson.jpg"
    },
    {
      name: "Mike Chen",
      role: "Founder, StartupXYZ",
      content: "We saw immediate results after implementing their solutions.",
      avatar: "/images/testimonials/mike-chen.jpg"
    }
  ];

  const stats = [
    { label: "Projects Completed", value: "500+" },
    { label: "Happy Clients", value: "200+" },
    { label: "Years Experience", value: "5+" },
    { label: "Team Members", value: "50+" }
  ];

  const features = [
    {
      title: "AI-Powered Demand Forecasting",
      description: "Predict inventory needs with 95% accuracy using machine learning algorithms",
      icon: <TrendingUp className="w-6 h-6" />,
      benefit: "Reduce stockouts by 60%"
    },
    {
      title: "Real-Time Inventory Tracking",
      description: "Monitor stock levels across multiple locations with live updates",
      icon: <Package className="w-6 h-6" />,
      benefit: "99.9% accuracy"
    },
    {
      title: "Automated Reorder Points",
      description: "Set intelligent reorder triggers based on sales velocity and lead times",
      icon: <AlertTriangle className="w-6 h-6" />,
      benefit: "Never run out of stock"
    },
    {
      title: "Multi-Channel Integration",
      description: "Sync inventory across e-commerce, retail, and warehouse systems",
      icon: <Globe className="w-6 h-6" />,
      benefit: "Unified inventory view"
    },
    {
      title: "Advanced Analytics Dashboard",
      description: "Comprehensive reports on inventory turnover, costs, and performance",
      icon: <BarChart3 className="w-6 h-6" />,
      benefit: "Data-driven decisions"
    },
    {
      title: "Mobile App Access",
      description: "Manage inventory on-the-go with our intuitive mobile application",
      icon: <Smartphone className="w-6 h-6" />,
      benefit: "24/7 access"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$99",
      period: "/month",
      description: "Perfect for small businesses",
      features: [
        "Up to 1,000 products",
        "Basic AI forecasting",
        "2 user accounts",
        "Email support",
        "Mobile app access",
        "Basic reporting"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$299",
      period: "/month",
      description: "Ideal for growing businesses",
      features: [
        "Up to 10,000 products",
        "Advanced AI forecasting",
        "10 user accounts",
        "Priority support",
        "Multi-location support",
        "Advanced analytics",
        "API access",
        "Custom integrations"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$599",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited products",
        "Premium AI forecasting",
        "Unlimited users",
        "24/7 phone support",
        "Multi-warehouse support",
        "Custom reporting",
        "White-label options",
        "Dedicated account manager"
      ],
      popular: false
    }
  ];
=======
import { Helmet } from 'react-helmet-async';
>>>>>>> cursor/fix-errors-and-merge-to-main-ba4f

export default function ZionAiInventoryManagerPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>Zion Ai Inventory Manager - Zion Tech Group</title>
        <meta name="description" content="Zion Ai Inventory Manager solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">Zion Ai Inventory Manager</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8">
            Discover our comprehensive zion ai inventory manager solutions designed to meet your business needs.
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
