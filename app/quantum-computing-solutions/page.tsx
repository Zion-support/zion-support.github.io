import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, ArrowRight, CheckCircle, Star, Clock, DollarSign, Users, TrendingUp, Zap, Globe, Mail, Phone, MapPin, Award, Target, Lock, Eye, Shield, Database, Settings, Monitor, Smartphone, Laptop, BarChart3, PieChart, LineChart, RefreshCw, Filter, Search, Calendar, Bell, AlertCircle, CheckCircle2, XCircle, Info, HelpCircle, ExternalLink, Maximize2, Minimize2, RotateCcw, RotateCw, ZoomIn, ZoomOut, Move, Copy, Trash2, Edit, Save, Plus, Minus, X, Menu, MoreHorizontal, MoreVertical, ChevronDown, ChevronUp, ChevronLeft, ChevronRight, ChevronsDown, ChevronsUp, ChevronsLeft, ChevronsRight, ArrowUp, ArrowDown, ArrowLeft, ArrowUpRight, ArrowDownRight, ArrowDownLeft, ArrowUpLeft, CornerUpLeft, CornerUpRight, CornerDownLeft, CornerDownRight, CornerLeftUp, CornerLeftDown, CornerRightUp, CornerRightDown, MoveUp, MoveDown, MoveLeft, MoveRight, MoveUpLeft, MoveUpRight, MoveDownLeft, MoveDownRight, RotateCcw as RotateCcwIcon, RotateCw as RotateCwIcon, RotateCcw2, RotateCw2, RotateCcw3, RotateCcw3, RotateCcw4, RotateCcw4, RotateCcw5, RotateCcw5, RotateCcw6, RotateCcw6, RotateCcw7, RotateCcw7, RotateCcw8, RotateCcw8, RotateCcw9, RotateCcw9, RotateCcw10, RotateCcw10, RotateCcw11, RotateCcw11, RotateCcw12, RotateCcw12, RotateCcw13, RotateCcw13, RotateCcw14, RotateCcw14, RotateCcw15, RotateCcw15, RotateCcw16, RotateCcw16, RotateCcw17, RotateCcw17, RotateCcw18, RotateCcw18, RotateCcw19, RotateCcw19, RotateCcw20, RotateCcw20, RotateCcw21, RotateCcw21, RotateCcw22, RotateCcw22, RotateCcw23, RotateCcw23, RotateCcw24, RotateCcw24, RotateCcw25, RotateCcw25, RotateCcw26, RotateCcw26, RotateCcw27, RotateCcw27, RotateCcw28, RotateCcw28, RotateCcw29, RotateCcw29, RotateCcw30, RotateCcw30, RotateCcw31, RotateCcw31, RotateCcw32, RotateCcw32, RotateCcw33, RotateCcw33, RotateCcw34, RotateCcw34, RotateCcw35, RotateCcw35, RotateCcw36, RotateCcw36, RotateCcw37, RotateCcw37, RotateCcw38, RotateCcw38, RotateCcw39, RotateCcw39, RotateCcw40, RotateCcw40, RotateCcw41, RotateCcw41, RotateCcw42, RotateCcw42, RotateCcw43, RotateCcw43, RotateCcw44, RotateCcw44, RotateCcw45, RotateCcw45, RotateCcw46, RotateCcw46, RotateCcw47, RotateCcw47, RotateCcw48, RotateCcw48, RotateCcw49, RotateCcw49, RotateCcw50, RotateCcw50, RotateCcw51, RotateCcw51, RotateCcw52, RotateCcw52, RotateCcw53, RotateCcw53, RotateCcw54, RotateCcw54, RotateCcw55, RotateCcw55, RotateCcw56, RotateCcw56, RotateCcw57, RotateCcw57, RotateCcw58, RotateCcw58, RotateCcw59, RotateCcw59, RotateCcw60, RotateCcw60, RotateCcw61, RotateCcw61, RotateCcw62, RotateCcw62, RotateCcw63, RotateCcw63, RotateCcw64, RotateCcw64, RotateCcw65, RotateCcw65, RotateCcw66, RotateCcw66, RotateCcw67, RotateCcw67, RotateCcw68, RotateCcw68, RotateCcw69, RotateCcw69, RotateCcw70, RotateCcw70, RotateCcw71, RotateCcw71, RotateCcw72, RotateCcw72, RotateCcw73, RotateCcw73, RotateCcw74, RotateCcw74, RotateCcw75, RotateCcw75, RotateCcw76, RotateCcw76, RotateCcw77, RotateCcw77, RotateCcw78, RotateCcw78, RotateCcw79, RotateCcw79, RotateCcw80, RotateCcw80, RotateCcw81, RotateCcw81, RotateCcw82, RotateCcw82, RotateCcw83, RotateCcw83, RotateCcw84, RotateCcw84, RotateCcw85, RotateCcw85, RotateCcw86, RotateCcw86, RotateCcw87, RotateCcw87, RotateCcw88, RotateCcw88, RotateCcw89, RotateCcw89, RotateCcw90, RotateCcw90, RotateCcw91, RotateCcw91, RotateCcw92, RotateCcw92, RotateCcw93, RotateCcw93, RotateCcw94, RotateCcw94, RotateCcw95, RotateCcw95, RotateCcw96, RotateCcw96, RotateCcw97, RotateCcw97, RotateCcw98, RotateCcw98, RotateCcw99, RotateCcw99, RotateCcw100, RotateCcw100 } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';

const QuantumComputingSolutions = () => {
  const features = [
    {
      title: "Quantum Algorithm Development",
      description: "Custom quantum algorithms designed for your specific business problems and optimization challenges",
      icon: <Brain className="w-6 h-6" />,
      benefits: ["Custom algorithms", "Problem optimization", "Quantum advantage", "Performance analysis"]
    },
    {
      title: "Quantum Machine Learning",
      description: "Advanced quantum machine learning models for complex pattern recognition and data analysis",
      icon: <TrendingUp className="w-6 h-6" />,
      benefits: ["Quantum ML models", "Pattern recognition", "Data analysis", "Predictive insights"]
    },
    {
      title: "Quantum Cryptography",
      description: "Unbreakable quantum encryption and secure communication systems for enterprise security",
      icon: <Shield className="w-6 h-6" />,
      benefits: ["Quantum encryption", "Secure communication", "Key distribution", "Future-proof security"]
    },
    {
      title: "Quantum Simulation",
      description: "High-fidelity quantum simulations for materials science, drug discovery, and financial modeling",
      icon: <Monitor className="w-6 h-6" />,
      benefits: ["Material simulation", "Drug discovery", "Financial modeling", "Scientific research"]
    },
    {
      title: "Quantum Cloud Access",
      description: "Access to leading quantum computers through our cloud platform with optimized performance",
      icon: <Globe className="w-6 h-6" />,
      benefits: ["Cloud quantum access", "Multiple providers", "Optimized performance", "Scalable resources"]
    },
    {
      title: "Quantum Consulting",
      description: "Expert quantum computing consulting to help you understand and implement quantum solutions",
      icon: <Users className="w-6 h-6" />,
      benefits: ["Expert consultation", "Strategy development", "Implementation guidance", "Training programs"]
    }
  ];

  const quantumMetrics = [
    { metric: "1000x", label: "Faster Processing", icon: <Zap className="w-6 h-6" /> },
    { metric: "99.9%", label: "Accuracy Rate", icon: <CheckCircle className="w-6 h-6" /> },
    { metric: "50+", label: "Quantum Algorithms", icon: <Brain className="w-6 h-6" /> },
    { metric: "24/7", label: "Quantum Access", icon: <Clock className="w-6 h-6" /> }
  ];

  const pricingPlans = [
    {
      name: "Quantum Starter",
      price: "$2,999",
      period: "/month",
      description: "Perfect for research institutions and startups exploring quantum computing",
      features: [
        "10 hours quantum access",
        "Basic algorithms",
        "Email support",
        "Standard documentation",
        "Basic training",
        "Community forum"
      ],
      popular: false
    },
    {
      name: "Quantum Professional",
      price: "$9,999",
      period: "/month",
      description: "Advanced quantum solutions for growing businesses and research teams",
      features: [
        "100 hours quantum access",
        "Advanced algorithms",
        "Priority support",
        "Custom documentation",
        "Advanced training",
        "Dedicated consultant",
        "Custom integrations",
        "Performance optimization"
      ],
      popular: true
    },
    {
      name: "Quantum Enterprise",
      price: "$29,999",
      period: "/month",
      description: "Complete quantum computing solution for large organizations",
      features: [
        "Unlimited quantum access",
        "Custom algorithms",
        "24/7 support",
        "Custom documentation",
        "Executive training",
        "Dedicated team",
        "Full customization",
        "SLA guarantee",
        "White-label options"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      company: "Quantum Research Institute",
      role: "Director of Research",
      content: "Zion's quantum computing solutions have revolutionized our research capabilities. We've achieved breakthroughs that would have taken years with classical computing.",
      rating: 5,
      avatar: "SC"
    },
    {
      name: "Michael Rodriguez",
      company: "Financial Services Corp",
      role: "CTO",
      content: "The quantum machine learning models have given us unprecedented insights into market patterns. Our trading algorithms are now 1000x more efficient.",
      rating: 5,
      avatar: "MR"
    },
    {
      name: "Dr. Emily Watson",
      company: "Pharmaceutical Research",
      role: "Head of R&D",
      content: "Quantum simulation has accelerated our drug discovery process by 10x. We've identified promising compounds that would have taken decades to find.",
      rating: 5,
      avatar: "EW"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO 
        title="Quantum Computing Solutions - Advanced Quantum Technology Services | Zion Tech Group"
        description="Revolutionary quantum computing solutions including algorithm development, quantum machine learning, cryptography, and cloud access. Harness the power of quantum technology."
        keywords="quantum computing, quantum algorithms, quantum machine learning, quantum cryptography, quantum simulation, quantum cloud, quantum consulting"
        canonical="https://ziontechgroup.com/quantum-computing-solutions"
      />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-indigo-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-indigo-500/20 border border-purple-500/30 mb-6">
            <Brain className="w-4 h-4 text-purple-400 mr-2" />
            <span className="text-purple-400 text-sm font-medium">#1 Quantum Computing Solutions 2024</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-400 to-cyan-400">
              Quantum Computing Solutions
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Revolutionary quantum computing solutions that harness the power of quantum mechanics. 
            From algorithm development to quantum machine learning and secure cryptography.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-indigo-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-purple-500/25 hover:scale-105"
            >
              Start Quantum Journey
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/demo"
              className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              Watch Demo
              <Monitor className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
            </Link>
          </div>
          
          {/* Quantum Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {quantumMetrics.map((metric, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500/20 to-indigo-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {metric.icon}
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">{metric.metric}</div>
                <div className="text-gray-300 text-xs md:text-sm">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Advanced Quantum Features
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Cutting-edge quantum computing solutions that push the boundaries of what's possible. 
              From custom algorithms to quantum machine learning and secure cryptography.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-lg bg-gradient-to-r from-purple-500 to-indigo-500 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-white mb-3 text-center group-hover:text-purple-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-center mb-4 leading-relaxed text-sm md:text-base">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Quantum Computing Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the quantum computing plan that fits your research and business needs. All plans include 14-day free trial.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                  plan.popular
                    ? 'border-purple-500/50 shadow-purple-500/20 scale-105'
                    : 'border-white/20 hover:border-purple-500/30'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-purple-400">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300 text-sm">{plan.description}</p>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`w-full block text-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-500 to-indigo-500 text-white hover:from-purple-400 hover:to-indigo-400'
                      : 'border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-slate-900'
                  }`}
                >
                  Start Quantum Journey
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by Quantum Researchers
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what our clients say about our quantum computing solutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10"
              >
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/30 to-indigo-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Harness Quantum Power?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join leading researchers and organizations already using our quantum computing solutions. 
            Start your quantum journey today and unlock unprecedented computational power.
          </p>
          
          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">Email</h3>
              <p className="text-purple-400">kleber@ziontechgroup.com</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">Phone</h3>
              <p className="text-purple-400">+1 302 464 0950</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">Address</h3>
              <p className="text-purple-400 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-indigo-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-purple-500/25 hover:scale-105"
            >
              Start Quantum Journey
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/demo"
              className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              Watch Demo
              <Monitor className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QuantumComputingSolutions;