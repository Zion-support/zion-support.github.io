import React from 'react';
import { Link } from 'react-router-dom';
import { Monitor, Shield, TrendingUp, Database, Network, ArrowRight, Cpu, HardDrive, Zap, Target, Rocket, CheckCircle, Star, Lightbulb, Cloud, Settings, Brain, Server, Printer, Clock, Users, Globe, BarChart3 } from 'lucide-react';

import { CheckCircle } from 'lucide-react';
import { Shield } from 'lucide-react';
import { Cloud } from 'lucide-react';
import { Settings } from 'lucide-react';
import { Brain } from 'lucide-react';
import { Zap } from 'lucide-react';
import { Target } from 'lucide-react';
import { Cpu } from 'lucide-react';
import { Check } from 'lucide-react';
import { TrendingUp } from 'lucide-react';
const solutions = [];

const AIPoweredITAssetManagement: React.FC = () => {
  const features = [
    {
      icon: Monitor,
      title: "Intelligent Asset Discovery",
      description: "AI-powered scanning and discovery of all IT assets across your infrastructure"
    },
    {
      icon: Shield,
      title: "Security Compliance",
      description: "Automated security compliance monitoring and reporting for all assets"
    },
    {
      icon: TrendingUp,
      title: "Performance Analytics",
      description: "Real-time performance monitoring and optimization recommendations"
    },
    {
      icon: Database,
      title: "Asset Database",
      description: "Centralized database of all IT assets with detailed information"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            AI-Powered IT Asset Management
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive IT asset management solution powered by artificial intelligence 
            to optimize your infrastructure and reduce costs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md">
              <feature.icon className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Optimize Your IT Assets?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Contact us to learn more about our AI-powered IT asset management solutions.
          </p>
          <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIPoweredITAssetManagement;