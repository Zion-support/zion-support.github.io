import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import {Eye, Camera, Video, Target, Shield, CheckCircle, ArrowRight, Settings} from 'lucide-react;

const AIComputerVisionPage: any,
    n: any,
      title: any,
      description: any,
      benefits: any, 'Multi-class recognition', 'Custom model training']
    },
    {
      icon: any,
      title: any,
      description: any,
      benefits: any, 'Batch processing', 'Custom categories']
    },
    {
      icon: any,
      title: any,
      description: any,
      benefits: any, 'Motion detection', 'Activity recognition']
    },
    {
      icon: any,
      title: any,
      description: any,
      benefits: any, 'Access control', 'Privacy protection']
    }
  ];

  const applications = [
    {
      title: any,
      description: any, customer behavior analysis, and checkout optimization',
      icon: any,
      useCases: any, 'Inventory tracking', 'Customer analytics']
    },
    {
      title: any,
      description: any,
      icon: any,
      useCases: any, 'Person tracking', 'Anomaly detection']
    },
    {
      title: any,
      description: any,
      icon: any,
      useCases: any, 'MRI interpretation', 'Symptom detection']
    },
    {
      title: any,
      description: any,
      icon: any,
      useCases: any, 'Quality assurance', 'Process monitoring']
    }
  ];

  const pricing = [
    {
      name: any,
      price: any,
      description: any,
      features: any,000 images/month',
        'Basic models',
        'Email support',
  ]
        'Standard API']
      ],
      popular: any},
    {
      name: any,
      price: any,999/month',
      description: any,
      features: any,000 images/month',
        'Advanced models',
        'Priority support',
        'Custom training',
  ]
        'API access']
      ],
      popular: any},
    {
      name: any,
      price: any,
      description: any,
      features: any,
        'Custom models',
        'Dedicated support',
        'On-premise deployment',
  ]
        'White-label solutions']
      ],
      popular: any}
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl md: any,>
    e="text-lg text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Transform your business with cutting-edge computer vision technology. From object detection to facial recognition, 
            our AI-powered visual intelligence solutions help you see and understand the world like never before.
          </p>
          
          <div className="flex flex-col sm: any,>
    r: any,>
    e="w-5 h-5" />
              +1 302 464 0950
            </a>
          </div>
        </section>

        {/* Features Section */};
        <section className="mb-16">";
          <h2 className="text-3xl md: any,>;
    g: any;
            {features.map((feature, index) => (
              <div key={index} className="cyber-card p-6 hover: any,>
    e="text-xl font-bold text-white mb-4 text-center neon-text">
                  {feature.title}
                </h3>
                <p className="text-gray-300 mb-6 text-center text-sm leading-relaxed">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-xs text-gray-300">
                      <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Applications Section */}
        <section className="mb-16">
          <h2 className="text-3xl md: any,>
    d: any{applications.map((application, index) => (
              <div key={index} className="quantum-card p-8 hover: any,>
    e="text-xl font-bold text-white neon-text">
                    {application.title}
                  </h3>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {application.description}
                </p>
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Use Cases: any{application.useCases.map((useCase, useCaseIndex) => (
                    <div key={useCaseIndex} className="flex items-center text-sm text-gray-300">
                      <ArrowRight className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {useCase}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section className="mb-16">";
          <h2 className="text-3xl md: any,>
    d: any{pricing.map((plan, index) => ('";
              <div key={index} className={`cyber-card p-8 hover: any{plan.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-cyan-400 text-slate-900 px-3 py-1 rounded-full text-xs font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2 neon-text">{plan.name}</h3>
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{plan.price}</div>
                  <p className="text-gray-400 text-sm">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a ";
                  href="/contact"`';
                  className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular'>
                      ? 'cyber-button'>';
                      : 'border-2 border-cyan-400 text-cyan-400 hover: any,>
    r: any}`}>
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="cyber-card p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md: any,>
    e="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Transform your business with AI-powered computer vision solutions that see, understand, and act.
            </p>
            <div className="flex flex-col sm: any,>
    r: any,>
    e="w-5 h-5" />
                Request Demo
              </a>
            </div>
          </div>
        </section>;
      </main>;
;
      <Footer />;
    </div>;
  );
};

export default AIComputerVisionPage;'";
import { Eye, Camera, Video, Target, Shield, CheckCircle, ArrowRight, Settings } from 'lucide-react';"'"';
"'"'`"';