import React from 'react';
import { ArrowRight, CheckCircle, Shield, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import EnhancedSEO from '../components/EnhancedSEO';

function FiveGSupportPage() {
  const features = [
    {
      icon: CheckCircle,
      title: "24/7 Support",
      description: "Round-the-clock technical support for your 5G infrastructure"
    },
    {
      icon: Shield,
      title: "Expert Team",
      description: "Certified 5G specialists and technical experts at your service"
    },
    {
      icon: Users,
      title: "Remote Monitoring",
      description: "Proactive remote monitoring and maintenance of 5G systems"
    },
    {
      icon: ArrowRight,
      title: "Rapid Response",
      description: "Quick response times for critical 5G network issues"
    }
  ];

  return (
    <>
      <EnhancedSEO 
        title="5G Support Services - Zion Tech Group"
        description="Comprehensive 5G support and maintenance services"
        keywords="5G support, technical support, 5G maintenance, expert assistance"
      />
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">5G Support Services</h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Comprehensive 5G support services to ensure your network runs smoothly and efficiently.
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

export default FiveGSupportPage;
