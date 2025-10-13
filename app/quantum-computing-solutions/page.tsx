
import {

  Cpu, 
  Zap, 
  Shield, 
  Brain, 
  Target, 
  CheckCircle, 
  Globe,
  Activity,
  Lock,
  Gauge
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

const QuantumComputingSolutionsPage = () => {
  const features = [
    {
      title: "Quantum Processing",
      description: "Harness quantum computing power for complex calculations and optimization problems",
      icon: <Cpu className="w-8 h-8" />,
      color: "from-purple-500 to-indigo-500"
    },
    {
      title: "Quantum Security",
      description: "Unbreakable quantum encryption and secure communication protocols",
      icon: <Shield className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Quantum Machine Learning",
      description: "Advanced AI algorithms powered by quantum computing principles",
      icon: <Brain className="w-8 h-8" />,
      color: "from-cyan-500 to-blue-500"
    },
    {
      title: "Quantum Optimization",
      description: "Solve complex optimization problems with quantum algorithms",
      icon: <Target className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
    }
  ];

  const pricingPlans = [
    {
      name: "Quantum Starter",
      price: "$2,999",
      period: "/month",
      description: "Perfect for research institutions and small quantum projects",
      features: [
        "Basic quantum processing",
        "10 quantum algorithms",
        "Standard quantum security",
        "Basic optimization tools",
        "Email support",
        "Quantum simulation"
      ],
      popular: false
    },
    {
      name: "Quantum Professional",
      price: "$9,999",
      period: "/month",
      description: "Ideal for enterprises and advanced quantum applications",
      features: [
        "Advanced quantum processing",
        "50+ quantum algorithms",
        "Full quantum security suite",
        "Advanced optimization",
        "Priority support",
        "API access",
        "Custom quantum circuits",
        "Quantum machine learning"
      ],
      popular: true
    },
    {
      name: "Quantum Enterprise",
      price: "$29,999",
      period: "/month",
      description: "For large organizations and government agencies",
      features: [
        "Unlimited quantum processing",
        "Unlimited algorithms",
        "Military-grade quantum security",
        "Full quantum optimization",
        "24/7 dedicated support",
        "Full API access",
        "Custom quantum hardware",
        "White-label solution",
        "SLA guarantee",
        "Dedicated quantum team"
      ],
      popular: false
    }
  ];

  const capabilities = [
    {
      title: "Quantum Speed",
      description: "Process complex calculations exponentially faster than classical computers",
      speed: "10^9x",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "Quantum Security",
      description: "Unbreakable encryption using quantum key distribution",
      security: "100%",
      icon: <Lock className="w-6 h-6" />
    },
    {
      title: "Optimization Accuracy",
      description: "Solve optimization problems with near-perfect accuracy",
      accuracy: "99.9%",
      icon: <Gauge className="w-6 h-6" />
    },
    {
      title: "Quantum Coherence",
      description: "Maintain quantum states for extended computation periods",
      coherence: "99.7%",
      icon: <Activity className="w-6 h-6" />
    }
  ];

  const stats = [
    { number: "10^9x", label: "Processing Speed", icon: <Cpu className="w-6 h-6" /> },
    { number: "100%", label: "Security Level", icon: <Shield className="w-6 h-6" /> },
    { number: "50+", label: "Quantum Algorithms", icon: <Brain className="w-6 h-6" /> },
    { number: "24/7", label: "Quantum Monitoring", icon: <Globe className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="Quantum Computing Solutions - Advanced Quantum Technology | Zion Tech Group"
        description="Revolutionary quantum computing solutions for optimization, security, and machine learning. Enterprise-grade quantum technology starting at $2,999/month."
        keywords="quantum computing, quantum algorithms, quantum security, quantum optimization, quantum machine learning, quantum technology"
        canonical="https://ziontechgroup.com/quantum-computing-solutions"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-indigo-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <ResponsiveContainer className="text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-indigo-500/20 border border-purple-500/30 mb-6">
            <Cpu className="w-4 h-4 text-purple-400 mr-2" />
            <span className="text-purple-400 text-sm font-medium">Quantum Computing Solutions</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-400 to-cyan-400">
              Quantum Computing Solutions
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Revolutionary quantum computing solutions for optimization, security, and machine learning. 
            Harness the power of quantum mechanics for unprecedented computational capabilities.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<Cpu className="w-5 h-5" />}
            >
              Start Free Trial
            </FuturisticButton>
            <FuturisticButton
              href="/demo"
              variant="outline"
              size="lg"
              icon={<Brain className="w-5 h-5" />}
            >
              View Demo
            </FuturisticButton>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500/20 to-indigo-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-xs md:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Features Section */}
      </section><section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Quantum Computing Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Harness the power of quantum mechanics for revolutionary computational capabilities.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <FuturisticCard
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10"
              >
                <div
                  className={`w-12 h-12 md:w-16 md:h-16 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-white mb-3 text-center group-hover:text-purple-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-center mb-4 leading-relaxed text-sm md:text-base">
                  {feature.description}
                </p>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Capabilities Section */}
      </section><section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Unmatched Quantum Performance
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our quantum computing solutions deliver unprecedented performance and capabilities.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((capability, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10 text-center"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  {capability.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
                  {capability.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-3">
                  {capability.description}
                </p>
                <div className="text-2xl font-bold text-purple-400">
                  {capability.speed || capability.security || capability.accuracy || capability.coherence}
                </div>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Pricing Section */}
      </section><section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Quantum Computing Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the quantum computing power that matches your computational needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
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

      {/* CTA Section */}
      </section><section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/30 to-indigo-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Harness Quantum Power?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join the quantum computing revolution with our advanced quantum solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<Cpu className="w-5 h-5" />}
            >
              Start Free Trial
            </FuturisticButton>
            <FuturisticButton
              href="/pricing"
              variant="outline"
              size="lg"
              icon={<Zap className="w-5 h-5" />}
            >
              View Pricing
            </FuturisticButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QuantumComputingSolutionsPage;</section>