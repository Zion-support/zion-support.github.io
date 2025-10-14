import React from 'react';
import { ArrowRight, CheckCircle, Shield, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import EnhancedSEO from '../components/EnhancedSEO';

function FiveGReliabilityPage() {
  const features = [
    {
      icon: CheckCircle,
      title: "Uptime Guarantee",
      description: "99.9% uptime guarantee with robust 5G network infrastructure"
    },
    {
      icon: Shield,
      title: "Fault Tolerance",
      description: "Advanced fault tolerance and redundancy systems for 5G networks"
    },
    {
      icon: Users,
      title: "Disaster Recovery",
      description: "Comprehensive disaster recovery and business continuity planning"
    },
    {
      icon: ArrowRight,
      title: "Quality Assurance",
      description: "Rigorous testing and quality assurance for reliable 5G services"
    }
  ];

  return (
    <>
      <EnhancedSEO 
        title="5G Reliability Services - Zion Tech Group"
        description="Ensuring maximum reliability and uptime for 5G networks"
        keywords="5G reliability, network uptime, fault tolerance, disaster recovery"
      />
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">5G Reliability Services</h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Ensuring maximum reliability and uptime for your 5G network infrastructure.
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

export default FiveGReliabilityPage;
