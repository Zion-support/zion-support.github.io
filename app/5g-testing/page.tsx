import React from 'react';
import { ArrowRight, CheckCircle, Shield, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import EnhancedSEO from '../components/EnhancedSEO';

function FiveGTestingPage() {
  const features = [
    {
      icon: CheckCircle,
      title: "Performance Testing",
      description: "Comprehensive performance testing for 5G network capabilities"
    },
    {
      icon: Shield,
      title: "Security Testing",
      description: "Rigorous security testing and vulnerability assessment"
    },
    {
      icon: Users,
      title: "Load Testing",
      description: "Stress testing and load validation for 5G infrastructure"
    },
    {
      icon: ArrowRight,
      title: "Quality Assurance",
      description: "End-to-end quality assurance and testing protocols"
    }
  ];

  return (
    <>
      <EnhancedSEO 
        title="5G Testing Services - Zion Tech Group"
        description="Comprehensive 5G testing and quality assurance services"
        keywords="5G testing, performance testing, security testing, quality assurance"
      />
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">5G Testing Services</h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Comprehensive 5G testing services to ensure your network meets the highest quality standards.
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

export default FiveGTestingPage;
