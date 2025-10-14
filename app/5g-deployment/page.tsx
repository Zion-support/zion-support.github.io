import React from 'react';
import { ArrowRight, CheckCircle, Shield, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import EnhancedSEO from '../components/EnhancedSEO';

function FiveGDeploymentPage() {
  const features = [
    {
      icon: CheckCircle,
      title: "Infrastructure Setup",
      description: "Complete 5G network infrastructure deployment and configuration"
    },
    {
      icon: Shield,
      title: "Security Implementation",
      description: "Robust security measures for 5G network deployment"
    },
    {
      icon: Users,
      title: "Team Training",
      description: "Comprehensive training for your technical team on 5G systems"
    },
    {
      icon: ArrowRight,
      title: "Go-Live Support",
      description: "24/7 support during and after 5G network deployment"
    }
  ];

  return (
    <>
      <EnhancedSEO 
        title="5G Deployment Services - Zion Tech Group"
        description="Professional 5G network deployment services for seamless implementation"
        keywords="5G deployment, network implementation, 5G infrastructure, wireless deployment"
      />
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">5G Deployment Services</h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Professional 5G network deployment services ensuring seamless implementation and optimal performance.
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

export default FiveGDeploymentPage;
