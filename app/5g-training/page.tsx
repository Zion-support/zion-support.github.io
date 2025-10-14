import React from 'react';
import { ArrowRight, CheckCircle, Shield, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import EnhancedSEO from '../components/EnhancedSEO';

function FiveGTrainingPage() {
  const features = [
    {
      icon: CheckCircle,
      title: "Technical Training",
      description: "Comprehensive technical training on 5G technologies and protocols"
    },
    {
      icon: Shield,
      title: "Certification Programs",
      description: "Professional certification programs for 5G specialists"
    },
    {
      icon: Users,
      title: "Hands-on Labs",
      description: "Practical hands-on training with real 5G equipment and systems"
    },
    {
      icon: ArrowRight,
      title: "Ongoing Education",
      description: "Continuous learning and skill development for 5G professionals"
    }
  ];

  return (
    <>
      <EnhancedSEO 
        title="5G Training Services - Zion Tech Group"
        description="Professional 5G training and certification programs"
        keywords="5G training, technical certification, 5G education, professional development"
      />
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">5G Training Services</h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Professional 5G training and certification programs to develop your team's expertise.
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

export default FiveGTrainingPage;
