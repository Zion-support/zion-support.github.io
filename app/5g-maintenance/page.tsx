import React from 'react';
import { ArrowRight, CheckCircle, Shield, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import EnhancedSEO from '../components/EnhancedSEO';

function FiveGMaintenancePage() {
  const features = [
    {
      icon: CheckCircle,
      title: "Proactive Monitoring",
      description: "24/7 monitoring of 5G network performance and health"
    },
    {
      icon: Shield,
      title: "Security Updates",
      description: "Regular security patches and updates for 5G infrastructure"
    },
    {
      icon: Users,
      title: "Expert Support",
      description: "Dedicated support team for 5G maintenance and troubleshooting"
    },
    {
      icon: ArrowRight,
      title: "Performance Optimization",
      description: "Continuous optimization to maintain peak 5G network performance"
    }
  ];

  return (
    <>
      <EnhancedSEO 
        title="5G Maintenance Services - Zion Tech Group"
        description="Comprehensive 5G network maintenance and support services"
        keywords="5G maintenance, network support, performance monitoring, 5G optimization"
      />
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">5G Maintenance Services</h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Comprehensive 5G network maintenance services to ensure optimal performance and reliability.
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

export default FiveGMaintenancePage;
