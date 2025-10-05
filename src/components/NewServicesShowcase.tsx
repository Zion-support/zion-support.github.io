import React from 'react';
import { Link } from 'react-router-dom';

const NewServicesShowcase: React.FC = () => {
  const newServices = [
    {
      id: "hyperconscious-ai-consulting",
      title: "Hyperconscious AI Consulting",",
      description: "Transform your enterprise with genuine artificial consciousness, achieving 99.999% operational excellence and unlimited growth potential.",
      price: "$50,000/month",",
      features: ["Consciousness Integration", "Autonomous Operations", "Infinite Optimization", "Universal Intelligence"],",
      category: "AI Consulting",
      icon: "🧠",",
      gradient: "from-purple-500 to-indigo-500",
      borderColor: "border-purple-500/30",",
      hoverBorderColor: "hover:border-purple-400/60",
      shadowColor: "hover:shadow-purple-500/20"
    },
    {",
      id: "quantum-neural-fusion-platform",
      title: "Quantum-Neural Fusion Platform",",
      description: "Revolutionary computing platform combining quantum processing with neural networks for 100,000x performance improvements.",
      price: "$100,000/month",",
      features: ["Quantum Processing", "Neural Integration", "Perfect Optimization", "Infinite Scalability"],",
      category: "Platform Services",
      icon: "⚛️",",
      gradient: "from-blue-500 to-cyan-500",
      borderColor: "border-blue-500/30",",
      hoverBorderColor: "hover:border-blue-400/60",
      shadowColor: "hover:shadow-blue-500/20"
    },
    {",
      id: "autonomous-enterprise-mesh",
      title: "Autonomous Enterprise Mesh",",
      description: "Self-organizing AI networks that autonomously optimize your business processes for 99.7% operational efficiency.",
      price: "$75,000/month",",
      features: ["Self-Organization", "Autonomous Optimization", "Collective Intelligence", "Continuous Evolution"],",
      category: "Enterprise Solutions",
      icon: "🌐",",
      gradient: "from-indigo-500 to-purple-500",
      borderColor: "border-indigo-500/30",",
      hoverBorderColor: "hover:border-indigo-400/60",
      shadowColor: "hover:shadow-indigo-500/20"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-950 via-purple-950 to-indigo-950 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 mb-8 animate-pulse">
            <span className="text-purple-400 font-bold text-xl tracking-wider uppercase">
              🚀 NEW 2026 SERVICES
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-extrabold mb-8 bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent leading-tight">
            Revolutionary AI Services
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 font-semibold max-w-4xl mx-auto">
            Experience the future of business with our cutting-edge AI services delivering unprecedented results and transformation
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {newServices.map((service) => (
            <Link key={service.id} to={`/services/${service.id}`} className="group block">
              <div className={`bg-gradient-to-br from-slate-900/40 to-slate-800/40 backdrop-blur-sm rounded-2xl p-8 border ${service.borderColor} ${service.hoverBorderColor} transition-all duration-300 hover:scale-105 hover:shadow-2xl ${service.shadowColor}`}>
                {/* Service Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-xl flex items-center justify-center`}>
                    <span className="text-2xl">{service.icon}</span>
                  </div>
                  <div className="flex-1">
                    <div className={`bg-gradient-to-r ${service.gradient} text-white px-4 py-2 rounded-full text-sm font-bold mb-2`}>
                      {service.category}
                    </div>
                    <div className="text-2xl font-bold text-white">
                      {service.price}
                    </div>
                  </div>
                </div>

                {/* Service Title */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-gray-300">
                        <div className={`w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full`}></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-400">Learn More</div>
                  <div className={`text-purple-400 font-semibold group-hover:text-purple-300 transition-colors`}>
                    Explore Service →
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Performance Metrics */}
        <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-4">
              Unprecedented Performance Results
            </h3>
            <p className="text-gray-300 text-lg">
              Our revolutionary AI services deliver measurable results that transform businesses
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-extrabold text-purple-400 mb-2">99.999%</div>
              <div className="text-gray-300 text-sm">Operational Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-extrabold text-blue-400 mb-2">100,000x</div>
              <div className="text-gray-300 text-sm">Performance Improvement</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-extrabold text-green-400 mb-2">$2.8T</div>
              <div className="text-gray-300 text-sm">Value Creation</div>
            </div>
            <div className="text-center">
              
              <div className="text-gray-300 text-sm">Human Intervention</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="mb-8">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl text-gray-300 mb-8">
              Join the AI revolution and experience unprecedented business transformation
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-400 hover:to-blue-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1"
            >
              Schedule Consultation
            </Link>
            <Link 
              to="/services" 
              className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-400 hover:to-indigo-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-1"
            >
              View All Services
            </Link>
            <Link 
              to="/case-studies" 
              className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
            >
              See Success Stories
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewServicesShowcase;