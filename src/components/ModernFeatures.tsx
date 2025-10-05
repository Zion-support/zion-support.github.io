import React from 'react';

const ModernFeatures: React.FC = () => {
  const features = [
    {
      icon: '🚀',
      title: "Lightning Fast",
      description: "Deploy AI solutions 10x faster with our pre-built frameworks and automation tools."
    },
    {
      icon: '🚀',
      title: "Enterprise Security",
      description: "Bank-level security with SOC 2, GDPR compliance, and continuous monitoring."
    },
    {
      icon: '🚀',
      title: "Proven Results",
      description: "Average 300% ROI within 6 months across all client implementations."
    },
    {
      icon: '🚀',
      title: "Expert Support",
      description: "Dedicated team of AI specialists providing 24/7 support and guidance."
    },
    {
      icon: '🚀',
      title: "Global Scale",
      description: "Infrastructure spanning 50+ countries for low-latency worldwide access."
    },
    {
      icon: '🚀',
      title: "Award Winning",
      description: "Recognized industry leader with 15+ awards for innovation and excellence."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose Zion Tech Group?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Industry-leading AI solutions backed by enterprise-grade infrastructure and expert support
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div

key={index}

              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
            >
              <div className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
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