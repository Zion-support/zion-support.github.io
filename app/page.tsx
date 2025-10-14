import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Brain } from 'lucide-react';
import { Shield } from 'lucide-react';
import { Zap } from 'lucide-react';
import { Users } from 'lucide-react';
import { Server } from 'lucide-react';
import { Cloud } from 'lucide-react';

function HomePage() {
  const features = [
    {
      icon: Brain,
      title: "AI Solutions",
      description: "Advanced AI and machine learning solutions"
    },
    {
      icon: Server,
      title: "IT Services",
      description: "Comprehensive IT infrastructure and support"
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and services"
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Enterprise-grade security solutions"
    },
    {
      icon: Zap,
      title: "Automation",
      description: "Process automation and optimization"
    },
    {
      icon: Users,
      title: "Consulting",
      description: "Expert technology consulting services"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zion Tech Group - Advanced AI and IT Solutions</title>
        <meta name="description" content="Leading provider of AI and IT solutions" />
        <meta name="keywords" content="AI, IT solutions, technology, innovation" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-white mb-8">Zion Tech Group</h1>
            <p className="text-xl text-gray-300 mb-8">
              Advanced AI and IT Solutions for Modern Businesses
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <feature.icon className="w-8 h-8 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
