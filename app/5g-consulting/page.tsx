import React from 'react';
import { ArrowRight, CheckCircle, Shield, Users } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';

function FiveGConsultingPage() {
  const features = [
    {
      icon: CheckCircle,
      title: "5G Strategy Development",
      description: "Comprehensive 5G implementation strategies tailored to your business needs"
    },
    {
      icon: Shield,
      title: "Network Security",
      description: "Advanced security protocols for 5G network infrastructure"
    },
    {
      icon: Users,
      title: "Expert Consultation",
      description: "Access to certified 5G specialists and industry experts"
    },
    {
      icon: ArrowRight,
      title: "Implementation Planning",
      description: "Detailed roadmaps for seamless 5G technology adoption"
    }
  ];

  return (
    <>
      <EnhancedSEO 
        title="5G Consulting Services - Zion Tech Group"
        description="Expert 5G consulting services to help your business leverage next-generation wireless technology"
        keywords="5G consulting, 5G strategy, network planning, wireless technology"
      />
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">5G Consulting Services</h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Transform your business with expert 5G consulting services designed to maximize the potential of next-generation wireless technology.
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

export default FiveGConsultingPage;
