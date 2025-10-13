import { ArrowRight, CheckCircle, Globe , Helmet  } from "lucide-react";
import { Link } from "react-router-dom";
export default function AIHealthcareDiagnostics() {
  const useCases = [
    {
      title: "Radiology Departments",
      description: "Accelerate image analysis and improve diagnostic accuracy in radiology departments",
      impact: "40% faster diagnosis, 30% reduction in misdiagnosis"
    },
    {
      title: "Emergency Rooms",
      description: "Rapid triage and critical condition identification in emergency settings",
      impact: "50% faster triage, 25% improvement in critical case detection"
    },
    {
      title: "Primary Care",
      description: "Support general practitioners with comprehensive diagnostic assistance",
      impact: "60% more accurate initial diagnoses, 35% reduction in referrals"
    },
    {
      title: "Specialist Clinics",
      description: "Enhance specialist care with AI-powered diagnostic support and monitoring",
      impact: "45% improvement in treatment outcomes, 20% cost reduction"
    }
  ];
  const pricing = [
    {
      plan: "Starter",
      price: "$499/month",
      description: "Perfect for small clinics and private practices",
      features: ["Up to 100 patients/month", "Basic imaging analysis", "Symptom assessment", "Email support"],
      popular: false;
    },
    {
      plan: "Professional",
      price: "$999/month",
      description: "Ideal for medium-sized hospitals and medical centers",
      features: ["Up to 500 patients/month", "Advanced imaging analysis", "Drug interaction checking", "Predictive analytics", "Priority support"],
      popular: true;
    },
    {
      plan: "Enterprise",
      price: "Custom Pricing",
      description: "Comprehensive solution for large healthcare systems",
      features: ["Unlimited patients", "Full AI suite", "Custom integrations", "Dedicated support", "Training & consultation"],
      popular: false;
    }
  ];
  return (
    <React.Fragment /><Helmet /><title>AI Healthcare Diagnostics - Zion Tech Group | Medical AI Solutions</title>
        <meta;
          name="description"
          content="Revolutionary AI-powered medical diagnostics with image analysis, symptom assessment, and treatment recommendations. Improve patient outcomes with 99.2% accuracy."
        />
        <meta;
          name="keywords"
          content="AI healthcare, medical diagnostics, medical imaging, symptom analysis, drug interactions, predictive analytics, healthcare AI, medical AI"
        />
        <link rel="canonical" href="https://ziontechgroup.com/ai-healthcare-diagnostics" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background Elements */}
        </div><div className="absolute inset-0 overflow-hidden" /><div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-rose-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10" /><div className="max-w-7xl mx-auto text-center" /><div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-rose-500/20 to-pink-500/20 border border-rose-500/30 mb-6" /><Sparkles className="w-4 h-4 text-rose-400 mr-2" />
              <span className="text-rose-400 text-sm font-medium">99.2% Diagnostic Accuracy</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              AI Healthcare;
              </h1><span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-pink-400 to-purple-400 animate-pulse">
                {" "}Diagnostics</span>
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Revolutionize healthcare with AI-powered medical diagnostics. Advanced image analysis, 
              symptom assessment, and treatment recommendations that improve patient outcomes and reduce costs.</p>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16" /><Link;
                to="/contact"
                className="bg-gradient-to-r from-rose-500 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-rose-600 hover:to-pink-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-rose-500/25 hover:scale-105"
              >
                Schedule Demo;
                </Link><ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link;
                to="/consultation"
                className="border border-rose-400 text-rose-400 px-8 py-4 rounded-lg font-semibold hover:bg-rose-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Free Consultation;
                </Link><Sparkles className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10" /><div className="max-w-7xl mx-auto" /><div className="text-center mb-16" /><h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Advanced AI Features</h2>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Our AI healthcare diagnostics platform combines cutting-edge machine learning with medical expertise ;
                to deliver accurate, fast, and reliable diagnostic support.</p>
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                </div><div;
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-rose-500/10 relative overflow-hidden"
                 /><div className="flex items-start space-x-4" /><div className="w-12 h-12 rounded-lg bg-gradient-to-r from-rose-500 to-pink-500 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      {feature.icon}</div>
                    </div>
                    <div className="flex-1" /><h3 className="text-xl font-semibold text-white mb-3 group-hover:text-rose-300 transition-colors">
                        {feature.title}</h3>
                      </h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        {feature.description}</p>
                      </p>
                      <div className="space-y-2">
                        {feature.benefits.map((benefit, idx) => (
                          </div><div key={idx} className="flex items-center text-sm text-gray-300" /><CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            <span>{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Use Cases Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50" /><div className="max-w-7xl mx-auto" /><div className="text-center mb-16" /><h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Healthcare Use Cases</h2>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transform healthcare delivery across different medical settings with our AI-powered diagnostic solutions.</p>
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                </div><div;
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-rose-500/10 relative overflow-hidden"
                 /><h3 className="text-lg font-semibold text-white mb-3 group-hover:text-rose-300 transition-colors">
                    {useCase.title}</h3>
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {useCase.description}</p>
                  </p>
                  <div className="text-rose-400 text-sm font-medium">
                    {useCase.impact}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10" /><div className="max-w-7xl mx-auto" /><div className="text-center mb-16" /><h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Flexible Pricing Plans</h2>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your healthcare organization's needs and budget.</p>
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricing.map((plan, index) => (
                </div><div;
                  key={index}
                  className={`group bg-white/10 backdrop-blur-sm rounded-xl p-6 border transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-rose-500/10 relative overflow-hidden ${
                    plan.popular ;
                      ? 'border-rose-500/50 bg-gradient-to-br from-rose-500/10 to-pink-500/10' 
                      : 'border-white/20 hover:bg-white/20'
                  }`}
                >
                  {plan.popular && (
                    </div><div className="absolute top-4 right-4" /><span className="bg-gradient-to-r from-rose-400 to-pink-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                        POPULAR</span>
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-6" /><h3 className="text-xl font-semibold text-white mb-2">{plan.plan}</h3>
                    <div className="text-3xl font-bold text-rose-400 mb-2">{plan.price}</div>
                    <p className="text-gray-300 text-sm">{plan.description}</p>
                  </div>
                  <div className="space-y-3 mb-6">
                    {plan.features.map((feature, idx) => (
                      </div><div key={idx} className="flex items-center text-sm text-gray-300" /><CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="text-center" /><Link;
                      to="/contact"
                      className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 group ${
                        plan.popular;
                          ? 'bg-gradient-to-r from-rose-500 to-pink-600 text-white hover:from-rose-600 hover:to-pink-700 shadow-lg hover:shadow-rose-500/25'
                          : 'border border-rose-400 text-rose-400 hover:bg-rose-400 hover:text-slate-900'
                      }`}
                    >
                      Get Started;
                      </Link><ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
'use client';
import React from 'react';
import { Helmet , ArrowRight, CheckCircle, Star, Users, Zap, Shield, Brain, Globe, Database, Cpu, Target, BarChart, FileText, MessageCircle, Heart, DollarSign, Box, Monitor, Link as LinkIcon, Server, Package, Mic, Workflow, Eye, Wifi, MessageSquare, CheckSquare, ShoppingCart, Settings, Calendar, TrendingUp, Lock  } from "react-helmet-async";
const AiHealthcareDiagnosticsPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'Advanced Technology',
      description: 'Cutting-edge solutions powered by the latest technology and AI.'
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Optimized for speed and efficiency with real-time processing capabilities.'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with end-to-end encryption and compliance standards.'
    },
    {
      icon: Globe,
      title: 'Global Scalability',
      description: 'Scale effortlessly across multiple regions with automatic load balancing.'
    }
  ];
  const benefits = [
    'Increased efficiency by up to 300%',
    'Reduced operational costs',
    'Enhanced decision-making capabilities',
    '24/7 monitoring and support',
    'Easy integration with existing systems',
    'Proven ROI within 90 days'
  ];
  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechCorp Inc.',
      role: 'CTO',
      content: 'This aihealthcarediagnostics solution transformed our operations completely. Highly recommended!',
      rating: 5;
    },
    {
      name: 'Michael Chen',
      company: 'DataFlow Systems',
      role: 'CEO',
      content: 'The performance improvements we\'ve seen are remarkable. Excellent service!',
      rating: 5;
    }
  ];
  const getGradientColors = () => {
    switch(serviceType) {
      case 'ai': return 'from-cyan-400 to-purple-400';
      case 'it': return 'from-purple-400 to-pink-400';
      case 'microsaas': return 'from-green-400 to-emerald-400';
      default: return 'from-cyan-400 to-purple-400';
    }
  };
  const getButtonColors = () => {
    switch(serviceType) {
      case 'ai': return 'from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600';
      case 'it': return 'from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600';
      case 'microsaas': return 'from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600';
      default: return 'from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600';
    }
  };
  const getIconColors = () => {
    switch(serviceType) {
      case 'ai': return 'from-cyan-500 to-blue-600';
      case 'it': return 'from-purple-500 to-pink-600';
      case 'microsaas': return 'from-green-500 to-emerald-600';
      default: return 'from-cyan-500 to-blue-600';
    }
  };
  return (
    <>
      <Helmet /><title>AiHealthcareDiagnostics - Zion Tech Group | AI Solutions</title>
        <meta name="description" content="Professional aihealthcarediagnostics services by Zion Tech Group. Transform your business with cutting-edge solutions." />
        <meta name="keywords" content="aihealthcarediagnostics, ai solutions, business automation, Zion Tech Group" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        </div><div className="pt-20 pb-16 px-4" /><div className="max-w-7xl mx-auto" /><div className="text-center mb-16" /><h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                AiHealthcareDiagnostics </h1><span className={"bg-gradient-to-r " + getGradientColors() + " bg-clip-text text-transparent"}>Solutions</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Transform your business with our advanced aihealthcarediagnostics services. 
                Leverage cutting-edge technology to drive growth and efficiency.</p>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center" /><button className={"bg-gradient-to-r " + getButtonColors() + " text-white px-8 py-4 rounded-lg font-bold transition-all duration-300 flex items-center justify-center gap-2"}>
                  Get Started Today;
                  </button><ArrowRight className="w-5 h-5" />
                </button>
                <button className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-bold hover:bg-cyan-500/10 transition-all duration-300">
                  View Case Studies</button>
                </button>
              </div>
            </div>
            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {features.map((feature, index) => (
                </div><div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 text-center" /><div className={"w-16 h-16 bg-gradient-to-r " + getIconColors() + " rounded-2xl flex items-center justify-center mx-auto mb-4"} /><feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
            {/* Benefits Section */}
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 mb-16" /><h2 className="text-3xl font-bold text-white mb-8 text-center">Why Choose Our AiHealthcareDiagnostics Services?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  </div><div key={index} className="flex items-start space-x-3" /><CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                    <p className="text-gray-300">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* Testimonials */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {testimonials.map((testimonial, index) => (
                </div><div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10" /><div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      </div><Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                  <div /><p className="text-white font-semibold">{testimonial.name}</p>
                  </div>
                </div>
              ))}
            </div>
{/* CTA Section */}
            <div className="bg-gradient-to-r from-cyan-900 to-purple-900 rounded-2xl p-8 text-center" /><h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Contact our experts today and discover how our aihealthcarediagnostics solutions can drive your success.</p>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center" /><button className={"bg-gradient-to-r " + getButtonColors() + " text-white px-8 py-4 rounded-lg font-bold transition-all duration-300 flex items-center justify-center gap-2"}>
                  Schedule Consultation;
                  </button><ArrowRight className="w-5 h-5" />
                </button>
                <button className="border border-white/30 text-white px-8 py-4 rounded-lg font-bold hover:bg-white/10 transition-all duration-300">
                  Download Brochure</button>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
;