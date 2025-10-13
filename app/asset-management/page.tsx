import React from 'react';
import { Helmet } from 'react-helmet-async';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Star } from 'lucide-react';
import { Shield } from 'lucide-react';
import { CheckCircle } from 'lucide-react';
import { Sparkles } from 'lucide-react';
import { Target } from 'lucide-react';
import { BarChart3 } from 'lucide-react';
import { Package } from 'lucide-react';

const AssetManagementPage = () => {
  const benefits = [
    "Increase asset utilization by 40%",
    "Reduce maintenance costs by 30%",
    "Improve asset visibility by 100%",
    "Automate 80% of tracking tasks",
    "Prevent asset loss and theft",
    "Optimize asset lifecycle management"
  ];

  const features = [
    {
      icon: <Package className="w-8 h-8" />,
      title: "Asset Tracking",
      description: "Real-time tracking and monitoring of all your digital and physical assets."
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Analytics Dashboard",
      description: "Comprehensive analytics and reporting for asset performance and utilization."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Lifecycle Management",
      description: "Complete asset lifecycle management from procurement to disposal."
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI Optimization",
      description: "AI-powered recommendations for asset optimization and cost reduction."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Team Collaboration",
      description: "Collaborative tools for teams to manage and share asset information."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Access",
      description: "Access your assets from anywhere with cloud-based management platform."
    }
  ];

  const benefits = [
    "Real-time asset visibility",
    "Reduced operational costs",
    "Improved asset utilization",
    "Automated compliance tracking",
    "Enhanced security controls",
    "Scalable management solution"
  ];
=======
>>>>>>> 1768cb0a99d39a994ad89c8211ed1a93ecd366f9

export default function AssetManagementPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>Asset Management - Zion Tech Group</title>
        <meta name="description" content="Asset Management solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">Asset Management</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8">
            Discover our comprehensive asset management solutions designed to meet your business needs.
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
