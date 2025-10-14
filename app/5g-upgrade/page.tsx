import React from 'react';
import { ArrowRight, CheckCircle, Shield, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import EnhancedSEO from '../components/EnhancedSEO';

function FiveGUpgradePage() {
  const features = [
    {
      icon: CheckCircle,
      title: "Seamless Upgrade",
      description: "Smooth upgrade path from existing networks to 5G technology"
    },
    {
      icon: Shield,
      title: "Data Migration",
      description: "Secure and efficient data migration during 5G upgrade process"
    },
    {
      icon: Users,
      title: "Minimal Downtime",
      description: "Upgrade with minimal business disruption and downtime"
    },
    {
      icon: ArrowRight,
      title: "Future-Proofing",
      description: "Ensure your upgrade prepares you for future 5G advancements"
    }
  ];

  return (
    <>
      <EnhancedSEO 
        title="5G Upgrade Services - Zion Tech Group"
        description="Professional 5G upgrade services for seamless technology transition"
        keywords="5G upgrade, network upgrade, technology transition, seamless migration"
      />
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">5G Upgrade Services</h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Professional 5G upgrade services to seamlessly transition your infrastructure to next-generation technology.
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

export default FiveGUpgradePage;
