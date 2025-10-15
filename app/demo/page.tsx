import React from 'react';
import { Helmet } from 'react-helmet-async';
<<<<<<< HEAD
import { Play, Right, Star, BarChart3, Shield } from 'lucide-react';

const DemoPage: React.FC = () => {
  const features = [
    {
icon: BarChart3,
      title: 'AI-Powered Analytics',
      description: 'See how our AI analyzes your data in real-time',
      demo: 'Live Demo'
    },
    {
icon: Shield,
      title: 'Advanced Security',
      description: 'Experience our enterprise-grade security features',
      demo: 'Demo'
    },
    {
icon: BarChart3,
      title: 'Business Intelligence',
      description: 'Explore our comprehensive BI dashboard',
      demo: 'BI Demo'
    },
    {
icon: Play,
      title: 'Team Collaboration',
      description: 'See how teams work together seamlessly',
      demo: 'Collaboration Demo'
    }
  ];

  const testimonials = [{
      name: "Sarah Johnson",
      company: "TechCorp Inc.",
      content: "The demo was incredibly insightful. We could see exactly how the solution would work for our business.",
      rating: 5;
    },
    {
      name: "Michael Chen",
      company: "DataFlow Systems",
      content: "The live demonstration helped us understand the full potential of the AI solutions.",
      rating: 5;
    },
    {
      name: "Emily Rodriguez",
      company: "InnovateLabs",
      content: "The demo team was knowledgeable and answered all our questions thoroughly.",
      rating: 5;
    }
  ];
=======
>>>>>>> cursor/analyze-improve-and-merge-code-b7b5

const Page: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Page - Zion Tech Group</title>
        <meta name="description" content="Advanced AI and IT solutions by Zion Tech Group" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-white text-center mb-8">Page</h1>
          <p className="text-gray-300 text-center">Coming soon...</p>
        </div>
      </div>
    </>
  );
};

export default Page;