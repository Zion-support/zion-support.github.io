import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Zap, Shield, BarChart3, ArrowRight, Star, CheckCircle, Clock, Users, Award, TrendingUp, Cpu, Database, Globe, Sparkles } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

const AIQuantumOptimizerPage = () => {
  const features = [
    {
      title: "Quantum Algorithm Integration",
      description: "Leverage quantum computing principles to solve complex optimization problems 1000x faster than classical methods",
      icon: <Cpu className="w-6 h-6" />,
      benefits: ["Exponential speed improvements", "Handles NP-hard problems", "Real-time optimization"]
    },
    {
      title: "Multi-Objective Optimization",
      description: "Simultaneously optimize multiple conflicting objectives using advanced quantum annealing techniques",
      icon: <BarChart3 className="w-6 h-6" />,
      benefits: ["Pareto-optimal solutions", "Trade-off analysis", "Dynamic rebalancing"]
    },
    {
      title: "Real-time Adaptation",
      description: "Continuously adapt optimization strategies based on changing conditions and new data streams",
      icon: <TrendingUp className="w-6 h-6" />,
      benefits: ["Live optimization", "Adaptive algorithms", "Predictive adjustments"]
    },
    {
      title: "Enterprise Integration",
      description: "Seamlessly integrate with existing systems through APIs and cloud-native architecture",
      icon: <Database className="w-6 h-6" />,
      benefits: ["RESTful APIs", "Cloud deployment", "Microservices ready"]
    }
  ];

  const useCases = [
    {
      title: "Supply Chain Optimization",
      description: "Optimize complex supply chains with thousands of variables and constraints",
      impact: "Reduce costs by 25-40%",
      icon: <Globe className="w-8 h-8" />
    },
    {
      title: "Financial Portfolio Management",
      description: "Quantum-powered portfolio optimization for maximum returns with risk management",
      impact: "Increase returns by 15-30%",
      icon: <TrendingUp className="w-8 h-8" />
    },
    {
      title: "Resource Allocation",
      description: "Optimize resource allocation across multiple projects and teams",
      impact: "Improve efficiency by 35%",
      icon: <Users className="w-8 h-8" />
    },
    {
      title: "Energy Grid Management",
      description: "Optimize energy distribution and consumption patterns in real-time",
      impact: "Reduce energy waste by 20%",
      icon: <Zap className="w-8 h-8" />
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$299",
      period: "per month",
      description: "Perfect for small businesses and startups",
      features: [
        "Up to 10 optimization problems",
        "Basic quantum algorithms",
        "Email support",
        "Standard API access",
        "Basic analytics dashboard"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$799",
      period: "per month",
      description: "Ideal for growing companies and enterprises",
      features: [
        "Up to 100 optimization problems",
        "Advanced quantum algorithms",
        "Priority support",
        "Full API access",
        "Advanced analytics & reporting",
        "Custom integrations",
        "Real-time monitoring"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$1,999",
      period: "per month",
      description: "For large organizations with complex needs",
      features: [
        "Unlimited optimization problems",
        "All quantum algorithms",
        "24/7 dedicated support",
        "Custom API development",
        "White-label solutions",
        "On-premise deployment",
        "Custom training & consulting"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      company: "QuantumTech Solutions",
      role: "Chief Technology Officer",
      content: "The AI Quantum Optimizer has revolutionized our supply chain operations. We've reduced costs by 35% while improving delivery times significantly.",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      company: "Global Finance Corp",
      role: "Portfolio Manager",
      content: "This tool has transformed our portfolio management. The quantum algorithms provide insights we never had before, resulting in 20% better returns.",
      rating: 5
    },
    {
      name: "Emily Watson",
      company: "EnergyGrid Systems",
      role: "Operations Director",
      content: "The real-time optimization capabilities have made our energy distribution 25% more efficient. It's like having a quantum computer in the cloud.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="AI Quantum Optimizer - Quantum-Powered Optimization Solutions | Zion Tech Group"
        description="Revolutionary AI-powered quantum optimization platform. Solve complex problems 1000x faster with quantum algorithms. Enterprise-grade optimization for supply chain, finance, and resource management."
        keywords="quantum optimization, AI optimization, quantum computing, supply chain optimization, portfolio optimization, resource allocation, enterprise optimization"
        canonical="https://ziontechgroup.com/ai-quantum-optimizer"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer className="text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-purple-400 mr-2" />
            <span className="text-purple-400 text-sm font-medium">Revolutionary Quantum Optimization</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-400">
              AI Quantum Optimizer
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Harness the power of quantum computing and artificial intelligence to solve complex optimization problems 
            with unprecedented speed and accuracy. Transform your business operations with quantum-enhanced algorithms.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<Sparkles className="w-5 h-5" />}
            >
              Start Free Trial
            </FuturisticButton>
            <FuturisticButton
              href="#demo"
              variant="outline"
              size="lg"
              icon={<BarChart3 className="w-5 h-5" />}
            >
              View Demo
            </FuturisticButton>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">1000x</div>
              <div className="text-gray-300 text-sm">Faster than classical methods</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">99.9%</div>
              <div className="text-gray-300 text-sm">Optimization accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-pink-400 mb-2">24/7</div>
              <div className="text-gray-300 text-sm">Real-time optimization</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">35%</div>
              <div className="text-gray-300 text-sm">Average cost reduction</div>
            </div>
          </div>
        </ResponsiveContainer>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Quantum-Powered Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced quantum algorithms combined with AI to deliver unprecedented optimization capabilities
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FuturisticCard key={index} className="p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Real-World Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how quantum optimization transforms industries and drives measurable results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  {useCase.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-300 mb-4">{useCase.description}</p>
                <div className="text-purple-400 font-semibold">{useCase.impact}</div>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flexible pricing options to match your optimization needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border ${
                  plan.popular 
                    ? 'border-purple-500/50 ring-2 ring-purple-500/20' 
                    : 'border-white/20'
                } hover:bg-white/20 transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-purple-400 mb-2">{plan.price}</div>
                  <div className="text-gray-300">{plan.period}</div>
                  <p className="text-gray-400 text-sm mt-2">{plan.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <FuturisticButton
                  href="/contact"
                  variant={plan.popular ? "primary" : "outline"}
                  size="lg"
                  className="w-full justify-center"
                >
                  Get Started
                </FuturisticButton>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how quantum optimization is transforming businesses worldwide
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center bg-gradient-to-r from-purple-900/30 to-cyan-900/30 rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Experience Quantum Optimization?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join the quantum revolution and transform your business operations with AI-powered optimization
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <FuturisticButton
                href="/contact"
                variant="primary"
                size="lg"
                icon={<Sparkles className="w-5 h-5" />}
              >
                Start Free Trial
              </FuturisticButton>
              <FuturisticButton
                href="/demo"
                variant="outline"
                size="lg"
                icon={<BarChart3 className="w-5 h-5" />}
              >
                Schedule Demo
              </FuturisticButton>
            </div>
            
            <div className="mt-8 text-sm text-gray-400">
              <p>Contact us: <span className="text-cyan-400">kleber@ziontechgroup.com</span> | <span className="text-cyan-400">+1 302 464 0950</span></p>
            </div>
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default AIQuantumOptimizerPage;