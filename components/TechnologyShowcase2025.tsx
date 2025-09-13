import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Cpu, 
  Zap, 
  Shield, 
  Globe, 
  Database, 
  Lock, 
  BarChart3,
  ArrowRight,
  CheckCircle,
  Star
} from 'lucide-react';

const TechnologyShowcase2025: React.FC = () => {
  const technologies = [
    {
      id: 1,
      name: "Advanced AI Systems",
      description: "Next-generation artificial intelligence with 99.9% accuracy and real-time processing capabilities",
      icon: Brain,
      features: [
        "Neural Architecture Search",
        "Automated Model Training",
        "Real-time Inference",
        "Multi-modal Processing"
      ],
      benefits: [
        "10,000x faster processing",
        "99.9% accuracy rate",
        "Reduced development time by 90%",
        "Seamless integration"
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      name: "Quantum Computing",
      description: "Revolutionary quantum processors delivering unprecedented computational power for complex problems",
      icon: Cpu,
      features: [
        "Error-corrected quantum bits",
        "Quantum machine learning",
        "Quantum optimization",
        "Quantum cryptography"
      ],
      benefits: [
        "Exponential speedup",
        "Unbreakable encryption",
        "Complex problem solving",
        "Future-proof technology"
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      name: "Edge AI Processing",
      description: "Intelligent processing at the edge for real-time decision making and reduced latency",
      icon: Zap,
      features: [
        "Real-time inference",
        "Low-latency processing",
        "Offline capabilities",
        "Resource optimization"
      ],
      benefits: [
        "Instant responses",
        "Reduced bandwidth usage",
        "Enhanced privacy",
        "Cost efficiency"
      ],
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 4,
      name: "Advanced Security",
      description: "Military-grade security protocols protecting your data and AI systems from all threats",
      icon: Shield,
      features: [
        "End-to-end encryption",
        "Zero-trust architecture",
        "Threat detection",
        "Compliance automation"
      ],
      benefits: [
        "100% data protection",
        "Regulatory compliance",
        "Real-time monitoring",
        "Automated responses"
      ],
      color: "from-red-500 to-orange-500"
    },
    {
      id: 5,
      name: "Cloud Infrastructure",
      description: "Scalable cloud solutions designed for AI workloads with global availability",
      icon: Globe,
      features: [
        "Auto-scaling resources",
        "Global distribution",
        "High availability",
        "Cost optimization"
      ],
      benefits: [
        "Unlimited scalability",
        "99.99% uptime",
        "Global performance",
        "Pay-as-you-scale"
      ],
      color: "from-indigo-500 to-blue-500"
    },
    {
      id: 6,
      name: "Data Analytics",
      description: "Advanced analytics platform providing deep insights from your AI systems and data",
      icon: BarChart3,
      features: [
        "Real-time analytics",
        "Predictive modeling",
        "Data visualization",
        "Custom dashboards"
      ],
      benefits: [
        "Actionable insights",
        "Predictive accuracy",
        "Visual reporting",
        "Custom metrics"
      ],
      color: "from-teal-500 to-green-500"
    }
  ];

  const capabilities = [
    {
      title: "Machine Learning",
      description: "Advanced ML algorithms for pattern recognition, prediction, and automation",
      icon: Brain,
      stats: "99.9% accuracy"
    },
    {
      title: "Natural Language Processing",
      description: "Human-like language understanding and generation capabilities",
      icon: Globe,
      stats: "50+ languages"
    },
    {
      title: "Computer Vision",
      description: "Advanced image and video analysis with real-time processing",
      icon: Cpu,
      stats: "Real-time processing"
    },
    {
      title: "Predictive Analytics",
      description: "Forecast future trends and behaviors with high accuracy",
      icon: BarChart3,
      stats: "95% prediction accuracy"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Revolutionary Technology Stack
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Cutting-edge technologies powering the future of artificial intelligence and digital transformation
          </p>
        </div>

        {/* Technologies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {technologies.map((tech) => (
            <div key={tech.id} className="group">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 h-full">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${tech.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <tech.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4">
                  {tech.name}
                </h3>
                <p className="text-gray-300 mb-6">
                  {tech.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {tech.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Benefits:</h4>
                  <ul className="space-y-2">
                    {tech.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center text-gray-300">
                        <Star className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Learn More Link */}
                <Link 
                  to={`/technologies/${tech.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="inline-flex items-center text-blue-400 hover:text-white transition-colors"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Capabilities Section */}
        <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 mb-16">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            Core AI Capabilities
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((capability, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <capability.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">
                  {capability.title}
                </h4>
                <p className="text-gray-300 mb-3">
                  {capability.description}
                </p>
                <div className="text-lg font-bold text-blue-400">
                  {capability.stats}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8">
            <h3 className="text-3xl font-bold text-white mb-4">
              Experience the Power of Our Technology
            </h3>
            <p className="text-indigo-100 mb-6 max-w-2xl mx-auto">
              See how our revolutionary technology stack can transform your business. 
              Schedule a demo and discover the possibilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/demo" 
                className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Schedule Demo
              </Link>
              <Link 
                to="/technologies" 
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors"
              >
                Explore All Technologies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologyShowcase2025;