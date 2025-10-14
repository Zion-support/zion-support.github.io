import React from 'react';
import { ArrowRight, CheckCircle, Shield, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import EnhancedSEO from '../components/EnhancedSEO';

function FiveGMigrationPage() {
  const features = [
    {
      icon: CheckCircle,
      title: "Migration Planning",
      description: "Comprehensive migration strategy from legacy systems to 5G"
    },
    {
      icon: Shield,
      title: "Data Protection",
      description: "Secure data migration with zero downtime and data integrity"
    },
    {
      icon: Users,
      title: "Change Management",
      description: "Smooth transition with minimal disruption to business operations"
    },
    {
      icon: ArrowRight,
      title: "Post-Migration Support",
      description: "Ongoing support and optimization after 5G migration completion"
    }
  ];

  return (
    <>
      <EnhancedSEO 
        title="5G Migration Services - Zion Tech Group"
        description="Expert 5G migration services for seamless technology transition"
        keywords="5G migration, technology transition, system migration, 5G upgrade"
      />
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">5G Migration Services</h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Expert 5G migration services to seamlessly transition your infrastructure to next-generation wireless technology.
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

export default FiveGMigrationPage;
