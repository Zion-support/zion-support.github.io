import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Heart, Zap, Shield, Brain, CheckCircle, ArrowRight, Star, Phone, Mail, Play, BarChart3, Stethoscope, Pill, Microscope, UserCheck, Ambulance, Shield as ShieldIcon, Star, Shield, BarChart3 } from 'lucide-react';

const AiHealthcareSolutionsProPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI-Powered Diagnostics",
      description: "Advanced AI algorithms that analyze medical images, lab results, and patient data to provide accurate diagnostic insights and early disease detection.",
      benefits: ["Medical imaging analysis", "Lab result interpretation", "Early detection", "Diagnostic accuracy"]
    },
    {
      icon: <Stethoscope className="w-6 h-6" />,
      title: "Telemedicine Platform",
      description: "Comprehensive telemedicine solution with AI-powered patient monitoring, virtual consultations, and remote health assessments.",
      benefits: ["Virtual consultations", "Remote monitoring", "AI triage", "Patient management"]
    },
    {
      icon: <Pill className="w-6 h-6" />,
      title: "Drug Discovery & Development",
      description: "AI-driven drug discovery platform that accelerates pharmaceutical research and development with predictive modeling and molecular analysis.",
      benefits: ["Molecular analysis", "Drug interaction prediction", "Clinical trial optimization", "Side effect prediction"]
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "HIPAA-Compliant Security",
      description: "Enterprise-grade security with full HIPAA compliance, data encryption, and privacy protection for sensitive healthcare information.",
      benefits: ["HIPAA compliance", "Data encryption", "Privacy protection", "Audit trails"]
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Predictive Analytics",
      description: "Advanced predictive analytics that forecast patient outcomes, identify high-risk patients, and optimize treatment plans.",
      benefits: ["Outcome prediction", "Risk stratification", "Treatment optimization", "Population health"]
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Workflow Automation",
      description: "Intelligent automation that streamlines healthcare workflows, reduces administrative burden, and improves operational efficiency.",
      benefits: ["Appointment scheduling", "Billing automation", "Documentation", "Resource optimization"]
    }
  ];

  const pricingPlans = [
    {
      name: "Clinic",
      price: "$299",
      period: "month",
      description: "Perfect for small clinics and private practices",
      features: [
        "Basic AI diagnostics",
        "Up to 100 patients",
        "Telemedicine platform",
        "Basic analytics",
        "Email support",
        "Standard security"
      ],
      popular: false
    },
    {
      name: "Hospital",
      price: "$799",
      period: "month",
      description: "Comprehensive solution for hospitals and healthcare systems",
      features: [
        "Advanced AI diagnostics",
        "Unlimited patients",
        "Full telemedicine suite",
        "Predictive analytics",
        "Priority support",
        "HIPAA compliance",
        "Custom integrations",
        "24/7 monitoring"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$1,499",
      period: "month",
      description: "Complete solution for large healthcare organizations",
      features: [
        "Full AI suite",
        "Multi-location support",
        "Custom development",
        "Dedicated support team",
        "Advanced security",
        "White-label options",
        "API access",
        "On-premise deployment"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Johnson",
      company: "Regional Medical Center",
      role: "Chief Medical Officer",
      content: "AI Healthcare Solutions Pro has revolutionized our diagnostic accuracy. We've seen a 40% improvement in early disease detection and reduced misdiagnosis by 60%.",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "City Health Clinic",
      role: "Medical Director",
      content: "The telemedicine platform and AI-powered patient monitoring have transformed our patient care. We can now provide better care to more patients efficiently.",
      rating: 5
    },
    {
      name: "Dr. Lisa Rodriguez",
      company: "University Hospital",
      role: "Head of Research",
      content: "The drug discovery platform has accelerated our research by 3x. The AI predictions have been remarkably accurate in identifying promising drug candidates.",
      rating: 5
    }
  ];

  const useCases = [
    {
      title: "Radiology & Imaging",
      description: "AI-powered analysis of X-rays, MRIs, CT scans, and ultrasounds for accurate diagnosis",
      icon: <Microscope className="w-8 h-8" />,
      benefits: ["Image analysis", "Tumor detection", "Fracture identification", "Contrast enhancement"]
    },
    {
      title: "Emergency Medicine",
      description: "AI triage systems and real-time patient monitoring for emergency departments",
      icon: <Ambulance className="w-8 h-8" />,
      benefits: ["Triage automation", "Vital sign monitoring", "Alert systems", "Resource allocation"]
    },
    {
      title: "Chronic Disease Management",
      description: "AI-powered monitoring and management of diabetes, hypertension, and other chronic conditions",
      icon: <Heart className="w-8 h-8" />,
      benefits: ["Continuous monitoring", "Medication adherence", "Lifestyle tracking", "Early intervention"]
    },
    {
      title: "Mental Health",
      description: "AI-powered mental health assessment, therapy support, and patient monitoring",
      icon: <UserCheck className="w-8 h-8" />,
      benefits: ["Mood analysis", "Therapy recommendations", "Crisis detection", "Progress tracking"]
    }
  ];

  const compliance = [
    { name: "HIPAA", description: "Health Insurance Portability and Accountability Act" },
    { name: "FDA", description: "Food and Drug Administration compliance" },
    { name: "SOC 2", description: "Security and availability controls" },
    { name: "ISO 27001", description: "Information security management" },
    { name: "GDPR", description: "General Data Protection Regulation" },
    { name: "HITECH", description: "Health Information Technology Act" }
  ];

  return (
    <>
      <Helmet>
        <title>AI Healthcare Solutions Pro - Intelligent Healthcare Platform | Zion Tech Group</title>
        <meta name="description" content="Transform healthcare with AI-powered diagnostics, telemedicine, and predictive analytics. HIPAA-compliant solutions that improve patient outcomes and reduce costs." />
        <meta name="keywords" content="AI healthcare, medical diagnostics, telemedicine, drug discovery, HIPAA compliance, healthcare analytics, medical AI" />
        <meta property="og:title" content="AI Healthcare Solutions Pro - Zion Tech Group" />
        <meta property="og:description" content="Intelligent healthcare platform with AI-powered diagnostics and telemedicine capabilities" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-healthcare-solutions-pro" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
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
                  Revolutionize healthcare with AI-powered diagnostics, telemedicine, and predictive analytics. 
                  HIPAA-compliant solutions that improve patient outcomes and reduce costs by 30%.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                  <a
                    href="tel:+13024640950"
                    className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Start Free Trial
                  </a>
                  <a
                    href="#demo"
                    className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
                  >
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
                  Everything you need to transform healthcare delivery with AI-powered solutions and intelligent automation.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <div 
                    key={index} 
                    className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-400/40 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 neon-card"
                  >
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
                    Medical Specializations
                  </span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Our AI healthcare solutions are designed for various medical specialties and healthcare settings.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {useCases.map((useCase, index) => (
                  <div 
                    key={index} 
                    className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-400/40 transition-all duration-300 hover:transform hover:scale-105"
                  >
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

          {/* Compliance Section */}
          <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Healthcare Compliance
                  </span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Our platform meets all major healthcare compliance standards and regulations.
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {compliance.map((item, index) => (
                  <div 
                    key={index} 
                    className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 text-center hover:border-cyan-400/40 transition-all duration-300 hover:transform hover:scale-105"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <ShieldIcon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-white font-semibold mb-2">{item.name}</div>
                    <div className="text-cyan-400 text-sm">{item.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section className="py-20 bg-slate-900">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Flexible Pricing
                  </span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Choose the plan that fits your healthcare organization's needs and budget.
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
          <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Healthcare Success Stories
                  </span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  See how healthcare organizations are improving patient care with AI Healthcare Solutions Pro.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <div 
                    key={index} 
                    className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-400/40 transition-all duration-300"
                  >
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
          <section className="py-20 bg-slate-900">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Ready to Transform Healthcare?
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Join leading healthcare organizations that are revolutionizing patient care with AI-powered solutions and intelligent automation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:+13024640950"
                    className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call +1 302 464 0950
                  </a>
                  <a
                    href="mailto:kleber@ziontechgroup.com"
                    className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
                  >
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

export default AiHealthcareSolutionsProPage;