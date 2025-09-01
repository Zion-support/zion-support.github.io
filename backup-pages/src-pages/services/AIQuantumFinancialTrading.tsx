import React from 'react';
import {
  Brain, 
  TrendingUp, 
  Shield, 
  Zap, 
  Atom, 
  BarChart3, 
  DollarSign, 
  Target,
  CheckCircle,
  Star,
  ArrowRight,
  Cpu,
  Lock,
  Globe,
  Users,
  Clock,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

const AIQuantumFinancialTrading = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Analytics",
      description: "Advanced machine learning algorithms analyze market patterns and predict optimal trading opportunities with unprecedented accuracy."
    },
    {
      icon: Atom,
      title: "Quantum Computing",
      description: "Leverage quantum computing power for complex financial calculations and portfolio optimization at speeds impossible with classical computers."
    },
    {
      icon: Shield,
      title: "Secure Trading",
      description: "Military-grade security protocols ensure your trading data and transactions remain protected against cyber threats."
    },
    {
      icon: TrendingUp,
      title: "Performance Optimization",
      description: "Continuously optimize trading strategies based on real-time market data and historical performance metrics."
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$2,999",
      period: "/month",
      description: "Perfect for individual traders and small investment firms",
      features: [
        "AI trading algorithms",
        "Real-time market analysis",
        "Basic risk management",
        "Email support",
        "Standard API access"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$9,999",
      period: "/month",
      description: "Ideal for medium-sized trading firms and hedge funds",
      features: [
        "Advanced AI algorithms",
        "Quantum computing access",
        "Advanced risk management",
        "Priority support",
        "Full API access",
        "Custom integrations",
        "Portfolio optimization"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "Comprehensive solution for large financial institutions",
      features: [
        "Custom quantum computing integration",
        "Dedicated support team",
        "Custom compliance modules",
        "Multi-tenant architecture",
        "Advanced analytics dashboard",
        "SLA guarantees",
        "On-premise deployment"
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      title: "Increased Returns",
      description: "AI-driven strategies consistently outperform traditional trading methods",
      metric: "300% ROI improvement"
    },
    {
      title: "Risk Reduction",
      description: "Advanced risk management algorithms minimize potential losses",
      metric: "85% risk reduction"
    },
    {
      title: "Speed Advantage",
      description: "Quantum-powered calculations execute trades in microseconds",
      metric: "1000x faster execution"
    },
    {
      title: "Cost Savings",
      description: "Automated trading reduces manual intervention and operational costs",
      metric: "60% cost reduction"
    }
  ];

  const technologies = [
    "Machine Learning & AI",
    "Quantum Computing",
    "High-Frequency Trading",
    "Blockchain Security",
    "Real-time Analytics",
    "Cloud Infrastructure",
    "API Integration",
    "Predictive Modeling"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              AI Quantum
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                {' '}Financial Trading
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Revolutionary AI-powered quantum computing platform that transforms financial trading 
              with unprecedented speed, accuracy, and intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Cutting-Edge Trading Technology
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI Quantum Financial Trading platform combines the latest advances in artificial intelligence 
              and quantum computing to deliver unmatched trading performance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <feature.icon className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-black/20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Proven Results</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our clients consistently achieve superior returns with reduced risk and operational costs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">{benefit.metric}</div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Technology Stack</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built on the most advanced technologies available today.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {technologies.map((tech, index) => (
              <div 
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-lg p-4 text-center border border-white/10 hover:border-cyan-400/30 transition-colors duration-300"
              >
                <span className="text-sm font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-black/20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Choose Your Plan</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flexible pricing options to suit traders and institutions of all sizes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div 
                key={index}
                className={`bg-white/10 backdrop-blur-lg rounded-xl p-8 border ${
                  plan.popular ? 'border-cyan-400 ring-2 ring-cyan-400/20' : 'border-white/20'
                } relative`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-cyan-400 mb-2">
                    {plan.price}
                    <span className="text-lg text-gray-300">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:shadow-lg hover:shadow-cyan-500/25' 
                    : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Trading?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of traders and institutions who have revolutionized their 
            financial performance with our AI Quantum Trading platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105">
              Start Free 30-Day Trial
            </button>
            <button className="px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIQuantumFinancialTrading;