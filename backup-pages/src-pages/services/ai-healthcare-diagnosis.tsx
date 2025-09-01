import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Stethoscope, 
  Activity, 
  Shield, 
  Zap, 
  TrendingUp, 
  Check, 
  X, 
  Star,
  Heart,
  Eye,
  Microscope,
  FileText,
  Users,
  Clock,
  DollarSign
} from 'lucide-react';

const AIHealthcareDiagnosis: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const benefits = [
    {
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      title: "95% Accuracy Rate",
      description: "AI-powered diagnosis with proven accuracy comparable to expert radiologists"
    },
    {
      icon: <Clock className="w-8 h-8 text-green-500" />,
      title: "Instant Results",
      description: "Get diagnostic results in seconds, not days or weeks"
    },
    {
      icon: <DollarSign className="w-8 h-8 text-purple-500" />,
      title: "Cost Effective",
      description: "Reduce diagnostic costs by up to 60% compared to traditional methods"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-orange-500" />,
      title: "Continuous Learning",
      description: "AI models improve accuracy with every diagnosis performed"
    }
  ];

  const features = [
    {
      icon: <Eye className="w-6 h-6 text-blue-500" />,
      title: "Multi-Modal Imaging",
      description: "Analyze X-rays, CT scans, MRIs, and ultrasound images with single AI platform"
    },
    {
      icon: <Brain className="w-6 h-6 text-green-500" />,
      title: "Deep Learning Models",
      description: "State-of-the-art neural networks trained on millions of medical images"
    },
    {
      icon: <Activity className="w-6 h-6 text-purple-500" />,
      title: "Real-time Analysis",
      description: "Instant processing and analysis of medical imaging data"
    },
    {
      icon: <Shield className="w-6 h-6 text-red-500" />,
      title: "HIPAA Compliant",
      description: "Enterprise-grade security and privacy protection for patient data"
    },
    {
      icon: <FileText className="w-6 h-6 text-indigo-500" />,
      title: "Automated Reporting",
      description: "Generate comprehensive diagnostic reports automatically"
    },
    {
      icon: <Users className="w-6 h-6 text-teal-500" />,
      title: "Collaborative Platform",
      description: "Enable radiologists and physicians to collaborate seamlessly"
    }
  ];

  const useCases = [
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: "Cardiology",
      description: "Heart disease detection, ECG analysis, and cardiovascular imaging"
    },
    {
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      title: "Neurology",
      description: "Brain tumor detection, stroke diagnosis, and neurological disorders"
    },
    {
      icon: <Eye className="w-8 h-8 text-green-500" />,
      title: "Radiology",
      description: "Chest X-ray analysis, bone fracture detection, and organ imaging"
    },
    {
      icon: <Microscope className="w-8 h-8 text-purple-500" />,
      title: "Pathology",
      description: "Tissue analysis, cancer detection, and cellular pathology"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$299",
      period: "/month",
      description: "Perfect for small clinics and individual practitioners",
      features: [
        "Up to 100 scans/month",
        "Basic AI diagnosis",
        "Standard reporting",
        "Email support",
        "HIPAA compliance"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Professional",
      price: "$799",
      period: "/month",
      description: "Ideal for medium-sized hospitals and medical centers",
      features: [
        "Up to 1,000 scans/month",
        "Advanced AI diagnosis",
        "Custom reporting",
        "Priority support",
        "API access",
        "Multi-user accounts"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$1,999",
      period: "/month",
      description: "For large healthcare networks and research institutions",
      features: [
        "Unlimited scans",
        "Custom AI models",
        "White-label solution",
        "24/7 dedicated support",
        "Custom integrations",
        "On-premise deployment"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const competitors = [
    {
      name: "Zion Tech Group AI",
      accuracy: "95%",
      speed: "< 30 seconds",
      cost: "$299-1,999/month",
      features: "Multi-modal, HIPAA compliant, API access",
      rating: "5.0"
    },
    {
      name: "Competitor A",
      accuracy: "88%",
      speed: "2-5 minutes",
      cost: "$500-2,500/month",
      features: "Limited modalities, basic compliance",
      rating: "4.2"
    },
    {
      name: "Competitor B",
      accuracy: "92%",
      speed: "1-3 minutes",
      cost: "$400-3,000/month",
      features: "Good accuracy, expensive, limited support",
      rating: "4.5"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-blue-500/20 rounded-full">
                <Brain className="w-12 h-12 text-blue-400" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI-Powered Healthcare Diagnosis
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Revolutionize medical diagnosis with AI that achieves 95% accuracy. 
              Detect diseases faster, reduce costs, and save lives with our advanced 
              medical imaging analysis platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
              >
                Start Free Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-transparent border-2 border-blue-400 text-blue-400 hover:bg-blue-400/10 font-semibold rounded-lg transition-colors"
              >
                View Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2">
            {['overview', 'features', 'pricing', 'competitors', 'contact'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  activeTab === tab
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Overview Tab */}
      {activeTab === 'overview' && (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Transform Healthcare with AI
              </h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Our AI-powered healthcare diagnosis platform combines cutting-edge machine learning 
                with medical expertise to provide accurate, fast, and cost-effective diagnostic solutions.
              </p>
            </motion.div>

            {/* Benefits Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 text-center"
                >
                  <div className="flex justify-center mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-slate-300">{benefit.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Use Cases */}
            <div className="text-center mb-16">
              <h3 className="text-2xl font-bold text-white mb-8">Medical Specialties</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {useCases.map((useCase, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 text-center"
                  >
                    <div className="flex justify-center mb-4">{useCase.icon}</div>
                    <h4 className="text-lg font-semibold text-white mb-2">{useCase.title}</h4>
                    <p className="text-slate-300 text-sm">{useCase.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Features Tab */}
      {activeTab === 'features' && (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Powerful AI Features
              </h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Our platform combines advanced AI algorithms with medical expertise to deliver 
                unprecedented diagnostic accuracy and efficiency.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-slate-800/50 p-6 rounded-xl border border-slate-700"
                >
                  <div className="flex items-center mb-4">
                    {feature.icon}
                    <h3 className="text-xl font-semibold text-white ml-3">{feature.title}</h3>
                  </div>
                  <p className="text-slate-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Pricing Tab */}
      {activeTab === 'pricing' && (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Transparent Pricing Plans
              </h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Choose the plan that fits your healthcare facility's needs. 
                All plans include our core AI diagnosis capabilities.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className={`relative bg-slate-800/50 p-8 rounded-xl border ${
                    plan.popular ? 'border-blue-500' : 'border-slate-700'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-slate-400 ml-1">{plan.period}</span>
                    </div>
                    <p className="text-slate-300 mt-2">{plan.description}</p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-slate-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                      plan.popular
                        ? 'bg-blue-600 hover:bg-blue-700 text-white'
                        : 'bg-slate-700 hover:bg-slate-600 text-white'
                    }`}
                  >
                    {plan.cta}
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Competitors Tab */}
      {activeTab === 'competitors' && (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Market Comparison
              </h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                See how our AI healthcare diagnosis platform compares to leading competitors 
                in accuracy, speed, and value.
              </p>
            </motion.div>

            <div className="overflow-x-auto">
              <table className="w-full bg-slate-800/50 rounded-xl border border-slate-700">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="text-left p-6 text-white font-semibold">Platform</th>
                    <th className="text-left p-6 text-white font-semibold">Accuracy</th>
                    <th className="text-left p-6 text-white font-semibold">Speed</th>
                    <th className="text-left p-6 text-white font-semibold">Cost</th>
                    <th className="text-left p-6 text-white font-semibold">Features</th>
                    <th className="text-left p-6 text-white font-semibold">Rating</th>
                  </tr>
                </thead>
                <tbody>
                  {competitors.map((competitor, index) => (
                    <tr key={index} className="border-b border-slate-700 last:border-b-0">
                      <td className="p-6">
                        <div className="flex items-center">
                          {index === 0 && <Star className="w-5 h-5 text-yellow-500 mr-2" />}
                          <span className="text-white font-medium">{competitor.name}</span>
                        </div>
                      </td>
                      <td className="p-6 text-green-400 font-medium">{competitor.accuracy}</td>
                      <td className="p-6 text-blue-400">{competitor.speed}</td>
                      <td className="p-6 text-purple-400">{competitor.cost}</td>
                      <td className="p-6 text-slate-300">{competitor.features}</td>
                      <td className="p-6">
                        <div className="flex items-center">
                          <span className="text-yellow-400 font-medium">{competitor.rating}</span>
                          <Star className="w-4 h-4 text-yellow-400 ml-1" />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* Contact Tab */}
      {activeTab === 'contact' && (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Get Started Today
              </h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Ready to revolutionize your healthcare diagnosis? Contact our team to learn more 
                about our AI-powered platform and start your free trial.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700">
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Stethoscope className="w-5 h-5 text-blue-400 mr-3" />
                    <span className="text-slate-300">Mobile: +1 302 464 0950</span>
                  </div>
                  <div className="flex items-center">
                    <Brain className="w-5 h-5 text-green-400 mr-3" />
                    <span className="text-slate-300">Email: kleber@ziontechgroup.com</span>
                  </div>
                  <div className="flex items-center">
                    <Shield className="w-5 h-5 text-purple-400 mr-3" />
                    <span className="text-slate-300">Address: 364 E Main St STE 1008 Middletown DE 19709</span>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700">
                <h3 className="text-2xl font-bold text-white mb-6">Quick Start</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-slate-300">Free 14-day trial</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-slate-300">No credit card required</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-slate-300">Instant setup</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-slate-300">24/7 support</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors text-lg"
              >
                Start Your Free Trial
              </motion.button>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default AIHealthcareDiagnosis;