import React from 'react';
import { ArrowRight, CheckCircle, Shield, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import EnhancedSEO from '../components/EnhancedSEO';

function FiveGPerformancePage() {
  const features = [
    {
      icon: CheckCircle,
      title: "Speed Optimization",
      description: "Maximize 5G network speed and throughput for optimal performance"
    },
    {
      icon: Shield,
      title: "Latency Reduction",
      description: "Minimize latency for real-time applications and critical operations"
    },
    {
      icon: Users,
      title: "Bandwidth Management",
      description: "Intelligent bandwidth allocation and traffic management"
    },
    {
      icon: ArrowRight,
      title: "Performance Monitoring",
      description: "Continuous monitoring and analysis of 5G performance metrics"
    }
  ];

  return (
    <>
      <EnhancedSEO 
        title="5G Performance Services - Zion Tech Group"
        description="Advanced 5G performance optimization and monitoring services"
        keywords="5G performance, network speed, latency optimization, bandwidth management"
      />
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">5G Performance Services</h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Advanced 5G performance services to ensure your network operates at peak efficiency.
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

export default FiveGPerformancePage;
