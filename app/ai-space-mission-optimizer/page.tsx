import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Rocket, 
  Satellite, 
  Globe, 
  Zap, 
  Target, 
  CheckCircle, 
  ArrowRight,
  Cpu,
  Activity,
  BarChart3,
  Clock,
  Shield,
  Star,
  Award,
  Brain,
  TrendingUp,
  Users,
  Settings,
  Monitor
} from 'lucide-react';

export default function AISpaceMissionOptimizer() {
  const features = [
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Mission Trajectory Optimization",
      description: "AI-powered trajectory calculations for optimal fuel efficiency and mission success rates"
    },
    {
      icon: <Satellite className="w-6 h-6" />,
      title: "Satellite Constellation Management",
      description: "Intelligent satellite deployment and orbital positioning for maximum coverage"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Earth Observation Analytics",
      description: "Advanced image processing and analysis of Earth observation data for climate monitoring"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Precision Landing Systems",
      description: "AI-guided landing systems with centimeter-level accuracy for planetary exploration"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Real-time Mission Control",
      description: "Automated mission monitoring and decision-making for critical space operations"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Predictive Maintenance",
      description: "AI-powered spacecraft health monitoring and predictive maintenance scheduling"
    }
  ];

  const pricingPlans = [
    {
      name: "Space Explorer",
      price: "$4,999",
      period: "/month",
      description: "Perfect for small space agencies and research institutions",
      features: [
        "Basic trajectory optimization",
        "Single mission support",
        "Standard analytics",
        "Email support",
        "API access"
      ],
      popular: false
    },
    {
      name: "Space Professional",
      price: "$12,999",
      period: "/month",
      description: "Ideal for commercial space companies and mid-size agencies",
      features: [
        "Advanced mission planning",
        "Multi-mission support",
        "Real-time monitoring",
        "Priority support",
        "Custom integrations",
        "White-label options"
      ],
      popular: true
    },
    {
      name: "Space Enterprise",
      price: "Custom",
      period: "",
      description: "For large space agencies and government organizations",
      features: [
        "Full mission lifecycle management",
        "Custom AI models",
        "Dedicated support team",
        "On-premise deployment",
        "Full customization",
        "24/7 mission support"
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      metric: "99.8%",
      description: "Mission Success Rate",
      icon: <Target className="w-8 h-8" />
    },
    {
      metric: "40%",
      description: "Fuel Savings",
      icon: <Zap className="w-8 h-8" />
    },
    {
      metric: "60%",
      description: "Faster Mission Planning",
      icon: <Clock className="w-8 h-8" />
    },
    {
      metric: "24/7",
      description: "Mission Monitoring",
      icon: <Monitor className="w-8 h-8" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Helmet>
        <title>AI Space Mission Optimizer - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered space mission optimization platform with 99.8% success rate. Advanced algorithms for trajectory planning, satellite management, and space exploration." />
        <meta name="keywords" content="space AI, mission optimization, satellite management, space exploration, trajectory planning, space technology" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 mb-6">
              <Rocket className="w-5 h-5 mr-2 text-blue-400" />
              <span className="text-blue-300 font-medium">Space AI Technology</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              AI Space Mission Optimizer
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Revolutionize space exploration with AI-powered mission optimization that delivers 99.8% success rates and reduces mission costs by 40% through intelligent trajectory planning and real-time monitoring.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
              >
                Launch Your Mission
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-4 border border-blue-500 text-blue-300 font-semibold rounded-lg hover:bg-blue-500/10 transition-all duration-300"
              >
                Watch Demo
              </Link>
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full mb-4">
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
              Space AI Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Harness the power of artificial intelligence to optimize every aspect of space missions from launch to landing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300">
                <div className="text-blue-400 mb-4">{feature.icon}</div>
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
              Space Mission Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect AI-powered space mission solution for your organization
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border rounded-xl p-8 ${plan.popular ? 'border-blue-500/50 ring-2 ring-blue-500/20' : 'border-slate-700/50'}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
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
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700'
                      : 'border border-slate-600 text-slate-300 hover:bg-slate-700/50'
                  }`}
                >
                  Launch Mission
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-12">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Launch Your Next Mission?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join leading space agencies and commercial space companies using AI to optimize their missions and explore the cosmos more efficiently.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
              >
                Schedule Mission Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-4 border border-blue-500 text-blue-300 font-semibold rounded-lg hover:bg-blue-500/10 transition-all duration-300"
              >
                View Mission Demo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
