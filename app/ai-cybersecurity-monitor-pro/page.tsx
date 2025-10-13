import React from 'react';
import { 
  Shield, 
  AlertTriangle, 
  Eye, 
  Lock, 
  Zap, 
  CheckCircle, 
  Star, 
  ArrowRight,
  Brain,
  Activity,
  Globe,
  Smartphone,
  Monitor,
  Database,
  Users,
  Clock,
  Target,
  Award,
  BarChart3,
  TrendingUp
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

const AICybersecurityMonitorProPage = () => {
  const features = [
    {
      title: "AI-Powered Threat Detection",
      description: "Advanced machine learning algorithms detect and prevent cyber threats in real-time",
      icon: <Brain className="w-8 h-8" />,
      price: "From $299/month",
      benefits: ["Real-time threat analysis", "Behavioral anomaly detection", "Zero-day attack prevention", "Automated response"]
    },
    {
      title: "24/7 Security Monitoring",
      description: "Continuous monitoring of your entire infrastructure with instant threat alerts",
      icon: <Eye className="w-8 h-8" />,
      price: "From $199/month",
      benefits: ["Round-the-clock monitoring", "Instant alerts", "Multi-platform coverage", "Expert analysis"]
    },
    {
      title: "Automated Incident Response",
      description: "AI-driven automated responses to security incidents with minimal human intervention",
      icon: <Zap className="w-8 h-8" />,
      price: "From $399/month",
      benefits: ["Instant threat containment", "Automated remediation", "Incident documentation", "Recovery procedures"]
    },
    {
      title: "Compliance Management",
      description: "Ensure compliance with industry standards and regulations automatically",
      icon: <CheckCircle className="w-8 h-8" />,
      price: "From $149/month",
      benefits: ["GDPR compliance", "SOC 2 monitoring", "HIPAA protection", "PCI DSS validation"]
    }
  ];

  const securityMetrics = [
    { metric: "99.9%", label: "Threat Detection Accuracy", icon: <Target className="w-6 h-6" /> },
    { metric: "< 1s", label: "Response Time", icon: <Clock className="w-6 h-6" /> },
    { metric: "24/7", label: "Monitoring Coverage", icon: <Activity className="w-6 h-6" /> },
    { metric: "1000+", label: "Threats Blocked Daily", icon: <Shield className="w-6 h-6" /> }
  ];

  const pricingPlans = [
    {
      name: "Essential",
      price: "$299",
      period: "per month",
      description: "Perfect for small businesses and startups",
      features: [
        "Up to 10 devices",
        "Basic threat detection",
        "Email alerts",
        "Standard support",
        "Basic reporting",
        "1 user account"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$699",
      period: "per month",
      description: "Advanced security for growing businesses",
      features: [
        "Up to 50 devices",
        "AI-powered threat detection",
        "Real-time monitoring",
        "Automated response",
        "Priority support",
        "Advanced reporting",
        "Up to 5 user accounts",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$1,499",
      period: "per month",
      description: "Complete security solution for large organizations",
      features: [
        "Unlimited devices",
        "Advanced AI analytics",
        "Custom threat rules",
        "Dedicated security team",
        "24/7 phone support",
        "Custom reporting",
        "Unlimited users",
        "On-premise deployment",
        "Compliance management"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "David Kim",
      company: "Financial Services Corp",
      role: "CISO",
      content: "AI Cybersecurity Monitor Pro has reduced our security incidents by 95%. The AI detection is incredibly accurate and the automated response saves us hours of manual work.",
      rating: 5,
      avatar: "DK"
    },
    {
      name: "Lisa Wang",
      company: "Healthcare Solutions",
      role: "IT Director",
      content: "The compliance management feature is a game-changer. We passed our HIPAA audit with flying colors thanks to the automated monitoring and reporting.",
      rating: 5,
      avatar: "LW"
    },
    {
      name: "Robert Martinez",
      company: "E-commerce Platform",
      role: "Security Manager",
      content: "The real-time threat detection caught a sophisticated attack that our previous system missed. This tool has become essential to our security posture.",
      rating: 5,
      avatar: "RM"
    }
  ];

  const threatTypes = [
    { name: "Malware Detection", percentage: 99.8, color: "from-red-500 to-orange-500" },
    { name: "Phishing Prevention", percentage: 98.5, color: "from-orange-500 to-yellow-500" },
    { name: "DDoS Protection", percentage: 99.9, color: "from-yellow-500 to-green-500" },
    { name: "Data Breach Prevention", percentage: 99.2, color: "from-green-500 to-blue-500" },
    { name: "Insider Threat Detection", percentage: 97.8, color: "from-blue-500 to-purple-500" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="AI Cybersecurity Monitor Pro - Advanced Threat Detection & Response | Zion Tech Group"
        description="Protect your business with AI-powered cybersecurity monitoring. Real-time threat detection, automated response, and 24/7 security coverage. Starting from $299/month."
        keywords="AI cybersecurity, threat detection, security monitoring, automated response, compliance management, cyber protection"
        canonical="https://ziontechgroup.com/ai-cybersecurity-monitor-pro"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer className="text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 mb-6">
            <Shield className="w-4 h-4 text-red-400 mr-2" />
            <span className="text-red-400 text-sm font-medium">AI-Powered Cybersecurity</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400">
              AI Cybersecurity Monitor Pro
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Protect your business with advanced AI-powered cybersecurity monitoring. Detect threats in real-time, 
            automate incident response, and ensure compliance with industry standards.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<Shield className="w-5 h-5" />}
            >
              Start Free Trial
            </FuturisticButton>
            <FuturisticButton
              href="/demo"
              variant="outline"
              size="lg"
              icon={<Monitor className="w-5 h-5" />}
            >
              Watch Demo
            </FuturisticButton>
          </div>

          {/* Security Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {securityMetrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-red-500/20 to-orange-500/20 flex items-center justify-center">
                  {metric.icon}
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">{metric.metric}</div>
                <div className="text-gray-300 text-sm">{metric.label}</div>
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
              Advanced Security Features
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Comprehensive cybersecurity protection powered by artificial intelligence and machine learning.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FuturisticCard key={index} className="group hover:scale-105 transition-transform duration-300">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-red-500/20 to-orange-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-red-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="text-red-400 font-semibold mb-4">
                    {feature.price}
                  </div>
                  <ul className="text-sm text-gray-400 space-y-1">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Threat Detection Performance */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-red-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Threat Detection Performance
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI-powered system delivers exceptional threat detection accuracy across all attack vectors.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {threatTypes.map((threat, index) => (
              <div key={index} className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-r from-red-500/20 to-orange-500/20 flex items-center justify-center">
                  <div className="text-2xl font-bold text-white">{threat.percentage}%</div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{threat.name}</h3>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full bg-gradient-to-r ${threat.color}`}
                    style={{ width: `${threat.percentage}%` }}
                  ></div>
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
              Choose Your Security Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flexible pricing options to secure your business at any scale.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border ${
                  plan.popular 
                    ? 'border-red-500/50 shadow-2xl shadow-red-500/10' 
                    : 'border-white/20'
                } hover:bg-white/20 transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-red-400 mb-2">
                    {plan.price}
                    <span className="text-lg text-gray-400 font-normal">/{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>
                
                <ul className="space-y-4 mb-8">
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
                  className="w-full"
                  icon={<ArrowRight className="w-5 h-5" />}
                >
                  Get Started
                </FuturisticButton>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-red-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by Security Professionals
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what security experts say about AI Cybersecurity Monitor Pro
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <FuturisticCard key={index} className="group hover:scale-105 transition-transform duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-600 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center bg-gradient-to-r from-red-900/30 to-orange-900/30 rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Secure Your Business Today
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Don't wait for a cyber attack. Protect your business with AI-powered cybersecurity monitoring.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <FuturisticButton
                href="/contact"
                variant="primary"
                size="lg"
                icon={<Shield className="w-5 h-5" />}
              >
                Start Free Trial
              </FuturisticButton>
              <FuturisticButton
                href="/demo"
                variant="outline"
                size="lg"
                icon={<Monitor className="w-5 h-5" />}
              >
                Schedule Demo
              </FuturisticButton>
            </div>
            
            <div className="mt-8 text-sm text-gray-400">
              No setup fees • 30-day free trial • Cancel anytime
            </div>
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default AICybersecurityMonitorProPage;
