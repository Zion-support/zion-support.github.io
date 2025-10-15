import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Heart, Brain, Shield, Clock, Users, CheckCircle, ArrowRight, Star, Zap, Activity } from 'lucide-react';

const AiHealthcareAssistantPage: React.FC = () => {
  const features = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Patient Monitoring",
      description: "Real-time health monitoring with AI-powered analysis of vital signs and symptoms",
      benefits: ["Continuous monitoring", "Early warning alerts", "Trend analysis", "Risk assessment"]
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Diagnosis Support",
      description: "AI-assisted diagnostic tools that help healthcare professionals make informed decisions",
      benefits: ["Symptom analysis", "Differential diagnosis", "Treatment recommendations", "Evidence-based insights"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Treatment Planning",
      description: "Personalized treatment plans based on patient data and medical best practices",
      benefits: ["Custom protocols", "Drug interactions", "Dosage optimization", "Follow-up scheduling"]
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: "Health Analytics",
      description: "Comprehensive health analytics and reporting for better patient outcomes",
      benefits: ["Population health insights", "Outcome predictions", "Resource optimization", "Quality metrics"]
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$179",
      period: "per month",
      description: "Perfect for small clinics and individual practitioners",
      features: [
        "Up to 100 patients",
        "Basic AI diagnostics",
        "Patient monitoring",
        "Email support",
        "Standard reporting"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$299",
      period: "per month",
      description: "Ideal for medium-sized healthcare facilities",
      features: [
        "Up to 500 patients",
        "Advanced AI diagnostics",
        "Real-time monitoring",
        "Treatment planning",
        "Priority support",
        "Custom integrations"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$499",
      period: "per month",
      description: "Comprehensive solution for large healthcare systems",
      features: [
        "Unlimited patients",
        "Full AI suite",
        "Advanced analytics",
        "Custom workflows",
        "24/7 support",
        "API access",
        "White-label options"
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: "Primary Care",
      description: "Streamline routine checkups and preventive care with AI-powered patient assessment tools",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Emergency Medicine",
      description: "Rapid triage and critical care decision support for emergency departments",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "Chronic Disease Management",
      description: "Continuous monitoring and management of chronic conditions like diabetes and hypertension",
      icon: <Heart className="w-6 h-6" />
    },
    {
      title: "Mental Health",
      description: "AI-assisted mental health screening and treatment planning for better patient outcomes",
      icon: <Brain className="w-6 h-6" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Healthcare Assistant - Zion Tech Group | Advanced Medical AI Solutions</title>
        <meta name="description" content="Revolutionary AI healthcare assistant with patient monitoring, diagnosis support, and treatment planning. Improve patient outcomes with cutting-edge medical AI technology." />
        <meta name="keywords" content="ai healthcare, medical ai, patient monitoring, diagnosis support, healthcare technology, medical software" />
        <meta property="og:title" content="AI Healthcare Assistant - Zion Tech Group" />
        <meta property="og:description" content="Advanced AI solutions for healthcare professionals" />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        {/* Hero Section */}
        <section className="py-20 relative z-10">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 relative">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  AI Healthcare Assistant
                </span>
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400/20 via-purple-400/20 to-pink-400/20 blur-lg opacity-75"></div>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Transform healthcare delivery with our advanced AI-powered assistant. 
                Enhance patient care, improve diagnostics, and streamline medical workflows.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25">
                  Start Free Trial
                </button>
                <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 relative z-10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Powerful AI Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive AI tools designed to enhance every aspect of healthcare delivery
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-md border border-cyan-500/30 rounded-2xl p-8 hover:border-cyan-400/60 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 relative overflow-hidden group">
                  <div className="text-cyan-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-6 group-hover:text-gray-200 transition-colors duration-300">
                    {feature.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-gray-300 text-sm group-hover:text-gray-200 transition-colors">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 bg-white/5 relative z-10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Healthcare Applications</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Versatile AI solutions for different healthcare specialties and settings
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-slate-800/40 rounded-xl p-6 text-center hover:bg-slate-700/40 transition-all duration-300 group">
                  <div className="text-cyan-400 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {useCase.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                    {useCase.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 relative z-10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Flexible Pricing Plans</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your healthcare facility
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-md border rounded-2xl p-8 relative overflow-hidden group ${
                  plan.popular ? 'border-cyan-500/60 ring-2 ring-cyan-500/20' : 'border-cyan-500/30'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="text-4xl font-bold text-cyan-400 mb-2">
                      {plan.price}
                      <span className="text-lg text-gray-400 font-normal">/{plan.period}</span>
                    </div>
                    <p className="text-gray-300">{plan.description}</p>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 hover:shadow-lg hover:shadow-cyan-500/25' 
                      : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                  }`}>
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative z-10">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-cyan-600/20 to-purple-600/20 rounded-2xl p-12 text-center relative overflow-hidden backdrop-blur-sm border border-cyan-500/30">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 animate-pulse"></div>
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-cyan-500/10 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-500/10 rounded-full blur-2xl"></div>
              
              <div className="relative z-10">
                <h2 className="text-4xl font-bold text-white mb-6 relative">
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Ready to Transform Healthcare?
                  </span>
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400/10 to-purple-400/10 blur-sm"></div>
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                  Join leading healthcare providers who are already using our AI assistant to improve patient outcomes and streamline operations.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 relative overflow-hidden group">
                    <span className="relative z-10">Start Free Trial</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                  <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/25 relative overflow-hidden group">
                    <span className="relative z-10">Contact Sales</span>
                    <div className="absolute inset-0 bg-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AiHealthcareAssistantPage;