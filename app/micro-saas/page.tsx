'use client';
import React, { useState, useEffect } from 'react';
import { 
  BarChart, 
  Calendar, 
  FileText, 
  Zap, 
  Shield, 
  Users, 
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  Award,
  TrendingUp,
  Globe,
  Lock
} from 'lucide-react';

const MicroSaasPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const services = [
    {
      id: 1,
      name: 'AI Project Manager Pro',
      description: 'Revolutionary project management with quantum-inspired algorithms and real-time collaboration',
      icon: BarChart,
      price: '$199/month',
      originalPrice: '$299/month',
      features: [
        'Quantum task optimization',
        'Real-time collaboration',
        'Predictive analytics',
        'AI risk assessment',
        'Resource optimization',
        'Gantt charts',
        'Time tracking',
        'Team insights'
      ],
      benefits: [
        '60% productivity increase',
        '85% fewer delays',
        '95% planning accuracy',
        '40% cost reduction'
      ],
      popular: true,
      category: 'Productivity',
      rating: 4.9,
      users: '25,000+',
      freeTrial: '30 days'
    },
    {
      id: 2,
      name: 'AI Smart Calendar Pro',
      description: 'Advanced calendar AI that learns your work patterns and optimizes meetings',
      icon: Calendar,
      price: '$89/month',
      originalPrice: '$129/month',
      features: [
        'Smart scheduling',
        'Meeting optimization',
        'Conflict resolution',
        'Time blocking',
        'Integration with 50+ apps',
        'Burnout prevention',
        'Productivity insights',
        'Automated follow-ups'
      ],
      benefits: [
        '40% time saved',
        '90% fewer conflicts',
        '25% more productive meetings',
        'Zero double-bookings'
      ],
      popular: true,
      category: 'Productivity',
      rating: 4.8,
      users: '18,000+',
      freeTrial: '14 days'
    },
    {
      id: 3,
      name: 'AI Content Writer Pro',
      description: 'Professional content creation powered by advanced AI models',
      icon: FileText,
      price: '$129/month',
      originalPrice: '$199/month',
      features: [
        'Multi-language support',
        'SEO optimization',
        'Brand voice training',
        'Content templates',
        'Plagiarism detection',
        'Grammar checking',
        'Tone adjustment',
        'Bulk generation'
      ],
      benefits: [
        '80% faster content creation',
        '95% accuracy rate',
        '50% cost reduction',
        'Unlimited revisions'
      ],
      popular: false,
      category: 'Content',
      rating: 4.7,
      users: '12,000+',
      freeTrial: '7 days'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Micro SaaS Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Powerful, focused AI tools designed to solve specific business challenges with maximum efficiency
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105 ${
                service.popular ? 'ring-2 ring-purple-500' : ''
              }`}
            >
              {service.popular && (
                <div className="bg-gradient-to-r from-purple-500 to-pink-600 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                  Most Popular
                </div>
              )}

              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center mr-4">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">{service.name}</h3>
                  <div className="flex items-center text-sm text-gray-400">
                    <Star className="w-4 h-4 text-yellow-400 mr-1" />
                    {service.rating} ({service.users} users)
                  </div>
                </div>
              </div>

              <p className="text-gray-300 mb-6">{service.description}</p>

              <div className="mb-6">
                <div className="flex items-center mb-2">
                  <span className="text-3xl font-bold text-white">{service.price}</span>
                  <span className="text-lg text-gray-400 line-through ml-2">{service.originalPrice}</span>
                </div>
                <div className="flex items-center text-sm text-gray-400">
                  <Clock className="w-4 h-4 mr-1" />
                  {service.freeTrial} free trial
                </div>
              </div>

              <div className="space-y-2 mb-6">
                <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                {service.features.slice(0, 4).map((feature, index) => (
                  <div key={index} className="flex items-center text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    {feature}
                  </div>
                ))}
              </div>

              <div className="space-y-2 mb-6">
                <h4 className="text-sm font-semibold text-white mb-2">Benefits:</h4>
                {service.benefits.slice(0, 2).map((benefit, index) => (
                  <div key={index} className="flex items-center text-sm text-green-300">
                    <TrendingUp className="w-4 h-4 mr-2" />
                    {benefit}
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-gray-400">{service.category}</span>
                <span className="text-sm text-green-400 font-semibold">
                  {service.freeTrial} free trial
                </span>
              </div>

              <button className="w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 flex items-center justify-center">
                Start Free Trial
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold text-white mb-8">
            Ready to Boost Your Productivity?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300">
              Start Free Trial
            </button>
            <button className="border border-white/30 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/10 transition-all duration-300">
              View All Solutions
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MicroSaasPage;