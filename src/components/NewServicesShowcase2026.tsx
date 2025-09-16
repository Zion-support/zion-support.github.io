import React from 'react';
import { Link } from 'react-router-dom';

const NewServicesShowcase2026: React.FC = () => {
  const newServices = [
    {
      id: "autonomous-business-001",
      title: "Autonomous Business Operations Platform",
      description: "Complete business automation platform that enables 95% operational autonomy with AI-driven decision making and self-optimizing processes.",
      price: "$150,000",
      aiScore: 98,
      benefits: ["95% operational autonomy", "300% revenue increase", "75% cost reduction"],
      image: "/images/autonomous-business.jpg",
      link: "/services/autonomous-business-operations"
    },
    {
      id: "consciousness-computing-001",
      title: "Consciousness Computing Framework",
      description: "Revolutionary AI framework that creates genuinely conscious, self-aware AI systems with emotional intelligence and authentic relationships.",
      price: "$750,000",
      aiScore: 100,
      benefits: ["Genuine consciousness", "Emotional intelligence", "Authentic relationships"],
      image: "/images/consciousness-computing.jpg",
      link: "/services/consciousness-computing"
    },
    {
      id: "quantum-business-intel-001",
      title: "Quantum Business Intelligence Platform",
      description: "Next-generation business intelligence using quantum computing to simulate infinite business scenarios and predict outcomes with unprecedented accuracy.",
      price: "$300,000",
      aiScore: 97,
      benefits: ["500% decision accuracy", "Infinite scenario simulation", "200% prediction reliability"],
      image: "/images/quantum-business-intelligence.jpg",
      link: "/services/quantum-business-intelligence"
    },
    {
      id: "ai-sustainability-001",
      title: "AI-Powered Sustainability Platform",
      description: "Revolutionary AI platform that actively reverses climate change and creates profitable sustainable business models.",
      price: "$120,000",
      aiScore: 96,
      benefits: ["Active environmental restoration", "Sustainable profitability", "Carbon negative operations"],
      image: "/images/ai-sustainability.jpg",
      link: "/services/ai-sustainability"
    },
    {
      id: "ai-human-collab-001",
      title: "AI-Human Collaboration Platform",
      description: "Advanced collaboration platform that creates seamless partnerships between AI and humans for unprecedented productivity and innovation.",
      price: "$85,000",
      aiScore: 94,
      benefits: ["400% productivity increase", "300% innovation output", "250% employee satisfaction"],
      image: "/images/ai-human-collab.jpg",
      link: "/services/ai-human-collaboration"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 rounded-2xl p-12 mb-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 NEW SERVICES LAUNCH • SEPTEMBER 2025
          </div>
          <h2 className="text-5xl font-bold mb-6">Revolutionary AI Services Now Available</h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
            Experience the future of artificial intelligence with our groundbreaking new services that are reshaping industries and creating unprecedented opportunities for growth and innovation.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {newServices.map((service) => (
            <div 
              key={service.id}
              className="bg-gradient-to-br from-slate-800/50 to-purple-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30 hover:border-purple-400/60 transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="text-3xl">🤖</div>
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  AI Score: {service.aiScore}
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
              <p className="text-gray-300 text-sm mb-4 line-clamp-3">{service.description}</p>
              
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-purple-300 mb-2">Key Benefits:</h4>
                <ul className="text-xs text-gray-300 space-y-1">
                  {service.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center">
                      <span className="text-green-400 mr-2">✓</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex items-center justify-between mb-4">
                <div className="text-2xl font-bold text-yellow-400">{service.price}</div>
                <div className="text-xs text-gray-400">Starting Price</div>
              </div>
              
              <Link 
                to={service.link}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center block"
              >
                Learn More →
              </Link>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Link 
            to="/services" 
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-12 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg mr-4"
          >
            View All Services →
          </Link>
          <Link 
            to="/contact" 
            className="border-2 border-purple-400 text-purple-400 px-12 py-4 rounded-lg hover:bg-purple-400/10 transition-colors font-semibold text-lg"
          >
            Get Quote →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewServicesShowcase2026;