import React from 'react';
import { motion } from 'framer-motion';
import { 
  Cpu, 
  Network, 
  Eye, 
  TrendingUp, 
  BarChart3, 
  CheckCircle, 
  Globe,
  Zap,
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
  Building,
  Factory,
  Cog,
  Monitor
} from 'lucide-react';

const AIDigitalTwinPlatform: React.FC = () => {
  const features = [
    {
      icon: Cpu,
      title: "AI-Powered Digital Twin Creation",
      description: "Advanced AI algorithms that automatically create high-fidelity digital twins of physical assets, processes, and systems with real-time data integration."
    },
    {
      icon: Network,
      title: "Real-Time Synchronization",
      description: "Continuous synchronization between physical assets and their digital counterparts with IoT sensors, edge computing, and cloud-based analytics."
    },
    {
      icon: Eye,
      title: "Predictive Maintenance & Analytics",
      description: "AI-driven predictive analytics that forecast equipment failures, optimize maintenance schedules, and reduce downtime through proactive interventions."
    },
    {
      icon: BarChart3,
      title: "Advanced Simulation & Modeling",
      description: "High-performance simulation engine for scenario testing, what-if analysis, and optimization of complex systems and processes."
    },
    {
      icon: FileText,
      title: "Automated Reporting & Insights",
      description: "AI-generated insights and reports with actionable recommendations for operational optimization, cost reduction, and performance improvement."
    },
    {
      icon: Target,
      title: "Intelligent Optimization Engine",
      description: "Machine learning algorithms that continuously optimize operations, energy consumption, and resource allocation based on digital twin data."
    }
  ];

  const benefits = [
    "Reduce operational costs by up to 30% through predictive maintenance",
    "Achieve 99.9% uptime with AI-powered failure prediction",
    "Real-time monitoring of 1000+ assets and processes",
    "Automated optimization of energy consumption and resource usage",
    "Predictive analytics for proactive decision making",
    "Seamless integration with existing IoT and SCADA systems"
  ];

  const pricing = [
    {
      plan: "Starter",
      price: "$599",
      period: "/month",
      description: "Perfect for small to medium businesses",
      features: [
        "Up to 50 digital twins",
        "Basic predictive analytics",
        "Standard reporting templates",
        "Email support",
        "Cloud-based deployment"
      ]
    },
    {
      plan: "Professional",
      price: "$1,499",
      period: "/month",
      description: "Ideal for growing companies",
      features: [
        "Up to 200 digital twins",
        "Advanced AI analytics",
        "Custom reporting and dashboards",
        "Priority support",
        "Real-time monitoring",
        "API access",
        "Custom integrations"
      ]
    },
    {
      plan: "Enterprise",
      price: "$4,999",
      period: "/month",
      description: "For large enterprises with complex operations",
      features: [
        "Unlimited digital twins",
        "Advanced AI modeling",
        "Custom integrations",
        "Dedicated support team",
        "Advanced simulation capabilities",
        "White-label options",
        "On-premise deployment",
        "Custom training"
      ]
    }
  ];

  const applications = [
    {
      name: "Manufacturing & Industry 4.0",
      description: "Create digital twins of production lines, machinery, and entire factories for predictive maintenance and operational optimization."
    },
    {
      name: "Smart Cities & Infrastructure",
      description: "Monitor and optimize urban infrastructure including traffic systems, utilities, and public services through digital twin technology."
    },
    {
      name: "Healthcare & Medical Devices",
      description: "Digital twins of medical equipment, hospital systems, and patient monitoring for improved healthcare delivery and equipment reliability."
    },
    {
      name: "Energy & Utilities",
      description: "Monitor power plants, grid systems, and renewable energy installations for optimal performance and predictive maintenance."
    },
    {
      name: "Transportation & Logistics",
      description: "Digital twins of vehicles, fleets, and logistics networks for route optimization and predictive maintenance."
    },
    {
      name: "Buildings & Facilities",
      description: "Smart building management with digital twins for energy optimization, security, and occupant comfort."
    }
  ];

  const useCases = [
    {
      industry: "Manufacturing",
      description: "Monitor production lines in real-time, predict equipment failures, optimize energy usage, and improve overall equipment effectiveness (OEE)."
    },
    {
      industry: "Healthcare",
      description: "Track medical equipment performance, predict maintenance needs, and optimize hospital operations for better patient care and cost efficiency."
    },
    {
      industry: "Energy",
      description: "Monitor power generation equipment, predict failures, optimize energy production, and ensure grid stability and reliability."
    },
    {
      industry: "Transportation",
      description: "Track vehicle performance, predict maintenance needs, optimize routes, and improve fleet management efficiency."
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
          <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-2 mb-6">
            <Cpu className="w-5 h-5 text-purple-400" />
            <span className="text-purple-400 text-sm font-medium">AI-Powered Digital Twin Platform</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            AI Digital Twin Platform
          </h1>
          
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Transform your physical assets into intelligent digital twins with AI-powered monitoring, predictive analytics, and automated optimization. 
            Bridge the gap between physical and digital worlds for unprecedented operational insights.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 text-green-400">
              <CheckCircle className="w-5 h-5" />
              <span>Real-time Monitoring</span>
            </div>
            <div className="flex items-center gap-2 text-green-400">
              <CheckCircle className="w-5 h-5" />
              <span>Predictive Analytics</span>
            </div>
            <div className="flex items-center gap-2 text-green-400">
              <CheckCircle className="w-5 h-5" />
              <span>AI Optimization</span>
            </div>
            <div className="flex items-center gap-2 text-green-400">
              <CheckCircle className="w-5 h-5" />
              <span>IoT Integration</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
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
              Advanced Digital Twin Capabilities
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Our AI platform provides comprehensive digital twin capabilities that help organizations optimize operations and predict future outcomes
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-purple-400/40 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-purple-400" />
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
              Why Choose Our AI Digital Twin Platform?
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Transform your operations with AI-powered digital twin technology
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

      {/* Applications Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Digital Twin Applications
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Our platform supports digital twin applications across various industries and use cases
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {applications.map((application, index) => (
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
              Transparent Pricing for Digital Twin Excellence
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Choose the plan that best fits your digital twin needs and scale as you grow
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
                    ? 'border-purple-500/50 bg-purple-500/10 scale-105' 
                    : 'border-white/10'
                }`}
              >
                {index === 1 && (
                  <div className="inline-flex items-center gap-2 bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
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
                      ? 'bg-purple-600 hover:bg-purple-700 text-white'
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
              Industry-Specific Digital Twin Solutions
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Tailored digital twin solutions for various industries and operational requirements
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
              Ready to Transform Your Operations with Digital Twins?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Join leading organizations that trust our AI-powered platform to create intelligent digital twins
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a 
                href="/contact" 
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
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
                <Phone className="w-6 h-6 text-purple-400" />
                <span className="text-slate-300">+1 302 464 0950</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Mail className="w-6 h-6 text-purple-400" />
                <span className="text-slate-300">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <MapPin className="w-6 h-6 text-purple-400" />
                <span className="text-slate-300">364 E Main St STE 1008<br />Middletown DE 19709</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AIDigitalTwinPlatform;