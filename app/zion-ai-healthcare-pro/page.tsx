import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Heart, Brain, Shield, BarChart3, Users, Zap, CheckCircle, Star, ArrowRight, Stethoscope, Activity, Pill } from 'lucide-react';
import { Link } from 'react-router-dom';
import ResponsiveContainer from '../components/ResponsiveContainer';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';

const ZionAIHealthcareProPage = () => {
  const features = [
    {
      title: "AI Medical Diagnosis",
      description: "Advanced AI algorithms for accurate medical diagnosis using patient data, symptoms, and medical history",
      icon: <Stethoscope className="w-8 h-8" />,
      benefits: ["95% accuracy rate", "Real-time diagnosis", "Multi-specialty support"]
    },
    {
      title: "Predictive Health Analytics",
      description: "Predict potential health issues before they occur using machine learning and patient data analysis",
      icon: <Activity className="w-8 h-8" />,
      benefits: ["Early detection", "Risk assessment", "Preventive care"]
    },
    {
      title: "Drug Interaction Checker",
      description: "AI-powered system to check for dangerous drug interactions and suggest safer alternatives",
      icon: <Pill className="w-8 h-8" />,
      benefits: ["Safety first", "Real-time checking", "Comprehensive database"]
    },
    {
      title: "Patient Management System",
      description: "Comprehensive patient management with AI-powered scheduling, reminders, and treatment tracking",
      icon: <Users className="w-8 h-8" />,
      benefits: ["Automated scheduling", "Treatment tracking", "Patient engagement"]
    }
  ];

  const pricing = [
    {
      name: "Healthcare Starter",
      price: "$299",
      period: "per month",
      description: "Basic AI healthcare tools for small practices",
      features: [
        "Up to 100 patients",
        "Basic AI diagnosis",
        "Drug interaction checker",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Healthcare Professional",
      price: "$799",
      period: "per month",
      description: "Advanced AI healthcare for medium practices",
      features: [
        "Up to 500 patients",
        "Advanced AI diagnosis",
        "Predictive analytics",
        "Priority support",
        "API access"
      ],
      popular: true
    },
    {
      name: "Healthcare Enterprise",
      price: "$1,999",
      period: "per month",
      description: "Complete AI healthcare solution for large hospitals",
      features: [
        "Unlimited patients",
        "Full AI suite",
        "Custom integrations",
        "Dedicated support",
        "White-label options"
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: "Primary Care",
      description: "AI-assisted diagnosis and treatment planning for primary care physicians",
      icon: <Heart className="w-6 h-6" />
    },
    {
      title: "Specialist Referrals",
      description: "Intelligent patient referral system with AI-powered specialist matching",
      icon: <Brain className="w-6 h-6" />
    },
    {
      title: "Emergency Medicine",
      description: "Rapid AI diagnosis and triage for emergency room situations",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "Chronic Disease Management",
      description: "AI-powered monitoring and management of chronic conditions",
      icon: <Activity className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Zion AI Healthcare Pro | Advanced Medical AI Solutions</title>
        <meta name="description" content="Revolutionary AI-powered healthcare solutions. Medical diagnosis, predictive analytics, drug interaction checking, and patient management." />
        <meta name="keywords" content="AI healthcare, medical AI, healthcare software, medical diagnosis, healthcare analytics, patient management" />
        <link rel="canonical" href="https://ziontechgroup.com/zion-ai-healthcare-pro" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer className="text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-cyan-500/20 border border-green-500/30 mb-6">
            <Heart className="w-4 h-4 text-green-400 mr-2" />
            <span className="text-green-400 text-sm font-medium">AI-Powered Healthcare</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-cyan-400 to-purple-400">
              Zion AI Healthcare Pro
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Transform healthcare delivery with AI-powered medical diagnosis, predictive analytics, 
            and intelligent patient management systems.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<Heart className="w-5 h-5" />}
            >
              Start Free Trial
            </FuturisticButton>
            <FuturisticButton
              href="#features"
              variant="outline"
              size="lg"
              icon={<BarChart3 className="w-5 h-5" />}
            >
              Explore Features
            </FuturisticButton>
          </div>
        </ResponsiveContainer>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              AI Healthcare Features
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Comprehensive AI-powered healthcare solutions designed to improve patient outcomes 
              and streamline medical practice operations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FuturisticCard key={index} className="group">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-green-500 to-cyan-500 flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 text-center group-hover:text-green-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-center mb-6 leading-relaxed">
                  {feature.description}
                </p>
                <div className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center text-sm text-cyan-400">
                      <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-green-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Healthcare Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how AI is revolutionizing healthcare across different specialties
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-green-500 to-cyan-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {useCase.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-green-400 transition-colors">
                  {useCase.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {useCase.description}
                </p>
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
              Healthcare AI Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect healthcare AI solution for your practice
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricing.map((plan, index) => (
              <div key={index} className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                plan.popular 
                  ? 'border-green-500/50 shadow-2xl shadow-green-500/25' 
                  : 'border-white/20 hover:border-green-500/30'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-green-500 to-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300 ml-2">{plan.period}</span>
                  </div>
                  <p className="text-gray-300 text-sm">{plan.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-900/30 to-cyan-900/30">
        <ResponsiveContainer className="text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Healthcare?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
            Join thousands of healthcare professionals already using our AI solutions to improve 
            patient care and streamline operations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<Heart className="w-5 h-5" />}
            >
              Start Free Trial
            </FuturisticButton>
            <FuturisticButton
              href="/micro-saas-services"
              variant="outline"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              View All Solutions
            </FuturisticButton>
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default ZionAIHealthcareProPage;