import React from 'react';
import { ArrowRight, CheckCircle, Shield, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import EnhancedSEO from '../components/EnhancedSEO';

function FiveGModernizationPage() {
  const features = [
    {
      icon: CheckCircle,
      title: "Legacy System Upgrade",
      description: "Modernize existing infrastructure with cutting-edge 5G technology"
    },
    {
      icon: Shield,
      title: "Enhanced Security",
      description: "Advanced security features and protocols for modernized systems"
    },
    {
      icon: Users,
      title: "User Experience",
      description: "Improved user experience with faster, more reliable connectivity"
    },
    {
      icon: ArrowRight,
      title: "Future-Proofing",
      description: "Ensure your systems are ready for future technological advances"
    }
  ];

  return (
    <>
      <EnhancedSEO 
        title="5G Modernization Services - Zion Tech Group"
        description="Transform your infrastructure with 5G modernization services"
        keywords="5G modernization, infrastructure upgrade, technology transformation, 5G future"
      />
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">5G Modernization Services</h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Transform your infrastructure with our comprehensive 5G modernization services for the digital future.
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

export default FiveGModernizationPage;
