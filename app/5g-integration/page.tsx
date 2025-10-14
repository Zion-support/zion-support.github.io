import React from 'react';
import { ArrowRight, CheckCircle, Shield, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import EnhancedSEO from '../components/EnhancedSEO';

function FiveGIntegrationPage() {
  const features = [
    {
      icon: CheckCircle,
      title: "System Integration",
      description: "Seamless integration of 5G technology with existing systems"
    },
    {
      icon: Shield,
      title: "Data Security",
      description: "Secure data transmission and integration protocols"
    },
    {
      icon: Users,
      title: "API Development",
      description: "Custom APIs for 5G system integration and connectivity"
    },
    {
      icon: ArrowRight,
      title: "Testing & Validation",
      description: "Comprehensive testing to ensure integration success"
    }
  ];

  return (
    <>
      <EnhancedSEO 
        title="5G Integration Services - Zion Tech Group"
        description="Expert 5G integration services for seamless system connectivity"
        keywords="5G integration, system integration, API development, connectivity"
      />
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">5G Integration Services</h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Expert 5G integration services to seamlessly connect your systems with next-generation wireless technology.
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

export default FiveGIntegrationPage;
