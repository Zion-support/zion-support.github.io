import React from 'react';

export const AIServicesShowcase = () => {
  const aiServices = [
    {
      title: "Machine Learning Models",
      description: "Custom ML models tailored to your business needs and data",
      features: ["Predictive Analytics", "Pattern Recognition", "Automated Decision Making"],
      icon: "🧠",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Natural Language Processing",
      description: "Advanced text analysis and language understanding capabilities",
      features: ["Sentiment Analysis", "Text Classification", "Language Translation"],
      icon: "💬",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Computer Vision",
      description: "Image and video analysis for automation and insights",
      features: ["Object Detection", "Image Classification", "Video Analytics"],
      icon: "👁️",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "AI Chatbots",
      description: "Intelligent conversational agents for customer service",
      features: ["24/7 Support", "Multi-language", "Context Awareness"],
      icon: "🤖",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            AI <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Cutting-edge artificial intelligence solutions to transform your business
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {aiServices.map((service, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-slate-700 to-slate-800 p-8 rounded-2xl border border-slate-600 hover:border-cyan-400 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/25"
            >
              <div className={`w-20 h-20 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <span className="text-4xl">{service.icon}</span>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-gray-400 leading-relaxed mb-6">
                {service.description}
              </p>
              
              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-cyan-400 mb-3">Key Features:</h4>
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center text-gray-300 text-sm">
                    <span className="text-cyan-400 mr-2">✓</span>
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};