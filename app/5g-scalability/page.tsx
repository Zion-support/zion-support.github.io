import React from 'react';
import { ArrowRight, CheckCircle, Shield, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import EnhancedSEO from '../components/EnhancedSEO';

function FiveGScalabilityPage() {
  const features = [
    {
      icon: CheckCircle,
      title: "Horizontal Scaling",
      description: "Seamless horizontal scaling to accommodate growing 5G demands"
    },
    {
      icon: Shield,
      title: "Load Balancing",
      description: "Intelligent load balancing for optimal 5G network distribution"
    },
    {
      icon: Users,
      title: "Capacity Planning",
      description: "Strategic capacity planning for future 5G growth requirements"
    },
    {
      icon: ArrowRight,
      title: "Elastic Infrastructure",
      description: "Flexible infrastructure that adapts to changing 5G needs"
    }
  ];

  return (
    <>
      <EnhancedSEO 
        title="5G Scalability Services - Zion Tech Group"
        description="Expert 5G scalability solutions for growing network demands"
        keywords="5G scalability, network scaling, capacity planning, elastic infrastructure"
      />
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">5G Scalability Services</h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Expert 5G scalability solutions to support your growing network demands and future expansion.
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

export default FiveGScalabilityPage;
