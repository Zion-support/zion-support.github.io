import React from 'react';
import { Helmet } from 'react-helmet-async';
<<<<<<< HEAD
import { Link } from 'react-router-dom';

const WebinarsPage = () => {
  const upcomingWebinars = [
    {
      title: "AI-Powered Business Transformation",
      date: "2024-01-15",
      time: "2:00 PM EST",
      duration: "60 minutes",
      speaker: "Dr. Sarah Johnson",
      description: "Learn how AI can transform your business operations and drive growth",
      icon: <Brain className="w-6 h-6" />
    },
    {
      title: "Cybersecurity Best Practices 2024",
      date: "2024-01-22",
      time: "3:00 PM EST",
      duration: "45 minutes",
      speaker: "Michael Chen",
      description: "Essential cybersecurity strategies to protect your business",
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "Cloud Migration Strategies",
      date: "2024-01-29",
      time: "1:00 PM EST",
      duration: "90 minutes",
      speaker: "Emily Rodriguez",
      description: "Step-by-step guide to successful cloud migration",
      icon: <Globe className="w-6 h-6" />
    }
  ];

  const pastWebinars = [
    {
      title: "Introduction to AI Analytics",
      date: "2023-12-15",
      duration: "45 minutes",
      views: "2,500+",
      icon: <Play className="w-6 h-6" />
    },
    {
      title: "5G Technology Overview",
      date: "2023-12-08",
      duration: "60 minutes",
      views: "1,800+",
      icon: <Play className="w-6 h-6" />
    },
    {
      title: "Micro SAAS Solutions",
      date: "2023-12-01",
      duration: "50 minutes",
      views: "3,200+",
      icon: <Play className="w-6 h-6" />
    }
  ];
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-ba4f

export default function WebinarsPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>Webinars - Zion Tech Group</title>
        <meta name="description" content="Webinars solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">Webinars</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8">
            Discover our comprehensive webinars solutions designed to meet your business needs.
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
