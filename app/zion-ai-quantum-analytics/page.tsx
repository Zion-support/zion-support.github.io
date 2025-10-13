import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Zap, 
  Shield, 
  BarChart3, 
  Cloud, 
  Sparkles, 
  ArrowRight, 
  Star, 
  Users, 
  Award, 
  CheckCircle,
  Cpu,
  Database,
  Lock,
  Target,
  TrendingUp,
  Globe,
  Settings,
  Lightbulb,
  Rocket,
  Mail,
  Phone,
  MapPin,
  Activity,
  PieChart,
  LineChart
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticBackground from '../components/FuturisticBackground';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

const ZionAIQuantumAnalyticsPage = () => {
  const features = [
    {
      title: "Quantum-Powered Data Processing",
      description: "Process massive datasets at quantum speed with exponential performance improvements over classical computing",
      icon: <Cpu className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      benefits: ["1000x faster processing", "Exponential speedup", "Quantum advantage"]
    },
    {
      title: "AI-Powered Predictive Analytics",
      description: "Advanced machine learning algorithms that predict trends, behaviors, and outcomes with unprecedented accuracy",
      icon: <Brain className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      benefits: ["95% prediction accuracy", "Real-time insights", "Automated forecasting"]
    },
    {
      title: "Quantum Security & Privacy",
      description: "Unbreakable quantum encryption ensures your data remains secure while maintaining complete privacy",
      icon: <Shield className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      benefits: ["Quantum encryption", "Zero-knowledge proofs", "GDPR compliant"]
    },
    {
      title: "Real-Time Quantum Dashboards",
      description: "Interactive dashboards that update in real-time with quantum-processed insights and visualizations",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      benefits: ["Real-time updates", "Interactive visualizations", "Custom dashboards"]
    }
  ];

  const capabilities = [
    {
      title: "Financial Analytics",
      description: "Quantum-powered risk analysis, portfolio optimization, and fraud detection for financial institutions",
      icon: <TrendingUp className="w-6 h-6" />,
      results: "40% better risk assessment, 99.9% fraud detection"
    },
    {
      title: "Supply Chain Optimization",
      description: "AI-driven supply chain analytics with quantum optimization for logistics and inventory management",
      icon: <Globe className="w-6 h-6" />,
      results: "60% cost reduction, 50% faster delivery"
    },
    {
      title: "Customer Behavior Analysis",
      description: "Deep learning analysis of customer patterns, preferences, and lifetime value predictions",
      icon: <Users className="w-6 h-6" />,
      results: "300% increase in customer insights, 85% accuracy"
    },
    {
      title: "Market Intelligence",
      description: "Real-time market analysis with quantum algorithms for competitive intelligence and trend prediction",
      icon: <Target className="w-6 h-6" />,
      results: "200% faster market analysis, 90% trend accuracy"
    }
  ];

  const pricing = [
    {
      plan: "Quantum Starter",
      price: "$999",
      period: "per month",
      description: "Perfect for small businesses exploring quantum analytics",
      features: [
        "10GB data processing/month",
        "Basic quantum algorithms",
        "Standard dashboards",
        "Email support",
        "API access"
      ],
      popular: false
    },
    {
      plan: "Quantum Professional",
      price: "$3,999",
      period: "per month",
      description: "Ideal for growing companies with complex analytics needs",
      features: [
        "100GB data processing/month",
        "Advanced quantum algorithms",
        "Custom dashboards",
        "Priority support",
        "Advanced analytics",
        "White-label options"
      ],
      popular: true
    },
    {
      plan: "Quantum Enterprise",
      price: "$12,999",
      period: "per month",
      description: "For large enterprises requiring maximum quantum analytics power",
      features: [
        "Unlimited data processing",
        "All quantum algorithms",
        "Custom development",
        "24/7 dedicated support",
        "On-premise deployment",
        "SLA guarantee",
        "Training included"
      ],
      popular: false
    }
  ];

  const stats = [
    { number: "1000x", label: "Faster Processing", icon: <Zap className="w-6 h-6" /> },
    { number: "99.9%", label: "Accuracy Rate", icon: <Award className="w-6 h-6" /> },
    { number: "50+", label: "Quantum Algorithms", icon: <Brain className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <Shield className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <EnhancedSEO
        title="Zion AI Quantum Analytics | Advanced Quantum-Powered Business Intelligence"
        description="Revolutionary quantum analytics platform with AI-powered insights. Process data 1000x faster, predict trends with 99.9% accuracy, and unlock unprecedented business intelligence. Start free trial today!"
        keywords="quantum analytics, AI analytics, business intelligence, quantum computing, data analytics, predictive analytics, quantum algorithms, real-time analytics"
        canonical="https://ziontechgroup.com/zion-ai-quantum-analytics"
      />
      <FuturisticBackground />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <ResponsiveContainer className="text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-purple-400 mr-2" />
            <span className="text-purple-400 text-sm font-medium">Revolutionary Quantum Analytics Platform</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">
              Zion AI Quantum Analytics
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Experience the future of business intelligence with quantum-powered analytics. 
            Process data 1000x faster, predict trends with 99.9% accuracy, and unlock insights 
            that were impossible with classical computing.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Start Free Trial
            </FuturisticButton>
            <FuturisticButton
              href="#pricing"
              variant="outline"
              size="lg"
              icon={<Rocket className="w-5 h-5" />}
            >
              View Pricing
            </FuturisticButton>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
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
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Quantum Analytics Features
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Harness the power of quantum computing combined with artificial intelligence 
              to unlock unprecedented insights from your data.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <FuturisticCard
                key={index}
                className="group hover:scale-105 transition-all duration-300"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {feature.description}
                </p>
                <div className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-sm text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Analytics Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the powerful analytics capabilities powered by quantum computing and AI
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white mr-4">
                    {capability.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white">{capability.title}</h3>
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {capability.description}
                </p>
                <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-3">
                  <p className="text-green-400 text-sm font-medium">{capability.results}</p>
                </div>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Quantum Analytics Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect quantum analytics plan for your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                  plan.popular 
                    ? 'border-purple-500/50 ring-2 ring-purple-500/20' 
                    : 'border-white/20 hover:border-purple-500/30'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.plan}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300 ml-2">{plan.period}</span>
                  </div>
                  <p className="text-gray-300 mt-2">{plan.description}</p>
                </div>
                
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <FuturisticButton
                  href="/contact"
                  variant={plan.popular ? "primary" : "outline"}
                  size="lg"
                  className="w-full"
                >
                  Start Free Trial
                </FuturisticButton>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/30 to-pink-900/30">
        <ResponsiveContainer>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Experience Quantum Analytics?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Join thousands of businesses already using Zion AI Quantum Analytics to unlock 
              unprecedented insights from their data. Start your free trial today.
            </p>
            
            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Email</h3>
                <p className="text-purple-400">kleber@ziontechgroup.com</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Phone</h3>
                <p className="text-purple-400">+1 302 464 0950</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Address</h3>
                <p className="text-purple-400 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <FuturisticButton
                href="/contact"
                variant="primary"
                size="lg"
                icon={<ArrowRight className="w-5 h-5" />}
              >
                Start Free Trial
              </FuturisticButton>
              <FuturisticButton
                href="/demo"
                variant="outline"
                size="lg"
                icon={<Rocket className="w-5 h-5" />}
              >
                Schedule Demo
              </FuturisticButton>
            </div>
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default ZionAIQuantumAnalyticsPage;