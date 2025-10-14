import React from 'react';
import { ArrowRight, CheckCircle, Shield, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import EnhancedSEO from '../components/EnhancedSEO';

function FiveGTransformationPage() {
  const features = [
    {
      icon: CheckCircle,
      title: "Digital Transformation",
      description: "Complete digital transformation powered by 5G technology"
    },
    {
      icon: Shield,
      title: "Process Optimization",
      description: "Streamline business processes with 5G-enabled automation"
    },
    {
      icon: Users,
      title: "Innovation Strategy",
      description: "Strategic innovation planning for 5G technology adoption"
    },
    {
      icon: ArrowRight,
      title: "Future Readiness",
      description: "Prepare your organization for the 5G-powered future"
    }
  ];

  return (
    <>
      <EnhancedSEO 
        title="5G Transformation Services - Zion Tech Group"
        description="Complete 5G digital transformation solutions for your business"
        keywords="5G transformation, digital transformation, process optimization, innovation strategy"
      />
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">5G Transformation Services</h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Complete 5G digital transformation solutions to revolutionize your business operations.
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

export default FiveGTransformationPage;
