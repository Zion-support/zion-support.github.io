import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Cpu, 
  Zap, 
  Target, 
  CheckCircle, 
  ArrowRight,
  Activity,
  BarChart3,
  Clock,
  Shield,
  Star,
  Award,
  TrendingUp,
  Users,
  Settings,
  Monitor,
  Headphones,
  Eye,
  Hand,
  Heart
} from 'lucide-react';

export default function ZionAINeuralInterface() {
  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Neural Signal Processing",
      description: "Advanced brain-computer interface technology for direct neural communication"
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Visual Cortex Interface",
      description: "Direct visual information processing and enhancement through neural pathways"
    },
    {
      icon: <Hand className="w-6 h-6" />,
      title: "Motor Control Integration",
      description: "Precise control of external devices through neural motor cortex signals"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Emotional State Recognition",
      description: "Real-time emotional and cognitive state monitoring for enhanced user experience"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Real-time Processing",
      description: "Ultra-low latency neural signal processing for seamless human-AI interaction"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Neural Security Protocol",
      description: "Advanced encryption and security measures to protect neural data and privacy"
    }
  ];

  const pricingPlans = [
    {
      name: "Neural Explorer",
      price: "$1,999",
      period: "/month",
      description: "Perfect for researchers and developers",
      features: [
        "Basic neural interface",
        "Up to 5 device connections",
        "Standard signal processing",
        "Email support",
        "API access"
      ],
      popular: false
    },
    {
      name: "Neural Professional",
      price: "$4,999",
      period: "/month",
      description: "Ideal for medical institutions and tech companies",
      features: [
        "Advanced neural processing",
        "Up to 25 device connections",
        "Real-time monitoring",
        "Priority support",
        "Custom integrations",
        "White-label options"
      ],
      popular: true
    },
    {
      name: "Neural Enterprise",
      price: "Custom",
      period: "",
      description: "For large organizations and government agencies",
      features: [
        "Full neural interface suite",
        "Unlimited device connections",
        "Custom neural models",
        "Dedicated support team",
        "On-premise deployment",
        "Full customization"
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      metric: "99.9%",
      description: "Signal Accuracy",
      icon: <Target className="w-8 h-8" />
    },
    {
      metric: "1ms",
      description: "Response Time",
      icon: <Zap className="w-8 h-8" />
    },
    {
      metric: "50+",
      description: "Device Types",
      icon: <Cpu className="w-8 h-8" />
    },
    {
      metric: "24/7",
      description: "Neural Monitoring",
      icon: <Monitor className="w-8 h-8" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
      <Helmet>
        <title>Zion AI Neural Interface - Zion Tech Group</title>
        <meta name="description" content="Revolutionary brain-computer interface technology with 99.9% signal accuracy. Direct neural communication for enhanced human-AI interaction and device control." />
        <meta name="keywords" content="neural interface, brain-computer interface, BCI, neural AI, brain signals, neural technology" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 mb-6">
              <Brain className="w-5 h-5 mr-2 text-indigo-400" />
              <span className="text-indigo-300 font-medium">Neural AI Technology</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Zion AI Neural Interface
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Breakthrough brain-computer interface technology that enables direct neural communication with AI systems. Experience the future of human-AI interaction with 99.9% signal accuracy and 1ms response time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Experience Neural AI
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-4 border border-indigo-500 text-indigo-300 font-semibold rounded-lg hover:bg-indigo-500/10 transition-all duration-300"
              >
                Watch Neural Demo
              </Link>
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full mb-4">
                  {benefit.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-2">{benefit.metric}</div>
                <div className="text-gray-400">{benefit.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Neural Interface Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Harness the power of direct neural communication to control devices, enhance cognitive abilities, and interact with AI systems like never before.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-indigo-500/50 transition-all duration-300">
                <div className="text-indigo-400 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Neural Interface Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect neural interface solution for your research or application needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border rounded-xl p-8 ${plan.popular ? 'border-indigo-500/50 ring-2 ring-indigo-500/20' : 'border-slate-700/50'}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700'
                      : 'border border-slate-600 text-slate-300 hover:bg-slate-700/50'
                  }`}
                >
                  Start Neural Interface
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-indigo-600/20 to-purple-600/20 backdrop-blur-sm border border-indigo-500/30 rounded-2xl p-12">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Connect Your Mind to AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the future of human-AI interaction with our revolutionary neural interface technology. Experience seamless control and communication like never before.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Schedule Neural Demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-4 border border-indigo-500 text-indigo-300 font-semibold rounded-lg hover:bg-indigo-500/10 transition-all duration-300"
              >
                Experience Neural Interface
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
