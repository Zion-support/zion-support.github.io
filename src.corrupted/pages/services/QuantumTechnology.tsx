import React from "react"
import { Box, Cpu, Zap, Globe, Rocket, Shield, BarChart3, Activity } from "lucide-react"
const QuantumTechnology = () => {;
  const quantumServices = [;
    {;
      title: "Quantum Neural Networks",description: "Advanced quantum machine learning algorithms for pattern recognition and data analysis.",price: "From $35,000/project",;
      features: ["Quantum algorithms", "Pattern recognition", "Data analysis", "Machine learning"],;
      icon: Box;
    };
    {;
      title: "Quantum Edge Computing",description: "Distributed quantum computing solutions for real-time processing at the edge.",price: "From $28,000/month",;
      features: ["Edge processing", "Real-time analytics", "Distributed computing", "Low latency"],;
      icon: Zap;
    };
    {;
      title: "Quantum Cryptography",description: "Unbreakable encryption using quantum key distribution and quantum-resistant algorithms.",price: "From $42,000/month",;
      features: ["Quantum key distribution", "Post-quantum cryptography", "Secure communications", "Threat protection"],;
      icon: Shield;
    };
  ];
  const quantumTechnologies = [;
    {;
      name: "Quantum Computing",description: "Superposition and entanglement-based computation",icon: Cpu,features: ["Qubit management", "Quantum gates", "Error correction", "Quantum algorithms"]
    },;
    {;
      name: "Quantum Machine Learning",description: "AI algorithms leveraging quantum properties",icon: BarChart3,features: ["Quantum neural networks", "Pattern recognition", "Optimization", "Data analysis"]
    },;
    {;
      name: "Quantum Communications",description: "Secure communication using quantum principles",icon: Globe,features: ["Quantum key distribution", "Entanglement", "Secure channels", "Quantum networks"]
    };
  ],;

  const benefits = [;
    "Exponential speedup for complex computational problems",;
    "Unbreakable encryption and enhanced security",;
    "Advanced machine learning and AI capabilities",;
    "Revolutionary breakthroughs in scientific research",;
    "Competitive advantage in technology innovation",;
    "Future-proof solutions for emerging challenges"
  ],;

  return (
    <div className="min-h-screen bg-slate-900 text-white">;
      {/* Hero Section */};
      <section className="relative pt-24 pb-16 px-4 sm: px-6 lg:px-8">;
        <div className="max-w-7xl mx-auto text-center">;
          <div className="mb-8">;
            <div className="inline-flex items-center px-4 py-2 bg-purple-500/10 text-purple-400 rounded-full text-sm font-medium mb-6">;
              <[^>]*/>
              Quantum Technology;
            </[^>]*>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">;
              Quantum;
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Technology</[^>]*>
            </[^>]*>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">;
              Harness the power of quantum computing to solve complex problems that are impossible;
              for classical computers. Experience the future of computation.;
            </[^>]*>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">;
              <a href="#services" className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl">;
                Explore Services;
              </[^>]*>
              <a href="/contact" className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300">;
                Get Started;
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* What is Quantum Computing Section */};
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">;
        <div className="max-w-7xl mx-auto">;
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">;
            <div>;
              <h2 className="text-3xl md:text-4xl font-bold mb-6">;
                What is Quantum Computing?;
              </[^>]*>
              <p className="text-lg text-gray-300 mb-6">;
                Quantum computing leverages the principles of quantum mechanics to process information in ways that;
                classical computers cannot. By using quantum bits (qubits) that can exist in multiple states simultaneously;
                quantum computers can solve complex problems exponentially faster.;
              </[^>]*>
              <div className="space-y-4">;
                <div className="flex items-center space-x-3">;
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></[^>]*>
                  <span className="text-gray-300">Superposition - Qubits can be in multiple states at once</[^>]*>
                </[^>]*>
                <div className="flex items-center space-x-3">;
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></[^>]*>
                  <span className="text-gray-300">Entanglement - Qubits can be correlated across vast distances</[^>]*>
                </[^>]*>
                <div className="flex items-center space-x-3">;
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></[^>]*>
                  <span className="text-gray-300">Quantum interference - Enables precise control over computations</[^>]*>
                </[^>]*>
              </[^>]*>
            </[^>]*>
            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 p-8 rounded-2xl border border-purple-500/30">;
              <div className="text-center">;
                <[^>]*/>
                <h3 className="text-2xl font-bold mb-2">Quantum Advantage</[^>]*>
                <p className="text-gray-300">;
                  Solve problems in minutes that would take classical computers thousands of years;
                </[^>]*>
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Quantum Services */};
      <section id="services" className="py-16 px-4 sm:px-6 lg:px-8">;
        <div className="max-w-7xl mx-auto">;
          <div className="text-center mb-16">;
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">;
              Our Quantum Services;
            </[^>]*>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">;
              Cutting-edge quantum technology solutions designed to solve;
              the most complex computational challenges.;
            </[^>]*>
          </[^>]*>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
            {quantumServices.map((service, index) => (;
              <div key={index} className="bg-slate-800/50 border border-white/10 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300">;
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">;
                  <[^>]*/>
                </[^>]*>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</[^>]*>
                <p className="text-gray-300 mb-4">{service.description}</[^>]*>
                <p className="text-lg font-semibold text-purple-400 mb-4">{service.price}</[^>]*>
                <ul className="space-y-2">;
                  {service.features.map((feature, featureIndex) => (;
                    <li key={featureIndex} className="text-sm text-gray-400 flex items-start">;
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2 mt-2 flex-shrink-0"></[^>]*>
                      {feature};
                    </[^>]*>
                  ))};
                </[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Quantum Technologies */};
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">;
        <div className="max-w-7xl mx-auto">;
          <div className="text-center mb-16">;
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">;
              Quantum Technologies We Use;
            </[^>]*>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">;
              Advanced quantum technologies and platforms to build;
              revolutionary computing solutions.;
            </[^>]*>
          </[^>]*>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">;
            {quantumTechnologies.map((tech, index) => (;
              <div key={index} className="bg-slate-800/50 border border-white/10 rounded-xl p-6 text-center hover:border-purple-500/50 transition-all duration-300">;
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">;
                  <[^>]*/>
                </[^>]*>
                <h3 className="text-xl font-semibold text-white mb-3">{tech.name}</[^>]*>
                <p className="text-gray-300 mb-4">{tech.description}</[^>]*>
                <ul className="space-y-2">;
                  {tech.features.map((feature, idx) => (;
                    <li key={idx} className="text-sm text-gray-400">;
                      {feature};
                    </[^>]*>
                  ))};
                </[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Benefits Section */};
      <section className="py-16 px-4 sm: px-6 lg:px-8">;
        <div className="max-w-7xl mx-auto">;
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">;
            <div>;
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">;
                Why Choose Quantum Technology?;
              </[^>]*>
              <p className="text-lg text-gray-300 mb-6">;
                Quantum technology represents the next frontier in computing;
                offering unprecedented capabilities for solving complex problems.;
              </[^>]*>
              <ul className="space-y-3">;
                {benefits.map((benefit, index) => (;
                  <li key={index} className="flex items-center text-gray-300">;
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></[^>]*>
                    {benefit};
                  </[^>]*>
                ))};
              </[^>]*>
            </[^>]*>
            <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl p-8 border border-purple-500/30">;
              <div className="text-center">;
                <[^>]*/>
                <h3 className="text-2xl font-bold text-white mb-2">Quantum Innovation</[^>]*>
                <p className="text-gray-300 mb-6">;
                  Our team is at the forefront of quantum technology research;
                  and development.;
                </[^>]*>
                <div className="text-sm text-gray-400">;
                  <p>• Quantum research experts</[^>]*>
                  <p>• Cutting-edge innovation</[^>]*>
                  <p>• Future-focused solutions</[^>]*>
                </[^>]*>
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* CTA Section */};
      <section className="py-16 px-4 sm: px-6 lg:px-8">;
        <div className="max-w-4xl mx-auto text-center">;
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">;
            Ready for the Quantum Future?;
          </[^>]*>
          <p className="text-xl text-gray-300 mb-8">;
            Let's discuss how quantum technology can solve your most;
            complex computational challenges.;
          </[^>]*>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">;
            <a href="/contact" className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl">;
              Get Started;
            </[^>]*>
            <a href="/services" className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300">;
              View All Services;
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>
    </[^>]*>
  );
};
export default QuantumTechnology;