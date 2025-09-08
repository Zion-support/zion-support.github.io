import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { 
  Network, 
  Zap, 
  Shield, 
  Cpu, 
  Database, 
  Globe, 
  Rocket, 
  Target,
  BarChart3,
  Users,
  Clock,
  CheckCircle,
  ArrowRight,
  Star,
  Building,
  Cloud,
  Server,
  Wifi,
  Smartphone,
  Monitor,
  Phone,
  Mail,
  MapPin,
  TrendingUp,
  Settings,
  Eye,
  Brain
} from 'lucide-react';

const G5EnterpriseSolutions: React.FC = () => {
  const features = [
    {
      icon: Network,
      title: "Ultra-Fast Connectivity",
      description: "5G networks delivering up to 10Gbps speeds with ultra-low latency for real-time applications."
    },
    {
      icon: Shield,
      title: "Enterprise-Grade Security",
      description: "Advanced encryption, network slicing, and secure authentication protocols for business-critical operations."
    },
    {
      icon: Cpu,
      title: "Edge Computing Integration",
      description: "Distributed computing at the network edge for faster processing and reduced latency."
    },
    {
      icon: Globe,
      title: "Global Coverage",
      description: "Worldwide 5G infrastructure with seamless roaming and consistent performance."
    },
    {
      icon: BarChart3,
      title: "Real-Time Analytics",
      description: "Live monitoring and analytics for network performance and business intelligence."
    },
    {
      icon: Users,
      title: "Scalable Solutions",
      description: "Flexible infrastructure that grows with your business needs and user demands."
    }
  ];

  const useCases = [
    {
      title: "Smart Manufacturing",
      description: "IoT sensors, robotics, and automation systems powered by 5G connectivity.",
      benefits: ["Real-time monitoring", "Predictive maintenance", "Quality control automation"]
    },
    {
      title: "Remote Work & Collaboration",
      description: "High-definition video conferencing, VR meetings, and cloud-based collaboration tools.",
      benefits: ["Crystal clear communication", "Seamless file sharing", "Virtual workspace solutions"]
    },
    {
      title: "Autonomous Vehicles",
      description: "Connected vehicle infrastructure with real-time data exchange and safety systems.",
      benefits: ["Traffic optimization", "Safety enhancements", "Navigation improvements"]
    },
    {
      title: "Healthcare & Telemedicine",
      description: "Remote patient monitoring, telemedicine consultations, and medical device connectivity.",
      benefits: ["Improved patient care", "Reduced costs", "Better accessibility"]
    }
  ];

  const pricing = [
    {
      plan: "Starter",
      price: "$2,999",
      period: "month",
      features: [
        "5G Network Setup",
        "Basic Security Package",
        "24/7 Support",
        "Performance Monitoring",
        "Up to 100 devices"
      ]
    },
    {
      plan: "Professional",
      price: "$5,999",
      period: "month",
      features: [
        "Advanced 5G Infrastructure",
        "Enhanced Security Suite",
        "Priority Support",
        "Real-time Analytics",
        "Up to 500 devices",
        "Edge Computing"
      ],
      popular: true
    },
    {
      plan: "Enterprise",
      price: "$12,999",
      period: "month",
      features: [
        "Custom 5G Solution",
        "Enterprise Security",
        "Dedicated Support Team",
        "Advanced Analytics",
        "Unlimited devices",
        "Full Edge Computing",
        "Custom Integration"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Helmet>
        <title>5G Enterprise Solutions - Zion Tech Group</title>
        <meta name="description" content="Transform your business with cutting-edge 5G enterprise solutions. Ultra-fast connectivity, enterprise-grade security, and scalable infrastructure." />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                5G Enterprise
              </span>
              <br />
              <span className="text-white">Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your business operations with next-generation 5G technology. 
              Experience ultra-fast connectivity, enterprise-grade security, and scalable infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
              >
                Get Started
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-400 hover:text-white transition-all duration-300"
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose 5G Enterprise Solutions?
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Our 5G solutions are designed to meet the unique needs of modern enterprises
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 bg-white/5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Enterprise Use Cases
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Discover how 5G technology is revolutionizing various industries
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20"
              >
                <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-300 mb-4">{useCase.description}</p>
                <ul className="space-y-2">
                  {useCase.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-blue-200">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Pricing Plans
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Choose the plan that best fits your enterprise needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-white/10 backdrop-blur-lg rounded-xl p-8 border ${
                  plan.popular ? 'border-blue-400 scale-105' : 'border-white/20'
                }`}
              >
                {plan.popular && (
                  <div className="text-center mb-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.plan}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300 ml-1">/{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300">
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-blue-800 to-cyan-800 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Contact our 5G experts to discuss your enterprise needs and get started today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300"
            >
              Schedule Consultation
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-900 transition-all duration-300"
            >
              Contact Sales
            </motion.button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default G5EnterpriseSolutions;