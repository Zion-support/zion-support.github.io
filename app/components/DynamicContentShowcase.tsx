import React from 'react';

const DynamicContentShowcase: React.FC = () => {
  const features = [
    {
      icon: "🚀",
      title: "AI-Powered Solutions",
      description: "Cutting-edge artificial intelligence that transforms your business operations",
      link: "/ai-services"
    },
    {
      icon: "⚡",
      title: "Lightning Fast Performance",
      description: "Optimized solutions that deliver exceptional speed and reliability",
      link: "/performance"
    },
    {
      icon: "🔒",
      title: "Enterprise Security",
      description: "Bank-level security measures to protect your valuable data",
      link: "/security"
    },
    {
      icon: "🌐",
      title: "Global Reach",
      description: "Scalable solutions that work seamlessly across the globe",
      link: "/global"
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          Latest Innovations
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                {feature.description}
              </p>
              <a
                href={feature.link}
                className="text-cyan-400 hover:text-cyan-300 font-medium text-sm transition-colors inline-flex items-center"
              >
                Learn More
                <span className="ml-1 group-hover:translate-x-1 transition-transform duration-300">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DynamicContentShowcase;