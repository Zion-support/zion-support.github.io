'use client';

import React from 'react';
import { CheckCircle, Brain, Shield, Globe } from 'lucide-react';

const DynamicContentShowcase: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI Solutions',
      description: 'Advanced artificial intelligence for your business'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Protect your business from threats'
    },
    {
      icon: Globe,
      title: 'Cloud Services',
      description: 'Scalable cloud infrastructure'
    }]
  ];

  return (
    <div className="py-16 px-4">
      </div><div className="max-w-7xl mx-auto">
        </div><div className="text-center mb-12">
          </div><h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Why Choose Zion Tech Group
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We deliver cutting-edge solutions that drive real business value
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            </div><div key={index} className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
              </div><div className="text-center">
                </div><div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-500/20 rounded-full mb-6">
                  <feature.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          </div><div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10">
            </div><h3 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h3>
            <p className="text-gray-300 mb-6">
              Contact us today to discuss your project and see how we can help transform your business.
            </p>
            <button className="bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-cyan-700 transition-colors duration-200">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicContentShowcase;