import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Cpu, 
  Zap, 
  BarChart3, 
  Shield, 
  ArrowRight, 
  Star, 
  CheckCircle, 
  Clock, 
  Users, 
  Award,
  Brain,
  Target,
  TrendingUp,
  Globe,
  Smartphone,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

const ZionAIQuantumOptimizerPage = () => {
  const features = [
    {
      title: "Quantum Algorithm Integration",
      description: "Leverage quantum computing principles to solve complex optimization problems 1000x faster than classical methods",
      icon: <Cpu className="w-8 h-8" />,
      color: "from-purple-500 to-cyan-500"
    },
    {
      title: "Real-time Performance Monitoring",
      description: "Advanced analytics dashboard with quantum performance metrics and optimization recommendations",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-blue-500 to-purple-500"
    },
    {
      title: "AI-Powered Optimization",
      description: "Machine learning algorithms that continuously improve optimization strategies based on your data patterns",
      icon: <Brain className="w-8 h-8" />,
      color: "from-green-500 to-blue-500"
    },
    {
      title: "Enterprise Security",
      description: "Bank-grade encryption and quantum-resistant security protocols for maximum data protection",
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-orange-500"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$299",
      period: "month",
      description: "Perfect for small businesses",
      features: [
        "Up to 10 optimization projects",
        "Basic quantum algorithms",
        "Standard support",
        "5GB data processing",
        "Basic analytics dashboard"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$799",
      period: "month",
      description: "Ideal for growing companies",
      features: [
        "Up to 50 optimization projects",
        "Advanced quantum algorithms",
        "Priority support",
        "50GB data processing",
        "Advanced analytics dashboard",
        "API access",
        "Custom integrations"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$1,999",
      period: "month",
      description: "For large organizations",
      features: [
        "Unlimited optimization projects",
        "Premium quantum algorithms",
        "24/7 dedicated support",
        "Unlimited data processing",
        "Custom analytics dashboard",
        "Full API access",
        "White-label solutions",
        "Dedicated account manager"
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: "Supply Chain Optimization",
      description: "Optimize complex supply chains with quantum algorithms to reduce costs by up to 40%",
      icon: <Target className="w-6 h-6" />,
      benefit: "40% cost reduction"
    },
    {
      title: "Financial Portfolio Optimization",
      description: "Maximize investment returns while minimizing risk using quantum portfolio optimization",
      icon: <TrendingUp className="w-6 h-6" />,
      benefit: "25% better returns"
    },
    {
      title: "Resource Allocation",
      description: "Optimize resource allocation across multiple projects and teams for maximum efficiency",
      icon: <Users className="w-6 h-6" />,
      benefit: "60% efficiency gain"
    },
    {
      title: "Route Optimization",
      description: "Find optimal routes for delivery, logistics, and transportation using quantum algorithms",
      icon: <Globe className="w-6 h-6" />,
      benefit: "35% time savings"
    }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      company: "QuantumTech Solutions",
      role: "CTO",
      content: "Zion AI Quantum Optimizer has revolutionized our optimization processes. We've seen 300% improvement in solving complex problems.",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      company: "Global Logistics Inc.",
      role: "Operations Director",
      content: "The quantum algorithms have transformed our supply chain optimization. We've reduced costs by 45% while improving delivery times.",
      rating: 5
    },
    {
      name: "Emily Watson",
      company: "Financial Analytics Corp",
      role: "Head of Analytics",
      content: "This is the most advanced optimization platform we've used. The AI-powered insights are incredibly accurate and actionable.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="Zion AI Quantum Optimizer - Advanced Quantum Computing Solutions | Zion Tech Group"
        description="Revolutionary quantum computing optimization platform that solves complex business problems 1000x faster. AI-powered algorithms, real-time analytics, and enterprise security."
        keywords="quantum computing, optimization algorithms, AI optimization, business intelligence, quantum algorithms, enterprise solutions, data optimization"
        canonical="https://ziontechgroup.com/zion-ai-quantum-optimizer"
      />

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <ResponsiveContainer className="text-center relative z-10">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 mb-6">
              <Cpu className="w-4 h-4 text-purple-400 mr-2" />
              <span className="text-purple-400 text-sm font-medium">Revolutionary Quantum Computing</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-400">
                Zion AI Quantum Optimizer
              </span>
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              The world's first AI-powered quantum optimization platform. Solve complex business problems 
              1000x faster with cutting-edge quantum algorithms and machine learning intelligence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <FuturisticButton
                href="/contact"
                variant="primary"
                size="lg"
                icon={<Zap className="w-5 h-5" />}
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
          </ResponsiveContainer>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <ResponsiveContainer>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Quantum-Powered Features
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Harness the power of quantum computing combined with advanced AI to solve 
                the most complex optimization challenges in your business.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <FuturisticCard key={index} className="group">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4 text-center group-hover:text-cyan-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-center leading-relaxed">
                    {feature.description}
                  </p>
                </FuturisticCard>
              ))}
            </div>
          </ResponsiveContainer>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <ResponsiveContainer>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Real-World Applications
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how quantum optimization transforms businesses across industries
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    {useCase.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {useCase.description}
                  </p>
                  <div className="text-cyan-400 font-semibold text-sm">
                    {useCase.benefit}
                  </div>
                </div>
              ))}
            </div>
          </ResponsiveContainer>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <ResponsiveContainer>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Quantum-Powered Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your optimization needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                  plan.popular 
                    ? 'border-cyan-500/50 ring-2 ring-cyan-500/20' 
                    : 'border-white/20 hover:border-cyan-500/30'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-300 ml-2">/{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <FuturisticButton
                    href="/contact"
                    variant={plan.popular ? "primary" : "outline"}
                    size="lg"
                    className="w-full"
                  >
                    Get Started
                  </FuturisticButton>
                </div>
              ))}
            </div>
          </ResponsiveContainer>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
          <ResponsiveContainer>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Trusted by Industry Leaders
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what our clients say about quantum optimization
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
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
            <div className="text-center bg-gradient-to-r from-purple-900/50 to-cyan-900/50 rounded-2xl p-12 border border-white/20">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Ready to Experience Quantum Optimization?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Join the quantum revolution and transform your business optimization. 
                Start your free trial today and see the power of quantum computing.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <FuturisticButton
                  href="/contact"
                  variant="primary"
                  size="lg"
                  icon={<Zap className="w-5 h-5" />}
                >
                  Start Free Trial
                </FuturisticButton>
                <FuturisticButton
                  href="tel:+13024640950"
                  variant="outline"
                  size="lg"
                  icon={<Phone className="w-5 h-5" />}
                >
                  Call +1 302 464 0950
                </FuturisticButton>
              </div>
              
              <div className="text-center text-gray-300">
                <p className="mb-2">Contact us for enterprise solutions and custom pricing</p>
                <p className="text-cyan-400">kleber@ziontechgroup.com</p>
              </div>
            </div>
          </ResponsiveContainer>
        </section>
      </main>
    </div>
  );
};

export default ZionAIQuantumOptimizerPage;