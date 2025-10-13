import React from "react";
import { Link } from "react-router-dom";
import { Heart, Brain, Shield, Zap, Stethoscope, Activity, AlertTriangle, CheckCircle, Globe, Users } from "lucide-react";
import SEOOptimizer from "../components/SEOOptimizer";
import FuturisticCard from "../components/FuturisticCard";
import FuturisticButton from "../components/FuturisticButton";

const AiHealthcareDiagnosticsPage = () => {
  const features = [
    {
      title: "AI Medical Imaging",
      description: "Advanced computer vision analyzes X-rays, MRIs, and CT scans with 99.2% accuracy",
      icon: <Brain className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Predictive Analytics",
      description: "Machine learning algorithms predict health risks and disease progression",
      icon: <Activity className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Real-time Monitoring",
      description: "Continuous health monitoring with instant alerts for critical conditions",
      icon: <Heart className="w-6 h-6" />,
      color: "from-red-500 to-orange-500"
    },
    {
      title: "HIPAA Compliant",
      description: "Enterprise-grade security ensures complete patient data protection",
      icon: <Shield className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500"
    }
  ];

  const diagnosticCapabilities = [
    {
      specialty: "Cardiology",
      icon: <Heart className="w-8 h-8" />,
      description: "AI-powered heart disease detection and monitoring",
      accuracy: "99.4%",
      price: "From $299/month"
    },
    {
      specialty: "Radiology",
      icon: <Stethoscope className="w-8 h-8" />,
      description: "Advanced medical imaging analysis and interpretation",
      accuracy: "99.2%",
      price: "From $399/month"
    },
    {
      specialty: "Neurology",
      icon: <Brain className="w-8 h-8" />,
      description: "Brain scan analysis and neurological condition detection",
      accuracy: "98.8%",
      price: "From $499/month"
    },
    {
      specialty: "Oncology",
      icon: <AlertTriangle className="w-8 h-8" />,
      description: "Cancer detection and treatment response monitoring",
      accuracy: "99.1%",
      price: "From $599/month"
    }
  ];

  const pricingPlans = [
    {
      name: "Clinic Basic",
      price: "$999",
      period: "month",
      description: "Perfect for small clinics",
      features: [
        "Up to 100 patients/month",
        "Basic AI diagnostics",
        "Standard imaging analysis",
        "Email support",
        "Basic reporting",
        "HIPAA compliance"
      ],
      popular: false
    },
    {
      name: "Hospital Pro",
      price: "$2,999",
      period: "month",
      description: "Most popular for hospitals",
      features: [
        "Unlimited patients",
        "Advanced AI algorithms",
        "Multi-specialty support",
        "Priority support",
        "Advanced analytics",
        "Custom integrations",
        "24/7 monitoring",
        "Training included"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$9,999",
      period: "month",
      description: "For large healthcare systems",
      features: [
        "Multi-location support",
        "Custom AI models",
        "Dedicated support team",
        "White-label options",
        "Advanced security",
        "API access",
        "Custom development",
        "SLA guarantees"
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      title: "99.2% Accuracy",
      description: "Superior diagnostic accuracy compared to traditional methods",
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      title: "50% Faster",
      description: "Reduce diagnosis time and improve patient outcomes",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "Cost Effective",
      description: "Reduce healthcare costs while improving quality of care",
      icon: <Heart className="w-6 h-6" />
    },
    {
      title: "Global Access",
      description: "Bring advanced diagnostics to underserved areas",
      icon: <Globe className="w-6 h-6" />
    }
  ];

  const stats = [
    { number: "500K+", label: "Diagnoses Completed", icon: <Stethoscope className="w-6 h-6" /> },
    { number: "99.2%", label: "Diagnostic Accuracy", icon: <CheckCircle className="w-6 h-6" /> },
    { number: "1,200+", label: "Healthcare Partners", icon: <Users className="w-6 h-6" /> },
    { number: "50%", label: "Faster Diagnosis", icon: <Zap className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <SEOOptimizer
        title="AI Healthcare Diagnostics - Advanced Medical AI Technology | Zion Tech Group"
        description="Revolutionary AI-powered healthcare diagnostics with 99.2% accuracy. Medical imaging analysis, predictive analytics, and real-time monitoring for improved patient outcomes."
        keywords="AI healthcare diagnostics, medical AI, healthcare technology, medical imaging, predictive analytics, healthcare automation, medical diagnosis"
        canonical="https://ziontechgroup.com/ai-healthcare-diagnostics"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Heart className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">Medical AI Revolution</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              AI Healthcare Diagnostics
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Transform healthcare with our advanced AI diagnostic platform. Achieve 99.2% accuracy in medical imaging analysis, 
            predictive health analytics, and real-time patient monitoring. Improve patient outcomes while reducing costs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<Heart className="w-5 h-5" />}
            >
              Schedule Demo
            </FuturisticButton>
            <FuturisticButton
              href="#features"
              variant="outline"
              size="lg"
              icon={<Stethoscope className="w-5 h-5" />}
            >
              Learn More
            </FuturisticButton>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Advanced AI Diagnostic Features
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Cutting-edge AI technology revolutionizing healthcare diagnostics
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FuturisticCard
                key={index}
                className="group cursor-pointer"
                glowColor="cyan"
              >
                <div className="p-6">
                  <div
                    className={`w-16 h-16 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </FuturisticCard>
            ))}
          </div>
        </div>
      </section>

      {/* Diagnostic Capabilities Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Specialized Diagnostic Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              AI-powered diagnostics across multiple medical specialties
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {diagnosticCapabilities.map((capability, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {capability.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {capability.specialty}
                </h3>
                <p className="text-gray-300 text-sm mb-3 leading-relaxed">
                  {capability.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-cyan-400 font-medium text-sm">{capability.price}</span>
                  <span className="text-green-400 font-bold text-sm">{capability.accuracy}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why Choose AI Diagnostics?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Proven benefits for healthcare providers and patients
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Healthcare Pricing Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flexible pricing for healthcare organizations of all sizes
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border ${
                  plan.popular 
                    ? 'border-cyan-400/50 ring-2 ring-cyan-400/20' 
                    : 'border-white/20'
                } hover:bg-white/20 transition-all duration-300 hover:scale-105`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Healthcare?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join leading healthcare organizations using AI to improve patient outcomes and reduce costs. 
            Schedule a consultation to see how our technology can benefit your practice.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<Heart className="w-5 h-5" />}
            >
              Schedule Consultation
            </FuturisticButton>
            <FuturisticButton
              href="/demo"
              variant="outline"
              size="lg"
              icon={<Stethoscope className="w-5 h-5" />}
            >
              View Demo
            </FuturisticButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AiHealthcareDiagnosticsPage;