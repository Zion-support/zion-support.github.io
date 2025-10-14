import React from 'react';
import { ArrowRight, CheckCircle, Shield, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import EnhancedSEO from '../components/EnhancedSEO';

function FiveGOptimizationPage() {
  const features = [
    {
      icon: CheckCircle,
      title: "Performance Tuning",
      description: "Advanced optimization techniques to maximize 5G network performance"
    },
    {
      icon: Shield,
      title: "Resource Management",
      description: "Efficient resource allocation and management for optimal 5G operation"
    },
    {
      icon: Users,
      title: "Capacity Planning",
      description: "Strategic capacity planning to meet current and future 5G demands"
    },
    {
      icon: ArrowRight,
      title: "Continuous Improvement",
      description: "Ongoing optimization and fine-tuning for peak 5G performance"
    }
  ];

  return (
    <>
      <EnhancedSEO 
        title="5G Optimization Services - Zion Tech Group"
        description="Expert 5G network optimization services for peak performance"
        keywords="5G optimization, network performance, capacity planning, 5G tuning"
      />
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">5G Optimization Services</h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Expert 5G network optimization services to achieve peak performance and efficiency.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800 p-6 rounded-lg text-center">
                <feature.icon className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-slate-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default FiveGOptimizationPage;
