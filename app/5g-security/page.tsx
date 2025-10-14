import React from 'react';
import { ArrowRight, CheckCircle, Shield, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import EnhancedSEO from '../components/EnhancedSEO';

function FiveGSecurityPage() {
  const features = [
    {
      icon: CheckCircle,
      title: "Advanced Encryption",
      description: "State-of-the-art encryption protocols for 5G network security"
    },
    {
      icon: Shield,
      title: "Threat Detection",
      description: "Real-time threat detection and prevention for 5G infrastructure"
    },
    {
      icon: Users,
      title: "Access Control",
      description: "Comprehensive access control and identity management systems"
    },
    {
      icon: ArrowRight,
      title: "Security Auditing",
      description: "Regular security audits and compliance monitoring for 5G networks"
    }
  ];

  return (
    <>
      <EnhancedSEO 
        title="5G Security Services - Zion Tech Group"
        description="Comprehensive 5G security solutions and threat protection"
        keywords="5G security, network encryption, threat detection, access control"
      />
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">5G Security Services</h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Comprehensive 5G security solutions to protect your network from evolving threats.
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

export default FiveGSecurityPage;
