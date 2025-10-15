import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Heart, Stethoscope, Activity, Shield, Clock, Users, CheckCircle, ArrowRight, Star } from 'lucide-react';

const AiHealthcareAssistantPage: React.FC = () => {
  const features = [
    {
      title: "Patient Monitoring",
      description: "24/7 real-time monitoring of vital signs and health metrics",
      icon: <Activity className="w-6 h-6" />,
      benefits: ["Continuous monitoring", "Early warning alerts", "Trend analysis", "Remote patient care"]
    },
    {
      title: "Diagnosis Support",
      description: "AI-powered diagnostic assistance and symptom analysis",
      icon: <Stethoscope className="w-6 h-6" />,
      benefits: ["Symptom checker", "Differential diagnosis", "Risk assessment", "Treatment recommendations"]
    },
    {
      title: "Treatment Planning",
      description: "Personalized treatment plans based on patient data and medical history",
      icon: <Heart className="w-6 h-6" />,
      benefits: ["Personalized care", "Drug interaction checks", "Dosage optimization", "Follow-up scheduling"]
    },
    {
      title: "Data Security",
      description: "HIPAA-compliant data protection and privacy measures",
      icon: <Shield className="w-6 h-6" />,
      benefits: ["HIPAA compliance", "Data encryption", "Secure storage", "Access controls"]
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$179",
      period: "/month",
      description: "Perfect for small practices",
      features: [
        "Up to 100 patients",
        "Basic monitoring",
        "Email support",
        "Standard reports"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$299",
      period: "/month",
      description: "Ideal for growing practices",
      features: [
        "Up to 500 patients",
        "Advanced AI diagnostics",
        "Priority support",
        "Custom integrations",
        "Advanced analytics"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$499",
      period: "/month",
      description: "For large healthcare systems",
      features: [
        "Unlimited patients",
        "Full AI suite",
        "24/7 support",
        "Custom development",
        "White-label options"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Johnson",
      role: "Chief Medical Officer",
      company: "MedTech Solutions",
      content: "The AI Healthcare Assistant has revolutionized our patient care. The diagnostic accuracy and monitoring capabilities are outstanding.",
      rating: 5
    },
    {
      name: "Dr. Michael Chen",
      role: "Family Physician",
      company: "City Health Clinic",
      content: "This tool has significantly improved our efficiency and patient outcomes. The AI recommendations are incredibly accurate.",
      rating: 5
    },
    {
      name: "Dr. Emily Rodriguez",
      role: "Internal Medicine",
      company: "Regional Medical Center",
      content: "The predictive analytics help us catch potential issues before they become serious problems. Highly recommended.",
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Healthcare Assistant - Zion Tech Group | Advanced Medical AI Solutions</title>
        <meta name="description" content="Revolutionary AI-powered healthcare assistant for patient monitoring, diagnosis support, and treatment planning. HIPAA-compliant and designed for modern healthcare providers." />
        <meta name="keywords" content="ai healthcare, medical ai, patient monitoring, diagnosis support, healthcare technology, medical software, HIPAA compliant" />
        <meta property="og:title" content="AI Healthcare Assistant - Zion Tech Group" />
        <meta property="og:description" content="Advanced AI healthcare solutions for modern medical practices" />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Healthcare Assistant</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Transform patient care with our advanced AI-powered healthcare assistant. 
                Monitor patients, support diagnoses, and optimize treatment plans with cutting-edge artificial intelligence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                  Start Free Trial
                </button>
                <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Powerful Healthcare AI Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive AI solutions designed to enhance patient care and streamline medical workflows
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-cyan-500/40 transition-all duration-300 group">
                  <div className="text-cyan-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-6">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Choose Your Plan</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Flexible pricing options designed for healthcare providers of all sizes
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-cyan-500/40 transition-all duration-300 relative ${plan.popular ? 'ring-2 ring-cyan-500 scale-105' : ''}`}>
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
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-300 ml-2">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700' 
                      : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white'
                  }`}>
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Trusted by Healthcare Professionals</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what medical professionals are saying about our AI Healthcare Assistant
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-cyan-500/40 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-cyan-400 text-sm">{testimonial.role}</div>
                    <div className="text-gray-400 text-sm">{testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-cyan-600 to-purple-600 rounded-2xl p-12 text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Healthcare?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Join thousands of healthcare providers already using our AI Healthcare Assistant to improve patient outcomes and streamline operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-cyan-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300">
                  Start Free Trial
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AiHealthcareAssistantPage;