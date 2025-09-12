import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Activity, 
  Shield, 
  Zap, 
  Users, 
  BarChart3, 
  Heart, 
  Target,
  CheckCircle,
  Star,
  Clock,
  Globe,
  Lock,
  ArrowRight,
  Rocket,
  Microscope,
  Stethoscope,
  Pill,
  FileText
} from 'lucide-react';

const AIHealthcareDiagnosticsPlatform: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Diagnosis",
      description: "Advanced machine learning algorithms analyze medical images, lab results, and patient symptoms for accurate diagnosis"
    },
    {
      icon: Microscope,
      title: "Medical Image Analysis",
      description: "Computer vision technology for X-rays, MRIs, CT scans, and pathology slides with 99.2% accuracy"
    },
    {
      icon: Activity,
      title: "Predictive Analytics",
      description: "Early disease detection and risk assessment using AI-driven pattern recognition and predictive modeling"
    },
    {
      icon: Zap,
      title: "Real-time Monitoring",
      description: "Continuous patient monitoring with instant alerts for critical changes and emergency situations"
    },
    {
      icon: Users,
      title: "Personalized Treatment Plans",
      description: "AI-generated treatment recommendations based on patient history, genetics, and current condition"
    },
    {
      icon: BarChart3,
      title: "Clinical Decision Support",
      description: "Evidence-based clinical guidelines and treatment protocols integrated with AI insights"
    }
  ];

  const benefits = [
    "Improve diagnostic accuracy by 35% compared to traditional methods",
    "Reduce diagnosis time from days to hours",
    "Lower healthcare costs by 25% through early detection",
    "Enable remote diagnostics and telemedicine capabilities",
    "Provide 24/7 diagnostic support for healthcare providers",
    "Reduce medical errors and improve patient outcomes"
  ];

  const useCases = [
    "Hospitals and medical centers requiring advanced diagnostic capabilities",
    "Radiology departments seeking AI-powered image analysis",
    "Primary care physicians needing diagnostic support tools",
    "Specialist clinics requiring rapid diagnostic insights",
    "Telemedicine platforms needing remote diagnostic capabilities",
    "Research institutions conducting medical AI studies"
  ];

  const pricing = {
    starter: {
      price: "$299",
      period: "/month",
      features: [
        "Basic diagnostic analysis",
        "Medical image processing",
        "Patient data management",
        "Email support",
        "Mobile app access"
      ]
    },
    professional: {
      price: "$599",
      period: "/month",
      features: [
        "Everything in Starter",
        "Advanced AI diagnostics",
        "Predictive analytics",
        "Clinical decision support",
        "Priority support",
        "Custom model training"
      ]
    },
    enterprise: {
      price: "$1,299",
      period: "/month",
      features: [
        "Everything in Professional",
        "Institutional-grade analytics",
        "Custom AI model development",
        "Dedicated support team",
        "White-label solutions",
        "API access and integration"
      ]
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-blue-900/20 to-slate-900/20"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 rounded-full text-green-300 text-sm font-medium mb-6"
            >
              <Brain className="w-4 h-4 mr-2" />
              AI-Powered Healthcare Diagnostics
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold text-white mb-6"
            >
              AI Healthcare
              <span className="block bg-gradient-to-r from-green-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Diagnostics Platform
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
            >
              Revolutionize healthcare diagnostics with AI-powered medical image analysis, predictive analytics, 
              and clinical decision support. Improve accuracy, reduce diagnosis time, and save lives.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold rounded-xl hover:from-green-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="px-8 py-4 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20">
                Schedule Demo
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Advanced Healthcare Intelligence
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI platform combines cutting-edge machine learning with medical expertise 
              to deliver accurate diagnostics and improved patient outcomes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-green-500/50 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-300 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Why Choose AI Healthcare Diagnostics?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the future of healthcare with AI-driven diagnostics, 
              predictive analytics, and clinical decision support.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start space-x-4"
              >
                <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <p className="text-lg text-gray-300">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Perfect For Every Healthcare Provider
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Whether you're a small clinic or a large hospital system, 
              our AI platform scales to meet your diagnostic needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-xl p-6 hover:border-green-400/40 transition-all duration-300"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <Target className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">Use Case {index + 1}</h3>
                </div>
                <p className="text-gray-300">{useCase}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flexible pricing options designed to meet the needs of every healthcare provider, 
              from small clinics to large hospital systems.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(pricing).map(([plan, details], index) => (
              <motion.div
                key={plan}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-white/5 backdrop-blur-sm border rounded-2xl p-8 ${
                  plan === 'professional' 
                    ? 'border-green-500/50 bg-gradient-to-br from-green-500/10 to-blue-500/10' 
                    : 'border-white/10'
                }`}
              >
                {plan === 'professional' && (
                  <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-green-500 to-blue-600 text-white text-sm font-semibold rounded-full mb-4">
                    Most Popular
                  </div>
                )}
                
                <h3 className="text-2xl font-bold text-white mb-2 capitalize">
                  {plan}
                </h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">{details.price}</span>
                  <span className="text-gray-400">{details.period}</span>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {details.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                  plan === 'professional'
                    ? 'bg-gradient-to-r from-green-500 to-blue-600 text-white hover:from-green-600 hover:to-blue-700'
                    : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                }`}>
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-sm border border-green-500/30 rounded-3xl p-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Healthcare Diagnostics?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join leading healthcare providers already leveraging AI-powered diagnostics 
              to improve patient outcomes and reduce healthcare costs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold rounded-xl hover:from-green-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="px-8 py-4 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20">
                Contact Sales
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-900 to-blue-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Contact Information</h3>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-center justify-center space-x-2">
                  <Clock className="w-4 h-4 text-green-400" />
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Globe className="w-4 h-4 text-green-400" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Lock className="w-4 h-4 text-green-400" />
                  <span>364 E Main St STE 1008, Middletown DE 19709</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
              <div className="space-y-2">
                <a href="https://ziontechgroup.com" className="block text-gray-300 hover:text-white transition-colors">
                  Visit Website
                </a>
                <a href="mailto:kleber@ziontechgroup.com" className="block text-gray-300 hover:text-white transition-colors">
                  Request Quote
                </a>
                <a href="tel:+13024640950" className="block text-gray-300 hover:text-white transition-colors">
                  Schedule Call
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Service Features</h3>
              <div className="space-y-2">
                <div className="text-gray-300">AI-Powered Diagnosis</div>
                <div className="text-gray-300">Medical Image Analysis</div>
                <div className="text-gray-300">Predictive Analytics</div>
                <div className="text-gray-300">Clinical Decision Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIHealthcareDiagnosticsPlatform;