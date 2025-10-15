'use client';
import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  CheckCircle, 
  ArrowRight, 
  Zap, 
  Target, 
  Users, 
  BarChart3,
  Settings,
  Globe,
  Cpu,
  Database,
  Shield,
  TrendingUp,
  Lightbulb,
  Rocket
} from 'lucide-react';

const DigitalTransformationPage: React.FC = () => {
  const services = [
    {
      name: 'Digital Strategy Consulting',
      price: '$199/mo',
      description: 'Comprehensive digital transformation strategy development',
      features: ['Digital Assessment', 'Strategy Development', 'Roadmap Creation', 'Change Management', 'Implementation Support'],
      icon: <Target className="w-8 h-8 text-blue-400" />
    },
    {
      name: 'Process Automation',
      price: '$299/mo',
      description: 'Automate business processes for efficiency',
      features: ['Workflow Analysis', 'Automation Design', 'Implementation', 'Monitoring', 'Optimization'],
      icon: <Zap className="w-8 h-8 text-yellow-400" />
    },
    {
      name: 'Data Analytics Platform',
      price: '$399/mo',
      description: 'Transform data into actionable insights',
      features: ['Data Integration', 'Analytics Dashboard', 'Predictive Modeling', 'Reporting', 'Training'],
      icon: <BarChart3 className="w-8 h-8 text-green-400" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>Digital Transformation Solutions | Zion Tech Group</title>
        <meta name="description" content="Comprehensive digital transformation solutions to modernize your business operations and drive growth." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              Digital Transformation Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Accelerate your digital transformation journey with our comprehensive solutions designed to modernize operations and drive growth.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-8 hover:bg-slate-700/50 transition-all duration-300 hover:scale-105">
                <div className="mb-6">
                  {service.icon}
                  <h3 className="text-2xl font-bold text-white mb-4">{service.name}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <div className="text-3xl font-bold text-purple-400 mb-4">{service.price}</div>
                </div>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="block w-full bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white text-center py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default DigitalTransformationPage;
