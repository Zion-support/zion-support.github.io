import React from 'react';
import { CheckCircle } from 'lucide-react';

const ModernFeatures: React.FC = () => {
  const features = [
    { title: 'Fast Performance', description: 'Optimized for speed' },
    { title: 'Secure', description: 'Enterprise-grade security' },
    { title: 'Scalable', description: 'Grows with your business' }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          Modern Features
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <div key={i} className="text-center">
              <CheckCircle className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModernFeatures;
