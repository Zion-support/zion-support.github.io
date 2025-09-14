import React from 'react';
import { motion } from 'framer-motion';
import { 
  Cpu, 
  Network, 
  Zap, 
  TrendingUp, 
  BarChart3, 
  CheckCircle, 
  Globe,
  FileText,
  Database,
  Target,
  Award,
  Star,
  Phone,
  Mail,
  MapPin,
  Lightbulb,
  Gauge,
  Calendar,
  PieChart,
  Server,
  Wifi,
  Cloud,
  Smartphone
} from 'lucide-react';

const AIEdgeComputingPlatform: React.FC = () => {
  const features = [
    {
      icon: Cpu,
      title: "AI-Powered Edge Computing",
      description: "Deploy and optimize AI models at the edge with real-time processing, low latency inference, and intelligent resource management for IoT devices and edge nodes."
    },
    {
      icon: Network,
      title: "Distributed Edge Intelligence",
      description: "Distribute AI workloads across edge nodes, gateways, and cloud infrastructure with intelligent load balancing and adaptive resource allocation."
    },
    {
      icon: Zap,
      title: "Real-Time Edge Analytics",
      description: "Process data at the edge with AI-powered analytics, enabling instant insights and automated decision-making without cloud dependency."
    },
    {
      icon: BarChart3,
      title: "Edge AI Model Management",
      description: "Deploy, update, and manage AI models across edge devices with automated versioning, A/B testing, and performance monitoring."
    },
    {
      icon: FileText,
      title: "Edge Security & Privacy",
      description: "Advanced security features including encrypted edge processing, secure model deployment, and privacy-preserving AI inference."
    },
    {
      icon: Target,
      title: "Intelligent Edge Optimization",
      description: "AI-driven optimization of edge computing resources, power consumption, and network bandwidth for maximum efficiency and performance."
    }
  ];

  const benefits = [
    "Reduce latency by up to 90% with edge AI processing",
    "Achieve 99.9% uptime with distributed edge computing",
    "Real-time processing of 1000+ edge devices",
    "Automated optimization of edge resources and power consumption",
    "Predictive analytics for proactive edge management",
    "Seamless integration with existing IoT and edge infrastructure"
  ];

  const pricing = [
    {
      plan: "Starter",
      price: "$699",
      period: "/month",
      description: "Perfect for small to medium edge deployments",
      features: [
        "Up to 100 edge devices",
        "Basic AI model deployment",
        "Standard edge analytics",
        "Email support",
        "Cloud-based management"
      ]
    },
    {
      plan: "Professional",
      price: "$1,799",
      period: "/month",
      description: "Ideal for growing edge computing needs",
      features: [
        "Up to 500 edge devices",
        "Advanced AI edge processing",
        "Custom edge analytics",
        "Priority support",
        "Real-time monitoring",
        "API access",
        "Custom integrations"
      ]
    },
    {
      plan: "Enterprise",
      price: "$5,999",
      period: "/month",
      description: "For large enterprises with complex edge deployments",
      features: [
        "Unlimited edge devices",
        "Advanced edge AI capabilities",
        "Custom integrations",
        "Dedicated support team",
        "Advanced edge optimization",
        "White-label options",
        "On-premise deployment",
        "Custom training"
      ]
    }
  ];

  const edgeApplications = [
    {
      name: "IoT & Smart Devices",
      description: "Deploy AI models on IoT devices, sensors, and smart appliances for real-time processing and intelligent automation."
    },
    {
      name: "Industrial Edge Computing",
      description: "Edge AI for manufacturing, robotics, and industrial automation with real-time decision making and predictive maintenance."
    },
    {
      name: "Autonomous Vehicles",
      description: "Edge AI processing for autonomous vehicles, drones, and robotics with low-latency inference and real-time decision making."
    },
    {
      name: "Smart Cities & Infrastructure",
      description: "Edge computing for smart city applications including traffic management, environmental monitoring, and public safety."
    },
    {
      name: "Healthcare Edge Computing",
      description: "Edge AI for medical devices, patient monitoring, and healthcare applications with privacy-preserving processing."
    },
    {
      name: "Retail & Edge Commerce",
      description: "Edge computing for retail analytics, inventory management, and customer experience optimization."
    }
  ];

  const useCases = [
    {
      industry: "Manufacturing",
      description: "Deploy AI models on factory floor devices for real-time quality control, predictive maintenance, and process optimization."
    },
    {
      industry: "Healthcare",
      description: "Edge AI for medical imaging, patient monitoring, and diagnostic assistance with real-time processing and privacy protection."
    },
    {
      industry: "Transportation",
      description: "Edge computing for autonomous vehicles, traffic management, and logistics optimization with low-latency AI processing."
    },
    {
      industry: "Energy",
      description: "Edge AI for smart grid management, renewable energy optimization, and predictive maintenance of energy infrastructure."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Header Section */}
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-2 mb-6">
            <Cpu className="w-5 h-5 text-cyan-400" />
            <span className="text-cyan-400 text-sm font-medium">AI-Powered Edge Computing Platform</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
            AI Edge Computing Platform
          </h1>
          
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Transform your edge computing infrastructure with AI-powered processing, real-time analytics, and intelligent optimization. 
            Bring AI to the edge for unprecedented speed, efficiency, and intelligence.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 text-green-400">
              <CheckCircle className="w-5 h-5" />
              <span>Real-time Processing</span>
            </div>
            <div className="flex items-center gap-2 text-green-400">
              <CheckCircle className="w-5 h-5" />
              <span>Edge AI Deployment</span>
            </div>
            <div className="flex items-center gap-2 text-green-400">
              <CheckCircle className="w-5 h-5" />
              <span>Low Latency</span>
            </div>
            <div className="flex items-center gap-2 text-green-400">
              <CheckCircle className="w-5 h-5" />
              <span>IoT Integration</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Start Free Trial
            </a>
            <a 
              href="#pricing" 
              className="bg-white/10 hover:bg-white/15 border border-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              View Pricing
            </a>
          </div>
        </motion.div>
      </div>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advanced Edge Computing Capabilities
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Our AI platform provides comprehensive edge computing capabilities that help organizations deploy intelligence at the edge
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-cyan-400/40 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our AI Edge Computing Platform?
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Transform your edge computing strategy with AI-powered automation and intelligence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start gap-3"
              >
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-slate-300">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Edge Applications Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Edge Computing Applications
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Our platform supports edge computing applications across various industries and use cases
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {edgeApplications.map((application, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6"
              >
                <h3 className="text-xl font-semibold text-white mb-3">{application.name}</h3>
                <p className="text-slate-300">{application.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transparent Pricing for Edge Computing Excellence
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Choose the plan that best fits your edge computing needs and scale as you grow
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-white/5 border rounded-2xl p-8 ${
                  index === 1 
                    ? 'border-cyan-500/50 bg-cyan-500/10 scale-105' 
                    : 'border-white/10'
                }`}
              >
                {index === 1 && (
                  <div className="inline-flex items-center gap-2 bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
                    <Star className="w-4 h-4" />
                    Most Popular
                  </div>
                )}
                
                <h3 className="text-2xl font-bold text-white mb-2">{plan.plan}</h3>
                <p className="text-slate-400 mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-slate-400">{plan.period}</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a 
                  href="/contact" 
                  className={`w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    index === 1
                      ? 'bg-cyan-600 hover:bg-cyan-700 text-white'
                      : 'bg-white/10 hover:bg-white/15 border border-white/20 text-white'
                  }`}
                >
                  Get Started
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industry-Specific Edge Computing Solutions
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Tailored edge computing solutions for various industries and operational requirements
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6"
              >
                <h3 className="text-xl font-semibold text-white mb-3">{useCase.industry}</h3>
                <p className="text-slate-300">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Edge Computing with AI?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Join leading organizations that trust our AI-powered platform to deploy intelligence at the edge
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a 
                href="/contact" 
                className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
              </a>
              <a 
                href="tel:+13024640950" 
                className="bg-white/10 hover:bg-white/15 border border-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                Call +1 302 464 0950
              </a>
            </div>

            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="flex flex-col items-center gap-2">
                <Phone className="w-6 h-6 text-cyan-400" />
                <span className="text-slate-300">+1 302 464 0950</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Mail className="w-6 h-6 text-cyan-400" />
                <span className="text-slate-300">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <MapPin className="w-6 h-6 text-cyan-400" />
                <span className="text-slate-300">364 E Main St STE 1008<br />Middletown DE 19709</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AIEdgeComputingPlatform;