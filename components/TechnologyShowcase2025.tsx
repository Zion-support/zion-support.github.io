import React from 'react';
import Link from 'next/link';
import { 
  Brain
  Cpu
  Shield
  Zap
  Globe
  Database
  Lock
  TrendingUp,
  ArrowRight,
  Star,
  CheckCircle
} from 'lucide-react';

const TechnologyShowcase2025 = () => {
  const technologies = [
    {
      id: 1,
      name: "AI-Powered Automation",
      description: "Revolutionary AI systems that automate complex business processes with 99.9% accuracy.",
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      features: ["Machine Learning"Natural Language Processing"Predictive Analytics"],
      status: "Available Now",
      category: "Artificial Intelligence"
    },
    {
      id: 2,
      name: "Quantum Computing Solutions",
      description: "Breakthrough quantum algorithms that solve problems impossible for classical computers.",
      icon: <Cpu className="w-8 h-8 text-purple-500" />,
      features: ["Quantum Algorithms"Cryptography"Optimization"],
      status: "Beta Testing",
      category: "Quantum Technology"
    },
    {
      id: 3,
      name: "Neural Interface Platform",
      description: "Direct brain-computer interfaces enabling seamless human-machine interaction.",
      icon: <Zap className="w-8 h-8 text-green-500" />,
      features: ["BCI Technology"Real-time Processing"Neural Networks"],
      status: "In Development",
      category: "Neural Technology"
    },
    {
      id: 4,
      name: "Advanced Cybersecurity",
      description: "Next-generation security systems protecting against quantum and AI threats.",
      icon: <Shield className="w-8 h-8 text-red-500" />,
      features: ["Quantum Encryption"AI Threat Detection"Zero Trust Architecture"],
      status: "Available Now",
      category: "Cybersecurity"
    },
    {
      id: 5,
      name: "Global Cloud Infrastructure",
      description: "Distributed cloud computing with edge processing and real-time synchronization.",
      icon: <Globe className="w-8 h-8 text-orange-500" />,
      features: ["Edge Computing"Global CDN"Auto-scaling"],
      status: "Available Now",
      category: "Cloud Computing"
    },
    {
      id: 6,
      name: "Blockchain Integration",
      description: "Decentralized systems ensuring transparency and immutability across all operations.",
      icon: <Database className="w-8 h-8 text-indigo-500" />,
      features: ["Smart Contracts"DeFi Integration"NFT Support"],
      status: "Available Now",
      category: "Blockchain"
    }
  ];

  const stats = [
    { label: "Technologies Deployed"value: "50+"icon: <Cpu className="w-6 h-6" /> },
    { label: "Global Clients"value: "1000+"icon: <Globe className="w-6 h-6" /> },
    { label: "Success Rate"value: "99.9%"icon: <CheckCircle className="w-6 h-6" /> },
    { label: "Uptime"value: "99.99%"icon: <TrendingUp className="w-6 h-6" /> }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-4">
            <Star className="w-4 h-4 mr-2" />
            Cutting-Edge Technology
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Revolutionary Technology
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Showcase 2025
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the breakthrough technologies that are reshaping industries and creating new possibilities for the future.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((statindex) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Technology Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {technologies.map((tech) => (
            <div
              key={tech.id}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden"
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    {tech.icon}
                    <span className="ml-3 text-sm font-medium text-gray-500">{tech.category}</span>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    tech.status === 'Available Now' 
                      ? 'bg-green-100 text-green-800' 
                      : tech.status === 'Beta Testing'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    {tech.status}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {tech.name}
                </h3>
                
                <p className="text-gray-600 mb-6">
                  {tech.description}
                </p>
                
                <div className="space-y-2 mb-6">
                  {tech.features.map((featureindex) => (
                    <div key={index} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
                
                <Link
                  href={`/technology/${tech.id}`}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium group-hover:translate-x-1 transition-transform"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of companies already using our revolutionary technologies to achieve unprecedented growth and efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              href="/demo"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologyShowcase2025;