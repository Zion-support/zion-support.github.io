import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Ambulance, ArrowRight, Brain, CheckCircle, Heart, Hospital, Mail, Microscope, Phone, Pill, Play, Shield, Star, Stethoscope, UserCheck } from 'lucide-react';

const AIHealthcareSolutionsProPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI-Powered Diagnostics",
      description: "Advanced AI algorithms for accurate medical diagnosis and treatment recommendations.",
      benefits: ["Medical image analysis", "Symptom assessment", "Treatment suggestions", "Risk prediction"]
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Patient Monitoring",
      description: "Real-time patient monitoring with AI-powered alerts and health tracking.",
      benefits: ["Vital signs tracking", "Alert systems", "Health trends", "Remote monitoring"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Data Security",
      description: "HIPAA-compliant security measures to protect patient data and ensure privacy.",
      benefits: ["Data encryption", "Access controls", "Audit trails", "Compliance monitoring"]
    },
    {
      icon: <UserCheck className="w-8 h-8" />,
      title: "Patient Management",
      description: "Comprehensive patient management system with AI-powered insights and recommendations.",
      benefits: ["Patient profiles", "Medical history", "Appointment scheduling", "Treatment tracking"]
    },
    {
      icon: <Microscope className="w-8 h-8" />,
      title: "Research Tools",
      description: "Advanced research and analytics tools for medical professionals and researchers.",
      benefits: ["Data analysis", "Research insights", "Clinical trials", "Outcome prediction"]
    },
    {
      icon: <Stethoscope className="w-8 h-8" />,
      title: "Clinical Support",
      description: "AI-powered clinical decision support system for healthcare professionals.",
      benefits: ["Clinical guidelines", "Drug interactions", "Treatment protocols", "Best practices"]
    }
  ];

  const useCases = [
    {
      icon: <Hospital className="w-8 h-8" />,
      title: "Hospitals",
      description: "Complete AI healthcare solution for large medical facilities.",
      benefits: ["Patient management", "Staff coordination", "Resource optimization", "Quality assurance"]
    },
    {
      icon: <Ambulance className="w-8 h-8" />,
      title: "Emergency Care",
      description: "AI-powered emergency response and critical care management.",
      benefits: ["Rapid diagnosis", "Triage support", "Emergency protocols", "Life support"]
    },
    {
      icon: <Pill className="w-8 h-8" />,
      title: "Pharmacy",
      description: "Intelligent pharmacy management and medication optimization.",
      benefits: ["Drug interactions", "Dosage optimization", "Inventory management", "Patient safety"]
    },
    {
      icon: <UserCheck className="w-8 h-8" />,
      title: "Telemedicine",
      description: "Remote healthcare delivery with AI-powered virtual consultations.",
      benefits: ["Virtual consultations", "Remote monitoring", "Digital prescriptions", "Patient engagement"]
    }
  ];

  const pricingPlans = [
    {
      name: "Basic",
      description: "Essential AI healthcare tools for small practices",
      price: "$199",
      period: "month",
      features: [
        "Up to 50 patients",
        "Basic AI diagnostics",
        "Patient management",
        "Standard support"
      ],
      popular: false
    },
    {
      name: "Professional",
      description: "Advanced AI healthcare solution for medium practices",
      price: "$499",
      period: "month",
      features: [
        "Up to 200 patients",
        "Advanced AI features",
        "Real-time monitoring",
        "Priority support",
        "Custom integrations"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      description: "Complete AI healthcare platform for large institutions",
      price: "$999",
      period: "month",
      features: [
        "Unlimited patients",
        "All AI features",
        "24/7 support",
        "Custom development",
        "API access",
        "White-label options"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      content: "AI Healthcare Solutions Pro has revolutionized our diagnostic accuracy. We've seen a 40% improvement in early disease detection.",
      name: "Dr. Sarah Williams",
      role: "Chief Medical Officer",
      company: "Metro General Hospital",
      rating: 5
    },
    {
      content: "The patient monitoring system has been invaluable. We can now provide better care while reducing costs significantly.",
      name: "Dr. Michael Johnson",
      role: "Emergency Medicine Director",
      company: "City Medical Center",
      rating: 5
    },
    {
      content: "The AI-powered research tools have accelerated our clinical trials and improved patient outcomes dramatically.",
      name: "Dr. Emily Chen",
      role: "Research Director",
      company: "University Medical Center",
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Healthcare Solutions Pro - Advanced Medical AI Platform | Zion Tech Group</title>
        <meta name="description" content="Revolutionize healthcare with AI-powered diagnostics, patient monitoring, and medical research tools. Improve patient outcomes and reduce costs." />
        <meta name="keywords" content="AI healthcare, medical AI, healthcare technology, patient monitoring, medical diagnostics, healthcare automation" />
        <meta property="og:title" content="AI Healthcare Solutions Pro - Advanced Medical AI Platform" />
        <meta property="og:description" content="Revolutionize healthcare with AI-powered diagnostics, patient monitoring, and medical research tools." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Healthcare Solutions Pro - Advanced Medical AI Platform" />
        <meta name="twitter:description" content="Revolutionize healthcare with AI-powered diagnostics, patient monitoring, and medical research tools." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="h-full w-full" style={{
            backgroundImage: `
              linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        <main className="relative z-10">
          {/* Hero Section */}
          <section className="relative py-20 overflow-hidden">
            <div className="container mx-auto px-4">
              <div className={`text-center max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="inline-flex items-center px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-8">
                  <Star className="w-4 h-4 mr-2" />
                  #1 AI Healthcare Platform
                </div>
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                  <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    AI Healthcare Solutions Pro
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto">
                  Revolutionize healthcare with AI-powered diagnostics, patient monitoring, and medical research tools. 
                  Improve patient outcomes and reduce costs by 40%.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                  <a
                    href="tel:+13024640950"
                    className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center">
                    <Phone className="w-5 h-5 mr-2" />
                    Start Free Trial
                  </a>
                  <a
                    href="#demo"
                    className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center">
                    <Play className="w-5 h-5 mr-2" />
                    Watch Demo
                  </a>
                </div>
              </div>
            </div>
          </section>
          
          {/* Features Section */}
          <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900 relative">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Advanced Healthcare Features
                  </span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Everything you need to provide exceptional healthcare with AI-powered tools and intelligent automation.
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <div 
                    key={index} 
                    className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-400/40 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <div className="text-white">{feature.icon}</div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {feature.description}
                    </p>
                    <div className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          
          {/* Use Cases Section */}
          <section className="py-20 bg-slate-900">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Healthcare Solutions
                  </span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Our AI healthcare platform is designed for various medical settings and healthcare environments.
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {useCases.map((useCase, index) => (
                  <div 
                    key={index} 
                    className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-400/40 transition-all duration-300 hover:transform hover:scale-105">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                      <div className="text-white">{useCase.icon}</div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{useCase.title}</h3>
                    <p className="text-gray-300 mb-6">{useCase.description}</p>
                    <div className="space-y-2">
                      {useCase.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          
          {/* Pricing Section */}
          <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Flexible Pricing
                  </span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Choose the plan that fits your healthcare practice's needs and budget.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {pricingPlans.map((plan, index) => (
                  <div 
                    key={index} 
                    className={`relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border rounded-2xl p-8 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl ${
                      plan.popular 
                        ? 'border-cyan-400/40 shadow-cyan-500/10' 
                        : 'border-cyan-500/20 hover:border-cyan-400/40'
                    }`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                          Most Popular
                        </div>
                      </div>
                    )}
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                      <p className="text-gray-300 mb-4">{plan.description}</p>
                      <div className="flex items-baseline justify-center">
                        <span className="text-5xl font-bold text-cyan-400">{plan.price}</span>
                        <span className="text-gray-400 ml-2">/{plan.period}</span>
                      </div>
                    </div>
                    <div className="space-y-4 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    <a
                      href="tel:+13024640950"
                      className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                        plan.popular
                          ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                          : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                      }`}
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </section>
          
          {/* Testimonials Section */}
          <section className="py-20 bg-slate-900">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Healthcare Success Stories
                  </span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  See how healthcare institutions are improving patient outcomes with AI Healthcare Solutions Pro.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <div 
                    key={index} 
                    className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-400/40 transition-all duration-300">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      &ldquo;{testimonial.content}&rdquo;
                    </p>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-cyan-400">{testimonial.role}</div>
                      <div className="text-gray-400 text-sm">{testimonial.company}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          
          {/* CTA Section */}
          <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Ready to Transform Healthcare?
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Join leading healthcare institutions that are revolutionizing patient care with AI-powered solutions and intelligent automation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:+13024640950"
                    className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center">
                    <Phone className="w-5 h-5 mr-2" />
                    Call +1 302 464 0950
                  </a>
                  <a
                    href="mailto:kleber@ziontechgroup.com"
                    className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center">
                    <Mail className="w-5 h-5 mr-2" />
                    Get Free Trial
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default AIHealthcareSolutionsProPage;