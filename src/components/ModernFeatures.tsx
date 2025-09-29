import React from 'react';
import { Shield, Zap, Users, Globe, Star, CheckCircle } from 'lucide-react';

const ModernFeatures: React.FC = () => {
  const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Enterprise Security",
      description: "Advanced cybersecurity solutions to protect your business from evolving threats.",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "AI Innovation",
      description: "Cutting-edge artificial intelligence solutions to automate and optimize your operations.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Team",
      description: "Experienced professionals with deep expertise in modern technologies.",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Reach",
      description: "Serving clients worldwide with localized support and solutions.",
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Proven Results",
      description: "Track record of successful implementations and satisfied clients.",
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Quality Assurance",
      description: "Rigorous testing and quality control processes for reliable solutions.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Why Choose Zion Tech Group?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We combine cutting-edge technology with proven expertise to deliver solutions that drive real business value.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="inline-flex p-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModernFeatures;