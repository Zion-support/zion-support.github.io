import React from 'react';
import { Bot, Clock, Globe, TrendingDown } from 'lucide-react';

interface Benefit {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const benefits: Benefit[] = [
  {
    title: 'AI-Powered Matchmaking',
    description: 'Our advanced AI algorithms connect you with the perfect talent and services tailored to your specific needs.',
    icon: <Bot className="w-8 h-8" />,
  },
  {
    title: 'Global Availability',
    description: 'Access a worldwide network of skilled professionals and cutting-edge services from anywhere in the world.',
    icon: <Globe className="w-8 h-8" />,
  },
  {
    title: '24/7 Support',
    description: 'Round-the-clock assistance from our dedicated team to ensure your success at every step.',
    icon: <Clock className="w-8 h-8" />,
  },
  {
    title: 'Cost Reduction',
    description: 'Save up to 40% on your projects through direct connections and competitive pricing.',
    icon: <TrendingDown className="w-8 h-8" />,
  },
];

const BenefitsSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose Zion Tech?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience the future of technology services with our innovative platform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="text-blue-600 mb-4 flex justify-center">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
                {benefit.title}
              </h3>
              <p className="text-gray-600 text-center">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;