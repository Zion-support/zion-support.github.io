import React from 'react';
import { ArrowRight, CheckCircle, Shield, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import EnhancedSEO from '../components/EnhancedSEO';

function FiveGMonitoringPage() {
  const features = [
    {
      icon: CheckCircle,
      title: "Real-time Monitoring",
      description: "24/7 real-time monitoring of 5G network performance and health"
    },
    {
      icon: Shield,
      title: "Security Surveillance",
      description: "Continuous security monitoring and threat detection for 5G networks"
    },
    {
      icon: Users,
      title: "Performance Analytics",
      description: "Advanced analytics and reporting for 5G network optimization"
    },
    {
      icon: ArrowRight,
      title: "Proactive Alerts",
      description: "Instant alerts and notifications for network issues and anomalies"
    }
  ];

  return (
    <>
      <EnhancedSEO 
        title="5G Monitoring Services - Zion Tech Group"
        description="Advanced 5G network monitoring and analytics services"
        keywords="5G monitoring, network analytics, performance tracking, 5G surveillance"
      />
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">5G Monitoring Services</h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Advanced 5G network monitoring services to ensure optimal performance and reliability.
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

export default FiveGMonitoringPage;
