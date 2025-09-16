import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Zap, 
  Shield, 
  Cpu, 
  Database, 
  Cloud, 
  Smartphone, 
  Globe,
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp
} from 'lucide-react';

const RevolutionaryServicesShowcase2026 = () => {
  const services = [
    {
      id: 1,
      title: "Autonomous AI Agents",
      description: "Deploy intelligent agents that work autonomously to optimize your business processes and drive innovation.",
      icon: Brain,
      features: ["24/7 Autonomous Operation", "Self-Learning Capabilities", "Multi-Task Processing", "Real-time Decision Making"],
      category: "AI Innovation",
      price: "Starting at $2,999/month",
      featured: true
    },
    {
      id: 2,
      title: "Quantum-AI Computing",
      description: "Harness the power of quantum computing combined with AI for unprecedented computational capabilities.",
      icon: Zap,
      features: ["Exponential Speed Increase", "Complex Problem Solving", "Quantum Machine Learning", "Secure Quantum Communication"],
      category: "Quantum Technology",
      price: "Custom Pricing",
      featured: true
    },
    {
      id: 3,
      title: "Neural Interface Systems",
      description: "Connect human consciousness directly with AI systems for seamless human-machine collaboration.",
      icon: Cpu,
      features: ["Thought-to-Computer Control", "Enhanced Cognitive Abilities", "Real-time Data Processing", "Secure Neural Networks"],
      category: "Neural Technology",
      price: "Starting at $4,999/month",
      featured: true
    },
    {
      id: 4,
      title: "Edge AI Solutions",
      description: "Bring artificial intelligence to the edge of your network for real-time, low-latency processing.",
      icon: Smartphone,
      features: ["Real-time Processing", "Offline Capabilities", "Privacy Protection", "Scalable Deployment"],
      category: "Edge Computing",
      price: "Starting at $1,999/month",
      featured: false
    },
    {
      id: 5,
      title: "AI-Powered Cybersecurity",
      description: "Advanced AI systems that predict, detect, and neutralize cyber threats in real-time.",
      icon: Shield,
      features: ["Threat Prediction", "Real-time Response", "Zero-day Protection", "Continuous Learning"],
      category: "Cybersecurity",
      price: "Starting at $3,499/month",
      featured: false
    },
    {
      id: 6,
      title: "Quantum Data Analytics",
      description: "Process massive datasets with quantum-enhanced analytics for deeper insights and faster results.",
      icon: Database,
      features: ["Quantum Data Processing", "Advanced Pattern Recognition", "Predictive Analytics", "Real-time Insights"],
      category: "Data Analytics",
      price: "Starting at $2,499/month",
      featured: false
    }
  ];

  const stats = [
    { label: "Clients Served", value: "500+", icon: Globe },
    { label: "Success Rate", value: "99.8%", icon: CheckCircle },
    { label: "Cost Reduction", value: "85%", icon: TrendingUp },
    { label: "Client Satisfaction", value: "4.9/5", icon: Star }
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full border border-blue-200 mb-6">
            <Star className="w-5 h-5 text-blue-600 mr-2" />
            <span className="text-sm font-medium text-blue-800">REVOLUTIONARY SERVICES 2026</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Transform Your Business with
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Next-Gen AI</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our cutting-edge AI services are designed to revolutionize how you do business, 
            providing unprecedented efficiency, intelligence, and competitive advantage.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className={`group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 ${
                  service.featured ? 'ring-2 ring-blue-500 ring-opacity-50' : ''
                }`}
              >
                {service.featured && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-bold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      FEATURED
                    </div>
                  </div>
                )}
                
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-xs font-semibold text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
                      {service.category}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {service.description}
                  </p>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <div className="text-2xl font-bold text-gray-900 mb-2">{service.price}</div>
                  <div className="text-sm text-gray-500">Flexible payment options available</div>
                </div>
                
                <Link
                  to="/contact"
                  className="group/btn inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold rounded-xl transition-all duration-300 hover:scale-105"
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of forward-thinking companies already using our revolutionary AI services 
            to gain competitive advantage and drive unprecedented growth.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link
              to="/contact"
              className="group inline-flex items-center px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 hover:scale-105"
            >
              <span>Schedule Consultation</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            
            <Link
              to="/services"
              className="group inline-flex items-center px-8 py-4 bg-white/20 hover:bg-white/30 text-white font-bold rounded-xl border border-white/30 hover:border-white/50 transition-all duration-300 hover:scale-105"
            >
              <span>View All Services</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryServicesShowcase2026;