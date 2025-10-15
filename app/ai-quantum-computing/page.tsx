<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
const AiQuantumComputingPage: React.FC = () => {}
  const services = [
    {}
      name: "Quantum AI Algorithms",
      description: "Advanced quantum machine learning algorithms for solving complex optimization problems.",
      features: ["Quantum ML models", "Optimization algorithms", "Pattern recognition", "Quantum neural networks", "Hybrid classical-quantum", "Performance benchmarking"],
      price: "From $9,999",
      marketPrice: "$19,999-99,999",
      popular: true,
      icon: <Atom className="w-8 h-8" />,
      benefits: "Solve problems 1000x faster than classical computers"
    },
    {}
      name: "Quantum Security Solutions",
      description: "Quantum-resistant cryptography and secure communication protocols for future-proof security.",
      features: ["Quantum key distribution", "Post-quantum cryptography", "Secure communications", "Quantum random numbers", "Encryption protocols", "Security auditing"],
      price: "From $7,999",
      marketPrice: "$15,999-79,999",
      popular: false,
      icon: <className="w-8 h-8" />,
      benefits: "Future-proof security against quantum attacks"
    },
    {}
      name: "Quantum Computing Infrastructure",
      description: "Complete quantum computing infrastructure setup and management for research and development.",
      features: ["Quantum hardware setup", "Cryogenic systems", "Control systems", "Quantum software stack", "Maintenance support", "Training programs"],
      price: "From $49,999",
      marketPrice: "$99,999-499,999",
      popular: true,
      icon: <className="w-8 h-8" />,
      benefits: "Deploy quantum infrastructure in 6 months"
    }
  ];

  return ()
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100">
      <Helmet>
        <title>AI Quantum Computing - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI quantum computing solutions for advanced algorithms, security, and infrastructure development." />
      </Helmet>

      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            AI Quantum Computing Solutions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pioneer the future of computing with our AI-powered quantum solutions. 
            Unlock unprecedented computational power and solve previously impossible problems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => ()}
            <div key={index} className={`bg-white rounded-2xl shadow-xl p-8 relative ${service.popular ? 'ring-2 ring-indigo-500' : ''}`}>
              {service.popular && ()}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-indigo-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full mb-4">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.name}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>

              <div className="mb-6">
                <div className="flex items-center justify-center mb-4">
                  <span className="text-3xl font-bold text-indigo-600">{service.price}</span>
                  <span className="text-gray-500 line-through ml-2">{service.marketPrice}</span>
                </div>
                <p className="text-sm text-indigo-600 font-semibold text-center">{service.benefits}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {service.features.map((feature, featureIndex) => ()}
                  <li key={featureIndex} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-indigo-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center">
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />

=======
import React from 'react';;
import SEOHead from '../components/SEOHead';

const AiQuantumComputingPage: React.FC = () => {
  return (
    <>
      <SEOHead title ="AI Quantum Computing - Zion Tech Group"";
        description="Explore the future of computing with our AI quantum computing solutions for complex problem solving and optimization."",
        keywords="AI quantum computing, quantum AI, quantum algorithms, quantum optimization, quantum machine learning"";
      />
      <div className ="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 text-white">";
        <div className ="min-h-screen flex items-center justify-center">";
          <div className ="text-center max-w-4xl mx-auto px-4">";
            <h1 className ="text-5xl md: text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">";
              AI Quantum Computing
            </h1>
            <p className ="text-xl text-gray-300 mb-8">";
              Explore the future of computing with our AI quantum computing solutions for complex problem solving and optimization.
            </p>
            <div className ="flex flex-col sm:flex-row gap-4 justify-center">";
              <button className ="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">";
                Coming Soon
              </button>
              <button className ="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-3 px-8 rounded-lg transition-all duration-300">";
                Learn More
>>>>>>> main
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  ),
};

export default AiQuantumComputingPage;