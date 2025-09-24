import React from 'react';
import { ServiceLandingTemplate } from '../components/services/ServiceLandingTemplate';
import { Phone, ShieldCheck, Clock } from 'lucide-react';

export default function ITSupportPage() {
  const benefits = [
    {
      icon: Phone,
      title: '24/7 Support',
      description: 'Round-the-clock technical assistance'
    },
    {
      icon: ShieldCheck,
      title: 'Security First',
      description: 'Enterprise-grade security solutions'
    },
    {
      icon: Clock,
      title: 'Fast Response',
      description: 'Quick resolution of technical issues'
    }
  ];

  return (
    <div className="min-h-screen bg-zion-blue">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-white mb-8">IT Support Services</h1>
        
        <div className="bg-white rounded-lg p-8">
          <p className="text-lg text-gray-600 mb-6">
            Professional IT support services to keep your business running smoothly.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <benefit.icon className="h-12 w-12 text-zion-blue mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}